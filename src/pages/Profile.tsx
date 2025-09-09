import { useState } from 'react';
import { User, Wallet, Trophy, Settings, Edit3 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import NFTCard from '@/components/NFTCard';
import nftsData from '@/data/nfts.json';
import { useToast } from '@/hooks/use-toast';

const Profile = () => {
  const [user] = useState({
    username: 'PixelMaster',
    avatar: 'https://via.placeholder.com/100x100/8B5CF6/FFFFFF?text=PM',
    balance: '12.5 TON',
    level: 3,
    xp: 1250,
    nextLevelXP: 2000
  });
  
  const [ownedNFTs] = useState(nftsData.slice(0, 2));
  const { toast } = useToast();

  const claimRewards = () => {
    toast({
      title: "Rewards Claimed!",
      description: "You received 50 bonus points!",
      duration: 3000,
    });
  };

  const handleBuyNFT = (nft: any) => {
    toast({
      title: "NFT Purchased!",
      description: `You bought ${nft.name} for ${nft.price}`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      
      {/* Header */}
      <header className="px-4 py-6">
        <div className="flex items-center gap-2 mb-2">
          <User size={24} className="text-accent-profile" />
          <h1 className="text-2xl font-bold text-gradient-profile">Profile</h1>
        </div>
        <p className="text-muted-foreground">Manage your account and collection</p>
      </header>

      {/* User Info */}
      <div className="px-4 mb-8">
        <div className="card-pixel text-center">
          <div className="relative inline-block mb-4">
            <img 
              src={user.avatar} 
              alt="Avatar"
              className="w-20 h-20 rounded-full mx-auto"
            />
            <button className="absolute bottom-0 right-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <Edit3 size={12} className="text-white" />
            </button>
          </div>
          
          <h2 className="text-xl font-bold text-foreground mb-1">{user.username}</h2>
          <p className="text-muted-foreground text-sm mb-4">Level {user.level} Pixel Collector</p>
          
          <div className="flex justify-center items-center gap-2 mb-4">
            <Wallet size={16} className="text-primary" />
            <span className="text-lg font-bold text-primary">{user.balance}</span>
          </div>
          
          {/* XP Progress */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-muted-foreground mb-1">
              <span>XP Progress</span>
              <span>{user.xp}/{user.nextLevelXP}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-accent-profile h-2 rounded-full transition-all duration-300"
                style={{ width: `${(user.xp / user.nextLevelXP) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <button 
            onClick={claimRewards}
            className="btn-pixel btn-profile w-full"
          >
            Claim Daily Rewards
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 mb-8">
        <div className="grid grid-cols-3 gap-3">
          <div className="card-pixel text-center">
            <div className="text-lg font-bold text-accent-market">{ownedNFTs.length}</div>
            <div className="text-xs text-muted-foreground">NFTs Owned</div>
          </div>
          <div className="card-pixel text-center">
            <div className="text-lg font-bold text-accent-games">47</div>
            <div className="text-xs text-muted-foreground">Games Played</div>
          </div>
          <div className="card-pixel text-center">
            <div className="text-lg font-bold text-accent-referrals">8</div>
            <div className="text-xs text-muted-foreground">Referrals</div>
          </div>
        </div>
      </div>

      {/* NFT Collection */}
      <div className="px-4 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Trophy size={20} className="text-accent-referrals" />
          <h2 className="text-lg font-bold text-foreground">My Collection</h2>
        </div>
        
        {ownedNFTs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ownedNFTs.map((nft) => (
              <NFTCard
                key={nft.id}
                nft={nft}
                onBuy={() => handleBuyNFT(nft)}
              />
            ))}
          </div>
        ) : (
          <div className="card-pixel text-center py-8">
            <div className="text-4xl mb-2">🎨</div>
            <h3 className="font-semibold text-foreground mb-2">No NFTs Yet</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Start collecting by playing games or visiting the market
            </p>
            <button className="btn-pixel btn-market">
              Explore Market
            </button>
          </div>
        )}
      </div>

      {/* Achievement Badges */}
      <div className="px-4 mb-8">
        <h2 className="text-lg font-bold text-foreground mb-4">Achievements</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="card-pixel text-center">
            <div className="text-2xl mb-2">🏆</div>
            <div className="text-sm font-semibold text-foreground">First NFT</div>
            <div className="text-xs text-accent-games">Unlocked</div>
          </div>
          <div className="card-pixel text-center">
            <div className="text-2xl mb-2">🎮</div>
            <div className="text-sm font-semibold text-foreground">Game Master</div>
            <div className="text-xs text-accent-games">Unlocked</div>
          </div>
          <div className="card-pixel text-center opacity-50">
            <div className="text-2xl mb-2">👑</div>
            <div className="text-sm font-semibold text-foreground">Collector</div>
            <div className="text-xs text-muted-foreground">Locked</div>
          </div>
          <div className="card-pixel text-center opacity-50">
            <div className="text-2xl mb-2">💎</div>
            <div className="text-sm font-semibold text-foreground">Whale</div>
            <div className="text-xs text-muted-foreground">Locked</div>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="px-4">
        <div className="card-pixel">
          <div className="flex items-center gap-4 mb-4">
            <Settings size={20} className="text-muted-foreground" />
            <h3 className="font-semibold text-foreground">Account Settings</h3>
          </div>
          
          <div className="space-y-3">
            <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
              <div className="font-medium text-foreground">Edit Profile</div>
              <div className="text-sm text-muted-foreground">Change username and avatar</div>
            </button>
            
            <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
              <div className="font-medium text-foreground">Notification Settings</div>
              <div className="text-sm text-muted-foreground">Manage your notifications</div>
            </button>
            
            <button className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors">
              <div className="font-medium text-foreground">Connect Wallet</div>
              <div className="text-sm text-muted-foreground">Link your TON wallet</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;