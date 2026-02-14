import { PlayCircle, Pause, Play, X, Volume2, VolumeX, SkipBack, SkipForward, ChevronRight, Radio } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAudio, Episode } from '../context/AudioContext';
import HostSignupDialog from '../components/radio/HostSignupDialog';
import GuestApplyDialog from '../components/radio/GuestApplyDialog';
import { shows } from '../data/showData';

export default function RadioPage() {
  const { playEpisode, currentEpisode, isPlaying } = useAudio();
  const [episodesMap, setEpisodesMap] = useState<Record<string, Episode[]>>({});
  const [loading, setLoading] = useState(true);

  // Build feed map from showData so it stays in sync
  const showFeeds = Object.fromEntries(
    shows.map(s => [s.title, s.feedUrl])
  );

  useEffect(() => {
    const fetchFeed = async (title: string, url: string) => {
      try {
        const response = await fetch(url);
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "text/xml");
        const items = xml.querySelectorAll("item");

        return Array.from(items).slice(0, 9).map(item => ({
          title: item.querySelector("title")?.textContent || "Untitled Episode",
          link: item.querySelector("link")?.textContent || "#",
          pubDate: item.querySelector("pubDate")?.textContent || "",
          contentSnippet: item.querySelector("description")?.textContent || "",
          guid: item.querySelector("guid")?.textContent || Math.random().toString(),
          imageUrl: item.querySelector("image")?.getAttribute("href") ||
            item.getElementsByTagName("itunes:image")[0]?.getAttribute("href") ||
            "",
          enclosure: {
            url: item.querySelector("enclosure")?.getAttribute("url") || "",
            type: item.querySelector("enclosure")?.getAttribute("type") || "audio/mpeg",
            length: item.querySelector("enclosure")?.getAttribute("length") || "0"
          }
        }));
      } catch (error) {
        console.error(`Error fetching feed for ${title}:`, error);
        return [];
      }
    };

    const fetchAllRSS = async () => {
      setLoading(true);
      const results: Record<string, Episode[]> = {};

      await Promise.all(
        Object.entries(showFeeds).map(async ([title, url]) => {
          results[title] = await fetchFeed(title, url);
        })
      );

      setEpisodesMap(results);
      setLoading(false);
    };

    fetchAllRSS();
  }, []);

  const [hostOpen, setHostOpen] = useState(false);
  const [guestOpen, setGuestOpen] = useState(false);
  const [visibleEpisodes, setVisibleEpisodes] = useState<Record<string, number>>({});

  const loadMore = (showTitle: string) => {
    setVisibleEpisodes(prev => ({
      ...prev,
      [showTitle]: (prev[showTitle] || 3) + 3
    }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-background border-b border-border overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
          {/* Main Video Embed */}
          <div className="aspect-video w-full max-w-4xl mx-auto bg-black border-2 border-border mb-12 relative overflow-hidden shadow-[0_0_50px_rgba(230,29,95,0.2)]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/bysPxWBn30M"
              title="Ghost Coast Radio Featured Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6 leading-none tracking-tighter uppercase">
            Lifestyle & Fun For <br />
            <span className="text-primary">Independent Creatives</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-mono leading-relaxed">
            Quit your job, build your brand, create a "personal economy" that's based on who you are and what you can do. That's the direction the whole world is moving towards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => setHostOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-bold uppercase tracking-widest rounded-none border border-primary shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:translate-y-1 hover:shadow-none transition-all"
            >
              Sign Up As Host
            </Button>
            <Button
              onClick={() => setGuestOpen(true)}
              className="bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-lg font-bold uppercase tracking-widest rounded-none font-mono"
            >
              Be A Guest
            </Button>
            <Link to="/radio/learn-more" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-muted/20 border border-border text-foreground hover:bg-muted/40 px-8 py-6 text-lg font-bold uppercase tracking-widest rounded-none font-mono">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Programming Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/5 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-12 text-center uppercase tracking-tight">
            Meet Your Dreams
          </h2>

          {/* Horizontal Menu / Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {shows.map((show, index) => (
              <a
                key={index}
                href={`#${show.slug}`}
                className="font-mono text-xs uppercase tracking-widest px-4 py-2 border border-border hover:border-primary hover:text-primary transition-all bg-card shadow-[2px_2px_0px_0px_rgba(255,255,255,0.05)]"
              >
                {show.title}
              </a>
            ))}
          </div>

          <div className="space-y-32">
            {shows.map((show, index) => {
              const showEpisodes = episodesMap[show.title] || [];
              const isDynamic = !!showFeeds[show.title as keyof typeof showFeeds];
              const visibleCount = visibleEpisodes[show.title] || 3;
              const hasMore = showEpisodes.length > visibleCount;

              return (
                <div key={index} id={show.slug} className="space-y-8 scroll-mt-24">
                  <div className="border-b border-border pb-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-2 h-2 bg-primary"></div>
                      <h3 className="text-2xl font-bold uppercase tracking-tight">{show.title}</h3>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                      <p className="text-muted-foreground font-mono text-sm max-w-2xl leading-relaxed">
                        {show.description}
                      </p>
                      <Link
                        to={`/radio/${show.slug}`}
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary hover:text-primary/80 transition-colors group whitespace-nowrap"
                      >
                        Listen & Explore
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {isDynamic ? (
                    loading && showEpisodes.length === 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="aspect-video bg-muted/20 animate-pulse border border-border"></div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {showEpisodes.slice(0, visibleCount).map((episode, epIndex) => (
                            <div key={epIndex} className="bg-card border border-border hover:border-primary/50 transition-all group flex flex-col h-full">
                              <div className="aspect-video relative overflow-hidden bg-black group-hover:cursor-pointer" onClick={() => playEpisode(episode)}>
                                {episode.imageUrl ? (
                                  <img src={episode.imageUrl} alt={episode.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center text-muted-foreground font-mono text-[10px] uppercase tracking-widest text-center px-4">
                                    [ TRANSMISSION_ESTABLISHED ]
                                  </div>
                                )}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                  {currentEpisode?.guid === episode.guid && isPlaying ? (
                                    <Pause className="w-12 h-12 text-white fill-white" />
                                  ) : (
                                    <Play className="w-12 h-12 text-white fill-white" />
                                  )}
                                </div>
                                {currentEpisode?.guid === episode.guid && (
                                  <div className="absolute top-2 right-2 flex gap-1">
                                    {[1, 2, 3].map(i => (
                                      <div key={i} className={`w-1 bg-primary animate-pulse`} style={{ height: `${Math.random() * 16 + 4}px`, animationDelay: `${i * 0.1}s` }}></div>
                                    ))}
                                  </div>
                                )}
                              </div>
                              <div className="p-6 flex flex-col flex-1">
                                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em] mb-3">
                                  {new Date(episode.pubDate).toLocaleDateString()}
                                </div>
                                <h4 className="font-bold text-lg mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors cursor-pointer" onClick={() => playEpisode(episode)}>
                                  {episode.title}
                                </h4>
                                <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                                  <button
                                    onClick={() => playEpisode(episode)}
                                    className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                                  >
                                    {currentEpisode?.guid === episode.guid && isPlaying ? (
                                      <><Pause className="w-3 h-3" /> Stop</>
                                    ) : (
                                      <><Play className="w-3 h-3" /> Play</>
                                    )}
                                  </button>
                                  <a href={episode.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                    <Radio className="w-4 h-4" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        {hasMore && (
                          <div className="flex justify-center">
                            <Button
                              onClick={() => loadMore(show.title)}
                              variant="outline"
                              className="font-mono text-xs uppercase tracking-[0.3em] rounded-none py-6 px-12 border-2"
                            >
                              Load More Episodes
                            </Button>
                          </div>
                        )}
                      </div>
                    )
                  ) : (
                    <div className="bg-card border border-border p-12 text-center space-y-4">
                      <div className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                        [ SCHEDULED_RETRANSMISSION_PENDING ]
                      </div>
                      <p className="text-muted-foreground font-mono text-xs">
                        Connection established. Awaiting source signal.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />

      <HostSignupDialog open={hostOpen} onOpenChange={setHostOpen} />
      <GuestApplyDialog open={guestOpen} onOpenChange={setGuestOpen} />
    </div>
  );
}
