import React from "react";
import { FaSearch } from "react-icons/fa";

const Coverage = () => {
  return (
    <div className="bg-base-200 rounded-xl">
      <h3 className="font-extrabold text-secondary text-4xl items-start text-left p-8">
        We are available in 64 districts
      </h3>
      <div className="join flex items-start px-8 pb-8 bor">
        <div className="flex flex-col items-start">
          <label className="input validator join-item">
            <FaSearch className="opacity-50" />

            <input type="email" placeholder="Search here" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <button className="btn btn-neutral join-item">Join</button>
      </div>
    </div>
  );
};

export default Coverage;
