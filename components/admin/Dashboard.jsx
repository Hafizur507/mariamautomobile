import {
  FaArrowRight,
  FaCar,
  FaChartLine,
  FaCircleDollarToSlot,
  FaClockRotateLeft,
  FaSpinner,
  FaWallet,
} from 'react-icons/fa6';

import Link from 'next/link';

import MonthlySalesChart from './monthly-chart';
export default function Dashboard({ loadingAnalytics, analyticsData }) {
  return (
    <section className="space-y-6">
      {loadingAnalytics ? (
        <div className="p-12 text-center text-slate-400 flex items-center justify-center gap-3">
          <FaSpinner className="animate-spin text-red-600 text-xl" />
          <span className="text-xs uppercase tracking-wider">Loading Financial Data...</span>
        </div>
      ) : (
        <>
          {/* ফিনান্সিয়াল ম্যাট্রিক্স কার্ডসমূহ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Net Profit */}
            <div className="bg-[#111115] p-5 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/20 to-transparent shadow-xl">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider">
                  Net Profit
                </span>
                <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
                  <FaCircleDollarToSlot size={16} />
                </div>
              </div>
              <p className="text-2xl font-black text-white">
                ৳ {analyticsData?.sales?.netProfit?.toLocaleString() || 0}
              </p>
              <p className="text-[10px] text-slate-400 mt-1">
                মোট{' '}
                <span className="text-white font-bold">
                  {analyticsData?.sales?.totalSoldCars || 0} টি
                </span>{' '}
                বিক্রিত গাড়ি থেকে
              </p>
            </div>

            {/* Revenue */}
            <div className="bg-[#111115] p-5 rounded-2xl border border-white/5 shadow-xl">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                  Total Revenue
                </span>
                <div className="p-2.5 bg-red-600/10 rounded-xl text-red-500">
                  <FaChartLine size={16} />
                </div>
              </div>
              <p className="text-2xl font-black text-white">
                ৳ {analyticsData?.sales?.totalRevenue?.toLocaleString() || 0}
              </p>
              <p className="text-[10px] text-slate-400 mt-1">
                ক্রয়মূল্য: ৳ {analyticsData?.sales?.totalCost?.toLocaleString() || 0}
              </p>
            </div>

            {/* Stock Value */}
            <div className="bg-[#111115] p-5 rounded-2xl border border-white/5 shadow-xl">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                  Stock Value
                </span>
                <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-500">
                  <FaWallet size={16} />
                </div>
              </div>
              <p className="text-2xl font-black text-white">
                ৳ {analyticsData?.stock?.totalInvestment?.toLocaleString() || 0}
              </p>
              <p className="text-[10px] text-slate-400 mt-1">
                সম্ভাব্য বিক্রয়: ৳ {analyticsData?.stock?.expectedRevenue?.toLocaleString() || 0}
              </p>
            </div>

            {/* Available Stock */}
            <div className="bg-[#111115] p-5 rounded-2xl border border-white/5 shadow-xl">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                  Available Stock
                </span>
                <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-500">
                  <FaCar size={16} />
                </div>
              </div>
              <p className="text-2xl font-black text-white">
                {analyticsData?.stock?.totalCars || 0} Units
              </p>
              <p className="text-[10px] text-slate-400 mt-1">বিক্রির জন্য প্রস্তুত</p>
            </div>
          </div>

          {/* ১২ মাসের প্রফিট ও সেলস রেভিনিউ গ্রাফ */}
          <MonthlySalesChart />

          {/* সাম্প্রতিক বিক্রিত গাড়ির তালিকা */}
          <div className="bg-[#111115] p-5 sm:p-6 rounded-2xl border border-white/5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/5 rounded-xl text-slate-300">
                  <FaClockRotateLeft size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    Recent Sales Transactions
                  </h3>
                  <p className="text-[10px] text-slate-400">সর্বশেষ বিক্রিত গাড়ির বিবরণ ও প্রফিট</p>
                </div>
              </div>

              <Link
                href="/admin/sold-car"
                className="text-xs text-red-500 font-bold hover:underline flex items-center gap-1"
              >
                <span>View All</span>
                <FaArrowRight size={10} />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300 min-w-[500px]">
                <thead className="bg-white/5 uppercase text-[10px] font-bold text-slate-400">
                  <tr>
                    <th className="p-3 rounded-l-xl">Vehicle Name</th>
                    <th className="p-3">Buying Price</th>
                    <th className="p-3">Selling Price</th>
                    <th className="p-3">Profit</th>
                    <th className="p-3 rounded-r-xl">Sale Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {analyticsData?.recentSales && analyticsData.recentSales.length > 0 ? (
                    analyticsData.recentSales.map((car) => (
                      <tr key={car.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-3 font-semibold text-white">{car.name}</td>
                        <td className="p-3 font-mono">
                          ৳ {car.buyingPrice?.toLocaleString() || 0}
                        </td>
                        <td className="p-3 font-mono">
                          ৳ {car.sellingPrice?.toLocaleString() || 0}
                        </td>
                        <td className="p-3 font-mono font-bold text-emerald-400">
                          +৳ {car.profit?.toLocaleString() || 0}
                        </td>
                        <td className="p-3 text-[11px] font-mono text-slate-400">
                          {car.soldAt ? new Date(car.soldAt).toLocaleDateString('en-GB') : 'N/A'}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="p-6 text-center text-slate-500">
                        কোনো বিক্রিত গাড়ির রেকর্ড পাওয়া যায়নি।
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
// <section className="space-y-6">
//   {loadingAnalytics ?
//     (
//     <div className="p-12 text-center text-slate-400 flex items-center justify-center gap-3">
//       <FaSpinner className="animate-spin text-red-600 text-xl" />
//       <span className="text-xs uppercase tracking-wider">
//         Loading Financial Data...
//       </span>
//     </div>
//   ) : (
//     <>
//       {/* ফিনান্সিয়াল ম্যাট্রিক্স কার্ডসমূহ */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {/* Net Profit */}
//         <div className="bg-[#111115] p-5 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/20 to-transparent shadow-xl">
//           <div className="flex justify-between items-center mb-3">
//             <span className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider">
//               Net Profit
//             </span>
//             <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
//               <FaCircleDollarToSlot size={16} />
//             </div>
//           </div>
//           <p className="text-2xl font-black text-white">
//             ৳ {analyticsData?.sales?.netProfit?.toLocaleString() || 0}
//           </p>
//           <p className="text-[10px] text-slate-400 mt-1">
//             মোট{' '}
//             <span className="text-white font-bold">
//               {analyticsData?.sales?.totalSoldCars || 0} টি
//             </span>{' '}
//             বিক্রিত গাড়ি থেকে
//           </p>
//         </div>

//         {/* Revenue */}
//         <div className="bg-[#111115] p-5 rounded-2xl border border-white/5 shadow-xl">
//           <div className="flex justify-between items-center mb-3">
//             <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
//               Total Revenue
//             </span>
//             <div className="p-2.5 bg-red-600/10 rounded-xl text-red-500">
//               <FaChartLine size={16} />
//             </div>
//           </div>
//           <p className="text-2xl font-black text-white">
//             ৳ {analyticsData?.sales?.totalRevenue?.toLocaleString() || 0}
//           </p>
//           <p className="text-[10px] text-slate-400 mt-1">
//             ক্রয়মূল্য: ৳ {analyticsData?.sales?.totalCost?.toLocaleString() || 0}
//           </p>
//         </div>

//         {/* Stock Value */}
//         <div className="bg-[#111115] p-5 rounded-2xl border border-white/5 shadow-xl">
//           <div className="flex justify-between items-center mb-3">
//             <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
//               Stock Value
//             </span>
//             <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-500">
//               <FaWallet size={16} />
//             </div>
//           </div>
//           <p className="text-2xl font-black text-white">
//             ৳ {analyticsData?.stock?.totalInvestment?.toLocaleString() || 0}
//           </p>
//           <p className="text-[10px] text-slate-400 mt-1">
//             সম্ভাব্য বিক্রয়: ৳{' '}
//             {analyticsData?.stock?.expectedRevenue?.toLocaleString() || 0}
//           </p>
//         </div>

//         {/* Available Stock */}
//         <div className="bg-[#111115] p-5 rounded-2xl border border-white/5 shadow-xl">
//           <div className="flex justify-between items-center mb-3">
//             <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
//               Available Stock
//             </span>
//             <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-500">
//               <FaCar size={16} />
//             </div>
//           </div>
//           <p className="text-2xl font-black text-white">
//             {analyticsData?.stock?.totalCars || 0} Units
//           </p>
//           <p className="text-[10px] text-slate-400 mt-1">বিক্রির জন্য প্রস্তুত</p>
//         </div>
//       </div>

//       {/* ১২ মাসের প্রফিট ও সেলস রেভিনিউ গ্রাফ */}
//       <MonthlySalesChart />

//       {/* সাম্প্রতিক বিক্রিত গাড়ির তালিকা */}
//       <div className="bg-[#111115] p-5 sm:p-6 rounded-2xl border border-white/5 space-y-4 shadow-2xl">
//         <div className="flex items-center justify-between border-b border-white/5 pb-3">
//           <div className="flex items-center gap-3">
//             <div className="p-2.5 bg-white/5 rounded-xl text-slate-300">
//               <FaClockRotateLeft size={16} />
//             </div>
//             <div>
//               <h3 className="text-sm font-bold uppercase tracking-wider text-white">
//                 Recent Sales Transactions
//               </h3>
//               <p className="text-[10px] text-slate-400">
//                 সর্বশেষ বিক্রিত গাড়ির বিবরণ ও প্রফিট
//               </p>
//             </div>
//           </div>

//           <Link
//             href="/admin/sold-car"
//             className="text-xs text-red-500 font-bold hover:underline flex items-center gap-1"
//           >
//             <span>View All</span>
//             <FaArrowRight size={10} />
//           </Link>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full text-left text-xs text-slate-300 min-w-[500px]">
//             <thead className="bg-white/5 uppercase text-[10px] font-bold text-slate-400">
//               <tr>
//                 <th className="p-3 rounded-l-xl">Vehicle Name</th>
//                 <th className="p-3">Buying Price</th>
//                 <th className="p-3">Selling Price</th>
//                 <th className="p-3">Profit</th>
//                 <th className="p-3 rounded-r-xl">Sale Date</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-white/5">
//               {analyticsData?.recentSales && analyticsData.recentSales.length > 0 ? (
//                 analyticsData.recentSales.map((car) => (
//                   <tr key={car.id} className="hover:bg-white/5 transition-colors">
//                     <td className="p-3 font-semibold text-white">{car.name}</td>
//                     <td className="p-3 font-mono">
//                       ৳ {car.buyingPrice?.toLocaleString() || 0}
//                     </td>
//                     <td className="p-3 font-mono">
//                       ৳ {car.sellingPrice?.toLocaleString() || 0}
//                     </td>
//                     <td className="p-3 font-mono font-bold text-emerald-400">
//                       +৳ {car.profit?.toLocaleString() || 0}
//                     </td>
//                     <td className="p-3 text-[11px] font-mono text-slate-400">
//                       {car.soldAt
//                         ? new Date(car.soldAt).toLocaleDateString('en-GB')
//                         : 'N/A'}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="p-6 text-center text-slate-500">
//                     কোনো বিক্রিত গাড়ির রেকর্ড পাওয়া যায়নি।
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   )}
// </section>
