import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stars from './components/Stars';
import Whyus from './components/Whyus';
import Dishes from './components/Dishes';
import About from './components/About';
import GetApp from './components/GetApp';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stars />
      <Whyus />
      <Dishes />
      <About />
      <GetApp />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
