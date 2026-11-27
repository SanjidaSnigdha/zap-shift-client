import React from "react";

const Coverage = () => {
  return (
    <div className="bg-base-200 rounded-xl">
      <h3 className="font-extrabold text-secondary text-4xl items-start text-left p-8">
        We are available in 64 districts
      </h3>
      <div className="join flex">
        <div className="items-start">
          <label className="input validator join-item">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <button className="btn btn-neutral join-item">Join</button>
      </div>
    </div>
  );
};

export default Coverage;
