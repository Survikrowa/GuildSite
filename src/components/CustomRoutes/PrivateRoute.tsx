import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import ms from "ms";

const getSession = async () => {
  const { data } = await axios.get(
    "http://api.gruzja.localhost:3001/api/session/me",
    {
      withCredentials: true,
    }
  );
  return data;
};

type Props = {
  children: React.ReactChild;
  exact?: boolean;
  path: string;
};

export const PrivateRoute = ({ children, ...rest }: Props) => {
  const { data } = useQuery("session", getSession, {
    cacheTime: ms("5 minutes"),
    staleTime: ms("5 minutes"),
  });
  return data ? (
    <Route
      {...rest}
      render={({ location }) =>
        data.username ? (
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
  ) : (
    <span>"loading"</span>
  );
};
