import React from 'react';
import Header from 'src/components/Header';
import Choice from 'src/components/Crew/choice';
import victor from 'src/assets/crew/image-victor-glover.png';
import background from 'src/assets/destination/background-destination-desktop.jpg'; 

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
            <img src={victor} />
          </div>

          <div className="crew__content"> 
            <div className="crew__content__text">

              <div className="crew__content__text__title">
                <h3>PILOT</h3>
                <h2>VICTOR GLOVER</h2>
              </div>

              <div className="crew__content__text__desc">
                <p>Pilot on the first operational flight of the SpaceX Crew Dragon 
                  to the International Space Station. Glover is a commander in the U.S. 
                  Navy where he pilots an F/A-18.
                  He was a crew member of Expedition 64, and served as a station systems flight engineer. 
                </p>
              </div>

            </div>

            <Choice />
          </div>
        </div>

    </div>
  );
}
