import React from "react";
import { FaSearch } from "react-icons/fa";

const Coverage = () => {
  return (
    <div className="bg-base-200 rounded-xl">
      <h3 className="font-extrabold text-secondary text-4xl items-start text-left p-8">
        We are available in 64 districts
      </h3>
      <div className="join flex items-start px-8 pb-8">
        <div className="flex flex-col items-start">
          <label className="join-item flex items-center gap-2 border-0">
            <FaSearch className="opacity-50" />

            <input
              className="border-0 outline-none focus:outline-none"
              type="text"
              placeholder="Search here"
            />
          </label>
        </div>

        <button className="btn btn-neutral join-item">Join</button>
      </div>
    </div>
  );
};

export default Coverage;
