import React, { useState } from 'react';
import { TrendingUp, Coins, Zap, BarChart3, Globe, Newspaper, ChevronRight } from 'lucide-react';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';
import { useApp } from '../context/AppContext';

const Dashboard: React.FC = () => {
  const { state } = useApp();
  const [selectedNewsTab, setSelectedNewsTab] = useState('global');

  const overviewData = [
    {
      title: 'Total BGC in Circulation',
      value: '2,450,000',
      change: '+5.2%',
      icon: Coins,
      color: 'text-gold-400'
    },
    {
      title: 'Your Staked Tokens',
      value: state.user.stakedTokens.toLocaleString(),
      change: '+12.8%',
      icon: Zap,
      color: 'text-green-400'
    },
    {
      title: 'Live Oil Price',
      value: '$82.45',
      change: '-1.47%',
      icon: TrendingUp,
      color: 'text-orange-400'
    },
    {
      title: 'Market Cap',
      value: '$125.8M',
      change: '+8.9%',
      icon: BarChart3,
      color: 'text-blue-400'
    }
  ];

  const newsData = {
    global: [
      { title: 'Global Oil Reserves Reach New Highs', time: '2 hours ago', source: 'Energy Weekly' },
      { title: 'Renewable Energy Investments Surge 25%', time: '4 hours ago', source: 'GreenTech' },
      { title: 'Cryptocurrency Market Shows Strong Recovery', time: '6 hours ago', source: 'CryptoNews' }
    ],
    energy: [
      { title: 'Solar Panel Efficiency Breaks New Records', time: '1 hour ago', source: 'Solar Today' },
      { title: 'Wind Energy Capacity Doubles in Azerbaijan', time: '3 hours ago', source: 'Wind Power' },
      { title: 'Hydroelectric Projects Get Green Light', time: '5 hours ago', source: 'Energy Report' }
    ],
    crypto: [
      { title: 'BGC Token Gains 15% in Weekly Trading', time: '30 minutes ago', source: 'TokenWatch' },
      { title: 'DeFi Protocols Show Increased Activity', time: '2 hours ago', source: 'DeFi Pulse' },
      { title: 'Institutional Crypto Adoption Accelerates', time: '4 hours ago', source: 'Crypto Insider' }
    ],
    regional: [
      { title: 'Azerbaijan Announces New Energy Strategy', time: '1 hour ago', source: 'AzerNews' },
      { title: 'Caspian Sea Oil Exploration Expands', time: '3 hours ago', source: 'Regional Energy' },
      { title: 'Black Gold Platform Partnerships Grow', time: '5 hours ago', source: 'Business Today' }
    ]
  };

  const newsTabs = [
    { key: 'global', label: 'Global', icon: Globe },
    { key: 'energy', label: 'Energy', icon: Zap },
    { key: 'crypto', label: 'Crypto', icon: Coins },
    { key: 'regional', label: 'Regional', icon: BarChart3 }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gold-400 mb-4">
          Welcome to BLACK GOLD Dashboard
        </h1>
        <p className="text-gold-600 text-lg">
          Monitor your investments, track energy markets, and manage your portfolio
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewData.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index} glow className="text-center">
              <Icon className={`w-8 h-8 mx-auto mb-4 ${item.color}`} />
              <h3 className="text-gold-600 text-sm font-medium mb-2">{item.title}</h3>
              <p className="text-2xl font-bold text-gold-400 mb-2">{item.value}</p>
              <span className={`text-sm ${
                item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
              }`}>
                {item.change}
              </span>
            </Card>
          );
        })}
      </div>

      {/* AI Forecast Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card glow>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gold-400">AI Price Forecast</h2>
            <Button variant="outline" size="sm">View Details</Button>
          </div>
          <div className="space-y-4">
            <div className="bg-gold-600/10 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gold-600">BGC Token</span>
                <span className="text-green-400">+8.5% (7 days)</span>
              </div>
              <div className="w-full bg-black/50 rounded-full h-2">
                <div className="bg-gradient-to-r from-gold-600 to-gold-400 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
            <div className="bg-gold-600/10 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gold-600">Oil Price</span>
                <span className="text-green-400">+3.2% (7 days)</span>
              </div>
              <div className="w-full bg-black/50 rounded-full h-2">
                <div className="bg-gradient-to-r from-orange-600 to-orange-400 h-2 rounded-full w-1/2"></div>
              </div>
            </div>
          </div>
        </Card>

        {/* User Portfolio */}
        <Card glow>
          <h2 className="text-xl font-semibold text-gold-400 mb-6">Your Portfolio</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gold-600">Total Balance</span>
              <span className="text-xl font-bold text-gold-400">${state.user.balance.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gold-600">Staked Tokens</span>
              <span className="text-lg font-semibold text-green-400">{state.user.stakedTokens.toLocaleString()} BGC</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gold-600">Available for Trading</span>
              <span className="text-lg font-semibold text-blue-400">${(state.user.balance * 0.3).toFixed(2)}</span>
            </div>
            <Button className="w-full mt-4">Manage Portfolio</Button>
          </div>
        </Card>
      </div>

      {/* Live News Panel */}
      <Card glow>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gold-400">Live Borsa Xəbərləri</h2>
          <Newspaper className="text-gold-600 w-6 h-6" />
        </div>

        {/* News Tabs */}
        <div className="flex space-x-1 mb-6 bg-black/50 rounded-lg p-1">
          {newsTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setSelectedNewsTab(tab.key)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                  selectedNewsTab === tab.key
                    ? 'bg-gold-600/20 text-gold-400'
                    : 'text-gold-600 hover:text-gold-400 hover:bg-gold-600/10'
                }`}
              >
                <Icon size={16} />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* News Items */}
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {newsData[selectedNewsTab as keyof typeof newsData].map((news, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors cursor-pointer">
              <div className="flex-1">
                <h3 className="text-gold-400 font-medium text-sm mb-1">{news.title}</h3>
                <div className="flex items-center space-x-2 text-xs text-gold-600">
                  <span>{news.source}</span>
                  <span>•</span>
                  <span>{news.time}</span>
                </div>
              </div>
              <ChevronRight className="text-gold-600 w-4 h-4" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;