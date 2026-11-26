import React, { use } from "react";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/vue";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  return (
    <div>
      <div>
        <h3 className="font-extrabold text-secondary text-4xl text-center p-4">
          What our customers are sayings
        </h3>
        <p className="text-base-300 font-medium font-[Urbanist] pt-5 pb-5 text-[16px]">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <Swiper>
        <SwiperSlide>
            <img src="" alt="" />
        </SwiperSlide>
      </Swiper>
        <SwiperSlide>
            <img src="" alt="" />
        </SwiperSlide>
      </Swiper>
        <SwiperSlide>
            <img src="" alt="" />
        </SwiperSlide>
      </Swiper>
        <SwiperSlide>
            <img src="" alt="" />
        </SwiperSlide>
      </Swiper>
        <SwiperSlide>
            <img src="" alt="" />
        </SwiperSlide>
      </Swiper>
        <SwiperSlide>
            <img src="" alt="" />
        </SwiperSlide>
      </Swiper>
        <SwiperSlide>
            <img src="" alt="" />
        </SwiperSlide>
      </Swiper>
        <SwiperSlide>
            <img src="" alt="" />
        </SwiperSlide>
      </Swiper>
        <SwiperSlide>
            <img src="" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
