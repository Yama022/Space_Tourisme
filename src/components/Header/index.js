import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
              <NavLink to="/">
                <h4
                  className="home__head__title__link"
                >
                  <strong>00</strong>
                  Home
                </h4>
              </NavLink>
              <NavLink to="/destination">
                <h4
                className="home__head__title__link"
                ><strong>01</strong>
                  Destination
                </h4>
              </NavLink>
              <NavLink to="/crew">
                <h4 className="home__head__title__link">
                  <strong>02</strong>
                  Crew
                  </h4>
              </NavLink>
              <NavLink to="/technology">
                <h4 className="home__head__title__link">
                  <strong>03</strong>
                Technology
                </h4>
              </NavLink>
            </nav>
      </div>
    </div>
  );
}
