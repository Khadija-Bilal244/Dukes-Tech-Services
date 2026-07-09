// Sectors.jsx
// Modern animated Sectors section
import { useInView } from "react-intersection-observer";
import { 
  Shirt, 
  GraduationCap, 
  Dumbbell, 
  Calculator, 
  Briefcase, 
  Sofa,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function Sectors() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectors = [
    {
      id: 1,
      icon: Shirt,
      title: "Clothing",
      description: "Fashion and apparel industry solutions for retail, manufacturing, and e-commerce.",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      iconBg: "bg-pink-100",
      textColor: "text-pink-600",
      borderColor: "border-pink-200",
      gradient: "from-pink-100 to-rose-100",
    },
    {
      id: 2,
      icon: GraduationCap,
      title: "Education",
      description: "Transforming learning with digital solutions for schools, colleges, and universities.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      gradient: "from-blue-100 to-cyan-100",
    },
    {
      id: 3,
      icon: Dumbbell,
      title: "Gym",
      description: "Fitness industry solutions including management software, booking systems, and more.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      textColor: "text-green-600",
      borderColor: "border-green-200",
      gradient: "from-green-100 to-emerald-100",
    },
    {
      id: 4,
      icon: Calculator,
      title: "Accounting Firm",
      description: "Streamlining financial operations with software solutions for accounting professionals.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
      gradient: "from-purple-100 to-indigo-100",
    },
    {
      id: 5,
      icon: Briefcase,
      title: "Consultancy Firm",
      description: "Empowering consultants with tools for client management, reporting, and analysis.",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
      gradient: "from-orange-100 to-amber-100",
    },
    {
      id: 6,
      icon: Sofa,
      title: "Furniture",
      description: "Innovative solutions for furniture manufacturing, retail, and interior design.",
      color: "from-teal-500 to-emerald-500",
      bgColor: "bg-teal-50",
      iconBg: "bg-teal-100",
      textColor: "text-teal-600",
      borderColor: "border-teal-200",
      gradient: "from-teal-100 to-emerald-100",
    },
  ];

  return (
    <section id="sectors" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#1CA7B8]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#0E2A43]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-[#F2FAFB] px-6 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#1CA7B8] font-sans border border-[#1CA7B8]/20">
            Industries We Serve
          </span>
          <h2 className="mt-4 font-sans text-3xl font-bold text-[#0E2A43] sm:text-4xl md:text-5xl">
            Our <span className="text-[#1CA7B8]">Sectors</span>
          </h2>
          <div className="flex justify-center gap-2 mt-4">
            <span className="inline-block h-1 w-16 rounded-full bg-[#1CA7B8]" />
            <span className="inline-block h-1 w-8 rounded-full bg-[#1CA7B8]/30" />
          </div>
          <p className="mt-6 text-[#0E2A43]/60 max-w-2xl mx-auto font-sans text-base leading-relaxed">
            We provide tailored technology solutions across diverse industries, 
            helping businesses thrive in the digital age.
          </p>
        </div>

        {/* Sectors Grid */}
        <div 
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.id}
                className={`group relative bg-white rounded-2xl border border-[#0E2A43]/10 p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Glow effect */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-20 transition-all duration-700 blur-2xl group-hover:scale-150`} />

                {/* Icon with animation */}
                <div className="relative">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${sector.iconBg} transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                    <Icon className={`h-8 w-8 ${sector.textColor} transition-all duration-500 group-hover:scale-110`} />
                  </div>
                  
                  {/* Floating sparkle icon */}
                  <Sparkles className={`absolute -top-2 -right-2 h-4 w-4 ${sector.textColor} opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-180`} />
                </div>

                {/* Content */}
                <div className="relative mt-4">
                  <h3 className={`font-sans text-xl font-bold ${sector.textColor} transition-colors duration-300`}>
                    {sector.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm text-[#0E2A43]/60 leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                {/* Animated border bottom on hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${sector.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}