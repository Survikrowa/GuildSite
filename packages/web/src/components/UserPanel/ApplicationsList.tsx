import React, { useEffect, useState } from "react";
import dayJs from "dayjs";
import { Link, useRouteMatch } from "react-router-dom";
import { axiosInstance } from "../../helpers/axiosInstance";

type ApplicationProps = {
  response: ApplicationData[];
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

export const ApplicationsList = () => {
  const [applications, setApplications] = useState<ApplicationProps>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const { url } = useRouteMatch();
  useEffect(() => {
    const getApplications = async () => {
      await axiosInstance
        .get("/api/applications/", {
          withCredentials: true,
        })
        .then((response) => {
          setIsLoading(false);
          setApplications(response.data);
        })
        .catch((error) => setError(error.response));
    };
    getApplications();
  }, []);

  const renderApplications = () => {
    if (applications)
      return applications.response.map((application) => {
        const applicationCreateDate = dayJs(application.createdAt);
        return (
          <Link
            to={`${url}/${application.userId}`}
            style={{
              color: "#efe3c3",
              display: "flex",
              justifyContent: "space-around",
              maxWidth: "21rem",
              minWidth: "21rem",
              borderRadius: "5rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              paddingLeft: "1rem",
              cursor: "pointer",
              backgroundColor: "#303030",
            }}
            key={application.userId}
          >
            <div
              style={{
                color: "#efe3c3",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "6rem",
              }}
            >
              <span>{applicationCreateDate.format("DD.MM.YYYY")}</span>
              <span>{applicationCreateDate.format("HH:mm")}</span>
            </div>
            <div
              style={{
                color: "#efe3c3",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {application.igName}
            </div>
            <div
              style={{
                color: "#efe3c3",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {application.applicationState}
            </div>
          </Link>
        );
      });
  };
  if (isLoading)
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  if (error) return <h1>{error}</h1>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        alignItems: "center",
        marginTop: "2rem",
        maxHeight: "200px",
      }}
    >
      {renderApplications()}
    </div>
  );
};
