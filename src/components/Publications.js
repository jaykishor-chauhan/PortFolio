import React from 'react';
import { Calendar, ExternalLink, BookOpen, Users } from 'lucide-react';

const publicationsData = [
  {
    id: 1,
    title: "Modern Web Development: A Comprehensive Guide to React and TypeScript",
    journal: "Journal of Web Technologies",
    authors: ["John Doe", "Jane Smith", "Alex Johnson"],
    date: "2023",
    abstract: "This paper explores the latest trends and best practices in modern web development, focusing on React and TypeScript integration for building scalable applications.",
    link: "https://example.com/publication1",
    tags: ["React", "TypeScript", "Web Development"]
  }
];

const Publications = () => {
  return (
    <section id='publication' className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-emerald-200/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-emerald-200/30 to-blue-300/20 rounded-full blur-3xl z-0"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative z-10 px-3 py-5 mx-auto text-center sm:mx-6 md:mx-12 md:pt-5 md:mt-5 xl:mx-40">
        <div
          id="publications"
          className="flex flex-wrap w-full flex-col items-center text-center"
        >
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-orange-600">
                Work
              </span>{" "}
              <span className="text-slate-800">Publications</span>
            </h1>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-emerald-600" />
              <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 tracking-wide">
                Research & Articles
              </p>
              <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-600 to-transparent" />
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 space-y-8 animate-fade-in">
          {publicationsData.map((publication, index) => (
            <div
              key={publication.id}
              className="group relative flex flex-col bg-white/70 border-l-8 border-blue-800 shadow-xl rounded-2xl p-8 mb-6 transition-all duration-500 hover:scale-[1.025] hover:shadow-2xl hover:border-orange-500 backdrop-blur-lg"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Title and Journal */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-blue-900 group-hover:text-orange-600 transition-colors duration-300 drop-shadow mb-1">
                    {publication.title}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-700 font-medium">
                    <BookOpen size={18} className="text-orange-500" />
                    <span>{publication.journal}</span>
                  </div>
                </div>
                <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar size={16} className="text-blue-700" />
                    <span>{publication.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Users size={16} className="text-orange-500" />
                    <span>{publication.authors.join(", ")}</span>
                  </div>
                </div>
              </div>

              {/* Abstract */}
              <p className="text-gray-700 text-left mb-4 mt-2 leading-relaxed font-medium">
                {publication.abstract}
              </p>

              {/* Tags and Link */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-2">
                <div className="flex flex-wrap gap-2">
                  {publication.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-gradient-to-r from-blue-100 to-orange-100 text-blue-900 border border-orange-200 rounded-full shadow hover:bg-orange-200/80 transition-colors duration-300 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-orange-500 transition-all duration-300"
                >
                  <span>Read Publication</span>
                  <ExternalLink size={16} />
                </a>
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

export default Publications;