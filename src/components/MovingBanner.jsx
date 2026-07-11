import { useEffect, useRef } from "react";

export default function MovingBanner() {
  const scrollRef = useRef(null);
  const isPausedRef = useRef(false);

  const logos = [
    { id: 1, src: new URL("../assets/canva.jpeg", import.meta.url).href, alt: "Canva" },
    { id: 2, src: new URL("../assets/meta.png", import.meta.url).href, alt: "Meta" },
    { id: 3, src: new URL("../assets/ms azure.png", import.meta.url).href, alt: "Microsoft Azure" },
    { id: 4, src: new URL("../assets/shopify.png", import.meta.url).href, alt: "Shopify" },
    { id: 5, src: new URL("../assets/vs code.png", import.meta.url).href, alt: "VS Code" },
    { id: 6, src: new URL("../assets/.net.png", import.meta.url).href, alt: ".NET" },
    { id: 7, src: new URL("../assets/adobe illustrator.png", import.meta.url).href, alt: "Adobe Illustrator" },
    { id: 8, src: new URL("../assets/adobe pro.png", import.meta.url).href, alt: "Adobe Pro" },
    { id: 9, src: new URL("../assets/wordpress2.png", import.meta.url).href, alt: "WordPress" },
    { id: 10, src: new URL("../assets/github.png", import.meta.url).href, alt: "GitHub" },
    { id: 11, src: new URL("../assets/media.jpg", import.meta.url).href, alt: "Media" },
    { id: 12, src: new URL("../assets/seo.png", import.meta.url).href, alt: "SEO" },
    { id: 13, src: new URL("../assets/vs.png", import.meta.url).href, alt: "VS" },
   // { id: 14, src: new URL("../assets/wordpress.jpeg", import.meta.url).href, alt: "WordPress" },
    { id: 15, src: new URL("../assets/adobe illustrator.png", import.meta.url).href, alt: "AI" },
    { id: 16, src: new URL("../assets/adobe pro.png", import.meta.url).href, alt: "Pr" },
    {id:17,src:new URL("../assets/Angular.png",import.meta.url).href,alt:"Angular"},
    {id:18,src:new URL("../assets/react.png",import.meta.url).href,alt:"React"},
    {id:19,src:new URL("../assets/Node.js.png",import.meta.url).href,alt:"Node.js"},
    {id:20,src:new URL("../assets/Next.js.png",import.meta.url).href,alt:"Next.js"}, 
    {id:21,src:new URL("../assets/js.png",import.meta.url).href,alt:"JavaScript"},
    {id:22,src:new URL("../assets/mongodb.png",import.meta.url).href,alt:"MongoDB"},
    {id:23,src:new URL("../assets/Python.png",import.meta.url).href,alt:"Python"},
    {id:24,src:new URL("../assets/Kotlin.png",import.meta.url).href,alt:"Kotlin"},
    {id:25,src:new URL("../assets/Next.js.png",import.meta.url).href,alt:"NextJS"},
    {id:26,src:new URL("../assets/Node.js.png",import.meta.url).href,alt:"Node.js"},
    {id:27,src:new URL("../assets/PostgresSQL.png",import.meta.url).href,alt:"PostgreSQL"},
    {id:28,src:new URL("../assets/Pytorch.png",import.meta.url).href,alt:"PyTorch"},
    {id:29,src:new URL("../assets/AWS.png",import.meta.url).href,alt:"AWS"},
    {id:30,src:new URL("../assets/adobe photoshop.png",import.meta.url).href,alt:"Adobe Photoshop"},
    {id:31,src:new URL("../assets/adobe after-effects.png",import.meta.url).href,alt:"Adobe After Effects"},
    {id:32,src:new URL("../assets/Google Cloud.png",import.meta.url).href,alt:"Google Cloud Platform"},
    {id:33,src:new URL("../assets/Swift.png",import.meta.url).href,alt:"Swift"},
    {id:34,src:new URL("../assets/TypeScript.png",import.meta.url).href,alt:"TypeScript"},
    {id:35,src:new URL("../assets/Vue.js.png",import.meta.url).href,alt:"Vue.js"}

  ];

  const scrollingLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    let lastTimestamp = null;
    const pixelsPerSecond = 100; // adjust this to control speed

    // Measure once instead of every frame (avoids forced layout reflow / jank)
    let totalWidth = scrollContainer.scrollWidth / 3;
    const recalc = () => {
      totalWidth = scrollContainer.scrollWidth / 3;
    };
    window.addEventListener("resize", recalc);
    // Recalculate shortly after mount in case images loaded late and changed layout
    const recalcTimeout = setTimeout(recalc, 300);

    const animate = (timestamp) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const delta = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      scrollPosition += isPausedRef.current ? 0 : pixelsPerSecond * delta;
      if (scrollPosition >= totalWidth) {
        scrollPosition -= totalWidth;
      }
      scrollContainer.style.transform = `translate3d(-${Math.round(scrollPosition)}px, 0, 0)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener("resize", recalc);
      clearTimeout(recalcTimeout);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F2FAFB] py-10 sm:py-14">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none" style={{
        background: 'linear-gradient(to right, #F2FAFB, transparent)'
      }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none" style={{
        background: 'linear-gradient(to left, #F2FAFB, transparent)'
      }} />

      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-block rounded-full bg-[#1CA7B8]/10 px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#1CA7B8] font-sans border border-[#1CA7B8]/20">
          Our Technology Stack
        </span>
        <h3 className="mt-2 font-sans text-lg font-semibold text-[#0E2A43] sm:text-xl">
          Tools We Use to <span className="text-[#1CA7B8]">Deliver Excellence</span>
        </h3>
        <div className="flex justify-center gap-2 mt-2">
          <span className="inline-block h-0.5 w-12 rounded-full" style={{ background: 'linear-gradient(90deg, #1CA7B8, #0E2A43)' }} />
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => { isPausedRef.current = true; }}
        onMouseLeave={() => { isPausedRef.current = false; }}
      >
        <div
          ref={scrollRef}
          className="flex items-center h-36 gap-6 sm:gap-8 md:gap-10 whitespace-nowrap"
          style={{ willChange: 'transform' }}
        >
          {scrollingLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="group flex-shrink-0 relative w-28 h-24 sm:w-32 sm:h-28 md:w-36 md:h-32 flex items-center justify-center bg-white rounded-lg shadow-sm transition-all duration-500 hover:shadow-lg hover:scale-105 p-3 sm:p-4"
            >
              {/* Gradient border on hover */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[#1CA7B8] via-[#0E2A43] to-[#1CA7B8] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Inner white background */}
              <div className="absolute inset-0.5 rounded-lg bg-white" />
              
              {/* Logo image */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="relative z-10 w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}