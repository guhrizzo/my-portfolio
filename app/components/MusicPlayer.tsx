"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronDown,
  ChevronUp,
  SkipForward,
  SkipBack,
  Music,
} from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [prevVolume, setPrevVolume] = useState(0.6);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [collapsed, setCollapsed] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);

  const track = {
    title: "Relaxing Lo-Fi",
    artist: "Cloudy Vibes",
    url: "/music/music1.mp3", // URL de exemplo
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        console.error("Erro ao reproduzir: Interação do usuário necessária.");
      });
    }
  }, [isPlaying]);

  // Atalho de teclado: Espaço para Play/Pause
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" && e.target === document.body) {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [togglePlay]);

  const handleVolumeChange = (v: number) => {
    setVolume(v);
    if (audioRef.current) {
      audioRef.current.volume = v;
      audioRef.current.muted = v === 0;
      setIsMuted(v === 0);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      handleVolumeChange(prevVolume || 0.5);
    } else {
      setPrevVolume(volume);
      handleVolumeChange(0);
    }
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className={`fixed bottom-6 left-6 z-100 bg-white/80  dark:bg-slate-900/90 backdrop-blur-xl border border-white/20 dark:border-slate-800 shadow-2xl rounded-3xl transition-all duration-500 ease-in-out group ${
        collapsed ? "w-64 p-3" : "w-80 p-5"
      }`}
    >
      <audio
        ref={audioRef}
        src={track.url}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => {
          if (!isSeeking) setCurrentTime(e.currentTarget.currentTime);
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Header & Track Info */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative w-12 h-12 shrink-0 overflow-hidden rounded-xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            {isPlaying ? (
              <div className="flex gap-0.5 items-end h-4 cursor-pointer">
                <div className="w-1 bg-white animate-[bounce_0.6s_infinite]" />
                <div className="w-1 bg-white animate-[bounce_0.8s_infinite]" />
                <div className="w-1 bg-white animate-[bounce_0.5s_infinite]" />
              </div>
            ) : (
              <Music size={22} />
            )}
          </div>

          <div className="flex flex-col truncate">
            <h4 className="text-sm font-bold text-slate-800 dark:text-white truncate leading-tight">
              {track.title}
            </h4>
            <p className="text-[12px] text-slate-500 dark:text-slate-400 truncate">
              {track.artist}
            </p>
          </div>
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors cursor-pointer text-slate-400"
        >
          {collapsed ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {!collapsed && (
        <div className="mt-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
          {/* Progress Section */}
          <div className="space-y-1.5">
            <div className="group/slider relative h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full cursor-pointer">
              <div
                className="absolute top-0 left-0 h-full bg-blue-500 rounded-full z-10"
                style={{ width: `${progress}%` }}
              />
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={(e) => {
                  const time = Number(e.target.value);
                  setCurrentTime(time);
                  if (audioRef.current) audioRef.current.currentTime = time;
                }}
                onMouseDown={() => setIsSeeking(true)}
                onMouseUp={() => setIsSeeking(false)}
                className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer"
              />
            </div>
            <div className="flex justify-between text-[10px] font-medium text-slate-400">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition">
                <SkipBack size={18} fill="currentColor" />
              </button>
              
              <button
                onClick={togglePlay}
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg cursor-pointer shadow-blue-500/40 transition-all active:scale-95"
              >
                {isPlaying ? <Pause size={24} fill="white" /> : <Play size={24} fill="white" className="ml-1" />}
              </button>

              <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition">
                <SkipForward size={18} fill="currentColor" />
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl transition-all">
              <button onClick={toggleMute} className="text-slate-500 hover:text-blue-500">
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => handleVolumeChange(Number(e.target.value))}
                className="w-16 h-1 accent-blue-600 cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}