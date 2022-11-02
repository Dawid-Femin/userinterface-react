import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Home from './pages/Home';
import PurchaseRules from './pages/PurchaseRules.jsx';
import Footer from './components/Footer';
import FindVehicle from './pages/FindVehicle';
import Costs from './pages/Costs';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="container">
      <nav>
        <Navigation />
      </nav>
      <header>
        <Header />
      </header>
      <section>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/purchaseRules' element={<PurchaseRules />}/>
          <Route path='/findVehicle' element={<FindVehicle />}/>
          <Route path='/costs' element={<Costs />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;