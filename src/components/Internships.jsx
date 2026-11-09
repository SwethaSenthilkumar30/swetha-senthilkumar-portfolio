import { internshipsList } from '../data/portfolioData';

const InternshipCard = ({ intern, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between shadow-xl"
    >
      <div>
        {/* Top row: Duration and mini badge */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="font-mono text-xs uppercase tracking-wider text-white/50">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-[10px] font-mono uppercase tracking-widest">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white leading-tight mb-1">
          {intern.role}
        </h3>
        <p className="uppercase text-red-200 text-xs font-mono font-bold tracking-widest mb-6">
          {intern.organization}
        </p>

        {/* Skills Gained bulleted list */}
        <div className="mb-6">
          <p className="text-xs uppercase font-mono text-white/70 mb-2 font-bold tracking-wider">
            Skills Gained:
          </p>
          <ul className="space-y-1.5 text-sm text-white/90">
            {intern.skills.map((skill, sIdx) => (
              <li key={sIdx} className="flex items-start gap-2">
                <span className="text-red-200 font-bold">•</span>
                <span className="leading-snug">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Technologies row */}
      <div className="pt-4 border-t border-white/10">
        <p className="text-xs uppercase font-mono text-white/70 mb-2 font-bold tracking-wider">
          Technologies:
        </p>
        <div className="flex flex-wrap gap-2">
          {intern.tech.map((techItem, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-1 rounded-md bg-black/30 border border-white/10 text-xs font-mono text-red-200"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Internships = () => {
  return (
    <section
      id="experience"
      className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Top torn-paper SVG divider connecting dark section into red */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-[#0a0a0a]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative pulsing black star bottom-left */}
      <div className="absolute bottom-10 left-10 text-black opacity-20 animate-pulse pointer-events-none">
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Centred Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-red-100 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Hands-on software development roles, placement training, and production web engineering experience.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard key={index} intern={intern} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
