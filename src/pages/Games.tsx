import React, { useState } from 'react';
import { Play, Trophy, Clock, Users, Star, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const Games: React.FC = () => {
  const [activeTab, setActiveTab] = useState('featured');

  const games = [
    {
      id: 1,
      title: 'CryptoRacing',
      category: 'Racing',
      image: '/placeholder.svg',
      players: 12847,
      rating: 4.8,
      earnings: '0.05 ETH/day',
      status: 'live',
      difficulty: 'Easy',
      playTime: '5-10 min'
    },
    {
      id: 2,
      title: 'NFT Battle Arena',
      category: 'Strategy',
      image: '/placeholder.svg',
      players: 8432,
      rating: 4.9,
      earnings: '0.12 ETH/day',
      status: 'tournament',
      difficulty: 'Hard',
      playTime: '15-30 min'
    },
    {
      id: 3,
      title: 'DeFi Farm Simulator',
      category: 'Simulation',
      image: '/placeholder.svg',
      players: 15623,
      rating: 4.6,
      earnings: '0.08 ETH/day',
      status: 'new',
      difficulty: 'Medium',
      playTime: '10-20 min'
    },
    {
      id: 4,
      title: 'Pixel Mining',
      category: 'Idle',
      image: '/placeholder.svg',
      players: 23456,
      rating: 4.7,
      earnings: '0.03 ETH/day',
      status: 'live',
      difficulty: 'Easy',
      playTime: '1-2 min'
    }
  ];

  const dailyQuests = [
    { id: 1, title: 'Play 3 games', progress: 2, max: 3, reward: '0.01 ETH' },
    { id: 2, title: 'Win 5 matches', progress: 3, max: 5, reward: '0.025 ETH' },
    { id: 3, title: 'Earn 100 XP', progress: 75, max: 100, reward: '0.015 ETH' },
  ];

  const achievements = [
    { id: 1, title: 'First Victory', description: 'Win your first game', unlocked: true, icon: '🏆' },
    { id: 2, title: 'Speed Demon', description: 'Win 10 racing games', unlocked: true, icon: '🏎️' },
    { id: 3, title: 'NFT Master', description: 'Collect 50 NFTs', unlocked: false, icon: '🎨' },
    { id: 4, title: 'Strategist', description: 'Win 25 strategy games', unlocked: false, icon: '🧠' },
  ];

  const tabs = ['featured', 'racing', 'strategy', 'idle'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-green-500/10 text-green-500';
      case 'tournament': return 'bg-primary/10 text-primary';
      case 'new': return 'bg-yellow-500/10 text-yellow-600';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-500';
      case 'Medium': return 'text-yellow-500';
      case 'Hard': return 'text-red-500';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-4 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Games</h1>
            <p className="text-sm text-muted-foreground mt-1">Play & Earn Crypto</p>
          </div>
          <div className="bg-primary/10 rounded-xl px-3 py-1.5">
            <span className="text-primary text-sm font-medium">24 Online</span>
          </div>
        </div>

        {/* Player Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="card-modern text-center">
            <div className="text-lg font-bold text-foreground">847</div>
            <div className="text-xs text-muted-foreground">Games Played</div>
          </div>
          <div className="card-modern text-center">
            <div className="text-lg font-bold text-foreground">2.47 ETH</div>
            <div className="text-xs text-muted-foreground">Total Earned</div>
          </div>
          <div className="card-modern text-center">
            <div className="text-lg font-bold text-foreground">78%</div>
            <div className="text-xs text-muted-foreground">Win Rate</div>
          </div>
        </div>

        {/* Daily Quests */}
        <div className="card-modern mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Daily Quests</h3>
            <Badge variant="secondary">
              <Clock size={12} className="mr-1" />
              18h left
            </Badge>
          </div>
          <div className="space-y-3">
            {dailyQuests.map((quest) => (
              <div key={quest.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{quest.title}</span>
                  <span className="text-sm font-medium text-primary">{quest.reward}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={(quest.progress / quest.max) * 100} className="flex-1 h-2" />
                  <span className="text-xs text-muted-foreground">{quest.progress}/{quest.max}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Game Categories */}
        <div className="flex bg-secondary rounded-xl p-1 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all capitalize ${
                activeTab === tab
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Featured Game */}
        <div className="card-modern mb-6 overflow-hidden">
          <div className="relative">
            <div className="h-32 bg-gradient-to-br from-primary/20 to-accent-blue-dark/20 rounded-xl mb-4 flex items-center justify-center">
              <Play size={32} className="text-primary" />
            </div>
            <Badge className="absolute top-2 right-2 bg-green-500">
              <Zap size={12} className="mr-1" />
              Live Tournament
            </Badge>
          </div>
          <h3 className="font-bold text-foreground mb-2">Weekly Championship</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Compete for the ultimate prize pool of 10 ETH. Top 100 players qualify!
          </p>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="text-sm">
                <span className="text-muted-foreground">Prize Pool:</span>
                <span className="font-semibold text-foreground ml-1">10 ETH</span>
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground">Players:</span>
                <span className="font-semibold text-foreground ml-1">1,247</span>
              </div>
            </div>
          </div>
          <Button className="w-full" size="lg">
            <Trophy size={20} className="mr-2" />
            Join Tournament
          </Button>
        </div>

        {/* Games Grid */}
        <div className="space-y-4 mb-6">
          {games.map((game) => (
            <div key={game.id} className="card-modern">
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-accent-blue-dark/20 flex items-center justify-center flex-shrink-0">
                  <Play size={24} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground truncate">{game.title}</h3>
                    <Badge variant="secondary" className={getStatusColor(game.status)}>
                      {game.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-500" />
                      <span className="text-sm text-foreground">{game.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{game.players.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{game.playTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">Earning potential</div>
                      <div className="font-semibold text-primary">{game.earnings}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm ${getDifficultyColor(game.difficulty)}`}>
                        {game.difficulty}
                      </div>
                      <Button size="sm" className="mt-1">
                        <Play size={14} className="mr-1" />
                        Play
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="card-modern mb-6">
          <h3 className="font-semibold text-foreground mb-4">Achievements</h3>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id} 
                className={`p-3 rounded-xl border text-center ${
                  achievement.unlocked 
                    ? 'bg-primary/5 border-primary/20' 
                    : 'bg-secondary border-border opacity-60'
                }`}
              >
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <div className="font-medium text-foreground text-sm">{achievement.title}</div>
                <div className="text-xs text-muted-foreground">{achievement.description}</div>
                {achievement.unlocked && (
                  <div className="mt-2">
                    <Trophy size={14} className="text-primary mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Game Tips */}
        <div className="card-modern mb-6">
          <h3 className="font-semibold text-foreground mb-3">Pro Tips</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• Complete daily quests for guaranteed rewards</p>
            <p>• Join tournaments for higher earning potential</p>
            <p>• Practice in easy games before trying hard modes</p>
            <p>• Check back regularly for new game releases</p>
          </div>
        </div>
      </div>
      
      <Navbar />
    </div>
  );
};

export default Games;