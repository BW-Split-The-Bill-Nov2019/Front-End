import React, { useState } from "react";
import "./App.css";
import CreateAccount from "./components/CreateAccount";
import LogIn from "./components/LogIn";
import Table from "./components/Table";

import Dashboard from "./components/DashBoard";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      <div className="App">
        <Route exact path="/" component={CreateAccount} />
        <Route
          path="/login"
          render={props => <LogIn {...props} setUser={setUser} />}
        />
        <PrivateRoute
          path="/dashboard"
          user={user}
          component={Dashboard}
          banana={true}
          testing={true}
        />
        <PrivateRoute path="/table" component={Table} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
