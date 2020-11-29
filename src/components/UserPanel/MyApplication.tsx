import React, { useEffect, useState } from "react";
import { Application } from "./Application";
import axios from "axios";
import { axiosInstance } from "../../helpers/axiosInstance";

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

export const MyApplication = () => {
  const [application, setApplication] = useState<ApplicationData>();
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const getApplication = async () => {
      await axiosInstance
        .get("/api/session/me/application", {
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
    getApplication();
  }, []);
  if (application) return <Application application={application} />;
  if (error) return <div>{error}</div>;
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};
