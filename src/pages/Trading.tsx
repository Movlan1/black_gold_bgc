import React, { useState } from 'react';
import { TrendingUp, Bitcoin, DollarSign, Users, Search, Filter } from 'lucide-react';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';
import Modal from '../components/Common/Modal';

const Trading: React.FC = () => {
  const [activeTab, setActiveTab] = useState('crypto');
  const [showTradeModal, setShowTradeModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<any>(null);
  const [tradeAction, setTradeAction] = useState('buy');

  const cryptoData = [
    { symbol: 'BGC', name: 'Black Gold Coin', price: 0.845, change: 2.8, volume: '2.5M' },
    { symbol: 'BTC', name: 'Bitcoin', price: 43245.67, change: -1.2, volume: '28.5B' },
    { symbol: 'ETH', name: 'Ethereum', price: 2567.89, change: 3.4, volume: '15.2B' },
    { symbol: 'ADA', name: 'Cardano', price: 0.48, change: 5.1, volume: '890M' },
    { symbol: 'SOL', name: 'Solana', price: 98.45, change: -2.3, volume: '2.1B' }
  ];

  const p2pListings = [
    {
      id: 1,
      seller: 'EnergyTrader_AZ',
      asset: 'BGC',
      amount: 5000,
      price: 0.85,
      total: 4250,
      rating: 4.8,
      trades: 156,
      method: 'Bank Transfer'
    },
    {
      id: 2,
      seller: 'CryptoKing92',
      asset: 'BTC',
      amount: 0.5,
      price: 43100,
      total: 21550,
      rating: 4.9,
      trades: 89,
      method: 'Cash'
    },
    {
      id: 3,
      seller: 'GoldMiner_Baku',
      asset: 'ETH',
      amount: 10,
      price: 2580,
      total: 25800,
      rating: 4.7,
      trades: 234,
      method: 'Bank Transfer'
    }
  ];

  const stockData = [
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.50, change: 1.8, sector: 'Automotive' },
    { symbol: 'AAPL', name: 'Apple Inc.', price: 192.75, change: -0.5, sector: 'Technology' },
    { symbol: 'SHEL', name: 'Shell PLC', price: 58.90, change: 2.1, sector: 'Energy' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 378.25, change: 0.8, sector: 'Technology' }
  ];

  const handleTrade = (asset: any, action: string) => {
    setSelectedAsset(asset);
    setTradeAction(action);
    setShowTradeModal(true);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gold-400 mb-4">
          Trading & Marketplace
        </h1>
        <p className="text-gold-600 text-lg max-w-3xl mx-auto">
          Trade cryptocurrencies, tokenized stocks, and energy assets. 
          Connect with other traders in our P2P marketplace.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-black/50 rounded-lg p-1 max-w-lg mx-auto">
        {[
          { key: 'crypto', label: 'Cryptocurrency', icon: Bitcoin },
          { key: 'p2p', label: 'P2P Market', icon: Users },
          { key: 'stocks', label: 'Tokenized Stocks', icon: TrendingUp }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all flex-1 justify-center ${
                activeTab === tab.key
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

      {/* Cryptocurrency Trading */}
      {activeTab === 'crypto' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gold-400">Cryptocurrency Markets</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Filter size={16} className="mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Search size={16} className="mr-2" />
                Search
              </Button>
            </div>
          </div>

          <Card glow>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gold-600/20">
                    <th className="text-left py-3 text-gold-400">Asset</th>
                    <th className="text-right py-3 text-gold-400">Price</th>
                    <th className="text-right py-3 text-gold-400">24h Change</th>
                    <th className="text-right py-3 text-gold-400">Volume</th>
                    <th className="text-right py-3 text-gold-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cryptoData.map((crypto) => (
                    <tr key={crypto.symbol} className="border-b border-gold-600/10 hover:bg-gold-600/5">
                      <td className="py-4">
                        <div>
                          <div className="font-semibold text-gold-400">{crypto.symbol}</div>
                          <div className="text-sm text-gold-600">{crypto.name}</div>
                        </div>
                      </td>
                      <td className="text-right py-4 text-gold-400 font-semibold">
                        ${crypto.price.toFixed(crypto.price < 1 ? 3 : 2)}
                      </td>
                      <td className={`text-right py-4 font-semibold ${
                        crypto.change >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {crypto.change >= 0 ? '+' : ''}{crypto.change}%
                      </td>
                      <td className="text-right py-4 text-gold-600">{crypto.volume}</td>
                      <td className="text-right py-4">
                        <div className="flex space-x-2 justify-end">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleTrade(crypto, 'buy')}
                          >
                            Buy
                          </Button>
                          <Button 
                            size="sm" 
                            variant="secondary"
                            onClick={() => handleTrade(crypto, 'sell')}
                          >
                            Sell
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {/* P2P Marketplace */}
      {activeTab === 'p2p' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gold-400">P2P Marketplace</h2>
            <Button>Create Listing</Button>
          </div>

          <div className="grid gap-6">
            {p2pListings.map((listing) => (
              <Card key={listing.id} glow>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gold-400">{listing.seller}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gold-600">
                          <span>⭐ {listing.rating}</span>
                          <span>•</span>
                          <span>{listing.trades} trades</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gold-600">Asset:</span>
                        <p className="text-gold-400 font-semibold">{listing.asset}</p>
                      </div>
                      <div>
                        <span className="text-gold-600">Amount:</span>
                        <p className="text-gold-400 font-semibold">{listing.amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <span className="text-gold-600">Price:</span>
                        <p className="text-gold-400 font-semibold">${listing.price}</p>
                      </div>
                      <div>
                        <span className="text-gold-600">Payment:</span>
                        <p className="text-gold-400 font-semibold">{listing.method}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gold-400 mb-2">
                      ${listing.total.toLocaleString()}
                    </p>
                    <Button size="sm">Trade Now</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Tokenized Stocks */}
      {activeTab === 'stocks' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gold-400">Tokenized Stocks</h2>
            <Button variant="outline" size="sm">View All Markets</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stockData.map((stock) => (
              <Card key={stock.symbol} glow>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gold-400">{stock.symbol}</h3>
                    <p className="text-gold-600 text-sm">{stock.name}</p>
                    <span className="inline-block px-2 py-1 bg-gold-600/20 text-gold-400 text-xs rounded mt-2">
                      {stock.sector}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gold-400">${stock.price}</p>
                    <p className={`text-sm font-semibold ${
                      stock.change >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {stock.change >= 0 ? '+' : ''}{stock.change}%
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleTrade(stock, 'buy')}
                  >
                    Buy Tokens
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => handleTrade(stock, 'sell')}
                  >
                    Sell Tokens
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Trade Modal */}
      <Modal
        isOpen={showTradeModal}
        onClose={() => setShowTradeModal(false)}
        title={`${tradeAction === 'buy' ? 'Buy' : 'Sell'} ${selectedAsset?.symbol || selectedAsset?.name}`}
      >
        {selectedAsset && (
          <div className="space-y-6">
            <div className="bg-gold-600/10 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-gold-600">Current Price:</span>
                <span className="text-xl font-bold text-gold-400">
                  ${selectedAsset.price?.toFixed(selectedAsset.price < 1 ? 3 : 2)}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gold-400 text-sm font-medium mb-2">
                  Amount to {tradeAction}
                </label>
                <input
                  type="number"
                  className="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-gold-400 text-sm font-medium mb-2">
                  Order Type
                </label>
                <select className="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none">
                  <option value="market">Market Order</option>
                  <option value="limit">Limit Order</option>
                  <option value="stop">Stop Order</option>
                </select>
              </div>

              <div className="bg-black/30 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gold-600">Estimated Total:</span>
                  <span className="text-gold-400">$0.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gold-600">Trading Fee:</span>
                  <span className="text-gold-400">0.1%</span>
                </div>
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-gold-400">Final Amount:</span>
                  <span className="text-gold-400">$0.00</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button variant="outline" onClick={() => setShowTradeModal(false)} className="flex-1">
                Cancel
              </Button>
              <Button className="flex-1">
                {tradeAction === 'buy' ? 'Buy' : 'Sell'} {selectedAsset.symbol || selectedAsset.name}
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Trading;