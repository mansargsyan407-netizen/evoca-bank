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

const ratesData = [
  { service: "Քարտի տրամադրում", fee: "0" },
  { service: "Քարտի տարեկան սպասարկում", fee: "30,000" },
  { service: "24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար քարտի տարեկան սպասարկում", fee: "90,000" },
  { service: "Կից քարտի տրամադրում (Visa Platinum կամ Visa Classic)", fee: "0" },
  { 
    service: "Կից քարտի տարեկան սպասարկում[1]", 
    fee: (
      <div className="space-y-2">
        <div className="flex justify-between border-b border-gray-100 pb-1">
          <span className="text-gray-600">Visa Platinum</span>
          <span className="font-semibold">15,000</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Visa Classic</span>
          <span className="font-semibold">0</span>
        </div>
      </div>
    ) 
  },
  { service: "Քարտային հաշվի չնվազող մնացորդ", fee: "0" },
  { service: "Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք", fee: "չի հաշվարկվում" },
  { 
    service: "Քարտով կանխիկի տրամադրում Բանկի ATM-ով, Բանկի տարածքում քարտային հաշվից և POS տերմինալով", 
    fee: (
      <div className="space-y-1">
        <div className="flex justify-between border-b border-gray-100 pb-1">
          <span className="text-gray-600">ՀՀ դրամ</span>
          <span className="font-semibold">0.5 %</span>
        </div>
        <div className="flex justify-between border-b border-gray-100 pb-1">
          <span className="text-gray-600">ԱՄՆ դոլար և Եվրո</span>
          <span className="font-semibold">1 %</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Այլ արտարժույթ</span>
          <span className="font-semibold">1 %</span>
        </div>
      </div>
    ) 
  },
  { service: "Քարտով կանխիկի տրամադրում «ԱրՔա» համակարգի անդամ հանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով", fee: "1 %" },
  { service: "Քարտով կանխիկի տրամադրում օտարերկրյա բանկերի և «ԱրՔա» համակարգի անդամ չհանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով", fee: "1.5 % min 1,500" },
  { service: "Առևտրի կետերում Բանկի և այլ բանկերի POS տերմինալներով անկանխիկ գործարքների իրականացում", fee: "0" },
  { service: "Քարտի գործողության կասեցում", fee: "0" },
  { service: "Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)", fee: "1,000" },
  { service: "Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում", fee: "0" },
  { service: "Քարտի վերաթողարկում կորստի, վնասվելու կամ PIN ծածկագրի կորստի դեպքում", fee: "10,000 ՀՀ դրամ" },
  { service: "PIN ծածկագրի գեներացման հայտ Բանկի տարածքում", fee: "1,000 ՀՀ դրամ" },
  { service: "PIN ծածկագրի սահմանում Evoca Touch հավելվածով", fee: "0" },
  { service: "Քարտային հաշվի ամսական քաղվածքի տրամադրում", fee: "0" },
  { service: "Քարտային հաշվի քաղվածքի տրամադրում այլ ժամկետի համար", fee: "0" },
  { service: "Կանխիկի մուտքագրում Բանկի տարածքում գտնվող վճարային տերմինալներով", fee: "0" },
  { service: "Կանխիկի մուտքագրում «ԱրՔա» համակարգի անդամ հանդիսացող բանկերի ATM-ով (ATM CASH-IN)", fee: "0.8 %" },
  { service: "Գործարքի վերաբերյալ հաղորդագրությունների ստացում Evoca Touch հավելվածով", fee: "0" },
  { 
    service: "Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում", 
    fee: (
      <div className="space-y-1">
        <div className="flex justify-between border-b border-gray-100 pb-1">
          <span className="text-gray-600">Մինչև 5,000 ՀՀ դրամ գործարքներ</span>
          <span className="font-semibold">20 ՀՀ դրամ</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">5,000 ՀՀ դրամը գերազանցող գործարքներ</span>
          <span className="font-semibold">0</span>
        </div>
      </div>
    ) 
  },
  { service: "Գերածախսի գծով տույժեր", fee: "20 % տարեկան" },
  { service: "Քարտից քարտ փոխանցումներ բանկոմատների միջոցով՝ Բանկի վճարային քարտին", fee: "0.3 %" },
  { service: "«ԱրՔա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՔա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին", fee: "0.5 %" },
  { 
    service: "Քարտից քարտ փոխանցումներ EvocaTOUCH/EvocaONLINE համակարգերի միջոցով Բանկի ներսում", 
    fee: (
      <div className="space-y-1">
        <div className="flex justify-between border-b border-gray-100 pb-1">
          <span className="text-gray-600">Նույն արժույթով քարտին</span>
          <span className="font-semibold">անվճար</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Տարբեր արժույթով քարտերին</span>
          <span className="font-semibold">0.3%</span>
        </div>
      </div>
    ) 
  },
  { service: "«ԱրՔա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՔա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին EvocaTOUCH/EvocaONLINE համակարգերի միջոցով քարտից քարտ փոխանցումների 1 գործարքի առավելագույն սահմանաչափ", fee: "700,000 ՀՀ դրամ" },
  { service: "Քարտից քարտ փոխանցումներ EvocaTOUCH/EvocaONLINE համակարգերի միջոցով «ԱրՔա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՔա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին`", fee: "0.5 %" },
  { service: "Վարկային սահմանաչափի տրամադրման հայտի ուսումնասիրման միջնորդավճար", fee: "0" },
  { service: "Գործող վարկային սահմանաչափի ավելացման հայտի ուսումնասիրման միջնորդավճար", fee: "0" },
  { service: "Կանխիկի տրամադրման առավելագույն սահմանաչափ", fee: "2,500,000 ՀՀ դրամ" },
  { service: "Կանխիկացման գործարքների օրական առավելագույն քանակ", fee: "10" },
  { service: "Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն գումարային սահմանաչափ", fee: "500,000" },
  { 
    service: "Մեկ օրվա ընթացքում կանխիկացման գործարքների կամ սահմանաչափերի քանակի ավելացման միջնորդավճար քարտի գործողության ամբողջ ընթացքում․", 
    fee: (
      <div className="space-y-1">
        <div className="flex justify-between border-b border-gray-100 pb-1">
          <span className="text-gray-600">Մինչև 5 մլն ՀՀ դրամ</span>
          <span className="font-semibold">2,900 ՀՀ դրամ</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">5 մլն ՀՀ դրամից ավել</span>
          <span className="font-semibold">4,900 ՀՀ դրամ</span>
        </div>
      </div>
    ) 
  },
  { service: "Քարտով կատարված գործարքների բողոքարկման հայտ [2]", fee: "5,000 ՀՀ դրամ" },
  { service: "Ժամկետը լրացած վճարային քարտի քարտային հաշվի սպասարկման վճար", fee: "Ամսական 2,000 ՀՀ դրամ, իսկ միջոցների անբավարարության դեպքում` հաշվի մնացորդի չափով:" },
];

const VisaPlatinumDetails = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [currency, setCurrency] = useState('AMD');

  const prices = {
    AMD: '30,000 ֏',
    USD: '75 $',
    EUR: '70 €'
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      <div>
        {/* Top Banner Section */}
        <div className="bg-gradient-to-r from-[#f0f3fe] via-[#f7f5ff] to-[#f4efff] pt-12 pb-20 px-6 md:px-16 relative overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Evoca Visa Platinum
              </h1>
              <p className="text-gray-600 text-lg">
                Պրեմիում առավելություններ պրեմիում քարտով:
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png" 
                alt="Evoca Visa Platinum" 
                className="w-80 md:w-96 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Navigation Breadcrumbs & Back Button */}
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full hover:bg-gray-50 transition text-gray-700 font-medium"
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
            <span className="hover:underline cursor-pointer">Visa</span>
            <span>›</span>
            <span className="text-gray-900 font-semibold">Evoca Visa Platinum</span>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="max-w-6xl mx-auto px-6 pb-12">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-10">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-3 px-2 font-bold text-lg transition-all border-b-2 mr-8 ${
                activeTab === 'about'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Քարտի մասին
            </button>
            <button
              onClick={() => setActiveTab('rates')}
              className={`pb-3 px-2 font-bold text-lg transition-all border-b-2 ${
                activeTab === 'rates'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Սակագներ և դրույքներ
            </button>
          </div>

          {/* Tab 1: Քարտի մասին */}
          {activeTab === 'about' && (
            <div className="space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-gray-700 leading-relaxed text-base">
                    Evocabank-ի Visa Platinum քարտը ոչ միայն վճարման գործիք է, այլ նաև հասանելիություն դեպի մի շարք արտոնություններ՝ սկսած ճամփորդական ապահովագրությունից մինչև օդանավակայանների բիզնես սրահների հասանելիություն և 24/7 աջակցություն:
                  </p>
                  <h3 className="text-xl font-bold text-purple-700 pt-2">
                    Ինչո՞ւ ընտրել Visa Platinum
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Պրեմիում արտոնություններ',
                      'Հարմարավետ ճամփորդություններ',
                      'Միջազգային ապահովագրություն',
                      'Առավելություններ Հայաստանում և ամբողջ աշխարհում',
                      '24/7 Concierge աջակցություն'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-600 mt-2 shrink-0"></span>
                        <span className="text-gray-800 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#f8f9fe] border border-purple-50 rounded-2xl p-6 shadow-sm space-y-6">
                  <div className="flex gap-2 justify-start">
                    {['AMD', 'USD', 'EUR'].map((cur) => (
                      <button
                        key={cur}
                        onClick={() => setCurrency(cur)}
                        className={`w-10 h-10 rounded-full font-bold text-sm transition ${
                          currency === cur
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                        }`}
                      >
                        {cur === 'AMD' ? '֏' : cur === 'USD' ? '$' : '€'}
                      </button>
                    ))}
                  </div>
                  <div className="pt-2">
                    <div className="text-3xl font-extrabold text-purple-700">
                      {prices[currency]}
                    </div>
                    <div className="text-sm text-gray-500 font-medium mt-1">
                      Սպասարկման վճար
                    </div>
                  </div>
                  <hr className="border-gray-200" />
                  <div>
                    <div className="text-2xl font-bold text-purple-700">
                      6 մուտք
                    </div>
                    <div className="text-sm text-gray-500 font-medium mt-1">
                      Օդանավակայանների բիզնես սրահներ
                    </div>
                  </div>
                </div>
              </div>

              {/* Քարտի առավելությունները */}
              <div className="pt-10 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-12">
                  Քարտի առավելությունները
                </h2>

                <div className="space-y-16">
                  {/* 1. Ճամփորդական ապահովագրություն */}
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="w-16 h-16 flex items-center justify-center shrink-0">
                      <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">Ճամփորդական ապահովագրություն</h3>
                      <p className="text-gray-600">
                        Եթե ճամփորդական ծախսերը (ավիատոմս, հյուրանոց և այլն) կատարվել են Visa Platinum քարտով, դու ապահովագրված ես՝
                      </p>
                      <ul className="space-y-2 pt-2">
                        {['թռիչքի ուշացման դեպքում,', 'ուղեբեռի ուշացման կամ կորստի դեպքում,', 'բաց թողնված թռիչքների անհարմարություններից,', 'գնված ապրանքների գողությունից կամ վնասից՝ մինչև 90 օր:'].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-700">
                            <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 2. Օդանավակայանների բիզնես սրահներ */}
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="w-16 h-16 flex items-center justify-center shrink-0">
                      <span className="text-4xl text-purple-600">★</span>
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">Օդանավակայանների բիզնես սրահներ</h3>
                      <p className="text-gray-600">Քո Visa Platinum քարտով դու ունես՝</p>
                      <ul className="space-y-2 pt-2">
                        <li className="flex items-center gap-3 text-gray-700 font-medium">
                          <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                          <span>Տարեկան 6 անվճար մուտք աշխարհի 1200+ միջազգային օդանավակայանների սպասասրահներ:</span>
                        </li>
                      </ul>
                      <p className="text-xs text-gray-500 pt-3 leading-relaxed">
                        * Առաջարկից օգտվելու համար անհրաժեշտ է վերջին 35 օրվա ընթացքում կատարել նվազագույնը 400 ԱՄՆ դոլարի կամ համարժեք արտարժույթի անկանխիկ գործարքներ: Առաջարկը գործում է տվյալ օրացուցային տարվա համար:
                      </p>
                    </div>
                  </div>

                  {/* 3. Concierge ծառայություն */}
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="w-16 h-16 flex items-center justify-center shrink-0">
                      <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">Concierge ծառայություն</h3>
                      <p className="text-gray-600">24/7 քո անձնական օգնականը՝ աշխարհի ցանկացած կետում:</p>
                      <p className="text-gray-600">
                        Visa Platinum քարտով կարող ես օգտվել Telegram և Viber հարթակներում Chat-bot concierge ծառայությունից՝
                      </p>
                      <ul className="space-y-2 pt-2">
                        {['ավիատոմսերի պատվիրում', 'հյուրանոցների ամրագրում', 'ռեստորանների ամրագրում', '24/7 տեղեկատվական աջակցություն'].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-700">
                            <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 4. Էքսկլյուզիվ առաջարկներ */}
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="w-16 h-16 flex items-center justify-center shrink-0">
                      <div className="border-2 border-purple-600 rounded-lg p-2 text-purple-600 text-xs font-bold text-center">
                        VIP
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        Էքսկլյուզիվ առաջարկներ Հայաստանում և արտերկրում
                      </h3>
                      <p className="text-gray-600">
                        Visa Platinum քարտով վճարելու դեպքում կունենաս հատուկ առաջարկներ Հայաստանում և աշխարհի տարբեր երկրներում՝
                      </p>
                      
                      <div className="space-y-4 pt-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <p className="text-gray-700 max-w-2xl">
                            • Հայաստանում կարող ես օգտվել Evoca Benefits նախագծից և ստանալ բացառիկ բենեֆիթներ՝ զեղչեր, քեշբեքեր և այլ առավելություններ Evoca Partners Club-ի ավելի քան 100 առաջատար գործընկեր կազմակերպություններից:
                          </p>
                          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-6 py-2.5 rounded-full transition shrink-0">
                            EVOCA BENEFITS
                          </button>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
                          <p className="text-gray-700 max-w-xl">
                            • Ամբողջ աշխարհում կարող ես ստանալ հատուկ զեղչեր և առաջարկներ՝ տարբեր առևտրային կետերից գնումներ կատարելիս և հյուրանոցների համարներ ամրագրելիս:
                          </p>
                          <div className="flex gap-2 shrink-0">
                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-5 py-2.5 rounded-full transition">
                              VISA OFFERS
                            </button>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-5 py-2.5 rounded-full transition">
                              VISA LUXURY HOTELS
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Սակագներ և դրույքներ */}
          {activeTab === 'rates' && (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-purple-50/50 py-4 px-6 border-b border-gray-200 text-center font-bold text-lg text-purple-900">
                Visa Platinum վճարային քարտեր
              </div>

              <div className="divide-y divide-gray-200 text-sm">
                {ratesData.map((row, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 hover:bg-gray-50 transition gap-2">
                    <span className="text-gray-700 leading-relaxed font-medium sm:w-2/3">
                      {row.service}
                    </span>
                    <div className="font-semibold text-gray-900 text-left sm:text-right sm:w-1/3">
                      {row.fee}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footnotes */}
              <div className="p-6 bg-gray-50 border-t border-gray-200 space-y-3 text-xs text-gray-500 italic">
                <p>
                  <strong className="text-purple-700 font-semibold not-italic">[1]</strong> Օտարերկրյա քաղաքացիների համար գործում է նշված սակագնի եռապատիկը, իսկ Visa Classic քարտի դեպքում տրամադրման պահին գործող սակագնի եռապատիկը: Լրացուցիչ քարտերը կտրամադրվեն նախապես հինգ տարվա միջնորդավճարը վճարելու պայմանով:
                </p>
                <p>
                  <strong className="text-purple-700 font-semibold not-italic">[2]</strong> Գանձվում է միայն այն դեպքում, երբ բողոքարկման գործընթացի արդյունքում պարզվել է, որ գործարքը կատարվել է հաճախորդի կողմից կամ հաճախորդի կողմից քարտի օգտագործման կանոնների խախտման հետևանքով:
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Այլ քարտեր Swiper Section */}
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
                   </div>
        </div>

        {/* Օնլայն և մոբայլ բանկինգ Banner */}
        <section className="w-full bg-[#6b21a8] text-white py-12 px-6 relative overflow-hidden mt-12">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white rounded-full opacity-10 pointer-events-none"></div>
          <div className="absolute bottom-10 right-10 w-10 h-10 rounded-full bg-purple-400/20 blur-sm pointer-events-none"></div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="w-full lg:w-1/2 flex items-center justify-center gap-4">
              <div className="relative w-full max-w-[480px]">
                <div className="relative rounded-t-2xl border-[10px] border-b-0 border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden aspect-[16/10]">
                  <iframe
                    src="https://www.youtube.com/embed/KwAgMHEx8ys?enablejsapi=1&origin=https%3A%2F%2Fwww.evoca.am"
                    title="EvocaTOUCH Video"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="w-[108%] -translate-x-[4%] h-3 bg-neutral-700 rounded-b-xl border-t border-neutral-600 shadow-md relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-neutral-500 rounded-b-md"></div>
                </div>
              </div>

              <div className="hidden md:block relative -ml-6 mb-2 shrink-0">
                <div className="w-28 aspect-[9/19] rounded-[1.6rem] border-[5px] border-neutral-900 bg-gradient-to-b from-indigo-700 via-purple-700 to-fuchsia-700 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-9 h-2 bg-neutral-900 rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" alt="EvocaTOUCH App" />
                  </div>
                  <div className="absolute top-8 left-4 w-2 h-2 rounded-full bg-white/60"></div>
                  <div className="absolute bottom-12 left-3 w-2.5 h-2.5 rounded-full bg-white/40"></div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold">Օնլայն և մոբայլ բանկինգ</h2>
              <p className="text-purple-100 text-sm md:text-base leading-relaxed">
                Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է
                տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ։
              </p>

              <div>
                <Link
                  to="/evoca-online"
                  className="inline-block bg-white text-purple-900 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition shadow-lg text-center"
                >
                  Դառնալ հաճախորդ
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="bg-white p-1.5 rounded-xl shadow-md shrink-0">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.evoca.am"
                    alt="QR Code"
                    className="w-20 h-20"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-white">
                    Սկանավորեք QR կոդը EvocaTOUCH հավելվածը ներբեռնելու համար
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VisaPlatinumDetails;