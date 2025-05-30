import { Link, useLocation } from 'react-router-dom';

function MobileMenu({ toggleMenu }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <nav>
      <div className="mobile_menu_container">
        <ul>
          <li>
            <Link to='/' onClick={toggleMenu} className={isActive('/') ? 'active_menu' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/projects' onClick={toggleMenu} className={isActive('/projects') ? 'active_menu' : ''}>
              Projects
            </Link>
          </li>
          <li>
            <Link to='/experience' onClick={toggleMenu} className={isActive('/experience') ? 'active_menu' : ''}>
              Experience
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MobileMenu;
