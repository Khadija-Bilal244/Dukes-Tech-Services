// Sectors-Clients.jsx - Sectors & Clients Section
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Sofa, 
  Briefcase, 
  Calculator, 
  GraduationCap, 
  Utensils, 
  Footprints, 
  Shield, 
  Shirt,
  ArrowUpRight,
  Building2
} from "lucide-react";

// Import client logos
import artisanLineageLogo from "../assets/Artisan Lineage.jpeg";
import dukesAdvisorsLogo from "../assets/Dukes Advisors.jpeg";
import nexusLogo from "../assets/NexusLogo.png";
import sterlingWiseLogo from "../assets/Sterling Wise.jpeg";
import isrrcLogo from "../assets/ISRRC.jpeg";
import sabiqoonLogo from "../assets/Sabaiqoon International Education Group.jpeg";
import naturelleSaltLogo from "../assets/Naturalle Salt.png";
import trendladLogo from "../assets/Trendlad Global.jpeg";
import korvexLogo from "../assets/Korvex Security.jpeg";
import sherwaniLogo from "../assets/Sherwani Studios.jpeg";

const clientLogos = [
  { id: 1, src: artisanLineageLogo, alt: "Artisan Lineage", scale: 1 },
  { id: 2, src: dukesAdvisorsLogo, alt: "Dukes Advisors", scale: 1 },
  { id: 3, src: nexusLogo, alt: "Nexus Accountants", scale: 1 },
  { id: 4, src: sterlingWiseLogo, alt: "Sterling Wise", scale: 1.6 },
  { id: 5, src: isrrcLogo, alt: "ISRRC", scale: 1 },
  { id: 6, src: sabiqoonLogo, alt: "Sabiqoon School", scale: 1 },
  { id: 7, src: naturelleSaltLogo, alt: "Naturelle Salt", scale: 1 },
  { id: 8, src: trendladLogo, alt: "Trendlad Global", scale: 1.7 },
  { id: 9, src: korvexLogo, alt: "Korvex Security", scale: 1.9 },
  { id: 10, src: sherwaniLogo, alt: "Sherwani Studios", scale: 1 },
];

const sectorsData = [
  {
    id: 1,
    icon: Sofa,
    title: "Furniture",
    clients: [
      { name: "Artisan Lineage", website: "https://artisanlineage.com/" }
    ]
  },
  {
    id: 2,
    icon: Briefcase,
    title: "Consultancy",
    clients: [
      { name: "Dukes Advisors", website: "https://www.dukesadvisors.com/" }
    ]
  },
  {
    id: 3,
    icon: Calculator,
    title: "Accounting",
    clients: [
      { name: "Nexus Accountants", website: "https://www.nexusaccountants.co.uk/" },
      { name: "Sterling Wise", website: "https://sterlingwise.uk/" }
    ]
  },
  {
    id: 4,
    icon: GraduationCap,
    title: "Education",
    clients: [
      { name: "ISRRC", website: "#" },
      { name: "Sabiqoon School", website: "https://sabiqooninternational.com/" }
    ]
  },
  {
    id: 5,
    icon: Utensils,
    title: "Food",
    clients: [
      { name: "Naturelle Salt", website: "https://www.naturellesalt.com/" }
    ]
  },
  {
    id: 6,
    icon: Footprints,
    title: "Shoes",
    clients: [
      { name: "Trendlad Global", website: "https://www.trendlad.co/" }
    ]
  },
  {
    id: 7,
    icon: Shield,
    title: "Security",
    clients: [
      { name: "Korvex Security", website: "https://korvexsecurity.com/" }
    ]
  },
  {
    id: 8,
    icon: Shirt,
    title: "Clothing",
    clients: [
      { name: "Sherwani Studios", website: "https://sherwanistudios.com/" }
    ]
  }
];

export default function SectorsClients() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Logo banner scroll
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollingLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const speed = 0.8;

    const animate = () => {
      if (!isPaused) {
        scrollPosition += speed;
        const totalWidth = scrollContainer.scrollWidth / 3;
        if (scrollPosition >= totalWidth) {
          scrollPosition = 0;
        }
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  return (
    <section className="bg-[#c8f5fc] py-12 md:py-10 lg:py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-14">
        
        {/* Moving Logo Banner - Inside the same blue section */}
        <div 
          className="relative overflow-hidden bg-[#c8f5fc] py-8 sm:py-10 mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none" style={{
            background: 'linear-gradient(to right, #c8f5fc, transparent)'
          }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none" style={{
            background: 'linear-gradient(to left, #c8f5fc, transparent)'
          }} />

          {/* Header */}
          <div className="text-center mb-6">
            <span className="inline-block rounded-full bg-white px-4 py-1 text-lg font-bold uppercase tracking-[0.15em] text-[#1CA7B8] font-sans border border-[#1CA7B8]/70">
              Trusted By
            </span>
          </div>

          <div className="relative overflow-hidden">
            <div
              ref={scrollRef}
              className="flex items-center h-32 sm:h-36 md:h-40 gap-6 sm:gap-8 md:gap-10 whitespace-nowrap"
              style={{ willChange: 'transform' }}
            >
              {scrollingLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="group flex-shrink-0 relative w-32 h-28 sm:w-40 sm:h-32 md:w-44 md:h-36 flex items-center justify-center bg-white rounded-lg shadow-sm ring-1 ring-black/5 overflow-hidden transition-all duration-500 hover:shadow-lg hover:scale-105 p-3 sm:p-4"
                >
                  {/* Gradient border on hover */}
                  <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[#1CA7B8] via-[#0E2A43] to-[#1CA7B8] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Inner white background */}
                  <div className="absolute inset-0.5 rounded-lg bg-white" />

                  {/* Logo image */}
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="relative z-10 w-full h-full object-contain"
                    style={{ transform: `scale(${logo.scale || 1})` }}
                  />

                  {/* Hover overlay showing the client name */}
                  <div className="absolute inset-0.5 z-20 rounded-lg bg-[#0A1428]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="w-full text-white text-[11px] sm:text-md md:text-lg font-semibold text-center px-2 leading-tight whitespace-normal break-words">
                      {logo.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-lg font-bold uppercase tracking-[0.15em] text-[#1CA7B8] font-sans border border-[#1CA7B8]/70">
            Our Clients
          </span>
          <h2 className="mt-4 font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E2A43]">
            Sectors & <span className="text-[#1CA7B8]">Clients</span>
          </h2>
          <div className="flex justify-center gap-2 mt-3">
            <span className="inline-block h-1 w-12 rounded-full bg-[#1CA7B8]" />
            <span className="inline-block h-1 w-6 rounded-full bg-[#1CA7B8]/30" />
          </div>
          <p className="mt-4 text-black max-w-2xl mx-auto font-sans text-lg sm:text-xl leading-relaxed">
            We partner with businesses across diverse industries, delivering innovative technology 
            solutions that drive growth and digital transformation.
          </p>
        </div>

        {/* Sectors List */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {sectorsData.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.07 }}
                className="group flex gap-5 bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl transition-shadow duration-500 border-l-[6px] border-[#1CA7B8]/30 hover:border-[#1CA7B8] relative overflow-hidden"
              >
                {/* Faint number watermark */}
                <span className="absolute -right-2 -bottom-4 font-sans text-8xl font-black text-[#cdeff4] select-none">
                  {String(sector.id).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative z-10 flex-shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#1CA7B8] text-white transition-all duration-500 group-hover:bg-[#0E2A43] group-hover:rotate-6">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 min-w-0">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#0E2A43]">
                    {sector.title}
                  </h3>

                  <div className="mt-3 flex flex-col divide-y divide-[#0E2A43]/10">
                    {sector.clients.map((client, idx) => {
                      const isLinked = client.website !== "#";
                      const RowTag = isLinked ? "a" : "div";
                      const rowProps = isLinked
                        ? {
                            href: client.website,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {};

                      return (
                        <RowTag
                          key={idx}
                          {...rowProps}
                          className={`flex items-center justify-between py-2.5 -mx-2 px-2 rounded-lg font-sans text-base sm:text-lg text-[#0E2A43] ${
                            isLinked
                              ? "hover:bg-[#c0eff5] hover:text-[#20474d] cursor-pointer transition-colors duration-300"
                              : "opacity-70"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-[#1CA7B8]/60 flex-shrink-0" />
                            {client.name}
                          </span>
                          {isLinked && (
                            <ArrowUpRight className="h-5 w-5 text-[#02282d] opacity-70 group-hover/row:opacity-100 transition-all duration-300 flex-shrink-0" />
                          )}
                        </RowTag>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-white px-6 py-4 sm:px-8 sm:py-5 border border-[#1CA7B8]/10 shadow-lg">
            <span className="font-sans text-lg sm:text-base font-semibold text-[#0E2A43]">
              Want to become our next success story?
            </span>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-5 sm:px-6 py-2 sm:py-2.5 text-base font-semibold text-white shadow-lg shadow-[#1CA7B8]/25 hover:scale-105 transition-transform"
            >
              Let's Talk
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}