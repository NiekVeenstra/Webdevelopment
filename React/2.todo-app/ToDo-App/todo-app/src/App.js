import React, { useState } from "react";

import datejs from "./date";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

export default function App() {
  const data = datejs;

  const day = data.map((test) => parseInt(test.date.slice(2, -5).replace("-", ""), 10));

  const month = data.map((test) => parseInt(test.date.slice(0, 2).replace("-", ""), 10));

  const year = data.map((test) => parseInt(test.date.slice(-4).replace("-", ""), 10));

  const [value, setValue] = useState(new Date());

  // console.log(month);
  console.log(data.map((yea) => yea.date));
  console.log(data.map((test) => parseInt(test.date.slice(2, -5).replace("-", ""), 10)));
  console.log(day);
  // console.log(month.map((x) => x));

  const tileContent = ({ activeStarDate, date, view }) => {
    return data.map((test) => {
      return view === "month" &&
        date.getDate() === day[0] &&
        date.getMonth() === month[0] - 1 &&
        date.getFullYear() === year[0] ? (
        <p>test test test</p>
      ) : null;
    });
  };

  return (
    <div className="App">
      <Calendar tileContent={tileContent} />
    </div>
  );

  // function tileContent({date, view}) {
  //   return data.datums.map(el=>{
  //   return (
  //            view === "month" &&
  //            date.getDate() === el.date &&
  //            date.getMonth() === el.month ?
  //            (<p>{JSON.stringify(el.name)}</p>) : null
  //            ); } )}
}
