import React, { useContext, useEffect, useState } from "react";
import coinGecko from "../../apis/coinGecko";
import { WatchListContext } from "../../context/watchListContext";
import Coin from "./Coin";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const { watchList } = useContext(WatchListContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "eur",
          ids: watchList.join(","),
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const renderCoins = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <ul className="coinlist">
        {coins.map((coin) => {
          return <Coin key={coin.id} coin={coin} />;
        })}
      </ul>
    );
  };

  return <div>{renderCoins()}</div>;
};

export default CoinList;