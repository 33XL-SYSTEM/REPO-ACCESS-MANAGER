import React, { useRef, useState, useEffect } from 'react';
import { useMusic } from '../context/MusicContext';

const VinylSpinner: React.FC = () => {
  const { isPlaying, setIsScrubbing, scrub, isReversed } = useMusic();
  
  const [isDragging, setIsDragging] = useState(false);
  const discRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const lastAngleRef = useRef<number | null>(null);
  const centerRef = useRef<{ x: number; y: number } | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying && !isDragging) {
      let lastTime = performance.now();
      const loop = (time: number) => {
        const delta = time - lastTime;
        lastTime = time;
        const speed = isReversed ? -30 : 30; // 30 deg/sec
        rotationRef.current = (rotationRef.current + (speed * delta) / 1000) % 360;
        if (discRef.current) discRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
        animationRef.current = requestAnimationFrame(loop);
      };
      animationRef.current = requestAnimationFrame(loop);
      return () => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      };
    }
  }, [isPlaying, isDragging, isReversed]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!discRef.current) return;
    setIsDragging(true);
    setIsScrubbing(true);
    e.currentTarget.setPointerCapture(e.pointerId);

    const rect = discRef.current.getBoundingClientRect();
    centerRef.current = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };

    const angle = Math.atan2(e.clientY - centerRef.current.y, e.clientX - centerRef.current.x) * (180 / Math.PI);
    lastAngleRef.current = angle;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !centerRef.current || lastAngleRef.current === null) return;

    const angle = Math.atan2(e.clientY - centerRef.current.y, e.clientX - centerRef.current.x) * (180 / Math.PI);
    let deltaAngle = angle - lastAngleRef.current;

    if (deltaAngle > 180) deltaAngle -= 360;
    if (deltaAngle < -180) deltaAngle += 360;

    rotationRef.current = (rotationRef.current + deltaAngle) % 360;
    if (discRef.current) {
      discRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
    }

    // Scrub: 10 seconds of audio per 360 degree rotation
    const deltaSeconds = deltaAngle * (10 / 360);
    scrub(deltaSeconds);

    lastAngleRef.current = angle;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    setIsScrubbing(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
    lastAngleRef.current = null;
  };
  
  const orbitItems = [
    "33XL SYSTEM",
    "CAUAN33XL",
    "ENGINES",
    "A.L.T",
    "JOGOS"
  ];

  return (
    <div className="relative w-[450px] h-[450px] flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-500 select-none">
      
      {/* Outer Glow / Ambient Lighting */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 blur-[60px] rounded-full"></div>
      <div className="absolute w-[350px] h-[350px] bg-white/5 blur-3xl rounded-full mix-blend-screen"></div>

      {/* Main Vinyl Disc - Spinning */}
      <div 
        ref={discRef}
        className={`absolute w-[340px] h-[340px] rounded-full border border-white/20 flex items-center justify-center bg-gradient-to-br from-[#111] to-[#050505] shadow-[0_0_60px_rgba(255,255,255,0.05),inset_0_0_25px_rgba(255,255,255,0.05)] ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ touchAction: 'none' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Vinyl Grooves */}
        <div className="absolute w-[300px] h-[300px] rounded-full border border-[#fff]/10 border-dashed opacity-50"></div>
        <div className="absolute w-[260px] h-[260px] rounded-full border border-[#fff]/5"></div>
        <div className="absolute w-[220px] h-[220px] rounded-full border border-[#fff]/10 border-dotted opacity-30"></div>
        <div className="absolute w-[170px] h-[170px] rounded-full border border-[#fff]/5"></div>
        
        {/* Center Label */}
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center relative shadow-[0_0_20px_rgba(255,255,255,0.5)]">
          <div className="absolute inset-0 border-[6px] border-[#050505] rounded-full"></div>
          <div className="w-4 h-4 bg-black rounded-full"></div>
        </div>
      </div>

      {/* Orbiting Tracks */}
      <div 
        className={`absolute inset-0 animate-[spin_25s_linear_infinite] pointer-events-none ${isReversed ? '[animation-direction:reverse]' : ''}`}
        style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
      >
        {orbitItems.map((item, i) => {
          const rotation = (360 / orbitItems.length) * i;
          return (
            <div 
              key={item}
              className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="px-4 py-1.5 bg-black/80 backdrop-blur-md border border-white/30 text-[10px] font-mono whitespace-nowrap text-white uppercase tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.15)] animate-pulse"
                     style={{ animationDelay: `${i * 0.7}s` }}>
                  {item}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Static Vinyl Arm/Needle Concept */}
      <div className="absolute top-8 right-12 w-1.5 h-36 bg-gradient-to-b from-white/60 via-white/30 to-transparent origin-top rotate-45 rounded-full z-10 hidden md:block drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        <div className="absolute bottom-4 -left-2 w-5 h-8 bg-white/90 rounded-sm">
          <div className="absolute bottom-1 right-full w-3 h-px bg-white"></div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white/20 border border-white/50 backdrop-blur-sm"></div>
      </div>

    </div>
  );
};

export default VinylSpinner;
