import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navigation.css';

const Navigation = () => {
   
  return (
    <>
        <ul className='navigation'>
          <li><Link to='/'>Strona główna</Link></li>
          <li><Link to='/purchaseRules'>Zasada zakupu</Link></li>
          <li><Link to='/findVehicle'>Znajdź pojazd</Link></li>
          <li><Link to='/costs'>Oblicz koszty</Link></li>
          <li><Link to='/contact'>Kontakt</Link></li>
        </ul>
    </>
  );
};

export default Navigation;