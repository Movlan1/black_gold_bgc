import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true, 
  glow = false 
}) => {
  return (
    <div className={`
      bg-black/60 backdrop-blur-sm border border-gold-600/30 rounded-xl p-6
      ${hover ? 'hover:bg-black/70 hover:border-gold-500/50 transition-all duration-300' : ''}
      ${glow ? 'shadow-lg shadow-gold-600/20 hover:shadow-xl hover:shadow-gold-600/30' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;