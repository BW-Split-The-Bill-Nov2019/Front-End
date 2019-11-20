import React from "react";
import "./App.css";
import CreateAccount from "./components/CreateAccount";
import LogIn from "./components/LogIn";
import Table from "./components/Table";

import Dashboard from "./components/DashBoard";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={CreateAccount} />
      <Route path="/login" component={LogIn} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/table" component={Table} />
    </div>
  );
}

export default App;
