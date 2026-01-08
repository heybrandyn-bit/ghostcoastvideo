import { Video, Zap, PenTool, BookOpen, Mic, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Video,
    title: 'Video Production',
    description: 'Professional video content that looks good and lets you sell the high points of your work.',
    color: 'from-[#D4A574] to-[#C89968]',
    link: '/services/video-production'
  },
  {
    icon: Zap,
    title: 'Marketing Automation',
    description: 'That means TIME SAVING systems that people will actually use, not just scripts.',
    color: 'from-[#8B6F47] to-[#A68B5B]',
    link: '/services/marketing-automation'
  },
  {
    icon: PenTool,
    title: 'Ghostwriting',
    description: 'We write the scripts that make your organization work, from video to email to anything else.',
    color: 'from-[#D4A574] to-[#E8C792]',
    link: '/services/ghostwriting'
  },
  {
    icon: BookOpen,
    title: 'Publishing',
    description: 'Turn your knowledge into lead generators that establish you as the go-to expert in your field.',
    color: 'from-[#A68B5B] to-[#C4A678]',
    link: '/services/publishing'
  },
  {
    icon: Mic,
    title: 'Podcast Production',
    description: 'The chillest way to build a loyal following. We handle everything from concept to distribution.',
    color: 'from-[#8B6F47] to-[#9F8254]',
    link: '/services/podcast'
  },
  {
    icon: Camera,
    title: 'Live Event Capture',
    description: 'Relax with the people who care the most. We will make sure people get the message - and rememebr it.',
    color: 'from-[#C89968] to-[#D4A574]',
    link: '/services/live-events'
  }
];

// YouTube video ID from the provided URL
const testimonialVideoId = 'T_JKdD1aacg';

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2C1810] mb-4">
            Everything That Turns A Stranger <span className="text-[#8B6F47]">Into A Client</span>
          </h2>
          <p className="text-xl text-[#5A4A3A] max-w-3xl mx-auto">
            For the people who make dreams come true – we return the favor. We use science + storytelling to scale your brand and your sales on social media.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#E8DCC8] hover:border-[#D4A574] cursor-pointer transform hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C1810] mb-4">{service.title}</h3>
              <p className="text-[#5A4A3A] leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="mt-24 mb-16 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-[#2C1810] mb-6">
            Listen to international best-seller Peter Sage talk about some of the work we did this year.
          </h3>
          <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${testimonialVideoId}`}
              title="Peter Sage Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#8B6F47] text-white px-8 py-4 rounded-lg hover:bg-[#6F5739] transition-colors cursor-pointer font-bold text-lg shadow-lg"
          >
            Discover Your Perfect Solution
          </a>
        </div>
      </div>
    </section>
  );
}