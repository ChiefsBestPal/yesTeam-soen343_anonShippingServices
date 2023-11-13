import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './pages/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div style={{ height: '120vh' }}>
      <Header></Header>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
