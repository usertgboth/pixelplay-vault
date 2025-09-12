import React, { useEffect, useState } from 'react';
import pxlmintIcon from '@/assets/pxlmint-icon.png';

interface PxlMintLoaderProps {
  onComplete?: () => void;
  duration?: number;
}

const PxlMintLoader: React.FC<PxlMintLoaderProps> = ({ onComplete, duration = 3000 }) => {
  const [progress, setProgress] = useState(0);
  const [pixelGrid, setPixelGrid] = useState<boolean[]>([]);

  useEffect(() => {
    // Create initial pixel grid
    const gridSize = 64;
    const initialGrid = Array(gridSize).fill(false);
    setPixelGrid(initialGrid);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onComplete?.();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, duration / 50);

    // Pixel animation
    const pixelInterval = setInterval(() => {
      setPixelGrid(prev => {
        const newGrid = [...prev];
        const randomIndex = Math.floor(Math.random() * newGrid.length);
        newGrid[randomIndex] = !newGrid[randomIndex];
        return newGrid;
      });
    }, 100);

    return () => {
      clearInterval(progressInterval);
      clearInterval(pixelInterval);
    };
  }, [duration, onComplete]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center">
      {/* Animated pixel background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-1 w-full h-full p-4">
          {pixelGrid.map((active, index) => (
            <div
              key={index}
              className={`
                transition-all duration-300 rounded-sm
                ${active ? 'bg-primary scale-110' : 'bg-muted scale-90'}
              `}
            />
          ))}
        </div>
      </div>

      {/* Main loader content */}
      <div className="relative z-10 text-center">
        {/* Pulsing logo */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-primary/20 rounded-3xl animate-ping" />
          <div className="relative bg-card p-6 rounded-3xl border border-primary/20 shadow-blue">
            <img 
              src={pxlmintIcon} 
              alt="PxlMint" 
              className="w-16 h-16 mx-auto filter brightness-0 invert-0"
              style={{
                filter: 'brightness(0) saturate(100%) invert(48%) sepia(93%) saturate(1352%) hue-rotate(204deg) brightness(97%) contrast(97%)'
              }}
            />
          </div>
        </div>

        {/* Brand name with pixel effect */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gradient-primary mb-2 animate-pulse">
            PxlMint
          </h1>
          <p className="text-muted-foreground text-lg">
            Minting pixels into art...
          </p>
        </div>

        {/* Progress bar with pixel style */}
        <div className="w-80 mx-auto mb-4">
          <div className="bg-muted rounded-full h-3 overflow-hidden border border-primary/20">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>Loading...</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '0.6s'
              }}
            />
          ))}
        </div>

        {/* Fun loading messages */}
        <div className="mt-6 text-sm text-muted-foreground">
          {progress < 25 && "Initializing pixel engine..."}
          {progress >= 25 && progress < 50 && "Loading art collections..."}
          {progress >= 50 && progress < 75 && "Connecting to blockchain..."}
          {progress >= 75 && progress < 100 && "Almost ready!"}
          {progress >= 100 && "Welcome to PxlMint! 🎨"}
        </div>
      </div>

      {/* Floating pixels */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-sm animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PxlMintLoader;