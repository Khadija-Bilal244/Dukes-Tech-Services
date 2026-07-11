// Services.jsx
// Modern services section with exclusive expandable categories - only one open at a time
import { useState } from "react";
import { 
  ChevronDown, 
  ChevronRight,
  Globe, 
  Palette, 
  Video, 
  Search, 
  Megaphone, 
  Share2, 
  PenTool,
  Code,
  CheckCircle
} from "lucide-react";

const SERVICES_DATA = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development & Design",
    description: "Custom websites, e-commerce solutions, and web applications tailored to your business needs.",
    subServices: [
      "Custom Website Development",
      "Responsive Website Design (Mobile-Friendly)",
      "E-Commerce Solutions (Shopify, WooCommerce, etc.)",
      "Web Applications & Portals",
      "Landing Page Design",
      "CMS Development (WordPress)",
      "UI/UX Design & Prototyping"
    ]
  },
  {
    id: "graphic-design",
    icon: Palette,
    title: "Graphic Design",
    description: "Creative visual designs that make your brand stand out and leave a lasting impression.",
    subServices: [
      "Logo Design & Branding",
      "Business Cards, Flyers & Brochures",
      "Social Media Post Designs",
      "Infographics & Illustrations",
      "Banner Ads & Web Graphics",
      "Corporate Identity & Stationery Design",
      "Packaging & Label Design",
      "Presentation Designs (PowerPoint / Google Slides)",
      "Mockups & Prototypes"
    ]
  },
  {
    id: "video-editing",
    icon: Video,
    title: "Video Editing & Production",
    description: "Professional video content that engages your audience and tells your brand story.",
    subServices: [
      "Professional Video Editing",
      "Motion Graphics & Animations",
      "Promotional & Corporate Videos",
      "Social Media Video Editing (Reels, Shorts, TikTok)",
      "YouTube Video Editing & Optimization"
    ]
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO (Search Engine Optimization)",
    description: "Boost your online visibility and drive organic traffic with our proven SEO strategies.",
    subServices: [
      "On-Page SEO (Keywords, Meta Tags, Content Optimization)",
      "Local SEO (Google Business Profile Optimization)",
      "E-Commerce SEO",
      "Content Writing & Blogging"
    ]
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing & Ads",
    description: "Data-driven marketing campaigns that deliver measurable results and maximize ROI.",
    subServices: [
      "Meta Ads (Facebook & Instagram Advertising)",
      "Google Ads (Search, Display, Shopping, Video)",
      "Social Media Marketing Campaigns",
      "Lead Generation Strategies",
      "Ad Creative Design & Copywriting",
      "Campaign Monitoring & Optimization",
      "Analytics & Reporting"
    ]
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Social Media Marketing & Management",
    description: "Build a strong social presence with strategic content, engagement, and growth tactics.",
    subServices: [
      "Social Media Strategy & Planning",
      "Content Creation (Posts, Reels, Stories, Graphics)",
      "Social Media Page Setup & Optimization",
      "Paid Social Campaigns (Facebook, Instagram, LinkedIn, TikTok, Twitter/X)",
      "Hashtag & Trend Research",
      "Community Engagement & Management",
      "Analytics & Growth Reporting",
      "Brand Awareness Campaigns"
    ]
  },
  {
    id: "canva-design",
    icon: PenTool,
    title: "Canva Design Services",
    description: "Professional, on-brand designs for all your business needs using Canva's powerful platform.",
    subServices: [
      "Social Media Templates (Instagram, Facebook, LinkedIn)",
      "Marketing Materials (Flyers, Posters, Banners)",
      "Presentations",
      "Infographics & Reports",
      "Resume & Portfolio Designs",
      "Event Invitations & Announcements",
      "Customizable Business Templates"
    ]
  },
  {
    id: "software-development",
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions built to streamline operations and drive business efficiency.",
    subServices: [
      "POS Systems",
      "Accounting Software",
      "Inventory Management",
      "ERP Solutions",
      "Gym Management",
      "Pharmacy Management",
      "Restaurant Management",
      "HR & Payroll",
      "Billing & Invoicing",
      "Warehouse Management",
      "Multi-Branch Systems",
      "Custom Software Solutions"
    ]
  }
];

export default function Services() {
  // Store only the index of the expanded service (one at a time)
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    // If clicking the same service, close it; otherwise open the new one
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-[#F2FAFB] px-6 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#1CA7B8] font-sans">
            What We Offer
          </span>
          <h2 className="mt-4 font-sans text-3xl font-bold text-[#0E2A43] sm:text-4xl md:text-5xl">
            Our <span className="text-[#1CA7B8]">Services</span>
          </h2>
          <div className="flex justify-center gap-2 mt-4">
            <span className="inline-block h-1 w-16 rounded-full bg-[#1CA7B8]" />
            <span className="inline-block h-1 w-8 rounded-full bg-[#1CA7B8]/30" />
          </div>
          <p className="mt-6 text-[black]/100 max-w-2xl mx-auto font-sans text-lg leading-relaxed">
            Comprehensive technology solutions designed to help your business grow, 
            innovate, and succeed in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {SERVICES_DATA.map((service, index) => {
            const expanded = expandedIndex === index;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className={`group bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                  expanded 
                    ? "border-[#1CA7B8] shadow-xl shadow-[#1CA7B8]/10" 
                    : "border-[#0E2A43]/10 hover:shadow-lg"
                }`}
              >
                {/* Main Card - Clickable */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full text-left p-6 transition-all duration-300 hover:bg-[#F2FAFB]/50"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 h-12 w-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      expanded 
                        ? "bg-gradient-to-br from-[#1CA7B8] to-[#0E2A43] text-white shadow-lg shadow-[#1CA7B8]/40" 
                        : "bg-[#F2FAFB] text-[#1CA7B8] group-hover:bg-gradient-to-br group-hover:from-[#1CA7B8] group-hover:to-[#0E2A43] group-hover:text-white"
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className={`font-sans font-bold text-lg transition-colors ${
                          expanded ? "text-[#1CA7B8]" : "text-[#0E2A43]"
                        }`}>
                          {service.title}
                        </h3>
                        <span className={`flex-shrink-0 transition-transform duration-300 ${
                          expanded ? "rotate-180" : ""
                        }`}>
                          <ChevronDown className={`h-5 w-5 ${
                            expanded ? "text-[#1CA7B8]" : "text-[#0E2A43]/40"
                          }`} />
                        </span>
                      </div>
                      <p className="mt-1 font-sans text-base text-[black]/100 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </button>

                {/* Sub-services - Expandable */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 border-t border-[#0E2A43]/5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.subServices.map((sub, subIndex) => (
                        <div
                          key={subIndex}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F2FAFB] transition-all duration-300 group/sub"
                        >
                          <CheckCircle className={`h-5 w-5 flex-shrink-0 mt-0.5 transition-all duration-300 ${
                            expanded 
                              ? "text-[#1CA7B8] group-hover/sub:text-[#0E2A43] scale-110" 
                              : "text-[#1CA7B8] group-hover/sub:text-[#0E2A43]"
                          }`} />
                          <span className={`font-sans text-base leading-relaxed transition-colors duration-300 ${
                            expanded ? "text-[#0E2A43] font-medium" : "text-[#0E2A43]/80 group-hover/sub:text-[#0E2A43]"
                          }`}>
                            {sub}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button inside expanded section */}
                    <div className="mt-4 pt-4 border-t border-[#0E2A43]/5 flex justify-end">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#1CA7B8] hover:text-[#0E2A43] transition-colors group/cta"
                      >
                        Get this service
                        <ChevronRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-[#F2FAFB] px-8 py-6 border border-[#1CA7B8]/10">
            <span className="font-sans text-lg font-semibold text-[#0E2A43]">
               Need a custom solution?
            </span>
            <div className="h-6 w-px bg-[#0E2A43]/10 hidden sm:block" />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#1CA7B8]/25 hover:scale-105 transition-transform"
            >
              Let's Talk About Your Project
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}