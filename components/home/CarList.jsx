"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CarCard from "./CarCard";
const CarList = ({ cars }) => {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState("All");

  // ১. URL থেকে brand বা category শনাক্ত করা
  useEffect(() => {
    const brandQuery = searchParams.get("brand");
    const categoryQuery = searchParams.get("category");

    if (brandQuery) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFilter(brandQuery);
    } else if (categoryQuery) {
      setFilter(categoryQuery);
    } else {
      setFilter("All");
    }
  }, [searchParams]);

  const categoryNames = [
    "All",
    ...new Set(cars.map((car) => car.category?.name).filter(Boolean)),
  ];

  const filteredCars =
    filter === "All"
      ? cars
      : cars.filter(
          (car) =>
            car.category?.name === filter ||
            car.brand?.name === filter ||
            car.category === filter,
        );

  return (
    <section
      id="inventory"
      className="py-20 bg-[#0a0a0b] text-white px-6 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-red-600 font-bold tracking-[0.3em] uppercase text-sm mb-2">
              Our Inventory
            </h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              Available{" "}
              <span className="text-gray-500 text-3xl text-right md:text-4xl italic">
                Cars
              </span>
            </h3>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            {categoryNames.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border whitespace-nowrap ${
                  filter === cat
                    ? "bg-red-600 border-red-600 text-white"
                    : "border-white/20 text-gray-400 hover:border-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCars && filteredCars.length > 0 ? (
              filteredCars.map((car) => <CarCard key={car._id} car={car} />)
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-500 italic uppercase tracking-widest">
                  No cars found for {filter}
                </p>
                <button
                  onClick={() => setFilter("All")}
                  className="mt-4 text-red-600 text-xs font-bold uppercase underline"
                >
                  Show All Inventory
                </button>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default CarList;
