import { Users, Radio, Mic, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export default function MeetYourDreamsPage() {
    const features = [
        {
            title: "Networking",
            description: "Get started in building your own network in a way that's bigger than social media. We were able to get contracts and start businesses without *always* being awesome social media posters and we are willing to talk about how.",
            icon: Users
        },
        {
            title: "Outreach",
            description: "Talk to people, sometimes using systems and sometimes hand to hand. \"Meet Your Dreams\" by meeting people who love the same stuff you do.",
            icon: Radio
        },
        {
            title: "Publishing",
            description: "For a lot of people, that's as simple as starting a YouTube channel or a podcast, but the core idea is that you can get your core ideas out to the people around you.",
            icon: Mic
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
            <Navbar />

            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 mb-12 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        <Link to="/radio" className="hover:text-primary transition-colors">Radio</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-foreground">Meet Your Dreams</span>
                    </div>

                    {/* Title Section */}
                    <div className="mb-16">
                        <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-none tracking-tighter uppercase">
                            Meet Your <span className="text-primary">Dreams</span>
                        </h1>
                        <div className="h-2 w-24 bg-primary mb-12"></div>
                    </div>

                    {/* Manifesto Quote */}
                    <div className="mb-24">
                        <p className="text-xl md:text-2xl text-foreground leading-relaxed font-serif italic border-l-4 border-accent pl-8 py-4">
                            "Brandyn and Kennedy have been on that journey as podcasters, as agency owners, and now in real world communities. If your personal hobbies are stuff that's weird or fringe, we don't care. Bring your creative ideas to life and tell your story your own way. We'll show you the pieces that help you monetize it so you can build your own business or just have fun."
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="space-y-12 mb-24">
                        {features.map((feature, index) => (
                            <div key={index} className="grid md:grid-cols-[100px_1fr] gap-8 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-card border-2 border-border flex items-center justify-center text-primary mb-2 group-hover:border-primary transition-colors">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <div className="font-mono text-xs font-bold opacity-50">0{index + 1}</div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-tight">{feature.title}</h3>
                                    <p className="text-lg text-muted-foreground font-mono leading-relaxed max-w-2xl">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Final CTA */}
                    <div className="bg-card border-2 border-primary p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-20 uppercase tracking-[0.3em] pointer-events-none">
                            Authorization_Required
                        </div>
                        <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Ready to start your journey?</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-bold uppercase tracking-widest rounded-none">
                                Sign Up As Host
                            </Button>
                            <Button variant="outline" className="border-2 border-foreground hover:bg-foreground hover:text-background px-8 py-6 text-lg font-bold uppercase tracking-widest rounded-none">
                                Be A Guest
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
