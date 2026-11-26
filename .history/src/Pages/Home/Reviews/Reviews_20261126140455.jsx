import React, { use } from "react";
import Swiper from "swiper";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  return (
    <div>
      <div>
        <h3 className="font-extrabold text-secondary text-4xl items-start text-left p-4">
          Customer's 
        </h3>
      </div>
    </div>
  );

};

export default Reviews;
