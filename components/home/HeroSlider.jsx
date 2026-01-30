// "use client";
// import { motion } from "framer-motion";
// import { Autoplay, EffectFade, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Swiper Styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";

// const HeroSlider = () => {
//   const slides = [
//     {
//       id: 1,
//       image:
//         "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920",
//     },
//     {
//       id: 2,
//       image:
//         "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920",
//     },
//     {
//       id: 3,
//       image: "/car.png ",
//     },
//   ];

//   return (
//     <div className="h-screen w-full overflow-hidden bg-black">
//       <Swiper
//         modules={[Autoplay, EffectFade, Pagination]}
//         effect="fade"
//         loop={true}
//         speed={1500}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         className="h-full w-full"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className="relative h-full w-full flex items-center justify-center">
//               <motion.div
//                 initial={{ scale: 1.1 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 4 }}
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{ backgroundImage: `url(${slide.image})` }}
//               >
//                 <div className="absolute inset-0 bg-black/30"></div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
//               </motion.div>

//               {/* Text Content - প্রিমিয়াম লুক */}
//               <div className="relative z-10 text-center py-22 pt-24 px-6 max-w-2xl drop-shadow-2xl">
//                 {/* Brand Name */}
//                 <motion.div
//                   initial={{ opacity: 0, y: -20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   className="mb-6"
//                 >
//                   <h2 className="text-2xl md:text-4xl py-3 font-black text-white tracking-[0.2em] uppercase">
//                     MARIAM
//                   </h2>
//                   <h3 className="text-2xl md:text-3xl font-black text-red-500 tracking-[0.2em] uppercase -mt-2">
//                     AUTOMOBILE
//                   </h3>
//                 </motion.div>

//                 {/* Main Heading - Pink/Red Color */}
//                 <motion.h1
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.3 }}
//                   className="text-2xl md:text-4xl font-extrabold text-[#f87171] leading-tight mb-4"
//                   style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}
//                 >
//                   Japan Recondition & <br /> New Cars Sales Center
//                 </motion.h1>

//                 {/* Location */}
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                   className="text-white text-lg md:text-2xl mb-6 font-medium tracking-wide"
//                 >
//                   Rajshahi, Bangladesh
//                 </motion.p>

//                 {/* Description */}
//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.7 }}
//                   className="text-gray-100 text-sm md:text-2xl pt-16 leading-relaxed max-w-md mx-auto font-normal shadow-black"
//                 >
//                   Your trusted partner for premium Japanese reconditioned and
//                   brand-new cars. Experience quality, reliability, and
//                   exceptional customer service.
//                 </motion.p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <style jsx global>{`
//         .swiper-pagination-bullet {
//           background: white !important;
//           opacity: 0.7;
//         }
//         .swiper-pagination-bullet-active {
//           background: #f87171 !important;
//           opacity: 1;
//           width: 30px;
//           border-radius: 4px;
//           transition: 0.3s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HeroSlider;
// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image"; // Image অপ্টিমাইজেশনের জন্য
// import { Autoplay, EffectFade, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Swiper Styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";

// const HeroSlider = () => {
//   // const slides = [
//   //   {
//   //     id: 1,
//   //     image:
//   //       "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920",
//   //     title: "Japan Recondition &",
//   //     subTitle: "New Cars Sales Center",
//   //   },
//   //   {
//   //     id: 2,
//   //     image:
//   //       "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920",
//   //     title: "Experience Luxury",
//   //     subTitle: "On Every Drive",
//   //   },
//   // ];
//   const slides = [
//     {
//       id: 1,
//       image:
//         "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920",
//       title: "Japan Recondition &",
//       subTitle: "New Cars Sales Center",
//       desc: "Experience the best quality Japanese cars directly imported for you.",
//     },
//     {
//       id: 2,
//       image:
//         "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920",
//       title: "Experience Luxury",
//       subTitle: "On Every Drive",
//       desc: "Unmatched comfort and style for those who settle for nothing but the best.",
//     },
//     {
//       id: 3,
//       image:
//         "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1920",
//       title: "Drive Your Dreams",
//       subTitle: "With Absolute Confidence",
//       desc: "Certified reconditioned cars with guaranteed performance and safety.",
//     },
//     {
//       id: 4,
//       image:
//         "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1920",
//       title: "Premium Collection",
//       subTitle: "Of Modern Sedans",
//       desc: "Explore our wide range of fuel-efficient and high-tech vehicles.",
//     },
//     {
//       id: 5,
//       image:
//         "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1920",
//       title: "The Ultimate",
//       subTitle: "SUV Experience",
//       desc: "Command the road with power and elegance in our luxury SUV lineup.",
//     },
//   ];
//   return (
//     <div className="h-screen w-full overflow-hidden bg-black">
//       <Swiper
//         modules={[Autoplay, EffectFade, Pagination]}
//         effect="fade"
//         loop={true}
//         speed={1500}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         className="h-full w-full"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className="relative h-full w-full flex items-center justify-center">
//               {/* Background Image with Next.js Optimization */}
//               <motion.div
//                 initial={{ scale: 1.2 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 6 }}
//                 className="absolute inset-0"
//               >
//                 <Image
//                   src={slide.image}
//                   alt="Premium Cars"
//                   fill
//                   priority
//                   className="object-cover"
//                 />
//                 {/* Overlays */}
//                 <div className="absolute inset-0 bg-black/40" />
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
//               </motion.div>

//               {/* Text Content */}
//               <div className="relative z-10 text-center px-4 max-w-3xl mx-auto mt-10">
//                 {/* Brand Logo Section */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <h2 className="text-sm md:text-lg font-bold text-white tracking-[0.5em] uppercase mb-2">
//                     Mariam <span className="text-red-500">Automobile</span>
//                   </h2>
//                 </motion.div>

//                 {/* Main Heading */}
//                 <motion.h1
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3, duration: 0.8 }}
//                   className="text-3xl md:text-6xl font-extrabold text-white leading-tight mb-6"
//                 >
//                   <span className="text-[#f87171]">{slide.title}</span> <br />
//                   {slide.subTitle}
//                 </motion.h1>

//                 {/* Info Text */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ delay: 0.6 }}
//                   className="space-y-4"
//                 >
//                   <p className="text-gray-300 text-sm md:text-lg max-w-xl mx-auto leading-relaxed italic">
//                     "Your trusted partner for premium Japanese reconditioned and
//                     brand-new cars in Rajshahi."
//                   </p>

//                   {/* Action Button (Optional but recommended for Hero) */}
//                   <div className="pt-6">
//                     <button className="px-8 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all transform hover:scale-105">
//                       Explore Inventory
//                     </button>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Pagination Styles */}
//       <style jsx global>{`
//         .swiper-pagination-bullet {
//           background: white !important;
//           opacity: 0.5;
//         }
//         .swiper-pagination-bullet-active {
//           background: #f87171 !important;
//           width: 25px;
//           border-radius: 5px;
//           opacity: 1;
//           transition: all 0.3s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HeroSlider;
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const HeroSlider = () => {
  // ১. Hydration Error ফিক্স করার জন্য মাউন্ট স্টেট
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920",
      title: "Japan Recondition &",
      subTitle: "New Cars Sales Center",
      desc: "Experience the best quality Japanese cars directly imported for you.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920",
      title: "Experience Luxury",
      subTitle: "On Every Drive",
      desc: "Unmatched comfort and style for those who settle for nothing but the best.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1920",
      title: "Drive Your Dreams",
      subTitle: "With Absolute Confidence",
      desc: "Certified reconditioned cars with guaranteed performance and safety.",
    },
  ];

  // সার্ভার এবং ক্লায়েন্টের HTML অমিল রোধ করতে এই চেকটি জরুরি
  if (!mounted) {
    return (
      <div className="h-screen w-full bg-black flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop={true}
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false, // ক্লিক করলেও স্লাইডার বন্ধ হবে না
          pauseOnMouseEnter: false, // মাউস নিলেও স্লাইডার থামবে না
        }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full flex items-center justify-center">
              {/* background Image with Optimization */}
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6 }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0} // প্রথম স্লাইডকে প্রায়োরিটি দিবে (LCP Fix)
                  sizes="100vw" // ইমেজ ওয়ার্নিং ফিক্স
                  className="object-cover"
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
              </motion.div>

              {/* Text Content Area */}
              <div className="relative z-10 text-center px-4 max-w-3xl mx-auto mt-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-sm md:text-lg font-bold text-white tracking-[0.5em] uppercase mb-2">
                    Mariam <span className="text-red-500">Automobile</span>
                  </h2>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-3xl md:text-6xl font-extrabold text-white leading-tight mb-6"
                >
                  <span className="text-[#f87171]">{slide.title}</span> <br />
                  {slide.subTitle}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-4"
                >
                  <p className="text-gray-300 text-sm md:text-lg max-w-xl mx-auto leading-relaxed italic">
                    "{slide.desc}"
                  </p>

                  <div className="pt-6">
                    <button className="px-8 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-red-600/20">
                      Explore Inventory
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #f87171 !important;
          width: 25px;
          border-radius: 5px;
          opacity: 1;
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
