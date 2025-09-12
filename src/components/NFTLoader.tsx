import React, { useEffect, useState } from 'react';

interface NFTLoaderProps {
  onComplete?: () => void;
  duration?: number;
}

const NFTLoader: React.FC<NFTLoaderProps> = ({ onComplete, duration = 3500 }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [nftGrid, setNftGrid] = useState<boolean[]>([]);

  const loadingMessages = [
    "Connecting to blockchain...",
    "Loading NFT collections...", 
    "Syncing with OpenSea...",
    "Preparing marketplace...",
    "Ready to explore NFTs! 🚀"
  ];

  useEffect(() => {
    // Create animated NFT grid
    const gridSize = 36;
    const initialGrid = Array(gridSize).fill(false);
    setNftGrid(initialGrid);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onComplete?.();
          }, 800);
          return 100;
        }
        return prev + 2.5;
      });
    }, duration / 40);

    // Message switching
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % loadingMessages.length);
    }, duration / 5);

    // NFT grid animation - creates wave pattern
    const gridInterval = setInterval(() => {
      setNftGrid(prev => {
        const newGrid = [...prev];
        // Create wave pattern
        const time = Date.now() / 200;
        newGrid.forEach((_, index) => {
          const row = Math.floor(index / 6);
          const col = index % 6;
          newGrid[index] = Math.sin(time + row * 0.5 + col * 0.3) > 0.3;
        });
        return newGrid;
      });
    }, 150);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      clearInterval(gridInterval);
    };
  }, [duration, onComplete, loadingMessages.length]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-6 gap-2 w-full h-full p-8">
          {nftGrid.map((active, index) => (
            <div
              key={index}
              className={`
                transition-all duration-300 rounded-lg
                ${active 
                  ? 'bg-gradient-to-br from-primary to-primary-glow scale-110 shadow-blue' 
                  : 'bg-muted/50 scale-90'
                }
              `}
              style={{
                animationDelay: `${index * 50}ms`
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating NFT cards */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce-slow opacity-20"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary/40 to-accent/40 rounded-xl rotate-12" />
          </div>
        ))}
      </div>

      {/* Main loader content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-4">
        {/* Logo area */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-primary/20 rounded-3xl animate-ping" />
          <div className="relative bg-card p-8 rounded-3xl border-2 border-primary/30 shadow-blue animate-pixel-glow">
            <img 
              src="/pxlmint-icon.png" 
              alt="NFT Market" 
              className="w-20 h-20 mx-auto"
              style={{
                filter: 'brightness(0) saturate(100%) invert(48%) sepia(93%) saturate(1352%) hue-rotate(204deg) brightness(97%) contrast(97%)'
              }}
            />
          </div>
        </div>

        {/* Brand name */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gradient-primary mb-3 animate-pixel-dance">
            NFT Market
          </h1>
          <p className="text-muted-foreground text-xl">
            {loadingMessages[currentMessage]}
          </p>
        </div>

        {/* Enhanced progress bar */}
        <div className="w-full max-w-sm mx-auto mb-6">
          <div className="bg-muted/50 rounded-full h-4 overflow-hidden border-2 border-primary/20 shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-primary via-primary-glow to-primary transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
              <div 
                className="absolute top-0 left-0 h-full w-6 bg-white/40 skew-x-12 animate-pulse"
                style={{
                  transform: `translateX(${progress * 3}px) skewX(12deg)`,
                  transition: 'transform 0.3s ease-out'
                }}
              />
            </div>
          </div>
          <div className="flex justify-between mt-3 text-sm">
            <span className="text-muted-foreground">Loading...</span>
            <span className="text-primary font-bold">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading dots with different animation */}
        <div className="flex justify-center space-x-2 mb-6">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-primary-glow animate-bounce"
              style={{
                animationDelay: `${i * 0.15}s`,
                animationDuration: '0.8s'
              }}
            />
          ))}
        </div>

        {/* Stats display */}
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-card/50 rounded-xl p-3 border border-primary/10">
            <div className="text-lg font-bold text-primary">{Math.floor(progress * 10 + 1000)}+</div>
            <div className="text-xs text-muted-foreground">NFTs</div>
          </div>
          <div className="bg-card/50 rounded-xl p-3 border border-primary/10">
            <div className="text-lg font-bold text-primary">{Math.floor(progress * 2.3 + 50)}+</div>
            <div className="text-xs text-muted-foreground">Collections</div>
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
    </div>
  );
};

export default NFTLoader;