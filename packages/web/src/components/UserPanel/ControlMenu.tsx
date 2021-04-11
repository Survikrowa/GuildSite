import React from "react";
import { NavLink } from "react-router-dom";
import { guildRanks } from "../../constants/guildRanks";
import { useSelector } from "react-redux";
import { getUserSession } from "../../redux/slices/sessionSlice";

type Props = {
  url: string;
};

export const ControlMenu = ({ url }: Props) => {
  const userSession = useSelector(getUserSession);
  return (
    <div className="row userPanel__menu">
      <div
        className="nav flex-column nav-pills w-100"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <NavLink
          className="nav-link userPanel__item"
          id="v-pills-home-tab"
          data-toggle="pill"
          role="tab"
          to={`${url}/myapplication`}
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          My Application
        </NavLink>
        {userSession ? (
          userSession.userRank === guildRanks.ADMIN || userSession.userRank ? (
            <NavLink
              className="nav-link userPanel__item"
              id="v-pills-home-tab"
              data-toggle="pill"
              role="tab"
              to={`${url}/applications`}
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Applications
            </NavLink>
          ) : null
        ) : null}
        {userSession ? (
          userSession.userRank === guildRanks.ADMIN ? (
            <NavLink
              className="nav-link userPanel__item"
              id="v-pills-profile-tab"
              data-toggle="pill"
              role="tab"
              to={`${url}/users`}
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Users
            </NavLink>
          ) : null
        ) : null}

        <NavLink
          className="nav-link userPanel__item"
          id="v-pills-profile-tab"
          data-toggle="pill"
          role="tab"
          to={`${url}/settings`}
          aria-controls="v-pills-profile"
          aria-selected="false"
        >
          Settings
        </NavLink>
      </div>
    </div>
  );
};
