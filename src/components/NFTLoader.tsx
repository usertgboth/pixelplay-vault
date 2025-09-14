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
      {/* Matrix-style rain effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-cyan-400 to-transparent animate-pulse"
            style={{
              left: `${i * 2}%`,
              height: `${100 + Math.random() * 200}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              transform: `translateY(-${Math.random() * 100}px)`
            }}
          />
        ))}
      </div>

      {/* Holographic grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />
      </div>

      {/* Rotating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute border border-cyan-400/30 rounded-lg animate-spin"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              width: `${30 + i * 5}px`,
              height: `${30 + i * 5}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + i}s`
            }}
          />
        ))}
      </div>

      {/* Central content */}
      <div className="relative z-10 text-center">
        {/* Glitch container */}
        <div className="relative mb-8">
          {/* Main text */}
          <h1 className={`
            text-7xl md:text-8xl lg:text-9xl font-black tracking-widest
            bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400
            bg-clip-text text-transparent
            ${animations[currentAnimation]}
            transition-all duration-500
            relative z-10
            ${showGlitch ? 'blur-sm' : ''}
          `}>
            pxlmint
          </h1>
          
          {/* Glitch layers */}
          {showGlitch && (
            <>
              <h1 className="absolute inset-0 text-7xl md:text-8xl lg:text-9xl font-black tracking-widest text-red-500 opacity-70 transform translate-x-1 -translate-y-1">
                pxlmint
              </h1>
              <h1 className="absolute inset-0 text-7xl md:text-8xl lg:text-9xl font-black tracking-widest text-blue-500 opacity-70 transform -translate-x-1 translate-y-1">
                pxlmint
              </h1>
            </>
          )}
          
          {/* Neon glow effect */}
          <div className="absolute inset-0 text-7xl md:text-8xl lg:text-9xl font-black tracking-widest text-cyan-400 opacity-30 blur-lg animate-pulse">
            pxlmint
          </div>
        </div>

        {/* Futuristic progress bar */}
        <div className="w-80 max-w-sm mx-auto mb-8">
          <div className="relative h-6 bg-slate-800/50 rounded-full border border-cyan-400/30 overflow-hidden backdrop-blur-sm">
            {/* Progress fill */}
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Animated shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
              {/* Moving highlight */}
              <div 
                className="absolute top-0 left-0 h-full w-8 bg-white/30 skew-x-12 animate-pulse"
                style={{
                  transform: `translateX(${progress * 2.5}px) skewX(12deg)`,
                  transition: 'transform 0.3s ease-out'
                }}
              />
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-md -z-10" />
          </div>
          
          {/* Progress text */}
          <div className="flex justify-between mt-3 text-sm font-mono">
            <span className="text-cyan-400 animate-pulse">LOADING...</span>
            <span className="text-pink-400 font-bold">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Animated loading dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-bounce shadow-lg shadow-cyan-400/50"
              style={{
                animationDelay: `${i * 0.15}s`,
                animationDuration: '1.2s'
              }}
            />
          ))}
        </div>

        {/* System status */}
        <div className="text-center font-mono text-xs text-cyan-400/70 animate-pulse">
          <div>INITIALIZING BLOCKCHAIN CONNECTION...</div>
          <div className="mt-1">SYNCING NFT METADATA...</div>
        </div>
      </div>

      {/* Corner HUD elements */}
      <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-cyan-400/50 animate-pulse" />
      <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-purple-400/50 animate-pulse" 
           style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-pink-400/50 animate-pulse"
           style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-cyan-400/50 animate-pulse"
           style={{ animationDelay: '1.5s' }} />

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-60 animate-bounce blur-sm"
            style={{
              left: `${20 + (i * 12)}%`,
              top: `${30 + Math.sin(i) * 40}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Scan lines effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div 
          className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
          style={{
            position: 'absolute',
            top: '20%',
            animationDuration: '2s'
          }}
        />
        <div 
          className="w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"
          style={{
            position: 'absolute',
            top: '60%',
            animationDuration: '3s',
            animationDelay: '1s'
          }}
        />
      </div>
    </div>
  );
};

export default NFTLoader;