// Fetch CSV data and parse it
fetch('data.csv')
    .then(response => response.text())
    .then(csvData => {
        const parsedData = parseCSV(csvData);

        generateChart('bar', parsedData);
        generateChart('doughnut', parsedData);
        generateChart('line', parsedData);
        generateChart('polarArea', parsedData);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Parse CSV data into an array of objects
function parseCSV(csvData) {
    const lines = csvData.split('\n');
    const data = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line) {
            const [date, energyProduced] = line.split(',');
            data.push({ date, energyProduced: parseFloat(energyProduced) });
        }
    }

    return data;
}

// Function to dynamically generate Chart.js initialization code
function generateChart(type, data) {
    const chartElements = document.querySelectorAll('.' + type);
    chartElements.forEach(element => {
        const chartData = {
            labels: data.map(entry => entry.date),
            datasets: [{
                label: 'Energy Produced (kWh)',
                data: data.map(entry => entry.energyProduced),
                borderWidth: 1
            }]
        };

        new Chart(element, {
            type: type,
            data: chartData,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });
}
