// DexoHero.jsx - DEXO Hero Section with Branding
import { motion } from "framer-motion";
import { ArrowRight, Store, Cloud, WifiOff, ShoppingCart, CreditCard, Sparkles } from "lucide-react";
import dexoServicesImg from "../assets/dexo-hero2.png";

export default function DexoHero() {
  return (
    <section className="relative overflow-hidden min-h-[100vh] flex items-center pt-20 md:pt-0">
      {/* Background Image - full hero, repositioned so laptop + cloud graphic both stay in frame */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={dexoServicesImg}
          alt="DEXO - Desktop ERP & POS Software"
          className="w-full h-full object-cover object-[68%_25%] md:object-[65%_30%]"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.style.background =
              "linear-gradient(135deg, #0E2A43 0%, #1a3a5a 50%, #0E2A43 100%)";
          }}
        />
      </div>

      {/* Dark Overlay - stronger on the left where text sits, fades out over the image on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E2A43]/90 via-[#0E2A43]/60 to-[#0E2A43]/10 dark:from-[#0a1628]/60 dark:via-[#0a1628]/65 dark:to-[#0a1628]/15" />

      {/* Additional gradient for text readability at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A43]/40 via-transparent to-transparent" />

      {/* Dot motifs */}
      <div className="absolute top-10 left-10 opacity-15 z-10">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
          {[10, 30, 50, 70, 90].map((x) => (
            <circle key={x} cx={x} cy={10} r="2.5" fill="#1CA7B8" />
          ))}
          {[20, 40, 60, 80].map((x) => (
            <circle key={x} cx={x} cy={30} r="2" fill="#1CA7B8" />
          ))}
          {[15, 35, 55, 75, 95].map((x) => (
            <circle key={x} cx={x} cy={50} r="2.5" fill="#1CA7B8" />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] drop-shadow-lg"
          >
            <span className="text-[#1CA7B8] block">DEXO</span>
            <span className="block mt-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Smart Business Engine
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-4 max-w-xl text-lg sm:text-base md:text-base text-white/90 leading-relaxed"
          >
            Streamline your business operations with our comprehensive desktop ERP & POS software.
            Choose between Online POS for cloud management or Offline POS for reliable in-store
            operations.
          </motion.p>

          {/* Feature badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <div className="flex items-center gap-2 text-white/80">
              <Store className="h-6 w-6 text-[#1CA7B8]" />
              <span className="text-base">All-in-One ERP</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CreditCard className="h-6 w-6 text-[#1CA7B8]" />
              <span className="text-base">Secure Payments</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <ShoppingCart className="h-6 w-6 text-[#1CA7B8]" />
              <span className="text-base">Inventory Management</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}