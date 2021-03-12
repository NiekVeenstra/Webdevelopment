import React, { useEffect, useState } from "react";
import axios from "axios";

import { useLocation } from "react-router-dom";

import Accordion from 'react-tiny-accordion'

const WeatherDetail = () => {
  const data = useLocation();
  console.log(data.name);
  const city = data.name;
  const lat = data.coords.coordslat;
  const lon = data.coords.coordslon;
  // -------------------------------
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
      )
      .then((res) => {
        // console.log(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>{city}</h1>
      {/* ------------------- */}

      <Accordion className="accordion">
        <div data-header={`${city}`}>Content 1</div>
        <div data-header="tralala">Content 2</div>
      </Accordion>

      {/* ------------------- */}
    </div>
  );
};

export default WeatherDetail;
