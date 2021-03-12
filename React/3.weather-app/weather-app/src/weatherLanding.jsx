import React, { useContext } from "react";
import { UserContext } from "./UserContext";

import WeatherCard from "./weatherCard";

const WeatherLanding = () => {
  const msg = useContext(UserContext);
  return (
    <div className="weatherCards">
      <WeatherCard city={msg[0]} />
      <WeatherCard city={msg[1]} />
    </div>
  );
};

export default WeatherLanding;
