"use client";
import {
  FaLock,
  FaMoneyBillWave,
  FaPhone,
  FaUser,
  FaXmark,
} from "react-icons/fa6";

const SoldModal = ({ car, onClose, onConfirm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      buyingPrice: formData.get("buyingPrice"),
      sellingPrice: formData.get("sellingPrice"),
      customerName: formData.get("customerName"),
      customerMobile: formData.get("customerMobile"),
      password: formData.get("password"),
    };

    onConfirm(car._id, data);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden shadow-2xl">
        {/* Background Glow Effect */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/10 blur-[100px]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
        >
          <FaXmark size={20} />
        </button>

        <div className="relative">
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-1">
            Mark as <span className="text-red-600">Sold</span>
          </h2>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-6">
            Vehicle: <span className="text-gray-300">{car?.name}</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Customer Name */}
            <div>
              <label className="flex items-center gap-2 text-[10px] uppercase font-bold text-gray-500 mb-2 ml-1">
                <FaUser className="text-blue-500" /> Customer Name
              </label>
              <input
                required
                name="customerName"
                type="text"
                placeholder="Ex: Rahim Ahmed"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 outline-none focus:border-blue-600 focus:bg-white/[0.08] transition-all"
              />
            </div>

            {/* Customer Mobile */}
            <div>
              <label className="flex items-center gap-2 text-[10px] uppercase font-bold text-gray-500 mb-2 ml-1">
                <FaPhone className="text-orange-500" /> Mobile Number
              </label>
              <input
                required
                name="customerMobile"
                type="tel"
                placeholder="Ex: 017XXXXXXXX"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 outline-none focus:border-orange-600 focus:bg-white/[0.08] transition-all font-mono"
              />
            </div>

            {/* Prices Row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="flex items-center gap-2 text-[9px] uppercase font-bold text-gray-500 mb-2 ml-1">
                  <FaMoneyBillWave className="text-red-600" /> Buying
                </label>
                <input
                  required
                  name="buyingPrice"
                  type="number"
                  //   defaultValue={car?.price} // Inventory price default হিসেবে থাকবে
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-red-600 transition-all font-mono text-sm"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-[9px] uppercase font-bold text-gray-500 mb-2 ml-1">
                  <FaMoneyBillWave className="text-green-500" /> Selling
                </label>
                <input
                  required
                  name="sellingPrice"
                  type="number"
                  placeholder="Final Price"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-green-600 transition-all font-mono text-sm"
                />
              </div>
            </div>

            {/* Admin Password */}
            <div>
              <label className="flex items-center gap-2 text-[10px] uppercase font-bold text-gray-500 mb-2 ml-1">
                <FaLock className="text-gray-400" /> Admin Password
              </label>
              <input
                required
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 outline-none focus:border-white/30 transition-all text-sm"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest border border-white/10 hover:bg-white/5 transition-all text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-red-600/20"
              >
                Confirm Sold
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SoldModal;
