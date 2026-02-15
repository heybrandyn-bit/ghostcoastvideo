import React, { useState } from 'react';
import { Target, Zap, CheckCircle, ArrowRight, Star, Quote, Mail, Video, Globe, Smartphone, Newspaper, Send, Play } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const AtlantaSpecialPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [neighborhood, setNeighborhood] = useState('Little Five Points');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [showVideo, setShowVideo] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/blog/?rest_route=/gcv/v1/atlanta-special', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, name, phone, neighborhood }),
            });
            const data = await res.json();
            if (!res.ok || !data.success) {
                throw new Error(data.message || 'Failed to submit application.');
            }
            setSubmitted(true);
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
            <Navbar />

            {/* SECTION 1: HERO - MODERN BRUTALIST STYLE */}
            {/* Characteristics: Bold, heavy borders, offset shadows, high contrast */}
            <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#F3F3E9] text-[#1A1A1A] overflow-hidden">
                {/* Hero Video Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-10 grayscale"
                    >
                        <source src="/video/hero-sizzle.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="absolute inset-0 opacity-10 pointer-events-none z-0"
                    style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-block bg-[#E61D5F] text-white px-6 py-2 mb-8 border-4 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] font-black uppercase tracking-tighter">
                            Limited Atlanta Founder's Special
                        </div>

                        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter uppercase">
                            THE <span className="text-[#E61D5F]">HOLY</span> <br />
                            TRINITY OF <br />
                            <span className="bg-[#FFC800] px-4">LOCAL GROWTH</span>
                        </h1>

                        <p className="text-xl md:text-3xl font-bold max-w-3xl mb-12 border-l-8 border-[#E61D5F] pl-6 py-2 text-left">
                            We're building world-class $12k sales systems for ONE Atlanta business for just $197.
                            <span className="block mt-4 text-lg font-mono opacity-70">No catch. Just want a flagship neighbor to brag about.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
                            <a href="#claim" className="flex-1 bg-[#1A1A1A] text-white text-2xl font-black py-6 border-4 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#E61D5F] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all uppercase text-center">
                                Claim the Slot
                            </a>
                            <div className="flex-1 bg-white text-[#1A1A1A] text-2xl font-black py-6 border-4 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#FFC800] uppercase text-center cursor-default">
                                Price: $197
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE PACKAGE - GLASSMORPHISM STYLE */}
            {/* Characteristics: Frosted glass, soft glow, subtle depth */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E61D5F]/20 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-20 text-center uppercase tracking-tight">
                        What's Included in the Suite
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1: Website */}
                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all group">
                            <div className="w-16 h-16 bg-[#E61D5F] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#E61D5F]/20">
                                <Globe className="text-white w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#E61D5F] transition-colors">Next-Gen Digital Flagship</h3>
                            <p className="text-white/60 text-lg leading-relaxed">
                                A 7-Page "Headless" framework site. Instant load times, uncrackable security, and
                                design that makes your local competitors look like they're in 2005.
                            </p>
                        </div>

                        {/* Card 2: Content Suite (Combined Guide + Emails) */}
                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all group">
                            <div className="w-16 h-16 bg-[#FFC800] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#FFC800]/20">
                                <Smartphone className="text-[#1A1A1A] w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#FFC800] transition-colors">The Authority Logic</h3>
                            <p className="text-white/60 text-lg leading-relaxed">
                                A 3,000-word Authority Guide paired with a 5-part automated Email Nurture Sequence.
                                This is the high-conversion sales logic that turns "maybe" into "sign me up."
                            </p>
                        </div>

                        {/* Card 3: Video Production */}
                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all group">
                            <div className="w-16 h-16 bg-[#FF6D00] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#FF6D00]/20">
                                <Video className="text-white w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#FF6D00] transition-colors">15 Custom Reels</h3>
                            <p className="text-white/60 text-lg leading-relaxed">
                                Full scale video production. 15 custom Instagram Reels that explain your value,
                                drive organic traffic, and make you famous in your neighborhood.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE STRATEGY - EDITORIAL MINIMALIST STYLE */}
            {/* Characteristics: Serif fonts, large whitespace, refined layout */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white text-[#1A1A1A]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="font-mono uppercase tracking-[0.3em] text-[#E61D5F] font-bold">The Methodology</span>
                        <h2 className="text-5xl md:text-7xl font-serif italic mt-4 text-[#1A1A1A]">Strategy over Slop</h2>
                    </div>

                    <div className="space-y-24">
                        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
                            <div className="text-6xl font-serif text-[#E61D5F]/20">01</div>
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold uppercase tracking-tighter">Local Handshake Consultation</h3>
                                <p className="text-xl text-[#333] font-serif leading-relaxed">
                                    We meet in person in Decatur, Midtown, or Little Five. We don't do generic.
                                    I need to understand your business as well as you do to build a system that actually wins.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
                            <div className="text-6xl font-serif text-[#E61D5F]/20">02</div>
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold uppercase tracking-tighter">Psychological Architecture</h3>
                                <p className="text-xl text-[#333] font-serif leading-relaxed">
                                    Before a single line of code is written, we map out the customer journey.
                                    We use the same tactics as industry legends like Dan Kennedy to ensure every click has a purpose.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
                            <div className="text-6xl font-serif text-[#E61D5F]/20">03</div>
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold uppercase tracking-tighter">Full Asset Deployment</h3>
                                <p className="text-xl text-[#333] font-serif leading-relaxed">
                                    We handle the tech (React, WP, CRM integration) and the creative (Copy, Video).
                                    You get a "business-in-a-box" that's ready to scale the moment it's live.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The "Why" Rationale Subsection */}
                    <div className="mt-32 pt-16 border-t border-[#1A1A1A]/10">
                        <div className="max-w-3xl">
                            <h4 className="text-2xl font-black uppercase italic text-[#E61D5F] mb-6">Why this offer exists?</h4>
                            <div className="space-y-6 text-xl font-serif leading-relaxed text-[#1A1A1A]">
                                <p className="italic">
                                    "A typical corporate client paying a $3,500 retainer might take a month of procedural meetings just to make a decision on a single headline. They get picky. They demand 8 rounds of revisions on a button color. It's slow and it kills momentum."
                                </p>
                                <p className="font-bold">
                                    I don't do revision hell.
                                </p>
                                <p>
                                    Today, I want to work with someone with a storefront and bills to pay who understands exactly what they need and how valuable this is. This is a <strong>one-shot execution</strong> for decision-makers who trust professional expertise and want results live tomorrow.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: THE REELS - CYBERPUNK / DYNAMIC STYLE */}
            {/* Characteristics: Neon accents, glitch vibes, dark backgrounds, high tech feel */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#000] relative overflow-hidden">
                {/* Neon Grid Effect */}
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'linear-gradient(#E61D5F 1px, transparent 1px), linear-gradient(90deg, #E61D5F 1px, transparent 1px)', backgroundSize: '40px 40px', transform: 'perspective(500px) rotateX(60deg) translateY(-200px) scale(2)' }}></div>

                {/* Floating Orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#E61D5F]/40 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6D00]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="px-4 py-1 bg-[#E61D5F] text-black inline-block font-mono text-sm font-bold uppercase tracking-widest animate-pulse border-2 border-white">
                                SYSTEM_OUTPUT: VIDEO_PRODUCTION
                            </div>
                            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.8] italic">
                                MAKE YOUR <br />
                                NEIGHBORS <br />
                                <span className="text-[#E61D5F] drop-shadow-[0_0_25px_#E61D5F]">JEALOUS</span>
                            </h2>
                            <p className="text-xl text-white/70 font-mono leading-relaxed">
                                I own a video production company. You're not getting stock footage.
                                You're getting high-fidelity, custom-edited content that stops the scroll and starts the conversation.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {['4K SHOOT', 'PRO VOICEOVER', 'ENGAGING SUBS', 'LOCAL FLAVOR'].map((tag) => (
                                    <div key={tag} className="border border-[#E61D5F] text-[#E61D5F] px-4 py-1 font-mono text-xs font-bold">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-[#E61D5F]/30 blur-2xl group-hover:bg-[#E61D5F]/50 transition-all duration-700"></div>
                            <div className="relative bg-[#1A1A1A] border-2 border-[#E61D5F] aspect-video flex items-center justify-center overflow-hidden">
                                {showVideo ? (
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src="https://www.youtube.com/embed/rNI4zTVN_PU?autoplay=1"
                                        title="Ghost Coast Video Sizzle Reel"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <>
                                        <div
                                            className="absolute inset-0 bg-[url('https://img.youtube.com/vi/rNI4zTVN_PU/maxresdefault.jpg')] bg-cover bg-center mix-blend-overlay opacity-50 transition-transform duration-700 group-hover:scale-110"
                                            onClick={() => setShowVideo(true)}
                                        ></div>
                                        <div className="z-10 text-white flex flex-col items-center gap-4">
                                            <div
                                                className="w-20 h-20 rounded-full bg-[#E61D5F] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-[0_0_20px_#E61D5F]"
                                                onClick={() => setShowVideo(true)}
                                            >
                                                <Play className="w-8 h-8 text-white fill-current ml-1" />
                                            </div>
                                            <span className="font-mono text-xs uppercase tracking-widest font-bold">Watch Sizzle Reel</span>
                                        </div>
                                    </>
                                )}
                                {/* Technical scanline overlay for this section */}
                                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: CTA / PRICING - SLEEK PREMIUM DESIGN */}
            {/* Characteristics: Clean lines, high-end feel, strong contrast */}
            <section id="claim" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#F3F3E9] text-[#1A1A1A]">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white border-4 border-[#1A1A1A] p-12 md:p-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC800] transform rotate-45 translate-x-12 -translate-y-12 flex items-end justify-center pb-4">
                            <Star className="text-[#1A1A1A] w-8 h-8 -rotate-45" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
                                    ONE SPOT.<br />
                                    ONE CITY.<br />
                                    <span className="text-[#E61D5F]">$197.</span>
                                </h2>
                                <p className="text-lg mb-8 font-medium italic opacity-70 leading-relaxed">
                                    "This isn't just a website. It's a strategic marketing foundation that would normally cost upwards of $12,000. I'm quickly looking to work with someone who can make decisions."
                                </p>
                                <ul className="space-y-4 mb-12">
                                    {['Headless CMS Digital Flagship', 'Authority Logic (Guide + Email Suite)', '15 Custom Shot & Edited Reels', 'Local Handshake Consult'].map((item) => (
                                        <li key={item} className="flex items-center gap-3 font-bold">
                                            <CheckCircle className="text-[#E61D5F] w-5 h-5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-[#1A1A1A] p-10 text-white flex flex-col gap-8">
                                {submitted ? (
                                    <div className="text-center py-12 space-y-4">
                                        <div className="w-16 h-16 bg-[#E61D5F] rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                                            <Send className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-black uppercase italic">Transmission Received</h3>
                                        <p className="font-mono text-sm opacity-60">I'll reach out to you within 24 hours to schedule our handshake consultation.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase tracking-[0.2em] opacity-50">Business Name / Your Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="w-full bg-transparent border-b-2 border-white/20 py-2 focus:border-[#E61D5F] outline-none transition-colors"
                                                placeholder="Atlanta's Best..."
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase tracking-[0.2em] opacity-50">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full bg-transparent border-b-2 border-white/20 py-2 focus:border-[#E61D5F] outline-none transition-colors"
                                                placeholder="HELLO@EMAIL.COM"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase tracking-[0.2em] opacity-50">Your Phone</label>
                                            <input
                                                type="text"
                                                required
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                className="w-full bg-transparent border-b-2 border-white/20 py-2 focus:border-[#E61D5F] outline-none transition-colors"
                                                placeholder="404-..."
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase tracking-[0.2em] opacity-50">Best Neighborhood to Meet</label>
                                            <select
                                                value={neighborhood}
                                                onChange={(e) => setNeighborhood(e.target.value)}
                                                className="w-full bg-[#1A1A1A] border-b-2 border-white/20 py-2 focus:border-[#E61D5F] outline-none transition-colors"
                                            >
                                                <option>Little Five Points</option>
                                                <option>Decatur</option>
                                                <option>Midtown</option>
                                                <option>Bankhead</option>
                                                <option>Brookhaven</option>
                                                <option>Other / Tucker / Stone Mtn</option>
                                            </select>
                                        </div>
                                        {error && <p className="text-xs text-[#E61D5F] font-mono">{error}</p>}
                                        <Button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full py-8 text-xl font-black uppercase tracking-widest bg-[#E61D5F] hover:bg-white hover:text-[#1A1A1A] transition-all rounded-none border-2 border-[#E61D5F] disabled:opacity-50"
                                        >
                                            {loading ? 'Transmitting...' : 'Lock in Consultation'}
                                        </Button>
                                    </form>
                                )}
                                <p className="text-[10px] text-center opacity-40 font-mono uppercase">NO CREDIT CARD REQUIRED TODAY. JUST A HANDSHAKE.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AtlantaSpecialPage;
