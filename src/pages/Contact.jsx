import React from 'react';
import '../style/Contact.css';
import map from '../assets/mapa.jpg';

const Contact = () => {
  return (
    <>
    <h1>Kontakt</h1>
    <p>Zadzwoń do nas lub skontaktuj się za pośrednictwem formularza kontaktowego</p>
    <div className="contactContainer">
      <div className="informations">
        <h1>Lokalizacja</h1>
        <p>Warszawa</p>
        <p>ul. Mazowiecka 15</p>
        <h1>Telefon</h1>
        <p>+48 555 666 777</p>
        <h1>Email</h1>
        <p>dawid.femin@gmail.com</p>
        <h1>Godziny otwarcia</h1>
        <p>Pn. - Pt. 8:00 - 18:00</p>
   
      </div>
      
      <div className="informations">
        <h1>Wyślij wiadomość</h1>
        <input type="text" placeholder='Imię i Nazwisko' />
        <input type="text" placeholder='Adres Email' />
        <textarea name="txt" id="txt" cols="30" rows="5" placeholder='Wiadomość'></textarea>        
      </div>
    </div>
    <h1>Mapa</h1>
    <p>Znajdź nas w naszym biurze</p>
    <div className="mapa">
      <img src={map} alt="Mapa" />
    </div>
    </>
  );
};

export default Contact;