import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/style.css";

import WeatherLanding from "./weatherLanding";
import WeatherDetail from "./weatherDetail";

function App() {
  const cityArray = [
    {
      name: "Rotterdam",
    },
    {
      name: "Bangkok",
    },
  ];

  const [citys, setCitys] = useState(cityArray);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = citys.slice(indexOfFirstPost, indexOfLastPost);

  console.log(`city array app ${setCitys}`);
  return (
    <Router>
      <div className="App">
        <h1>WeatherApp</h1>
        <Switch>
          <Route
            exact
            path="/"
            component={WeatherLanding}
            posts={currentPosts}
            // weather={weather}
            // setWeather={setWeather}
            // weather={weatherMain}
            // setWeather={setWeatherMain}
            // weather={weatherImg}
            // setWeather={setWeatherImg}
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
