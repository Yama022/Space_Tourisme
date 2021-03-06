import React from 'react';
import Header from 'src/components/Header';
import Choice from 'src/components/Destination/choice';
import background from 'src/assets/destination/background-destination-desktop.jpg'; 
import europa from 'src/assets/destination/image-europa.png';


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
          <img src={europa} alt=""/>
        </div>

        <div className="destination__content"> 
          <Choice />
          <div className="destination__content__text">
            <div className="destination__content__text__title">
              <h1>EUROPA</h1>
            </div>
            <div className="destination__content__text__desc">
              <p>
                The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. 
                With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
              </p>
            </div>
            <div className="destination__content__text__value">
              <div className="destination__content__text__value__dist">
                <h5>AVG. DISTANCE</h5>
                <p>628 MIL. KM</p>
              </div>
              <div className="destination__content__text__value__travel">
                <h5>EST. TRAVEL TIME</h5>
                <p>3 YEARS</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
