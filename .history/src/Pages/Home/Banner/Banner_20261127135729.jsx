import React from "react";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={bannerImg1} alt="" />
        </div>
        <div>
            <img src={b} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
