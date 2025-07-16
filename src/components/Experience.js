import { Calendar, MapPin, Building } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    position: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    duration: "2022 - Present",
    description: "Led the development of responsive web applications using React and TypeScript. Collaborated with cross-functional teams to deliver high-quality user experiences.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"]
  },
];

const Experience = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-emerald-200/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-emerald-200/30 to-blue-300/20 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 px-3 py-5 mx-auto text-center sm:mx-6 md:mx-12 md:pt-5 md:mt-5 xl:mx-40">
        <div
          id="experience"
          className="flex flex-wrap w-full flex-col items-center text-center"
        >
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-orange-600">
                Professional
              </span>{" "}
              <span className="text-slate-800">Journey</span>
            </h1>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-emerald-600" />
              <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 tracking-wide">
                Experience Overview
              </p>
              <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-600 to-transparent" />
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 space-y-8 animate-fade-in">
          {experienceData.map((experience, index) => (
            <div
              key={experience.id}
              className="group relative flex flex-col md:flex-row items-stretch bg-white/70 border-l-8 border-orange-500 shadow-xl rounded-2xl p-8 mb-6 transition-all duration-500 hover:scale-[1.025] hover:shadow-2xl hover:border-blue-700 backdrop-blur-lg"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Left Accent Bar (optional, for visual separation) */}
              {/* <div className="w-2 bg-gradient-to-b from-blue-800 to-orange-600 rounded-l-2xl mr-6"></div> */}

              <div className="flex-1 flex flex-col justify-between">
                {/* Company and Position */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-blue-900 group-hover:text-orange-600 transition-colors duration-300 drop-shadow">
                      {experience.position}
                    </h3>
                    <div className="flex items-center gap-2 text-blue-700 mt-1 font-medium">
                      <Building size={18} className="text-orange-500" />
                      <span>{experience.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar size={16} className="text-blue-700" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin size={16} className="text-orange-500" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-left mb-4 mt-2 leading-relaxed font-medium">
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-gradient-to-r from-blue-100 to-orange-100 text-blue-900 border border-orange-200 rounded-full shadow hover:bg-orange-200/80 transition-colors duration-300 font-semibold"
                    >
                      {/* Optionally add icons for tech here */}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200/40 via-transparent to-blue-200/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom spacing */}
      <div className='h-[2.5rem]'></div>
    </section>
  );
};

export default Experience;