import React, { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

const CustomCalendar = ({ dates }) => {
  const [value, onChange] = useState(new Date());
  const [tileClassName, setTileClassName] = useState([]);
  console.log(`these are the ${dates}`);
  return (
    <div>
      <Calendar onChange={onChange} value={value} titleClassName={tileClassName} />
    </div>
  );
};

export default CustomCalendar;
