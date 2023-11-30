import React from 'react';
import { BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './pages/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import Quote from './pages/Quote/Quote';
import Footer from './pages/Footer/Footer';
import Support from './pages/Support/Support';
import Review from './pages/Review/Review';
import AboutUs from './pages/AboutUs/AboutUs';
import { Payment } from './pages/Payment/Payment';
import Tracking from './pages/Tracking/Tracking';
import Delivery from './pages/Delivery/Delivery';

function App() {
  return (
      //style={{ height: '100%' }}>
    <div className='app' >
        <BrowserRouter>
            <Header></Header>
            <main style={{flexGrow: 1}}>
              <Routes>
                <Route path='/'  element={<Dashboard />} />
                <Route path='/aboutus'  element={<AboutUs />} />
                <Route path='/quote'  element={<Quote />} />
                <Route path='/tracking'  element={<Tracking />} />
                <Route path='/delivery'  element={<Delivery />} />
                <Route path='/support'  element={<Support />} />
                <Route path='/payment'  element={<Payment />} />
                <Route path='/review'  element={<Review />} />
              </Routes>
            </main>

            <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
