import React from "react";

import WeatherCard from "./weatherCard";

const WeatherLanding = ({ weather, setWeather, weatherImg, setWeatherImg, weatherMain, setWeatherMain }) => {
  console.log(setWeather);
  return (
    <div className="weatherCards">
      <WeatherCard
        city={"Rotterdam"}
        weather={weather}
        setWeather={setWeather}
        weather={weatherMain}
        setWeather={setWeatherMain}
        weather={weatherImg}
        setWeather={setWeatherImg}
      />
      <WeatherCard city={"Bangkok"} />
    </div>
  );
};

export default WeatherLanding;
