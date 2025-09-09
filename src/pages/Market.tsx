import { useState } from 'react';
import { Search, Filter, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import CollectionCard from '@/components/CollectionCard';
import collectionsData from '@/data/collections.json';

const Market = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [collections] = useState(collectionsData);

  const filteredCollections = collections.filter(collection =>
    collection.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCollectionClick = (collection: any) => {
    // In a real app, this would navigate to collection details
    console.log('Viewing collection:', collection.name);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      
      {/* Header */}
      <header className="px-4 py-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={24} className="text-accent-market" />
          <h1 className="text-2xl font-bold text-gradient-market">NFT Market</h1>
        </div>
        
        {/* Search */}
        <div className="relative mb-4">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search collections..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Filter */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <div className="btn-pixel btn-market text-sm px-3 py-1 cursor-pointer">Hot</div>
            <div className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground cursor-pointer">New</div>
            <div className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground cursor-pointer">Volume</div>
          </div>
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <Filter size={16} className="text-muted-foreground" />
          </button>
        </div>
      </header>

      {/* Top Gainers */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-bold text-foreground mb-3">Top Gainers</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          <div className="card-pixel min-w-[160px] text-center">
            <img 
              src="https://via.placeholder.com/60x60/8B5CF6/FFFFFF?text=DD" 
              alt="DD"
              className="w-12 h-12 mx-auto mb-2 rounded-lg"
            />
            <div className="text-sm font-semibold">DD</div>
            <div className="text-xs text-accent-games">+120.45%</div>
          </div>
          <div className="card-pixel min-w-[160px] text-center">
            <img 
              src="https://via.placeholder.com/60x60/10B981/FFFFFF?text=CANY" 
              alt="CANY"
              className="w-12 h-12 mx-auto mb-2 rounded-lg"
            />
            <div className="text-sm font-semibold">CANY</div>
            <div className="text-xs text-accent-games">+60.78%</div>
          </div>
          <div className="card-pixel min-w-[160px] text-center">
            <img 
              src="https://via.placeholder.com/60x60/F59E0B/FFFFFF?text=SHIB" 
              alt="SHIB"
              className="w-12 h-12 mx-auto mb-2 rounded-lg"
            />
            <div className="text-sm font-semibold">SHIB</div>
            <div className="text-xs text-accent-games">+45.12%</div>
          </div>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">Collections</h2>
          <span className="text-sm text-muted-foreground">{filteredCollections.length} collections</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCollections.map((collection) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              onClick={() => handleCollectionClick(collection)}
            />
          ))}
        </div>
      </div>

      {/* Market Stats */}
      <div className="px-4 mt-8">
        <h2 className="text-lg font-bold text-foreground mb-4">Market Stats</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="card-pixel text-center">
            <div className="text-xl font-bold text-primary">$2.4M</div>
            <div className="text-xs text-muted-foreground">24h Volume</div>
          </div>
          <div className="card-pixel text-center">
            <div className="text-xl font-bold text-accent-games">1,234</div>
            <div className="text-xs text-muted-foreground">Active Traders</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;