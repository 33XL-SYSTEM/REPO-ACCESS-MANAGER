import React, { useState } from 'react';
import { useMusic } from '../context/MusicContext';
import MusicPlayer from './MusicPlayer';
import { X, Disc3 } from 'lucide-react';

const FloatingPlayer: React.FC = () => {
  const { isPlaying } = useMusic();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {isOpen && (
        <div className="animate-fade-in origin-bottom-right drop-shadow-2xl w-72 md:w-80">
          <MusicPlayer />
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-[#111] border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center hover:scale-105 transition-all duration-300 group overflow-hidden"
      >
        {isOpen ? (
          <X className="text-white relative z-10" size={24} />
        ) : (
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <Disc3 
              className={`text-white/80 ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`} 
              size={32} 
            />
          </div>
        )}

        {/* Ambient glow effect inside button */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Playing indicator dot */}
        {!isOpen && isPlaying && (
          <>
            <span className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full animate-ping shadow-[0_0_10px_white]"></span>
            <span className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full border border-black"></span>
          </>
        )}
      </button>
    </div>
  );
};

export default FloatingPlayer;
