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

      {/* card1 */}
      <div className="flex flex-row items-center bg-base-200 shadow-sm mt-15 rounded-2xl w-full">
        <figure className="w-1/3 shrink-0 p-2 sm:p-4 lg:p-5">
          <img
            src="/src/assets/live-tracking.png"
            alt="Live Parcel Tracking"
            className="w-full"
          />
        </figure>

        <div className="border-l border-dashed border-[#5B8790] self-stretch my-6"></div>

        <div className="p-2 sm:p-4 lg:p-5 flex-1">
          {" "}
          <h3 className="font-extrabold text-lg sm:text-2xl lg:text-4xl text-secondary">
            Live Parcel Tracking
          </h3>
          <p className="text-base-300 font-medium font-[Urbanist] mt-3 text-xs sm:text-base">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>

      {/* card2 */}
      <div className="flex flex-row items-center bg-base-200 shadow-sm mt-8 rounded-2xl w-full">
        <figure className="w-1/3 shrink-0 p-2 sm:p-4 lg:p-5">
          <img
            src="/src/assets/safe-delivery.png"
            alt="Safe Delivery"
            className="w-full"
          />
        </figure>

        <div className="border-l border-dashed border-[#5B8790] self-stretch my-6"></div>

        <div className="p-2 sm:p-4 lg:p-5 flex-1">
          {" "}
          <h3 className="font-extrabold text-lg sm:text-2xl lg:text-4xl text-secondary">
            100% Safe Delivery
          </h3>
          <p className="text-base-300 font-medium font-[Urbanist] mt-3 text-xs sm:text-base">
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>

      {/* card3 */}
      <div className="flex flex-row items-center bg-base-200 shadow-sm mt-8 rounded-2xl w-full">
        <figure className="w-1/3 shrink-0 p-2 sm:p-4 lg:p-5">
          <img
            src="/src/assets/call-24-7-line-icon-service-2C91FKG.jpg"
            alt="Call Center Support"
            className="w-full"
          />
        </figure>

        <div className="border-l border-dashed border-[#5B8790] self-stretch my-6"></div>
        <div className="p-2 sm:p-4 lg:p-5 flex-1">
          <h3 className="font-extrabold text-lg sm:text-2xl lg:text-4xl text-secondary">
            24/7 Call Center Support
          </h3>
          <p className="text-base-300 font-medium font-[Urbanist] mt-3 text-xs sm:text-base">
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>

      <div className="border-t border-dashed border-[#5B8790] mt-20 mb-20 w-full"></div>
    </div>
  );
};

export default Brands;
