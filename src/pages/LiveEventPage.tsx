import { Camera, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

export default function LiveEventPage() {
  const benefits = [
    "Multi-camera production for dynamic coverage",
    "Professional audio capture and mixing",
    "Live streaming to multiple platforms simultaneously",
    "Same-day highlight reels and social media clips",
    "Full event documentation for future marketing",
    "Interviews and testimonials captured on-site"
  ];

  const eventTypes = [
    { title: "Conferences & Summits", description: "Capture keynotes, panels, and networking moments" },
    { title: "Product Launches", description: "Document your big reveal with cinematic quality" },
    { title: "Corporate Events", description: "Team gatherings, celebrations, and company milestones" },
    { title: "Workshops & Training", description: "Record educational content for future distribution" },
    { title: "Grand Openings", description: "Celebrate your new location or business launch" },
    { title: "Community Events", description: "Capture the energy of local gatherings and festivals" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-background border-b border-border overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 px-6 py-2 mb-8 backdrop-blur-sm">
            <Camera className="w-5 h-5 text-secondary" />
            <span className="text-secondary text-sm font-mono tracking-widest uppercase">Live Event Capture</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6 leading-none tracking-tighter uppercase">
            Extend the Impact of<br />
            <span className="text-primary">Your Events</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-mono leading-relaxed">
            Professional event documentation that captures every important moment and creates content you can use for months to come—from promotional videos to social media highlights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all cursor-pointer font-bold text-lg uppercase tracking-widest border border-primary shadow-[4px_4px_0px_0px_rgba(230,29,95,0.3)] hover:translate-y-1 hover:shadow-none"
            >
              Book Event Coverage
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-foreground text-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all cursor-pointer font-bold text-lg font-mono uppercase tracking-widest"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-12 text-center uppercase tracking-tight">
            Professional Event Documentation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-card p-6 border border-border hover:border-accent transition-colors group">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground text-lg group-hover:text-foreground transition-colors">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/5 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-12 text-center uppercase tracking-tight">
            Events We Cover
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((type, index) => (
              <div key={index} className="bg-card p-8 border border-border hover:border-accent transition-colors group">
                <h3 className="text-xl font-bold text-foreground mb-3 uppercase tracking-wide group-hover:text-primary transition-colors">{type.title}</h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-card border border-border p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-50 font-mono text-xs text-secondary tracking-widest uppercase">
            System_Ready
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6 uppercase tracking-tight">
            Let's Capture Your Next Event
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto font-serif italic">
            Don't let your event's impact end when the doors close. Let's create content that extends its reach and continues to work for your business.
          </p>
          <Link to="/#contact">
            <Button className="bg-foreground text-background hover:bg-primary hover:text-white px-8 py-6 text-lg font-bold uppercase tracking-widest rounded-none border border-foreground transition-all">
              Schedule Event Coverage
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}