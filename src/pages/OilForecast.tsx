import React, { useState, useEffect } from 'react';
import { TrendingUp, Calendar, BarChart3, Brain, Target, AlertCircle } from 'lucide-react';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';

const OilForecast: React.FC = () => {
  const [forecastDays, setForecastDays] = useState(7);
  const [currentPrice, setCurrentPrice] = useState(82.45);
  const [isLoading, setIsLoading] = useState(false);

  const [forecastData, setForecastData] = useState({
    predicted_price: 85.20,
    confidence: 78,
    trend: 'bullish',
    factors: [
      'OPEC+ production cuts',
      'Increased global demand',
      'Geopolitical tensions',
      'Seasonal consumption patterns'
    ]
  });

  const historicalData = [
    { date: '2025-01-01', price: 78.30 },
    { date: '2025-01-02', price: 79.15 },
    { date: '2025-01-03', price: 80.45 },
    { date: '2025-01-04', price: 81.20 },
    { date: '2025-01-05', price: 82.45 },
  ];

  const predictionRanges = [
    { days: 7, label: '1 Week', accuracy: 85 },
    { days: 14, label: '2 Weeks', accuracy: 78 },
    { days: 30, label: '1 Month', accuracy: 72 },
    { days: 90, label: '3 Months', accuracy: 65 }
  ];

  const marketFactors = [
    {
      factor: 'Supply & Demand',
      impact: 'High',
      current: 'Balanced',
      trend: 'stable',
      description: 'Global oil supply meets current demand with slight surplus'
    },
    {
      factor: 'OPEC+ Decisions',
      impact: 'Very High',
      current: 'Production Cuts',
      trend: 'bullish',
      description: 'Recent production cuts supporting higher prices'
    },
    {
      factor: 'Economic Growth',
      impact: 'High',
      current: 'Moderate',
      trend: 'bullish',
      description: 'Global economic recovery driving energy demand'
    },
    {
      factor: 'Geopolitical Events',
      impact: 'Medium',
      current: 'Tensions',
      trend: 'volatile',
      description: 'Regional conflicts affecting supply chain stability'
    }
  ];

  const generateForecast = () => {
    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const basePrice = currentPrice;
      const volatility = 0.05; // 5% volatility
      const trend = Math.random() > 0.5 ? 1 : -1;
      const timeMultiplier = forecastDays / 7; // Scale with time
      
      const predictedPrice = basePrice + (basePrice * volatility * trend * timeMultiplier);
      const confidence = Math.max(50, 90 - (forecastDays / 7) * 5); // Decrease confidence over time
      
      setForecastData({
        predicted_price: predictedPrice,
        confidence: Math.round(confidence),
        trend: predictedPrice > basePrice ? 'bullish' : 'bearish',
        factors: [
          'OPEC+ production decisions',
          'Global economic indicators',
          'Seasonal demand patterns',
          'Inventory level changes',
          'Currency fluctuations',
          'Renewable energy adoption'
        ].slice(0, 4)
      });
      
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    generateForecast();
  }, [forecastDays]);

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'bullish': return 'text-green-400';
      case 'bearish': return 'text-red-400';
      case 'volatile': return 'text-orange-400';
      default: return 'text-gold-400';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Very High': return 'text-red-400 bg-red-600/20';
      case 'High': return 'text-orange-400 bg-orange-600/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-600/20';
      default: return 'text-green-400 bg-green-600/20';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gold-400 mb-4">
          AI-Powered Oil Price Forecast
        </h1>
        <p className="text-gold-600 text-lg max-w-3xl mx-auto">
          Advanced machine learning algorithms analyze market data, geopolitical events, 
          and economic indicators to predict oil price movements with high accuracy.
        </p>
      </div>

      {/* Current Price & Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card glow className="text-center">
          <BarChart3 className="w-8 h-8 text-gold-400 mx-auto mb-4" />
          <h3 className="text-gold-600 text-sm font-medium mb-2">Current Price</h3>
          <p className="text-2xl font-bold text-gold-400">${currentPrice}</p>
          <p className="text-green-400 text-sm mt-1">+1.8% (24h)</p>
        </Card>
        
        <Card glow className="text-center">
          <Target className="w-8 h-8 text-blue-400 mx-auto mb-4" />
          <h3 className="text-gold-600 text-sm font-medium mb-2">Predicted Price</h3>
          <p className="text-2xl font-bold text-blue-400">
            ${isLoading ? '...' : forecastData.predicted_price.toFixed(2)}
          </p>
          <p className={`text-sm mt-1 ${getTrendColor(forecastData.trend)}`}>
            {forecastData.trend} trend
          </p>
        </Card>
        
        <Card glow className="text-center">
          <Brain className="w-8 h-8 text-purple-400 mx-auto mb-4" />
          <h3 className="text-gold-600 text-sm font-medium mb-2">AI Confidence</h3>
          <p className="text-2xl font-bold text-purple-400">
            {isLoading ? '...' : forecastData.confidence}%
          </p>
          <p className="text-gold-600 text-sm mt-1">{forecastDays} day forecast</p>
        </Card>
        
        <Card glow className="text-center">
          <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-4" />
          <h3 className="text-gold-600 text-sm font-medium mb-2">Price Change</h3>
          <p className={`text-2xl font-bold ${
            isLoading ? 'text-gold-400' : 
            forecastData.predicted_price > currentPrice ? 'text-green-400' : 'text-red-400'
          }`}>
            {isLoading ? '...' : 
             `${forecastData.predicted_price > currentPrice ? '+' : ''}${
               ((forecastData.predicted_price - currentPrice) / currentPrice * 100).toFixed(2)
             }%`
            }
          </p>
          <p className="text-gold-600 text-sm mt-1">vs current</p>
        </Card>
      </div>

      {/* Forecast Controls */}
      <Card glow>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h2 className="text-xl font-semibold text-gold-400 mb-2">Forecast Settings</h2>
            <p className="text-gold-600 text-sm">Select prediction timeframe for AI analysis</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {predictionRanges.map((range) => (
              <Button
                key={range.days}
                variant={forecastDays === range.days ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setForecastDays(range.days)}
              >
                {range.label}
                <span className="ml-2 text-xs opacity-75">({range.accuracy}%)</span>
              </Button>
            ))}
          </div>
        </div>
      </Card>

      {/* AI Analysis Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Prediction Chart Simulation */}
        <Card glow>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gold-400">Price Prediction Chart</h2>
            <Button variant="outline" size="sm" onClick={generateForecast}>
              Refresh Forecast
            </Button>
          </div>
          
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin w-8 h-8 border-2 border-gold-400 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-gold-600">AI analyzing market data...</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-black/30 rounded-lg p-4 h-48 flex items-end justify-between">
                {/* Simulated Chart Bars */}
                {[...Array(forecastDays)].map((_, i) => {
                  const height = 30 + Math.random() * 70;
                  const isToday = i === 0;
                  const isFuture = i > 4;
                  
                  return (
                    <div key={i} className="flex flex-col items-center space-y-2">
                      <div
                        className={`w-6 rounded-t ${
                          isToday ? 'bg-gold-400' : 
                          isFuture ? 'bg-blue-400/70' : 'bg-gold-600/70'
                        }`}
                        style={{ height: `${height}%` }}
                      ></div>
                      <span className="text-xs text-gold-600">
                        {i === 0 ? 'Now' : `+${i}d`}
                      </span>
                    </div>
                  );
                })}
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gold-400 rounded"></div>
                    <span className="text-gold-600">Historical</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-400 rounded"></div>
                    <span className="text-gold-600">Predicted</span>
                  </div>
                </div>
                <span className="text-gold-600">Price Range: $75-$90</span>
              </div>
            </div>
          )}
        </Card>

        {/* AI Insights */}
        <Card glow>
          <h2 className="text-xl font-semibold text-gold-400 mb-6">AI Market Analysis</h2>
          
          <div className="space-y-4">
            <div className="bg-gold-600/10 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Brain className="text-purple-400 w-5 h-5" />
                <span className="text-gold-400 font-semibold">Key Prediction Factors</span>
              </div>
              <ul className="space-y-2">
                {forecastData.factors.map((factor, index) => (
                  <li key={index} className="text-gold-600 text-sm flex items-center space-x-2">
                    <span className="text-gold-400">•</span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/30 rounded-lg p-4">
              <h3 className="text-gold-400 font-semibold mb-3">Model Performance</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gold-600 text-sm">7-day accuracy</span>
                  <span className="text-green-400 font-semibold">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gold-600 text-sm">30-day accuracy</span>
                  <span className="text-yellow-400 font-semibold">72%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gold-600 text-sm">Data points analyzed</span>
                  <span className="text-blue-400 font-semibold">10,000+</span>
                </div>
              </div>
            </div>

            <div className="bg-orange-600/10 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <AlertCircle className="text-orange-400 w-5 h-5" />
                <span className="text-orange-400 font-semibold">Risk Assessment</span>
              </div>
              <p className="text-gold-600 text-sm">
                Medium volatility expected due to ongoing geopolitical tensions and 
                OPEC+ policy decisions. Consider position sizing accordingly.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Market Factors Analysis */}
      <Card glow>
        <h2 className="text-xl font-semibold text-gold-400 mb-6">Market Factors Analysis</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {marketFactors.map((factor, index) => (
            <div key={index} className="bg-black/30 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-gold-400 font-semibold">{factor.factor}</h3>
                <span className={`px-2 py-1 rounded text-xs font-medium ${getImpactColor(factor.impact)}`}>
                  {factor.impact}
                </span>
              </div>
              
              <div className="space-y-2 mb-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gold-600">Current Status:</span>
                  <span className="text-gold-400">{factor.current}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gold-600">Trend:</span>
                  <span className={getTrendColor(factor.trend)}>{factor.trend}</span>
                </div>
              </div>
              
              <p className="text-gold-600 text-sm">{factor.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Historical Performance */}
      <Card glow>
        <h2 className="text-xl font-semibold text-gold-400 mb-6">Recent Price History</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gold-600/20">
                <th className="text-left py-3 text-gold-400">Date</th>
                <th className="text-right py-3 text-gold-400">Price</th>
                <th className="text-right py-3 text-gold-400">Change</th>
                <th className="text-right py-3 text-gold-400">Volume</th>
              </tr>
            </thead>
            <tbody>
              {historicalData.map((data, index) => {
                const prevPrice = index > 0 ? historicalData[index - 1].price : data.price;
                const change = data.price - prevPrice;
                const changePercent = ((change / prevPrice) * 100);
                
                return (
                  <tr key={data.date} className="border-b border-gold-600/10 hover:bg-gold-600/5">
                    <td className="py-3 text-gold-400">{data.date}</td>
                    <td className="text-right py-3 text-gold-400 font-semibold">${data.price}</td>
                    <td className={`text-right py-3 font-semibold ${
                      change >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {index === 0 ? '-' : `${change >= 0 ? '+' : ''}$${change.toFixed(2)} (${changePercent.toFixed(2)}%)`}
                    </td>
                    <td className="text-right py-3 text-gold-600">
                      {(Math.random() * 50 + 20).toFixed(1)}M
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default OilForecast;