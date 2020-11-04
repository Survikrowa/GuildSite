import React from "react";

type Props = {
  year: number;
  month: string;
  heading: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
};

export const AboutUsItem = ({
  year,
  month,
  heading,
  description,
  imgSrc,
  imgAlt,
}: Props) => {
  return (
    <div className="row about__item">
      <div className="col-12 col-lg-1 about__item-date mb-3">
        <div>{year}</div>
        <div>{month}</div>
      </div>
      <div className="col-12 col-lg-11">
        <div className="row">
          <div className="col-12 col-lg-7">
            <h5 className="about__item-heading">{heading}</h5>
            <p className="about__item-description">{description}</p>
          </div>
          <div className="col-12 col-lg-5">
            <img className="img-fluid" src={imgSrc} alt={imgAlt} />
          </div>
        </div>
      </div>
    </div>
  );
};
