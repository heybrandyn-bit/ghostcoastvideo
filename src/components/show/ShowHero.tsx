import { ShowConfig } from '../../data/showData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Send } from 'lucide-react';

interface ShowHeroProps {
    show: ShowConfig;
}

export default function ShowHero({ show }: ShowHeroProps) {
    const [heroEmail, setHeroEmail] = useState('');
    const [heroSubmitted, setHeroSubmitted] = useState(false);
    const [heroLoading, setHeroLoading] = useState(false);
    const [heroError, setHeroError] = useState('');

    const handleHeroSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setHeroLoading(true);
        setHeroError('');

        try {
            const res = await fetch('/blog/?rest_route=/gcv/v1/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: heroEmail, show: show.slug }),
            });
            const data = await res.json();
            if (!res.ok || !data.success) {
                throw new Error(data.message || 'Subscription failed.');
            }
            setHeroSubmitted(true);
        } catch (err: unknown) {
            setHeroError(err instanceof Error ? err.message : 'Something went wrong.');
        } finally {
            setHeroLoading(false);
        }
    };

    return (
        <section className="relative min-h-[60vh] flex items-end pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-background border-b border-border overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* Breadcrumb */}
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                    <Link to="/radio" className="hover:text-primary transition-colors">Radio</Link>
                    <span className="text-primary">/</span>
                    <span className="text-foreground">{show.title}</span>
                </div>

                {/* Tagline badge */}
                <div className="inline-block bg-primary/10 border border-primary px-4 py-1.5 mb-6">
                    <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] font-bold">{show.tagline}</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-[0.9] tracking-tighter uppercase max-w-4xl">
                    {show.title}
                </h1>

                <p className="text-lg text-muted-foreground font-mono leading-relaxed max-w-2xl mb-8">
                    {show.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 mb-8">
                    {/* Hosts */}
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Hosted by</span>
                        <div className="flex items-center gap-2">
                            {show.hosts.map((host, i) => (
                                <span key={i} className="bg-card border border-border px-3 py-1 font-mono text-xs text-foreground uppercase tracking-wider">
                                    {host}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Status indicator */}
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        <span className="font-mono text-[10px] text-primary uppercase tracking-[0.2em]">
                            {show.feedUrl ? 'Active Broadcast' : 'Coming Soon'}
                        </span>
                    </div>
                </div>

                {/* Hero Subscribe */}
                {show.sections.heroSubscribe && (
                    <div className="max-w-md">
                        {heroSubmitted ? (
                            <div className="flex items-center gap-3 bg-accent/10 border border-accent px-4 py-3">
                                <Send className="w-4 h-4 text-accent" />
                                <span className="font-mono text-xs text-accent uppercase tracking-widest">Subscribed — Welcome to the broadcast</span>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <form onSubmit={handleHeroSubscribe} className="flex gap-0">
                                    <input
                                        type="email"
                                        required
                                        value={heroEmail}
                                        onChange={(e) => setHeroEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        className="flex-1 bg-card border border-border border-r-0 px-4 py-3 text-foreground font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                                    />
                                    <button
                                        type="submit"
                                        disabled={heroLoading}
                                        className="bg-primary text-primary-foreground px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-primary/90 transition-colors cursor-pointer font-bold flex items-center gap-2 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Send className="w-3.5 h-3.5" />
                                        {heroLoading ? '...' : 'Subscribe'}
                                    </button>
                                </form>
                                {heroError && (
                                    <p className="font-mono text-xs text-red-400">{heroError}</p>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
