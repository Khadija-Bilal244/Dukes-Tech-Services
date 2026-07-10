// Navbar.jsx - With React Router
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-actual.png";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Sectors", href: "/sectors" },
  { label: "Contact", href: "/contact" },
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
          ? "bg-[#0E2A43]/95 backdrop-blur-xl border-b border-white/10 shadow-xl"
          : "bg-[#0E2A43] border-b border-white/10"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 py-2.5 sm:py-3">
        {/* Logo - Separate flex container */}
        <div className="flex items-center flex-shrink-0">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center transition-all duration-300 ease-out hover:scale-110 hover:brightness-100 hover:contrast-125 hover:drop-shadow-[0_0_18px_rgba(28,167,184,0.65)] active:scale-95"
          >
            <img
              src={logo}
              alt="Dukes Tech Services"
              className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu - Separate flex container, centered */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-1 lg:gap-1.5 text-lg font-sans font-semibold">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-lg px-3 lg:px-4 py-2 text-md lg:text-base font-bold transition-all hover:bg-white/10 hover:text-white font-sans hover:scale-105 ${
                  isActive 
                    ? "text-white bg-white/10" 
                    : "text-white/100"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Get in Touch Button - Separate flex container */}
        <div className="hidden md:flex items-center flex-shrink-0">
          <Link
            to="/contact"
            onClick={closeMenu}
            className="rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-5 lg:px-6 py-2 lg:py-2.5 text-md font-semibold text-white shadow-lg shadow-[#1CA7B8]/25 transition-all hover:scale-105 hover:shadow-[#1CA7B8]/40 font-sans"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle - white icon */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1CA7B8] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav - navy background */}
      <nav
        className={`overflow-hidden border-t border-white/10 bg-[#0E2A43] transition-all duration-300 md:hidden ${
          open ? "max-h-[500px] py-4 opacity-100" : "max-h-0 py-0 opacity-0"
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
                    ? "text-white bg-white/10"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
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