import React from "react";

const Services = () => {
  return (
    <div className="rounded-xl bg-secondary mt-15 grid grid">
      <h1 className="text-3xl font-extrabold text-base-200 pt-20">
        Our Services
      </h1>
      <p className="font-medium text-base-100 mt-5">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to <br></br>business shipments — we
        deliver on time, every time.
      </p>
      <div className="card w-96 bg-base-100 card-xl shadow-sm">
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
