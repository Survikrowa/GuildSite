import Carousel from "nuka-carousel";
import React from "react";
import wow from "../../assets/wow.jpg";
import icecrown from "../../assets/icecrown.jpg";
import league from "../../assets/league.jpg";
import valorant from "../../assets/valorant.jpg";
import minecraft from "../../assets/minecraft.jpg";

export const AppCarousel = () => {
  return (
    <div className="hero text-center">
      <Carousel
        wrapAround={true}
        autoplay
        autoplayInterval={5000}
        withoutControls
      >
        <img className="hero__background" src={icecrown} alt="icecrown" />
        <img className="hero__background" src={league} alt="leage of legends" />
        <img className="hero__background" src={wow} alt="burning crusade" />
        <img className="hero__background" src={valorant} alt="valorant" />
        <img className="hero__background" src={minecraft} alt="minecraft" />
      </Carousel>
      <h1 className="hero__heading">Muzykanci z Gruzji</h1>
      <h2 className="hero__subheading">
        Probably the best crew you could find to talk and play together.
      </h2>

      <svg
        className="hero__chevron-down"
        enable-background="new 0 0 64 64"
        height="32"
        viewBox="0 0 64 64"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#EFE3C3"
          d="m32 8c-1.104 0-2 .896-2 2v39.899l-14.552-15.278c-.761-.799-2.026-.832-2.828-.069-.8.762-.831 2.027-.069 2.827l16.62 17.449c.756.756 1.76 1.172 2.829 1.172 1.068 0 2.073-.416 2.862-1.207l16.586-17.414c.762-.8.73-2.065-.069-2.827-.799-.763-2.065-.731-2.827.069l-14.552 15.342v-39.963c0-1.104-.896-2-2-2z"
        />
      </svg>
    </div>
  );
};
