import React, { useCallback, useRef, useState } from "react";
import { withRouter } from "react-router";
import app from "../base";

const SignUp = ({ history }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      // const { email, password } = event.target.elements;

      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match");
      }

      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className="signup-page">
      <div className="container">
        <h1 className="container__h1">Sign up</h1>
        {error && (
          <div className="text-red" variant="danger">
            {error}
          </div>
        )}
        <form className="container__form" onSubmit={handleSignUp}>
          <label className="container__form__label">
            Email:
            <input name="email" type="email" ref={emailRef} placeholder="Email" required />
          </label>
          <label className="container__form__label">
            Password:
            <input
              name="password"
              type="password"
              ref={passwordRef}
              placeholder="Password"
              required
            />
          </label>
          <label className="container__form__label">
            Password Confirmation:
            <input
              name="password"
              type="password"
              ref={passwordConfirmRef}
              placeholder="Password"
              required
            />
          </label>
          <button className="container__form__login-button" type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/signup">Login Now.</a>
        </p>
        <p>
          Did you forget your password? <a href="/forgot-password">Forgot Password.</a>
        </p>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
