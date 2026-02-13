import { Terminal, Video, Zap, Scan, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Background Grid Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 -z-10"></div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column: Content Engine */}
          <div className="lg:w-1/2">
            <div className="inline-block border border-accent text-accent px-4 py-1 font-mono text-[10px] mb-6 uppercase tracking-widest bg-accent/5">
              EST. SIGNAL: ATLANTA, GA & ALBURQUERQUE, NM
            </div>

            <h2 className="text-5xl sm:text-7xl font-black text-foreground mb-10 uppercase leading-none tracking-tighter">
              Create Excitement <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-accent">with video</span>
            </h2>

            <div className="bg-muted/10 border-l-4 border-primary pl-6 py-6 mb-10 relative">
              <div className="absolute -top-2 -left-1 text-primary opacity-50"><Scan size={16} /></div>
              <p className="text-xl md:text-2xl text-foreground font-serif italic leading-relaxed opacity-90">
                "We use video content you already have or are already making at your events. We also have systems to train your staff, hire influencers, or film with you."
              </p>
            </div>

            <div className="font-mono text-muted-foreground text-sm space-y-8 leading-relaxed max-w-xl">
              <div>
                <span className="text-primary font-bold inline-block mr-2 mb-2">[ MISSION ]</span>
                <p>We boost your organic or paid campaigns and extend the life of your video assets. Whether it's ambient footage or a scheduled shoot, we document what you’re doing in an authentic way and tell your audience how to participate.</p>
              </div>

              <div>
                <span className="text-secondary font-bold inline-block mr-2 mb-2">[ THE_PLAN ]</span>
                <p>Through video, written word, voice, and live experiences, we help you communicate in ways that resonate deeply with your community, bringing you greater growth, freedom, and abundance.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Tactical Blocks */}
          <div className="lg:w-1/2 grid grid-cols-1 gap-6 pt-12 lg:pt-32">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-5 h-5 text-muted-foreground" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Tactical_Operations</span>
            </div>

            {/* Supercharge Social */}
            <div className="group border border-border bg-[#050505] p-6 hover:border-primary transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-[8px] opacity-10 uppercase tracking-tighter">OPS_NODE_SOCIAL</div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-primary flex items-center justify-center flex-shrink-0 bg-primary/5 group-hover:bg-primary group-hover:text-black transition-all">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-sans text-foreground mb-1 uppercase tracking-wider">Supercharge Social</h4>
                  <p className="text-muted-foreground font-mono text-[13px] leading-relaxed opacity-80">
                    We can help supercharge your existing social media department or help you build a new one from scratch.
                  </p>
                </div>
              </div>
            </div>

            {/* Ambient Capture */}
            <div className="group border border-border bg-[#050505] p-6 hover:border-secondary transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-[8px] opacity-10 uppercase tracking-tighter">OPS_NODE_CAPTURE</div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-secondary flex items-center justify-center flex-shrink-0 bg-secondary/5 group-hover:bg-secondary group-hover:text-black transition-all">
                  <Video className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-sans text-foreground mb-1 uppercase tracking-wider">Ambient Capture</h4>
                  <p className="text-muted-foreground font-mono text-[13px] leading-relaxed opacity-80">
                    Tell us about your events. Just hit record on your ambient video, send it our way, and relax while we transform it into a genius asset.
                  </p>
                </div>
              </div>
            </div>

            {/* Real As It Gets */}
            <div className="group border border-border bg-[#050505] p-6 hover:border-accent transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-[8px] opacity-10 uppercase tracking-tighter">OPS_NODE_Creative</div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-accent flex items-center justify-center flex-shrink-0 bg-accent/5 group-hover:bg-accent group-hover:text-black transition-all">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-sans text-foreground mb-1 uppercase tracking-wider">Real as it gets</h4>
                  <p className="text-muted-foreground font-mono text-[13px] leading-relaxed opacity-80">
                    We use the real systems we use for great creative. Bringing more customers to the door for bars, restaurants, art galleries, and anywhere there's a good time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}