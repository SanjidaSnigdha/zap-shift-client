import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
      >
        <div ">
          <img src={bannerImg1} alt="Banner 1" className="w-full" />
        </div>

        <div>
          <img src={bannerImg2} alt="Banner 2" />
        </div>

        <div>
          <img src={bannerImg3} alt="Banner 3" />
        </div>
      </Carousel>
      <div className="flex gap-4 absolute">
        <button className="btn btn-primary text-secondary rounded-2xl font-[Urbanist] font-bold">
          Become a Merchant
        </button>
        <button className="btn text-primary bg-secondary rounded-2xl font-[Urbanist] font-bold">
          Earn with ZapShift Courier
        </button>
      </div>
    </div>
  );
};

export default Banner;
