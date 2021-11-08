import React from 'react';
import Header from 'src/components/Header';
import background from 'src/assets/destination/background-destination-desktop.jpg'; 
import mars from 'src/assets/destination/image-mars.png';
import { Link } from 'react-router-dom';

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
          <h1><span>01</span> Pick your Destination</h1>
        </div>

        <div className="destination__image">
          <img src={mars} alt=""/>
        </div>

        <div className="destination__content"> 
          <div className="destination__content__title">
            <nav>

              <Link to="/moon" className="destination__content__title__select" activeClassName="destination__content__title__select--active" exact>
                <h5>MOON</h5>
              </Link>
              <Link to="/mars" className="destination__content__title__select" activeClassName="destination__content__title__select--active" exact>
                <h5>MARS</h5>
              </Link>
              <Link to="/europa" className="destination__content__title__select" activeClassName="destination__content__title__select--active" exact>
                <h5>EUROPA</h5>
              </Link>
              <Link to="/titan" className="destination__content__title__select" activeClassName="destination__content__title__select--active" exact>
                <h5>TITAN</h5>
              </Link>
            </nav>
          </div>
          <div className="destination__content__text">
            <div className="destination__content__text__title">
              <h1>MARS</h1>
            </div>
            <div className="destination__content__text__desc">
              <p>
                Don’t forget to pack your hiking boots. 
                You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system.
                It’s two and a half times the size of Everest!
              </p>
            </div>
            <div className="destination__content__text__value">
              <div className="destination__content__text__value__dist">
                <h5>AVG. DISTANCE</h5>
                <p>225 MIL. KM</p>
              </div>
              <div className="destination__content__text__value__travel">
                <h5>EST. TRAVEL TIME</h5>
                <p>9 MONTHS</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
