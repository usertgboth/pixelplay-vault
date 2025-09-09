import { useState } from 'react';
import { Users, Copy, Gift, Crown, Share } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useToast } from '@/hooks/use-toast';

const Referrals = () => {
  const [referralCode] = useState('PXLM4ST3R');
  const [referrals] = useState(8);
  const [bonusEarned] = useState(240);
  const { toast } = useToast();

  const copyReferralLink = () => {
    const referralLink = `https://pxlmint.app/ref/${referralCode}`;
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Link Copied!",
      description: "Referral link copied to clipboard",
      duration: 2000,
    });
  };

  const rewards = [
    { friends: 3, reward: "Limited NFT", claimed: true },
    { friends: 5, reward: "Exclusive Avatar", claimed: true },
    { friends: 10, reward: "Premium Game Access", claimed: false },
    { friends: 25, reward: "Legendary NFT", claimed: false },
    { friends: 50, reward: "VIP Status", claimed: false },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      
      {/* Header */}
      <header className="px-4 py-6">
        <div className="flex items-center gap-2 mb-2">
          <Users size={24} className="text-accent-referrals" />
          <h1 className="text-2xl font-bold text-gradient-referrals">Referrals</h1>
        </div>
        <p className="text-muted-foreground">Invite friends and earn rewards together</p>
      </header>

      {/* Referral Stats */}
      <div className="px-4 mb-8">
        <div className="card-pixel pulse-glow">
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-accent-referrals">{referrals}</div>
            <div className="text-muted-foreground">Friends Invited</div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <div className="text-xl font-bold text-primary">{bonusEarned}</div>
              <div className="text-sm text-muted-foreground">Bonus Earned</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-accent-games">Level 2</div>
              <div className="text-sm text-muted-foreground">Referrer Rank</div>
            </div>
          </div>
          
          <button 
            onClick={copyReferralLink}
            className="btn-pixel btn-referrals w-full flex items-center justify-center gap-2"
          >
            <Copy size={16} />
            Copy Referral Link
          </button>
        </div>
      </div>

      {/* Referral Code */}
      <div className="px-4 mb-8">
        <h2 className="text-lg font-bold text-foreground mb-4">Your Referral Code</h2>
        <div className="card-pixel">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground">Your unique code:</div>
              <div className="text-2xl font-bold text-accent-referrals font-mono">{referralCode}</div>
            </div>
            <button className="p-3 hover:bg-muted rounded-lg transition-colors">
              <Share size={20} className="text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Rewards System */}
      <div className="px-4 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Gift size={20} className="text-accent-referrals" />
          <h2 className="text-lg font-bold text-foreground">Milestone Rewards</h2>
        </div>
        
        <div className="space-y-3">
          {rewards.map((reward, index) => (
            <div key={index} className={`card-pixel flex items-center gap-4 ${
              reward.claimed ? 'opacity-60' : ''
            }`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                reward.claimed 
                  ? 'bg-accent-games/20' 
                  : referrals >= reward.friends 
                    ? 'bg-accent-referrals/20' 
                    : 'bg-muted/20'
              }`}>
                {reward.claimed ? (
                  <Crown size={20} className="text-accent-games" />
                ) : referrals >= reward.friends ? (
                  <Gift size={20} className="text-accent-referrals" />
                ) : (
                  <div className="text-muted-foreground text-sm">{reward.friends}</div>
                )}
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">
                  Invite {reward.friends} friends
                </h3>
                <p className="text-sm text-muted-foreground">{reward.reward}</p>
              </div>
              
              <div className="text-sm font-semibold">
                {reward.claimed ? (
                  <span className="text-accent-games">Claimed</span>
                ) : referrals >= reward.friends ? (
                  <button className="btn-pixel btn-referrals text-sm px-3 py-1">
                    Claim
                  </button>
                ) : (
                  <span className="text-muted-foreground">{reward.friends - referrals} more</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Referral Tips */}
      <div className="px-4">
        <h2 className="text-lg font-bold text-foreground mb-4">How to Earn More</h2>
        <div className="space-y-3">
          <div className="card-pixel">
            <h3 className="font-semibold text-foreground mb-2">Share on Social Media</h3>
            <p className="text-sm text-muted-foreground">
              Share your referral link on Twitter, Discord, or Telegram to reach more friends.
            </p>
          </div>
          
          <div className="card-pixel">
            <h3 className="font-semibold text-foreground mb-2">Active Friends Earn More</h3>
            <p className="text-sm text-muted-foreground">
              When your referred friends mine NFTs or make trades, you earn bonus rewards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;