import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/style.css";

import WeatherLanding from "./weatherLanding";
import WeatherDetail from "./weatherDetail";

function App() {
  const city = "Rotterdam";
  const [weather, setWeather] = useState({});
  const [weatherMain, setWeatherMain] = useState({});
  const [weatherImg, setWeatherImg] = useState({});
  // const [coords, setCoords] = useState({});
  // const [lat, setLat] = useState({});
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
        // console.log(res.data);
        // console.log(res.data.coord.lon);
        // setCoords(res.data.coord)
        // console.log(coords.lon)
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Router>
      <div className="App">
        <h1>WeatherApp</h1>
        <Switch>
          <Route
            exact
            path="/"
            component={WeatherLanding}
            

            weather={weather}
            setWeather={setWeather}
            weather={weatherMain}
            setWeather={setWeatherMain}
            weather={weatherImg}
            setWeather={setWeatherImg}
            // coords={coords}
            // setCoords={setCoords}
          />
          <Route exact path="/details" component={WeatherDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
