import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const links = [
  {
    title: "Home",
    link: "home",
  },
  {
    title: "About",
    link: "about",
  },
  {
    title: "Skills",
    link: "skills",
  },
  {
    title: "Projects",
    link: "projects",
  },
  {
    title: "Contact",
    link: "contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Track active section

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <header className="text-white body-font fixed inset-x-0 z-50 bg-darkblue">
      <div className="mx-auto py-2 px-5 flex flex-row justify-between items-center lg:py-4">
        <Link
          spy={true}
          smooth={true}
          offset={-100}
          duration={750}
          to="home"
          className="flex justify-center items-center"
        >
          <div className="pt-0.5 w-30 h-10 ml-3 cursor-pointer scale-125 lg:scale-150 lg:ml-10">
            <p className="text-white font-bold text-2xl">
              Portfo
              <span className="text-dark-orange">lio</span>
              <span className="text-dark-orange">.</span>
            </p>
          </div>
        </Link>
        <nav className="hidden md:ml-auto lg:flex flex-wrap items-center text-xl justify-center pr-[60px]">
          {links.map((item) => (
            <Link
              key={item.title}
              spy={true}
              smooth={true}
              offset={-100}
              duration={750}
              to={item.link}
              onSetActive={handleSetActive} // React-scroll callback
              className={`relative group cursor-pointer md:mr-[30px] ${
                activeSection === item.link ? "text-dark-orange" : "text-white"
              }`}
            >
              {item.title}
              <span
                className={`absolute left-0 bottom-[-2px] h-[2px] bg-dark-orange transition-all duration-300 ${
                  activeSection === item.link ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </nav>
        <div className="lg:hidden mr-2">
          <button onClick={toggleMenu} className="p-2 text-white">
            {isMenuOpen ? (
              <MdClose className="h-6 w-6" />
            ) : (
              <BiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="min-h-[calc(100vh-4rem)] absolute inset-x-0 top-16 z-50 transition-all ease-in duration-1000 lg:hidden">
            <div className="rounded-b-lg bg-darkblue shadow-lg px-5 pb-4">
              <nav className="flex flex-col gap-y-7 text-xl">
                {links.map((item) => (
                  <Link
                    key={item.title}
                    onClick={() => {
                      setActiveSection(item.link);
                      setIsMenuOpen(false);
                    }}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={750}
                    to={item.link}
                    className={`relative group cursor-pointer ${
                      activeSection === item.link
                        ? "text-dark-orange"
                        : "text-white"
                    }`}
                  >
                    {item.title}
                    <span
                      className={`absolute left-0 bottom-[-2px] h-[2px] bg-dark-orange transition-all duration-300 ${
                        activeSection === item.link ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;