import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import background from 'src/assets/home/background-home-desktop.jpg';
// import logo from 'src/assets/shared/logo.svg';
import Header from 'src/components/Header';
import './styles.scss';

export default function Home() {


  return (

      <div className="home" style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        backgroundSize: 'cover',      
        objectFit: 'contain',
      }}>
          <Header />
        <div className="home__contain">
          <h5>So, you want to travel to
            <h1>Space</h1>
            Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </h5>
          <span>Explore</span>
        </div>
        
      </div>

  );
}
