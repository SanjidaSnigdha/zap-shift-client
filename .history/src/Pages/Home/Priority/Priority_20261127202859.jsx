import React from "react";
import be_a_merchant from "../../../assets/be-a-merchant-bg.png";

import location_merchant from "../../../assets/location-merchant.png";
const Priority = () => {
  return (
    <div className="rounded-2xl bg-secondary p-6 lg:p-7">
      <img className="-mt-10" src={be_a_merchant} alt="" />
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-extrabold pt-2 text-base-200 font-[Urbanist]">
            Merchant and Customer Satisfaction <br /> is Our First Priority
          </h1>
          <p className="text-base-100 font-medium font-[Urbanist] pt-3 pb-5">
            We offer lowest delivery charge with the highest value along with{" "}
            <br /> 100% safety of our product . Pathoo courier delivery your
            parcels in every
            <br />
            corner of Bangladesh right on time
          </p>
        </div>

        <img className="w-100 h-80" src={location_merchant} />
      </div>
      <div className="flex gap-4">
        <button className="btn btn-primary text-secondary rounded-2xl font-[Urbanist] font-bold">
          Become a Merchant
        </button>
        <button className="btn text-primary bg-secondary rounded-2xl font-[Urbanist] font-bold">
          Earn with ZapShift Courier
        </button>
      </div>
    </div>
  );
};

export default Priority;
