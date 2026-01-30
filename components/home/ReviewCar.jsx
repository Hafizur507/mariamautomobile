// "use client";
// import { useState } from "react";

// export default function ReviewCard({ review }) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const isLongText = review.reviewText?.length > 100;

//   const fullDate = new Date(review?.createdAt).toLocaleDateString("bn-BD", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
//   // ১০০ অক্ষরের বেশি হলে লেখা কেটে ছোট করা হবে
//   const displayText = isExpanded
//     ? review.reviewText
//     : review.reviewText?.slice(0, 100);

//   return (
//     <div className="group relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-sky-500/50 hover:-translate-y-2 flex flex-col h-full shadow-2xl">
//       {/* গাড়ির ছবি ও ট্যাগ */}
//       <div className="relative h-64 overflow-hidden shrink-0">
//         <img
//           src={review.carImage}
//           alt={review.carName}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
//         <div className="absolute bottom-4 left-6 pt-5">
//           <span className="px-4 py-1.5 bg-sky-500/20 backdrop-blur-md border border-sky-500/30 rounded-full text-sky-400 text-xs font-bold tracking-widest uppercase">
//             {review.carName}
//           </span>
//         </div>
//       </div>

//       {/* কার্ডের ভেতরের কন্টেন্ট */}
//       <div className="p-8 flex flex-col flex-grow">
//         {/* স্টার রেটিং */}
//         <div className="flex gap-1 mb-4">
//           {[...Array(5)].map((_, i) => (
//             <span
//               key={i}
//               className={`text-xl ${i < review.rating ? "text-amber-400" : "text-slate-700"}`}
//             >
//               ★
//             </span>
//           ))}
//         </div>

//         <div className="flex-grow">
//           <p className="text-slate-300 leading-relaxed italic text-[1.05rem]">
//             {displayText}
//             {!isExpanded && isLongText && "..."}
//           </p>
//           {isLongText && (
//             <button
//               onClick={() => setIsExpanded(!isExpanded)}
//               className="mt-3 text-sky-400 font-semibold text-sm hover:text-sky-300 transition-colors"
//             >
//               {isExpanded ? "Show Less" : "Read More"}
//             </button>
//           )}
//         </div>

//         {/* ইউজার প্রোফাইল ও তারিখ */}
//         <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
//           <div className="relative">
//             <img
//               src={review.customerImage}
//               alt={review.customerName}
//               className="w-14 h-14 rounded-full object-cover ring-2 ring-sky-500/50 ring-offset-4 ring-offset-slate-900"
//             />
//             <div className="absolute -bottom-1 -right-1 bg-emerald-500 p-1 rounded-full border-2 border-slate-900">
//               <svg
//                 className="w-2.5 h-2.5 text-white"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
//               </svg>
//             </div>
//           </div>
//           <div>
//             <h4 className="text-white font-bold text-lg leading-tight">
//               {review.customerName}
//             </h4>
//             <div className="flex items-center gap-2 mt-1">
//               <span className="text-slate-500 text-xs font-medium uppercase tracking-tighter">
//                 {fullDate}
//               </span>
//               <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
//               <span className="text-emerald-500 text-[10px] font-bold uppercase tracking-wider">
//                 Verified Purchase
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import { useState } from "react";

export default function ReviewCard({ review }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const MAX_LENGTH = 110; // review text truncate length
  const isLongText = review.reviewText?.length > MAX_LENGTH;

  const formattedDate = new Date(review?.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  const displayText = isExpanded
    ? review.reviewText
    : review.reviewText?.slice(0, MAX_LENGTH);

  return (
    <article className="group relative flex flex-col h-full overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900/70 to-slate-950 border border-white/10 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:-translate-y-3 hover:border-sky-500/50">
      <div className="relative h-80 overflow-hidden flex-shrink-0">
        <Image
          src={review.carImage}
          alt={review.carName}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        {/* Car Badge */}
        <span className="absolute bottom-5 left-6 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-5 py-1.5 text-xs font-black uppercase tracking-widest text-sky-400 backdrop-blur-md">
          {review.carName}
        </span>
      </div>

      {/* ===== Content Section ===== */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        {/* Rating */}
        <div className="mb-4 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-xl ${
                i < review.rating
                  ? "text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]"
                  : "text-slate-700"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Review Text */}
        <div className="flex-1">
          <p className="text-slate-300 text-[1rem] md:text-[1.05rem] leading-relaxed italic">
            {displayText}
            {!isExpanded && isLongText && "…"}
          </p>

          {isLongText && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-sky-400 transition hover:text-sky-300"
            >
              {isExpanded ? "Show Less" : "Read Full Review"}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          )}
        </div>

        <footer className="mt-6 flex items-center gap-4 border-t border-white/5 pt-5">
          <div className="relative">
            <Image
              width={14}
              height={14}
              src={review.customerImage}
              alt={review.customerName}
              className="h-14 w-14 rounded-full object-cover ring-2 ring-sky-500/40 ring-offset-2 ring-offset-slate-950"
            />
            <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 border-2 border-slate-950 text-white font-bold">
              ✓
            </span>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm md:text-base">
              {review.customerName}
            </h4>
            <div className="mt-1 flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-wider">
              <span className="text-slate-500">{formattedDate}</span>
              <span className="h-1 w-1 rounded-full bg-slate-700" />
              <span className="font-black text-emerald-500">
                Verified Buyer
              </span>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
