import Link from 'next/link';
import { FaCar, FaCarSide, FaGauge, FaStar, FaXmark } from 'react-icons/fa6';
import Logout from './Logout';
export default function Sidebar({
  setIsMobileMenuOpen,
  isMobileMenuOpen,
  setActiveTab,
  activeTab,
}) {
  return (
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
          {/* 1. Dashboard Tab */}
          <button
            onClick={() => {
              setActiveTab('dashboard');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'dashboard'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <FaGauge size={16} />
            <span>Dashboard</span>
          </button>

          {/* 2. Inventory Tab */}
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
            <FaCarSide size={16} />
            <span>Inventory</span>
          </button>

          {/* 3. Reviews Tab */}
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

          {/* Sold Cars Link */}
          <Link
            href="/admin/sold-car"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white hover:bg-white/5 transition-all"
          >
            <FaCar className="text-slate-400" size={16} />
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
  );
}
