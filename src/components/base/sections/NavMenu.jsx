import React from 'react';
import { Link } from 'react-router-dom';
import navLine from '../../../assets/svgs/menu-line.svg';

function NavMenu({ menu }) {
  return (
    <nav>
      <ul>
        <li className={menu[0]}>
          <small>
            00
            <Link to='/'>
              <img src={navLine} alt='menu bullet' /> PROJECTS
            </Link>
          </small>
        </li>
        <li className={menu[1]}>
          <small>
            01
            <Link to='/experience'>
              <img src={navLine} alt='menu bullet' /> EXPERIENCE
            </Link>
          </small>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;