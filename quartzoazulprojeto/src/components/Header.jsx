import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css'

import logo from '../img/logo.png';
import iconLogo from '../img/iconLogo.png';

const Header = () => {
  return (
    <header className="header poly-regular">
      <img
         srcSet={`${logo} 1024w, ${iconLogo} 768w`}
        sizes="(max-width: 768px) 100vw, 1024px"
        alt="Logo da empresa Quartzo Azul"
        className="header__logo"
      />
      
      <div className="header__content">
        <nav className="header__nav" aria-label="Menu principal">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#main__about" className="header__nav-link">
                Quem somos
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Eventos
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="header__buttons">
          <button className="header__cta-button" aria-label="Comece agora">
          <Link to="/userform" className='header__sign-up-link'>Comece agora</Link>
          </button>
          <span className="header__sign-in">
            <a href="#" className="header__sign-in-link" aria-label="Sign in">
              Sign in
            </a>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;