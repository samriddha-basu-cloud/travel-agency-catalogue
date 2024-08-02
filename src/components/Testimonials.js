import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';

// Example testimonial data
const testimonials = [
  {
    name: 'John Doe',
    title: 'Satisfied Customer',
    quote: 'This travel agency provided an unforgettable experience! Highly recommend their services.',
    image: person1,
    rating: 5,
  },
  {
    name: 'Jane Smith',
    title: 'Happy Traveler',
    quote: 'A fantastic journey with top-notch service. Every detail was taken care of.',
    image: person2,
    rating: 5,
  },
  {
    name: 'Alice Johnson',
    title: 'Great Experience',
    quote: 'Exceptional service and amazing destinations. Will definitely book with them again.',
    image: person3,
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    className="w-full md:w-96 bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
  >
    <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <motion.img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
        initial={{ scale: 0, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.3 + index * 0.2, type: 'spring', stiffness: 260, damping: 20 }}
      />
    </div>
    <div className="p-6">
      <Quote size={24} className="text-yellow-400 mb-4" style={{ transform: "scaleX(-1)" }} />
      <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
          <p className="text-sm text-gray-600">{testimonial.title}</p>
        </div>
        <div className="flex space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400 fill-current" />
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <motion.h2
        className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Our Clients Say
      </motion.h2>
      <motion.p
        className="text-xl text-center text-gray-600 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Hear from our satisfied travelers about their unforgettable experiences
      </motion.p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
