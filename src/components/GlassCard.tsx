import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverable = false }) => {
  return (
    <div 
      className={`
        glass p-6 rounded-xl transition-all duration-300
        ${hoverable ? 'hover:bg-white/10 hover:border-white/20 hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
