// 'use client';

// import { useState } from 'react';

// const EMICalculator = ({ carPrice = 3000000 }) => {
//   // স্টেট ম্যানেজমেন্ট (ডিফল্ট মান)
//   const [downPayment, setDownPayment] = useState(carPrice * 0.3); // ৩০% ডাউনপেমেন্ট
//   const [interestRate, setInterestRate] = useState(9); // ৯% ব্যাংক ইন্টারেস্ট
//   const [tenureYears, setTenureYears] = useState(5); // ৫ বছর মোদ

//   // লোন অ্যামাউন্ট হিসাব
//   const loanAmount = carPrice - downPayment;

//   // EMI ক্যালকুলেশন লজিক
//   const calculateEMI = () => {
//     if (loanAmount <= 0) return 0;
//     const monthlyRate = interestRate / 12 / 100;
//     const totalMonths = tenureYears * 12;

//     const emi =
//       (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
//       (Math.pow(1 + monthlyRate, totalMonths) - 1);

//     return Math.round(emi);
//   };

//   const monthlyEMI = calculateEMI();
//   const totalPayment = monthlyEMI * tenureYears * 12;
//   const totalInterest = totalPayment - loanAmount;

//   return (
//     <div className="bg-zinc-900 text-white p-6 rounded-2xl max-w-lg mx-auto border border-zinc-800 shadow-xl">
//       <h2 className="text-xl font-bold mb-4 text-red-500 uppercase tracking-wider">
//         🚗 EMI & Loan Calculator
//       </h2>

//       {/* গাড়ির মূল দাম */}
//       <div className="mb-4 flex justify-between items-center bg-zinc-800 p-3 rounded-lg">
//         <span className="text-gray-400 text-sm">Car Selling Price:</span>
//         <span className="font-bold text-lg">৳ {carPrice.toLocaleString()} BDT</span>
//       </div>

//       {/* ডাউন পেমেন্ট ইনপুট */}
//       <div className="mb-4">
//         <div className="flex justify-between text-sm mb-1">
//           <label className="text-gray-300">Down Payment (ডাউন পেমেন্ট):</label>
//           <span className="text-red-400 font-semibold">
//             ৳ {Number(downPayment).toLocaleString()}
//           </span>
//         </div>
//         <input
//           type="range"
//           min={0}
//           max={carPrice}
//           step={50000}
//           value={downPayment}
//           onChange={(e) => setDownPayment(Number(e.target.value))}
//           className="w-full accent-red-600 cursor-pointer"
//         />
//       </div>

//       {/* সুদের হার ইনপুট */}
//       <div className="mb-4">
//         <div className="flex justify-between text-sm mb-1">
//           <label className="text-gray-300">Bank Interest Rate (%):</label>
//           <span className="text-red-400 font-semibold">{interestRate}%</span>
//         </div>
//         <input
//           type="range"
//           min={5}
//           max={18}
//           step={0.5}
//           value={interestRate}
//           onChange={(e) => setInterestRate(Number(e.target.value))}
//           className="w-full accent-red-600 cursor-pointer"
//         />
//       </div>

//       {/* লোনের মেয়াদ (বছর) */}
//       <div className="mb-6">
//         <label className="text-gray-300 text-sm block mb-2">Loan Tenure (মেয়াদ):</label>
//         <div className="grid grid-cols-5 gap-2">
//           {[1, 2, 3, 4, 5].map((year) => (
//             <button
//               key={year}
//               onClick={() => setTenureYears(year)}
//               className={`py-2 text-sm font-bold rounded-md transition-all ${
//                 tenureYears === year
//                   ? 'bg-red-600 text-white'
//                   : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'
//               }`}
//             >
//               {year} Year{year > 1 ? 's' : ''}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* ফলাফল রেজাল্ট কার্ড */}
//       <div className="bg-gradient-to-r from-red-950/40 to-zinc-800 p-4 rounded-xl border border-red-600/30">
//         <p className="text-xs text-gray-400 uppercase font-semibold">Estimated Monthly EMI</p>
//         <p className="text-3xl font-black text-red-500 my-1">
//           ৳ {monthlyEMI.toLocaleString()}{' '}
//           <span className="text-xs text-gray-300 font-normal">/ month</span>
//         </p>

//         <div className="mt-3 pt-3 border-t border-zinc-700/60 grid grid-cols-2 gap-2 text-xs">
//           <div>
//             <span className="text-gray-400 block">Total Loan Amount:</span>
//             <span className="font-semibold text-gray-200">
//               ৳ {loanAmount > 0 ? loanAmount.toLocaleString() : 0}
//             </span>
//           </div>
//           <div>
//             <span className="text-gray-400 block">Total Interest Payable:</span>
//             <span className="font-semibold text-gray-200">
//               ৳ {totalInterest > 0 ? totalInterest.toLocaleString() : 0}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EMICalculator;
'use client';
import { useState } from 'react';
import { FaCalculator } from 'react-icons/fa6';

const EMICalculator = ({ carPrice }) => {
  // স্ট্রিং থেকে শুধু সংখ্যা বের করা
  const numericPrice = Number(carPrice?.toString().replace(/[^0-9]/g, '')) || 0;

  // স্টেট
  const [downPayment, setDownPayment] = useState(Math.round(numericPrice * 0.3));
  const [interestRate, setInterestRate] = useState(9);
  const [tenureYears, setTenureYears] = useState(5);

  const loanAmount = Math.max(0, numericPrice - downPayment);

  // EMI ক্যালকুলেশন
  const calculateEMI = () => {
    if (loanAmount <= 0) return 0;
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = tenureYears * 12;
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    return Math.round(emi);
  };

  const monthlyEMI = calculateEMI();

  return (
    <div className="bg-[#111] p-8 rounded-[3rem] border border-white/5 shadow-2xl space-y-6">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <FaCalculator className="text-red-600 text-xl" />
        <h3 className="text-lg font-black uppercase tracking-wider text-white">
          Bank Finance & EMI Calculator
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ইনপুট কন্ট্রোল */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-bold mb-2">
              <span className="text-gray-400">Down Payment:</span>
              <span className="text-red-500">৳ {downPayment.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={0}
              max={numericPrice}
              step={50000}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full accent-red-600 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold mb-2">
              <span className="text-gray-400">Interest Rate:</span>
              <span className="text-red-500">{interestRate}%</span>
            </div>
            <input
              type="range"
              min={5}
              max={18}
              step={0.5}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-red-600 cursor-pointer"
            />
          </div>

          <div>
            <span className="text-xs font-bold text-gray-400 block mb-2">Loan Duration:</span>
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => setTenureYears(yr)}
                  className={`py-2 text-xs font-black rounded-xl transition-all ${
                    tenureYears === yr
                      ? 'bg-red-600 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {yr}Y
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* রেজাল্ট কার্ড */}
        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex flex-col justify-between">
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">
              Estimated Monthly Installment
            </p>
            <p className="text-4xl font-black text-red-500 tracking-tight">
              ৳ {monthlyEMI.toLocaleString()}
              <span className="text-xs text-gray-400 font-normal"> /mo</span>
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
            <div className="flex justify-between text-gray-400">
              <span>Loan Amount:</span>
              <span className="text-white font-bold">৳ {loanAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Tenure:</span>
              <span className="text-white font-bold">
                {tenureYears} Years ({tenureYears * 12} Months)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
