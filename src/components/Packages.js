import React from 'react';
import { motion } from 'framer-motion';

// Assuming these images are properly imported
import pkg1 from '../assets/pkg1.jpg';
import pkg2 from '../assets/pkg2.jpg';
import pkg3 from '../assets/pkg3.jpg';

const packages = [
  { title: 'Beach Paradise', description: 'Enjoy the sunny beaches and crystal-clear waters.', price: '$499', image: pkg1 },
  { title: 'Mountain Adventure', description: 'Explore majestic peaks and breathtaking views.', price: '$699', image: pkg2 },
  { title: 'City Tour', description: 'Discover vibrant culture and urban excitement.', price: '$299', image: pkg3 },
];

const PackageCard = ({ pkg, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
  >
    <div className="relative">
      <img src={pkg.image} alt={pkg.title} className="w-full h-56 object-cover" />
      <div className="absolute top-0 right-0 bg-yellow-400 text-gray-800 font-bold py-1 px-3 rounded-bl-lg">
        {pkg.price}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">{pkg.title}</h3>
      <p className="text-gray-600 mb-4">{pkg.description}</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-700"
      >
        Book Now
      </motion.button>
    </div>
  </motion.div>
);

const Packages = () => {
  return (
    <div className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Explore Our Packages
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;