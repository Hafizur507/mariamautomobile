'use client';

import { markAsSold } from '@/app/(home)/action/actions';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaBars, FaPlus } from 'react-icons/fa6';
import AddCarModal from './AddCarModel';
// import MonthlySalesChart from './MonthlySalesChart'; // মান্থলি চার্ট ইমপোর্ট
import Dashboard from './Dashboard';
import Inventory from './Inventory';
import AdminReviewManager from './ReviewAdmin';
import Sidebar from './Sidebar';
import SoldModal from './SoldOutModel';

const AdminPanel = ({ cars, brands, categorys, reviews }) => {
  const [showMdelForm, setShowModelForm] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showSlodOutModel, setShowSlodOutModel] = useState(false);

  // Navigation & Drawer States (Default Tab: dashboard)
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Financial Analytics State
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loadingAnalytics, setLoadingAnalytics] = useState(true);

  // Fetch Financial Analytics for Dashboard Tab
  useEffect(() => {
    fetch('/api/analytics')
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success) {
          setAnalyticsData(resData.analytics);
        }
        setLoadingAnalytics(false);
      })
      .catch((err) => {
        console.error('Analytics Fetch Error:', err);
        setLoadingAnalytics(false);
      });
  }, []);

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
      <Sidebar
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
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
                  {activeTab === 'dashboard'
                    ? 'Showroom Overview'
                    : activeTab === 'inventory'
                      ? 'Inventory Management'
                      : 'Customer Reviews'}
                </h2>
                <p className="text-[11px] text-slate-400 hidden sm:block">
                  {activeTab === 'dashboard'
                    ? 'রিয়েল-টাইম ফিনান্সিয়াল ও সেলস অ্যানালিটিক্স'
                    : activeTab === 'inventory'
                      ? 'গাড়ির স্টক আপডেট ও প্রাইসিং'
                      : 'কাস্টমারদের ফিডব্যাক ম্যানেজ করুন'}
                </p>
              </div>
            </div>

            {/* Add New Vehicle Button */}
            {activeTab === 'inventory' ? (
              <button
                onClick={openCarModal}
                className="bg-red-600 hover:bg-red-500 text-white px-3.5 sm:px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-red-600/20 active:scale-95 shrink-0"
              >
                <FaPlus size={12} /> <span className="hidden sm:inline"> Add New Vehicle</span>
                <span className="sm:hidden">Add</span>
              </button>
            ) : null}
          </header>

          {/* ================= TAB 1: DASHBOARD OVERVIEW ================= */}
          {activeTab === 'dashboard' && (
            <Dashboard loadingAnalytics={loadingAnalytics} analyticsData={analyticsData} />
          )}

          {/* ================= TAB 2: CAR INVENTORY ================= */}
          {activeTab === 'inventory' && (
            <Inventory cars={cars} handleEditCar={handleEditCar} handleSoldout={handleSoldout} />
          )}

          {/* ================= TAB 3: REVIEWS ================= */}
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
