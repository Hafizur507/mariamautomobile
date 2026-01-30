"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiChevronDown, HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Scroll logic with cleanup
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  const menuItems = [
    { name: "About", href: "/about" },
    {
      name: "Brands",
      key: "brand",
      dropdown: ["Toyota", "Honda", "Nissan", "Mitsubishi", "Mazda"],
    },
    {
      name: "Category",
      key: "category",
      dropdown: ["SUV", "Sedan", "Hatchback", "Hybrid", "Crossover"],
    },
    { name: "Contact", href: "/contact" }, // Corrected case
  ];

  const phoneNumber = "01944755111"; // common variable for consistency

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 px-6 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md py-3 border-b border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* <Image
            src="/hafiz.png"
            alt="Logo"
            width={12}
            height={12}
            className="w-12 h-12 rounded-full border border-white/20"
          /> */}
          <div className="hidden sm:block">
            <h1 className="text-white font-bold leading-tight">MARIAM</h1>
            <p className="text-red-500 text-[10px] tracking-widest uppercase">
              Automobile
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group/menu">
              {item.dropdown ? (
                <button
                  type="button"
                  className="flex items-center gap-1 text-white/80 hover:text-white font-medium uppercase tracking-widest text-[11px] transition-colors"
                >
                  {item.name}
                  <HiChevronDown className="group-hover/menu:rotate-180 transition-transform duration-300" />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="text-white/80 hover:text-white font-medium uppercase tracking-widest text-[11px] transition-colors"
                >
                  {item.name}
                </Link>
              )}

              {/* Desktop Dropdown */}
              {item.dropdown && (
                <div className="absolute top-full left-0 pt-4 invisible group-hover/menu:visible opacity-0 group-hover/menu:opacity-100 transition-all duration-300 min-w-[200px]">
                  <div className="bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub}
                        href={`/?${item.key}=${sub}#inventory`}
                        className="block px-6 py-3 text-xs text-gray-400 hover:bg-red-600 hover:text-white transition-all uppercase font-bold tracking-wider"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Call Now Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-transform active:scale-95"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-red-500"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <HiMenuAlt3 size={32} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-lg z-[110] lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <span className="text-white font-bold">MENU</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-red-500"
          >
            <HiX size={36} />
          </button>
        </div>

        <div className="mt-6 px-6 flex flex-col gap-4 overflow-y-auto max-h-[80vh]">
          {menuItems.map((item) => (
            <div key={item.name} className="border-b border-white/5 pb-4">
              {item.dropdown ? (
                <>
                  <div
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name
                      )
                    }
                    className="flex justify-between items-center text-xl font-bold text-white uppercase"
                  >
                    {item.name}
                    <HiChevronDown
                      className={`transition-transform duration-300 ${
                        activeDropdown === item.name
                          ? "rotate-180 text-red-500"
                          : ""
                      }`}
                    />
                  </div>

                  {activeDropdown === item.name && (
                    <div className="mt-4 pl-4 flex flex-col gap-3 border-l-2 border-red-600 transition-all">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub}
                          href={`/?${item.key}=${sub}#inventory`}
                          className="text-gray-400 text-base uppercase font-semibold hover:text-red-500"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-xl font-bold text-white uppercase block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          <a
            href={`tel:${phoneNumber}`}
            className="mt-4 bg-red-600 text-white py-4 rounded-xl text-center font-bold uppercase tracking-widest active:bg-red-700"
          >
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
