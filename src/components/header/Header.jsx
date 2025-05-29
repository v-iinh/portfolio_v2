import React, { useState, useEffect } from 'react';
import MenuToggle from './sections/MenuToggle';
import MobileMenu from './sections/MobileMenu';
import './Header.css';

function Header() {
  const [closed, setClosed] = useState(true);
  const toggleMenu = () => setClosed(!closed);

  useEffect(() => {
    const app = document.querySelector('.App');
    if (app) app.style.overflowY = closed ? 'auto' : 'hidden';
  }, [closed]);

  return (
    <div id='header'>
      <div className="header_wrapper">
        <div className="logo_container">Vinh.</div>
        <MenuToggle closed={closed} toggleMenu={toggleMenu} />
      </div>
      {!closed && <MobileMenu toggleMenu={toggleMenu} />}
    </div>
  );
}

export default Header;