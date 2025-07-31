import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useState } from "react";

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const text =
    "Feature projects that have been meticulously crafted with passion to drive results and impact";

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);
  };

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle="Code with purpose, Built to scale"
        title="Projects"
        text={text}
        textColor="text-black"
        withScrollTrigger={true}
      />

      <div className="relative flex flex-col font-light">
        {projects.map((project, index) => (
          <div
            key={project.id}
            id="project"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {/* title */}
            <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
              <h2 className="lg:text-[32px] text-[26px] leading-none flex items-center gap-2">
                {project.name}
                <Icon icon="uis:arrow-up-right" className="md:size-6 size-5" />
              </h2>
            </div>

            {/* divider */}
            <div className="w-full h-0.5 bg-black/80" />

            {/* frameworks (deduplicated by name) */}
            <div className="flex px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
              {[...new Map(project.frameworks.map(fw => [fw.name, fw])).values()].map((framework) => (
                <p
                  key={framework.id}
                  className="text-black transition-colors duration-500 md:group-hover:text-white"
                >
                  {framework.name}
                </p>
              ))}
            </div>

            {/* Mobile preview images */}
            <div className="relative flex items-center justify-center px-10 *:md:hidden h-[400px]">
              <img
                src={project.bgImage}
                alt={`${project.name}-bg-image`}
                className="object-cover w-full h-full rounded-md brightness-50"
              />
              <img
                src={project.image}
                alt={`${project.name}-image`}
                className="absolute bg-center px-14 rounded-xl"
              />
            </div>
          </div>
        ))}

        {/* Desktop preview image (on hover) */}
        <div className="fixed top-2/6 left-0 z-50 overflow-hidden border-black pointer-events-none w-[960px] hidden md:block">
          {currentIndex !== null && (
            <img
              src={projects[currentIndex].image}
              alt="preview-image"
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
