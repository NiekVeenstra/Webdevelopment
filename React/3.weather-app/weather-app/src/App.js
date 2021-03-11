import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "./UserContext";

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

  return (
    <Router>
      <div className="App">
        <h1>WeatherApp</h1>
        <Switch>
          <UserContext.Provider value={cityArray}>
            <Route exact path="/" component={WeatherLanding} />
            <Route exact path="/details" component={WeatherDetail} />
          </UserContext.Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
