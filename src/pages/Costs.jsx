import React from 'react';
import ContactFormCosts from '../components/ContactFormCosts';


const Costs = () => {
  return (
    <>
    <h1>Kalkulator kosztów importu pojazdu</h1>
    <p>Uzupełnij formularz, a my obliczymy dla Ciebie całkowity koszt importu pojazdu.</p>
    <p>Koszt będzie zawierał opłaty takie jak cło czy koszty transportu.</p>
    <ContactFormCosts />
    </>
  );
};

export default Costs;