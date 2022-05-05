import React from "react";
import "./index.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discord from "./pages/Discord";
import Twitter from "./pages/Twitter";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/discord">
        <Discord />
      </Route>
      <Route exact path="/twitter">
        <Twitter />
      </Route>
      <Route>
        <div>Not Found</div>
      </Route>
    </Switch>
  );
}

export default App;
