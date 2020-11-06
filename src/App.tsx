import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.scss";
import { Home } from "./pages/Home";
import { AppMenu } from "./components/AppMenu/AppMenu";
import { AboutUs } from "./pages/AboutUs";
import { Recruit } from "./pages/Recruit";

function App() {
  return (
    <Router>
      <AppMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route exact path="/recruit" component={Recruit} />
      </Switch>
    </Router>
  );
}

export default App;
