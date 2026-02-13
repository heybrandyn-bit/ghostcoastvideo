import { useState, useEffect } from 'react';
import { PlayCircle, Radio } from 'lucide-react';
import { ShowConfig } from '../../data/showData';
import { useAudio, Episode } from '../../context/AudioContext';

interface ShowEpisodesProps {
    show: ShowConfig;
}

export default function ShowEpisodes({ show }: ShowEpisodesProps) {
    const { playEpisode, currentEpisode, isPlaying } = useAudio();
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        if (!show.feedUrl) { setLoading(false); return; }

        const fetchFeed = async () => {
            try {
                const response = await fetch(show.feedUrl);
                const text = await response.text();
                const parser = new DOMParser();
                const xml = parser.parseFromString(text, "text/xml");
                const items = xml.querySelectorAll("item");

                setEpisodes(Array.from(items).slice(0, 12).map(item => ({
                    title: item.querySelector("title")?.textContent || "Untitled Episode",
                    link: item.querySelector("link")?.textContent || "#",
                    pubDate: item.querySelector("pubDate")?.textContent || "",
                    contentSnippet: item.querySelector("description")?.textContent || "",
                    guid: item.querySelector("guid")?.textContent || Math.random().toString(),
                    imageUrl: item.querySelector("image")?.getAttribute("href") ||
                        item.getElementsByTagName("itunes:image")[0]?.getAttribute("href") || "",
                    enclosure: {
                        url: item.querySelector("enclosure")?.getAttribute("url") || "",
                        type: item.querySelector("enclosure")?.getAttribute("type") || "audio/mpeg",
                        length: item.querySelector("enclosure")?.getAttribute("length") || "0"
                    }
                })));
            } catch (error) {
                console.error(`Error fetching feed for ${show.title}:`, error);
            }
            setLoading(false);
        };

        fetchFeed();
    }, [show.feedUrl, show.title]);

    const hasMore = episodes.length > visibleCount;

    return (
        <>
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-2.5 h-2.5 bg-primary animate-pulse"></div>
                        <h2 className="text-2xl font-black text-foreground uppercase tracking-tighter">Latest Episodes</h2>
                        <div className="flex-1 h-px bg-border"></div>
                        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">{episodes.length} ARCHIVED</span>
                    </div>

                    {loading ? (
                        <div className="text-muted-foreground font-mono text-sm py-16 text-center border border-dashed border-border">
                            [SYNCHRONIZING_DATA_STREAM]...
                        </div>
                    ) : episodes.length > 0 ? (
                        <div className="space-y-12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {episodes.slice(0, visibleCount).map((ep) => (
                                    <div
                                        key={ep.guid}
                                        className={`group bg-card border transition-all duration-300 cursor-pointer p-5 flex flex-col h-full ${currentEpisode?.guid === ep.guid
                                            ? 'border-accent shadow-[0_0_30px_rgba(255,200,0,0.15)] bg-accent/5'
                                            : 'border-border hover:border-primary/50 hover:translate-y-[-4px]'
                                            }`}
                                        onClick={() => playEpisode(ep)}
                                    >
                                        <div className="aspect-square bg-muted/20 mb-5 relative overflow-hidden flex-shrink-0 border border-border group-hover:border-primary/30 transition-colors">
                                            {ep.imageUrl ? (
                                                <img src={ep.imageUrl} alt={ep.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105" />
                                            ) : (
                                                <div className="absolute inset-0 bg-gradient-to-br from-background to-muted"></div>
                                            )}
                                            <div className="absolute inset-0 flex items-center justify-center bg-background/20 group-hover:bg-transparent transition-all">
                                                {currentEpisode?.guid === ep.guid && isPlaying ? (
                                                    <div className="flex items-center gap-1.5 bg-background/80 px-4 py-3 border border-accent">
                                                        <span className="w-1.5 h-5 bg-accent animate-[pulse_1s_infinite]" style={{ animationDelay: '0ms' }}></span>
                                                        <span className="w-1.5 h-8 bg-accent animate-[pulse_1s_infinite]" style={{ animationDelay: '150ms' }}></span>
                                                        <span className="w-1.5 h-6 bg-accent animate-[pulse_1s_infinite]" style={{ animationDelay: '300ms' }}></span>
                                                        <span className="font-mono text-[10px] text-accent font-bold ml-1 uppercase">LIVE</span>
                                                    </div>
                                                ) : (
                                                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                                                        <PlayCircle className="w-8 h-8 text-white" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <h4 className={`font-bold text-base uppercase mb-3 transition-colors line-clamp-2 ${currentEpisode?.guid === ep.guid ? 'text-accent' : 'text-foreground group-hover:text-primary'
                                            }`}>{ep.title}</h4>
                                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/50">
                                            <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
                                                {new Date(ep.pubDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </p>
                                            {ep.enclosure?.url && (
                                                <div className="flex items-center gap-1.5 text-[10px] font-mono text-primary font-bold">
                                                    <span className="w-1 h-1 bg-primary rounded-full animate-ping"></span>
                                                    [LISTEN]
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {hasMore && (
                                <div className="flex justify-center pt-4">
                                    <button
                                        onClick={() => setVisibleCount(prev => prev + 3)}
                                        className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-[10px] uppercase tracking-[0.3em] cursor-pointer"
                                    >
                                        <span>Load More Episodes</span>
                                        <div className="w-12 h-[1px] bg-border group-hover:bg-primary transition-colors"></div>
                                        <span className="text-lg">↓</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-muted-foreground font-mono text-sm py-16 text-center border border-dashed border-border">
                            [NO_EPISODES_FOUND] — Transmissions pending
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
