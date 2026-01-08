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
          You Don't Have Forever<br />
          <span className="text-[#D4A574]">To Share Your Best Self</span>

        </h1>
{/* Description - Broken down for better flow */}


        <p className="text-xl sm:text-2xl text-[#F4E4C1]/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Experience transformative growth through content solutions — video production, marketing automation, ghostwriting, podcasts, and live events that connect you with the clients you're meant to serve.
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

        {/* Trusted By Section */}
        <div className="mt-24 mb-16 max-w-4xl mx-auto"> {/* Increased margin for better separation */}
          <h2 className="text-3xl font-bold text-[#F4E4C1] mb-8 text-center">
            Trusted by teams at:
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