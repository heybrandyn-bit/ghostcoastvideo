import { ShowConfig } from '../../data/showData';
import { Star } from 'lucide-react';

interface ReviewLinksProps {
    show: ShowConfig;
}

const platforms = [
    {
        key: 'apple' as const,
        name: 'Apple Podcasts',
        color: '#A855F7',
        icon: '🎧',
    },
    {
        key: 'spotify' as const,
        name: 'Spotify',
        color: '#1DB954',
        icon: '🎵',
    },
    {
        key: 'youtube' as const,
        name: 'YouTube',
        color: '#FF0000',
        icon: '📺',
    },
];

export default function ReviewLinks({ show }: ReviewLinksProps) {
    const availablePlatforms = platforms.filter(
        (p) => show.links[p.key] && show.links[p.key] !== '#'
    );

    // If no real platform links yet, show all as coming soon
    const showComingSoon = availablePlatforms.length === 0;

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <Star className="w-5 h-5 text-accent" />
                    <h2 className="text-2xl font-black text-foreground uppercase tracking-tighter">Rate & Review</h2>
                    <div className="flex-1 h-px bg-border"></div>
                </div>

                <p className="text-muted-foreground font-mono text-sm mb-8 max-w-xl">
                    Reviews help us reach new listeners and build the community. Leave a rating on your favorite platform — it means more than you know.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {(showComingSoon ? platforms : availablePlatforms).map((platform) => (
                        <a
                            key={platform.key}
                            href={showComingSoon ? undefined : show.links[platform.key]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group bg-card border border-border p-6 flex flex-col items-center gap-4 transition-all duration-300 ${showComingSoon
                                    ? 'opacity-40 cursor-default grayscale pointer-events-none'
                                    : 'hover:border-primary/50 hover:translate-y-[-4px] cursor-pointer'
                                }`}
                        >
                            {/* Platform icon */}
                            <div
                                className="w-16 h-16 flex items-center justify-center text-3xl border-2 transition-colors"
                                style={{ borderColor: showComingSoon ? undefined : platform.color }}
                            >
                                {platform.icon}
                            </div>

                            <div className="text-center">
                                <h3 className="font-bold text-foreground uppercase text-sm mb-1">{platform.name}</h3>
                                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                                    {showComingSoon ? 'LINK PENDING' : 'LEAVE A REVIEW →'}
                                </p>
                            </div>

                            {/* Star rating hint */}
                            {!showComingSoon && (
                                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-3.5 h-3.5 fill-accent text-accent" />
                                    ))}
                                </div>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
