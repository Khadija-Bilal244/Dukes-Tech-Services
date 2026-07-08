import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0E2A43] text-white/70 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <span className="font-sans text-2xl font-bold text-white">
              DUKES<span className="text-[#1CA7B8]">TECH</span>
            </span>
            <p className="text-sm mt-4 leading-relaxed text-white/50 max-w-xs font-sans">
              Empowering businesses through cutting-edge technology solutions that drive growth and digital transformation.
            </p>
            <div className="flex gap-3 mt-6">
              <a 
                href="https://www.facebook.com/dukestechservices" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-lg bg-white/5 px-3 py-2 hover:bg-white/10 transition-colors hover:text-white text-sm"
              >
                Facebook
              </a>
              <a 
                href="https://www.instagram.com/dukestechservices" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-lg bg-white/5 px-3 py-2 hover:bg-white/10 transition-colors hover:text-white text-sm"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4 font-sans">Quick Links</p>
            <ul className="space-y-2.5">
              <li><a href="#home" className="text-sm hover:text-white transition-colors duration-300 font-sans">Home</a></li>
              <li><a href="#about" className="text-sm hover:text-white transition-colors duration-300 font-sans">About Us</a></li>
              <li><a href="#services" className="text-sm hover:text-white transition-colors duration-300 font-sans">Services</a></li>
              <li><a href="#sectors" className="text-sm hover:text-white transition-colors duration-300 font-sans">Sectors</a></li>
              <li><a href="#contact" className="text-sm hover:text-white transition-colors duration-300 font-sans">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4 font-sans">Contact Us</p>
            <address className="not-italic space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#1CA7B8] mt-0.5 flex-shrink-0" />
                <span className="text-white/50 font-sans">The Mall Road, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#1CA7B8] flex-shrink-0" />
                <a href="mailto:info.dukestech@gmail.com" className="hover:text-white transition-colors duration-300 text-white/50 font-sans">
                  info.dukestech@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#1CA7B8] flex-shrink-0" />
                <a href="tel:+923009459653" className="hover:text-white transition-colors duration-300 text-white/50 font-sans">
                  +92-300-9459653
                </a>
              </div>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4 font-sans">Stay Updated</p>
            <p className="text-sm text-white/50 mb-4 font-sans">Subscribe to our newsletter for the latest updates</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#1CA7B8]/50 font-sans"
              />
              <button className="rounded-lg bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-4 py-2.5 text-sm font-semibold text-white hover:scale-105 transition-transform font-sans whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p className="font-sans">© {new Date().getFullYear()} Dukes Tech Services. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors font-sans">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors font-sans">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}