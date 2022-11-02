import React from 'react';
import header from '../assets/header.jpg';
import '../style/Header.css';


const Header = () => {
  return (
    <div className='headerContainer'>
      <img src={header} alt="Car" />
    </div>
  );
};

export default Header;