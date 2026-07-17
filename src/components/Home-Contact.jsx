import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Info } from "lucide-react";

function ContactForm() {
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

  return (
    <section className="bg-[#F2FAFB] py-16 px-4 sm:px-6 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-[#1CA7B8]/10 px-6 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#1CA7B8] font-sans border border-[#1CA7B8]/20">
            Contact Us
          </span>
          <h2 className="mt-4 font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E2A43]">
            Let's Build Your <br />
            <span className="text-[#1CA7B8]">Digital Future</span>
          </h2>
          <div className="flex justify-center gap-2 mt-4">
            <span className="inline-block h-1 w-16 rounded-full bg-[#1CA7B8]" />
            <span className="inline-block h-1 w-8 rounded-full bg-[#1CA7B8]/30" />
          </div>
          <p className="mt-5 text-[#0E2A43]/70 max-w-2xl mx-auto font-sans text-base sm:text-lg leading-relaxed">
            Expert technology solutions, web development, digital marketing, and IT consulting 
            tailored to your business needs. Our team of professionals is dedicated to helping 
            you navigate the digital landscape with confidence and success.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-[#0E2A43]/5 border border-[#0E2A43]/10 p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto mb-12">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
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

            <div className="flex flex-col gap-2 mb-6">
              <label className="text-base font-bold uppercase tracking-wider text-[#0E2A43] font-sans">
                Message <span className="text-[#1CA7B8]">*</span>
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your project, goals, or technology needs..."
                value={form.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-5 py-4 border-2 border-[#0E2A43]/10 rounded-xl text-base text-[#0E2A43] bg-white outline-none transition-all duration-300 focus:border-[#1CA7B8] focus:shadow-[0_0_0_4px_rgba(28,167,184,0.12)] placeholder:text-[#0E2A43]/40 font-sans resize-y"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-10 py-4 text-base font-semibold text-white shadow-lg shadow-[#1CA7B8]/25 transition-all hover:scale-105 hover:shadow-[#1CA7B8]/40 disabled:opacity-70 disabled:cursor-not-allowed font-sans"
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
                {status.type === "success" && <CheckCircle className="h-5 w-5" />}
                {status.type === "error" && <AlertCircle className="h-5 w-5" />}
                {status.type === "info" && <Info className="h-5 w-5" />}
                {status.message}
              </div>
            )}
          </form>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Email Card */}
          <div className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#0E2A43]/5 hover:border-[#1CA7B8]/30">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F2FAFB] text-[#1CA7B8] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#1CA7B8] group-hover:to-[#0E2A43] group-hover:text-white group-hover:scale-110 group-hover:rotate-6">
              <Mail className="h-8 w-8" />
            </div>
            <h4 className="mt-4 font-sans font-bold text-[#0E2A43] text-xl">
              Email Us
            </h4>
            <a 
              href="mailto:info.dukestech@gmail.com" 
              className="font-sans text-[#1CA7B8] text-base font-semibold hover:underline block mt-2"
            >
              info.dukestech@gmail.com
            </a>
            <span className="font-sans text-base text-black block mt-2">
              We'll respond within 24 hours
            </span>
          </div>

          {/* Phone Card */}
          <div className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#0E2A43]/5 hover:border-[#1CA7B8]/30">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F2FAFB] text-[#1CA7B8] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#1CA7B8] group-hover:to-[#0E2A43] group-hover:text-white group-hover:scale-110 group-hover:rotate-6">
              <Phone className="h-8 w-8" />
            </div>
            <h4 className="mt-4 font-sans font-bold text-[#0E2A43] text-xl">
              Call Us
            </h4>
            <a 
              href="tel:+923097671363" 
              className="font-sans text-[#1CA7B8] font-semibold hover:underline block mt-2"
            >
              +92 309 7671363
            </a>
            <span className="font-sans text-base text-black block mt-2">
              Mon–Fri from 9am to 6pm
            </span>
          </div>

          {/* Address Card */}
          <div className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#0E2A43]/5 hover:border-[#1CA7B8]/30">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F2FAFB] text-[#1CA7B8] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#1CA7B8] group-hover:to-[#0E2A43] group-hover:text-white group-hover:scale-110 group-hover:rotate-6">
              <MapPin className="h-8 w-8" />
            </div>
            <h4 className="mt-4 font-sans font-bold text-[#0E2A43] text-xl">
              Visit Us
            </h4>
            <span className="font-sans text-[#1CA7B8] font-semibold block mt-2 leading-relaxed">
              Naqi Center, Dulha Street,<br />
              71-Mall Road, Lahore, Pakistan
            </span>
            <span className="font-sans text-base text-black block mt-2">
              By appointment only
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;