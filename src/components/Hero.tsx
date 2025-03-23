
import React from 'react';
import { cn } from '@/lib/utils';

type HeroProps = {
  title: string;
  subtitle: string;
  className?: string;
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, className }) => {
  return (
    <div 
      className={cn(
        "relative w-full py-24 md:py-32 overflow-hidden bg-pattern",
        className
      )}
    >
      {/* Background dots and lines */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3">
          <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="currentColor" strokeWidth="1" 
              d="M20,20 L180,20 M20,60 L180,60 M20,100 L180,100 M20,140 L180,140 M20,180 L180,180
                 M20,20 L20,180 M60,20 L60,180 M100,20 L100,180 M140,20 L140,180 M180,20 L180,180" 
              strokeDasharray="5,5" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3">
          <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <rect width="5" height="5" x="20" y="20" fill="currentColor" />
            <rect width="5" height="5" x="40" y="20" fill="currentColor" />
            <rect width="5" height="5" x="60" y="20" fill="currentColor" />
            <rect width="5" height="5" x="20" y="40" fill="currentColor" />
            <rect width="5" height="5" x="40" y="40" fill="currentColor" />
            <rect width="5" height="5" x="60" y="40" fill="currentColor" />
            <rect width="5" height="5" x="20" y="60" fill="currentColor" />
            <rect width="5" height="5" x="40" y="60" fill="currentColor" />
            <rect width="5" height="5" x="60" y="60" fill="currentColor" />
            {/* Add more points as needed */}
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-secondary text-secondary-foreground animate-fade-in">
            Blog
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in stagger-1">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in stagger-2">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
