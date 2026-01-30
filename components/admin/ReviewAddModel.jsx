"use client";
import { ReviewSubmit } from "@/app/loginAction/loginAction";
import {
  FaCalendarDays,
  FaCarRear,
  FaCloudArrowUp,
  FaImage,
  FaLink,
  FaMessage,
  FaStar,
  FaUserPen,
  FaXmark,
} from "react-icons/fa6";
const AddReview = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-hidden">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xl animate-in fade-in duration-500"
        onClick={onClose}
      ></div>

      {/* Main Container */}
      <div className="relative bg-[#08090d] w-full max-w-3xl rounded-[3rem] border border-white/5 shadow-[0_0_100px_rgba(220,38,38,0.1)] overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]">
        {/* Glow Header */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>

        {/* Header Section */}
        <div className="p-8 pb-4 flex justify-between items-center">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.5em] text-red-600 mb-1">
              Inventory Management
            </p>
            <h2 className="text-3xl font-black italic tracking-tighter text-white uppercase leading-none">
              New <span className="text-red-600">Testimonial</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-red-600/20 border border-white/5 rounded-2xl group transition-all"
          >
            <FaXmark
              size={20}
              className="text-gray-500 group-hover:text-red-600 group-hover:rotate-90 transition-all duration-300"
            />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form
          action={async (formData) => {
            await ReviewSubmit(formData);
            onClose();
          }}
          className="p-8 pt-2 space-y-6 overflow-y-auto custom-scrollbar"
        >
          {/* Section 1: Buyer Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                <FaUserPen className="text-red-600" /> Buyer Name
              </label>
              <input
                type="text"
                name="customerName"
                required
                placeholder="Full Name"
                className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-4 text-sm outline-none focus:border-red-600/50 transition-all text-white"
              />
            </div>
            <input
              type="hidden"
              name="carId"
              //   value={initialData._id.toString()}
            />
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                <FaImage className="text-red-600" /> Buyer Avatar URL
              </label>
              <input
                type="file"
                name="customerImage"
                required
                placeholder="Link to profile photo"
                className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-4 text-sm outline-none focus:border-red-600/50 transition-all text-white"
              />
            </div>
          </div>

          {/* Section 2: Car & Date */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="md:col-span-2 space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                <FaCarRear className="text-red-600" /> Car Model
              </label>
              <input
                type="text"
                required
                name="carName"
                placeholder="Ex: Audi R8 V10"
                className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-4 text-sm outline-none focus:border-red-600/50 transition-all text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                <FaCalendarDays className="text-red-600" /> Date
              </label>
              <input
                type="date"
                required
                name="reviewDate"
                className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-4 text-sm outline-none focus:border-red-600/50 transition-all text-gray-400"
              />
            </div>
          </div>

          {/* Section 3: Car Image & Rating */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                <FaLink className="text-red-600" /> Car Showcase Image URL
              </label>
              <input
                type="file"
                // type="text"
                required
                name="carImage"
                placeholder="Link to car photo"
                className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-4 text-sm outline-none focus:border-red-600/50 transition-all text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                <FaStar className="text-red-600" /> Rating Level
              </label>
              <select
                name="rating"
                className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-4 text-sm outline-none focus:border-red-600/50 transition-all text-gray-400 appearance-none cursor-pointer"
              >
                <option value="5" className="bg-black">
                  5 Stars - Extraordinary
                </option>
                <option value="4" className="bg-black">
                  4 Stars - Premium
                </option>
                <option value="3" className="bg-black">
                  3 Stars - Average
                </option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
              <FaMessage className="text-red-600" /> Detailed Review /
              Description
            </label>
            <textarea
              rows="4"
              required
              name="reviewText"
              placeholder="Tell their story..."
              className="w-full bg-white/[0.02] border border-white/10 rounded-[1.5rem] p-5 text-sm outline-none focus:border-red-600/50 transition-all text-white resize-none italic"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="group relative w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-[2rem] shadow-[0_10px_40px_rgba(220,38,38,0.2)] transition-all duration-300 uppercase tracking-[0.3em] flex items-center justify-center gap-3 overflow-hidden active:scale-95"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <FaCloudArrowUp size={20} className="relative z-10" />
            <span className="relative z-10">Push To Database</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
