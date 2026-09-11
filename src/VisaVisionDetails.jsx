import React, { useState } from 'react';
import { ChevronLeft, Monitor, CreditCard, Globe } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

// Swiper component imports & styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function VisaVisionDetails() {
  const [activeTab, setActiveTab] = useState('about');
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-r from-purple-50 via-white to-purple-50 py-12 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Visa Vision</h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Կյանքին նայիր մանուշակագույն ակնոցով ու տես Visa Vision քարտի բազմաթիվ առավելությունները:
            </p>
          </div>
          <div className="flex justify-center relative">
            <img src="https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png" alt="Visa Vision" />
          </div>
        </div>
      </section>

      {/* BREADCRUMB & BACK BUTTON */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-xs text-gray-500">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-100 transition"
        >
          <ChevronLeft size={14} /> Վերադառնալ
        </button>
        <div className="flex items-center gap-2">
          <span>🏠</span> › <span>Անհատ</span> › <span>Քարտեր</span> › <span>Visa</span> › <span className="font-semibold text-gray-700">Visa Vision</span>
        </div>
      </div>

      {/* 2. TABS & MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex border-b border-gray-200 mb-8 justify-start">
          <button 
            onClick={() => setActiveTab('about')}
            className={`pb-3 px-6 text-sm font-bold transition ${activeTab === 'about' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Քարտի մասին
          </button>
          <button 
            onClick={() => setActiveTab('rates')}
            className={`pb-3 px-6 text-sm font-bold transition ${activeTab === 'rates' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Visa Vision քարտի սակագներ
          </button>
        </div>

        {/* TAB 1: ABOUT CONTENT (CENTERED) */}
        {activeTab === 'about' && (
          <div className="space-y-8 max-w-3xl mx-auto text-center">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              <span className="font-bold text-purple-700">Evocabank</span>-ը ներկայացնում է իր նոր <span className="font-bold text-purple-700">Visa Vision</span> քարտը, որի հետ դու կստանաս՝
            </p>

            <ul className="space-y-3 text-sm md:text-base text-gray-700 font-medium inline-block text-left mx-auto">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0"></span>
                <span className="font-bold">0% կանխիկացում Evoca-ի բոլոր բանկոմատներից</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0"></span>
                <span className="font-bold">Cashback բոլոր անկանխիկ վճարումներից</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0"></span>
                <span className="font-bold">Դրական մնացորդի վրա գումարի կուտակում</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0"></span>
                <span className="font-bold">Վարկային սահմանաչափ՝ քո ցանկությամբ</span>
              </li>
            </ul>

            <p className="text-sm text-gray-600 pt-2">
              Ի դեպ, քո քարտի դիզայնը դու ես ընտրում՝ մինիմալիստիկ սպիտակ, թե՞ ոճային սև:
            </p>

            {/* CARD IMAGES DISPLAY */}
            <div className="flex justify-center items-center gap-4 py-4">
              <img 
                src="https://www.evoca.am/file_manager/Visa%20Vision/v1.png" 
                alt="Visa Vision Black" 
                className="max-h-48 object-contain"
              />
              <img 
                src="https://www.evoca.am/file_manager/Visa%20Vision/v2.png" 
                alt="Visa Vision White" 
                className="max-h-48 object-contain"
              />
            </div>

            <p className="text-sm text-gray-600">
              Դե կարող ես ընտրել գույնն ու պատվիրել քո Visa Vision քարտը:
            </p>

            <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 text-purple-900 font-medium text-sm max-w-md mx-auto">
              Այո՛, այս ամենն իրական է:
            </div>

            <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                <span className="font-bold text-purple-700">Vision</span> քարտը <span className="font-bold">Visa Rewards</span> տեսակի քարտ է: Անկախ մնացորդի չափից՝ դրամային քարտի վրա դու կուտակում ես տարեկան <span className="font-bold text-purple-700">4%</span> գումար, դոլարային քարտերի դեպքում՝ <span className="font-bold text-purple-700">1%</span>, իսկ Եվրոյով՝ <span className="font-bold text-purple-700">0.5%</span>:
              </p>
              <p>
                Բայց այսքանով քարտի առավելությունները չեն ավարտվում:
              </p>
              <p>
                Կատարիր անկանխիկ գնումներ ու վճարումներ քո Visa Vision քարտով և ստացիր <span className="font-bold text-purple-700">0.25% cashback</span> տեղական գործարքների համար, և <span className="font-bold text-purple-700">0.5% cashback</span> արտասահմանյան գործարքների համար:
              </p>
              <p>
                <span className="font-bold text-purple-700">Visa Vision</span> քարտը գործում է ամենուր, որտեղ կարելի է վճարել Visa տեսակի քարտերով՝ <span className="font-bold">թե՛ Հայաստանում, թե՛ Հայաստանից դուրս՝ 200-ից ավել երկրներում:</span>
              </p>
            </div>

            {/* FEATURES GRID */}
            <div className="pt-6">
              <h3 className="font-bold text-purple-800 mb-6 text-sm md:text-base">
                <span className="text-purple-700">Evoca Vision</span> քարտով կարելի է կատարել՝
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border border-gray-100 rounded-xl bg-white shadow-sm text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center">
                    <Monitor size={24} />
                  </div>
                  <h4 className="font-bold text-xs text-gray-800">Օնլայն գնումներ</h4>
                  <p className="text-[11px] text-gray-500">պարզ, անվտանգ և արագ վճարման միջոց</p>
                </div>
                <div className="p-4 border border-gray-100 rounded-xl bg-white shadow-sm text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center">
                    <CreditCard size={24} />
                  </div>
                  <h4 className="font-bold text-xs text-gray-800">Բանկոմատով կանխիկացում</h4>
                  <p className="text-[11px] text-gray-500">0% կանխիկացում Evoca բանկոմատներով</p>
                </div>
                <div className="p-4 border border-gray-100 rounded-xl bg-white shadow-sm text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center">
                    <Globe size={24} />
                  </div>
                  <h4 className="font-bold text-xs text-gray-800">Գնումներ և cashback ողջ աշխարհում</h4>
                  <p className="text-[11px] text-gray-500">մինչև 0.5% cashback բոլոր անկանխիկ գնումներից</p>
                </div>
              </div>
            </div>

            {/* HOW TO ORDER SECTION */}
            <div className="pt-6 space-y-4">
              <h3 className="text-lg font-extrabold text-purple-800">Ինչպե՞ս պատվիրել քարտը:</h3>
              <p className="text-sm text-gray-700">
                <span className="font-bold text-purple-700">Evoca Vision</span> քարտը կարող ես պատվիրել՝
              </p>
              <ul className="space-y-2 text-sm text-gray-700 inline-block text-left mx-auto list-disc pl-5">
                <li>Evocabank-ի ցանկացած մասնաճյուղում</li>
                <li>EvocaTOUCH հավելվածի միջոցով</li>
                <li>evoca.am կայքում</li>
              </ul>
              <p className="text-xs text-gray-500 pt-2">
                Քարտը ստանալու համար անհրաժեշտ է անձնագիր ու սոց․ քարտ կամ Նույնականացման քարտ:
              </p>
            </div>

            {/* USAGE & FEES SECTION */}
            <div className="pt-6 space-y-6">
              <div>
                <h3 className="text-base font-bold text-purple-800 mb-2">Որտե՞ղ կարելի է օգտագործել քարտը:</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  <span className="font-bold text-purple-700">Evoca Vision</span> քարտով կարող ես վճարել խանութներում, սրճարաններում, զվարճանքի կենտրոններում, սուպերմարկետներում՝ ինչպես ՀՀ տարածքում, այնպես էլ՝ ՀՀ տարածքից դուրս: Այս քարտով կարելի է նաև կատարել օնլայն գնումներ՝ աշխարհի ցանկացած կետից:
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-purple-800 mb-2">Որքա՞ն է քարտի սպասարկման վճարը:</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Քարտի ամսական սպասարկման վճարը կազմում է <span className="font-bold text-gray-800">600 ՀՀ դրամ</span>:
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: RATES CONTENT (FULL DATA FROM IMAGES) */}
        {activeTab === 'rates' && (
          <div className="bg-white rounded-2xl border border-gray-100 p-4 md:p-6 shadow-sm max-w-5xl mx-auto space-y-6">
            <h3 className="text-xl font-bold text-purple-900 text-center mb-6">Visa Vision քարտեր</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-purple-800 bg-purple-50/70">
                    <th className="py-3 px-4 font-bold border-b border-purple-100">Ծառայություն / Պարամետր</th>
                    <th className="py-3 px-4 font-bold border-b border-purple-100">Պայմաններ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Քարտի տեսակ</td>
                    <td className="py-3 px-4 font-semibold">Visa Rewards</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Քարտի արժույթ</td>
                    <td className="py-3 px-4">ՀՀ դրամ, ԱՄՆ դոլար, Եվրո</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Visa Vision քարտի սպասարկման վճար</td>
                    <td className="py-3 px-4 space-y-2">
                      <div>Տարեկան 6500 ՀՀ դրամ</div>
                      <div>
                        Ամսական 600 ՀՀ դրամ (Ամսական սպասարկման վճարով քարտի պատվեր հնարավոր է իրականացնել միայն <span className="text-purple-600 underline cursor-pointer">Բանկի մասնաճյուղերում</span>)
                      </div>
                      <div className="flex justify-between items-center pt-1 border-t border-gray-100">
                        <span>24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար</span>
                        <span className="font-semibold text-right pl-2">45,000 ՀՀ դրամ<sup>[1]</sup></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Քարտապանին այլ արժույթով Visa Classic քարտ՝ Նվեր ցանկության դեպքում / Լրացուցիչ քարտ /</td>
                    <td className="py-3 px-4">Անվճար, առանց տարեկան սպասարկման վճարի:</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Նույն հաշվեհամարին կից քարտ Visa Vision քարտի սպասարկման վճար</td>
                    <td className="py-3 px-4">Ամսական 300 ՀՀ դրամ: Օտարերկրյա անձանց համար գործում է միանվագ 225,000 ՀՀ դրամ սակագին:</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Visa Classic քարտի տրամադրում Visa Vision քարտապանի ընկերոջը՝ Նվեր ցանկության դեպքում</td>
                    <td className="py-3 px-4">Անվճար, իսկ օտարերկրյա անձանց համար՝ 75,000 ՀՀ դրամ միանվագ</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Քարտային հաշվի չնվազող մնացորդ</td>
                    <td className="py-3 px-4">չի սահմանվում</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք<sup>[2]</sup></td>
                    <td className="py-3 px-4 font-semibold">ՀՀ դրամ՝ 4%, ԱՄՆ դոլար՝ 1%, Եվրո՝ 0.5%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Քարտով կատարվող գործարքների դիմաց տրամադրվող cash back<sup>[3]</sup></td>
                    <td className="py-3 px-4 space-y-2">
                      <div className="flex justify-between border-b border-gray-100 pb-1">
                        <span>ԱրՔա համակարգի բանկերի POS և vPOS տերմինալներով կատարված գործարքների դեպքում</span>
                        <span className="font-semibold text-right pl-2">0.25 %, առավելագույնը՝ 5,000 ՀՀ դրամ</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span>Ոչ ԱրՔա համակարգի բանկերի (արտերկրյա) POS և vPOS տերմինալներով կատարված գործարքների դեպքում</span>
                        <span className="font-semibold text-right pl-2">0.5 %, առավելագույնը՝ 5,000 ՀՀ դրամ</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Կանխիկացում<sup>[4]</sup></td>
                    <td className="py-3 px-4 space-y-3">
                      <div>
                        <div className="font-medium text-purple-900 mb-1">Բանկի բանկոմատներից, քարտային հաշվից, Բանկի POS տերմինալների միջոցով՝</div>
                        <ul className="list-disc pl-5 space-y-1 text-xs">
                          <li>Ամսական մինչև 2,000,000 ՀՀ դրամ (ներառյալ)՝ Անվճար,</li>
                          <li>2,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ՝ 0.2 %</li>
                          <li>POS տերմինալների միջոցով՝ 0.2 %</li>
                          <li>ԱՄՆ դոլար՝ 0.5 %</li>
                          <li>Եվրո՝ 0.5 %</li>
                        </ul>
                      </div>
                      <div className="flex justify-between border-t border-gray-100 pt-2">
                        <span>ԱրՔա համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից և POS տերմինալների միջոցով</span>
                        <span className="font-semibold text-right pl-2">1%</span>
                      </div>
                      <div className="flex justify-between border-t border-gray-100 pt-2">
                        <span>Այլ բանկերի բանկոմատներից և POS-տերմինալների միջոցով</span>
                        <span className="font-semibold text-right pl-2">1.5 %, min 1,500 ՀՀ դրամ</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Կանխիկացման օրական առավելագույն սահմանաչափեր</td>
                    <td className="py-3 px-4 space-y-2">
                      <div className="flex justify-between border-b border-gray-100 pb-1">
                        <span>Գումարային</span>
                        <span className="font-semibold text-right pl-2">1,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-1">
                        <span>Քանակային</span>
                        <span className="font-semibold text-right pl-2">10 հատ</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span>Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն գումարային սահմանաչափ</span>
                        <span className="font-semibold text-right pl-2">Նվազագույնը 300,000 ՀՀ դրամ (կախված է ԱԳՄ-ից)</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Կանխիկի մուտքագրում Բանկի վճարային տերմինալներով</td>
                    <td className="py-3 px-4 font-semibold">0</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Բանկի վճարային տերմինալներով կանխիկի մուտքագրման մեկ գործարքի առավելագույն սահմանաչափ</td>
                    <td className="py-3 px-4 font-semibold">100,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Կանխիկի մուտքագրում Բանկի և ԱրՔա անդամ այլ բանկերի բանկոմատներով (ATM CASH-IN)</td>
                    <td className="py-3 px-4 font-semibold">0.6 %</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Քարտային հաշվի համալրում անկանխիկ փոխանցմամբ</td>
                    <td className="py-3 px-4 font-semibold">0</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Ապրանքների և ծառայությունների դիմաց անկանխիկ վճարման միջնորդավճար</td>
                    <td className="py-3 px-4 font-semibold">0</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Քարտից քարտ փոխանցումներ բանկոմատների միջոցով</td>
                    <td className="py-3 px-4 space-y-1">
                      <div className="flex justify-between border-b border-gray-100 pb-1">
                        <span>Բանկի հաճախորդների օգտին`</span>
                        <span className="font-semibold text-right pl-2">0.3 %</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span>«ԱրՔա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՔա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին`</span>
                        <span className="font-semibold text-right pl-2">0.5%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում</td>
                    <td className="py-3 px-4 space-y-1">
                      <div className="flex justify-between border-b border-gray-100 pb-1">
                        <span>Նույն արժույթով քարտին`</span>
                        <span className="font-semibold text-right pl-2">0%</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span>Տարբեր արժույթով քարտին`</span>
                        <span className="font-semibold text-right pl-2">0.3%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով «ԱրՔա» համակարգի անդամ հանդիսացող այլ բանկերի և ԱրՔա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին`</td>
                    <td className="py-3 px-4 font-semibold">0.5%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Քարտի գործողության կասեցում</td>
                    <td className="py-3 px-4 font-semibold">0</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)</td>
                    <td className="py-3 px-4 font-semibold">500 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում</td>
                    <td className="py-3 px-4 font-semibold">0</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Քարտի վերաթողարկում կորստի կամ վնասվելու դեպքում</td>
                    <td className="py-3 px-4 font-semibold">2,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Նոր PIN ծածկագրի գեներացում</td>
                    <td className="py-3 px-4 font-semibold">1,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Քարտային հաշվի ամսական քաղվածքի տրամադրում</td>
                    <td className="py-3 px-4 font-semibold">0</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար<sup>[5]</sup></td>
                    <td className="py-3 px-4 font-semibold">0</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում</td>
                    <td className="py-3 px-4 space-y-1">
                      <div className="flex justify-between border-b border-gray-100 pb-1">
                        <span>Մինչև 5,000 ՀՀ դրամ գործարքներ<sup>[6]</sup></span>
                        <span className="font-semibold text-right pl-2">20 ՀՀ դրամ</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span>5,000 ՀՀ դրամը գերազանցող գործարքներ</span>
                        <span className="font-semibold text-right pl-2">0</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Կանխիկացման գործարքների քանակի կամ սահմանաչափերի ավելացման միջնորդավճար</td>
                    <td className="py-3 px-4 font-semibold">0</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Քարտով կատարված գործարքների բողոքարկման հայտ<sup>[7]</sup></td>
                    <td className="py-3 px-4 font-semibold">5,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Գերածախսի գծով տույժեր</td>
                    <td className="py-3 px-4 font-semibold">20% տարեկան</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium bg-gray-50/30">Վարկային սահմանաչափի հնարավորություն</td>
                    <td className="py-3 px-4 font-semibold">Առկա է՝ Համաձայն Վարկավորման պայմանների և սակագների</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* FOOTNOTES SECTION */}
            <div className="mt-8 border-t border-gray-200 pt-6 text-[11px] md:text-xs text-gray-500 space-y-3 leading-relaxed">
              <p>
                <sup>[1]</sup> Քարտի 5 տարվա սպասարկման վճարը գանձվում է միանվագ՝ քարտի բացման պահին:
              </p>
              <p>
                <sup>[2]</sup> Տոկոսագումարները տրամադրվում են եռամսյակային: Նվազագույն մնացորդ, որի վրա իրականացվում է %-ների հաշվեգրում՝ 0 ՀՀ դրամ:
              </p>
              <p>
                <sup>[3]</sup> Cash back-ը տրամադրվում է մինչև յուրաքանչյուր ամսվա 10-րդ աշխատանքային օրը ներառյալ: Եթե կուտակված Cash back-ի գումարը չի գերազանցում 100 ՀՀ դրամը կամ դրան համարժեք արտարժույթը,ապա այն չի վճարվում: Cash back չի տրամադրվում կոմունալ և դրանց հավասարեցված վճարումների, betting/gambling կայքերում, էլեկտրոնային դրամապանակների համալրման և ֆինանսական հաստատություններում կատարված վճարումների գործարքների դիմաց:
              </p>
              <p>
                <sup>[4]</sup> Կանխիկացման սակագները գործում են նաև քարտին կից տրամադրված ցանկացած տեսակի այլ քարտի դեպքում:
              </p>
              <p>
                <sup>[5]</sup> Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ:
              </p>
              <p>
                <sup>[6]</sup> Սակագինը գործում է նաև գործարքի մերժման դեպքում ուղարկված SMS հաղորդագրության համար՝ անկախ գործարքի գումարի չափից:
              </p>
              <p>
                <sup>[7]</sup> Գանձվում է միայն այն դեպքում, երբ բողոքարկման գործընթացի արդյունքում պարզվել է, որ գործարքը կատարվել է հաճախորդի կողմից կամ հաճախորդի կողմից քարտի օգտագործման կանոնների խախտման հետևանքով:
              </p>
            </div>
          </div>
        )}
      </section>

      {/* 3. ԱՅԼ ՔԱՐՏԵՐ SWIPER SECTION */}
      <div className="max-w-6xl mx-auto px-6 pb-24 relative mt-12">
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

      {/* 4. ՕՆԼԱՅՆ ԵՎ ՄՈԲԱՅԼ ԲԱՆԿԻՆԳ BANNER */}
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

      {/* 5. FOOTER SECTION */}
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