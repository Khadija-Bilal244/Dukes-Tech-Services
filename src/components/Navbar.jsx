// Navbar.jsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Sectors", href: "#sectors" },
  { label: "Contact", href: "#contact" },
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

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0E2A43]/95 backdrop-blur-xl border-b border-white/10 shadow-xl"
          : "bg-[#0E2A43] border-b border-white/10"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 py-2.5 sm:py-3">
        {/* Logo - Larger with scale effect */}
        <a 
          href="#home" 
          className="flex shrink-0 items-center transition-transform duration-300 hover:scale-110 active:scale-95"
        >
          <div className="rounded-xl bg-white p-1.5 sm:p-2 shadow-lg">
            <img 
              src={logo} 
              alt="Dukes Tech Services" 
              className="h-12 w-auto sm:h-14 md:h-16 lg:h-20" 
            />
          </div>
        </a>

        {/* Desktop nav with white text */}
        <nav className="hidden items-center gap-0.5 lg:gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-3 lg:px-4 py-2 text-sm lg:text-base font-bold text-white/100 transition-all hover:bg-white/10 hover:text-white font-sans"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 lg:ml-4 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-5 lg:px-6 py-2 lg:py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#1CA7B8]/25 transition-all hover:scale-105 hover:shadow-[#1CA7B8]/40 font-sans"
          >
            Get in Touch
          </a>
        </nav>

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
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-base font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-colors font-sans"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-6 py-3 text-center text-base font-semibold text-white font-sans"
          >
            Get in Touch
          </a>
        </div>
      </nav>
    </header>
  );
}