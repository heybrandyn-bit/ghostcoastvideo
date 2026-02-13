import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';

export interface Episode {
    title: string;
    link: string;
    pubDate: string;
    contentSnippet: string;
    guid: string;
    imageUrl?: string;
    enclosure: {
        url: string;
        type: string;
        length: string;
    };
}

interface AudioContextType {
    currentEpisode: Episode | null;
    isPlaying: boolean;
    progress: number;
    currentTime: number;
    duration: number;
    volume: number;
    isMuted: boolean;
    playerVisible: boolean;
    playEpisode: (episode: Episode) => void;
    togglePlayPause: () => void;
    seek: (percent: number) => void;
    skip: (seconds: number) => void;
    changeVolume: (v: number) => void;
    toggleMute: () => void;
    closePlayer: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
    const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.8);
    const [isMuted, setIsMuted] = useState(false);
    const [playerVisible, setPlayerVisible] = useState(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Sync volume to audio element
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume;
        }
    }, [volume, isMuted]);

    const playEpisode = useCallback((episode: Episode) => {
        if (!episode.enclosure?.url) return;

        if (currentEpisode?.guid === episode.guid) {
            if (isPlaying) {
                audioRef.current?.pause();
                setIsPlaying(false);
            } else {
                audioRef.current?.play().catch(console.error);
                setIsPlaying(true);
            }
            return;
        }

        // Clean up old audio
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.src = "";
            audioRef.current.load();
        }

        const audio = new Audio(episode.enclosure.url);
        audio.volume = isMuted ? 0 : volume;
        audioRef.current = audio;

        audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
        audio.addEventListener('timeupdate', () => {
            setCurrentTime(audio.currentTime);
            if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
        });
        audio.addEventListener('ended', () => {
            setIsPlaying(false);
            setProgress(0);
            setCurrentTime(0);
        });

        audio.play().catch(console.error);
        setCurrentEpisode(episode);
        setIsPlaying(true);
        setPlayerVisible(true);
        setProgress(0);
        setCurrentTime(0);
    }, [currentEpisode, isPlaying, volume, isMuted]);

    const togglePlayPause = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().catch(console.error);
            setIsPlaying(true);
        }
    };

    const seek = (percent: number) => {
        if (!audioRef.current) return;
        audioRef.current.currentTime = percent * audioRef.current.duration;
    };

    const skip = (seconds: number) => {
        if (!audioRef.current) return;
        audioRef.current.currentTime = Math.max(0, Math.min(audioRef.current.duration, audioRef.current.currentTime + seconds));
    };

    const changeVolume = (v: number) => {
        setVolume(v);
        setIsMuted(v === 0);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const closePlayer = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.src = "";
            audioRef.current = null;
        }
        setPlayerVisible(false);
        setCurrentEpisode(null);
        setIsPlaying(false);
        setProgress(0);
        setCurrentTime(0);
        setDuration(0);
    };

    return (
        <AudioContext.Provider value={{
            currentEpisode, isPlaying, progress, currentTime, duration, volume, isMuted, playerVisible,
            playEpisode, togglePlayPause, seek, skip, changeVolume, toggleMute, closePlayer
        }}>
            {children}
        </AudioContext.Provider>
    );
}

export function useAudio() {
    const context = useContext(AudioContext);
    if (!context) throw new Error('useAudio must be used within AudioProvider');
    return context;
}
