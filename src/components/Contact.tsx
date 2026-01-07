import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 lg:px-12">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 right-10 w-[700px] h-[700px] bg-[#57A3AF]/5 blur-[120px] rounded-full"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-oswald text-5xl md:text-7xl tracking-widest text-[#F0CFA6] mb-6 uppercase">
            Let's Create <span className="text-[#57A3AF]">Together</span>
          </h2>
          <p className="text-[#F0CFA6]/70 text-lg max-w-3xl mx-auto">
            <span className="font-instrument-serif italic text-[#57A3AF] text-[5rem] float-left leading-[0.7] mr-4">R</span>
            eady to bring your vision to life? Whether you have a fully formed concept or just an idea, we're here to help you tell your story in the most cinematic way possible.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden">
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(87,163,175,0.1)]"></div>
            <form className="relative space-y-6">
              <div>
                <label className="block font-oswald text-sm tracking-widest text-[#F0CFA6] mb-2 uppercase">Your Name</label>
                <Input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-white/5 border-white/10 text-[#F0CFA6] placeholder:text-[#F0CFA6]/30 focus:border-[#57A3AF] rounded-2xl h-12"
                />
              </div>
              <div>
                <label className="block font-oswald text-sm tracking-widest text-[#F0CFA6] mb-2 uppercase">Email</label>
                <Input 
                  type="email" 
                  placeholder="john@company.com" 
                  className="w-full bg-white/5 border-white/10 text-[#F0CFA6] placeholder:text-[#F0CFA6]/30 focus:border-[#57A3AF] rounded-2xl h-12"
                />
              </div>
              <div>
                <label className="block font-oswald text-sm tracking-widest text-[#F0CFA6] mb-2 uppercase">Phone</label>
                <Input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  className="w-full bg-white/5 border-white/10 text-[#F0CFA6] placeholder:text-[#F0CFA6]/30 focus:border-[#57A3AF] rounded-2xl h-12"
                />
              </div>
              <div>
                <label className="block font-oswald text-sm tracking-widest text-[#F0CFA6] mb-2 uppercase">Project Details</label>
                <Textarea 
                  placeholder="Tell us about your project, timeline, and vision..." 
                  rows={6}
                  className="w-full bg-white/5 border-white/10 text-[#F0CFA6] placeholder:text-[#F0CFA6]/30 focus:border-[#57A3AF] rounded-2xl resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#EA3C4B] hover:bg-[#FF8F48] text-[#F0CFA6] font-oswald tracking-widest uppercase rounded-full h-14 text-sm cursor-pointer shadow-lg shadow-[#EA3C4B]/20"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-oswald text-3xl tracking-widest text-[#F0CFA6] mb-8 uppercase">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#57A3AF]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#57A3AF]" />
                  </div>
                  <div>
                    <h4 className="font-oswald text-sm tracking-widest text-[#F0CFA6] mb-1 uppercase">Location</h4>
                    <p className="text-[#F0CFA6]/70">Los Angeles, California<br />Serving clients worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF8F48]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#FF8F48]" />
                  </div>
                  <div>
                    <h4 className="font-oswald text-sm tracking-widest text-[#F0CFA6] mb-1 uppercase">Phone</h4>
                    <p className="text-[#F0CFA6]/70">+1 (555) 123-4567<br />Mon-Fri, 9am-6pm PST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#EA3C4B]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#EA3C4B]" />
                  </div>
                  <div>
                    <h4 className="font-oswald text-sm tracking-widest text-[#F0CFA6] mb-1 uppercase">Email</h4>
                    <p className="text-[#F0CFA6]/70">hello@ghostcoast.video<br />We respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden">
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,143,72,0.1)]"></div>
              <div className="relative">
                <h3 className="font-oswald text-xl tracking-widest text-[#F0CFA6] mb-4 uppercase">Ready to Start?</h3>
                <p className="text-[#F0CFA6]/70 mb-6">
                  Book a free 30-minute consultation to discuss your project and explore how we can bring your vision to life.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#57A3AF]/20 backdrop-blur-xl border border-[#57A3AF]/30 text-[#57A3AF] font-oswald text-sm tracking-widest uppercase rounded-full hover:bg-[#57A3AF]/30 transition-all cursor-pointer"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}