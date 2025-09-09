import { Badge } from '@/components/ui/badge';
import { Star, Zap } from 'lucide-react';

interface NFT {
  id: number;
  name: string;
  collection: string;
  price: string;
  image: string;
  rarity: string;
  attributes: Array<{trait: string; value: string}>;
}

interface NFTCardProps {
  nft: NFT;
  onBuy?: () => void;
}

const NFTCard = ({ nft, onBuy }: NFTCardProps) => {
  const getRarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case 'legendary': return 'bg-gradient-to-r from-yellow-400 to-orange-500';
      case 'epic': return 'bg-gradient-to-r from-purple-400 to-pink-500';
      case 'rare': return 'bg-gradient-to-r from-blue-400 to-indigo-500';
      default: return 'bg-gradient-to-r from-gray-400 to-gray-600';
    }
  };

  return (
    <div className="card-pixel group">
      <div className="relative overflow-hidden rounded-lg mb-3">
        <img 
          src={nft.image} 
          alt={nft.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        <div className="absolute top-2 left-2">
          <Badge className={`${getRarityColor(nft.rarity)} text-white border-0`}>
            <Star size={12} className="mr-1" />
            {nft.rarity}
          </Badge>
        </div>
        
        <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded-full">
          <span className="text-xs text-white font-bold">#{nft.id}</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <div>
          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
            {nft.name}
          </h3>
          <p className="text-muted-foreground text-sm">{nft.collection}</p>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {nft.attributes.slice(0, 2).map((attr, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {attr.trait}: {attr.value}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-muted-foreground text-sm">Price:</span>
            <div className="font-bold text-xl text-primary flex items-center gap-1">
              <Zap size={16} className="text-yellow-400" />
              {nft.price}
            </div>
          </div>
          
          <button 
            className="btn-pixel btn-market"
            onClick={onBuy}
          >
            Buy NFT
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;