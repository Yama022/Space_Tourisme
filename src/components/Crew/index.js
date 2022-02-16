import React from 'react';
import background from 'src/assets/destination/background-destination-desktop.jpg';
import Header from 'src/components/Header';
import Choice from 'src/components/Crew/choice';


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
          <Choice />
          <div className="crew__content__text">
          </div>

        </div>
      </div>

    </div>
  );
}
