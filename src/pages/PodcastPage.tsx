import { Mic, Headphones, Radio, Film } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-[#060a0f]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-[#57A3AF]/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#FF8F48]/5 blur-[120px] rounded-full"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-oswald text-6xl md:text-8xl tracking-widest text-[#F0CFA6] mb-6 leading-none uppercase">
              Your Voice, <span className="text-[#57A3AF]">Amplified.</span>
            </h1>
            <p className="text-[#F0CFA6]/80 text-xl max-w-3xl mx-auto mb-8">
              We produce, edit, and distribute podcasts that build authority and create genuine connection with your audience.
            </p>
          </div>
          <div className="relative aspect-video max-w-4xl mx-auto bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl mb-20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#57A3AF]/20 to-[#060a0f]/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-[#EA3C4B]/90 backdrop-blur-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-[#EA3C4B]/30">
                <Mic className="w-10 h-10 text-[#F0CFA6]" />
              </div>
            </div>
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(87,163,175,0.1)]"></div>
          </div>
        </div>
      </section>
      {/* Sales Letter */}
      <section className="relative py-32 px-6 lg:px-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EA3C4B]/5 blur-[120px] rounded-full"></div>
        <div className="relative max-w-4xl mx-auto">
          <h2 className="font-oswald text-4xl md:text-6xl tracking-widest text-[#F0CFA6] mb-12 text-center uppercase">
            Is your expertise <span className="text-[#EA3C4B]">lost</span> in the noise?
          </h2>
          <div className="space-y-8 text-[#F0CFA6]/80 text-lg leading-relaxed">
            <p>
              <span className="font-instrument-serif italic text-[#EA3C4B] text-[5rem] float-left leading-[0.7] mr-4">Y</span>
              ou have insights worth sharing, but the technical burden of podcasting keeps you from hitting record. Audio editing, show notes, distribution—it's a full-time job you don't have time for.
            </p>
            <p>
              The reality is, podcasting is the most intimate medium for building authority. But without production support, you're stuck choosing between your expertise and execution.
            </p>
            <p>
              Ghost Coast Video handles the entire podcast production pipeline. You show up, share your genius, and we transform it into polished episodes that build your brand while you sleep.
            </p>
          </div>
        </div>
      </section>
      {/* Pillars */}
      <section className="relative py-32 px-6 lg:px-12">
        <div className="relative max-w-7xl mx-auto">
          <h2 className="font-oswald text-5xl md:text-7xl tracking-widest text-[#F0CFA6] mb-20 text-center uppercase">
            Full-Service <span className="text-[#57A3AF]">Production</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden">
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(87,163,175,0.1)]"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#57A3AF]/20 flex items-center justify-center mb-6">
                  <Mic className="w-8 h-8 text-[#57A3AF]" />
                </div>
                <h3 className="font-oswald text-2xl tracking-widest text-[#F0CFA6] mb-4 uppercase">Recording & Editing</h3>
                <p className="text-[#F0CFA6]/70">Studio-quality audio production with professional editing and sound design.</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden md:translate-y-12">
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,143,72,0.1)]"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#FF8F48]/20 flex items-center justify-center mb-6">
                  <Headphones className="w-8 h-8 text-[#FF8F48]" />
                </div>
                <h3 className="font-oswald text-2xl tracking-widest text-[#F0CFA6] mb-4 uppercase">Show Strategy</h3>
                <p className="text-[#F0CFA6]/70">Concept development, guest booking, and content planning for maximum impact.</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden">
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(234,60,75,0.1)]"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#EA3C4B]/20 flex items-center justify-center mb-6">
                  <Radio className="w-8 h-8 text-[#EA3C4B]" />
                </div>
                <h3 className="font-oswald text-2xl tracking-widest text-[#F0CFA6] mb-4 uppercase">Distribution</h3>
                <p className="text-[#F0CFA6]/70">Publish to all major platforms with optimized show notes and promotion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Vertical Grid */}
      <section className="relative py-32 px-6 lg:px-12">
        <div className="absolute top-20 right-10 w-[700px] h-[700px] bg-[#57A3AF]/5 blur-[120px] rounded-full"></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="font-oswald text-5xl md:text-7xl tracking-widest text-[#F0CFA6] mb-20 text-center uppercase">
            Voice In <span className="text-[#57A3AF]">Motion</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i, index) => (
              <div
                key={i}
                className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden"
                style={{
                  aspectRatio: '9/16',
                  transform: index % 3 === 1 ? 'translateY(3rem)' : 'translateY(0)'
                }}
              >
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(87,163,175,0.1)]"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#57A3AF]/10 to-[#060a0f]/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#EA3C4B]/90 backdrop-blur-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-[#EA3C4B]/30">
                    <Film className="w-6 h-6 text-[#F0CFA6] ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonial */}
      <section className="relative py-32 px-6 lg:px-12">
        <div className="relative max-w-4xl mx-auto bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-12 text-center">
          <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,143,72,0.1)] rounded-[2.5rem]"></div>
          <div className="relative">
            <p className="font-instrument-serif italic text-[#F0CFA6] text-2xl md:text-3xl mb-8 leading-relaxed">
              "Ghost Coast took our raw conversations and turned them into a top-10 business podcast. They handle everything—we just show up and talk."
            </p>
            <div>
              <p className="font-oswald text-xl tracking-widest text-[#57A3AF] uppercase">Rachel Kim</p>
              <p className="text-[#F0CFA6]/70 font-oswald text-sm tracking-widest uppercase">Host, The Scaling Show</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="relative py-32 px-6 lg:px-12">
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-oswald text-4xl md:text-6xl tracking-widest text-[#F0CFA6] mb-6 uppercase">
            Ready to <span className="text-[#EA3C4B]">launch</span> your show?
          </h2>
          <p className="text-[#F0CFA6]/80 text-xl mb-8">
            Book a strategy call and let's build your podcast production pipeline.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#EA3C4B] text-[#F0CFA6] font-oswald text-base tracking-widest uppercase rounded-full hover:bg-[#FF8F48] transition-all cursor-pointer shadow-lg shadow-[#EA3C4B]/20"
          >
            Book Strategy Call
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}