import { Flame, TrendingUp } from 'lucide-react';

interface Collection {
  id: number;
  name: string;
  supply: number;
  floor: string;
  volume: string;
  image: string;
  description: string;
  items: number;
}

interface CollectionCardProps {
  collection: Collection;
  onClick: () => void;
}

const CollectionCard = ({ collection, onClick }: CollectionCardProps) => {
  return (
    <div 
      className="card-pixel cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg mb-3">
        <img 
          src={collection.image} 
          alt={collection.name}
          className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded-full flex items-center gap-1">
          <Flame size={12} className="text-orange-400" />
          <span className="text-xs text-white font-bold">{collection.items}</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
          {collection.name}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2">
          {collection.description}
        </p>
        
        <div className="flex justify-between items-center text-sm">
          <div>
            <span className="text-muted-foreground">Supply:</span>
            <span className="ml-1 font-semibold">{collection.supply.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp size={12} className="text-green-400" />
            <span className="text-green-400 font-semibold">{collection.volume}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-muted-foreground text-sm">Floor:</span>
            <span className="ml-1 font-bold text-primary">{collection.floor}</span>
          </div>
          
          <button className="btn-pixel btn-market text-sm px-4 py-1">
            Get on Market
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;