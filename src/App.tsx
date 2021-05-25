import React from "react";
import Login from "./Components/Login";
import { Switch, Route } from "react-router-dom";
import Signup from "./Components/SignUp";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/projects"></Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
