import { BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

export default function PublishingPage() {
  const benefits = [
    "Complete book development from concept to final manuscript",
    "Professional editing and proofreading services",
    "Cover design and interior formatting",
    "ISBN registration and copyright support",
    "Amazon and distribution platform setup",
    "Marketing strategy and launch planning"
  ];

  const process = [
    { step: "Concept Development", description: "Define your book's purpose, audience, and core message" },
    { step: "Content Creation", description: "Writing, interviewing, or ghostwriting your manuscript" },
    { step: "Editing & Refinement", description: "Professional editing for clarity and impact" },
    { step: "Design & Formatting", description: "Create a professional-looking book inside and out" },
    { step: "Publishing & Distribution", description: "Get your book on Amazon and other platforms" },
    { step: "Launch & Marketing", description: "Promote your book to reach your ideal readers" }
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
            <BookOpen className="w-5 h-5 text-secondary" />
            <span className="text-secondary text-sm font-mono tracking-widest uppercase">Book Publishing Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6 leading-none tracking-tighter uppercase">
            Transform Your Knowledge Into<br />
            <span className="text-primary">A Published Book</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-mono leading-relaxed">
            From concept to bestseller, we guide you through every step of publishing a book that establishes you as the ultimate authority in your field.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all cursor-pointer font-bold text-lg uppercase tracking-widest border border-primary shadow-[4px_4px_0px_0px_rgba(230,29,95,0.3)] hover:translate-y-1 hover:shadow-none"
            >
              Publish Your Book
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
            Everything You Need to Publish
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
            Our Publishing Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border">
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
            Ready to Become a Published Author?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto font-serif italic">
            Your book is waiting to be written. Let's turn your expertise into a published work that opens doors and establishes your authority.
          </p>
          <Link to="/#contact">
            <Button className="bg-foreground text-background hover:bg-primary hover:text-white px-8 py-6 text-lg font-bold uppercase tracking-widest rounded-none border border-foreground transition-all">
              Start Your Book Journey
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}