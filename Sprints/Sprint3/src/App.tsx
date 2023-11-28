import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './pages/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import Quote from './pages/Quote/Quote';
import Footer from './pages/Footer/Footer';
import Support from './pages/Support/Support';
import Review from './pages/Review/Review';


function App() {
  return (
    <div className='app' style={{ height: '100%' }}>
      <Header></Header>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
}

export default App;
