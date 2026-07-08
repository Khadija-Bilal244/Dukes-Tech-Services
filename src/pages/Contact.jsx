import Seo from "../components/Seo.jsx";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Reach Dukes Tech Services in Lahore by phone, email, or our contact form."
        path="/contact"
      />
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-24 bg-gold" style={{ clipPath: "polygon(30% 0, 100% 0, 70% 100%, 0 100%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-white/60 mb-3">Home / Contact</p>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-white">Contact Us</h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-charcoal/70 leading-relaxed mb-8">
            Reach out to us for exceptional IT solutions.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-sm">
            <div className="bg-paper rounded-2xl p-6 border-t-4 border-royalblue">
              <p className="font-display font-semibold text-navy mb-1">Address</p>
              <p className="text-charcoal/60">The Mall Road, Lahore, Pakistan</p>
            </div>
            <div className="bg-paper rounded-2xl p-6 border-t-4 border-royalgreen">
              <p className="font-display font-semibold text-navy mb-1">Email</p>
              <a href="mailto:info.dukestech@gmail.com" className="text-charcoal/60 hover:text-royalblue">
                info.dukestech@gmail.com
              </a>
            </div>
            <div className="bg-paper rounded-2xl p-6 border-t-4 border-gold">
              <p className="font-display font-semibold text-navy mb-1">Phone</p>
              <a href="tel:+923009459653" className="text-charcoal/60 hover:text-royalblue">
                +92-300-9459653
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
