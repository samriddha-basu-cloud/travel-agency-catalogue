import React from 'react';
import pic1 from '../assets/pic1.webp';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.jpg';

// Example image data
const images = [
  { src: pic1, alt: 'Image 1' },
  { src: pic2, alt: 'Image 2' },
  { src: pic3, alt: 'Image 3' },
  { src: pic4, alt: 'Image 4' },
  { src: pic5, alt: 'Image 5' },
  { src: pic6, alt: 'Image 6' },
  { src: pic1, alt: 'Image 1' },
  { src: pic1, alt: 'Image 1' },
  { src: pic2, alt: 'Image 2' },
  { src: pic3, alt: 'Image 3' },
  { src: pic4, alt: 'Image 4' },
  { src: pic5, alt: 'Image 5' },
  { src: pic6, alt: 'Image 6' },
  { src: pic2, alt: 'Image 2' },
  { src: pic3, alt: 'Image 3' },
  { src: pic4, alt: 'Image 4' },
  { src: pic5, alt: 'Image 5' },
  { src: pic6, alt: 'Image 6' },
];

const Gallery = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm">
      <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        Glimpses
      </h2>
      <div className="overflow-hidden">
        <div className="grid grid-rows-2 grid-flow-col animate-scroll gap-4">
          {images.concat(images).map((image, index) => (
            <div
              key={index}
              className="w-48 h-32 mx-2 overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-scroll {
            animation: scroll 20s linear infinite;
          }

          @media (max-width: 768px) {
            .w-48 {
              width: 24rem; /* Adjust width for smaller screens */
            }
            .h-32 {
              height: 16rem; /* Adjust height for smaller screens */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Gallery;
