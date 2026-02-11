"use client";

import { useRef, useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [collapsed, setCollapsed] = useState(false);
  const [seeking, setSeeking] = useState(false);

  const track = {
    title: "Relax Track",
    artist: "Local File",
    url: "/music/music1.mp3",
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play().catch(() => {});
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) audioRef.current.currentTime = time;
  };

  return (
    <div
      className={`fixed bottom-6 left-6 z-[100] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl transition-all duration-300 overflow-hidden ${
        collapsed ? "w-56 p-2" : "w-80 p-4"
      }`}
    >
      <audio
        ref={audioRef}
        src={track.url}
        preload="metadata"
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => {
          if (!seeking) setCurrentTime(e.currentTarget.currentTime);
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
            <Volume2 size={20} />
          </div>

          <div className="flex flex-col overflow-hidden">
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-tight leading-none">
              {isPlaying ? "Tocando agora" : "Em pausa"}
            </span>
            <span className="text-sm font-bold text-slate-900 dark:text-white truncate">
              {track.title}
            </span>
            <span className="text-[11px] text-slate-500 truncate">
              {track.artist}
            </span>
          </div>
        </div>

        <button
          onClick={() => setCollapsed((c) => !c)}
          className="text-slate-400 hover:text-blue-600 transition"
        >
          {collapsed ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {!collapsed && (
        <>
          {/* Barra de progresso custom */}
          <div className="mt-3">
            <div className="relative h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
              {/* Parte azul preenchida */}
              <div
                className="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />

              {/* Slider invisível em cima */}
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                step="0.1"
                onMouseDown={() => setSeeking(true)}
                onMouseUp={() => setSeeking(false)}
                onTouchStart={() => setSeeking(true)}
                onTouchEnd={() => setSeeking(false)}
                onChange={handleSeek}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>

            <div className="flex justify-between text-[10px] text-slate-400 font-medium mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="w-10 h-10 flex items-center justify-center rounded-full shadow-md bg-blue-600 hover:bg-blue-700 text-white transition-transform active:scale-90"
              >
                {isPlaying ? (
                  <Pause size={20} fill="currentColor" />
                ) : (
                  <Play size={20} fill="currentColor" className="ml-1" />
                )}
              </button>

              <div className="flex items-center gap-2 ml-2 group">
                <button
                  onClick={() => {
                    if (!audioRef.current) return;
                    const m = !isMuted;
                    audioRef.current.muted = m;
                    setIsMuted(m);
                  }}
                  className="text-slate-400 hover:text-blue-600 transition-colors"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX size={18} />
                  ) : (
                    <Volume2 size={18} />
                  )}
                </button>

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    const v = Number(e.target.value);
                    setVolume(v);
                    if (audioRef.current) {
                      audioRef.current.volume = v;
                      audioRef.current.muted = v === 0;
                      setIsMuted(v === 0);
                    }
                  }}
                  className="w-16 h-1 accent-blue-600 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
