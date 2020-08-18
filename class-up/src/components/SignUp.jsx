import React from "react";

import "./SignUp.css";

export default function SignUp(props) {
  return (
    <div className="root">
      <section className="signUp">
        <div>
          <h1>Sign up to Dribbble</h1>
          <div className="signupbtn">
            <button className="btn topbtn">Sign up with Google</button>
            <button className="btn">OK</button>
          </div>
          <p className="or">Or</p>

          <div className="flexbox">
            <fieldset className="inputName">
              <label className="label">Name</label>
              <input className="input"></input>
            </fieldset>
            <fieldset className="inputName">
              <label className="label">Username</label>
              <input className="input"></input>
            </fieldset>
          </div>
          <fieldset className="inputInfometion">
            <div className="row">
              <label className="label">Email</label>
            </div>
            <input className="input"></input>
          </fieldset>
          <fieldset className="inputInfometion">
            <div className="row">
              <label className="label">Password</label>
            </div>
            <input className="input"></input>
          </fieldset>
          <div className="font bottonflex">
            <input type="checkbox" />
            <p>
              Creating an account means you're okay with our{" "}
              <a href="#">Terms of Service,Privacy Policy,</a>and our default{" "}
              <a href="#">Notification Settings.</a>
            </p>
          </div>
          <div className="signinbtn">
            <button className="btn underbtn">Create Account</button>
          </div>
          <div className="font">
            <p>
              this site is protected by reCAPTCHA and the Google <br />
              <a herf="#">Privacy Policy</a>and <a href="#">Terms of Service</a>
              apply.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
