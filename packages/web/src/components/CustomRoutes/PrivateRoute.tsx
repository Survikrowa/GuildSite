import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import {
  fetchUserSession,
  getUserSession,
} from "../../redux/slices/sessionSlice";
import { useDispatch } from "react-redux";

type Props = {
  children: React.ReactChild;
  exact?: boolean;
  path: string;
};

export const PrivateRoute = ({ children, ...rest }: Props) => {
  const userSession = useSelector(getUserSession);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserSession());
  }, [dispatch]);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userSession && userSession.username ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
