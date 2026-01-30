// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import {
//   FaArrowRight,
//   FaAward,
//   FaHandshake,
//   FaShieldHalved,
//   FaUsers,
// } from "react-icons/fa6";
// import { Card, Feature } from "./AboutCards";

// const AboutPage = () => {
//   const stats = [
//     { label: "Cars Sold", value: "113+", suffix: "Units" },
//     { label: "Happy Clients", value: "97+", suffix: "Reviews" },
//     { label: "Years Experience", value: "5+", suffix: "Reliability" },
//     { label: "Team Members", value: "7+", suffix: "Experts" },
//   ];

//   return (
//     <main className="bg-[#0a0a0b] text-white overflow-hidden">
//       {/* 1. Hero Section */}
//       <section className="relative py-24 px-6 border-b border-white/5 text-center">
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 blur-[120px] rounded-full -mr-64 -mt-64"></div>
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-5xl md:text-7xl font-black uppercase tracking-tighter"
//         >
//           Drive Your Dream <br />
//           <span className="text-gray-500">With Mariam Auto</span>
//         </motion.h1>
//       </section>

//       {/* 2. Brand Story */}
//       <section className="py-20 px-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 p-3 bg-white/5">
//               <Image
//                 width={500}
//                 height={800}
//                 src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb"
//                 alt="Showroom"
//                 className="w-full h-full object-cover rounded-[2.5rem]"
//               />
//             </div>
//           </motion.div>

//           <div className="space-y-8">
//             <h3 className="text-3xl font-bold uppercase tracking-tight">
//               Leading the Way in <br />{" "}
//               <span className="text-red-600">Premium Automobile</span> Selection
//             </h3>
//             <p className="text-gray-400">
//               মারিয়াম অটো গত ১০ বছর ধরে বাংলাদেশে আস্থার নাম।
//             </p>
//             <div className="grid grid-cols-2 gap-8 pt-6">
//               <Feature
//                 icon={<FaAward />}
//                 title="Quality Check"
//                 desc="100+ Points Inspection"
//               />
//               <Feature
//                 icon={<FaHandshake />}
//                 title="Trust"
//                 desc="Clear Documentation"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. Stats Section */}
//       <section className="py-24 bg-black relative">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -10 }}
//               className="bg-[#111]/50 border border-white/5 p-8 rounded-[2rem] text-center"
//             >
//               <h4 className="text-5xl font-black text-white mb-2">
//                 {stat.value}
//               </h4>
//               <p className="text-[11px] uppercase font-black text-red-600 tracking-widest">
//                 {stat.label}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* 4. Why Choose Us */}
//       <section className="py-24 px-6 max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h4 className="text-4xl font-black uppercase tracking-tighter">
//             The Mariam Auto Advantage
//           </h4>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <Card
//             icon={<FaShieldHalved />}
//             title="Verified Auction Sheet"
//             desc="আমরা প্রতিটি গাড়ির সাথে ১০০% অরিজিনাল অকশন শিট প্রদান করি।"
//           />
//           <Card
//             icon={<FaUsers />}
//             title="Expert Support"
//             desc="গাড়ি কেনার পরও ২ বছরের ফ্রি সার্ভিস ওয়ারেন্টি উপভোগ করুন।"
//           />
//           <Card
//             icon={<FaArrowRight />}
//             title="Easy Exchange"
//             desc="পুরনো গাড়ি এক্সচেঞ্জ করে সহজেই নতুন মডেলের গাড়ি নিন।"
//           />
//         </div>
//       </section>
//     </main>
//   );
// };

// export default AboutPage;
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaArrowRight,
  FaAward,
  FaHandshake,
  FaShieldHalved,
  FaUsers,
} from "react-icons/fa6";
import { Card, Feature } from "./AboutCards";

const AboutPage = () => {
  const stats = [
    { label: "Cars Sold", value: "113+" },
    { label: "Happy Clients", value: "97%" },
    { label: "Years Experience", value: "5+" },
    { label: "Team Members", value: "7+" },
  ];

  return (
    <main className="bg-[#0a0a0b] text-white overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 px-6 border-b border-white/5 text-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 blur-[120px] rounded-full -mr-64 -mt-64"></div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter"
        >
          Drive Your Dream <br />
          <span className="text-gray-500">With Mariam Auto</span>
        </motion.h1>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          Premium cars, transparent deals, and trusted service — all under one
          roof.
        </p>
      </section>

      {/* ================= BRAND STORY ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 p-3 bg-white/5">
              <Image
                width={600}
                height={600}
                src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb"
                alt="Mariam Auto Showroom"
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
            </div>
          </motion.div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold uppercase tracking-tight">
              Leading the Way in <br />
              <span className="text-red-600">Premium Automobile</span> Selection
            </h3>

            <p className="text-gray-400 leading-relaxed">
              মারিয়াম অটো গত এক দশকেরও বেশি সময় ধরে বাংলাদেশে প্রিমিয়াম ও
              রিকন্ডিশন্ড গাড়ি সরবরাহে আস্থার প্রতীক। আমরা বিশ্বাস করি একটি
              গাড়ি শুধু বাহন নয় — এটি একটি স্বপ্ন, একটি দায়িত্ব। তাই প্রতিটি
              গাড়ি বিক্রয়ের আগে আমরা কঠোরভাবে মান যাচাই করি।
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <Feature
                icon={<FaAward />}
                title="Quality Assurance"
                desc="100+ point inspection for top performance"
              />
              <Feature
                icon={<FaHandshake />}
                title="Trusted Deals"
                desc="Transparent pricing & clear documentation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111]/60 border border-white/5 p-8 rounded-[2rem] text-center"
            >
              <h4 className="text-5xl font-black mb-2">{stat.value}</h4>
              <p className="text-[11px] uppercase font-black text-red-600 tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-4xl font-black uppercase tracking-tighter">
            The Mariam Auto Advantage
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            icon={<FaShieldHalved />}
            title="Verified Auction Sheet"
            desc="প্রতিটি গাড়ির সাথে ১০০% অরিজিনাল ও ভেরিফাইড অকশন শিট প্রদান করা হয়।"
          />
          <Card
            icon={<FaUsers />}
            title="Expert Support"
            desc="গাড়ি কেনার পরেও অভিজ্ঞ টিম থেকে নির্ভরযোগ্য সাপোর্ট পান।"
          />
          <Card
            icon={<FaArrowRight />}
            title="Easy Exchange"
            desc="আপনার পুরনো গাড়ি এক্সচেঞ্জ করে সহজেই নিন নতুন মডেলের গাড়ি।"
          />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-black">
        <h4 className="text-4xl font-black uppercase mb-6">
          Your Trusted Partner in Every Drive
        </h4>
        <p className="text-gray-400 mb-10">
          আজই আমাদের ইনভেন্টরি ঘুরে দেখুন এবং আপনার স্বপ্নের গাড়িটি খুঁজে নিন।
        </p>

        <a
          href="/#inventory"
          className="inline-block bg-red-600 px-12 py-4 rounded-full font-black uppercase tracking-widest hover:bg-red-700 transition"
        >
          Explore Inventory
        </a>
      </section>
    </main>
  );
};

export default AboutPage;
