import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import LanguageSelector from '../Common/LanguageSelector';
import Logo from '../Common/Logo';

const Header: React.FC = () => {
  const { state } = useApp();

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gold-600/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4 text-gold-400">
              <span className="text-sm">Welcome, {state.user.name}</span>
              <span className="text-sm font-semibold">{state.user.balance.toFixed(2)} BGC</span>
            </div>
            <LanguageSelector />
            
            {/* Bolt.new Badge in Upper-Right */}
            <div className="hidden lg:flex items-center">
              <img 
                src="/white_circle_360x360.png" 
                alt="Powered by Bolt.new" 
                className="w-12 h-12 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                title="This project was built for the Bolt Hackathon"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;