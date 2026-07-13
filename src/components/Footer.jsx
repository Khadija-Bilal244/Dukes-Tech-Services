// Footer.jsx - With Lucide Icons
import logo from "../assets/logo-actual.png";
import { MapPin, Mail, Phone, ChevronRight } from "lucide-react";

const SERVICES = [
  "Web Development & Design",
  "Graphic Design",
  "Video Editing & Production",
  "SEO (Search Engine Optimization)",
  "Digital Marketing & Ads",
  "Social Media Marketing & Management",
  "Canva Design Services",
  "Software Development",
];

const QUICK_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Sectors", href: "#sectors" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0E2A43] text-white/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12">
          
          {/* Logo & Slogan */}
          <div className="lg:col-span-3">
            <a href="#home" className="block mb-4">
              <div className="rounded-xl bg-white p-2 shadow-lg inline-block transition-transform hover:scale-105">
                <img 
                  src={logo} 
                  alt="Dukes Tech Services" 
                  className="h-14 w-auto sm:h-14 md:h-16" 
                />
              </div>
            </a>
            <div className="mt-3">
              <p className="font-sans text-lg font-bold text-white leading-tight">
                Smart Tech, <span className="text-[#1CA7B8]">Smarter Future</span>
              </p>
              <p className="font-sans text-normal text-white/90 mt-1">
                Where Ideas Meet Technology
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-6">
            <h4 className="text-normal font-bold uppercase tracking-wider text-white/100 mb-4 font-sans">
              Our Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
              {SERVICES.map((service, index) => (
                <a
                  key={index}
                  href="#services"
                  className="group flex items-start gap-2.5 py-1.5 px-2 rounded-lg hover:bg-white/5 transition-all duration-300 hover:translate-x-1"
                >
                  <span className="text-[#1CA7B8] h-3 w-3 text-lg leading-none mt-1">•</span>
                  <span className="font-sans text-base text-white/90 group-hover:text-white transition-colors duration-300">
                    {service}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links & Contact */}
          <div className="lg:col-span-3">
            <div>
              <h4 className="text-normal font-bold uppercase tracking-wider text-white/100 mb-4 font-sans">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {QUICK_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 font-sans text-base text-white/90 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      <ChevronRight className="h-4 w-4 text-[#1CA7B8]" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-normal font-bold uppercase tracking-wider text-white/100 mb-4 font-sans">
                Contact Info
              </h4>
              <address className="not-italic space-y-2.5">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-[#1CA7B8] mt-1 flex-shrink-0" />
                  <span className="font-sans text-base text-white/90">Naqi Center, Dulha Street, 71-Mall Road,Lahore, Pakistan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-[#1CA7B8] flex-shrink-0" />
                  <a href="mailto:info.dukestech@gmail.com" className="font-sans text-base
                   text-white/90 hover:text-white transition-colors duration-300">
                    info.dukestech@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-[#1CA7B8] flex-shrink-0" />
                  <a href="tel:+923009459653" className="font-sans text-base text-white/90 hover:text-white transition-colors duration-300">
                     +92 309 7671363
                  </a>
                </div>
              </address>
            </div>
          </div>
        </div>

      </div>

      {/* Full-width divider */}
      <div className="w-full border-t border-white/30"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Bottom Bar */}
        <div className="mt-4 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-base text-white/90">
          <p className="font-sans">
            © {new Date().getFullYear()} Dukes Tech Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors font-sans">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors font-sans">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}