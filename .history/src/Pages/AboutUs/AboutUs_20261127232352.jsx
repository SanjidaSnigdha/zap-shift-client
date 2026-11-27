import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-base-200 rounded-2xl">
      <h3 className="font-extrabold text-secondary text-5xl items-start text-left p-4 font-[Urbanist]">
        About Us
      </h3>
      <p className="font-[Urbanist] font-normal text-base text-base-300">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className="border-t border-dashed border-black/10 mt-6 mb-6"></div>{" "}
      <div className="flex justify-between">
        <p className="font-[Urbanist] font-extrabold text-[28px] text-[#5B6A2A]">Story</p>
        <p className="font-[Urbanist] font-normal text-[28px] text-[#000000]/50">Mission</p>
        <p className="font-[Urbanist] font- text-[28px] text-[#000000]/50">Success</p>
        <p className="font-[Urbanist] font-extrabold text-[28px] text-[#00000]/50">Story</p>

      </div>
    </div>
  );
};

export default AboutUs;
