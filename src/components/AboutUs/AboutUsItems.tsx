import React from "react";
import { aboutUsItems } from "../../data/aboutUsItems";
import { AboutUsItem } from "./AboutUsItem";
type Items = {
  year: number;
  month: string;
  heading: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
};
export const AboutUsItems = () => {
  const items = () =>
    aboutUsItems.map(
      ({ year, month, heading, description, imgSrc, imgAlt }: Items, i) => (
        <AboutUsItem
          year={year}
          month={month}
          heading={heading}
          description={description}
          imgSrc={imgSrc}
          imgAlt={imgAlt}
          key={i}
        />
      )
    );

  return <>{items()}</>;
};
