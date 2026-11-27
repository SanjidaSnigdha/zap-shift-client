import React from "react";
import location_merchant from "../../../assets/location-merchant.png";

const Priority = () => {
  return (
    <div className="rounded-2xl bg-secondary p-10">
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-extrabold pt-10 text-base-200 font-[Urbanist]">
            Merchant and Customer Satisfaction <br /> is Our First Priority
          </h1>
          <p className="text-base-100 font-medium font-[Urbanist] pt-5 pb-5">
            We offer lowest delivery charge with the highest value along with{" "}
            <br /> 100% safety of our product . Pathoo courier delivery your
            parcels in every
            <br />
            corner of Bangladesh right on time
          </p>
        </div>

        <img className="w-80 h-80" src={location_merchant} />
      </div>
      <div>
        <button className="btn btn">Become a Merchant</button>
      </div>
    </div>
  );
};

export default Priority;
