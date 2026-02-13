import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/blog/?rest_route=/gcv/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, business, phone, message }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to send message.');
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Column: Form Terminal */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4 uppercase tracking-tighter">
                Start Your <span className="text-primary">Transformation</span>
              </h2>
              <p className="text-xl font-mono text-muted-foreground uppercase leading-tight">
                // Let's Work Together
              </p>
            </div>

            {submitted ? (
              <div className="bg-card/50 p-8 border border-accent mt-8 text-center space-y-3">
                <Send className="w-8 h-8 text-accent mx-auto" />
                <p className="font-mono text-sm text-accent uppercase tracking-widest">Message Transmitted</p>
                <p className="font-mono text-xs text-muted-foreground">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-card/50 p-8 border border-border mt-8 relative">
                <div className="absolute -top-3 left-4 bg-background px-2 text-xs font-mono text-accent">CONTACT FORM</div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-1 uppercase tracking-widest">Identify Yourself</label>
                    <Input
                      type="text"
                      placeholder="YOUR NAME"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-background border-border text-foreground font-mono focus:border-accent focus:ring-1 focus:ring-accent rounded-none h-12 uppercase"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-1 uppercase tracking-widest">Organization Unit</label>
                    <Input
                      type="text"
                      placeholder="BUSINESS NAME"
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                      className="w-full bg-background border-border text-foreground font-mono focus:border-accent focus:ring-1 focus:ring-accent rounded-none h-12 uppercase"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-1 uppercase tracking-widest">Email Address</label>
                    <Input
                      type="email"
                      placeholder="EMAIL ADDRESS"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-background border-border text-foreground font-mono focus:border-accent focus:ring-1 focus:ring-accent rounded-none h-12 uppercase"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-1 uppercase tracking-widest">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="PHONE NUMBER"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-background border-border text-foreground font-mono focus:border-accent focus:ring-1 focus:ring-accent rounded-none h-12 uppercase"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-1 uppercase tracking-widest">How Can We Help?</label>
                    <Textarea
                      placeholder="TELL US ABOUT YOUR GOALS..."
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-background border-border text-foreground font-mono focus:border-accent focus:ring-1 focus:ring-accent rounded-none uppercase"
                    />
                  </div>
                </div>

                {error && (
                  <div className="font-mono text-xs text-red-400 bg-red-400/10 border border-red-400/30 px-3 py-2">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg font-bold font-sans uppercase tracking-widest border border-primary relative overflow-hidden group rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
                  </span>
                </Button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Info */}
          <div className="space-y-8 lg:pt-32">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 border border-secondary flex items-center justify-center flex-shrink-0 bg-secondary/10 group-hover:bg-secondary group-hover:text-black transition-colors">
                    <MapPin className="w-6 h-6 text-secondary group-hover:text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1 uppercase tracking-wider">Location</h4>
                    <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                      Serving Atlanta GA, Alburquerque NM,<br />
                      and clients nationwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 border border-accent flex items-center justify-center flex-shrink-0 bg-accent/10 group-hover:bg-accent group-hover:text-black transition-colors">
                    <Phone className="w-6 h-6 text-accent group-hover:text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1 uppercase tracking-wider">Phone</h4>
                    <p className="text-muted-foreground font-mono text-xs leading-relaxed uppercase">
                      Alburquerque, NM: (505) 216-6776<br />
                      Atlanta, Georgia: (404) 369-7247
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 border border-primary flex items-center justify-center flex-shrink-0 bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1 uppercase tracking-wider">Email</h4>
                    <p className="text-muted-foreground font-mono text-sm">hello@ghostcoast.video<br />Response Time: &lt; 24 Hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-muted p-8 bg-muted/5 relative">
              <div className="absolute top-0 right-0 p-2 opacity-20">
                <Send size={48} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 uppercase tracking-wide">Why Work With Us?</h3>
              <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent">{">"}</span>
                  <span>US-based operations team</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">{">"}</span>
                  <span>Proven record for service based businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">{">"}</span>
                  <span>Doesn't need "focus ROI"</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}