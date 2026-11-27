import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} >
      <div>
        <img src={bannerImg1} />
        <div className="flex gap-2">
          <button className="btn btn-primary text-secondary absolute bottom-4 left-1/8 w-50 rounded-2xl">
            Track Your Parcel
          </button>
          <button className=" btn bg-base-200 text-secondary bg-#DADADA absolute bottom-4 left-1/3 w-30 h-10 rounded-xl">
            Be A Rider
          </button>
        </div>
      </div>
      <div>
        <img src={bannerImg2} />
      </div>
      <div>
        <img src={bannerImg3} />
      </div>
    </Carousel>
  );
};

export default Banner;
