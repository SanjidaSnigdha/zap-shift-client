import React from "react";
import location_merchant from "../../../assets/location-merchant.png";

const Priority = () => {
  return (
    <div className="rounded-2xl bg-secondary p-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold pt-10 text-base-200 font-[Urbanist]">
          Merchant and Customer Satisfaction <br /> is Our First Priority
        </h1>
        <p className="text-base-100 font-medium font-[Urbanist] pt-5 pb-5">
          We offer lowest delivery charge with the highest value along 
        </p>
        <img className="w-80 h-80" src={location_merchant} />
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
