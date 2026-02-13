import { useState, useRef, useEffect, useCallback } from 'react';
import { Mic, Square, Play, Pause, Download, RotateCcw, Send } from 'lucide-react';
import { ShowConfig } from '../../data/showData';

interface VoicenoteDropProps {
    show: ShowConfig;
}

export default function VoicenoteDrop({ show }: VoicenoteDropProps) {
    const [status, setStatus] = useState<'idle' | 'recording' | 'recorded' | 'playing'>('idle');
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const [recordingTime, setRecordingTime] = useState(0);
    const [playbackTime, setPlaybackTime] = useState(0);
    const [playbackDuration, setPlaybackDuration] = useState(0);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    const timerRef = useRef<number | null>(null);
    const audioPlaybackRef = useRef<HTMLAudioElement | null>(null);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const startRecording = useCallback(async () => {
        try {
            setErrorMsg(null);
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            chunksRef.current = [];

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) chunksRef.current.push(e.data);
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: 'audio/webm;codecs=opus' });
                const url = URL.createObjectURL(blob);
                setAudioUrl(url);
                setAudioBlob(blob);
                setStatus('recorded');
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorder.start();
            setStatus('recording');
            setRecordingTime(0);

            timerRef.current = window.setInterval(() => {
                setRecordingTime(prev => {
                    if (prev >= 120) { // Max 2 minutes
                        stopRecording();
                        return prev;
                    }
                    return prev + 1;
                });
            }, 1000);
        } catch {
            setErrorMsg('Microphone access denied. Please allow microphone access to record a voicenote.');
        }
    }, []);

    const stopRecording = useCallback(() => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
        }
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    const playRecording = () => {
        if (!audioUrl) return;
        const audio = new Audio(audioUrl);
        audioPlaybackRef.current = audio;

        audio.addEventListener('loadedmetadata', () => setPlaybackDuration(audio.duration));
        audio.addEventListener('timeupdate', () => setPlaybackTime(audio.currentTime));
        audio.addEventListener('ended', () => setStatus('recorded'));

        audio.play();
        setStatus('playing');
    };

    const pausePlayback = () => {
        audioPlaybackRef.current?.pause();
        setStatus('recorded');
    };

    const resetRecording = () => {
        if (audioPlaybackRef.current) { audioPlaybackRef.current.pause(); audioPlaybackRef.current = null; }
        if (audioUrl) URL.revokeObjectURL(audioUrl);
        setAudioUrl(null);
        setAudioBlob(null);
        setStatus('idle');
        setRecordingTime(0);
        setPlaybackTime(0);
        setPlaybackDuration(0);
    };

    const downloadRecording = () => {
        if (!audioBlob) return;
        const url = URL.createObjectURL(audioBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `voicenote-${show.slug}-${Date.now()}.webm`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const sendVoicenote = () => {
        downloadRecording();
        const subject = encodeURIComponent(`Voicenote for ${show.title}`);
        const body = encodeURIComponent(`Hey! I recorded a voicenote for ${show.title}. The recording is attached as a .webm file.\n\nPlease find the attached voicenote.`);
        window.location.href = `mailto:info@ghostcoastvideo.com?subject=${subject}&body=${body}`;
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
            if (audioPlaybackRef.current) audioPlaybackRef.current.pause();
            if (audioUrl) URL.revokeObjectURL(audioUrl);
        };
    }, [audioUrl]);

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <Mic className="w-5 h-5 text-accent" />
                    <h2 className="text-2xl font-black text-foreground uppercase tracking-tighter">Voicenote Drop</h2>
                    <div className="flex-1 h-px bg-border"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left: Info */}
                    <div className="space-y-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Got something to say? Drop a voicenote directly to the host. Share a hot take, ask a question, or pitch a topic — we might feature it on a future episode.
                        </p>
                        <div className="font-mono text-[10px] text-muted-foreground space-y-1">
                            <p>▸ Maximum recording length: 2 minutes</p>
                            <p>▸ Recordings are saved as .webm files</p>
                            <p>▸ Your message may be featured on the show</p>
                        </div>
                    </div>

                    {/* Right: Recorder */}
                    <div className="bg-card border border-border p-6 sm:p-8 space-y-6">
                        {/* Cassette tape visual */}
                        <div className="bg-background border border-border p-4 relative">
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Rec Module</span>
                                <span className={`font-mono text-[10px] uppercase tracking-widest ${status === 'recording' ? 'text-primary animate-pulse' : status === 'recorded' || status === 'playing' ? 'text-accent' : 'text-muted-foreground'
                                    }`}>
                                    {status === 'idle' && '● STANDBY'}
                                    {status === 'recording' && '● REC'}
                                    {status === 'recorded' && '■ STOPPED'}
                                    {status === 'playing' && '▶ PLAYBACK'}
                                </span>
                            </div>

                            {/* Tape reels visual */}
                            <div className="flex items-center justify-center gap-8 py-6">
                                <div className={`w-16 h-16 border-2 rounded-full flex items-center justify-center ${status === 'recording' ? 'border-primary animate-spin' : status === 'playing' ? 'border-accent animate-spin' : 'border-border'
                                    }`} style={{ animationDuration: '3s' }}>
                                    <div className="w-4 h-4 rounded-full bg-border"></div>
                                </div>
                                <div className="flex-1 h-0.5 bg-border max-w-16 relative">
                                    {status === 'recording' && (
                                        <div className="absolute inset-0 bg-primary/50 animate-pulse"></div>
                                    )}
                                </div>
                                <div className={`w-16 h-16 border-2 rounded-full flex items-center justify-center ${status === 'recording' ? 'border-primary animate-spin' : status === 'playing' ? 'border-accent animate-spin' : 'border-border'
                                    }`} style={{ animationDuration: '3s', animationDirection: 'reverse' }}>
                                    <div className="w-4 h-4 rounded-full bg-border"></div>
                                </div>
                            </div>

                            {/* Timer */}
                            <div className="text-center font-mono text-2xl text-foreground tracking-widest">
                                {status === 'recording' && formatTime(recordingTime)}
                                {(status === 'recorded' || status === 'playing') && `${formatTime(playbackTime)} / ${formatTime(playbackDuration || recordingTime)}`}
                                {status === 'idle' && '00:00'}
                            </div>
                        </div>

                        {/* Error message */}
                        {errorMsg && (
                            <div className="bg-primary/10 border border-primary p-3 font-mono text-xs text-primary">
                                {errorMsg}
                            </div>
                        )}

                        {/* Controls */}
                        <div className="flex items-center justify-center gap-4">
                            {status === 'idle' && (
                                <button
                                    onClick={startRecording}
                                    className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-primary/90 transition-colors cursor-pointer font-bold"
                                >
                                    <Mic className="w-4 h-4" />
                                    Start Recording
                                </button>
                            )}

                            {status === 'recording' && (
                                <button
                                    onClick={stopRecording}
                                    className="flex items-center gap-3 bg-accent text-background px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-accent/90 transition-colors cursor-pointer font-bold animate-pulse"
                                >
                                    <Square className="w-4 h-4" />
                                    Stop Recording
                                </button>
                            )}

                            {(status === 'recorded' || status === 'playing') && (
                                <div className="flex flex-wrap items-center justify-center gap-3">
                                    <button
                                        onClick={status === 'playing' ? pausePlayback : playRecording}
                                        className="flex items-center gap-2 bg-card border border-border px-5 py-3 font-mono text-[10px] uppercase tracking-widest hover:border-primary text-foreground transition-colors cursor-pointer"
                                    >
                                        {status === 'playing' ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                                        {status === 'playing' ? 'Pause' : 'Preview'}
                                    </button>

                                    <button
                                        onClick={resetRecording}
                                        className="flex items-center gap-2 bg-card border border-border px-5 py-3 font-mono text-[10px] uppercase tracking-widest hover:border-primary text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                    >
                                        <RotateCcw className="w-3.5 h-3.5" />
                                        Re-record
                                    </button>

                                    <button
                                        onClick={downloadRecording}
                                        className="flex items-center gap-2 bg-card border border-border px-5 py-3 font-mono text-[10px] uppercase tracking-widest hover:border-accent text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                                    >
                                        <Download className="w-3.5 h-3.5" />
                                        Download
                                    </button>

                                    <button
                                        onClick={sendVoicenote}
                                        className="flex items-center gap-2 bg-accent text-background px-5 py-3 font-mono text-[10px] uppercase tracking-widest hover:bg-accent/90 transition-colors cursor-pointer font-bold"
                                    >
                                        <Send className="w-3.5 h-3.5" />
                                        Send to Host
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
