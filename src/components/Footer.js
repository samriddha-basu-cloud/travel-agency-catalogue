import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Explore',
      links: [
        { name: 'Destinations', href: '#destinations' },
        { name: 'Tours', href: '#tours' },
        { name: 'Packages', href: '#packages' },
        { name: 'Special Offers', href: '#offers' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Team', href: '#team' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Careers', href: '#careers' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'FAQs', href: '#faqs' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <motion.footer
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Travel Agency</h3>
            <p className="text-gray-300 mb-4">
              Discover the world with us. Your journey begins here.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:text-yellow-300 transition-colors duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <motion.li key={link.name} whileHover={{ x: 5 }}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-300 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 pt-8 border-t border-blue-400 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {currentYear} Travel Agency. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <motion.a
              href="mailto:info@travelagency.com"
              className="flex items-center text-gray-300 hover:text-yellow-300"
              whileHover={{ scale: 1.05 }}
            >
              <Mail size={18} className="mr-2" />
              info@travelagency.com
            </motion.a>
            <motion.a
              href="tel:+1234567890"
              className="flex items-center text-gray-300 hover:text-yellow-300"
              whileHover={{ scale: 1.05 }}
            >
              <Phone size={18} className="mr-2" />
              +1 (234) 567-890
            </motion.a>
            <motion.span
              className="flex items-center text-gray-300"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin size={18} className="mr-2" />
              123 Travel St, Adventure City
            </motion.span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
