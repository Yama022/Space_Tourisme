import React from 'react';
import Header from 'src/components/Header';
import Choice from 'src/components/Crew/choice';
import mark from 'src/assets/crew/image-mark-shuttleworth.png';
import background from 'src/assets/destination/background-destination-desktop.jpg'; 

import './styles.scss';

export default function Mark() {
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
            <img src={mark} />
          </div>

          <div className="crew__content"> 
            <div className="crew__content__text">

              <div className="crew__content__text__title">
                <h3>Mission Specialist</h3>
                <h2>MARK SHUTTLEWORTH</h2>
              </div>

              <div className="crew__content__text__desc">
                <p>Mark Richard Shuttleworth is the founder and CEO of Canonical,
                  the company behind the Linux-based Ubuntu operating system.
                  Shuttleworth became the first South African to travel to space as a space tourist.
                </p>
              </div>

            </div>

            <Choice />
          </div>
        </div>

      
    </div>
  );
}
