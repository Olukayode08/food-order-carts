import React from 'react'
import Contact from './components/Contact';
import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/Navbar';
import Dishes from './components/Dishes';
import Testimonials from './components/Testimonials';
import Stars from './components/Stars';
import Whyus from './components/Whyus';
import GetApp from './components/GetApp';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stars />
      <Whyus />
      <Dishes/>
      <About />
      <GetApp />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
