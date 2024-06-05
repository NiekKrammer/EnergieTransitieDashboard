document.addEventListener("DOMContentLoaded", function () {
  const chartTypeSelect = document.getElementById("chartTypeSelect");
  const addChartButton = document.getElementById("addChartButton");
  const chartContainer = document.getElementById("chartContainer");
  const chartTemplate = document.getElementById("chartTemplate");

  // Function to create a new chart
  function createChart(chartType, data, id) {
      const chartDiv = chartTemplate.content.cloneNode(true);
      const card = chartDiv.querySelector(".card");
      const canvas = chartDiv.querySelector("canvas");
      const removeButton = chartDiv.querySelector(".removeButton");

      card.dataset.id = id; // Assign a unique ID to each card

      const ctx = canvas.getContext("2d");

      removeButton.addEventListener("click", function () {
          const container = removeButton.closest(".card");
          if (container) {
              chartContainer.removeChild(container);
              removeChartData(id);
              localStorage.removeItem(`card-width-${id}`);
          } else {
              console.error("Container not found");
          }
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
          card.style.width = savedWidth + 'px';
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

  // Event listener for add chart button
  addChartButton.addEventListener("click", function () {
      const selectedChartType = chartTypeSelect.value;
      const data = {
          labels: ["Label 1", "Label 2", "Label 3"],
          datasets: [
              {
                  label: "Dataset",
                  data: [10, 20, 30],
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                  borderColor: "rgba(255, 99, 132, 1)",
                  borderWidth: 1,
              },
          ],
      };
      const currentDate = Date.now().toString();
      createChart(selectedChartType, data, currentDate);
      saveChartData(currentDate, selectedChartType, data);
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
      const plusIcon = card.querySelector('.fa-plus');
      const minusIcon = card.querySelector('.fa-minus');

      plusIcon.addEventListener('click', function () {
          const currentWidth = card.offsetWidth;
          const newWidth = currentWidth + 227;
          card.style.width = newWidth + 'px';
          localStorage.setItem(`card-width-${id}`, newWidth);
      });

      minusIcon.addEventListener('click', function () {
          const currentWidth = card.offsetWidth;
          const newWidth = Math.max(currentWidth - 227, 0);
          card.style.width = newWidth + 'px';
          localStorage.setItem(`card-width-${id}`, newWidth);
      });
  }
});

// Select the "Edit" button
const editButton = document.querySelector(".edit-btn");

// Toggle class when clicking the "Edit" button
editButton.addEventListener("click", function(event) {
  // Toggle class on all cards
  document.querySelectorAll(".card").forEach(card => {
      card.classList.toggle("showRemove");
  });

  // Prevent the event from bubbling up to the document
  event.stopPropagation();
});

// Remove class when clicking outside the "Edit" button
document.addEventListener("click", function() {
  // Remove class from all cards
  document.querySelectorAll(".card").forEach(card => {
      card.classList.remove("showRemove");
  });
});

// Dark Light Mode
document.querySelector(".toggle-btn").addEventListener("click", event => {
  document.body.classList.toggle("lightMode");

  // Save the current mode in localStorage
  const isLightMode = document.body.classList.contains("lightMode");
  localStorage.setItem("isLightMode", isLightMode);
});

window.onload = () => {
  const isLightMode = localStorage.getItem("isLightMode") === "true";
  document.body.classList.toggle("lightMode", isLightMode);
};
