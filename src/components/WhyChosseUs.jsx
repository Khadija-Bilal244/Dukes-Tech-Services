// WhyChooseUs.jsx
// ImpactSales style with Tailwind CSS and dot motifs
import { useInView } from "react-intersection-observer";
import r1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import r4 from "../assets/r4.png";
import DotMotif from "./DotMotif";

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      id: 1,
      number: "5+",
      label: "Years of Experience",
      icon: r1,
      description: "Delivering quality solutions since 2021",
    },
    {
      id: 2,
      number: "10+",
      label: "Happy Clients",
      icon: r2,
      description: "Satisfied businesses across industries",
    },
    {
      id: 3,
      number: "06",
      label: "Dedicated Employees",
      icon: r3,
      description: "Passionate team ready to serve",
    },
    {
      id: 4,
      number: "01",
      label: "Office Location",
      icon: r4,
      description: "Lahore, Pakistan",
    },
  ];

  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8" style={{ 
      background: 'radial-gradient(circle at top left, rgba(28, 167, 184, 0.15), transparent 25%), radial-gradient(circle at bottom right, rgba(14, 42, 67, 0.12), transparent 20%), linear-gradient(135deg, #0E2A43 0%, #1a3a5a 45%, #1CA7B8 100%)'
    }}>
      {/* Dot motifs */}
      <DotMotif className="absolute -left-8 top-8 h-40 w-40 opacity-20 md:h-56 md:w-56" />
      <DotMotif className="absolute -right-10 bottom-0 h-48 w-48 opacity-10 md:h-64 md:w-64" />

      {/* Background decorative glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-[#1CA7B8]/10 blur-[36px] opacity-70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full px-6 py-2 text-sm font-bold uppercase tracking-[0.15em] font-sans border" style={{
            color: '#e5fbff',
            borderColor: 'rgba(229, 251, 255, 0.24)',
            background: 'rgba(255, 255, 255, 0.05)'
          }}>
            Small Team, Big Impact
          </span>
          <h2 className="mt-4 font-sans text-3xl font-bold sm:text-4xl md:text-5xl text-white">
            Dukes Tech Services' <br />
            <span style={{ color: '#1CA7B8' }}>Commitment to Excellence</span>
          </h2>
          <div className="flex justify-center gap-2 mt-4">
            <span className="inline-block h-1 w-16 rounded-full" style={{ background: 'linear-gradient(90deg, rgba(28, 167, 184, 0.95), #0E2A43)' }} />
          </div>
          <p className="mt-6 max-w-2xl mx-auto font-sans text-lg leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            This highlights our expertise, experience, and quality of work, 
            demonstrating our commitment to delivering reliable, future-ready 
            technology solutions.
          </p>
        </div>

        {/* Stats Grid - 4 cards */}
        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`group relative rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:scale-[1.06] border ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                background: 'rgba(255, 255, 255, 0.06)',
                borderColor: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(16px)',
                cursor: 'pointer'
              }}
            >
              {/* Icon with image */}
              <div 
                className="w-[72px] h-[72px] mx-auto mb-5 rounded-full flex items-center justify-center transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-125" 
                style={{
                  background: 'linear-gradient(135deg, #1CA7B8 0%, #0E2A43 100%)',
                  boxShadow: '0 14px 30px rgba(28, 167, 184, 0.24)'
                }}
              >
                <img 
                  src={stat.icon} 
                  alt={stat.label} 
                  className="w-[70%] h-[60%] object-contain"
                />
              </div>

              {/* Number */}
              <div className="font-sans text-4xl sm:text-5xl font-extrabold text-white transition-colors duration-300 group-hover:text-[#1CA7B8]">
                {stat.number}
              </div>

              {/* Label */}
              <div className="mt-1 font-sans text-base font-semibold transition-colors duration-300" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                {stat.label}
              </div>

              {/* Description */}
              <div className="mt-2 font-sans text-sm" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                {stat.description}
              </div>

              {/* Decorative bottom line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-12 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:w-20" style={{
                background: 'linear-gradient(90deg, #1CA7B8, #0E2A43)'
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}