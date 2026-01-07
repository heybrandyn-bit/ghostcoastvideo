import { Play, ArrowRight } from 'lucide-react';
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 lg:px-12 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-[#57A3AF]/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#FF8F48]/5 blur-[120px] rounded-full"></div>
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#57A3AF] animate-pulse"></div>
            <span className="font-oswald text-xs tracking-widest text-[#57A3AF] uppercase">Cinematic Storytelling</span>
          </div>
          <h1 className="font-oswald text-6xl md:text-8xl tracking-widest text-[#F0CFA6] mb-6 leading-none uppercase">
            We Capture<br />
            <span className="text-[#57A3AF]">Legends</span>
          </h1>
          <div className="mb-8">
            <p className="text-[#F0CFA6]/80 text-lg leading-relaxed">
              <span className="font-instrument-serif italic text-[#57A3AF] text-[5rem] float-left leading-[0.7] mr-4">E</span>
              very frame tells a story. Every story becomes unforgettable. Ghost Coast Video specializes in cinematic video production that elevates brands, captures moments, and creates visual experiences that resonate long after the screen goes dark.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#EA3C4B] text-[#F0CFA6] font-oswald text-sm tracking-widest uppercase rounded-full hover:bg-[#FF8F48] transition-all cursor-pointer shadow-lg shadow-[#EA3C4B]/20"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-3xl border border-white/10 text-[#F0CFA6] font-oswald text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all cursor-pointer"
            >
              <Play className="w-5 h-5" />
              View Our Work
            </a>
          </div>
        </div>
        <div className="relative">
          {/* 16:9 Hero Video Placeholder */}
          <div className="relative aspect-video bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#57A3AF]/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#57A3AF]/20 to-[#060a0f]/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[#EA3C4B]/90 backdrop-blur-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-[#EA3C4B]/30">
                <Play className="w-8 h-8 text-[#F0CFA6] ml-1" fill="currentColor" />
              </div>
            </div>
            {/* Inner Glow */}
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(87,163,175,0.1)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}