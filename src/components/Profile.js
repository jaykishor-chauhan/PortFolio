import { TypeAnimation } from "react-type-animation";
import SocialHandles from "./SocialHandles";
import { FaDownload } from "react-icons/fa";

const Profile = () => {
  return (
    <section className="text-gray-600 body-font pt-16 lg:min-h-75vh lg:pb-[179px] lg:pt-[91px]">
      <div className="p-8 mx-auto gap-2 flex flex-col md:pt-12 md:px-7 lg:py-20 lg:flex-row-reverse items-center min-h-fit">
        {/* Image Section */}
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="false"
          className="w-full sm:max-w-xs md:max-w-sm lg:max-w-md sm:w-2/6 lg:mr-10 xl:mr-20 lg:p-5 lg:w-1/3 xl:w-1/4 flex-none"
        >
          <img
            className="object-cover object-center bg-[#b9aeb6] border-[1.1px] border-dark-orange pointer-events-none rounded-full backdrop-contrast-200 backdrop-brightness-200"
            alt="Jaykishor"
            src={require("../assets/Images/Profile0.png")}
          />
        </div>

        {/* Text Section */}
        <div className="font-mono lg:flex-grow flex flex-col md:mb-0 items-start text-start xl:scale-105 lg:pt-[2.7rem] lg:pl-[7rem]">
          <p
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="px-4 sm:px-[38px] md:text-4xl text-[1.2rem] mb-4 text-start font-medium text-white"
          >
            Hello, I'm
          </p>
          <h1
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="px-4 sm:px-8 title-font md:text-6xl text-[1.76rem] mb-4 text-start font-medium text-white"
          >
            <span className="text-dark-orange">Jaykishor Chauhan</span>
          </h1>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="px-4 sm:px-[38px] text-[1.2rem] text-white mb-4 font-medium lg:inline-block"
            style={{
              minHeight: "4rem", // Ensure a minimum height for the text container
              overflow: "hidden", // Prevent overflow and layout shift
              whiteSpace: "normal", // Allow wrapping of long sentences
              wordBreak: "break-word", // Break words if necessary
              wordWrap: "break-word", // Ensures text wraps properly
            }}
          >
            <TypeAnimation
              cursor={true}
              sequence={[
                500,
                "A Full-Stack Developer.",
                1000,
                "A problem solver.",
                1000,
                "An innovative thinker.",
                1000,
                "A....",
                1000,
                "A.... cool guy?",
                1000,
                "Ok...",
                1000,
                "Ok... I'm running out of ideas...",
                1000,
                "Uhh...",
                1000,
                "Uhh... you can scroll down to see my projects now...",
                1000,
                "Seriously, my projects are really cool, go check them out!",
                1000,
                "You're uh...",
                1000,
                "You're uh... still here?",
                1000,
                "Ok, this has been fun, but I'm gonna restart the loop now...",
                1000,
                "See ya! :)",
                500,
              ]}
              speed={50}
              deletionSpeed={65}
              wrapper="h5"
              repeat={Infinity}
            />
          </div>
          <p
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="false"
            className="hidden md:block px-4 sm:px-8 mb-2 text-white text-lg md:text-xl leading-relaxed"
          >
            I'm proficient in building web applications using React.
          </p>
          <p
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="false"
            className="hidden md:block pl-4 sm:pl-8 text-lg text-white md:text-xl"
          >
            I enjoy designing tech websites.
          </p>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="false"
            className="px-4 sm:px-8 mt-7 flex gap-x-4 md:gap-x-5 justify-center md:justify-between flex-col sm:flex-row"
          >
            <a
              href="https://raw.githubusercontent.com/jaykishor-chauhan/resume/main/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button className="inline-flex font-medium text-white bg-dark-orange border-2 border-dark-orange py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
                Download CV
                <FaDownload className="mt-1 ml-4" />
              </button>
            </a>
            <SocialHandles />
          </div>
        </div>
      </div>

      {/* Additional content for projects */}
    </section>
  );
};

export default Profile;
