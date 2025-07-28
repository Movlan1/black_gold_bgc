import React, { useState } from 'react';
import { Zap, Sun, Wind, Fuel, TrendingUp, Clock, Award } from 'lucide-react';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';
import Modal from '../components/Common/Modal';
import { useApp } from '../context/AppContext';

const EnergyStaking: React.FC = () => {
  const { state } = useApp();
  const [showStakeModal, setShowStakeModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState<any>(null);
  const [stakeAmount, setStakeAmount] = useState('');

  const energyResources = [
    {
      name: 'Oil Futures',
      symbol: 'OIL',
      price: 82.45,
      change: -1.47,
      apy: 8.5,
      description: 'Stake in global oil futures and earn returns from price movements',
      icon: Fuel,
      color: 'orange',
      minStake: 100,
      lockPeriod: '30 days'
    },
    {
      name: 'Solar Energy',
      symbol: 'SOLAR',
      price: 156.78,
      change: 2.25,
      apy: 12.3,
      description: 'Invest in solar energy projects and earn from clean energy production',
      icon: Sun,
      color: 'yellow',
      minStake: 50,
      lockPeriod: '90 days'
    },
    {
      name: 'Wind Power',
      symbol: 'WIND',
      price: 89.45,
      change: 1.39,
      apy: 10.7,
      description: 'Stake in wind energy infrastructure and benefit from renewable power',
      icon: Wind,
      color: 'blue',
      minStake: 75,
      lockPeriod: '60 days'
    },
    {
      name: 'Energy Grid',
      symbol: 'GRID',
      price: 245.60,
      change: 3.82,
      apy: 15.2,
      description: 'Participate in smart grid development and modernization',
      icon: Zap,
      color: 'purple',
      minStake: 200,
      lockPeriod: '180 days'
    }
  ];

  const stakingPlans = [
    {
      name: 'Starter Plan',
      duration: '30 days',
      apy: 8.0,
      minAmount: 100,
      features: ['Daily rewards', 'Early withdrawal', 'Basic support']
    },
    {
      name: 'Growth Plan',
      duration: '90 days',
      apy: 12.5,
      minAmount: 500,
      features: ['Daily rewards', 'Compound interest', 'Priority support', 'Bonus rewards']
    },
    {
      name: 'Premium Plan',
      duration: '180 days',
      apy: 18.0,
      minAmount: 1000,
      features: ['Daily rewards', 'Compound interest', 'VIP support', 'Exclusive access', 'Insurance']
    }
  ];

  const userStakes = [
    {
      resource: 'Solar Energy',
      amount: 2500,
      apy: 12.3,
      startDate: '2024-12-01',
      endDate: '2025-03-01',
      earned: 156.25,
      status: 'Active'
    },
    {
      resource: 'Wind Power',
      amount: 1800,
      apy: 10.7,
      startDate: '2024-11-15',
      endDate: '2025-01-15',
      earned: 89.40,
      status: 'Active'
    },
    {
      resource: 'Oil Futures',
      amount: 5000,
      apy: 8.5,
      startDate: '2024-10-01',
      endDate: '2024-11-01',
      earned: 354.17,
      status: 'Completed'
    }
  ];

  const handleStake = (resource: any) => {
    setSelectedResource(resource);
    setShowStakeModal(true);
  };

  const handleStakeSubmit = () => {
    console.log('Staking:', stakeAmount, 'in', selectedResource?.name);
    setShowStakeModal(false);
    setStakeAmount('');
  };

  const getColorClasses = (color: string) => {
    const colors = {
      orange: 'text-orange-400 bg-orange-600/20',
      yellow: 'text-yellow-400 bg-yellow-600/20',
      blue: 'text-blue-400 bg-blue-600/20',
      purple: 'text-purple-400 bg-purple-600/20'
    };
    return colors[color as keyof typeof colors] || 'text-gold-400 bg-gold-600/20';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gold-400 mb-4">
          Energy Resources & Staking
        </h1>
        <p className="text-gold-600 text-lg max-w-3xl mx-auto">
          Stake your tokens in energy resources and renewable projects. 
          Earn rewards while contributing to sustainable energy development.
        </p>
      </div>

      {/* User Staking Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card glow className="text-center">
          <Zap className="w-8 h-8 text-gold-400 mx-auto mb-4" />
          <h3 className="text-gold-600 text-sm font-medium mb-2">Total Staked</h3>
          <p className="text-2xl font-bold text-gold-400">{state.user.stakedTokens.toLocaleString()} BGC</p>
        </Card>
        
        <Card glow className="text-center">
          <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-4" />
          <h3 className="text-gold-600 text-sm font-medium mb-2">Total Rewards</h3>
          <p className="text-2xl font-bold text-green-400">599.82 BGC</p>
        </Card>
        
        <Card glow className="text-center">
          <Award className="w-8 h-8 text-blue-400 mx-auto mb-4" />
          <h3 className="text-gold-600 text-sm font-medium mb-2">Average APY</h3>
          <p className="text-2xl font-bold text-blue-400">12.8%</p>
        </Card>
      </div>

      {/* Energy Resources */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gold-400">Available Energy Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {energyResources.map((resource) => {
            const Icon = resource.icon;
            const colorClasses = getColorClasses(resource.color);
            
            return (
              <Card key={resource.symbol} glow>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gold-400">{resource.name}</h3>
                      <p className="text-sm text-gold-600">{resource.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gold-400">${resource.price}</p>
                    <p className={`text-sm font-semibold ${
                      resource.change >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {resource.change >= 0 ? '+' : ''}{resource.change}%
                    </p>
                  </div>
                </div>

                <p className="text-gold-600 text-sm mb-4">{resource.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                  <div className="text-center">
                    <p className="text-gold-600">APY</p>
                    <p className="text-gold-400 font-semibold">{resource.apy}%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gold-600">Min Stake</p>
                    <p className="text-gold-400 font-semibold">${resource.minStake}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gold-600">Lock Period</p>
                    <p className="text-gold-400 font-semibold">{resource.lockPeriod}</p>
                  </div>
                </div>

                <Button 
                  onClick={() => handleStake(resource)}
                  className="w-full"
                >
                  Stake Now
                </Button>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Staking Plans */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gold-400">Staking Plans</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stakingPlans.map((plan, index) => (
            <Card key={index} glow className={index === 1 ? 'ring-2 ring-gold-400' : ''}>
              {index === 1 && (
                <div className="text-center mb-4">
                  <span className="bg-gold-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gold-400 mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-3xl font-bold text-gold-400">{plan.apy}%</span>
                  <span className="text-gold-600">APY</span>
                </div>
                <p className="text-gold-600 text-sm mt-2">{plan.duration} lock period</p>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gold-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mb-4">
                <p className="text-gold-600 text-sm">Minimum stake</p>
                <p className="text-gold-400 font-semibold">${plan.minAmount}</p>
              </div>

              <Button variant={index === 1 ? 'primary' : 'secondary'} className="w-full">
                Choose Plan
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Current Stakes */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gold-400">Your Stakes</h2>
          <Button variant="outline" size="sm">Claim All Rewards</Button>
        </div>

        <Card glow>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gold-600/20">
                  <th className="text-left py-3 text-gold-400">Resource</th>
                  <th className="text-right py-3 text-gold-400">Amount</th>
                  <th className="text-right py-3 text-gold-400">APY</th>
                  <th className="text-right py-3 text-gold-400">Earned</th>
                  <th className="text-center py-3 text-gold-400">Status</th>
                  <th className="text-right py-3 text-gold-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {userStakes.map((stake, index) => (
                  <tr key={index} className="border-b border-gold-600/10 hover:bg-gold-600/5">
                    <td className="py-4">
                      <div>
                        <div className="font-semibold text-gold-400">{stake.resource}</div>
                        <div className="text-sm text-gold-600 flex items-center space-x-1">
                          <Clock size={12} />
                          <span>{stake.startDate} - {stake.endDate}</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-right py-4 text-gold-400 font-semibold">
                      {stake.amount.toLocaleString()} BGC
                    </td>
                    <td className="text-right py-4 text-green-400 font-semibold">
                      {stake.apy}%
                    </td>
                    <td className="text-right py-4 text-blue-400 font-semibold">
                      {stake.earned} BGC
                    </td>
                    <td className="text-center py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        stake.status === 'Active' 
                          ? 'bg-green-600/20 text-green-400' 
                          : 'bg-gray-600/20 text-gray-400'
                      }`}>
                        {stake.status}
                      </span>
                    </td>
                    <td className="text-right py-4">
                      <div className="flex space-x-2 justify-end">
                        {stake.status === 'Active' ? (
                          <>
                            <Button size="sm" variant="outline">Claim</Button>
                            <Button size="sm" variant="secondary">Unstake</Button>
                          </>
                        ) : (
                          <Button size="sm" variant="outline">View</Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Stake Modal */}
      <Modal
        isOpen={showStakeModal}
        onClose={() => setShowStakeModal(false)}
        title={`Stake in ${selectedResource?.name}`}
      >
        {selectedResource && (
          <div className="space-y-6">
            <div className="bg-gold-600/10 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gold-600">Current Price:</span>
                <span className="text-xl font-bold text-gold-400">${selectedResource.price}</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gold-600">APY:</span>
                <span className="text-lg font-semibold text-green-400">{selectedResource.apy}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gold-600">Lock Period:</span>
                <span className="text-gold-400">{selectedResource.lockPeriod}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gold-400 text-sm font-medium mb-2">
                  Amount to Stake (BGC)
                </label>
                <input
                  type="number"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  className="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none"
                  placeholder={`Minimum: ${selectedResource.minStake} BGC`}
                />
              </div>

              <div className="bg-black/30 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gold-600">Estimated Annual Rewards:</span>
                  <span className="text-gold-400">
                    {stakeAmount ? ((parseFloat(stakeAmount) * selectedResource.apy) / 100).toFixed(2) : '0.00'} BGC
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gold-600">Daily Rewards:</span>
                  <span className="text-gold-400">
                    {stakeAmount ? ((parseFloat(stakeAmount) * selectedResource.apy) / 100 / 365).toFixed(4) : '0.0000'} BGC
                  </span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button variant="outline" onClick={() => setShowStakeModal(false)} className="flex-1">
                Cancel
              </Button>
              <Button onClick={handleStakeSubmit} className="flex-1">
                Stake Now
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default EnergyStaking;