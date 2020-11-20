import React from "react";

import { Route, Switch, useRouteMatch } from "react-router-dom";
import { ApplicationsList } from "../components/UserPanel/ApplicationsList";
import { ApplicationView } from "../components/UserPanel/ApplicationView";
import { ControlMenu } from "../components/UserPanel/ControlMenu";
import { MyApplication } from "../components/UserPanel/MyApplication";

export const UserPanel = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <main className="main">
        <section className="userPanel container">
          <div className="row min-h-75">
            <div className="col-lg-2 " style={{ minHeight: "6rem" }}>
              <ControlMenu url={url} />
            </div>
            <div className="col-lg-4">
              <Switch>
                <Route path={`${path}/applications`}>
                  <ApplicationsList />
                </Route>
                <Route exact path={`${path}/users`}>
                  <h1>
                    EBER DOSTANIESZ TO, ALE POZNIEJ, BEDZIESZ TUTAJ MOGL
                    ZMIENIAC RANGI UZYTKOWNIKOW
                  </h1>
                </Route>
                <Route path={`${path}/myapplication`}>
                  <MyApplication />
                </Route>
              </Switch>
            </div>
            <div className="col-lg-4">
              <Switch>
                <Route path={`${path}/applications/:id`}>
                  <ApplicationView />
                </Route>
              </Switch>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
