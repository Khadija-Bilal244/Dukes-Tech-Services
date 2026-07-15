// ServicesDetail.jsx - Detailed Services Page with Images
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  CheckCircle,
  ArrowRight
} from "lucide-react";

import webDevelopmentImg from "../assets/web-development.jfif";
import graphicDesignImg from "../assets/graphic-design.jfif";
import videoEditingImg from "../assets/video-editing.jfif";
import seoImg from "../assets/seo-section.jfif";
import marketingImg from "../assets/marketing.jfif";
import socialMediaImg from "../assets/social-media.jfif";
import canvaImg from "../assets/canva.jfif";
import softwareDevelopmentImg from "../assets/software-development.jfif";

const servicesData = [
  {
    id: 1,
    image: webDevelopmentImg,
    title: "Web Development & Design",
    subtitle: "Custom Websites That Convert Visitors Into Customers",
    description: "Your website is often the first impression customers have of your business. We design and develop high-performance, responsive, and SEO-optimized websites that combine exceptional user experiences with modern technologies to help your business generate leads, increase conversions, and build long-term credibility.",
    offerings: [
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
    id: 2,
    image: graphicDesignImg,
    title: "Graphic Design",
    subtitle: "Creative Designs That Build Powerful Brands",
    description: "Strong branding creates lasting impressions. Our creative designers produce visually compelling assets that communicate your brand message, strengthen customer trust, and make your business stand out across digital and print platforms.",
    offerings: [
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
    id: 3,
    image: videoEditingImg,
    title: "Video Editing & Production",
    subtitle: "Professional Videos That Inspire, Engage & Convert",
    description: "Video content is one of the most effective ways to connect with your audience. We produce professional videos that tell your story, increase engagement, strengthen brand awareness, and maximize your digital marketing success.",
    offerings: [
      "Professional Video Editing",
      "Motion Graphics & Animations",
      "Promotional & Corporate Videos",
      "Social Media Video Editing (Reels, Shorts, TikTok)",
      "YouTube Video Editing & Optimization"
    ]
  },
  {
    id: 4,
    image: seoImg,
    title: "SEO (Search Engine Optimization)",
    subtitle: "Increase Visibility. Drive Organic Growth.",
    description: "A beautiful website is only valuable if customers can find it. Our SEO specialists improve your search engine rankings through technical optimization, keyword research, content strategies, and local SEO to generate sustainable organic traffic.",
    offerings: [
      "On-Page SEO (Keywords, Meta Tags, Content Optimization)",
      "Local SEO (Google Business Profile Optimization)",
      "E-Commerce SEO",
      "Content Writing & Blogging"
    ]
  },
  {
    id: 5,
    image: marketingImg,
    title: "Digital Marketing & Ads",
    subtitle: "Data-Driven Marketing That Maximizes ROI",
    description: "Grow your business with targeted advertising campaigns designed to attract qualified customers and generate measurable results. We create high-performing campaigns across Google, Facebook, Instagram, and other digital platforms.",
    offerings: [
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
    id: 6,
    image: socialMediaImg,
    title: "Social Media Marketing & Management",
    subtitle: "Grow Your Brand Across Every Social Platform",
    description: "We help businesses build meaningful relationships with their audience through engaging content, strategic campaigns, community management, and data-driven social media marketing.",
    offerings: [
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
    id: 7,
    image: canvaImg,
    title: "Canva Design Services",
    subtitle: "Professional Designs That Keep Your Brand Consistent",
    description: "Our Canva design services help businesses create professional, editable templates that maintain consistent branding across social media, marketing campaigns, presentations, and business communications.",
    offerings: [
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
    id: 8,
    image: softwareDevelopmentImg,
    title: "Software Development",
    subtitle: "Custom Software Built Around Your Business",
    description: "Every business has unique challenges. We develop secure, scalable, and customized software solutions that automate workflows, improve efficiency, reduce operational costs, and support long-term business growth.",
    offerings: [
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

export default function ServicesDetail() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-[#F2FAFB] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-base font-bold uppercase tracking-[0.15em] text-[#1CA7B8] font-sans border border-[#1CA7B8]/50">
            Our Services
          </span>
          <h2 className="mt-4 font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E2A43]">
            Technology Solutions That <span className="text-[#1CA7B8]">Deliver Real Business Results</span>
          </h2>
          <div className="flex justify-center gap-2 mt-3">
            <span className="inline-block h-1 w-12 rounded-full bg-[#1CA7B8]" />
            <span className="inline-block h-1 w-6 rounded-full bg-[#1CA7B8]/30" />
          </div>
          <p className="mt-4 text-black max-w-2xl mx-auto font-sans text-lg sm:text-lg leading-relaxed">
            Whether you're launching a startup, expanding your business, or modernizing enterprise operations, 
            our comprehensive technology services are designed to solve complex challenges, streamline processes, 
            and accelerate growth.
          </p>
        </div>

        {/* Services List */}
        <div ref={ref} className="space-y-12 md:space-y-16">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-[#0E2A43]/5 hover:border-[#1CA7B8]/20 group`}
              >
                {/* Image - Properly sized */}
                <div className={`flex-shrink-0 w-full lg:w-2/5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative overflow-hidden rounded-2xl bg-[#F2FAFB]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto max-h-80 sm:max-h-96 object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Number badge on image */}
                    <div className="absolute top-3 right-3 bg-[#0E2A43]/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                      {String(service.id).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Title */}
                  <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#0E2A43]">
                    {service.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="mt-2 font-sans text-xl font-semibold text-[#1CA7B8]">
                    {service.subtitle}
                  </p>
                  
                  {/* Description */}
                  <p className="mt-4 font-sans text-lg text-black leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* What We Offer */}
                  <div className="mt-6">
                    <h4 className="font-sans text-base font-bold uppercase tracking-wider text-[#1CA7B8] mb-3">
                      What We Offer
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.offerings.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#F2FAFB] transition-colors duration-300 group/item"
                        >
                          <CheckCircle className="h-4 w-4 text-[#1CA7B8] flex-shrink-0 mt-0.5 transition-transform group-hover/item:scale-110" />
                          <span className="font-sans text-base text-black">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative gradient line - Teal Green */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-3xl" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-white px-6 py-4 sm:px-8 sm:py-5 border border-[#1CA7B8]/10 shadow-lg">
            <span className="font-sans text-lg font-semibold text-[#0E2A43]">
               Ready to get started?
            </span>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-5 sm:px-6 py-2 sm:py-2.5 text-lg font-semibold text-white shadow-lg shadow-[#1CA7B8]/25 hover:scale-105 transition-transform"
            >
              Let's Talk
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}