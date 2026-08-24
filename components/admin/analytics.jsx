'use client';
import { useEffect, useState } from 'react';
import { FaCar, FaChartLine, FaCircleDollarToSlot, FaSpinner, FaWallet } from 'react-icons/fa6';

export default function AnalyticsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/analytics')
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success) {
          setData(resData.analytics);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch Error:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0b] flex items-center justify-center text-white gap-3">
        <FaSpinner className="animate-spin text-red-600 text-2xl" />
        <span className="text-sm font-bold tracking-widest uppercase">
          Calculating Financials...
        </span>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0a0a0b] flex items-center justify-center text-red-500 font-bold">
        Failed to load analytics data.
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 bg-[#0a0a0b] min-h-screen text-white space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-red-600">
          Financial & Profit Analytics
        </h1>
        <p className="text-xs text-gray-400 mt-1">
          Real-time showroom financial health and profit report
        </p>
      </div>

      {/* ম্যাট্রিক্স কার্ডস */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* মোট প্রফিট */}
        <div className="bg-[#111] p-6 rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/20 to-transparent">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
              Net Profit
            </span>
            <FaCircleDollarToSlot className="text-emerald-500 text-2xl" />
          </div>
          <p className="text-3xl font-black">৳ {data.sales.netProfit.toLocaleString()}</p>
          <p className="text-[10px] text-gray-400 mt-2">
            From {data.sales.totalSoldCars} sold vehicles
          </p>
        </div>

        {/* মোট সেলস */}
        <div className="bg-[#111] p-6 rounded-3xl border border-white/10">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
              Total Revenue
            </span>
            <FaChartLine className="text-red-500 text-2xl" />
          </div>
          <p className="text-3xl font-black">৳ {data.sales.totalRevenue.toLocaleString()}</p>
          <p className="text-[10px] text-gray-400 mt-2">
            Buying Cost: ৳ {data.sales.totalCost.toLocaleString()}
          </p>
        </div>

        {/* ইনভেস্টমেন্ট / স্টক ভ্যালু */}
        <div className="bg-[#111] p-6 rounded-3xl border border-white/10">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
              Stock Value
            </span>
            <FaWallet className="text-blue-500 text-2xl" />
          </div>
          <p className="text-3xl font-black">৳ {data.stock.totalInvestment.toLocaleString()}</p>
          <p className="text-[10px] text-gray-400 mt-2">
            Expected Revenue: ৳ {data.stock.expectedRevenue.toLocaleString()}
          </p>
        </div>

        {/* কারেন্ট স্টক কাউন্ট */}
        <div className="bg-[#111] p-6 rounded-3xl border border-white/10">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
              Stock Cars
            </span>
            <FaCar className="text-amber-500 text-2xl" />
          </div>
          <p className="text-3xl font-black">{data.stock.totalCars} Units</p>
          <p className="text-[10px] text-gray-400 mt-2">Ready for sale</p>
        </div>
      </div>

      {/* রিসেন্টলি সোলেড কার টেবিল */}
      <div className="bg-[#111] p-6 rounded-3xl border border-white/10 space-y-4">
        <h2 className="text-lg font-bold text-white uppercase tracking-wider">Recent Sold Cars</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="bg-white/5 uppercase text-[10px] font-bold text-gray-400">
              <tr>
                <th className="p-4 rounded-l-xl">Car Name</th>
                {/* <th className="p-4 rounded-l-xl">Coustomer Name</th> */}
                <th className="p-4">Buying Price</th>
                <th className="p-4">Selling Price</th>
                <th className="p-4">Profit</th>
                <th className="p-4 rounded-r-xl">Date Sold</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {data.recentSales.length > 0 ? (
                data.recentSales.map((car) => (
                  <tr key={car.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-white">{car.name}</td>
                    {/* <td className="p-4 font-bold text-white"> {car.customerName}</td> */}
                    <td className="p-4">৳ {car.buyingPrice?.toLocaleString() || 0}</td>
                    <td className="p-4">৳ {car.sellingPrice?.toLocaleString() || 0}</td>
                    <td className="p-4 font-bold text-emerald-400">
                      +৳ {car.profit?.toLocaleString() || 0}
                    </td>
                    <td className="p-4 text-xs text-gray-400">
                      {car.soldAt ? new Date(car.soldAt).toLocaleDateString() : 'N/A'}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-6 text-center text-gray-500 text-xs">
                    No sales recorded yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
