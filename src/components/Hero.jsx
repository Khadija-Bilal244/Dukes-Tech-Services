// Hero.jsx
// Clean white background with dynamic rotating hero images
import { useState, useEffect } from "react";
import heroImg1 from "../assets/hero-img1.png";
import heroImg2 from "../assets/hero-img2.png";
import heroImg3 from "../assets/hero-img3.png";
import DotMotif from "./DotMotif";
import { ArrowRight } from "lucide-react";

const HERO_IMAGES = [heroImg1, heroImg2, heroImg3];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-white min-h-screen md:min-h-[90vh] flex items-center pt-28 sm:pt-32 md:pt-20 lg:pt-0">
      {/* Dot motifs as subtle accents */}
      <DotMotif className="absolute -left-8 top-8 h-40 w-40 opacity-20 md:h-56 md:w-56" />
      <DotMotif className="absolute -right-10 bottom-0 h-48 w-48 opacity-10 md:h-64 md:w-64" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 lg:py-14 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Text side - Now on top on mobile */}
          <div className="order-1">
            {/* Short heading - Responsive sizes */}
            <h1 className="font-sans font-bold leading-[1.2] text-[#0E2A43]">
              <span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl block">
                Empowering
              </span>
              <span className="text-[#1CA7B8] text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl block">
                Businesses
              </span>
              <span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl block">
                With Technology
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 sm:mt-6 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed text-[#0E2A43]/70">
              Innovative technology solutions that inspire growth and digital transformation.
              From custom web development to cloud-based solutions, we deliver reliable,
              scalable, and future-ready services tailored to your business goals.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-6 sm:px-8 md:px-8 py-3 sm:py-3.5 md:py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1CA7B8]/25 transition-all hover:scale-105 hover:shadow-[#1CA7B8]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1CA7B8] focus-visible:ring-offset-2"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#0E2A43]/10 px-6 sm:px-8 md:px-8 py-3 sm:py-3.5 md:py-3.5 text-sm font-semibold text-[#0E2A43] transition-all hover:bg-[#0E2A43] hover:text-white hover:border-[#0E2A43]"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Image side - Below text on mobile */}
          <div className="order-2 mt-4 sm:mt-6 md:mt-0">
            <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#F2FAFB] to-white p-1.5 sm:p-2 shadow-2xl shadow-[#0E2A43]/5 ring-1 ring-[#0E2A43]/5">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                <img
                  src={HERO_IMAGES[currentImage]}
                  alt="Dukes Tech Services - Technology solutions"
                  className="w-full h-auto object-cover transition-opacity duration-1000 max-h-[300px] sm:max-h-[400px] md:max-h-none"
                />
                
                {/* Image indicators */}
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                  {HERO_IMAGES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`h-1.5 sm:h-2 rounded-full transition-all ${
                        index === currentImage
                          ? "w-6 sm:w-8 bg-[#1CA7B8]"
                          : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}