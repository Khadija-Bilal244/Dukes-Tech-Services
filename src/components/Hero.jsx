// Hero.jsx
// Dynamic background image with centered text overlay
import { useState, useEffect } from "react";
import heroImg4 from "../assets/hero-img1.png";
import heroImg2 from "../assets/hero-img2.png";
import heroImg3 from "../assets/hero-img3.png";
import heroImg1 from "../assets/hero-img4.png";
import heroImg5 from "../assets/hero-img5.jpg";
import { ArrowRight } from "lucide-react";

const HERO_IMAGES = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${HERO_IMAGES[currentImage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1.5s ease-in-out',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      
      {/* Additional gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Dot motifs as subtle accents */}
      <div className="absolute top-8 left-8 opacity-20 z-10">
        <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
          <circle cx="10" cy="10" r="3" fill="#1CA7B8" />
          <circle cx="30" cy="5" r="2" fill="#1CA7B8" />
          <circle cx="50" cy="15" r="3" fill="#1CA7B8" />
          <circle cx="70" cy="5" r="2" fill="#1CA7B8" />
          <circle cx="90" cy="10" r="3" fill="#1CA7B8" />
          <circle cx="15" cy="30" r="2" fill="#1CA7B8" />
          <circle cx="35" cy="35" r="3" fill="#1CA7B8" />
          <circle cx="55" cy="30" r="2" fill="#1CA7B8" />
          <circle cx="75" cy="35" r="3" fill="#1CA7B8" />
          <circle cx="95" cy="30" r="2" fill="#1CA7B8" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 z-10">
        <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
          <circle cx="10" cy="10" r="3" fill="#0E2A43" />
          <circle cx="30" cy="5" r="2" fill="#0E2A43" />
          <circle cx="50" cy="15" r="3" fill="#0E2A43" />
          <circle cx="70" cy="5" r="2" fill="#0E2A43" />
          <circle cx="90" cy="10" r="3" fill="#0E2A43" />
          <circle cx="15" cy="30" r="2" fill="#0E2A43" />
          <circle cx="35" cy="35" r="3" fill="#0E2A43" />
          <circle cx="55" cy="30" r="2" fill="#0E2A43" />
          <circle cx="75" cy="35" r="3" fill="#0E2A43" />
          <circle cx="95" cy="30" r="2" fill="#0E2A43" />
        </svg>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImage
                ? "w-10 bg-[#1CA7B8]"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* Main Heading */}
        <h1 className="mt-10 font-sans font-bold leading-[1.1] text-white">
          <span className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl block">
            Empowering
          </span>
          <span className="text-[#1CA7B8] text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl block">
            Businesses
          </span>
          <span className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl block">
            With Technology
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl mx-auto text-lg sm:text-lg md:text-xl leading-relaxed text-white/90">
          Innovative technology solutions that inspire growth and digital transformation.
          From custom web development to cloud-based solutions, we deliver reliable,
          scalable, and future-ready services tailored to your business goals.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="mt-6 group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-8 py-3.5 text-md font-semibold text-white shadow-lg shadow-[#1CA7B8]/25 transition-all hover:scale-105 hover:shadow-[#1CA7B8]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1CA7B8] focus-visible:ring-offset-2"
          >
            Got Questions? Ask Dukes AI
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="h-10 w-6 rounded-full border-2 border-white/20 flex justify-center">
            <div className="h-2 w-1.5 rounded-full bg-white/40 animate-bounce mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
}