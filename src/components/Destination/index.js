import React from 'react';
import Header from 'src/components/Header';
import Choice from 'src/components/Destination/choice';
import background from 'src/assets/destination/background-destination-desktop.jpg';

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
          <Choice />
          <div className="destination__content__text">
          </div>

        </div>
      </div>

    </div>
  );
}
