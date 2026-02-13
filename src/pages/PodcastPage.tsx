import { Video, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

export default function PodcastPage() {
  const benefits = [
    "Turn relaxed conversations into revenue streams",
    "Build authority while actually enjoying yourself",
    "Network naturally through engaging discussions",
    "Create weeks of content from one chill session",
    "Grow your audience while keeping your sanity",
    "Make money doing what feels like hanging out"
  ];

  const process = [
    { step: "The Fun Part", description: "Share your ideas in a VERY relaxed & supported environment" },
    { step: "We Handle This", description: "Professional editing and production magic happens" },
    { step: "Guest Management", description: "Yeah. Meet your dream 100, or just your industry's" },
    { step: "Growth Time", description: "Your ideas reach eager audiences everywhere" },
    { step: "Money Flows", description: "Turn listeners into clients while staying authentic" },
    { step: "Rinse & Repeat", description: "Keep building wealth through conversations you enjoy" }
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
            <Video className="w-5 h-5 text-secondary" />
            <span className="text-secondary text-sm font-mono tracking-widest uppercase">The Chillest Way to Grow Your Business</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6 leading-none tracking-tighter uppercase">
            Making Money Should Be<br />
            <span className="text-primary">This Much Fun</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-mono leading-relaxed">
            From political shows to wellness series, we've proven that the best content (and biggest profits) come when you're actually enjoying yourself. Let's turn your ideas into a show that makes you money while keeping your zen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all cursor-pointer font-bold text-lg uppercase tracking-widest border border-primary shadow-[4px_4px_0px_0px_rgba(230,29,95,0.3)] hover:translate-y-1 hover:shadow-none"
            >
              Start Having Fun
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
            Yes, Business Growth Can Actually Be Enjoyable
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

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/5 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-12 text-center uppercase tracking-tight">
            How We Turn Good Times Into Good Money
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-t border-l border-border">
            {process.map((item, index) => (
              <div key={index} className="bg-card p-8 border-r border-b border-border hover:bg-muted/10 transition-all group">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary flex items-center justify-center text-secondary font-mono font-bold text-xl mb-6 group-hover:bg-secondary group-hover:text-background transition-colors">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 uppercase tracking-wide">{item.step}</h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">{item.description}</p>
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
            Ready To Make Money While Having Fun?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto font-serif italic">
            Join other successful hosts who've discovered the secret: the most profitable content comes from conversations you actually enjoy having. Let's make your business growth feel less like work.
          </p>
          <Link to="/#contact">
            <Button className="bg-foreground text-background hover:bg-primary hover:text-white px-8 py-6 text-lg font-bold uppercase tracking-widest rounded-none border border-foreground transition-all">
              Let's Get Started
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}