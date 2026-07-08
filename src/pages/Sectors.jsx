import Seo from "../components/Seo.jsx";

export default function Sectors() {
  return (
    <>
      <Seo
        title="Sectors We Serve"
        description="Industries and sectors Dukes Tech Services supports across web, design, and infrastructure projects."
        path="/sectors"
      />
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-24 bg-gold" style={{ clipPath: "polygon(30% 0, 100% 0, 70% 100%, 0 100%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-white/60 mb-3">Home / Sectors</p>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-white">Sectors We Serve</h1>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-charcoal/60 leading-relaxed">
            This page is a placeholder — send over the sector content and layout whenever it's ready, the same
            way you did for Home, About, and Services, and it'll be built out to match.
          </p>
        </div>
      </section>
    </>
  );
}
