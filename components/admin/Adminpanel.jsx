// 'use client';
// import { deleteCar, markAsSold } from '@/app/(home)/action/actions';
// import Link from 'next/link';
// import { useState } from 'react';
// import toast from 'react-hot-toast';
// import { FaCarSide, FaPenToSquare, FaPlus, FaTrash } from 'react-icons/fa6';
// import AddCarModal from './AddCarModel';
// import Logout from './Logout';
// import AdminReviewManager from './ReviewAdmin';
// import SoldModal from './SoldOutModel';
// const AdminPanel = ({ cars, brands, categorys, reviews }) => {
//   const [showMdelForm, setShowModelForm] = useState(false);
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [showSlodOutModel, setShowSlodOutModel] = useState(false);

//   const handleSoldConfirm = async (carId, inputData) => {
//     try {
//       const res = await markAsSold(carId, inputData);

//       if (res.success) {
//         toast.success('গাড়িটি সোল্ড আউট হিসেবে সেভ হয়েছে!');
//         setShowSlodOutModel(false);
//         setSelectedCar(null); // ডাটা রিসেট
//       } else {
//         toast.error(res.error || 'পাসওয়ার্ড ভুল বা অন্য সমস্যা হয়েছে');
//       }
//     } catch (error) {
//       toast.error('সার্ভারে সমস্যা হয়েছে');
//     }
//   };

//   const openCarModal = () => {
//     setSelectedCar(null);
//     setShowModelForm(true);
//   };

//   const handleEditCar = (car) => {
//     setSelectedCar(car);
//     setShowModelForm(true);
//   };

//   const handleSoldout = (car) => {
//     setSelectedCar(car);
//     setShowSlodOutModel(true);
//   };

//   return (
//     <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans">
//       {/* ADD/EDIT CAR MODAL */}
//       {showMdelForm && (
//         <AddCarModal
//           cars={cars}
//           brands={brands}
//           categories={categorys}
//           initialData={selectedCar}
//           onClose={() => {
//             setShowModelForm(false);
//             setSelectedCar(null); // ক্লোজ করার সময় রিসেট
//           }}
//         />
//       )}

//       {/* SOLD OUT MODAL */}
//       {showSlodOutModel && (
//         <SoldModal
//           car={selectedCar}
//           onConfirm={handleSoldConfirm}
//           onClose={() => {
//             setShowSlodOutModel(false);
//             setSelectedCar(null); // ক্লোজ করার সময় রিসেট
//           }}
//         />
//       )}

//       {/* HEADER */}
//       <div className="max-w-7xl mx-auto mb-16">
//         <div className="flex justify-between items-center">
//           {' '}
//           <h1 className="text-4xl font-black uppercase tracking-tighter">
//             Mariam Auto <span className="text-red-600">Admin</span>
//           </h1>
//           <Link href="/admin/sold-car" className="text-2xl font-black  underline tracking-tighter">
//             Go to Sold-car
//           </Link>
//         </div>
//         <p className="text-gray-500 text-sm mt-2 font-medium uppercase tracking-widest">
//           Inventory & Content Manager
//         </p>
//       </div>

//       {/* SECTION 1: CAR LIST */}
//       <div className="max-w-7xl mx-auto mb-20">
//         <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
//           <div>
//             <h3 className="text-xl font-bold uppercase tracking-tight flex items-center gap-3">
//               <FaCarSide className="text-red-600" /> Car Inventory List
//             </h3>
//             <p className="text-gray-600 text-xs mt-1 font-bold uppercase tracking-widest">
//               Manage {cars.length} Vehicles
//             </p>
//           </div>

//           <button
//             onClick={openCarModal}
//             className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 transition-all shadow-xl shadow-red-600/20"
//           >
//             <FaPlus /> Add New Car
//           </button>
//         </div>

//         <div className="bg-[#111] border border-white/5 rounded-[2.5rem] overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-white/5 text-[10px] uppercase font-black tracking-[0.2em] text-gray-400">
//                   <th className="px-8 py-6">SL</th>
//                   <th className="px-8 py-6">Date</th>

//                   <th className="px-8 py-6">Model Name</th>
//                   <th className="px-8 py-6">Package</th>
//                   <th className="px-8 py-6 text-center">Year</th>
//                   <th className="px-8 py-6 text-center">Price</th>
//                   <th className="px-8 py-6 text-center">Color</th>
//                   <th className="px-8 py-6 text-center">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-white/5">
//                 {cars.map((car, index) => (
//                   <tr key={car._id} className="hover:bg-white/[0.02] transition-colors group">
//                     <td className="px-8 py-6 font-bold">{index + 1}</td>
//                     <td className="px-6 py-6 text-center">
//                       <div className="flex flex-col items-center">
//                         <span className="text-[9px] text-gray-600 uppercase font-black tracking-widest mb-1">
//                           Listed Date
//                         </span>
//                         <span className="text-xs font-mono text-gray-400 font-bold">
//                           {car.createdAt
//                             ? new Date(car.createdAt).toLocaleDateString('en-GB', {
//                                 day: '2-digit',
//                                 month: '2-digit',
//                                 year: 'numeric',
//                               })
//                             : 'N/A'}
//                         </span>
//                       </div>
//                     </td>
//                     <td className="px-8 py-6 font-bold">{car.name}</td>
//                     <td className="px-8 py-6 font-bold">{car.package}</td>
//                     <td className="px-8 py-6 text-center font-bold">{car.modelYear}</td>
//                     <td className="px-8 py-6 text-center font-mono text-red-500 font-bold">
//                       {car.price}
//                     </td>
//                     <td className="px-8 py-6 text-center font-mono text-pink-500 font-bold">
//                       {car.color}
//                     </td>
//                     <td className="px-8 py-6 text-right">
//                       <div className="flex justify-end gap-3">
//                         <button
//                           // onClick={() => handleEditCar(car)}
//                           onClick={() => !car.isSold && handleEditCar(car)}
//                           disabled={car.isSold}
//                           className={`p-2 transition-all ${
//                             car.isSold
//                               ? 'opacity-20 cursor-not-allowed text-gray-500'
//                               : 'text-gray-400 hover:text-white'
//                           }`}
//                         >
//                           <FaPenToSquare size={16} />
//                         </button>
//                         <button
//                           // onClick={() => deleteCar(car._id)}
//                           onClick={() => !car.isSold && deleteCar(car._id)}
//                           disabled={car.isSold}
//                           className={`p-2 transition-all ${
//                             car.isSold
//                               ? 'opacity-20 cursor-not-allowed text-gray-500'
//                               : 'text-gray-400 hover:text-red-600'
//                           }`}
//                         >
//                           <FaTrash size={16} />
//                         </button>
//                         <button
//                           onClick={() => handleSoldout(car)}
//                           className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${
//                             car.isSold
//                               ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
//                               : 'bg-green-600/10 text-green-500 hover:bg-green-600 hover:text-white'
//                           }`}
//                           disabled={car.isSold}
//                         >
//                           {car.isSold ? 'Sold Out' : 'Available'}
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       <AdminReviewManager reviews={reviews} />
//       <div className="flex justify-center items-center text-center text-red-500 rounded-md">
//         <Logout />
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;
'use client';
import { deleteCar, markAsSold } from '@/app/(home)/action/actions';
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';
import {
  FaBars,
  FaCarSide,
  FaGauge,
  FaPenToSquare,
  FaPlus,
  FaStar,
  FaTrash,
  FaXmark,
} from 'react-icons/fa6';
import AddCarModal from './AddCarModel';
import Logout from './Logout';
import AdminReviewManager from './ReviewAdmin';
import SoldModal from './SoldOutModel';

const AdminPanel = ({ cars, brands, categorys, reviews }) => {
  const [showMdelForm, setShowModelForm] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showSlodOutModel, setShowSlodOutModel] = useState(false);

  // Navigation & Drawer States
  const [activeTab, setActiveTab] = useState('inventory');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSoldConfirm = async (carId, inputData) => {
    try {
      const res = await markAsSold(carId, inputData);

      if (res.success) {
        toast.success('গাড়িটি সোল্ড আউট হিসেবে সেভ হয়েছে!');
        setShowSlodOutModel(false);
        setSelectedCar(null);
      } else {
        toast.error(res.error || 'পাসওয়ার্ড ভুল বা অন্য সমস্যা হয়েছে');
      }
    } catch (error) {
      toast.error('সার্ভারে সমস্যা হয়েছে');
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
    <div className="min-h-screen bg-[#08080a] text-slate-100 flex font-sans selection:bg-red-500/30 selection:text-red-200">
      {/* MODALS */}
      {showMdelForm && (
        <AddCarModal
          cars={cars}
          brands={brands}
          categories={categorys}
          initialData={selectedCar}
          onClose={() => {
            setShowModelForm(false);
            setSelectedCar(null);
          }}
        />
      )}

      {showSlodOutModel && (
        <SoldModal
          car={selectedCar}
          onConfirm={handleSoldConfirm}
          onClose={() => {
            setShowSlodOutModel(false);
            setSelectedCar(null);
          }}
        />
      )}

      {/* MOBILE BACKDROP OVERLAY */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden transition-opacity"
        />
      )}

      {/* ================= SIDEBAR (DESKTOP + MOBILE DRAWER) ================= */}
      <aside
        className={`w-64 bg-[#111115] border-r border-white/5 flex flex-col justify-between fixed h-screen z-50 transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Logo & Mobile Close Header */}
          <div className="p-5 border-b border-white/5 flex items-center justify-between">
            <h1 className="text-lg font-extrabold uppercase tracking-tight text-white flex items-center gap-2">
              Mariam Auto{' '}
              <span className="text-red-600 bg-red-600/10 px-2 py-0.5 rounded-lg border border-red-600/20 text-xs">
                Admin
              </span>
            </h1>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5"
            >
              <FaXmark size={18} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="p-4 space-y-1.5">
            <button
              onClick={() => {
                setActiveTab('inventory');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'inventory'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FaGauge size={16} />
              <span>Inventory</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('reviews');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'reviews'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FaStar size={16} />
              <span>Reviews</span>
            </button>

            <Link
              href="/admin/sold-car"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <FaCarSide size={16} />
              <span>Sold Cars Archive</span>
            </Link>
          </nav>
        </div>

        {/* Logout at Bottom */}
        <div className="p-4 border-t border-white/5">
          <div className="w-full bg-white/5 hover:bg-red-600/10 hover:border-red-600/30 border border-white/5 rounded-xl transition-all">
            <Logout />
          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 md:ml-64 p-3 sm:p-6 md:p-8 overflow-y-auto w-full">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Top Navbar Header */}
          <header className="flex items-center justify-between bg-[#111115] border border-white/5 p-4 rounded-2xl gap-2">
            <div className="flex items-center gap-3">
              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-300 hover:text-white"
                aria-label="Open Sidebar Menu"
              >
                <FaBars size={18} />
              </button>

              <div>
                <h2 className="text-base sm:text-lg font-bold text-white capitalize">
                  {activeTab === 'inventory' ? 'Inventory' : 'Reviews'}
                </h2>
                {activeTab === 'inventory' && (
                  <p className="text-[11px] text-slate-400 hidden sm:block">Manage showroom data</p>
                )}
              </div>
            </div>

            {/* Inventory tab holei kebol Add New Vehicle button dekhabe */}
            {activeTab === 'inventory' && (
              <button
                onClick={openCarModal}
                className="bg-red-600 hover:bg-red-500 text-white px-3.5 sm:px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-red-600/20 active:scale-95 shrink-0"
              >
                <FaPlus size={12} /> <span className="hidden sm:inline">Add New Vehicle</span>
                <span className="sm:hidden">Add</span>
              </button>
            )}
          </header>

          {/* TAB 1: CAR INVENTORY */}
          {activeTab === 'inventory' && (
            <section className="space-y-4">
              <div className="flex justify-between items-center px-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Total Vehicles: <span className="text-red-500">{cars?.length || 0}</span>
                </p>
              </div>

              {/* Table Container with Horizontal Scroll */}
              <div className="bg-[#111115] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[650px]">
                    <thead>
                      <tr className="bg-white/[0.02] border-b border-white/5 text-[11px] uppercase font-bold tracking-wider text-slate-400">
                        <th className="px-4 py-3 sm:px-6 sm:py-4">#</th>
                        <th className="px-4 py-3 sm:px-6 sm:py-4">Listed Date</th>
                        <th className="px-4 py-3 sm:px-6 sm:py-4">Model Name</th>
                        <th className="px-4 py-3 sm:px-6 sm:py-4">Package</th>
                        <th className="px-4 py-3 sm:px-6 sm:py-4 text-center">Year</th>
                        <th className="px-4 py-3 sm:px-6 sm:py-4 text-center">Price</th>
                        <th className="px-4 py-3 sm:px-6 sm:py-4 text-center">Color</th>
                        <th className="px-4 py-3 sm:px-6 sm:py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                      {cars?.map((car, index) => (
                        <tr key={car._id} className="hover:bg-white/[0.02] transition-colors group">
                          <td className="px-4 py-3 sm:px-6 sm:py-4 font-mono text-slate-500 font-medium">
                            {String(index + 1).padStart(2, '0')}
                          </td>
                          <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                            <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                              {car.createdAt
                                ? new Date(car.createdAt).toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: 'short',
                                    year: 'numeric',
                                  })
                                : 'N/A'}
                            </span>
                          </td>
                          <td className="px-4 py-3 sm:px-6 sm:py-4 font-semibold text-white whitespace-nowrap">
                            {car.name}
                          </td>
                          <td className="px-4 py-3 sm:px-6 sm:py-4 text-slate-300 whitespace-nowrap">
                            {car.package || 'Standard'}
                          </td>
                          <td className="px-4 py-3 sm:px-6 sm:py-4 text-center font-mono text-slate-400">
                            {car.modelYear}
                          </td>
                          <td className="px-4 py-3 sm:px-6 sm:py-4 text-center font-mono text-red-400 font-bold whitespace-nowrap">
                            {car.price}
                          </td>
                          <td className="px-4 py-3 sm:px-6 sm:py-4 text-center font-mono text-pink-400/90 font-medium whitespace-nowrap">
                            {car.color}
                          </td>
                          <td className="px-4 py-3 sm:px-6 sm:py-4 text-right whitespace-nowrap">
                            <div className="flex items-center justify-end gap-1.5 sm:gap-2">
                              {/* Edit Button */}
                              <button
                                onClick={() => !car.isSold && handleEditCar(car)}
                                disabled={car.isSold}
                                title="Edit Car"
                                className={`p-1.5 sm:p-2 rounded-lg border transition-all ${
                                  car.isSold
                                    ? 'opacity-20 border-transparent text-slate-600 cursor-not-allowed'
                                    : 'border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                                }`}
                              >
                                <FaPenToSquare size={13} />
                              </button>

                              {/* Delete Button */}
                              <button
                                onClick={() => !car.isSold && deleteCar(car._id)}
                                disabled={car.isSold}
                                title="Delete Car"
                                className={`p-1.5 sm:p-2 rounded-lg border transition-all ${
                                  car.isSold
                                    ? 'opacity-20 border-transparent text-slate-600 cursor-not-allowed'
                                    : 'border-white/5 text-slate-400 hover:text-red-400 hover:bg-red-500/10'
                                }`}
                              >
                                <FaTrash size={13} />
                              </button>

                              {/* Sold Button */}
                              <button
                                onClick={() => handleSoldout(car)}
                                disabled={car.isSold}
                                className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all border ${
                                  car.isSold
                                    ? 'bg-slate-800/50 border-slate-700/50 text-slate-500 cursor-not-allowed'
                                    : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white'
                                }`}
                              >
                                {car.isSold ? 'Sold Out' : 'Available'}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {/* TAB 2: REVIEWS */}
          {activeTab === 'reviews' && (
            <section className="bg-[#111115] border border-white/5 rounded-2xl p-4 sm:p-6 shadow-2xl">
              <AdminReviewManager reviews={reviews} />
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
