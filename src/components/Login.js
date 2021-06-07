import React, { useState, useForm } from "react";
import logo from "../logo.svg";
import rightIcon from "../rightIcon.svg";
import leftIcon from "../leftIcon.svg";
import check from "../check.svg";
import close from "../close.svg";

const Login = () => {
  // show and hide password
  const [hideShow, setHideShow] = useState("show");
  const [passwordType, SetPasswordType] = useState("password");

  const hideShowPassword = () => {
    if (hideShow === "show") {
      setHideShow("hide");
      SetPasswordType("text");
    } else {
      setHideShow("show");
      SetPasswordType("password");
    }
  };

  return (
    <>
      <section className="login-section flex jcc aic center">
        <div className="alert flex jcsb aic">
          <div className="flex aic">
            <div className="check">
              <img src={check} alt="check" />
            </div>
            <p>Well done! You are successfully login </p>
          </div>
          <div className="close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="grid">
          <div className="login-wrapper">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <h2>Log In</h2>
            <p className="login-info">Please enter your login details below.</p>
            <form>
              <div className="input-field">
                <input
                  className="selectinput"
                  type="text"
                  name="name"
                  htmlFor="name"
                  required
                  autoComplete="off"
                />
                <label htmlFor="name">Username</label>
                <small>&f06a; Error message:</small>
              </div>
              <div className="input-field">
                <input
                  className="selectinput"
                  type={passwordType}
                  name="password"
                  htmlFor="password"
                  required
                />
                <label htmlFor="name">Password</label>
                <small>Error message:</small>
                <span className="hide-show" onClick={hideShowPassword}>
                  {hideShow}
                </span>
              </div>
              <div>
                <input
                  id="submit"
                  className="submit-btn"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="bg-login-right">
          <img src={rightIcon} alt="Icon" />
        </div>
        <div className="bg-login-left">
          <img src={leftIcon} alt="Icon" />
        </div>
      </section>
    </>
  );
};

export default Login;
