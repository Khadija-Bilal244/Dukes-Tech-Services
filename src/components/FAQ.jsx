import { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    question: "What is Dukes Tech Services?",
    answer: "Dukes Tech Services is a leading IT solutions provider offering Web Development, Graphic Design, Video Editing, SEO, Digital Marketing, Social Media Management, and IT Consulting. We help businesses grow and succeed by delivering innovative technology solutions tailored to their specific needs. Our team of experts works closely with clients to understand their goals and provide customized strategies that drive real results."
  },
  {
    question: "What software does Dukes Tech Services use?",
    answer: "We use industry-leading tools including React, Node.js, WordPress, and Shopify for web development; Adobe Creative Suite, Canva, and Figma for graphic design; Premiere Pro and After Effects for video editing; and SEMrush, Ahrefs, and Google Analytics for SEO and marketing. Our technology stack is carefully selected to ensure we deliver the highest quality solutions for our clients."
  },
  {
    question: "How do you build a website?",
    answer: "We follow a comprehensive 4-step process: Analysis (understanding your business needs, goals, and target audience), Development (building with modern technologies and best practices), Testing (rigorous quality assurance to ensure bug-free, secure performance), and Deployment (seamless launch with ongoing support and maintenance). This ensures your website is built to the highest standards."
  },
  {
    question: "What graphic design services do you offer?",
    answer: "We offer a complete range of graphic design services including logo design, branding, business cards, flyers, brochures, social media posts, infographics, banner ads, presentations, packaging design, and more. Every design is tailored to maintain your brand consistency and make your business stand out. Our creative team ensures your visual identity is professional and impactful."
  },
  {
    question: "How long does it take to build a website?",
    answer: "The timeline depends on the complexity of your project. Simple landing pages typically take 1-2 weeks, e-commerce websites usually take 4-8 weeks, and complex web applications with custom functionality can take 8-12+ weeks. We provide a detailed timeline during the analysis phase so you know exactly what to expect. Our team works efficiently without compromising on quality."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes! We offer comprehensive ongoing support including regular maintenance, security updates, performance monitoring, bug fixes, and content updates. Our support team is always available to ensure your digital assets continue to perform optimally. We believe in building long-term partnerships with our clients and are committed to your ongoing success."
  },
  {
    question: "Why choose Dukes Tech Services?",
    answer: "We deliver customized solutions tailored to your unique business needs, with an expert team that combines technical excellence with creative innovation. We provide end-to-end support from concept to deployment and beyond, with a proven track record of delivering results. Our customer-first approach ensures you're always our top priority, making us your trusted technology partner for long-term success."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* Schema Markup */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* FAQ Section */}
      <section className="bg-white px-4 py-16 sm:px-6 md:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block rounded-full bg-[#F2FAFB] px-6 sm:px-8 py-2 sm:py-2 text-[14px] sm:text-base font-bold uppercase tracking-[0.15em] text-[#1CA7B8] font-sans border border-[#1CA7B8]/20">
              FAQ
            </span>
            <h2 className="mt-4 font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E2A43]">
              Frequently Asked <span className="text-[#1CA7B8]">Questions</span>
            </h2>
            <div className="flex justify-center gap-2 mt-4">
              <span className="inline-block h-1 w-16 rounded-full bg-[#1CA7B8]" />
              <span className="inline-block h-1 w-8 rounded-full bg-[#1CA7B8]/30" />
              <span className="inline-block h-1 w-16 rounded-full bg-[#0E2A43]/20" />
            </div>
            <p className="mt-5 text-[#0E2A43]/70 max-w-2xl mx-auto font-sans text-base sm:text-lg">
              Find answers to the most common questions about our services and process.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`group rounded-2xl border-2 transition-all duration-500 overflow-hidden ${
                    isActive
                      ? "border-[#1CA7B8] shadow-[0_8px_30px_rgba(28,167,184,0.15)] bg-white"
                      : "border-[#1CA7B8]/20 hover:border-[#1CA7B8]/60 hover:shadow-md hover:shadow-[#1CA7B8]/10 bg-gradient-to-br from-[#F2FAFB] to-[#1CA7B8]/10"
                  }`}
                >
                  {/* Question - Clickable */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 sm:p-7 font-sans text-left transition-all duration-300"
                  >
                    <span className={`font-sans text-lg sm:text-xl font-semibold transition-colors duration-300 pr-4 ${
                      isActive ? "text-[#1CA7B8]" : "text-[#0E2A43] group-hover:text-[#1CA7B8]"
                    }`}>
                      {faq.question}
                    </span>
                    
                    {/* Toggle Icon - Chevron only */}
                    <div className={`flex-shrink-0 ml-4 rounded-full p-2 transition-all duration-500 ${
                      isActive 
                        ? "bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] text-white shadow-lg shadow-[#1CA7B8]/25 rotate-180" 
                        : "bg-[#1CA7B8]/15 text-[#1CA7B8] group-hover:bg-[#1CA7B8]/25"
                    }`}>
                      <ChevronDown className="h-5 w-5" />
                    </div>
                  </button>

                  {/* Answer - Expandable with detailed content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1">
                      <div className="h-px w-full bg-gradient-to-r from-[#1CA7B8]/30 via-[#0E2A43]/30 to-[#1CA7B8]/30 mb-5" />
                      <p className="font-sans text-base sm:text-lg text-[#0E2A43]/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-[#F2FAFB] px-8 py-5 border border-[#1CA7B8]/20">
              <span className="font-sans text-[#0E2A43] text-base font-medium">
                 Still have questions?
              </span>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-6 py-2.5 text-base font-semibold text-white shadow-lg shadow-[#1CA7B8]/25 transition-all hover:scale-105 hover:shadow-[#1CA7B8]/40"
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