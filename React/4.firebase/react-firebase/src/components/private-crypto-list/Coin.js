import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ coin }) => {
  return (
    <Link className="private-coin-link" to="/coindetail">
      <li className="private-coin">
        <img className="private-coin__icon" src={coin.image} alt="crypto-sign" />
        <div className="private-coin__container1">
          <span className="private-coin__name">{coin.id}</span>
          <span className="private-coin__abbreviation">({coin.symbol})</span>
        </div>
        <span className="private-coin__current-price">{coin.current_price}</span>
        <span className="private-coin__price-change-24">{coin.price_change_percentage_24h}%</span>
        <span className="private-coin__delete-icon">x</span>
      </li>
    </Link>
  );
};

export default Coin;
