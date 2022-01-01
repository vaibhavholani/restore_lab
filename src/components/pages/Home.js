import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Information from '../Information';
import ImageSlider from '../Carousel';
import Leader from '../Leader';

function Home() {
  return (
    <>
      <HeroSection />
      <Information/>
      <Leader />
      <ImageSlider />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
