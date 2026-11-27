import React from 'react';
import location_merchant from '../../../assets/location-merchant.png'

const Priority = () => {
    return (
        <div>
             <div>
                                <img src={location_marchent} />
                                <div className='flex gap-2'>
                                 <button className='btn btn-primary text-secondary absolute bottom-4 left-1/8 w-50 rounded-2xl'>Track Your Parcel</button>
                                 <button className=' btn bg-base-200 text-secondary bg-#DADADA absolute bottom-4 left-1/3 w-30 h-10 rounded-xl'>Be A Rider</button>
                                 
                                 </div>
            
                            </div>
        </div>
    );
};

export default Priority;