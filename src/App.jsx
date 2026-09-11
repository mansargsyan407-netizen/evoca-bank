import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './Header';
import HeroSlider from './HeroSlider';
import TravelCardPage from './TravelCardPage';
import VisaVisionDetails from './VisaVisionDetails';
import VisaInfinitePage from './VisaInfinitePage';
import UnionPayGoldPage from './UnionPayGoldPage';
import EvocaOnlineLoginPage from './EvocaOnlineLoginPage';
import EvocaSalaryPage from './EvocaSalaryPage';
import EvocaOnlineDepositPage from './EvocaOnlineDepositPage';
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
import EvocaTouchPage from './EvocaTouchPage';
import ReviewsPage from './ReviewsPage';
import EvocaDigitalCardsPage from './EvocaDigitalCardsPage';
import EvocaGiftCardPage from './EvocaGiftCardPage';
import GiftCardOrderPage from './GiftCardOrderPage';
import GiftCardOrderBlackPage from './GiftCardOrderBlackPage';
import EvocaTouchAppPage from './EvocaTouchAppPage';
import OnlinePaymentsPage from './OnlinePaymentsPage';
import EvocabankServicesPage from './EvocabankServicesPage';
import InternationalOperatorsPage from './InternationalOperatorsPage';
import UtilityPaymentsPage from './UtilityPaymentsPage';
import InternetTvPaymentsPage from './InternetTvPaymentsPage';
import RoadPolicePaymentsPage from './RoadPolicePaymentsPage';
import LoanOrganizationsPage from './LoanOrganizationsPage';
import EventsPaymentsPage from './EventsPaymentsPage';
import VisaPlatinumDetails from './VisaPlatinumDetails';
import WilcoVisaInfiniteDetails from './WilcoVisaInfiniteDetails'; 
import DigitalGiftCardDetails from './DigitalGiftCardDetails';
import MastercardGoldDetails from './MastercardGoldDetails';
import CardDetail from './CardDetail';
import UnionPayBusinessPlatinum from './UnionPayBusinessPlatinum';
import MylerGiftCardDetails from './MylerGiftCardDetails';
import CardDetails4U from "./CardDetails4U";
import MastercardGold from './MastercardGold';
import PurpleCard from './purplecard';
import BlueCard from './bluecard';
import ClassicCard from './ClassicCard';
import DarkBlueCard from './darkbluecard';
import SilverCard from './SilverCard';
import VisaBusiness from './VisaBusiness';
import DalmaGiftCard from './DalmaGiftCard'; 
import RioGiftCard from './RioGiftCard';
import VisaGoldCard from './VisaGoldCard';
import PartnersPage from './PartnersPage';
import NewsListPage from './NewsListPage';
import BankMapSection from './BankMapSection';

const MainLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Էջեր, որոնք ՈՒՆԵՆ հիմնական Header-ը */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HeroSlider />} />
          <Route path="/cards/travel-card" element={<TravelCardPage />} />
          <Route path="/cards/arca-classic" element={<CardDetails4U />} />
          <Route path="/cards/mastercard-standard" element={<MastercardGold />} />
          <Route path="/cards/visa-digital" element={<BlueCard />} />
          <Route path="/cards/visa-classic" element={<ClassicCard />} />
          <Route path="/cards/arca-classic-card" element={<DarkBlueCard />} />
          <Route path="/cards/arca-union-pay-co-badge" element={<SilverCard />} />
          <Route path="/cards/rio-card" element={<RioGiftCard />} />
          <Route path="/cards/visa-gold-card" element={<VisaGoldCard />} />

          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/addresses" element={<BankMapSection />} />
          
          {/* Visa Vision-ի երթուղիները */}
          <Route path="/visa-vision" element={<VisaVisionDetails />} />
          <Route path="/cards/visa-vision" element={<VisaVisionDetails />} />

          <Route path="/cards/visa-business-card" element={<VisaBusiness />} />
          <Route path="/cards/dalma-card" element={<DalmaGiftCard />} />

          {/* Mastercard World Digital-ի երթուղիները (ՈՒՂՂՎԱԾ Է) */}
          <Route path="/cards/mastercard-world-digital" element={<CardDetail />} />
          <Route path="/cards/mc-world-digital" element={<CardDetail />} />

          <Route path="/cards/visa-business" element={<PurpleCard />} />

          {/* UnionPay Business Platinum-ի երթուղիները */}
          <Route path="/cards/unionpay-business-platinum" element={<UnionPayBusinessPlatinum />} />
          <Route path="/cards/8" element={<UnionPayBusinessPlatinum />} />
          <Route path="/cards/myler-gift-card" element={<MylerGiftCardDetails />} />
          <Route path="/evoca-digital-cards" element={<EvocaDigitalCardsPage />} />
          <Route path="/cards/evoca-digital" element={<EvocaDigitalCardsPage />} />
          <Route path="/biometrics" element={<EvocaTouchPage />} />
          <Route path="/evocatouch" element={<EvocaTouchPage />} />
          <Route path="/visa-infinite" element={<VisaInfinitePage />} />
          <Route path="/cards/visa-infinite" element={<VisaInfinitePage />} />
          <Route path="/unionpay-gold" element={<UnionPayGoldPage />} />
          <Route path="/cards/unionpay-gold" element={<UnionPayGoldPage />} />
          <Route path="/evoca-online" element={<EvocaOnlineLoginPage />} />
          <Route path="/evoca-salary" element={<EvocaSalaryPage />} />
          <Route path="/cards/gift-card" element={<EvocaGiftCardPage />} />
          <Route path="/deposits/evoca-online" element={<EvocaOnlineDepositPage />} />
          <Route path="/evoca-online-deposit" element={<EvocaOnlineDepositPage />} />
          <Route path="/news/back-to-school" element={<NewsArticlePage />} />
          <Route path="/news/products/back-to-school" element={<NewsArticlePage />} />
          <Route path="/news/moodys-rating" element={<MoodysNewsPage />} />
          <Route path="/news/banking/ba3-rating-from-moodys-to-evocabank" element={<MoodysNewsPage />} />
          <Route path="/news/firebird-ai" element={<FirebirdAiFactoryPage />} />
          <Route path="/news/banking/ai-[#]factory-of-firebird-has-launched-in-armenia" element={<FirebirdAiFactoryPage />} />
          <Route path="/news/green-rock" element={<GreenRockNewsPage />} />
          <Route path="/news/banking/evocabank-and-green-rock-launched-the-banks-new-headquarters-project" element={<GreenRockNewsPage />} />
          <Route path="/news/mit-certified" element={<MitCertifiedPage />} />
          <Route path="/news/banking/evoca-executives-completed-generative-ai-course" element={<MitCertifiedPage />} />
          <Route path="/news/evocabank-wilco" element={<WilcoCardPage />} />
          <Route path="/news/adidas-armenia" element={<AdidasNewsPage />} />
          <Route path="/news/products/adidas-armenia" element={<AdidasNewsPage />} />
          <Route path="/news/globbing" element={<GlobbingNewsPage />} />
          <Route path="/news/products/globbing" element={<GlobbingNewsPage />} />
           <Route path="/news" element={<NewsListPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/mortgage" element={<MortgagePage />} />
          <Route path="/short-number" element={<ShortNumberDetails />} />
          <Route path="/evocatouch-app" element={<EvocaTouchAppPage />} />
          <Route path="/online-payments" element={<OnlinePaymentsPage />} />
          <Route path="/online-payments/evocabank" element={<EvocabankServicesPage />} />
          <Route path="/online-payments/international" element={<InternationalOperatorsPage />} />
          <Route path="/online-payments/utility" element={<UtilityPaymentsPage />} />
          <Route path="/online-payments/internet-tv" element={<InternetTvPaymentsPage />} />
          <Route path="/online-payments/police" element={<RoadPolicePaymentsPage />} />
          <Route path="/online-payments/loans" element={<LoanOrganizationsPage />} />
          <Route path="/online-payments/events" element={<EventsPaymentsPage />} />
          <Route path="/cards/visa-platinum" element={<VisaPlatinumDetails />} />
          <Route path="/cards/4u-gift-card" element={<DigitalGiftCardDetails />} />
          <Route path="/cards/mastercard-gold" element={<MastercardGoldDetails />} />
          
          {/* Wilco Visa Infinite-ի մանրամասն էջի երթուղիները */}
          <Route path="/cards/wilco-visa-infinite" element={<WilcoVisaInfiniteDetails />} />
          <Route path="/cards/3" element={<WilcoVisaInfiniteDetails />} />
          <Route path="/news/products/evocabank-wilco" element={<WilcoVisaInfiniteDetails />} />
        </Route>

        {/* Պատվերի էջերը առանց հիմնական Header-ի */}
        <Route path="/cards/gift/order-violet" element={<GiftCardOrderPage />} />
        <Route path="/cards/gift/order-black" element={<GiftCardOrderBlackPage />} />
      </Routes>
    </Router>
  );
}