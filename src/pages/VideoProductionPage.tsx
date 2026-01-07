import { Film, Video, Camera, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function VideoProductionPage() {
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
              Your Brand, <span className="text-[#57A3AF]">Cinematized.</span>
            </h1>
            <p className="text-[#F0CFA6]/80 text-xl max-w-3xl mx-auto mb-8">
              We transform your message into cinematic visual experiences that command attention and drive action.
            </p>
          </div>
          <div className="relative aspect-video max-w-4xl mx-auto bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl mb-20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#57A3AF]/20 to-[#060a0f]/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-[#EA3C4B]/90 backdrop-blur-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-[#EA3C4B]/30">
                <Film className="w-10 h-10 text-[#F0CFA6] ml-1" />
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
            Is your brand <span className="text-[#EA3C4B]">invisible</span> in the noise?
          </h2>
          <div className="space-y-8 text-[#F0CFA6]/80 text-lg leading-relaxed">
            <p>
              <span className="font-instrument-serif italic text-[#EA3C4B] text-[5rem] float-left leading-[0.7] mr-4">Y</span>
              ou've built something remarkable, but in a world saturated with content, great work doesn't guarantee attention. Your competitors are drowning audiences in low-effort posts while you're left wondering why your superior service isn't converting.
            </p>
            <p>
              The burden of the modern brand is no longer just delivering quality—it's proving it visually. Static images and text blocks don't stop the scroll. They don't build trust. They don't close deals.
            </p>
            <p>
              Ghost Coast Video creates cinematic brand assets that function as your 24/7 digital sales team. We don't just capture footage—we engineer visual proof that transforms skeptics into believers and browsers into buyers.
            </p>
          </div>
        </div>
      </section>
      {/* Pillars */}
      <section className="relative py-32 px-6 lg:px-12">
        <div className="relative max-w-7xl mx-auto">
          <h2 className="font-oswald text-5xl md:text-7xl tracking-widest text-[#F0CFA6] mb-20 text-center uppercase">
            Our <span className="text-[#57A3AF]">Arsenal</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden">
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(87,163,175,0.1)]"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#57A3AF]/20 flex items-center justify-center mb-6">
                  <Video className="w-8 h-8 text-[#57A3AF]" />
                </div>
                <h3 className="font-oswald text-2xl tracking-widest text-[#F0CFA6] mb-4 uppercase">Brand Films</h3>
                <p className="text-[#F0CFA6]/70">Cinematic narratives that elevate your brand from commodity to category leader.</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden md:translate-y-12">
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,143,72,0.1)]"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#FF8F48]/20 flex items-center justify-center mb-6">
                  <Camera className="w-8 h-8 text-[#FF8F48]" />
                </div>
                <h3 className="font-oswald text-2xl tracking-widest text-[#F0CFA6] mb-4 uppercase">Product Demos</h3>
                <p className="text-[#F0CFA6]/70">Transform features into feelings with high-impact product visualization.</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden">
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(234,60,75,0.1)]"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#EA3C4B]/20 flex items-center justify-center mb-6">
                  <Edit className="w-8 h-8 text-[#EA3C4B]" />
                </div>
                <h3 className="font-oswald text-2xl tracking-widest text-[#F0CFA6] mb-4 uppercase">Social Campaigns</h3>
                <p className="text-[#F0CFA6]/70">Platform-optimized content designed for viral discovery and engagement.</p>
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
            Impact In <span className="text-[#57A3AF]">Motion</span>
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
              "Ghost Coast didn't just film our launch—they made it legendary. The video closed three enterprise deals in the first week."
            </p>
            <div>
              <p className="font-oswald text-xl tracking-widest text-[#57A3AF] uppercase">Sarah Chen</p>
              <p className="text-[#F0CFA6]/70 font-oswald text-sm tracking-widest uppercase">Founder, TechVault</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="relative py-32 px-6 lg:px-12">
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-oswald text-4xl md:text-6xl tracking-widest text-[#F0CFA6] mb-6 uppercase">
            Ready to <span className="text-[#EA3C4B]">command</span> attention?
          </h2>
          <p className="text-[#F0CFA6]/80 text-xl mb-8">
            Book a strategy call and let's build your visual arsenal.
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