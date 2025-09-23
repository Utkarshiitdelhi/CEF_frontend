// import React from "react";
// import { Carousel } from "@material-tailwind/react";
// import { LandingCarousel } from "../data/landingCarousel";

// // Landing-only carousel where the TITLE and the GRADIENT OVERLAY are fixed
// // (they do NOT move with the slides). Slides are background images that move
// // underneath the fixed overlay/title.
// export default function LandingCarouselComponent({ autoplay = true, autoplayDelay = 4000, loop = true }) {
//   return (
//     <div className="relative w-full h-48 sm:h-[75vh] overflow-hidden">

//       {/* Carousel (slides only) */}
//       <Carousel
//         className="w-full h-full"
//         autoplay={autoplay}
//         loop={loop}
//         autoplayDelay={autoplayDelay}
//         prevArrow={null}
//         nextArrow={null}
//         navigation={false}
//       >
//         {LandingCarousel.map((src, idx) => (
//           <div
//             key={idx}
//             className="w-full h-full bg-center bg-no-repeat bg-cover"
//             style={{ backgroundImage: `url('${src}')` }}
//           />
//         ))}
//       </Carousel>

//       <div
//         aria-hidden
//         className="absolute inset-0 pointer-events-none z-10"
//         style={{
//           background:
//             "linear-gradient(175deg, rgba(0,0,0,1) 1%, rgba(0,0,0,1) 2%, rgba(0,0,0,1) 0.5%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0) 70%)",
//         }}
//       />

//       <div className="absolute left-6 top-6 z-20 w-auto">
//         <h1 className="hidden lg:block text-3xl lg:text-8xl font-bold text-white leading-tight">
//           <span className="text-yellow-300">Civil</span>  and <span className="text-green-500">Environmental</span> Engineering Forum 
//         </h1>
//       </div>

//       <div className="absolute inset-0 flex items-center justify-center z-20 px-6 lg:hidden">
//         <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
//           Civil and Environmental Engineering Forum 
//         </h1>
//       </div>

//     </div>
//   );
// }
