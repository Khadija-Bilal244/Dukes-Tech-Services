// Team.jsx - With Category Sections
import { useState } from "react";
import { useInView } from "react-intersection-observer";

// Import team images
import team1 from "../assets/imranshahid.jpeg";
import team2 from "../assets/2.png";
import team3 from "../assets/arham.jpeg";
import team7 from "../assets/7.png";

export default function Team() {
  const [hoveredId, setHoveredId] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Group members by category
  const categories = [
    {
      title: "Senior Management",
      description: "Our visionary leaders driving strategic growth",
      members: [
        { id: 1, img: team1, name: "Imran Shahid", role: "Founder / CEO" },
        { id: 2, img: team2, name: "Usman Shahid", role: "Finance" },
        { id: 3, img: team2, name: "Danial Waheed", role: "Operational" },
        { id: 4, img: team2, name: "Aamir Khan", role: "Head of Graphic" },
        { id:5,img:team3,name:"Arham Atif",role:"Head of Marketing & Sales"}
      ]
    }
  ];

  return (
    <section id="team" className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-[#F2FAFB] px-6 py-2 text-base font-bold uppercase tracking-[0.15em] text-[#1CA7B8] font-sans border border-[#1CA7B8]/20">
            Our Team
          </span>
          <h1 className="mt-4 font-sans text-3xl font-bold text-[#0E2A43] sm:text-4xl md:text-5xl">
            Meet Our <span className="text-[#1CA7B8]">Leadership</span>
          </h1>
          <div className="flex justify-center gap-2 mt-4">
            <span className="inline-block h-1 w-16 rounded-full bg-[#1CA7B8]" />
            <span className="inline-block h-1 w-8 rounded-full bg-[#1CA7B8]/30" />
          </div>
          <p className="mt-6 text-[black]/100 max-w-2xl mx-auto font-sans text-lg leading-relaxed">
            Our esteemed senior management team possesses a wealth of experience and expertise, 
            making them a driving force behind our organization's success. With a proven track 
            record of strategic leadership and a deep understanding of the industry, they skillfully 
            steer our company towards new heights.
          </p>
        </div>

        {/* Categories */}
        {categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-12 last:mb-0">
            <div className="text-center mb-8">
              <h2 className="font-sans text-4xl font-bold text-[#0E2A43] sm:text-3xl">
                {category.title}
              </h2>
              <p className="mt-2 font-sans text-lg text-[black]/100">
                {category.description}
              </p>
              <div className="flex justify-center gap-2 mt-2">
                <span className="inline-block h-0.5 w-12 rounded-full bg-[#1CA7B8]" />
              </div>
            </div>

            <div 
              ref={ref}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6"
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
                      alt={member.name}
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
      </div>
    </section>
  );
}