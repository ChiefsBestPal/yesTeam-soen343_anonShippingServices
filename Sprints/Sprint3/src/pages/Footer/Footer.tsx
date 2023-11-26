import React from 'react';
import './Footer.css'; // Make sure the path is correct
import { Link } from 'react-router-dom';
import companyLogo from './Company logo.png';

const Footer: React.FC = () => {
    const invisibleStyle: React.CSSProperties = {
        visibility: 'hidden',
    };
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
                        <li className="nav-item" style={invisibleStyle}><a href="#">Support</a></li>
                        <li className="nav-item" style={invisibleStyle}><a href="#">About Us</a></li>
                        <li className="nav-item" style={invisibleStyle}><a href="#">Support</a></li>
                        <li className="nav-item"><a href="#">About Us</a></li>
                        <li className="nav-item"><a href="#">Support</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Footer;