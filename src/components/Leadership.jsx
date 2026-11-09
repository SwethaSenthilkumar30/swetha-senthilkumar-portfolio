import { leadershipList } from '../data/portfolioData';

const LeadershipItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex flex-col md:flex-row items-center ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } w-full`}
    >
      {/* Timeline Card (45% on md+) */}
      <div
        data-aos={isEven ? 'fade-right' : 'fade-left'}
        data-aos-delay={index * 150}
        className={`w-full md:w-[45%] pl-12 md:pl-0 ${
          isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
        }`}
      >
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:scale-[1.02] transition-all duration-300 shadow-xl group">
          {/* Badge */}
          {item.badge && (
            <div className={`mb-3 flex ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
              <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs uppercase tracking-widest font-mono">
                {item.badge}
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-black text-white group-hover:text-red-400 transition-colors mb-1 tracking-tight">
            {item.title}
          </h3>

          {/* Role */}
          <p className="font-mono uppercase text-red-400 text-xs font-bold tracking-wider mb-3">
            {item.role}
          </p>

          {/* Description */}
          <p className="text-white/60 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* Red Glowing Dot on the Timeline Line */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_12px_#ff2a2a] border-2 border-black z-20" />

      {/* Empty Spacer on Opposite Side (45% on md+) */}
      <div className="hidden md:block md:w-[45%]" />
    </div>
  );
};

const Leadership = () => {
  return (
    <section
      id="activities"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Torn-paper divider at the top (flowing from red section into dark) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-[#ff2a2a]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Centred Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs uppercase tracking-widest font-mono mb-4">
            Activities
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Leadership & Engagement
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
            Community initiatives, college symposium coordination, and technical club contributions.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto py-8">
          {/* 2px Gradient vertical timeline line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {leadershipList.map((item, index) => (
              <LeadershipItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
