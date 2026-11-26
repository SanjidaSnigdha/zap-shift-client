import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial,user_photoURL } = review;
  return (
    <div className="bg-base-200 py-16 px-4">
      <div className="card bg-base-100 shadow-sm border border-base-300 max-w-xl mx-auto rounded-2xl">
        <div className="card-body p-8">
          {/* Quote Icon & Rating */}
          <div className="flex justify-between items-center mb-4">
            <FaQuoteLeft className="text-3xl text-primary/70" />

            <div className="flex gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <p className="font-[Urbanist]">{testimonial}</p>

          {/* Divider */}
          <div className="divider my-4"></div>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-14 h-14 rounded-full ring ring-primary/20 ring-offset-2 ring-offset-base-100">
                <img
                  src="https://i.pravatar.cc/150?img=12"
                  alt="Awlad Hossin"
                />
              </div>
            </div>

            <div>
              <h3 className="font-bold text-base-content">{userName}</h3>
              <p className="text-sm text-base-content/60">
                Senior Product Designer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
