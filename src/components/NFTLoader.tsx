import React, { useEffect, useState } from 'react';

interface NFTLoaderProps {
  onComplete?: () => void;
  duration?: number;
}

const NFTLoader: React.FC<NFTLoaderProps> = ({ onComplete, duration = 3500 }) => {
  const [currentAnimation, setCurrentAnimation] = useState(0);

  const animations = [
    'animate-text-glow',
    'animate-text-rainbow', 
    'animate-text-wave',
    'animate-letters-dance',
    'animate-text-shake'
  ];

  useEffect(() => {
    // Change animation every 700ms
    const animationInterval = setInterval(() => {
      setCurrentAnimation(prev => (prev + 1) % animations.length);
    }, 700);

    // Complete loading after duration
    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, duration);

    return () => {
      clearInterval(animationInterval);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete, animations.length]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center overflow-hidden animate-background-pulse">
      {/* Animated background circles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/5 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main text */}
      <div className="relative z-10">
        <h1 className={`
          text-8xl md:text-9xl font-black tracking-wider
          text-gradient-primary
          ${animations[currentAnimation]}
          transition-all duration-300
        `}>
          pxlmint
        </h1>
        
        {/* Glowing underline */}
        <div className="mt-4 h-2 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse opacity-60" />
        
        {/* Pulsing dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full bg-primary animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-4 border-t-4 border-primary animate-pulse opacity-30" />
      <div className="absolute top-10 right-10 w-20 h-20 border-r-4 border-t-4 border-primary animate-pulse opacity-30" 
           style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-4 border-b-4 border-primary animate-pulse opacity-30"
           style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-4 border-b-4 border-primary animate-pulse opacity-30"
           style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export default NFTLoader;