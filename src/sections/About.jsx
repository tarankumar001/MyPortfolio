import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import AnimatedTextLines from "../components/AnimatedTextLines"; // ✅ default import
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const text =
    "I like building web apps that make sense and actually work. I mess around with JavaScript frameworks, try to keep my code clean, and just enjoy making cool stuff that people can use. Nothing too fancy — just getting things done, y’know?";

  const aboutText =
    "So yeah, I basically vibe with JavaScript and build stuff on the internet. I write code, break things, fix them again, and drink too much water while doing it. Clean code? Big yes. Bugs? Always uninvited guests. But hey, it’s part of the fun.";

  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-[4rem]">
      <AnimatedHeaderSection
        subTitle="Code with purpose, Built to scale"
        title="About"
        text={text}
        textColor="text-white"
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/man.jpg"
          alt="man"
          className="max-w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className="w-full" />
      </div>
    </section>
  );
};

export default About;
