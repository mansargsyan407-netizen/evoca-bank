import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HeroSlider from './HeroSlider';
import TravelCardPage from './TravelCardPage';
import EvocaOnlineLoginPage from './EvocaOnlineLoginPage';
import EvocaSalaryPage from './EvocaSalaryPage';
import NewsListPage from './NewsListPage'; 
import NewsArticlePage from './NewsArticlePage';
import MoodysNewsPage from './MoodysNewsPage';
import FirebirdNewsPage from './FirebirdNewsPage';
import WilcoCardPage from './WilcoCardPage';
import AdidasNewsPage from './AdidasNewsPage';
import GlobbingNewsPage from './GlobbingNewsPage'; // Globbing-ի էջը

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

          {/* Նորությունների ցանկի էջը */}
          <Route path="/news" element={<NewsListPage />} />

          {/* Նորությունների Route-ները */}
          <Route path="/news/back-to-school" element={<NewsArticlePage />} />
          <Route path="/news/products/back-to-school" element={<NewsArticlePage />} />
          <Route path="/news/moodys-rating" element={<MoodysNewsPage />} />
          <Route path="/news/banking/ba3-rating-from-moodys-to-evocabank" element={<MoodysNewsPage />} />
          
          {/* Firebird AI-ի երթուղիները */}
          <Route path="/news/firebird-ai" element={<FirebirdNewsPage />} />
          <Route path="/news/banking/ai-factory-of-firebird-has-launched-in-armenia" element={<FirebirdNewsPage />} />

          {/* Wilco Card-ի երթուղիները */}
          <Route path="/news/evocabank-wilco" element={<WilcoCardPage />} />
          <Route path="/news/products/evocabank-wilco" element={<WilcoCardPage />} />

          {/* Adidas Armenia-ի երթուղիները */}
          <Route path="/news/adidas-armenia" element={<AdidasNewsPage />} />
          <Route path="/news/products/adidas-armenia" element={<AdidasNewsPage />} />

          {/* Globbing-ի երթուղիները */}
          <Route path="/news/globbing" element={<GlobbingNewsPage />} />
          <Route path="/news/products/globbing" element={<GlobbingNewsPage />} />
        </Routes>
      </div>
    </Router>
  );
}