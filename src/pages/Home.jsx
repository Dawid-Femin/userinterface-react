import React from 'react';
import '../style/Home.css';
import AboutUs from '../components/AboutUs';
import Realizations from '../components/Realizations';
import Opinions from '../components/Opinions';


const Home = () => {
  return (
    <>
    <AboutUs />
    <Realizations />
    <Opinions />
    </>
  );
};

export default Home;