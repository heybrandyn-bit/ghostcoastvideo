import { Play } from 'lucide-react';
const projects = [
  { title: 'Brand Launch', category: 'Commercial', aspect: 'vertical' },
  { title: 'Music Video', category: 'Creative', aspect: 'horizontal' },
  { title: 'Product Demo', category: 'Corporate', aspect: 'vertical' },
  { title: 'Documentary', category: 'Film', aspect: 'horizontal' },
  { title: 'Social Campaign', category: 'Digital', aspect: 'vertical' },
  { title: 'Event Highlight', category: 'Coverage', aspect: 'horizontal' }
];
export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 px-6 lg:px-12 bg-[#060a0f]">
      {/* Ambient Glow */}
      <div className="absolute top-20 right-10 w-[700px] h-[700px] bg-[#FF8F48]/5 blur-[120px] rounded-full"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-oswald text-5xl md:text-7xl tracking-widest text-[#F0CFA6] mb-6 uppercase">
            Featured <span className="text-[#FF8F48]">Work</span>
          </h2>
          <p className="text-[#F0CFA6]/70 text-lg max-w-3xl mx-auto">
            <span className="font-instrument-serif italic text-[#FF8F48] text-[5rem] float-left leading-[0.7] mr-4">A</span>
            curated selection of our most impactful projects. Each piece represents our commitment to visual excellence and storytelling that moves audiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden hover:bg-white/10 transition-all duration-500 cursor-pointer"
              style={{
                aspectRatio: project.aspect === 'vertical' ? '9/16' : '16/9',
                transform: index % 3 === 1 ? 'translateY(3rem)' : 'translateY(0)'
              }}
            >
              {/* Inner Glow */}
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,143,72,0.1)] group-hover:shadow-[inset_0_0_80px_rgba(255,143,72,0.2)] transition-all duration-500"></div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#57A3AF]/10 to-[#060a0f]/60"></div>
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-16 h-16 rounded-full bg-[#EA3C4B]/90 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-[#EA3C4B]/30">
                  <Play className="w-6 h-6 text-[#F0CFA6] ml-1" fill="currentColor" />
                </div>
              </div>
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#060a0f]/90 to-transparent">
                <span className="inline-block px-3 py-1 bg-[#57A3AF]/20 backdrop-blur-xl border border-[#57A3AF]/30 rounded-full text-[#57A3AF] font-oswald text-xs tracking-widest uppercase mb-3">
                  {project.category}
                </span>
                <h3 className="font-oswald text-xl tracking-widest text-[#F0CFA6] uppercase">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-3xl border border-white/10 text-[#F0CFA6] font-oswald text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all cursor-pointer"
          >
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}