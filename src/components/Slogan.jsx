import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import logoImage from "../assets/logo-white.png";

export default function Slogan() {
  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText1 = "Smart Tech, Smarter Future";
  const fullText2 = "Where Ideas Meet Technology";

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;
    let timeoutId;

    const typeText = () => {
      // Type first line
      if (index1 <= fullText1.length) {
        setDisplayText1(fullText1.substring(0, index1));
        index1++;
        timeoutId = setTimeout(typeText, 80);
      } 
      // After first line complete, start second line
      else if (index2 <= fullText2.length) {
        setDisplayText2(fullText2.substring(0, index2));
        index2++;
        timeoutId = setTimeout(typeText, 80);
      } 
      // Both complete
      else {
        setIsTypingComplete(true);
      }
    };

    const startDelay = setTimeout(typeText, 500);
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(startDelay);
    };
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] py-8 sm:py-10 md:py-12 px-5 sm:px-8">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <img
            src={logoImage}
            alt="Dukes Tech Services"
            className="w-56 sm:w-64 md:w-72 lg:w-80 h-auto object-contain"
          />
        </div>

        {/* Text content */}
        <div className="text-center md:text-left">
          {/* Decorative line */}
          <div className="flex justify-center md:justify-start gap-3 mb-3 sm:mb-4">
            <span className="inline-block h-1 w-16 bg-white/70" />
          </div>

          {/* Quote icon */}
          <Quote className="mx-auto md:mx-0 mb-2 sm:mb-3 h-7 w-7 text-white opacity-50" />

          {/* Typewriter container */}
          <div>
            {/* Line 1 */}
            <div className="min-h-[2.75rem] sm:min-h-[3.25rem] flex items-center justify-center md:justify-start">
              <p className="font-sans text-2xl font-bold leading-snug text-white sm:text-3xl md:text-4xl">
                <span>{displayText1}</span>
                {!isTypingComplete && displayText1.length === fullText1.length && displayText2.length === 0 && (
                  <span className="inline-block w-[2px] h-[0.9em] bg-white ml-1 align-middle animate-pulse" />
                )}
              </p>
            </div>

            {/* Line 2 */}
            <div className="min-h-[2.75rem] sm:min-h-[3.25rem] flex items-center justify-center md:justify-start">
              <p className="font-sans text-2xl font-bold leading-snug sm:text-3xl md:text-4xl">
                <span className="text-white/80">{displayText2}</span>
                {!isTypingComplete && displayText2.length > 0 && displayText2.length < fullText2.length && (
                  <span className="inline-block w-[2px] h-[0.9em] bg-white/80 ml-1 align-middle animate-pulse" />
                )}
                {isTypingComplete && (
                  <span className="inline-block w-[2px] h-[0.9em] bg-transparent ml-1 align-middle" />
                )}
              </p>
            </div>
          </div>

          {/* Bottom decorative dots */}
          <div className="flex justify-center md:justify-start gap-2 mt-3 sm:mt-4">
            <span className="inline-block h-1.5 w-12 rounded-full bg-white/70" />
            <span className="inline-block h-1.5 w-12 rounded-full bg-white/30" />
            <span className="inline-block h-1.5 w-12 rounded-full bg-white/15" />
          </div>
        </div>
      </div>
    </section>
  );
}