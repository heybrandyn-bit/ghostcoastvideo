import { BookOpen, PenTool, Film, Scroll } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function PublishingPage() {
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
              Your Words, <span className="text-[#57A3AF]">Cinematized.</span>
            </h1>
            <p className="text-[#F0CFA6]/80 text-xl max-w-3xl mx-auto mb-8">
              A book is a static object in a high-speed world. We translate your narrative into cinematic visual assets that stop the scroll.
            </p>
          </div>
          <div className="relative aspect-video max-w-4xl mx-auto bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl mb-20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#57A3AF]/20 to-[#060a0f]/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-[#EA3C4B]/90 backdrop-blur-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-[#EA3C4B]/30">
                <BookOpen className="w-10 h-10 text-[#F0CFA6]" />
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
            Is your <span className="text-[#EA3C4B]">masterpiece</span> gathering digital dust?
          </h2>
          <div className="space-y-8 text-[#F0CFA6]/80 text-lg leading-relaxed">
            <p>
              <span className="font-instrument-serif italic text-[#EA3C4B] text-[5rem] float-left leading-[0.7] mr-4">Y</span>
              ou spent years bleeding onto the page. You've crafted a world that deserves to be felt. But in a world of 3-second attention spans, a static cover image is no longer enough to win the inbox.
            </p>
            <p>
              The burden of the modern author is no longer just writing—it's performing. You are expected to be a marketer and a creative director. It's an invisible weight that pulls you away from your next chapter.
            </p>
            <p>
              Ghost Coast Video bridges the gap. We create 'Visual Proof' of your book's depth, turning your prose into a cinematic experience that forces readers to click 'Buy Now'.
            </p>
          </div>
        </div>
      </section>
      {/* Pillars */}
      <section className="relative py-32 px-6 lg:px-12">
        <div className="relative max-w-7xl mx-auto">
          <h2 className="font-oswald text-5xl md:text-7xl tracking-widest text-[#F0CFA6] mb-20 text-center uppercase">
            Publishing <span className="text-[#57A3AF]">Amplified</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden">
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(87,163,175,0.1)]"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#57A3AF]/20 flex items-center justify-center mb-6">
                  <Film className="w-8 h-8 text-[#57A3AF]" />
                </div>
                <h3 className="font-oswald text-2xl tracking-widest text-[#F0CFA6] mb-4 uppercase">Cinematic Trailers</h3>
                <p className="text-[#F0CFA6]/70">High-end trailers that capture the soul of your book and function as your 24/7 digital agent.</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden md:translate-y-12">
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,143,72,0.1)]"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#FF8F48]/20 flex items-center justify-center mb-6">
                  <PenTool className="w-8 h-8 text-[#FF8F48]" />
                </div>
                <h3 className="font-oswald text-2xl tracking-widest text-[#F0CFA6] mb-4 uppercase">Author Mini-Docs</h3>
                <p className="text-[#F0CFA6]/70">Humanize the pen. We tell the story behind the story, building a visceral connection with superfans.</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden">
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(234,60,75,0.1)]"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#EA3C4B]/20 flex items-center justify-center mb-6">
                  <Scroll className="w-8 h-8 text-[#EA3C4B]" />
                </div>
                <h3 className="font-oswald text-2xl tracking-widest text-[#F0CFA6] mb-4 uppercase">Manuscript-to-Motion</h3>
                <p className="text-[#F0CFA6]/70">We animate your most powerful quotes into high-density social clips designed for viral discovery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Ghostwriting Section */}
      <section className="relative py-32 px-6 lg:px-12 bg-gradient-to-br from-[#060a0f] to-[#0a0f15]">
        <div className="relative max-w-4xl mx-auto">
          <h2 className="font-oswald text-5xl md:text-7xl tracking-widest text-[#F0CFA6] mb-12 text-center uppercase">
            Ghostwriting <span className="text-[#FF8F48]">Services</span>
          </h2>
          <div className="space-y-8 text-[#F0CFA6]/80 text-lg leading-relaxed mb-12">
            <p>
              <span className="font-instrument-serif italic text-[#FF8F48] text-[5rem] float-left leading-[0.7] mr-4">Y</span>
              ou have the expertise. You have the story. But translating it from your head to the page is a different beast entirely. That's where we come in.
            </p>
            <p>
              Our ghostwriting service doesn't just write words—we extract your voice, your cadence, and your unique perspective. Through deep interviews and collaborative sessions, we craft manuscripts that sound exactly like you, only polished to perfection.
            </p>
            <p>
              From initial concept to final draft, we handle the heavy lifting of structuring chapters, conducting research, and refining prose while you remain the author. Your name. Your vision. Our execution.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8">
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,143,72,0.1)] rounded-[2.5rem]"></div>
            <div className="relative">
              <h3 className="font-oswald text-2xl tracking-widest text-[#F0CFA6] mb-6 uppercase">What We Ghostwrite</h3>
              <ul className="space-y-4 text-[#F0CFA6]/70">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8F48]">•</span>
                  <span>Business books and thought leadership manuscripts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8F48]">•</span>
                  <span>Memoirs and autobiographies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8F48]">•</span>
                  <span>Self-help and personal development books</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8F48]">•</span>
                  <span>Industry white papers and research reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8F48]">•</span>
                  <span>Long-form content and lead magnets</span>
                </li>
              </ul>
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
              "Ghost Coast turned a 400-page manuscript into a 90-second trailer that doubled my pre-orders in a week. They are storytellers first."
            </p>
            <div>
              <p className="font-oswald text-xl tracking-widest text-[#57A3AF] uppercase">Elias Thorne</p>
              <p className="text-[#F0CFA6]/70 font-oswald text-sm tracking-widest uppercase">Bestselling Author</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="relative py-32 px-6 lg:px-12">
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-oswald text-4xl md:text-6xl tracking-widest text-[#F0CFA6] mb-6 uppercase">
            Ready to <span className="text-[#EA3C4B]">bring your story</span> to life?
          </h2>
          <p className="text-[#F0CFA6]/80 text-xl mb-8">
            Book a strategy call and let's turn your words into visual impact.
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