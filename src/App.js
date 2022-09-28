import React from 'react'
import { Routes, Route, Router } from 'react-router-dom';
import Contact from './components/Contact';
import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/Navbar';
import Dishes from './components/Dishes';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Dishes />
    <Testimonials />
    <Contact />
      {/* <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='/hero' element={<Hero />} />
          <Route path='/dishes' element={<Dishes />} />
          <Route path='/about' element={<About />} />
          <Route path='/testimonial' element={<Testimonials />} />
          <Route path='/contact' element={<Contact />} />
      </Routes> */}
    </>
  );
}

export default App;
