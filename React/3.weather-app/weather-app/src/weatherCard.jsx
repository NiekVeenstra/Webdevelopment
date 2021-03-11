import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const WeatherCard = ({ city, weather, setWeather, weatherImg, setWeatherImg, weatherMain, setWeatherMain }) => {
  return (
    <Link to="/details" className="link">
      <div className="weatherCard">
        {weather && (
          <div className="weatherCard__content">
            <h1>{weather.name}</h1>
            <h2>{weatherImg.description}</h2>
            <h2>{Math.floor(weatherMain.temp)}&#8451;</h2>
            <img src={`http://openweathermap.org/img/wn/${weatherImg.icon}@2x.png`} alt="" />
            <div className="weatherCard__extraInfo">
              <div className="weatherCard__extraInfo-left">
                {" "}
                <h3>min. temp</h3>
                <h3>max. temp</h3>
                <h3>humidity</h3>
              </div>
              <div className="weatherCard__extraInfo-right">
                {" "}
                <h3>{Math.floor(weatherMain.temp_min)}</h3>
                <h3>{Math.floor(weatherMain.temp_max)}</h3>
                <h3>{Math.floor(weatherMain.humidity)}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default WeatherCard;
