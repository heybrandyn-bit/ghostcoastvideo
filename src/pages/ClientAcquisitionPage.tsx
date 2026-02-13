import { Target, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

export default function ClientAcquisitionPage() {
  const benefits = [
    "5-8 qualified appointments booked per month with decision-makers",
    "No more feast-or-famine cycles—predictable pipeline every week",
    "Native English-speaking reply team that converts interest into meetings",
    "Creative outreach that cuts through inbox noise (Looms, mini-podcasts, custom assets)",
    "Pre-warmed domains and thousands of vetted leads ready to deploy",
    "Full transparency: daily reply reports and pipeline tracking"
  ];

  const process = [
    { step: "Target Profiling", description: "We identify your ideal client profile and build a laser-focused lead list" },
    { step: "Creative Outreach", description: "Personalized video messages, industry insights, and custom assets—not generic templates" },
    { step: "Volume & Velocity", description: "1,000+ targeted emails daily with systematic follow-up sequences" },
    { step: "Live Reply Management", description: "Our 24/7 team engages every interested prospect and books qualified calls" },
    { step: "Appointment Delivery", description: "Show up to pre-qualified meetings with decision-makers ready to talk" }
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
            <Target className="w-5 h-5 text-secondary" />
            <span className="text-secondary text-sm font-mono tracking-widest uppercase">Predictable Client Acquisition</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6 leading-none tracking-tighter uppercase">
            Stop Decorating Your Business<br />
            <span className="text-primary">Start Heating It Up</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-mono leading-relaxed">
            No more hoping for referrals. No more posting for likes. Just a proven outbound system that books 5-8 qualified appointments every month with clients ready to buy your $3K-$15K services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all cursor-pointer font-bold text-lg uppercase tracking-widest border border-primary shadow-[4px_4px_0px_0px_rgba(230,29,95,0.3)] hover:translate-y-1 hover:shadow-none rounded-none"
            >
              Fill Your Pipeline
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
            The System That Ends Feast-or-Famine Forever
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

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/5 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-12 text-center uppercase tracking-tight">
            How We Fill Your Calendar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-t border-l border-border">
            {process.map((item, index) => (
              <div key={index} className="bg-card p-8 border-r border-b border-border hover:bg-muted/10 transition-all group rounded-none">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary flex items-center justify-center text-secondary font-mono font-bold text-xl mb-6 group-hover:bg-secondary group-hover:text-background transition-colors rounded-none">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 uppercase tracking-wide">{item.step}</h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Guarantee Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card p-8 md:p-12 border border-border relative overflow-hidden rounded-none">
            <div className="absolute top-0 left-0 p-2 opacity-50 font-mono text-xs text-primary tracking-widest uppercase">
              CONFIDENTIAL_DATA
            </div>
            <h2 className="text-3xl font-black text-foreground mb-6 text-center uppercase tracking-tight">
              Who This Is For
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center max-w-3xl mx-auto font-serif italic">
              Skilled experts stuck in feast-or-famine cycles: CPAs, lawyers, consultants, and agency owners who close deals in the $3K–$15K range and need a steady stream of quality clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-card p-6 border border-border hover:border-accent transition-colors rounded-none">
                <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide">The Investment</h3>
                <p className="text-foreground mb-2 font-mono"><strong>$3,000/month</strong> for a 90-day program</p>
                <p className="text-muted-foreground font-mono text-sm"><strong>+ 10%</strong> of all revenue closed from our pipeline</p>
              </div>
              <div className="bg-card p-6 border border-border hover:border-accent transition-colors rounded-none">
                <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide">The Guarantee</h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                  If in your first 90 days we don't deliver at least <strong className="text-foreground">15 executive appointments</strong> that fit your ideal client profile, you can walk away and we'll refund your last month.
                </p>
              </div>
            </div>
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
            Ready for Predictable Revenue?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto font-serif italic">
            Stop trading hours for hope. Let's build you an outbound machine that books qualified appointments while you sleep. Daily replies. Weekly meetings. Monthly retainers.
          </p>
          <Link to="/#contact">
            <Button className="bg-foreground text-background hover:bg-primary hover:text-white px-8 py-6 text-lg font-bold uppercase tracking-widest rounded-none border border-foreground transition-all">
              Book Your Strategy Call
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}