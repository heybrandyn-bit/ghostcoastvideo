import { ArrowRight, Sparkles } from 'lucide-react';
// Updated logo URLs provided by the user
const logoUrls = [
  'http://ghostcoast.video/wp-content/uploads/2026/01/kcf.png',
  'http://ghostcoast.video/wp-content/uploads/2026/01/rpc.png',
  'http://ghostcoast.video/wp-content/uploads/2026/01/sierra.png',
  'http://ghostcoast.video/wp-content/uploads/2026/01/snmlogo.png',
  'http://ghostcoast.video/wp-content/uploads/2026/01/yes.png',
];
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_4px,3px_100%] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      {/* Content container */}
      <div className="relative max-w-5xl mx-auto text-center">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 px-6 py-2 mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-secondary font-mono text-sm tracking-widest uppercase">Video That Inspires Action</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-black text-foreground mb-6 leading-none tracking-tighter uppercase">
          Ghost Coast<br />
          <span className="text-primary italic font-serif tracking-normal lowercase">Video</span>
        </h1>

        {/* Description */}
        <p className="text-xl sm:text-2xl font-mono text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed border-l-2 border-accent pl-6 text-left">
          We help main street businesses turn their expertise into high-quality content. Professional video, audio, and written assets that build trust and attract your ideal clients.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all cursor-pointer font-bold text-lg uppercase tracking-widest border border-primary shadow-[4px_4px_0px_0px_rgba(230,29,95,0.3)] hover:translate-y-1 hover:shadow-none"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-foreground text-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all cursor-pointer font-bold text-lg font-mono uppercase tracking-widest"
          >
            View Services
          </a>
        </div>
        {/* Trusted By Section */}
        <div className="mt-24 mb-16 max-w-4xl mx-auto border-t border-border pt-8"> {/* Increased margin for better separation */}
          <h2 className="text-xl font-mono text-muted-foreground mb-8 text-center uppercase tracking-widest">
            Trusted Partners:
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
            {logoUrls.map((url, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                <img
                  src={url}
                  alt={`Client Logo ${index + 1}`}
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                // Added grayscale filter for a common "trusted by" look, with hover effect
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}