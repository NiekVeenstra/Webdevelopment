import React, {useContext} from "react";
import { UserContext } from "./UserContext";

import WeatherCard from "./weatherCard";

const WeatherLanding = () => {
  const msg = useContext(UserContext);
  console.log(`test ${msg}`)
  return (
    <div className="weatherCards">
      <WeatherCard city="Rotterdam" />
      <WeatherCard city="Bangkok" />
    </div>
  );
};

export default WeatherLanding;
