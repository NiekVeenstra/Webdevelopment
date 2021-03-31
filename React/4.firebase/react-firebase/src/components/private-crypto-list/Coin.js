import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ coin }) => {
    console.log(coin.id)
  return (
    <Link className="coin" to="/coindetail">
      <li>
        <img src={coin.image} alt="crypto-sign" />
        <span>{coin.current_price}</span>
        <span>
          <i className="fas fa-sort-down"></i>
          {coin.price_change_percentage_24h}
        </span>
        <i className="delete-icon far fa-times-circle"></i>
      </li>
    </Link>
  );
};

export default Coin;
