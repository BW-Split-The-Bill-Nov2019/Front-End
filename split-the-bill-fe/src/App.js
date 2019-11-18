import React from "react";
import "./App.css";
import CreateAccount from "./components/CreateAccount";
import LogIn from "./components/LogIn";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="App">
      <CreateAccount />
      <LogIn />
    </div>
  );
}

export default App;
