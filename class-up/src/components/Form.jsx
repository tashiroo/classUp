import React from "react";

import "./Form.css";

export default function Form({ userName }) {
  return (
    <div className="root">
      <h1>Sign up to Dribbble</h1>

      <h2>Google</h2>
      <p>Please confirm that {userName} will be connected to your account</p>
      <p>
        Wrong identify? Sign out Google and <a>Start Over</a>
      </p>
      <div className="formInput">

      <input />
      <input />
      <input />
      <input />

      <button>Create Account</button>
      </div>
    </div>
  );
}
