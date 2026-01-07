import { Video, Zap, PenTool, Mic, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
const services = [
  {
    icon: Video,
    title: 'Video Production',
    description: 'Cinematic brand films that transform your message into visual experiences that command attention.',
    color: '#57A3AF',
    link: '/services/video-production'
  },
  {
    icon: Zap,
    title: 'Marketing Automation',
    description: 'Visualize invisible systems. Turn your automation workflows into assets that close retainers.',
    color: '#FF8F48',
    link: '/services/marketing-automation'
  },
  {
    icon: PenTool,
    title: 'Publishing & Ghostwriting',
    description: 'Your words, cinematized. We turn manuscripts into visual proof that stops the scroll.',
    color: '#57A3AF',
    link: '/services/publishing'
  },
  {
    icon: Mic,
    title: 'Podcast Production',
    description: 'Full-service podcast production. You show up and talk, we handle everything else.',
    color: '#EA3C4B',
    link: '/services/podcast'
  },
  {
    icon: Camera,
    title: 'Live Event Production',
    description: 'Zero-risk venue partnerships. We produce premium gaming experiences that fill slow nights.',
    color: '#FF8F48',
    link: '/services/live-events'
  }
];
export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6 lg:px-12">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#57A3AF]/5 blur-[120px] rounded-full"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-oswald text-5xl md:text-7xl tracking-widest text-[#F0CFA6] mb-6 uppercase">
            Our <span className="text-[#57A3AF]">Services</span>
          </h2>
          <p className="text-[#F0CFA6]/70 text-lg max-w-3xl mx-auto">
            <span className="font-instrument-serif italic text-[#57A3AF] text-[5rem] float-left leading-[0.7] mr-4">F</span>
            rom concept to final cut, we deliver end-to-end video production services that transform ideas into visual masterpieces. Every project receives the same cinematic treatment, regardless of scale.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/10 transition-all duration-500 cursor-pointer"
              style={{
                transform: index % 3 === 1 ? 'translateY(3rem)' : 'translateY(0)'
              }}
            >
              {/* Inner Glow */}
              <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_0_60px_rgba(87,163,175,0.05)] group-hover:shadow-[inset_0_0_60px_rgba(87,163,175,0.15)] transition-all duration-500"></div>
              <div className="relative">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon className="w-8 h-8" style={{ color: service.color }} />
                </div>
                <h3 className="font-oswald text-2xl tracking-widest text-[#F0CFA6] mb-4 uppercase">
                  {service.title}
                </h3>
                <p className="text-[#F0CFA6]/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}