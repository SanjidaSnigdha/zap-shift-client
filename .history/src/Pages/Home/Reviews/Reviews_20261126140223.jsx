import React, { use } from "react";
import Swiper from "swiper";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  return 
  <Swiper></Swiper>

};

export default Reviews;
