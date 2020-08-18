import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img id="logo" src={require('../../assets/logo.png')} alt="Logo"></img>
    </Link>
  );
};

export default Logo;
