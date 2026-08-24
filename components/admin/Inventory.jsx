import { deleteCar } from '@/app/(home)/action/actions';
import { FaPenToSquare, FaTrash } from 'react-icons/fa6';
export default function Inventory({ cars, handleSoldout, handleEditCar }) {
  return (
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
  );
}
// <section className="space-y-4">
//   <div className="flex justify-between items-center px-1">
//     <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//       Total Vehicles: <span className="text-red-500">{cars?.length || 0}</span>
//     </p>
//   </div>

//   {/* Table Container with Horizontal Scroll */}
//   <div className="bg-[#111115] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
//     <div className="overflow-x-auto">
//       <table className="w-full text-left border-collapse min-w-[650px]">
//         <thead>
//           <tr className="bg-white/[0.02] border-b border-white/5 text-[11px] uppercase font-bold tracking-wider text-slate-400">
//             <th className="px-4 py-3 sm:px-6 sm:py-4">#</th>
//             <th className="px-4 py-3 sm:px-6 sm:py-4">Listed Date</th>
//             <th className="px-4 py-3 sm:px-6 sm:py-4">Model Name</th>
//             <th className="px-4 py-3 sm:px-6 sm:py-4">Package</th>
//             <th className="px-4 py-3 sm:px-6 sm:py-4 text-center">Year</th>
//             <th className="px-4 py-3 sm:px-6 sm:py-4 text-center">Price</th>
//             <th className="px-4 py-3 sm:px-6 sm:py-4 text-center">Color</th>
//             <th className="px-4 py-3 sm:px-6 sm:py-4 text-right">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
//           {cars?.map((car, index) => (
//             <tr key={car._id} className="hover:bg-white/[0.02] transition-colors group">
//               <td className="px-4 py-3 sm:px-6 sm:py-4 font-mono text-slate-500 font-medium">
//                 {String(index + 1).padStart(2, '0')}
//               </td>
//               <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
//                 <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
//                   {car.createdAt
//                     ? new Date(car.createdAt).toLocaleDateString('en-GB', {
//                         day: '2-digit',
//                         month: 'short',
//                         year: 'numeric',
//                       })
//                     : 'N/A'}
//                 </span>
//               </td>
//               <td className="px-4 py-3 sm:px-6 sm:py-4 font-semibold text-white whitespace-nowrap">
//                 {car.name}
//               </td>
//               <td className="px-4 py-3 sm:px-6 sm:py-4 text-slate-300 whitespace-nowrap">
//                 {car.package || 'Standard'}
//               </td>
//               <td className="px-4 py-3 sm:px-6 sm:py-4 text-center font-mono text-slate-400">
//                 {car.modelYear}
//               </td>
//               <td className="px-4 py-3 sm:px-6 sm:py-4 text-center font-mono text-red-400 font-bold whitespace-nowrap">
//                 {car.price}
//               </td>
//               <td className="px-4 py-3 sm:px-6 sm:py-4 text-center font-mono text-pink-400/90 font-medium whitespace-nowrap">
//                 {car.color}
//               </td>
//               <td className="px-4 py-3 sm:px-6 sm:py-4 text-right whitespace-nowrap">
//                 <div className="flex items-center justify-end gap-1.5 sm:gap-2">
//                   {/* Edit Button */}
//                   <button
//                     onClick={() => !car.isSold && handleEditCar(car)}
//                     disabled={car.isSold}
//                     title="Edit Car"
//                     className={`p-1.5 sm:p-2 rounded-lg border transition-all ${
//                       car.isSold
//                         ? 'opacity-20 border-transparent text-slate-600 cursor-not-allowed'
//                         : 'border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
//                     }`}
//                   >
//                     <FaPenToSquare size={13} />
//                   </button>

//                   {/* Delete Button */}
//                   <button
//                     onClick={() => !car.isSold && deleteCar(car._id)}
//                     disabled={car.isSold}
//                     title="Delete Car"
//                     className={`p-1.5 sm:p-2 rounded-lg border transition-all ${
//                       car.isSold
//                         ? 'opacity-20 border-transparent text-slate-600 cursor-not-allowed'
//                         : 'border-white/5 text-slate-400 hover:text-red-400 hover:bg-red-500/10'
//                     }`}
//                   >
//                     <FaTrash size={13} />
//                   </button>

//                   {/* Sold Button */}
//                   <button
//                     onClick={() => handleSoldout(car)}
//                     disabled={car.isSold}
//                     className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all border ${
//                       car.isSold
//                         ? 'bg-slate-800/50 border-slate-700/50 text-slate-500 cursor-not-allowed'
//                         : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white'
//                     }`}
//                   >
//                     {car.isSold ? 'Sold Out' : 'Available'}
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>
// </section>
