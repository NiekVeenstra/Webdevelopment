import React from "react";

const Crypto = ({ name, price, symbol, marketcap, volume, image, priceChange }) => {
  return (
    <div className="crypto-container">
      <div className="crypto-row">
        <div className="crypto">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="crypto-symbol">{symbol}</p>
        </div>
        <div className="crypto-data">
          <p className="crypto-price">&#x20AC;{price}</p>
          <p className="crypto-volume">&#x20AC;{volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="crypto-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="crypto-percent green">{priceChange.toFixed(2)}%</p>
          )}

          <p className="crypto-marketcap">Cap: &#x20AC;{marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
