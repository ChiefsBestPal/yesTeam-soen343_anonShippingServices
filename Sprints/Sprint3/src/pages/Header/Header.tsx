import React from 'react';
import { useNavigate, Navigate, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; // Make sure the path is correct
import companyLogo from './Company logo.png';

const Header: React.FC = () => {
  return (
    <header className='Header'>
      <div className="nav-wrapper">
        <nav className="navbar">
          <a className='nav-item' href="/"><img src={companyLogo} alt="Company Logo" /></a>
          <div className="menu-toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="nav no-search">
            <li className="nav-item"><a href="/quote">Quote</a></li>
            <li className="nav-item"><a href="/delivery">Ship/Deliver</a></li>
            <li className="nav-item"><a href="/tracking">Track</a></li>
            <li className="nav-item"><a href="/review">Reviews</a></li>
            {/*<li className="nav-item"><a href="">Login</a></li>*/}

          </ul>

          <div className="user-profile">
            <div className="user-icon-wrapper"><FontAwesomeIcon icon={faUserSecret} className="user-icon" /></div>
            <span className="username">{"Logged in: Admin"}</span>
          </div>
        </nav>

      </div>
      <div className="grad-bar"></div>
    </header>
  );
};

export default Header;
