const select = document.getElementById("cryptoSelect");
const price = document.getElementById("price");
const marketCap = document.getElementById("marketCap");
const volume = document.getElementById("volume");
const ctxLine = document.getElementById("cryptoChart").getContext("2d");
const ctxPie = document.getElementById("stakeholderPieChart").getContext("2d");

let lineChart, pieChart;

async function fetchCryptoData() {
  const crypto = select.value;
  const url = `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=usd&days=30`;

  const res = await fetch(url);
  const data = await res.json();

  const prices = data.prices.map(item => item[1]);
  const labels = data.prices.map(item => new Date(item[0]).toLocaleDateString());

  const lastPrice = prices[prices.length - 1];
  const lastCap = data.market_caps[data.market_caps.length - 1][1];
  const lastVolume = data.total_volumes[data.total_volumes.length - 1][1];

  price.textContent = `Price: $${lastPrice.toFixed(2)}`;
  marketCap.textContent = `Market Cap: $${(lastCap / 1e9).toFixed(2)}B`;
  volume.textContent = `24h Volume: $${(lastVolume / 1e6).toFixed(2)}M`;

  if (lineChart) lineChart.destroy();
  lineChart = new Chart(ctxLine, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: `${crypto.toUpperCase()} Price (30 Days)`,
        data: prices,
        borderColor: "#f7c948",
        backgroundColor: "rgba(247, 201, 72, 0.2)",
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: "white" } }
      },
      scales: {
        x: { ticks: { color: "white" } },
        y: { ticks: { color: "white" } }
      }
    }
  });

  if (pieChart) pieChart.destroy();
  pieChart = new Chart(ctxPie, {
    type: "pie",
    data: {
      labels: ["Holders", "Exchanges", "Institutions", "Retail"],
      datasets: [{
        data: [40, 25, 20, 15],
        backgroundColor: ["#f39c12", "#e74c3c", "#3498db", "#9b59b6"]
      }]
    },
    options: {
      plugins: {
        legend: {
          labels: { color: "white" }
        }
      }
    }
  });
}

select.addEventListener("change", fetchCryptoData);
window.onload = fetchCryptoData;
