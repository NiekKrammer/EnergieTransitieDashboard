document.addEventListener('DOMContentLoaded', function () {
  // Pak de HTML elementen
  const chartTypeSelect = document.querySelector(".chartTypeSelect");
  const addChartButton = document.querySelector(".addChartBtn");
  const chartContainer = document.querySelector(".chartContainer");
  const chartTemplate = document.querySelector(".chartTemplate");

  // Functie om data uit CSV te halen via fetchen
  async function fetchDataFromCSV() {
    try {
      const response = await fetch("../data.csv");
      if (!response.ok) {
        throw new Error("Failed to fetch CSV data");
      }
      const csvData = await response.text();
      return parseCSV(csvData);
    } catch (error) {
      console.error("Error fetching CSV:", error);
      return null;
    }
  }

  // Functie om CSV-data te verwerken
  function parseCSV(csvData) {
    const rows = csvData.trim().split("\n");
    const header = rows[0].split(",");
    const data = [];

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i].split(",");
      const rowData = {};

      for (let j = 0; j < header.length; j++) {
        const key = header[j].trim();
        const value = parseFloat(row[j].trim());
        rowData[key] = value;
      }

      data.push(rowData);
    }

    return data;
  }

  // Functie om een nieuwe grafiek te maken
  function createChart(chartType, data, id) {
    const chartDiv = chartTemplate.content.cloneNode(true);
    const card = chartDiv.querySelector(".card");
    const canvas = chartDiv.querySelector("canvas");
    const removeButton = chartDiv.querySelector(".removeButton");

    card.dataset.id = id;

    // Stel de breedte van de kaart in op basis van de opgeslagen waarde
    const savedWidth = localStorage.getItem(`card-width-${id}`);
    if (savedWidth) {
      card.style.width = `${savedWidth}px`;
    }

    const ctx = canvas.getContext("2d");

    removeButton.addEventListener("click", function (event) {
      event.stopPropagation();

      const container = removeButton.closest(".card");
      if (container) {
        const id = container.dataset.id;
        localStorage.removeItem(`headingText-${id}`);
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

    attachResizeEventListeners(card, id);
  }

  // Functie om data van grafiek te verwijderen uit localStorage
  function removeChartData(id) {
    let chartsData = JSON.parse(localStorage.getItem("chartsData")) || {};
    delete chartsData[id];
    localStorage.setItem("chartsData", JSON.stringify(chartsData));
  
    // Update cardOrder array and save to localStorage
    const cardOrder = JSON.parse(localStorage.getItem("cardOrder")) || [];
    const cardIndex = cardOrder.indexOf(id);
    if (cardIndex !== -1) {
      cardOrder.splice(cardIndex, 1);
      localStorage.setItem("cardOrder", JSON.stringify(cardOrder));
    }
  }
  
  // Functie om opgeslagen grafieken te laden
  function loadCharts() {
    const chartsData = JSON.parse(localStorage.getItem("chartsData"));
    chartContainer.innerHTML = "";
    if (chartsData) {
      Object.keys(chartsData).forEach((id) => {
        const { chartType, data } = chartsData[id];
        createChart(chartType, data, id);
      });
    }
  }

  // Event luisteren op knop om nieuwe grafiek toe te voegen
  addChartButton.addEventListener("click", async function () {
    const selectedValue = chartTypeSelect.value;

    // Haal de CSV-data op
    const rawData = await fetchDataFromCSV();

    if (!rawData) {
      console.error("Failed to fetch or parse CSV data");
      return;
    }

    let chartTitle = "";
    let chartData = [];

    switch (selectedValue) {
      case "spanning_zonnepanelen":
        chartTitle = "Spanning Zonnepanelen (V)";
        chartData = Object.keys(rawData[0])
          .filter((key) => key !== "Uren")
          .map((key) => rawData[0][key]);
        break;
      case "stroom_zonnepanelen":
        chartTitle = "Stroom Zonnepanelen (A)";
        chartData = Object.keys(rawData[1])
          .filter((key) => key !== "Uren")
          .map((key) => rawData[1][key]);
        break;
      case "spanning_accu":
        chartTitle = "Spanning Accu (V)";
        chartData = Object.keys(rawData[2])
          .filter((key) => key !== "Uren")
          .map((key) => rawData[2][key]);
        break;
      case "spanning_gebruikers":
        chartTitle = "Spanning Gebruikers (V)";
        chartData = Object.keys(rawData[3])
          .filter((key) => key !== "Uren")
          .map((key) => rawData[3][key]);
        break;
      case "stroom_gebruikers":
        chartTitle = "Stroom Gebruikers (A)";
        chartData = Object.keys(rawData[4])
          .filter((key) => key !== "Uren")
          .map((key) => rawData[4][key]);
        break;
      case "spanning_supercap_accu":
        chartTitle = "Spanning supercap Accu (V)";
        chartData = Object.keys(rawData[5])
          .filter((key) => key !== "Uren")
          .map((key) => rawData[5][key]);
        break;
      case "spanning_loodaccu":
        chartTitle = "Spanning LoodAccu (V)";
        chartData = Object.keys(rawData[6])
          .filter((key) => key !== "Uren")
          .map((key) => rawData[6][key]);
        break;
      case "stroom_fuel_cell":
        chartTitle = "Stroom fuel cell";
        chartData = Object.keys(rawData[7])
          .filter((key) => key !== "Uren")
          .map((key) => rawData[7][key]);
        break;
      default:
        break;
    }

    const selectedChartType = "bar";
    const chartConfig = {
      labels: Object.keys(rawData[0]).filter((key) => key !== "Uren"),
      datasets: [
        {
          label: chartTitle,
          data: chartData,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    };

    const currentDate = Date.now().toString();
    createChart(selectedChartType, chartConfig, currentDate);
    saveChartData(currentDate, selectedChartType, chartConfig);
  });

  // Functie om grafiekdata op te slaan in localStorage
  function saveChartData(id, chartType, data) {
    let chartsData = JSON.parse(localStorage.getItem("chartsData")) || {};
    chartsData[id] = {
      chartType: chartType,
      data: data,
    };
    localStorage.setItem("chartsData", JSON.stringify(chartsData));
  }

  // Functie om resize events toe te voegen aan grafiek
  function attachResizeEventListeners(card, id) {
    const plusIcon = card.querySelector(".fa-plus");
    const minusIcon = card.querySelector(".fa-minus");

    plusIcon.addEventListener("click", function () {
      const currentWidth = card.offsetWidth;
      const newWidth = currentWidth + 227;
      card.style.width = newWidth + "px";
      card.style.transition = "width 0.3s ease-in-out";
      localStorage.setItem(`card-width-${id}`, newWidth);
      console.log(`New width for card ${id}: ${newWidth}px`);
    });

    minusIcon.addEventListener("click", function () {
      const currentWidth = card.offsetWidth;
      const newWidth = Math.max(currentWidth - 227, 0);
      card.style.width = newWidth + "px";
      localStorage.setItem(`card-width-${id}`, newWidth);
      console.log(`New width for card ${id}: ${newWidth}px`);
    });
  }

  // Edit-knop card rechtsboven
  document.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("edit-btn") || target.closest(".edit-btn")) {
      const card = target.closest(".card");
      if (card) {
        card.classList.toggle("showCardEditOptions");
      }
    } else {
      document.querySelectorAll(".card").forEach((card) => {
        card.classList.remove("showCardEditOptions");
      });
    }
  });

  // Editable heading
  document.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("editableHeading") || target.classList.contains("edit-icon")) {
      const heading = target.closest(".editableHeading");
      if (heading) {
        enableEditing(heading);
      }
    }
  });

  // Laden van opgeslagen tekst uit localStorage
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

  // Functie om editing van heading mogelijk te maken
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

  // Functie om tekst van toevoegknop te wijzigen bij klikken
  const addChartBtn = document.querySelector(".addChartBtn");
  const originalContent = addChartBtn.innerHTML;

  addChartBtn.addEventListener("click", function () {
    addChartBtn.innerHTML = 'Voeg toe <i class="fa-regular fa-circle-check" style="margin-left: 4px;"></i>';
    setTimeout(function () {
      addChartBtn.innerHTML = originalContent;
    }, 600);
  });

  // Functie om het type van de grafiek te wijzigen
  window.changeChart = function (chartTypeSelect) {
    const selectedChartType = chartTypeSelect.value;
    const card = chartTypeSelect.closest(".card");

    if (card) {
      const id = card.dataset.id;

      // Verwijder de huidige canvas
      const canvas = card.querySelector("canvas");
      canvas.remove();

      // Maak een nieuwe canvas aan
      const newCanvas = document.createElement("canvas");
      card.appendChild(newCanvas);

      // Update het grafiektype in localStorage
      let chartsData = JSON.parse(localStorage.getItem("chartsData")) || {};
      if (chartsData[id]) {
        chartsData[id].chartType = selectedChartType;
      }
      localStorage.setItem("chartsData", JSON.stringify(chartsData));

      // Initialiseer de nieuwe grafiek met bijgewerkt type
      const ctx = newCanvas.getContext("2d");
      new Chart(ctx, {
        type: selectedChartType,
        data: chartsData[id].data,
        options: {},
      });

      // Zorg ervoor dat resize knoppen op hun plaats blijven
      const resizeIcons = card.querySelector(".resize-icons");
      card.appendChild(resizeIcons); // Verplaats resize icons naar einde van de kaart
    }
  };

  // Laad de opgeslagen grafieken wanneer de pagina laadt
  loadCharts();

  // Drag-and-drop functionaliteit
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragenter', dragEnter);
    card.addEventListener('dragover', dragOver);
    card.addEventListener('dragleave', dragLeave);
    card.addEventListener('drop', drop);
    card.addEventListener('dragend', dragEnd);
  });

  function dragStart(e) {
    this.classList.add('dragging');
    e.dataTransfer.setData('text/plain', this.dataset.id);
  }

  function dragEnter(e) {
    e.preventDefault();
    this.classList.add('drag-over');
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragLeave() {
    this.classList.remove('drag-over');
  }

  function drop(e) {
    e.preventDefault();
    const draggedCardId = e.dataTransfer.getData('text/plain');
    const draggedCard = document.querySelector(`.card[data-id="${draggedCardId}"]`);
    const parentNode = this.parentNode;

    // Move the dragged card to the target position
    parentNode.insertBefore(draggedCard, this.nextSibling);

    this.classList.remove('drag-over');

    // Update the order in localStorage
    const updatedCards = document.querySelectorAll('.card');
    const cardIds = Array.from(updatedCards).map(card => card.dataset.id);
    localStorage.setItem('cardOrder', JSON.stringify(cardIds));
  }

  function dragEnd() {
    this.classList.remove('dragging');
  }

  // Restore card order from localStorage on page load
  function restoreCardOrder() {
    const cardOrder = JSON.parse(localStorage.getItem('cardOrder'));
    if (cardOrder && cardOrder.length === cards.length) {
      const cardMap = new Map();
      cards.forEach(card => cardMap.set(card.dataset.id, card));

      cardOrder.forEach((cardId, index) => {
        const card = cardMap.get(cardId);
        if (card) {
          const parentNode = card.parentNode;
          parentNode.insertBefore(card, parentNode.children[index]);
        }
      });
    }
  }

  restoreCardOrder();
});
