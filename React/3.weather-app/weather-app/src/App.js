import React from "react";
import WeatherCard from "./weatherCard";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/style.css";

import WeatherLanding from "./weatherLanding";
import WeatherDetail from "./weatherDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>WeatherApp</h1>
        <Switch>
          <Route exact path="/" component={WeatherLanding} />
          <Route exact path="/detail" component={WeatherDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
