import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledBurger = styled.div`

  .line {
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    /* &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    } */
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger className="navbar__burger" open={open} onClick={() => setOpen(!open)}>
        {console.log(open)}
        <div className={(open ? "nav-open" : "line")}/>
        <div className={(open ? "nav-open" : "line")}/>
        <div className={(open ? "nav-open" : "line")}/>
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
