document.addEventListener("DOMContentLoaded", function () {
  const chartTypeSelect = document.getElementById("chartTypeSelect");
  const addChartButton = document.getElementById("addChartButton");
  const chartContainer = document.getElementById("chartContainer");
  const chartTemplate = document.getElementById("chartTemplate");

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

  const data = [
    {
      "Uren": "Spanning Zonnepanelen (V)",
      "0:00": "4.1",
      "0:15": "4.1",
      "0:30": "4.1",
      "0:45": "4.1",
      "1:00": "4.1",
      "1:15": "4.1",
      "1:30": "4.1",
      "1:45": "4.1",
      "2:00": "4.2",
      "2:15": "4.2",
      "2:30": "4.2",
      "2:45": "4.2",
      "3:00": "4.2",
      "3:15": "4.2",
      "3:30": "4.2",
      "3:45": "4.2",
      "4:00": "4.2",
      "4:15": "4.3",
      "4:30": "4.3",
      "4:45": "4.3",
      "5:00": "4.3",
      "5:15": "4.3",
      "5:30": "4.3",
      "5:45": "4.4",
      "6:00": "4.5",
      "6:15": "4.7",
      "6:30": "4.9",
      "6:45": "5.1",
      "7:00": "5.3",
      "7:15": "5.5",
      "7:30": "5.7",
      "7:45": "5.9",
      "8:00": "6.1",
      "8:15": "6.3",
      "8:30": "6.5",
      "8:45": "6.7",
      "9:00": "6.9",
      "9:15": "7.1",
      "9:30": "7.3",
      "9:45": "7.5",
      "10:00": "7.7",
      "10:15": "8.5",
      "10:30": "9",
      "10:45": "9.5",
      "11:00": "10",
      "11:15": "10.5",
      "11:30": "11",
      "11:45": "11.5",
      "12:00": "12",
      "12:15": "12.5",
      "12:30": "13",
      "12:45": "13.5",
      "13:00": "14",
      "13:15": "14",
      "13:30": "14",
      "13:45": "14",
      "14:00": "14",
      "14:15": "14",
      "14:30": "14",
      "14:45": "14",
      "15:00": "14",
      "15:15": "14",
      "15:30": "14",
      "15:45": "14",
      "16:00": "14",
      "16:15": "14",
      "16:30": "14",
      "16:45": "14",
      "17:00": "14",
      "17:15": "14",
      "17:30": "14",
      "17:45": "14",
      "18:00": "14",
      "18:15": "14",
      "18:30": "14",
      "18:45": "14",
      "19:00": "12.5",
      "19:15": "11.5",
      "19:30": "10.5",
      "19:45": "9.5",
      "20:00": "8.5",
      "20:15": "7.5",
      "20:30": "6.5",
      "20:45": "5.5",
      "21:00": "4.5",
      "21:15": "4.1",
      "21:30": "4.1",
      "21:45": "4.1",
      "22:00": "4.1",
      "22:15": "4.1",
      "22:30": "4.1",
      "22:45": "4.1",
      "23:00": "4.1",
      "23:15": "4.1",
      "23:30": "4.1",
      "23:45": "4.1",
      "": ""
    },
    {
      "Uren": "Stroom Zonnepanelen (A)",
      "0:00": "0.1",
      "0:15": "0.1",
      "0:30": "0.1",
      "0:45": "0.1",
      "1:00": "0.1",
      "1:15": "0.1",
      "1:30": "0.1",
      "1:45": "0.1",
      "2:00": "0.1",
      "2:15": "0.1",
      "2:30": "0.1",
      "2:45": "0.1",
      "3:00": "0.1",
      "3:15": "0.1",
      "3:30": "0.1",
      "3:45": "0.1",
      "4:00": "0.1",
      "4:15": "0.1",
      "4:30": "0.1",
      "4:45": "0.1",
      "5:00": "0.1",
      "5:15": "0.1",
      "5:30": "0.1",
      "5:45": "0.1",
      "6:00": "0.2",
      "6:15": "0.3",
      "6:30": "0.4",
      "6:45": "0.5",
      "7:00": "0.6",
      "7:15": "0.7",
      "7:30": "0.8",
      "7:45": "0.9",
      "8:00": "1",
      "8:15": "1.1",
      "8:30": "1.2",
      "8:45": "1.3",
      "9:00": "1.4",
      "9:15": "1.5",
      "9:30": "1.6",
      "9:45": "1.7",
      "10:00": "1.8",
      "10:15": "1.9",
      "10:30": "2",
      "10:45": "2.1",
      "11:00": "2.2",
      "11:15": "2.3",
      "11:30": "2.4",
      "11:45": "2.5",
      "12:00": "2.6",
      "12:15": "2.7",
      "12:30": "2.8",
      "12:45": "2.9",
      "13:00": "3",
      "13:15": "3",
      "13:30": "3",
      "13:45": "3",
      "14:00": "3",
      "14:15": "3",
      "14:30": "3",
      "14:45": "3",
      "15:00": "3",
      "15:15": "2.3",
      "15:30": "2.1",
      "15:45": "1.9",
      "16:00": "1.7",
      "16:15": "1.5",
      "16:30": "0.7",
      "16:45": "0.2",
      "17:00": "0.1",
      "17:15": "0.1",
      "17:30": "0.1",
      "17:45": "0.1",
      "18:00": "0.1",
      "18:15": "0.1",
      "18:30": "0.1",
      "18:45": "0.1",
      "19:00": "0.1",
      "19:15": "0.1",
      "19:30": "0.1",
      "19:45": "0.1",
      "20:00": "0.1",
      "20:15": "0.1",
      "20:30": "0.1",
      "20:45": "0.1",
      "21:00": "0.1",
      "21:15": "0.1",
      "21:30": "0.1",
      "21:45": "0.1",
      "22:00": "0.1",
      "22:15": "0.1",
      "22:30": "0.1",
      "22:45": "0.1",
      "23:00": "0.1",
      "23:15": "0.1",
      "23:30": "0.1",
      "23:45": "0.1",
      "": ""
  },
  {
      "Uren": "Spanning Accu (V)",
      "0:00": "4.1",
      "0:15": "4.1",
      "0:30": "4.1",
      "0:45": "4.1",
      "1:00": "4.1",
      "1:15": "4.1",
      "1:30": "4.1",
      "1:45": "4.1",
      "2:00": "4.1",
      "2:15": "4.1",
      "2:30": "4.1",
      "2:45": "4.1",
      "3:00": "4.1",
      "3:15": "4.1",
      "3:30": "4.1",
      "3:45": "4.1",
      "4:00": "4.1",
      "4:15": "4.1",
      "4:30": "4.1",
      "4:45": "4.1",
      "5:00": "4.1",
      "5:15": "4.1",
      "5:30": "4.1",
      "5:45": "4.1",
      "6:00": "4.1",
      "6:15": "4.1",
      "6:30": "4.1",
      "6:45": "4.1",
      "7:00": "4.1",
      "7:15": "4.1",
      "7:30": "4.1",
      "7:45": "4.1",
      "8:00": "4.5",
      "8:15": "4.9",
      "8:30": "5.3",
      "8:45": "5.7",
      "9:00": "6.1",
      "9:15": "6.5",
      "9:30": "6.9",
      "9:45": "7.3",
      "10:00": "7.7",
      "10:15": "8.1",
      "10:30": "8.5",
      "10:45": "8.9",
      "11:00": "9.3",
      "11:15": "9.7",
      "11:30": "10.1",
      "11:45": "10.5",
      "12:00": "10.9",
      "12:15": "11.3",
      "12:30": "11.7",
      "12:45": "12.1",
      "13:00": "12.5",
      "13:15": "12.8",
      "13:30": "12.9",
      "13:45": "13",
      "14:00": "13.1",
      "14:15": "13.2",
      "14:30": "13.3",
      "14:45": "13.4",
      "15:00": "13.5",
      "15:15": "13.6",
      "15:30": "13.6",
      "15:45": "13.6",
      "16:00": "13.6",
      "16:15": "13.6",
      "16:30": "13.6",
      "16:45": "13.6",
      "17:00": "13.6",
      "17:15": "13.6",
      "17:30": "13.6",
      "17:45": "13.6",
      "18:00": "13.6",
      "18:15": "13.6",
      "18:30": "13.6",
      "18:45": "13.6",
      "19:00": "13.6",
      "19:15": "13.6",
      "19:30": "13.6",
      "19:45": "13.6",
      "20:00": "13.6",
      "20:15": "13.6",
      "20:30": "13.6",
      "20:45": "13.6",
      "21:00": "13.6",
      "21:15": "13.3",
      "21:30": "13",
      "21:45": "12.7",
      "22:00": "12.4",
      "22:15": "12.1",
      "22:30": "11.8",
      "22:45": "11.5",
      "23:00": "11.2",
      "23:15": "10.9",
      "23:30": "10.6",
      "23:45": "10.3",
      "": ""
  },
  {
      "Uren": "Spanning Gebruikers (V)",
      "0:00": "13.6",
      "0:15": "13.6",
      "0:30": "13.6",
      "0:45": "13.6",
      "1:00": "13.6",
      "1:15": "13.6",
      "1:30": "13.6",
      "1:45": "13.6",
      "2:00": "13.6",
      "2:15": "13.6",
      "2:30": "13.6",
      "2:45": "13.6",
      "3:00": "13.6",
      "3:15": "13.6",
      "3:30": "13.6",
      "3:45": "13.6",
      "4:00": "13.6",
      "4:15": "13.6",
      "4:30": "13.6",
      "4:45": "13.6",
      "5:00": "13.6",
      "5:15": "13.6",
      "5:30": "13.6",
      "5:45": "13.6",
      "6:00": "13.6",
      "6:15": "13.6",
      "6:30": "13.6",
      "6:45": "13.6",
      "7:00": "13.6",
      "7:15": "13.6",
      "7:30": "13.6",
      "7:45": "13.6",
      "8:00": "13.6",
      "8:15": "13.6",
      "8:30": "13.6",
      "8:45": "13.6",
      "9:00": "13.6",
      "9:15": "13.6",
      "9:30": "13.6",
      "9:45": "13.6",
      "10:00": "13.6",
      "10:15": "13.6",
      "10:30": "13.6",
      "10:45": "13.6",
      "11:00": "13.6",
      "11:15": "13.6",
      "11:30": "13.6",
      "11:45": "13.6",
      "12:00": "13.6",
      "12:15": "13.6",
      "12:30": "13.6",
      "12:45": "13.6",
      "13:00": "13.6",
      "13:15": "13.6",
      "13:30": "13.6",
      "13:45": "13.6",
      "14:00": "13.6",
      "14:15": "13.6",
      "14:30": "13.6",
      "14:45": "13.6",
      "15:00": "13.6",
      "15:15": "13.6",
      "15:30": "13.6",
      "15:45": "13.6",
      "16:00": "13.6",
      "16:15": "13.6",
      "16:30": "13.6",
      "16:45": "13.6",
      "17:00": "13.6",
      "17:15": "13.6",
      "17:30": "13.6",
      "17:45": "13.6",
      "18:00": "13.6",
      "18:15": "13.6",
      "18:30": "13.6",
      "18:45": "13.6",
      "19:00": "13.6",
      "19:15": "13.6",
      "19:30": "13.6",
      "19:45": "13.6",
      "20:00": "13.6",
      "20:15": "13.6",
      "20:30": "13.6",
      "20:45": "13.6",
      "21:00": "13.6",
      "21:15": "13.6",
      "21:30": "13.6",
      "21:45": "13.6",
      "22:00": "13.6",
      "22:15": "13.6",
      "22:30": "13.6",
      "22:45": "13.6",
      "23:00": "13.6",
      "23:15": "13.6",
      "23:30": "13.6",
      "23:45": "13.6",
      "": ""
  },
  {
      "Uren": "Stroom Gebruikers (A)",
      "0:00": "0",
      "0:15": "0",
      "0:30": "0",
      "0:45": "0",
      "1:00": "0",
      "1:15": "0",
      "1:30": "0",
      "1:45": "0",
      "2:00": "0",
      "2:15": "0",
      "2:30": "0",
      "2:45": "0",
      "3:00": "0",
      "3:15": "0",
      "3:30": "0",
      "3:45": "0",
      "4:00": "0",
      "4:15": "0",
      "4:30": "0",
      "4:45": "0",
      "5:00": "0",
      "5:15": "0",
      "5:30": "0",
      "5:45": "0",
      "6:00": "0",
      "6:15": "0",
      "6:30": "0",
      "6:45": "0",
      "7:00": "0",
      "7:15": "0",
      "7:30": "0",
      "7:45": "0",
      "8:00": "0",
      "8:15": "0",
      "8:30": "0",
      "8:45": "0",
      "9:00": "0",
      "9:15": "0",
      "9:30": "0",
      "9:45": "0",
      "10:00": "0",
      "10:15": "0",
      "10:30": "0",
      "10:45": "0",
      "11:00": "0",
      "11:15": "0",
      "11:30": "0",
      "11:45": "0",
      "12:00": "0",
      "12:15": "3.2",
      "12:30": "3.2",
      "12:45": "3.2",
      "13:00": "3.2",
      "13:15": "3.2",
      "13:30": "3.2",
      "13:45": "3.2",
      "14:00": "0",
      "14:15": "0",
      "14:30": "0",
      "14:45": "0",
      "15:00": "0",
      "15:15": "0",
      "15:30": "0",
      "15:45": "0",
      "16:00": "3.2",
      "16:15": "3.2",
      "16:30": "3.2",
      "16:45": "3.2",
      "17:00": "3.2",
      "17:15": "3.2",
      "17:30": "3.2",
      "17:45": "0",
      "18:00": "0",
      "18:15": "0",
      "18:30": "0",
      "18:45": "0",
      "19:00": "0",
      "19:15": "4.6",
      "19:30": "0",
      "19:45": "0",
      "20:00": "0",
      "20:15": "0",
      "20:30": "4.6",
      "20:45": "4.6",
      "21:00": "4.6",
      "21:15": "4.6",
      "21:30": "4.6",
      "21:45": "0",
      "22:00": "0",
      "22:15": "0",
      "22:30": "0",
      "22:45": "0",
      "23:00": "0",
      "23:15": "0",
      "23:30": "0",
      "23:45": "0",
      "": ""
  },
  {
      "Uren": "Spanning supercap Accu (V)",
      "0:00": "4.1",
      "0:15": "4.1",
      "0:30": "4.1",
      "0:45": "4.1",
      "1:00": "4.1",
      "1:15": "4.1",
      "1:30": "4.1",
      "1:45": "4.1",
      "2:00": "4.1",
      "2:15": "4.1",
      "2:30": "4.1",
      "2:45": "4.1",
      "3:00": "4.1",
      "3:15": "4.1",
      "3:30": "4.1",
      "3:45": "4.1",
      "4:00": "4.1",
      "4:15": "4.1",
      "4:30": "4.1",
      "4:45": "4.1",
      "5:00": "4.1",
      "5:15": "4.1",
      "5:30": "4.1",
      "5:45": "4.1",
      "6:00": "4.1",
      "6:15": "4.1",
      "6:30": "4.1",
      "6:45": "4.1",
      "7:00": "4.1",
      "7:15": "4.1",
      "7:30": "4.1",
      "7:45": "4.1",
      "8:00": "4.5",
      "8:15": "4.9",
      "8:30": "5.3",
      "8:45": "5.7",
      "9:00": "6.1",
      "9:15": "6.5",
      "9:30": "6.9",
      "9:45": "7.3",
      "10:00": "7.7",
      "10:15": "8.1",
      "10:30": "8.5",
      "10:45": "8.9",
      "11:00": "9.3",
      "11:15": "9.7",
      "11:30": "10.1",
      "11:45": "10.5",
      "12:00": "10.9",
      "12:15": "11.3",
      "12:30": "11.7",
      "12:45": "12.1",
      "13:00": "12.5",
      "13:15": "12.8",
      "13:30": "12.9",
      "13:45": "13",
      "14:00": "13.1",
      "14:15": "13.2",
      "14:30": "13.3",
      "14:45": "13.4",
      "15:00": "13.5",
      "15:15": "13.6",
      "15:30": "13.6",
      "15:45": "13.6",
      "16:00": "13.6",
      "16:15": "13.6",
      "16:30": "13.6",
      "16:45": "13.6",
      "17:00": "13.6",
      "17:15": "13.6",
      "17:30": "13.6",
      "17:45": "13.6",
      "18:00": "13.6",
      "18:15": "13.6",
      "18:30": "13.6",
      "18:45": "13.6",
      "19:00": "13.6",
      "19:15": "13.6",
      "19:30": "13.6",
      "19:45": "13.6",
      "20:00": "13.6",
      "20:15": "13.6",
      "20:30": "13.6",
      "20:45": "13.6",
      "21:00": "13.6",
      "21:15": "13.3",
      "21:30": "13",
      "21:45": "12.7",
      "22:00": "12.4",
      "22:15": "12.1",
      "22:30": "11.8",
      "22:45": "11.5",
      "23:00": "11.2",
      "23:15": "10.9",
      "23:30": "10.6",
      "23:45": "10.3",
      "": ""
  },
  {
      "Uren": "Spanning LoodAccu (V)",
      "0:00": "10",
      "0:15": "10.1",
      "0:30": "10.2",
      "0:45": "10.3",
      "1:00": "10.4",
      "1:15": "10.5",
      "1:30": "10.6",
      "1:45": "10.7",
      "2:00": "10.8",
      "2:15": "10.9",
      "2:30": "11",
      "2:45": "11.1",
      "3:00": "11.2",
      "3:15": "11.3",
      "3:30": "11.4",
      "3:45": "11.5",
      "4:00": "11.6",
      "4:15": "11.7",
      "4:30": "11.8",
      "4:45": "11.9",
      "5:00": "12",
      "5:15": "12.1",
      "5:30": "12.2",
      "5:45": "12.3",
      "6:00": "12.4",
      "6:15": "12.5",
      "6:30": "12.6",
      "6:45": "12.7",
      "7:00": "12.8",
      "7:15": "12.9",
      "7:30": "13",
      "7:45": "13.1",
      "8:00": "13.2",
      "8:15": "13.3",
      "8:30": "13.4",
      "8:45": "13.5",
      "9:00": "13.6",
      "9:15": "",
      "9:30": "",
      "9:45": "",
      "10:00": "",
      "10:15": "",
      "10:30": "",
      "10:45": "",
      "11:00": "",
      "11:15": "",
      "11:30": "",
      "11:45": "",
      "12:00": "",
      "12:15": "",
      "12:30": "",
      "12:45": "",
      "13:00": "",
      "13:15": "",
      "13:30": "",
      "13:45": "",
      "14:00": "",
      "14:15": "",
      "14:30": "",
      "14:45": "",
      "15:00": "",
      "15:15": "",
      "15:30": "",
      "15:45": "",
      "16:00": "",
      "16:15": "",
      "16:30": "",
      "16:45": "",
      "17:00": "",
      "17:15": "",
      "17:30": "",
      "17:45": "",
      "18:00": "",
      "18:15": "",
      "18:30": "",
      "18:45": "",
      "19:00": "",
      "19:15": "",
      "19:30": "",
      "19:45": "",
      "20:00": "",
      "20:15": "",
      "20:30": "",
      "20:45": "",
      "21:00": "",
      "21:15": "",
      "21:30": "",
      "21:45": "",
      "22:00": "",
      "22:15": "",
      "22:30": "",
      "22:45": "",
      "23:00": "",
      "23:15": "",
      "23:30": "",
      "23:45": "",
      "": ""
  },
  {
      "Uren": "Stroom fuel cell",
      "0:00": "0",
      "0:15": "0.05",
      "0:30": "0.1",
      "0:45": "0.15",
      "1:00": "0.2",
      "1:15": "0.25",
      "1:30": "0.3",
      "1:45": "0.35",
      "2:00": "0.4",
      "2:15": "0.45",
      "2:30": "0.5",
      "2:45": "0.55",
      "3:00": "0.6",
      "3:15": "0.65",
      "3:30": "0.7",
      "3:45": "0.75",
      "4:00": "0.8",
      "4:15": "0.85",
      "4:30": "0.9",
      "4:45": "0.95",
      "5:00": "1",
      "5:15": "1.05",
      "5:30": "1.1",
      "5:45": "1.15",
      "6:00": "1.2",
      "6:15": "1.25",
      "6:30": "1.3",
      "6:45": "1.35",
      "7:00": "1.4",
      "7:15": "1.45",
      "7:30": "1.5",
      "7:45": "1.55",
      "8:00": "1.6",
      "8:15": "1.65",
      "8:30": "1.7",
      "8:45": "1.75",
      "9:00": "1.8",
      "9:15": "1.85",
      "9:30": "1.9",
      "9:45": "1.95",
      "10:00": "2",
      "10:15": "2.05",
      "10:30": "2.1",
      "10:45": "2.15",
      "11:00": "2.2",
      "11:15": "2.25",
      "11:30": "2.3",
      "11:45": "2.35",
      "12:00": "2.4",
      "12:15": "2.45",
      "12:30": "2.5",
      "12:45": "2.55",
      "13:00": "2.6",
      "13:15": "2.65",
      "13:30": "2.7",
      "13:45": "2.75",
      "14:00": "2.8",
      "14:15": "2.85",
      "14:30": "2.9",
      "14:45": "2.95",
      "15:00": "3",
      "15:15": "3.05",
      "15:30": "3.1",
      "15:45": "3.15",
      "16:00": "3.2",
      "16:15": "3.25",
      "16:30": "3.3",
      "16:45": "3.35",
      "17:00": "3.4",
      "17:15": "3.45",
      "17:30": "3.5",
      "17:45": "3.55",
      "18:00": "3.6",
      "18:15": "3.65",
      "18:30": "3.7",
      "18:45": "3.75",
      "19:00": "3.8",
      "19:15": "3.85",
      "19:30": "3.9",
      "19:45": "3.95",
      "20:00": "",
      "20:15": "",
      "20:30": "",
      "20:45": "",
      "21:00": "",
      "21:15": "",
      "21:30": "",
      "21:45": "",
      "22:00": "",
      "22:15": "",
      "22:30": "",
      "22:45": "",
      "23:00": "",
      "23:15": "",
      "23:30": "",
      "23:45": "",
      "": ""
  }
  ];

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
      localStorage.setItem(`card-width-${id}`, newWidth);
    });

    minusIcon.addEventListener("click", function () {
      const currentWidth = card.offsetWidth;
      const newWidth = Math.max(currentWidth - 227, 0);
      card.style.width = newWidth + "px";
      localStorage.setItem(`card-width-${id}`, newWidth);
    });
  }

  // Select the "Edit" button
  // Event delegation for the edit button
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
      const canvas = card.querySelector("canvas");
      canvas.remove();

      const newCanvas = document.createElement("canvas");
      card.appendChild(newCanvas);

      let chartsData = JSON.parse(localStorage.getItem("chartsData")) || {};
      if (chartsData[id]) {
        chartsData[id].chartType = selectedChartType;
      }

      localStorage.setItem("chartsData", JSON.stringify(chartsData));

      const ctx = newCanvas.getContext("2d");
      new Chart(ctx, {
        type: selectedChartType,
        data: chartsData[id].data,
        options: {},
      });
    }
  };

  const selectElements = document.querySelectorAll("select");
  selectElements.forEach((selectElement) => {
    selectElement.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });
});
