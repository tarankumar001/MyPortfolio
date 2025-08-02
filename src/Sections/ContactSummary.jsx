import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // 👈 make sure this comes BEFORE registerPlugin


gsap.registerPlugin(ScrollTrigger);

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
  "dude I swear this code just gaslit me 💀",
  "been staring at this bug like it owes me money",
  "coffee: 1, sleep: 0 ☕",
  "bro I just pushed and prayed 🙏",
  "lowkey might rename this repo to 'chaos-v2'",
];

 const items2 = [
  "yo, hit me up 👋",
  "slide into the DMs 📩",
  "let’s make something cool 🧠",
  "got ideas? let’s chat 💬",
  "don’t be shy, say hi 👀",
];


  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      {/* Marquee */}
      <Marquee items={items} />

      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          "Let's build a <br />
          <span className="font-normal">memorable</span>&nbsp;
          <span className="italic">inspiring</span>
          <br />
          web application <span className="text-gold">together</span>"
        </p>
      </div>

      {/* Marquee */}
      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-2"
        iconClassName="stroke-gold stroke-2 text-primary"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;
