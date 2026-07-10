/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { musics as defaultMusics } from '../data/musics';
import type { MusicTrack } from '../data/musics';
import { scratchEngine } from './ScratchEngine';
import { db } from '../data/db';

export interface Category {
  id: string;
  name: string;
  isNative?: boolean;
  isDisabled?: boolean;
}

export const defaultCategories: Category[] = [
  { id: 'native', name: 'R.A.M System Tracks', isNative: true },
  { id: 'imported', name: 'Imported Tracks' }
];

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
  scrub: (deltaSeconds: number) => void;
  setIsScrubbing: (isScrubbing: boolean) => void;
  isReversed: boolean;
  toggleReverse: () => void;
  importTrack: (file: File) => void;
  removeTrack: (index: number) => void;
  moveTrack: (fromIndex: number, toIndex: number) => void;
  moveTrackToCategory: (trackIndex: number, categoryId: string) => void;
  jumpToTrack: (index: number) => void;
  playlist: MusicTrack[];
  categories: Category[];
  createCategory: (name: string) => void;
  deleteCategory: (id: string) => void;
  toggleCategoryEnabled: (id: string) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

const generateImportId = () => `imported-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

const sortPlaylistByCategory = (list: MusicTrack[], cats: Category[]) => {
  return [...list].sort((a, b) => {
    const idxA = cats.findIndex(c => c.id === a.categoryId);
    const idxB = cats.findIndex(c => c.id === b.categoryId);
    return idxA - idxB;
  });
};

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>(defaultCategories);
  const [playlist, setPlaylist] = useState<MusicTrack[]>(defaultMusics);
  const [isPlaying, setIsPlaying] = useState(false); // Default to false to respect browser policies
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isScrubbing, setIsScrubbingState] = useState(false);
  const [isReversed, setIsReversed] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const initData = async () => {
      try {
        const savedCategories = await db.getCategories();
        const savedTracks = await db.getAllTracks();
        
        let cats = categories;
        if (savedCategories.length > 0) {
          setCategories(savedCategories);
          cats = savedCategories;
        }

        if (savedTracks.length > 0) {
          const hydratedTracks: MusicTrack[] = savedTracks.map(t => ({
            id: t.id,
            title: t.title,
            categoryId: t.categoryId,
            url: URL.createObjectURL(t.blob)
          }));
          
          setPlaylist(prev => {
            // Keep native tracks, append hydrated tracks
            const nativeTracks = prev.filter(t => !t.id.startsWith('imported-'));
            const merged = [...nativeTracks, ...hydratedTracks];
            return sortPlaylistByCategory(merged, cats);
          });
        }
      } catch (err) {
        console.error("Failed to load from DB", err);
      }
    };
    initData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTimeUpdate = () => {
    if (isScrubbing) return; // Prevent state updates during scrubbing to avoid jitter
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

  const getEnabledCategories = () => {
    return new Set(categories.filter(c => !c.isDisabled).map(c => c.id));
  };

  const nextTrack = () => {
    const enabledCatIds = getEnabledCategories();
    if (enabledCatIds.size === 0) {
      setIsPlaying(false);
      return;
    }
    
    let nextIndex = (currentTrackIndex + 1) % playlist.length;
    let attempts = 0;
    
    while (!enabledCatIds.has(playlist[nextIndex].categoryId) && attempts < playlist.length) {
      nextIndex = (nextIndex + 1) % playlist.length;
      attempts++;
    }
    
    if (attempts < playlist.length) {
      setCurrentTrackIndex(nextIndex);
    } else {
      setIsPlaying(false);
    }
  };

  const prevTrack = () => {
    const enabledCatIds = getEnabledCategories();
    if (enabledCatIds.size === 0) {
      setIsPlaying(false);
      return;
    }
    
    let nextIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    let attempts = 0;
    
    while (!enabledCatIds.has(playlist[nextIndex].categoryId) && attempts < playlist.length) {
      nextIndex = (nextIndex - 1 + playlist.length) % playlist.length;
      attempts++;
    }
    
    if (attempts < playlist.length) {
      setCurrentTrackIndex(nextIndex);
    } else {
      setIsPlaying(false);
    }
  };

  const importTrack = (file: File) => {
    const importedCount = playlist.filter(t => !categories.find(c => c.id === t.categoryId)?.isNative).length;
    if (importedCount >= 33) {
      alert("Error: Maximum imported playlist size reached (33/33).");
      return;
    }
    const url = URL.createObjectURL(file);
    const newTrack: MusicTrack = {
      id: generateImportId(),
      title: file.name.replace(/\.[^/.]+$/, ""), // remove extension
      url: url,
      categoryId: 'imported',
    };
    
    db.saveTrack({
      id: newTrack.id,
      title: newTrack.title,
      categoryId: newTrack.categoryId,
      blob: file
    }).catch(err => console.error("Failed to save track to DB", err));
    
    setPlaylist(prev => {
      const newPlaylist = [...prev, newTrack];
      // Keep playlist visually sorted by category order
      return sortPlaylistByCategory(newPlaylist, categories);
    });
    // Find the actual index of the new track
    // Need to defer this since playlist hasn't updated yet.
    // But we can just set it immediately by calculating its index.
    // We'll let the user manually jump if they want, or we just play the newly added track.
    setCurrentTrackIndex(playlist.length); // Approximate, might not be exact after sort
    setIsPlaying(true);
  };

  const removeTrack = (index: number) => {
    if (playlist.length <= 1) return; // Don't remove the last track
    
    const trackToRemove = playlist[index];
    if (trackToRemove.id.startsWith('imported-')) {
      db.deleteTrack(trackToRemove.id).catch(err => console.error("Failed to delete track from DB", err));
      URL.revokeObjectURL(trackToRemove.url); // free memory
    }
    
    setPlaylist(prev => prev.filter((_, i) => i !== index));
    
    if (currentTrackIndex === index) {
      // If we deleted the currently playing track, it will auto-play the next one (which falls into the same index, or wraps)
      setCurrentTrackIndex(prev => prev >= playlist.length - 1 ? 0 : prev);
      setProgress(0);
    } else if (currentTrackIndex > index) {
      // If we deleted a track before the current one, decrement the current index
      setCurrentTrackIndex(prev => prev - 1);
    }
  };

  const moveTrack = (fromIndex: number, toIndex: number) => {
    if (fromIndex < 0 || fromIndex >= playlist.length || toIndex < 0 || toIndex >= playlist.length) return;
    
    // Only allow moving within the same category to maintain visual grouping
    if (playlist[fromIndex].categoryId !== playlist[toIndex].categoryId) return;
    
    setPlaylist(prev => {
      const newPlaylist = [...prev];
      const [movedItem] = newPlaylist.splice(fromIndex, 1);
      newPlaylist.splice(toIndex, 0, movedItem);
      return newPlaylist;
    });

    // Update currentTrackIndex if necessary
    if (currentTrackIndex === fromIndex) {
      setCurrentTrackIndex(toIndex);
    } else if (currentTrackIndex > fromIndex && currentTrackIndex <= toIndex) {
      setCurrentTrackIndex(prev => prev - 1);
    } else if (currentTrackIndex < fromIndex && currentTrackIndex >= toIndex) {
      setCurrentTrackIndex(prev => prev + 1);
    }
  };

  const moveTrackToCategory = (trackIndex: number, categoryId: string) => {
    const trackToMove = playlist[trackIndex];
    if (trackToMove.id.startsWith('imported-')) {
      db.updateTrackCategory(trackToMove.id, categoryId).catch(err => console.error("Failed to update track category in DB", err));
    }
    
    setPlaylist(prev => {
      const newPlaylist = [...prev];
      newPlaylist[trackIndex] = { ...newPlaylist[trackIndex], categoryId };
      return sortPlaylistByCategory(newPlaylist, categories);
    });
  };

  const createCategory = (name: string) => {
    const newCategory: Category = {
      id: `cat-${Date.now()}`,
      name
    };
    setCategories(prev => {
      const newCats = [...prev, newCategory];
      db.saveCategories(newCats).catch(err => console.error("Failed to save categories", err));
      return newCats;
    });
  };

  const deleteCategory = (id: string) => {
    if (id === 'native' || id === 'imported') return;
    
    setCategories(prev => {
      const newCats = prev.filter(c => c.id !== id);
      db.saveCategories(newCats).catch(err => console.error("Failed to save categories", err));
      return newCats;
    });
    
    // Also update all tracks in DB that belonged to this category
    playlist.forEach(track => {
      if (track.categoryId === id && track.id.startsWith('imported-')) {
        db.updateTrackCategory(track.id, 'imported').catch(console.error);
      }
    });
    
    // Move all tracks in this category to 'imported' category instead of deleting them
    setPlaylist(prev => {
      const newPlaylist = prev.map(track => 
        track.categoryId === id ? { ...track, categoryId: 'imported' } : track
      );
      return sortPlaylistByCategory(newPlaylist, categories.filter(c => c.id !== id));
    });
  };

  const toggleCategoryEnabled = (id: string) => {
    setCategories(prev => {
      const newCats = prev.map(c => c.id === id ? { ...c, isDisabled: !c.isDisabled } : c);
      db.saveCategories(newCats).catch(console.error);
      return newCats;
    });
  };

  const jumpToTrack = (index: number) => {
    if (index >= 0 && index < playlist.length) {
      setCurrentTrackIndex(index);
      setIsPlaying(true);
    }
  };

  // Initialize audio element
  useEffect(() => {
    let audio = audioRef.current;
    if (!audio) {
      audio = new Audio(playlist[currentTrackIndex].url);
      audio.loop = isLooping;
      audioRef.current = audio;
      scratchEngine.loadTrack(playlist[currentTrackIndex].url);
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
      if (!isReversed) {
        audioRef.current.play().catch((err) => {
          console.warn("Playback failed", err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause(); // we'll use ScratchEngine instead
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, isReversed]);

  // Handle Reverse Playback
  useEffect(() => {
    let animationId: number | null = null;
    let lastTime = performance.now();

    if (isPlaying && isReversed && !isScrubbing) {
      // Start continuous reverse
      if (audioRef.current) scratchEngine.startContinuousReverse(audioRef.current.currentTime);
      
      const loop = (time: number) => {
        const delta = (time - lastTime) / 1000;
        lastTime = time;
        
        setCurrentTime(prev => {
          let newTime = prev - delta;
          if (newTime <= 0) {
            newTime = 0;
            setIsPlaying(false);
            if (audioRef.current) audioRef.current.currentTime = 0;
          } else {
            if (audioRef.current) audioRef.current.currentTime = newTime;
          }
          if (audioRef.current && audioRef.current.duration) {
             setProgress((newTime / audioRef.current.duration) * 100);
          }
          return newTime;
        });

        if (isPlaying && isReversed) {
           animationId = requestAnimationFrame(loop);
        }
      };
      
      animationId = requestAnimationFrame(loop);
    } else {
      scratchEngine.stopContinuousReverse();
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      scratchEngine.stopContinuousReverse();
    };
  }, [isPlaying, isReversed, isScrubbing]);

  // Handle Track Change
  useEffect(() => {
    if (!audioRef.current) return;
    
    // Change source if needed
    // Local blobs don't work well with endsWith, check if src includes the url instead or exact match
    if (audioRef.current.src !== playlist[currentTrackIndex].url && !audioRef.current.src.includes(playlist[currentTrackIndex].url)) {
      audioRef.current.src = playlist[currentTrackIndex].url;
      scratchEngine.loadTrack(playlist[currentTrackIndex].url);
      setProgress(0);
      
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.warn("Playback failed", err);
          setIsPlaying(false);
        });
      }
    }
  }, [currentTrackIndex, isPlaying, playlist]);

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
      setCurrentTime(newTime);
      setProgress(newProgress);
      
      if (isPlaying && isReversed && !isScrubbing) {
        scratchEngine.startContinuousReverse(newTime);
      }
    }
  };

  const scrub = (deltaSeconds: number) => {
    if (audioRef.current && audioRef.current.duration) {
      const newTime = scratchEngine.updateScrub(deltaSeconds);
      if (newTime !== undefined) {
         audioRef.current.currentTime = newTime;
         setCurrentTime(newTime);
         setProgress((newTime / audioRef.current.duration) * 100);
      }
    }
  };

  const setIsScrubbing = (scrubbing: boolean) => {
    setIsScrubbingState(scrubbing);
    if (scrubbing) {
      if (audioRef.current) {
        audioRef.current.volume = 0; // mute normal audio while scratching
        scratchEngine.startScrub(audioRef.current.currentTime);
      }
    } else {
      scratchEngine.stopScrub();
      if (audioRef.current) {
        audioRef.current.volume = 1; // unmute
        setCurrentTime(audioRef.current.currentTime);
        if (audioRef.current.duration) {
          setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
        }
      }
    }
  };

  const value = {
    isPlaying,
    currentTrackIndex,
    currentTrack: playlist[currentTrackIndex],
    isLooping,
    togglePlayPause,
    nextTrack,
    prevTrack,
    toggleLoop,
    progress,
    currentTime,
    duration,
    seek,
    scrub,
    setIsScrubbing,
    isReversed,
    toggleReverse: () => setIsReversed(!isReversed),
    importTrack,
    removeTrack,
    moveTrack,
    moveTrackToCategory,
    jumpToTrack,
    playlist,
    categories,
    createCategory,
    deleteCategory,
    toggleCategoryEnabled,
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
