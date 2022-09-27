import React from 'react'
import { Routes, Route, Router } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import Dishes from './components/Dishes';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Navbar />}></Route>
          <Route path='/dishes' element={<Dishes />} />
          <Route path='/about' element={<About />} />
          <Route path='/testimonial' element={<Testimonials />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </>
  );
}

export default App;
