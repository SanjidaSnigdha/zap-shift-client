// // import React from "react";
// // import "react-responsive-carousel/lib/styles/carousel.min.css";
// // import { Carousel } from "react-responsive-carousel";
// // import bannerImg1 from "../../../assets/banner/banner1.png";
// // import bannerImg2 from "../../../assets/banner/banner2.png";
// // import bannerImg3 from "../../../assets/banner/banner3.png";

// // const Banner = () => {
// //   return (
// //     <Carousel
// //       autoPlay={true}
// //       infiniteLoop={true}
// //       interval={3000}
// //       showThumbs={false}
// //       stopOnHover={false}
// //     >
// //       <div className="relative">
// //         <img src={bannerImg1} />
// //         <div className="flex gap-2 absolute">
// //           <button className="btn btn-primary text-secondary bottom-4 left-1/8 w-50 rounded-2xl">
// //             Track Your Parcel
// //           </button>
// //           <button className=" btn bg-base-200 text-secondary bg-#DADADA bottom-4 left-1/3 w-30 h-10 rounded-xl">
// //             Be A Rider
// //           </button>
// //         </div>
// //       </div>
// //       <div>
// //         <img src={bannerImg2} />
// //       </div>
// //       <div>
// //         <img src={bannerImg3} />
// //       </div>
// //     </Carousel>
// //   );
// // };

// // export default Banner;

// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import bannerImg1 from "../../../assets/banner/banner1.png";
// import bannerImg2 from "../../../assets/banner/banner2.png";
// import bannerImg3 from "../../../assets/banner/banner3.png";

// const Banner = () => {
//   return (
//     <Carousel
//       autoPlay
//       infiniteLoop
//       interval={3000}
//       showThumbs={false}
//       showStatus={false}
//       stopOnHover={false}
//     >
//       <div className="relative">
//         <img src={bannerImg1} alt="Banner 1" />

//         <div className="absolute bottom-2 sm:bottom-4 left-3 sm:left-8 flex gap-2 z-10">
//           <button className="btn btn-primary text-secondary w-auto px-3 sm:px-6 btn-xs sm:btn-md rounded-2xl">
//             Track Your Parcel
//           </button>

//           <button className="btn bg-base-200 text-secondary w-auto px-3 sm:px-6 btn-xs sm:btn-md rounded-xl">
//             Be A Rider
//           </button>
//         </div>
//       </div>

//       <div>
//         <img src={bannerImg2} alt="Banner 2" />
//       </div>

//       <div>
//         <img src={bannerImg3} alt="Banner 3" />
//       </div>
//     </Carousel>
//   );
// };

// export default Banner;

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}
    >
      <div className="relative">
        <img src={bannerImg1} alt="Banner 1" className="w-full" />

        <div className="absolute bottom-[5%] left-[5%] flex gap-2 z-10">
          <button className="btn btn-primary text-secondary btn-xs sm:btn-sm md:btn-md rounded-xl">
            Track Your Parcel
          </button>

          <button className="btn bg-base-200 text-secondary btn-xs sm:btn-sm md:btn-md rounded-xl">
            Be A Rider
          </button>
        </div>
      </div>

      <div>
        <img src={bannerImg2} alt="Banner 2" />
      </div>

      <div>
        <img src={bannerImg3} alt="Banner 3" />
      </div>
    </Carousel>
  );
};

export default Banner;
