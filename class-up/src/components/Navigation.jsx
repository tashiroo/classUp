import React from "react";

import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="root">
      <header>
        <section className="navigation">
          <h1>Navigation</h1>
          <nav className="nav">
            <ul>
              <li><a href="#" className="box">TOP</a></li>
              <li><a href="#" className="box">MAIN</a></li>
              <li><a href="#" className="box">ABOUT</a></li>
              <li><a href="#" className="box">MASSEGE</a></li>
              <li><a href="#" className="box">SIGN IN</a></li>
            </ul>
          </nav>
        </section>
      </header>
    </div>
  );
}
