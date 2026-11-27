import React from "react";
import { FaSearch } from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Coverage = () => {
  const position = [51.505, -0.99]
  return (
    <div className="bg-base-200 rounded-xl">
      <h3 className="font-extrabold text-secondary text-4xl items-start text-left p-8">
        We are available in 64 districts
      </h3>
      <div className="join flex items-center px-8 pb-8">
        <label className="join-item flex items-center gap-3 bg-base-100 px-4 h-12 rounded-l-2xl">
          <FaSearch className="text-gray-400" />

          <input
            className="bg-transparent border-0 outline-none focus:outline-none"
            type="text"
            placeholder="Search here"
          />
        </label>

        <button className="btn btn-primary join-item h-12 rounded-r-2xl rounded-l-none">
          Search
        </button>
      </div>
      {/* map container */}
      <div>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
         <Popup>
          A pretty 
         </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
