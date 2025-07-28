import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      {/* Oil Ripple Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-400/5 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-600/5 rounded-full animate-pulse blur-2xl"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-gold-500/5 rounded-full animate-pulse blur-lg"></div>
      </div>
    </div>
  );
};

export default BackgroundAnimation;