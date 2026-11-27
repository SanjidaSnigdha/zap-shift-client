import React from "react";
import location_merchant from "../../../assets/location-merchant.png";

const Priority = () => {
  return (
    <div className="rounded-2xl bg-secondary">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold pt-10 text-base-200 font-[Urbanist]">
          Our Services
        </h1>
        <img className="w-0 h-100" src={location_merchant} />
        <div className="flex gap-2">
          <button className="btn btn-primary text-secondary absolute bottom-4 left-1/8 w-50 rounded-2xl">
            Track Your Parcel
          </button>
          <button className=" btn bg-base-200 text-secondary bg-#DADADA absolute bottom-4 left-1/3 w-30 h-10 rounded-xl">
            Be A Rider
          </button>
        </div>
      </div>
    </div>
  );
};

export default Priority;
