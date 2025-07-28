import React from 'react';
import { Fuel } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-lg shadow-gold-600/30">
          <Fuel className="text-black w-6 h-6" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gold-400 rounded-full animate-pulse"></div>
      </div>
      <div>
        <h1 className="text-gold-400 font-bold text-xl tracking-wide">BLACK GOLD</h1>
        <p className="text-gold-600 text-xs">Powered by Nature, Backed by Industry</p>
      </div>
    </div>
  );
};

export default Logo;