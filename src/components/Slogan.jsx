
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

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
    <section className="bg-[#d0e6cf] px-5 py-6 sm:py-20 sm:px-8 rounded-[100px]">
      <div className="mx-auto max-w-4xl text-center">
        {/* Decorative line */}
        <div className="flex justify-center gap-3 mb-6 sm:mb-8">
          <span className="inline-block h-1 w-16 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43]" />
        </div>

        {/* Quote icon */}
        <Quote className="mx-auto mb-4 sm:mb-6 h-8 w-8 text-[#1CA7B8] opacity-40" />

        {/* Typewriter container - Reduced spacing between lines */}
        <div className="space-y-1 sm:space-y-2">
          {/* Line 1 */}
          <div className="h-[3.5rem] sm:h-[4.5rem] md:h-[5.5rem] flex items-center justify-center">
            <p className="font-sans text-3xl font-bold leading-snug text-[#0E2A43] sm:text-4xl md:text-5xl">
              <span className="text-[#1CA7B8]">{displayText1}</span>
              {!isTypingComplete && displayText1.length === fullText1.length && displayText2.length === 0 && (
                <span className="inline-block w-[2px] h-[0.9em] bg-[#1CA7B8] ml-1 align-middle animate-pulse" />
              )}
            </p>
          </div>

          {/* Line 2 - Same height as line 1 with lighter navy blue */}
          <div className="h-[3.5rem] sm:h-[4.5rem] md:h-[5.5rem] flex items-center justify-center">
            <p className="font-sans text-3xl font-bold leading-snug sm:text-4xl md:text-5xl">
              <span className="text-[#2A4A6A]">{displayText2}</span>
              {!isTypingComplete && displayText2.length > 0 && displayText2.length < fullText2.length && (
                <span className="inline-block w-[2px] h-[0.9em] bg-[#2A4A6A] ml-1 align-middle animate-pulse" />
              )}
              {isTypingComplete && (
                <span className="inline-block w-[2px] h-[0.9em] bg-transparent ml-1 align-middle" />
              )}
            </p>
          </div>
        </div>

        {/* Bottom decorative dots - Reduced top margin */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          <span className="inline-block h-1.5 w-12 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43]" />
          <span className="inline-block h-1.5 w-12 rounded-full bg-[#1CA7B8]/20" />
          <span className="inline-block h-1.5 w-12 rounded-full bg-[#1CA7B8]/10" />
        </div>
      </div>
    </section>
  );
}