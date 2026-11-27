import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}
    >
      <div className="relative">
        <img src={bannerImg1} alt="Banner 1" className="w-full" />

        <div className="absolute bottom-[5%] left-[5%] flex gap-2 z-10">
          <button className="btn btn-primary text-secondary btn-xs sm:btn-sm md:btn-md rounded-xl">
            Track Your Parcel
          </button>

          <button className="btn bg-base-200 text-secondary btn-xs sm:btn-sm md:btn-md rounded-xl">
            Be A Rider
          </button>
        </div>
      </div>

      <div>
        <img src={bannerImg2} alt="Banner 2" />
        <div className="absolute bottom-[5%] left-[5%] flex gap-2 z-10">
          <button className="btn btn-primary text-secondary btn-xs sm:btn-sm md:btn-md rounded-xl">
            Track Your Parcel
          </button>

          <button className="btn bg-base-200 text-secondary btn-xs sm:btn-sm md:btn-md rounded-xl">
            Be A Rider
          </button>
        </div>
      </div>

      <div>
        <img src={bannerImg3} alt="Banner 3" />
        
      </div>
    </Carousel>
  );
};

export default Banner;
