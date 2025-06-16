import React from 'react';

const LinkedinIcon = ({ size = 22, color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill={color} width={size} height={size} {...props}>
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 
      108.1C24.09 108.1 0 83.37 0 53.69a53.79 
      53.79 0 01107.58 0c0 29.68-24.09 54.41-53.79 
      54.41zM447.9 448h-92.68V302.4c0-34.7-12.49-58.4-43.7-58.4-23.82 
      0-38.01 16-44.24 31.4-2.28 5.5-2.85 13.2-2.85 
      20.9V448h-92.7s1.24-267.3 0-294.1h92.7v41.7c12.3-19 
      34.3-46 83.4-46 60.9 0 106.6 39.8 106.6 
      125.4z"/>
  </svg>
);

export default LinkedinIcon;
