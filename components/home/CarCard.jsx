import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGasPump, FaRoad, FaWhatsapp } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

export default function CarCard({ car }) {
  return (
    <section>
      <motion.div
        key={car._id}
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4 }}
        className="group bg-[#111] border border-white/5 rounded-3xl overflow-hidden hover:border-red-600/50 transition-all duration-500"
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <Image
            fill
            src={car.mainImage}
            alt={car.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 bg-red-600 text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-md shadow-lg">
            {car.tag || "Available"}
          </div>
        </div>

        {/* Details */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-xl font-bold uppercase tracking-tight">
              {car.name}
            </h4>
            <span className="text-red-500 font-black text-lg">
              ৳{car.price}
            </span>
          </div>

          {/* Specs Icons */}
          <div className="flex justify-between border-y border-white/5 py-4 mb-6">
            <div className="flex flex-col items-center gap-1">
              <FaGears className="text-gray-500 text-xs" />
              <span className="text-[10px] uppercase text-gray-400 font-bold">
                {car.chassisNo?.slice(0, 6) || "N/A"}
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 border-x border-white/5 px-8">
              <FaGasPump className="text-gray-500 text-xs" />
              <span className="text-[10px] uppercase text-gray-400 font-bold">
                {car.fuel}
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <FaRoad className="text-gray-500 text-xs" />
              <span className="text-[10px] uppercase text-gray-400 font-bold">
                {car.mileage}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Link
              href={`/cars/${car._id}`}
              className="flex-1 bg-white text-black py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white text-center flex justify-center items-center transition-all"
            >
              Details
            </Link>
            <Link
              href={`https://wa.me/8801944755111?text=I'm interested in ${car.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] p-3 rounded-xl hover:scale-105 transition-all"
            >
              <FaWhatsapp size={20} color="white" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
