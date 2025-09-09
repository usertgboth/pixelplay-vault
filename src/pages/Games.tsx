import { useState } from 'react';
import { Gamepad2, Zap, Trophy, Gift } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useToast } from '@/hooks/use-toast';
import nftsData from '@/data/nfts.json';

const Games = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [minedNFTs, setMinedNFTs] = useState<any[]>([]);
  const [clicks, setClicks] = useState(0);
  const { toast } = useToast();

  const mineNFT = () => {
    if (isPlaying) return;
    
    setIsPlaying(true);
    setClicks(prev => prev + 1);

    // Animation delay
    setTimeout(() => {
      const randomNFT = nftsData[Math.floor(Math.random() * nftsData.length)];
      setMinedNFTs(prev => [...prev, randomNFT]);
      
      toast({
        title: "🎉 NFT Mined!",
        description: `You found ${randomNFT.name}!`,
        duration: 3000,
      });
      
      setIsPlaying(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      
      {/* Header */}
      <header className="px-4 py-6">
        <div className="flex items-center gap-2 mb-2">
          <Gamepad2 size={24} className="text-accent-games" />
          <h1 className="text-2xl font-bold text-gradient-games">Pixel Games</h1>
        </div>
        <p className="text-muted-foreground">Click to mine NFTs and earn rewards</p>
      </header>

      {/* Game Stats */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="card-pixel text-center">
            <div className="text-lg font-bold text-accent-games">{clicks}</div>
            <div className="text-xs text-muted-foreground">Clicks</div>
          </div>
          <div className="card-pixel text-center">
            <div className="text-lg font-bold text-primary">{minedNFTs.length}</div>
            <div className="text-xs text-muted-foreground">NFTs Mined</div>
          </div>
          <div className="card-pixel text-center">
            <div className="text-lg font-bold text-accent-referrals">Level 1</div>
            <div className="text-xs text-muted-foreground">Miner Level</div>
          </div>
        </div>
      </div>

      {/* Mining Game */}
      <div className="px-4 mb-8">
        <div className="card-pixel text-center py-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Click-to-Mine NFT</h2>
          
          <div className="relative mb-6">
            <button
              onClick={mineNFT}
              disabled={isPlaying}
              className={`w-32 h-32 mx-auto rounded-xl transition-all duration-300 ${
                isPlaying 
                  ? 'bg-primary/50 scale-95 animate-pulse' 
                  : 'bg-primary hover:bg-primary-glow hover:scale-105 active:scale-95'
              } flex items-center justify-center cursor-pointer disabled:cursor-not-allowed`}
            >
              <div className="text-4xl">
                {isPlaying ? '⚡' : '💎'}
              </div>
            </button>
            
            {isPlaying && (
              <div className="absolute -inset-4 border-2 border-primary rounded-xl animate-ping"></div>
            )}
          </div>
          
          <p className="text-muted-foreground mb-2">
            {isPlaying ? 'Mining NFT...' : 'Click the crystal to mine NFT!'}
          </p>
          
          <div className="btn-pixel btn-games inline-flex items-center gap-2">
            <Zap size={16} />
            {isPlaying ? 'Mining...' : 'Ready to Mine'}
          </div>
        </div>
      </div>

      {/* Recent Mines */}
      {minedNFTs.length > 0 && (
        <div className="px-4 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Trophy size={20} className="text-accent-referrals" />
            <h2 className="text-lg font-bold text-foreground">Your Mined NFTs</h2>
          </div>
          
          <div className="space-y-3">
            {minedNFTs.slice(-3).reverse().map((nft, index) => (
              <div key={index} className="card-pixel flex items-center gap-4 float-animation">
                <img 
                  src={nft.image} 
                  alt={nft.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{nft.name}</h3>
                  <p className="text-sm text-muted-foreground">{nft.collection}</p>
                  <p className="text-sm text-primary font-semibold">{nft.price}</p>
                </div>
                <div className="btn-pixel btn-games text-sm px-3 py-1">
                  <Gift size={14} className="mr-1" />
                  Collect
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Game Modes */}
      <div className="px-4">
        <h2 className="text-lg font-bold text-foreground mb-4">Game Modes</h2>
        
        <div className="space-y-3">
          <div className="card-pixel flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-games/20 rounded-lg flex items-center justify-center">
              <Zap size={20} className="text-accent-games" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Speed Mining</h3>
              <p className="text-sm text-muted-foreground">Mine NFTs as fast as you can</p>
            </div>
            <div className="text-sm text-accent-referrals font-semibold">Coming Soon</div>
          </div>
          
          <div className="card-pixel flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-market/20 rounded-lg flex items-center justify-center">
              <Trophy size={20} className="text-accent-market" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Tournament Mode</h3>
              <p className="text-sm text-muted-foreground">Compete with other players</p>
            </div>
            <div className="text-sm text-accent-referrals font-semibold">Coming Soon</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;