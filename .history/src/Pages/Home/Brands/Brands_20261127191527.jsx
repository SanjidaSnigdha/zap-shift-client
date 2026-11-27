import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";
const brandLogos = [
  amazon,
  amazon_vector,
  casio,
  moonstar,
  randstad,
  star,
  start_people,
];

const Brands = () => {
  return (
    <div className="mt-18">
      <h3 className="font-extrabold text-secondary text-4xl items-start">
        We've helped thousands of sales teams
      </h3>
      <Swiper
        loop={true}
        slidesPerView={4}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img className="mt-12" src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>

     
      

      

        <div className="border-l border-dashed border-[#5B8790] self-stretch my-3"></div>

        <div className="p-2 sm:p-3 lg:p-3 flex-1">
          <h3 className="font-extrabold text-base sm:text-xl lg:text-2xl text-secondary">
            24/7 Call Center Support
          </h3>
          <p className="text-base-300 font-medium font-[Urbanist] mt-1 sm:mt-2 text-xs sm:text-sm lg:text-sm">
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>

      <div className="border-t border-dashed border-[#5B8790] mt-12 mb-12 w-full"></div>
    </div>
  );
};

export default Brands;
