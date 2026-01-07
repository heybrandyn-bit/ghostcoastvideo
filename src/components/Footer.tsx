import { Film, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#57A3AF] to-[#57A3AF]/50 flex items-center justify-center">
                <Film className="w-5 h-5 text-[#060a0f]" />
              </div>
              <span className="font-oswald text-2xl tracking-widest text-[#F0CFA6] uppercase">Ghost Coast</span>
            </div>
            <p className="text-[#F0CFA6]/70 mb-6 max-w-md">
              Cinematic video production that elevates brands and tells unforgettable stories. Based in Los Angeles, serving clients worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer">
                <Instagram className="w-5 h-5 text-[#F0CFA6]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer">
                <Twitter className="w-5 h-5 text-[#F0CFA6]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer">
                <Youtube className="w-5 h-5 text-[#F0CFA6]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer">
                <Linkedin className="w-5 h-5 text-[#F0CFA6]" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-oswald text-sm tracking-widest text-[#F0CFA6] mb-4 uppercase">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-[#F0CFA6]/70 hover:text-[#57A3AF] transition-colors cursor-pointer">Commercial Production</a></li>
              <li><a href="#services" className="text-[#F0CFA6]/70 hover:text-[#57A3AF] transition-colors cursor-pointer">Event Coverage</a></li>
              <li><a href="#services" className="text-[#F0CFA6]/70 hover:text-[#57A3AF] transition-colors cursor-pointer">Post-Production</a></li>
              <li><a href="#services" className="text-[#F0CFA6]/70 hover:text-[#57A3AF] transition-colors cursor-pointer">Documentary Films</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-oswald text-sm tracking-widest text-[#F0CFA6] mb-4 uppercase">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-[#F0CFA6]/70 hover:text-[#57A3AF] transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#portfolio" className="text-[#F0CFA6]/70 hover:text-[#57A3AF] transition-colors cursor-pointer">Portfolio</a></li>
              <li><a href="#contact" className="text-[#F0CFA6]/70 hover:text-[#57A3AF] transition-colors cursor-pointer">Contact</a></li>
              <li><a href="#" className="text-[#F0CFA6]/70 hover:text-[#57A3AF] transition-colors cursor-pointer">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#F0CFA6]/60 text-sm">
              © {new Date().getFullYear()} Ghost Coast Video. All rights reserved.
            </p>
            <p className="text-[#F0CFA6]/60 text-sm font-oswald tracking-widest uppercase">
              Crafted with Cinematic Vision
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}