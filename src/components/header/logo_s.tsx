import React from 'react';
import { Link } from 'react-router-dom';

const Logo_s = () => {
  return (
    <Link to="/">
      <img
        id="logo_s"
        src={require('../../assets/logo_s.png')}
        alt="Logo"
      ></img>
    </Link>
  );
};

export default Logo_s;
