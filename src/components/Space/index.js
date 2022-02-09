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
import Douglas from 'src/components/Crew/douglas';
import Mark from 'src/components/Crew/mark';
import Victor from 'src/components/Crew/victor';
import Anousheh from 'src/components/Crew/anousheh';
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
          <Route path="/destination/moon" element={<Moon />} />
          <Route path="/destination/mars" element={<Mars />} />
          <Route path="/destination/europa" element={<Europa />} />
          <Route path="/destination/titan" element={<Titan />} />
          <Route path="/douglas" element={<Douglas />} />
          <Route path="/victor" element={<Victor />} />
          <Route path="/mark" element={<Mark />} />
          <Route path="/anousheh" element={<Anousheh />} />
        </Routes>
      </div>
    </Router>
  );
};
