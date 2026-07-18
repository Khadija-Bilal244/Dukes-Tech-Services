// ServicesDetail.jsx - Detailed Services Page with Images & Tech Icons
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  CheckCircle,
  ArrowRight
} from "lucide-react";

// Service Images
import webDevelopmentImg from "../assets/web-development.jfif";
import graphicDesignImg from "../assets/graphic-design.jfif";
import videoEditingImg from "../assets/video-editing.jfif";
import seoImg from "../assets/seo-section.jfif";
import marketingImg from "../assets/marketing.jfif";
import socialMediaImg from "../assets/social-media.jfif";
import canvaImg from "../assets/canva.jfif";
import softwareDevelopmentImg from "../assets/software-development.jfif";
import shopifyServiceImg from "../assets/shopifystore.jfif";

// Technology Icons - All imported once
import canvaIcon from "../assets/canva.jpeg";
import metaIcon from "../assets/meta.png";
import msAzureIcon from "../assets/ms azure.png";
import shopifyIcon from "../assets/shopify.png";
import vsCodeIcon from "../assets/vs code.png";
import adobeIllustratorIcon from "../assets/adobe illustrator.png";
import dotNetIcon from "../assets/.net.png";
import adobeProIcon from "../assets/adobe pro.png";
import wordpressIcon from "../assets/wordpress2.png";
import githubIcon from "../assets/github.png";
import mediaIcon from "../assets/media.png";
import seoIcon from "../assets/seo.png";
import vsIcon from "../assets/vs.png";
import angularIcon from "../assets/Angular.png";
import reactIcon from "../assets/react.png";
import tensorflowIcon from "../assets/TensorFlow.png";
import nextjsIcon from "../assets/Next.js.png";
import jsIcon from "../assets/js.png";
import mongodbIcon from "../assets/mongodb.png";
import pythonIcon from "../assets/Python.png";
import kotlinIcon from "../assets/Kotlin.png";
import nodejsIcon from "../assets/Node.js.png";
import postgresqlIcon from "../assets/PostgresSQL.png";
import pytorchIcon from "../assets/PyTorch.png";
import awsIcon from "../assets/AWS.png";
import photoshopIcon from "../assets/adobe photoshop.png";
import afterEffectsIcon from "../assets/adobe after-effects.png";
import googleCloudIcon from "../assets/Google Cloud.png";
import swiftIcon from "../assets/Swift.png";
import typescriptIcon from "../assets/TypeScript.png";
import vuejsIcon from "../assets/Vue.js.png";
import figmaIcon from "../assets/figma-original.svg";

const servicesData = [
  {
    id: 1,
    image: webDevelopmentImg,
    title: "Web Development & Design",
    subtitle: "Custom Websites That Convert Visitors Into Customers",
    description: "Your website is often the first impression customers have of your business. We design and develop high-performance, responsive, and SEO-optimized websites that combine exceptional user experiences with modern technologies to help your business generate leads, increase conversions, and build long-term credibility.",
    techIcons: [
      reactIcon, angularIcon, vuejsIcon, nodejsIcon, 
      nextjsIcon, typescriptIcon, jsIcon, mongodbIcon, 
      postgresqlIcon, pythonIcon, dotNetIcon, 
      vsCodeIcon, githubIcon, shopifyIcon, wordpressIcon,
      figmaIcon, awsIcon, googleCloudIcon
    ],
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
    image: shopifyServiceImg,
    title: "Shopify Development",
    subtitle: "Custom E-Commerce Stores That Drive Sales",
    description: "We build high-converting Shopify stores that deliver exceptional shopping experiences. From custom theme development to seamless checkout optimization, we create e-commerce solutions that help you sell more, scale faster, and build a strong online presence.",
    techIcons: [
      shopifyIcon, reactIcon, nodejsIcon, typescriptIcon,
      jsIcon, vsCodeIcon, githubIcon, figmaIcon,
      awsIcon, googleCloudIcon
    ],
    offerings: [
      "Custom Shopify Store Design",
      "Shopify Theme Development",
      "Shopify Store Setup",
      "Homepage Design",
      "Product Page Design",
      "Collection Page Design",
      "Navigation & User Experience",
      "Mobile Optimization",
      "Speed & Performance Optimization",
      "Brand & Visual Design",
      "Shopify Maintenance & Support",
      "Checkout & Cart Customization (Shopify Plus)"
    ]
  },
  {
    id: 3,
    image: graphicDesignImg,
    title: "Graphic Design",
    subtitle: "Creative Designs That Build Powerful Brands",
    description: "Strong branding creates lasting impressions. Our creative designers produce visually compelling assets that communicate your brand message, strengthen customer trust, and make your business stand out across digital and print platforms.",
    techIcons: [
      adobeIllustratorIcon, adobeProIcon, photoshopIcon, 
      canvaIcon, afterEffectsIcon, figmaIcon
    ],
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
    id: 4,
    image: videoEditingImg,
    title: "Video Editing & Production",
    subtitle: "Professional Videos That Inspire, Engage & Convert",
    description: "Video content is one of the most effective ways to connect with your audience. We produce professional videos that tell your story, increase engagement, strengthen brand awareness, and maximize your digital marketing success.",
    techIcons: [
      adobeProIcon, afterEffectsIcon, photoshopIcon, 
      canvaIcon, mediaIcon
    ],
    offerings: [
      "Professional Video Editing",
      "Motion Graphics & Animations",
      "Promotional & Corporate Videos",
      "Social Media Video Editing (Reels, Shorts, TikTok)",
      "YouTube Video Editing & Optimization"
    ]
  },
  {
    id: 5,
    image: seoImg,
    title: "SEO (Search Engine Optimization)",
    subtitle: "Increase Visibility. Drive Organic Growth.",
    description: "A beautiful website is only valuable if customers can find it. Our SEO specialists improve your search engine rankings through technical optimization, keyword research, content strategies, and local SEO to generate sustainable organic traffic.",
    techIcons: [
      seoIcon, metaIcon, googleCloudIcon, 
      githubIcon, jsIcon, pythonIcon, wordpressIcon
    ],
    offerings: [
      "On-Page SEO (Keywords, Meta Tags, Content Optimization)",
      "Local SEO (Google Business Profile Optimization)",
      "E-Commerce SEO",
      "Content Writing & Blogging"
    ]
  },
  {
    id: 6,
    image: marketingImg,
    title: "Digital Marketing & Ads",
    subtitle: "Data-Driven Marketing That Maximizes ROI",
    description: "Grow your business with targeted advertising campaigns designed to attract qualified customers and generate measurable results. We create high-performing campaigns across Google, Facebook, Instagram, and other digital platforms.",
    techIcons: [
      metaIcon, seoIcon, canvaIcon, 
      googleCloudIcon, pythonIcon, jsIcon,
      adobeIllustratorIcon, photoshopIcon
    ],
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
    id: 7,
    image: socialMediaImg,
    title: "Social Media Marketing & Management",
    subtitle: "Grow Your Brand Across Every Social Platform",
    description: "We help businesses build meaningful relationships with their audience through engaging content, strategic campaigns, community management, and data-driven social media marketing.",
    techIcons: [
      metaIcon, canvaIcon, seoIcon, 
      mediaIcon, googleCloudIcon, pythonIcon,
      photoshopIcon, afterEffectsIcon
    ],
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
    id: 8,
    image: canvaImg,
    title: "Canva Design Services",
    subtitle: "Professional Designs That Keep Your Brand Consistent",
    description: "Our Canva design services help businesses create professional, editable templates that maintain consistent branding across social media, marketing campaigns, presentations, and business communications.",
    techIcons: [
      canvaIcon, adobeIllustratorIcon, photoshopIcon, 
      adobeProIcon, afterEffectsIcon
    ],
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
    id: 9,
    image: softwareDevelopmentImg,
    title: "Software Development",
    subtitle: "Custom Software Built Around Your Business",
    description: "Every business has unique challenges. We develop secure, scalable, and customized software solutions that automate workflows, improve efficiency, reduce operational costs, and support long-term business growth.",
    techIcons: [
      reactIcon, angularIcon, vuejsIcon, nodejsIcon, 
      nextjsIcon, typescriptIcon, jsIcon, pythonIcon, 
      kotlinIcon, swiftIcon, dotNetIcon, mongodbIcon, 
      postgresqlIcon, tensorflowIcon, pytorchIcon, 
      awsIcon, googleCloudIcon, msAzureIcon, 
      vsCodeIcon, vsIcon, githubIcon
    ],
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
    <section className="bg-[#F2FAFB] py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block rounded-full bg-white px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs md:text-base font-bold uppercase tracking-[0.15em] text-[#1CA7B8] font-sans border border-[#1CA7B8]/80">
            Our Services
          </span>
          <h2 className="mt-3 sm:mt-4 font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0E2A43]">
            Technology Solutions That <span className="text-[#1CA7B8]">Deliver Real Business Results</span>
          </h2>
          <div className="flex justify-center gap-2 mt-2 sm:mt-3">
            <span className="inline-block h-1 w-8 sm:w-10 md:w-12 rounded-full bg-[#1CA7B8]" />
            <span className="inline-block h-1 w-4 sm:w-5 md:w-6 rounded-full bg-[#1CA7B8]/30" />
          </div>
          <p className="mt-3 sm:mt-4 text-black max-w-3xl mx-auto font-sans text-lg sm:text-sm md:text-base lg:text-lg leading-relaxed px-2">
            Whether you're launching a startup, expanding your business, or modernizing enterprise operations, 
            our comprehensive technology services are designed to solve complex challenges, streamline processes, 
            and accelerate growth.
          </p>
        </div>

        {/* Services List */}
        <div ref={ref} className="space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
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
                } gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-[#0E2A43]/5 hover:border-[#1CA7B8]/20 group`}
              >
                {/* Image */}
                <div className="flex-shrink-0 w-full lg:w-2/5">
                  <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl bg-[#F2FAFB]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto max-h-48 sm:max-h-56 md:max-h-72 lg:max-h-80 xl:max-h-96 object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 sm:top-4 md:top-5 right-3 sm:right-2 md:right-3 bg-[#0E2A43]/80 backdrop-blur-sm text-white text-[12px] sm:text-lg font-bold px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full">
                      {String(service.id).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 w-full">
                  <h3 className="font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#0E2A43]">
                    {service.title}
                  </h3>
                  
                  <p className="mt-1 sm:mt-2 font-sans text-base sm:text-lg md:text-xl font-semibold text-[#1CA7B8]">
                    {service.subtitle}
                  </p>
                  
                  <p className="mt-2 sm:mt-3 md:mt-4 font-sans text-xs sm:text-sm md:text-base lg:text-lg text-black/90 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Technology Icons - Larger & Responsive */}
                  <div className="mt-3 sm:mt-4 md:mt-6">
                    <h4 className="font-sans text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-black mb-1.5 sm:mb-2 md:mb-3">
                      Technologies We Use
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
                      {service.techIcons.map((icon, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-white rounded-md sm:rounded-lg md:rounded-xl shadow-md border border-[#0E2A43]/5 hover:border-[#1CA7B8]/30 hover:shadow-lg transition-all duration-300 hover:scale-110"
                        >
                          <img
                            src={icon}
                            alt="Tech icon"
                            className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-11 xl:h-11 object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* What We Offer */}
                  <div className="mt-3 sm:mt-4 md:mt-6">
                    <h4 className="font-sans text-[10px] sm:text-xs md:text-base font-bold uppercase tracking-wider text-[#1CA7B8] mb-1.5 sm:mb-2 md:mb-3">
                      What We Offer
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                      {service.offerings.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-1.5 sm:gap-2 md:gap-2.5 p-1 sm:p-1.5 md:p-2 rounded-lg hover:bg-[#F2FAFB] transition-colors duration-300 group/item"
                        >
                          <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 text-[#1CA7B8] flex-shrink-0 mt-0.5 transition-transform group-hover/item:scale-110" />
                          <span className="font-sans text-[10px] sm:text-xs md:text-base text-black">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-xl sm:rounded-b-2xl md:rounded-b-3xl" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 rounded-xl sm:rounded-2xl bg-white px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 lg:py-5 border border-[#1CA7B8]/10 shadow-lg">
            <span className="font-sans text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-[#0E2A43]">
              Ready to get started?
            </span>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-3 sm:px-4 md:px-5 lg:px-6 py-1 sm:py-1.5 md:py-2 lg:py-2.5 text-[10px] sm:text-sm md:text-base lg:text-lg font-semibold text-white shadow-lg shadow-[#1CA7B8]/25 hover:scale-105 transition-transform"
            >
              Let's Talk
              <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}