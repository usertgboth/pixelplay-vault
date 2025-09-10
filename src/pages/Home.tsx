import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Gamepad2, Users, Wallet, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      
      {/* Hero Section */}
      <div className="px-6 pt-12 pb-8">
        <div className="max-w-md mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-orange to-accent-orange-dark rounded-2xl mb-6 shadow-orange">
            <div className="w-8 h-8 bg-background rounded-lg"></div>
          </div>
          
          <h1 className="text-4xl font-bold text-gradient-primary mb-4 tracking-tight">
            PxlMint
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Next-gen digital assets ecosystem for creators and collectors
          </p>
          
          <Link 
            to="/market" 
            className="btn-modern btn-primary inline-flex items-center gap-2"
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
            <div className="text-2xl font-bold text-accent-orange mb-1">15.2K</div>
            <div className="text-xs text-muted-foreground">Assets</div>
          </div>
          <div className="text-center py-6 border-x border-border/50">
            <div className="text-2xl font-bold text-accent-blue-light mb-1">234</div>
            <div className="text-xs text-muted-foreground">Users</div>
          </div>
          <div className="text-center py-6">
            <div className="text-2xl font-bold text-foreground mb-1">4.8M</div>
            <div className="text-xs text-muted-foreground">Volume</div>
          </div>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="px-6 space-y-3 mb-12">
        <Link to="/market" className="block group">
          <div className="card-modern group-hover:border-accent-orange/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-orange/10 rounded-xl flex items-center justify-center">
                  <TrendingUp size={20} className="text-accent-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Market</h3>
                  <p className="text-sm text-muted-foreground">Trade digital assets</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent-orange transition-colors" />
            </div>
          </div>
        </Link>

        <Link to="/games" className="block group">
          <div className="card-modern group-hover:border-accent-orange/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-blue-light/10 rounded-xl flex items-center justify-center">
                  <Gamepad2 size={20} className="text-accent-blue-light" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Games</h3>
                  <p className="text-sm text-muted-foreground">Earn through gameplay</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent-orange transition-colors" />
            </div>
          </div>
        </Link>

        <Link to="/referrals" className="block group">
          <div className="card-modern group-hover:border-accent-orange/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-orange/10 rounded-xl flex items-center justify-center">
                  <Users size={20} className="text-accent-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Referrals</h3>
                  <p className="text-sm text-muted-foreground">Invite and earn rewards</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent-orange transition-colors" />
            </div>
          </div>
        </Link>

        <Link to="/profile" className="block group">
          <div className="card-modern group-hover:border-accent-orange/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-blue-light/10 rounded-xl flex items-center justify-center">
                  <Wallet size={20} className="text-accent-blue-light" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Portfolio</h3>
                  <p className="text-sm text-muted-foreground">Manage your assets</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent-orange transition-colors" />
            </div>
          </div>
        </Link>
      </div>

      {/* Featured Collection */}
      <div className="px-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-accent-orange rounded-full"></div>
          <h2 className="text-lg font-semibold text-foreground">Featured Collection</h2>
        </div>
        
        <div className="card-glow">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Pixel Genesis</h3>
              <p className="text-sm text-muted-foreground">Limited edition collection</p>
            </div>
            <div className="flex items-center gap-1">
              <Zap size={14} className="text-accent-orange" />
              <span className="text-sm font-medium text-accent-blue-light">+24.5%</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground">Floor Price</div>
              <div className="font-semibold text-accent-orange">1.2 TON</div>
            </div>
            <Link 
              to="/market" 
              className="btn-modern btn-outline"
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