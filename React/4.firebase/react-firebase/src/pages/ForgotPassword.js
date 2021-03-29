import React, { useRef } from "react";

import app from "../base";

const ForgotPassword = () => {
  const emailRef = useRef();

  const handlePasswordResetRequest = (event) => {
    event.preventDefault();
    console.log(emailRef.current.value);
    const email = emailRef.current.value;

    console.log(app.auth());

    // app.doPasswordReset(email);
  };

  return (
    <div className="forgot-password-page">
      <div className="container">
        <h1 className="container__h1">Forgot Password</h1>
        <form className="container__form" onSubmit={handlePasswordResetRequest}>
          <label className="container__form__label">
            Email:
            <input name="email" type="email" ref={emailRef} placeholder="Email" />
          </label>
          <button className="container__form__login-button" type="submit">
            Send request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
