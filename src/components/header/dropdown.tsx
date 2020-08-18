import React from 'react';
import { NavLink } from 'react-router-dom';


const Dropdown = () => {
  return (
    <div className="dropdown">
      <NavLink to="/home" className="item" activeClassName="active">
        Strona główna
      </NavLink>
      <NavLink to="/about" className="item" activeClassName="active">
        O nas
      </NavLink>
      <NavLink to="/contact" className="item" activeClassName="active">
        Kontakt
      </NavLink>
      <NavLink to="/panel" className="item" activeClassName="active">
        Panel gracza  
      </NavLink>
    </div>
  );
};
export default Dropdown;
