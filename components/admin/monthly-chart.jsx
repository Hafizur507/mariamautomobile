// 'use client';
// import { useEffect, useState } from 'react';
// import { FaSpinner } from 'react-icons/fa6';
// import {
//   Area,
//   AreaChart,
//   Bar,
//   BarChart,
//   CartesianGrid,
//   Legend,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from 'recharts';

// export default function MonthlySalesChart() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('/api/monthly')
//       .then((res) => res.json())
//       .then((resData) => {
//         if (resData.success) {
//           setData(resData.monthlyAnalytics);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Fetch Error:', err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="p-10 bg-[#111] rounded-3xl border border-white/10 flex items-center justify-center text-white gap-3">
//         <FaSpinner className="animate-spin text-red-600 text-xl" />
//         <span className="text-xs uppercase tracking-widest text-gray-400">
//           Loading Sales Graph...
//         </span>
//       </div>
//     );
//   }

//   if (data.length === 0) {
//     return (
//       <div className="p-10 bg-[#111] rounded-3xl border border-white/10 text-center text-gray-400 text-xs uppercase tracking-wider">
//         No monthly sales history found to display chart.
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-8">
//       {/* ১. গাড়ি বিক্রির সংখ্যা গ্রাফ (Bar Chart) */}
//       <div className="bg-[#111] p-6 rounded-3xl border border-white/10 space-y-4">
//         <div>
//           <h2 className="text-lg font-black text-white uppercase tracking-wider">
//             Monthly Units Sold
//           </h2>
//           <p className="text-xs text-gray-400 mt-0.5">Total cars sold per month</p>
//         </div>

//         <div className="h-72 w-full">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#222" />
//               <XAxis dataKey="month" stroke="#888" fontSize={12} />
//               <YAxis stroke="#888" fontSize={12} allowDecimals={false} />
//               <Tooltip
//                 contentStyle={{
//                   backgroundColor: '#18181b',
//                   borderColor: '#333',
//                   borderRadius: '12px',
//                   color: '#fff',
//                 }}
//               />
//               <Legend />
//               <Bar
//                 dataKey="carsSold"
//                 name="Cars Sold (Units)"
//                 fill="#dc2626"
//                 radius={[6, 6, 0, 0]}
//               />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* ২. লাভ ও রেভিনিউ গ্রাফ (Area / Profit Chart) */}
//       <div className="bg-[#111] p-6 rounded-3xl border border-white/10 space-y-4">
//         <div>
//           <h2 className="text-lg font-black text-white uppercase tracking-wider">
//             Monthly Profit & Revenue (BDT)
//           </h2>
//           <p className="text-xs text-gray-400 mt-0.5">Financial growth and net profit timeline</p>
//         </div>

//         <div className="h-80 w-full">
//           <ResponsiveContainer width="100%" height="100%">
//             <AreaChart data={data}>
//               <defs>
//                 <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
//                   <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
//                 </linearGradient>
//                 <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
//                   <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
//                 </linearGradient>
//               </defs>
//               <CartesianGrid strokeDasharray="3 3" stroke="#222" />
//               <XAxis dataKey="month" stroke="#888" fontSize={12} />
//               <YAxis
//                 stroke="#888"
//                 fontSize={10}
//                 tickFormatter={(val) => `৳${(val / 100000).toFixed(1)}L`}
//               />
//               <Tooltip
//                 formatter={(value) => [`৳ ${value.toLocaleString()}`, '']}
//                 contentStyle={{
//                   backgroundColor: '#18181b',
//                   borderColor: '#333',
//                   borderRadius: '12px',
//                   color: '#fff',
//                 }}
//               />
//               <Legend />
//               <Area
//                 type="monotone"
//                 dataKey="revenue"
//                 name="Total Revenue"
//                 stroke="#3b82f6"
//                 fillOpacity={1}
//                 fill="url(#colorRevenue)"
//               />
//               <Area
//                 type="monotone"
//                 dataKey="profit"
//                 name="Net Profit"
//                 stroke="#10b981"
//                 strokeWidth={3}
//                 fillOpacity={1}
//                 fill="url(#colorProfit)"
//               />
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client';
// import { useEffect, useState } from 'react';
// import { FaCar, FaSpinner } from 'react-icons/fa6';
// import {
//   Bar,
//   BarChart,
//   CartesianGrid,
//   Legend,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from 'recharts';

// // মাউস রাখলে বিস্তারিত ডাটা পপ-আপ
// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-[#18181b] border border-white/10 p-4 rounded-2xl shadow-2xl text-xs space-y-1.5">
//         <p className="font-bold text-red-500 uppercase tracking-wider border-b border-white/10 pb-1">
//           {label}
//         </p>
//         <p className="text-white font-bold">
//           বিক্রি হয়েছে: <span className="text-red-500">{payload[0].value} টি গাড়ি</span>
//         </p>
//         <p className="text-emerald-400 font-bold">নিট লাভ: ৳ {payload[1].value.toLocaleString()}</p>
//       </div>
//     );
//   }
//   return null;
// };

// const MonthlySalesChart = () => {
//   const [data, setData] = useState([]);
//   const [year, setYear] = useState(2026);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('/api/monthly')
//       .then((res) => res.json())
//       .then((resData) => {
//         if (resData.success) {
//           setData(resData.data);
//           if (resData.year) setYear(resData.year);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Fetch Error:', err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="p-10 bg-[#111] rounded-[2.5rem] border border-white/5 flex items-center justify-center text-white gap-3">
//         <FaSpinner className="animate-spin text-red-600 text-xl" />
//         <span className="text-xs uppercase tracking-widest text-gray-400">
//           Loading 12 Months Report...
//         </span>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#111] p-6 md:p-8 rounded-[2.5rem] border border-white/5 space-y-6 shadow-2xl">
//       {/* হেডার */}
//       <div className="flex items-center justify-between border-b border-white/5 pb-4">
//         <div className="flex items-center gap-3">
//           <div className="p-3 bg-red-600/10 rounded-2xl text-red-600">
//             <FaCar className="text-xl" />
//           </div>
//           <div>
//             <h3 className="text-base font-black uppercase tracking-wider text-white">
//               Annual Sales & Profit ({year})
//             </h3>
//             <p className="text-[11px] text-gray-400">
//               জানুয়ারি থেকে ডিসেম্বর পর্যন্ত ১২ মাসের বিক্রি ও লাভের সম্পূর্ণ রিপোর্ট
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ১২ মাসের বার চার্ট */}
//       <div className="h-80 w-full pt-2">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" stroke="#222" />
//             <XAxis dataKey="month" stroke="#a1a1aa" fontSize={11} interval={0} />
//             <YAxis yAxisId="left" stroke="#dc2626" fontSize={11} allowDecimals={false} />
//             <YAxis
//               yAxisId="right"
//               orientation="right"
//               stroke="#10b981"
//               fontSize={10}
//               tickFormatter={(val) => `৳${(val / 100000).toFixed(0)}L`}
//             />
//             <Tooltip content={<CustomTooltip />} />
//             <Legend wrapperStyle={{ paddingTop: '12px', fontSize: '12px' }} />
//             <Bar
//               yAxisId="left"
//               dataKey="carsSold"
//               name="বিক্রি হওয়া গাড়ি (Units)"
//               fill="#dc2626"
//               radius={[6, 6, 0, 0]}
//             />
//             <Bar
//               yAxisId="right"
//               dataKey="profit"
//               name="নিট লাভ (BDT)"
//               fill="#10b981"
//               radius={[6, 6, 0, 0]}
//             />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default MonthlySalesChart;
'use client';
import { useEffect, useState } from 'react';
import { FaCalendarDays, FaCar, FaSpinner } from 'react-icons/fa6';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#18181b] border border-white/10 p-4 rounded-2xl shadow-2xl text-xs space-y-1.5">
        <p className="font-bold text-red-500 uppercase tracking-wider border-b border-white/10 pb-1">
          {label}
        </p>
        <p className="text-white font-bold">
          বিক্রি হয়েছে: <span className="text-red-500">{payload[0].value} টি গাড়ি</span>
        </p>
        <p className="text-emerald-400 font-bold">নিট লাভ: ৳ {payload[1].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

const MonthlySalesChart = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2026);
  const [loading, setLoading] = useState(true);

  const availableYears = [2026, 2025, 2024, 2023];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    fetch(`/api/monthly?year=${selectedYear}`)
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success) {
          setData(resData.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch Error:', err);
        setLoading(false);
      });
  }, [selectedYear]);

  return (
    <div className="bg-[#111] p-6 md:p-8 rounded-[2.5rem] border border-white/5 space-y-6 shadow-2xl">
      {/* হেডার ও ইয়ার ফিল্টার ড্রপডাউন */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-red-600/10 rounded-2xl text-red-600">
            <FaCar className="text-xl" />
          </div>
          <div>
            <h3 className="text-base font-black uppercase tracking-wider text-white">
              Annual Sales & Profit ({selectedYear})
            </h3>
            <p className="text-[11px] text-gray-400">১২ মাসের বিক্রি ও লাভের সম্পূর্ণ রিপোর্ট</p>
          </div>
        </div>

        {/* ড্রপডাউন ফিল্টার */}
        <div className="flex items-center gap-2 bg-[#1a1a1c] border border-white/10 px-4 py-2 rounded-2xl">
          <FaCalendarDays className="text-red-500 text-sm" />
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="bg-transparent text-white text-xs font-bold outline-none cursor-pointer"
          >
            {/* {availableYears.map((yr) => (
              <option key={yr} value={yr} className="bg-[#18181b] text-white">
                Year: {yr.slice(2)}
              </option>
            ))} */}
            {availableYears.map((yr) => (
              <option key={yr} value={yr} className="bg-[#18181b] text-white">
                Year: {yr}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* চার্ট কন্টেইনার */}
      {loading ? (
        <div className="h-80 flex items-center justify-center text-white gap-3">
          <FaSpinner className="animate-spin text-red-600 text-xl" />
          <span className="text-xs uppercase tracking-widest text-gray-400">
            Updating Analytics for {selectedYear}...
          </span>
        </div>
      ) : (
        <div className="h-80 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#222" />
              <XAxis dataKey="month" stroke="#a1a1aa" fontSize={11} interval={0} />
              <YAxis yAxisId="left" stroke="#dc2626" fontSize={11} allowDecimals={false} />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#10b981"
                fontSize={10}
                tickFormatter={(val) => `৳${(val / 100000).toFixed(0)}L`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ paddingTop: '12px', fontSize: '12px' }} />
              <Bar
                yAxisId="left"
                dataKey="carsSold"
                name="বিক্রি হওয়া গাড়ি (Units)"
                fill="#dc2626"
                radius={[6, 6, 0, 0]}
              />
              <Bar
                yAxisId="right"
                dataKey="profit"
                name="নিট লাভ (BDT)"
                fill="#10b981"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default MonthlySalesChart;
