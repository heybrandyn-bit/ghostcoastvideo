import { ShowConfig } from '../../data/showData';
import { Youtube, ExternalLink } from 'lucide-react';

interface YoutubeChannelProps {
    show: ShowConfig;
}

export default function YoutubeChannel({ show }: YoutubeChannelProps) {
    const channelId = show.youtubeChannelId;
    const channelUrl = channelId ? `https://www.youtube.com/channel/${channelId}` : show.links.youtube;

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <Youtube className="w-5 h-5 text-[#FF0000]" />
                    <h2 className="text-2xl font-black text-foreground uppercase tracking-tighter">Video Channel</h2>
                    <div className="flex-1 h-px bg-border"></div>
                </div>

                {/* Featured video embed */}
                <div className="grid md:grid-cols-3 gap-8 mb-10">
                    {/* Main embed slot */}
                    <div className="md:col-span-2">
                        <div className="aspect-video bg-black border-2 border-border relative overflow-hidden">
                            {channelId ? (
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed?listType=user_uploads&list=${channelId}`}
                                    title={`${show.title} — Latest Video`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-mono text-sm uppercase tracking-widest">
                                    [VIDEO_FEED_PENDING]
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar info */}
                    <div className="space-y-6">
                        <div className="bg-card border border-border p-6 space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#FF0000] rounded-full animate-pulse"></span>
                                <span className="font-mono text-[10px] text-[#FF0000] uppercase tracking-[0.2em]">YouTube Channel</span>
                            </div>
                            <h3 className="text-lg font-bold text-foreground uppercase">{show.title}</h3>
                            <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                                Watch full episodes, highlights, and exclusive video content from the show.
                            </p>
                        </div>

                        {channelUrl && channelUrl !== '#' && (
                            <a
                                href={channelUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 bg-[#FF0000] text-white px-6 py-4 font-mono text-xs uppercase tracking-widest hover:bg-[#CC0000] transition-colors font-bold w-full"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Visit Channel
                            </a>
                        )}

                        {/* Placeholder video thumbnails */}
                        <div className="grid grid-cols-2 gap-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-video bg-muted/20 border border-border flex items-center justify-center">
                                    <Youtube className="w-5 h-5 text-muted-foreground opacity-30" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
