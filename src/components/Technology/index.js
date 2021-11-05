import React from 'react';
import background from 'src/assets/destination/background-destination-desktop.jpg';
import Header from 'src/components/Header';

import './styles.scss';

export default function Technology() {
  return (
    <div className="home" style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      backgroundSize: 'cover',      
      objectFit: 'contain',
    }}>
      <div className="technology">
        <Header />
      </div>

    </div>
  );
}
