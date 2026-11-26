import React, { use } from "react";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
      <Swiper
        effect={'coverflow'}
        slidesPerView={'auto'}
        centeredSlides={true}
        
        grabCursor={true}
        coverflowEffect={{
            rotate:50,
            stretch:0,
            depth:100,
            modifier:1,
            slideShadows:true,
        }}
        pagination={true}
        modules={[EffectCoverflow,pagination]}
        className="mySwiper"
          
      >
          <SwiperSlide>
            <img className="mt-12" src=alt="" />
          </SwiperSlide>
    
      </Swiper>
    </div>
  );
};

export default Reviews;
