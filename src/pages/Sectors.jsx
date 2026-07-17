// pages/Sectors.jsx
import Seo from "../components/Seo.jsx";
import SectorsSection from "../components/Sectors.jsx";
import SectorsValues from "../components/Sectors-Values.jsx";
import SectorsClients from "../components/Sectors-Clients.jsx";

export default function Sectors() {
  return (
    <>
      <Seo
        title="Sectors We Serve"
        description="Industries and sectors Dukes Tech Services supports across web, design, and infrastructure projects."
        path="/sectors"
      />

      {/* Hero Section */}
      <section className="mt-14 relative bg-[#0E2A43] overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-24 bg-[#1CA7B8]" style={{ clipPath: "polygon(30% 0, 100% 0, 70% 100%, 0 100%)" }} />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1CA7B8]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-[#1CA7B8]/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16 relative z-10">
          <p className="font-mono text-base uppercase tracking-widest text-white mb-3">Home / Sectors</p>
          <h1 className="font-sans text-4xl lg:text-5xl font-bold text-white">
            Industries We <br />
            <span className="text-[#1CA7B8]">Serve</span>
          </h1>
          <p className="mt-5 text-white/90 max-w-xl font-sans text-lg leading-relaxed">
            Dukes Tech Services partners with diverse industries, delivering tailored technology solutions 
            that drive growth, streamline operations, and empower businesses to thrive in the digital age.
          </p>
        </div>
      </section>
      <SectorsValues />
      <SectorsSection />
      <SectorsClients />
    </>
  );
}