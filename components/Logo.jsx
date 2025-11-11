import React from 'react';
import logo from '../assets/img/Logo.svg'; // cambia el path si tu imagen está en otra carpeta

const Logo = ({ className = 'h-12 w-auto' }) => {
  return <img src={logo} alt="Logo" className={className} />;
};

export default Logo;
