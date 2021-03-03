import React, { useState } from "react";

import datejs from "./date";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "./App.css";

export default function App() {
  const data = datejs;
  const [value, onChange] = useState(new Date());

  // const day = data.map((test) => parseInt(test.date.slice(2, -5).replace("-", ""), 10));

  // const month = data.map((test) => parseInt(test.date.slice(0, 2).replace("-", ""), 10));

  // const year = data.map((test) => parseInt(test.date.slice(-4).replace("-", ""), 10));

  // const [value, setValue] = useState(new Date());

  // console.log(month);
  // console.log(data.map((yea) => yea.date));
  // console.log(data.map((test) => parseInt(test.date.slice(2, -5).replace("-", ""), 10)));
  // console.log(day);

  // data.map(({ date, name }) => {
  //   return (
  //     console.log(name),
  //     console.log(date),
  //     console.log(`month: ${date.slice(0, 2).replace("-", "")}`),
  //     console.log(`day: ${date.slice(2, -5).replace("-", "")}`),
  //     console.log(`year: ${date.slice(-4).replace("-", "")}`)
  //   );
  // });

  // const month1 = data.map(({ date }) => {
  //   return parseInt(date.slice(0, 2).replace("-", ""));
  // });
  // const day1 = data.map(({ date }) => {
  //   return parseInt(date.slice(2, -5).replace("-", ""));
  // });
  // const year1 = data.map(({ date }) => {
  //   return date.slice(-4).replace("-", "");
  // });

  // console.log(month1);
  // console.log(parseInt(month1));
  // console.log(day1);
  // console.log(parseInt(day1));
  // console.log(parseInt(year1));

  // &&
  //       date.getFullYear() === parseInt(year1)

  const backgroundChanger = () => {
    const x = document.querySelector(".test");
    // const x2 = x.parentNode;
    console.log(x);
    // console.log(x2);
  };
  backgroundChanger();

  const tileContent = ({ activeStarDate, date, view }) => {
    return data.map((iets) => {
      const datum = new Date(iets.date);
      const naam = iets.name.slice(0, 1);
      return view === "month" &&
        date.getDate() === datum.getDate() &&
        date.getMonth() === datum.getMonth() ? (
        <p className="test" name="testt">
          {naam}
        </p>
      ) : null;
    });
  };

  return (
    <div className="App">
      <Calendar tileContent={tileContent} onChange={onChange} value={value} />
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
