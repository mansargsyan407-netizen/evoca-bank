import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const otherCardsData = [
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


const cardStats = [
  { value: "0%", label: "Կանխիկացում բանկի կանխիկացման կետերում մինչև 2 մլն ֏" },
  { value: "0.8%", label: "Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում" },
  { value: "1%", label: "Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում", note: "min 1,500 ֏" },
  { value: "15,000 ֏", label: "Տարեկան սպասարկում" },
  { value: "45,000 ֏", label: "Տարեկան սպասարկում օտարերկրյա քաղաքացիների համար" }
];

const MastercardGoldDetails = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      <div>
        {/* Header Navigation Bar */}
        <header className="border-b border-gray-100 bg-white">
          

          <div className="bg-[#6b21a8] text-white text-xs py-2.5 px-6">
            <div className="max-w-7xl mx-auto flex items-center gap-8">
              <span className="bg-purple-900/60 px-3 py-1 rounded font-bold cursor-pointer">Քարտեր</span>
              <span className="hover:text-purple-200 cursor-pointer">Քարտերի տրամադրում և սպասարկում</span>
              <span className="hover:text-purple-200 cursor-pointer">Սոցիալական ապահովության վճարային քարտեր</span>
              <span className="hover:text-purple-200 cursor-pointer">Evoca Benefits</span>
            </div>
          </div>
        </header>

        {/* Top Hero Banner */}
        <div className="bg-gradient-to-r from-[#f0f3fe] via-[#f7f5ff] to-[#f4efff] py-16 px-6 md:px-16 relative overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-4">
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
                Mastercard Gold
              </h1>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Ընդգծիր կարգավիճակդ քո Mastercard Gold քարտով:
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png" 
                alt="Mastercard Gold Card" 
                className="w-80 md:w-96 object-contain drop-shadow-2xl hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-gray-200 rounded-full hover:bg-gray-50 transition text-gray-700 font-medium"
          >
            <span>←</span> Վերադառնալ
          </Link>

          <div className="flex items-center gap-2">
            <Link to="/" className="hover:underline">🏠</Link>
            <span>›</span>
            <span className="hover:underline cursor-pointer">Անհատ</span>
            <span>›</span>
            <span className="hover:underline cursor-pointer">Քարտեր</span>
            <span>›</span>
            <span className="hover:underline cursor-pointer">Mastercard</span>
            <span>›</span>
            <span className="text-gray-900 font-semibold">Mastercard Gold</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 pb-12">
          {/* Tabs Navigation */}
          <div className="flex border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-3 px-2 font-bold text-sm transition-all border-b-2 mr-8 ${
                activeTab === 'about'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Քարտի մասին
            </button>
            <button
              onClick={() => setActiveTab('rates')}
              className={`pb-3 px-2 font-bold text-sm transition-all border-b-2 ${
                activeTab === 'rates'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Սակագներ և դրույթներ
            </button>
          </div>

          {/* Tab 1: About */}
          {activeTab === 'about' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-6 text-gray-800 text-sm md:text-base leading-relaxed">
                <p>
                  <strong className="text-purple-700 font-bold">Mastercard Gold քարտը</strong> Mastercard միջազգային վճարահաշվարկային համակարգի <strong className="text-purple-700 font-semibold">պրեմիում դասի չիպային քարտ է</strong>, որն ունի դրամական միջոցների անվտանգության ապահովման բարձր մակարդակ և օժտված է ժամանակակից տեխնոլոգիաներով:
                </p>

                <p>
                  <strong className="text-purple-700 font-bold">Mastercard Gold քարտը</strong> կնդգծի քո կարգավիճակը և անմոռանալի կդարձնի քո բոլոր ճանապարհորդությունները: Հաշված րոպեների ընթացքում դու կկարողանաս <strong className="text-purple-700 font-semibold">նախապես գնել քո ավիատոմսը, ամրագրել հյուրանոցային համար կամ վարձել ավտոմեքենա`</strong> վճարելով <strong className="text-purple-700 font-bold">Mastercard Gold քարտով</strong>:
                </p>

                <p>
                  Քո դրամական միջոցներն օրվա բոլոր ժամերին, աշխարհի ցանկացած կետում հասանելի կլինեն քեզ: Դու կկարողանաս բանկոմատի միջոցով քո <strong className="text-purple-700 font-bold">Mastercard Gold քարտից</strong> գումար կանխիկացնել և անկանխիկ վճարումներ կատարել աշխարհի բոլոր այն սպասարկման և առևտրի կետերում, որտեղ փակցված կլինի Mastercard Gold տարբերանշանը:
                </p>

                <p>
                  Քարտը կարող ես պատվիրել և ստանալ առանց Բանկ այցելելու: <strong className="text-purple-700 font-semibold">EvocaTOUCH</strong> հավելվածի միջոցով պարզ քայլերի հաջորդականությամբ կկարողանաս պատվիրել` նշելով այն հասցեն, որտեղից կցանկանաս ստանալ քարտը: Կարևորելով մեր հաճախորդների ժամանակը` առաքման անվճար ծառայության միջոցով կտրամադրենք քո քարտը Հայաստանի ցանկացած կետում:
                </p>
              </div>

              <div className="lg:col-span-5 bg-[#faf9fe] border border-purple-100 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex gap-2 mb-4">
                  <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs">֏</span>
                  <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs">$</span>
                  <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs">€</span>
                  <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs">₽</span>
                </div>

                <div className="divide-y divide-gray-200/70">
                  {cardStats.map((stat, idx) => (
                    <div key={idx} className="py-3 flex items-center justify-between gap-4">
                      <div className="flex flex-col">
                        {stat.note && <span className="text-[10px] text-gray-400 font-mono">{stat.note}</span>}
                        <span className="text-xl md:text-2xl font-black text-purple-700">{stat.value}</span>
                      </div>
                      <span className="text-xs text-gray-600 font-medium text-right max-w-[200px]">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Rates & Provisions */}
          {activeTab === 'rates' && (
            <div className="space-y-12 text-xs md:text-sm text-gray-700">
              
              {/* Section 1: Main Table */}
              <div className="overflow-x-auto border border-purple-100 rounded-xl shadow-sm bg-white">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-[#faf7ff] border-b border-purple-100 text-purple-900 font-bold">
                      <th colSpan="2" className="p-3.5 text-center text-sm border-r border-purple-100">
                        Վճարային քարտեր <sup>[1]</sup>
                      </th>
                      <th className="p-3.5 text-center border-r border-purple-100">
                        MasterCard Standard / Visa Classic
                      </th>
                      <th className="p-3.5 text-center border-r border-purple-100">
                        MasterCard Gold / Visa Gold <sup>[2]</sup>
                      </th>
                      <th className="p-3.5 text-center">Visa Business</th>
                    </tr>
                    <tr className="bg-purple-50/50 border-b border-purple-100 text-gray-800 font-bold">
                      <th colSpan="2" className="p-3 border-r border-purple-100">Մատուցվող ծառայություններ</th>
                      <th className="p-3 text-center border-r border-purple-100"></th>
                      <th className="p-3 text-center border-r border-purple-100"></th>
                      <th className="p-3 text-center"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">Քարտի տրամադրում</td>
                      <td className="p-3 border-r border-gray-100 text-center">0</td>
                      <td className="p-3 border-r border-gray-100 text-center">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>

                    <tr>
                      <td rowSpan="2" className="p-3 border-r border-gray-100 font-medium w-40">
                        Քարտի սպասարկում
                      </td>
                      <td className="p-3 border-r border-gray-100 font-medium bg-gray-50/50 w-28">Տարեկան</td>
                      <td className="p-3 border-r border-gray-100 text-center">5,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r border-gray-100 text-center">15,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">10,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-100 font-medium bg-gray-50/50">Ամսական</td>
                      <td className="p-3 border-r border-gray-100 text-center text-[11px] leading-tight">
                        MasterCard Standard` 500 ՀՀ դրամ (Ամսական սպասարկման վճարով քարտի պատվեր შესაძլոր է իրականացնել միայն <span className="text-purple-700 font-semibold cursor-pointer">Բանկի մասնաճյուղերում</span>)
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center text-[11px] leading-tight">
                        MasterCard Gold` 1,500 ՀՀ դրամ (Ամսական սպասարկման վճարով քարտի պատվեր შესაძլոր է իրականացնել միայն <span className="text-purple-700 font-semibold cursor-pointer">Բանկի մասնաճյուղերում</span>)
                      </td>
                      <td className="p-3 text-center text-gray-400">-</td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">Շտապ թողարկում</td>
                      <td className="p-3 border-r border-gray-100 text-center">10,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r border-gray-100 text-center">10,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">10,000 ՀՀ դրամ</td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium text-[11px]">
                        24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար, Visa Business քարտի դեպքում օտարերկրյա քաղաքացիություն ունեցող Հայաստանում գրանցված անհատ ձեռնարկատերերի և իրավաբանական անձանց քարտի տարեկան սպասարկում <sup>[3]</sup>
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center font-medium">15,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r border-gray-100 text-center font-medium">45,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center font-medium">30,000 ՀՀ դրամ</td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">Կից քարտի տրամադրում</td>
                      <td className="p-3 border-r border-gray-100 text-center">0</td>
                      <td className="p-3 border-r border-gray-100 text-center">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">
                        Կից քարտի տարեկան սպասարկում <sup>[4]</sup>
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center">3,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r border-gray-100 text-center">10,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">7,000 ՀՀ դրամ</td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">Քարտային հաշվի չնվազող մնացորդ</td>
                      <td className="p-3 border-r border-gray-100 text-center">0</td>
                      <td className="p-3 border-r border-gray-100 text-center">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>

                    <tr className="bg-purple-50/30">
                      <td colSpan="5" className="p-2.5 font-bold text-purple-900 border-b border-gray-200">
                        Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան %
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">Մինչև 5 մլն. ՀՀ դրամ</td>
                      <td className="p-3 border-r border-gray-100 text-center">0 %</td>
                      <td className="p-3 border-r border-gray-100 text-center">0 %</td>
                      <td className="p-3 text-center">0 %</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">5 մլն. ՀՀ դրամ և ավել</td>
                      <td className="p-3 border-r border-gray-100 text-center font-semibold">1 %</td>
                      <td className="p-3 border-r border-gray-100 text-center font-semibold">1 %</td>
                      <td className="p-3 text-center font-semibold">1 %</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">արտարժույթ</td>
                      <td className="p-3 border-r border-gray-100 text-center">0 %</td>
                      <td className="p-3 border-r border-gray-100 text-center">0 %</td>
                      <td className="p-3 text-center">0 %</td>
                    </tr>

                    {/* Cash Withdrawal Section */}
                    <tr className="bg-purple-50/30">
                      <td rowSpan="3" className="p-3 border-r border-gray-100 font-medium">
                        Քարտերով կանխիկի տրամադրում Բանկի ATM-ով, քարտային հաշվից և POS տերմինալով <sup>[5]</sup>
                      </td>
                      <td className="p-3 border-r border-gray-100 font-medium bg-gray-50/50">ՀՀ դրամ</td>
                      <td className="p-3 border-r border-gray-100 text-center text-[11px]">
                        Ամսական մինչև 1,000,000 ՀՀ դրամ (ներառյալ)` Անվճար,<br />
                        1,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ` 0.2 %<br />
                        POS տերմինալով` 0.2 %
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center text-[11px]">
                        Mastercard Gold` Ամսական մինչև 2,000,000 ՀՀ դրամ (ներառյալ)` Անվճար,<br />
                        2,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ` 0.2 %<br />
                        POS տերմինալով` 0.2 %<br />
                        Visa Gold` 0.2 %
                      </td>
                      <td className="p-3 text-center text-[11px]">0.2 %</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-100 font-medium bg-gray-50/50">ԱՄՆ դոլար և Եվրո</td>
                      <td className="p-3 border-r border-gray-100 text-center">0.5%</td>
                      <td className="p-3 border-r border-gray-100 text-center">0.5%</td>
                      <td className="p-3 text-center">0.5%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-100 font-medium bg-gray-50/50">Այլ արտարժույթ</td>
                      <td className="p-3 border-r border-gray-100 text-center">0.3%</td>
                      <td className="p-3 border-r border-gray-100 text-center">0.3%</td>
                      <td className="p-3 text-center">0.3%</td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">
                        Քարտերով կանխիկի տրամադրում «ԱրՔա» համակարգի անդամ հանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով <sup>[6]</sup>
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center">0.8%</td>
                      <td className="p-3 border-r border-gray-100 text-center font-semibold">0.8%</td>
                      <td className="p-3 text-center">0.8%</td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">
                        Քարտերով կանխիկի տրամադրում օտարերկրյա բանկերի և «ԱրՔա» համակարգի անդամ չհանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով <sup>[7]</sup>
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center">1% min 1,500 ՀՀ դրամ</td>
                      <td className="p-3 border-r border-gray-100 text-center font-semibold">1% min 1,500 ՀՀ դրամ</td>
                      <td className="p-3 text-center">1% min 1,500 ՀՀ դրամ</td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">
                        Առևտրի կետերում Բանկի և այլ բանկերի POS տերմինալներով անկանխիկ գործարքների իրականացում
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center">0</td>
                      <td className="p-3 border-r border-gray-100 text-center">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">Քարտի գործողության կասեցում</td>
                      <td className="p-3 border-r border-gray-100 text-center">0</td>
                      <td className="p-3 border-r border-gray-100 text-center">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">
                        Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center">1,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r border-gray-100 text-center">1,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">1,000 ՀՀ դրամ</td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">
                        Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center">0</td>
                      <td className="p-3 border-r border-gray-100 text-center">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">
                        Քարտի վերաթողարկում կորստի, վնասվելու կամ PIN ծածկագրի կորստի դեպքում
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center">3,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r border-gray-100 text-center">10,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">5,000 ՀՀ դրամ</td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">PIN ծածկագրի գեներացման հայտ</td>
                      <td className="p-3 border-r border-gray-100 text-center">1,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r border-gray-100 text-center">1,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">1,000 ՀՀ դրամ</td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">Քարտային հաշվի ամսական քաղվածքի տրամադրում</td>
                      <td className="p-3 border-r border-gray-100 text-center">0</td>
                      <td className="p-3 border-r border-gray-100 text-center">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">
                        Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար <sup>[8]</sup>
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center">1,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r border-gray-100 text-center">1,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">1,000 ՀՀ դրամ</td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">
                        Կանխիկի մուտքագրում «ԱրՔա» համակարգի անդամ հանդիսացող բանկերի ATM-ով (ATM CASH-IN)
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center">0.6 %</td>
                      <td className="p-3 border-r border-gray-100 text-center">0.6 %</td>
                      <td className="p-3 text-center">0.6 %</td>
                    </tr>

                    <tr>
                      <td rowSpan="2" className="p-3 border-r border-gray-100 font-medium">
                        Գործարքի վերաբերյալ SMS հաղորդագրությունների ստացում
                      </td>
                      <td className="p-3 border-r border-gray-100 font-medium bg-gray-50/50">
                        Մինչև 5,000 ՀՀ դրամ գործարքներ <sup>[9]</sup>
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center">20 ՀՀ դրամ</td>
                      <td className="p-3 border-r border-gray-100 text-center">20 ՀՀ դրամ</td>
                      <td className="p-3 text-center">20 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-100 font-medium bg-gray-50/50">
                        5,000 ՀՀ դրամը գերազանցող գործարքներ
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center">0</td>
                      <td className="p-3 border-r border-gray-100 text-center">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">Գերածախսի գծով տույժեր</td>
                      <td className="p-3 border-r border-gray-100 text-center">20 % տարեկան</td>
                      <td className="p-3 border-r border-gray-100 text-center">20 % տարեկան</td>
                      <td className="p-3 text-center">20 % տարեկան</td>
                    </tr>

                    {/* Transfers Header */}
                    <tr className="bg-purple-50/30">
                      <td colSpan="5" className="p-2.5 font-bold text-purple-900 border-b border-gray-200">
                        Քարտից քարտ փոխանցումներ (Բանկոմատների միջոցով)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">
                        Բանկի վճարային քարտին <sup>[10]</sup>
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center">0.3%</td>
                      <td className="p-3 border-r border-gray-100 text-center">0.3%</td>
                      <td className="p-3 text-center">0.3%</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">
                        «ԱրՔա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՔա համակարգի հետ H2H կապուղովաշխատող բանկերի վճարային քարտերին <sup>[11]</sup>
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center">0.5%</td>
                      <td className="p-3 border-r border-gray-100 text-center">0.5%</td>
                      <td className="p-3 text-center">0.5%</td>
                    </tr>

                    {/* EvocaTouch / EvocaOnline Transfers */}
                    <tr className="bg-purple-50/30">
                      <td colSpan="5" className="p-2.5 font-bold text-purple-900 border-b border-gray-200">
                        Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">Նույն արժույթով քարտին</td>
                      <td className="p-3 border-r border-gray-100 text-center">0%</td>
                      <td className="p-3 border-r border-gray-100 text-center">0%</td>
                      <td className="p-3 text-center">0%</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">Տարբեր արժույթով քարտերին</td>
                      <td className="p-3 border-r border-gray-100 text-center">0.3%</td>
                      <td className="p-3 border-r border-gray-100 text-center">0.3%</td>
                      <td className="p-3 text-center">0.3%</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">
                        Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով «ԱրՔա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՔա համակարգի հետ H2H կապուղովաշխատող բանկերի վճարային քարտերին
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center">0.5%</td>
                      <td className="p-3 border-r border-gray-100 text-center">0.5%</td>
                      <td className="p-3 text-center">0.5%</td>
                    </tr>

                    {/* Application & Limits Fees */}
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">
                        Վարկային սահմանաչափի տրամադրման հայտի ուսումնասիրման միջնորդավճար
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center">2,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r border-gray-100 text-center">2,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">2,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">
                        Գործող վարկային սահմանաչափի ավելացման հայտի ուսումնասիրման միջնորդավճար
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center">1,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r border-gray-100 text-center">1,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">1,000 ՀՀ դրամ</td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">Կանխիկի տրամադրման առավելագույն սահմանաչափ</td>
                      <td className="p-3 border-r border-gray-100 text-center">1,000,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r border-gray-100 text-center font-bold text-purple-800">2,000,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">1,000,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">Կանխիկացման գործարքների օրական առավելագույն քանակ</td>
                      <td className="p-3 border-r border-gray-100 text-center">10</td>
                      <td className="p-3 border-r border-gray-100 text-center font-bold">10</td>
                      <td className="p-3 text-center">10</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">
                        Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն գումարային սահմանաչափ
                      </td>
                      <td colSpan="3" className="p-3 text-center text-[11px] font-semibold text-gray-600">
                        Նվազագույնը 300,000 ՀՀ դրամ (կախված է ԱԳՄ-ից)
                      </td>
                    </tr>

                    <tr className="bg-purple-50/30">
                      <td colSpan="5" className="p-2.5 font-bold text-purple-900 border-b border-gray-200">
                        Մեկ օրվա ընթացքում կանխիկացման գործարքների կամ սահմանաչափերի քանակի ավելացման միջնորդավճար (քարտի գործողության ամբողջ ընթացքում)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">
                        Կանխիկացման սահմանաչափի փոփոխություն մինչև 5մլն ՀՀ դրամի դեպքում
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center">2,900 ՀՀ դրամ</td>
                      <td className="p-3 border-r border-gray-100 text-center">2,900 ՀՀ դրամ</td>
                      <td className="p-3 text-center">2,900 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">
                        Կանխիկացման սահմանաչափի փոփոխություն 5 մլն ՀՀ դրամ և ավելի դեպքում
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center">4,900 ՀՀ դրամ</td>
                      <td className="p-3 border-r border-gray-100 text-center">4,900 ՀՀ դրամ</td>
                      <td className="p-3 text-center">4,900 ՀՀ դրամ</td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">
                        Քարտով կատարված գործարքների բողոքարկման հայտ <sup>[12]</sup>
                      </td>
                      <td className="p-3 border-r border-gray-100 text-center">5,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r border-gray-100 text-center">5,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">5,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="p-3 border-r border-gray-100 font-medium">
                        Ժամկետը լրացած վճարային քարտի քարտային հաշվի սպասարկման վճար
                      </td>
                      <td colSpan="3" className="p-3 text-center text-[11px]">
                        Ամսական 2,000 ՀՀ դրամ, իսկ միջոցների անբավարարության դեպքում` հաշվի մնացորդի չափով:
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Section 2: Other Banks' Issued Cards Rates */}
              <div className="border border-purple-100 rounded-xl overflow-hidden shadow-sm bg-white">
                <div className="bg-[#faf7ff] p-3 border-b border-purple-100 font-bold text-purple-900 text-xs md:text-sm">
                  Այլ բանկերի կողմից թողարկված վճարային քարտերի սակագներ (բացառությամբ MIR համակարգի քարտերի)
                </div>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-gray-700 font-semibold text-xs">
                      <th className="p-3 border-r border-gray-200 w-1/2">Մատուցվող ծառայություններ</th>
                      <th className="p-3">
                        ԱրՔա համակարգի անդամ չհանդիսացող, H2H կապուղով ԱրՔա համակարգի հետ չաշխատող բանկերի կողմից թողարկված քարտերով (բացառությամբ MIR համակարգի քարտերի) կանխիկացում
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs">
                    <tr>
                      <td className="p-3 border-r border-gray-100 font-medium">Բանկի բանկոմատներից կանխիկացում</td>
                      <td className="p-3">1.5 % min 1,000 ՀՀ սպասարկման միջնորդավճար</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-100 font-medium">Բանկի POS-տերմինալներից կանխիկացում</td>
                      <td className="p-3">3 %, min 2,000 ՀՀ դրամ սպասարկման միջնորդավճար</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Section 3: Virtual Terminals Card-to-Card */}
              <div className="border border-purple-100 rounded-xl overflow-hidden shadow-sm bg-white">
                <div className="bg-[#faf7ff] p-3 border-b border-purple-100 font-bold text-purple-900 text-xs md:text-sm">
                  Բանկի վիրտուալ տերմինալների միջոցով տեղական` լոկալ, քարտից-քարտ (card-to-card) փոխանցումների սպասարկման միջնորդավճար
                </div>
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 font-semibold">
                      <th colSpan="2" className="p-3">Բանկի տերմինալների միջոցով</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="p-3 border-r border-gray-100 font-medium w-2/3">Բանկի կողմից թողարկված քարտերով իրականացվող գործարքներ</td>
                      <td className="p-3 font-semibold text-purple-800">0</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-100 font-medium">
                        ԱրՔա անդամ և H2H միացումով ԱրՔա պրոցեսինգային կենտրոնի հետ աշխատող բանկերի կողմից թողարկված քարտերով
                      </td>
                      <td className="p-3 font-semibold">0.5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Section 4: Visa Direct & Money Send */}
              <div className="border border-purple-100 rounded-xl overflow-hidden shadow-sm bg-white">
                <div className="bg-[#faf7ff] p-3 border-b border-purple-100 font-bold text-purple-900 text-xs md:text-sm">
                  Բանկի վիրտուալ տերմինալների միջոցով Visa Direct և Money Send ծառայության սպասարկման միջնորդավճար<br />
                  <span className="text-gray-600 font-normal text-xs">Բանկի Arca, Visa և Mastercard քարտերից փոխանցման սակագին</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 text-xs">
                  <div className="p-4 space-y-2">
                    <h5 className="font-bold text-purple-900 text-sm">Visa Direct</h5>
                    <p className="text-gray-600 leading-relaxed">
                      1.0 % (սպասարկման միջնորդավճար) + Բանկի տվյալ քարտի համար գործող card-to-card միջնորդավճար Նվազագույնը 1,000 ՀՀ դրամ
                    </p>
                  </div>
                  <div className="p-4 space-y-2">
                    <h5 className="font-bold text-purple-900 text-sm">Mastercard Money Send</h5>
                    <p className="text-gray-600 leading-relaxed">
                      1.0% (սպասարկման միջնորդավճար) + Բանկի տվյալ քարտի համար գործող card-to-card միջնորդավճար Նվազագույնը 1,000 ՀՀ դրամ
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5: Daily Limits */}
              <div className="border border-purple-100 rounded-xl overflow-hidden shadow-sm bg-white">
                <div className="bg-[#faf7ff] p-3 border-b border-purple-100 font-bold text-purple-900 text-xs md:text-sm">
                  Քարտից մեկ օրվա ընթացքում իրականացվող գործարքների սահմանաչափ և գործարքների քանակ
                </div>
                <table className="w-full text-left border-collapse text-xs">
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="p-3 border-r border-gray-100 font-medium w-1/2">Մեկ գործարքի առավելագույն սահմանաչափ</td>
                      <td className="p-3 space-y-1 font-semibold text-gray-800">
                        <div>250,000 ՀՀ դրամ</div>
                        <div>500 ԱՄՆ դոլար</div>
                        <div>400 Եվրո</div>
                        <div>6,000 Ռուբլի</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-100 font-medium">
                        Մեկ հաճախորդի` տվյալ վճարային համակարգով գործարքների քանակի առավելագույն օրական սահմանաչափ
                      </td>
                      <td className="p-3 font-bold text-purple-800 text-sm">5</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r border-gray-100 font-medium">
                        Մեկ հաճախորդի` տվյալ վճարային համակարգով գործարքների ծավալի օրական առավելագույն սահմանաչափ
                      </td>
                      <td className="p-3 space-y-1 font-semibold text-gray-800">
                        <div>1,000,000 ՀՀ դրամ</div>
                        <div>2,000 ԱՄՆ դոլար</div>
                        <div>1,600 Եվրո</div>
                        <div>26,000 Ռուբլի</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Footnotes Section */}
              <div className="space-y-2 pt-6 text-[11px] text-gray-500 leading-relaxed border-t border-gray-200">
                <p><sup>[1]</sup> MasterCard Standard, Visa Classic, MasterCard Gold, Visa Gold և VISA Infinite տեսակի վճարային քարտերը տրամադրվում են ֆիզիկական անձանց, իսկ Visa Business տեսակի վճարային քարտերը` իրավաբանական անձանց:</p>
                <p>Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ վճարային քարտերի քարտային հաշիվներով (առանց վճարային քարտի առկայության) իրականացվող ցանկացած գործարքի համար գործում է սույն գլխով սահմանված` Վճարային քարտերի համար սահմանված սակագները (Սակագինը կիրառվում է միայն 01/06/2018թ.-ից ներառյալ տրամադրվող վճարային քարտերի համար):</p>
                <p>Աշխատավարձային վճարային քարտերի տրամադրման և սպասարկման սակագները սահմանվում են քարտապանի գործատուի հետ կնքված պայմանագրով: Բանկի Վարչության որոշմամբ կարող են սահմանվել վճարային քարտերի տրամադրման այլ պայմաններ և սակագներ:</p>
                <p><sup>[2]</sup> Visa Gold քարտերի թողարկումը դադարեցվել է 25.11.2024թ.-ից:</p>
                <p><sup>[3]</sup> Քարտի 5 տարվա սպասարկման վճարը գանձվում է միանվագ` քարտի բացման պահին:</p>
                <p><sup>[4]</sup> Օտարերկրյա քաղաքացիների համար գործում է նշված սակագնի հնգապատիկը, ընդ որում լրացուցիչ քարտերը կտրամադրվեն նախապես երեք տարվա միջնորդավճարը վճարելու պայմանով:</p>
                <p><sup>[5]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար 1%:</p>
                <p><sup>[6]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար 1.5%:</p>
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

        {/* Promo Banner Section */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="bg-gradient-to-r from-[#d8c397] via-[#e2cf9f] to-[#cbb27a] rounded-3xl p-8 md:p-12 text-center text-amber-950 relative overflow-hidden shadow-xl">
            <img src="https://www.evoca.am/images-cache/cards/1/16137183034294/1920x527.jpg
" alt="" />
            <h2 className="text-xl md:text-3xl font-extrabold mb-2 tracking-tight">
              Պատվիրիր քո Mastercard Gold քարտն
            </h2>
            <p className="text-base md:text-xl font-bold mb-4">
              EvocaTOUCH հավելվածի օգնությամբ և
            </p>
            <p className="text-lg md:text-2xl font-black text-amber-900 uppercase tracking-wide">
              ստացիր այն քո ցանկացած վայրում<br />
              <span className="underline decoration-amber-800">անվճար առաքման միջոցով</span>
            </p>
          </div>
        </div>

        {/* Այլ քարտեր Swiper */}
        <div className="max-w-6xl mx-auto px-6 pb-24 relative">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Այլ քարտեր</h2>

          <button className="other-prev absolute left-0 top-[60%] -translate-y-1/2 z-10 text-purple-600 hover:text-purple-800 transition">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="other-next absolute right-0 top-[60%] -translate-y-1/2 z-10 text-purple-600 hover:text-purple-800 transition">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="px-8">
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
            
 {otherCardsData.map((card, index) => (
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





          </div>
        </div>

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
                Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ։
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
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-[#f8f8fa] text-[#2d2d2d] pt-10 pb-6 px-6 border-t border-gray-100 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end pb-4 border-b border-gray-200 gap-4">
          <div className="text-gray-400 text-[11px]">
            Թարմացվել է` 31/08/2026 17:46
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
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

        {/* Floating Chat Button */}
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

export default MastercardGoldDetails;