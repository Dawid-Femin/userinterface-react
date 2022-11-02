import React from 'react';
import '../style/Realizations.css';
import BMW1 from '../assets/bmw1.jpg';
import BMW2 from '../assets/bmw2.jpg';
import BMW3 from '../assets/bmw3.jpg';
import BMW4 from '../assets/bmw4.jpg';
import AUDI1 from '../assets/audi1.jpg';
import AUDI2 from '../assets/audi2.jpg';
import AUDI3 from '../assets/audi3.jpg';
import AUDI4 from '../assets/audi4.jpg';
import MERC1 from '../assets/mer1.jpg';
import MERC2 from '../assets/mer2.jpg';
import MERC3 from '../assets/mer3.jpg';
import MERC4 from '../assets/mer4.jpg';

const Realizations = () => {
  return (
    <>
    <h1>Realizacje</h1>
    <p>Poniżej przedstawiamy kilka pojazdów, które zostały sprowadzone przez naszą firmę</p>
    
    <h1>BMW M3 Competition</h1>
      <div className='carImages'>
        <img className='imageSize' src={BMW1} alt="BMW M3 Competition" />
        <img className='imageSize' src={BMW2} alt="BMW M3 Competition" />
        <img className='imageSize' src={BMW3} alt="BMW M3 Competition" />
        <img className='imageSize' src={BMW4} alt="BMW M3 Competition" />
      </div>
      
      <h1>Audi RS6 Avant</h1>
      <div className='carImages'>
        <img className='imageSize' src={AUDI1} alt="AUDI RS6 Avant" />
        <img className='imageSize' src={AUDI2} alt="AUDI RS6 Avant" />
        <img className='imageSize' src={AUDI3} alt="AUDI RS6 Avant" />
        <img className='imageSize' src={AUDI4} alt="AUDI RS6 Avant" />
      </div>
      
      <h1>Mercedes CLA 45 AMG</h1>
      <div className='carImages'>
        <img className='imageSize' src={MERC1} alt="Mercedes CLA45" />
        <img className='imageSize' src={MERC2} alt="Mercedes CLA45" />
        <img className='imageSize' src={MERC3} alt="Mercedes CLA45" />
        <img className='imageSize' src={MERC4} alt="Mercedes CLA45" />
      </div>
    </>
  );
};

export default Realizations;