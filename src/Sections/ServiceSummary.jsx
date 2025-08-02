import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20,
      scrollTrigger: {
        trigger: "#title-service-1",
        scrub: true,
      },
    });

    gsap.to("#title-service-2", {
      xPercent: -30,
      scrollTrigger: {
        trigger: "#title-service-2",
        scrub: true,
      },
    });

    gsap.to("#title-service-3", {
      xPercent: 100,
      scrollTrigger: {
        trigger: "#title-service-3",
        scrub: true,
      },
    });

    gsap.to("#title-service-4", {
      xPercent: -100,
      scrollTrigger: {
        trigger: "#title-service-4",
        scrub: true,
      },
    });
  });

  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive">
  {/* Title 1 */}
  <div id="title-service-1" className="mb-6">
    <p className="text-2xl font-semibold uppercase tracking-wider">Skills</p>
  </div>

  {/* Title 2 */}
  <div
    id="title-service-2"
    className="flex items-center justify-center gap-3"
  >
    <p className="text-lg uppercase tracking-widest">Interpersonal Fluidity</p>
    <div className="w-10 h-1 md:w-32 bg-gold" />
    <p className="text-lg uppercase tracking-widest">Subliminal Influence</p>
  </div>

  {/* Title 3 */}
  <div
    id="title-service-3"
    className="flex items-center justify-center gap-3 mt-10"
  >
    <p className="italic text-lg uppercase tracking-widest">Situational Awareness</p>
    <div className="w-10 h-1 md:w-32 bg-gold" />
    <p className="text-lg uppercase tracking-widest">Cognitive dection</p>
    <div className="w-10 h-1 md:w-32 bg-gold" />
    <p className="text-lg uppercase tracking-widest">Perceptual Agility</p>
  </div>

  {/* Title 4 */}
  <div id="title-service-4" className="mt-12">
    <p className="text-xl uppercase tracking-wider">Intuitive Decision-Making</p>
  </div>
</section>

  );
};

export default ServiceSummary;
