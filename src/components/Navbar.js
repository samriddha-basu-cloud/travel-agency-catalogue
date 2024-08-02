import React, { useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png'; // Importing the logo

const menuItems = [
  { name: 'Home', href: '#' },
  { name: 'Packages', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Contact', href: '#' },
];

const MenuButton = ({ isOpen, toggleMenu }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={toggleMenu}
    className="text-white bg-white/20 p-2 rounded-md"
  >
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </motion.button>
);

const MenuItem = ({ item, index, onClick }) => (
  <motion.a
    href={item.href}
    className="px-4 py-2 rounded-md bg-white/20 hover:bg-white/30 text-white hover:text-yellow-300 transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg text-lg sm:text-base"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {item.name}
  </motion.a>
);

const MobileMenu = ({ isOpen, toggleMenu }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed top-16 inset-x-0 bg-gradient-to-r from-blue-500 to-purple-600 z-40 backdrop-blur-md bg-opacity-90 shadow-lg"
      >
        <div className="flex flex-col space-y-2 p-4">
          {menuItems.map((item, index) => (
            <MenuItem key={item.name} item={item} index={index} onClick={toggleMenu} />
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-opacity-90 shadow-lg">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white md:text-xl"
            >
              <img src={logo} alt="Travel Agency Logo" className="h-12 md:h-14" />
            </motion.div>
            <div className="hidden md:flex space-x-4">
              {menuItems.map((item, index) => (
                <MenuItem key={item.name} item={item} index={index} />
              ))}
            </div>
            <div className="md:hidden">
              <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className="h-16" /> {/* Spacer for fixed navbar */}
    </>
  );
};

export default Navbar;
