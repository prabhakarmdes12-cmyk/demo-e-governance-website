import React from 'react';

export const AshokaEmblem: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 110"
    fill="currentColor"
    className={className}
    aria-label="National Emblem of India (Ashoka Lion Capital)"
    role="img"
  >
    {/* Base Pedestal */}
    <rect x="20" y="96" width="60" height="5" rx="1.5" />
    <rect x="15" y="101" width="70" height="5" rx="1.5" />
    {/* Dharma Chakra in base */}
    <circle cx="50" cy="98.5" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="50" cy="98.5" r="1.5" />
    
    {/* Abacus platform */}
    <path d="M 22 93 L 78 93 L 74 88 L 26 88 Z" />
    <circle cx="35" cy="90.5" r="2.5" />
    <circle cx="65" cy="90.5" r="2.5" />
    
    {/* Central Pillar / Bell Lotus Capital */}
    <path d="M 30 87 C 32 78, 68 78, 70 87 Z" />
    
    {/* Central Front Lion */}
    <path d="M 45 42 C 45 34, 48 26, 50 18 C 52 26, 55 34, 55 42 C 57 44, 60 48, 60 55 C 60 63, 56 70, 50 72 C 44 70, 40 63, 40 55 C 40 48, 43 44, 45 42 Z" />
    {/* Lion Mane Strands */}
    <path d="M 43 28 C 38 34, 39 42, 42 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 57 28 C 62 34, 61 42, 58 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 47 18 C 44 14, 42 10, 46 8 C 50 10, 50 13, 50 18 C 50 13, 50 10, 54 8 C 58 10, 56 14, 53 18" />
    {/* Lion Eyes & Snout */}
    <circle cx="47" cy="24" r="1.2" fill="#fff" />
    <circle cx="53" cy="24" r="1.2" fill="#fff" />
    <ellipse cx="50" cy="27" rx="2" ry="1.5" />
    <path d="M 48 30 Q 50 32 52 30" fill="none" stroke="currentColor" strokeWidth="1.2" />

    {/* Left Lion Profile */}
    <path d="M 38 46 C 32 40, 24 35, 23 26 C 22 20, 26 15, 30 18 C 34 22, 36 30, 39 38 Z" />
    <path d="M 23 26 C 18 32, 19 44, 25 54 C 29 60, 35 66, 40 70 C 37 62, 36 53, 38 46 Z" />
    <circle cx="27" cy="22" r="1.2" fill="#fff" />

    {/* Right Lion Profile */}
    <path d="M 62 46 C 68 40, 76 35, 77 26 C 78 20, 74 15, 70 18 C 66 22, 64 30, 61 38 Z" />
    <path d="M 77 26 C 82 32, 81 44, 75 54 C 71 60, 65 66, 60 70 C 63 62, 64 53, 62 46 Z" />
    <circle cx="73" cy="22" r="1.2" fill="#fff" />

    {/* Front Paws & Chest */}
    <path d="M 43 56 L 43 78 L 47 78 L 47 58 Z" />
    <path d="M 57 56 L 57 78 L 53 78 L 53 58 Z" />
    <ellipse cx="44.5" cy="80" rx="3.5" ry="2" />
    <ellipse cx="55.5" cy="80" rx="3.5" ry="2" />
  </svg>
);

export const IndianFlag: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 24,
  height = 16,
  className = '',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 16"
    className={className}
    style={{ borderRadius: '2px', overflow: 'hidden', boxShadow: '0 0 1px rgba(0,0,0,0.3)' }}
    aria-label="National Flag of India"
    role="img"
  >
    <rect width="24" height="5.33" fill="#FF9933" />
    <rect y="5.33" width="24" height="5.33" fill="#FFFFFF" />
    <rect y="10.66" width="24" height="5.34" fill="#138808" />
    <circle cx="12" cy="8" r="2.2" fill="none" stroke="#000080" strokeWidth="0.6" />
    <circle cx="12" cy="8" r="0.6" fill="#000080" />
    {/* Chakra spokes */}
    {[...Array(12)].map((_, i) => (
      <line
        key={i}
        x1="12"
        y1="8"
        x2={12 + 2.1 * Math.cos((i * 30 * Math.PI) / 180)}
        y2={8 + 2.1 * Math.sin((i * 30 * Math.PI) / 180)}
        stroke="#000080"
        strokeWidth="0.3"
      />
    ))}
  </svg>
);
