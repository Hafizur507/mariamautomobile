"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaAward,
  FaCalendarDays,
  FaChevronLeft,
  FaChevronRight,
  FaCircleCheck,
  FaEye,
  FaPalette,
  FaRoad,
  FaWhatsapp,
} from "react-icons/fa6";

const CarDetails = ({ car }) => {
  const [showAllImages, setShowAllImages] = useState(false);
  const [activeImage, setActiveImage] = useState(car.mainImage);

  const allImages = [car.mainImage, ...(car.gallery || [])];
  const currentIndex = allImages.indexOf(activeImage);

  const nextImage = () => {
    const nextIdx = (currentIndex + 1) % allImages.length;
    setActiveImage(allImages[nextIdx]);
  };

  const prevImage = () => {
    const prevIdx = (currentIndex - 1 + allImages.length) % allImages.length;
    setActiveImage(allImages[prevIdx]);
  };

  return (
    <main className="bg-[#0a0a0b] text-white min-h-screen  pb-40 pt-15">
      <section className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* বামদিকের সেকশন: ইমেজ স্লাইডার ও ডেসক্রিপশন */}
          <div className="lg:col-span-8 space-y-8">
            <div className="max-w-3xl">
              <p className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-2">
                Exclusively Available At Mariam Auto
              </p>
              <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">
                {car.name}
              </h1>
              <p className="text-gray-400 leading-relaxed italic border-l-2 border-red-600 pl-4">
                {car.description}
              </p>
            </div>

            {/* মেইন ইমেজ স্লাইডার */}
            <div className="relative h-[400px] md:h-[550px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src={activeImage}
                alt={car.name}
                fill
                className="w-full h-full object-cover transition-all duration-700"
              />
              {/* স্লাইডার কন্ট্রোল */}
              <button
                onClick={prevImage}
                className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 p-4 rounded-full hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 p-4 rounded-full hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* সাব ইমেজ সেকশন (See More ক্লিক করলে আসবে) */}
            <div className="space-y-4">
              {!showAllImages ? (
                <button
                  onClick={() => setShowAllImages(true)}
                  className="w-full py-4 rounded-2xl bg-white/5 border border-dashed border-white/20 flex items-center justify-center gap-3 hover:bg-white/10 transition-all text-red-600 group"
                >
                  <FaEye className="text-xl group-hover:scale-125 transition-transform" />
                  <span className="text-xs font-black uppercase tracking-widest text-white">
                    View Gallery Images (+{car.gallery?.length || 0})
                  </span>
                </button>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in duration-500">
                  {allImages.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveImage(img)}
                      className={`relative h-28 md:h-36 rounded-3xl overflow-hidden border cursor-pointer transition-all ${
                        activeImage === img
                          ? "border-red-600 scale-95 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                          : "border-white/5 hover:border-white/20"
                      }`}
                    >
                      <Image
                        fill
                        src={img}
                        alt="gallery"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <button
                    onClick={() => setShowAllImages(false)}
                    className="h-28 md:h-36 rounded-3xl bg-red-600/10 border border-red-600/20 text-red-600 font-bold text-[10px] uppercase tracking-tighter hover:bg-red-600 hover:text-white transition-all"
                  >
                    Show Less
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ডানদিকের সেকশন: সব ডিটেইলস এখন এক কার্ডে */}
          <div className="lg:col-span-4">
            <div className="bg-[#111] p-8 rounded-[3rem] border border-white/5 shadow-2xl sticky top-10 space-y-8">
              {/* প্রাইস সেকশন */}
              <div className="border-b border-white/5 pb-6">
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1 italic">
                  Current Price
                </p>
                <span className="text-4xl font-black italic tracking-tighter">
                  ৳{car.price.toLocaleString()}
                </span>
              </div>

              {/* কুইক স্পেকস */}
              <div className="space-y-4">
                <SpecRow
                  icon={<FaCalendarDays />}
                  label="Model Year"
                  value={car.modelYear}
                />
                <SpecRow icon={<FaPalette />} label="Color" value={car.color} />
                <SpecRow
                  icon={<FaAward />}
                  label="AU Grade"
                  value={car.auGrade}
                />
                <SpecRow
                  icon={<FaRoad />}
                  label="Mileage"
                  value={car.mileage}
                />
              </div>

              {/* টেকনিক্যাল ওভারভিউ (ডানদিকের কার্ডের ভেতরেই যুক্ত) */}
              <div className="pt-6 border-t border-white/5 space-y-4">
                <h3 className="text-sm font-black uppercase text-red-600 italic mb-4">
                  Technical Specs
                </h3>
                <DetailItem label="Chassis" value={car.chassisNo} />
                <DetailItem label="Model Code" value={car.modelCode} />
                <DetailItem label="Engine" value={car.cc} />
                <DetailItem label="Transmission" value={car.transmission} />
                <DetailItem label="Smart System" value={car.s_system} />
              </div>

              <a
                href={`https://wa.me/88017XXXXXXXX`}
                className="flex items-center justify-center gap-3 bg-[#25D366] text-black w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-[0_0_30px_-10px_#25D366] transition-all"
              >
                <FaWhatsapp size={22} /> Inquiry on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// হেল্পার কম্পোনেন্টস
const SpecRow = ({ icon, label, value }) => (
  <div className="flex justify-between items-center group">
    <div className="flex items-center gap-3 text-gray-500">
      <span className="text-red-600 group-hover:scale-110 transition-transform">
        {icon}
      </span>
      <span className="text-[10px] font-bold uppercase tracking-widest">
        {label}
      </span>
    </div>
    <span className="text-xs font-black uppercase tracking-tight">{value}</span>
  </div>
);

const DetailItem = ({ label, value }) => (
  <div className="flex justify-between items-center pb-2 group border-b border-white/5 last:border-0">
    <span className="text-[9px] uppercase font-bold text-gray-500 tracking-widest flex items-center gap-2">
      <FaCircleCheck className="text-red-600 size-2" /> {label}
    </span>
    <span className="text-[11px] font-bold text-white uppercase">{value}</span>
  </div>
);

export default CarDetails;
