import React from "react";
import "./styling/style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/NavBar";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Settings from "./pages/Settings";
import { AuthProvider } from "./components/Auth";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/settings" component={Settings} />
          <Route exact path="/landing-page" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
