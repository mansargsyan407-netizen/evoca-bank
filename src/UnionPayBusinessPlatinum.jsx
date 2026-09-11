import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Swiper CSS styles
import 'swiper/css';
import 'swiper/css/navigation';

const UnionPayBusinessPlatinum = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [activeSubNav, setActiveSubNav] = useState('Քարտեր');

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

  const subNavItems = [
    'Քարտեր',
    'Քարտերի տրամադրում և սպասարկում',
    'Սոցիալական ապահովության վճարային քարտեր',
    'Evoca Benefits'
  ];

  return (
    <div className="w-full bg-white text-gray-900 font-sans">

      {/* ================= PURPLE SUB-HEADER ================= */}
      <header className="w-full bg-[#6b21a8]">
        <div className="max-w-7xl mx-auto flex items-center px-6">
          {subNavItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveSubNav(item)}
              className={`py-3.5 px-6 text-xs font-semibold text-white transition-all duration-200 border-b-2 ${
                activeSubNav === item
                  ? 'bg-[#5b1993] border-white font-bold'
                  : 'bg-transparent border-transparent hover:bg-[#5b1993]/50'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </header>

      {/* ================= HERO BANNER ================= */}
      <section className="bg-slate-50/70 px-16 py-12 flex justify-between items-center max-w-7xl mx-auto rounded-3xl my-4">
        <div className="max-w-xl space-y-4">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            UnionPay Business Platinum
          </h1>
          <p className="text-gray-600 text-xs leading-relaxed">
            Այս պրեմիում դասի քարտը կդառնա Ձեր գործընկերը հաջողության ճանապարհին:
          </p>
        </div>
        <div>
          <img 
            src="https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png" 
            alt="UnionPay Business Platinum" 
            className="w-96 rounded-xl drop-shadow-2xl"
          />
        </div>
      </section>

      {/* ================= BREADCRUMBS ================= */}
      <div className="px-16 py-4 flex items-center gap-4 text-xs text-gray-500 max-w-7xl mx-auto">
        <Link 
          to="/cards" 
          className="flex items-center gap-1 border border-gray-300 px-4 py-1.5 rounded-full text-gray-700 font-semibold hover:bg-gray-100 transition"
        >
          ← Վերադառնալ
        </Link>
        <div className="flex items-center gap-1.5">
          <span>🏠</span>
          <span>›</span>
          <span className="hover:underline cursor-pointer">Անհատ</span>
          <span>›</span>
          <span className="hover:underline cursor-pointer">Քարտեր</span>
          <span>›</span>
          <span className="hover:underline cursor-pointer">Քարտեր</span>
          <span>›</span>
          <span className="hover:underline cursor-pointer">Պրեմիում</span>
          <span>›</span>
          <span className="font-bold text-gray-800">UnionPay Business Platinum</span>
        </div>
      </div>

      {/* ================= DETAILS SECTION ================= */}
      <section className="px-16 py-6 mb-12 max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="border-b border-gray-200 flex gap-8 mb-8">
          <button 
            onClick={() => setActiveTab('about')}
            className={`pb-3 text-xs font-bold transition-all ${
              activeTab === 'about' 
                ? 'text-purple-700 border-b-2 border-purple-700' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Քարտի մասին
          </button>
          <button 
            onClick={() => setActiveTab('tariffs')}
            className={`pb-3 text-xs font-bold transition-all ${
              activeTab === 'tariffs' 
                ? 'text-purple-700 border-b-2 border-purple-700' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Սակագներ և դրույթներ
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'about' && (
          <div className="flex justify-between gap-12 items-start">
            {/* Left Content */}
            <div className="flex-1 text-xs leading-relaxed text-gray-700 space-y-5">
              <p>
                Բիզնեսմենների համար կարևոր էունենալ ժամանակակից լուծումներով ֆինանսական գործիք, որի միջոցով Ձեր բոլոր վճարումները կլինեն ակնթարթորեն՝ միաժամանակապահովելով դրամական միջոցների անվտանգությանապահովման բարձր մակարդակ:
              </p>
              <p>
                Այս ամենն իրականացնելու համար Ձեզ միայն պակասում է Evocabank-ի նոր <b className="text-purple-800">UnionPay Business Platinum</b> քարտը:
              </p>
              <p>
                Իրավաբանական անձ և անհատ ձեռնարկատեր հաճախորդներն իրենց <b className="text-purple-800">EvocaTOUCH</b> հավելվածով կարող են 24/7 հասանելիությամբ կառավարել կազմակերպության դրամական միջոցները՝ առանց Բանկ այցելելու անհրաժեշտության: Քարտերով հնարավոր է կատարել անհպում վճարումներ աշխարհի ցանկացած կետում:
              </p>
              <p className="pt-2">
                Բացահայտիր քո քարտի բենեֆիթները՝ բացառիկ զեղչեր և առաջարկներ աշխարհի տարբեր կետերում: Մանրամասներին ծանոթացիր <a href="#details" className="text-purple-700 underline font-bold">այստեղ</a>:
              </p>
            </div>

            {/* Right Card Summary Block */}
            <div className="w-[420px] bg-purple-50/30 p-6 rounded-2xl border border-purple-100/60 shadow-sm">
              <div className="flex gap-2 mb-6">
                <span className="w-7 h-7 bg-[#6b21a8] text-white rounded-full flex items-center justify-center font-bold text-xs">֏</span>
                <span className="w-7 h-7 bg-[#6b21a8] text-white rounded-full flex items-center justify-center font-bold text-xs">$</span>
                <span className="w-7 h-7 bg-[#6b21a8] text-white rounded-full flex items-center justify-center font-bold text-xs">€</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-center gap-4 pb-3 border-b border-gray-200/80">
                  <span className="text-xl font-extrabold text-[#6b21a8] min-w-[80px]">0.5%</span>
                  <span className="text-gray-700 font-medium">Կանխիկացում</span>
                </div>
                <div className="flex items-center gap-4 pb-3 border-b border-gray-200/80">
                  <span className="text-xl font-extrabold text-[#6b21a8] min-w-[80px]">5 տարի</span>
                  <span className="text-gray-700 font-medium">Քարտի ժամկետ</span>
                </div>
                <div className="flex items-center gap-4 pb-3 border-b border-gray-200/80">
                  <span className="text-xl font-extrabold text-[#6b21a8] min-w-[80px]">15000 ֏</span>
                  <span className="text-gray-700 font-medium">Տարեկան սպասարկման վճար</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-extrabold text-[#6b21a8] min-w-[80px]">Ամենուր</span>
                  <span className="text-gray-700 font-medium">Կիրառություն</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TARIFFS TAB TABLE */}
        {activeTab === 'tariffs' && (
          <div className="overflow-x-auto text-xs">
            <h3 className="font-bold text-gray-900 text-sm mb-4">
              Union Pay International վճարային համակարգի թողարկման և սպասարկման սակագներ
            </h3>

            <table className="w-full border-collapse border border-gray-200 text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-3 font-bold border-r border-gray-200 w-1/2">Մատուցվող ծառայություններ</th>
                  <th className="p-3 font-bold border-r border-gray-200 w-1/4">UPI GOLD</th>
                  <th className="p-3 font-bold w-1/4">UPI BUSINESS PLATINUM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-3 border-r border-gray-200">Քարտի արժույթ</td>
                  <td className="p-3 border-r border-gray-200">ՀՀ դրամ, ԱՄՆ դոլար, Եվրո</td>
                  <td className="p-3">ՀՀ դրամ, ԱՄՆ դոլար, Եվրո</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Քարտի գործողության ժամկետ</td>
                  <td className="p-3 border-r border-gray-200">5 տարի</td>
                  <td className="p-3">5 տարի</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Քարտի տրամադրում</td>
                  <td className="p-3 border-r border-gray-200">0</td>
                  <td className="p-3">0</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Քարտի տարեկան սպասարկում</td>
                  <td className="p-3 border-r border-gray-200">15000 ՀՀ դրամ</td>
                  <td className="p-3">15000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">
                    24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար UPI Business Platinum քարտի դեպքում օտարերկրյա քաղաքացիություն ունեցող Հայաստանում գրանցված անհատ ձեռնարկատերերի և իրավաբանական անձանց քարտի տարեկան սպասարկում
                  </td>
                  <td className="p-3 border-r border-gray-200">30,000 ՀՀ դրամ</td>
                  <td className="p-3">30,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Կից քարտի տրամադրում</td>
                  <td className="p-3 border-r border-gray-200">0</td>
                  <td className="p-3">0</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Կից քարտի տարեկան սպասարկում</td>
                  <td className="p-3 border-r border-gray-200">7,500 ՀՀ դրամ</td>
                  <td className="p-3">7,500 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Քարտային հաշվի նվազագույն մնացորդ</td>
                  <td className="p-3 border-r border-gray-200">Չի կիրառվում</td>
                  <td className="p-3">Չի կիրառվում</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան %</td>
                  <td className="p-3 border-r border-gray-200">0%</td>
                  <td className="p-3">0%</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Քարտով կանխիկի տրամադրում Բանկի ATM-ով</td>
                  <td className="p-3 border-r border-gray-200">
                    Ամսական մինչև 2,000,000 ՀՀ դրամ (ներառյալ)` Անվճար,<br />
                    2,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ` 0.2 %
                  </td>
                  <td className="p-3">0.5%</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Քարտով կանխիկի տրամադրում Բանկի POS-տերմինալներով և քարտային հաշվից</td>
                  <td className="p-3 border-r border-gray-200">1%</td>
                  <td className="p-3">1%</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Քարտով կանխիկի տրամադրում «ԱրՔա» համակարգի անդամ հանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով</td>
                  <td className="p-3 border-r border-gray-200">1%</td>
                  <td className="p-3">1%</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Քարտով կանխիկի տրամադրում օտարերկրյա բանկերի ATM-ներով և POS-տերմինալներով</td>
                  <td className="p-3 border-r border-gray-200">1.5% min 2,000 ՀՀ դրամ</td>
                  <td className="p-3">1.5% min 2,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Քարտի գործողության կասեցում</td>
                  <td className="p-3 border-r border-gray-200">0</td>
                  <td className="p-3">0</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)</td>
                  <td className="p-3 border-r border-gray-200">1,000 ՀՀ դրամ</td>
                  <td className="p-3">1,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում</td>
                  <td className="p-3 border-r border-gray-200">0</td>
                  <td className="p-3">0</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Քարտի վերաթողարկում կորստի, վնասվելու կամ PIN ծածկագրի կորստի դեպքում</td>
                  <td className="p-3 border-r border-gray-200">7,500 ՀՀ դրամ</td>
                  <td className="p-3">7,500 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">PIN ծածկագրի գեներացման հայտ</td>
                  <td className="p-3 border-r border-gray-200">1,000 ՀՀ դրամ</td>
                  <td className="p-3">1,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Կանխիկի մուտքագրում «ԱրՔա» համակարգի անդամ հանդիսացող բանկերի ATM-ով (ATM CASH-IN)</td>
                  <td className="p-3 border-r border-gray-200">0.70%</td>
                  <td className="p-3">0.70%</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Գործարքի վերաբերյալ SMS հաղորդագրությունների ստացում</td>
                  <td className="p-3 border-r border-gray-200">
                    Մինչև 5,000 ՀՀ դրամ գործարքներ` 20 ՀՀ դրամ<br />
                    5,000 ՀՀ դրամը գերազանցող գործարքներ` 0
                  </td>
                  <td className="p-3">
                    Մինչև 5,000 ՀՀ դրամ գործարքներ` 20 ՀՀ դրամ<br />
                    5,000 ՀՀ դրամը գերազանցող գործարքներ` 0
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200" colSpan={3}>
                    <b>Քարտից քարտ փոխանցումներ</b>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Քարտից քարտ փոխանցումներ բանկոմատների միջոցով</td>
                  <td className="p-3 border-r border-gray-200" colSpan={2}>
                    Բանկի հաճախորդների օգտին` 0.3%<br />
                    «ԱրՔա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՔա համակարգի հետ H2H կապողով աշխատող բանկերի վճարային քարտերին` 0.5%
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում</td>
                  <td className="p-3 border-r border-gray-200" colSpan={2}>
                    Նույն արժույթով քարտին` 0%<br />
                    Տարբեր արժույթով քարտին` 0.3%
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով ԱրՔա անդամ հանդիսացող Բանկերի և ԱրՔա համակարգի հետ H2H կապողով աշխատող բանկերի վճարային քարտերին</td>
                  <td className="p-3 border-r border-gray-200" colSpan={2}>0.5%</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">ՀՀ այլ բանկերի վճարային քարտերին</td>
                  <td className="p-3 border-r border-gray-200">0.50%</td>
                  <td className="p-3">0.50%</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Կանխիկացման սահմանաչափի փոփոխություն մինչև 5մլն ՀՀ դրամի դեպքում</td>
                  <td className="p-3 border-r border-gray-200">2 900 ՀՀ դրամ</td>
                  <td className="p-3">2 900 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Կանխիկացման սահմանաչափի փոփոխություն 5 մլն ՀՀ դրամ և ավելի դեպքում</td>
                  <td className="p-3 border-r border-gray-200">4 900 ՀՀ դրամ</td>
                  <td className="p-3">4 900 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Քարտով կատարված գործարքների բողոքարկման հայտ</td>
                  <td className="p-3 border-r border-gray-200">5,000 ՀՀ դրամ</td>
                  <td className="p-3">5,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-gray-200">Ժամկետը լրացած վճարային քարտի քարտային հաշվի սպասարկման վճար</td>
                  <td className="p-3 border-r border-gray-200">
                    Ամսական 2,000 ՀՀ դրամ, իսկ միջոցների անբավարարության դեպքում` հաշվի մնացորդի չափով:
                  </td>
                  <td className="p-3">
                    Ամսական 2,000 ՀՀ դրամ, իսկ միջոցների անբավարարության դեպքում` հաշվի մնացորդի չափով:
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* ================= ԱՅԼ ՔԱՐՏԵՐ SWIPER SECTION ================= */}
      <section className="max-w-7xl mx-auto px-16 pb-20 relative">
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

      {/* ================= ՕՆԼԱՅՆ ԵՎ ՄՈԲԱՅԼ ԲԱՆԿԻՆԳ BANNER ================= */}
      <section className="w-full bg-[#6b21a8] text-white py-14 px-16 relative overflow-hidden">
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
      <footer className="w-full bg-[#f8f8fa] text-[#2d2d2d] pt-10 pb-6 px-16 border-t border-gray-100 text-xs">
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
};

export default UnionPayBusinessPlatinum;