import React from 'react';
import Header from 'src/components/Header';
import background from 'src/assets/destination/background-destination-desktop.jpg'; 
import moon from 'src/assets/destination/image-moon.png';
import { NavLink } from 'react-router-dom';

import './styles.scss';

export default function Destination() {
  return (
    <div className="home" style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      backgroundSize: 'cover',      
      objectFit: 'contain',
    }}>
      <div className="destination">
        <Header />

        <div className="destination__title">
          <h1><span>01</span>Pick your Destination</h1>
        </div>

        <div className="destination__image">
          
        </div>

        <div className="destination__content"> 
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
          <div className="destination__content__text">
          </div>

        </div>
      </div>

    </div>
  );
}
