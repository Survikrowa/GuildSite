import React from "react";
import tavern from "../assets/tavern.jpg";
import { AboutUsItems } from "../components/AboutUs/AboutUsItems";
import { AppFooter } from "../components/Footer/AppFooter";

export const AboutUs = () => {
  return (
    <main className="main">
      <section className="about">
        <div className="container">
          <p className="about__intro">
            Muzykanci z Gruzji to Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestias adipisci sequi asperiores ullam iusto,
            facilis praesentium quae natus qui, neque, illum dolorum aliquid
            expedita. Maxime illum consequatur excepturi inventore aliquam.
            Vero, eum! Officia nemo optio quis ad laboriosam in tenetur libero
            nostrum itaque dolore modi obcaecati velit, repudiandae unde qui
            reprehenderit consequatur veniam? Ipsum neque libero nostrum atque
            earum quidem. Eos nemo et nihil ut molestias blanditiis sequi
            veritatis perferendis nostrum. Eaque minima, itaque autem corrupti,
            nihil sed natus delectus fuga modi voluptatibus optio consequatur
            iste, quibusdam maxime nisi ipsum. Molestiae provident,
            necessitatibus officiis in repellendus fugiat velit voluptatibus
            dolores unde itaque aut aperiam doloribus blanditiis aspernatur
            fuga? Sit neque cum sunt fugit at suscipit vel quae nihil amet
            necessitatibus?
          </p>
          <img className="img-fluid" src={tavern} alt="tavern" />
          <h1 className="about__heading display-4 my-5">
            But let's start from the beginning...
          </h1>
          <AboutUsItems />
        </div>
      </section>
      <AppFooter />
    </main>
  );
};
