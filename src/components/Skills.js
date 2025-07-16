import SkillsData from './SkillsData';

const Skills = () => {
  return (
    <section id='skills' className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-emerald-200/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-emerald-200/30 to-blue-300/20 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-orange-600">
              My
            </span>{" "}
            <span className="text-slate-800">Skills</span>
          </h1>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-emerald-600" />
            <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 tracking-wide">
              Technical Expertise
            </p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-600 to-transparent" />
          </div>
        </div>

        <div className="relative">
          {/* Glassmorphism container */}
          <div className="backdrop-blur-sm bg-card/30 border border-border/20 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
              {SkillsData.map((skill, index) => (
                <div
                  key={skill.id}
                  className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-card/50 border border-border/10 backdrop-blur-sm hover:bg-card/80 hover:border-primary/20 transition-all duration-500 hover:scale-105 hover:shadow-lg"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500"></div>
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="relative z-10 w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                    />
                  </div>
                  <p className="text-sm md:text-base font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating accent elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-full opacity-40 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;