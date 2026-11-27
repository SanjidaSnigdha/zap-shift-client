import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";

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
    <div className="mt-12 lg:mt-14 xl:mt-16">
      {/* Heading */}
      <h3 className="font-extrabold text-secondary text-xl sm:text-2xl lg:text-3xl text-center">
        We've helped thousands of sales teams
      </h3>

      {/* Brand Slider */}
      <Swiper
        loop={true}
        slidesPerView={2}
        spaceBetween={20}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          480: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 35,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="h-20 lg:h-24 xl:h-28 flex items-center justify-center px-2">
              <img
                src={logo}
                alt="Brand logo"
                className="max-w-full max-h-10 lg:max-h-12 xl:max-h-14 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Feature Cards */}
      <div className="mt-4 lg:mt-3 space-y-3 lg:space-y-4">
        {/* Card 1 */}
        <div className="flex items-center bg-base-200 shadow-sm rounded-xl w-full lg:min-h-46 xl:min-h-46">
          <figure className="w-1/4 lg:w-38 xl:w-32 shrink-0 p-2 lg:p-3 xl:p-4">
            <img
              src="/src/assets/live-tracking.png"
              alt="Live Parcel Tracking"
              className="w-full object-contain"
            />
          </figure>

          <div className="border-l border-dashed border-[#5B8790] self-stretch my-3 lg:my-4"></div>

          <div className="p-3 lg:p-4 xl:p-5 flex-1">
            <h3 className="font-extrabold text-sm sm:text-base lg:text-xl xl:text-2xl text-secondary">
              Live Parcel Tracking
            </h3>

            <p className="text-base-300 font-medium font-[Urbanist] mt-1 lg:mt-2 text-xs lg:text-sm xl:text-base">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center bg-base-200 shadow-sm rounded-xl w-full lg:min-h-46 xl:min-h-46">
          <figure className="w-1/4 lg:w-28 xl:w-32 shrink-0 p-2 lg:p-3 xl:p-4">
            <img
              src="/src/assets/safe-delivery.png"
              alt="Safe Delivery"
              className="w-full object-contain"
            />
          </figure>

          <div className="border-l border-dashed border-[#5B8790] self-stretch my-3 lg:my-4"></div>

          <div className="p-3 lg:p-4 xl:p-5 flex-1">
            <h3 className="font-extrabold text-sm sm:text-base lg:text-xl xl:text-2xl text-secondary">
              100% Safe Delivery
            </h3>

            <p className="text-base-300 font-medium font-[Urbanist] mt-1 lg:mt-2 text-xs lg:text-sm xl:text-base">
              We ensure your parcels are handled with the utmost care and
              delivered securely to their destination. Our reliable process
              guarantees safe and damage-free delivery every time.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center bg-base-200 shadow-sm rounded-xl w-full lg:min-h-46 xl:min-h-46">
          <figure className="w-1/4 lg:w-28 xl:w-32 shrink-0 p-2 lg:p-3 xl:p-4">
            <img
              src="/src/assets/call-24-7-line-icon-service-2C91FKG.jpg"
              alt="Call Center Support"
              className="w-full object-contain"
            />
          </figure>

          <div className="border-l border-dashed border-[#5B8790] self-stretch my-3 lg:my-4"></div>

          <div className="p-3 lg:p-4 xl:p-5 flex-1">
            <h3 className="font-extrabold text-sm sm:text-base lg:text-xl xl:text-2xl text-secondary">
              24/7 Call Center Support
            </h3>

            <p className="text-base-300 font-medium font-[Urbanist] mt-1 lg:mt-2 text-xs lg:text-sm xl:text-base">
              Our dedicated support team is available around the clock to assist
              you with any questions, updates, or delivery concerns—anytime you
              need us.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-dashed border-[#5B8790] mt-6 lg:mt-8 mb-6 lg:mb-8 w-full"></div>
    </div>
  );
};

export default Brands;
