import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectsData from './ProjectsData';

const Card = ({ children, className }) => (
  <div className={`bg-white/80 rounded-3xl shadow-2xl border border-blue-100 ${className}`}>{children}</div>
);
const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);
const Badge = ({ children, className }) => (
  <span className={`inline-block rounded-full font-semibold ${className}`}>{children}</span>
);

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= ProjectsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? ProjectsData.length - 1 : prev - 1));
    setIsAutoScrolling(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === ProjectsData.length - 1 ? 0 : prev + 1));
    setIsAutoScrolling(false);
  };

  const currentProject = ProjectsData[currentIndex];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-emerald-200/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-emerald-200/30 to-blue-300/20 rounded-full blur-3xl z-0"></div>
      <div className="container mx-auto px-4 relative z-10">

        <div className="text-center mb-16 space-y-6">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-orange-600">
              Project
            </span>{" "}
            <span className="text-slate-800">Highlights</span>
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-emerald-600" />
            <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 tracking-wide">
              Real-World Applications
            </p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-600 to-transparent" />
          </div>
        </div>

        {/* Project Card with Sliding Effect */}
        <div className="flex justify-center items-center relative max-w-5xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-blue-100 border border-blue-200 rounded-full p-2 shadow transition disabled:opacity-50"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-6 h-6 text-blue-700" />
          </button>

          <Card className="group w-full max-w-4xl h-[540px] flex flex-col md:flex-row overflow-hidden transition-all duration-700 hover:shadow-2xl border-2 border-blue-100 bg-gradient-to-br from-white via-blue-50 to-emerald-50">
            {/* Project Image */}
            <div className="relative md:w-1/2 w-full flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-emerald-100">
              <img
                src={currentProject.image}
                alt={currentProject.name}
                className="w-full h-80 md:h-full object-cover rounded-2xl shadow-lg transition-transform duration-700 group-hover:scale-105"
                style={{ maxWidth: '90%', maxHeight: '90%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900/10 group-hover:to-blue-900/20 transition-all duration-300" />
            </div>

            {/* Project Details */}
            <CardContent className="md:w-1/2 w-full p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 drop-shadow">
                  {currentProject.name}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                  {currentProject.description}
                </p>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {currentProject.icons.map((tech, techIndex) => {
                    if (typeof tech === "object" && tech.icon && tech.name) {
                      return (
                        <span key={techIndex} className="relative group">
                          <Badge
                            title={tech.name}
                            className="flex items-center justify-center text-2xl px-4 py-3 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-700 border border-blue-200 hover:bg-blue-200 transition-colors duration-300 shadow cursor-pointer"
                          >
                            {React.createElement(tech.icon)}
                          </Badge>
                        </span>
                      );
                    }
                    // Fallback for string or icon only
                    return (
                      <span key={techIndex} className="relative group">
                        <Badge
                          title={typeof tech === "string" ? tech : ""}
                          className="flex items-center justify-center text-2xl px-4 py-3 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-700 border border-blue-200 hover:bg-blue-200 transition-colors duration-300 shadow cursor-pointer"
                        >
                          {typeof tech === "function" ? tech() : tech}
                        </Badge>
                      </span>
                    );
                  })}
                </div>
              </div>
              {/* Action buttons */}
              <div className="flex gap-4 mt-4">
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                  Source Code
                </a>
                <a
                  href={currentProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-blue-400 text-blue-700 font-semibold bg-white shadow hover:bg-blue-50 transition-all duration-300"
                >
                  <ExternalLink className="h-5 w-5" />
                  Live Demo
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-blue-100 border border-blue-200 rounded-full p-2 shadow transition disabled:opacity-50"
            aria-label="Next Project"
          >
            <ChevronRight className="w-6 h-6 text-blue-700" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-10 gap-2">
          {ProjectsData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoScrolling(false);
              }}
              className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'w-10 bg-blue-600'
                : 'w-3 bg-gray-300 hover:bg-blue-400'
                }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Project Counter */}
        <div className="text-center mt-6">
          <span className="text-gray-500 text-base font-semibold tracking-wide">
            {currentIndex + 1} <span className="text-blue-600">/</span> {ProjectsData.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;