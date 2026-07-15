import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const servicesList = [
  {
    id: 1,
    title: "Web Development & Design",
    description: "Custom websites, e-commerce solutions, and web applications tailored to your business needs.",
    color: "from-[#1CA7B8] to-[#0E2A43]",
    bgColor: "bg-[#1CA7B8]/10",
    iconColor: "text-[#1CA7B8]",
    borderColor: "border-[#1CA7B8]/20"
  },
  {
    id: 2,
    title: "Video Editing & Production",
    description: "Professional video content that engages your audience and tells your brand story.",
    color: "from-[#0E2A43] to-[#1CA7B8]",
    bgColor: "bg-[#0E2A43]/10",
    iconColor: "text-[#0E2A43]",
    borderColor: "border-[#0E2A43]/20"
  },
  {
    id: 3,
    title: "Digital Marketing & Ads",
    description: "Data-driven marketing campaigns that deliver measurable results and maximize ROI.",
    color: "from-[#1CA7B8] to-[#0E2A43]",
    bgColor: "bg-[#1CA7B8]/10",
    iconColor: "text-[#1CA7B8]",
    borderColor: "border-[#1CA7B8]/20"
  },
  {
    id: 4,
    title: "Canva Design Services",
    description: "Professional, on-brand designs for all your business needs using Canva's powerful platform.",
    color: "from-[#0E2A43] to-[#1CA7B8]",
    bgColor: "bg-[#0E2A43]/10",
    iconColor: "text-[#0E2A43]",
    borderColor: "border-[#0E2A43]/20"
  },
  {
    id: 5,
    title: "Graphic Design",
    description: "Creative visual designs that make your brand stand out and leave a lasting impression.",
    color: "from-[#1CA7B8] to-[#0E2A43]",
    bgColor: "bg-[#1CA7B8]/10",
    iconColor: "text-[#1CA7B8]",
    borderColor: "border-[#1CA7B8]/20"
  },
  {
    id: 6,
    title: "SEO (Search Engine Optimization)",
    description: "Boost your online visibility and drive organic traffic with our proven SEO strategies.",
    color: "from-[#0E2A43] to-[#1CA7B8]",
    bgColor: "bg-[#0E2A43]/10",
    iconColor: "text-[#0E2A43]",
    borderColor: "border-[#0E2A43]/20"
  },
  {
    id: 7,
    title: "Social Media Marketing & Management",
    description: "Build a strong social presence with strategic content, engagement, and growth tactics.",
    color: "from-[#1CA7B8] to-[#0E2A43]",
    bgColor: "bg-[#1CA7B8]/10",
    iconColor: "text-[#1CA7B8]",
    borderColor: "border-[#1CA7B8]/20"
  },
  {
    id: 8,
    title: "Software Development",
    description: "Custom software solutions built to streamline operations and drive business efficiency.",
    color: "from-[#0E2A43] to-[#1CA7B8]",
    bgColor: "bg-[#0E2A43]/10",
    iconColor: "text-[#0E2A43]",
    borderColor: "border-[#0E2A43]/20"
  }
];

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Helper function to get gradient based on id
  const getGradient = (id) => {
    return id % 2 === 0 
      ? 'linear-gradient(135deg, #1CA7B8, #0E2A43)'
      : 'linear-gradient(135deg, #0E2A43, #1CA7B8)';
  };

  return (
    <>
      {/* Services Cards Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block rounded-full bg-[#1CA7B8]/10 px-4 py-1.5 text-base font-bold uppercase tracking-[0.15em] text-[#1CA7B8] font-sans border border-[#1CA7B8]/50">
              Our Services
            </span>
            <h2 className="mt-4 font-sans text-3xl sm:text-4xl font-bold text-[#0E2A43]">
              Technology Solutions That <span className="text-[#1CA7B8]">Deliver Real Business Results</span>
            </h2>
            <div className="flex justify-center gap-2 mt-3">
              <span className="inline-block h-1 w-12 rounded-full bg-[#1CA7B8]" />
              <span className="inline-block h-1 w-6 rounded-full bg-[#1CA7B8]/30" />
            </div>
            <p className="mt-4 text-black max-w-2xl mx-auto font-sans text-base sm:text-lg leading-relaxed">
              Whether you're launching a startup, expanding your business, or modernizing enterprise operations, 
              our comprehensive technology services are designed to solve complex challenges, streamline processes, 
              and accelerate growth.
            </p>
          </div>

          {/* Services Grid - 4 columns */}
          <div 
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {servicesList.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + (index * 0.05) }}
                className="rounded-xl px-4 py-5 text-center font-sans text-base font-bold text-white cursor-pointer transition-all duration-300 hover:shadow-xl relative overflow-hidden group flex items-center justify-center min-h-[80px]"
                style={{
                  background: getGradient(service.id),
                  boxShadow: '0 4px 15px rgba(28, 167, 184, 0.25)',
                  transform: 'translateX(0)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, scale 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(10px) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0) scale(1)';
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Service Number */}
                <span className="absolute top-2 right-3 text-base font-bold text-white/50">
                  {String(service.id).padStart(2, '0')}
                </span>
                
                {/* Service Title - Properly Centered */}
                <span className="relative z-10 text-center w-full px-2 leading-tight transition-transform duration-300 group-hover:translate-x-2">
                  {service.title}
                </span>
                
                {/* Decorative shine effect */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}