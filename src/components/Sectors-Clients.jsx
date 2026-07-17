// Sectors-Clients.jsx - Sectors & Clients Section
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Sofa, 
  Briefcase, 
  Calculator, 
  GraduationCap, 
  Utensils, 
  Footprints, 
  Shield, 
  Shirt,
  ExternalLink,
  Building2,
  Users
} from "lucide-react";

const sectorsData = [
  {
    id: 1,
    icon: Sofa,
    title: "Furniture",
    clients: [
      { name: "Artisan Lineage", website: "https://artisanlineage.com/" }
    ]
  },
  {
    id: 2,
    icon: Briefcase,
    title: "Consultancy",
    clients: [
      { name: "Dukes Advisors", website: "https://www.dukesadvisors.com/" }
    ]
  },
  {
    id: 3,
    icon: Calculator,
    title: "Accounting",
    clients: [
      { name: "Nexus Accountants", website: "https://www.nexusaccountants.co.uk/" },
      { name: "Sterling Wise", website: "https://sterlingwise.uk/" }
    ]
  },
  {
    id: 4,
    icon: GraduationCap,
    title: "Education",
    clients: [
      { name: "ISRRC", website: "#" },
      { name: "Sabiqoon School", website: "https://sabiqooninternational.com/" }
    ]
  },
  {
    id: 5,
    icon: Utensils,
    title: "Food",
    clients: [
      { name: "Naturelle Salt", website: "https://www.naturellesalt.com/" }
    ]
  },
  {
    id: 6,
    icon: Footprints,
    title: "Shoes",
    clients: [
      { name: "Trendlad Global", website: "https://www.trendlad.co/" }
    ]
  },
  {
    id: 7,
    icon: Shield,
    title: "Security",
    clients: [
      { name: "Korvex Security", website: "https://korvexsecurity.com/" }
    ]
  },
  {
    id: 8,
    icon: Shirt,
    title: "Clothing",
    clients: [
      { name: "Sherwani Studios", website: "https://sherwanistudios.com/" }
    ]
  }
];

export default function SectorsClients() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-[#c8f5fc] py-16 md:py-20 lg:py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-14">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-base font-bold uppercase tracking-[0.15em] text-[#1CA7B8] font-sans border border-[#1CA7B8]/70">
            Our Clients
          </span>
          <h2 className="mt-4 font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E2A43]">
            Sectors & <span className="text-[#1CA7B8]">Clients</span>
          </h2>
          <div className="flex justify-center gap-2 mt-3">
            <span className="inline-block h-1 w-12 rounded-full bg-[#1CA7B8]" />
            <span className="inline-block h-1 w-6 rounded-full bg-[#1CA7B8]/30" />
          </div>
          <p className="mt-4 text-black max-w-2xl mx-auto font-sans text-base sm:text-lg leading-relaxed">
            We partner with businesses across diverse industries, delivering innovative technology 
            solutions that drive growth and digital transformation.
          </p>
        </div>

        {/* Sectors Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {sectorsData.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#0E2A43]/5 hover:border-[#1CA7B8]/30 relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F2FAFB] to-[#1CA7B8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-[#abdfe6]/50 text-[#1CA7B8] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-gradient-to-br group-hover:from-[#1CA7B8] group-hover:to-[#0E2A43] group-hover:text-white group-hover:shadow-lg">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Sector Title */}
                <h3 className="relative z-10 mt-5 font-sans text-2xl font-bold text-[#0E2A43] transition-colors duration-300 group-hover:text-[#1CA7B8]">
                  {sector.title}
                </h3>

                {/* Clients */}
                <div className="relative z-10 mt-4 space-y-3">
                  {sector.clients.map((client, idx) => (
                    <div key={idx} className="flex items-center justify-between group/client">
                      <div className="flex items-center gap-2.5">
                        <Building2 className="h-4 w-4 text-[#1CA7B8]" />
                        <span className="font-sans text-lg text-black">
                          {client.name}
                        </span>
                      </div>
                      {client.website !== "#" && (
                        <a
                          href={client.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1CA7B8] hover:text-[#0E2A43] transition-colors duration-300"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                {/* Client Count Badge */}
                <div className="relative z-10 mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#F2FAFB] px-4 py-1.5 text-base font-semibold text-[#1CA7B8]">
                  <Users className="h-3.5 w-3.5" />
                  {sector.clients.length} Client{sector.clients.length > 1 ? 's' : ''}
                </div>

                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-white px-6 py-4 sm:px-8 sm:py-5 border border-[#1CA7B8]/10 shadow-lg">
            <span className="font-sans text-base sm:text-base font-semibold text-[#0E2A43]">
              Want to become our next success story?
            </span>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-5 sm:px-6 py-2 sm:py-2.5 text-base font-semibold text-white shadow-lg shadow-[#1CA7B8]/25 hover:scale-105 transition-transform"
            >
              Let's Talk
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}