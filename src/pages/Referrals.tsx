import { useState } from 'react';
import { Users, Copy, Gift, Share2, ChevronRight, UserPlus2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useToast } from '@/hooks/use-toast';

const Referrals = () => {
  const [referralCode] = useState('ref_2MOQ2CC');
  const [referrals] = useState(0);
  const [bonusEarned] = useState(0);
  const { toast } = useToast();

  const copyReferralLink = () => {
    const referralLink = `https://t.me/PxlMintBot?startapp=${referralCode}`;
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Link Copied!",
      description: "Referral link copied to clipboard",
      duration: 2000,
    });
  };

  const shareReferralLink = () => {
    const referralLink = `https://t.me/PxlMintBot?startapp=${referralCode}`;
    const text = encodeURIComponent("Join me on PxlMint and start earning rewards! 🎁");
    
    if (navigator.share) {
      navigator.share({
        title: 'Join PxlMint',
        text: 'Join me on PxlMint and start earning rewards!',
        url: referralLink,
      });
    } else {
      // Fallback for desktop - open Telegram
      window.open(`https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${text}`, '_blank');
    }
  };

  const rewards = [
    { friends: 3, reward: "Limited NFT Pack", points: 100 },
    { friends: 5, reward: "Exclusive Avatar", points: 250 },
    { friends: 10, reward: "Premium Access", points: 500 },
    { friends: 25, reward: "Legendary NFT", points: 1000 },
    { friends: 50, reward: "VIP Status", points: 2500 },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      
      {/* Hero Section with Gradient */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-referrals/20 via-background to-background"></div>
        <div className="relative px-6 py-12 text-center">
          {/* Icon Illustration */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="flex items-center justify-center w-24 h-24 bg-accent-referrals/20 rounded-full mb-4">
                <UserPlus2 size={40} className="text-accent-referrals" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-referrals rounded-full flex items-center justify-center">
                <Gift size={16} className="text-background" />
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-foreground mb-3">
            Gifts for Invites!
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-sm mx-auto">
            Invite your friends to PxlMint, or promote the link via social media
          </p>
          
          {/* Gift Distribution Status */}
          <div className="inline-flex items-center px-6 py-3 bg-card/80 backdrop-blur-sm border border-border rounded-full">
            <Gift size={16} className="text-accent-referrals mr-2" />
            <span className="text-sm font-medium text-foreground">Gift distribution Soon</span>
          </div>
        </div>
      </div>

      {/* Referral Link Section */}
      <div className="px-6 mb-8">
        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6">
          <div className="text-sm text-muted-foreground mb-2">Your referral link</div>
          <div className="flex items-center justify-between bg-muted/30 rounded-xl p-4 mb-6">
            <div className="flex-1 min-w-0">
              <div className="text-sm font-mono text-foreground truncate">
                https://t.me/PxlMintBot?startapp={referralCode}
              </div>
            </div>
            <button 
              onClick={copyReferralLink}
              className="ml-3 p-2 hover:bg-muted/50 rounded-lg transition-colors"
              title="Copy link"
            >
              <Copy size={18} className="text-muted-foreground" />
            </button>
          </div>
          
          <button 
            onClick={shareReferralLink}
            className="w-full bg-accent-referrals hover:bg-accent-referrals/90 text-background font-semibold py-4 rounded-xl transition-all duration-200 hover:scale-[1.02]"
          >
            Share
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-card/60 border border-border rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-accent-referrals mb-1">{referrals}</div>
            <div className="text-sm text-muted-foreground">Referrals</div>
          </div>
          <div className="bg-card/60 border border-border rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-1">{bonusEarned}</div>
            <div className="text-sm text-muted-foreground">Points Earned</div>
          </div>
        </div>
      </div>

      {/* Referrals List */}
      <div className="px-6 mb-8">
        <div className="bg-card/60 border border-border rounded-xl overflow-hidden">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold text-foreground">Referrals</h3>
          </div>
          <div className="p-6 text-center">
            <Users size={32} className="text-muted-foreground mx-auto mb-3 opacity-50" />
            <p className="text-muted-foreground">No referrals yet</p>
            <p className="text-sm text-muted-foreground mt-1">
              Share your link to start earning rewards
            </p>
          </div>
        </div>
      </div>

      {/* Rewards System */}
      <div className="px-6 mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">Milestone Rewards</h2>
        <div className="space-y-3">
          {rewards.map((reward, index) => (
            <div key={index} className="bg-card/60 border border-border rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    referrals >= reward.friends 
                      ? 'bg-accent-referrals/20 border border-accent-referrals/30' 
                      : 'bg-muted/20'
                  }`}>
                    <span className="text-sm font-bold text-foreground">{reward.friends}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">
                      Invite {reward.friends} friends
                    </h3>
                    <p className="text-sm text-muted-foreground">{reward.reward}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-accent-referrals">
                    +{reward.points}
                  </span>
                  <ChevronRight size={16} className="text-muted-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How it Works */}
      <div className="px-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">How it Works</h2>
        <div className="space-y-3">
          <div className="bg-card/60 border border-border rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-accent-referrals/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-accent-referrals">1</span>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Share Your Link</h3>
                <p className="text-sm text-muted-foreground">
                  Send your referral link to friends via Telegram or social media
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-card/60 border border-border rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-accent-referrals/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-accent-referrals">2</span>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Friends Join</h3>
                <p className="text-sm text-muted-foreground">
                  When they sign up using your link, both of you get rewards
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-card/60 border border-border rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-accent-referrals/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-accent-referrals">3</span>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Earn Together</h3>
                <p className="text-sm text-muted-foreground">
                  Active friends unlock milestone rewards and bonus points for you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;