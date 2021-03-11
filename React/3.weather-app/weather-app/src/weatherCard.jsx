import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const WeatherCard = ({ city }) => {
  const [weather, setWeather] = useState({});
  const [weatherMain, setWeatherMain] = useState({});
  const [weatherImg, setWeatherImg] = useState({});
  const [coords, setCoords] = useState({});
  const [lat, setLat] = useState({});
  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
      )
      .then((res) => {
        setWeather(res.data);
        setWeatherMain(res.data.main);
        setWeatherImg(res.data.weather[0]);
        // console.log(res.data);
        console.log(res.data.coord.lon);
        setCoords(res.data.coord)
        console.log(coords.lon)
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Link to="/details" className="link" coords={coords}>
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
