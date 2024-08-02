import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaShareAlt } from 'react-icons/fa';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const platforms = [
    { name: 'whatsapp', icon: FaWhatsapp, color: '#25D366', hoverColor: '#128C7E' },
    { name: 'facebook', icon: FaFacebookF, color: '#1877F2', hoverColor: '#0D4F8B' },
    { name: 'instagram', icon: FaInstagram, color: '#E4405F', hoverColor: '#C13584' },
  ];

  const buttonClasses = "w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-1000 ease-in-out hover:shadow-xl";

  const SocialButton = ({ platform, index }) => {
    const Icon = platform.icon;
    return (
      <a
        href="#"
        className={`absolute ${buttonClasses} ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
        style={{
          backgroundColor: platform.color,
          transform: `rotate(${isOpen ? 0 : 0}deg) translate(${isOpen ? Math.cos(index * (2 * Math.PI / 3)) * 56 : 0}px, ${isOpen ? Math.sin(index * (2 * Math.PI / 3)) * -60 : 0}px)`,
          transition: 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        }}
      >
        <div 
          className={`flex items-center justify-center w-full h-full rounded-full transition-all duration-1000 ease-in-out ${isLoading ? 'animate-spin' : ''}`}
          style={{
            backgroundColor: platform.hoverColor,
          }}
        >
          <Icon size={22} />
        </div>
      </a>
    );
  };

  return (
    <div className="fixed bottom-16 right-16 z-50">
      <div className="relative">
        {platforms.map((platform, index) => (
          <SocialButton key={platform.name} platform={platform} index={index} />
        ))}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${buttonClasses} bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000 ease-in-out ${isOpen ? 'rotate-[360deg]' : ''}`}
        >
          <div className={`relative bg-white bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-0 transition-all duration-1000`}>
            <FaShareAlt size={20} className={`transition-transform duration-1000 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default FloatingButton;