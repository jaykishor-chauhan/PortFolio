import React, { useRef } from 'react';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectsData from "./ProjectsData";

const Projects = () => {
  const scrollRef = useRef(null);

  // Function to handle scrolling
  const scroll = (direction) => {
    if (scrollRef.current) {
      // Scroll by 300px left or right depending on the direction
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="px-3 py-5 mx-auto text-center sm:mx-6 md:mx-12 md:pt-5 md:mt-5 xl:mx-40">
        <div
          id="projects"
          className="flex flex-wrap w-full flex-col items-center text-center"
        >
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-3 text-gray-900">
            Projects
          </h1>
          <div className="flex items-center justify-center">
            {/* Left Line */}
            <div
              className="border-t border-black"
              style={{ width: "0.4cm", borderTopWidth: "2.5px" }}
            ></div>

            {/* Text */}
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="false"
              className="mx-4 text-lg font-medium leading-relaxed text-dark-orange"
            >
              My Works
            </p>

            {/* Right Line */}
            <div
              className="border-t border-black"
              style={{ width: "0.4cm", borderTopWidth: "2.5px" }}
            ></div>
          </div>
        </div>

        {/* Horizontal Scrollable Section with Buttons */}
        <div className="mt-4 md:mt-8 relative">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-dark-orange text-white hover:bg-cornsilk hover:border-2 hover:text-black font-bold hover:border-dark-orange  p-3 rounded-full shadow-md z-10"
          >
            &#60;
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-dark-orange hover:bg-cornsilk hover:border-2 hover:text-black font-bold hover:border-dark-orange p-3 rounded-full shadow-md z-10"
          >
            &#62;
          </button>

          {/* Scrollable Container */}
          <div ref={scrollRef} className="overflow-x-auto scrollbar-hide p-[1.5rem]">
            <div className="flex " >
              {ProjectsData.reverse().map((project) => (
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                  data-aos-once="false"
                  key={project.id}
                  className="group relative flex flex-col flex-wrap h-[400px] min-w-[330.7px] w-[600px] shadow-xl rounded-xl mr-[1.5rem]"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-80 rounded-xl h-[400px]"
                  />
                  <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 h-0 overflow-hidden group-hover:h-full transition-[height_0.5s] duration-500 bg-darkblue rounded-xl">
                    <h3
                      data-aos="zoom-in-up"
                      data-aos-duration="1000"
                      data-aos-once="false"
                      className="text-2xl font-medium text-white my-2"
                    >
                      {project.name}
                    </h3>
                    <p
                      data-aos="zoom-in-up"
                      data-aos-duration="1000"
                      data-aos-once="false"
                      className="px-2 text-lg text-white"
                    >
                      {project.description}
                    </p>
                    <div
                      data-aos="zoom-in-up"
                      data-aos-duration="1000"
                      data-aos-once="false"
                      className="flex flex-wrap items-center gap-3 mt-3"
                    >
                      {project?.icons?.map((Icon, index) => (
                        <div className="rounded-full p-2" key={index}>
                          <Icon className="text-white text-4xl font-bold" />
                        </div>
                      ))}
                    </div>
                    <div
                      data-aos="zoom-in-up"
                      data-aos-duration="1000"
                      data-aos-once="false"
                      className="flex gap-7 justify-center items-center my-7 text-2xl"
                    >
                      <div className="bg-white rounded-full p-2">
                        <a
                          className="text-darkblue text-xl bg-white"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub />
                        </a>
                      </div>
                      <div className="bg-white rounded-full p-2">
                        <a
                          className="text-darkblue text-xl bg-white"
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt className="p-[1px]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='h-[2.5rem]'></div>
    </section>
  );
};

export default Projects;
