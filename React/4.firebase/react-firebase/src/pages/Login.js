import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../base";
import { AuthContext } from "../components/Auth";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-page">
      <div className="container">
        <h1 className="container__h1">Log In</h1>
        <form className="container__form" onSubmit={handleLogin}>
          <label className="container__form__label">
            Email:
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label className="container__form__label">
            Password:
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button className="container__form__login-button" type="submit">Log in</button>
        </form>
        <p>
          Don't have an account yet? <a href="/signup">Sign Up Now.</a>
        </p>
        <p>
          Did you forget your password? <a href="/forgot-password">Forgot Password.</a>
        </p>
      </div>
    </div>
  );
};

export default withRouter(Login);
