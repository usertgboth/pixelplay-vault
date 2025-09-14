import React, { useState, useCallback } from 'react';
import { Search, Mic, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

// Trending collections data matching the reference design
const trendingCollections = [
  {
    id: 1,
    name: "Panda Tribe",
    items: "8.0K Items",
    price: "€ 0,13",
    image: "bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600",
    icon: "🏔️"
  },
  {
    id: 2,
    name: "Colorful Cats",
    items: "5.2K Items", 
    price: "€ 0,25",
    image: "bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400",
    icon: "🐱"
  },
  {
    id: 3,
    name: "Neon Ninjas",
    items: "5.2K Items",
    price: "€ 0,18", 
    image: "bg-gradient-to-br from-purple-600 via-pink-500 to-red-500",
    icon: "🥷"
  },
  {
    id: 4,
    name: "Crypto Garden",
    items: "2.3K Items",
    price: "€ 0,32",
    image: "bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600",
    icon: "🌿"
  }
];

// Market NFT listings data
const marketListings = [
  {
    id: 1,
    name: "Blue Panda #1201",
    collection: "Panda Tribe",
    price: "€ 1.20",
    change: "+1,9%",
    positive: true,
    avatar: "BP"
  },
  {
    id: 2,
    name: "Colorful Cat #3720", 
    collection: "Colorful Cats",
    price: "€ 0.22",
    change: "+2,1%",
    positive: true,
    avatar: "CC"
  },
  {
    id: 3,
    name: "Neon Ninja #1519",
    collection: "Neon Ninjas", 
    price: "€ 0.18",
    change: "-0,8%",
    positive: false,
    avatar: "NN"
  },
  {
    id: 4,
    name: "Crypto Garden #245",
    collection: "Crypto Garden",
    price: "€ 0.45",
    change: "-2,3%",
    positive: false,
    avatar: "CG"
  }
];

const categories = ['Art', 'PFP', 'Gaming', 'Music', 'AI'];
const marketTabs = ['All', 'Trending', 'New', 'Listed'];

const Market: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Art');
  const [activeMarketTab, setActiveMarketTab] = useState('All');
  const { toast } = useToast();

  const handleCollectionClick = useCallback((collectionName: string) => {
    toast({
      title: "Collection Selected",
      description: `Opening ${collectionName}...`,
    });
  }, [toast]);

  const handleNFTClick = useCallback((nftName: string) => {
    toast({
      title: "NFT Selected",
      description: `Viewing ${nftName}...`,
    });
  }, [toast]);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-4 pt-8">
        {/* Header with Logo */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">PX</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground">Pxlmint</h1>
          </div>
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
            <Mic size={22} className="text-primary" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-14 bg-secondary/50 border-none rounded-2xl text-lg text-foreground placeholder:text-muted-foreground shadow-sm"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex gap-8 mb-8 overflow-x-auto scrollbar-hide">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-lg font-semibold whitespace-nowrap pb-2 transition-colors ${
                activeCategory === category
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Trending Collections */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Trending Collections</h2>
            <button className="flex items-center gap-2 text-primary text-lg font-semibold hover:opacity-80 transition-opacity">
              See all
              <ChevronRight size={18} />
            </button>
          </div>
          
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {trendingCollections.map(collection => (
              <div 
                key={collection.id}
                className="flex-shrink-0 w-48 cursor-pointer group"
                onClick={() => handleCollectionClick(collection.name)}
              >
                <div className={`${collection.image} h-28 rounded-3xl flex items-center justify-center text-5xl mb-3 shadow-lg group-hover:scale-105 transition-transform duration-200`}>
                  {collection.icon}
                </div>
                <div className="px-1">
                  <h3 className="font-bold text-foreground text-lg mb-1 truncate">{collection.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{collection.items}</p>
                  <p className="text-sm font-semibold text-muted-foreground">{collection.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Market</h2>
          </div>
          
          {/* Market Tabs */}
          <div className="flex gap-8 mb-6 border-b border-border">
            {marketTabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveMarketTab(tab)}
                className={`text-lg font-semibold pb-3 transition-colors ${
                  activeMarketTab === tab
                    ? 'text-primary border-b-2 border-primary -mb-px'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* NFT Listings */}
          <div className="space-y-4">
            {marketListings.map(listing => (
              <div 
                key={listing.id}
                className="flex items-center justify-between cursor-pointer hover:bg-secondary/30 rounded-2xl p-4 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                onClick={() => handleNFTClick(listing.name)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-lg">
                      {listing.avatar}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">{listing.name}</h3>
                    <p className="text-sm text-muted-foreground">{listing.collection}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-foreground text-lg mb-1">{listing.price}</p>
                  <p className={`text-sm font-semibold ${
                    listing.positive ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {listing.change}
                  </p>
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