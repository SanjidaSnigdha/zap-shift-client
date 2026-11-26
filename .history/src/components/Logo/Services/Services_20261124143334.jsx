import React from "react";
import service1 from "../../../assets/brands/service.png";

const servicesData = [
  {
    id: 1,
    title: "Express  & Standard Delivery",
    description: "This is service 1",
  },
  { id: 2, title: "Nationwide Delivery", description: "This is service 2" },
  { id: 3, title: "Fulfillment Solution", description: "This is service 3" },
  { id: 4, title: "Cash on Home Delivery", description: "This is service 4" },
  {
    id: 5,
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    id: 6,
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const Services = () => {
  return (
    <div className="mt-10 bg-secondary rounded-xl">
      <h1 className="text-3xl font-extrabold pt-15 text-base-200 font-[Urbanist]">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {servicesData.map((service) => (
          <div key={service.id} className="card bg-base-100 shadow-sm">
            <div className="card-body bg-base-200 rounded-xl">
              <div className="flex justify-center">
                <img
                  className="w-15 h-15 rounded-2xl bg-gray-50 p-2"
                  src={service1}
                  alt=""
                />
              </div>

              <h2 className="card-title">{service.title}</h2>
              <p>{service.description}</p>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
