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

  console.log(`test ${day.length}`);
  for (i = 0; i < day.length; i++) {
    console.log(day[i]);
  }

  return (
    <div className="App">
      <Calendar
        tileContent={({ activeStartDate, date, view }) =>
          view === "month" &&
          date.getDate() === day[0] &&
          date.getMonth() === month[0] - 1 &&
          date.getFullYear() === year[0] ? (
            <p>It's holiday!</p>
          ) : null
        }
      />
    </div>
  );
}
