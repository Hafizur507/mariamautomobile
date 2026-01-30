import CarModel from "@/models/Car-model";
import dbConnect from "@/service/mongo";
import Link from "next/link";
import { FaArrowLeft, FaCar } from "react-icons/fa6";
import Logout from "./Logout";
export default async function SoldCarsPage() {
  await dbConnect();

  const soldCars = await CarModel.find({ isSold: true }).sort({ soldAt: -1 });

  const totalProfit = soldCars.reduce((acc, car) => {
    return acc + ((car.sellingPrice || 0) - (car.buyingPrice || 0));
  }, 0);

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <Link
              href="/admin"
              className="text-gray-500 hover:text-red-600 flex items-center gap-2 text-[10px] uppercase font-black tracking-[0.2em] mb-4 transition-all"
            >
              <FaArrowLeft /> Back to Dashboard
            </Link>
            <h1 className="text-5xl font-black uppercase tracking-tighter">
              Sales <span className="text-red-600">Ledger</span>
            </h1>
          </div>
        </div>

        {/* Sales Table */}
        <div className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/[0.02] text-[9px] uppercase font-black tracking-[0.2em] text-gray-500">
                  <th className="px-6 py-7">Vehicle</th>
                  <th className="px-6 py-7">Sold Date</th>
                  <th className="px-6 py-7">Customer Info</th>
                  <th className="px-6 py-7">Mobile</th>
                  <th className="px-6 py-7 text-center">Buying</th>
                  <th className="px-6 py-7 text-center">Selling</th>
                  <th className="px-6 py-7 text-right">Net Profit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {soldCars.map((car) => {
                  const profit =
                    (car.sellingPrice || 0) - (car.buyingPrice || 0);
                  return (
                    <tr
                      key={car._id}
                      className="hover:bg-white/[0.01] transition-all group"
                    >
                      {/* Vehicle */}
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-red-600/10 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                            <FaCar size={14} />
                          </div>
                          <div>
                            <p className="font-black text-xl uppercase tracking-tight">
                              {car.name}
                            </p>
                            <p className="text-xs text-gray-600 font-bold uppercase">
                              {car.modelYear}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Date */}
                      {/* <td className="px-6 py-6 text-xl font-mono text-gray-400 font-bold">
                        {car.soldAt
                          ? new Date(car.soldAt).toLocaleDateString("en-GB")
                          : "N/A"}
                      </td> */}
                      <td className="px-6 py-6 font-mono">
                        {car.soldAt ? (
                          <div className="flex flex-col gap-1">
                            {/* Sold Status Tag */}
                            <span className="inline-flex items-center w-fit px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-green-500/10 text-green-500 border border-green-500/20">
                              Sold
                            </span>
                            {/* Date Text */}
                            <span className="text-xl font-bold text-gray-200">
                              {new Date(car.soldAt).toLocaleDateString(
                                "en-GB",
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                },
                              )}
                            </span>
                          </div>
                        ) : (
                          /* Not Sold / N/A Style */
                          <span className="text-sm font-bold text-gray-500 uppercase tracking-widest bg-gray-800/50 px-3 py-1 rounded-lg border border-white/5">
                            N/A
                          </span>
                        )}
                      </td>
                      {/* Customer */}
                      <td className="px-6 py-6">
                        <p className="text-sm font-black uppercase text-gray-300">
                          {car.customerName}
                        </p>
                      </td>
                      {/* <td className="px-6 py-6">
                        <p className="text-2xl font-mono text-gray-600">
                          {car.customerMobile}
                        </p>
                        <Image
                          src={car.customerImage}
                          alt={car.customerName}
                          width={14}
                          height={14}
                        />
                      </td> */}

                      {/* Buying Price */}
                      <td className="px-6 py-6 text-center text-xl font-mono text-red-400 font-bold">
                        {car.buyingPrice?.toLocaleString()}
                      </td>

                      {/* Selling Price */}
                      <td className="px-6 py-6 text-center text-xl font-mono text-green-400 font-bold">
                        {car.sellingPrice?.toLocaleString()}
                      </td>

                      {/* Profit */}
                      <td className="px-6 py-6 text-right">
                        <span
                          className={`text-xl font-black font-mono ${
                            profit >= 0 ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {profit.toLocaleString()}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* TOTAL SUMMARY */}
          <div className="bg-white/[0.02] border-t border-white/5 p-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-10">
              <div>
                <p className="text-[9px] text-gray-500 font-black uppercase tracking-[0.2em]">
                  Total Units
                </p>
                <p className="text-xl font-black">{soldCars.length}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-1">
                Cumulative Profit
              </p>
              <div className="flex items-baseline gap-2 justify-end">
                <span
                  className={`text-4xl font-black font-mono tracking-tighter ${
                    totalProfit >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {totalProfit.toLocaleString()}
                </span>
                <span className="text-xs font-black text-gray-600 uppercase">
                  BDT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center text-center text-red-500 rounded-md pt-10">
        {" "}
        <Logout />
      </div>
    </div>
  );
}
// <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
//   <div>
//     <Link
//       href="/admin"
//       className="text-gray-500 hover:text-white flex items-center gap-2 text-xs uppercase font-bold tracking-widest mb-4 transition-colors"
//     >
//       <FaArrowLeft /> Back to Dashboard
//     </Link>
//     <h1 className="text-4xl font-black uppercase tracking-tighter">
//       Sales <span className="text-red-600">History</span>
//     </h1>
//   </div>

//   <div className="bg-[#111] border border-white/5 p-6 rounded-3xl flex items-center gap-6">
//     <div className="text-center">
//       <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
//         Total Sold
//       </p>
//       <p className="text-2xl font-black">{soldCars.length}</p>
//     </div>
//   </div>
// </div>;
