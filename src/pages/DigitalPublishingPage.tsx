import { FileText, CheckCircle, ArrowRight, PenTool, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

export default function DigitalPublishingPage() {
  const benefits = [
    "Strategic writing that drives business growth, not just fills pages",
    "Email campaigns and sequences that nurture leads and close sales",
    "Articles and blog posts that establish you as an industry authority",
    "Video and podcast scripts that captivate audiences and boost engagement",
    "Lead generation pieces (e-books, guides) designed to capture high-quality prospects",
    "Full-length books that cement your legacy and attract ideal clients"
  ];

  const publishingTypes = [
    {
      title: "Email Campaigns",
      description: "Words that get opened, read, and clicked. We craft sequences that nurture leads and drive revenue.",
      icon: <PenTool className="w-8 h-8 text-secondary" />
    },
    {
      title: "Articles & Blog Posts",
      description: "Authority-building content that attracts your ideal audience and keeps them coming back for more.",
      icon: <FileText className="w-8 h-8 text-secondary" />
    },
    {
      title: "Video & Podcast Scripts",
      description: "The blueprint for compelling audio and visual content. We write the words that make your media shine.",
      icon: <FileText className="w-8 h-8 text-secondary" />
    },
    {
      title: "Lead Generation Pieces",
      description: "E-books, guides, and white papers that demonstrate deep expertise and capture qualified leads.",
      icon: <BookOpen className="w-8 h-8 text-secondary" />
    },
    {
      title: "Full Books",
      description: "From concept to published work. We help you create the ultimate authority asset that opens doors.",
      icon: <BookOpen className="w-8 h-8 text-secondary" />
    },
    {
      title: "Website & Sales Copy",
      description: "Messaging that converts visitors into customers and tells your unique story with clarity.",
      icon: <PenTool className="w-8 h-8 text-secondary" />
    }
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
            <FileText className="w-5 h-5 text-secondary" />
            <span className="text-secondary text-sm font-mono tracking-widest uppercase">Strategic Digital Publishing</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6 leading-none tracking-tighter uppercase">
            Your Words, Your Growth<br />
            <span className="text-primary">Expertly Published</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-mono leading-relaxed">
            We create the written assets that power business growth. From emails that convert to books that establish authority, we craft words that excite, inform, and drive results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all cursor-pointer font-bold text-lg uppercase tracking-widest border border-primary shadow-[4px_4px_0px_0px_rgba(230,29,95,0.3)] hover:translate-y-1 hover:shadow-none"
            >
              Publish for Growth
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
            Words That Work for Your Business
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

      {/* What We Publish Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/5 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-12 text-center uppercase tracking-tight">
            What We Publish for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishingTypes.map((type, index) => (
              <div key={index} className="bg-card p-8 border border-border hover:border-accent transition-colors group">
                <div className="mb-4">
                  {type.icon}
                </div>
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
            Ready to Publish for Growth?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto font-serif italic">
            Stop just creating content. Start publishing strategic written assets that attract clients, build authority, and drive your business forward.
          </p>
          <Link to="/#contact">
            <Button className="bg-foreground text-background hover:bg-primary hover:text-white px-8 py-6 text-lg font-bold uppercase tracking-widest rounded-none border border-foreground transition-all">
              Start Publishing Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}