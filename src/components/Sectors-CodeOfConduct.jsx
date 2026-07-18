// Sectors-CodeOfConduct.jsx
import { Link } from "react-router-dom";
import { Handshake, ShieldCheck, Award, Users, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import rightImg from "../assets/right_image.jfif";

const VALUES = [
  { icon: Handshake, label: "Honesty" },
  { icon: ShieldCheck, label: "Accountability" },
  { icon: Award, label: "Technical Excellence" },
  { icon: Users, label: "Customer-First" },
];

export default function CommitmentSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Subtle background accents */}
      <div className="hidden md:block absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#1CA7B8]/5 rounded-full blur-3xl" />
      <div className="hidden md:block absolute -right-32 bottom-1/2 translate-y-1/2 w-96 h-96 bg-[#0E2A43]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-y-8 sm:gap-y-10 md:gap-y-12 lg:gap-x-16 items-center">

          {/* Content column - Left side (Order 2 on mobile, Order 1 on desktop) */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full lg:col-span-6 relative order-2 lg:order-1"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#1CA7B8]/10 border border-[#1CA7B8]/50 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-5">
              <span className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider text-[#1CA7B8]">
                Code of Conduct
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#0E2A43] font-sans leading-[1.2] sm:leading-[1.1] mb-3 sm:mb-4">
              Our Commitment to <br className="hidden xs:block" />
              <span className="text-[#1CA7B8] relative">
                Excellence
                <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1.5 sm:h-2" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0 4 Q25 0 50 4 Q75 8 100 4 Q125 0 150 4 Q175 8 200 4" stroke="#1CA7B8" strokeWidth="2" fill="none" opacity="0.3" />
                </svg>
              </span>
            </h2>

            <p className="text-black font-sans text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
              Every project is guided by honesty, accountability, technical
              excellence, and a customer-first approach. We believe strong
              values create outstanding digital experiences.
            </p>

            {/* Value chips - Responsive grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-9 max-w-lg">
              {VALUES.map(({ icon: Icon, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="group flex items-center gap-2 sm:gap-3 bg-white border border-slate-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default relative overflow-hidden hover:border-[#1CA7B8]/40"
                >
                  {/* Hover gradient background - Teal */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  
                  {/* Icon - Teal Green - Responsive size */}
                  <div className="relative z-10 p-1 sm:p-1.5 rounded-lg bg-[#1CA7B8]/10 text-[#1CA7B8] group-hover:bg-[#1CA7B8] group-hover:text-white transition-all duration-300">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                  </div>
                  <span className="font-sans text-sm sm:text-base md:text-lg font-semibold text-[#0E2A43] group-hover:text-[#1CA7B8] transition-colors duration-300">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button - Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] hover:from-[#0E2A43] hover:to-[#1CA7B8] text-white font-bold font-sans text-sm sm:text-base px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#1CA7B8]/30"
              >
                Get In Touch With Us
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image column - Right side (Order 1 on mobile, Order 2 on desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:col-span-6 relative order-1 lg:order-2"
          >
            <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-xl sm:shadow-2xl shadow-[#0E2A43]/10 hover:shadow-[#1CA7B8]/20 transition-all duration-500 group">
              <img
                src={rightImg}
                alt="Our commitment to excellence"
                className="w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A43]/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}