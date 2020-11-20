import React from "react";
import { AppCarousel } from "../components/AppCarousel/AppCarousel";

import { Gallery } from "../components/Gallery/Gallery";
import { AppFooter } from "../components/Footer/AppFooter";
import { OurOffer } from "../components/OurOffer/OurOffer";
import { Contact } from "../components/Contact/Contact";

export const Home = () => {
  return (
    <>
      <AppCarousel />
      <main className="main">
        <OurOffer />
        <Gallery />
        <Contact />
      </main>
      <AppFooter />
    </>
  );
};
