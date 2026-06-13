import React from 'react';

const LogoMonogram = ({ size = 32 }) => {
  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-soft"
      >
        {/* Split hexagon frame */}
        <path
          d="M18 16L32 8L46 16L54 32L46 48L32 56L18 48L10 32L18 16Z"
          stroke="white"
          strokeWidth="2.4"
          opacity="0.35"
        />
        <path
          d="M20 18L32 12L44 18L50 32L44 46L32 52L20 46L14 32L20 18Z"
          stroke="white"
          strokeWidth="2.4"
        />
        {/* PR letters */}
        <text
          x="32"
          y="36"
          textAnchor="middle"
          fill="white"
          fontSize="16"
          fontWeight="600"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif"
        >
          PR
        </text>
      </svg>
      <span className="text-sm sm:text-base font-semibold tracking-[0.18em] uppercase text-slate-200">
        crafted<span className="text-brand-300">UI</span>.dev
      </span>
    </div>
  );
};

export default LogoMonogram;
