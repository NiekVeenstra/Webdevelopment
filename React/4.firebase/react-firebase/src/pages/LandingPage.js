import React, { useEffect, useState } from "react";
import axios from "axios";
import Crypto from "../components/Crypto";

const LandingPage = () => {
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        setCryptos(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err.id));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const searchCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );

  const searchBar = () =>{
    console.log("test")
  }
  return (
    <div className="landing-page">
      <div className="content">
        <h1 className="content__h1">Welcome to Niek's Crypto World</h1>
        <div className="content__search-bar">
          <h1>Search your crypto</h1>
          <button className="content__search-bar__button" onClick={searchBar}>
            <img
              src="https://i.postimg.cc/Znd9kBKF/seo-social-web-network-internet-340-icon-icons-com-61497.png"
              alt="search"
            />
          </button>
          <form>
            <input
              className="coin-input"
              type="text"
              onChange={handleChange}
              placeholder="Search"
            />
          </form>
        </div>
        {searchCryptos.map((crypto) => {
          return (
            <Crypto
              key={crypto.id}
              name={crypto.name}
              price={crypto.current_price}
              symbol={crypto.symbol}
              volume={crypto.total_volume}
              marketcap={crypto.market_cap}
              image={crypto.image}
              priceChange={crypto.price_change_percentage_24h}
              rank={crypto.market_cap_rank}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
