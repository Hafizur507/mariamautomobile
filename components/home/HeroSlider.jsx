// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { useEffect, useState } from 'react';
// import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Swiper Styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/pagination';

// const HeroSlider = () => {
//   // ১. Hydration Error ফিক্স করার জন্য মাউন্ট স্টেট
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setMounted(true);
//   }, []);

//   const slides = [
//     {
//       id: 1,
//       image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920',
//       title: 'Japan Recondition &',
//       subTitle: 'New Cars Sales Center',
//       desc: 'Experience the best quality Japanese cars directly imported for you.',
//     },
//     {
//       id: 2,
//       image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920',
//       title: 'Experience Luxury',
//       subTitle: 'On Every Drive',
//       desc: 'Unmatched comfort and style for those who settle for nothing but the best.',
//     },
//     {
//       id: 3,
//       image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1920',
//       title: 'Drive Your Dreams',
//       subTitle: 'With Absolute Confidence',
//       desc: 'Certified reconditioned cars with guaranteed performance and safety.',
//     },
//   ];

//   // সার্ভার এবং ক্লায়েন্টের HTML অমিল রোধ করতে এই চেকটি জরুরি
//   if (!mounted) {
//     return (
//       <div className="h-screen w-full bg-black flex items-center justify-center">
//         <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="h-screen w-full overflow-hidden bg-black">
//       <Swiper
//         modules={[Autoplay, EffectFade, Pagination]}
//         effect="fade"
//         loop={true}
//         speed={1500}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false, // ক্লিক করলেও স্লাইডার বন্ধ হবে না
//           pauseOnMouseEnter: false, // মাউস নিলেও স্লাইডার থামবে না
//         }}
//         pagination={{ clickable: true }}
//         className="h-full w-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={slide.id}>
//             <div className="relative h-full w-full flex items-center justify-center">
//               {/* background Image with Optimization */}
//               <motion.div
//                 initial={{ scale: 1.2 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 6 }}
//                 className="absolute inset-0"
//               >
//                 <Image
//                   src={slide.image}
//                   alt={slide.title}
//                   fill
//                   priority={index === 0} // প্রথম স্লাইডকে প্রায়োরিটি দিবে (LCP Fix)
//                   sizes="100vw" // ইমেজ ওয়ার্নিং ফিক্স
//                   className="object-cover"
//                 />
//                 {/* Overlays */}
//                 <div className="absolute inset-0 bg-black/40" />
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
//               </motion.div>

//               {/* Text Content Area */}
//               <div className="relative z-10 text-center px-4 max-w-3xl mx-auto mt-10">
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <h2 className="text-sm md:text-lg font-bold text-white tracking-[0.5em] uppercase mb-2">
//                     Mariam <span className="text-red-500">Automobile</span>
//                   </h2>
//                 </motion.div>

//                 <motion.h1
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3, duration: 0.8 }}
//                   className="text-3xl md:text-6xl font-extrabold text-white leading-tight mb-6"
//                 >
//                   <span className="text-[#f87171]">{slide.title}</span> <br />
//                   {slide.subTitle}
//                 </motion.h1>

//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ delay: 0.6 }}
//                   className="space-y-4"
//                 >
//                   <p className="text-gray-300 text-sm md:text-lg max-w-xl mx-auto leading-relaxed italic">
//                     "{slide.desc}"
//                   </p>

//                   <div className="pt-6">
//                     <button className="px-8 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-red-600/20">
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
//           transition: all 0.3s ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HeroSlider;
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1920',
    brand: 'MARIAM AUTOMOBILE',
    title: 'DRIVE YOUR DREAMS WITH CONFIDENCE',
    desc: 'Experience Luxury & Performance: Explore our curated collection of premium Japanese reconditioned & new cars.',
    speed: '2.9s',
    power: '650 HP',
    type: 'Electric/Hybrid',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920',
    brand: 'MARIAM AUTOMOBILE',
    title: 'EXPERIENCE LUXURY ON EVERY DRIVE',
    desc: 'Unmatched comfort and style for those who settle for nothing but the absolute best quality.',
    speed: '3.2s',
    power: '580 HP',
    type: 'Luxury Sedan',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1920',
    brand: 'MARIAM AUTOMOBILE',
    title: 'PREMIUM SUV & RECONDITIONED CARS',
    desc: 'Certified reconditioned vehicles imported directly from Japan with absolute performance guarantee.',
    speed: '4.1s',
    power: '450 HP',
    type: 'Premium SUV',
  },
];

const HeroSlider = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop={true}
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="relative h-full w-full flex items-center">
                {/* Clean & Bright Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    quality={90}
                    className={`object-cover object-center transition-transform duration-[5000ms] ease-out ${
                      isActive ? 'scale-105' : 'scale-100'
                    }`}
                  />
                  {/* Subtle Side Overlay for Text Readability - Keeps Car 100% Bright */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                </div>

                {/* Main Content Box */}
                <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 max-w-2xl text-left">
                    {/* Brand Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/90 rounded-md mb-4 backdrop-blur-sm"
                    >
                      <span className="text-xs font-black tracking-widest text-white uppercase">
                        {slide.brand}
                      </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                      initial={{ opacity: 0, x: -30 }}
                      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase tracking-tight mb-4 drop-shadow-md"
                    >
                      {slide.title}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, x: -30 }}
                      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-gray-200 text-sm md:text-base max-w-lg leading-relaxed mb-8 drop-shadow"
                    >
                      {slide.desc}
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="flex flex-wrap gap-4 items-center"
                    >
                      <Link
                        href="#inventory"
                        className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wider uppercase rounded-sm transition-all shadow-lg hover:shadow-red-600/40"
                      >
                        Explore Inventory
                      </Link>
                      <Link
                        href="#inventory"
                        className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm tracking-wider uppercase rounded-sm backdrop-blur-md transition-all"
                      >
                        Book Test Drive
                      </Link>
                    </motion.div>

                    {/* Quick Car Specs Bar */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="mt-12 pt-6 border-t border-white/20 grid grid-cols-3 gap-6 max-w-md"
                    >
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-semibold">0-100 km/h</p>
                        <p className="text-xl md:text-2xl font-bold text-white">{slide.speed}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-semibold">Power</p>
                        <p className="text-xl md:text-2xl font-bold text-white">{slide.power}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-semibold">Category</p>
                        <p className="text-xl md:text-2xl font-bold text-white">{slide.type}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Pagination Styling */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 35px !important;
          left: 50% !important;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.6) !important;
          width: 12px;
          height: 12px;
          opacity: 1;
          margin: 0 !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #dc2626 !important;
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
