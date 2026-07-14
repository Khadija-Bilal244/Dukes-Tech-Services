// About.jsx - With Animated Glow Effect
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* About Content Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center sm:text-left"
          >
            {/* Heading */}
            <h2 className="mt-3 sm:mt-4 font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-[#0E2A43]">
              About Dukes Tech <span className="text-[#1CA7B8]">Services</span>
            </h2>

            {/* Decorative Line */}
            <div className="flex justify-center sm:justify-start gap-2 mt-2 sm:mt-3">
              <span className="inline-block h-1 w-10 sm:w-12 rounded-full bg-[#1CA7B8]" />
              <span className="inline-block h-1 w-4 sm:w-6 rounded-full bg-[#1CA7B8]/30" />
            </div>

            {/* Glowing Div - With Animated Glow */}
            <motion.div
              className="mt-6 sm:mt-8 p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-transparent transition-all duration-500 cursor-default relative overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{
                borderColor: isHovered ? 'rgba(28, 167, 184, 0.4)' : 'transparent',
                backgroundColor: isHovered ? 'rgba(242, 250, 251, 0.5)' : 'transparent',
                boxShadow: isHovered ? '0 0 40px rgba(28, 167, 184, 0.15)' : 'none',
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Animated glow background */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                animate={{
                  background: isHovered 
                    ? 'radial-gradient(circle at 50% 50%, rgba(28,167,184,0.08), transparent 70%)'
                    : 'transparent',
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Animated border glow */}
              <motion.div
                className="absolute -inset-[2px] rounded-2xl pointer-events-none"
                animate={{
                  opacity: isHovered ? 1 : 0,
                  boxShadow: isHovered 
                    ? 'inset 0 0 30px rgba(28,167,184,0.3), 0 0 30px rgba(28,167,184,0.3)'
                    : 'none',
                }}
                transition={{ duration: 0.4 }}
              />

              <div className="relative z-10 space-y-3 sm:space-y-4 text-[black] font-sans text-justify leading-relaxed" >
                <p className="text-base sm:text-base md:text-lg transition-colors duration-300 group-hover:text-[#0E2A43]">
                  At Dukes Tech Services, we empower businesses with innovative, secure, and scalable 
                  technology solutions that drive growth and digital transformation. Our expertise spans 
                  custom software development, AI solutions, web and mobile applications, cloud services 
                  and IT consulting, helping organizations improve efficiency, enhance security, and 
                  achieve measurable results.
                </p>
                <p className="text-base sm:text-base md:text-lg transition-colors duration-300 group-hover:text-[#0E2A43]">
                  Whether you're a startup, growing business, or enterprise, we deliver tailored solutions 
                  aligned with your goals. From strategy and design to development, deployment, and 
                  ongoing support, we ensure every project is built for performance, reliability, and 
                  future scalability.
                </p>
                <p className="text-base sm:text-base md:text-lg transition-colors duration-300 group-hover:text-[#0E2A43]">
                  Driven by innovation, quality, and transparency, Dukes Tech Services is committed to 
                  building long-term partnerships and delivering technology that helps businesses grow 
                  smarter, operate more efficiently, and stay ahead in today's rapidly evolving digital 
                  landscape.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;