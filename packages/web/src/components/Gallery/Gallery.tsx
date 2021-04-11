import React from "react";
import { GalleryCarousel } from "./GalleryCarousel";

export const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container-fluid gallery__container">
        <h2 className="gallery__heading display-4 text-center">Gallery</h2>
        <p className="gallery__subheading text-center">
          One image can describe more than thousands of words.
        </p>
        <div className="owl-carousel gallery__carousel mt-5">
          <GalleryCarousel />
        </div>
      </div>
    </section>
  );
};
