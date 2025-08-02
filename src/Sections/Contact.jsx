import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";

const Contact = () => {
  const text = "Shoot your shot — a message, a collab idea, or just a meme. I'm listening.";

  const items = [
  "building cool stuff since… 2AM last night",
  "your idea + my code = 🔥",
  "just out here breaking and fixing things",
  "making pixels dance and servers cry",
  "if it compiles, I ship it 🤷‍♂️",
  "debugging my life one console.log at a time",
];


  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }),[];

  return (
    <section id="contact" className="flex flex-col justify-between min-h-screen bg-black">
      <div>
        <AnimatedHeaderSection
s         subTitle={"Throw me an idea, I’ll slap some code on it 😎"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />

        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            {/* Email Section */}
            <div>
              <h2 className="social-link">Email</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p>ptarankumar@gmail.com</p>
            </div>

            {/* Phone Section */}
            <div>
              <h2 className="social-link">Phone</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl lowercase md:text-2xl lg:text-3xl">9444539407</p>
            </div>

            {/* Social Media Section */}
            <div>
              <h2 className="social-link">Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-xs leading-loose tracking-wides uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    {"{"}
                    {social.name}
                    {"}"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div> 
      </div>
      <Marquee items={items} className="text-white bg-transparent"/>
    </section>
  );
};

export default Contact;
