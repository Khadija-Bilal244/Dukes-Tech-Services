// CoreValues.jsx - Core Values Section
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  TrendingUp,
  Lightbulb,
  Shield,
  Award,
  Users,
  Heart,
  ArrowRight
} from "lucide-react";

const coreValues = [
  {
    id: 1,
    icon: TrendingUp,
    title: "Client Success",
    description: "We measure our success by the success of our clients. By understanding their unique goals and challenges, we deliver tailored solutions that create measurable value, foster long-term growth, and build lasting partnerships.",
    color: "from-[#1CA7B8] to-[#0E2A43]",
    bgColor: "bg-[#1CA7B8]/20",
    iconColor: "text-[#1CA7B8]",
    borderColor: "border-[#1CA7B8]/20",
    delay: 0
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Innovation",
    description: "Technology is constantly evolving, and so are we. We embrace creativity, continuous learning, and emerging technologies to develop forward-thinking solutions that help businesses stay ahead of the competition.",
    color: "from-[#1CA7B8] to-[#0E2A43]",
    bgColor: "bg-[#1CA7B8]/20",
    iconColor: "text-[#1CA7B8]",
    borderColor: "border-[#1CA7B8]/20",
    delay: 0.1
  },
  {
    id: 3,
    icon: Shield,
    title: "Integrity",
    description: "Honesty, transparency, and accountability are the foundation of everything we do. We build trust by maintaining open communication, delivering on our commitments, and always acting with professionalism and ethical responsibility.",
    color: "from-[#1CA7B8] to-[#0E2A43]",
    bgColor: "bg-[#1CA7B8]/20",
    iconColor: "text-[#1CA7B8]",
    borderColor: "border-[#1CA7B8]/20",
    delay: 0.2
  },
  {
    id: 4,
    icon: Award,
    title: "Excellence",
    description: "We are committed to delivering the highest standards of quality in every project. From strategy and design to development and support, we focus on precision, performance, and continuous improvement to exceed expectations.",
    color: "from-[#1CA7B8] to-[#0E2A43]",
    bgColor: "bg-[#1CA7B8]/20",
    iconColor: "text-[#1CA7B8]",
    borderColor: "border-[#1CA7B8]/20",
    delay: 0.3
  },
  {
    id: 5,
    icon: Users,
    title: "Collaboration",
    description: "Great ideas are built together. We work closely with our clients, partners, and team members to create innovative solutions through effective communication, teamwork, and shared success.",
    color: "from-[#1CA7B8] to-[#0E2A43]",
    bgColor: "bg-[#abdfe6]/50",
    iconColor: "text-[#1CA7B8]",
    borderColor: "border-[#1CA7B8]/20",
    delay: 0.4
  },
  {
    id: 6,
    icon: Heart,
    title: "Customer-Centric Approach",
    description: "Every decision we make begins with our clients' needs. We focus on understanding their vision, solving real business challenges, and delivering technology solutions that provide exceptional value and long-term success.",
    color: "from-[#1CA7B8] to-[#0E2A43]",
    bgColor: "bg-[#1CA7B8]/20",
    iconColor: "text-[#1CA7B8]",
    borderColor: "border-[#1CA7B8]/20",
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
          <span className="inline-block rounded-full bg-[#F2FAFB] px-4 py-1.5 text-base font-bold uppercase tracking-[0.15em] text-[#1CA7B8] font-sans border border-[#1CA7B8]">
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

        {/* Values Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: value.delay }}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#0E2A43]/5 hover:border-[#1CA7B8]/30 relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F2FAFB] to-[#1CA7B8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon - Teal Green */}
                <div className={`relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-xl ${value.bgColor} ${value.iconColor} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-gradient-to-br group-hover:from-[#1CA7B8] group-hover:to-[#0E2A43] group-hover:text-white group-hover:shadow-lg`}>
                  <Icon className="h-7 w-7" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 mt-4 font-sans text-2xl font-bold text-[#0E2A43] transition-colors duration-300 group-hover:text-[#1CA7B8]">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-3 font-sans text-lg text-black leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative bottom line - Teal Green to Navy */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}