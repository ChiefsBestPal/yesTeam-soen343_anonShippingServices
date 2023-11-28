import React from "react";
import "./AboutUs.css";
import companyLogo from './company-logo-1.png';

export const AboutUs = (): JSX.Element => {
    return (
        <div className="about-us">
            <div className="whole-container">
                <div className='space'></div>
                <div className="div-2">
                    <div className="overlap-group">
                        <div className="rectangle" />
                        <img className="company-logo-2" alt="Company logo" src={companyLogo} />
                        <div className="flexcontainer">
                            <p className="text">
                  <span className="span">
                    About Us
                    <br />
                  </span>
                            </p>
                            <p className="text">
                  <span className="span">
                    <br />
                  </span>
                            </p>
                            <p className="text">
                  <span className="text-wrapper-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
