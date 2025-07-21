import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

// React component to split text into animated lines
const AnimatedTextLines = ({ text, className }) => {
  const containerRef = useRef(null);
  const lineRefs = useRef([]); // fix: was undefined before

  const lines = text.split("\n").filter((line) => line.trim() !== "");

  useGSAP(() => {
    if (lineRefs.current.length > 0) {
      gsap.from(lineRefs.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "back.out", // fix: was "black.out" (invalid)
        // removed scrollTrigger since it's not defined; add it back if configured
      });
    }
  });

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span
          className="block leading-relaxed tracking-wide text-pretty"
          key={index}
          ref={(el) => (lineRefs.current[index] = el)} // fix: correct ref assignment
        >
          {line}
        </span>
      ))}
    </div>
  );
};

export default AnimatedTextLines;
