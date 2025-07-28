import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TickerItem {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

const LiveTicker: React.FC = () => {
  const [tickerData, setTickerData] = useState<TickerItem[]>([
    { symbol: 'BGC', price: 0.845, change: 0.023, changePercent: 2.8 },
    { symbol: 'OIL', price: 82.45, change: -1.23, changePercent: -1.47 },
    { symbol: 'GOLD', price: 2045.30, change: 12.50, changePercent: 0.61 },
    { symbol: 'BTC', price: 43245.67, change: 1234.50, changePercent: 2.94 },
    { symbol: 'ETH', price: 2567.89, change: -45.23, changePercent: -1.73 },
    { symbol: 'SOLAR', price: 156.78, change: 3.45, changePercent: 2.25 },
    { symbol: 'WIND', price: 89.45, change: 1.23, changePercent: 1.39 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerData(prev => prev.map(item => ({
        ...item,
        price: item.price + (Math.random() - 0.5) * (item.price * 0.01),
        change: (Math.random() - 0.5) * (item.price * 0.02),
        changePercent: (Math.random() - 0.5) * 5
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/90 border-b border-gold-600/20 overflow-hidden">
      <div className="animate-scroll whitespace-nowrap py-3">
        <div className="inline-flex space-x-8">
          {tickerData.map((item, index) => (
            <div key={index} className="inline-flex items-center space-x-2 text-sm">
              <span className="text-gold-400 font-semibold">{item.symbol}</span>
              <span className="text-gold-600">${item.price.toFixed(2)}</span>
              <div className={`flex items-center space-x-1 ${
                item.change >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {item.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                <span>{item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%</span>
              </div>
            </div>
          ))}
          {/* Duplicate for seamless scrolling */}
          {tickerData.map((item, index) => (
            <div key={`duplicate-${index}`} className="inline-flex items-center space-x-2 text-sm">
              <span className="text-gold-400 font-semibold">{item.symbol}</span>
              <span className="text-gold-600">${item.price.toFixed(2)}</span>
              <div className={`flex items-center space-x-1 ${
                item.change >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {item.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                <span>{item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveTicker;