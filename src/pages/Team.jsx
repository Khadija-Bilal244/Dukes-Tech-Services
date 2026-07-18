// Team.jsx - With SEO Helmet for Pages Folder
import { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { useInView } from "react-intersection-observer";

// Import team images - CORRECTED PATHS
import imranShahid from "../assets/imranshahid.jpeg";
import arham from "../assets/arham.jpeg";
import team2 from "../assets/2.png";
import team7 from "../assets/7.png";
import CodeOfConduct from "../components/Sectors-CodeOfConduct"
export default function Team() {
  const [hoveredId, setHoveredId] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Team Schema for SEO
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Our Team - Dukes Tech Services",
    "description": "Meet the expert team at Dukes Tech Services - IT professionals, developers, designers, and marketing specialists driving digital innovation.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Dukes Tech Services",
      "description": "Leading IT solutions provider offering Web Development, Graphic Design, Digital Marketing, and IT Consulting.",
      "member": [
        {
          "@type": "Person",
          "name": "Imran Shahid",
          "jobTitle": "Founder / CEO",
          "worksFor": {
            "@type": "Organization",
            "name": "Dukes Tech Services"
          }
        },
        {
          "@type": "Person",
          "name": "Usman Shahid",
          "jobTitle": "Finance",
          "worksFor": {
            "@type": "Organization",
            "name": "Dukes Tech Services"
          }
        },
        {
          "@type": "Person",
          "name": "Danial Waheed",
          "jobTitle": "Operational",
          "worksFor": {
            "@type": "Organization",
            "name": "Dukes Tech Services"
          }
        },
        {
          "@type": "Person",
          "name": "Aamir Khan",
          "jobTitle": "Head of Graphic",
          "worksFor": {
            "@type": "Organization",
            "name": "Dukes Tech Services"
          }
        },
        {
          "@type": "Person",
          "name": "Arham Atif",
          "jobTitle": "Head of Marketing & Sales",
          "worksFor": {
            "@type": "Organization",
            "name": "Dukes Tech Services"
          }
        },
        {
          "@type": "Person",
          "name": "Azan Khan",
          "jobTitle": "AI & ML Engineer",
          "worksFor": {
            "@type": "Organization",
            "name": "Dukes Tech Services"
          }
        },
        {
          "@type": "Person",
          "name": "Muqaddas Zeeshan",
          "jobTitle": "Digital Marketing Consultant",
          "worksFor": {
            "@type": "Organization",
            "name": "Dukes Tech Services"
          }
        },
        {
          "@type": "Person",
          "name": "Adnan Ayub",
          "jobTitle": "Digital Marketing Consultant",
          "worksFor": {
            "@type": "Organization",
            "name": "Dukes Tech Services"
          }
        },
        {
          "@type": "Person",
          "name": "Khadija Bilal",
          "jobTitle": "Associate Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Dukes Tech Services"
          }
        },
        {
          "@type": "Person",
          "name": "Zainab Waris",
          "jobTitle": "Graphic Designer / Commercial Analyst",
          "worksFor": {
            "@type": "Organization",
            "name": "Dukes Tech Services"
          }
        },
        {
          "@type": "Person",
          "name": "Ayesha Usman",
          "jobTitle": "Graphic Designer / Commercial Analyst",
          "worksFor": {
            "@type": "Organization",
            "name": "Dukes Tech Services"
          }
        },
        {
          "@type": "Person",
          "name": "Zara Khurram",
          "jobTitle": "Digital Marketing Consultant",
          "worksFor": {
            "@type": "Organization",
            "name": "Dukes Tech Services"
          }
        },
        {
          "@type": "Person",
          "name": "Manahil Khurram",
          "jobTitle": "Digital Marketing Consultant",
          "worksFor": {
            "@type": "Organization",
            "name": "Dukes Tech Services"
          }
        },
        {
          "@type": "Person",
          "name": "Fatima Raza",
          "jobTitle": "Digital Marketing Consultant",
          "worksFor": {
            "@type": "Organization",
            "name": "Dukes Tech Services"
          }
        }
      ]
    }
  };

  // Group members by category with dynamic grid columns
  const categories = [
    {
      title: "Senior Management",
      description: "Our visionary leaders driving strategic growth",
      cols: 5,
      members: [
        { id: 1, img: imranShahid, name: "Imran Shahid", role: "Founder / CEO" },
        { id: 2, img: team2, name: "Usman Shahid", role: "Finance" },
        { id: 3, img: team2, name: "Danial Waheed", role: "Operational" },
        { id: 4, img: team2, name: "Aamir Khan", role: "Head of Graphic" },
        { id: 5, img: arham, name: "Arham Atif", role: "Head of Marketing & Sales" }
      ]
    },
    {
      title: "Technical & Marketing",
      description: "Innovators and strategists driving digital excellence",
      cols: 4,
      members: [
        { id: 6, img: team2, name: "Azan Khan", role: "AI & ML Engineer" },
        { id: 7, img: team7, name: "Khadija Bilal", role: "Associate Developer" },
        { id: 8, img: team2, name: "Adnan Ayub", role: "Digital Marketing Consultant" },
        { id: 9, img: team7, name: "Muqaddas Zeeshan", role: "Digital Marketing Consultant" },
      ]
    },
    {
      title: "Design & Marketing",
      description: "Creative minds shaping visual and digital experiences",
      cols: 5,
      members: [
        { id: 10, img: team7, name: "Zainab Waris", role: "Graphic Designer / Commercial Analyst" },
        { id: 11, img: team7, name: "Ayesha Usman", role: "Graphic Designer / Commercial Analyst" },
        { id: 12, img: team7, name: "Zara Khurram", role: "Digital Marketing Consultant" },
        { id: 13, img: team7, name: "Manahil Khurram", role: "Digital Marketing Consultant" },
        { id: 14, img: team7, name: "Fatima Raza", role: "Digital Marketing Consultant" },
      ]
    }
  ];

  // Helper function to get grid classes based on column count
  const getGridClasses = (cols) => {
    if (cols === 5) {
      return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5";
    } else if (cols === 4) {
      return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4";
    }
    return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4";
  };

  return (
    <>
      {/* SEO Helmet */}
      <Helmet>
        <title>Our Team - Dukes Tech Services | IT Experts & Digital Professionals</title>
        <meta name="description" content="Meet the expert team at Dukes Tech Services - including web developers, designers, digital marketers, and IT consultants driving innovation and digital transformation for businesses." />
        <meta name="keywords" content="Dukes Tech Services team, IT experts, web developers, graphic designers, digital marketers, SEO specialists, software developers, Lahore tech company" />
        <link rel="canonical" href="https://www.dukestechservices.com/team" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Our Team - Dukes Tech Services | IT Experts & Digital Professionals" />
        <meta property="og:description" content="Meet the expert team at Dukes Tech Services - driving innovation and digital transformation for businesses worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dukestechservices.com/team" />
        <meta property="og:image" content="https://www.dukestechservices.com/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Team - Dukes Tech Services" />
        <meta name="twitter:description" content="Meet the expert team at Dukes Tech Services - IT professionals driving digital innovation." />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(teamSchema)}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="mt-14 relative bg-[#0E2A43] overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-24 bg-[#1CA7B8]" style={{ clipPath: "polygon(30% 0, 100% 0, 70% 100%, 0 100%)" }} />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1CA7B8]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-[#1CA7B8]/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16 relative z-10">
          <p className="font-mono text-base uppercase tracking-widest text-white mb-3">Home / Team</p>
          <h1 className="font-sans text-4xl lg:text-5xl font-bold text-white">
            Meet Our <br />
            <span className="text-[#1CA7B8]">Leadership Team</span>
          </h1>
          <p className="mt-5 text-white max-w-xl font-sans text-lg leading-relaxed">
            Our expert team combines technical excellence with creative innovation to deliver 
            exceptional technology solutions that drive business growth and digital transformation.
          </p>
        </div>
      </section>
     <CodeOfConduct/>
      {/* Team Section */}
      <section id="team" className="bg-[#F2FAFB] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories with dynamic grid columns */}
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12 last:mb-0">
              <div className="text-center mb-8">
                <h2 className="font-sans text-2xl font-bold text-[#0E2A43] sm:text-3xl">
                  {category.title}
                </h2>
                <p className="mt-2 font-sans text-lg text-black">
                  {category.description}
                </p>
                <div className="flex justify-center gap-2 mt-2">
                  <span className="inline-block h-0.5 w-12 rounded-full bg-[#1CA7B8]" />
                </div>
              </div>

              <div 
                ref={ref}
                className={`grid ${getGridClasses(category.cols)} gap-4 sm:gap-6`}
              >
                {category.members.map((member, index) => (
                  <div
                    key={member.id}
                    className={`group relative bg-white rounded-xl border-2 transition-all duration-500 overflow-hidden shadow-md hover:shadow-xl ${
                      hoveredId === member.id 
                        ? 'border-[#1CA7B8] shadow-[0_6px_24px_rgba(28,167,184,0.25)]' 
                        : 'border-transparent hover:border-[#1CA7B8]/30'
                    } ${
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${(catIndex * 100) + (index * 80)}ms` }}
                    onMouseEnter={() => setHoveredId(member.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Image Container */}
                    <div className="relative w-full bg-white overflow-hidden">
                      <img
                        src={member.img}
                        alt={`${member.name} - ${member.role} at Dukes Tech Services`}
                        className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-contain bg-white transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Caption */}
                      <div className={`absolute bottom-0 left-0 right-0 bg-[#0E2A43]/90 backdrop-blur-sm py-3 px-4 text-center transition-all duration-500 ${
                        hoveredId === member.id 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-4'
                      }`}>
                        <h4 className="font-sans text-base sm:text-lg font-bold text-[#1CA7B8]">
                          {member.name}
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-[#1CA7B8]/80 mt-0.5">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-[#F2FAFB] px-8 py-5 border border-[#1CA7B8]/10">
              <span className="font-sans text-base font-semibold text-[#0E2A43]">
                Want to join our team?
              </span>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#1CA7B8]/25 hover:scale-105 transition-transform"
              >
                Contact Us
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}