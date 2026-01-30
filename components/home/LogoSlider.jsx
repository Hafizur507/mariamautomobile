// "use client";
// import Image from "next/image";
// import "swiper/css";
// import "swiper/css/free-mode";
// import { Autoplay, FreeMode } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// const LogoSlider = () => {
//   const brands = [
//     {
//       name: "Toyota",
//       logo: "/toyota.png", // খালি রাখা যাবে না
//     },
//     {
//       name: "Honda",
//       logo: "/honda.png",
//     },
//     {
//       name: "Mitsubishi",
//       logo: "/Mitsubishi.png",
//     },
//     {
//       name: "Nissan",
//       logo: "/Nissan.png",
//     },
//     {
//       name: "Suzuki",
//       logo: "/Suzuki.png",
//     },
//     {
//       name: "Hyundai",
//       logo: "/Hyundai.png",
//     },
//   ];

//   return (
//     <section className="py-20 bg-[#050505] relative overflow-hidden">
//       {/* Background Subtle Gradient */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="flex flex-col items-center mb-12">
//           <span className="text-red-600 font-bold tracking-[0.5em] text-[10px] uppercase mb-2">
//             World Class Brands
//           </span>
//           <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
//             Our <span className="text-gray-500">Fleet Partners</span>
//           </h2>
//           <div className="w-10 h-1 bg-red-600 mt-4"></div>
//         </div>

//         <Swiper
//           slidesPerView={2}
//           spaceBetween={20}
//           freeMode={true}
//           loop={true}
//           speed={5000} // প্রোডাকশনে আরও স্মুথ দেখানোর জন্য ৫০০০ ব্যবহার করুন
//           allowTouchMove={false} // ইউজার ইন্টারঅ্যাকশন বন্ধ (স্লাইডার স্মুথ রাখার জন্য)
//           autoplay={{
//             delay: 0,
//             disableOnInteraction: false,
//           }}
//           modules={[Autoplay, FreeMode]}
//           breakpoints={{
//             640: { slidesPerView: 3, spaceBetween: 30 },
//             1024: { slidesPerView: 5, spaceBetween: 40 },
//           }}
//           className="logo-swiper linear-easing" // CSS দিয়ে এনিমেশন স্মুথ করার জন্য
//         >
//           {brands.map((brand, index) => (
//             <SwiperSlide key={index}>
//               <div className="group relative py-4">
//                 <div className="h-28 md:h-32 flex items-center justify-center bg-[#111] border border-white/5 rounded-2xl transition-all duration-500 group-hover:border-red-600/40 group-hover:bg-[#161616] group-hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]">
//                   {brand.logo ? (
//                     <Image
//                       src={brand.logo}
//                       alt={`${brand.name} logo`}
//                       width={10}
//                       height={10}
//                       className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-40 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-all duration-700"
//                       loading="lazy"
//                     />
//                   ) : (
//                     <span className="text-gray-600 font-bold">
//                       {brand.name}
//                     </span>
//                   )}
//                 </div>
//                 <p className="text-center text-[10px] font-bold text-gray-700 uppercase mt-3 tracking-widest group-hover:text-red-600 transition-colors">
//                   {brand.name}
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* CSS For Seamless Flow */}
//       <style jsx global>{`
//         .logo-swiper .swiper-wrapper {
//           transition-timing-function: linear !important;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default LogoSlider;
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const LogoSlider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const brands = [
    { name: "Toyota", logo: "/toyota.png" },
    { name: "Honda", logo: "/honda.png" },
    { name: "Mitsubishi", logo: "/Mitsubishi.png" },
    { name: "Nissan", logo: "/Nissan.png" },
    { name: "Suzuki", logo: "/Suzuki.png" },
    { name: "Hyundai", logo: "/Hyundai.png" },
  ];

  if (!mounted) return null;

  return (
    <section className="py-20 bg-[#050505] relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <span className="text-red-600 font-bold tracking-[0.5em] text-[10px] uppercase mb-2">
            World Class Brands
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
            Our <span className="text-gray-500">Fleet Partners</span>
          </h2>
          <div className="w-10 h-1 bg-red-600 mt-4"></div>
        </div>

        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          freeMode={true}
          loop={true}
          speed={6000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          modules={[Autoplay, FreeMode]}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
          }}
          className="logo-swiper"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="group relative py-4">
                <div className="h-28 md:h-32 flex items-center justify-center bg-[#111] border border-white/5 rounded-2xl transition-all duration-500 group-hover:border-red-600/40 group-hover:bg-[#161616] group-hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]">
                  {brand.logo ? (
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={150}
                      height={80}
                      className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-40 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-all duration-700"
                    />
                  ) : (
                    <span className="text-gray-600 font-bold">
                      {brand.name}
                    </span>
                  )}
                </div>
                <p className="text-center text-[10px] font-bold text-gray-700 uppercase mt-3 tracking-widest group-hover:text-red-600 transition-colors">
                  {brand.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LogoSlider;
