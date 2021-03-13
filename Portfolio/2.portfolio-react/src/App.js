import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/styles.css";

import NavBar2 from "./components/Navbar/NavBar2";

function App() {
  return (
    <Router>
      <NavBar2 />
    </Router>
  );
}

export default App;
