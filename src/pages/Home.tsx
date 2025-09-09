import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp, Gamepad2, Users, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      
      {/* Header */}
      <header className="px-4 py-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Sparkles size={20} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gradient-market">pxlmint</h1>
        </div>
        <p className="text-muted-foreground">Create • Trade • Play</p>
      </header>

      {/* Hero Banner */}
      <div className="mx-4 mb-8">
        <div className="card-pixel bg-gradient-to-r from-purple-900/50 to-blue-900/50 text-center py-8 pulse-glow">
          <div className="text-4xl mb-2">🎨</div>
          <h2 className="text-xl font-bold mb-2">Welcome to the Pixel Universe</h2>
          <p className="text-muted-foreground mb-4">Mint, trade and collect unique pixel art NFTs</p>
          <Link to="/market" className="btn-pixel btn-market inline-flex items-center gap-2">
            <TrendingUp size={16} />
            Explore Market
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-4 mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="card-pixel text-center">
            <div className="text-2xl font-bold text-primary">15.2K</div>
            <div className="text-sm text-muted-foreground">NFTs Traded</div>
          </div>
          <div className="card-pixel text-center">
            <div className="text-2xl font-bold text-accent-games">234</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="px-4 space-y-4">
        <h3 className="text-lg font-bold text-foreground">What can you do?</h3>
        
        <Link to="/market" className="block">
          <div className="card-pixel flex items-center gap-4 hover:border-accent-market">
            <div className="w-12 h-12 bg-accent-market/20 rounded-lg flex items-center justify-center">
              <TrendingUp size={20} className="text-accent-market" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground">NFT Market</h4>
              <p className="text-sm text-muted-foreground">Buy and sell unique pixel art NFTs</p>
            </div>
          </div>
        </Link>

        <Link to="/games" className="block">
          <div className="card-pixel flex items-center gap-4 hover:border-accent-games">
            <div className="w-12 h-12 bg-accent-games/20 rounded-lg flex items-center justify-center">
              <Gamepad2 size={20} className="text-accent-games" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground">Play Games</h4>
              <p className="text-sm text-muted-foreground">Mine NFTs through fun pixel games</p>
            </div>
          </div>
        </Link>

        <Link to="/referrals" className="block">
          <div className="card-pixel flex items-center gap-4 hover:border-accent-referrals">
            <div className="w-12 h-12 bg-accent-referrals/20 rounded-lg flex items-center justify-center">
              <Users size={20} className="text-accent-referrals" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground">Referral System</h4>
              <p className="text-sm text-muted-foreground">Earn rewards by inviting friends</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Hot Collection */}
      <div className="px-4 mt-8">
        <div className="flex items-center gap-2 mb-4">
          <Zap size={20} className="text-yellow-400" />
          <h3 className="text-lg font-bold text-foreground">Hot Collection</h3>
        </div>
        
        <div className="card-pixel">
          <div className="flex items-center gap-4">
            <img 
              src="https://via.placeholder.com/80x80/8B5CF6/FFFFFF?text=🐕" 
              alt="Pixel Dogs"
              className="w-16 h-16 rounded-lg"
            />
            <div className="flex-1">
              <h4 className="font-bold text-foreground">Pixel Dogs</h4>
              <p className="text-sm text-muted-foreground">Floor: 1.2 TON</p>
              <p className="text-sm text-accent-games">+120.45% today</p>
            </div>
            <Link to="/market" className="btn-pixel btn-market text-sm">
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;