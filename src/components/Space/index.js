// == Import
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from 'src/components/Home'
import Destination from 'src/components/Destination';
import './styles.scss';

// == Composant
export default function Space() {
  return (
    <Router>
      <div className="space">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
        </Routes>
      </div>
    </Router>
  );
};
