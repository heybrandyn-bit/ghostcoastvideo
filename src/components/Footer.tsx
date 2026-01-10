import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="bg-[#2C1810] border-t border-[#D4A574]/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-[#F4E4C1] mb-4">Alpha Reply Company</h3>
            <p className="text-[#F4E4C1]/70 mb-4 max-w-md">
              Empowering Atlanta's main street businesses to become creators of their own success through strategic content and communication solutions.
            </p>
            <a 
              href="https://alphareply.coderocket.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#D4A574] hover:text-[#E8C792] transition-colors text-sm cursor-pointer inline-block"
            >
              alphareply.coderocket.app →
            </a>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#F4E4C1] mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/video-production" className="text-[#F4E4C1]/70 hover:text-[#D4A574] transition-colors cursor-pointer">Video Production</Link></li>
              <li><Link to="/services/marketing-automation" className="text-[#F4E4C1]/70 hover:text-[#D4A574] transition-colors cursor-pointer">Marketing Automation</Link></li>
              <li><Link to="/services/ghostwriting" className="text-[#F4E4C1]/70 hover:text-[#D4A574] transition-colors cursor-pointer">Ghostwriting</Link></li>
              <li><Link to="/services/publishing" className="text-[#F4E4C1]/70 hover:text-[#D4A574] transition-colors cursor-pointer">Publishing</Link></li>
              <li><Link to="/services/podcast" className="text-[#F4E4C1]/70 hover:text-[#D4A574] transition-colors cursor-pointer">Podcasts</Link></li>
              <li><Link to="/services/live-events" className="text-[#F4E4C1]/70 hover:text-[#D4A574] transition-colors cursor-pointer">Live Events</Link></li>
              <li><Link to="/services/client-acquisition" className="text-[#F4E4C1]/70 hover:text-[#D4A574] transition-colors cursor-pointer">Client Acquisition</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#F4E4C1] mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/#about" className="text-[#F4E4C1]/70 hover:text-[#D4A574] transition-colors cursor-pointer">About Us</a></li>
              <li><a href="/#contact" className="text-[#F4E4C1]/70 hover:text-[#D4A574] transition-colors cursor-pointer">Contact</a></li>
              <li><a href="#" className="text-[#F4E4C1]/70 hover:text-[#D4A574] transition-colors cursor-pointer">Careers</a></li>
              <li><a href="#" className="text-[#F4E4C1]/70 hover:text-[#D4A574] transition-colors cursor-pointer">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#D4A574]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#F4E4C1]/60 text-sm">
              © {new Date().getFullYear()} Alpha Reply Company. All rights reserved.
            </p>
            <p className="text-[#F4E4C1]/60 text-sm">
              Proudly serving Atlanta's main street businesses
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}