import React from 'react';
import Header from 'src/components/Header';
import Choice from 'src/components/Crew/choice';
import anousheh from 'src/assets/crew/image-anousheh-ansari.png';
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
            <img src={anousheh} />
          </div>

          <div className="crew__content"> 
            <div className="crew__content__text">

              <div className="crew__content__text__title">
                <h3>FLIGHT ENGINEER</h3>
                <h2>Anousheh Ansari</h2>
              </div>

              <div className="crew__content__text__desc">
                <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
                  Ansari was the fourth self-funded space tourist,
                  the first self-funded woman to fly to the ISS, and the first Iranian in space. 
                </p>
              </div>

            </div>

            <Choice />
          </div>
        </div>
      
    </div>
  );
}
