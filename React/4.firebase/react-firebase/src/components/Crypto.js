import React from "react";

const Crypto = ({ name, price, symbol, marketcap, volume, image, priceChange }) => {
  return (
    <div className="crypto-container">
      <div className="row">
        <div className="row__crypto">
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
            <p className="row__data__percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="row__data__percent green">{priceChange.toFixed(2)}%</p>
          )}

          {/* <p className="crypto-marketcap">Cap: &#x20AC;{marketcap.toLocaleString()}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Crypto;
