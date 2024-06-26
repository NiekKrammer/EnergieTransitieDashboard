import { data } from './data.js';

document.addEventListener("DOMContentLoaded", function () {
  const chartTypeSelect = document.querySelector(".chartTypeSelect");
  const addChartButton = document.querySelector(".addChartBtn");
  const chartContainer = document.querySelector(".chartContainer");
  const chartTemplate = document.querySelector(".chartTemplate");

  // Create a new chart
  function createChart(chartType, data, id) {
    const chartDiv = chartTemplate.content.cloneNode(true);
    const card = chartDiv.querySelector(".card");
    const canvas = chartDiv.querySelector("canvas");
    const removeButton = chartDiv.querySelector(".removeButton");
    const chartTypeSelectCard = chartDiv.querySelector(".chartTypeSelectCard");

    card.dataset.id = id; // Assign a unique ID to each card

    const ctx = canvas.getContext("2d");

    removeButton.addEventListener("click", function (event) {
      event.stopPropagation();

      const container = removeButton.closest(".card");
      if (container) {
        const id = container.dataset.id;

        // Remove the headingText from local storage if it exists
        localStorage.removeItem(`headingText-${id}`);
        // Remove the card from the DOM
        chartContainer.removeChild(container);

        // Remove the chart data and width from local storage
        removeChartData(id);
        localStorage.removeItem(`card-width-${id}`);
      } else {
        console.error("Container not found");
      }
    });

    // Prevent the select element from removing on click
    chartTypeSelectCard.addEventListener("click", function (event) {
      event.stopPropagation();
    });

    chartContainer.appendChild(chartDiv);

    new Chart(ctx, {
      type: chartType,
      data: data,
      options: {},
    });

    // Load card width from localStorage
    const savedWidth = localStorage.getItem(`card-width-${id}`);
    if (savedWidth) {
      card.style.width = savedWidth + "px";
    }

    // Attach resize event listeners
    attachResizeEventListeners(card, id);
  }

  // Function to remove chart data from localStorage
  function removeChartData(id) {
    let chartsData = JSON.parse(localStorage.getItem("chartsData")) || {};
    delete chartsData[id];
    localStorage.setItem("chartsData", JSON.stringify(chartsData));
  }

  // Function to load saved chart data from localStorage
  function loadCharts() {
    const chartsData = JSON.parse(localStorage.getItem("chartsData"));
    chartContainer.innerHTML = ""; // Clear existing charts
    if (chartsData) {
      Object.keys(chartsData).forEach((id) => {
        const { chartType, data } = chartsData[id];
        createChart(chartType, data, id);
      });
    }
  }

  // Add charts
  addChartButton.addEventListener("click", function () {
    const selectedValue = chartTypeSelect.value;
    let chartTitle = '';
    let chartData = [];

    switch (selectedValue) {
      case "spanning_zonnepanelen":
        chartTitle = data[0]["Uren"];
        chartData = Object.keys(data[0])
          .filter(key => key !== "Uren" && key !== "")
          .map(key => parseFloat(data[0][key]));
        break;
      case "stroom_zonnepanelen":
        chartTitle = data[1]["Uren"];
        chartData = Object.keys(data[1])
          .filter(key => key !== "Uren" && key !== "")
          .map(key => parseFloat(data[1][key]));
        break;
      case "spanning_accu":
        chartTitle = data[2]["Uren"];
        chartData = Object.keys(data[2])
          .filter(key => key !== "Uren" && key !== "")
          .map(key => parseFloat(data[2][key]));
        break;
      case "spanning_gebruikers":
        chartTitle = data[3]["Uren"];
        chartData = Object.keys(data[3])
          .filter(key => key !== "Uren" && key !== "")
          .map(key => parseFloat(data[3][key]));
        break;
      case "stroom_gebruikers":
        chartTitle = data[4]["Uren"];
        chartData = Object.keys(data[4])
          .filter(key => key !== "Uren" && key !== "")
          .map(key => parseFloat(data[4][key]));
        break;
      case "spanning_supercap_accu":
        chartTitle = data[5]["Uren"];
        chartData = Object.keys(data[5])
          .filter(key => key !== "Uren" && key !== "")
          .map(key => parseFloat(data[5][key]));
        break;
      case "spanning_loodaccu":
        chartTitle = data[6]["Uren"];
        chartData = Object.keys(data[6])
          .filter(key => key !== "Uren" && key !== "")
          .map(key => parseFloat(data[6][key]));
        break;
      case "stroom_fuel_cell":
        chartTitle = data[7]["Uren"];
        chartData = Object.keys(data[7])
          .filter(key => key !== "Uren" && key !== "")
          .map(key => parseFloat(data[7][key]));
        break;
      default:
        break;
    }

    const selectedChartType = 'bar';
    const chartConfig = {
        labels: Object.keys(data[0]).filter(key => key !== "Uren" && key !== ""),
        datasets: [{
            label: chartTitle,
            data: chartData,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        }]
    };

    const currentDate = Date.now().toString();
    createChart(selectedChartType, chartConfig, currentDate);
    saveChartData(currentDate, selectedChartType, chartConfig);
  });

  // Function to save chart data to localStorage
  function saveChartData(id, chartType, data) {
    let chartsData = JSON.parse(localStorage.getItem("chartsData")) || {};
    chartsData[id] = {
      chartType: chartType,
      data: data,
    };
    localStorage.setItem("chartsData", JSON.stringify(chartsData));
  }

  // Load saved charts when the page loads
  loadCharts();

  // Function to attach resize event listeners
  function attachResizeEventListeners(card, id) {
    const plusIcon = card.querySelector(".fa-plus");
    const minusIcon = card.querySelector(".fa-minus");

    plusIcon.addEventListener("click", function () {
      const currentWidth = card.offsetWidth;
      const newWidth = currentWidth + 227;
      card.style.width = newWidth + "px";
      card.style.transition = "width 0.3s ease-in-out";
      localStorage.setItem(`card-width-${id}`, newWidth);
    });

    minusIcon.addEventListener("click", function () {
      const currentWidth = card.offsetWidth;
      const newWidth = Math.max(currentWidth - 227, 0);
      card.style.width = newWidth + "px";
      localStorage.setItem(`card-width-${id}`, newWidth);
    });
  }

  // Event click for the edit button
  document.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("edit-btn") || target.closest(".edit-btn")) {
      event.stopPropagation();
      const card = target.closest(".card");
      if (card) {
        card.classList.toggle("showButtons");
      }
    } else {
      // Remove class from all cards
      document.querySelectorAll(".card").forEach((card) => {
        card.classList.remove("showButtons");
      });
    }
  });

  // Editing card headings
  document.addEventListener("click", function (event) {
    const target = event.target;
    if (
      target.classList.contains("editableHeading") ||
      target.classList.contains("edit-icon")
    ) {
      const heading = target.closest(".editableHeading");
      if (heading) {
        enableEditing(heading);
      }
    }
  });

  // Load saved text from localStorage
  function loadHeadings() {
    const headings = document.querySelectorAll(".editableHeading");
    headings.forEach((heading) => {
      const id = heading.closest(".card").dataset.id;
      const savedText = localStorage.getItem(`headingText-${id}`);
      if (savedText) {
        heading.textContent = savedText;
      }
    });
  }

  loadHeadings();

  // Function to create an input field and replace the heading
  function enableEditing(heading) {
    const card = heading.closest(".card");
    const id = card.dataset.id;

    const input = document.createElement("input");
    input.type = "text";
    input.value = heading.textContent.trim();
    input.className = "headingInput";

    heading.replaceWith(input);
    input.focus();

    input.addEventListener("blur", function () {
      const newText = input.value;
      heading.textContent = newText;
      localStorage.setItem(`headingText-${id}`, newText);
      input.replaceWith(heading);
    });

    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        input.blur();
      }
    });
  }

  // Change text of add button when clicked
  const addChartBtn = document.querySelector(".addChartBtn");
  const originalContent = addChartBtn.innerHTML;

  addChartBtn.addEventListener("click", function () {
    addChartBtn.innerHTML =
      'Voeg toe <i class="fa-solid fa-check" style="margin-left: 5px;"></i>';
    setTimeout(function () {
      addChartBtn.innerHTML = originalContent;
    }, 750);
  });

  window.changeChart = function (chartTypeSelect) {
    const selectedChartType = chartTypeSelect.value;
    const card = chartTypeSelect.closest(".card");
  
    if (card) {
      const id = card.dataset.id;
  
      // Remove the current canvas
      const canvas = card.querySelector("canvas");
      canvas.remove();
  
      // Create a new canvas
      const newCanvas = document.createElement("canvas");
      card.appendChild(newCanvas);
  
      // Update the chart type in localStorage
      let chartsData = JSON.parse(localStorage.getItem("chartsData")) || {};
      if (chartsData[id]) {
        chartsData[id].chartType = selectedChartType;
      }
      localStorage.setItem("chartsData", JSON.stringify(chartsData));
  
      // Initialize the new chart with updated type
      const ctx = newCanvas.getContext("2d");
      new Chart(ctx, {
        type: selectedChartType,
        data: chartsData[id].data,
        options: {},
      });
  
      // Ensure resize buttons stay in place
      const resizeIcons = card.querySelector(".resize-icons");
      card.appendChild(resizeIcons); // Move resize icons to the end of card
    }
  };

  const selectElements = document.querySelectorAll("select");
  selectElements.forEach((selectElement) => {
    selectElement.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });
});
