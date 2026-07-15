import { useInView } from "react-intersection-observer";
import { ArrowRight, CheckCircle } from "lucide-react";

import analysisImg from "../assets/analysis.png";
import developmentImg from "../assets/development.png";
import testingImg from "../assets/testing.png";
import deploymentImg from "../assets/deployment.png";

const STEPS = [
  {
    id: 1,
    title: "Analysis",
    description: "We analyze your business needs, goals, and challenges to create a tailored strategy that aligns with your vision.",
    image: analysisImg,
    color: "#1CA7B8",
    bgColor: "bg-[#1CA7B8]",
  },
  {
    id: 2,
    title: "Development",
    description: "Our expert team builds robust, scalable solutions using cutting-edge technologies and best practices.",
    image: developmentImg,
    color: "#0E2A43",
    bgColor: "bg-[#0E2A43]",
  },
  {
    id: 3,
    title: "Testing",
    description: "Rigorous quality assurance ensures your solution is bug-free, secure, and performs optimally across all platforms.",
    image: testingImg,
    color: "#1CA7B8",
    bgColor: "bg-[#1CA7B8]",
  },
  {
    id: 4,
    title: "Deployment",
    description: "Seamless deployment with ongoing support and maintenance to ensure your solution continues to deliver results.",
    image: deploymentImg,
    color: "#0E2A43",
    bgColor: "bg-[#0E2A43]",
  },
];

export default function Workflow() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="workflow" className="bg-white px-4 py-16 sm:px-6 md:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block rounded-full bg-[#1CA7B8]/10 px-4 sm:px-6 py-1.5 sm:py-2 text-[10px] sm:text-base font-bold uppercase tracking-[0.15em] text-[#1CA7B8] font-sans">
            Our Workflow
          </span>
          <h2 className="mt-3 sm:mt-4 font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E2A43] leading-tight">
            How We Bring Your Ideas to Life
          </h2>
          <div className="flex justify-center gap-2 mt-3 sm:mt-4">
            <span className="inline-block h-1 w-12 sm:w-16 rounded-full bg-[#1CA7B8]" />
            <span className="inline-block h-1 w-6 sm:w-8 rounded-full bg-[#1CA7B8]/30" />
          </div>
          <p className="mt-4 sm:mt-6 text-[#0E2A43]/70 max-w-2xl mx-auto font-sans text-sm sm:text-base lg:text-lg font-semibold leading-relaxed px-4">
            Our IT company employs a meticulous and streamlined approach to provide bespoke 
            solutions that perfectly align with clients' requirements.
          </p>
        </div>

        {/* Grid Cards */}
        <div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
        >
          {STEPS.map((step, index) => (
            <div
              key={step.id}
              className={`group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 border border-[#0E2A43]/5 flex flex-col ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Step Number */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                <div className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full ${step.bgColor} flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg`}>
                  {step.id}
                </div>
              </div>

              {/* Image */}
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden bg-sky-50 flex-shrink-0">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-contain p-3 sm:p-4 transition-transform duration-700 group-hover:scale-110 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                <h3 
                  className="font-sans text-lg sm:text-xl font-bold mb-1.5 sm:mb-2"
                  style={{ color: step.color }}
                >
                  {step.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#0E2A43]/70 leading-relaxed flex-1">
                  {step.description}
                </p>
              </div>

              {/* Bottom accent - Fixed */}
              <div className="h-1 w-full flex-shrink-0">
                <div 
                  className="h-full w-full transition-all duration-500 group-hover:h-1.5"
                  style={{ backgroundColor: step.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}