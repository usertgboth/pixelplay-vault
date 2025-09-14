import React, { useEffect, useState } from 'react';

interface NFTLoaderProps {
  onComplete?: () => void;
  duration?: number;
}

const NFTLoader: React.FC<NFTLoaderProps> = ({ onComplete, duration = 6000 }) => {
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showGlitch, setShowGlitch] = useState(false);

  const animations = [
    'animate-text-glow',
    'animate-text-rainbow', 
    'animate-text-wave',
    'animate-letters-dance',
    'animate-text-shake'
  ];

  useEffect(() => {
    // Change animation every 800ms
    const animationInterval = setInterval(() => {
      setCurrentAnimation(prev => (prev + 1) % animations.length);
    }, 800);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setTimeout(() => onComplete?.(), 500);
          return 100;
        }
        return prev + 1.5;
      });
    }, duration / 67);

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setShowGlitch(true);
      setTimeout(() => setShowGlitch(false), 100);
    }, 2000);

    return () => {
      clearInterval(animationInterval);
      clearInterval(progressInterval);
      clearInterval(glitchInterval);
    };
  }, [duration, onComplete, animations.length]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-50 flex items-center justify-center overflow-hidden">
      {/* Matrix-style rain effect - optimized for mobile */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-cyan-400 to-transparent animate-pulse"
            style={{
              left: `${i * 3.33}%`,
              height: `${80 + Math.random() * 120}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              transform: `translateY(-${Math.random() * 50}px)`
            }}
          />
        ))}
      </div>

      {/* Holographic grid - mobile optimized */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />
      </div>

      {/* Rotating geometric shapes - reduced for mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="absolute border border-cyan-400/30 rounded-lg animate-spin"
            style={{
              left: `${15 + (i * 20)}%`,
              top: `${25 + (i * 15)}%`,
              width: `${20 + i * 8}px`,
              height: `${20 + i * 8}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>

      {/* Central content - mobile responsive */}
      <div className="relative z-10 text-center px-4 w-full max-w-sm">
        {/* Glitch container */}
        <div className="relative mb-6">
          {/* Main text - mobile responsive sizing */}
          <h1 className={`
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-widest
            bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400
            bg-clip-text text-transparent
            ${animations[currentAnimation]}
            transition-all duration-500
            relative z-10
            ${showGlitch ? 'blur-sm' : ''}
          `}>
            pxlmint
          </h1>
          
          {/* Glitch layers - mobile responsive */}
          {showGlitch && (
            <>
              <h1 className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-widest text-red-500 opacity-70 transform translate-x-1 -translate-y-1">
                pxlmint
              </h1>
              <h1 className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-widest text-blue-500 opacity-70 transform -translate-x-1 translate-y-1">
                pxlmint
              </h1>
            </>
          )}
          
          {/* Neon glow effect - mobile responsive */}
          <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-widest text-cyan-400 opacity-30 blur-lg animate-pulse">
            pxlmint
          </div>
        </div>

        {/* Telegram Mini-App indicator */}
        <div className="mb-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full border border-blue-400/30">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-blue-400 font-mono">TELEGRAM MINI APP</span>
          </div>
        </div>

        {/* Futuristic progress bar - mobile optimized */}
        <div className="w-full max-w-xs mx-auto mb-6">
          <div className="relative h-4 bg-slate-800/50 rounded-full border border-cyan-400/30 overflow-hidden backdrop-blur-sm">
            {/* Progress fill */}
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Animated shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
              {/* Moving highlight */}
              <div 
                className="absolute top-0 left-0 h-full w-6 bg-white/30 skew-x-12 animate-pulse"
                style={{
                  transform: `translateX(${progress * 2}px) skewX(12deg)`,
                  transition: 'transform 0.3s ease-out'
                }}
              />
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-md -z-10" />
          </div>
          
          {/* Progress text */}
          <div className="flex justify-between mt-2 text-xs font-mono">
            <span className="text-cyan-400 animate-pulse">LOADING...</span>
            <span className="text-pink-400 font-bold">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Animated loading dots - mobile optimized */}
        <div className="flex justify-center space-x-1.5 mb-6">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-bounce shadow-lg shadow-cyan-400/50"
              style={{
                animationDelay: `${i * 0.15}s`,
                animationDuration: '1.2s'
              }}
            />
          ))}
        </div>

        {/* System status - mobile friendly */}
        <div className="text-center font-mono text-xs text-cyan-400/70 animate-pulse">
          <div>CONNECTING TO BLOCKCHAIN...</div>
          <div className="mt-1">LOADING NFT DATA...</div>
        </div>
      </div>

      {/* Corner HUD elements - mobile responsive */}
      <div className="absolute top-4 left-4 w-8 h-8 sm:w-12 sm:h-12 border-l-2 border-t-2 border-cyan-400/50 animate-pulse" />
      <div className="absolute top-4 right-4 w-8 h-8 sm:w-12 sm:h-12 border-r-2 border-t-2 border-purple-400/50 animate-pulse" 
           style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-4 left-4 w-8 h-8 sm:w-12 sm:h-12 border-l-2 border-b-2 border-pink-400/50 animate-pulse"
           style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-4 right-4 w-8 h-8 sm:w-12 sm:h-12 border-r-2 border-b-2 border-cyan-400/50 animate-pulse"
           style={{ animationDelay: '1.5s' }} />

      {/* Floating orbs - reduced for mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-60 animate-bounce blur-sm"
            style={{
              left: `${25 + (i * 15)}%`,
              top: `${35 + Math.sin(i) * 30}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Scan lines effect - mobile optimized */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div 
          className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
          style={{
            position: 'absolute',
            top: '25%',
            animationDuration: '2s'
          }}
        />
        <div 
          className="w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"
          style={{
            position: 'absolute',
            top: '70%',
            animationDuration: '3s',
            animationDelay: '1s'
          }}
        />
      </div>
    </div>
  );
};

export default NFTLoader;