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
      {/* card1 */}
      <div className="card lg:card-side bg-base-200 w-270 h-80 shadow-sm mt-15 rounded-2xl">
        <figure className="w-80 h-70 p-8">
          <img src="/src/assets/live-tracking.png" alt="Album" />
        </figure>
        <div className="border-l border-dashed border-[#5B8790] h-50 mt-12"></div>
        <div className="card-body">
          <h3 className="font-extrabold text-4xl items-start pt-15 text-secondary">
            Live Parcel Tracking
          </h3>
          <p className="text-base-300 font-medium font-[Urbanist] pt-5 pb-5 text-[16px]">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      {/* card2 */}
      <div className="card lg:card-side bg-base-200 w-270 h-80 shadow-sm mt-8 rounded-2xl">
        <figure className="w-80 h-70 p-8">
          <img src="/src/assets/safe-delivery.png" alt="Album" />
        </figure>
        <div className="border-l border-dashed border-[#5B8790] h-50 mt-12"></div>
        <div className="card-body">
          <h3 className="font-extrabold text-4xl items-start pt-15 text-secondary">
            100% Safe Delivery
          </h3>
          <p className="text-base-300 font-medium font-[Urbanist] pt-5 pb-5 text-[16px]">
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>
      {/* card3 */}
      <div className="card lg:card-side bg-base-200 w-270 h-80 shadow-sm mt-8 rounded-2xl">
        <figure className="w-80 h-70 p-8">
          <img
            src="/src/assets/call-24-7-line-icon-service-2C91FKG.jpg"
            alt="Album"
          />
        </figure>
        <div className="border-l border-dashed border-[#5B8790] h-50 mt-12"></div>
        <div className="card-body">
          <h3 className="font-extrabold text-4xl items-start pt-15 text-secondary">
            24/7 Call Center Support
          </h3>
          <p className="text-base-300 font-medium font-[Urbanist] pt-5 pb-5 text-[16px]">
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>
      <div className="border-t border-dashed border-[#5B8790] mt-20 "></div>
    </div>
  );
};

export default Brands;
