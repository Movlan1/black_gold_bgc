import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Leaf, 
  CreditCard, 
  TrendingUp, 
  Zap, 
  Building, 
  Activity, 
  User, 
  Info,
  Menu,
  X
} from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Dashboard', icon: BarChart3 },
    { path: '/ecology', label: 'Ecology & Projects', icon: Leaf },
    { path: '/bank', label: 'Bank & Cards', icon: CreditCard },
    { path: '/trading', label: 'Trading & Marketplace', icon: TrendingUp },
    { path: '/energy', label: 'Energy Resources & Staking', icon: Zap },
    { path: '/shares', label: 'Company Shares', icon: Building },
    { path: '/forecast', label: 'Oil Price Forecast', icon: Activity },
    { path: '/profile', label: 'Profile & Settings', icon: User },
    { path: '/info', label: 'Info & Contact', icon: Info },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black/90 backdrop-blur-sm border-b border-gold-600/20 sticky top-[88px] z-40">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between py-4 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gold-600/10 hover:shadow-lg hover:shadow-gold-600/20 whitespace-nowrap ${
                  isActive 
                    ? 'bg-gold-600/20 text-gold-400 shadow-lg shadow-gold-600/30' 
                    : 'text-gold-600 hover:text-gold-400'
                }`}
              >
                <Icon size={18} className={isActive ? 'animate-pulse' : ''} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden py-4">
          <button
            onClick={toggleMobileMenu}
            className="flex items-center space-x-2 text-gold-400 hover:text-gold-300 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="font-medium">Menu</span>
          </button>

          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gold-600/20 py-4">
              <div className="container mx-auto px-4 grid gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive 
                          ? 'bg-gold-600/20 text-gold-400' 
                          : 'text-gold-600 hover:bg-gold-600/10 hover:text-gold-400'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;