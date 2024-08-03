import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Star, Quote } from 'lucide-react';

const fetchGoogleReviews = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/google-reviews');
    return response.data;
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return [];
  }
};

const TestimonialCard = ({ testimonial }) => {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.substr(0, maxLength)}...` : text;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={18} 
              className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
              fill={i < testimonial.rating ? "#FBBF24" : "none"}
            />
          ))}
        </div>
        <Quote size={24} className="opacity-60 text-blue-500 mb-4" style={{ transform: "scaleX(-1) scaleY(-1)" }} />
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          {truncateText(testimonial.text, 120)}
        </p>
        <div className="flex items-center">
          <img
            src={testimonial.profile_photo_url || "/api/placeholder/56/56"}
            alt={testimonial.author_name}
            className="w-12 h-12 rounded-full border-2 border-blue-100"
          />
          <div className="ml-4">
            <h3 className="text-md font-semibold text-gray-900">{testimonial.author_name}</h3>
            <p className="text-xs text-gray-500">{testimonial.relative_time_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      setIsLoading(true);
      try {
        const fetchedReviews = await fetchGoogleReviews();
        setReviews(fetchedReviews);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch reviews. Please try again later.');
        setIsLoading(false);
      }
    };

    getReviews();
  }, []);

  if (isLoading) {
    return <div className="text-center py-20">Loading reviews...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
             Our Clients' Voices
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped our clients achieve their goals through our exceptional service and expertise.
          </p>
        </div>
        {reviews.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <TestimonialCard key={index} testimonial={review} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No reviews available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default Testimonials;