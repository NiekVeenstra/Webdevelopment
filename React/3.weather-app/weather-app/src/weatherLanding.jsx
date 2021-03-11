import React from "react";

import WeatherCard from "./weatherCard";

const WeatherLanding = ({ cityArray }) => {
  console.log(cityArray);
  return (
    <div className="weatherCards">
      <WeatherCard city="Rotterdam" />
      <WeatherCard city="Bangkok" />
    </div>
  );
};

export default WeatherLanding;
