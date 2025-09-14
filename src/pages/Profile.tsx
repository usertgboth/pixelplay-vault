import React, { useState } from 'react';
import { Star, Shield, Users, ChevronRight, Wallet } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('received');

  const menuItems = [
    {
      id: 'referral',
      title: 'Referral Program',
      icon: Star,
      color: 'text-blue-500'
    },
    {
      id: 'private',
      title: 'Private Deal',
      icon: Shield,
      color: 'text-blue-500'
    },
    {
      id: 'multicheck',
      title: 'Multicheck',
      icon: Users,
      color: 'text-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-4 pt-8">
        {/* Profile Header */}
        <div className="text-center mb-8">
          {/* Avatar */}
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center relative overflow-hidden">
              {/* Panda face placeholder */}
              <div className="text-white text-3xl">🐼</div>
              {/* Badge */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-sm"></div>
              </div>
            </div>
          </div>
          
          {/* Username */}
          <h1 className="text-2xl font-bold text-foreground mb-1">exo51</h1>
          
          {/* Gifts count */}
          <p className="text-muted-foreground mb-6">0 gifts</p>
          
          {/* Connect Wallet Button */}
          <Button className="w-full max-w-sm h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl font-semibold">
            <Wallet className="w-5 h-5 mr-2" />
            Connect wallet
          </Button>
        </div>

        {/* Menu Items */}
        <div className="space-y-4 mb-8">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                className="w-full flex items-center justify-between p-4 bg-card rounded-2xl border border-border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center ${item.color}`}>
                    <IconComponent size={20} />
                  </div>
                  <span className="text-foreground font-medium">{item.title}</span>
                </div>
                <ChevronRight size={20} className="text-muted-foreground" />
              </button>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="flex mb-6">
          <button
            onClick={() => setActiveTab('received')}
            className={`flex-1 pb-3 text-center font-medium border-b-2 transition-colors ${
              activeTab === 'received'
                ? 'text-foreground border-blue-500'
                : 'text-muted-foreground border-transparent'
            }`}
          >
            Received
          </button>
          <button
            onClick={() => setActiveTab('purchased')}
            className={`flex-1 pb-3 text-center font-medium border-b-2 transition-colors ${
              activeTab === 'purchased'
                ? 'text-foreground border-blue-500'
                : 'text-muted-foreground border-transparent'
            }`}
          >
            Purchased
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-xl">
              <span className="text-muted-foreground">Model</span>
              <ChevronRight size={16} className="text-muted-foreground rotate-90" />
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-xl">
              <span className="text-muted-foreground">Sort</span>
              <ChevronRight size={16} className="text-muted-foreground rotate-90" />
            </button>
          </div>
          <div className="w-8 h-8 border border-border rounded-lg flex items-center justify-center">
            <div className="w-4 h-3 border border-muted-foreground rounded-sm"></div>
          </div>
        </div>

        {/* Empty State */}
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">0 gifts</p>
          {/* Placeholder for panda illustration */}
          <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
            <div className="text-2xl">🐼</div>
          </div>
        </div>
      </div>
      
      <Navbar />
    </div>
  );
};

export default Profile;