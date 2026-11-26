import React from "react";
import Banner from "../Banner/Banner";
import WorksSection from "../WorksSection/worksSection";
import Services from "../../../components/Logo/Services/Services";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WorksSection></WorksSection>
      <Services></Services>
      <Brands></Brands>
      <Reviews reviewsPromise={re}></Reviews>
    </div>
  );
};

export default Home;
