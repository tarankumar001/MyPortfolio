import React, { useEffect, useRef, useState } from "react";
import { socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";
      // Hook to use GSAP animations in React

const Navbar = () => {
  // Creating references to access HTML elements directly
  const navRef = useRef(null)           // The entire navbar
  const linksRef = useRef([])           // An array to store refs of nav links
  const contactRef = useRef(null)       // Contact section at the bottom
  const topLineRef = useRef(null)       // Top line of the menu toggle button
  const bottomLineRef = useRef(null)    // Bottom line of the menu toggle button
  const tl = useRef(null)      
  const iconTl = useRef(null); // Animation timeline for hamburger icon
         // GSAP timeline reference

  const [isOpen, setIsOpen] = useState(false); // Track if the navbar is open or closed
  const [showBurger,setShowBurger]=useState(true);

  // This effect runs when the component mounts, to setup GSAP animations
  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
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
      );

    iconTl.current = gsap
      .timeline({ paused: true })
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
  }, []); // This runs once when the component is mounted

  useEffect(()=>{
    let lastScrollY =window.scrollY;
    const handleScroll=()=>{
      const currentScrollY=window.scrollY;
      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
      lastScrollY=currentScrollY;
    }
    window.addEventListener("scroll", handleScroll, { passive: true });

    return()=>window.removeEventListener("scroll",handleScroll);
  },[]);

  // This function toggles the navbar open or closed
  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    }// If menu is open, reverse animation (close it)
    else {
      tl.current.play(); 
      iconTl.current.play();  
            }        // If menu is closed, play animation (open it)
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <>
      {/* This is the actual navbar panel that slides in/out */}
      <nav
        ref={navRef}
        className="fixed z-50 flex-col justify-between w-full h-full px-10 py-28 bg-black text-white/80 uppercase gap-y-10 md:w-1/2 md:left-1/2"
      >
        {/* This is the list of page sections (Home, About, etc.) */}
        <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl">
          {["home", "about", "projects", "achievements", "contact"].map((section, index) => (
            <div key={index} ref={el => (linksRef.current[index] = el)}>
              <Link className="transition-all duration-300 cursor-pointer hover:text-white" href={`#{section}`}
              smooth offset={0} duration={2000}
              >
                {section}
              </Link>
            </div>
          ))}
        </div>
        

        {/* Contact section shown at the bottom of nav */}
 <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider text-white/50">E-mail</p>
            <p className="text-xl tracking-widest lowercase text-pretty">
              ptarankumar@gmail.com
            </p>
          </div>

  {/* Social media links block */}
  <div className="font-light">
            <p className="tracking-wider text-white/50">Social Media</p>
            <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-sm leading-loose tracking-widest uppercase hover:text-white transition-colors duration-300"
                >
                  {"{ "}
                  {social.name}
                  {" }"}
                </a>
              ))}
            </div>
          </div>

  {/* GitHub block */}
  <div className="md:mt-0">
    <p className="tracking-wider text-white/50">GitHub</p>
    <p className="text-xl tracking-widest">[GitHub]</p>
  </div>
</div>

      </nav>

    

      {/* Floating toggle button in top right corner to open/close menu */}
      <div
  onClick={toggleMenu}
  style={{
    clipPath: showBurger ? "circle(50% at 50% 50%)" : "circle(0% at 50% 50%)",
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
  )
}

export default Navbar
