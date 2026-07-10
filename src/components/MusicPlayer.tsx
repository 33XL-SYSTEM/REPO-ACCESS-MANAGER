import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Rewind, ListMusic } from 'lucide-react';
import PlaylistManagerModal from './PlaylistManagerModal';
import { useMusic } from '../context/MusicContext';

const MusicPlayer: React.FC = () => {
  const {
    isPlaying,
    currentTrack,
    isLooping,
    togglePlayPause,
    nextTrack,
    prevTrack,
    toggleLoop,
    progress,
    currentTime,
    duration,
    seek,
    isReversed,
    toggleReverse,
  } = useMusic();

  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    seek(Number(e.target.value));
  };

  return (
    <div className="w-full bg-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex flex-col gap-5 shadow-[0_0_30px_rgba(255,255,255,0.05)] relative overflow-hidden group">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -z-10 group-hover:bg-white/10 transition-colors duration-500"></div>

      <div className="flex items-center justify-between mt-2">
        <div className="flex flex-col">
          <span className="text-[11px] font-mono text-white/70 uppercase tracking-widest mb-1">
            Now Playing
          </span>
          <span className="text-base font-bold text-white tracking-wide truncate max-w-[200px]">
            {currentTrack.title}
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsPlaylistOpen(true)} 
            className="p-1.5 bg-white/5 hover:bg-white/10 rounded-md text-white/70 hover:text-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.02)] border border-white/5" 
            title="Open Playlist Manager"
          >
            <ListMusic size={16} />
          </button>
          
          {/* Animated equalizer bars when playing */}
          <div className="flex gap-1 items-end h-4">
            <div className={`w-1 bg-white/60 rounded-t-sm transition-all duration-300 ${isPlaying ? 'h-full animate-pulse' : 'h-1'}`}></div>
            <div className={`w-1 bg-white/60 rounded-t-sm transition-all duration-300 ${isPlaying ? 'h-3 animate-pulse delay-75' : 'h-1'}`}></div>
            <div className={`w-1 bg-white/60 rounded-t-sm transition-all duration-300 ${isPlaying ? 'h-2 animate-pulse delay-150' : 'h-1'}`}></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={progress || 0} 
          onChange={handleSeek}
          style={{ background: `linear-gradient(to right, var(--color-white) ${progress || 0}%, color-mix(in srgb, var(--color-white) 20%, transparent) ${progress || 0}%)` }}
          className="w-full h-1 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:bg-white rounded-full transition-all"
        />
        <div className="flex justify-between text-[9px] font-mono text-white/70 px-0.5">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-2">
        <button 
          onClick={toggleLoop} 
          className={`p-1.5 transition-colors ${isLooping ? 'text-white' : 'text-white/60 hover:text-white'}`}
        >
          <Repeat size={16} />
        </button>

        <div className="flex items-center gap-6">
          <button onClick={prevTrack} className="text-white/90 hover:text-white transition-colors">
            <SkipBack size={20} />
          </button>
          
          <button 
            onClick={togglePlayPause} 
            className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5" />}
          </button>
          
          <button onClick={nextTrack} className="text-white/90 hover:text-white transition-colors">
            <SkipForward size={20} />
          </button>
        </div>

        <button 
          onClick={toggleReverse} 
          className={`p-1.5 transition-colors ${isReversed ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-white/60 hover:text-white'}`}
          title="Play Backwards"
        >
          <Rewind size={16} />
        </button>
      </div>

      <PlaylistManagerModal isOpen={isPlaylistOpen} onClose={() => setIsPlaylistOpen(false)} />
    </div>
  );
};

export default MusicPlayer;
