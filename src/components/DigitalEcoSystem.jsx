import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Layers, 
  TrendingUp, 
  Database, 
  ArrowRight,
  CheckCircle,
  Globe,
  PenTool,
  Search,
  Users,
  ShoppingCart,
  BarChart3,
  RefreshCw,
  Zap,
  Link
} from "lucide-react";

export default function DigitalEcosystem() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const steps = [
    {
      number: "1",
      icon: PenTool,
      title: "Build",
      subtitle: "Identity & Platforms",
      description: "Web, Design, Canva",
      color: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
      iconColor: "text-blue-400",
      bgColor: "bg-blue-500/10",
      features: [
        "Logo & Brand Identity",
        "Web Development",
        "UI/UX Design",
        "Canva Templates"
      ]
    },
    {
      number: "2",
      icon: TrendingUp,
      title: "Market",
      subtitle: "Reach & Engagement",
      description: "SEO, Ads, Social, Video",
      color: "from-amber-500/20 to-orange-500/20",
      border: "border-amber-500/30",
      iconColor: "text-amber-400",
      bgColor: "bg-amber-500/10",
      features: [
        "SEO Optimization",
        "Paid Advertising",
        "Social Media Marketing",
        "Video Content"
      ]
    },
    {
      number: "3",
      icon: Database,
      title: "Operate",
      subtitle: "The Engine",
      description: "Proprietary POS System",
      color: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/30",
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      features: [
        "POS System",
        "Inventory Management",
        "Real-Time Analytics",
        "Operational Scaling"
      ]
    }
  ];

  // Flow arrows between steps
  const flowArrows = [
    { from: 0, to: 1, label: "Drive Growth" },
    { from: 1, to: 2, label: "Scale Operations" },
    { from: 2, to: 0, label: "Inform & Evolve" }
  ];

  return (
    <section id="ecosystem" className="bg-[#0a1628] py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-[#1CA7B8]/10 px-4 py-1.5 text-xl md:text-lg font-bold uppercase tracking-[0.15em] text-[#1CA7B8] border border-[#1CA7B8]/30">
              Our Process
            </span>
            <h2 className="mt-4 font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              The Complete <span className="text-[#1CA7B8]">Digital Ecosystem</span>
            </h2>
            <div className="flex justify-center gap-2 mt-3">
              <span className="inline-block h-1 w-12 rounded-full bg-[#1CA7B8]" />
              <span className="inline-block h-1 w-6 rounded-full bg-[#1CA7B8]/30" />
            </div>
            <p className="mt-4 text-white/90 max-w-3xl mx-auto font-sans text-lg sm:text-lg leading-relaxed">
              A unified partnership from the first design prototype to your 
              ten-thousandth POS transaction.
            </p>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div ref={ref} className="relative">
          {/* Desktop: 3 columns, Mobile: stacked */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className={`relative group ${isEven ? 'md:mt-0' : 'md:mt-8'}`}
                >
                  {/* Step Card */}
                  <div className={`relative bg-[#0e1f3a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border ${step.border} 
                    shadow-lg hover:shadow-2xl hover:shadow-[#1CA7B8]/10 transition-all duration-500 
                    hover:-translate-y-2 hover:border-[#1CA7B8]/50`}
                  >
                    {/* Number Badge */}
                    <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${step.color} 
                        border ${step.border} flex items-center justify-center text-xl sm:text-2xl font-bold 
                        text-white shadow-lg`}>
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center 
                      rounded-xl ${step.bgColor} ${step.iconColor} mb-4 transition-all duration-300 
                      group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#1CA7B8]/20`}>
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>

                    {/* Title */}
                    <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white">
                      {step.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <h4 className="font-sans text-lg sm:text-xl font-semibold text-[#1CA7B8] mt-1">
                      {step.subtitle}
                    </h4>
                    
                    {/* Description */}
                    <p className="font-sans text-base sm:text-lg text-white/70 mt-1">
                      {step.description}
                    </p>

                    {/* Divider */}
                    <div className={`w-full h-px bg-gradient-to-r ${step.color} my-4`} />

                    {/* Features List */}
                    <ul className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.15 + idx * 0.05 }}
                          className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300 group/item"
                        >
                          <CheckCircle className={`h-4 w-4 ${step.iconColor} flex-shrink-0 
                            transition-all duration-300 group-hover/item:scale-110`} />
                          <span className="font-sans text-sm sm:text-base">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow between steps - Desktop only */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-[#0e1f3a] border border-[#1CA7B8]/30 
                          flex items-center justify-center text-[#1CA7B8] shadow-lg">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                        <span className="text-[12px] text-white/50 mt-1 font-sans tracking-wider">
                          {flowArrows[index].label}
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Description - The Loop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 sm:mt-20 max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Ambient glow */}
            <div className="absolute -inset-8 bg-[#1CA7B8]/10 blur-3xl rounded-full pointer-events-none" />

            {/* Gradient-border shell */}
            <div className="relative rounded-[28px] p-px bg-gradient-to-br from-[#1CA7B8]/40 via-white/10 to-transparent">
              <div className="relative rounded-[27px] bg-[#0e1f3a] p-8 sm:p-10 overflow-hidden">
                
                {/* Corner glow accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#1CA7B8]/10 blur-3xl rounded-full" />

                {/* Loop nodes with traveling pulse */}
                <div className="relative flex items-center justify-between max-w-md mx-auto mb-10">
                  <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-blue-400/40 via-amber-400/40 to-emerald-400/40" />
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#1CA7B8] shadow-[0_0_8px_2px_rgba(28,167,184,0.7)]"
                    animate={{ left: ["4%", "94%", "4%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {[
                    { Icon: PenTool, color: "text-blue-400", ring: "ring-blue-400/40", bg: "bg-blue-500/10" },
                    { Icon: TrendingUp, color: "text-amber-400", ring: "ring-amber-400/40", bg: "bg-amber-500/10" },
                    { Icon: Database, color: "text-emerald-400", ring: "ring-emerald-400/40", bg: "bg-emerald-500/10" },
                  ].map(({ Icon, color, ring, bg }, i) => (
                    <div key={i} className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full ${bg} ${color} ring-1 ${ring}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  ))}
                </div>

                {/* Copy */}
                <div className="text-center">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1CA7B8]/70">
                    The Feedback Loop
                  </span>
                  <p className="mt-3 font-sans text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
                    As your brand reach grows <span className="text-amber-400 font-semibold">(Market)</span>, operations scale seamlessly <span className="text-emerald-400 font-semibold">(Operate)</span>, informing new product and web requirements <span className="text-blue-400 font-semibold">(Build)</span>.
                  </p>
                </div>

                {/* Capability strip */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center divide-x divide-white/10">
                  <div className="flex items-center gap-2 px-5 py-1 first:pl-0">
                    <RefreshCw className="h-4 w-4 text-[#1CA7B8]" />
                    <span className="text-sm text-white/60">Continuous Evolution</span>
                  </div>
                  <div className="flex items-center gap-2 px-5 py-1">
                    <Zap className="h-4 w-4 text-[#1CA7B8]" />
                    <span className="text-sm text-white/60">Scalable Growth</span>
                  </div>
                  <div className="flex items-center gap-2 px-5 py-1 last:pr-0">
                    <Link className="h-4 w-4 text-[#1CA7B8]" />
                    <span className="text-sm text-white/60">Unified Partnership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 rounded-3xl bg-gradient-to-r from-[#1CA7B8]/20 to-[#0E2A43]/20 px-6 sm:px-8 md:px-10 py-4 sm:py-6 border border-[#1CA7B8]/40 transition-colors duration-300 hover:shadow-xl hover:shadow-[#1CA7B8]/20 hover:border-[#1CA7B8]/50">
            <span className="font-sans text-base sm:text-lg md:text-xl font-semibold text-white">
              Ready to build your complete digital ecosystem?
            </span>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#1CA7B8]/40 hover:scale-105 transition-transform"
            >
              Get Started
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}