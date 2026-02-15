import { ChevronRight, Users, Film, Mic, BookOpen, Shield, MessageSquare, Megaphone, Terminal, Music, Camera, Palette, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import HostSignupDialog from '../components/radio/HostSignupDialog';

export default function ChollaPage() {
    const [hostOpen, setHostOpen] = useState(false);

    const creators = [
        { name: "Filmmakers", icon: Film },
        { name: "Writers", icon: BookOpen },
        { name: "Artists", icon: Palette },
        { name: "Podcasters", icon: Mic },
        { name: "Musicians", icon: Music },
        { name: "Designers", icon: Camera },
        { name: "Actors", icon: Users },
        { name: "Creatives", icon: Zap },
    ];

    const channels = [
        { name: "info", desc: "Foundational data & server navigation.", icon: Terminal },
        { name: "announcements", desc: "Critical updates & event transmissions.", icon: Megaphone },
        { name: "hangout", desc: "General chat & social intersection.", icon: MessageSquare },
        { name: "projects", desc: "Brainstorming & feedback for your craft.", icon: Zap },
        { name: "film-jam", desc: "2025 Digital Summer Film Jam portal.", icon: Film },
    ];

    const voiceRooms = [
        { name: "Hangout", desc: "Movie streams, games, and casual chatter.", icon: Users },
        { name: "Conference Room", desc: "Workshops and formal club summits.", icon: MessageSquare },
        { name: "Recording Booth", desc: "High-fidelity audio capture via Craig Bot.", icon: Mic },
    ];

    return (
        <div className="cholla-theme min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Dynamic Background Elements */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.08)_0%,transparent_50%)]"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full backdrop-blur-md">
                            <span className="w-2 h-2 bg-bloom rounded-full animate-ping"></span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary transition-all">Now Live: Cholla AV Club</span>
                        </div>

                        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-foreground leading-[0.85] tracking-tighter uppercase relative group">
                            <span className="block text-primary">Cholla</span>
                            <span className="block flex items-center gap-4">
                                AV Club
                                <div className="hidden lg:block h-2 flex-1 bg-border group-hover:bg-primary transition-all duration-500"></div>
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground font-mono leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            An independent media-making and appreciation club. A welcome home for creators of all disciplines.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <a
                                href="https://discord.gg/rW9rXze8gr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 text-lg font-bold uppercase tracking-widest rounded-none border border-primary shadow-[6px_6px_0px_0px_hsl(var(--primary)/0.3)] hover:translate-y-[-2px] hover:translate-x-[-2px] hover:shadow-[10px_10px_0px_0px_hsl(var(--primary)/0.4)] transition-all flex items-center justify-center gap-3"
                            >
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01 10.12 10.12 0 0 0 .372.292.077.077 0 0 1-.006.128 12.042 12.042 0 0 1-1.873.892.076.076 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z" />
                                </svg>
                                Join Discord
                            </a>
                            <button
                                onClick={() => setHostOpen(true)}
                                className="bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-10 py-5 text-lg font-bold uppercase tracking-widest rounded-none font-mono transition-all"
                            >
                                Become A Host
                            </button>
                        </div>
                    </div>

                    <div className="hidden lg:grid grid-cols-2 gap-4">
                        {creators.map((c, i) => (
                            <div key={i} className="bg-card border border-border p-8 flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:bg-primary/10 transition-all group overflow-hidden relative group shadow-sm hover:shadow-primary/5">
                                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-150 transition-transform duration-700">
                                    <c.icon size={120} className="text-primary/20" />
                                </div>
                                <c.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-center text-foreground/70 group-hover:text-foreground">{c.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Mission Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/5 border-y border-border relative">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="flex items-center gap-6">
                        <div className="h-0.5 flex-1 bg-border"></div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-foreground">Mission_Manifesto</h2>
                        <div className="h-0.5 flex-1 bg-border"></div>
                    </div>

                    <div className="space-y-8 text-lg font-mono text-muted-foreground leading-relaxed">
                        <p>
                            The Cholla AV Club was created as a resource and knowledge sharing venture out of a need for struggling independent projects to receive more support and attention.
                        </p>
                        <div className="bg-card border-l-4 border-secondary p-8 space-y-4 shadow-xl">
                            <p className="text-foreground italic text-xl">
                                "Our primary goal is to bring equity and accessibility to tools and knowledge that have often been hard to reach for ordinary, working-class people, but also to have a lot of fun in how we approach this."
                            </p>
                        </div>
                        <p>
                            Based in <span className="text-foreground font-bold underline decoration-primary decoration-2 underline-offset-4">Albuquerque, NM</span>, we welcome members from anywhere. Many of our events are hybrid/online, alongside our impactful in-person programming.
                        </p>
                        <p>
                            For now, all memberships in the Cholla AV Club are <span className="text-primary font-bold">100% free</span>, and we intend to keep all core benefits free forever.
                        </p>
                    </div>
                </div>
            </section>

            {/* Rules Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
                        <div className="space-y-6">
                            <h2 className="text-5xl font-black uppercase tracking-tighter text-foreground leading-none">
                                Rules of the <br />
                                <span className="text-accent underline decoration-border underline-offset-8 decoration-4">Cactus Club</span>
                            </h2>
                            <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                                We don't have a lot of rules, but the ones we do have are absolute.
                            </p>
                            <div className="flex items-center gap-4 pt-4">
                                <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary font-black shadow-[0_0_15px_rgba(145,25,60,0.2)]">18+</div>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/80">Strict Age Threshold</span>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { title: "Be Kind", text: "Constructive criticism is welcome. Insults are not. No exceptions.", icon: Users },
                                { title: "No Bigotry", text: "Zero tolerance for hate speech of any kind, period.", icon: Shield },
                                { title: "Content Safety", text: "NSFW material must be clearly mentioned and spoilered. Sensitive topics allowed.", icon: Camera },
                                { title: "Vibe Check", text: "Don't interrupt recording sessions or meetings in progress.", icon: Mic },
                            ].map((rule, i) => (
                                <div key={i} className="bg-card border border-border p-8 hover:border-accent/40 transition-colors group">
                                    <div className="flex items-center gap-4 mb-4">
                                        <rule.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                                        <h3 className="text-xl font-bold uppercase tracking-tight">{rule.title}</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground font-mono leading-relaxed">{rule.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Channel Directory */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/5 border-t border-border">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-foreground">Server Architecture</h2>
                            <p className="text-muted-foreground font-mono text-sm">Navigation guide to our digital infrastructure Channels.</p>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-xs text-bloom font-bold">
                            <span className="animate-pulse">●</span> DISCORD_CONNECTED
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {channels.map((chan, i) => (
                            <div key={i} className="group h-full flex flex-col bg-background border border-border hover:border-primary transition-all p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                    <chan.icon className="w-8 h-8 text-primary" />
                                </div>
                                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-4">Channel_{i + 1}</div>
                                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 flex items-center gap-3">
                                    <span className="text-primary opacity-50">#</span>
                                    {chan.name}
                                </h3>
                                <p className="text-sm text-muted-foreground font-mono leading-relaxed mt-auto">{chan.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="pt-16 border-t border-border">
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Voice Transmissions</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {voiceRooms.map((voice, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-accent/10 border border-accent flex items-center justify-center text-accent flex-shrink-0">
                                        <voice.icon className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-lg font-bold uppercase tracking-tight">{voice.name}</h4>
                                        <p className="text-sm text-muted-foreground font-mono leading-relaxed">{voice.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-primary opacity-5"></div>
                {/* Background Text Effect (marquee style or large static) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-foreground opacity-[0.02] select-none pointer-events-none whitespace-nowrap uppercase tracking-tighter">
                    Join the club Join the club Join the club
                </div>

                <div className="max-w-4xl mx-auto relative z-10 space-y-12">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-foreground">
                        Ready to make <br />
                        <span className="text-secondary italic">something weird?</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="https://discord.gg/rW9rXze8gr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white px-12 py-6 text-xl font-bold uppercase tracking-widest rounded-none hover:bg-primary/90 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]"
                        >
                            Enter the Discord
                        </a>
                        <button
                            onClick={() => setHostOpen(true)}
                            className="bg-background border-2 border-foreground text-foreground px-12 py-6 text-xl font-bold uppercase tracking-widest rounded-none hover:bg-foreground hover:text-background transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]"
                        >
                            Host on Radio
                        </button>
                    </div>

                    <p className="text-muted-foreground font-mono text-xs uppercase tracking-[0.4em]">
                        ALBUQUERQUE // ATLANTA // WORLDWIDE
                    </p>
                </div>
            </section>

            <Footer />
            <HostSignupDialog open={hostOpen} onOpenChange={setHostOpen} />
        </div>
    );
}
