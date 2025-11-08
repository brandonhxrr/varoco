import React from 'react';

const Logo: React.FC<{ width?: number; height?: number }> = ({ width = 40, height = 40 }) => (
  <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1_2)">
      <rect width="100" height="100" fill="#1C1C1C"/>
      <path d="M39.2812 82L16.7812 19.7969H37.9219L59.4375 82H39.2812ZM61.9688 80.125L52.6406 52.75L62.6719 19.7969H83.4844L61.9688 80.125Z" fill="url(#paint0_linear_1_2)"/>
    </g>
    <defs>
      <linearGradient id="paint0_linear_1_2" x1="50.5" y1="-6" x2="50.5" y2="114" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4E61D3"/>
        <stop offset="1" stopColor="#8C00FF"/>
      </linearGradient>
      <clipPath id="clip0_1_2">
        <rect width="100" height="100" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export default Logo;
