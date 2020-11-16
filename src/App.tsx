import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import "./app.scss";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Recruit } from "./pages/Recruit";
import { PrivateRoute } from "./components/CustomRoutes/PrivateRoute";
import { UserPanel } from "./pages/UserPanel";

const queryCache = new QueryCache();

function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route exact path="/recruit" component={Recruit} />
          <PrivateRoute path="/panel">
            <UserPanel />
          </PrivateRoute>
        </Switch>
      </Router>
    </ReactQueryCacheProvider>
  );
}

export default App;
