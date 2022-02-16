import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import './styles.scss';

export default function Choice() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <div className="destination__content__title">
            <nav className="destination__content__title__nav">
              <NavLink to="/destination/moon" className={splitLocation[1] === "" ? "active" : ""} activeClassName="active" exact>
                <h5>MOON</h5>
              </NavLink>
              <NavLink to="/destination/mars" className={splitLocation[1] === "" ? "active" : ""} activeClassName="active" exact>
                <h5>MARS</h5>
              </NavLink>
              <NavLink to="/destination/europa" className={splitLocation[1] === "" ? "active" : ""} activeClassName="active" exact>
                <h5>EUROPA</h5>
              </NavLink>
              <NavLink to="/destination/titan" className={splitLocation[1] === "" ? "active" : ""} activeClassName="active" exact>
                <h5>TITAN</h5>
              </NavLink>
            </nav>
          </div>
  );
}
