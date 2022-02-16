import React from 'react';
import Header from 'src/components/Header';
import Choice from 'src/components/Destination/choice';
import background from 'src/assets/destination/background-destination-desktop.jpg'; 
import moon from 'src/assets/destination/image-moon.png';
import { Link } from 'react-router-dom';

import './styles.scss';

export default function Moon() {
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
          <img src={moon} alt=""/>
        </div>

        <div className="destination__content"> 
          <Choice />
          <div className="destination__content__text">
            <div className="destination__content__text__title">
              <h1>MOON</h1>
            </div>
            <div className="destination__content__text__desc">
              <p>
                See our planet as you’ve never seen it before. 
                A perfect relaxing trip away to help regain perspective and come back refreshed. 
                While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
              </p>
            </div>
            <div className="destination__content__text__value">
              <div className="destination__content__text__value__dist">
                <h5>AVG. DISTANCE</h5>
                <p>384 000 KM</p>
              </div>
              <div className="destination__content__text__value__travel">
                <h5>EST. TRAVEL TIME</h5>
                <p>3 DAYS</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

