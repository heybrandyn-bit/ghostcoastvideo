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
      icon: <PenTool className="w-8 h-8 text-[#D4A574]" />
    },
    { 
      title: "Articles & Blog Posts", 
      description: "Authority-building content that attracts your ideal audience and keeps them coming back for more.",
      icon: <FileText className="w-8 h-8 text-[#D4A574]" />
    },
    { 
      title: "Video & Podcast Scripts", 
      description: "The blueprint for compelling audio and visual content. We write the words that make your media shine.",
      icon: <FileText className="w-8 h-8 text-[#D4A574]" />
    },
    { 
      title: "Lead Generation Pieces", 
      description: "E-books, guides, and white papers that demonstrate deep expertise and capture qualified leads.",
      icon: <BookOpen className="w-8 h-8 text-[#D4A574]" />
    },
    { 
      title: "Full Books", 
      description: "From concept to published work. We help you create the ultimate authority asset that opens doors.",
      icon: <BookOpen className="w-8 h-8 text-[#D4A574]" />
    },
    { 
      title: "Website & Sales Copy", 
      description: "Messaging that converts visitors into customers and tells your unique story with clarity.",
      icon: <PenTool className="w-8 h-8 text-[#D4A574]" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2C1810] via-[#4A2818] to-[#2C1810]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4A574]/10 border border-[#D4A574]/30 rounded-full px-6 py-2 mb-8">
            <FileText className="w-5 h-5 text-[#D4A574]" />
            <span className="text-[#F4E4C1] text-sm font-medium">Strategic Digital Publishing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F4E4C1] mb-6 leading-tight">
            Your Words, Your Growth<br />
            <span className="text-[#D4A574]">Expertly Published</span>
          </h1>
          <p className="text-xl text-[#F4E4C1]/80 mb-8 max-w-3xl mx-auto">
            We create the written assets that power business growth. From emails that convert to books that establish authority, we craft words that excite, inform, and drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#D4A574] text-[#2C1810] px-8 py-4 rounded-lg hover:bg-[#E8C792] transition-colors cursor-pointer font-bold text-lg"
            >
              Publish for Growth
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
            Words That Work for Your Business
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

      {/* What We Publish Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2C1810] to-[#4A2818]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4E4C1] mb-12 text-center">
            What We Publish for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishingTypes.map((type, index) => (
              <div key={index} className="bg-[#3A2418] rounded-xl p-6 border border-[#D4A574]/20 hover:border-[#D4A574]/40 transition-colors">
                <div className="mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-[#F4E4C1] mb-3">{type.title}</h3>
                <p className="text-[#F4E4C1]/70">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#8B6F47] to-[#6F5739] rounded-2xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Publish for Growth?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Stop just creating content. Start publishing strategic written assets that attract clients, build authority, and drive your business forward.
          </p>
          <Link to="/#contact">
            <Button className="bg-[#D4A574] hover:bg-[#E8C792] text-[#2C1810] px-8 py-6 text-lg font-bold cursor-pointer">
              Start Publishing Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}