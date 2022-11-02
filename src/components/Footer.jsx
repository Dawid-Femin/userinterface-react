import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';
// import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <>
    <div className='footerContainer'>
        <div className="description">
            <p><span>Dawid Femin</span></p>
            {/* <img className='logoSize' src={logo} alt="logo" /> */}
        </div>
        <div className="description">
            <p><span>O firmie</span></p>
            <p>Do naszych zadań należy przeprowadzenie całego procesu logistycznego oraz możliwa naprawa na życzenie klienta</p>
        </div>
        <div className="description">
            <p><span>Dane kontaktowe</span></p>
            <p>Dawid Femin</p>
            <p>Tel: 555 666 777</p>
            <p>E-mail: dawid.femin@gmail.com</p>
        </div>
        <div className="description">
            <p><span>Nawigacja</span></p>
            <ul>
                <li><Link to='/'>Strona główna</Link></li>
                <li><Link to='/purchaseRules'>Zasady zakupu</Link></li>
                <li><Link to='/findVehicle'>Znajdź pojazd</Link></li>
                <li><Link to='/costs'>Oblicz koszty</Link></li>
            </ul>
        </div>
    </div>
    <div className='copyright'>
            <p>© 2022 Copyright Dawid Femin - Wszelkie prawa zastrzeżone</p>
        </div>
    </>
  );
};

export default Footer;