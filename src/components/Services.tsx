import { Video, Zap, PenTool, BookOpen, Mic, Camera, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
const services = [
  {
    icon: Video,
    title: 'Video Production',
    description: 'Professional video content that looks good and lets you sell the high points of your work.',
    id: 'MOD_VP_01',
    link: '/services/video-production'
  },
  {
    icon: Zap,
    title: 'Marketing Automation',
    description: 'That means TIME SAVING systems that people will actually use, not just scripts.',
    id: 'MOD_MA_02',
    link: '/services/marketing-automation'
  },
  {
    icon: BookOpen,
    title: 'Publishing',
    description: 'Turn your knowledge into lead generators that establish you as the go-to expert in your field.',
    id: 'MOD_PB_03',
    link: '/services/publishing'
  },
  {
    icon: Mic,
    title: 'Podcast Production',
    description: 'The chillest way to build a loyal following. We handle everything from concept to distribution.',
    id: 'MOD_PP_04',
    link: '/services/podcast'
  },
  {
    icon: Camera,
    title: 'Live Event Capture',
    description: 'Relax with the people who care the most. We will make sure people get the message - and rememebr it.',
    id: 'MOD_LE_05',
    link: '/services/live-events'
  },
  {
    icon: Target,
    title: 'Client Acquisition',
    description: 'Predictable pipeline of 5-8 qualified appointments every month. No more feast-or-famine cycles.',
    id: 'MOD_CA_06',
    link: '/services/client-acquisition'
  }
];
// YouTube video ID from the provided URL
const testimonialVideoId = 'T_JKdD1aacg';
export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-b border-border relative overflow-hidden">
      {/* Grid lines background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-left mb-16 border-l-4 border-primary pl-6">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4 uppercase tracking-tighter">
            Everything That Turns A Stranger <br />
            <span className="text-primary">Into A Client</span>
          </h2>
          <p className="text-xl font-mono text-muted-foreground max-w-3xl">
            For the people who make dreams come true – we return the favor. We use science + storytelling to scale your brand and your sales on social media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group relative bg-card/50 p-8 border-r border-b border-border hover:bg-muted/20 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-50 font-mono text-xs text-secondary tracking-widest">
                0{index + 1}
              </div>

              <div className="w-12 h-12 rounded-none bg-transparent border-2 border-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-background transition-colors">
                <service.icon className="w-6 h-6 text-foreground group-hover:text-background" />
              </div>

              <h3 className="text-2xl font-bold font-sans text-foreground mb-4 uppercase tracking-tight group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground font-mono text-sm leading-relaxed border-l border-border pl-4">
                {service.description}
              </p>

              {/* Hover highlight effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="mt-24 mb-16 text-center max-w-6xl mx-auto bg-card border border-border p-8 relative">
          <div className="absolute top-0 left-0 bg-primary text-white text-xs font-mono px-2 py-1 uppercase tracking-widest">
            Featured Client
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-foreground mb-6 uppercase">
                Listen to international best-seller Peter Sage talk about some of the work we did this year.
              </h3>
              <div className="h-1 w-24 bg-secondary mb-6"></div>
              <div className="font-mono text-sm text-muted-foreground">
                PETER SAGE<br />
                INTERNATIONAL BEST-SELLER
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="relative w-full pb-[56.25%] h-0 overflow-hidden border-2 border-border bg-black shadow-[4px_4px_0px_0px_rgba(44,24,16,1)]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  src={`https://www.youtube.com/embed/${testimonialVideoId}`}
                  title="Peter Sage Testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 hover:bg-secondary/90 transition-colors cursor-pointer font-bold text-lg uppercase tracking-widest border border-secondary shadow-[0_0_15px_rgba(255,109,0,0.3)]"
          >
            <Target className="w-5 h-5" />
            Discover Your Perfect Solution
          </a>
        </div>
      </div>
    </section>
  );
}