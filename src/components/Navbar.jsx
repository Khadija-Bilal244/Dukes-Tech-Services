// Navbar.jsx - Logo on Left (Desktop) / Logo Centered (Mobile)
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-actual.png";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  {label:"DEXO",href:"/dexo"},
  { label: "SECTORS", href: "/sectors" },
  { label: "TEAM", href: "/team" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/100 backdrop-blur-xl border-b border-[#0E2A43]/10 shadow-xl"
          : "bg-white border-b border-[#0E2A43]/10"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-9 md:px-10 py-2 sm:py-2.5">
        {/* Logo - Left on Desktop, Hidden on Mobile (we'll show centered logo below) */}
        <div className="hidden md:flex items-center flex-shrink-0">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center transition-all duration-300 ease-out hover:scale-110 hover:brightness-120 hover:contrast-125 hover:drop-shadow-[0_0_18px_rgba(28,167,184,0.65)] active:scale-95"
          >
            <img
              src={logo}
              alt="Dukes Tech Services"
              className="w-28 h-20 sm:w-36 md:w-38 lg:w-40 object-contain"
            />
          </Link>
        </div>

        {/* Mobile Centered Logo - Visible only on mobile */}
        <div className="flex md:hidden items-center justify-center flex-1">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center transition-all duration-300 ease-out hover:scale-110 hover:brightness-120 hover:contrast-125 hover:drop-shadow-[0_0_18px_rgba(28,167,184,0.65)] active:scale-95"
          >
            <img
              src={logo}
              alt="Dukes Tech Services"
              className="w-28 h-20 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu - Centered in the remaining space */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-1.5 lg:gap-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-lg px-4 lg:px-6 py-2 lg:py-2.5 text-base lg:text-lg font-bold transition-all hover:bg-[#0E2A43]/5 hover:text-[#1CA7B8] font-sans hover:scale-105 ${
                  isActive 
                    ? "text-[#1CA7B8] bg-[#0E2A43]/5" 
                    : "text-[#0E2A43]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Get in Touch Button - Fixed on the RIGHT (Desktop only) */}
        <div className="hidden md:flex items-center flex-shrink-0">
          <Link
            to="/contact"
            onClick={closeMenu}
            className="rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-6 lg:px-7 py-2 lg:py-2.5 text-sm lg:text-base font-semibold text-white shadow-lg shadow-[#1CA7B8]/25 transition-all hover:scale-105 hover:shadow-[#1CA7B8]/40 font-sans"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-[#0E2A43] hover:bg-[#0E2A43]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1CA7B8] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        className={`overflow-hidden border-t border-[#0E2A43]/10 bg-white transition-all duration-300 md:hidden ${
          open ? "max-h-[500px] py-3 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="px-5 space-y-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 text-base font-semibold transition-colors font-sans ${
                  isActive
                    ? "text-[#1CA7B8] bg-[#0E2A43]/5"
                    : "text-[#0E2A43]/80 hover:bg-[#0E2A43]/5 hover:text-[#1CA7B8]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-3 block rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-6 py-3 text-center text-base font-semibold text-white font-sans"
          >
            Get in Touch
          </Link>
        </div>
      </nav>
    </header>
  );
}