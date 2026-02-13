import { Link } from 'react-router-dom';
import { useAudio } from '../context/AudioContext';
import { Twitter, Instagram, Twitch, Youtube, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const { playerVisible } = useAudio();

  const socialLinks = [
    { icon: Twitter, url: "https://twitter.com/GhostCoastvideo", label: "Twitter" },
    { icon: Instagram, url: "https://www.instagram.com/ghostcoastvideo/", label: "Instagram" },
    { icon: Twitch, url: "https://www.twitch.tv/ghostcoastvideo", label: "Twitch" },
    { icon: Youtube, url: "https://www.youtube.com/@ghostcoastvideo", label: "YouTube" },
    { icon: Linkedin, url: "https://www.linkedin.com/groups/12828411/", label: "LinkedIn" },
    { icon: ExternalLink, url: "https://www.tumblr.com/blog/ghostcoastvideo", label: "Tumblr" },
  ];

  return (
    <footer className={`bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8 font-mono text-sm transition-all duration-300 ${playerVisible ? 'pb-32' : 'pb-12'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-4 font-sans uppercase tracking-widest">
              Ghost Coast <span className="text-primary">Video</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed border-l-2 border-accent pl-4">
              Empowering America's main street businesses to become creators of their own success through strategic content and communication solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  title={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-foreground mb-4 uppercase tracking-widest border-b border-border pb-2 inline-block">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/video-production" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer hover:pl-1 transition-all">Video Production</Link></li>
              <li><Link to="/services/marketing-automation" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer hover:pl-1 transition-all">Marketing Automation</Link></li>
              <li><Link to="/services/ghostwriting" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer hover:pl-1 transition-all">Ghostwriting</Link></li>
              <li><Link to="/services/publishing" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer hover:pl-1 transition-all">Publishing</Link></li>
              <li><Link to="/services/podcast" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer hover:pl-1 transition-all">Podcasts</Link></li>
              <li><Link to="/services/live-events" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer hover:pl-1 transition-all">Live Events</Link></li>
              <li><Link to="/services/client-acquisition" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer hover:pl-1 transition-all">Client Acquisition</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground mb-4 uppercase tracking-widest border-b border-border pb-2 inline-block">Company</h4>
            <ul className="space-y-2">
              <li><a href="/#about" className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer">About Us</a></li>
              <li><a href="/#contact" className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer">Contact</a></li>
              <li><a href="/blog/wp-login.php" className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer">Login</a></li>
              <li><a href="/blog/privacy-policy/" className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer">Privacy / Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/60 uppercase">
          <p>
            © 2026 GHOST COAST VIDEO. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Atlanta, Georgia & Alburquerque, New Mexico
          </p>
        </div>
      </div>
    </footer>
  );
}