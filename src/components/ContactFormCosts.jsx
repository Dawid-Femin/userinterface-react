import React from 'react';
import '../style/ContactFormVehicle.css';

const ContactFormCosts = () => {
  return (
    <>
    <div className="formContainer">
        <input placeholder='Imię i Nazwisko*' type="text" />
        <input placeholder='Adres e-mail*' type="text" />
        <input placeholder='Numer telefonu*' type="text" />
        <input placeholder='Firma' type="text" />
        <input placeholder='Orientacyjna cena pojazdu' type="text" />
        <input placeholder='Pojemność silnika' type="text" />
        <input placeholder='Miejscowość zakupu w USA' type="text" />
        <input placeholder='Miejscowość doręczenia (PL)' type="text" />
        <textarea placeholder='Uwagi' cols="30" rows="5"></textarea>
    </div>
    </>
  );
};

export default ContactFormCosts;