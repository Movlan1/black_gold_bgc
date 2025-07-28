import React, { useState } from 'react';
import { TrendingUp, Star, Building, DollarSign, Eye, Plus } from 'lucide-react';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';
import Modal from '../components/Common/Modal';

const CompanyShares: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStock, setSelectedStock] = useState<any>(null);
  const [watchlist, setWatchlist] = useState<string[]>(['TSLA', 'AAPL']);

  const stocks = [
    {
      symbol: 'TSLA',
      name: 'Tesla, Inc.',
      price: 248.50,
      change: 4.25,
      changePercent: 1.74,
      marketCap: '789.2B',
      volume: '45.2M',
      description: 'Electric vehicles, energy storage, and solar panel manufacturing',
      sector: 'Automotive',
      logo: '🚗'
    },
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 192.75,
      change: -0.95,
      changePercent: -0.49,
      marketCap: '2.9T',
      volume: '52.8M',
      description: 'Consumer electronics, software, and digital services',
      sector: 'Technology',
      logo: '🍎'
    },
    {
      symbol: 'SHEL',
      name: 'Shell PLC',
      price: 58.90,
      change: 1.20,
      changePercent: 2.08,
      marketCap: '186.4B',
      volume: '15.7M',
      description: 'Integrated oil and gas company with renewable energy investments',
      sector: 'Energy',
      logo: '🛢️'
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 378.25,
      change: 2.85,
      changePercent: 0.76,
      marketCap: '2.8T',
      volume: '28.4M',
      description: 'Cloud computing, productivity software, and AI services',
      sector: 'Technology',
      logo: '💻'
    },
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      price: 481.60,
      change: -8.45,
      changePercent: -1.72,
      marketCap: '1.2T',
      volume: '67.3M',
      description: 'Graphics processing units and AI computing platforms',
      sector: 'Technology',
      logo: '🎮'
    },
    {
      symbol: 'XOM',
      name: 'Exxon Mobil Corporation',
      price: 104.25,
      change: 3.15,
      changePercent: 3.12,
      marketCap: '425.8B',
      volume: '18.9M',
      description: 'Integrated oil and gas company with global operations',
      sector: 'Energy',
      logo: '⛽'
    }
  ];

  const portfolioStocks = [
    { symbol: 'TSLA', shares: 25, avgPrice: 235.40, currentValue: 6212.50 },
    { symbol: 'AAPL', shares: 50, avgPrice: 185.20, currentValue: 9637.50 },
    { symbol: 'SHEL', shares: 100, avgPrice: 55.80, currentValue: 5890.00 }
  ];

  const handleViewStock = (stock: any) => {
    setSelectedStock(stock);
    setShowModal(true);
  };

  const toggleWatchlist = (symbol: string) => {
    setWatchlist(prev => 
      prev.includes(symbol) 
        ? prev.filter(s => s !== symbol)
        : [...prev, symbol]
    );
  };

  const getSectorColor = (sector: string) => {
    const colors = {
      'Technology': 'text-blue-400 bg-blue-600/20',
      'Energy': 'text-orange-400 bg-orange-600/20',
      'Automotive': 'text-green-400 bg-green-600/20'
    };
    return colors[sector as keyof typeof colors] || 'text-gold-400 bg-gold-600/20';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gold-400 mb-4">
          Company Shares & Tokenized Assets
        </h1>
        <p className="text-gold-600 text-lg max-w-3xl mx-auto">
          Trade tokenized shares of leading companies. Own fractional shares 
          with the security of blockchain technology and 24/7 trading availability.
        </p>
      </div>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card glow className="text-center">
          <Building className="w-8 h-8 text-gold-400 mx-auto mb-4" />
          <h3 className="text-gold-600 text-sm font-medium mb-2">Portfolio Value</h3>
          <p className="text-2xl font-bold text-gold-400">$21,740.00</p>
          <p className="text-green-400 text-sm mt-1">+5.8% (24h)</p>
        </Card>
        
        <Card glow className="text-center">
          <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-4" />
          <h3 className="text-gold-600 text-sm font-medium mb-2">Total Shares</h3>
          <p className="text-2xl font-bold text-green-400">175</p>
          <p className="text-gold-600 text-sm mt-1">3 companies</p>
        </Card>
        
        <Card glow className="text-center">
          <Star className="w-8 h-8 text-blue-400 mx-auto mb-4" />
          <h3 className="text-gold-600 text-sm font-medium mb-2">Watchlist</h3>
          <p className="text-2xl font-bold text-blue-400">{watchlist.length}</p>
          <p className="text-gold-600 text-sm mt-1">tracked stocks</p>
        </Card>
      </div>

      {/* My Portfolio */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gold-400">My Portfolio</h2>
        
        <Card glow>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gold-600/20">
                  <th className="text-left py-3 text-gold-400">Stock</th>
                  <th className="text-right py-3 text-gold-400">Shares</th>
                  <th className="text-right py-3 text-gold-400">Avg Price</th>
                  <th className="text-right py-3 text-gold-400">Current Value</th>
                  <th className="text-right py-3 text-gold-400">P&L</th>
                </tr>
              </thead>
              <tbody>
                {portfolioStocks.map((stock) => {
                  const currentStock = stocks.find(s => s.symbol === stock.symbol);
                  const pnl = stock.currentValue - (stock.shares * stock.avgPrice);
                  const pnlPercent = ((pnl / (stock.shares * stock.avgPrice)) * 100);
                  
                  return (
                    <tr key={stock.symbol} className="border-b border-gold-600/10 hover:bg-gold-600/5">
                      <td className="py-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{currentStock?.logo}</span>
                          <div>
                            <div className="font-semibold text-gold-400">{stock.symbol}</div>
                            <div className="text-sm text-gold-600">{currentStock?.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-right py-4 text-gold-400 font-semibold">
                        {stock.shares}
                      </td>
                      <td className="text-right py-4 text-gold-600">
                        ${stock.avgPrice.toFixed(2)}
                      </td>
                      <td className="text-right py-4 text-gold-400 font-semibold">
                        ${stock.currentValue.toFixed(2)}
                      </td>
                      <td className={`text-right py-4 font-semibold ${
                        pnl >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {pnl >= 0 ? '+' : ''}${pnl.toFixed(2)} ({pnlPercent.toFixed(2)}%)
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Available Stocks */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gold-400">Available Stocks</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">Filter by Sector</Button>
            <Button variant="outline" size="sm">Sort by Performance</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stocks.map((stock) => (
            <Card key={stock.symbol} glow>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{stock.logo}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gold-400">{stock.symbol}</h3>
                    <p className="text-gold-600 text-sm">{stock.name}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleWatchlist(stock.symbol)}
                  className={`p-1 rounded ${
                    watchlist.includes(stock.symbol)
                      ? 'text-gold-400 bg-gold-600/20'
                      : 'text-gold-600 hover:text-gold-400'
                  }`}
                >
                  <Star size={16} fill={watchlist.includes(stock.symbol) ? 'currentColor' : 'none'} />
                </button>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-2xl font-bold text-gold-400">${stock.price}</span>
                  <span className={`flex items-center space-x-1 text-sm font-semibold ${
                    stock.change >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    <TrendingUp size={12} className={stock.change < 0 ? 'rotate-180' : ''} />
                    <span>{stock.change >= 0 ? '+' : ''}${stock.change} ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent}%)</span>
                  </span>
                </div>
                
                <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getSectorColor(stock.sector)}`}>
                  {stock.sector}
                </span>
              </div>

              <p className="text-gold-600 text-sm mb-4 line-clamp-2">{stock.description}</p>

              <div className="grid grid-cols-2 gap-2 text-xs text-gold-600 mb-4">
                <div>
                  <span className="block">Market Cap</span>
                  <span className="text-gold-400 font-semibold">{stock.marketCap}</span>
                </div>
                <div>
                  <span className="block">Volume</span>
                  <span className="text-gold-400 font-semibold">{stock.volume}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handleViewStock(stock)}
                >
                  Trade
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleViewStock(stock)}
                >
                  <Eye size={14} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Stock Details Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={selectedStock ? `${selectedStock.symbol} - ${selectedStock.name}` : ''}
      >
        {selectedStock && (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="text-4xl">{selectedStock.logo}</span>
              <div>
                <h3 className="text-2xl font-bold text-gold-400">{selectedStock.symbol}</h3>
                <p className="text-gold-600">{selectedStock.name}</p>
                <span className={`inline-block px-2 py-1 rounded text-xs font-medium mt-2 ${getSectorColor(selectedStock.sector)}`}>
                  {selectedStock.sector}
                </span>
              </div>
            </div>

            <div className="bg-gold-600/10 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gold-600">Current Price:</span>
                <span className="text-2xl font-bold text-gold-400">${selectedStock.price}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gold-600">24h Change:</span>
                <span className={`font-semibold ${
                  selectedStock.change >= 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {selectedStock.change >= 0 ? '+' : ''}${selectedStock.change} ({selectedStock.changePercent >= 0 ? '+' : ''}{selectedStock.changePercent}%)
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-gold-400 font-semibold mb-2">Company Description</h4>
              <p className="text-gold-600 text-sm leading-relaxed">{selectedStock.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/30 rounded-lg p-3">
                <p className="text-gold-600 text-sm">Market Cap</p>
                <p className="text-gold-400 font-semibold">{selectedStock.marketCap}</p>
              </div>
              <div className="bg-black/30 rounded-lg p-3">
                <p className="text-gold-600 text-sm">Volume (24h)</p>
                <p className="text-gold-400 font-semibold">{selectedStock.volume}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-gold-400 font-semibold">Trade Options</h4>
              <div>
                <label className="block text-gold-400 text-sm font-medium mb-2">
                  Number of Shares
                </label>
                <input
                  type="number"
                  className="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none"
                  placeholder="0"
                />
              </div>
              
              <div className="flex space-x-2">
                <Button className="flex-1">Buy Shares</Button>
                <Button variant="secondary" className="flex-1">Sell Shares</Button>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => toggleWatchlist(selectedStock.symbol)}
              >
                {watchlist.includes(selectedStock.symbol) ? 'Remove from' : 'Add to'} Watchlist
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CompanyShares;