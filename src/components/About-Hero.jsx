// AboutHero.jsx - About Us Hero Section with Image Background
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import aboutHeroImg from '../assets/about-hero.png';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden min-h-[100vh] flex items-end">
      {/* Background Image - using img tag for better control */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={aboutHeroImg} 
          alt="About Dukes Tech Services"
          className="w-full h-full object-cover"
          style={{ 
            objectPosition: '50% 15%',
          }}
        />
      </div>

      {/* Gradient overlay at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A43]/80 via-[#0E2A43]/30 to-transparent" />

      {/* Dot motif */}
      <div className="absolute top-6 sm:top-10 left-6 sm:left-10 opacity-10 sm:opacity-15 z-10">
        <svg width="80" height="70" viewBox="0 0 120 100" fill="none" className="sm:w-[120px] sm:h-[100px]">
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

      <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 opacity-10 sm:opacity-15 z-10">
        <svg width="80" height="70" viewBox="0 0 120 100" fill="none" className="sm:w-[120px] sm:h-[100px]">
          {[10, 30, 50, 70, 90].map(x => (
            <circle key={x} cx={x} cy={10} r="2.5" fill="#0E2A43" />
          ))}
          {[20, 40, 60, 80].map(x => (
            <circle key={x} cx={x} cy={30} r="2" fill="#0E2A43" />
          ))}
          {[15, 35, 55, 75, 95].map(x => (
            <circle key={x} cx={x} cy={50} r="2.5" fill="#0E2A43" />
          ))}
        </svg>
      </div>

      {/* Content block - reduced width */}
      <div className="relative z-20 w-[100%] sm:w-[100%] md:w-[100%] lg:w-[70%] xl:w-[40%] pb-2 sm:pb-4 md:pb-6 lg:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[90%] sm:max-w-[85%] md:max-w-3xl lg:max-w-full bg-[#0E2A43]/70 backdrop-blur-sm rounded-r-2xl px-4 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 lg:px-12 lg:py-10"
        >
          {/* Heading */}
          <h1 className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
            Innovating Today. <br className="hidden sm:block" />
            <span className="text-[#1CA7B8]">Empowering Tomorrow.</span>
          </h1>

          {/* Description */}
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed sm:leading-loose">
            At Dukes Tech Services, we are helping businesses grow with innovative software, 
            AI-powered solutions, cybersecurity, cloud technologies, and digital transformation 
            services. We build secure, scalable, and future-ready solutions that drive measurable 
            business success.
          </p>

          {/* Button */}
          <div className="mt-4 sm:mt-5 md:mt-6">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#1CA7B8]/25 transition-all hover:scale-105 hover:shadow-[#1CA7B8]/40"
            >
              Get in Touch
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}