// Footer.jsx - With Lucide Icons
import { Link } from "react-router-dom";
import logo from "../assets/logo-actual.png";
import {
  MapPin,
  Mail,
  Phone,
  ChevronRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

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
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Sectors", href: "/sectors" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/DukesTechServices",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dukes_techservices/",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/dukes-tech-services",
    icon: FaLinkedinIn,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0E2A43] text-white/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12">
          
          {/* Logo & Slogan */}
          <div className="lg:col-span-3">
            <Link to="/" className="block mb-4">
              <div className="rounded-xl bg-white p-2 shadow-lg inline-block transition-transform hover:scale-105">
                <img 
                  src={logo} 
                  alt="Dukes Tech Services" 
                  className="h-16 w-auto sm:h-16 md:h-20" 
                />
              </div>
            </Link>
            <div className="mt-4">
              <p className="font-sans text-lg font-bold text-white leading-tight">
                Smart Tech, <span className="text-[#1CA7B8]">Smarter Future</span>
              </p>
              <p className="font-sans text-lg text-white/90 mt-2">
                Where Ideas Meet Technology
              </p>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-white/20 p-2.5 text-white hover:bg-[#1CA7B8] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#1CA7B8]/25"
                    aria-label={social.name}
                  >
                    <Icon className="h-7 w-7" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services - Properly aligned */}
          <div className="lg:col-span-6">
            <h4 className="text-lg font-bold uppercase tracking-wider text-white/100 mb-4 font-sans">
              Our Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col gap-x-8 gap-y-1 items-start">
              {SERVICES.map((service, index) => (
                <Link
                  key={index}
                  to="/services"
                  className="group flex items-start gap-2.5 py-1.5 px-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:translate-x-1"
                >
                  <span className="text-[#1CA7B8] text-base leading-none flex-shrink-0 mt-1">•</span>
                  <span className="font-sans text-base text-white/90 group-hover:text-white transition-colors duration-300">
                    {service}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links & Contact */}
          <div className="lg:col-span-3">
            <div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-white/100 mb-4 font-sans">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {QUICK_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="group flex items-center gap-2 font-sans text-base text-white/90 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      <ChevronRight className="h-4 w-4 text-[#1CA7B8] flex-shrink-0" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-bold uppercase tracking-wider text-white/100 mb-4 font-sans">
                Contact Info
              </h4>
              <address className="not-italic space-y-2.5">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-[#1CA7B8] mt-1 flex-shrink-0" />
                  <span className="font-sans text-base text-white/90">Naqi Center, Dulha Street, 71-Mall Road, Lahore, Pakistan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-[#1CA7B8] flex-shrink-0" />
                  <a href="mailto:info.dukestech@gmail.com" className="font-sans text-base text-white/90 hover:text-white transition-colors duration-300">
                    info.dukestech@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-[#1CA7B8] flex-shrink-0" />
                  <a href="tel:+923097671363" className="font-sans text-base text-white/90 hover:text-white transition-colors duration-300">
                    +92 309 7671363
                  </a>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width brighter divider */}
      <div className="w-full border-t border-white/40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
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