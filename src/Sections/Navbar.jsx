import React, { useEffect, useRef, useState } from "react";
import { socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const socialRefs = useRef([]);
  const tl = useRef(null);
  const iconTl = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);

  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });

    tl.current = gsap.timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2"
      )
      .fromTo(
        socialRefs.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "<+0.1"
      );

    iconTl.current = gsap.timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );

    // Hover effect for socials
    socialRefs.current.forEach((el) => {
      gsap.set(el, { transformOrigin: "center" });
      el.addEventListener("mouseenter", () => {
        gsap.to(el, { scale: 1.1, duration: 0.3, ease: "back.out(2)" });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, { scale: 1, duration: 0.3, ease: "back.out(2)" });
      });
    });
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Fullscreen Nav */}
      <nav
        ref={navRef}
        className="fixed z-50 flex-col justify-between w-full h-full px-10 py-28 bg-black text-white/80 uppercase gap-y-10 md:w-1/2 md:left-1/2"
      >
        <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl">
          {["home", "about", "projects", "contact"].map((section, index) => (
            <div key={index} ref={(el) => (linksRef.current[index] = el)}>
              <Link
                className="transition-all duration-300 cursor-pointer hover:text-white"
                to={section === "projects" ? "work" : section}
                smooth
                offset={0}
                duration={2000}
              >
                {section}
              </Link>
            </div>
          ))}
        </div>

        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
          {/* Email Block */}
          <div className="font-light">
            <p className="tracking-wider text-white/50">E-mail</p>
            <p className="text-xl tracking-widest lowercase">
              ptarankumar@gmail.com
            </p>
          </div>

          {/* Socials Block */}
          <div className="font-light">
            <p className="tracking-wider text-white/50">Social Media</p>
            <div className="flex flex-col flex-wrap md:flex-row gap-x-2 gap-y-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  ref={(el) => (socialRefs.current[index] = el)}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: social.color,
                    borderBottom: `1px solid ${social.color}`,
                  }}
                  className="social-link text-sm leading-loose tracking-widest uppercase transition-colors duration-300 hover:opacity-90"
                >
                  {"{ "}{social.name}{" }"}
                </a>
              ))}
            </div>
          </div>

          {/* GitHub and Resume Buttons */}
          <div className="flex flex-col gap-2">
            <span className="px-2 py-1 bg-white/10 rounded hover:bg-white/20 transition-colors duration-300">
              <a
                href="https://github.com/tarankumar001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl tracking-widest"
              >
                My Github
              </a>
            </span>

            <span className="px-2 py-1 bg-white/10 rounded hover:bg-white/20 transition-colors duration-300">
              <a
              
                href="https://drive.google.com/drive/folders/12dPxwHLZxDahSoWMTADcNXu4syZa5wUk?usp=sharing"
                target="_blank"

                download
                className="text-xl tracking-widest"
              >
                My Resume
              </a>
            </span>
          </div>
        </div>
      </nav>

      {/* Hamburger Icon */}
      <div
        onClick={toggleMenu}
        style={{
          clipPath: showBurger
            ? "circle(50% at 50% 50%)"
            : "circle(0% at 50% 50%)",
        }}
        className="fixed z-50 flex flex-col items-center justify-center gap-[6px] bg-black rounded-full cursor-pointer w-14 h-14 md:w-16 md:h-16 top-4 right-6 transition-all duration-300"
      >
        <span
          ref={topLineRef}
          className="block w-6 h-0.5 bg-white rounded-full"
        />
        <span
          ref={bottomLineRef}
          className="block w-6 h-0.5 bg-white rounded-full"
        />
      </div>
    </>
  );
};

export default Navbar;
