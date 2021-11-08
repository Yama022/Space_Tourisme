// == Import
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from 'src/components/Home'
import Destination from 'src/components/Destination';
import Crew from 'src/components/Crew';
import Technology from 'src/components/Technology';
import Moon from 'src/components/Destination/moon';
import Mars from 'src/components/Destination/mars';
import Europa from 'src/components/Destination/europa';
import Titan from 'src/components/Destination/titan';
import './styles.scss';

// == Composant
export default function Space() {
  return (
    <Router>
      <div className="space">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/moon" element={<Moon />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="/europa" element={<Europa />} />
          <Route path="/titan" element={<Titan />} />
        </Routes>
      </div>
    </Router>
  );
};
