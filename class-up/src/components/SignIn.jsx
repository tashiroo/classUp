import React from "react";

import "./SignIn.css";

export default function SignIn(props) {
  return (
    <div className="root">
       
      <section className="signin">
        <div>
          <h1>Sign In to Dribbble</h1>
          <div className="signinbtn">
          <button className="btn topbtn">Sign in with Google</button>
          <button className="btn">OK</button>
          </div>


          <fieldset className="inputInfometion">
          <label className="label">Username or Email Address</label>
          <input className="input"></input>
          </fieldset>
          <fieldset className="inputInfometion">
            <div className="row">
          <label className="label">Password</label>
          <a href="#" className="forget">Forget password?</a>
            </div>
          <input className="input"></input>
          </fieldset>
          
          <div className="signinbtn"><button className="btn underbtn">Sign In</button></div>
       </div>
      </section>
    
    </div>
  );
}
