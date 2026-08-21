import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HeroSlider from './HeroSlider';
import TravelCardPage from './TravelCardPage';
import EvocaOnlineLoginPage from './EvocaOnlineLoginPage';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HeroSlider />} />
          <Route path="/travel-card" element={<TravelCardPage />} />
          <Route path="/evoca-online" element={<EvocaOnlineLoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}   
