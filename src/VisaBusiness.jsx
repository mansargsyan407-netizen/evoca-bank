import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export const cardsData = [
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

const VisaBusiness = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-100 via-purple-50 to-white py-12 px-6 md:px-16 relative overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Visa Business
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Գործուղման մեկնելիս Ձեր ներկայացուցչական ծախսերը կարող եք հոգալ Visa Business քարտով:
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src="https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png"
                alt="Visa Business Card"
                className="w-80 md:w-96 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Navigation Breadcrumb */}
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4 text-sm text-gray-500">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm hover:bg-gray-100 transition cursor-pointer text-gray-700 font-medium"
          >
            ← Վերադառնալ
          </button>
          <div className="flex items-center gap-2">
            <span>›</span>
            <span>Անհատ</span>
            <span>›</span>
            <span>Քարտեր</span>
            <span>›</span>
            <span>Visa</span>
            <span>›</span>
            <span className="text-purple-600 font-semibold">Visa Business</span>
          </div>
        </div>

        {/* Main Content & Tabs */}
        <main className="max-w-6xl mx-auto px-6 py-8">
          {/* Tabs Navigation */}
          <div className="flex border-b border-gray-200 mb-8 gap-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-3 font-semibold text-base border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'about'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Քարտի մասին
            </button>
            <button
              onClick={() => setActiveTab('rates')}
              className={`pb-3 font-semibold text-base border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'rates'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Սակագներ և դրույթներ
            </button>
            <button
              onClick={() => setActiveTab('tips')}
              className={`pb-3 font-semibold text-base border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'tips'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Օգտակար խորհուրդներ
            </button>
            <button
              onClick={() => setActiveTab('warning')}
              className={`pb-3 font-semibold text-base border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'warning'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Զգուշացում
            </button>
          </div>

          {/* TAB 1: ՔԱՐՏԻ ՄԱՍԻՆ */}
          {activeTab === 'about' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Իրավաբանական անձ և անհատ ձեռնարկատեր հաճախորդներին{' '}
                  <strong className="text-purple-700 font-bold">Evocabank</strong>-ն առաջարկում է{' '}
                  <strong className="text-purple-700 font-bold">Visa Business վճարային քարտեր</strong>, որոնք
                  հնարավորություն են տալիս առանց Բանկ այցելելու տնօրինել կազմակերպության դրամական միջոցները:
                </p>

                <p>
                  <strong className="text-purple-700 font-bold">Visa Business քարտը</strong> Visa
                  International միջազգային վճարահաշվարկային համակարգի չիպային քարտ է: Այն հարմարավետ գործիք
                  է Ձեր կազմակերպության ծախսերը արդյունավետ կառավարելու համար: Դուք կարող եք առանց Բանկ
                  այցելելու, բանկոմատի միջոցով <strong className="text-purple-700 font-bold">Visa Business</strong>{' '}
                  քարտից կանխիկացնել ընկերության դրամական միջոցները, կատարել օնլայն փոխանցումներ և
                  վճարումներ Հայաստանի տարածքում և արտասահմանյան երկրներում:
                </p>

                <p>
                  <strong className="text-purple-700 font-bold">Evoca Visa Business քարտերն</strong> օժտված
                  են դրամական միջոցների անվտանգությանապահովման բարձր մակարդակով: Սրանք միջազգային payWave
                  տեխնոլոգիայով աշխատող չիպային քարտեր են, որի շնորհիվ սպասարկման կետերում անկանխիկ
                  վճարումներ կատարելիս' քարտը հատուկ վճարային տերմինալների մեջ տեղադրելու անհրաժեշտություն
                  չի առաջանում:
                </p>

                <p className="pt-4">
                  <strong className="text-purple-700 font-bold">Evoca Visa Business քարտերն ունեն վարկային գիծ ստանալու հնարավորություն</strong>{' '}
                  (մենք վարկային գծի տրամադրման հրապարակային առաջարկ չենք ներկայացնում, սակայն Ձեր դիմումի
                  ներկայացման դեպքում մեր Լիազոր մարմնի որոշմամբ կարող ենք վարկային գիծ տրամադրել' ներքին
                  ակտերով սահմանված պայմաններով և Ձեզ հետ փոխադարձ կնքված պայմանագրի հիմքերով):
                </p>

                <p className="text-purple-800 font-semibold pt-2">
                  Քարտի պատվիրման համար անհրաժեշտ է այցելել Բանկի Գլխամասային գրասենյակ կամ ցանկացած
                  մասնաճյուղ:
                </p>
              </div>

              {/* Sidebar Info Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-50 h-fit space-y-6">
                <div className="flex justify-end gap-2 text-white font-semibold mb-4">
                  <span className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-xs shadow">֏</span>
                  <span className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-xs shadow">$</span>
                  <span className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-xs shadow">€</span>
                  <span className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-xs shadow">₽</span>
                </div>

                <div className="divide-y divide-gray-100">
                  <div className="py-4 flex justify-between items-center">
                    <span className="text-3xl font-extrabold text-purple-700">0.2%</span>
                    <span className="text-right text-xs text-gray-600 max-w-[200px]">
                      Կանխիկացում բանկի կանխիկացման կետերում
                    </span>
                  </div>

                  <div className="py-4 flex justify-between items-center">
                    <span className="text-3xl font-extrabold text-purple-700">0.8%</span>
                    <span className="text-right text-xs text-gray-600 max-w-[200px]">
                      Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում
                    </span>
                  </div>

                  <div className="py-4 flex justify-between items-center">
                    <div className="text-left">
                      <span className="text-xs text-gray-400 block">min 1,500 ֏</span>
                      <span className="text-3xl font-extrabold text-purple-700">1%</span>
                    </div>
                    <span className="text-right text-xs text-gray-600 max-w-[200px]">
                      Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում
                    </span>
                  </div>

                  <div className="py-4 flex justify-between items-center">
                    <span className="text-2xl font-extrabold text-purple-700">10,000 ֏</span>
                    <span className="text-right text-xs text-gray-600 max-w-[200px]">
                      Տարեկան սպասարկում
                    </span>
                  </div>

                  <div className="py-4 flex justify-between items-center">
                    <span className="text-2xl font-extrabold text-purple-700">30,000 ֏</span>
                    <span className="text-right text-xs text-gray-600 max-w-[200px]">
                      Տարեկան սպասարկում օտարերկրյա քաղաքացիների համար
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ՍԱԿԱԳՆԵՐ ԵՎ ԴՐՈՒՅԹՆԵՐ */}
          {activeTab === 'rates' && (
            <div className="space-y-10 text-xs md:text-sm">
              {/* Table 1: Վճարային քարտեր */}
              <div className="overflow-x-auto shadow-sm rounded-xl border border-gray-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-gray-800">
                      <th colSpan="5" className="p-4 text-center font-bold text-purple-700 text-base">
                        Վճարային քարտեր <sup>[1]</sup>
                      </th>
                    </tr>
                    <tr className="bg-purple-50/50 border-b border-gray-200 font-bold text-gray-800">
                      <th className="p-3 border-r border-gray-200 w-1/3">Մատուցվող ծառայություններ</th>
                      <th className="p-3 border-r border-gray-200 text-center">
                        MasterCard Standard /<br />Visa Classic
                      </th>
                      <th className="p-3 border-r border-gray-200 text-center">
                        MasterCard Gold / Visa Gold <sup>[2]</sup>
                      </th>
                      <th className="p-3 text-center">Visa Business</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr>
                      <td className="p-3 border-r font-medium">Քարտի տրամադրում</td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">Քարտի սպասարկում (Տարեկան)</td>
                      <td className="p-3 border-r text-center">5,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center">15,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">10,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">Քարտի սպասարկում (Ամսական)</td>
                      <td className="p-3 border-r text-center text-xs">
                        MasterCard Standard` 500 ՀՀ դրամ (Ամսական սպասարկման վճարով քարտի պատվեր հնարավոր է իրականացնել միայն <span className="text-purple-600 font-semibold">Բանկի մասնաճյուղերում</span>)
                      </td>
                      <td className="p-3 border-r text-center text-xs">
                        MasterCard Gold` 1,500 ՀՀ դրամ (Ամսական սպասարկման վճարով քարտի պատվեր հնարավոր է իրականացնել միայն <span className="text-purple-600 font-semibold">Բանկի մասնաճյուղերում</span>)
                      </td>
                      <td className="p-3 text-center">-</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">Շտապ թողարկում</td>
                      <td className="p-3 border-r text-center">10,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center">10,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">10,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">
                        24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար, ինչպես նաև ՀՀ-ում գրանցված ԱՁ և ԻՐԱԲ. անձանց համար <sup>[3]</sup>
                      </td>
                      <td className="p-3 border-r text-center">15,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center">45,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">30,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">Կից քարտի տրամադրում</td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">Կից քարտի տարեկան սպասարկում <sup>[4]</sup></td>
                      <td className="p-3 border-r text-center">3,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center">10,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">7,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">Քարտային հաշվի չնվազող մնացորդ</td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td colSpan="4" className="p-2 font-bold text-gray-800">
                        Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան %
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium pl-6">մինչև 5 մլն. ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center">0%</td>
                      <td className="p-3 border-r text-center">0%</td>
                      <td className="p-3 text-center">0%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium pl-6">5 մլն. ՀՀ դրամ և ավել</td>
                      <td className="p-3 border-r text-center">1%</td>
                      <td className="p-3 border-r text-center">1%</td>
                      <td className="p-3 text-center">1%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium pl-6">արտարժույթ</td>
                      <td className="p-3 border-r text-center">0%</td>
                      <td className="p-3 border-r text-center">0%</td>
                      <td className="p-3 text-center">0%</td>
                    </tr>

                    <tr className="bg-gray-50/50">
                      <td className="p-3 border-r font-medium">
                        Քարտերով կանխիկի տրամադրում Բանկի ATM-ով, քարտային հաշվից և POS տերմինալով <sup>[5]</sup>
                      </td>
                      <td className="p-3 border-r text-center text-xs">
                        <strong>ՀՀ դրամ՝</strong> Ամսական մինչև 1,000,000 ՀՀ դրամ (ներառյալ)` Անվճար,<br />
                        1,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ՝ 0.2%,<br />
                        POS տերմինալով՝ 0.2%
                      </td>
                      <td className="p-3 border-r text-center text-xs">
                        MasterCard Gold` Ամսական մինչև 2,000,000 ՀՀ դրամ (ներառյալ)` Անվճար,<br />
                        2,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ՝ 0.2%,<br />
                        POS տերմինալով՝ 0.2%<br />
                        Visa Gold` 0.2%
                      </td>
                      <td className="p-3 text-center">0.2%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium pl-6">ԱՄՆ դոլար և Եվրո</td>
                      <td className="p-3 border-r text-center" colSpan="2">0.5%</td>
                      <td className="p-3 text-center">0.5%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium pl-6">Այլ արտարժույթ</td>
                      <td className="p-3 border-r text-center" colSpan="2">0.3%</td>
                      <td className="p-3 text-center">0.3%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">
                        Քարտերով կանխիկի տրամադրում «ԱրՔա» համակարգի անդամ հանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով <sup>[6]</sup>
                      </td>
                      <td className="p-3 border-r text-center">0.8%</td>
                      <td className="p-3 border-r text-center">0.8%</td>
                      <td className="p-3 text-center">0.8%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">
                        Քարտերով կանխիկի տրամադրում օտարերկրյա բանկերի և «ԱրՔա» համակարգի անդամ չհանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով <sup>[7]</sup>
                      </td>
                      <td className="p-3 border-r text-center">1% min 1,500 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center">1% min 1,500 ՀՀ դրամ</td>
                      <td className="p-3 text-center">1% min 1,500 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">
                        Առևտրի կետերում Բանկի և այլ բանկերի POS տերմինալներով անկանխիկ գործարքների իրականացում
                      </td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">Քարտի գործողության կասեցում</td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">
                        Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)
                      </td>
                      <td className="p-3 border-r text-center">1,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center">1,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">1,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">
                        Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում
                      </td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">
                        Քարտի վերաթողարկում կորստի, վնասվելու կամ PIN ծածկագրի կորստի դեպքում
                      </td>
                      <td className="p-3 border-r text-center">3,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center">10,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">5,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">PIN ծածկագրի գեներացման հայտ</td>
                      <td className="p-3 border-r text-center">1,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center">1,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">1,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">Քարտային հաշվի ամսական քաղվածքի տրամադրում</td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 border-r text-center">0</td>
                      <td className="p-3 text-center">0</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">
                        Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար <sup>[8]</sup>
                      </td>
                      <td className="p-3 border-r text-center">1,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center">1,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">1,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">
                        Կանխիկի մուտքագրում «ԱրՔա» համակարգի անդամ հանդիսացող բանկերի ATM-ով (ATM CASH-IN)
                      </td>
                      <td className="p-3 border-r text-center">0.6 %</td>
                      <td className="p-3 border-r text-center">0.6 %</td>
                      <td className="p-3 text-center">0.6 %</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">
                        Գործարքի վերաբերյալ SMS հաղորդագրությունների ստացում <sup>[9]</sup>
                      </td>
                      <td className="p-3 border-r text-center text-xs" colSpan="3">
                        Մինչև 5,000 ՀՀ դրամ գործարքներ՝ <strong>20 ՀՀ դրամ</strong><br />
                        5,000 ՀՀ դրամը գերազանցող գործարքներ՝ <strong>0</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">Գերածախսի գծով տույժեր</td>
                      <td className="p-3 border-r text-center">20 % տարեկան</td>
                      <td className="p-3 border-r text-center">20 % տարեկան</td>
                      <td className="p-3 text-center">20 % տարեկան</td>
                    </tr>

                    <tr className="bg-gray-50/50">
                      <td colSpan="4" className="p-2 font-bold text-gray-800">
                        Քարտից քարտ փոխանցումներ
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="4" className="p-2 font-semibold text-gray-700 bg-gray-100/50 pl-4">
                        Բանկոմատների միջոցով
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium pl-6">Բանկի վճարային քարտին <sup>[10]</sup></td>
                      <td className="p-3 border-r text-center">0.3%</td>
                      <td className="p-3 border-r text-center">0.3%</td>
                      <td className="p-3 text-center">0.3%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium pl-6">
                        «ԱրՔա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՔա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին <sup>[11]</sup>
                      </td>
                      <td className="p-3 border-r text-center">0.5%</td>
                      <td className="p-3 border-r text-center">0.5%</td>
                      <td className="p-3 text-center">0.5%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium pl-6" rowSpan="2">
                        Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում
                      </td>
                      <td className="p-3 border-r text-center text-xs">Նույն արժույթով քարտին՝ 0%</td>
                      <td className="p-3 border-r text-center text-xs">Նույն արժույթով քարտին՝ 0%</td>
                      <td className="p-3 text-center text-xs">Նույն արժույթով քարտին՝ 0%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r text-center text-xs">Տարբեր արժույթով քարտերին՝ 0.3%</td>
                      <td className="p-3 border-r text-center text-xs">Տարբեր արժույթով քարտերին՝ 0.3%</td>
                      <td className="p-3 text-center text-xs">Տարբեր արժույթով քարտերին՝ 0.3%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium pl-6">
                        Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով «ԱրՔա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՔա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին
                      </td>
                      <td className="p-3 border-r text-center">0.5%</td>
                      <td className="p-3 border-r text-center">0.5%</td>
                      <td className="p-3 text-center">0.5%</td>
                    </tr>

                    <tr>
                      <td className="p-3 border-r font-medium">
                        Վարկային սահմանաչափի տրամադրման հայտի ուսումնասիրման միջնորդավճար
                      </td>
                      <td className="p-3 border-r text-center">2,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center">2,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">2,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">
                        Գործող վարկային սահմանաչափի ավելացման հայտի ուսումնասիրման միջնորդավճար
                      </td>
                      <td className="p-3 border-r text-center">1,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center">1,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">1,000 ՀՀ դրամ</td>
                    </tr>

                    <tr>
                      <td className="p-3 border-r font-medium">Կանխիկի տրամադրման առավելագույն սահմանաչափ</td>
                      <td className="p-3 border-r text-center">1,000,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center">2,000,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">1,000,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">
                        Կանխիկացման գործարքների օրական առավելագույն քանակ
                      </td>
                      <td className="p-3 border-r text-center">10</td>
                      <td className="p-3 border-r text-center">10</td>
                      <td className="p-3 text-center">10</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">
                        Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն գումարային սահմանաչափ
                      </td>
                      <td className="p-3 text-center" colSpan="3">
                        Նվազագույնը 300,000 ՀՀ դրամ (կախված է ԱԳՄ-ից)
                      </td>
                    </tr>

                    <tr className="bg-gray-50/50">
                      <td colSpan="4" className="p-2 font-bold text-gray-800">
                        Մեկ օրվա ընթացքում կանխիկացման գործարքների կամ սահմանաչափերի քանակի ավելացման միջնորդավճար (քարտի գործողության ամբողջ ընթացքում)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium pl-6">
                        Կանխիկացման սահմանաչափի փոփոխություն մինչև 5մլն ՀՀ դրամի դեպքում
                      </td>
                      <td className="p-3 border-r text-center">2 900 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center">2 900 ՀՀ դրամ</td>
                      <td className="p-3 text-center">2 900 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium pl-6">
                        Կանխիկացման սահմանաչափի փոփոխություն 5 մլն ՀՀ դրամ և ավելի դեպքում
                      </td>
                      <td className="p-3 border-r text-center">4 900 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center">4 900 ՀՀ դրամ</td>
                      <td className="p-3 text-center">4 900 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">
                        Քարտով կատարված գործարքների բողոքարկման հայտ <sup>[12]</sup>
                      </td>
                      <td className="p-3 border-r text-center">5,000 ՀՀ դրամ</td>
                      <td className="p-3 border-r text-center">5,000 ՀՀ դրամ</td>
                      <td className="p-3 text-center">5,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r font-medium">
                        Ժամկետը լրացած վճարային քարտի քարտային հաշվի սպասարկման վճար
                      </td>
                      <td className="p-3 text-center" colSpan="3">
                        Ամսական 2000 ՀՀ դրամ, իսկ միջոցների անբավարարության դեպքում՝ հաշվի մնացորդի չափով:
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: ՕԳՏԱԿԱՐ ԽՈՐՀՈՒՐԴՆԵՐ (Նկար 1 և Նկար 2) */}
          {activeTab === 'tips' && (
            <div className="space-y-8 text-gray-700 leading-relaxed text-sm">
              {/* SECTION 1: Քարտային վճարումներ կատարելիս անհրաժեշտ է հիշել */}
              <div className="space-y-3">
                <h3 className="font-bold text-purple-900 text-base">
                  Քարտային վճարումներ կատարելիս անհրաժեշտ է հիշել.
                </h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    Քարտերով կարող եք վճարումներ կատարել այն առևտրի ու սպասարկման կետերում, որտեղ փակցված է տվյալ քարտային համակարգի լոգոտիպը:
                  </li>
                  <li>
                    Քարտով վճարում կատարելիս՝ մինչև անդորրագիրը ստորագրելը, հավաստիացեք, որ անդորրագրում նշված գումարը համապատասխանում է ձեր գործարքի գումարին:
                  </li>
                  <li>
                    Քարտով վճարելիս միշտ պահեք քարտը ձեր տեսադաշտում:
                  </li>
                  <li>
                    Եթե հրաժարվում եք գնումից,ապա պահանջեք չեղյալ համարել (VOID) ձեր վճարումը և պահեք համապատասխան անդորրագիրը մինչև հերթական քաղվածքի ստացումը՝ համոզվելու, որ հաշվից գանձում չի կատարվել:
                  </li>
                </ul>
              </div>

              {/* SECTION 2: Խորհուրդներ արտերկիր մեկնողներին */}
              <div className="space-y-3">
                <h3 className="font-bold text-purple-900 text-base">
                  Խորհուրդներ արտերկիր մեկնողներին.
                </h3>
                <p className="italic font-medium text-gray-600">Նախքան մեկնելը՝</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    Ստուգեք ձեր քարտի գործողության ժամկետի ավարտը (expiry date):
                  </li>
                  <li>
                    Ստուգեք Ձեր հաշվին առկա դրամական միջոցների մնացորդը:
                  </li>
                  <li>
                    Գրի առեք ձեր քարտի 16-նիշանոց համարը և բոլոր այն հեռախոսահամարները, որոնցով կարող եք զանգահարել մեզ՝ արտերկրում ձեր քարտի կորստի կամ գողության դեպքում:
                  </li>
                  <li>
                    Ճշտեք մեզանից քարտով կատարվող վճարային սահմանաչափերի վերաբերյալ անհրաժեշտ տեղեկատվությունը: Նշված սահմանաչափերը ձեզ չբավարարելու դեպքում կարող եք դիմել մեզ՝ դրանք ավելացնելու նպատակով (սահմանաչափերի գերազանցման հետևանքով գործարքի մերժումից խուսափելու համար):
                  </li>
                </ul>
                <p className="text-xs text-gray-600 pt-2 bg-purple-50/50 p-4 rounded-xl border border-purple-100">
                  <strong className="text-gray-900">Նշում.</strong> Պահպանեք քարտով կատարված գործարքների անդորրագրերը և վերադառնալուց հետո համեմատեք դրանք քաղվածքի գործարքների հետ: Քարտային հաշվով կատարվող դրամական շարժը վերահսկելու նպատակով ակտիվացնում ենք SMS-տեղեկացում ծառայությունը (դուք կարող եք հրաժարվել նշված ծառայությունից՝ ձեր դիմումի համաձայն): Օնլայն վճարումներ իրականացնելիս կարող եք օգտվել 3D Secure ծառայությունից:
                </p>
              </div>

              {/* SECTION 3: Արտարժույթով գործառնություններ կատարելիս անհրաժեշտ է իմանալ */}
              <div className="space-y-3">
                <h3 className="font-bold text-purple-900 text-base">
                  Արտարժույթով գործառնություններ կատարելիս անհրաժեշտ է իմանալ.
                </h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    Քարտային գործառնությունների իրականացման ժամանակ արտարժույթի փոխարժեքները կարող են տարբերվել, որի համար մենք պատասխանատվություն չենք կրում:
                  </li>
                  <li>
                    «Արմենիան Քարդ» Վճարահաշվարկային համակարգի անդամ բանկերի սպասարկման կետերում և բանկոմատներում քարտային հաշվի արժույթից տարբերվող արժույթով գործարքներ կատարելիս որպես փոխարժեք կիրառվում է «Արմենիան Քարդ»-ի կողմից գործարքի հաշվանցման օրվա դրությամբ տվյալ արտարժույթի համար սահմանված մեր փոխարժեքը:
                  </li>
                  <li>
                    Այլ բանկերի սպասարկման կետերում և բանկոմատներում գործարքներ կատարելիս որպես փոխարժեք կիրառվում է Visa վճարահաշվարկային համակարգի կողմից գործարքի հաշվանցման օրվա դրությամբ տվյալ արտարժույթի համար սահմանված մեր փոխարժեքը:
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: ԶԳՈՒՇԱՑՈՒՄ (Նկար 3) */}
          {activeTab === 'warning' && (
            <div className="bg-red-50/60 p-6 rounded-2xl border border-red-100 text-gray-700 leading-relaxed text-sm space-y-4">
              <h3 className="font-bold text-red-900 text-base mb-2">
                Զգուշացում քարտապաններին
              </h3>
              <ul className="space-y-3 list-disc pl-5">
                <li>
                  Ապահովեք ձեր <strong className="text-purple-700">PIN ծածկագրի</strong> գաղտնիությունը (այն պետք է պահպանել գաղտնի և հասանելի չդարձնել այլ անձանց): PIN ծածկագրով կատարված բոլոր գործառնությունների պատասխանատվությունը կրում եք դուք: Մենք պատասխանատվություն չենք կրում ձեր PIN ծածկագիրը երրորդ անձանց հասանելի դառնալու հետևանքով վճարային քարտի ոչ օրինական և ձեր կողմից չարտոնված օգտագործման համար:
                </li>
                <li>
                  <strong className="text-purple-700">Քարտի կորստի կամ գողության դեպքում</strong> անմիջապես զանգահարեք մեզ (+374 10) 605555, 7777 հեռախոսահամարով կամ «Արմենիան Քարդ» վճարահաշվարկային համակարգի (+374 10) 592222 հեռախոսահամարով՝ հայտնելով քարտի ստացման դիմումի մեջ ձեր կողմից նշված գաղտնաբառը: Զանգից անմիջապես հետո քարտի գործողությունը կդադարեցվի:
                </li>
                <li>
                  <strong className="text-purple-700">Քարտի կորստի կամ գողության մասին</strong> ՄԵԶ տեղեկացնելու հետաձգումը կարող է հանգեցնել ձեր քարտով այլ անձանց կողմից գործարքների կատարմանը:
                </li>
                <li>
                  Մենք <strong className="text-purple-700">պատասխանատվություն չենք կրում</strong> ձեզ հասցրած այն վնասի համար, որը կատարվել է քարտը կորցնելու և մեզ հայտնելու միջև ընկած ժամանակահատվածում:
                </li>
                <li>
                  Դուք <strong className="text-purple-700">պատասխանատվություն եք կրում</strong> քարտով կատարված բոլոր գործառնությունների համար մինչև այն պահը, երբ տեղեկացնում եք մեզ կորստի կամ գողության պատճառով քարտի գործողությունը դադարեցնելու անհրաժեշտության մասին:
                </li>
              </ul>
            </div>
          )}
        </main>

        {/* Այլ քարտեր Swiper Section */}
        <div className="max-w-6xl mx-auto px-6 pb-24 relative">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Այլ քարտեր</h2>

          <button className="other-prev absolute left-0 top-[60%] -translate-y-1/2 z-10 text-purple-600 hover:text-purple-800 transition cursor-pointer">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="other-next absolute right-0 top-[60%] -translate-y-1/2 z-10 text-purple-600 hover:text-purple-800 transition cursor-pointer">
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
                    to={card.link || card.path}
                    className="flex flex-col items-center text-center cursor-pointer group/card block"
                  >
                    <div className="w-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover/card:scale-[1.03]">
                      <img
                        src={card.imgUrl || card.image}
                        alt={card.title || card.name}
                        className="w-full h-auto object-contain drop-shadow-lg"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm md:text-base group-hover/card:text-purple-700 transition-colors">
                      {card.title || card.name}
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
                Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է
                տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ։
              </p>

              <div>
                <button className="bg-white text-purple-900 px-6 py-2.5 rounded-full font-bold text-xs hover:bg-purple-50 transition shadow-md cursor-pointer">
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
      <footer className="w-full bg-[#f8f8fa] text-[#2d2d2d] pt-10 pb-6 px-6 border-t border-gray-100 text-xs relative">
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
            <p className="hover:text-purple-700 cursor-pointer">Dlibrary</p>
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
          <p className="max-w-2xl leading-normal">
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության,
            ինչպես նաև ռուսերեն և անգլերեն լեզուներով ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք
            առաջնորդվել հայերեն տարբերակով: Evocabank ՓԲԸ-ն պատասխանատվություն չի կրում իր
            ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստույգության և
            արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ
            կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
          </p>
          <div className="flex items-center gap-4 opacity-70">
            <span className="font-bold text-gray-500">fininfo</span>
            <span className="font-bold text-gray-500">abcfinance.am</span>
            <span className="font-bold text-gray-700 text-sm">arca</span>
          </div>
        </div>

        {/* Floating Chat */}
        <div className="fixed bottom-4 right-4 z-50 flex items-center">
          <button className="bg-[#6b21a8] text-white font-bold text-xs px-4 py-2 rounded-l-full shadow-lg hover:bg-purple-800 transition cursor-pointer">
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

export default VisaBusiness;