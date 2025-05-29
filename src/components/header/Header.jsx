import React, { useState } from 'react';
import MenuToggle from './sections/MenuToggle';
import MobileMenu from './sections/MobileMenu';
import './Header.css';

function Header() {
  const [closed, setClosed] = useState(true);
  const toggleMenu = () => setClosed(!closed);

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