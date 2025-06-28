# Crypto-Network-Performance-Dashboard
This is dashboard is design to track and analyze performance of top 20+ cryptocurrencies and also the graph of past 30 Days and the stakeholders distribution 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Crypto Network Performance Dashboard</title>
  <link rel="stylesheet" href="styles.css" />
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <div class="container">
    <header>
      <h1>Crypto Network Performance Dashboard</h1>
      <p class="subtitle">Track and analyze performance of top 20+ cryptocurrencies</p>
    </header>

    <div class="card-grid">
      <div class="card">
        <h3>Best Uptime</h3>
        <p class="highlight">Bitcoin</p>
        <p>99.99%</p>
      </div>
      <div class="card">
        <h3>Worst Downtime</h3>
        <p class="highlight">Dogecoin</p>
        <p>2 hours</p>
      </div>
      <div class="card">
        <h3>Fastest Transaction</h3>
        <p class="highlight">Solana</p>
        <p>650 ms</p>
      </div>
      <div class="card">
        <h3>Slowest Transaction</h3>
        <p class="highlight">Litecoin</p>
        <p>1900 ms</p>
      </div>
    </div>

    <div class="controls">
      <label for="cryptoSelect">Select Cryptocurrency:</label>
      <select id="cryptoSelect">
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="cardano">Cardano</option>
        <option value="ripple">Ripple</option>
        <option value="dogecoin">Dogecoin</option>
        <option value="litecoin">Litecoin</option>
        <option value="polkadot">Polkadot</option>
        <option value="tron">Tron</option>
        <option value="solana">Solana</option>
        <option value="chainlink">Chainlink</option>
        <option value="uniswap">Uniswap</option>
        <option value="stellar">Stellar</option>
        <option value="avalanche-2">Avalanche</option>
        <option value="filecoin">Filecoin</option>
        <option value="vechain">VeChain</option>
        <option value="tezos">Tezos</option>
        <option value="cosmos">Cosmos</option>
        <option value="algorand">Algorand</option>
        <option value="aave">Aave</option>
        <option value="near">NEAR</option>
      </select>
    </div>

    <div class="info-box">
      <p id="price">Price: --</p>
      <p id="marketCap">Market Cap: --</p>
      <p id="volume">24h Volume: --</p>
    </div>

    <div class="chart-section">
      <div class="chart-card">
        <h3>30-Day Price History</h3>
        <canvas id="cryptoChart"></canvas>
      </div>
      <div class="chart-card">
        <h3>Stakeholder Distribution</h3>
        <canvas id="stakeholderPieChart"></canvas>
      </div>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>


