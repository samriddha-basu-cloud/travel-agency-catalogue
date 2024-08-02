import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaShareAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

  const buttonClasses = "w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl";

  const SocialButton = ({ platform, index }) => {
    const Icon = platform.icon;
    return (
      <motion.a
        href="#"
        className={`absolute ${buttonClasses}`}
        style={{
          backgroundColor: platform.color,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0,
          x: isOpen ? Math.cos(index * (2 * Math.PI / 3)) * 60 : 0,
          y: isOpen ? Math.sin(index * (2 * Math.PI / 3)) * -60 : 0,
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 20,
            delay: isOpen ? index * 0.05 : 0,
          },
        }}
        whileHover={{ scale: 1.1 }}
      >
        <div 
          className={`flex items-center justify-center w-full h-full rounded-full transition-all duration-300 ease-in-out transform ${isLoading ? 'animate-spin' : ''}`}
          style={{
            background: `linear-gradient(135deg, ${platform.color}, ${platform.hoverColor})`,
          }}
        >
          <Icon size={22} className="filter drop-shadow-lg" />
        </div>
      </motion.a>
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
          className={`${buttonClasses} bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-in-out ${isOpen ? 'rotate-[180deg]' : ''}`}
        >
          <div className={`relative bg-white bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-0 transition-all duration-300`}>
            <FaShareAlt size={20} className="transition-transform duration-300" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default FloatingButton;
