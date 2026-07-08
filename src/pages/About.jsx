import Seo from "../components/Seo.jsx";

const leadership = [
  { initials: "IS", name: "Imran Shahid", title: "Founder / CEO" },
  { initials: "US", name: "Usman Shahid", title: "Finance Director" },
  { initials: "DW", name: "Danial Waheed", title: "Operational Director" },
  { initials: "AK", name: "Aamir Khan", title: "Head of Graphic Designing" },
];

const team = [
  { initials: "AK", name: "Azan Khan", title: "AI & ML Engineer" },
  { initials: "MZ", name: "Muqaddas Zeeshan", title: "Digital Marketing Consultant" },
  { initials: "AA", name: "Adnan Ayub", title: "Digital Marketing Consultant" },
  { initials: "ZW", name: "Zainab Waris", title: "Graphic Designer, Commercial Analyst" },
  { initials: "AU", name: "Ayesha Usman", title: "Graphic Designer, Commercial Analyst" },
  { initials: "ZK", name: "Zara Khurram", title: "Digital Marketing Consultant" },
  { initials: "MK", name: "Manahil Khurram", title: "Digital Marketing Consultant" },
  { initials: "FR", name: "Fatima Raza", title: "Digital Marketing Consultant" },
];

const tones = ["royalblue", "gold", "royalgreen", "signalred"];
const fillTone = {
  royalblue: "bg-royalblue",
  gold: "bg-gold",
  royalgreen: "bg-royalgreen",
  signalred: "bg-signalred",
};
const ringTone = {
  royalblue: "bg-royalblue/15",
  gold: "bg-gold/20",
  royalgreen: "bg-royalgreen/15",
  signalred: "bg-signalred/15",
};

const hexClip = { clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" };

function HexFrame({ children, tone }) {
  return (
    <div className="relative w-56 h-64 mx-auto">
      <div className={`absolute inset-0 ${ringTone[tone]}`} style={hexClip} />
      <div className="absolute inset-2 bg-white" style={hexClip} />
      <div className={`absolute inset-4 ${fillTone[tone]} flex items-center justify-center text-white`} style={hexClip}>
        {children}
      </div>
    </div>
  );
}

function HexAvatar({ initials, tone }) {
  return (
    <div className="relative w-28 h-32 mx-auto">
      <div className="absolute inset-0 bg-white border border-charcoal/10" style={hexClip} />
      <div className={`absolute inset-[3px] ${fillTone[tone]} flex items-center justify-center`} style={hexClip}>
        <span className="font-display text-lg font-semibold text-white">{initials}</span>
      </div>
    </div>
  );
}

function NotebookIcon() {
  return (
    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="4" width="18" height="14" rx="1.5" />
      <path d="M3 8h18M8 4v14" />
      <circle cx="16" cy="12" r="2" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 20V10M11 20V4M18 20v-7" />
      <path d="M2 20h20" />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.4c.6.5 1 1.3 1 2.1v.5h6v-.5c0-.8.4-1.6 1-2.1A6 6 0 0012 3z" />
    </svg>
  );
}

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Dukes Tech Services is a Lahore-based IT solutions provider. Meet our leadership team and the people behind our web, design, and infrastructure work."
        path="/about"
      />

      {/* page header */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-24 bg-gold" style={{ clipPath: "polygon(30% 0, 100% 0, 70% 100%, 0 100%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-white/60 mb-3">Home / About Us</p>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-white">About Us</h1>
        </div>
      </section>

      {/* about */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-royalblue mb-3">Who we are</p>
            <p className="text-charcoal/80 leading-relaxed">
              Dukes Tech Services is a leading IT solutions provider dedicated to empowering businesses through
              cutting-edge technology and innovative solutions. With a commitment to excellence and a
              customer-centric approach, we strive to deliver comprehensive IT services that drive growth,
              efficiency, and success for our clients.
            </p>
            <p className="text-charcoal/80 leading-relaxed mt-5">
              At Dukes, we understand the critical role that technology plays in today's business landscape. We
              specialize in delivering tailored IT solutions that address the unique needs and challenges of
              organizations across various industries. Whether you are a small startup or a large enterprise, we
              have the expertise, experience, and resources to transform your business and help you stay ahead in
              the digital age.
            </p>
          </div>
          <HexFrame tone="royalblue">
            <NotebookIcon />
          </HexFrame>
        </div>
      </section>

      {/* vision */}
      <section className="bg-paper py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <HexFrame tone="royalgreen">
            <ChartIcon />
          </HexFrame>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-royalgreen mb-3">Vision</p>
            <h2 className="font-display text-3xl font-semibold text-navy mb-5">Where we're headed</h2>
            <p className="text-charcoal/70 leading-relaxed">
              Our vision at Dukes Tech Services is to be the premier IT solutions provider, empowering businesses
              worldwide to achieve their full potential through transformative technology solutions. We strive to
              be recognized as industry leaders, delivering innovative, reliable, and sustainable IT services
              that drive growth, efficiency, and competitive advantage for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* mission */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="bg-paper rounded-2xl border-t-4 border-gold p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-navy mb-3">Mission</p>
            <p className="text-charcoal/80 leading-relaxed">
              Our mission is to empower businesses and individuals through innovative technology solutions. We aim
              to deliver exceptional IT services that drive growth, enhance productivity, and provide a seamless
              digital experience. By understanding our clients' unique needs and challenges, we offer tailored
              solutions aligned with their strategic objectives. With a focus on continuous learning,
              collaboration, and customer-centricity, we aim to build long-term partnerships based on trust.
            </p>
          </div>
          <HexFrame tone="gold">
            <BulbIcon />
          </HexFrame>
        </div>
      </section>

      {/* senior management */}
      <section className="bg-paper py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-widest text-royalblue mb-3">Leadership</p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy mb-4">Senior Management</h2>
            <p className="text-charcoal/60 leading-relaxed">
              A leadership team with a proven track record of strategic guidance, steering Dukes Tech toward
              sustained growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((p, i) => (
              <div key={p.name}>
                <HexAvatar initials={p.initials} tone={tones[i % tones.length]} />
                <p className="font-display font-semibold text-navy text-center mt-4">{p.name}</p>
                <p className="text-sm text-charcoal/60 text-center italic">{p.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* team */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-widest text-royalgreen mb-3">The people behind it</p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy mb-4">Our Team</h2>
            <p className="text-charcoal/60 leading-relaxed">
              A diverse, dedicated group bringing expertise across AI, design, and digital marketing to every
              engagement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((p, i) => (
              <div key={p.name} className="bg-paper rounded-2xl p-5">
                <HexAvatar initials={p.initials} tone={tones[i % tones.length]} />
                <p className="font-display font-semibold text-navy text-center mt-4 text-sm">{p.name}</p>
                <p className="text-xs text-charcoal/60 text-center italic mt-0.5">{p.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* careers strip */}
      <section className="bg-navy py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-medium text-center sm:text-left">
            Join our team — we're always looking for talented people.
          </p>
          <a
            href="mailto:info.dukestech@gmail.com"
            className="bg-gold text-charcoal font-semibold px-6 py-2.5 rounded-full hover:bg-white transition-colors duration-300 whitespace-nowrap"
          >
            See open roles
          </a>
        </div>
      </section>
    </>
  );
}
