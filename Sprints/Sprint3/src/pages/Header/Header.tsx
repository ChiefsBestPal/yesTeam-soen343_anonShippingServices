import React from 'react';
import './Header.css'; // Make sure the path is correct
import companyLogo from './Company logo.png';

const Header: React.FC = () => {
  return (
    <header className='Header'>
      <div className="grad-bar"></div>
      <div className="nav-wrapper">
        <nav className="navbar">
          <a className='nav-item' href="#"><img src={companyLogo} alt="Company Logo" /></a>
          <div className="menu-toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="nav no-search">
            <li className="nav-item"><a href="#">Quote</a></li>
            <li className="nav-item"><a href="#">Ship</a></li>
            <li className="nav-item"><a href="#">Track</a></li>
            <li className="nav-item"><a href="#">Support</a></li>
            <li className="nav-item"><a href="#">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
