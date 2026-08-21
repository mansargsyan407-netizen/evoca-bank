import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HeroSlider from './HeroSlider';
import TravelCardPage from './TravelCardPage';
import EvocaOnlineLoginPage from './EvocaOnlineLoginPage';
import EvocaSalaryPage from './EvocaSalaryPage';
import NewsArticlePage from './NewsArticlePage';
import MoodysNewsPage from './MoodysNewsPage';
import FirebirdNewsPage from './FirebirdNewsPage'; // Նոր ներմուծված էջը Firebird AI-ի համար

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HeroSlider />} />
          <Route path="/travel-card" element={<TravelCardPage />} />
          <Route path="/evoca-online" element={<EvocaOnlineLoginPage />} />
          <Route path="/evoca-salary" element={<EvocaSalaryPage />} />
          
          {/* Նորությունների Route-ները */}
          <Route path="/news/back-to-school" element={<NewsArticlePage />} />
          <Route path="/news/products/back-to-school" element={<NewsArticlePage />} />
          <Route path="/news/moodys-rating" element={<MoodysNewsPage />} />
          <Route path="/news/banking/ba3-rating-from-moodys-to-evocabank" element={<MoodysNewsPage />} />
          
          {/* Firebird AI-ի երթուղիները */}
          <Route path="/news/firebird-ai" element={<FirebirdNewsPage />} />
          <Route path="/news/banking/ai-factory-of-firebird-has-launched-in-armenia" element={<FirebirdNewsPage />} />
        </Routes>
      </div>
    </Router>
  );
}