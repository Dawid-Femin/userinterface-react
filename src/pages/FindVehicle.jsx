import React from 'react';
import ContactFormVehicle from '../components/ContactFormVehicle';

const FindVehicle = () => {
  return (
    <>
      <h1>Jakiego pojazdu szukasz?</h1>
      <p>Uzupełnij formularz, a my znajdziemy dla Ciebie interesujące oferty</p>
      <ContactFormVehicle />
    </>
  );
};

export default FindVehicle;