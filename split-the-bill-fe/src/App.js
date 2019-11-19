import React from "react";
import "./App.css";
import CreateAccount from "./components/CreateAccount";
import LogIn from "./components/LogIn";
import Table from "./components/Table";
import Dashbord from "./components/DashBoard";

function App() {
  return (
    <div className="App">
      <Dashbord />
      <CreateAccount />
      <LogIn />
      <Table />
    </div>
  );
}

export default App;
