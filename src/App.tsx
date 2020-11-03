import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.scss";
import { Home } from "./pages/Home";
import { AppMenu } from "./components/AppMenu/AppMenu";

function App() {
  return (
    <Router>
      <AppMenu />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
