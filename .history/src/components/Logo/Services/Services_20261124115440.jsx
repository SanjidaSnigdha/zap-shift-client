import React from "react";

const Services = () => {
  return (
    <div className="mt-10 bg-secondary rounded-xl">
      <h1 className="text-3xl font-extrabold pt-15 text-base-200 font-[Urbanist]">
        Our Services
      </h1>
      <div className="card w-96 bg-base-100 card-xl shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card-body">
          <h2 className="card-title">Xlarge Card</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
