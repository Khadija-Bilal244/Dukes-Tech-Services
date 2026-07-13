import { useEffect, useRef } from "react";

export default function MovingBanner() {
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);
  const isPausedRef = useRef(false);

  const logos = [
    { id: 1, src: new URL("../assets/canva.jpeg", import.meta.url).href, alt: "Canva" },
    { id: 2, src: new URL("../assets/meta.png", import.meta.url).href, alt: "Meta" },
    { id: 3, src: new URL("../assets/ms azure.png", import.meta.url).href, alt: "Microsoft Azure" },
    { id: 4, src: new URL("../assets/shopify.png", import.meta.url).href, alt: "Shopify" },
    { id: 5, src: new URL("../assets/vs code.png", import.meta.url).href, alt: "Visual Studio Code" },
    { id: 6, src: new URL("../assets/adobe illustrator.png", import.meta.url).href, alt: "Adobe Illustrator" },
    { id: 7, src: new URL("../assets/.net.png", import.meta.url).href, alt: ".NET" },
    { id: 8, src: new URL("../assets/adobe pro.png", import.meta.url).href, alt: "Adobe Pro" },
    { id: 9, src: new URL("../assets/wordpress2.png", import.meta.url).href, alt: "WordPress" },
    { id: 10, src: new URL("../assets/github.png", import.meta.url).href, alt: "GitHub" },
    { id: 11, src: new URL("../assets/media.jpg", import.meta.url).href, alt: "Media" },
    { id: 12, src: new URL("../assets/seo.png", import.meta.url).href, alt: "SEO" },
    { id: 13, src: new URL("../assets/vs.png", import.meta.url).href, alt: "Visual Studio" },
    { id: 17, src: new URL("../assets/Angular.png", import.meta.url).href, alt: "Angular" },
    { id: 18, src: new URL("../assets/react.png", import.meta.url).href, alt: "React" },
    {id:19,src:new URL("../assets/TensorFlow.png",import.meta.url).href,alt:"TensorFlow" }
  ];

  const logosRow2 = [
    { id: 20, src: new URL("../assets/Next.js.png", import.meta.url).href, alt: "NextJS" },
    { id: 21, src: new URL("../assets/js.png", import.meta.url).href, alt: "JavaScript" },
    { id: 22, src: new URL("../assets/mongodb.png", import.meta.url).href, alt: "MongoDB" },
    { id: 23, src: new URL("../assets/Python.png", import.meta.url).href, alt: "Python" },
    { id: 24, src: new URL("../assets/Kotlin.png", import.meta.url).href, alt: "Kotlin" },
    { id: 26, src: new URL("../assets/Node.js.png", import.meta.url).href, alt: "NodeJS" },
    { id: 27, src: new URL("../assets/PostgresSQL.png", import.meta.url).href, alt: "PostgreSQL" },
    { id: 28, src: new URL("../assets/PyTorch.png", import.meta.url).href, alt: "PyTorch" },
    { id: 29, src: new URL("../assets/AWS.png", import.meta.url).href, alt: "AWS" },
    { id: 30, src: new URL("../assets/adobe photoshop.png", import.meta.url).href, alt: "Adobe Photoshop" },
    { id: 31, src: new URL("../assets/adobe after-effects.png", import.meta.url).href, alt: "Adobe After Effects" },
    { id: 32, src: new URL("../assets/Google Cloud.png", import.meta.url).href, alt: "Google Cloud Platform" },
    { id: 33, src: new URL("../assets/Swift.png", import.meta.url).href, alt: "Swift" },
    { id: 34, src: new URL("../assets/TypeScript.png", import.meta.url).href, alt: "TypeScript" },
    { id: 35, src: new URL("../assets/Vue.js.png", import.meta.url).href, alt: "VueJS" },
  ];

  const scrollingLogosTop = [...logos, ...logos, ...logos];
  const scrollingLogosBottom = [...logosRow2, ...logosRow2, ...logosRow2];

  useEffect(() => {
    const topContainer = topRowRef.current;
    const bottomContainer = bottomRowRef.current;
    if (!topContainer || !bottomContainer) return;

    let animationId;
    let lastTimestamp = null;
    const pixelsPerSecond = 100; // adjust this to control speed

    // Measure once instead of every frame (avoids forced layout reflow / jank)
    let topWidth = topContainer.scrollWidth / 3;
    let bottomWidth = bottomContainer.scrollWidth / 3;

    // Top row moves right -> left, so it starts at 0
    let topPosition = 0;
    // Bottom row moves left -> right, so it starts fully shifted left
    let bottomPosition = bottomWidth;

    const recalc = () => {
      topWidth = topContainer.scrollWidth / 3;
      bottomWidth = bottomContainer.scrollWidth / 3;
    };
    window.addEventListener("resize", recalc);
    // Recalculate shortly after mount in case images loaded late and changed layout
    const recalcTimeout = setTimeout(recalc, 300);

    const animate = (timestamp) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const delta = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      if (!isPausedRef.current) {
        // Right to left: position increases
        topPosition += pixelsPerSecond * delta;
        if (topPosition >= topWidth) {
          topPosition -= topWidth;
        }

        // Left to right: position decreases
        bottomPosition -= pixelsPerSecond * delta;
        if (bottomPosition <= 0) {
          bottomPosition += bottomWidth;
        }
      }

      topContainer.style.transform = `translate3d(-${Math.round(topPosition)}px, 0, 0)`;
      bottomContainer.style.transform = `translate3d(-${Math.round(bottomPosition)}px, 0, 0)`;

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

  const renderLogoCard = (logo, index) => (
    <div
      key={`${logo.id}-${index}`}
      className="group flex-shrink-0 relative w-28 h-24 sm:w-32 sm:h-28 md:w-36 md:h-32 flex items-center justify-center bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-500 hover:shadow-lg hover:scale-105 p-3 sm:p-4"
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

      {/* Hover overlay showing the technology name instead of a raw alt attribute tooltip */}
      <div className="absolute inset-0.5 z-20 rounded-lg bg-[#0A1428]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="w-full text-white text-[11px] sm:text-md md:text-lg font-semibold text-center px-2 leading-tight whitespace-normal break-words">
          {logo.alt}
        </span>
      </div>
    </div>
  );

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
        <span className="inline-block rounded-full bg-[#1CA7B8]/10 px-5 py-1.5 text-[14px] sm:text-[10px] md:text-[12px] font-bold uppercase tracking-[0.15em] text-[#1CA7B8] font-sans border border-[#1CA7B8]/20">
          Our Technology Stack
        </span>
        <h3 className="mt-2 font-sans text-2xl font-semibold text-[#0E2A43] sm:text-3xl">
          Tools We Use to <span className="text-[#1CA7B8]">Deliver Excellence</span>
        </h3>
        <div className="flex justify-center gap-2 mt-2">
          <span className="inline-block h-0.5 w-12 rounded-full" style={{ background: 'linear-gradient(90deg, #1CA7B8, #0E2A43)' }} />
        </div>
      </div>

      {/* Top row: moves right to left */}
      <div
        className="relative overflow-hidden mb-6 sm:mb-8"
        onMouseEnter={() => { isPausedRef.current = true; }}
        onMouseLeave={() => { isPausedRef.current = false; }}
      >
        <div
          ref={topRowRef}
          className="flex items-center h-36 gap-6 sm:gap-8 md:gap-10 whitespace-nowrap"
          style={{ willChange: 'transform' }}
        >
          {scrollingLogosTop.map((logo, index) => renderLogoCard(logo, index))}
        </div>
      </div>

      {/* Bottom row: moves left to right */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => { isPausedRef.current = true; }}
        onMouseLeave={() => { isPausedRef.current = false; }}
      >
        <div
          ref={bottomRowRef}
          className="flex items-center h-36 gap-6 sm:gap-8 md:gap-10 whitespace-nowrap"
          style={{ willChange: 'transform' }}
        >
          {scrollingLogosBottom.map((logo, index) => renderLogoCard(logo, index))}
        </div>
      </div>
    </section>
  );
}