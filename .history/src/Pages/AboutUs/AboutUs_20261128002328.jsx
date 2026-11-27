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
      <div className="border-t border border-black/10 mt-6 mb-6"></div>{" "}
      <div className="flex justify-between p-6">
        <p className="font-[Urbanist] font-extrabold text-[28px] text-[#5B6A2A]">
          Story
        </p>
        <p className="font-[Urbanist] font-normal text-[28px] text-[#000000]/50">
          Mission
        </p>
        <p className="font-[Urbanist] font-normal text-[28px] text-[#000000]/50">
          Success
        </p>
        <p className="font-[Urbanist] font-normal text-[28px] text-[#000000]/50">
          Team & Others
        </p>
      </div>
      <div>
        <p className="font-[Urbanist] font-normal text--20px] text-base-300">
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking,<br /> efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it's a personal gift or a
          time-sensitive business <br /> delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
        <p>        <p className="font-[Urbanist] font-normal text--20px] text-base-300">
</p>
      </div>
    </div>
  );
};

export default AboutUs;
