"use client";
import { deleteReviewCar } from "@/app/(home)/action/actions";
import Image from "next/image";
import { useState } from "react";
import {
  FaPenToSquare,
  FaPlus,
  FaQuoteLeft,
  FaStar,
  FaTrash,
  FaUserGroup,
} from "react-icons/fa6";
import AddReview from "./ReviewAddModel";
const AdminReviewManager = ({ reviews }) => {
  const [showModal, setShowModal] = useState(false);
  const fullDate = new Date(reviews?.createdAt).toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  // ডামি ডাটা

  return (
    <div className="max-w-7xl mx-auto mb-20">
      {/* --- HEADER SECTION --- */}
      {showModal && (
        <AddReview
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
        <div>
          <h3 className="text-xl font-bold uppercase tracking-tight flex items-center gap-3">
            <FaUserGroup className="text-red-600" /> Customer Testimonials
          </h3>
          <p className="text-gray-600 text-[10px] mt-1 font-bold uppercase tracking-[0.2em]">
            MANAGE {reviews?.length} PUBLISHED REVIEWS
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 transition-all shadow-xl shadow-red-600/20 active:scale-95"
        >
          <FaPlus /> Add New Review
        </button>
      </div>

      {/* --- TABLE SECTION --- */}
      <div className="bg-[#111] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 text-[10px] uppercase font-black tracking-[0.2em] text-gray-400">
                <th className="px-8 py-6">SL</th>
                <th className="px-8 py-6">Customer</th>
                <th className="px-8 py-6">Purchased Model</th>
                <th className="px-8 py-6 text-center text-red-600">
                  <FaStar className="inline" />
                </th>
                <th className="px-8 py-6 text-center">Date</th>
                <th className="px-8 py-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {reviews?.map((review, index) => (
                <tr
                  key={review._id}
                  className="hover:bg-white/[0.02] transition-colors group"
                >
                  <td className="px-8 py-6 font-bold text-gray-700 text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </td>

                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl border border-white/10 overflow-hidden bg-gray-900 shadow-inner group-hover:border-red-600/30 transition-all">
                        <Image
                          src={review.customerImage}
                          width={14}
                          height={16}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold tracking-tight text-gray-200 text-sm group-hover:text-red-500 transition-colors">
                          {review.customerName}
                        </span>
                        <span className="text-[9px] text-gray-600 font-black uppercase tracking-widest flex items-center gap-1">
                          <FaQuoteLeft size={8} className="text-red-600" />{" "}
                          Verified Buyer
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="px-8 py-6">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter italic">
                      {review.carName}
                    </span>
                  </td>

                  <td className="px-8 py-6 text-center">
                    <div className="flex justify-center gap-0.5 text-red-600">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={10}
                          className={
                            i < review.rating ? "text-red-600" : "text-white/5"
                          }
                        />
                      ))}
                    </div>
                  </td>

                  <td className="px-8 py-6 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-[9px] text-gray-700 uppercase font-black tracking-widest mb-1">
                        Listed
                      </span>
                      <span className="text-[10px] font-mono text-gray-400 font-bold">
                        {fullDate}
                      </span>
                    </div>
                  </td>

                  <td className="px-8 py-6 text-right">
                    <div className="flex justify-end gap-3 opacity-20 group-hover:opacity-100 transition-all duration-300">
                      <button className="p-2 text-gray-500 hover:text-white transition-colors hover:scale-125">
                        <FaPenToSquare size={16} />
                      </button>
                      <button
                        onClick={() => deleteReviewCar(review._id)}
                        className="p-2 text-gray-500 hover:text-red-600 transition-colors hover:scale-125"
                      >
                        <FaTrash size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminReviewManager;
