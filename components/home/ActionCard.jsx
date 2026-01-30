import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineEye, HiOutlinePhone } from "react-icons/hi";

const ActionCard = () => {
  const phoneNumber = "01944755111";
  const whatsappNumber = "8801944755111";

  return (
    // মেইন কন্টেইনার - ব্যাকগ্রাউন্ড ডার্ক এবং কার্ডটি সেন্টারে থাকবে
    <div className="flex items-center justify-center p-6 bg-[#0B0E14]">
      {/* কার্ড কন্টেইনার - স্ট্যান্ডার্ড সাইজ দেওয়া হয়েছে */}
      <div className="w-full max-w-[340px] bg-[#0B0E14] p-6 rounded-2xl shadow-2xl border border-white/5">
        <div className="flex flex-col gap-3">
          {/* View Cars Button */}
          <a
            href="#inventory"
            className="flex items-center justify-center gap-3 bg-[#E31E24] hover:bg-[#C1171D] text-white py-3.5 rounded-xl font-bold text-[15px] uppercase tracking-wide transition-all active:scale-95 shadow-lg shadow-red-900/20"
          >
            <HiOutlineEye size={22} />
            <span>View Cars</span>
          </a>

          {/* Call Now Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center gap-3 bg-[#E31E24] hover:bg-[#C1171D] text-white py-3.5 rounded-xl font-bold text-[15px] uppercase tracking-wide transition-all active:scale-95 shadow-lg shadow-red-900/20"
          >
            <HiOutlinePhone size={20} />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Us Button */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#E31E24] hover:bg-[#C1171D] text-white py-3.5 rounded-xl font-bold text-[15px] uppercase tracking-wide transition-all active:scale-95 shadow-lg shadow-red-900/20"
          >
            <FaWhatsapp size={20} />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* নিচের ফোন নাম্বার সেকশন */}
        <div className="mt-6 pt-4 border-t border-white/5 flex flex-col items-center">
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <HiOutlinePhone
              size={18}
              className="text-[#E31E24] group-hover:scale-110 transition-transform"
            />
            <span className="text-xl font-semibold tracking-wider">
              {phoneNumber}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
