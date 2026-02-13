import { PenTool, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

export default function GhostwritingPage() {
  const benefits = [
    "Blog posts and articles that position you as an industry thought leader",
    "Website copy that converts visitors into customers",
    "LinkedIn content that builds your professional brand",
    "Email newsletters that engage and nurture your audience",
    "Case studies that showcase your success stories",
    "White papers and guides that demonstrate expertise"
  ];

  const contentTypes = [
    { title: "Blog Content", description: "SEO-optimized articles that drive traffic and establish authority" },
    { title: "Website Copy", description: "Compelling messaging that tells your story and converts visitors" },
    { title: "Social Media", description: "Engaging posts that build your brand across all platforms" },
    { title: "Email Campaigns", description: "Newsletters and sequences that keep your audience engaged" },
    { title: "Long-Form Content", description: "E-books, guides, and white papers that capture leads" },
    { title: "Sales Materials", description: "Proposals, decks, and one-pagers that close deals" }
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
            <PenTool className="w-5 h-5 text-secondary" />
            <span className="text-secondary text-sm font-mono tracking-widest uppercase">Professional Ghostwriting</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6 leading-none tracking-tighter uppercase">
            Your Voice, Your Story<br />
            <span className="text-primary">Expertly Articulated</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-mono leading-relaxed">
            We help you communicate your expertise through compelling content that builds authority, attracts ideal clients, and establishes you as the go-to expert in your field.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all cursor-pointer font-bold text-lg uppercase tracking-widest border border-primary shadow-[4px_4px_0px_0px_rgba(230,29,95,0.3)] hover:translate-y-1 hover:shadow-none rounded-none"
            >
              Share Your Story
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-foreground text-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all cursor-pointer font-bold text-lg font-mono uppercase tracking-widest rounded-none"
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
            Content That Builds Your Authority
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-card p-6 border border-border hover:border-accent transition-colors group rounded-none">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground text-lg group-hover:text-foreground transition-colors">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/5 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-12 text-center uppercase tracking-tight">
            Content We Create for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-card p-8 border border-border hover:border-accent transition-colors group rounded-none">
                <h3 className="text-xl font-bold text-foreground mb-3 uppercase tracking-wide group-hover:text-primary transition-colors">{type.title}</h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-card border border-border p-12 relative overflow-hidden rounded-none">
          <div className="absolute top-0 right-0 p-2 opacity-50 font-mono text-xs text-secondary tracking-widest uppercase">
            System_Ready
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6 uppercase tracking-tight">
            Ready to Amplify Your Voice?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto font-serif italic">
            Let's create content that captures your expertise and connects with your ideal audience, building the authority your business deserves.
          </p>
          <Link to="/#contact">
            <Button className="bg-foreground text-background hover:bg-primary hover:text-white px-8 py-6 text-lg font-bold uppercase tracking-widest rounded-none border border-foreground transition-all">
              Start Creating Content
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}