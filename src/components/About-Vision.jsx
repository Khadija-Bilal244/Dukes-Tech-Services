// Vision.jsx - Dukes Tech Services Vision Section
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Globe, Zap, Target, Shield, Cpu, Cloud } from 'lucide-react';

export default function Vision() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const visionCards = [
    {
      icon: Globe,
      title: "Global Impact",
      description: "Empowering businesses worldwide with innovative technology solutions that transcend borders and drive global growth."
    },
    {
      icon: Zap,
      title: "Intelligent Automation",
      description: "Leveraging AI and automation to streamline operations, enhance efficiency, and accelerate business transformation."
    },
    {
      icon: Target,
      title: "Future-Ready Solutions",
      description: "Building scalable, adaptive solutions designed to meet tomorrow's challenges and evolving business needs."
    }
  ];

  return (
    <section className="relative overflow-hidden bg-[#F2FAFB] py-16 md:py-20 lg:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#1CA7B8]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#0E2A43]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="flex flex-col items-center">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
          >
            <h2 className="mt-4 font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E2A43]">
              Our <span className="text-[#1CA7B8]">Vision</span>
            </h2>
            <div className="flex justify-center gap-2 mt-3">
              <span className="inline-block h-1 w-12 rounded-full bg-[#1CA7B8]" />
              <span className="inline-block h-1 w-6 rounded-full bg-[#1CA7B8]/30" />
            </div>
            
            {/* Vision paragraph with quotation marks */}
            <div className="relative mt-6">
              {/* Opening quotation mark */}
              <span className="absolute -top-2 -left-4 sm:-left-6 text-5xl sm:text-7xl text-[#1CA7B8] font-serif">"</span>
              
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 font-sans leading-relaxed text-justify px-6 sm:px-10">
                Our vision is to empower businesses worldwide through innovative technology, 
                intelligent automation, and secure digital solutions. We strive to become a 
                trusted global technology partner, helping organizations accelerate growth, 
                embrace digital transformation, and achieve lasting success with scalable, 
                future-ready solutions built for tomorrow's challenges.
              </p>
              
              {/* Closing quotation mark */}
              <span className="absolute -bottom-2 -right-4 sm:-right-6 text-5xl sm:text-7xl text-[#1CA7B8] font-serif">"</span>
            </div>
          </motion.div>

          {/* Vision Cards - 3 in a row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
            {visionCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#0E2A43]/5 hover:border-[#1CA7B8]/30 relative overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1CA7B8]/5 to-[#0E2A43]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1CA7B8] to-[#0E2A43] text-white shadow-lg shadow-[#1CA7B8]/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-5">
                    <h3 className="font-sans text-xl font-bold text-[#0E2A43] transition-colors duration-300 group-hover:text-[#1CA7B8]">
                      {card.title}
                    </h3>
                    <p className="mt-3 font-sans text-base text-black leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Decorative bottom line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-12 md:mt-16"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-semibold text-white shadow-lg shadow-[#1CA7B8]/25 transition-all hover:scale-105 hover:shadow-[#1CA7B8]/40"
            >
              Join Our Journey
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}