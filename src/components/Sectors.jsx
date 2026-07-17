import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import furnitureImg from "../assets/furniture.jpg";
import consultancyImg from "../assets/consultancy.jpg";
import accountingImg from "../assets/accounting.jpg";
import gymImg from "../assets/gym.jpg";
import educationImg from "../assets/education.jpg";
import clothingImg from "../assets/clothing.jpg";
import foodImg from "../assets/food.jfif";
import shoesImg from "../assets/shoes.jfif";
import securityImg from "../assets/security.jfif";

const StoryTimeline = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Particle system configuration
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 2,
  }));

  // Floating geometric shapes
  const shapes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    type: i % 3 === 0 ? "circle" : i % 3 === 1 ? "triangle" : "square",
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    duration: Math.random() * 30 + 15,
    opacity: Math.random() * 0.08 + 0.02,
    color: i % 4 === 0 ? "teal" : i % 4 === 1 ? "cyan" : i % 4 === 2 ? "navy" : "teal",
  }));

  // Subtle grid lines
  const gridLines = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: (i / 15) * 100,
    y: (i / 15) * 100,
  }));

  const scrollItems = [
    {
      id: 1,
      image: furnitureImg,
      title: "Furniture",
      description:
        "From family-run workshops to established retailers, we help furniture businesses manage inventory costs, streamline supply chains, and enhance profitability with clear, actionable financial insights that drive sustainable growth.",
      align: "left",
      color: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-700",
      badgeColor: "from-[#1CA7B8] to-[#0E2A43]",
    },
    {
      id: 2,
      image: consultancyImg,
      title: "Consultancy",
      description:
        "We empower consultancy firms with robust financial structures, accurate reporting, tax planning, and compliance solutions—allowing you to focus on delivering exceptional advice while we handle the numbers with precision and care.",
      align: "right",
      color: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      badgeColor: "from-[#1CA7B8] to-[#0E2A43]",
    },
    {
      id: 3,
      image: accountingImg,
      title: "Accounting",
      description:
        "We partner with accounting practices to deliver precision, real-time insights, and up-to-date financial intelligence. Every decision is backed by accurate numbers, empowering you to guide your clients with confidence and clarity.",
      align: "left",
      color: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-700",
      badgeColor: "from-[#1CA7B8] to-[#0E2A43]",
    },
    {
      id: 4,
      image: gymImg,
      title: "Gym & Fitness",
      description:
        "We help gyms and fitness studios stay focused on their members by managing membership revenue, payroll, equipment financing, and operational finances with efficiency, accuracy, and complete peace of mind.",
      align: "right",
      color: "from-red-50 to-rose-50",
      borderColor: "border-red-200",
      textColor: "text-red-700",
      badgeColor: "from-[#1CA7B8] to-[#0E2A43]",
    },
    {
      id: 5,
      image: educationImg,
      title: "Education",
      description:
        "We support educational institutions—from tutoring centres to training institutes—with comprehensive fee management, grant tracking, regulatory compliance, and financial planning to help you focus on shaping futures.",
      align: "left",
      color: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200",
      textColor: "text-indigo-700",
      badgeColor: "from-[#1CA7B8] to-[#0E2A43]",
    },
    {
      id: 6,
      image: clothingImg,
      title: "Clothing & Retail",
      description:
        "We help clothing and retail businesses navigate the complexities of stock valuation, seasonal cash flow, VAT compliance, and financial planning—so you can focus on building your brand and growing your customer base.",
      align: "right",
      color: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      textColor: "text-pink-700",
      badgeColor: "from-[#1CA7B8] to-[#0E2A43]",
    },
    {
      id: 7,
      image: foodImg,
      title: "Food & Beverage",
      description:
        "We partner with food and beverage businesses to optimize inventory management, streamline supply chain finances, ensure regulatory compliance, and drive profitability—helping you deliver quality while we handle the numbers.",
      align: "left",
      color: "from-yellow-50 to-amber-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-700",
      badgeColor: "from-[#1CA7B8] to-[#0E2A43]",
    },
    {
      id: 8,
      image: shoesImg,
      title: "Shoes & Footwear",
      description:
        "We support footwear brands and retailers with tailored financial solutions—managing inventory costs, supply chain optimization, seasonal cash flow, and business growth strategies to help you step ahead of the competition.",
      align: "right",
      color: "from-sky-50 to-blue-50",
      borderColor: "border-sky-200",
      textColor: "text-sky-700",
      badgeColor: "from-[#1CA7B8] to-[#0E2A43]",
    },
    {
      id: 9,
      image: securityImg,
      title: "Security & Protection",
      description:
        "We provide financial clarity and operational support to security firms—managing payroll, equipment costs, compliance reporting, and business growth strategies so you can focus on protecting what matters most.",
      align: "left",
      color: "from-gray-50 to-slate-50",
      borderColor: "border-gray-200",
      textColor: "text-gray-700",
      badgeColor: "from-[#1CA7B8] to-[#0E2A43]",
    }
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* ENHANCED BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* SUBTLE GRID PATTERN */}
        <div className="absolute inset-0 opacity-[0.03]">
          {gridLines.map((line) => (
            <React.Fragment key={line.id}>
              <div 
                className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1CA7B8]/30 to-transparent"
                style={{ left: `${line.x}%` }}
              />
              <div 
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1CA7B8]/30 to-transparent"
                style={{ top: `${line.y}%` }}
              />
            </React.Fragment>
          ))}
        </div>

        {/* FLOATING GEOMETRIC SHAPES */}
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute pointer-events-none"
            initial={{
              x: `${shape.x}vw`,
              y: `${shape.y}vh`,
              rotate: shape.rotation,
              opacity: 0,
            }}
            animate={{
              x: `${shape.x + Math.sin(Date.now() * 0.001 + shape.id) * 10}vw`,
              y: `${shape.y + Math.cos(Date.now() * 0.001 + shape.id) * 10}vh`,
              rotate: shape.rotation + 360,
              opacity: shape.opacity,
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              background: shape.type === "circle" 
                ? `radial-gradient(circle at center, ${shape.color === 'teal' ? '#1CA7B8' : shape.color === 'cyan' ? '#22D3EE' : '#0E2A43'}/40, transparent 70%)`
                : shape.type === "triangle"
                ? `conic-gradient(from 45deg, ${shape.color === 'teal' ? '#1CA7B8' : shape.color === 'cyan' ? '#22D3EE' : '#0E2A43'}/30, transparent)`
                : `linear-gradient(45deg, ${shape.color === 'teal' ? '#1CA7B8' : shape.color === 'cyan' ? '#22D3EE' : '#0E2A43'}/30, transparent)`,
              clipPath: shape.type === "circle" 
                ? "circle(50%)"
                : shape.type === "triangle"
                ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                : "none",
              borderRadius: shape.type === "square" ? "12px" : "0",
              filter: "blur(8px)",
            }}
          />
        ))}

        {/* PARTICLE SYSTEM */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            initial={{
              x: `${particle.x}vw`,
              y: `${particle.y}vh`,
              opacity: 0,
            }}
            animate={{
              x: [
                `${particle.x}vw`,
                `${particle.x + Math.random() * 20 - 10}vw`,
                `${particle.x}vw`,
              ],
              y: [
                `${particle.y}vh`,
                `${particle.y + Math.random() * 20 - 10}vh`,
                `${particle.y}vh`,
              ],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: "radial-gradient(circle, rgba(28,167,184,0.4) 30%, transparent 70%)",
              boxShadow: "0 0 15px rgba(28, 167, 184, 0.3)",
            }}
          />
        ))}

        {/* CONCENTRIC CIRCLES */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[1, 2, 3, 4].map((size) => (
            <motion.div
              key={size}
              className="absolute border border-[#1CA7B8]/10 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.2, 0.8],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8 + size * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: size * 0.5,
              }}
              style={{
                width: `${size * 300}px`,
                height: `${size * 300}px`,
              }}
            />
          ))}
        </div>

        {/* AMBIENT LIGHT ORBS */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#1CA7B8]/20 to-[#0E2A43]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96">
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-[#0E2A43]/15 to-[#1CA7B8]/10 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* ANIMATED WAVES */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1CA7B8]/10 to-transparent"
          animate={{
            clipPath: [
              "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              "polygon(0% 100%, 100% 100%, 100% 20%, 0% 40%)",
              "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* INTERACTIVE BACKGROUND BLOBS */}
      <div
        className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#1CA7B8]/20 to-[#0E2A43]/10 blur-3xl rounded-full"
        style={{ 
          transform: `translate(${mouse.x * 60}px, ${mouse.y * 60}px)`,
          transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      />
      <div
        className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-gradient-to-tr from-[#0E2A43]/15 to-[#1CA7B8]/10 blur-3xl rounded-full"
        style={{ 
          transform: `translate(${mouse.x * -60}px, ${mouse.y * -60}px)`,
          transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      />

      {/* SUBTLE BEAM LIGHTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-px h-64 bg-gradient-to-b from-[#1CA7B8]/30 to-transparent"
          animate={{
            height: ["64px", "128px", "64px"],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-px h-64 bg-gradient-to-b from-[#0E2A43]/30 to-transparent"
          animate={{
            height: ["128px", "64px", "128px"],
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">

        {/* ENHANCED HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 lg:mb-32 relative"
        >
          {/* HEADER BACKGROUND GLOW */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#1CA7B8]/10 blur-3xl rounded-full" />
          
          <motion.span 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#F2FAFB] to-[#1CA7B8]/20 backdrop-blur-md rounded-2xl shadow-lg border border-[#1CA7B8]/30 mb-8 relative z-10"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1CA7B8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#1CA7B8]"></span>
            </span>
            <span className="text-base font-semibold tracking-wider text-[#0E2A43]">
              SECTORS WE SERVE
            </span>
          </motion.span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0E2A43] mb-8 relative z-10">
            <span className="relative inline-block">
              Industries We <span className="relative">
                <span className="text-[#1CA7B8]">Support</span>
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#1CA7B8]/30 -skew-x-12"></span>
              </span>
            </span>
          </h2>

          <p className="text-[#0E2A43]/70 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed relative z-10">
            Dukes Tech Services partners with diverse industries, delivering tailored technology solutions 
            that drive growth, streamline operations, and empower businesses to thrive in the digital age.
          </p>

          {/* DECORATIVE LINE WITH ANIMATED ELEMENTS */}
          <div className="relative mt-12">
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#1CA7B8] to-transparent mx-auto" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div 
                className="w-6 h-6 bg-[#1CA7B8] border-4 border-white shadow-lg relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1CA7B8] to-[#0E2A43] transform -rotate-45"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* TIMELINE - ENHANCED */}
        <div className="relative space-y-36 lg:space-y-44">

          {/* CENTRAL LINE - ENHANCED */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1.5">
            <div className="absolute inset-0 bg-gradient-to-b from-[#1CA7B8] via-[#0E2A43] to-[#1CA7B8] rounded-full shadow-lg"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1CA7B8]/30 to-transparent animate-pulse"></div>
            
            {/* ANIMATED SCROLL INDICATOR */}
            <motion.div 
              className="absolute top-0 left-1/2 w-3 h-16 bg-gradient-to-b from-[#1CA7B8] to-[#0E2A43] rounded-full -translate-x-1/2 shadow-lg"
              animate={{ y: ["0%", "90%", "0%"] }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
            />
          </div>

          {/* CIRCLE CONNECTORS */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1.5">
            {scrollItems.map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="absolute w-8 h-8 bg-gradient-to-br from-[#1CA7B8] to-[#0E2A43] rounded-full border-4 border-white shadow-xl -translate-x-1/2 z-20"
                style={{ top: `${i * 20}%` }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(28, 167, 184, 0.4)",
                    "0 0 0 10px rgba(28, 167, 184, 0)",
                    "0 0 0 0 rgba(28, 167, 184, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          {scrollItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col ${
                item.align === "left"
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-20`}
            >

              {/* IMAGE - ENHANCED */}
              <motion.div
                whileHover={{ 
                  scale: 1.03, 
                  rotateZ: item.align === "left" ? 1 : -1,
                  boxShadow: "0 25px 50px -12px rgba(28, 167, 184, 0.3)"
                }}
                transition={{ duration: 0.5 }}
                className="relative flex-1 max-w-2xl"
              >
                <div className={`relative overflow-hidden rounded-3xl shadow-2xl group border-2 border-transparent hover:border-[#1CA7B8] transition-all duration-500 bg-gradient-to-br ${item.color} p-1`}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-72 sm:h-80 lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A43]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* GLOW EFFECT */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#1CA7B8]/20 to-[#0E2A43]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>

                {/* NUMBER BADGE - TEAL GREEN */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`absolute -bottom-5 ${
                    item.align === "left" ? "-right-5" : "-left-5"
                  } bg-gradient-to-br from-[#1CA7B8] to-[#0E2A43] text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl shadow-[#1CA7B8]/30 border-4 border-white z-20`}
                  animate={{
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <span className="font-bold text-xl">{i + 1}</span>
                </motion.div>
              </motion.div>

              {/* CONTENT - ENHANCED */}
              <motion.div 
                initial={{ opacity: 0, x: item.align === "left" ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`flex-1 max-w-2xl ${
                  item.align === "left" ? "lg:text-left" : "lg:text-right"
                }`}
              >
                <div className={`inline-flex items-center gap-3 mb-6 ${
                  item.align === "right" ? "lg:ml-auto" : ""
                }`}>
                  <motion.div 
                    className="w-8 h-px bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "2rem" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                  <span className="text-lg font-bold tracking-wider text-[#1CA7B8]">
                    SECTOR {i + 1}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0E2A43] mb-6 leading-tight">
                  {item.title}
                </h3>
                
                <div className={`p-6 rounded-2xl bg-gradient-to-br from-[#F2FAFB] to-[#1CA7B8]/10 backdrop-blur-sm border ${item.borderColor} shadow-sm mb-6 relative overflow-hidden ${
                  item.align === "right" ? "lg:ml-auto" : ""
                }`}>
                  {/* ANIMATED BACKGROUND PATTERN */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, #1CA7B8 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }} />
                  </div>
                  
                  <p className="text-[#0E2A43]/80 text-lg leading-relaxed relative z-10">
                    {item.description}
                  </p>
                </div>

                {/* DECORATIVE ELEMENT */}
                <div className={`flex items-center gap-4 ${
                  item.align === "right" ? "lg:justify-end" : ""
                }`}>
                  <motion.div 
                    className="h-1 w-12 bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "3rem" }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  />
                  <motion.div 
                    className="h-1 w-8 bg-[#1CA7B8]/50 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "2rem" }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                  <motion.div 
                    className="h-1 w-4 bg-[#1CA7B8]/30 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "1rem" }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 rounded-3xl bg-[#F2FAFB] px-8 py-6 border border-[#1CA7B8]/20">
            <span className="font-sans text-base font-semibold text-[#0E2A43]">
               Ready to transform your business?
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-6 py-2.5 text-base font-semibold text-white shadow-lg shadow-[#1CA7B8]/25 hover:scale-105 transition-transform"
            >
              Let's Talk
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryTimeline;