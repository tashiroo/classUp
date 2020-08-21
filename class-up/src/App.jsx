import React from "react";
import Form from "./components/Form";
import CardList from "./components/CardList";
import Navigation from "./components/Navigation";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Form userName="田代一" className="form" /> */}
      <CardList />
      <SignIn />
      <SignUp />
      <Navigation />
    </div>
  );
}

export default App;
