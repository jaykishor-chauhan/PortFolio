import React from "react";
import { Link } from "react-scroll";
import { Download, MessageCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-emerald-200/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-emerald-200/30 to-blue-300/20 rounded-full blur-3xl z-0"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-orange-600">
              About
            </span>{" "}
            <span className="text-slate-800">Me</span>
          </h1>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-emerald-600" />
            <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 tracking-wide">
              who i am
            </p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-600 to-transparent" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl blur-2xl opacity-20 scale-110" />
              
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-slate-100 to-slate-200">
                <img
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  alt="About Jaykishor Chauhan"
                  src={require("../assets/Images/About2.png")}
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 rounded-full shadow-lg animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-500 rounded-full shadow-lg animate-pulse animation-delay-1000" />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Introduction */}
            <div className="space-y-6">
              <div className="text-slate-600 text-lg leading-relaxed space-y-4">
                <p className="text-xl font-medium text-slate-800">
                  Hello! My name is{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 font-bold">
                    Jaykishor Prasad Chauhan
                  </span>
                  .
                </p>
                
                <p>
                  I'm originally from Nepal and have been living in India for the past three years. 
                  During my time here, I've gained valuable experience through various entry-level positions, 
                  which have significantly enhanced my work ethic, communication skills, and adaptability.
                </p>

                <p>
                  My journey into technology began with a passion for problem-solving, 
                  which motivated me to pursue opportunities that challenge me to think creatively and critically. 
                  These experiences have not only shaped my technical skills but also allowed me to connect with like-minded individuals, 
                  build lasting relationships, and continuously grow both personally and professionally.
                </p>

                <p className="text-emerald-700 font-medium">
                  Let's connect—feel free to reach out through my social media links.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-orange-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-3 text-base font-semibold"
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="inline-flex items-center gap-3 cursor-pointer"
                >
                  Contact Me
                  <MessageCircle className="w-4 h-4" />
                </Link>
              </button>
              
              <button
                size="lg"
                variant="outline"
                className="border border-blue-400 text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-3 text-base font-semibold"
              >
                <a
                  href="https://raw.githubusercontent.com/jaykishor-chauhan/resume/main/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3"
                >
                  Get Resume
                  <Download className="w-4 h-4" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;