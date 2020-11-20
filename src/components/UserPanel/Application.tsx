import React from "react";

type ApplicationProps = {
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

type ApplicationData = {
  application: ApplicationProps;
};

const REG_EXP_URL = new RegExp(
  /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi
);

export const Application = (application: ApplicationData) => {
  const appResponse = application.application;
  return (
    <div className="application__container">
      <div className="application__row">
        <span
          className="application__item"
          style={{ borderRight: "2px solid white" }}
        >
          In game nickname:
        </span>
        <span className="application__item">{appResponse.igName}</span>
      </div>
      <div className="application__row">
        <span className="application__item">Age:</span>
        <span className="application__item">{appResponse.age}</span>
      </div>
      <div className="application__row">
        <span className="application__item">Main and alts names:</span>
        <span className="application__item">{appResponse.mainAndAlts}</span>
      </div>
      <div className="application__row">
        <span className="application__item">Previous Expierence:</span>
        <span className="application__item">{appResponse.prevExp}</span>
      </div>
      <div className="application__row">
        <span className="application__item">Raid times:</span>
        <span className="application__item">{appResponse.raidDays}</span>
      </div>
      <div className="application__row">
        <span className="application__item">UI Screenshoot:</span>
        <span className="application__item">
          {appResponse.uiScreen.match(REG_EXP_URL) ? (
            <a href={appResponse.uiScreen}>{appResponse.uiScreen}</a>
          ) : (
            appResponse.igName
          )}
        </span>
      </div>
      <div className="application__row">
        <span className="application__item">How did you learn about us? </span>
        <span className="application__item">{appResponse.whereDidUFindUs}</span>
      </div>
      <div className="application__row">
        <span className="application__item">
          Attitude to majority of Polish players:
        </span>
        <span className="application__item">{appResponse.prefRaidLang}</span>
      </div>
      <div className="application__row">
        <span className="application__item">About self:</span>
        <span className="application__item">{appResponse.userDescription}</span>
      </div>
      <h3
        style={{
          textAlign: "center",
        }}
      >
        {appResponse.applicationState === "InviteToDiscord" ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Application Status: {appResponse.applicationState}</span>

            <a href="https://discord.gg/QDKDj6h9ff}">Discord Invite</a>
          </div>
        ) : (
          <span>Application Status: {appResponse.applicationState}</span>
        )}
      </h3>
    </div>
  );
};
