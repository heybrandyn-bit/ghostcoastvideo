import { ShowConfig } from '../../data/showData';
import { Terminal, Send } from 'lucide-react';
import { useState } from 'react';

interface SubscribeFormProps {
    show: ShowConfig;
}

export default function SubscribeForm({ show }: SubscribeFormProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/blog/?rest_route=/gcv/v1/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, name, phone, show: show.slug }),
            });
            const data = await res.json();
            if (!res.ok || !data.success) {
                throw new Error(data.message || 'Subscription failed.');
            }
            setSubmitted(true);
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
            <div className="max-w-3xl mx-auto">
                <div className="bg-card border border-border overflow-hidden">
                    {/* Terminal header */}
                    <div className="bg-background border-b border-border px-4 py-3 flex items-center gap-3">
                        <Terminal className="w-4 h-4 text-primary" />
                        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Subscribe to Broadcast</span>
                        <div className="flex-1"></div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 border border-border"></span>
                            <span className="w-2.5 h-2.5 border border-border"></span>
                            <span className="w-2.5 h-2.5 bg-primary"></span>
                        </div>
                    </div>

                    <div className="p-6 sm:p-8">
                        {submitted ? (
                            <div className="text-center space-y-4 py-8">
                                <div className="font-mono text-accent text-sm">
                                    <p>{'>'} SUBSCRIPTION_CONFIRMED</p>
                                    <p>{'>'} WELCOME TO THE BROADCAST, {name.toUpperCase() || 'LISTENER'}</p>
                                    <p className="text-muted-foreground mt-2">{'>'} _</p>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="font-mono text-sm text-muted-foreground mb-6 space-y-1">
                                    <p><span className="text-primary">{'>'}</span> Initializing subscription module...</p>
                                    <p><span className="text-primary">{'>'}</span> Show: {show.title}</p>
                                    <p><span className="text-primary">{'>'}</span> Enter credentials below to subscribe:</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="font-mono text-xs text-primary flex-shrink-0">NAME {'>'}</span>
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="flex-1 bg-transparent border-b border-border px-2 py-2 text-foreground font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                                            placeholder="_"
                                        />
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="font-mono text-xs text-primary flex-shrink-0">EMAIL {'>'}</span>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="flex-1 bg-transparent border-b border-border px-2 py-2 text-foreground font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                                            placeholder="_"
                                        />
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="font-mono text-xs text-muted-foreground flex-shrink-0">PHONE {'>'}</span>
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="flex-1 bg-transparent border-b border-border px-2 py-2 text-foreground font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                                            placeholder="_ (optional)"
                                        />
                                    </div>

                                    {error && (
                                        <div className="font-mono text-xs text-red-400 bg-red-400/10 border border-red-400/30 px-3 py-2">
                                            <span className="text-red-400">{'>'} ERROR:</span> {error}
                                        </div>
                                    )}

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-primary text-primary-foreground px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-primary/90 transition-colors cursor-pointer font-bold flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <Send className="w-4 h-4" />
                                            {loading ? 'Transmitting...' : 'Execute Subscribe'}
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
