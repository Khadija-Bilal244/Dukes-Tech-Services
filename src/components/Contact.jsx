// Contact.jsx - Contact Page
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Info,
  Clock,
  Globe
} from "lucide-react";

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status.message) setStatus({ message: "", type: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ message: "Please fill in all fields.", type: "error" });
      return;
    }
    if (!form.email.includes("@") || !form.email.includes(".")) {
      setStatus({ message: "Please enter a valid email address.", type: "error" });
      return;
    }

    setLoading(true);
    setStatus({ message: "Sending your message...", type: "info" });

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus({ message: data.message || "Message sent successfully!", type: "success" });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ message: data.message || "Failed to send message.", type: "error" });
      }
    } catch {
      setStatus({ message: "Server offline. Please try again later.", type: "error" });
    }

    setLoading(false);
    setTimeout(() => setStatus({ message: "", type: "" }), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info.dukestech@gmail.com",
      link: "mailto:info.dukestech@gmail.com",
      sub: "We'll respond within 24 hours",
      color: "from-[#1CA7B8] to-[#0E2A43]"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+92 309 7671363",
      link: "tel:+923097671363",
      sub: "Mon–Fri from 9am to 6pm",
      color: "from-[#1CA7B8] to-[#0E2A43]"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Naqi Center, Dulha Street, 71-Mall Road, Lahore, Pakistan",
      link: "#",
      sub: "By appointment only",
      color: "from-[#1CA7B8] to-[#0E2A43]"
    }
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Dukes Tech Services",
    "description": "Get in touch with Dukes Tech Services for web development, digital marketing, software development, and IT consulting services.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Dukes Tech Services",
      "email": "info.dukestech@gmail.com",
      "telephone": "+92-309-7671363",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Naqi Center, Dulha Street, 71-Mall Road",
        "addressLocality": "Lahore",
        "addressCountry": "Pakistan"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Dukes Tech Services | Get in Touch</title>
        <meta name="description" content="Contact Dukes Tech Services for web development, digital marketing, software development, and IT consulting. Call +92 309 7671363 or email info.dukestech@gmail.com." />
        <meta name="keywords" content="contact Dukes Tech Services, IT consulting Lahore, web development contact, digital marketing agency" />
        <link rel="canonical" href="https://www.dukestechservices.com/contact" />
        
        <meta property="og:title" content="Contact Us - Dukes Tech Services" />
        <meta property="og:description" content="Get in touch with Dukes Tech Services for innovative technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dukestechservices.com/contact" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Dukes Tech Services" />
        <meta name="twitter:description" content="Get in touch with Dukes Tech Services for innovative technology solutions." />
        
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>

      <section className="bg-[#F2FAFB] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info - Left Side (2 columns) */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#0E2A43]/5 hover:border-[#1CA7B8]/30"
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1CA7B8] to-[#0E2A43] text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h4 className="font-sans text-lg font-bold text-[#0E2A43]">
                          {item.title}
                        </h4>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="font-sans text-lg text-[#1CA7B8] font-semibold hover:underline block mt-1"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="font-sans text-[#1CA7B8] font-semibold block mt-1">
                            {item.value}
                          </span>
                        )}
                        <span className="font-sans text-base text-[black] block mt-1">
                          {item.sub}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Business Hours - Now with hover animation */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#0E2A43]/5 hover:border-[#1CA7B8]/30"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1CA7B8] to-[#0E2A43] text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Clock className="h-7 w-7" />
                  </div>
                  <div>
                    <h4 className="font-sans text-lg font-bold text-[#0E2A43]">
                      Business Hours
                    </h4>
                    <div className="mt-2 space-y-1">
                      <p className="font-sans text-base text-black">
                        <span className="font-semibold">Mon - Fri:</span> 9:00 AM - 6:00 PM
                      </p>
                      <p className="font-sans text-base text-black">
                        <span className="font-semibold">Sat - Sun:</span> Closed
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form - Right Side (3 columns) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl shadow-2xl shadow-[#0E2A43]/5 border border-[#0E2A43]/10 p-6 sm:p-8 lg:p-10">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-base font-bold uppercase tracking-wider text-[#0E2A43] font-sans">
                        Name <span className="text-[#1CA7B8]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-[#0E2A43]/10 rounded-xl text-base text-[#0E2A43] bg-white outline-none transition-all duration-300 focus:border-[#1CA7B8] focus:shadow-[0_0_0_4px_rgba(28,167,184,0.12)] placeholder:text-[#0E2A43]/40 font-sans"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-base font-bold uppercase tracking-wider text-[#0E2A43] font-sans">
                        Email <span className="text-[#1CA7B8]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-[#0E2A43]/10 rounded-xl text-base text-[#0E2A43] bg-white outline-none transition-all duration-300 focus:border-[#1CA7B8] focus:shadow-[0_0_0_4px_rgba(28,167,184,0.12)] placeholder:text-[#0E2A43]/40 font-sans"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-6">
                    <label className="text-base font-bold uppercase tracking-wider text-[#0E2A43] font-sans">
                      Message <span className="text-[#1CA7B8]">*</span>
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your project, goals, or technology needs..."
                      value={form.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-5 py-4 border-2 border-[#0E2A43]/10 rounded-xl text-base text-[#0E2A43] bg-white outline-none transition-all duration-300 focus:border-[#1CA7B8] focus:shadow-[0_0_0_4px_rgba(28,167,184,0.12)] placeholder:text-[#0E2A43]/40 font-sans resize-y"
                      required
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1CA7B8]/25 transition-all hover:scale-105 hover:shadow-[#1CA7B8]/40 disabled:opacity-70 disabled:cursor-not-allowed font-sans"
                    >
                      <Send className="h-5 w-5" />
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>

                  {status.message && (
                    <div className={`mt-4 p-4 rounded-xl text-center font-medium text-sm flex items-center justify-center gap-2 ${
                      status.type === "success" 
                        ? "bg-[#F2FAFB] text-[#1CA7B8] border border-[#1CA7B8]/30" 
                        : status.type === "error" 
                        ? "bg-red-50 text-red-600 border border-red-200"
                        : "bg-blue-50 text-blue-600 border border-blue-200"
                    }`}>
                      {status.type === "success" && <CheckCircle className="h-5 w-5 text-[#1CA7B8]" />}
                      {status.type === "error" && <AlertCircle className="h-5 w-5 text-red-500" />}
                      {status.type === "info" && <Info className="h-5 w-5 text-blue-500" />}
                      {status.message}
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <div className="bg-white rounded-3xl shadow-lg border border-[#0E2A43]/5 overflow-hidden">
              <div className="relative h-64 sm:h-80 md:h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.076560318908!2d74.3265953!3d31.4554327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919043b7ee54299%3A0x4a5c52baf27aed35!2sMall%20Rd%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dukes Tech Services Location"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}