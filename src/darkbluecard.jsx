import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const cardsData = [
 {
    id: 'travel',
    title: 'Evoca Travel Card',
    imgUrl: 'https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png',
    link: '/cards/travel-card'
  },
  {
    id: 'visa-platinum',
    title: 'Evoca Visa Platinum',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png',
    link: '/cards/visa-platinum'
  },
  {
    id: 'wilco-infinite',
    title: 'Wilco Visa Infinite',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png',
    link: '/cards/wilco-visa-infinite'
  },
  {
    id: 'gift-card',
    title: 'Evoca Gift Card',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png',
    link: '/cards/gift-card'
  },
  {
    id: 'gift-4u',
    title: 'Digital Gift Card',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png',
    link: '/cards/4u-gift-card'
  },
  {
    id: 'mc-gold',
    title: 'Mastercard Gold',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png',
    link: '/cards/mastercard-gold'
  },
  {
    id: 'visa-infinite',
    title: 'Visa Infinite',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png',
    link: '/cards/visa-infinite'
  },
  {
    id: 'visa-vision',
    title: 'Visa Vision',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png',
    link: '/cards/visa-vision'
  },
  {
    id: 'mc-world-digital',
    title: 'Mastercard World Digital',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png',
    link: '/cards/mastercard-world-digital'
  },
  {
    id: 'unionpay-business-platinum',
    title: 'UnionPay Business Platinum',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png',
    link: '/cards/unionpay-business-platinum'
  },
  {
    id: 'myler-gift-card',
    title: 'MyLer Gift Card',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png',
    link: '/cards/myler-gift-card'
  },
  {
    id: 'unionpay-gold',
    title: 'UnionPay Gold',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png',
    link: '/cards/unionpay-gold'
  },
  {
    id: 'arca-classic',
    title: 'Arca Classic',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png',
    link: '/cards/arca-classic'
  },
  {
    id: 'arca-unionpay',
    title: 'Arca Union Pay Co-badge',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png',
    link: '/cards/arca-unionpay'
  },
  {
    id: 'mc-standard',
    title: 'Mastercard Standard',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png',
    link: '/cards/mastercard-standard'
  },
  {
    id: 'visa-digital',
    title: 'Visa Digital',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png',
    link: '/cards/visa-digital'
  },
  {
    id: 'visa-classic',
    title: 'Visa Classic',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png',
    link: '/cards/visa-classic'
  },
  {
    id: 'arca-classic-page',
    title: 'Arca Classic',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png',
    link: '/cards/arca-classic-card'
  },
  {
    id: 'arca-unionpay-cobadge',
    title: 'Arca Union Pay Co-badge',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png',
    link: '/cards/arca-union-pay-co-badge'
  },
  /* --- Վերջին 4 քարտերը փոխված link-երով --- */
  {
    id: 'visa-business-premium',
    title: 'Visa Business',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png',
    link: '/cards/visa-business-card'
  },
  {
    id: 'dalma-gift-card-page',
    title: 'Dalma Gift Card',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png',
    link: '/cards/dalma-card'
  },
  {
    id: 'rio-gift-card-page',
    title: 'Rio Gift Card',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png',
    link: '/cards/rio-card'
  },
  {
    id: 'visa-gold-premium',
    title: 'Visa Gold',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png',
    link: '/cards/visa-gold-card'
  }
];

const DarkBlueCard = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [currency, setCurrency] = useState('֏');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans relative">
      
      {/* Top Navbar / Header */}
      <header className="bg-white border-b border-gray-200">
      
        
        {/* Sub-menu bar */}
        <div className="bg-purple-700 text-white text-sm">
          <div className="max-w-7xl mx-auto px-4 py-2.5 flex space-x-8">
            <span className="font-bold cursor-pointer">Քարտեր</span>
            <span className="opacity-80 hover:opacity-100 cursor-pointer">Քարտերի տրամադրում և սպասարկում</span>
            <span className="opacity-80 hover:opacity-100 cursor-pointer">Սոցիալական ապահովության վճարային քարտեր</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Card Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Arca Classic</h1>
            <p className="text-gray-600 leading-relaxed max-w-lg mb-4">
              Evocabank-ի հետ ցանկացած գնում և վճարում ապահով է և հուսալի: Նոր քարտերի թողարկումը դադարեցված է 01.09.2026թ.-ից:
            </p>
          </div>

      <img src="https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png" alt="" />

        </div>

        {/* Back Button & Breadcrumbs */}
        <div className="mt-8 flex items-center justify-between border-b pb-6">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center text-sm font-medium text-gray-600 hover:text-purple-600 bg-white border border-gray-300 rounded-full px-4 py-1.5 shadow-sm transition"
          >
            ← Վերադառնալ
          </button>
          <div className="text-xs text-gray-400 space-x-1">
            <span>Անհատ</span> &gt; <span>Քարտեր</span> &gt; <span>ArCa</span> &gt; <span className="text-gray-600 font-medium">Arca Classic</span>
          </div>
        </div>
      </section>

      {/* Details & Tariffs Section */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="flex space-x-8 border-b border-gray-200 mb-8">
          <button 
            onClick={() => setActiveTab('about')}
            className={`pb-3 text-sm font-bold transition ${activeTab === 'about' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Քարտի մասին
          </button>
          <button 
            onClick={() => setActiveTab('rates')}
            className={`pb-3 text-sm font-bold transition ${activeTab === 'rates' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Սակագներ և դրույքներ
          </button>
        </div>

        {activeTab === 'about' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Description */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
              <p>
                <strong className="text-purple-700">Arca Classic</strong> քարտը «Արմենիան Քարդ» վճարային համակարգի կողմից թողարկվող լոկալ վճարային քարտ է, որը հնարավոր է օգտագործել միայն ՀՀ տարածքում:
              </p>
              <p>
                <strong className="text-purple-700">Arca Classic</strong> վճարային քարտով դու կկարողանաս վճարումներ կատարել ՀՀ տարածքում գործող առևտրի և սպասարկման կետերում, դրամական միջոցներ կանխիկացնել ATM-ից, օնլայն գնումներ և վճարումներ կատարել ArCa տարբերանշանը կրող ինտերնետային կայքերում, <strong className="text-purple-700">EvocaTOUCH</strong> հավելվածի միջոցով իրականացնել կոմունալ վճարումներ, փոխանցումներ և մի շարք այլ վճարումներ:
              </p>
              <p>
                Պատվիրիր <strong className="text-purple-700">Arca Classic</strong> քարտը <strong className="text-purple-700">EvocaTOUCH</strong> հավելվածի միջոցով, և մենք անվճար կառաքենք այն ՀՀ ողջ տարածքում:
              </p>
            </div>

            {/* Tariffs Card Container */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              {/* Currency Switcher */}
              <div className="flex space-x-2 mb-6">
                {['֏', '$', '€', '₽'].map((symbol, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrency(symbol)}
                    className={`w-9 h-9 rounded-full font-bold text-sm flex items-center justify-center transition ${currency === symbol ? 'bg-purple-600 text-white' : 'bg-gray-100 text-purple-600 hover:bg-gray-200'}`}
                  >
                    {symbol}
                  </button>
                ))}
              </div>

              {/* Tariff Items */}
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center border-b pb-3">
                  <div className="text-purple-700 font-bold text-base">0.5%</div>
                  <div className="text-gray-600 text-right">Քարտերով կանխիկի տրամադրում Բանկի ATM-ով</div>
                </div>

                <div className="flex justify-between items-center border-b pb-3">
                  <div className="text-purple-700 font-bold text-base">0.2%</div>
                  <div className="text-gray-600 text-right">Քարտերով կանխիկի տրամադրում Բանկի ATM-ով</div>
                </div>

                <div className="flex justify-between items-center border-b pb-3">
                  <div className="text-purple-700 font-bold text-base">1%</div>
                  <div className="text-gray-600 text-right">Քարտերով կանխիկի տրամադրում «ԱրՔա» համակարգի այլ բանկերի ATM-ով և POS-ով</div>
                </div>

                <div className="flex justify-between items-center pt-1">
                  <div className="text-purple-700 font-bold text-base">1500 ֏</div>
                  <div className="text-gray-600 text-right">Տարեկան սպասարկում</div>
                </div>
              </div>
            </div>

          </div>
        ) : (
          /* ================= ՍԱԿԱԳՆԵՐ ԵՎ ԴՐՈՒՅՔՆԵՐ ՏԱԲԻ ԱՂՅՈՒՍԱԿԸ ================= */
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm overflow-x-auto text-xs text-gray-800">
            <h3 className="font-bold text-sm text-gray-900 mb-4">ArCa Classic վճարային քարտեր</h3>
            
            <table className="w-full border-collapse border border-gray-200 text-left min-w-[700px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-700">
                  <th className="p-3 border-r border-gray-200 font-semibold w-1/3">Մատուցվող ծառայություն</th>
                  <th className="p-3 border-r border-gray-200 font-semibold text-center">ArCa AMD</th>
                  <th className="p-3 border-r border-gray-200 font-semibold text-center">ArCa USD</th>
                  <th className="p-3 border-r border-gray-200 font-semibold text-center">ArCa EUR</th>
                  <th className="p-3 font-semibold text-center">ArCa RUB</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-3 border-r border-gray-200">Քարտի տրամադրում</td>
                  <td className="p-3 border-r border-gray-200 text-center">0</td>
                  <td className="p-3 border-r border-gray-200 text-center">0</td>
                  <td className="p-3 border-r border-gray-200 text-center">0</td>
                  <td className="p-3 text-center">0</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">
                    <div>Քարտի սպասարկում / ՀՀ դրամ</div>
                    <div className="text-gray-500 text-[11px] mt-1 pl-2">Տարեկան</div>
                    <div className="text-gray-500 text-[11px] pl-2">Ամսական</div>
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center align-bottom">
                    <div>1 500</div>
                    <div>190</div>
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center align-bottom">
                    <div>1 500</div>
                    <div>190</div>
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center align-bottom">
                    <div>1 500</div>
                    <div>190</div>
                  </td>
                  <td className="p-3 text-center align-bottom">
                    <div>1 500</div>
                    <div>190</div>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Կից քարտի տրամադրում</td>
                  <td className="p-3 border-r border-gray-200 text-center">0</td>
                  <td className="p-3 border-r border-gray-200 text-center">0</td>
                  <td className="p-3 border-r border-gray-200 text-center">0</td>
                  <td className="p-3 text-center">0</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Կից քարտի տարեկան սպասարկում</td>
                  <td className="p-3 border-r border-gray-200 text-center">1 500</td>
                  <td className="p-3 border-r border-gray-200 text-center">1 500</td>
                  <td className="p-3 border-r border-gray-200 text-center">1 500</td>
                  <td className="p-3 text-center">1 500</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">
                    Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան %
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center">0%</td>
                  <td className="p-3 border-r border-gray-200 text-center">0%</td>
                  <td className="p-3 border-r border-gray-200 text-center">0%</td>
                  <td className="p-3 text-center">0%</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">
                    Քարտերով կանխիկի տրամադրում Բանկի բանկոմատներով, Բանկի դրամարկղերում կամ POS-տերմինալի միջոցով
                  </td>
                  <td className="p-3 border-r border-gray-200">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Ամսական մինչև 300,000 ՀՀ դրամ (ներառյալ)` Անվճար,</li>
                      <li>300,000 ՀՀ դրամը գերազանցող մասի նկատմամբ` 0.2 %</li>
                      <li>POS տերմինալով` 0.2 %</li>
                    </ul>
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center">
                    0.5 %,<br /><br />
                    Բանկի դրամարկղերում քարտի կամ առանց քարտի կիրառության - 0.5% min 500 ՀՀ դրամ
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center">
                    0.5 %,<br /><br />
                    Բանկի դրամարկղերում քարտի կամ առանց քարտի կիրառության - 0.5% min 500 ՀՀ դրամ
                  </td>
                  <td className="p-3 text-center">
                    0.5 %,<br /><br />
                    Բանկի դրամարկղերում քարտի կամ առանց քարտի կիրառության - 0.5% min 500 ՀՀ դրամ
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">
                    Քարտերով կանխիկի տրամադրում այլ բանկերի ATM-ով և POS-ով
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center">1%</td>
                  <td className="p-3 border-r border-gray-200 text-center">1%</td>
                  <td className="p-3 border-r border-gray-200 text-center">1%</td>
                  <td className="p-3 text-center">1%</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">
                    Կանխիկի մուտքագրում Էվոկաբանկի և ԱրՔա համակարգի անդամ ՀՀ այլ բանկերի Cash-In բանկոմատներում
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center">0.6%</td>
                  <td className="p-3 border-r border-gray-200 text-center">0.6%</td>
                  <td className="p-3 border-r border-gray-200 text-center">0.6%</td>
                  <td className="p-3 text-center">0.6%</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">
                    Բանկի և այլ բանկերի POS-ով անկանխիկ գործարքների իրականացում
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center">0</td>
                  <td className="p-3 border-r border-gray-200 text-center">0</td>
                  <td className="p-3 border-r border-gray-200 text-center">0</td>
                  <td className="p-3 text-center">0</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">
                    Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center">0</td>
                  <td className="p-3 border-r border-gray-200 text-center">0</td>
                  <td className="p-3 border-r border-gray-200 text-center">0</td>
                  <td className="p-3 text-center">0</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">
                    Քարտի վերաթողարկում կորստի կամ վնասվելու դեպքում
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center">1,500 ՀՀ դրամ</td>
                  <td className="p-3 border-r border-gray-200 text-center">1,500 ՀՀ դրամ</td>
                  <td className="p-3 border-r border-gray-200 text-center">1,500 ՀՀ դրամ</td>
                  <td className="p-3 text-center">1,500 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">
                    PIN գաղտնաբառի վերաթողարկում
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center">1,000 ՀՀ դրամ</td>
                  <td className="p-3 border-r border-gray-200 text-center">1,000 ՀՀ դրամ</td>
                  <td className="p-3 border-r border-gray-200 text-center">1,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center">1,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">
                    Քարտային հաշվի ամսական քաղվածքի տրամադրում
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center">0</td>
                  <td className="p-3 border-r border-gray-200 text-center">0</td>
                  <td className="p-3 border-r border-gray-200 text-center">0</td>
                  <td className="p-3 text-center">0</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">
                    Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար <sup>[1]</sup>
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center">1,000 ՀՀ դրամ</td>
                  <td className="p-3 border-r border-gray-200 text-center">1,000 ՀՀ դրամ</td>
                  <td className="p-3 border-r border-gray-200 text-center">1,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center">1,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">
                    Կանխիկի տրամադրման առավելագույն սահմանաչափ
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center">1 000 000 ՀՀ դրամ</td>
                  <td className="p-3 border-r border-gray-200 text-center">1 000 000 ՀՀ դրամ</td>
                  <td className="p-3 border-r border-gray-200 text-center">1 000 000 ՀՀ դրամ</td>
                  <td className="p-3 text-center">1 000 000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">
                    Կանխիկացման գործարքների օրական առավելագույն քանակ
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center">10</td>
                  <td className="p-3 border-r border-gray-200 text-center">10</td>
                  <td className="p-3 border-r border-gray-200 text-center">10</td>
                  <td className="p-3 text-center">10</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">
                    Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն գումարային սահմանաչափ
                  </td>
                  <td colSpan={4} className="p-3 text-center font-medium">
                    Նվազագույնը 300,000 ՀՀ դրամ (կախված է ԱԳՄ-ից)
                  </td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td colSpan={5} className="p-3 border-b font-medium text-gray-700">
                    Մեկ օրվա ընթացքում կանխիկացման գործարքների կամ սահմանաչափերի քանակի ավելացման միջնորդավճար քարտի գործողության ամբողջ ընթացքում.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200 pl-6">
                    Կանխիկացման սահմանաչափի փոփոխություն մինչև 5մլն ՀՀ դրամի դեպքում
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center">2 900 ՀՀ դրամ</td>
                  <td className="p-3 border-r border-gray-200 text-center">2 900 ՀՀ դրամ</td>
                  <td className="p-3 border-r border-gray-200 text-center">2 900 ՀՀ դրամ</td>
                  <td className="p-3 text-center">2 900 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200 pl-6">
                    Կանխիկացման սահմանաչափի փոփոխություն 5 մլն ՀՀ դրամ և ավելի դեպքում
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center">4 900 ՀՀ դրամ</td>
                  <td className="p-3 border-r border-gray-200 text-center">4 900 ՀՀ դրամ</td>
                  <td className="p-3 border-r border-gray-200 text-center">4 900 ՀՀ դրամ</td>
                  <td className="p-3 text-center">4 900 ՀՀ դրամ</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td colSpan={5} className="p-3 border-b font-medium text-gray-700">
                    Քարտից քարտ փոխանցումներ Բանկոմատների միջոցով
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200 pl-6">
                    Բանկի վճարային քարտերին
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center">0.3 %</td>
                  <td className="p-3 border-r border-gray-200 text-center">0.3 %</td>
                  <td className="p-3 border-r border-gray-200 text-center">0.3 %</td>
                  <td className="p-3 text-center">0.3 %</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200 pl-6">
                    «ԱրՔա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՔա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center">0.5 %</td>
                  <td className="p-3 border-r border-gray-200 text-center">0.5 %</td>
                  <td className="p-3 border-r border-gray-200 text-center">0.5 %</td>
                  <td className="p-3 text-center">0.5 %</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td colSpan={5} className="p-3 border-b font-medium text-gray-700">
                    Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200 pl-6">
                    Բանկի ներսում
                  </td>
                  <td colSpan={4} className="p-3 text-center">
                    <div>Նույն արժույթով քարտին` 0%</div>
                    <div className="mt-1">Տարբեր արժույթով քարտին` 0.3%</div>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200 pl-6">
                    «ԱրՔա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՔա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին
                  </td>
                  <td colSpan={4} className="p-3 text-center">
                    0.5%
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">
                    <div>Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում</div>
                  </td>
                  <td colSpan={4} className="p-0">
                    <div className="flex border-b border-gray-200">
                      <div className="w-1/2 p-2 border-r border-gray-200 font-medium">Մինչև 5,000 ՀՀ դրամ գործարքներ <sup>[2]</sup></div>
                      <div className="w-1/2 p-2 text-center my-auto">20 ՀՀ դրամ</div>
                    </div>
                    <div className="flex">
                      <div className="w-1/2 p-2 border-r border-gray-200 font-medium">5,000 ՀՀ դրամը գերազանցող գործարքներ</div>
                      <div className="w-1/2 p-2 text-center my-auto">0</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">
                    Գերածախսի գծով տույժեր
                  </td>
                  <td className="p-3 border-r border-gray-200 text-center">20 % տարեկան</td>
                  <td className="p-3 border-r border-gray-200 text-center">20 % տարեկան</td>
                  <td className="p-3 border-r border-gray-200 text-center">20 % տարեկան</td>
                  <td className="p-3 text-center">20 % տարեկան</td>
                </tr>
              </tbody>
            </table>

            {/* Ծանոթագրություններ */}
            <div className="mt-6 space-y-2 text-[11px] text-gray-500 italic">
              <p><sup>[1]</sup> Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ:</p>
              <p><sup>[2]</sup> Սակագինը գործում է նաև գործարքի մերժման դեպքում ուղարկված SMS հաղորդագրության համար` անկախ գործարքի գումարի չափից:</p>
            </div>
          </div>
        )}
      </section>

      {/* Background Banner Section */}
      <section 
        className="mt-16 py-20 bg-cover bg-center text-white relative flex items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(45, 10, 80, 0.75), rgba(45, 10, 80, 0.75)), url('https://www.evoca.am/images-cache/cards/1/16131316712977/1920x527.jpg')` 
        }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold leading-snug tracking-wide">
            Արագ և հուսալի գնումներ ու վճարումներ ՀՀ ամբողջ տարածքում` քո EvocaTOUCH վճարային քարտով:
          </h2>
        </div>
      </section>

      {/* ================= ԱՅԼ ՔԱՐՏԵՐ SWIPER SECTION ================= */}
      <section className="max-w-7xl mx-auto px-16 py-20 relative">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Այլ քարտեր</h2>

        <button className="other-prev absolute left-6 top-[60%] -translate-y-1/2 z-10 text-purple-700 hover:text-purple-900 transition">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className="other-next absolute right-6 top-[60%] -translate-y-1/2 z-10 text-purple-700 hover:text-purple-900 transition">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.other-prev',
            nextEl: '.other-next',
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
        >
         {cardsData.map((card, index) => (
  <SwiperSlide key={`${card.id}-${index}`}>
    <Link 
      to={card.path || card.link} 
      className="flex flex-col items-center text-center cursor-pointer group/card block"
    >
      <div className="w-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover/card:scale-[1.03]">
        <img
          src={card.image || card.imgUrl}
          alt={card.name || card.title}
          className="w-full h-auto object-contain drop-shadow-lg"
        />
      </div>
      <h3 className="font-bold text-gray-900 text-sm md:text-base group-hover/card:text-purple-700 transition-colors">
        {card.name || card.title}
      </h3>
    </Link>
  </SwiperSlide>
))}
        </Swiper>
      </section>

      {/* Օնլայն և մոբայլ բանկինգ Banner */}
      <section className="w-full bg-[#6b21a8] text-white py-12 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="w-full lg:w-1/2 flex items-center justify-center gap-4">
            <div className="relative w-full max-w-[420px]">
              <div className="relative rounded-t-xl border-[8px] border-b-0 border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden aspect-[16/10]">
                <iframe
                  src="https://www.youtube.com/embed/KwAgMHEx8ys"
                  title="EvocaTOUCH Video"
                  className="w-full h-full border-0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-[108%] -translate-x-[4%] h-2.5 bg-neutral-700 rounded-b-lg border-t border-neutral-600 shadow-md"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-5">
            <h2 className="text-2xl md:text-3xl font-extrabold">Օնլայն և մոբայլ բանկինգ</h2>
            <p className="text-purple-100 text-xs md:text-sm leading-relaxed">
              Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է
              տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ։
            </p>

            <div>
              <button className="bg-white text-purple-900 px-6 py-2.5 rounded-full font-bold text-xs hover:bg-purple-50 transition shadow-md">
                Դառնալ հաճախորդ
              </button>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="bg-white p-1 rounded-lg shadow-md shrink-0">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://www.evoca.am"
                  alt="QR Code"
                  className="w-16 h-16"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-purple-100">
                  Ներբեռնել հավելվածները`
                </span>
                <div className="flex items-center gap-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                    className="h-7 cursor-pointer"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-7 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#f8f8fa] text-[#2d2d2d] pt-10 pb-6 px-6 border-t border-gray-100 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end pb-4 border-b border-gray-200 gap-4">
          <div className="text-gray-400 text-[11px]">
            Թարմացվել է` 31/08/2026 17:46
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
          {/* Column 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-1">
              <span className="text-xl font-black text-purple-700 tracking-tight">evoca</span>
              <span className="text-xl font-black text-gray-800 tracking-tight">BANK</span>
            </div>
            <p className="text-gray-600 leading-relaxed text-[12px]">
              ք. Երևան, 0010,<br />
              Հանրապետության 44/2
            </p>
            <p className="text-gray-500 leading-normal text-[11px]">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="text-[10px] text-gray-400 pt-1">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3 text-xs">Բանկի մասին</h4>
            <p className="hover:text-purple-700 cursor-pointer">Մեր մասին</p>
            <p className="hover:text-purple-700 cursor-pointer">Ղեկավարություն</p>
            <p className="hover:text-purple-700 cursor-pointer">Բաժնետերեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Հաշվետվություններ</p>
            <p className="hover:text-purple-700 cursor-pointer">Իրավական ակտեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Սակագներ</p>
            <p className="hover:text-purple-700 cursor-pointer">Օտարվող գույք</p>
            <p className="hover:text-purple-700 cursor-pointer">Կառուցապատողներ</p>
            <p className="hover:text-purple-700 cursor-pointer">Գործընկեր ավտոսրահներ</p>
            <p className="hover:text-purple-700 cursor-pointer">Սակագների արխիվ</p>
          </div>

          {/* Column 3 */}
          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3 text-xs">Օգտակար հղումներ</h4>
            <p className="hover:text-purple-700 cursor-pointer leading-tight">
              Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)
            </p>
            <p className="hover:text-purple-700 cursor-pointer leading-tight">
              Հաճախորդի ռեզիդենտության չափանիշներ
            </p>
            <p className="hover:text-purple-700 cursor-pointer">Կարգավորում</p>
            <p className="hover:text-purple-700 cursor-pointer">Գաղտնիության քաղաքականություն</p>
            <p className="hover:text-purple-700 cursor-pointer">Ֆին. հաշտարար</p>
            <p className="hover:text-purple-700 cursor-pointer leading-tight">
              Ֆինանսական հանցագործությունների կանխարգելում
            </p>
            <p className="hover:text-purple-700 cursor-pointer leading-tight">
              Հղումներ Բանկի քարտապանների համար
            </p>
          </div>

          {/* Column 4 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-gray-900 text-xs">Այլ հղումներ</h4>
              <div className="flex gap-2 text-gray-400 text-xs">
                <span className="hover:text-purple-600 cursor-pointer">f</span>
                <span className="hover:text-purple-600 cursor-pointer">📷</span>
                <span className="hover:text-purple-600 cursor-pointer">p</span>
                <span className="hover:text-purple-600 cursor-pointer">▶</span>
                <span className="hover:text-purple-600 cursor-pointer">in</span>
              </div>
            </div>

            <p className="hover:text-purple-700 cursor-pointer">EvocaONLINE</p>
            <p className="hover:text-purple-700 cursor-pointer">Պահատուփեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Հաճախ տրվող հարցեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Հայտարարություններ</p>
            <p className="hover:text-purple-700 cursor-pointer">Dibrary</p>
            <p className="hover:text-purple-700 cursor-pointer">Բուկլետներ</p>

            <div className="pt-2 space-y-1">
              <p className="text-[#6b21a8] font-bold hover:underline cursor-pointer">
                Բանկի հասցեները և աշխատաժամերը
              </p>
              <p className="text-[#6b21a8] font-bold hover:underline cursor-pointer">
                Կապ մեզ հետ
              </p>
              <p className="text-[#6b21a8] font-bold text-xs">+374 10 605555</p>
              <p className="text-[#6b21a8] font-extrabold text-sm">8444</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200/60 pt-4 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400">
          <p className="max-w-2xl">
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանություն...
          </p>
          <div className="flex gap-4">
            <span className="font-bold text-gray-500">arca</span>
            <span className="font-bold text-gray-500">fininfo</span>
          </div>
        </div>

        {/* Floating Online Chat Widget */}
        <div className="fixed bottom-4 right-4 z-50 flex items-center">
          <button className="bg-[#6b21a8] text-white font-bold text-xs px-4 py-2 rounded-l-full shadow-lg hover:bg-purple-800 transition">
            Գրեք մեզ, մենք օնլայն ենք !
          </button>
          <div className="bg-purple-500 p-2 rounded-full text-white shadow-lg -ml-2 cursor-pointer">
            💬
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DarkBlueCard;