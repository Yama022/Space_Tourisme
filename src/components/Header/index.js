import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'src/assets/shared/logo.svg';

import './styles.scss';

export default function Header() {
  return (
    <div className="header">
      <div className="home">
        <div className="home__logo">
            <img src={logo} />
          </div>
          <div className="home__border"/>
        <nav className="home__head__title">
              <Link to="/">
                <h4><strong>00</strong> Home</h4>
              </Link>
              <Link to="/destination">
                <h4><strong>01</strong> Destination</h4>
              </Link>
              <Link to="/crew">
                <h4><strong>02</strong> Crew</h4>
              </Link>
              <Link to="/technology">
                <h4><strong>03</strong> Technology</h4>
              </Link>
            </nav>
      </div>
    </div>
  );
}
