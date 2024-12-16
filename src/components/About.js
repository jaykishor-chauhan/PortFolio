import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section className="body-font">
      <div className="p-5 mt-3 mx-auto md:mt-5 md:mx-10 lg:mx-16">
        <div id="about" className="flex flex-col text-center w-full mb-3">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            About me
          </h1>
          <div className="flex items-center justify-center">
          <div className="border-t border-black mt-1.5" style={{ width: '0.8cm', borderTopWidth: '2.5px' }}></div>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="false"
              className="mx-4 text-lg leading-relaxed font-medium text-dark-orange"
            >
              who i am
            </p>
            <div className="border-t border-black mt-1.5" style={{ width: '0.8cm', borderTopWidth: '2.5px' }}></div>
          </div>
        </div>

        <div className="mx-auto flex lg:flex-row flex-col items-center justify-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="lg:max-w-lg sm:w-2/3 lg:w-1/2 w-full mb-10 md:mb-0"
          >
            <img
              className="object-cover object-center pointer-events-none rounded backdrop-contrast-200 backdrop-brightness-200"
              alt="hero"
              src={require("../assets/Images/About2.png")}
            />
          </div>
          <div className="lg:w-1/2 justify-center lg:p-5 xl:p-7 md:p-5 flex flex-col items-center text-justify">
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="false"
              className="font-small text-gray-700 text-sm lg:text-base xl:text-lg leading-loose xl:leading-8"
            >
              {/* <span className="text-red-600 text-4xl">I’m Jaykishor,</span><br /> */}
              Hello! My name is Jaykishor Prasad Chauhan. 
              I’m originally from Nepal and have been living in India for the past three years. 
              During my time here, I’ve gained valuable experience through various entry-level positions, 
              which have significantly enhanced my work ethic, communication skills, and adaptability.<br /><br />

              My journey into technology began with a passion for problem-solving, 
              which motivated me to pursue opportunities that challenge me to think creatively and critically. 
              These experiences have not only shaped my technical skills but also allowed me to connect with like-minded individuals, 
              build lasting relationships, and continuously grow both personally and professionally. <br/><br/>

              Let’s connect—feel free to reach out through my social media links.
            </p>
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="false"
              className="mt-7 flex gap-x-4 md:gap-x-5 justify-center md:justify-between"
            >
              <button className="inline-flex font-medium text-white bg-black border-2 border-black py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Contact Me
                </Link>
              </button>
              <a
                // link for the resume
                href="https://raw.githubusercontent.com/jaykishor-chauhan/resume/main/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <button className="inline-flex font-medium text-white bg-dark-orange border-2 border-dark-orange py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
                  Get Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
