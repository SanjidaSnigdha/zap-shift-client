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
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img className="mt-12" src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="card lg:card-side bg-base-200 w-270 h-80 shadow-sm mt-15">
        <figure className="w-80 h-70 p-8">
          <img src="/src/assets/live-tracking.png" alt="Album" />
        </figure>
        <div className="border-l border-dashed border-[#5B8790] h-50 mt-12"></div>
        <div className="card-body">
          <h3 className="font-extrabold text-secondary text-4xl items-start pt-18">
            Live Parcel Tracking
          </h3>
          <p className="text-base-100 font-medium font-[Urbanist] pt-5 pb-5">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
