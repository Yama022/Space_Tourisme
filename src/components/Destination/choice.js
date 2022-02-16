import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

export default function Choice() {
  return (
    <div className="destination__content__title">
            <nav className="destination__content__title__nav">
              <NavLink to="/destination/moon" className="destination__content__title__select" exact>
                <h5>MOON</h5>
              </NavLink>
              <NavLink to="/destination/mars" className="destination__content__title__select" exact>
                <h5>MARS</h5>
              </NavLink>
              <NavLink to="/destination/europa" className="destination__content__title__select" exact>
                <h5>EUROPA</h5>
              </NavLink>
              <NavLink to="/destination/titan" className="destination__content__title__select" exact>
                <h5>TITAN</h5>
              </NavLink>
            </nav>
          </div>
  );
}
