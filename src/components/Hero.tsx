import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2C1810] via-[#4A2818] to-[#2C1810]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNEOEMyOTUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      {/* Content container */}
      <div className="relative max-w-5xl mx-auto text-center">

        {/* Tagline */}
        <div className="inline-flex items-center gap-2 bg-[#D4A574]/10 border border-[#D4A574]/30 rounded-full px-6 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-[#D4A574]" />
          <span className="text-[#F4E4C1] text-sm font-medium">Your Message, Amplified. Your Clients, Captured.</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#F4E4C1] mb-6 leading-tight">
          Become the Creator of<br />
          <span className="text-[#D4A574]">Your Own Success</span>
        </h1>

        {/* Description - Broken down for better flow */}
        <p className="text-xl sm:text-2xl text-[#F4E4C1]/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          We help you broadcast your best self, not just to Atlanta, but to the world. We're driven by a passion to see main street businesses thrive, and we've honed our skills in direct marketing to deliver tangible results.
          <br /><br />
          But we found that delivering results wasn't enough; we needed to help you *own* that success, to scale it, and to make it sustainable. That's why we help main street businesses experience transformative growth through strategic content solutions—video production, marketing automation, ghostwriting, podcasts, and live events that connect you with the clients you're meant to serve.
          <br /><br />
          So, we create content that silences the static of social media distraction and compels people to act. We handle the complex tech, transforming your entire media presence into a powerful, always-on stage – think of it as your personal TED Talk, broadcasting your expertise 24/7.
          <br /><br />
          **We build you client-generating machines – robust, evergreen systems that are yours to keep, forever.**
          <br /><br />
          For the entrepreneurs who pour their heart into their dreams, we pour our expertise into their growth. We're a full-service production company, using the perfect blend of data-driven strategy and compelling storytelling to scale your brand and your sales.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#D4A574] text-[#2C1810] px-8 py-4 rounded-lg hover:bg-[#E8C792] transition-all cursor-pointer font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Start Your Transformation
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-[#D4A574] text-[#F4E4C1] px-8 py-4 rounded-lg hover:bg-[#D4A574]/10 transition-all cursor-pointer font-bold text-lg"
          >
            Explore Our Services
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#D4A574] mb-2">500+</div>
            <div className="text-[#F4E4C1]/70">Main Street Businesses Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#D4A574] mb-2">3x</div>
            <div className="text-[#F4E4C1]/70">Average Client Growth</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#D4A574] mb-2">100%</div>
            <div className="text-[#F4E4C1]/70">Atlanta-Based Team</div>
          </div>
        </div>
      </div>
    </section>
  );
}