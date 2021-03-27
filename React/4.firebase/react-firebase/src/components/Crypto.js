import React, { useState, useEffect } from "react";
import axios from "axios";

const Crypto = ({ name, price, symbol, marketcap, volume, image, priceChange, rank }) => {
  const [chart, setChart] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=eur&days=1`)
      .then((res) => {
        setChart(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err.id));
  }, []);

  return (
    <div className="crypto-container">
      <div className="row">
        <div className="row__crypto">
          <h3>{rank}.</h3>
          <img src={image} alt="crypto" className="row__crypto__img" />
          <div className="row__crypto__name-container">
            <h1 className="row__crypto__name">{name}</h1>
            <p className="row__crypto__crypto-symbol">({symbol})</p>
          </div>
        </div>
        <div className="row__data">
          <p className="row__data__price">&#x20AC;{price}</p>
          {/* <p className="crypto-volume">&#x20AC;{volume.toLocaleString()}</p> */}

          {priceChange < 0 ? (
            <p className="row__data__percent text-red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="row__data__percent text-green">{priceChange.toFixed(2)}%</p>
          )}

          {/* <p className="crypto-marketcap">Cap: &#x20AC;{marketcap.toLocaleString()}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Crypto;
