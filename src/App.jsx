import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HeroSlider from './HeroSlider';
import TravelCardPage from './TravelCardPage';
import VisaVisionPage from './VisaVisionPage';
import VisaInfinitePage from './VisaInfinitePage';
import UnionPayGoldPage from './UnionPayGoldPage'; // Ավելացված է UnionPay Gold էջը
import EvocaOnlineLoginPage from './EvocaOnlineLoginPage';
import EvocaSalaryPage from './EvocaSalaryPage';
import NewsListPage from './NewsListPage'; 
import NewsArticlePage from './NewsArticlePage';
import MoodysNewsPage from './MoodysNewsPage';
import FirebirdAiFactoryPage from './FirebirdAiFactoryPage';
import GreenRockNewsPage from './GreenRockNewsPage';
import MitCertifiedPage from './MitCertifiedPage';
import WilcoCardPage from './WilcoCardPage';
import AdidasNewsPage from './AdidasNewsPage';
import GlobbingNewsPage from './GlobbingNewsPage';
import ShortNumberDetails from './ShortNumberDetails';
import MortgagePage from './MortgagePage';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HeroSlider />} />
          <Route path="/travel-card" element={<TravelCardPage />} />
          <Route path="/visa-vision" element={<VisaVisionPage />} />
          
          {/* Visa Infinite-ի երթուղիները */}
          <Route path="/visa-infinite" element={<VisaInfinitePage />} />
          <Route path="/cards/visa-infinite" element={<VisaInfinitePage />} />

          {/* UnionPay Gold-ի երթուղիները */}
          <Route path="/unionpay-gold" element={<UnionPayGoldPage />} />
          <Route path="/cards/unionpay-gold" element={<UnionPayGoldPage />} />

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
          <Route path="/news/firebird-ai" element={<FirebirdAiFactoryPage />} />
          <Route path="/news/banking/ai-factory-of-firebird-has-launched-in-armenia" element={<FirebirdAiFactoryPage />} />

          {/* Green Rock-ի երթուղիները */}
          <Route path="/news/green-rock" element={<GreenRockNewsPage />} />
          <Route path="/news/banking/evocabank-and-green-rock-launched-the-banks-new-headquarters-project" element={<GreenRockNewsPage />} />

          {/* MIT Certified-ի երթուղիները */}
          <Route path="/news/mit-certified" element={<MitCertifiedPage />} />
          <Route path="/news/banking/evoca-executives-completed-generative-ai-course" element={<MitCertifiedPage />} />

          {/* Wilco Card-ի երթուղիները */}
          <Route path="/news/evocabank-wilco" element={<WilcoCardPage />} />
          <Route path="/news/products/evocabank-wilco" element={<WilcoCardPage />} />

          {/* Adidas Armenia-ի երթուղիները */}
          <Route path="/news/adidas-armenia" element={<AdidasNewsPage />} />
          <Route path="/news/products/adidas-armenia" element={<AdidasNewsPage />} />

          {/* Globbing-ի երթուղիները */}
          <Route path="/news/globbing" element={<GlobbingNewsPage />} />
          <Route path="/news/products/globbing" element={<GlobbingNewsPage />} />
          
          <Route path="/mortgage" element={<MortgagePage />} />
          <Route path="/short-number" element={<ShortNumberDetails />} />
        </Routes>
      </div>
    </Router>
  );
}