// Mission.jsx - Dukes Tech Services Mission Section
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import mission images
import mission0 from "../assets/mission0.jfif";
import mission1 from "../assets/mission1.jfif";
import mission2 from "../assets/mission2.jfif";
import mission3 from "../assets/mission3.jfif";
import mission4 from "../assets/mission4.jfif";
import mission5 from "../assets/mission5.jfif";
import mission6 from "../assets/mission6.jfif";

const MISSION_IMAGES = [mission0, mission1, mission2, mission3, mission4, mission5, mission6];

export default function Mission() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % MISSION_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24 transition-all duration-700 hover:bg-gradient-to-r hover:from-[#1CA7B8] hover:to-[#0E2A43] group">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#1CA7B8]/5 blur-3xl transition-opacity duration-700 group-hover:opacity-0" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#0E2A43]/5 blur-3xl transition-opacity duration-700 group-hover:opacity-0" />
      </div>

      {/* Gradient overlay that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <h2 className="mt-3 sm:mt-4 font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-[#0E2A43] transition-colors duration-500 group-hover:text-white">
              Our <span className="text-[#1CA7B8] transition-colors duration-500 group-hover:text-white">Mission</span>
            </h2>
            <div className="flex gap-2 mt-2 sm:mt-3">
              <span className="inline-block h-1 w-10 sm:w-12 rounded-full bg-[#1CA7B8] transition-colors duration-500 group-hover:bg-white" />
              <span className="inline-block h-1 w-4 sm:w-6 rounded-full bg-[#1CA7B8]/30 transition-colors duration-500 group-hover:bg-white/30" />
            </div>

            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-[black] font-sans leading-relaxed transition-colors duration-500 group-hover:text-white/90 text-justify">
              <p className="text-lg sm:text-lg md:text-xl">
                At Dukes Tech Solutions, our mission is to empower businesses with innovative, secure, 
                and scalable technology solutions that accelerate growth, improve operational efficiency, 
                and drive digital transformation. Through custom software development, AI-powered solutions, 
                cloud services, cybersecurity, web and mobile applications, and strategic IT consulting, 
                we deliver tailored solutions that solve real business challenges and create measurable value.
              </p>
              <p className="text-lg sm:text-lg md:text-xl">
                We are committed to building long-term partnerships through innovation, transparency, and 
                exceptional service. By combining cutting-edge technology with industry expertise, we help 
                our clients stay competitive, embrace change with confidence, and achieve sustainable success 
                in an increasingly digital world.
              </p>
            </div>
          </motion.div>

          {/* Right - Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-[#0E2A43]/10 ring-1 ring-[#0E2A43]/5 transition-all duration-500 group-hover:shadow-[#1CA7B8]/20 group-hover:ring-[#1CA7B8]/30">
              <div className="relative overflow-hidden">
                <img
                  src={MISSION_IMAGES[currentImageIndex]}
                  alt="Dukes Tech Services Mission"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[420px] object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A43]/20 to-transparent transition-opacity duration-500 group-hover:from-[#1CA7B8]/20" />
              </div>
              
              {/* Dots */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10 px-3 sm:px-4 py-2 rounded-full bg-[#0E2A43]/40 backdrop-blur-sm transition-all duration-500 group-hover:bg-[#1CA7B8]/40">
                {MISSION_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "w-6 sm:w-8 bg-[#1CA7B8] group-hover:bg-white"
                        : "w-2 sm:w-2.5 bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}