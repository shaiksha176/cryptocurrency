import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://api.coinlore.net/api/tickers/`);
      console.log(result.data.data);
      setCoins(result.data.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <h1>Cryptocurrencies</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <table id="coins">
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, i) => (
              <tr key={i}>
                <td className="name">{coin.name}</td>
                <td className="symbol">{coin.symbol}</td>
                <td className="price">${coin.price_usd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
