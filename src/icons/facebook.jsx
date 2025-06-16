import React from 'react';

const FacebookIcon = ({ size = 22, color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill={color} width={size} height={size} {...props}>
    <path d="M279.14 288l14.22-92.66h-88.91V127.47c0-25.35 
      12.42-50.06 52.24-50.06h40.42V6.26S260.43 
      0 225.36 0c-73.22 0-121.17 44.38-121.17 
      124.72v70.62H22.89V288h81.3v224h100.17V288z"/>
  </svg>
);

export default FacebookIcon;
