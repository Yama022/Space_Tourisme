import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiCheckboxBlankCircleFill, RiCheckboxBlankCircleLine } from 'react-icons/ri';

import './styles.scss';

export default function choice() {
  return (
    <div className="crew__content__title">
            <nav className="crew__content__title__nav">
              <NavLink to="/crew/douglas" className="crew__content__title__select" exact>
                <h5><RiCheckboxBlankCircleFill/></h5>
              </NavLink>
              <NavLink to="/crew/mark" className="crew__content__title__select" exact>
                <h5><RiCheckboxBlankCircleLine/></h5>
              </NavLink>
              <NavLink to="/crew/victor" className="crew__content__title__select" exact>
                <h5><RiCheckboxBlankCircleLine/></h5>
              </NavLink>
              <NavLink to="/crew/anousheh" className="crew__content__title__select" exact>
                <h5><RiCheckboxBlankCircleLine/></h5>
              </NavLink>
            </nav>
          </div>
  );
}
