import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'icon-only';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  size = 'md',
}) => {
  const isDark = variant === 'dark'; // Dark background means white/gold text

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-16',
  };

  const textSizes = {
    sm: { title: 'text-lg', subtitle: 'text-[8px] tracking-[0.2em]' },
    md: { title: 'text-2xl', subtitle: 'text-[9.5px] tracking-[0.25em]' },
    lg: { title: 'text-4xl', subtitle: 'text-xs tracking-[0.3em]' },
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Hexagonal Isometric P & Gate Logo Mark */}
      <svg
        viewBox="0 0 200 200"
        className={`${sizeClasses[size]} w-auto aspect-square drop-shadow-sm`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGoldPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ECCF8E" />
            <stop offset="50%" stop-color="#C5A059" />
            <stop offset="100%" stop-color="#9E7B35" />
          </linearGradient>
          <linearGradient id="logoGoldHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFF3D6" />
            <stop offset="100%" stop-color="#D9B46F" />
          </linearGradient>
          <linearGradient id="logoNavyFacet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color={isDark ? '#2A4E8C' : '#18366E'} />
            <stop offset="100%" stop-color={isDark ? '#14274E' : '#0B1B3D'} />
          </linearGradient>
          <linearGradient id="logoNavyDarkEdge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color={isDark ? '#1B3564' : '#0F244F'} />
            <stop offset="100%" stop-color={isDark ? '#0A152E' : '#040914'} />
          </linearGradient>
        </defs>

        {/* Left Side: Isometric "P" Stem & Outer Hexagon Edge */}
        <path d="M100 24 L36 61 V137 L58 124 V74 L100 50 L108 55 L108 30 Z" fill="url(#logoNavyDarkEdge)" />
        <path
          d="M58 74 L100 50 L118 60 V102 L96 115 L96 90 L80 100 V130 L100 142 L118 131 V102 L128 96 V137 L100 153 L58 128 V74 Z"
          fill="url(#logoNavyFacet)"
        />
        <path d="M58 74 V128 L80 141 V87 Z" fill="url(#logoNavyDarkEdge)" opacity="0.85" />

        {/* Center Portal / Open Gateway */}
        <path d="M96 115 L118 102 V148 L96 160 Z" fill="url(#logoGoldPrimary)" />
        <path d="M118 102 L124 105 V152 L118 148 Z" fill="url(#logoGoldHighlight)" />

        {/* Right Side: Two Vertical Gold Hexagon Columns */}
        <path d="M130 36 L144 44 V148 L130 140 Z" fill="url(#logoGoldPrimary)" />
        <path d="M144 44 L149 47 V151 L144 148 Z" fill="url(#logoGoldHighlight)" />
        
        <path d="M152 48 L164 55 V136 L152 129 Z" fill="url(#logoGoldPrimary)" />
        <path d="M164 55 L168 58 V134 L164 136 Z" fill="url(#logoGoldHighlight)" />
      </svg>

      {variant !== 'icon-only' && (
        <div className="flex flex-col leading-none">
          {/* Brand Wordmark: POLY (Navy / White) + GATE (Metallic Gold) */}
          <div className={`font-black font-display tracking-wider ${textSizes[size].title}`}>
            <span className={isDark ? 'text-white' : 'text-polygate-navy-900'}>POLY</span>
            <span className="text-polygate-gold-500 font-extrabold ml-0.5">GATE</span>
          </div>

          {/* Slogan with flanked gold rules */}
          <div className="flex items-center gap-1.5 mt-1">
            <span className="h-[1px] w-3 bg-polygate-gold-500 opacity-80" />
            <span
              className={`font-semibold uppercase font-sans ${textSizes[size].subtitle} ${
                isDark ? 'text-slate-300' : 'text-polygate-navy-900'
              }`}
            >
              OPENING NEW MARKETS
            </span>
            <span className="h-[1px] w-3 bg-polygate-gold-500 opacity-80" />
          </div>
        </div>
      )}
    </div>
  );
};
