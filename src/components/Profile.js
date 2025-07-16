import { TypeAnimation } from "react-type-animation";
import SocialHandles from "./SocialHandles";
import { Download, ArrowDown } from "lucide-react";


const Profile = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-200/60 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-40 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="relative z-10 container mx-auto px-6 pt-[8rem] lg:pt-[12rem]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="order-2 lg:order-1 space-y-8 text-left items-start">
            {/* Greeting */}
            <div>
              <p className="text-blue-900 font-extrabold italic text-xl md:text-3xl tracking-wide">
                Hey, I'm&nbsp;
                <span
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                  data-aos-once="false"
                  className="md:text-4xl text-[1.76rem] mb-4 font-extrabold italic text-white tracking-wider"
                >
                  <span className="text-dark-orange font-serif">
                    Jaykishor
                  </span>
                </span>
              </p>

            </div>
            <div className="h-20 flex items-start">
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
                wrapper="p"
                repeat={Infinity}
                className="text-2xl lg:text-3xl font-semibold italic text-blue-900 min-h-[3rem]"
              />
            </div>

            {/* Description */}
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Passionate about building exceptional web applications using modern technologies like React and creating seamless user experiences.
              </p>
              <p>
                I specialize in crafting clean, efficient code and designing intuitive interfaces that solve real-world problems.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4 items-start">
              <button 
                size="lg"
                className="bg-gradient-to-r from-blue-700 to-dark-orange hover:from-dark-orange hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-3 text-base font-semibold"
              >
                <a
                  href="https://raw.githubusercontent.com/jaykishor-chauhan/resume/main/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3"
                >
                  Download Resume
                  <Download className="w-4 h-4" />
                </a>
              </button>

              <SocialHandles />
            </div>

            {/* Scroll indicator */}
            <div className="pt-8 lg:pt-12">
              <div className="flex items-center gap-3 text-slate-500">
                <ArrowDown className="w-5 h-5 animate-bounce" />
                <span className="text-sm font-medium">Explore my work</span>
              </div>
            </div>
          </div>


          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 scale-110" />

              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-slate-100 to-slate-200">
                <img
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  alt="Jaykishor Chauhan - Full Stack Developer"
                  src="/placeholder.svg"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full shadow-lg animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500 rounded-full shadow-lg animate-pulse animation-delay-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;