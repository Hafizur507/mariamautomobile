"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaLocationDot, FaPhoneFlip, FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ফর্ম সাবমিট হ্যান্ডলার (স্যাম্পল)
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // এখানে আপনার API কল হবে
    setTimeout(() => {
      alert("ধন্যবাদ! আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে।");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section className="bg-black text-white py-24 px-6 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-red-600 font-bold uppercase tracking-[0.3em] text-sm mb-3">
                Get in Touch
              </h2>
              <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                Lets Start Your <br />
                <span className="text-gray-500">New Journey</span>
              </h3>
              <p className="text-gray-400 max-w-md leading-relaxed">
                আমাদের শোরুমে ভিজিট করুন অথবা যেকোনো জিজ্ঞাসায় সরাসরি কল করুন।
                আমরা আপনার স্বপ্নের গাড়িটি খুঁজে পেতে সাহায্য করতে প্রস্তুত।
              </p>
            </div>

            <div className="space-y-6">
              <ContactBox
                icon={<FaPhoneFlip />}
                title="Call Center"
                detail="+880 1944 755 111"
                subDetail="সকাল ১০টা - রাত ৯টা (প্রতিদিন)"
                link="tel:+8801944755111"
              />
              <ContactBox
                icon={<FaWhatsapp className="text-[#25D366]" />}
                title="WhatsApp"
                detail="+880 1944 755 111"
                subDetail="২৪/৭ মেসেজ সাপোর্ট"
                link="https://wa.me/8801944755111"
              />
              <ContactBox
                icon={<FaLocationDot />}
                title="Showroom Location"
                detail="Terikhadiya, Rajpara, Rajshahi"
                subDetail="Mariam Automobile, Road #01"
                link="https://maps.google.com"
              />
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0f0f10] border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <FormLabel label="Full Name" />
                  <input
                    required
                    type="text"
                    placeholder="আপনার নাম"
                    className="form-input"
                  />
                </div>
                <div className="space-y-2">
                  <FormLabel label="Phone Number" />
                  <input
                    required
                    type="tel"
                    placeholder="017XXXXXXXX"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <FormLabel label="Interested Model" />
                <select className="form-input text-gray-400">
                  <option>Select Category</option>
                  <option>SUV (Luxury)</option>
                  <option>Sedan (Premium)</option>
                  <option>Hybrid / Electric</option>
                </select>
              </div>

              <div className="space-y-2">
                <FormLabel label="Your Message" />
                <textarea
                  rows="4"
                  placeholder="আপনার জিজ্ঞাসা এখানে লিখুন..."
                  className="form-input resize-none"
                ></textarea>
              </div>

              <button
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white font-black py-4 rounded-xl uppercase tracking-[0.2em] text-xs hover:bg-red-700 transition-all active:scale-95 disabled:bg-gray-700 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>

        {/* New Addition: Google Maps Integration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[3rem] overflow-hidden h-[400px] border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.3644917462053!2d88.5846152!3d24.3773129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDIyJzM4LjMiTiA4OMKwMzUnMDQuNiJF!5e0!3m2!1sen!2sbd!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>

      <style jsx>{`
        .form-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
          padding: 1rem;
          outline: none;
          font-size: 0.875rem;
          transition: all 0.3s;
        }
        .form-input:focus {
          border-color: #dc2626;
          background: rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </section>
  );
};

// Internal Helper Components
const FormLabel = ({ label }) => (
  <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest ml-1">
    {label}
  </label>
);

const ContactBox = ({ icon, title, detail, subDetail, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-5 group cursor-pointer"
  >
    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-red-600 text-xl group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-red-600/20">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase font-black text-gray-500 tracking-widest mb-0.5">
        {title}
      </p>
      <h4 className="text-lg font-bold text-white tracking-tight">{detail}</h4>
      <p className="text-xs text-gray-600 font-medium">{subDetail}</p>
    </div>
  </a>
);

export default Contact;
