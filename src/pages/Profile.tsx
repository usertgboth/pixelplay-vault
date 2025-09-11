import React, { useState } from 'react';
import { User, Settings, Wallet, Gift, Trophy, Bell, Edit3, Share } from 'lucide-react';
import Navbar from '@/components/Navbar';
import NFTCard from '@/components/NFTCard';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';
import nfts from '@/data/nfts.json';

const Profile: React.FC = () => {
  const [userProfile] = useState({
    username: 'CryptoTrader',
    avatar: '/placeholder.svg',
    balance: 2.47,
    level: 12,
    xp: 2847,
    maxXp: 3000,
  });

  const [ownedNFTs] = useState(nfts.slice(0, 6));

  const claimRewards = () => {
    toast({
      title: "Rewards Claimed!",
      description: "You've received 0.025 ETH and 50 XP",
    });
  };

  const handleBuyNFT = (nft: any) => {
    toast({
      title: "Purchase Successful!",
      description: `You've purchased ${nft.name} for ${nft.price}`,
    });
  };

  const achievements = [
    { id: 1, name: 'First Trade', description: 'Complete your first trade', unlocked: true, icon: '🎯' },
    { id: 2, name: 'HODLer', description: 'Hold assets for 30 days', unlocked: true, icon: '💎' },
    { id: 3, name: 'NFT Collector', description: 'Own 10 NFTs', unlocked: false, icon: '🖼️' },
    { id: 4, name: 'Volume Trader', description: 'Trade $10k volume', unlocked: true, icon: '📈' },
    { id: 5, name: 'Social Butterfly', description: 'Refer 5 friends', unlocked: false, icon: '🦋' },
    { id: 6, name: 'Market Maker', description: 'Provide liquidity', unlocked: false, icon: '🌊' },
  ];

  const stats = [
    { label: 'NFTs Owned', value: ownedNFTs.length, icon: '🖼️' },
    { label: 'Trades', value: 847, icon: '📊' },
    { label: 'Referrals', value: 23, icon: '👥' },
    { label: 'Level', value: userProfile.level, icon: '⭐' },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-4 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">Profile</h1>
          <Button variant="outline" size="sm">
            <Settings size={16} />
          </Button>
        </div>

        {/* Profile Card */}
        <div className="card-modern mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent-blue-dark flex items-center justify-center">
              <User size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-foreground">{userProfile.username}</h2>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Edit3 size={12} />
                </Button>
              </div>
              <p className="text-muted-foreground">Level {userProfile.level} Trader</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-2xl font-bold text-foreground">{userProfile.balance} ETH</span>
                <Button variant="outline" size="sm">
                  <Wallet size={14} className="mr-1" />
                  Top up
                </Button>
              </div>
            </div>
          </div>

          {/* XP Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Experience</span>
              <span className="text-muted-foreground">{userProfile.xp} / {userProfile.maxXp} XP</span>
            </div>
            <Progress 
              value={(userProfile.xp / userProfile.maxXp) * 100} 
              className="h-2"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="card-modern text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Button 
            variant="outline" 
            className="h-20 flex-col gap-2"
            onClick={claimRewards}
          >
            <Gift size={20} />
            <span className="text-xs">Claim Rewards</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-20 flex-col gap-2"
          >
            <Share size={20} />
            <span className="text-xs">Share Profile</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-20 flex-col gap-2"
          >
            <Bell size={20} />
            <span className="text-xs">Notifications</span>
          </Button>
        </div>

        {/* My NFTs */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-foreground">My Collection</h2>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {ownedNFTs.map((nft, index) => (
              <NFTCard 
                key={index} 
                nft={nft} 
                onBuy={() => handleBuyNFT(nft)}
              />
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-foreground mb-4">Achievements</h2>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id} 
                className={`card-modern text-center ${
                  achievement.unlocked 
                    ? 'bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20' 
                    : 'opacity-60'
                }`}
              >
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <div className="font-semibold text-foreground text-sm">{achievement.name}</div>
                <div className="text-xs text-muted-foreground">{achievement.description}</div>
                {achievement.unlocked && (
                  <div className="mt-2">
                    <Trophy size={16} className="text-primary mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Account Settings */}
        <div className="card-modern mb-6">
          <h3 className="font-semibold text-foreground mb-4">Account Settings</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 rounded-xl bg-secondary hover:bg-muted transition-colors">
              <div className="flex items-center space-x-3">
                <Edit3 size={20} className="text-muted-foreground" />
                <span className="text-foreground">Edit Profile</span>
              </div>
              <span className="text-muted-foreground">→</span>
            </button>
            
            <button className="w-full flex items-center justify-between p-3 rounded-xl bg-secondary hover:bg-muted transition-colors">
              <div className="flex items-center space-x-3">
                <Bell size={20} className="text-muted-foreground" />
                <span className="text-foreground">Notifications</span>
              </div>
              <span className="text-muted-foreground">→</span>
            </button>
            
            <button className="w-full flex items-center justify-between p-3 rounded-xl bg-secondary hover:bg-muted transition-colors">
              <div className="flex items-center space-x-3">
                <Wallet size={20} className="text-muted-foreground" />
                <span className="text-foreground">Connect Wallet</span>
              </div>
              <span className="text-muted-foreground">→</span>
            </button>
          </div>
        </div>
      </div>
      
      <Navbar />
    </div>
  );
};

export default Profile;