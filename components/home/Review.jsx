// "use client";
// import { useState } from "react";
// import ReviewCard from "./ReviewCar";
// const ReviewSection = ({ reviewsData = [] }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const reviewsPerPage = 3;

//   const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);
//   const currentReviews = reviewsData.slice(
//     (currentPage - 1) * reviewsPerPage,
//     currentPage * reviewsPerPage,
//   );

//   return (
//     <section className="bg-[#020617] py-24 px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* হেডলাইন সেকশন */}
//         <div className="text-center mb-20">
//           <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
//             Elite{" "}
//             <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
//               Experiences
//             </span>
//           </h2>
//           <p className="text-slate-400 max-w-2xl mx-auto text-lg">
//             বিশ্বজুড়ে আমাদের প্রিমিয়াম গাড়ি মালিকদের বাস্তব অভিজ্ঞতা এবং রিভিউ।
//           </p>
//           <div className="mt-8 flex justify-center">
//             <div className="h-1.5 w-24 bg-gradient-to-r from-sky-500 to-transparent rounded-full"></div>
//           </div>
//         </div>

//         {/* গ্রিড লেআউট */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
//           {currentReviews.map((review) => (
//             <ReviewCard key={review._id} review={review} />
//           ))}
//         </div>

//         {/* আধুনিক প্যাজিনেশন বাটন */}
//         <div className="mt-20 flex justify-center items-center gap-8">
//           <button
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage((p) => p - 1)}
//             className="w-14 h-14 flex items-center justify-center rounded-2xl border border-white/10 text-white hover:bg-sky-500 hover:border-sky-500 disabled:opacity-20 transition-all shadow-xl group"
//           >
//             <svg
//               className="w-6 h-6 group-hover:-translate-x-1 transition-transform"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2.5"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>

//           <div className="flex bg-slate-900/80 p-2 rounded-3xl border border-white/5 shadow-2xl backdrop-blur-md">
//             {Array.from({ length: totalPages }, (_, i) => (
//               <button
//                 key={i + 1}
//                 onClick={() => setCurrentPage(i + 1)}
//                 className={`w-14 h-14 rounded-2xl text-lg font-bold transition-all duration-500 ${
//                   currentPage === i + 1
//                     ? "bg-gradient-to-br from-sky-400 to-indigo-600 text-white shadow-lg shadow-sky-500/40 scale-110"
//                     : "text-slate-500 hover:text-white"
//                 }`}
//               >
//                 {String(i + 1).padStart(2, "0")}
//               </button>
//             ))}
//           </div>

//           <button
//             disabled={currentPage === totalPages}
//             onClick={() => setCurrentPage((p) => p + 1)}
//             className="w-14 h-14 flex items-center justify-center rounded-2xl border border-white/10 text-white hover:bg-sky-500 hover:border-sky-500 disabled:opacity-20 transition-all shadow-xl group"
//           >
//             <svg
//               className="w-5 h-5 group-hover:translate-x-1 transition-transform"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2.5"
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ReviewSection;
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCar";

const ReviewSection = ({ reviewsData = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;

  const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);

  const currentReviews = reviewsData.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage,
  );

  // Smooth scroll on page change
  useEffect(() => {
    const section = document.getElementById("reviews");
    section?.scrollIntoView({ behavior: "smooth" });
  }, [currentPage]);

  return (
    <section className="bg-[#020617] py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Elite{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
              Experiences
            </span>
          </motion.h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Real stories and feedback from our premium car owners worldwide.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="h-1.5 w-28 bg-gradient-to-r from-sky-500 to-transparent rounded-full" />
          </div>
        </div>

        {/* Reviews Grid */}
        <AnimatePresence mode="wait">
          {currentReviews.length > 0 ? (
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {currentReviews.map((review) => (
                <motion.div
                  key={review._id}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <ReviewCard review={review} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 text-slate-500 text-lg">
              No reviews available at the moment.
            </div>
          )}
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-24 flex justify-center items-center gap-8">
            {/* Previous */}
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="w-14 h-14 flex items-center justify-center rounded-2xl border border-white/10 text-white hover:bg-sky-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg"
            >
              ‹
            </button>

            {/* Page Numbers */}
            <div className="flex bg-slate-900/80 p-2 rounded-3xl border border-white/5 backdrop-blur-md shadow-xl">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-14 h-14 rounded-2xl text-sm font-black transition-all duration-500 ${
                    currentPage === i + 1
                      ? "bg-gradient-to-br from-sky-400 to-indigo-600 text-white scale-110 shadow-lg"
                      : "text-slate-500 hover:text-white"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              ))}
            </div>

            {/* Next */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="w-14 h-14 flex items-center justify-center rounded-2xl border border-white/10 text-white hover:bg-sky-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewSection;
