import React from "react";
import WeatherCard from "./weatherCard";

import "./App.css";
function App() {
  return (
    <div className="App">
      <WeatherCard city="Amsterdam" />
      <WeatherCard city="Bangkok" />
    </div>
  );
}

export default App;
