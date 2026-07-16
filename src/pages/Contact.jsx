// pages/Contact.jsx
import Seo from "../components/Seo.jsx";
import ContactForm from "../components/Contact.jsx";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Reach Dukes Tech Services in Lahore by phone, email, or our contact form."
        path="/contact"
      />
      
      {/* Hero Section */}
      <section className="mt-14 relative bg-[#0E2A43] overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-24 bg-[#1CA7B8]" style={{ clipPath: "polygon(30% 0, 100% 0, 70% 100%, 0 100%)" }} />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1CA7B8]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-[#1CA7B8]/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16 relative z-10">
          <p className="font-mono text-base uppercase tracking-widest text-white mb-3">Home / Contact</p>
          <h1 className="font-sans text-4xl lg:text-5xl font-bold text-white">
            Let's Build Your <br />
            <span className="text-[#1CA7B8]">Digital Success</span>
          </h1>
          <p className="mt-5 text-white max-w-xl font-sans text-lg leading-relaxed">
            Have a project in mind? We'd love to hear about it. Reach out to us and 
            let's create something amazing together.
          </p>
        </div>
      </section>
      <ContactForm />
    </>
  );
}