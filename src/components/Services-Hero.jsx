// ServicesHero.jsx - Services Page Hero Section
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import servicesHeroImg from '../assets/services-hero1.png';

export default function ServicesHero() {
  return (
    <section className="mt-14 mb-2 relative overflow-hidden min-h-[100vh] flex items-end pb-16 sm:pb-20 md:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={servicesHeroImg} 
          alt="Dukes Tech Services - Digital Transformation"
          className="w-full h-full object-cover"
          style={{ 
            objectPosition: '20% 20%',
          }}
        />
      </div>

      {/* Gradient overlay - left side only */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E2A43]/85 via-[#0E2A43]/60 to-transparent" />

      {/* Dot motifs */}
      <div className="absolute top-10 right-10 opacity-10 z-10">
        <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
          {[10, 30, 50, 70, 90].map(x => (
            <circle key={x} cx={x} cy={10} r="2.5" fill="#1CA7B8" />
          ))}
          {[20, 40, 60, 80].map(x => (
            <circle key={x} cx={x} cy={30} r="2" fill="#1CA7B8" />
          ))}
          {[15, 35, 55, 75, 95].map(x => (
            <circle key={x} cx={x} cy={50} r="2.5" fill="#1CA7B8" />
          ))}
        </svg>
      </div>

      {/* Content - True leftmost aligned */}
      <div className="relative z-20 w-full px-0">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full sm:w-[85%] md:w-[75%] lg:w-[60%] xl:w-[45%] bg-[#0E2A43]/30 backdrop-blur-sm rounded-r-2xl px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12"
        >
      

          {/* Heading - Smaller */}
          <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            <span className="text-[#1CA7B8]">Inspiring</span> Businesses
            <br />
            <span className="text-[#1CA7B8]">Through Technology</span> Excellence
          </h1>

          {/* Description */}
          <p className="mt-3 sm:mt-4 text-base sm:text-base md:text-base lg:text-lg text-white/90 leading-relaxed">
            Every business has unique goals, and every challenge deserves an innovative solution. 
            At Dukes Tech Solutions, we combine technology, creativity, and industry expertise 
            to deliver custom software, intelligent automation, digital marketing, and IT solutions 
            that help businesses innovate, scale, and succeed in an ever-changing digital landscape.
          </p>

          {/* CTA Button */}
          <div className="mt-4 sm:mt-6">
            <a
              href="#services-list"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-base sm:text-sm md:text-base font-semibold text-white shadow-lg shadow-[#1CA7B8]/25 transition-all hover:scale-105 hover:shadow-[#1CA7B8]/40"
            >
              Explore Our Services
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}