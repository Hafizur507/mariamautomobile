const Feature = ({ icon, title, desc }) => (
  <div className="flex gap-4 items-start">
    <div className="text-red-600 text-xl mt-1">{icon}</div>
    <div>
      <h5 className="font-bold uppercase text-sm tracking-tight">{title}</h5>
      <p className="text-[10px] text-gray-500 uppercase font-bold">{desc}</p>
    </div>
  </div>
);

const Card = ({ icon, title, desc }) => (
  <div className="bg-[#111] p-10 rounded-[2.5rem] border border-white/5 hover:border-red-600/50 transition-all group">
    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl text-red-600 mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h5 className="text-xl font-bold uppercase tracking-tight mb-4">{title}</h5>
    <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
  </div>
);
export { Card, Feature };
