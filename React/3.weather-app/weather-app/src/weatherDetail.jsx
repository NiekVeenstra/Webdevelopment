import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherDetail = () => {
    useEffect(() => {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=30.489772&lon=-99.771335&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
          )
          .then((res) => {
            // console.log(res.data);
            console.log(res);
          })
          .catch((err) => console.log(err));
      }, []);
    return (
        <div>
           <h1>weather detail</h1> 
           <h1>weather detail</h1> 
           <h1>weather detail</h1> 
        </div>
    )
}

export default WeatherDetail
