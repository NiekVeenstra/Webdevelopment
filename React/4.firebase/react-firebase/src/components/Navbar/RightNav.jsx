import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;
    background-color: #ffffff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.5s ease-in-out;
    .link {
      color: #000000;
      text-decoration: none;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        {" "}
        <Link className="link" to="/" style={{ textDecoration: 'none', color: "black" }}>
          Home
        </Link>
      </li>
      <li>
        {" "}
        <Link className="link" to="/login" style={{ textDecoration: 'none', color: "black"  }}>
          Login
        </Link>
      </li>
      <li>
        {" "}
        <Link className="link" to="/signup" style={{ textDecoration: 'none', color: "black"  }}>
          Sign Up
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
