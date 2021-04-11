import React from "react";
import tickMark from "../../assets/tick-mark.svg";

export const FeatureItem: React.FC = ({ children }) => {
  return (
    <div className=" features__item media col-12 col-lg-6 mt-4">
      <img
        className="features__check-mark align-self-center mr-3"
        src={tickMark}
        alt="check mark"
      />
      <div className="features__text media-body">
        <p className="features__text">{children}</p>
      </div>
    </div>
  );
};
