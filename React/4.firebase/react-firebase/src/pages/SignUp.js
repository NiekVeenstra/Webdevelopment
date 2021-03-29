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
    <div>
      <h1>Sign up</h1>
      {error && (
        <div className="text-red" variant="danger">
          {error}
        </div>
      )}
      <form onSubmit={handleSignUp}>
        <label>
          Email:
          <input name="email" type="email" ref={emailRef} placeholder="Email" required />
        </label>
        <label>
          Password:
          <input name="password" type="password" ref={passwordRef} placeholder="Password" required/>
        </label>
        <label>
          Password Confirmation:
          <input
            name="password"
            type="password"
            ref={passwordConfirmRef}
            placeholder="Password"
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
