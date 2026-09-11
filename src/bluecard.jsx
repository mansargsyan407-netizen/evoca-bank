import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Swiper component-ների և ոճերի ներմուծում
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

export default function BlueCard() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="w-full min-h-screen bg-white text-gray-800 font-sans">
      {/* 1. Header (Նավիգացիա) */}
      <header className="border-b text-xs text-gray-600">
        <div className="bg-purple-700 text-white text-xs">
          <div className="max-w-7xl mx-auto flex space-x-8 px-4 py-2.5">
            <span className="bg-purple-900 px-3 py-1 rounded font-medium cursor-pointer">Քարտեր</span>
            <span className="cursor-pointer hover:text-gray-200">Քարտերի տրամադրում և սպասարկում</span>
            <span className="cursor-pointer hover:text-gray-200">Սոցիալական ապահովության վճարային քարտեր</span>
            <span className="cursor-pointer hover:text-gray-200">Evoca Benefits</span>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="bg-slate-50 py-12 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-md space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">Visa Digital</h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              Պատվիրիր Evoca Digital քարտը հիմա EvocaTOUCH հավելվածով, և քարտը կակտիվանա րոպեների ընթացքում:
            </p>
          </div>
          <div className="mt-8 md:mt-0 relative">
            <img 
              src="https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png" 
              alt="Visa Digital Card" 
              className="w-80 rounded-2xl shadow-2xl transform rotate-1 hover:rotate-0 transition duration-300"
            />
          </div>
        </div>

        {/* Breadcrumb & Back */}
        <div className="max-w-6xl mx-auto mt-8 flex justify-between items-center text-xs text-gray-500">
          <button 
            onClick={() => window.history.back()} 
            className="flex items-center space-x-1 border rounded-full px-4 py-1.5 bg-white hover:bg-gray-50 transition"
          >
            <span>←</span> <span>Վերադառնալ</span>
          </button>
          <div className="space-x-1">
            <span>🏠</span> <span>›</span> <span>Անհատ</span> <span>›</span> <span>Քարտեր</span> <span>›</span> <span className="font-semibold text-gray-700">Visa Digital</span>
          </div>
        </div>
      </section>

      {/* 3. Details / Tab Switching Section */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        {/* Tabs */}
        <div className="border-b flex space-x-8 text-sm font-semibold mb-8">
          <button 
            onClick={() => setActiveTab('about')}
            className={`pb-2 transition ${activeTab === 'about' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-500 hover:text-purple-600'}`}
          >
            Քարտի մասին
          </button>
          <button 
            onClick={() => setActiveTab('rates')}
            className={`pb-2 transition ${activeTab === 'rates' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-500 hover:text-purple-600'}`}
          >
            Visa Digital քարտի սակագներ
          </button>
        </div>

        {/* Tab 1: Քարտի մասին */}
        {activeTab === 'about' && (
          <div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left Text */}
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p className="font-semibold text-gray-900">
                  «Քարտս մոռացել եմ մյուս պայուսակում», «Էլի կորցրել եմ քարտս», «Քարտս մնաց բանկոմատի մեջ»...
                </p>
                <p>
                  Ծանո՞թ արտահայտություններ են: Evoca-ում դրանք այլևս ակտուալ չեն, քանի որ դու արդեն կարող ես ունենալ քո <span className="text-purple-600 font-bold">Evoca Digital</span> քարտը' նոր հնարավորություններով, դիզայնով և ոճով:
                </p>
                <p>
                  Evoca Digital քարտը քեզ հետ կլինի ցանկացած վայրում, ցանկացած ժամի, իսկ օնլայն տիրույթում քո բոլոր վճարումները և գնումները կլինեն անհամեմատ արագ, հարմար և ապահով:
                </p>
              </div>

              {/* Right Cards Info */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 space-y-4 shadow-sm">
                <div className="flex space-x-2 mb-4">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">֏</span>
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">$</span>
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">€</span>
                </div>

                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-2xl font-bold text-purple-600">2%</span>
                  <span className="text-xs text-gray-600 max-w-[200px] text-right">Կանխիկացում բանկի կանխիկացման կետերում</span>
                </div>

                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <span className="text-xs text-gray-400 block">մինչև</span>
                    <span className="text-2xl font-bold text-purple-600">4%</span>
                  </div>
                  <span className="text-xs text-gray-600 max-w-[200px] text-right">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք</span>
                </div>

                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-xl font-bold text-purple-600">1000 ֏</span>
                  <span className="text-xs text-gray-600">Միանվագ սպասարկում</span>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs text-gray-400 block">մինչև</span>
                    <span className="text-2xl font-bold text-purple-600">0.5%</span>
                  </div>
                  <span className="text-xs text-gray-600">Քեշբեք</span>
                </div>
              </div>
            </div>

            {/* How to Order Steps */}
            <div className="mt-10 space-y-6 text-sm text-gray-700">
              <p>
                <span className="text-purple-600 font-bold">Evoca Digital</span> քարտը Visa միջազգային վճարային համակարգի թվային քարտ է...
              </p>
              <p>Թվային քարտը կարող ես կցել նաև Apple Pay-ին և Google Pay-ին:</p>

              <h3 className="text-purple-600 font-bold text-base mt-6">Ինչպե՞ս պատվիրել Evoca Digital քարտ:</h3>
              
              <ol className="space-y-2 list-none">
                <li><span className="text-purple-600 font-bold">Քայլ 1.</span> Անհրաժեշտ է մուտք գործել EvocaTouch հավելված և անցնել Վճարային քարտերի բաժին</li>
                <li><span className="text-purple-600 font-bold">Քայլ 2.</span> Սեղմել ամենավերևի աջ անկյունի շրջանակի մեջ գտնվող «+» նշանը</li>
                <li><span className="text-purple-600 font-bold">Քայլ 3.</span> Ընտրել «Թվային քարտի բացման հայտ» հրահանգը</li>
                <li><span className="text-purple-600 font-bold">Քայլ 4.</span> Ընտրել թվային քարտի դիզայնը և հաստատել այն</li>
                <li><span className="text-purple-600 font-bold">Քայլ 5.</span> Ընտրել թվային քարտի արժույթը</li>
                <li><span className="text-purple-600 font-bold">Քայլ 6.</span> Վերբեռնել և կարդալ թվային քարտի պայմանները...</li>
                <li><span className="text-purple-600 font-bold">Քայլ 7.</span> Սեղմել «Պատվիրել իմ թվային քարտը» հրահանգը</li>
              </ol>

              <h3 className="text-purple-600 font-bold text-base mt-8">Ինչպե՞ս իմանալ պատվիրված թվային քարտի տվյալները:</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Քարտի համարը իմանալու համար սեղմել շրջանակի մեջ գտնվող «!» / «Մանրամասներ» նշանի վրա</li>
                <li>Սեղմել քարտի համարի աջ մասում գտնվող աչքի նշանի վրա</li>
                <li>CVV-ն իմանալու համար սեղմել թվային քարտի պատկերի CVV հատվածի աջ մասում գտնվող աչքի նշանի վրա...</li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 2: Visa Digital քարտի սակագներ */}
        {activeTab === 'rates' && (
          <div className="space-y-6">
            <div className="overflow-x-auto rounded-lg border border-purple-100 shadow-sm">
              <table className="w-full text-left text-xs text-gray-700 border-collapse">
                <thead>
                  <tr className="bg-purple-50 text-gray-900 border-b border-purple-100">
                    <th colSpan="3" className="p-3 text-center font-bold text-sm text-purple-900">
                      Visa Digital քարտեր
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50 w-1/3">Քարտի տեսակ</td>
                    <td colSpan="2" className="p-3">Visa Digital</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտի արժույթ</td>
                    <td colSpan="2" className="p-3">ՀՀ դրամ, ԱՄՆ դոլար, Եվրո</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտի սպասարկման վճար</td>
                    <td className="p-3">
                      <p>Միանվագ 1,000 ՀՀ դրամ</p>
                      <p className="mt-1 text-gray-500">24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար:</p>
                    </td>
                    <td className="p-3 font-medium text-gray-900 whitespace-nowrap border-l border-gray-100">
                      Միանվագ 50,000 ՀՀ դրամ
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտային հաշվի չնվազող մնացորդ</td>
                    <td colSpan="2" className="p-3">Չի սահմանվում</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">
                      Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք<sup>[1]</sup>
                    </td>
                    <td colSpan="2" className="p-3 font-medium">
                      ՀՀ դրամ` 4%, ԱՄՆ դոլար` 1%, Եվրո` 0.5%
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan="2" className="p-3 font-semibold bg-gray-50/50 align-top">
                      Քարտով կատարվող գործարքների դիմաց տրամադրվող cash back<sup>[2]</sup>
                    </td>
                    <td className="p-3">
                      ԱրՔա համակարգի բանկերի POS և vPOS տերմինալներով կատարված գործարքների դեպքում
                    </td>
                    <td className="p-3 font-medium border-l border-gray-100">
                      0.25 %, առավելագույնը` 5,000 ՀՀ դրամ
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-t border-gray-100">
                      Ոչ ԱրՔա համակարգի բանկերի (արտերկրյա) POS և vPOS տերմինալներով կատարված գործարքների դեպքում
                    </td>
                    <td className="p-3 font-medium border-t border-l border-gray-100">
                      0.5 %, առավելագույնը` 5,000 ՀՀ դրամ
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">PIN ծածկագրի թողարկում, վերաթողարկում</td>
                    <td colSpan="2" className="p-3 font-medium">2,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td rowSpan="3" className="p-3 font-semibold bg-gray-50/50 align-top">
                      Կանխիկացում<sup>[3]</sup>
                    </td>
                    <td className="p-3">Բանկի բանկոմատներից, Բանկի POS տերմինալների միջոցով</td>
                    <td className="p-3 font-medium border-l border-gray-100">
                      ՀՀ դրամ` 2%<br />ԱՄՆ դոլար` 2%<br />Եվրո` 2%
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-t border-gray-100">
                      ԱրՔա համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից և POS տերմինալների միջոցով
                    </td>
                    <td className="p-3 font-medium border-t border-l border-gray-100">2.5 %</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-t border-gray-100">
                      Այլ բանկերի բանկոմատներից և POS տերմինալների միջոցով
                    </td>
                    <td className="p-3 font-medium border-t border-l border-gray-100">2.5 %, min 1,500 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td rowSpan="3" className="p-3 font-semibold bg-gray-50/50 align-top">
                      Կանխիկացման օրական առավելագույն սահմանաչափեր
                    </td>
                    <td className="p-3 font-medium">Գումարային</td>
                    <td className="p-3 border-l border-gray-100">1,000,000 ՀՀ դրամ կամ համարդեք արտարժույթ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium border-t border-gray-100">Քանակային</td>
                    <td className="p-3 border-t border-l border-gray-100">10 հատ</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-t border-gray-100">
                      Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն գումարային սահմանաչափ
                    </td>
                    <td className="p-3 border-t border-l border-gray-100">
                      Նվազագույնը 300,000 ՀՀ դրամ (կախված է ԱԳՄ-ից)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">
                      Կանխիկի մուտքագրում Բանկի վճարային տերմինալներով
                    </td>
                    <td colSpan="2" className="p-3 font-bold text-gray-900">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">
                      Բանկի վճարային տերմինալներով կանխիկի մուտքագրման մեկ գործարքի առավելագույն սահմանաչափ
                    </td>
                    <td colSpan="2" className="p-3">100,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">
                      Կանխիկի մուտքագրում Բանկի և ԱրՔա անդամ այլ բանկերի բանկոմատներով (ATM CASH-IN)
                    </td>
                    <td colSpan="2" className="p-3 font-medium">0.6 %</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտային հաշվի համալրում անկանխիկ փոխանցմամբ</td>
                    <td colSpan="2" className="p-3 font-bold text-gray-900">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">
                      Ապրանքների և ծառայությունների դիմաց անկանխիկ վճարման միջնորդավճար
                    </td>
                    <td colSpan="2" className="p-3 font-bold text-gray-900">0</td>
                  </tr>
                  <tr>
                    <td rowSpan="2" className="p-3 font-semibold bg-gray-50/50 align-top">
                      Քարտից քարտ փոխանցումներ համակարգերի միջոցով Բանկի ներսում
                    </td>
                    <td colSpan="2" className="p-3">
                      <p>Նույն արժույթով քարտին` <span className="font-bold">0%</span></p>
                      <p className="mt-1">Տարբեր արժույթով քարտին` <span className="font-bold">0.3%</span></p>
                    </td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">
                      Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով ԱրՔա անդամ հանդիսացող և ԱրՔա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին
                    </td>
                    <td colSpan="2" className="p-3 font-medium">0.5%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտի գործողության կասեցում</td>
                    <td colSpan="2" className="p-3 font-bold text-gray-900">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">
                      Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)
                    </td>
                    <td colSpan="2" className="p-3 font-medium">500 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում</td>
                    <td colSpan="2" className="p-3 font-bold text-gray-900">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտի վերաթողարկում այլ պատճառներով</td>
                    <td colSpan="2" className="p-3 font-medium">2,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտային հաշվի ամսական քաղվածքի տրամադրում</td>
                    <td colSpan="2" className="p-3 font-bold text-gray-900">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">
                      Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար<sup>[4]</sup>
                    </td>
                    <td colSpan="2" className="p-3 font-bold text-gray-900">0</td>
                  </tr>
                  <tr>
                    <td rowSpan="2" className="p-3 font-semibold bg-gray-50/50 align-top">
                      Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում
                    </td>
                    <td className="p-3">Մինչև 5,000 ՀՀ դրամ գործարքներ<sup>[5]</sup></td>
                    <td className="p-3 font-medium border-l border-gray-100">20 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-t border-gray-100">5,000 ՀՀ դրամը գերազանցող գործարքներ</td>
                    <td className="p-3 font-bold border-t border-l border-gray-100">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">
                      Կանխիկացման գործարքների քանակի կամ սահմանաչափերի ավելացման միջնորդավճար
                    </td>
                    <td colSpan="2" className="p-3 font-bold text-gray-900">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">
                      Քարտով կատարված գործարքների բողոքարկման հայտ<sup>[6]</sup>
                    </td>
                    <td colSpan="2" className="p-3 font-medium">5,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Գերածախսի գծով տույժեր</td>
                    <td colSpan="2" className="p-3 font-medium">20% տարեկան</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Վարկային սահմանաչափի հնարավորություն</td>
                    <td colSpan="2" className="p-3">Առկա է՝ Համաձայն Վարկավորման պայմանների և սակագների</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footnotes / Տողատակի նշումներ */}
            <div className="space-y-2 text-[11px] text-gray-600 pt-2 leading-relaxed italic">
              <p><sup>[1]</sup> Տոկոսագումարները տրամադրվում են եռամսյակային:</p>
              <p>
                <sup>[2]</sup> Cash back-ը տրամադրվում է մինչև յուրաքանչյուր ամսվա 10-րդ աշխատանքային օրը ներառյալ: Եթե կուտակված Cash back-ի գումարը չի գերազանցում 100 ՀՀ դրամը կամ դրան համարժեք արտարժույթը,ապա այն չի վճարվում: Cash back չի տրամադրվում կոմունալ և դրանց հավասարեցված վճարումների, betting/gambling կայքերում, էլեկտրոնային դրամապանակների համալրման և ֆինանսական հաստատություններում կատարված վճարումների գործարքների դիմաց:
              </p>
              <p>
                <sup>[3]</sup> Digital քարտից կանխիկացումը կամ կանխիկի մուտքագրումը Բանկի և ԱրՔա անդամ այլ բանկերի բանկոմատներով (ATM CASH-IN) հնարավոր է միայն PIN ծածկագրի առկայության դեպքում:
              </p>
              <p><sup>[4]</sup> Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ:</p>
              <p>Նվազագույն մնացորդ, որի վրա իրականացվում է %-ների հաշվեգրում՝ 0 ՀՀ դրամ:</p>
              <p>
                <sup>[5]</sup> Սակագինը գործում է նաև գործարքի մերժման դեպքում ուղարկված SMS հաղորդագրության համար՝ անկախ գործարքի գումարի չափից:
              </p>
              <p>
                <sup>[6]</sup> Գանձվում է միայն այն դեպքում, երբ բողոքարկման գործընթացի արդյունքում պարզվել է, որ գործարքը կատարվել է հաճախորդի կողմից կամ հաճախորդի կողմից քարտի օգտագործման կանոնների խախտման հետևանքով:
              </p>
            </div>
          </div>
        )}
      </section>

      {/* 4. ԱՅԼ ՔԱՐՏԵՐ SWIPER SECTION */}
      <section className="max-w-7xl mx-auto px-16 pb-20 relative mt-12">
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