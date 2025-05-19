import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [closed, setClosed] = useState(true);

  const toggleMenu = () => setClosed(!closed);

  return (
    <div id='header'>
      <div className="header_wrapper">
        <div className="logo_container">
          Vinh.
        </div>

        <div className="menu_btn_wrapper">
          <svg
            className={`ham hamRotate ham4 ${!closed ? 'active' : ''}`}
            viewBox="25 25 50 50"
            width="25"
            onClick={toggleMenu}
            aria-expanded={!closed}
            aria-label="Toggle menu"
          >
            <path
              className="line top"
              d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            />
            <path className="line middle" d="m 70,50 h -40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            />
          </svg>
        </div>
      </div>

      {!closed && (
        <nav>
          <div className="mobile_menu_container">
            <ul>
              <li><Link to='/' onClick={toggleMenu}>Home</Link></li>
              <li><Link to='/work' onClick={toggleMenu}>Work</Link></li>
              <li><Link to='/resume' onClick={toggleMenu}>Résumé</Link></li>
              <li><Link to='/contact' onClick={toggleMenu}>Contact</Link></li>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Header;