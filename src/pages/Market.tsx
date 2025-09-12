import React, { useState, useCallback } from 'react';
import { Search, Filter, TrendingUp, TrendingDown, ExternalLink, Heart } from 'lucide-react';
import pixelMintLogo from '@/assets/pixel-mint-logo.png';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from 'recharts';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import collections from '@/data/collections.json';
import nftCollections from '@/data/nft-collections.json';

// Mock chart data for trading
const chartData = [
  { time: '00:00', price: 65234, volume: 1200000 },
  { time: '04:00', price: 65890, volume: 1800000 },
  { time: '08:00', price: 64562, volume: 2100000 },
  { time: '12:00', price: 66123, volume: 1900000 },
  { time: '16:00', price: 67445, volume: 2400000 },
  { time: '20:00', price: 66890, volume: 2000000 },
  { time: '24:00', price: 67234, volume: 1700000 },
];

const priceData = [
  { time: '1', price: 65000 },
  { time: '2', price: 65500 },
  { time: '3', price: 64800 },
  { time: '4', price: 66200 },
  { time: '5', price: 67100 },
  { time: '6', price: 67234 },
];

const Market: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('MCap');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFilter, setShowFilter] = useState(false);
  const { toast } = useToast();

  const filteredCollections = collections.filter(collection =>
    collection.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const tabs = ['MCap', 'Hot', 'New', 'Listings'];

  const handleTokenClick = useCallback((tokenName: string) => {
    toast({
      title: "Token Selected",
      description: `Opening ${tokenName} details...`,
    });
  }, [toast]);

  const handleNFTClick = useCallback((nftName: string) => {
    toast({
      title: "NFT Collection",
      description: `Viewing ${nftName} collection...`,
    });
  }, [toast]);

  const handleFilter = useCallback(() => {
    setShowFilter(!showFilter);
    toast({
      title: "Filter",
      description: showFilter ? "Filter closed" : "Filter options opened",
    });
  }, [showFilter, toast]);

  const toggleFavorite = useCallback((itemName: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName];
      
      toast({
        title: prev.includes(itemName) ? "Removed from Favorites" : "Added to Favorites",
        description: `${itemName} ${prev.includes(itemName) ? 'removed from' : 'added to'} your watchlist`,
      });
      
      return newFavorites;
    });
  }, [toast]);

  const handlePixelMint = useCallback(() => {
    toast({
      title: "Pixel Mint",
      description: "Redirecting to minting page...",
    });
  }, [toast]);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-4 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Market</h1>
            <p className="text-sm text-muted-foreground mt-1">Trading & Analytics</p>
          </div>
          <div className="bg-primary/10 rounded-xl px-3 py-1.5">
            <span className="text-primary text-sm font-medium">Live</span>
          </div>
        </div>


        {/* Pixel Mint Launch Banner */}
        <div 
          className="card-modern mb-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 cursor-pointer hover:scale-[1.02] transition-transform"
          onClick={handlePixelMint}
        >
          <div className="text-center py-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                <img src={pixelMintLogo} alt="Pixel Mint" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Pixel Mint Launched!</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Exclusive pixel art collection now available for minting
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="text-primary font-semibold">Starting at 0.1 ETH</div>
              <div className="text-muted-foreground">•</div>
              <div className="text-muted-foreground">Limited Supply: 1000</div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search tokens..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-card border-border"
          />
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex bg-secondary rounded-xl p-1">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <Button variant="outline" size="sm" onClick={handleFilter}>
            <Filter size={16} className="mr-1" />
            Filter
          </Button>
        </div>

        {/* Tokens List */}
        <div className="space-y-3 mb-6">
          {filteredCollections.slice(0, 10).map((collection, index) => (
            <div 
              key={index} 
              className="card-modern cursor-pointer hover:scale-[1.01] transition-transform"
              onClick={() => handleTokenClick(collection.name)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {collection.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{collection.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      MCap: ${collection.mcap}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="font-semibold text-foreground">${collection.price}</div>
                    <div className={`text-sm ${
                      collection.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {collection.change}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(collection.name);
                    }}
                    className="p-1 hover:bg-primary/10 rounded-full transition-colors"
                  >
                    <Heart 
                      size={16} 
                      className={favorites.includes(collection.name) ? 'fill-red-500 text-red-500' : 'text-muted-foreground'} 
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mini Volume Chart */}
        <div className="card-modern mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-foreground">24h Volume</h3>
            <span className="text-sm text-muted-foreground">$89.2B</span>
          </div>
          <div className="h-24">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <Line 
                  type="monotone" 
                  dataKey="volume" 
                  stroke="hsl(221, 83%, 53%)" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* NFT Collections */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-foreground mb-4">Trending NFTs</h2>
          <div className="space-y-3">
            {nftCollections.slice(0, 5).map((collection, index) => (
              <div 
                key={index} 
                className="card-modern cursor-pointer hover:scale-[1.01] transition-transform"
                onClick={() => handleNFTClick(collection.name)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <span className="text-primary font-bold">#{index + 1}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{collection.name}</h3>
                        {collection.verified && (
                          <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">by {collection.author}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="font-semibold text-foreground">2.{index + 1} ETH</div>
                      <div className="text-sm text-muted-foreground">{(Math.random() * 100).toFixed(1)} Vol</div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toast({
                          title: "Opening Collection",
                          description: `Viewing ${collection.name} on OpenSea...`,
                        });
                      }}
                      className="p-1 hover:bg-primary/10 rounded-full transition-colors"
                    >
                      <ExternalLink size={16} className="text-muted-foreground" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Navbar />
    </div>
  );
};

export default Market;