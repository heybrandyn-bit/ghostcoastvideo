import { Menu, X, Film } from 'lucide-react';
import { useState } from 'react';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060a0f]/80 backdrop-blur-3xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#57A3AF] to-[#57A3AF]/50 flex items-center justify-center">
              <Film className="w-5 h-5 text-[#060a0f]" />
            </div>
            <span className="font-oswald text-2xl tracking-widest text-[#F0CFA6] uppercase">Ghost Coast</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="font-oswald text-sm tracking-widest text-[#F0CFA6] hover:text-[#57A3AF] transition-colors cursor-pointer uppercase">Services</a>
            <a href="#portfolio" className="font-oswald text-sm tracking-widest text-[#F0CFA6] hover:text-[#57A3AF] transition-colors cursor-pointer uppercase">Portfolio</a>
            <a href="#about" className="font-oswald text-sm tracking-widest text-[#F0CFA6] hover:text-[#57A3AF] transition-colors cursor-pointer uppercase">About</a>
            <a href="#contact" className="font-oswald text-sm tracking-widest text-[#F0CFA6] hover:text-[#57A3AF] transition-colors cursor-pointer uppercase">Contact</a>
            <a
              href="#contact"
              className="px-6 py-3 bg-[#EA3C4B] text-[#F0CFA6] font-oswald text-sm tracking-widest uppercase rounded-full hover:bg-[#FF8F48] transition-all cursor-pointer shadow-lg shadow-[#EA3C4B]/20"
            >
              Start Project
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#F0CFA6] hover:text-[#57A3AF] cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#060a0f]/95 backdrop-blur-3xl border-t border-white/10">
          <div className="px-6 pt-4 pb-6 space-y-4">
            <a href="#services" className="block font-oswald text-sm tracking-widest text-[#F0CFA6] hover:text-[#57A3AF] py-2 cursor-pointer uppercase">Services</a>
            <a href="#about" className="block font-oswald text-sm tracking-widest text-[#F0CFA6] hover:text-[#57A3AF] py-2 cursor-pointer uppercase">About</a>
            <a href="#portfolio" className="block font-oswald text-sm tracking-widest text-[#F0CFA6] hover:text-[#57A3AF] py-2 cursor-pointer uppercase">Portfolio</a>
            <a href="#contact" className="block font-oswald text-sm tracking-widest text-[#F0CFA6] hover:text-[#57A3AF] py-2 cursor-pointer uppercase">Contact</a>
            <a href="#contact" className="block px-6 py-3 bg-[#EA3C4B] text-[#F0CFA6] font-oswald text-sm tracking-widest uppercase rounded-full hover:bg-[#FF8F48] transition-all cursor-pointer text-center">
              Start Project
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}