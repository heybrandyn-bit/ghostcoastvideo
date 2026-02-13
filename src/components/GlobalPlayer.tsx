import { useAudio } from '../context/AudioContext';
import { Play, Pause, X, Volume2, VolumeX, SkipBack, SkipForward, Radio } from 'lucide-react';
import { useRef } from 'react';

export default function GlobalAudioPlayer() {
    const {
        currentEpisode, isPlaying, progress, currentTime, duration, volume, isMuted, playerVisible,
        togglePlayPause, seek, skip, changeVolume, toggleMute, closePlayer
    } = useAudio();

    const progressBarRef = useRef<HTMLDivElement | null>(null);

    const formatTime = (seconds: number) => {
        if (isNaN(seconds) || !isFinite(seconds)) return '00:00';
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!progressBarRef.current) return;
        const rect = progressBarRef.current.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        seek(pct);
    };

    if (!playerVisible || !currentEpisode) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] border-t-2 border-accent bg-[#111]/90 backdrop-blur-xl shadow-[0_-4px_30px_rgba(255,200,0,0.15)] animate-in slide-in-from-bottom duration-300">
            {/* Progress Bar Container */}
            <div
                ref={progressBarRef}
                className="w-full h-1.5 bg-muted/30 cursor-pointer group relative"
                onClick={handleSeek}
            >
                <div
                    className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-150"
                    style={{ width: `${progress}%` }}
                />
                <div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-accent border border-background rounded-none opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{ left: `${progress}%`, transform: 'translate(-50%, -50%)' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4 h-20 md:h-24">
                {/* Thumbnail & Title */}
                <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="w-12 h-12 bg-muted border border-border overflow-hidden flex-shrink-0 hidden sm:block">
                        {currentEpisode.imageUrl ? (
                            <img src={currentEpisode.imageUrl} alt="" className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <Radio className="w-6 h-6 text-muted-foreground" />
                            </div>
                        )}
                    </div>

                    <div className="min-w-0">
                        <div className="font-mono text-[10px] text-primary uppercase tracking-[0.2em] mb-0.5 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                            NOW BROADCASTING
                        </div>
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-wide truncate max-w-[200px] md:max-w-md">
                            {currentEpisode.title}
                        </h4>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex flex-col items-center gap-2 justify-center">
                    <div className="flex items-center gap-3 sm:gap-6">
                        <button
                            onClick={() => skip(-15)}
                            className="text-muted-foreground hover:text-foreground transition-colors p-1"
                            title="Rewind 15s"
                        >
                            <SkipBack className="w-4 h-4 md:w-5 md:h-5" />
                        </button>

                        <button
                            onClick={togglePlayPause}
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-accent text-background flex items-center justify-center hover:bg-accent/90 transition-all shadow-[0_0_15px_rgba(255,200,0,0.3)] active:scale-95"
                        >
                            {isPlaying ? <Pause className="w-5 h-5 sm:w-6 sm:h-6" /> : <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" />}
                        </button>

                        <button
                            onClick={() => skip(15)}
                            className="text-muted-foreground hover:text-foreground transition-colors p-1"
                            title="Forward 15s"
                        >
                            <SkipForward className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                    </div>

                    <div className="flex sm:hidden items-center gap-2 font-mono text-[10px] text-muted-foreground">
                        <span className="text-foreground">{formatTime(currentTime)}</span>
                        <span>/</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>

                {/* Desktop Info & Volume */}
                <div className="flex items-center justify-end gap-6 flex-1 hidden sm:flex">
                    <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground min-w-[100px] justify-center lg:flex hidden">
                        <span className="text-foreground">{formatTime(currentTime)}</span>
                        <span className="text-muted-foreground/50">/</span>
                        <span>{formatTime(duration)}</span>
                    </div>

                    <div className="hidden lg:flex items-center gap-2 group">
                        <button onClick={toggleMute} className="text-muted-foreground hover:text-foreground transition-colors">
                            {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                        <input
                            type="range" min="0" max="1" step="0.01"
                            value={isMuted ? 0 : volume}
                            onChange={(e) => changeVolume(parseFloat(e.target.value))}
                            className="w-20 h-1 appearance-none bg-muted/30 cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:cursor-pointer group-hover:bg-muted/50 transition-colors"
                        />
                    </div>

                    <button
                        onClick={closePlayer}
                        className="text-muted-foreground hover:text-primary transition-colors p-2 border border-border hover:border-primary ml-2 group"
                        title="Close player"
                    >
                        <X className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                </div>

                {/* Mobile Close */}
                <button
                    onClick={closePlayer}
                    className="sm:hidden text-muted-foreground p-2"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
