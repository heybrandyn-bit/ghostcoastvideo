import { ShowConfig } from '../../data/showData';
import { UserPlus, Send } from 'lucide-react';
import { useState } from 'react';

interface GuestBookingProps {
    show: ShowConfig;
}

export default function GuestBooking({ show }: GuestBookingProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (show.links.guestFormUrl) {
            window.open(show.links.guestFormUrl, '_blank');
            return;
        }

        // mailto fallback
        const subject = encodeURIComponent(`Guest Application — ${show.title}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProposed Topic:\n${topic}`);
        window.location.href = `mailto:info@ghostcoastvideo.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <UserPlus className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-black text-foreground uppercase tracking-tighter">Be A Guest</h2>
                    <div className="flex-1 h-px bg-border"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left: Info */}
                    <div className="space-y-6">
                        <div className="bg-card border border-primary/20 p-6">
                            <div className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-2">Application_Form v.03</div>
                            <div className="h-px bg-border my-4"></div>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                We're always looking for sharp voices to join the conversation. If you've got a unique perspective, a story worth telling, or expertise that aligns with the show's mission — apply below.
                            </p>
                            <div className="space-y-3 font-mono text-xs text-muted-foreground">
                                <div className="flex items-start gap-2">
                                    <span className="text-accent">▸</span>
                                    <span>All recordings happen on Discord via <strong className="text-foreground">The Cholla A/V Club</strong></span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-accent">▸</span>
                                    <span>You'll receive prep materials and a recording schedule after approval</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-accent">▸</span>
                                    <span>A decent microphone is required — no laptop mics or earbuds</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div>
                        {submitted ? (
                            <div className="bg-card border border-accent p-8 text-center space-y-4">
                                <div className="w-12 h-12 mx-auto bg-accent/10 border border-accent flex items-center justify-center">
                                    <Send className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground uppercase">Transmission Sent</h3>
                                <p className="text-sm text-muted-foreground font-mono">Your guest application has been submitted. We'll be in touch.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em] block mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-card border border-border px-4 py-3 text-foreground font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em] block mb-2">Email *</label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-card border border-border px-4 py-3 text-foreground font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em] block mb-2">Proposed Topic / Pitch *</label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={topic}
                                        onChange={(e) => setTopic(e.target.value)}
                                        className="w-full bg-card border border-border px-4 py-3 text-foreground font-mono text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                                        placeholder="What would you like to discuss? Give us the elevator pitch..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-primary-foreground px-6 py-4 font-mono text-xs uppercase tracking-widest hover:bg-primary/90 transition-colors cursor-pointer font-bold flex items-center justify-center gap-3"
                                >
                                    <Send className="w-4 h-4" />
                                    Submit Guest Application
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
