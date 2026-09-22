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
import IndividualPage from './IndividualPage';
import LoanDetailPage from './LoanDetailPage';
import CarLoanPage from './CarLoanPage';
import PropertySecuredLoanPage from './PropertySecuredLoanPage';
import EvocaPowerDetails from './EvocaPowerDetails';
import GoldLoanDetails from './GoldLoanDetails';
import PosLoanPage from './PosLoanPage';
import LoanCard from './LoanCard';
import MortgageLoan from './MortgageLoan';
import ActionLoan from './ActionLoan';
import MortgageDisplaced from './MortgageDisplaced';
import LandPurchaseLoan from './LandPurchaseLoan'; 
import MicroRenovationLoan from './MicroRenovationLoan';
import LeasingPage from './LeasingPage';
import OverdraftLoanPage from './OverdraftLoanPage'; 
import InvestmentLoanPage from './InvestmentLoanPage';
import ParkingLoanPage from './ParkingLoanPage';
import BicycleLoanPage from './BicycleLoanPage'; 
import NonResidentMortgagePage from './NonResidentMortgagePage';
import EvocaHome from './EvocaHome'; 
import SecuredLoan from './SecuredLoan';
import TradeLoans from './TradeLoans';
import NmcLoan from './NmcLoan';
import NmcConstructionLoan from './NmcConstructionLoan';
import NmcRenovationLoan from './NmcRenovationLoan';
import YoungFamilyLoan from './YoungFamilyLoan';
import VisaInfiniteLoan from './VisaInfiniteLoan';
import ArtsakhDisplacedLoan from './ArtsakhDisplacedLoan';
import ArtsakhRenovationLoan from './ArtsakhRenovationLoan';
import StudentLoan from './StudentLoan';
import BorderSettlementsLoan from './BorderSettlementsLoan';
import EvolutionLoan from './EvolutionLoan';
import MilitaryMortgageLoan from './MilitaryMortgageLoan';
import PaymentsEvoca from './PaymentsEvoca'; // <-- Ավելացված է
import BussnesPage from "./BussnesPage";
import BussnesLosn1 from "./BussnesLosn1";
import TextileLoanPage from './TextileLoanPage';
import BusinessRefinancingPage from './BusinessRefinancingPage'; // Նոր էջը
import BondSecuredLoanPage from './BondSecuredLoanPage';
import SmeBusinessLoanPage from './SmeBusinessLoanPage';
import EvocaGoPage from './EvocaGoPage';
import GffEnergyLoanPage from './GffEnergyLoanPage';
import DepositSecuredLoanPage from './DepositSecuredLoanPage';
import KfwGreenFinancePage from './KfwGreenFinancePage';
import SimpleBusinessLoanPage from './SimpleBusinessLoanPage';
import AccountCreditPage from './AccountCreditPage';
import CreditLinePage from './CreditLinePage';
import ProductivityLoanPage from './ProductivityLoanPage';
import KfwSmePage from './KfwSmePage';
import About from './About'; // Ներմուծում ենք About էջը
import Structure from './Structure'; // Նոր ստեղծված Structure էջը
import Shareholders from './Shareholders'; // Ներմուծում ենք նոր էջը
import Management from './Management'; // Ներմուծում ենք Ղեկավարություն էջը
import Awards from './Awards'; // Ներմուծում ենք Մրցանակներ էջը
import Csr from './Csr'; // Ներմուծում ենք CSR էջը
import FinancialGroup from './FinancialGroup'; // Ներմուծում ենք Էվոկա Ֆինանսական խումբ էջը
import Rates from './Rates'; // <--- Նոր ներմուծումը
import AllCardsPage from './AllCardsPage';
import BusinessLoans from './BusinessLoans'; // <--- 1. Նոր ներմուծումը
import Fees from './Fees'; // <--- 1. Նոր ներմուծումը
import Deposits from './Deposits'; // <--- 1. Նոր ներմուծումը
import Archive from './Archive'; // <--- 1. Նոր ներմուծումը
import Reports from './Reports'; // <--- 1. Նոր ներմուծումը
import FinancialReports from './FinancialReports'; // <--- 1. Նոր ներմուծումը
import Investors from './Investors'; // Impor-ն այստեղ
import SemiAnnualReports from './SemiAnnualReports'; // Import-ն այստեղ
import AnnualReports from './AnnualReports'; // Import-ն այստեղ
import Announcements from './Announcements'; // Import-ն այստեղ
import Avand from './Avand'; // Import-ն այստեղ
import ClassicDeposit from './ClassicDeposit'; // Import
import MankakanDeposit from './MankakanDeposit'; // Import
import EvocaOnlineDeposit from './EvocaOnlineDeposit'; // Import
import ImportantInfo from './ImportantInfo'; // Import արեք նոր էջը
import Accounts from './Accounts'; // Import ենք անում նոր Accounts էջը
import MetalAccounts from './MetalAccounts'; // Import ենք անում նոր էջը
import NonResidentAccounts from './NonResidentAccounts'; // Import ենք անում նոր էջը
import SafeDepositBoxes from './SafeDepositBoxes'; // Import ենք անում նոր էջը
import MoneyTransfers from './MoneyTransfers'; // Import ենք անում փոխանցումների էջը
import PaymentSystems from './PaymentSystems'; // Import ենք անում Վճարային համակարգեր էջը
import InvestmentServices from './InvestmentServices'; // Import ենք անում Արժեթղթեր/Ներդրումային ծառայություններ էջը
import Bonds from './Bonds'; // Import ենք անում Պարտատոմսեր էջը
import CustodyServices from './CustodyServices'; // Import ենք անում ՀԿԴ ծառայություններ էջը
import RepoTransactions from './RepoTransactions'; // Import ենք անում Ռեպո գործարքներ էջը
import EvocaInvest from './EvocaInvest'; // Import ենք անում EvocaINVEST էջը
import EvocaTouch from './EvocaTouch'; // Import ենք անում EvocaTOUCH էջը
import BusnLeasing from "./busnleasing";
import BusSpecialeasing from "./BusSpecialeasing";
import TradeFinance from "./TradeFinance"; // Կամ ֆայլի ձեր ընտրած անունով
import FactoringFinance from "./FactoringFinance"; // Նոր ստեղծված ֆայլը
import LetterOfCredit from "./LetterOfCredit"; // Նոր ստեղծված ֆայլը
import Incasso from "./Incasso"; // Նոր ստեղծված ֆայլը
import DigitalVPOS from "./DigitalVPOS"; // Նոր ստեղծված ֆայլը
import PosTerminal from "./PosTerminal"; // Նոր ստեղծված ֆայլը
import TerminalsTariffs from "./TerminalsTariffs"; // Նոր ստեղծված ֆայլը
import TerminalApplication from "./TerminalApplication"; // Նոր ստեղծված ֆայլը
import EvocaMpos from "./EvocaMpos"; // Նոր ստեղծված էջը
import TransactionsBlocked from './TransactionsBlocked'; // Ներմուծում ենք նոր էջը
import EsgFrameworkPage from './EsgFrameworkPage'; // Նոր ստեղծված էջը
import AmchamArmeniaPage from './AmchamArmeniaPage'; // Նոր ստեղծված AmCham էջը
import NewColorsPage from './NewColorsPage'; // Նոր ստեղծված էջը
import AmxAwardsPage from './AmxAwardsPage';
import BestSmeBankPage from './BestSmeBankPage';
import CryptoAccountPage from './CryptoAccountPage';
import LosAngelesTimesPage from './LosAngelesTimesPage';
import AjapnyakBranchPage from './AjapnyakBranchPage';
import NewsMainPage from './NewsMainPage';
import NewsAllPage from './NewsAllPage';     // նոր՝ «Բոլորը»
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import EvocaInvestPost from "./EvocaInvestPost";
import InvestDosDontsPost from "./InvestDosDontsPost";
import Small from './Small';
import BusinessGuide from './BusinessGuide';
import DeclutterBlog from './DeclutterBlog';
import NewYearBlog from './NewYearBlog';
import MovieBlogPage from './MovieBlogPage';
import Series2021Page from './Series2021Page';
import FutureJobsPage from './FutureJobsPage'; // Import նոր էջը
import EvocaColorPage from './EvocaColorPage'; // Import նոր էջը


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

          {/* ԱՆՀԱՏՆԵՐ-ի երթուղիները */}
          <Route path="/individual" element={<IndividualPage />} />
          <Route path="/loans/1" element={<LoanDetailPage />} />
          <Route path="/loans/2" element={<CarLoanPage />} />
          <Route path="/loans/3" element={<PropertySecuredLoanPage />} />
          <Route path="/loans/4" element={<EvocaPowerDetails />} />
          <Route path="/loans/5" element={<GoldLoanDetails />} />
          <Route path="/loans/6" element={<PosLoanPage />} />
          <Route path="/loans/7" element={<LoanCard />} />
          <Route path="/loans/8" element={<MortgageLoan />} />
          <Route path="/loans/9" element={<ActionLoan />} />
          <Route path="/loans/10" element={<MortgageDisplaced />} />
          <Route path="/loans/11" element={<LandPurchaseLoan />} />
          <Route path="/loans/12" element={<MicroRenovationLoan />} />
          <Route path="/loans/13" element={<LeasingPage />} />
          <Route path="/loans/14" element={<OverdraftLoanPage />} />
          <Route path="/loans/15" element={<InvestmentLoanPage />} />
          <Route path="/loans/16" element={<ParkingLoanPage />} />
          <Route path="/loans/17" element={<BicycleLoanPage />} />
          <Route path="/loans/18" element={<NonResidentMortgagePage />} />
          <Route path="/loans/19" element={<EvocaHome />} />
          <Route path="/loans/20" element={<SecuredLoan />} />
          <Route path="/loans/21" element={<TradeLoans />} />
          <Route path="/loans/22" element={<NmcLoan />} />
          <Route path="/loans/23" element={<NmcConstructionLoan />} />
          <Route path="/loans/24" element={<NmcRenovationLoan />} />
          <Route path="/loans/25" element={<YoungFamilyLoan />} />
          <Route path="/loans/26" element={<VisaInfiniteLoan />} />
          <Route path="/loans/27" element={<ArtsakhDisplacedLoan />} />
          <Route path="/loans/28" element={<ArtsakhRenovationLoan />} />
          <Route path="/loans/29" element={<StudentLoan />} />
          <Route path="/loans/30" element={<BorderSettlementsLoan />} />
          <Route path="/loans/31" element={<EvolutionLoan />} />
          <Route path="/loans/32" element={<MilitaryMortgageLoan />} />
          <Route path="/cards" element={<AllCardsPage />} />

          {/* բիզնես-ի երթուղիները */}
              <Route path="/business" element={<BussnesPage />} />
               <Route path="/business/loans/quick-business-loan" element={<BussnesLosn1 />} />
               <Route path="/business/loans/textile" element={<TextileLoanPage />} />
               <Route path="/business/loans/business-refinancing" element={<BusinessRefinancingPage />} />
<Route  path="/business/loans/bond-secured"  element={<BondSecuredLoanPage />}   />
<Route  path="/business/loans/sme"    element={<SmeBusinessLoanPage />}  />
<Route   path="/business/loans/evoca-go"   element={<EvocaGoPage />}  />
<Route  path="/business/loans/gff-energy"    element={<GffEnergyLoanPage />}    />
<Route  path="/business/loans/deposit-secured"      element={<DepositSecuredLoanPage />} />
<Route   path="/business/loans/kfw-green-finance"     element={<KfwGreenFinancePage />}    />
<Route   path="/business/loans/simple-business"   element={<SimpleBusinessLoanPage />}     />
<Route   path="/business/loans/account-credit"   element={<AccountCreditPage />}    />
<Route   path="/business/loans/credit-line"    element={<CreditLinePage />}     />
<Route  path="/business/loans/productivity-program"   element={<ProductivityLoanPage />}  />
<Route  path="/business/loans/kfw-sme-finance"   element={<KfwSmePage />} />
<Route path="/business-loans" element={<BusinessLoans />} /> {/* <--- 2. Նոր ռոուտը */}
<Route path="/archive" element={<Archive />} /> {/* <--- 2. Նոր ռոուտը */}
<Route path="/reports" element={<Reports />} /> {/* <--- 2. Նոր ռոուտը */}
<Route path="/financial-reports" element={<FinancialReports />} /> {/* <--- 2. Նոր ռոուտը */}
<Route path="/investors" element={<Investors />} /> {/* Նոր Route-ը */}
<Route path="/semi-annual-reports" element={<SemiAnnualReports />} /> {/* Նոր Route-ը */}
<Route path="/annual-reports" element={<AnnualReports />} /> {/* Նոր Route-ը */}
<Route path="/announcements" element={<Announcements />} /> {/* Նոր Route-ը */}

<Route path="/about" element={<About />} />
<Route path="/structure" element={<Structure />} />
<Route path="/shareholders" element={<Shareholders />} />
<Route path="/management" element={<Management />} />
<Route path="/awards" element={<Awards />} />
<Route path="/csr" element={<Csr />} />
<Route path="/financial-group" element={<FinancialGroup />} />
<Route path="/rates" element={<Rates />} /> {/* <--- Նոր էջի ռոուտը */}
<Route path="/fees" element={<Fees />} /> {/* <--- 2. Նոր ռոուտը */}
<Route path="/deposits" element={<Deposits />} /> {/* <--- 2. Նոր ռոուտը */}
<Route path="/securities/evocainvest" element={<EvocaInvest />} />

<Route path="/accounts" element={<Accounts />} />
<Route path="/accounts/metal" element={<MetalAccounts />} />
<Route path="/accounts/non-residents" element={<NonResidentAccounts />} />
<Route path="/accounts/safe-deposit-boxes" element={<SafeDepositBoxes />} />
<Route path="/transfers/money" element={<MoneyTransfers />} />
<Route path="/transfers/payment-systems" element={<PaymentSystems />} />
<Route path="/securities/investment-services" element={<InvestmentServices />} />
<Route path="/securities/bonds" element={<Bonds />} />
<Route path="/securities/custody" element={<CustodyServices />} />
<Route path="/securities/repo" element={<RepoTransactions />} />
<Route path="/evocatouch" element={<EvocaTouch />} />
<Route path="/business/leasing" element={<BusnLeasing />} />
<Route path="/business/leasing/special-offer" element={<BusSpecialeasing />} />
<Route path="/business/trade-finance" element={<TradeFinance />} />
<Route path="/business/factoring" element={<FactoringFinance />} />
<Route path="/business/letter-of-credit" element={<LetterOfCredit />} />
<Route path="/business/incasso" element={<Incasso />} />
<Route path="/business/digital" element={<DigitalVPOS />} />
<Route path="/business/pos-terminal" element={<PosTerminal />} />
<Route path="/business/terminals-tariffs" element={<TerminalsTariffs />} />
<Route path="/business/terminal-application" element={<TerminalApplication />} />
<Route path="/business/mpos" element={<EvocaMpos />} />

 {/* news-ի երթուղիները */}
<Route path="/news/transactions-blocked" element={<TransactionsBlocked />} />
<Route path="/news/esg-framework" element={<EsgFrameworkPage />} />
<Route path="/news/amcham-armenia" element={<AmchamArmeniaPage />} />
<Route path="/news/new-colors" element={<NewColorsPage />} />
<Route path="/news/amx-awards-2026" element={<AmxAwardsPage />} />
<Route path="/news/los-angeles-times" element={<LosAngelesTimesPage />} />
<Route path="/news/ajapnyak-branch" element={<AjapnyakBranchPage />} />
<Route path="/news/main" element={<NewsMainPage />} />
<Route path="/news/all" element={<NewsAllPage />} />     {/* Բոլորը */}
 <Route path="/blog" element={<Blog />} />
 <Route path="/blog/:slug" element={<BlogPost />} />
<Route path="/blog/evocainvest" element={<EvocaInvestPost />} />
        <Route path="/blog/invest-dos-donts" element={<InvestDosDontsPost />} />
<Route path="/blog/small-steps" element={<Small />} />
<Route path="/blog/business-guide" element={<BusinessGuide />} />
<Route path="/blog/declutter" element={<DeclutterBlog />} />
<Route path="/blog/new-year" element={<NewYearBlog />} />
<Route path="/blog/movies-2021" element={<MovieBlogPage />} />
<Route path="/blog/series-2021" element={<Series2021Page />} />
<Route path="/blog/future-jobs" element={<FutureJobsPage />} />
<Route path="/blog/evoca-color" element={<EvocaColorPage />} />


 {/* avand-ի երթուղիները */}
<Route path="/deposits/1" element={<Avand />} /> {/* Route-ը դեպի Avand */}
<Route path="/deposits/1/classic" element={<ClassicDeposit />} /> {/* Route դեպի Դասական ավանդ */}
<Route path="/deposits/1/mankakan" element={<MankakanDeposit />} /> {/* Route դեպի Մանկական ավանդ */}
<Route path="/deposits/1/evoca-online" element={<EvocaOnlineDeposit />} /> {/* Route դեպի Evoca Online ավանդ */}
<Route path="/deposits/1/important-info" element={<ImportantInfo />} />
<Route path="/news/best-sme-bank" element={<BestSmeBankPage />} />
<Route path="/news/crypto-account" element={<CryptoAccountPage />} />


          {/* Visa Vision-ի երթուղիները */}
          <Route path="/visa-vision" element={<VisaVisionDetails />} />
          <Route path="/cards/visa-vision" element={<VisaVisionDetails />} />

          <Route path="/cards/visa-business-card" element={<VisaBusiness />} />
          <Route path="/cards/dalma-card" element={<DalmaGiftCard />} />

          {/* Mastercard World Digital-ի երթուղիները */}
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
          <Route path="/payments-evoca" element={<PaymentsEvoca />} /> {/* <-- Ավելացված է */}
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



