import React, { useState } from 'react';
import { Share2, Copy, Users, Gift, Star, Crown, Trophy } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';

const Referrals: React.FC = () => {
  const [referralCode] = useState('CRYPTO2024');
  const [referralStats] = useState({
    totalReferrals: 23,
    activeReferrals: 18,
    totalEarned: 1.47,
    thisMonth: 0.32,
  });

  const [referralList] = useState([
    { username: 'Alice_Crypto', joinDate: '2024-01-15', status: 'Active', earned: 0.15 },
    { username: 'Bob_Trader', joinDate: '2024-01-12', status: 'Active', earned: 0.25 },
    { username: 'Charlie_NFT', joinDate: '2024-01-08', status: 'Inactive', earned: 0.05 },
    { username: 'Diana_DeFi', joinDate: '2024-01-05', status: 'Active', earned: 0.35 },
  ]);

  const milestones = [
    { count: 5, reward: '0.1 ETH', completed: true, icon: '🎯' },
    { count: 10, reward: '0.25 ETH', completed: true, icon: '🏆' },
    { count: 25, reward: '0.5 ETH', completed: false, icon: '💎' },
    { count: 50, reward: '1 ETH', completed: false, icon: '👑' },
  ];

  const copyReferralLink = () => {
    const link = `https://pixelvault.app/ref/${referralCode}`;
    navigator.clipboard.writeText(link);
    toast({
      title: "Link Copied!",
      description: "Referral link copied to clipboard",
    });
  };

  const shareReferralLink = () => {
    const link = `https://pixelvault.app/ref/${referralCode}`;
    const text = `Join me on PixelVault and start trading crypto & NFTs! Use my referral link: ${link}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Join PixelVault',
        text: text,
        url: link,
      });
    } else {
      navigator.clipboard.writeText(text);
      toast({
        title: "Text Copied!",
        description: "Share message copied to clipboard",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-4 pt-6">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent-blue-dark flex items-center justify-center">
            <Users size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Referral Program</h1>
          <p className="text-muted-foreground">Earn rewards by inviting friends</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="card-modern text-center">
            <div className="text-2xl font-bold text-foreground">{referralStats.totalReferrals}</div>
            <div className="text-sm text-muted-foreground">Total Referrals</div>
          </div>
          <div className="card-modern text-center">
            <div className="text-2xl font-bold text-foreground">{referralStats.totalEarned} ETH</div>
            <div className="text-sm text-muted-foreground">Total Earned</div>
          </div>
          <div className="card-modern text-center">
            <div className="text-2xl font-bold text-foreground">{referralStats.activeReferrals}</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="card-modern text-center">
            <div className="text-2xl font-bold text-foreground">{referralStats.thisMonth} ETH</div>
            <div className="text-sm text-muted-foreground">This Month</div>
          </div>
        </div>

        {/* Referral Link */}
        <div className="card-modern mb-6">
          <h3 className="font-semibold text-foreground mb-4">Your Referral Link</h3>
          <div className="flex items-center gap-2 p-3 bg-secondary rounded-xl mb-4">
            <code className="flex-1 text-sm text-foreground font-mono">
              pixelvault.app/ref/{referralCode}
            </code>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={copyReferralLink}
              className="h-8 w-8 p-0"
            >
              <Copy size={16} />
            </Button>
          </div>
          <Button 
            onClick={shareReferralLink} 
            className="w-full"
            size="lg"
          >
            <Share2 size={20} className="mr-2" />
            Share Referral Link
          </Button>
        </div>

        {/* Milestones */}
        <div className="card-modern mb-6">
          <h3 className="font-semibold text-foreground mb-4">Milestone Rewards</h3>
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-between p-3 rounded-xl border ${
                  milestone.completed 
                    ? 'bg-primary/5 border-primary/20' 
                    : 'bg-secondary border-border'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    milestone.completed 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {milestone.completed ? <Trophy size={20} /> : <span className="text-lg">{milestone.icon}</span>}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{milestone.count} Referrals</div>
                    <div className="text-sm text-muted-foreground">Reward: {milestone.reward}</div>
                  </div>
                </div>
                {milestone.completed && (
                  <div className="text-primary font-medium">✓ Claimed</div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Progress to next milestone</span>
              <span className="text-muted-foreground">{referralStats.totalReferrals}/25</span>
            </div>
            <Progress value={(referralStats.totalReferrals / 25) * 100} className="h-2" />
          </div>
        </div>

        {/* How it works */}
        <div className="card-modern mb-6">
          <h3 className="font-semibold text-foreground mb-4">How it works</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-sm font-bold">1</span>
              </div>
              <p className="text-sm text-muted-foreground">Share your referral link with friends</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-sm font-bold">2</span>
              </div>
              <p className="text-sm text-muted-foreground">They sign up and start trading</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-sm font-bold">3</span>
              </div>
              <p className="text-sm text-muted-foreground">You earn 10% of their trading fees</p>
            </div>
          </div>
        </div>

        {/* Referral List */}
        <div className="card-modern mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Recent Referrals</h3>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <div className="space-y-3">
            {referralList.map((referral, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-secondary">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {referral.username.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{referral.username}</div>
                    <div className="text-sm text-muted-foreground">
                      Joined {new Date(referral.joinDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-foreground">+{referral.earned} ETH</div>
                  <div className={`text-xs ${
                    referral.status === 'Active' ? 'text-green-500' : 'text-muted-foreground'
                  }`}>
                    {referral.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="card-modern mb-6">
          <h3 className="font-semibold text-foreground mb-4">Top Referrers</h3>
          <div className="space-y-2">
            {[
              { rank: 1, username: 'CryptoKing', referrals: 156, icon: '👑' },
              { rank: 2, username: 'NFTQueen', referrals: 142, icon: '🥈' },
              { rank: 3, username: 'TraderPro', referrals: 128, icon: '🥉' },
              { rank: 4, username: 'You', referrals: referralStats.totalReferrals, icon: '⭐' },
            ].map((user, index) => (
              <div key={index} className={`flex items-center justify-between p-2 rounded-lg ${
                user.username === 'You' ? 'bg-primary/5' : 'bg-secondary/50'
              }`}>
                <div className="flex items-center gap-3">
                  <span className="text-lg">{user.icon}</span>
                  <div>
                    <div className={`font-medium ${user.username === 'You' ? 'text-primary' : 'text-foreground'}`}>
                      {user.username}
                    </div>
                    <div className="text-sm text-muted-foreground">#{user.rank} • {user.referrals} referrals</div>
                  </div>
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

export default Referrals;