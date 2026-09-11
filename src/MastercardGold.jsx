import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function MastercardGold() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');

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

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans">
      
      
      {/* Sub Header Navigation Bar */}
      <div className="bg-[#6b21a8] text-white py-2 px-4 md:px-12 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex items-center gap-6">
          <span className="bg-purple-900/60 px-3 py-1 rounded-md cursor-pointer">Քարտեր</span>
          <span className="hover:text-purple-200 cursor-pointer">Քարտերի տրամադրում և սպասարկում</span>
          <span className="hover:text-purple-200 cursor-pointer">Սոցիալական ապահովության վճարային քարտեր</span>
          <span className="hover:text-purple-200 cursor-pointer">Evoca Benefits</span>
        </div>
      </div>

      {/* 2. Hero Section */}
      <div className="bg-gradient-to-r from-purple-50 via-purple-100/40 to-purple-50 py-12 px-4 md:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              Mastercard Gold
            </h1>
            <p className="text-purple-700 font-semibold text-sm md:text-base">
              Ընդգծիր կարգավիճակդ քո Mastercard Gold քարտով:
            </p>
          </div>
          <div className="relative w-full max-w-md flex justify-center">
            <img 
              src="https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png" 
              alt="Mastercard Gold" 
              className="w-full max-w-[380px] object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* 3. Navigation & Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-slate-700 bg-white hover:bg-slate-100 transition text-xs font-medium shadow-sm"
          >
            ← Վերադառնալ
          </button>
          
          <nav className="text-xs text-slate-500 flex items-center gap-2">
            <span>🏠</span>
            <span>›</span>
            <span>Անհատ</span>
            <span>›</span>
            <span>Քարտեր</span>
            <span>›</span>
            <span>Քարտեր</span>
            <span>›</span>
            <span>Mastercard</span>
            <span>›</span>
            <span className="font-semibold text-slate-800">Mastercard Gold</span>
          </nav>
        </div>

        {/* 4. Tabs */}
        <div className="flex border-b border-slate-200 mt-6 gap-8 text-sm font-semibold">
          <button 
            onClick={() => setActiveTab('about')}
            className={`pb-3 border-b-2 transition ${activeTab === 'about' ? 'border-purple-600 text-purple-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            Քարտի մասին
          </button>
          <button 
            onClick={() => setActiveTab('rates')}
            className={`pb-3 border-b-2 transition ${activeTab === 'rates' ? 'border-purple-600 text-purple-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            Սակագներ և դրույքներ
          </button>
        </div>

        {/* 5. Tab Content */}
        <div className="py-8 text-slate-700 leading-relaxed text-sm md:text-base max-w-6xl">
          {activeTab === 'about' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column Text */}
              <div className="lg:col-span-7 space-y-6">
                <p>
                  <strong className="text-purple-700">Mastercard Gold քարտը</strong> Mastercard միջազգային վճարահաշվարկային համակարգի պրեմիում դասի <strong className="text-purple-700">չիպային քարտ է</strong>, որն ունի դրամական միջոցների անվտանգությանապահովման բարձր մակարդակ և օժտված է ժամանակակից տեխնոլոգիաներով:
                </p>
                
                <p>
                  <strong className="text-purple-700">Mastercard Gold քարտը</strong> կընդգծի քո կարգավիճակը և անմոռանալի կդարձնի քո բոլոր ճանապարհորդությունները: Հաշված րոպեների ընթացքում դու կկարողանաս <strong className="text-purple-700">նախապես գնել քո ավիատոմսը</strong>, <strong className="text-purple-700">ամրագրել հյուրանոցային համար</strong> կամ <strong className="text-purple-700">վարձել ավտոմեքենա</strong>՝ վճարելով <strong className="text-purple-700">Mastercard Gold քարտով</strong>:
                </p>

                <p>
                  Քո դրամական միջոցներին օրվա բոլոր ժամերին, աշխարհի ցանկացած կետում հասանելի կլինեն քեզ: Դու կկարողանաս բանկոմատի միջոցով քո <strong className="text-purple-700">Mastercard Gold քարտից</strong> գումար կանխիկացնել կամ կատարել անկանխիկ գործարքներ առևտրի և սպասարկման կետերում:
                </p>
              </div>

              {/* Right Column Tariff Card */}
              <div className="lg:col-span-5 bg-purple-50/50 border border-purple-100 rounded-2xl p-6 shadow-sm space-y-4">
                {/* Currency Buttons */}
                <div className="flex gap-2">
                  <span className="w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-xs cursor-pointer shadow-sm">֏</span>
                  <span className="w-8 h-8 rounded-full bg-purple-900 text-white flex items-center justify-center font-bold text-xs cursor-pointer opacity-80 hover:opacity-100">$</span>
                  <span className="w-8 h-8 rounded-full bg-purple-900 text-white flex items-center justify-center font-bold text-xs cursor-pointer opacity-80 hover:opacity-100">€</span>
                  <span className="w-8 h-8 rounded-full bg-purple-900 text-white flex items-center justify-center font-bold text-xs cursor-pointer opacity-80 hover:opacity-100">₽</span>
                </div>

                <div className="divide-y divide-gray-200/60 pt-2 text-xs md:text-sm">
                  <div className="py-3 flex items-center justify-between gap-4">
                    <span className="font-extrabold text-purple-700 text-base md:text-lg w-20">0%</span>
                    <span className="text-slate-600 text-right">Կանխիկացում բանկի կանխիկացման կետերում մինչև 2 մլն ֏</span>
                  </div>

                  <div className="py-3 flex items-center justify-between gap-4">
                    <span className="font-extrabold text-purple-700 text-base md:text-lg w-20">0.8%</span>
                    <span className="text-slate-600 text-right">Կանխիկացում Արքա անդամ բանկերի կանխիկացման կետերում</span>
                  </div>

                  <div className="py-3 flex items-center justify-between gap-4">
                    <div className="w-20">
                      <span className="text-[10px] text-slate-400 block">min 1,500 ֏</span>
                      <span className="font-extrabold text-purple-700 text-base md:text-lg">1%</span>
                    </div>
                    <span className="text-slate-600 text-right">Կանխիկացում Արքա անդամ չհանդիսացող բանկերի կանխիկացման կետերում</span>
                  </div>

                  <div className="py-3 flex items-center justify-between gap-4">
                    <span className="font-extrabold text-purple-700 text-base md:text-lg w-20">15,000 ֏</span>
                    <span className="text-slate-600 text-right">Տարեկան սպասարկում</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'rates' && (
            <div className="space-y-8 text-xs text-slate-700">
              {/* Main Tariffs Table */}
              <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50/50">
                      <th colSpan="5" className="p-3 text-center font-bold text-slate-900 border-b">
                        Վճարային քարտեր<sup>[1]</sup>
                      </th>
                    </tr>
                    <tr className="border-b border-gray-200 font-bold bg-gray-50/30 text-slate-800">
                      <th className="p-3 border-r w-1/3">Մատուցվող ծառայություններ</th>
                      <th className="p-3 border-r"></th>
                      <th className="p-3 border-r text-center">MasterCard Standard / Visa Classic</th>
                      <th className="p-3 border-r text-center bg-purple-50/30 text-purple-900">MasterCard Gold / Visa Gold<sup>[2]</sup></th>
                      <th className="p-3 text-center">Visa Business</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-3 border-r font-medium">Քարտի տրամադրում</td>
                      <td className="p-3 border-r"></td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 border-r text-center bg-purple-50/20 font-semibold">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>
                    <tr>
                      <td rowSpan="2" className="p-3 border-r font-medium align-top">Քարտի սպասարկում</td>
                      <td className="p-3 border-r font-medium">Տարեկան</td>
                      <td className="p-3 border-r text-center">5,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center bg-purple-50/20 font-semibold">15,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">10,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">Ամսական</td>
                      <td className="p-3 border-r text-center text-[11px]">
                        MasterCard Standard` 500 ՀՀ դրամ (Ամսական սպասարկման վճարով քարտի պատվեր հնարավոր է իրականացնել միայն <span className="text-purple-700 underline cursor-pointer">Բանկի մասնաճյուղերում</span>)
                      </td>
                      <td className="p-3 border-r text-center bg-purple-50/20 text-[11px]">
                        MasterCard Gold` 1,500 ՀՀ դրամ (Ամսական սպասարկման վճարով քարտի պատվեր հնարավոր է իրականացնել միայն <span className="text-purple-700 underline cursor-pointer">Բանկի մասնաճյուղերում</span>)
                      </td>
                      <td className="p-3 text-center">-</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">Շտապ թողարկում</td>
                      <td className="p-3 border-r"></td>
                      <td className="p-3 border-r text-center">10,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">10,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">10,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">
                        24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար։<br />
                        <span className="font-normal text-slate-500">
                          Visa Business քարտի դեպքում օտարերկրյա քաղաքացիություն ունեցող Հայաստանում գրանցված անհատ ձեռնարկատերերի և իրավաբանական անձանց քարտի տարեկան սպասարկում<sup>[3]</sup>
                        </span>
                      </td>
                      <td className="p-3 border-r text-center">15,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">45,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">30,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">Կից քարտի տրամադրում</td>
                      <td className="p-3 border-r"></td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">Կից քարտի տարեկան սպասարկում<sup>[4]</sup></td>
                      <td className="p-3 border-r"></td>
                      <td className="p-3 border-r text-center">3,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">10,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">7,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">Քարտային հաշվի չնվազող մնացորդ</td>
                      <td className="p-3 border-r"></td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>
                    <tr>
                      <td rowSpan="2" className="p-3 border-r font-medium align-top">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան %</td>
                      <td className="p-3 border-r">մինչև 5 մլն. ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center">0%</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">0%</td>
                      <td className="p-3 text-center">0%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r">5 մլն. ՀՀ դրամ և ավել</td>
                      <td className="p-3 border-r text-center">1%</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">1%</td>
                      <td className="p-3 text-center">1%</td>
                    </tr>
                    <tr>
                      <td rowSpan="3" className="p-3 border-r font-medium align-top">
                        Քարտերով կանխիկի տրամադրում Բանկի ATM-ով, քարտային հաշվից և POS տերմինալով<sup>[5]</sup>
                      </td>
                      <td className="p-3 border-r">ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center text-[11px]">
                        1,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ` 0.2%<br />
                        POS տերմինալով` 0.2%
                      </td>
                      <td className="p-3 border-r text-center bg-purple-50/20 text-[11px]">
                        2,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ` 0.2%<br />
                        POS տերմինալով` 0.2%<br />
                        Visa Gold` 0.2%
                      </td>
                      <td className="p-3 text-center text-[11px]">0.2%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r">ԱՄՆ դոլար և Եվրո</td>
                      <td className="p-3 border-r text-center">0.5%</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">0.5%</td>
                      <td className="p-3 text-center">0.5%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r">Այլ արտարժույթ</td>
                      <td className="p-3 border-r text-center">0.3%</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">0.3%</td>
                      <td className="p-3 text-center">0.3%</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">
                        Քարտերով կանխիկի տրամադրում «ԱրՔա» համակարգի անդամ հանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով<sup>[6]</sup>
                      </td>
                      <td className="p-3 border-r text-center">0.8%</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">0.8%</td>
                      <td className="p-3 text-center">0.8%</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">
                        Քարտերով կանխիկի տրամադրում օտարերկրյա բանկերի և «ԱրՔա» համակարգի անդամ չհանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով<sup>[7]</sup>
                      </td>
                      <td className="p-3 border-r text-center">1% min 1,500 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">1% min 1,500 ՀՀ դրամ</td>
                      <td className="p-3 text-center">1% min 1,500 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">Առևտրի կետերում Բանկի և այլ բանկերի POS տերմինալներով անկանխիկ գործարքների իրականացում</td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">Քարտի գործողության կասեցում</td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)</td>
                      <td className="p-3 border-r text-center">1,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">1,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">1,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում</td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">Քարտի վերաթողարկում կորստի, վնասելու կամ PIN ծածկագրի կորստի դեպքում</td>
                      <td className="p-3 border-r text-center">3,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">10,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">5,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">PIN ծածկագրի գեներացման հայտ</td>
                      <td className="p-3 border-r text-center">1,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">1,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">1,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">Քարտային հաշվի ամսական քաղվածքի տրամադրում</td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար<sup>[8]</sup></td>
                      <td className="p-3 border-r text-center">1,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">1,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">1,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">Կանխիկի մուտքագրում «ԱրՔա» համակարգի անդամ հանդիսացող բանկերի ATM-ով (ATM CASH-IN)</td>
                      <td className="p-3 border-r text-center">0.6 %</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">0.6 %</td>
                      <td className="p-3 text-center">0.6 %</td>
                    </tr>
                    <tr>
                      <td rowSpan="2" className="p-3 border-r font-medium align-top">Գործարքի վերաբերյալ SMS հաղորդագրությունների ստացում</td>
                      <td className="p-3 border-r">Մինչև 5,000 ՀՀ դրամ գործարքներ<sup>[9]</sup></td>
                      <td className="p-3 border-r text-center">20 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">20 ՀՀ դրամ</td>
                      <td className="p-3 text-center">20 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r">5,000 ՀՀ դրամը գերազանցող գործարքներ</td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">Գերածախսի գծով տույժեր</td>
                      <td className="p-3 border-r text-center">20 % տարեկան</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">20 % տարեկան</td>
                      <td className="p-3 text-center">20 % տարեկան</td>
                    </tr>
                    <tr className="bg-gray-50/30 font-bold">
                      <td colSpan="5" className="p-3">Քարտից քարտ փոխանցումներ</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">Բանկոմատների միջոցով Բանկի վճարային քարտին<sup>[10]</sup></td>
                      <td className="p-3 border-r text-center">0.3%</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">0.3%</td>
                      <td className="p-3 text-center">0.3%</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">
                        «ԱրՔա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՔա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին<sup>[11]</sup>
                      </td>
                      <td className="p-3 border-r text-center">0.5%</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">0.5%</td>
                      <td className="p-3 text-center">0.5%</td>
                    </tr>
                    <tr>
                      <td rowSpan="2" className="p-3 border-r font-medium align-top">
                        Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում
                      </td>
                      <td className="p-3 border-r">Նույն արժույթով քարտին</td>
                      <td className="p-3 border-r text-center">0%</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">0%</td>
                      <td className="p-3 text-center">0%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r">Տարբեր արժույթով քարտերին</td>
                      <td className="p-3 border-r text-center">0.3%</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">0.3%</td>
                      <td className="p-3 text-center">0.3%</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">
                        Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով «ԱրՔա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՔա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին
                      </td>
                      <td className="p-3 border-r text-center">0.5%</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">0.5%</td>
                      <td className="p-3 text-center">0.5%</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">Վարկային սահմանաչափի տրամադրման հայտի ուսումնասիրման միջնորդավճար</td>
                      <td className="p-3 border-r text-center">2,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">2,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">2,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">Գործող վարկային սահմանաչափի ավելացման հայտի ուսումնասիրման միջնորդավճար</td>
                      <td className="p-3 border-r text-center">1,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">1,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">1,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">Կանխիկի տրամադրման առավելագույն սահմանաչափ</td>
                      <td className="p-3 border-r text-center">1,000,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">2,000,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">1,000,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">Կանխիկացման գործարքների օրական առավելագույն քանակ</td>
                      <td className="p-3 border-r text-center">10</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">10</td>
                      <td className="p-3 text-center">10</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">
                        Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն գումարային սահմանաչափ
                      </td>
                      <td colSpan="3" className="p-3 text-center font-medium">
                        Նվազագույնը 300,000 ՀՀ դրամ (կախված է ԱԳՄ-ից)
                      </td>
                    </tr>
                    <tr className="bg-gray-50/30">
                      <td colSpan="5" className="p-3 font-bold">
                        Մեկ օրվա ընթացքում կանխիկացման գործարքների կամ սահմանաչափերի քանակի ավելացման միջնորդավճար
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">
                        քարտի գործողության ամբողջ ընթացքում․<br />
                        Կանխիկացման սահմանաչափի փոփոխություն մինչև 5 մլն ՀՀ դրամի դեպքում
                      </td>
                      <td className="p-3 border-r text-center">2,900 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">2,900 ՀՀ դրամ</td>
                      <td className="p-3 text-center">2,900 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">
                        Կանխիկացման սահմանաչափի փոփոխություն 5 մլն ՀՀ դրամ և ավելի դեպքում
                      </td>
                      <td className="p-3 border-r text-center">4,900 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">4,900 ՀՀ դրամ</td>
                      <td className="p-3 text-center">4,900 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">Քարտով կատարված գործարքների բողոքարկման հայտ<sup>[12]</sup></td>
                      <td className="p-3 border-r text-center">5,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center bg-purple-50/20">5,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">5,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r font-medium">Ժամկետը լրացած վճարային քարտի քարտային հաշվի սպասարկման վճար</td>
                      <td colSpan="3" className="p-3 text-center">
                        Ամսական 2000 ՀՀ դրամ, իսկ միջոցների անբավարարության դեպքում՝ հաշվի մնացորդի չափով:
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Other Banks Table */}
              <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50/50">
                      <th colSpan="2" className="p-3 font-bold text-slate-900">
                        Այլ բանկերի կողմից թողարկված վճարային քարտերի սակագներ (բացառությամբ MIR համակարգի քարտերի)
                      </th>
                    </tr>
                    <tr className="border-b border-gray-200 font-bold bg-gray-50/30">
                      <th className="p-3 border-r w-1/2">Մատուցվող ծառայություններ</th>
                      <th className="p-3">
                        ԱրՔա համակարգի անդամ չհանդիսացող, H2H կապուղով ԱրՔա համակարգի հետ չաշխատող բանկերի կողմից թողարկված քարտերով (բացառությամբ MIR համակարգի քարտերի) կանխիկացում
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-3 border-r font-medium">Բանկի բանկոմատներից կանխիկացում</td>
                      <td className="p-3">1.5 % min 1,000 ՀՀ սպասարկման միջնորդավճար</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">Բանկի POS-տերմինալներից կանխիկացում</td>
                      <td className="p-3">3 %, min 2,000 ՀՀ դրամ սպասարկման միջնորդավճար</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Card to Card Virtual Terminals Table */}
              <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50/50">
                      <th colSpan="2" className="p-3 font-bold text-slate-900">
                        Բանկի վիրտուալ տերմինալների միջոցով տեղական՝ լոկալ, քարտից-քարտ (card-to-card) փոխանցումների սպասարկման միջնորդավճար
                      </th>
                    </tr>
                    <tr className="border-b border-gray-200 font-bold bg-gray-50/30">
                      <th colSpan="2" className="p-3">Բանկի տերմինալների միջոցով</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-3 border-r font-medium w-2/3">Բանկի կողմից թողարկված քարտերով իրականացվող գործարքներ</td>
                      <td className="p-3">0</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">
                        ԱրՔա անդամ և H2H միացումով ԱրՔա պրոցեսինգային կենտրոնի հետ աշխատող բանկերի կողմից թողարկված քարտերով
                      </td>
                      <td className="p-3">0.5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Visa Direct & Mastercard Money Send Table */}
              <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50/50">
                      <th colSpan="2" className="p-3 font-bold text-slate-900">
                        Բանկի վիրտուալ տերմինալների միջոցով Visa Direct և Money Send ծառայության սպասարկման միջնորդավճար
                      </th>
                    </tr>
                    <tr className="border-b border-gray-200 font-bold bg-gray-50/30">
                      <th colSpan="2" className="p-3">Բանկի Arca, Visa և Mastercard քարտերից փոխանցման սակագին</th>
                    </tr>
                    <tr className="border-b border-gray-200 font-semibold bg-gray-50/20">
                      <th className="p-3 border-r w-1/2">Visa Direct</th>
                      <th className="p-3">Mastercard Money Send</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-3 border-r">
                        1.0 % (սպասարկման միջնորդավճար) + Բանկի տվյալ քարտի համար գործող card-to-card միջնորդավճար Նվազագույնը 1,000 ՀՀ դրամ
                      </td>
                      <td className="p-3">
                        1.0% (սպասարկման միջնորդավճար) + Բանկի տվյալ քարտի համար գործող card-to-card միջնորդավճար Նվազագույնը 1,000 ՀՀ դրամ
                      </td>
                    </tr>
                    <tr className="bg-gray-50/30 font-bold">
                      <td colSpan="2" className="p-3">Քարտից մեկ օրվա ընթացքում իրականացվող գործարքների սահմանաչափ և գործարքների քանակ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">Մեկ գործարքի առավելագույն սահմանաչափ</td>
                      <td className="p-3">
                        250,000 ՀՀ դրամ<br />
                        500 ԱՄՆ դոլար<br />
                        400 Եվրո<br />
                        6,000 Ռուբլի
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">
                        Մեկ հաճախորդի` տվյալ վճարային համակարգով գործարքների քանակի առավելագույն օրական սահմանաչափ
                      </td>
                      <td className="p-3">5</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">
                        Մեկ հաճախորդի ` տվյալ վճարային համակարգով գործարքների ծավալի օրական առավելագույն սահմանաչափ
                      </td>
                      <td className="p-3">
                        1,000,000 ՀՀ դրամ<br />
                        2,000 ԱՄՆ դոլար<br />
                        1,600 Եվրո<br />
                        26,000 Ռուբլի
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Footnotes */}
              <div className="space-y-2 text-[11px] text-slate-500 pt-4 leading-relaxed border-t border-gray-200">
                <p><sup>[1]</sup> MasterCard Standard, Visa Classic, MasterCard Gold, Visa Gold և VISA Infinite տեսակի վճարային քարտերը տրամադրվում են ֆիզիկական անձանց, իսկ Visa Business տեսակի վճարային քարտերը` իրավաբանական անձանց:</p>
                <p>Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ վճարային քարտերի քարտային հաշիվներով (առանց վճարային քարտի առկայության) իրականացվող ցանկացած գործարքի համար գործում է սույն գլխով սահմանված` վճարային քարտերի համար սահմանված սակագները (Սակագինը կիրառվում է միայն 01/06/2018թ.-ից ներառյալ տրամադրվող վճարային քարտերի համար):</p>
                <p>Աշխատավարձային վճարային քարտերի տրամադրման և սպասարկման սակագները սահմանվում են քարտապանի գործատուի հետ կնքված պայմանագրով: Բանկի Վարչության որոշմամբ կարող են սահմանվել վճարային քարտերի տրամադրման այլ պայմաններ և սակագներ:</p>
                <p><sup>[2]</sup> Visa Gold քարտերի թողարկումը դադարեցվել է 25.11.2024թ.-ից:</p>
                <p><sup>[3]</sup> Քարտի 5 տարվա սպասարկման վճարը գանձվում է միանվագ` քարտի բացման պահին:</p>
                <p><sup>[4]</sup> Օտարերկրյա քաղաքացիների համար գործում է նշված սակագնի հնգապատիկը, ընդ որում լրացուցիչ քարտերը կտրամադրվեն նախապես երեք տարվա միջնորդավճարը վճարելու պայմանով:</p>
                <p><sup>[5]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար 1 %:</p>
                <p><sup>[6]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար 1.5 %:</p>
                <p><sup>[7]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար 1.5 % min 2,500 ՀՀ դրամ:</p>
                <p><sup>[8]</sup> Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ:</p>
                <p><sup>[9]</sup> Սակագինը գործում է նաև գործարքի մերժման դեպքում ուղարկված SMS հաղորդագրության համար` անկախ գործարքի գումարի չափից:</p>
                <p><sup>[10]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար 1%:</p>
                <p><sup>[11]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար 1.5%:</p>
                <p><sup>[12]</sup> Գանձվում է միայն այն դեպքում, երբ բողոքարկման գործընթացի արդյունքում պարզվել է, որ գործարքը կատարվել է հաճախորդի կողմից կամ հաճախորդի կողմից քարտի օգտագործման կանոնների խախտման հետևանքով:</p>
              </div>
            </div>
          )}
        </div>

        {/* Banner Ad */}
        <div className="w-full bg-gradient-to-r from-[#d8b46a] via-[#f1d791] to-[#c99a40] text-slate-900 rounded-2xl p-8 my-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 max-w-xl">
            <p className="text-lg md:text-xl font-bold leading-snug">
              Պատվիրիր քո Mastercard Gold քարտն EvocaTOUCH հավելվածի օգնությամբ և ստացիր այն քո ցանկացած վայրում անվճար առաքման միջոցով:
            </p>
          </div>
          <img 
            src="https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png" 
            alt="Evoca Card Promo" 
            className="w-48 object-contain drop-shadow-lg"
          />
        </div>

        {/* ================= ԱՅԼ ՔԱՐՏԵՐ SWIPER SECTION ================= */}
        <section className="max-w-7xl mx-auto px-4 md:px-16 pb-20 relative pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Այլ քարտեր</h2>

          <button className="other-prev absolute left-0 md:left-4 top-[60%] -translate-y-1/2 z-10 text-purple-700 hover:text-purple-900 transition bg-white/80 p-2 rounded-full shadow-md">
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="other-next absolute right-0 md:right-4 top-[60%] -translate-y-1/2 z-10 text-purple-700 hover:text-purple-900 transition bg-white/80 p-2 rounded-full shadow-md">
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      </div>

      {/* ================= ՕՆԼԱՅՆ ԵՎ ՄՈԲԱՅԼ ԲԱՆԿԻՆԳ BANNER ================= */}
      <section className="w-full bg-[#6b21a8] text-white py-14 px-6 md:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Mockup / Video */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-[440px]">
              <div className="relative rounded-t-2xl border-[8px] border-b-0 border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden aspect-[16/10]">
                <iframe
                  src="https://www.youtube.com/embed/KwAgMHEx8ys"
                  title="EvocaTOUCH Video"
                  className="w-full h-full border-0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-[108%] -translate-x-[4%] h-3 bg-neutral-700 rounded-b-xl border-t border-neutral-600 shadow-md"></div>
            </div>
          </div>

          {/* Right Text Block */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-extrabold">Օնլայն և մոբայլ բանկինգ</h2>
            <p className="text-purple-100 text-xs leading-relaxed">
              Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
            </p>

            <div>
              <button className="bg-white text-purple-900 px-6 py-2.5 rounded-full font-bold text-xs hover:bg-purple-50 transition shadow-md">
                Դառնալ հաճախորդ
              </button>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="bg-white p-1.5 rounded-lg shadow-md shrink-0">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://www.evoca.am"
                  alt="QR Code"
                  className="w-14 h-14"
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

      {/* ================= FOOTER ================= */}
      <footer className="w-full bg-[#f8f8fa] text-[#2d2d2d] pt-10 pb-6 px-6 md:px-16 border-t border-gray-100 text-xs">
        <div className="max-w-7xl mx-auto flex justify-end items-center pb-4 border-b border-gray-200">
          <div className="text-gray-400 text-[11px]">
            Թարմացվել է` 31/08/2026 17:46
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
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
            <p className="hover:text-purple-700 cursor-pointer">Dlibrary</p>
            <p className="hover:text-purple-700 cursor-pointer">Բուկլետներ</p>
            <p className="hover:text-purple-700 cursor-pointer">Հետադարձ կապ</p>
            <p className="hover:text-purple-700 cursor-pointer">Կայքի քարտեզ</p>

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

        <div className="border-t border-gray-200/60 pt-4 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400">
          <p className="max-w-2xl leading-relaxed">
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով:
          </p>
          <div className="flex gap-4 items-center opacity-70">
            <span className="font-bold text-gray-500">arca</span>
            <span className="font-bold text-gray-500">fininfo</span>
          </div>
        </div>

        {/* Chat Widget Icon */}
        <div className="fixed bottom-4 right-4 z-50 flex items-center">
          <div className="bg-[#6b21a8] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-105 transition">
            💬
          </div>
        </div>
      </footer>

    </div>
  );
}