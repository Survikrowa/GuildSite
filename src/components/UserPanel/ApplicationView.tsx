import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { ApplicationControlPanel } from "./ApplicationControlPanel";
import axios from "axios";
import { Application } from "./Application";
type ApplicationParams = {
  id: string;
};

type ApplicationData = {
  igName: string;
  userDescription: string;
  age: string;
  mainAndAlts: string;
  prevExp: string;
  raidDays: string;
  uiScreen: string;
  whereDidUFindUs: string;
  prefRaidLang: string;
  applicationState: string;
  createdAt: string;
  userId: string;
};

export const ApplicationView = () => {
  const { id } = useParams<ApplicationParams>();
  const [application, setApplication] = useState<ApplicationData>();
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const getCurrentApplication = async () => {
      await axios
        .get(`http://api.gruzja.localhost:3001/api/applications/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          setApplication(res.data);
        })
        .catch((err) => {
          if (err.response.status !== 401) {
            setError(err.response.data.message);
          }
        });
    };
    getCurrentApplication();
  }, [id]);
  return (
    <div style={{ padding: "1rem" }}>
      {application ? (
        <>
          <Application application={application} />
          <ApplicationControlPanel />
        </>
      ) : (
        error
      )}
    </div>
  );
};
