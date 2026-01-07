import { Zap, Network, Shield, Film } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function MarketingAutomationPage() {
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
              Congratulations, It <span className="text-[#EA3C4B]">FUCKIN WORKS.</span>
            </h1>
            <p className="text-[#F0CFA6]/80 text-xl max-w-3xl mx-auto mb-8">
              Closing high-ticket automation retainers requires showing, not just telling.
            </p>
          </div>
          <div className="relative aspect-video max-w-4xl mx-auto bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl mb-20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#57A3AF]/20 to-[#060a0f]/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-[#EA3C4B]/90 backdrop-blur-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-[#EA3C4B]/30">
                <Zap className="w-10 h-10 text-[#F0CFA6]" />
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
            Is your genius getting lost in a <span className="text-[#EA3C4B]">spreadsheet?</span>
          </h2>
          <div className="space-y-8 text-[#F0CFA6]/80 text-lg leading-relaxed">
            <p>
              <span className="font-instrument-serif italic text-[#EA3C4B] text-[5rem] float-left leading-[0.7] mr-4">Y</span>
              ou build systems that save clients 40 hours a week, but when you show them the backend, their eyes glaze over. They don't see the efficiency; they see complexity.
            </p>
            <p>
              In the world of high-ticket automation, if they can't see it, they don't value it. You are stuck in a cycle of 'explaining' your value instead of 'showing' it to decision-makers.
            </p>
            <p>
              Ghost Coast Video specializes in visualizing invisible systems. We turn your Zapier paths and AI agents into high-end visual assets that close $10k+ retainers on autopilot.
            </p>
          </div>
        </div>
      </section>
      {/* Editorial Module */}
      <section className="relative py-16 px-6 lg:px-12">
        <div className="relative max-w-4xl mx-auto bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-12">
          <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(87,163,175,0.1)] rounded-[2.5rem]"></div>
          <div className="relative">
            <p className="font-instrument-serif italic text-[#F0CFA6] text-2xl leading-relaxed text-center">
              The truth is, your clients don't care about your API endpoints. They care about the 40 hours a week they are losing to manual data entry. We stop the explaining and start the selling.
            </p>
          </div>
        </div>
      </section>
      {/* Pillars */}
      <section className="relative py-32 px-6 lg:px-12">
        <div className="relative max-w-7xl mx-auto">
          <h2 className="font-oswald text-5xl md:text-7xl tracking-widest text-[#F0CFA6] mb-20 text-center uppercase">
            Systems In <span className="text-[#57A3AF]">Cinema</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden">
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(87,163,175,0.1)]"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#57A3AF]/20 flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-[#57A3AF]" />
                </div>
                <h3 className="font-oswald text-2xl tracking-widest text-[#F0CFA6] mb-4 uppercase">Logic Visualization</h3>
                <p className="text-[#F0CFA6]/70">Code into cinema. We map invisible workflows into visual proof that closes deals.</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden md:translate-y-12">
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,143,72,0.1)]"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#FF8F48]/20 flex items-center justify-center mb-6">
                  <Network className="w-8 h-8 text-[#FF8F48]" />
                </div>
                <h3 className="font-oswald text-2xl tracking-widest text-[#F0CFA6] mb-4 uppercase">Scalable Demos</h3>
                <p className="text-[#F0CFA6]/70">Sell systems while you build. Your demo works 24/7.</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden">
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(234,60,75,0.1)]"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#EA3C4B]/20 flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-[#EA3C4B]" />
                </div>
                <h3 className="font-oswald text-2xl tracking-widest text-[#F0CFA6] mb-4 uppercase">Retention Assets</h3>
                <p className="text-[#F0CFA6]/70">Show monthly impact visually. Turn renewals into certainties.</p>
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
            Systems In <span className="text-[#57A3AF]">Motion</span>
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
              "They made our backend look like magic."
            </p>
            <div>
              <p className="font-oswald text-xl tracking-widest text-[#57A3AF] uppercase">Marcus Vane</p>
              <p className="text-[#F0CFA6]/70 font-oswald text-sm tracking-widest uppercase">CEO, AutomateNow</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="relative py-32 px-6 lg:px-12">
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-oswald text-4xl md:text-6xl tracking-widest text-[#F0CFA6] mb-6 uppercase">
            Ready to <span className="text-[#EA3C4B]">productize</span> your workflow?
          </h2>
          <p className="text-[#F0CFA6]/80 text-xl mb-8">
            Book a strategy call and let's visualize your invisible systems.
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