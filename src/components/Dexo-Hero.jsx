// DexoHero.jsx - DEXO Hero Section with Full Responsiveness
import { motion } from "framer-motion";
import { ArrowRight, Store, Cloud, WifiOff, ShoppingCart, CreditCard, Sparkles } from "lucide-react";
import dexoServicesImg from "../assets/dexo-hero2.png";

export default function DexoHero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] sm:min-h-[95vh] md:min-h-[100vh] flex items-center pt-16 sm:pt-20 md:pt-24 lg:pt-0">
      {/* Background Image - Responsive positioning */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={dexoServicesImg}
          alt="DEXO - Desktop ERP & POS Software"
          className="w-full h-full object-cover object-[55%_20%] sm:object-[60%_25%] md:object-[65%_30%] lg:object-[68%_30%]"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.style.background =
              "linear-gradient(135deg, #0E2A43 0%, #1a3a5a 50%, #0E2A43 100%)";
          }}
        />
      </div>

      {/* Dark Overlay - Responsive gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E2A43]/80 via-[#0E2A43]/50 to-[#0E2A43]/10 dark:from-[#0a1628]/70 dark:via-[#0a1628]/50 dark:to-[#0a1628]/10 sm:from-[#0E2A43]/85 sm:via-[#0E2A43]/55 sm:to-[#0E2A43]/10 md:from-[#0E2A43]/90 md:via-[#0E2A43]/60 md:to-[#0E2A43]/10" />

      {/* Additional gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A43]/30 via-transparent to-transparent sm:from-[#0E2A43]/40" />

      {/* Dot motifs - Hidden on mobile */}
      <div className="hidden sm:block absolute top-6 sm:top-10 left-6 sm:left-10 opacity-10 sm:opacity-15 z-10">
        <svg width="80" height="70" viewBox="0 0 120 100" fill="none" className="sm:w-[100px] sm:h-[80px] lg:w-[120px] lg:h-[100px]">
          {[10, 30, 50, 70, 90].map((x) => (
            <circle key={x} cx={x} cy={10} r="2" fill="#1CA7B8" />
          ))}
          {[20, 40, 60, 80].map((x) => (
            <circle key={x} cx={x} cy={30} r="1.5" fill="#1CA7B8" />
          ))}
          {[15, 35, 55, 75, 95].map((x) => (
            <circle key={x} cx={x} cy={50} r="2" fill="#1CA7B8" />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 sm:py-6">
        <div className="max-w-full sm:max-w-2xl md:max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-bold text-white leading-[1.05] sm:leading-[0.95] drop-shadow-lg"
          >
            <span className="text-[#1CA7B8] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl block">
              DEXO
            </span>
            <span className="block mt-1 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Smart Business Engine
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base md:text-lg text-white/90 leading-relaxed"
          >
            Streamline your business operations with our comprehensive desktop ERP & POS software.
            Choose between Online POS for cloud management or Offline POS for reliable in-store
            operations.
          </motion.p>

          {/* Feature badges - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 text-white/80">
              <Store className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#1CA7B8]" />
              <span className="text-base sm:text-sm md:text-base">All-in-One ERP</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-white/80">
              <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#1CA7B8]" />
              <span className="text-base sm:text-sm md:text-base">Secure Payments</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-white/80">
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#1CA7B8]" />
              <span className="text-base sm:text-sm md:text-base">Inventory Management</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}