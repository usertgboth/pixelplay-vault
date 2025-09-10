import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Gamepad2, Users, BarChart3, Wallet, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      
      {/* Hero Section */}
      <div className="px-6 pt-12 pb-8">
        <div className="max-w-md mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-foreground/5 rounded-2xl mb-6 backdrop-blur-sm border border-foreground/10">
            <div className="w-8 h-8 bg-foreground rounded-lg"></div>
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4 tracking-tight">
            PxlMint
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Digital assets ecosystem for the next generation of creators and collectors
          </p>
          
          <Link 
            to="/market" 
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-medium hover:bg-foreground/90 transition-all duration-200 hover:scale-[1.02]"
          >
            Start Trading
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 mb-12">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center py-6">
            <div className="text-2xl font-bold text-foreground mb-1">15.2K</div>
            <div className="text-xs text-muted-foreground">Assets</div>
          </div>
          <div className="text-center py-6 border-x border-border/50">
            <div className="text-2xl font-bold text-foreground mb-1">234</div>
            <div className="text-xs text-muted-foreground">Users</div>
          </div>
          <div className="text-center py-6">
            <div className="text-2xl font-bold text-foreground mb-1">4.8M</div>
            <div className="text-xs text-muted-foreground">Volume</div>
          </div>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="px-6 space-y-3">
        <Link to="/market" className="block group">
          <div className="flex items-center justify-between p-6 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/60 transition-all duration-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-foreground/5 rounded-xl flex items-center justify-center">
                <TrendingUp size={20} className="text-foreground/70" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Market</h3>
                <p className="text-sm text-muted-foreground">Trade digital assets</p>
              </div>
            </div>
            <ArrowRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
        </Link>

        <Link to="/games" className="block group">
          <div className="flex items-center justify-between p-6 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/60 transition-all duration-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-foreground/5 rounded-xl flex items-center justify-center">
                <Gamepad2 size={20} className="text-foreground/70" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Games</h3>
                <p className="text-sm text-muted-foreground">Earn through gameplay</p>
              </div>
            </div>
            <ArrowRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
        </Link>

        <Link to="/referrals" className="block group">
          <div className="flex items-center justify-between p-6 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/60 transition-all duration-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-foreground/5 rounded-xl flex items-center justify-center">
                <Users size={20} className="text-foreground/70" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Referrals</h3>
                <p className="text-sm text-muted-foreground">Invite and earn rewards</p>
              </div>
            </div>
            <ArrowRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
        </Link>

        <Link to="/profile" className="block group">
          <div className="flex items-center justify-between p-6 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/60 transition-all duration-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-foreground/5 rounded-xl flex items-center justify-center">
                <Wallet size={20} className="text-foreground/70" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Portfolio</h3>
                <p className="text-sm text-muted-foreground">Manage your assets</p>
              </div>
            </div>
            <ArrowRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
        </Link>
      </div>

      {/* Featured */}
      <div className="px-6 mt-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-foreground rounded-full"></div>
          <h2 className="text-lg font-semibold text-foreground">Featured Collection</h2>
        </div>
        
        <div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Pixel Genesis</h3>
              <p className="text-sm text-muted-foreground">Limited edition collection</p>
            </div>
            <div className="flex items-center gap-1">
              <Zap size={14} className="text-accent-referrals" />
              <span className="text-sm font-medium text-accent-games">+24.5%</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground">Floor Price</div>
              <div className="font-semibold text-foreground">1.2 TON</div>
            </div>
            <Link 
              to="/market" 
              className="px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;