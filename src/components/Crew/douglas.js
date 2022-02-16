import React from 'react';
import Header from 'src/components/Header';
import Choice from 'src/components/Crew/choice';
import douglas from 'src/assets/crew/image-douglas-hurley.png';
import background from 'src/assets/destination/background-destination-desktop.jpg'; 
import './styles.scss';

export default function Douglas() {
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
            <img src={douglas} />
          </div>

          <div className="crew__content"> 
            <div className="crew__content__text">

              <div className="crew__content__text__title">
                <h3>COMMANDER</h3>
                <h2>DOUGLAS HURLEY</h2>
              </div>

              <div className="crew__content__text__desc">
                <p>Douglas Gerald Hurley is an American engineer,
                  former Marine Corps pilot and former NASA astronaut.
                  He launched into space for the third time as commander of Crew Dragon Demo-2.
                </p>
              </div>

            </div>

            <Choice />
          </div>
        </div>

    </div>
  );
}
