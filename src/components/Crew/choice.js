import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiCheckboxBlankCircleFill, RiCheckboxBlankCircleLine } from 'react-icons/ri';
import { useLocation } from "react-router-dom";

import './styles.scss';

export default function choice() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <div className="crew__content__title">
            <nav className="crew__content__title__nav">
              <NavLink to="/crew/douglas" className={splitLocation[1] === "" ? "active" : ""} exact>
                <h5><RiCheckboxBlankCircleLine/></h5>
              </NavLink>
              <NavLink to="/crew/mark" className={splitLocation[1] === "" ? "active" : ""} exact>
                <h5><RiCheckboxBlankCircleLine/></h5>
              </NavLink>
              <NavLink to="/crew/victor" className={splitLocation[1] === "" ? "active" : ""} exact>
                <h5><RiCheckboxBlankCircleLine/></h5>
              </NavLink>
              <NavLink to="/crew/anousheh" className={splitLocation[1] === "" ? "active" : ""} exact>
                <h5><RiCheckboxBlankCircleLine/></h5>
              </NavLink>
            </nav>
          </div>
  );
}
