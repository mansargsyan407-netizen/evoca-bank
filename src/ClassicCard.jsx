import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Swiper-ի անհրաժեշտ CSS ֆայլերը
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

export default function ClassicCard() {
  const detailsRef = useRef(null);
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="w-full min-h-screen bg-white text-gray-800 font-sans">
      {/* 1. Header, Sub-nav & Hero */}
      <div ref={detailsRef}>
        {/* Top Header Navigation Bar */}
        <header className="border-b text-xs text-gray-600 bg-white">
         

         

          {/* Sub-navigation Menu Bar */}
          <div className="bg-[#6800e6] text-white text-xs font-semibold">
            <div className="max-w-7xl mx-auto flex space-x-8 px-4 py-2.5">
              <span className="bg-[#5200b8] px-4 py-1 rounded cursor-pointer">Քարտեր</span>
              <span className="cursor-pointer hover:text-purple-200">Քարտերի տրամադրում և սպասարկում</span>
              <span className="cursor-pointer hover:text-purple-200">Սոցիալական ապահովության վճարային քարտեր</span>
              <span className="cursor-pointer hover:text-purple-200">Evoca Benefits</span>
            </div>
          </div>
        </header>

        {/* Hero Banner Section */}
        <section className="bg-gradient-to-r from-purple-50/60 via-slate-50 to-purple-50/30 py-12 px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-lg space-y-4">
              <h1 className="text-3xl font-extrabold text-gray-900">Visa Classic</h1>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                Կատարիր մինչև 20,000 ՀՀ դրամի անհպում գործարքներ Visa Classic քարտով` առանց PIN կոդի մուտքագրման:
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png" 
                alt="Visa Classic Card" 
                className="w-80 object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Breadcrumbs */}
          <div className="max-w-6xl mx-auto mt-8 flex justify-between items-center text-xs text-gray-500">
            <button 
              onClick={() => window.history.back()} 
              className="flex items-center space-x-1 border border-gray-300 rounded-full px-4 py-1.5 bg-white hover:bg-gray-50 transition shadow-sm"
            >
              <span>←</span> <span className="font-medium">Վերադառնալ</span>
            </button>
            <div className="space-x-1 text-[11px] text-gray-500">
              <span>🏠</span> <span>›</span> <span>Անհատ</span> <span>›</span> <span>Քարտեր</span> <span>›</span> <span>Քարտեր</span> <span>›</span> <span>Visa</span> <span>›</span> <span className="font-semibold text-gray-800">Visa Classic</span>
            </div>
          </div>
        </section>
      </div>

      {/* 2. Tabs, Text & Price Info Box Section */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 flex space-x-8 text-xs font-bold mb-8">
          <button 
            onClick={() => setActiveTab('about')}
            className={`pb-2 border-b-2 transition ${activeTab === 'about' ? 'border-[#7c00ff] text-[#7c00ff]' : 'border-transparent text-gray-500 hover:text-purple-600'}`}
          >
            Քարտի մասին
          </button>
          <button 
            onClick={() => setActiveTab('rates')}
            className={`pb-2 border-b-2 transition ${activeTab === 'rates' ? 'border-[#7c00ff] text-[#7c00ff]' : 'border-transparent text-gray-500 hover:text-purple-600'}`}
          >
            Սակագներ և դրույթներ
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'about' ? (
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Description Text */}
            <div className="space-y-4 text-xs text-gray-700 leading-relaxed font-normal">
              <p>
                <span className="font-bold text-[#7c00ff]">Evoca Visa Classic</span> քարտն օժտված է դրամական միջոցների անվտանգության ապահովման բարձր մակարդակով: Այն միջազգային payWave տեխնոլոգիայով աշխատող չիպային քարտ է, որի շնորհիվ սպասարկման կետերում քարտը հատուկ վճարային տերմինալների մեջ տեղադրելու անհրաժեշտություն չի առաջանում: Սա նվազեցնում է քարտի հնարավոր կեղծման ռիսկը` ցանկացած վճարում դարձնելով պարզ, արագ և հեշտ: Պարզապես մոտեցրու քարտը հատուկ վճարային տերմինալներին, և գործարքը կհաստատվի հաշված վայրկյանների ընթացքում:
              </p>
              <p>
                Աշխարհի ցանկացած կետում, որտեղ էլ լինես, քո ֆինանսական միջոցները 24/7 սկզբունքով հասանելի կլինեն: Դու կկարողանաս բանկոմատի միջոցով <span className="font-bold text-[#7c00ff]">Evoca Visa Classic</span> քարտից <span className="font-bold text-[#7c00ff]">գումար կանխիկացնել</span> և <span className="font-bold text-[#7c00ff]">անկանխիկ վճարումներ կատարել</span> աշխարհի բոլոր այն սպասարկման և առևտրի կետերում, որտեղ փակցված կլինի Visa տարբերանշանը:
              </p>
              <p>
                Քարտը կարող ես պատվիրել և ստանալ առանց Բանկ այցելելու: <span className="font-bold text-[#7c00ff]">EvocaTOUCH</span> հավելվածի միջոցով պարզ քայլերի հաջորդականությամբ կկարողանաս պատվիրել այն` նշելով այն հասցեն, որտեղից կցանկանաս ստանալ քարտը: Կարևորելով մեր հաճախորդների ժամանակը` առաքման անվճար ծառայության միջոցով Հայաստանի ցանկացած կետում կտրամադրենք քո <span className="font-bold text-[#7c00ff]">Evoca Visa Classic</span> քարտը:
              </p>
            </div>

            {/* Right Information Card Box */}
            <div className="bg-slate-50/70 border border-gray-100 rounded-3xl p-6 shadow-sm space-y-5">
              {/* Currency Icons */}
              <div className="flex space-x-2">
                <span className="bg-[#6800e6] text-white font-bold text-xs rounded-full w-7 h-7 flex items-center justify-center">֏</span>
                <span className="bg-[#6800e6] text-white font-bold text-xs rounded-full w-7 h-7 flex items-center justify-center">$</span>
                <span className="bg-[#6800e6] text-white font-bold text-xs rounded-full w-7 h-7 flex items-center justify-center">€</span>
                <span className="bg-[#6800e6] text-white font-bold text-xs rounded-full w-7 h-7 flex items-center justify-center">₽</span>
              </div>

              {/* Rates Items */}
              <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                <span className="text-2xl font-black text-[#6800e6]">0.2%</span>
                <span className="text-xs text-gray-700 font-medium max-w-[210px] text-right">
                  Կանխիկացում բանկի կանխիկացման կետերում
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                <span className="text-2xl font-black text-[#6800e6]">0.8%</span>
                <span className="text-xs text-gray-700 font-medium max-w-[210px] text-right">
                  Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                <div>
                  <span className="text-[10px] text-gray-400 block -mb-1">min 1,500 ֏</span>
                  <span className="text-2xl font-black text-[#6800e6]">1%</span>
                </div>
                <span className="text-xs text-gray-700 font-medium max-w-[210px] text-right">
                  Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                <span className="text-2xl font-black text-[#6800e6]">5,000 ֏</span>
                <span className="text-xs text-gray-700 font-medium text-right">Տարեկան սպասարկում</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-2xl font-black text-[#6800e6]">15,000 ֏</span>
                <span className="text-xs text-gray-700 font-medium max-w-[210px] text-right">
                  Տարեկան սպասարկում օտարերկրյա քաղաքացիների համար
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* Rates & Terms Tab Content */
          <div className="space-y-10 text-xs text-gray-700">
            {/* Main Rates Table Container */}
            <div className="border border-purple-100 rounded-2xl overflow-hidden shadow-sm bg-white">
              <div className="bg-[#FAF8FE] py-3 px-4 border-b border-purple-100 text-center font-bold text-purple-900 text-sm">
                Վճարային քարտեր<sup>[1]</sup>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50 text-gray-800 font-bold text-[11px]">
                      <th className="p-3 w-1/3">Մատուցվող ծառայություններ</th>
                      <th className="p-3">MasterCard Standard / Visa Classic</th>
                      <th className="p-3">MasterCard Gold / Visa Gold<sup>[2]</sup></th>
                      <th className="p-3">Visa Business</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[11px]">
                    {/* Քարտի տրամադրում */}
                    <tr>
                      <td className="p-3 font-medium">Քարտի տրամադրում</td>
                      <td className="p-3">0</td>
                      <td className="p-3">0</td>
                      <td className="p-3">0</td>
                    </tr>

                    {/* Քարտի սպասարկում - Տարեկան */}
                    <tr>
                      <td className="p-3 font-medium" rowSpan={2}>
                        Քարտի սպասարկում
                      </td>
                      <td className="p-3">
                        <span className="text-gray-400 mr-2">Տարեկան</span>
                        5,000 ՀՀ դրամ
                      </td>
                      <td className="p-3">15,000 ՀՀ դրամ</td>
                      <td className="p-3">10,000 ՀՀ դրամ</td>
                    </tr>

                    {/* Քարտի սպասարկում - Ամսական */}
                    <tr>
                      <td className="p-3">
                        <span className="text-gray-400 block mb-1">Ամսական</span>
                        MasterCard Standard՝ 500 ՀՀ դրամ (Ամսական սպասարկման վճարով քարտի պատվեր հնարավոր է իրականացնել միայն <span className="text-purple-700 font-semibold">Բանկի մասնաճյուղերում</span>)
                      </td>
                      <td className="p-3">
                        MasterCard Gold՝ 1,500 ՀՀ դրամ (Ամսական սպասարկման վճարով քարտի պատվեր հնարավոր է իրականացնել միայն <span className="text-purple-700 font-semibold">Բանկի մասնաճյուղերում</span>)
                      </td>
                      <td className="p-3">-</td>
                    </tr>

                    {/* Շտապ թողարկում */}
                    <tr>
                      <td className="p-3 font-medium">Շտապ թողարկում</td>
                      <td className="p-3">10,000 ՀՀ դրամ</td>
                      <td className="p-3">10,000 ՀՀ դրամ</td>
                      <td className="p-3">10,000 ՀՀ դրամ</td>
                    </tr>

                    {/* 24.02.2022թ.-ից հետո */}
                    <tr>
                      <td className="p-3 font-medium" colSpan={4}>
                        24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար։
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">
                        Visa Business քարտի դեպքում օտարերկրյա քաղաքացիություն ունեցող Հայաստանում գրանցված անհատ ձեռնարկատերերի և իրավաբանական անձանց քարտի տարեկան սպասարկում<sup>[3]</sup>
                      </td>
                      <td className="p-3">15,000 ՀՀ դրամ</td>
                      <td className="p-3">45,000 ՀՀ դրամ</td>
                      <td className="p-3">30,000 ՀՀ դրամ</td>
                    </tr>

                    {/* Կից քարտ */}
                    <tr>
                      <td className="p-3 font-medium">Կից քարտի տրամադրում</td>
                      <td className="p-3">0</td>
                      <td className="p-3">0</td>
                      <td className="p-3">0</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Կից քարտի տարեկան սպասարկում<sup>[4]</sup></td>
                      <td className="p-3">3,000 ՀՀ դրամ</td>
                      <td className="p-3">10,000 ՀՀ դրամ</td>
                      <td className="p-3">7,000 ՀՀ դրամ</td>
                    </tr>

                    {/* Չնվազող մնացորդ */}
                    <tr>
                      <td className="p-3 font-medium">Քարտային հաշվի չնվազող մնացորդ</td>
                      <td className="p-3">0</td>
                      <td className="p-3">0</td>
                      <td className="p-3">0</td>
                    </tr>

                    {/* Տարեկան % */}
                    <tr className="bg-gray-50/50">
                      <td className="p-3 font-bold" colSpan={4}>
                        Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան %
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">մինչև 5 մլն. ՀՀ դրամ</td>
                      <td className="p-3">0 %</td>
                      <td className="p-3">0 %</td>
                      <td className="p-3">0 %</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">5 մլն. ՀՀ դրամ և ավել</td>
                      <td className="p-3">1 %</td>
                      <td className="p-3">1 %</td>
                      <td className="p-3">1 %</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">արտարժույթ</td>
                      <td className="p-3">0 %</td>
                      <td className="p-3">0 %</td>
                      <td className="p-3">0 %</td>
                    </tr>

                    {/* Կանխիկի տրամադրում */}
                    <tr>
                      <td className="p-3 font-medium">
                        Քարտերով կանխիկի տրամադրում Բանկի ATM-ով, քարտային հաշվից և POS տերմինալով<sup>[5]</sup>
                        <br /><span className="text-gray-400">ՀՀ դրամ</span>
                      </td>
                      <td className="p-3">
                        Ամսական մինչև 1,000,000 ՀՀ դրամ (ներառյալ)՝ Անվճար,<br />
                        1,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ՝ 0.2 %<br />
                        POS տերմինալով՝ 0.2 %
                      </td>
                      <td className="p-3">
                        Mastercard Gold՝ Ամսական մինչև 2,000,000 ՀՀ դրամ (ներառյալ)՝ Անվճար,<br />
                        2,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ՝ 0.2 %<br />
                        POS տերմինալով՝ 0.2 %<br />
                        Visa Gold՝ 0.2 %
                      </td>
                      <td className="p-3">0.2 %</td>
                    </tr>

                    <tr>
                      <td className="p-3 font-medium">ԱՄՆ դոլար և Եվրո</td>
                      <td className="p-3">0.5 %</td>
                      <td className="p-3">0.5 %</td>
                      <td className="p-3">0.5 %</td>
                    </tr>

                    <tr>
                      <td className="p-3 font-medium">Այլ արտարժույթ</td>
                      <td className="p-3">0.3 %</td>
                      <td className="p-3">0.3 %</td>
                      <td className="p-3">0.3 %</td>
                    </tr>

                    <tr>
                      <td className="p-3 font-medium">
                        Քարտերով կանխիկի տրամադրում «ԱրՔա» համակարգի անդամ հանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով<sup>[6]</sup>
                      </td>
                      <td className="p-3">0.8 %</td>
                      <td className="p-3">0.8 %</td>
                      <td className="p-3">0.8 %</td>
                    </tr>

                    <tr>
                      <td className="p-3 font-medium">
                        Քարտերով կանխիկի տրամադրում օտարերկրյա բանկերի և «ԱրՔա» համակարգի անդամ չհանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով<sup>[7]</sup>
                      </td>
                      <td className="p-3">1% min 1,500 ՀՀ դրամ</td>
                      <td className="p-3">1% min 1,500 ՀՀ դրամ</td>
                      <td className="p-3">1% min 1,500 ՀՀ դրամ</td>
                    </tr>

                    {/* Անկանխիկ գործարքներ */}
                    <tr>
                      <td className="p-3 font-medium">
                        Առևտրի կետերում Բանկի և այլ բանկերի POS տերմինալներով անկանխիկ գործարքների իրականացում
                      </td>
                      <td className="p-3">0</td>
                      <td className="p-3">0</td>
                      <td className="p-3">0</td>
                    </tr>

                    {/* Կասեցում & Ապակասեցում */}
                    <tr>
                      <td className="p-3 font-medium">Քարտի գործողության կասեցում</td>
                      <td className="p-3">0</td>
                      <td className="p-3">0</td>
                      <td className="p-3">0</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">
                        Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)
                      </td>
                      <td className="p-3">1,000 ՀՀ դրամ</td>
                      <td className="p-3">1,000 ՀՀ դրամ</td>
                      <td className="p-3">1,000 ՀՀ դրամ</td>
                    </tr>

                    {/* Վերաթողարկում */}
                    <tr>
                      <td className="p-3 font-medium">
                        Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում
                      </td>
                      <td className="p-3">0</td>
                      <td className="p-3">0</td>
                      <td className="p-3">0</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">
                        Քարտի վերաթողարկում կորստի, վնասվելու կամ PIN ծածկագրի կորստի դեպքում
                      </td>
                      <td className="p-3">3,000 ՀՀ դրամ</td>
                      <td className="p-3">10,000 ՀՀ դրամ</td>
                      <td className="p-3">5,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">PIN ծածկագրի գեներացման հայտ</td>
                      <td className="p-3">1,000 ՀՀ դրամ</td>
                      <td className="p-3">1,000 ՀՀ դրամ</td>
                      <td className="p-3">1,000 ՀՀ դրամ</td>
                    </tr>

                    {/* Քաղվածքներ */}
                    <tr>
                      <td className="p-3 font-medium">Քարտային հաշվի ամսական քաղվածքի տրամադրում</td>
                      <td className="p-3">0</td>
                      <td className="p-3">0</td>
                      <td className="p-3">0</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">
                        Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար<sup>[8]</sup>
                      </td>
                      <td className="p-3">1,000 ՀՀ դրամ</td>
                      <td className="p-3">1,000 ՀՀ դրամ</td>
                      <td className="p-3">1,000 ՀՀ դրամ</td>
                    </tr>

                    {/* Կանխիկի մուտքագրում ATM CASH-IN */}
                    <tr>
                      <td className="p-3 font-medium">
                        Կանխիկի մուտքագրում «ԱրՔա» համակարգի անդամ հանդիսացող բանկերի ATM-ով (ATM CASH-IN)
                      </td>
                      <td className="p-3">0.6 %</td>
                      <td className="p-3">0.6 %</td>
                      <td className="p-3">0.6 %</td>
                    </tr>

                    {/* SMS */}
                    <tr>
                      <td className="p-3 font-medium">
                        Գործարքի վերաբերյալ SMS հաղորդագրությունների ստացում<sup>[9]</sup>
                      </td>
                      <td className="p-3">
                        Մինչև 5,000 ՀՀ դրամ գործարքներ՝ 20 ՀՀ դրամ<br />
                        5,000 ՀՀ դրամը գերազանցող գործարքներ՝ 0
                      </td>
                      <td className="p-3">
                        Մինչև 5,000 ՀՀ դրամ գործարքներ՝ 20 ՀՀ դրամ<br />
                        5,000 ՀՀ դրամը գերազանցող գործարքներ՝ 0
                      </td>
                      <td className="p-3">
                        Մինչև 5,000 ՀՀ դրամ գործարքներ՝ 20 ՀՀ դրամ<br />
                        5,000 ՀՀ դրամը գերազանցող գործարքներ՝ 0
                      </td>
                    </tr>

                    {/* Գերածախս */}
                    <tr>
                      <td className="p-3 font-medium">Գերածախսի գծով տույժեր</td>
                      <td className="p-3">20 % տարեկան</td>
                      <td className="p-3">20 % տարեկան</td>
                      <td className="p-3">20 % տարեկան</td>
                    </tr>

                    {/* Քարտից քարտ փոխանցումներ */}
                    <tr className="bg-gray-50/50">
                      <td className="p-3 font-bold" colSpan={4}>Քարտից քարտ փոխանցումներ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium" colSpan={4}>Բանկոմատների միջոցով</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Բանկի վճարային քարտին<sup>[10]</sup></td>
                      <td className="p-3">0.3%</td>
                      <td className="p-3">0.3%</td>
                      <td className="p-3">0.3%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">
                        «ԱրՔա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՔա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին<sup>[11]</sup>
                      </td>
                      <td className="p-3">0.5%</td>
                      <td className="p-3">0.5%</td>
                      <td className="p-3">0.5%</td>
                    </tr>

                    {/* EvocaTouch/EvocaOnline փոխանցումներ */}
                    <tr>
                      <td className="p-3 font-medium" rowSpan={2}>
                        Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում
                      </td>
                      <td className="p-3" colSpan={3}>
                        Նույն արժույթով քարտին՝ <span className="font-bold">0%</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3" colSpan={3}>
                        Տարբեր արժույթով քարտերին՝ <span className="font-bold">0.3%</span>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-3 font-medium">
                        Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով «ԱրՔա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՔա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին՝
                      </td>
                      <td className="p-3">0.5%</td>
                      <td className="p-3">0.5%</td>
                      <td className="p-3">0.5%</td>
                    </tr>

                    {/* Վարկային սահմանաչափեր & Այլ */}
                    <tr>
                      <td className="p-3 font-medium">
                        Վարկային սահմանաչափի տրամադրման հայտի ուսումնասիրման միջնորդավճար
                      </td>
                      <td className="p-3">2,000 ՀՀ դրամ</td>
                      <td className="p-3">2,000 ՀՀ դրամ</td>
                      <td className="p-3">2,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">
                        Գործող վարկային սահմանաչափի ավելացման հայտի ուսումնասիրման միջնորդավճար
                      </td>
                      <td className="p-3">1,000 ՀՀ դրամ</td>
                      <td className="p-3">1,000 ՀՀ դրամ</td>
                      <td className="p-3">1,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Կանխիկի տրամադրման առավելագույն սահմանաչափ</td>
                      <td className="p-3">1,000,000 ՀՀ դրամ</td>
                      <td className="p-3">2,000,000 ՀՀ դրամ</td>
                      <td className="p-3">1,000,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Կանխիկացման գործարքների օրական առավելագույն քանակ</td>
                      <td className="p-3">10</td>
                      <td className="p-3">10</td>
                      <td className="p-3">10</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">
                        Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն գումարային սահմանաչափ
                      </td>
                      <td className="p-3" colSpan={3}>
                        Նվազագույնը 300,000 ՀՀ դրամ (կախված է ԱԳՄ-ից)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium" colSpan={4}>
                        Մեկ օրվա ընթացքում կանխիկացման գործարքների կամ սահմանաչափերի քանակի ավելացման միջնորդավճար քարտի գործողության ամբողջ ընթացքում.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium pl-6">
                        Կանխիկացման սահմանաչափի փոփոխություն մինչև 5մլն ՀՀ դրամի դեպքում
                      </td>
                      <td className="p-3">2,900 ՀՀ դրամ</td>
                      <td className="p-3">2,900 ՀՀ դրամ</td>
                      <td className="p-3">2,900 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium pl-6">
                        Կանխիկացման սահմանաչափի փոփոխություն 5 մլն ՀՀ դրամ և ավելի դեպքում
                      </td>
                      <td className="p-3">4,900 ՀՀ դրամ</td>
                      <td className="p-3">4,900 ՀՀ դրամ</td>
                      <td className="p-3">4,900 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">
                        Քարտով կատարված գործարքների բողոքարկման հայտ<sup>[12]</sup>
                      </td>
                      <td className="p-3">5,000 ՀՀ դրամ</td>
                      <td className="p-3">5,000 ՀՀ դրամ</td>
                      <td className="p-3">5,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">
                        Ժամկետը լրացած վճարային քարտի քարտային հաշվի սպասարկման վճար
                      </td>
                      <td className="p-3" colSpan={3}>
                        Ամսական 2,000 ՀՀ դրամ, իսկ միջոցների անբավարարության դեպքում՝ հաշվի մնացորդի չափով:
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: Այլ բանկերի քարտերի սակագներ */}
            <div className="border border-purple-100 rounded-2xl overflow-hidden shadow-sm bg-white">
              <div className="bg-[#FAF8FE] py-3 px-4 border-b border-purple-100 font-bold text-purple-900 text-xs">
                Այլ բանկերի կողմից թողարկված վճարային քարտերի սակագներ (բացառությամբ MIR համակարգի քարտերի)
              </div>
              <table className="w-full text-left border-collapse text-[11px]">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-gray-800 font-bold">
                    <th className="p-3 w-1/2">Մատուցվող ծառայություններ</th>
                    <th className="p-3 w-1/2">
                      ԱրՔա համակարգի անդամ չհանդիսացող, H2H կապուղով ԱրՔա համակարգի հետ չաշխատող բանկերի կողմից թողարկված քարտերով (բացառությամբ MIR համակարգի քարտերի) կանխիկացում
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 font-medium">Բանկի բանկոմատներից կանխիկացում</td>
                    <td className="p-3">1.5 % min 1,000 ՀՀ դրամ սպասարկման միջնորդավճար</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Բանկի POS-տերմինալներից կանխիկացում</td>
                    <td className="p-3">3 %, min 2,000 ՀՀ դրամ սպասարկման միջնորդավճար</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Table 3: Virtual Terminals (Card to Card) */}
            <div className="border border-purple-100 rounded-2xl overflow-hidden shadow-sm bg-white">
              <div className="bg-[#FAF8FE] py-3 px-4 border-b border-purple-100 font-bold text-purple-900 text-xs">
                Բանկի վիրտուալ տերմինալների միջոցով տեղական՝ լոկալ, քարտից-քարտ (card-to-card) փոխանցումների սպասարկման միջնորդավճար
              </div>
              <table className="w-full text-left border-collapse text-[11px]">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-gray-800 font-bold">
                    <th className="p-3 w-3/4">Բանկի տերմինալների միջոցով</th>
                    <th className="p-3 w-1/4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 font-medium">Բանկի կողմից թողարկված քարտերով իրականացվող գործարքներ</td>
                    <td className="p-3 font-bold">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">
                      ԱրՔա անդամ և H2H միացումով ԱրՔա պրոցեսինգային կենտրոնի հետ աշխատող բանկերի կողմից թողարկված քարտերով
                    </td>
                    <td className="p-3 font-bold">0.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Table 4: Visa Direct & Money Send */}
            <div className="border border-purple-100 rounded-2xl overflow-hidden shadow-sm bg-white">
              <div className="bg-[#FAF8FE] py-3 px-4 border-b border-purple-100 font-bold text-purple-900 text-xs">
                Բանկի վիրտուալ տերմինալների միջոցով Visa Direct և Money Send ծառայության սպասարկման միջնորդավճար
              </div>
              <div className="p-3 bg-gray-50 font-semibold border-b border-gray-100">
                Բանկի Arca, Visa և Mastercard քարտերից փոխանցման սակագին
              </div>
              <table className="w-full text-left border-collapse text-[11px]">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-gray-800 font-bold">
                    <th className="p-3 w-1/2">Visa Direct</th>
                    <th className="p-3 w-1/2">Mastercard Money Send</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3">
                      1.0 % (սպասարկման միջնորդավճար) + Բանկի տվյալ քարտի համար գործող card-to-card միջնորդավճար նվազագույնը 1,000 ՀՀ դրամ
                    </td>
                    <td className="p-3">
                      1.0 % (սպասարկման միջնորդավճար) + Բանկի տվյալ քարտի համար գործող card-to-card միջնորդավճար նվազագույնը 1,000 ՀՀ դրամ
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Table 5: Limits and Transactions */}
            <div className="border border-purple-100 rounded-2xl overflow-hidden shadow-sm bg-white">
              <div className="bg-[#FAF8FE] py-3 px-4 border-b border-purple-100 font-bold text-purple-900 text-xs">
                Քարտից մեկ օրվա ընթացքում իրականացվող գործարքների սահմանաչափ և գործարքների քանակ
              </div>
              <table className="w-full text-left border-collapse text-[11px]">
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 font-medium w-2/3" rowSpan={4}>
                      Մեկ գործարքի առավելագույն սահմանաչափ
                    </td>
                    <td className="p-3">250,000 ՀՀ դրամ</td>
                  </tr>
                  <tr><td className="p-3">500 ԱՄՆ դոլար</td></tr>
                  <tr><td className="p-3">400 Եվրո</td></tr>
                  <tr><td className="p-3">6,000 Ռուբլի</td></tr>

                  <tr>
                    <td className="p-3 font-medium">
                      Մեկ հաճախորդի՝ տվյալ վճարային համակարգով գործարքների քանակի առավելագույն օրական սահմանաչափ
                    </td>
                    <td className="p-3 font-bold">5</td>
                  </tr>

                  <tr>
                    <td className="p-3 font-medium" rowSpan={4}>
                      Մեկ հաճախորդի՝ տվյալ վճարային համակարգով գործարքների ծավալի օրական առավելագույն սահմանաչափ
                    </td>
                    <td className="p-3">1,000,000 ՀՀ դրամ</td>
                  </tr>
                  <tr><td className="p-3">2,000 ԱՄՆ դոլար</td></tr>
                  <tr><td className="p-3">1,600 Եվրո</td></tr>
                  <tr><td className="p-3">26,000 Ռուբլի</td></tr>
                </tbody>
              </table>
            </div>

            {/* Footnotes Section */}
            <div className="bg-slate-50 p-6 rounded-2xl space-y-3 text-[10px] text-gray-500 leading-relaxed border border-gray-100">
              <p>
                <sup>[1]</sup> MasterCard Standard, Visa Classic, MasterCard Gold, Visa Gold և VISA Infinite տեսակի վճարային քարտերը տրամադրվում են ֆիզիկական անձանց, իսկ Visa Business տեսակի վճարային քարտերը՝ իրավաբանական անձանց:
              </p>
              <p>
                Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ վճարային քարտերի քարտային հաշիվներով (առանց վճարային քարտի առկայության) իրականացվող ցանկացած գործարքի համար գործում է սույն գլխով սահմանված՝ վճարային քարտերի համար սահմանված սակագները (Սակագինը կիրառվում է միայն 01/06/2018թ.-ից ներառյալ տրամադրվող վճարային քարտերի համար):
              </p>
              <p>
                Աշխատավարձային վճարային քարտերի տրամադրման և սպասարկման սակագները սահմանվում են քարտապանի գործատուի հետ կնքված պայմանագրով: Բանկի Վարչության որոշմամբ կարող են սահմանվել վճարային քարտերի տրամադրման այլ պայմաններ և սակագներ:
              </p>
              <p><sup>[2]</sup> Visa Gold քարտերի թողարկումը դադարեցվել է 25.11.2024թ.-ից:</p>
              <p><sup>[3]</sup> Քարտի 5 տարվա սպասարկման վճարը գանձվում է միանվագ՝ քարտի բացման պահին:</p>
              <p>
                <sup>[4]</sup> Օտարերկրյա քաղաքացիների համար գործում է նշված սակագնի հնգապատիկը, ընդ որում լրացուցիչ քարտերը կտրամադրվեն նախապես երեք տարվա միջնորդավճարը վճարելու պայմանով:
              </p>
              <p><sup>[5]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար 1%:</p>
              <p><sup>[6]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար 1.5%:</p>
              <p><sup>[7]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար 1.5 % min 2,500 ՀՀ դրամ:</p>
              <p><sup>[8]</sup> Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ:</p>
              <p><sup>[9]</sup> Սակագինը գործում է նաև գործարքի մերժման դեպքում ուղարկված SMS հաղորդագրության համար՝ անկախ գործարքի գումարի չափից:</p>
              <p><sup>[10]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար 1%:</p>
              <p><sup>[11]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար 1.5%:</p>
              <p><sup>[12]</sup> Գանձվում է միայն այն դեպքում, երբ բողոքարկման գործընթացի արդյունքում պարզվել է, որ գործարքը կատարվել է հաճախորդի կողմից կամ հաճախորդի կողմից քարտի օգտագործման կանոնների խախտման հետևանքով:</p>
            </div>
          </div>
        )}
      </section>

      {/* 3. Background Image Banner */}
      <section 
        className="w-full h-[320px] md:h-[400px] bg-cover bg-center bg-no-repeat relative flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url('https://www.evoca.am/images-cache/cards/1/16131361092139/1920x527.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 max-w-3xl space-y-3">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight drop-shadow-md">
            Evocabank-ը կօգնի կառավարել քո
          </h2>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight drop-shadow-md">
            ժամանակն ու կատարել անվտանգ
          </h2>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight drop-shadow-md">
            գնումներ
          </h2>
        </div>
      </section>

      {/* 4. ԱՅԼ ՔԱՐՏԵՐ SWIPER SECTION */}
      <section className="max-w-7xl mx-auto px-16 pt-16 pb-20 relative">
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
}