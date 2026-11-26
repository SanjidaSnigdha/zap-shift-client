import React from "react";
import service1 from "../../../assets/brands/service.png";

const servicesData = [
  { id: 1, title: "Service 1", description: "This is service 1" },
  { id: 2, title: "Service 2", description: "This is service 2" },
  { id: 3, title: "Service 3", description: "This is service 3" },
  { id: 4, title: "Service 4", description: "This is service 4" },
  { id: 5, title: "Service 5", description: "This is service 5" },
  { id: 6, title: "Service 6", description: "This is service 6" },
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
            <div className="card-body">
              <img  className="w-10 h-10 rounded-2xl" src={service1} alt="" />
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
