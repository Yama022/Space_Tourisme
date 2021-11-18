import React from 'react';
import background from 'src/assets/destination/background-destination-desktop.jpg';
import Header from 'src/components/Header';
import { Link } from 'react-router-dom';
import { RiCheckboxBlankCircleFill, RiCheckboxBlankCircleLine } from 'react-icons/ri';

import './styles.scss';

export default function Crew() {
  return (
    <div className="home" style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      backgroundSize: 'cover',      
      objectFit: 'contain',
    }}>
      <div className="crew">
        <Header />
        <div className="crew__title">
          <h1><span>02</span>Meet your crew</h1>
        </div>

        <div className="crew__image">
          
        </div>

        <div className="crew__content"> 
          <div className="crew__content__title">
            <nav>
              <Link to="/douglas" className="crew__content__title__select" activeClassName="crew__content__title__select--active" exact>
                <h5><RiCheckboxBlankCircleFill/></h5>
              </Link>
              <Link to="/mark" className="crew__content__title__select" activeClassName="crew__content__title__select--active" exact>
                <h5><RiCheckboxBlankCircleLine/></h5>
              </Link>
              <Link to="/victor" className="crew__content__title__select" activeClassName="crew__content__title__select--active" exact>
                <h5><RiCheckboxBlankCircleLine/></h5>
              </Link>
              <Link to="/anousheh" className="crew__content__title__select" activeClassName="crew__content__title__select--active" exact>
                <h5><RiCheckboxBlankCircleLine/></h5>
              </Link>
            </nav>
          </div>
          <div className="crew__content__text">
          </div>

        </div>
      </div>

    </div>
  );
}
