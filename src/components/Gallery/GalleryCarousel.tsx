import Carousel from "nuka-carousel";
import React from "react";
import aboutUs1 from "../../assets/aboutUs1.png";
import aboutUs2 from "../../assets/aboutUs2.png";
import aboutUs3 from "../../assets/aboutUs3.png";
import aboutUs4 from "../../assets/aboutUs4.jpg";
import aboutUs5 from "../../assets/aboutUs5.png";

export const GalleryCarousel = () => {
  return (
    <Carousel
      slidesToShow={3}
      wrapAround={true}
      autoplay
      autoplayInterval={7000}
      withoutControls
      cellSpacing={40}
    >
      <img className="gallery__item" src={aboutUs2} alt="icecrown" />
      <img className="gallery__item" src={aboutUs3} alt="leage of legends" />
      <img className="gallery__item" src={aboutUs4} alt="burning crusade" />
      <img className="gallery__item" src={aboutUs1} alt="valorant" />
      <img className="gallery__item" src={aboutUs5} alt="minecraft" />
    </Carousel>
  );
};
