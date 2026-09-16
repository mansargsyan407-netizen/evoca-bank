import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { 
  ChevronLeft, 
  ChevronRight, 
  Phone, 
  MapPin, 
  HelpCircle, 
  Globe, 
  Search, 
  Menu, 
  ArrowLeft, 
  Home 
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

const otherLoans = [
  {
    id: 1,
    title: 'Անգրավ սպառողական վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg',
    path: '/loans/1',
  },
  {
    id: 2,
    title: 'Դրամական միջոցների գրավով ապահովված անհատական վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/1782886301331/415x261.jpg',
    path: '/loans/20',
  },
  {
    id: 3,
    title: 'Action',
    image: 'https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png',
    path: '/loans/9',
  },
  {
    id: 4,
    title: 'Ոսկու գրավով (լոմբարդային) վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg',
    path: '/loans/5',
  },
  {
    id: 5,
    title: 'Ավտոմեքենայի ձեռքբերման նպատակով վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg',
    path: '/loans/2',
  },
  {
    id: 6,
    title: 'Գույքի գրավով ապահովված վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg',
    path: '/loans/3',
  },
  {
    id: 7,
    title: 'Արևային կայանների ձեռք բերման վարկ EvocaPOWER',
    image: 'https://www.evoca.am/images-cache/loans/1/17552479364123/415x261.png',
    path: '/loans/4',
  },
  {
    id: 8,
    title: 'Տեղում Ապառիկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16131174467985/415x261.jpg',
    path: '/loans/6',
  },
  {
    id: 9,
    title: 'Evoca աշխատավարձային փաթեթի շրջականակում տրամադրվող վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg',
    path: '/loans/7',
  },
  {
    id: 10,
    title: 'Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով',
    image: 'https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg',
    path: '/loans/8',
  },
  {
    id: 11,
    title: 'Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին',
    image: 'https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png',
    path: '/loans/10',
  },
  {
    id: 12,
    title: 'Հողամասի ձեռքբերման վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg',
    path: '/loans/11',
  },
  {
    id: 13,
    title: 'Միկրովերանորոգման վարկ Բանկի ռեսուրսներով',
    image: 'https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png',
    path: '/loans/12',
  },
  {
    id: 14,
    title: 'Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ',
    image: 'https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png',
    path: '/loans/13',
  },
  {
    id: 15,
    title: 'Վճարային քարտով օվերդրաֆտ (վարկային քարտ)',
    image: 'https://www.evoca.am/images-cache/loans/1/16947885698869/415x261.png',
    path: '/loans/14',
  },
  {
    id: 16,
    title: 'Անհատական վարկ «Ներդրումային»',
    image: 'https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png',
    path: '/loans/15',
  },
  {
    id: 17,
    title: 'Ավտոկայանատեղիի ձեռքբերման վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg',
    path: '/loans/16',
  },
  {
    id: 18,
    title: 'Հեծանիվի ձեռքբերման վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png',
    path: '/loans/17',
  },
  {
    id: 19,
    title: 'Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png',
    path: '/loans/18',
  },
  {
    id: 20,
    title: 'Վերանորոգման վարկ EvocaHOME',
    image: 'https://www.evoca.am/images-cache/loans/1/17198124761415/415x261.png',
    path: '/loans/19',
  },
  {
    id: 21,
    title: 'Առևտրային հիփոթեքային վարկեր',
    image: 'https://www.evoca.am/images-cache/loans/1/16142450609707/415x261.jpg',
    path: '/loans/21',
  },
  {
    id: 22,
    title: 'ԱՀԸ-ի ծրագրով ձեռք բերման վարկեր',
    image: 'https://www.evoca.am/images-cache/loans/1/16142450957048/415x261.jpg',
    path: '/loans/22',
  },
  {
    id: 23,
    title: 'ԱՀԸ-ի ծրագրով կառուցապատման վարկեր',
    image: 'https://www.evoca.am/images-cache/loans/1/17265524369781/415x261.png',
    path: '/loans/23',
  },
  {
    id: 24,
    title: 'ԱՀԸ-ի ծրագրով վերանորոգման վարկեր',
    image: 'https://www.evoca.am/images-cache/loans/1/16142533830767/415x261.jpg',
    path: '/loans/24',
  },
  {
    id: 25,
    title: 'Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»',
    image: 'https://www.evoca.am/images-cache/loans/1/16142451699164/415x261.jpg',
    path: '/loans/25',
  },
  {
    id: 26,
    title: 'Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142652333164/415x261.jpg',
    path: '/loans/26',
  },
  {
    id: 27,
    title: 'Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին',
    image: 'https://www.evoca.am/images-cache/loans/1/16690386016508/415x261.png',
    path: '/loans/27',
  },
  {
    id: 28,
    title: 'Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին',
    image: 'https://www.evoca.am/images-cache/loans/1/17133596531389/415x261.png',
    path: '/loans/28',
  },
  {
    id: 29,
    title: '«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142452651138/415x261.jpg',
    path: '/loans/29',
  },
  {
    id: 30,
    title: 'Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր',
    image: 'https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png',
    path: '/loans/30',
  },
  {
    id: 31,
    title: 'Evolution',
    image: 'https://www.evoca.am/images-cache/loans/1/16644424027338/415x261.png',
    path: '/loans/31',
  },
  {
    id: 32,
    title: 'Հիփոթեքային վարկեր Զինծառայողներին',
    image: 'https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png',
    path: '/loans/32',
  },
];

const InvestmentLoanPage = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [selectedCurrency, setSelectedCurrency] = useState('AMD');

  return (
    <div className="w-full min-h-screen bg-white text-gray-800 font-sans relative">
      
    

      {/* SUB-NAVIGATION BAR */}
      <div className="w-full bg-[#6a0dad] text-white">
        <div className="max-w-[1240px] mx-auto px-4 flex items-center space-x-8 text-xs font-semibold py-3">
          <a href="#" className="bg-purple-900 px-4 py-1.5 rounded-sm">Վարկեր</a>
          <a href="#" className="hover:opacity-80 transition">Վարկային պատմություն և սքոր</a>
          <a href="#" className="hover:opacity-80 transition">Կարևոր տեղեկատվություն</a>
        </div>
      </div>

      {/* HERO BANNER */}
      <section className="w-full bg-[#F5ECFF] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 px-6 py-12 md:py-16 z-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Անհատական վարկ «Ներդրումային»
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed max-w-lg">
              Ոչ թե վարկ, այլ ներդրում. գիտե՞իր, որ Evoca-ի միջոցով դու կարող ես ձեռք բերել անշարժ կամ շարժական գույք արտերկրում և ստանալ լրացուցիչ եկամուտներ:
            </p>
          </div>

    
            <img 
              src="https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png" 
              alt="Investment Loan" 
              className="max-h-72 object-contain"
            />
       
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="max-w-[1240px] mx-auto px-4 py-4 flex flex-wrap items-center justify-between text-xs text-gray-500 border-b border-gray-100">
        <button className="flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 hover:bg-gray-50 transition shadow-sm font-medium text-gray-700">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Վերադառնալ</span>
        </button>

        <div className="flex items-center space-x-2 mt-2 sm:mt-0 font-medium">
          <Home className="w-3.5 h-3.5 text-gray-400" />
          <span>›</span>
          <a href="#" className="hover:text-[#6a0dad]">Անհատ</a>
          <span>›</span>
          <a href="#" className="hover:text-[#6a0dad]">Վարկեր</a>
          <span>›</span>
          <a href="#" className="hover:text-[#6a0dad]">Վարկեր</a>
          <span>›</span>
          <span className="text-gray-800 font-semibold">Անհատական վարկ «Ներդրումային»</span>
        </div>
      </div>

      {/* LOAN DETAILS & TABS SECTION */}
      <section className="max-w-[1240px] mx-auto px-4 py-10">
        {/* TABS HEADER */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-3 px-2 text-sm font-bold transition-all relative ${
              activeTab === 'about'
                ? 'text-[#6a0dad] border-b-2 border-[#6a0dad]'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Վարկի մասին
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`pb-3 px-8 text-sm font-bold transition-all relative ${
              activeTab === 'terms'
                ? 'text-[#6a0dad] border-b-2 border-[#6a0dad]'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Պայմաններ
          </button>
        </div>

        {/* TAB 1: ՎԱՐԿԻ ՄԱՍԻՆ */}
        {activeTab === 'about' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT DESCRIPTION */}
            <div className="lg:col-span-7 space-y-6 text-sm leading-relaxed text-gray-700">
              <h3 className="text-base font-bold text-[#6a0dad]">
                Ոչ թե վարկ, այլ ներդրում
              </h3>

              <p>
                Երբևէ մտածե՞լ ես, որ քո վարկը կարող է աշխատել քեզ համար:
              </p>

              <p>
                <strong>Ինչպե՞ս:</strong> Անհատական ներդրումային վարկի միջոցով <strong>ՀՀ-ում և արտերկրում`</strong>
              </p>

              <ul className="space-y-2 pl-4 list-disc marker:text-[#6a0dad]">
                <li>Գնելով անշարժ կամ շարժական գույք</li>
                <li>Ձեռք բերելով միջազգային թոփ ընկերությունների բաժնեմասեր</li>
              </ul>

              <p>
                Ի դեպ, Ներդրումային վարկը հասանելի է նաև <span className="text-[#6a0dad] font-semibold cursor-pointer">արտարժույթով</span>:
              </p>

              <p className="font-medium text-gray-800 pt-2">
                Շտապիր ձեռք բերել վարկն այսօր և միաժամանակ ստեղծել քո կայուն եկամուտների նոր աղբյուրը:
              </p>
            </div>

            {/* RIGHT SUMMARY CARD */}
            <div className="lg:col-span-5 bg-[#F9F7FD] border border-purple-100 rounded-3xl p-6 sm:p-8 shadow-sm">
              {/* CURRENCY SWITCHER */}
              <div className="flex gap-2 mb-8">
                {['AMD', 'USD', 'EUR'].map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setSelectedCurrency(curr)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition ${
                      selectedCurrency === curr
                        ? 'bg-[#6a0dad] text-white shadow-sm'
                        : 'bg-purple-100 text-[#6a0dad] hover:bg-purple-200'
                    }`}
                  >
                    {curr === 'AMD' ? '֏' : curr === 'USD' ? '$' : '€'}
                  </button>
                ))}
              </div>

              {/* DETAILS ROW 1 */}
              <div className="border-b border-purple-100 pb-6 mb-6 flex justify-between items-end">
                <div>
                  <span className="text-xs text-gray-400 font-medium block mb-1">մինչև</span>
                  <span className="text-2xl sm:text-3xl font-black text-[#6a0dad]">
                    350 մլն ֏
                  </span>
                </div>
                <span className="text-xs font-bold text-gray-600">Գումար</span>
              </div>

              {/* DETAILS ROW 2 */}
              <div className="border-b border-purple-100 pb-6 mb-6 flex justify-between items-end">
                <div>
                  <span className="text-xs text-gray-400 font-medium block mb-1">մինչև</span>
                  <span className="text-2xl sm:text-3xl font-black text-[#6a0dad]">
                    240 ամիս
                  </span>
                </div>
                <span className="text-xs font-bold text-gray-600">Մարման ժամկետ</span>
              </div>

              {/* DETAILS ROW 3 */}
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#6a0dad]">
                    15%
                  </span>
                </div>
                <span className="text-xs font-bold text-gray-600">Տոկոսադրույք</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ՊԱՅՄԱՆՆԵՐ */}
        {activeTab === 'terms' && (
          <div className="space-y-8 text-sm text-gray-700 leading-relaxed">
            
            {/* Նպատակը */}
            <div className="border-b border-gray-100 pb-6">
              <h4 className="font-bold text-base text-[#6a0dad] mb-3">Նպատակը</h4>
              <p className="mb-2">Վարկը տրամադրվում է.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  ՀՀ տարածքում կամ ՀՀ տարածքից դուրս գործող իրավաբանական անձանց կանոնադրական կապիտալում մասնակցության կամ բաժնեմասնակցության ձեռքբերման կամ որևէ այլ կերպ ՀՀ օրենսդրությամբ թույլատրելի առևտրային գործունեության մեջ ներդրման նպատակով,
                </li>
                <li>
                  ՀՀ տարածքից դուրս՝ եկամուտ ստանալու նպատակով, անշարժ կամ շարժական գույքի ձեռքբերման նպատակով<sup>[1]</sup>:
                </li>
              </ul>
            </div>

            {/* Ովքեր կարող են դիմել */}
            <div className="border-b border-gray-100 pb-6">
              <h4 className="font-bold text-base text-[#6a0dad] mb-2">Ովքեր կարող են դիմել</h4>
              <p>
                18 - 65 տարեկան ՀՀ ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն բոլորի 65 տարեկանը կամ առկա է վերոնշյալ պահանջներին բավարարող համավարկառու:
              </p>
            </div>

            {/* Վարկավորման արժույթ */}
            <div className="border-b border-gray-100 pb-6">
              <h4 className="font-bold text-base text-[#6a0dad] mb-2">Վարկավորման արժույթ</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>ՀՀ դրամ</li>
                <li>ԱՄՆ դոլար</li>
                <li>Եվրո</li>
              </ul>
            </div>

            {/* Վարկավորման գումար */}
            <div className="border-b border-gray-100 pb-6">
              <h4 className="font-bold text-base text-[#6a0dad] mb-2">Վարկավորման գումար</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>16,000,000 – 350,000,000 ՀՀ դրամ</li>
                <li>40,000 – 700,000 ԱՄՆ դոլար</li>
                <li>40,000 – 700,000 Եվրո</li>
              </ul>
            </div>

            {/* Սահմանաչափի տեսակ */}
            <div className="border-b border-gray-100 pb-6">
              <h4 className="font-bold text-base text-[#6a0dad] mb-2">Սահմանաչափի տեսակ</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Վարկային գիծ<sup>[2]</sup></li>
                <li>Մարման գրաֆիկով վարկ</li>
              </ul>
            </div>

            {/* Մարման եղանակը */}
            <div className="border-b border-gray-100 pb-6">
              <h4 className="font-bold text-base text-[#6a0dad] mb-2">Մարման եղանակը</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Չվերականգնվող վարկային գիծ</li>
                <li>Օվերդրաֆտ</li>
                <li>«Անուիտետային»</li>
                <li>«Զսպանակաձև»</li>
              </ul>
            </div>

            {/* Մարման ժամկետը */}
            <div className="border-b border-gray-100 pb-6">
              <h4 className="font-bold text-base text-[#6a0dad] mb-2">Մարման ժամկետը</h4>
              <div className="space-y-2">
                <p><strong>Հաստատուն տոկոսադրույքի կիրառման դեպքում․</strong> 12 - 84 ամիս</p>
                <p><strong>Լողացող տոկոսադրույքի կիրառման դեպքում․</strong> 60 - 240 ամիս</p>
              </div>
            </div>

            {/* Տարեկան տոկոսադրույք (հաստատուն) */}
            <div className="border-b border-gray-100 pb-6 overflow-x-auto">
              <h4 className="font-bold text-base text-[#6a0dad] mb-3">Տարեկան տոկոսադրույք (հաստատուն)</h4>
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-purple-50 text-[#6a0dad] border-b border-purple-100">
                    <th className="p-3">Արժույթ</th>
                    <th className="p-3">Անվանական</th>
                    <th className="p-3">Առավելագույն փաստացի<sup>[3]</sup></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 font-medium">ՀՀ դրամ</td>
                    <td className="p-3">15.0%</td>
                    <td className="p-3">17.3%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">ԱՄՆ դոլար</td>
                    <td className="p-3">10.0%</td>
                    <td className="p-3">11.6%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Եվրո</td>
                    <td className="p-3">8.5%</td>
                    <td className="p-3">9.9%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Տարեկան տոկոսադրույք (լողացող) */}
            <div className="border-b border-gray-100 pb-6 overflow-x-auto">
              <h4 className="font-bold text-base text-[#6a0dad] mb-3">Տարեկան տոկոսադրույք (լողացող)</h4>
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-purple-50 text-[#6a0dad] border-b border-purple-100">
                    <th className="p-3">Արժույթ</th>
                    <th className="p-3">Անվանական</th>
                    <th className="p-3">Առավելագույն փաստացի</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 font-medium">ՀՀ դրամ</td>
                    <td className="p-3">սկսած 14.0%-ից (հաստատուն բաղադրիչ` սկսած 5.0%-ից + փոփոխուն բաղադրիչ)</td>
                    <td className="p-3">15.4%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">ԱՄՆ դոլար</td>
                    <td className="p-3">սկսած 9.2%-ից (հաստատուն բաղադրիչ` սկսած 8.2%-ից + փոփոխուն բաղադրիչ)</td>
                    <td className="p-3">10%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Եվրո</td>
                    <td className="p-3">սկսած 7.5%-ից (հաստատուն բաղադրիչ` սկսած 7.5%-ից + փոփոխուն բաղադրիչ)</td>
                    <td className="p-3">8.2%</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-4 p-4 bg-gray-50 rounded-xl space-y-2 text-xs text-gray-600">
                <p><strong>Լողացող տոկոսադրույքի տատանման առավելագույն և նվազագույն շեմ․</strong> +4%, սակայն ոչ ավել քան 21%</p>
                <p>
                  Լողացող տոկոսադրույքի փոփոխուն բաղադրիչը կսկսի վերանայվել վարկի տրամադրման պահից 36 ամիս ժամանակաշրջանին հաջորդող առաջին մարման ամսաթվից սկսած և յուրաքանչյուր 6 ամիսը մեկ՝ կիրառելով վերանայման պահին Բանկում գործող (կայքում փաստացի հրապարակված) տոկոսադրույքը։
                </p>
              </div>
            </div>

            {/* Տոկոսադրույքի այլ պայմաններ */}
            <div className="border-b border-gray-100 pb-6">
              <h4 className="font-bold text-base text-[#6a0dad] mb-2">Տոկոսադրույքի այլ պայմաններ</h4>
              <p>
                Վարկունակության պայմաններից /առանց վարկունակության գնահատման/ կամ այլ շեղումներով հայտերը Բանկի կողմից կարող են տրամադրվել 0.5% - 1.0%-ով բարձր տոկոսադրույքով:
              </p>
            </div>

            {/* Տուգանքներ և տույժեր */}
            <div className="border-b border-gray-100 pb-6 space-y-4">
              <div>
                <h4 className="font-bold text-base text-[#6a0dad] mb-2">Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք</h4>
                <p>
                  ՀՀ տարածքում գործող, ինչպես նաև ոչ ռեզիդենտ այլ բանկերի, վարկային կազմակերպությունների կամ այլ ֆինանսական կառույցների կողմից վարկերի վերաֆինանսավորման դեպքում, մինչև պայմանագրի գործողության ժամկետի կեսը մայր գումարի վաղաժամկետ ամբողջական կամ մասնակի մարման դեպքում հաճախորդը վճարում է տուգանք` վաղաժամկետ մարվող մայր գումարի 3%-ի չափով:
                </p>
              </div>

              <div>
                <h4 className="font-bold text-base text-[#6a0dad] mb-2">Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>ժամկետանց վարկի համար՝ օրական 0.015%</li>
                  <li>ժամկետանց տոկոսագումարի համար՝ օրական 0.1%</li>
                </ul>
              </div>
            </div>

            {/* Վարկի տրամադրման եղանակը */}
            <div className="border-b border-gray-100 pb-6">
              <h4 className="font-bold text-base text-[#6a0dad] mb-2">Վարկի տրամադրման եղանակը</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Անկանխիկ</li>
                <li>Օվերդրաֆտի դեպքում՝ Բանկում գործող վճարային քարտերի միջոցով:</li>
              </ul>
            </div>

            {/* Ապահովման միջոցներ & Վարկ/գրավ հարաբերակցություն */}
            <div className="border-b border-gray-100 pb-6 space-y-4">
              <div>
                <h4 className="font-bold text-base text-[#6a0dad] mb-2">Վարկի վերադարձելիության ապահովման միջոցները</h4>
                <p>
                  ՀՀ տարածքում գտնվող Բանկի համար ընդունելի անշարժ գույք, տրանսպորտային միջոց, դրամական միջոցներ, այդ թվում՝ ավանդ, պարտատոմսեր /«Էվոկաբանկ» ԲԲԸ-ի կողմից թողարկված կամ Պետական պարտատոմս, որոնց մարման ժամկետները չեն կարող վարկի մարման ժամկետից կարճ լինել/: Բացի անշարժ գույքի գրավադրումից վարկառուից կարող է պահանջվել նաև առնվազն մեկ ֆիզիկական կամ իրավաբանական անձի երաշխավորություն:
                </p>
              </div>

              <div>
                <h4 className="font-bold text-base text-[#6a0dad] mb-2">Վարկ/գրավ հարաբերակցություն</h4>
                <p className="mb-2">Բանկի համար ընդունելի անշարժ կամ շարժական գույքերի ապահովություն, որի դեպքում վարկ/գրավ հարաբերակցությունը հաշվարկվում է.</p>
                <ul className="list-disc pl-5 space-y-2 mb-3">
                  <li>
                    <strong>Անշարժ գույք</strong> - գնահատված արժեքի մինչև 70% /առանց եկամուտների հիմնավորման դեպքում՝ 50%<sup>[4]</sup>/;
                  </li>
                  <li>
                    <strong>Տրանսպորտային միջոց</strong> - գնահատված արժեքի մինչև 70%, ընդ որում 60 ամսից ավել մարման ժամկետ ունեցող վարկերի դեպքում տրանսպորտային միջոցի գրավով ապահովված մասը վարկ/գրավ ընդհանուր հարաբերակցության մեջ չի կարող գերազանցել 50%-ը:
                  </li>
                </ul>

                <p className="mb-2">Դրամական միջոցների ապահովությամբ վարկ/գրավ հարաբերակցությունը հաշվարկվում է.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Միևնույն արժույթներով՝ ներդրված ժամկետային ավանդի պայմանագրի գումարի մինչև 95%</li>
                  <li>Այլ արժույթներով՝ ներդրված ժամկետային ավանդի պայմանագրի գումարի մինչև 80%</li>
                  <li>Միևնույն արժույթներով՝ ձեռքբերված պարտատոմսերի անվանական արժեքի մինչև 80%</li>
                  <li>Այլ արժույթներով՝ ձեռքբերված պարտատոմսերի անվանական արժեքի մինչև 70%</li>
                </ul>
              </div>
            </div>

            {/* Վարկունակություն, Ապահովագրություն, Գանձվող վճարներ */}
            <div className="border-b border-gray-100 pb-6 space-y-4">
              <div>
                <h4 className="font-bold text-base text-[#6a0dad] mb-2">Վարկունակության գնահատում</h4>
                <p>Վարկունակության գնահատումն իրականացվում է համաձայն Բանկում գործող Ֆիզիկական անձանց անհատական վարկավորման կարգի:</p>
              </div>

              <div>
                <h4 className="font-bold text-base text-[#6a0dad] mb-2">Ապահովագրություն</h4>
                <p>Առանձին դեպքերում՝ կախված գրավի տեսակից կարող է պահանջվել գրավ հանդիսացող գույքի ապահովագրություն՝ յուրաքանչյուր տարի վարկի մնացորդի չափով:</p>
              </div>

              <div>
                <h4 className="font-bold text-base text-[#6a0dad] mb-2">Գանձվող վճարներ</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Վարկի գումարի 0.5%, բայց ոչ պակաս, քան՝ 50.000 ՀՀ դրամը:</li>
                  <li>Վարկի գումարի կանխիկացման դեպքում գանձվում է կանխիկացման վճար ըստ Բանկում գործող սակագների:</li>
                </ul>
              </div>
            </div>

            {/* Որոշումների կայացման ժամկետներ */}
            <div className="border-b border-gray-100 pb-6">
              <h4 className="font-bold text-base text-[#6a0dad] mb-2">Վարկի հաստատման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ</h4>
              <p className="mb-2">
                Վարկի հաստատման կամ մերժման որոշումը կայացվում է առավելագույնը 10 (տաս) աշխատանքային օրվա ընթացքում, որոշումների կայացման համար Բանկի կողմից պահանջվող նախնական փաստաթղթերը ամբողջությամբ ներկայացնելուց հետո:
              </p>
              <p>
                Վարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, գրավի առարկա հանդիսացող գույքի գրավադրման գործընթացն ավարտելուց հետո առավելագույնը 2 (երկու) աշխատանքային օրվա ընթացքում:
              </p>
            </div>

            {/* Այլ պայմաններ */}
            <div className="border-b border-gray-100 pb-6">
              <h4 className="font-bold text-base text-[#6a0dad] mb-2">Այլ պայմաններ</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Վարկի տրամադրումը Բանկի կողմից մերժվում է, եթե ստացվելիք միջոցների նպատակը հակասում է Բանկի ՖՀԿ քաղաքականությամբ սահմանված նպատակայնությանը կամ պայմաններին:</li>
                <li>120 ամսից ավել մարման ժամկետով վարկերը տրամադրվում են արտերկրում անշարժ գույք ձեռք բերելու նպատակով:</li>
                <li>Առանձին դեպքերում Բանկի որոշմամբ կարող է տրամադրվել Մայր գումարի մարման գծով արտոնյալ ժամանակահատված՝ մինչև 12 ամիս ժամկետով:</li>
                <li>Վարկային գծի կամ օվերդրաֆտի դեպքերում Բանկի որոշմամբ կարող է սահմանվել վարկի մարման պարտադիր ժամանակացույց, ինչպես նաև մինչև 1.0% տարեկան տոկոսադրույք՝ չօգտագործված մասի վրա:</li>
                <li>Առանձին դեպքերում Բանկը կարող է պահանջել, ձեռք բերվող բաժնեմասերը/գույքերը, որպես լրացուցիչ ապահովություն ավելացվեն հայցվող վարկի ապահովություններում, ընդ որում ՀՀ տարածքից դուրս գտնվող գրավի առարկաները չեն կարող մասնակցել վարկ/գրավ հարաբերության հաշվարկմանը։</li>
                <li>Եթե ձեռք բերվող բաժնեմասերը ՀՀ-ում գտնվող կազմակերպության բաժնեմասեր են, ապա կարող է պահանջվել տվյալ կազմակերպության համար իրականացնել վարկային պատմության, ինչպես նաև այլ պարտավորությունների /հարկային պարտք, դատական վեճ և այլն/ առկայության ստուգում:</li>
                <li>Բանկն իրականացնում է նպատակային մոնիտորինգ՝ վարկի նպատակային օգտագործումը ստուգելու նպատակով, որի համար վարկառուն ապահովում է բոլոր անհրաժեշտ պայմանները և տեղեկատվության ժամանակին ու ճշգրիտ տրամադրումը: Առաջին նպատակային մոնիթորինգն իրականացվում է լիազոր մարմնի կողմից սահմանված ժամկետներում, որից հետո կարող են սահմանվել տարեկան պարբերական նպատակային մոնիթորինգներ։</li>
                <li>Վարկառուն Բանկի պահանջով ներկայացնում է վարկի օգտագործման նպատակայնությունը հիմնավորող անհրաժեշտ տեղեկատվություն /պայմանագրեր, համաձայնագրեր կամ այլ հավաստող փաստաթղթեր/: Ոչ նպատակային օգտագործման դեպքում Բանկն իրավունք ունի պահանջել վարկի ամբողջական վաղաժամկետ մարում:</li>
              </ul>
            </div>

            {/* Ծանոթագրություններ */}
            <div className="pt-4 text-xs text-gray-500 space-y-2 border-t border-gray-200">
              <p>
                <sup>[1]</sup> Անշարժ և շարժական գույքի նպատակային և գործառնական նշանակության բովանդակությունը որոշվում է այն պետության իրավունքով, որտեղ գտնվում է տվյալ գույքը, ընդ որում ձեռքբերվող անշարժ գույքը չի կարող դառնալ հիմնական բնակության վայր:
              </p>
              <p>
                <sup>[2]</sup> Վճարային քարտերի միջոցով տրամադրվող վարկային գծի և օվերդրաֆտի առավելագույն ժամկետը չի կարող գերազանցել 60 ամիսը:
              </p>
              <p>
                <sup>[3]</sup> Փաստացի տոկոսադրույքի մեծությունը/արժեքը կարող է նշվածից տարբերվել՝ կախված մարման գրաֆիկից և տոկոսադրույքի շեղումներից:
              </p>
              <p>
                <sup>[4]</sup> Երևան, Լոռի, Շիրակի և Կոտայքի մարզերում գտնվող անշարժ գույք` բնակարան, բնակելի տուն, տարածք /բացառությամբ արտադրական և գյուղատնտեսական նշանակության տարածքների/:
              </p>
            </div>

          </div>
        )}
      </section>

      {/* 8. ԱՅԼ ՎԱՐԿԵՐ SECTION */}
      <section className="max-w-[1240px] mx-auto px-4 py-12">
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#222] mb-8">
          Այլ վարկեր
        </h3>

        <div className="relative">
          {/* Swiper Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute -left-6 top-1/2 -translate-y-1/2 z-20 text-[#6a0dad] hover:scale-110 transition hidden md:block">
            <ChevronLeft className="w-8 h-8 stroke-[3]" />
          </button>
          <button className="swiper-button-next-custom absolute -right-6 top-1/2 -translate-y-1/2 z-20 text-[#6a0dad] hover:scale-110 transition hidden md:block">
            <ChevronRight className="w-8 h-8 stroke-[3]" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full py-2"
          >
            {otherLoans.map((loan) => (
              <SwiperSlide key={loan.id}>
                <Link to={loan.path || '#'} className="group block text-center">
                  <div className="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm mb-3 bg-purple-50">
                    <img
                      src={loan.image}
                      alt={loan.title}
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="font-bold text-xs md:text-sm text-gray-900 group-hover:text-[#6a0dad] transition line-clamp-2 px-1">
                    {loan.title}
                  </p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 9. ONLINE & MOBILE BANKING SECTION */}
      <section className="w-full bg-[#6a0dad] text-white py-14 px-6 md:px-12 relative overflow-hidden rounded-t-[2.5rem] lg:rounded-t-[3.5rem]">
        {/* Background Geometric Figures */}
        <div className="absolute top-10 left-16 w-8 h-8 rounded-full border-4 border-pink-400 opacity-60 pointer-events-none"></div>
        <div className="absolute top-1/3 left-12 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-purple-400 rotate-12 opacity-50 pointer-events-none"></div>
        <div className="absolute top-16 right-20 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[22px] border-b-pink-300 -rotate-45 opacity-70 pointer-events-none"></div>
        <div className="absolute bottom-16 right-12 w-8 h-8 border-4 border-pink-400 rotate-12 opacity-80 pointer-events-none"></div>

        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Left Side Mockups */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative">
            {/* Laptop */}
            <div className="relative w-full max-w-[440px]">
              <div className="relative rounded-t-xl border-[7px] border-[#1a1a1a] bg-black shadow-2xl overflow-hidden aspect-[16/10]">
                <iframe
                  src="https://www.youtube.com/embed/KwAgMHEx8ys?enablejsapi=1"
                  title="EvocaTOUCH Video"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-[108%] -translate-x-[4%] h-3 bg-[#2d2d2d] rounded-b-xl border-t border-neutral-700 shadow-xl relative flex justify-center">
                <div className="w-16 h-1 bg-neutral-600 rounded-b-md"></div>
              </div>
            </div>

            {/* Mobile Phone */}
            <div className="relative -ml-20 z-20 top-6 shrink-0">
              <div className="w-32 sm:w-40 aspect-[9/19] rounded-[2.2rem] border-[5px] border-[#1a1a1a] bg-black overflow-hidden shadow-2xl relative">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-[#1a1a1a] rounded-full z-30"></div>
                <img
                  src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg"
                  alt="Evoca Mobile App"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side Info */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Օնլայն և մոբայլ բանկինգ
            </h2>
            
            <p className="text-purple-100 text-sm md:text-base leading-relaxed max-w-xl">
              Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն
              առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
            </p>

            <div>
              <Link
                to="/evoca-online"
                className="inline-block bg-white text-[#6a0dad] px-7 py-2.5 rounded-full font-bold hover:bg-purple-50 transition shadow-md text-sm md:text-base"
              >
                Դառնալ հաճախորդ
              </Link>
            </div>

            {/* QR Code and Stores */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <div className="bg-white p-1.5 rounded-lg shadow-md">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://www.evoca.am"
                  alt="Evoca App QR Code"
                  className="w-16 h-16"
                />
              </div>
              
              <div className="space-y-2">
                <p className="text-xs text-purple-200">
                  Ներբեռնել հավելվածները՝
                </p>
                <div className="flex gap-2">
                  <a href="#" className="bg-black text-white text-[11px] font-bold px-3 py-1.5 rounded-md hover:opacity-80 transition">
                    App Store
                  </a>
                  <a href="#" className="bg-black text-white text-[11px] font-bold px-3 py-1.5 rounded-md hover:opacity-80 transition">
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Updated Date Banner Notice */}
        <div className="text-right text-[10px] text-purple-200 mt-8 max-w-[1240px] mx-auto">
          Թարմացվել է` 04/09/2026 17:45
        </div>
      </section>

      {/* 10. FOOTER SECTION */}
      <footer className="bg-white border-t border-gray-100 text-xs text-gray-600 pt-12 pb-12">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          <div className="space-y-4">
            <span className="text-2xl font-black text-gray-900 block">
              evoca<span className="text-gray-400 font-bold">BANK</span>
            </span>
            <p className="text-gray-600 leading-relaxed">
              ք․ Երևան, 0010,<br /> Հանրապետության 44/2
            </p>
            <p className="text-[11px] text-gray-400 leading-tight">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="text-[10px] text-gray-400 pt-2">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-3">Բանկի մասին</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#6a0dad]">Մեր մասին</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Ղեկավարություն</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Բաժնետերեր</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հաշվետվություններ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Իրավական ակտեր</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Սակագներ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Օտարվող գույք</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Կառուցապատողներ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Գործընկեր ավտոսրահներ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Սակագների արխիվ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-3">Օգտակար հղումներ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#6a0dad]">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հաճախորդի ռեզիդենտության չափանիշներ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Կարգավորում</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Գաղտնիության քաղաքականություն</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Ֆին. հաշտարար</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Ֆինանսական հանցագործությունների կանխարգելում</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հղումներ Բանկի քարտապանների համար</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-3">Այլ հղումներ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#6a0dad]">EvocaONLINE</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Պահատուփեր</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հաճախ տրվող հարցեր</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հայտարարություններ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Dibrary</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Բուկլետներ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հետադարձ կապ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Կայքի քարտեզ</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3 text-gray-400 font-semibold">
              <a href="#" className="hover:text-[#6a0dad]">f</a>
              <a href="#" className="hover:text-[#6a0dad]">in</a>
              <a href="#" className="hover:text-[#6a0dad]">yt</a>
            </div>

            <div className="flex gap-2">
              <a href="#" className="bg-black text-white text-[10px] font-bold px-3 py-1 rounded hover:opacity-80 transition">
                App Store
              </a>
              <a href="#" className="bg-black text-white text-[10px] font-bold px-3 py-1 rounded hover:opacity-80 transition">
                Google Play
              </a>
            </div>

            <a href="#" className="text-[#6a0dad] font-bold block hover:underline">
              Բանկի հասցեները և աշխատաժամերը
            </a>

            <a href="#" className="text-[#6a0dad] font-bold block hover:underline">
              Կապ մեզ հետ
            </a>

            <div className="space-y-0.5 font-bold text-gray-900 text-sm">
              <p>+374 10 605555</p>
              <p className="text-[#6a0dad] text-base">8444</p>
            </div>
          </div>

        </div>

        {/* BOTTOM PARTNERS / CERTIFICATES BAR */}
        <div className="max-w-[1240px] mx-auto px-4 md:px-8 pt-8 mt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-400">
          <p className="max-w-2xl leading-relaxed">
            Կայքում տեղադրված տեղեկատվության վերաբերյալ տարբերություններ առաջանալու դեպքում, ինչպես նաև ռուսերեն և անգլերեն լեզուներով ոչ ամբողջական լինելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով։ «Էվոկաբանկ» ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների համար։
          </p>
          <div className="flex items-center gap-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition">
            <span className="font-bold text-xs">fininfo</span>
            <span className="font-bold text-xs">abcfinance.am</span>
            <span className="font-bold text-xs">arca</span>
          </div>
        </div>
      </footer>

      {/* FLOATING SIDEBAR SOCIAL ICONS */}
      <div className="hidden lg:flex flex-col items-center gap-3 fixed left-2 top-1/2 -translate-y-1/2 z-30 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-md border border-gray-100 text-gray-500">
        <a href="#" className="hover:text-[#6a0dad] transition font-bold text-xs">f</a>
        <a href="#" className="hover:text-[#6a0dad] transition font-bold text-xs">in</a>
        <a href="#" className="hover:text-[#6a0dad] transition font-bold text-xs">P</a>
      </div>

      {/* FLOATING CHAT & CALL BUTTONS */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <button className="bg-[#6a0dad] text-white font-bold text-xs px-5 py-3 rounded-full shadow-xl hover:bg-purple-900 transition flex items-center gap-2">
          Գրեք մեզ, մենք օնլայն ենք ․․․
        </button>
        <button className="bg-[#d8b4fe] text-[#6a0dad] p-3 rounded-full shadow-lg hover:bg-purple-300 transition">
          <Phone className="w-5 h-5 fill-current" />
        </button>
      </div>

    </div>
  );
};

export default InvestmentLoanPage;