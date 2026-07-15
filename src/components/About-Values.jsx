// About-Values.jsx - With Numbered Badges
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Handshake, Award, MessageCircle } from 'lucide-react';

export default function AboutValues() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Rocket,
      number: "01",
      title: "Ship & Iterate",
      description: "We move swiftly, refining our approach with every step to maintain a leading edge."
    },
    {
      icon: Handshake,
      number: "02",
      title: "Trusted Pair of Hands",
      description: "Dependable and steadfast, we are always there when it matters most."
    },
    {
      icon: Award,
      number: "03",
      title: "Overdeliver on the Promise",
      description: "Exceeding expectations is our standard, going beyond what's assured."
    },
    {
      icon: MessageCircle,
      number: "04",
      title: "Clear is Kind",
      description: "Transparent, honest communication keeps everyone on the same page."
    }
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
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
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <span className="inline-block rounded-full bg-[#F2FAFB] px-3 sm:px-4 py-2 text-[12px] sm:text-base font-bold uppercase tracking-[0.1em] text-[#1CA7B8] font-sans border border-[#1CA7B8]/20">
              Our Values
            </span>
            <h2 className="mt-4 font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E2A43]">
              We Believe in <span className="text-[#1CA7B8]">Providing Values.</span>
            </h2>
            <div className="flex justify-center gap-2 mt-3">
              <span className="inline-block h-1 w-12 rounded-full bg-[#1CA7B8]" />
              <span className="inline-block h-1 w-6 rounded-full bg-[#1CA7B8]/30" />
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#0E2A43]/5 hover:border-[#1CA7B8]/30 relative overflow-hidden"
                >
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 text-4xl font-bold text-[#1CA7B8]/40 group-hover:text-[#1CA7B8]/60 transition-colors duration-500">
                    {value.number}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-[#1CA7B8]/5 to-[#0E2A43]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1CA7B8] to-[#0E2A43] text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="relative z-10 mt-5">
                    <h3 className="font-sans text-xl font-bold text-[#0E2A43] transition-colors duration-300 group-hover:text-[#1CA7B8]">
                      {value.title}
                    </h3>
                    <p className="mt-3 font-sans text-base text-black/80 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}