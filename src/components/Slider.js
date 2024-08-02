import React from 'react';
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';

import g1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.webp';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <ul className="flex items-center space-x-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full hover:bg-opacity-100 transition-opacity duration-300"></div>
    ),
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Slider {...settings} className="h-screen">
        {[g1, bg2].map((src, index) => (
          <div key={index} className="relative h-screen">
            <img 
              src={src} 
              alt={`Slider Image ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

function SampleNextArrow({ onClick }) {
  return (
    <div
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300"
      onClick={onClick}
    >
      <ChevronRight className="text-gray-800" size={24} />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300"
      onClick={onClick}
    >
      <ChevronLeft className="text-gray-800" size={24} />
    </div>
  );
}

export default ImageSlider;