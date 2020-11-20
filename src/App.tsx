import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.scss";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Recruit } from "./pages/Recruit";
import { PrivateRoute } from "./components/CustomRoutes/PrivateRoute";
import { UserPanel } from "./pages/UserPanel";
import { ConfirmAccount } from "./pages/ConfirmAccount";
import { AppMenu } from "./components/AppMenu/AppMenu";
import { useDispatch } from "react-redux";

import { fetchUserSession } from "./redux/slices/sessionSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserSession());
  }, [dispatch]);
  return (
    <Router>
      <AppMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route exact path="/recruit" component={Recruit} />
        <PrivateRoute path="/panel">
          <UserPanel />
        </PrivateRoute>
        <Route
          exact
          path="/confirmaccount/:activationCode"
          component={ConfirmAccount}
        />
      </Switch>
    </Router>
  );
}

export default App;
