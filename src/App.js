import React from 'react';
import Navbar from './components/Navbar';
import ImageSlider from './components/Slider';
import Packages from './components/Packages';
import Advertisement from './components/Advertisement';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageSlider />
      <Packages />
      <Gallery />
      <Testimonials />
      <Advertisement />
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;
