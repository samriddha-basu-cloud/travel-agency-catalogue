import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import axios from 'axios';

const fetchGoogleReviews = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/google-reviews');
    return response.data;
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return [];
  }
};

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    className="w-full md:w-96 bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
  >
    <div className="h-3 bg-gradient-to-r from-blue-500 to-purple-600" />
    <div className="p-8">
      <Quote size={24} className="text-gray-400 mb-4" style={{ transform: "scaleX(-1) scaleY(-1)" }} />
      <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">{testimonial.text}</p>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            src={testimonial.profile_photo_url || '/default-profile.jpg'}
            alt={testimonial.author_name}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-800">{testimonial.author_name}</h3>
          <p className="text-sm text-gray-600">{testimonial.relative_time_description}</p>
          <div className="flex mt-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const fetchedReviews = await fetchGoogleReviews();
      setReviews(fetchedReviews);
    };

    getReviews();
  }, []);

  return (
    <div className="py-24 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hear from our satisfied travelers about their unforgettable experiences with our premium travel services
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <TestimonialCard key={index} testimonial={review} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;