import { useState } from 'react';
import { Search, Filter, TrendingUp, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import collectionsData from '@/data/collections.json';
import nftCollectionsData from '@/data/nft-collections.json';

const Market = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('MCap');
  const [collections] = useState(collectionsData);
  const [nftCollections] = useState(nftCollectionsData);

  const filteredCollections = collections.filter(collection =>
    collection.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const topGainers = [
    { name: 'DD', change: '+120.45%', image: 'https://via.placeholder.com/50x50/8B5CF6/FFFFFF?text=DD' },
    { name: 'CANY', change: '+60.78%', image: 'https://via.placeholder.com/50x50/10B981/FFFFFF?text=CA' },
    { name: 'SHIB', change: '+45.12%', image: 'https://via.placeholder.com/50x50/F59E0B/FFFFFF?text=SH' }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      
      {/* Header */}
      <header className="px-4 py-4">
        <h1 className="text-2xl font-bold text-foreground mb-4">Market</h1>
      </header>

      {/* Top Gainers */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-bold text-foreground mb-3">Top Gainers</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {topGainers.map((item, index) => (
            <div key={index} className="bg-card rounded-xl p-3 min-w-[120px] text-center border border-border">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-8 h-8 mx-auto mb-2 rounded-full"
              />
              <div className="text-sm font-bold text-foreground">{item.name}</div>
              <div className="text-xs text-accent-games font-semibold">{item.change}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-4 mb-6">
        <div className="flex items-center gap-6">
          {['MCap', 'Hot', 'New', 'Listings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-lg font-medium transition-colors ${
                activeTab === tab 
                  ? 'text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab}
            </button>
          ))}
          <button className="ml-auto p-2 hover:bg-muted rounded-lg transition-colors">
            <Filter size={20} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Token List */}
      <div className="px-4 space-y-1">
        {filteredCollections.map((token) => (
          <div key={token.id} className="flex items-center px-4 py-3 hover:bg-card/50 rounded-lg transition-colors">
            <img 
              src={token.image} 
              alt={token.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            
            <div className="flex-1">
              <div className="font-semibold text-foreground">{token.name}</div>
              <div className="text-sm text-muted-foreground">MCap: {token.mcap}</div>
            </div>
            
            <div className="text-right">
              <div className="font-semibold text-foreground">{token.price}</div>
              <div className={`text-sm font-medium ${
                token.isPositive ? 'text-accent-games' : 'text-destructive'
              }`}>
                {token.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* NFT Collections Section */}
      <div className="px-4 mt-8">
        <h2 className="text-lg font-bold text-foreground mb-4">NFT Collections</h2>
        
        <div className="space-y-6">
          {nftCollections.map((collection) => (
            <div key={collection.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-foreground">{collection.name}</h3>
                  <span className="text-sm text-muted-foreground">{collection.author}</span>
                  {collection.verified && (
                    <CheckCircle size={16} className="text-primary" />
                  )}
                </div>
                <button className="bg-accent-referrals/20 text-accent-referrals px-3 py-1 rounded-full text-sm font-semibold">
                  {collection.button}
                </button>
              </div>
              
              <div className="flex gap-3">
                {collection.items.map((item, index) => (
                  <div key={index} className="relative">
                    <img 
                      src={item.image} 
                      alt="NFT"
                      className="w-20 h-20 rounded-xl bg-card border border-border"
                    />
                    {item.moreCount && (
                      <div className="absolute inset-0 bg-black/70 rounded-xl flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">{item.moreCount}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Market;