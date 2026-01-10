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
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2C1810] via-[#4A2818] to-[#2C1810]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4A574]/10 border border-[#D4A574]/30 rounded-full px-6 py-2 mb-8">
            <Target className="w-5 h-5 text-[#D4A574]" />
            <span className="text-[#F4E4C1] text-sm font-medium">Predictable Client Acquisition</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F4E4C1] mb-6 leading-tight">
            Stop Decorating Your Business<br />
            <span className="text-[#D4A574]">Start Heating It Up</span>
          </h1>
          <p className="text-xl text-[#F4E4C1]/80 mb-8 max-w-3xl mx-auto">
            No more hoping for referrals. No more posting for likes. Just a proven outbound system that books 5-8 qualified appointments every month with clients ready to buy your $3K-$15K services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#D4A574] text-[#2C1810] px-8 py-4 rounded-lg hover:bg-[#E8C792] transition-colors cursor-pointer font-bold text-lg"
            >
              Fill Your Pipeline
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-[#D4A574] text-[#F4E4C1] px-8 py-4 rounded-lg hover:bg-[#D4A574]/10 transition-colors cursor-pointer font-bold text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C1810] mb-12 text-center">
            The System That Ends Feast-or-Famine Forever
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg border border-[#E8DCC8]">
                <CheckCircle className="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-1" />
                <p className="text-[#2C1810] text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2C1810] to-[#4A2818]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4E4C1] mb-12 text-center">
            How We Fill Your Calendar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="bg-[#3A2418] rounded-xl p-6 border border-[#D4A574]/20">
                <div className="w-12 h-12 rounded-full bg-[#D4A574] flex items-center justify-center text-[#2C1810] font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-[#F4E4C1] mb-2">{item.step}</h3>
                <p className="text-[#F4E4C1]/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Investment & Guarantee Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF8F0]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#E8DCC8] shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-[#2C1810] mb-6 text-center">
              Who This Is For
            </h2>
            <p className="text-lg text-[#5A4A3A] mb-6 text-center max-w-3xl mx-auto">
              Skilled experts stuck in feast-or-famine cycles: CPAs, lawyers, consultants, and agency owners who close deals in the $3K–$15K range and need a steady stream of quality clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-[#FFF8F0] rounded-xl p-6 border border-[#E8DCC8]">
                <h3 className="text-xl font-bold text-[#2C1810] mb-4">The Investment</h3>
                <p className="text-[#5A4A3A] mb-2"><strong>$3,000/month</strong> for a 90-day program</p>
                <p className="text-[#5A4A3A]"><strong>+ 10%</strong> of all revenue closed from our pipeline</p>
              </div>
              <div className="bg-[#FFF8F0] rounded-xl p-6 border border-[#E8DCC8]">
                <h3 className="text-xl font-bold text-[#2C1810] mb-4">The Guarantee</h3>
                <p className="text-[#5A4A3A]">
                  If in your first 90 days we don't deliver at least <strong>15 executive appointments</strong> that fit your ideal client profile, you can walk away and we'll refund your last month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#8B6F47] to-[#6F5739] rounded-2xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready for Predictable Revenue?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Stop trading hours for hope. Let's build you an outbound machine that books qualified appointments while you sleep. Daily replies. Weekly meetings. Monthly retainers.
          </p>
          <Link to="/#contact">
            <Button className="bg-[#D4A574] hover:bg-[#E8C792] text-[#2C1810] px-8 py-6 text-lg font-bold cursor-pointer">
              Book Your Strategy Call
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}