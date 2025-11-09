import React from 'react';

const EyeIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    {open ? (
      <path d="M2 11C5 5 17 5 20 11C17 17 5 17 2 11Z" stroke="#bbb" strokeWidth="2" fill="none" />
    ) : (
      <>
        <path d="M2 11C5 5 17 5 20 11C17 17 5 17 2 11Z" stroke="#bbb" strokeWidth="2" fill="none" />
        <line x1="4" y1="18" x2="18" y2="4" stroke="#bbb" strokeWidth="2" />
      </>
    )}
    <circle cx="11" cy="11" r="3" stroke="#bbb" strokeWidth="2" fill="none" />
    <circle cx="11" cy="11" r="1.5" fill="#bbb" />
  </svg>
);

export default EyeIcon;
