import React from 'react'
import { Routes, Route, Router } from 'react-router-dom';
import Contact from './components/Contact';
import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/Navbar';
import Dishes from './components/Dishes';
import Testimonials from './components/Testimonials';
import Stars from './components/Stars';
import Whyus from './components/Whyus';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stars />
      <Whyus />
      <About />
      <Dishes />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
