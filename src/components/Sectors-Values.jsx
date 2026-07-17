// CoreValues.jsx - Core Values Section
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  TrendingUp,
  Lightbulb,
  Shield,
  Award,
  Users,
  Heart
} from "lucide-react";

const coreValues = [
  {
    id: 1,
    icon: TrendingUp,
    title: "Client Success",
    description: "We measure our success by the success of our clients — tailored solutions that create measurable value and build lasting partnerships.",
    dark: true,
    delay: 0
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace creativity and emerging technologies to build forward-thinking solutions that keep businesses ahead.",
    dark: true,
    delay: 0.1
  },
  {
    id: 3,
    icon: Shield,
    title: "Integrity",
    description: "Honesty, transparency, and accountability are the foundation of everything we do.",
    dark: true,
    delay: 0.2
  },
  {
    id: 4,
    icon: Award,
    title: "Excellence",
    description: "Precision, performance, and continuous improvement in every project we ship.",
    dark: true,
    delay: 0.3
  },
  {
    id: 5,
    icon: Users,
    title: "Collaboration",
    description: "Great ideas are built together — with clients, partners, and our own team, every step of the way.",
    dark: true,
    delay: 0.4
  },
  {
    id: 6,
    icon: Heart,
    title: "Customer-Centric Approach",
    description: "Every decision starts with our clients' needs — solving real challenges with lasting value.",
    dark: true,
    delay: 0.5
  }
];

export default function CoreValues() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-[#F2FAFB] py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-14">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-base font-bold uppercase tracking-[0.15em] text-[#1CA7B8] font-sans border border-[#1CA7B8]">
            Our Core Values
          </span>
          <h2 className="mt-4 font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E2A43]">
            Core Values That <span className="text-[#1CA7B8]">Define Who We Are</span>
          </h2>
          <div className="flex justify-center gap-2 mt-3">
            <span className="inline-block h-1 w-12 rounded-full bg-[#1CA7B8]" />
            <span className="inline-block h-1 w-6 rounded-full bg-[#1CA7B8]/30" />
          </div>
          <p className="mt-4 text-black max-w-2xl mx-auto font-sans text-base sm:text-lg lg:text-xl leading-relaxed">
            At Dukes Tech Solutions, our core values shape every project we deliver and every relationship we build. 
            They reflect our commitment to innovation, integrity, collaboration, and delivering technology solutions 
            that create meaningful business impact.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {coreValues.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: value.delay, duration: 0.5 }}
                className={`group relative overflow-hidden rounded-3xl p-6 sm:p-7 min-h-[280px] flex flex-col transition-all duration-500 hover:-translate-y-1.5 ${
                  value.dark
                    ? "bg-[#0E2A43] text-white shadow-xl shadow-[#0E2A43]/20 hover:shadow-2xl hover:shadow-[#1CA7B8]/30"
                    : "bg-white text-[#0E2A43] shadow-lg hover:shadow-2xl border border-[#0E2A43]/5 hover:border-[#1CA7B8]/40"
                }`}
              >
                {/* Big watermark icon */}
                <Icon
                  className={`absolute -right-6 -bottom-6 h-32 w-32 sm:h-40 sm:w-40 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110 ${
                    value.dark ? "text-white/5" : "text-[#1CA7B8]/[0.07]"
                  }`}
                  strokeWidth={1.2}
                />

                {/* Diagonal accent for dark cards */}
                {value.dark && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#1CA7B8] opacity-20 blur-2xl rounded-full" />
                )}

                {/* Icon badge - Reduced margin bottom */}
                <div
                  className={`relative z-10 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 ${
                    value.dark
                      ? "bg-[#1CA7B8] text-white"
                      : "bg-[#0E2A43] text-white"
                  }`}
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>

                {/* Content - Minimal gap */}
                <div className="relative z-10 mt-6 sm:mt-8 flex-1 flex flex-col">
                  <h3
                    className={`font-sans font-bold leading-tight text-xl sm:text-2xl ${
                      value.dark ? "text-white" : "text-[#0E2A43]"
                    } group-hover:text-[#1CA7B8] transition-colors duration-300`}
                  >
                    {value.title}
                  </h3>
                  <p
                    className={`mt-3 font-sans leading-relaxed text-lg ${
                      value.dark ? "text-white/80" : "text-black/60"
                    }`}
                  >
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}