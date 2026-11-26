import React, { use } from "react";
import Swiper from "swiper";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  return <div>
    
  </div>

};

export default Reviews;
