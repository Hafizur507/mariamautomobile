'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaRotate, FaXmark } from 'react-icons/fa6';

const Car360Viewer = ({ images = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  if (!images || images.length === 0) return null;

  // মাউস ড্র্যাগ হ্যান্ডেল
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;

    if (Math.abs(deltaX) > 20) {
      if (deltaX > 0) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
      setStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      {/* গ্যালারি ভিউয়ার বাটন */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:border-red-600/50 hover:bg-white/10 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest transition-all group"
      >
        <FaRotate className="text-red-600 text-base group-hover:rotate-180 transition-transform duration-700" />
        <span>Interactive Gallery View</span>
      </button>

      {/* পপ-আপ মডাল */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl bg-[#111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            {/* হেডার */}
            <div className="flex justify-between items-center p-5 border-b border-white/10 bg-[#0a0a0b]">
              <div className="flex items-center gap-2">
                <FaRotate className="text-red-600 animate-spin" />
                <span className="text-xs font-black uppercase tracking-wider text-white">
                  Drag Left/Right or Use Arrows to Explore
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                <FaXmark size={20} />
              </button>
            </div>

            {/* ভিউয়ার কন্টেইনার */}
            <div
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="relative w-full h-[380px] md:h-[520px] bg-black select-none cursor-grab active:cursor-grabbing flex items-center justify-center group"
            >
              <Image
                src={images[currentIndex]}
                alt="Car Gallery View"
                fill
                priority
                className="object-contain pointer-events-none"
              />

              {/* অ্যারো নেভিগেশন বাটন */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-600 text-white p-3 rounded-full transition-all"
              >
                <FaChevronLeft size={18} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-600 text-white p-3 rounded-full transition-all"
              >
                <FaChevronRight size={18} />
              </button>

              {/* ইমেজ কাউন্টার */}
              <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded-full text-[10px] font-bold text-gray-300 border border-white/10">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Car360Viewer;
