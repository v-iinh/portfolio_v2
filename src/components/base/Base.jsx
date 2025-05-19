import React from 'react';
import './Base.css';
import Hero from './sections/Hero';
import NavMenu from './sections/NavMenu';
import Footer from './sections/Footer';

function Base({ menu }) {
  return (
    <div className='base_container'>
      <Hero />
      <NavMenu menu={menu} />
      <Footer />
    </div>
  );
}

export default Base;