function MenuToggle({ closed, toggleMenu }) {
    return (
      <div className="menu_btn_wrapper">
        <svg
          className={`menu_toggle_icon ${!closed ? 'menu_open' : ''}`}
          viewBox="25 25 50 50"
          width="25"
          onClick={toggleMenu}
          aria-expanded={!closed}
          aria-label="Toggle menu"
        >
          <path className="menu_line line_top" d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
          <path className="menu_line line_middle" d="m 70,50 h -40" />
          <path className="menu_line line_bottom" d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
        </svg>
      </div>
    );
  }
  
  export default MenuToggle;
  