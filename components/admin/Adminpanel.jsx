"use client";
import { deleteCar, markAsSold } from "@/app/(home)/action/actions";
import { useState } from "react";
import { FaCarSide, FaPenToSquare, FaPlus, FaTrash } from "react-icons/fa6";
import { toast } from "react-toastify";
import AddCarModal from "./AddCarModel";
import Logout from "./Logout";
import AdminReviewManager from "./ReviewAdmin";
import SoldModal from "./SoldOutModel";
const AdminPanel = ({ cars, brands, categorys, reviews }) => {
  const [showMdelForm, setShowModelForm] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showSlodOutModel, setShowSlodOutModel] = useState(false);

  // const [sliders, setSliders] = useState([
  //   {
  //     id: 1,
  //     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  //     link: "/inventory",
  //   },
  // ]);

  // সোল্ড কনফার্ম ফাংশন
  const handleSoldConfirm = async (carId, inputData) => {
    try {
      const res = await markAsSold(carId, inputData);

      if (res.success) {
        toast.success("গাড়িটি সোল্ড আউট হিসেবে সেভ হয়েছে!");
        setShowSlodOutModel(false);
        setSelectedCar(null); // ডাটা রিসেট
      } else {
        toast.error(res.error || "পাসওয়ার্ড ভুল বা অন্য সমস্যা হয়েছে");
      }
    } catch (error) {
      toast.error("সার্ভারে সমস্যা হয়েছে");
    }
  };

  const openCarModal = () => {
    setSelectedCar(null);
    setShowModelForm(true);
  };

  const handleEditCar = (car) => {
    setSelectedCar(car);
    setShowModelForm(true);
  };

  const handleSoldout = (car) => {
    setSelectedCar(car);
    setShowSlodOutModel(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans">
      {/* ADD/EDIT CAR MODAL */}
      {showMdelForm && (
        <AddCarModal
          cars={cars}
          brands={brands}
          categories={categorys}
          initialData={selectedCar}
          onClose={() => {
            setShowModelForm(false);
            setSelectedCar(null); // ক্লোজ করার সময় রিসেট
          }}
        />
      )}

      {/* SOLD OUT MODAL */}
      {showSlodOutModel && (
        <SoldModal
          car={selectedCar}
          onConfirm={handleSoldConfirm}
          onClose={() => {
            setShowSlodOutModel(false);
            setSelectedCar(null); // ক্লোজ করার সময় রিসেট
          }}
        />
      )}

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-4xl font-black uppercase tracking-tighter">
          Mariam Auto <span className="text-red-600">Admin</span>
        </h1>
        <p className="text-gray-500 text-sm mt-2 font-medium uppercase tracking-widest">
          Inventory & Content Manager
        </p>
      </div>

      {/* SECTION 1: CAR LIST */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
          <div>
            <h3 className="text-xl font-bold uppercase tracking-tight flex items-center gap-3">
              <FaCarSide className="text-red-600" /> Car Inventory List
            </h3>
            <p className="text-gray-600 text-xs mt-1 font-bold uppercase tracking-widest">
              Manage {cars.length} Vehicles
            </p>
          </div>

          <button
            onClick={openCarModal}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 transition-all shadow-xl shadow-red-600/20"
          >
            <FaPlus /> Add New Car
          </button>
        </div>

        <div className="bg-[#111] border border-white/5 rounded-[2.5rem] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 text-[10px] uppercase font-black tracking-[0.2em] text-gray-400">
                  <th className="px-8 py-6">SL</th>
                  <th className="px-8 py-6">Date</th>

                  <th className="px-8 py-6">Model Name</th>
                  <th className="px-8 py-6">Package</th>
                  <th className="px-8 py-6 text-center">Year</th>
                  <th className="px-8 py-6 text-center">Price</th>
                  <th className="px-8 py-6 text-center">Color</th>
                  <th className="px-8 py-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {cars.map((car, index) => (
                  <tr
                    key={car._id}
                    className="hover:bg-white/[0.02] transition-colors group"
                  >
                    <td className="px-8 py-6 font-bold">{index + 1}</td>
                    <td className="px-6 py-6 text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-[9px] text-gray-600 uppercase font-black tracking-widest mb-1">
                          Listed Date
                        </span>
                        <span className="text-xs font-mono text-gray-400 font-bold">
                          {car.createdAt
                            ? new Date(car.createdAt).toLocaleDateString(
                                "en-GB",
                                {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                },
                              )
                            : "N/A"}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-bold">{car.name}</td>
                    <td className="px-8 py-6 font-bold">{car.package}</td>
                    <td className="px-8 py-6 text-center font-bold">
                      {car.modelYear}
                    </td>
                    <td className="px-8 py-6 text-center font-mono text-red-500 font-bold">
                      {car.price}
                    </td>
                    <td className="px-8 py-6 text-center font-mono text-pink-500 font-bold">
                      {car.color}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-3">
                        <button
                          // onClick={() => handleEditCar(car)}
                          onClick={() => !car.isSold && handleEditCar(car)}
                          disabled={car.isSold}
                          className={`p-2 transition-all ${
                            car.isSold
                              ? "opacity-20 cursor-not-allowed text-gray-500"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          <FaPenToSquare size={16} />
                        </button>
                        <button
                          // onClick={() => deleteCar(car._id)}
                          onClick={() => !car.isSold && deleteCar(car._id)}
                          disabled={car.isSold}
                          className={`p-2 transition-all ${
                            car.isSold
                              ? "opacity-20 cursor-not-allowed text-gray-500"
                              : "text-gray-400 hover:text-red-600"
                          }`}
                        >
                          <FaTrash size={16} />
                        </button>
                        <button
                          onClick={() => handleSoldout(car)}
                          className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${
                            car.isSold
                              ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                              : "bg-green-600/10 text-green-500 hover:bg-green-600 hover:text-white"
                          }`}
                          disabled={car.isSold}
                        >
                          {car.isSold ? "Sold Out" : "Available"}
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
      <AdminReviewManager reviews={reviews} />
      <div className="flex justify-center items-center text-center text-red-500 rounded-md">
        <Logout />
      </div>
    </div>
  );
};

export default AdminPanel;
