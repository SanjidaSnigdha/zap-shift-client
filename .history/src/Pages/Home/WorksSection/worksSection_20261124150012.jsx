import React from 'react';
import { FaCarAlt } from "react-icons/fa";



const worksSection = () => {
    return (
        <div>
            <h3 className='font-extrabold text-secondary text-4xl items-start text-left p-4'>How it Works</h3>
        <div className='flex gap-4'>
            <div className="card bg-[#FFFFFF]/70 w-96 shadow-sm rounded-3xl">
  <div className="card-body gap-8">
    <FaCarAlt />

    <h2 className="card-title">Booking Pick & Drop</h2>

<p className='medium-text'>From personal packages to business shipments — we deliver on time, every time.</p>  
 
  </div>
</div>
<div className="card bg-[#FFFFFF]/70 w-96 shadow-sm rounded-3xl">
  <div className="card-body gap-8">
<img src="" alt="" srcset="" />
    <h2 className="card-title">Cash On Delivery</h2>
    <p className='medium-text'>From personal packages to business shipments — we deliver on time, every time.</p>
    
  </div>
</div>
<div className="card bg-[#FFFFFF]/70 w-96 shadow-sm rounded-3xl">
  <div className="card-body gap-8">
    <FaCarAlt />

    <h2 className="card-title">Delivery Hub</h2>
<p className='medium-text'>From personal packages to business shipments — we deliver on time, every time.</p>   
  </div>
</div>
<div className="card bg-[#FFFFFF]/70 w-96 shadow-sm rounded-3xl">
  <div className="card-body gap-8">
    <FaCarAlt />

    <h2 className="card-title">Booking SME & Corporate</h2>
<p className='medium-text'>From personal packages to business shipments — we deliver on time, every time.</p>  
  
  </div>
</div>
        </div>
        </div>
    );
};

export default worksSection;