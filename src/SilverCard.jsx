import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

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

const SilverCard = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [selectedCurrency, setSelectedCurrency] = useState('AMD');

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* 1. Top Navbar / Header */}
      <header className="bg-white border-b border-gray-100">
        {/* Sub-menu Purple Bar */}
        <div className="bg-purple-600 text-white text-xs font-semibold">
          <div className="max-w-7xl mx-auto px-4 py-3 flex space-x-8">
            <span className="bg-purple-800 px-3 py-1 rounded-md cursor-pointer">Քարտեր</span>
            <span className="hover:opacity-80 cursor-pointer my-auto">Քարտերի տրամադրում և սպասարկում</span>
            <span className="hover:opacity-80 cursor-pointer my-auto">Սոցիալական ապահովության վճարային քարտեր</span>
            <span className="hover:opacity-80 cursor-pointer my-auto">Evoca Benefits</span>
          </div>
        </div>
      </header>

      {/* ================= 2. HERO / BANNER SECTION ================= */}
      <section className="bg-purple-50/50 relative pt-12 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Title & Description */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                Arca Union Pay Co-badge
              </h1>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
                Մեկ քարտ, բազմաթիվ հնարավորություններ: Arca` ամենօրյա գնումների և Union Pay` ճամփորդությունների և միջազգային գնումների համար:
              </p>
            </div>

            {/* Card Image Display */}
            <div className="flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-md transform hover:scale-105 transition duration-500">
                <img
                  src="https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png"
                  alt="Arca Union Pay Co-badge Card"
                  className="w-full h-auto drop-shadow-2xl rounded-2xl"
                />
              </div>
            </div>

          </div>

          {/* Breadcrumb Navigation */}
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
        </div>
      </section>

      {/* ================= 3. DETAILS & PRICING TABS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Tabs Header */}
        <div className="flex border-b border-gray-200 mb-8 text-sm font-bold">
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-3 pr-8 transition relative ${
              activeTab === 'about'
                ? 'text-purple-700 border-b-2 border-purple-700'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Քարտի մասին
          </button>
          <button
            onClick={() => setActiveTab('rates')}
            className={`pb-3 px-8 transition relative ${
              activeTab === 'rates'
                ? 'text-purple-700 border-b-2 border-purple-700'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Սակագներ և դրույքներ
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'about' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-sm text-gray-700 leading-relaxed">
              <p className="font-medium text-gray-800">
                Պետք չէ ընտրություն կատարել լոկալ և միջազգային քարտերի միջև:
              </p>

              <p>
                <strong className="text-purple-700">Evoca</strong>-ն միավորում է <strong className="text-gray-900">Arca</strong> ազգային և <strong className="text-gray-900">Union Pay</strong> միջազգային վճարային համակարգերի հնարավորությունները մեկ քարտում՝ թողարկելով <span className="text-purple-700 font-semibold underline">Arca Union Pay Co-badge քարտը</span>:
              </p>

              <p>
                <strong className="text-gray-900">Co-badge</strong> քարտերի դեպքում նույն քարտը Հայաստանում աշխատում է որպես Arca վճարային քարտ, իսկ Հայաստանի սահմաններից դուրս՝ միջազգային քարտ, որը սպասարկվում է աշխարհի <strong>ավելի քան 189 երկրում</strong>:
              </p>

              <p>
                Ձեռք բերելով <strong className="text-purple-700">Arca Union Pay Co-badge վճարային քարտ</strong>՝ դու հնարավորություն ես ստանում Հայաստանում օգտվել <strong className="text-purple-700">2% cashback</strong>-ից և, միևնույն ժամանակ, նույն քարտով ոչ միայն կատարել գործարքներ ՀՀ սահմաններից դուրս, այլ նաև օգտվել Union Pay վճարային համակարգի կողմից տրամադրվող <strong>զեղչերից և առաջարկներից</strong>:
              </p>

              <p className="italic text-purple-900 font-medium pt-2">
                Գնումներ Հայաստանո՞ւմ, թե՞ արտերկրում․ Arca Union Pay Co-badge քարտը հարմար է երկու դեպքում էլ:
              </p>
            </div>

            {/* Right Card Feature Summary Box */}
            <div className="lg:col-span-5 bg-white border border-gray-100 rounded-2xl shadow-xl p-6 sm:p-8 space-y-6">
              
              {/* Currency Selector Icons */}
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setSelectedCurrency('AMD')}
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition ${
                    selectedCurrency === 'AMD' ? 'bg-purple-600 text-white shadow' : 'bg-gray-100 text-purple-700 hover:bg-gray-200'
                  }`}
                >
                  ֏
                </button>
                <button
                  onClick={() => setSelectedCurrency('USD')}
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition ${
                    selectedCurrency === 'USD' ? 'bg-purple-600 text-white shadow' : 'bg-gray-100 text-purple-700 hover:bg-gray-200'
                  }`}
                >
                  $
                </button>
                <button
                  onClick={() => setSelectedCurrency('EUR')}
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition ${
                    selectedCurrency === 'EUR' ? 'bg-purple-600 text-white shadow' : 'bg-gray-100 text-purple-700 hover:bg-gray-200'
                  }`}
                >
                  €
                </button>
              </div>

              {/* Feature 1 */}
              <div className="flex justify-between items-baseline border-b border-gray-100 pb-4">
                <div>
                  <span className="text-xs text-gray-400 block mb-1">Սակագին</span>
                  <div className="text-2xl font-black text-purple-700">2,500 ֏</div>
                </div>
                <div className="text-xs text-gray-600 font-medium">տարեկան (ամսական` 250֏)</div>
              </div>

              {/* Feature 2 */}
              <div className="flex justify-between items-baseline border-b border-gray-100 pb-4">
                <div>
                  <span className="text-xs text-gray-400 block mb-1">Cashback</span>
                  <div className="text-2xl font-black text-purple-700">2%</div>
                </div>
                <div className="text-xs text-gray-600 font-medium">տեղական գործարքներից</div>
              </div>

              {/* Feature 3 */}
              <div className="flex justify-between items-baseline border-b border-gray-100 pb-4">
                <div>
                  <span className="text-xs text-gray-400 block mb-1">Մինչև</span>
                  <div className="text-2xl font-black text-purple-700">1,000,000 ֏</div>
                </div>
                <div className="text-xs text-gray-600 font-medium text-right max-w-[180px]">
                  անվճար կանխիկացում Բանկի ATM-ով
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="text-xs text-gray-400 block mb-1">Ավելի քան</span>
                  <div className="text-2xl font-black text-purple-700">189</div>
                </div>
                <div className="text-xs text-gray-600 font-medium text-right max-w-[180px]">
                  երկրում քարտով գործարքներ կատարելու հնարավորություն
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Tab Content for Rates (ՍԱԿԱԳՆԵՐ ԵՎ ԴՐՈՒՅԹՆԵՐ) */}
        {activeTab === 'rates' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden text-xs sm:text-sm text-gray-700">
            <div className="p-4 sm:p-6 bg-purple-50/30 border-b border-purple-100 text-center font-bold text-gray-900 text-base sm:text-lg">
              ArCa UPI cobadge
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800 w-1/2">Քարտի արժույթը</td>
                    <td className="p-3 sm:p-4">ՀՀ դրամ (AMD), ԱՄՆ դոլար (USD), Եվրո (EUR)</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800">Քարտի տրամադրում</td>
                    <td className="p-3 sm:p-4">0</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800">Շտապ թողարկում</td>
                    <td className="p-3 sm:p-4">10,000 ՀՀ դրամ</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800 align-top">Քարտի սպասարկում</td>
                    <td className="p-3 sm:p-4 space-y-3">
                      <div className="flex justify-between max-w-md">
                        <span>Տարեկան`</span>
                        <span className="font-semibold">2,500 ՀՀ դրամ</span>
                      </div>
                      <div className="flex justify-between max-w-md">
                        <span>Ամսական`</span>
                        <div>
                          <span className="font-semibold">250 ՀՀ դրամ</span>
                          <p className="text-[11px] text-gray-500 mt-0.5">
                            (Ամսական սպասարկման վճարով քարտի պատվեր հնարավոր է իրականացնել միայն <a href="#branch" className="text-purple-600 underline font-semibold">Բանկի մասնաճյուղերում</a>)
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 pt-1 text-[11px] border-t border-gray-100">
                        24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար` <strong>50 000 ՀՀ դրամ միանվագ</strong>
                      </p>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800">Կից քարտի տրամադրում</td>
                    <td className="p-3 sm:p-4">0</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800">Կից քարտի տարեկան սպասարկում</td>
                    <td className="p-3 sm:p-4">2,500 ՀՀ դրամ</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800">
                      Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան %
                    </td>
                    <td className="p-3 sm:p-4">0%</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800 align-top">
                      Քարտերով կանխիկի տրամադրում Բանկի բանկոմատներով, Բանկի դրամարկղերում կամ POS-տերմինալի միջոցով
                    </td>
                    <td className="p-3 sm:p-4 space-y-2">
                      <div className="font-semibold text-gray-800">ՀՀ դրամ`</div>
                      <div className="pl-3 space-y-1">
                        <div className="flex justify-between max-w-lg">
                          <span>Ամսական մինչև 1,000,000 ՀՀ դրամ (ներառյալ)`</span>
                          <span className="font-semibold">0 %</span>
                        </div>
                        <div className="flex justify-between max-w-lg">
                          <span>1,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ`</span>
                          <span className="font-semibold">0.2 %</span>
                        </div>
                        <div className="flex justify-between max-w-lg">
                          <span>POS տերմինալով`</span>
                          <span className="font-semibold">0.2 %</span>
                        </div>
                      </div>
                      <div className="pt-2 font-semibold text-gray-800">ԱՄՆ դոլար / Եվրո`</div>
                      <p className="pl-3 text-gray-600">
                        0.5 %, իսկ Բանկի դրամարկղերում քարտի կամ առանց քարտի կիրառության` 0.5% նվազագույնը 500 ՀՀ դրամ
                      </p>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800">
                      Քարտերով կանխիկի տրամադրում ԱրՔա համակարգի անդամ հանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով
                    </td>
                    <td className="p-3 sm:p-4">0,8%</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800">
                      Քարտերով կանխիկի տրամադրում օտարերկրյա բանկերի և ԱրՔա համակարգի անդամ չհանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով
                    </td>
                    <td className="p-3 sm:p-4">1% min 1,500 ՀՀ դրամ</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800">
                      Կանխիկի մուտքագրում Էվոկաբանկի և ԱրՔա համակարգի անդամ ՀՀ այլ բանկերի Cash-In բանկոմատներում
                    </td>
                    <td className="p-3 sm:p-4">0.80%</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800">
                      Բանկի և այլ բանկերի POS-ով անկանխիկ գործարքների իրականացում
                    </td>
                    <td className="p-3 sm:p-4">0</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800">Քարտի գործողության կասեցում</td>
                    <td className="p-3 sm:p-4">0</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800">Քարտի գործողության ապակասեցում</td>
                    <td className="p-3 sm:p-4">1,000 ՀՀ դրամ</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800">
                      Քարտի Վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում
                    </td>
                    <td className="p-3 sm:p-4">0</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800">
                      Քարտի Վերաթողարկում կորստի կամ վնասվելու դեպքում
                    </td>
                    <td className="p-3 sm:p-4">2,500 ՀՀ դրամ</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800">PIN գաղտնաբառի վերաթողարկում</td>
                    <td className="p-3 sm:p-4">1,000 ՀՀ դրամ</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800">Քարտային հաշվի ամսական քաղվածքի տրամադրում</td>
                    <td className="p-3 sm:p-4">0</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800">Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել</td>
                    <td className="p-3 sm:p-4">1,000 ՀՀ դրամ</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800">Կանխիկացման առավելագույն սահմանաչափ</td>
                    <td className="p-3 sm:p-4">1,000,000 ՀՀ դրամ</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800">Կանխիկացման գործարքների օրական առավելագույն քանակ</td>
                    <td className="p-3 sm:p-4">10</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800">
                      Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն գումարային սահմանաչափ
                    </td>
                    <td className="p-3 sm:p-4">500,000 ՀՀ դրամ (կախված է ԱԳՄ-ից)</td>
                  </tr>

                  <tr className="border-b border-purple-100 bg-purple-50/20">
                    <td colSpan="2" className="p-3 sm:p-4 font-bold text-gray-800">
                      Մեկ օրվա ընթացքում կանխիկացման գործարքների կամ սահմանաչափերի քանակի ավելացման միջնորդավճար քարտի գործողության ամբողջ ընթացքում․
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 pl-6 text-gray-700">Կանխիկացման սահմանաչափի փոփոխություն մինչև 5մլն ՀՀ դրամի դեպքում</td>
                    <td className="p-3 sm:p-4">2,900 ՀՀ դրամ</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 pl-6 text-gray-700">Կանխիկացման սահմանաչափի փոփոխություն 5 մլն ՀՀ դրամ և ավելի դեպքում</td>
                    <td className="p-3 sm:p-4">4,900 ՀՀ դրամ</td>
                  </tr>

                  <tr className="border-b border-purple-100 bg-purple-50/20">
                    <td colSpan="2" className="p-3 sm:p-4 font-bold text-gray-800">
                      Քարտից քարտ փոխանցումներ Բանկոմատների միջոցով
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 pl-6 text-gray-700">Բանկի վճարային քարտերին</td>
                    <td className="p-3 sm:p-4">0.30%</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 pl-6 text-gray-700">
                      ԱրՔա համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՔա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին
                    </td>
                    <td className="p-3 sm:p-4">0.50%</td>
                  </tr>

                  <tr className="border-b border-purple-100 bg-purple-50/20">
                    <td colSpan="2" className="p-3 sm:p-4 font-bold text-gray-800">
                      Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 pl-6 text-gray-700" rowSpan="2">Էվոկաբանկի քարտերին</td>
                    <td className="p-3 sm:p-4">Նույն արժույթով քարտին` <strong>0%</strong></td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4">Տարբեր արժույթով քարտին` <strong>0.3%</strong></td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 pl-6 text-gray-700">
                      ԱրՔա համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՔա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին
                    </td>
                    <td className="p-3 sm:p-4">0.50%</td>
                  </tr>

                  <tr className="border-b border-purple-100 bg-purple-50/20">
                    <td colSpan="2" className="p-3 sm:p-4 font-bold text-gray-800">
                      Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 pl-6 text-gray-700">Մինչև 5,000 ՀՀ դրամ գործարքներ</td>
                    <td className="p-3 sm:p-4">20 ՀՀ դրամ</td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 pl-6 text-gray-700">5,000 ՀՀ դրամը գերազանցող գործարքներ</td>
                    <td className="p-3 sm:p-4">0</td>
                  </tr>

                  <tr className="hover:bg-gray-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-gray-800">Գերածախսի գծով տույժեր</td>
                    <td className="p-3 sm:p-4">20 % տարեկան</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footnotes */}
            <div className="p-4 sm:p-6 bg-gray-50/70 border-t border-gray-100 space-y-2 text-[11px] text-gray-500 italic">
              <p>[1] Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ</p>
              <p>[2] Սակագինը գործում է նաև գործարքի մերժման դեպքում ուղարկված SMS հաղորդագրության համար` անկախ գործարքի գումարի չափից</p>
            </div>
          </div>
        )}
      </section>

      {/* ================= 4. ԱՅԼ ՔԱՐՏԵՐ SWIPER SECTION ================= */}
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

      {/* 5. Օնլայն և մոբայլ բանկինգ Banner */}
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

      {/* 6. Footer Section */}
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

export default SilverCard;