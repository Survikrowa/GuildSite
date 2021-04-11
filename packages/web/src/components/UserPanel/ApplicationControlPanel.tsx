import axios from "axios";
import React from "react";
import { useHistory, useParams } from "react-router-dom";

type ApplicationParams = {
  id: string;
};

export const ApplicationControlPanel = () => {
  const { id } = useParams<ApplicationParams>();
  const history = useHistory();
  const handleButtonClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    await axios
      .put(
        `http://api.gruzja.localhost:3001/api/applications/${id}`,
        { status: value },
        { withCredentials: true }
      )
      .then((res) => history.push("/panel"));
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        type="button"
        className="nav-link nav-link__button"
        onClick={handleButtonClick}
        value="Approved"
      >
        Approve
      </button>
      <button
        type="button"
        className="nav-link nav-link__button"
        value="Rejected"
        onClick={handleButtonClick}
      >
        Reject
      </button>
      <button
        type="button"
        className="nav-link nav-link__button"
        value="InviteToDiscord"
        onClick={handleButtonClick}
      >
        Invite to discord
      </button>
    </div>
  );
};
