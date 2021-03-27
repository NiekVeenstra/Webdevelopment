import React, { useState } from "react";
import RightNav from "./RightNav";

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="navbar__burger" open={open} onClick={() => setOpen(!open)}>
        {console.log(open)}
        <div className={open ? " nav-open" : " line"} />
        <div className={open ? " nav-open" : " line"} />
        <div className={open ? " nav-open" : " line"} />
      </div>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
