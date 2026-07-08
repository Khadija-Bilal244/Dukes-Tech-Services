import Seo from "../components/Seo.jsx";

const categories = [
  {
    name: "Development",
    tone: "royalblue",
    items: [
      { title: "Web Development", desc: "Building visually appealing and functional websites.", icon: "code" },
      { title: "E-Commerce Solutions", desc: "Developing and integrating robust e-commerce platforms.", icon: "cart" },
      { title: "CMS Integrated Services", desc: "Content management systems your team can actually use.", icon: "layout" },
    ],
  },
  {
    name: "Design & Marketing",
    tone: "gold",
    items: [
      { title: "Graphic Designing", desc: "Creativity is at the core of a great graphic design.", icon: "brush" },
      { title: "SEO", desc: "The goal is to generate leads and sales for your business.", icon: "search" },
      { title: "Social Media Marketing", desc: "Harness the power of social media to elevate your brand.", icon: "share" },
    ],
  },
  {
    name: "Strategy & Infrastructure",
    tone: "royalgreen",
    items: [
      { title: "IT Consulting & Strategy", desc: "Expert guidance to unlock technology's full potential for your business.", icon: "compass" },
      { title: "IT Infrastructure & Networking", desc: "Providing expert guidance and strategic advice on IT infrastructure.", icon: "server" },
    ],
  },
];

const textTone = { royalblue: "text-royalblue", gold: "text-gold", royalgreen: "text-royalgreen" };
const borderTone = { royalblue: "border-royalblue", gold: "border-gold", royalgreen: "border-royalgreen" };
const fillTone = { royalblue: "bg-royalblue", gold: "bg-gold", royalgreen: "bg-royalgreen" };

function ServiceIcon({ name }) {
  const props = { className: "w-6 h-6", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", "aria-hidden": "true" };
  switch (name) {
    case "code":
      return <svg {...props}><path d="M8 6L2 12l6 6M16 6l6 6-6 6" /></svg>;
    case "brush":
      return <svg {...props}><path d="M15 3l6 6-9.5 9.5a2 2 0 01-1.4.6H6v-4.1a2 2 0 01.6-1.4L15 3z" /></svg>;
    case "search":
      return <svg {...props}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>;
    case "cart":
      return <svg {...props}><circle cx="9" cy="20" r="1" /><circle cx="18" cy="20" r="1" /><path d="M2 3h2l2.4 12.4a2 2 0 002 1.6h8.2a2 2 0 002-1.6L21 7H6" /></svg>;
    case "share":
      return <svg {...props}><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.3 10.8l7.4-3.6M8.3 13.2l7.4 3.6" /></svg>;
    case "compass":
      return <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M15 9l-2 6-6 2 2-6 6-2z" /></svg>;
    case "server":
      return <svg {...props}><rect x="3" y="4" width="18" height="6" rx="1" /><rect x="3" y="14" width="18" height="6" rx="1" /><path d="M7 7h.01M7 17h.01" /></svg>;
    case "layout":
      return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="1.5" /><path d="M3 9h18M9 9v12" /></svg>;
    default:
      return null;
  }
}

function CategoryBlock({ cat }) {
  return (
    <div className="mb-16 last:mb-0">
      <div className="flex items-center gap-3 mb-8">
        <span className={`w-2.5 h-2.5 rounded-full ${fillTone[cat.tone]}`} />
        <h2 className={`font-mono text-xs uppercase tracking-widest ${textTone[cat.tone]}`}>{cat.name}</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {cat.items.map((item) => (
          <div
            key={item.title}
            className={`bg-white rounded-2xl border-t-4 ${borderTone[cat.tone]} border border-charcoal/10 p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5 transition-all duration-300`}
          >
            <div className={`w-11 h-11 rounded-full ${fillTone[cat.tone]} text-white flex items-center justify-center mb-5`}>
              <ServiceIcon name={item.icon} />
            </div>
            <p className="font-display text-lg font-semibold text-navy">{item.title}</p>
            <p className="text-sm text-charcoal/60 mt-2 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <Seo
        title="Our Services"
        description="Web development, e-commerce, CMS, graphic design, SEO, social media marketing, IT consulting, and infrastructure services from Dukes Tech Services, Lahore."
        path="/services"
      />

      {/* page header */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-24 bg-gold" style={{ clipPath: "polygon(30% 0, 100% 0, 70% 100%, 0 100%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-white/60 mb-3">Home / Services</p>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-white">Our Services</h1>
        </div>
      </section>

      {/* intro */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <p className="font-mono text-xs uppercase tracking-widest text-royalblue mb-3">What we do</p>
            <h2 className="font-display text-3xl font-semibold text-navy leading-tight">
              Eight services.<br />One team.
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-charcoal/70 leading-relaxed">
              As a pioneering IT company, our unwavering commitment lies in providing an array of cutting-edge
              services to fulfill your diverse technological requirements. From software development and web
              development to mobile app development, IT consulting, cloud services, and cybersecurity, we offer
              a comprehensive suite of solutions.
            </p>
            <p className="text-charcoal/70 leading-relaxed mt-4">
              Our team of highly skilled professionals combines their expertise with a customer-centric approach
              to deliver bespoke solutions that optimize your business operations, elevate your online presence,
              and safeguard your digital assets. By partnering with us, you harness the full potential of
              technology to drive your business towards resounding success.
            </p>
          </div>
        </div>
      </section>

      {/* services grouped by category */}
      <section id="services" className="bg-paper py-20 border-t border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {categories.map((cat) => (
            <CategoryBlock key={cat.name} cat={cat} />
          ))}
        </div>
      </section>

      {/* cta */}
      <section className="bg-navy py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white font-display text-xl lg:text-2xl font-semibold text-center sm:text-left">
            Not sure which service fits? Get a free consultation.
          </p>
          <a
            href="mailto:info.dukestech@gmail.com"
            className="bg-gold text-charcoal font-semibold px-7 py-3.5 rounded-full hover:bg-white transition-colors duration-300 whitespace-nowrap"
          >
            Talk to us
          </a>
        </div>
      </section>
    </>
  );
}
