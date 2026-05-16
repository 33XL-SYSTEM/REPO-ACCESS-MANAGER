/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { musics } from '../data/musics';
import type { MusicTrack } from '../data/musics';
interface MusicContextType {
  isPlaying: boolean;
  currentTrackIndex: number;
  currentTrack: MusicTrack;
  isLooping: boolean;
  togglePlayPause: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  toggleLoop: () => void;
  progress: number;
  currentTime: number;
  duration: number;
  seek: (progress: number) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false); // Default to false to respect browser policies
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleTimeUpdate = () => {
    if (audioRef.current && audioRef.current.duration) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }
  };

  const handleTrackEnded = () => {
    if (!isLooping) {
      nextTrack();
    }
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % musics.length);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + musics.length) % musics.length);
  };

  // Initialize audio element
  useEffect(() => {
    let audio = audioRef.current;
    if (!audio) {
      audio = new Audio(musics[currentTrackIndex].url);
      audio.loop = isLooping;
      audioRef.current = audio;
    }
    
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleTrackEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleTrackEnded);
      audio.pause();
      audioRef.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync state changes with audio element
  useEffect(() => {
    if (!audioRef.current) return;
    
    // Play / Pause
    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.warn("Playback failed", err);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handle Track Change
  useEffect(() => {
    if (!audioRef.current) return;
    
    // Change source if needed
    if (!audioRef.current.src.endsWith(musics[currentTrackIndex].url)) {
      audioRef.current.src = musics[currentTrackIndex].url;
      setProgress(0);
      
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.warn("Playback failed", err);
          setIsPlaying(false);
        });
      }
    }
  }, [currentTrackIndex, isPlaying]);

  // Handle Looping Change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = isLooping;
    }
  }, [isLooping]);

  const togglePlayPause = () => setIsPlaying(!isPlaying);

  const toggleLoop = () => setIsLooping(!isLooping);

  const seek = (newProgress: number) => {
    if (audioRef.current && audioRef.current.duration) {
      const newTime = (newProgress / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setProgress(newProgress);
    }
  };

  const value = {
    isPlaying,
    currentTrackIndex,
    currentTrack: musics[currentTrackIndex],
    isLooping,
    togglePlayPause,
    nextTrack,
    prevTrack,
    toggleLoop,
    progress,
    currentTime,
    duration,
    seek,
  };

  return <MusicContext.Provider value={value}>{children}</MusicContext.Provider>;
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};
