import React from 'react';

interface StandMetricsLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon-only' | 'white';
}

export const StandMetricsLogo: React.FC<StandMetricsLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
}) => {
  const sizeMap = {
    sm: { icon: 34, title: 'text-base sm:text-lg', subtitle: 'text-[8.5px]' },
    md: { icon: 42, title: 'text-xl', subtitle: 'text-[9.5px]' },
    lg: { icon: 56, title: 'text-2xl', subtitle: 'text-xs' },
    xl: { icon: 70, title: 'text-3xl', subtitle: 'text-sm' },
  };

  const { icon, title, subtitle } = sizeMap[size];
  const isWhite = variant === 'white';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Isotipo 3D Booth + Sensor Cone + Growth Chart (IMG_3137) */}
      <div
        className="relative flex-shrink-0 flex items-center justify-center"
        style={{ width: icon, height: icon }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-md transition-transform duration-300 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Canopy Frame gradient */}
            <linearGradient id="canopyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4bbba5" />
              <stop offset="100%" stopColor="#1e5f56" />
            </linearGradient>

            {/* Light beam cone from ceiling camera */}
            <linearGradient id="sensorConeGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#55e5c1" stopOpacity="0.6" />
              <stop offset="40%" stopColor="#55e5c1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#55e5c1" stopOpacity="0.05" />
            </linearGradient>

            {/* Booth Floor platform */}
            <linearGradient id="boothFloor" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dff8f1" />
              <stop offset="100%" stopColor="#b4ecdE" />
            </linearGradient>
          </defs>

          {/* Isometric Diamond Floor Base */}
          <path
            d="M 50 86 L 18 67 L 50 48 L 82 67 Z"
            fill="url(#boothFloor)"
            stroke="#1b3d39"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Base side thickness */}
          <path
            d="M 18 67 L 18 71 L 50 90 L 82 71 L 82 67 L 50 86 Z"
            fill="#122e2b"
            stroke="#122e2b"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Mint Back Wall */}
          <path
            d="M 24 63 L 24 28 C 24 22 28 18 35 18 L 49 18 L 49 48 L 24 63 Z"
            fill="#86d4c3"
            stroke="#1b3d39"
            strokeWidth="2"
          />

          {/* Architectural Canopy Roof / Top Frame */}
          <path
            d="M 33 18 L 68 18 L 78 25 L 45 25 Z"
            fill="url(#canopyGrad)"
            stroke="#1b3d39"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M 68 18 L 78 25 L 78 30 L 68 23 Z"
            fill="#1a534c"
            stroke="#1b3d39"
            strokeWidth="1"
          />

          {/* Display Screen on Back Wall */}
          <path
            d="M 28 35 L 43 30 L 43 43 L 28 48 Z"
            fill="#294d54"
            stroke="#1b3d39"
            strokeWidth="1.5"
          />

          {/* Reception Counter Desk */}
          <path
            d="M 33 59 L 45 52 L 45 64 L 33 71 Z"
            fill="#1e5f56"
            stroke="#122e2b"
            strokeWidth="1.2"
          />
          <path
            d="M 33 59 L 45 52 L 43 50 L 31 57 Z"
            fill="#4bbba5"
            stroke="#122e2b"
            strokeWidth="1"
          />

          {/* Ceiling Sensor / Dome Camera */}
          <ellipse cx="51" cy="23.5" rx="4.5" ry="2.8" fill="#122e2b" />
          <circle cx="51" cy="24.2" r="1.8" fill="#55e5c1" />

          {/* Translucent Sensor Light Beam Cone */}
          <polygon
            points="51,25 35,69 67,73"
            fill="url(#sensorConeGrad)"
          />

          {/* Ascending 3D Bar Chart (Teal Bars) */}
          {/* Bar 1 */}
          <path d="M 52 72 L 56 70 L 56 61 L 52 63 Z" fill="#1b5a52" stroke="#122e2b" strokeWidth="1" />
          {/* Bar 2 */}
          <path d="M 58 69 L 63 66 L 63 53 L 58 56 Z" fill="#1f6960" stroke="#122e2b" strokeWidth="1" />
          {/* Bar 3 */}
          <path d="M 65 65 L 70 62 L 70 44 L 65 47 Z" fill="#247a6f" stroke="#122e2b" strokeWidth="1" />
          {/* Bar 4 */}
          <path d="M 72 61 L 77 58 L 77 35 L 72 38 Z" fill="#2d8f82" stroke="#122e2b" strokeWidth="1" />

          {/* Upward Growth Arrow (IMG_3137) */}
          <path
            d="M 45 74 L 53 61 L 61 65 L 70 44 L 79 31"
            stroke="#38c399"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Arrow Head */}
          <path
            d="M 79 31 L 72 32 L 82 27 L 82 36 Z"
            fill="#38c399"
            stroke="#38c399"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand Typography matching IMG_3137 */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-baseline tracking-tight">
            <span
              className={`font-black ${title} ${
                isWhite ? 'text-white' : 'text-[#1c3c43]'
              }`}
            >
              Stand
            </span>
            <span
              className={`font-black ${title} ${
                isWhite ? 'text-[#55e5c1]' : 'text-[#208b7d]'
              }`}
            >
              Metrics
            </span>
          </div>
          <span
            className={`font-extrabold tracking-[0.16em] uppercase ${subtitle} ${
              isWhite ? 'text-[#aab8ca]' : 'text-[#2a454d]'
            }`}
          >
            Análisis y ROI de Stands
          </span>
        </div>
      )}
    </div>
  );
};
