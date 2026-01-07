import { Award, Users, Target } from 'lucide-react';
export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-12">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-10 w-[600px] h-[600px] bg-[#EA3C4B]/5 blur-[120px] rounded-full"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-oswald text-5xl md:text-7xl tracking-widest text-[#F0CFA6] mb-8 uppercase">
              About <span className="text-[#EA3C4B]">Ghost Coast</span>
            </h2>
            <div className="mb-8">
              <p className="text-[#F0CFA6]/80 text-lg leading-relaxed mb-6">
                <span className="font-instrument-serif italic text-[#EA3C4B] text-[5rem] float-left leading-[0.7] mr-4">W</span>
                e are filmmakers, storytellers, and visual artists obsessed with crafting cinematic experiences. Founded on the belief that every brand has a story worth telling, Ghost Coast Video has become a trusted name in video production.
              </p>
              <p className="text-[#F0CFA6]/80 text-lg leading-relaxed">
                Our team brings together award-winning directors, cinematographers, and editors who share a singular vision: to create content that doesn't just capture attention—it holds it, shapes perception, and drives action.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="font-oswald text-4xl tracking-widest text-[#57A3AF] mb-2">10+</div>
                <div className="font-oswald text-xs tracking-widest text-[#F0CFA6]/70 uppercase">Years</div>
              </div>
              <div className="text-center">
                <div className="font-oswald text-4xl tracking-widest text-[#FF8F48] mb-2">500+</div>
                <div className="font-oswald text-xs tracking-widest text-[#F0CFA6]/70 uppercase">Projects</div>
              </div>
              <div className="text-center">
                <div className="font-oswald text-4xl tracking-widest text-[#EA3C4B] mb-2">15+</div>
                <div className="font-oswald text-xs tracking-widest text-[#F0CFA6]/70 uppercase">Awards</div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden">
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(87,163,175,0.1)]"></div>
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#57A3AF]/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-[#57A3AF]" />
                </div>
                <div>
                  <h3 className="font-oswald text-xl tracking-widest text-[#F0CFA6] mb-2 uppercase">Award-Winning</h3>
                  <p className="text-[#F0CFA6]/70">Recognized globally for excellence in cinematography and storytelling.</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden md:translate-y-12">
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,143,72,0.1)]"></div>
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF8F48]/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#FF8F48]" />
                </div>
                <div>
                  <h3 className="font-oswald text-xl tracking-widest text-[#F0CFA6] mb-2 uppercase">Expert Team</h3>
                  <p className="text-[#F0CFA6]/70">Industry veterans with decades of combined experience.</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden">
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(234,60,75,0.1)]"></div>
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#EA3C4B]/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-[#EA3C4B]" />
                </div>
                <div>
                  <h3 className="font-oswald text-xl tracking-widest text-[#F0CFA6] mb-2 uppercase">Results-Driven</h3>
                  <p className="text-[#F0CFA6]/70">Every frame crafted to achieve your business objectives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}