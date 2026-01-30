"use client";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPhoneVolume,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0b] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 1. Brand Section */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-black uppercase leading-none">
              <span className="tracking-[0.2em] block">MARIAM</span>
              <span className="text-red-600">AUTOMOBILE</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your trusted partner for premium Japanese reconditioned and new
              cars in Rajshahi, Bangladesh. Excellence in every drive.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<FaFacebookF />} href="https://facebook.com" />
              <SocialIcon icon={<FaInstagram />} href="https://instagram.com" />
              <SocialIcon
                icon={<FaYoutube />}
                href="https://youtube.com/@mdrominchowdhury"
              />
              <SocialIcon
                icon={<FaWhatsapp />}
                href="https://wa.me/8801944755111"
              />
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 border-l-2 border-red-600 pl-3">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4 text-gray-500 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-red-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#inventory"
                  className="hover:text-red-600 transition-colors"
                >
                  All Inventory
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-red-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-red-600 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Categories */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 border-l-2 border-red-600 pl-3">
              Top Categories
            </h4>
            <ul className="flex flex-col gap-4 text-gray-500 text-sm font-medium">
              {/* Query Params অনুযায়ী লিঙ্ক আপডেট করা হয়েছে */}
              <li>
                <Link
                  href="/?category=SUV"
                  className="hover:text-red-600 transition-colors"
                >
                  Luxury SUV
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=Sedan"
                  className="hover:text-red-600 transition-colors"
                >
                  Premium Sedan
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=Hatchback"
                  className="hover:text-red-600 transition-colors"
                >
                  Hatchback
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=Small Car"
                  className="hover:text-red-600 transition-colors"
                >
                  Small Cars
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 border-l-2 border-red-600 pl-3">
              Office Info
            </h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4 group">
                <FaLocationDot className="text-red-600 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-gray-500 text-sm">
                  Terikhadiya, Rajpara, Rajshahi
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <FaPhoneVolume className="text-red-600 group-hover:scale-110 transition-transform" />
                <span className="text-gray-500 text-sm">+880 1944 755 111</span>
              </li>
              <li className="flex items-center gap-4 group">
                <FaEnvelope className="text-red-600 group-hover:scale-110 transition-transform" />
                <span className="text-gray-500 text-sm">
                  info@mariamauto.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] uppercase font-bold tracking-[0.2em]">
            © {currentYear} MARIAM AUTO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest text-gray-600">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Social Icon Helper Component - Improved for Production
const SocialIcon = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300 border border-white/5"
  >
    {icon}
  </a>
);

export default Footer;
