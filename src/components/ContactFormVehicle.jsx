import React from 'react';
import '../style/ContactFormVehicle.css';

const ContactFormVehicle = () => {
  return (
    <>
    <div className="formContainer">
        <input placeholder='Imię i Nazwisko*' type="text" />
        <input placeholder='Adres e-mail*' type="text" />
        <input placeholder='Numer telefonu*' type="text" />
        <input placeholder='Firma' type="text" />
        <input placeholder='Kwota na zakup' type="text" />
        <input placeholder='Pojemność silnika' type="text" />
        <input placeholder='Marka pojazdu' type="text" />
        <input placeholder='Model pojazdu' type="text" />
        <textarea placeholder='Dodatkowe informacje' cols="30" rows="5"></textarea>
    </div>
    </>
  );
};

export default ContactFormVehicle;