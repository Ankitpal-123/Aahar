import "./App.css";
import { Switch, Route } from "react-router-dom";
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import React from "react";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
