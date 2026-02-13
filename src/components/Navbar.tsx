import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold font-sans tracking-wide text-foreground cursor-pointer hover:text-primary transition-colors">
              GHOST COAST VIDEO
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-8 font-mono text-sm">
              <a href="/#services" className="text-foreground/80 hover:text-primary transition-colors cursor-pointer uppercase tracking-wider">Services</a>
              <a href="/#about" className="text-foreground/80 hover:text-primary transition-colors cursor-pointer uppercase tracking-wider">About</a>

              {/* Community Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors cursor-pointer uppercase tracking-wider outline-none">
                  Community <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-0 w-48 bg-background border border-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                  <div className="py-2">
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="block px-6 py-3 text-foreground/80 hover:text-primary hover:bg-muted/10 transition-colors uppercase tracking-wider text-xs border-b border-border/50">
                      Discord
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block px-6 py-3 text-foreground/80 hover:text-primary hover:bg-muted/10 transition-colors uppercase tracking-wider text-xs border-b border-border/50">
                      LinkedIn
                    </a>
                    <Link to="/radio" className="block px-6 py-3 text-foreground/80 hover:text-primary hover:bg-muted/10 transition-colors uppercase tracking-wider text-xs">
                      Radio
                    </Link>
                  </div>
                </div>
              </div>

              <a href="/#contact" className="text-foreground/80 hover:text-primary transition-colors cursor-pointer uppercase tracking-wider">Contact</a>
              <a href="/blog/wp-login.php" className="text-foreground/80 hover:text-accent transition-colors cursor-pointer uppercase tracking-wider">Login</a>
              <a href="/#contact" className="bg-primary text-primary-foreground px-6 py-2 rounded-none hover:bg-primary/90 transition-colors cursor-pointer font-bold uppercase tracking-widest border border-primary">
                INITIALIZE
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 pt-2 pb-4 space-y-3 font-mono text-sm max-h-[80vh] overflow-y-auto">
            <a href="/#services" className="block text-foreground hover:text-primary py-2 cursor-pointer uppercase tracking-wider">Services</a>
            <a href="/#about" className="block text-foreground hover:text-primary py-2 cursor-pointer uppercase tracking-wider">About</a>

            <div className="py-2 border-y border-border/30 my-2">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 px-2">Community</p>
              <a href="https://discord.com" className="block text-foreground hover:text-primary py-2 pl-4 cursor-pointer uppercase tracking-wider text-xs">Discord</a>
              <a href="https://linkedin.com" className="block text-foreground hover:text-primary py-2 pl-4 cursor-pointer uppercase tracking-wider text-xs">LinkedIn</a>
              <Link to="/radio" className="block text-foreground hover:text-primary py-2 pl-4 cursor-pointer uppercase tracking-wider text-xs">Radio</Link>
            </div>

            <a href="/#contact" className="block text-foreground hover:text-primary py-2 cursor-pointer uppercase tracking-wider">Contact</a>
            <a href="/#contact" className="block bg-primary text-primary-foreground px-6 py-2 rounded-none hover:bg-primary/90 transition-colors cursor-pointer font-bold text-center uppercase tracking-widest mt-4">
              INITIALIZE
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}