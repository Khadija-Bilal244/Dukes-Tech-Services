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
    <section id="workflow" className="bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-[#F2FAFB] px-6 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#1CA7B8] font-sans">
            Our Workflow
          </span>
          <h2 className="mt-4 font-sans text-3xl font-bold text-[#0E2A43] sm:text-4xl md:text-5xl">
            How We Bring Your Ideas to Life
          </h2>
          <div className="flex justify-center gap-2 mt-4">
            <span className="inline-block h-1 w-16 rounded-full bg-[#1CA7B8]" />
            <span className="inline-block h-1 w-8 rounded-full bg-[#1CA7B8]/30" />
          </div>
          <p className="mt-6 text-[#0E2A43]/70 max-w-2xl mx-auto font-sans text-base leading-relaxed">
            Our IT company employs a meticulous and streamlined approach to provide bespoke 
            solutions that perfectly align with clients' requirements.
          </p>
        </div>

        {/* Grid Cards */}
        <div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STEPS.map((step, index) => (
            <div
              key={step.id}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-[#0E2A43]/5 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Step Number */}
              <div className="absolute top-4 right-4 z-10">
                <div className={`h-10 w-10 rounded-full ${step.bgColor} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                  {step.id}
                </div>
              </div>

              {/* Image - with very light grey background */}
              <div className="relative h-48 overflow-hidden bg-sky-50">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-contain p-4transition-transform duration-700 group-hover:scale-110 mix-blend-multiply"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 
                  className="font-sans text-xl font-bold mb-2"
                  style={{ color: step.color }}
                >
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-[#0E2A43]/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div 
                className="h-1 w-full transition-all duration-500 group-hover:h-1.5"
                style={{ backgroundColor: step.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}