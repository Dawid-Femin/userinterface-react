import React from 'react';
import '../style/Steps.css';

const Steps = () => {
  return (
    <>
    <h1>Sposób w jaki pracujemy</h1>
    <p>Poniżej zaprezentowano procedurę importu pojazdów z USA</p>
    <div className="stepsContainer">
        <div className='number'><h1>1<br></br>KROK</h1></div>
        <div className='step'>
          <h1>WYBÓR POJAZDU</h1>
          <p>Interesuje Cię konkretny model samochodu? Nasi specjaliści pomogą Ci znaleźć pojazd spełniający twoje kryteria. Wraz z naszymi specjalistami ustalisz wymagania jak marka, model, rok produkcji czy wersja wyposażenia oraz stan techniczny szukanego pojazdu.</p>
        </div>
    </div>
    <div className="stepsContainer">
        <div className='number'><h1>2<br></br>KROK</h1></div>
        <div className='step'>
          <h1>UMOWA ORAZ KAUCJA</h1>
          <p>Po ustaleniu opłat i kwoty, jaką jesteście gotowi przeznaczyć na licytację, przechodzimy do podpisania umowy. Wymagana jest także wpłata kaucji w wysokości 10% założonej sumy. Kaucja jest zwracana, gdy  kwota pojazdu będzie wyższa od zadeklarowanej przez klienta</p>
        </div>
    </div>
    <div className="stepsContainer">
        <div className='number'><h1>3<br></br>KROK</h1></div>
        <div className='step'>
          <h1>ZAKUP POJAZDU</h1>
          <p>Jeżeli uda się wygrać aukcję mają Państwo dwa dni na wpłacenie całości wylicytowanej kwoty. Jeżeli nie dokonacie w terminie wpłaty zostaniecie pozbawienia kaucji i obarczeni dodatkowymi opłatami operacyjnymi.</p>
        </div>
    </div>
    <div className="stepsContainer">
        <div className='number'><h1>4<br></br>KROK</h1></div>
        <div className='step'>
          <h1>TRANSPORT DO EUROPY</h1>
          <p>Kiedy wpłata za aukcje wpłyną na wskazane konto rozpoczynamy organizację transportu samochodu. Następuje załadunek samochodu do kontenera morskiego oraz informujemy o przewidywanym czasie dotarcia do jednego z Europejskich portów.</p>
        </div>
    </div>
    <div className="stepsContainer">
        <div className='number'><h1>5<br></br>KROK</h1></div>
        <div className='step'>
          <h1>ODBIÓR POJAZDU W POLSCE</h1>
          <p>Po rozładunku pojazd przechodzi procedure celną. Firma odpowiedzialna za transport wystawia poszczególne rachunki (CŁO, VAT, opłaty portowe)- po ich opłaceniu pojazd transportowany jest do naszej firmy bądź pod konkretny adres.</p>
        </div>
    </div>
    </>
  );
};

export default Steps;