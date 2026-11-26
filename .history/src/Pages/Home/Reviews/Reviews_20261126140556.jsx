import React, { use } from "react";
import Swiper from "swiper";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  return (
    <div>
      <div>
        <h3 className="font-extrabold text-secondary text-4xl items-start text-left p-4">
          Customer's Reviews
        </h3>
        <p className=""></p>
      </div>
    </div>
  );

};

export default Reviews;
