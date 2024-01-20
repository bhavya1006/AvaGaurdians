import React, { useState, useEffect } from 'react';
import { BASE_URL_FRONTEND } from '../service/Api';
import { useUser } from '../store';

function Navbar() {
  const [collapse, setCollapse] = useState(false);
const {contact}=useUser()

  useEffect(() => {
    const handleResize = () => {
      setCollapse(window.innerWidth < 991);
    };
    handleResize(); // Set initial state based on window width

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNavbar = () => {
    setCollapse(!collapse);
  };

  return (
    <header>
      <nav className="my-navbar navbar navbar-expand-lg">
        <div id="product">
          <div id="product-logo">
            <img src={`${BASE_URL_FRONTEND}images/logo.png`} alt="Avagaurdian" />
          </div>
          <span id="product-name">AvaGaurdian</span>
        </div>
        <div id="navbar-options" className="container-fluid ">
          <a className="navbar-brand" href="#"> </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!collapse}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`${collapse ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item front">
                  Home
              </li>
              <li className="nav-item">
                  About
              </li>
              <li className="nav-item">
                  Contact Us
              </li>
              {contact?
              <li id="getLocationButton" className="nav-item">
              Location
          </li>:<li className="nav-item">
                  Sing In
              </li>}
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
