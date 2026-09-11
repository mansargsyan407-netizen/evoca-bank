import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Swiper CSS styles
import 'swiper/css';
import 'swiper/css/navigation';

const CardDetail = () => {
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

      {/* ================= HEADER / PURPLE SUB-NAV ================= */}
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
      <section className="bg-slate-50 px-16 py-12 flex justify-between items-center">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Mastercard World Digital</h1>
          <p className="text-gray-600 text-xs leading-relaxed">
            Mastercard World Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածում։ Պատվիրիր թվային քարտը հիմա և այն հասանելի կլինի քո հավելվածում հաշված րոպեների ընթացքում։
          </p>
        </div>
        <div>
          <img 
            src="https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png" 
            alt="Mastercard World Digital" 
            className="w-80 rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* ================= BREADCRUMBS ================= */}
      <div className="px-16 py-4 flex items-center gap-4 text-xs text-gray-500">
        <Link 
          to="/" 
          className="flex items-center gap-1 border border-gray-300 px-4 py-1.5 rounded-full text-gray-700 font-semibold hover:bg-gray-100 transition"
        >
          ← Վերադառնալ
        </Link>
        <div className="flex items-center gap-1">
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
          <span className="font-bold text-gray-800">Mastercard World Digital</span>
        </div>
      </div>

      {/* ================= DETAILS & TARIFFS SECTION ================= */}
      <section className="px-16 py-6 mb-12 max-w-7xl mx-auto">
        {/* Tabs Navigation */}
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
            Mastercard World քարտի սակագներ
          </button>
        </div>

        {/* Tab 1: Քարտի մասին */}
        {activeTab === 'about' && (
          <div className="flex justify-between gap-12 items-start">
            <div className="flex-1 text-xs leading-relaxed text-gray-700 space-y-4">
              <p>
                <b className="text-purple-900">Mastercard World Digital</b> քարտը քեզ հետ կլինի ցանկացած վայրում, ցանկացած ժամի, իսկ օնլայն տիրույթում քո բոլոր վճարումները և գնումները կլինեն անհամեմատ արագ, հարմար և ապահով:
              </p>
              <p>
                Թվային քարտի միջոցով կարող ես իրականացնել քարտային բոլոր տեսակի գործարքներ՝ միայն այն տարբերությամբ, որ քարտը քեզ մոտ կլինի ոչ թե ֆիզիկապես, այլ քո <b className="text-purple-900">EvocaTOUCH</b> հավելվածում:
              </p>
              <p>
                Թվային քարտը կարող ես կցել նաև Apple Pay-ին և Google Pay-ին:
              </p>
            </div>

            {/* Right Tariff Card Preview */}
            <div className="w-[420px] bg-indigo-50/40 p-6 rounded-2xl border border-indigo-100/50">
              <div className="flex gap-2 mb-6">
                <span className="w-7 h-7 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-xs">֏</span>
                <span className="w-7 h-7 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-xs">$</span>
                <span className="w-7 h-7 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-xs">€</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-center gap-4 pb-3 border-b border-gray-200">
                  <span className="text-xl font-extrabold text-purple-700 min-w-[60px]">2%</span>
                  <span className="text-gray-700 font-medium">Կանխիկացում բանկի կանխիկացման կետերում</span>
                </div>
                <div className="flex items-center gap-4 pb-3 border-b border-gray-200">
                  <span className="text-xl font-extrabold text-purple-700 min-w-[60px]">2.5%</span>
                  <span className="text-gray-700 font-medium">Կանխիկացում ԱրՔա համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից և POS տերմինալներից միջոցով</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-extrabold text-purple-700 min-w-[60px]">1000 ֏</span>
                  <span className="text-gray-700 font-medium">Միանվագ</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Mastercard World քարտի սակագներ */}
        {activeTab === 'tariffs' && (
          <div className="space-y-6 text-xs text-gray-800">
            <div className="overflow-x-auto border border-purple-100 rounded-lg shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-purple-50/50 text-purple-900 border-b border-purple-100">
                    <th colSpan="2" className="p-3 font-bold text-sm">Mastercard World Digital քարտեր</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50 w-1/3">Քարտի տեսակ</td>
                    <td className="p-3">Mastercard World Digital</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտի արժույթ</td>
                    <td className="p-3">ՀՀ դրամ, ԱՄՆ դոլար, Եվրո</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Mastercard World Digital քարտի սպասարկման վճար</td>
                    <td className="p-3 space-y-1">
                      <div>Միանվագ 1,000 ՀՀ դրամ</div>
                      <div className="text-gray-500 text-[11px]">24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար՝ միանվագ 50,000 ՀՀ դրամ</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտային հաշվի չնվազող մնացորդ</td>
                    <td className="p-3">չի սահմանվում</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք <sup>[1]</sup></td>
                    <td className="p-3 font-bold text-purple-700">0%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">PIN ծածկագրի թողարկում, վերաթողարկում</td>
                    <td className="p-3">2,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Կանխիկացում <sup>[2]</sup></td>
                    <td className="p-3 space-y-2">
                      <div className="grid grid-cols-2 gap-2 border-b border-gray-100 pb-2">
                        <span>Բանկի բանկոմատներից, Բանկի POS տերմինալների միջոցով</span>
                        <span className="font-semibold">ՀՀ դրամ` 2%, ԱՄՆ դոլար` 2%, Եվրո` 2%</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b border-gray-100 pb-2">
                        <span>ԱրՔա համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից և POS տերմինալների միջոցով</span>
                        <span className="font-semibold">2.5 %</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span>Այլ բանկերի բանկոմատներից և POS-տերմինալների միջոցով</span>
                        <span className="font-semibold">2.5 %, min 1,500 ՀՀ դրամ</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Կանխիկացման օրական առավելագույն սահմանաչափեր</td>
                    <td className="p-3 space-y-1">
                      <div><b>Գումարային՝</b> 1,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ</div>
                      <div><b>Քանակային՝</b> 10 հատ</div>
                      <div><b>Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն՝</b> Նվազագույնը 300,000 ՀՀ դրամ (կախված է ԱԳՄ-ից)</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Կանխիկի մուտքագրում Բանկի վճարային տերմինալներով</td>
                    <td className="p-3">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Բանկի վճարային տերմինալներով կանխիկի մուտքագրման մեկ գործարքի առավելագույն սահմանաչափ</td>
                    <td className="p-3">100,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Կանխիկի մուտքագրում Բանկի և ԱրՔա անդամ այլ բանկերի բանկոմատներով (ATM CASH-IN) <sup>[2]</sup></td>
                    <td className="p-3 font-semibold">0.6 %</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտային հաշվի համալրում անկանխիկ փոխանցմամբ</td>
                    <td className="p-3">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Ապրանքների և ծառայությունների դիմաց անկանխիկ վճարման միջնորդավճար</td>
                    <td className="p-3">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում</td>
                    <td className="p-3 space-y-1">
                      <div>Նույն արժույթով քարտին՝ <b>0%</b></div>
                      <div>Տարբեր արժույթով քարտին՝ <b>0.3%</b></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով ԱրՔա անդամ հանդիսացող և ԱրՔա համակարգի հետ H2H կապուղովաշխատող բանկերի վճարային քարտերին</td>
                    <td className="p-3 font-semibold">0.5%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտի գործողության կասեցում</td>
                    <td className="p-3">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)</td>
                    <td className="p-3">500 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում</td>
                    <td className="p-3">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտի վերաթողարկում այլ պատճառներով</td>
                    <td className="p-3">2,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտային հաշվի ամսական քաղվածքի տրամադրում</td>
                    <td className="p-3">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար <sup>[3]</sup></td>
                    <td className="p-3">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում</td>
                    <td className="p-3 space-y-1">
                      <div>Մինչև 5,000 ՀՀ դրամ գործարքներ <sup>[4]</sup>՝ <b>20 ՀՀ դրամ</b></div>
                      <div>5,000 ՀՀ դրամը գերազանցող գործարքներ՝ <b>0</b></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Կանխիկացման գործարքների քանակի կամ սահմանաչափերի ավելացման միջնորդավճար</td>
                    <td className="p-3">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Քարտով կատարված գործարքների բողոքարկման հայտ <sup>[5]</sup></td>
                    <td className="p-3">5,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Գերածախսի գծով տույժեր</td>
                    <td className="p-3 font-semibold text-red-600">20% տարեկան</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-gray-50/50">Վարկային սահմանաչափի հնարավորություն</td>
                    <td className="p-3">Առկա է՝ Համաձայն Վարկավորման պայմանների և սակագների</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footnotes */}
            <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-[11px] text-gray-600 border border-gray-200">
              <p><b>[1]</b> Տոկոսագումարները տրամադրվում են եռամսյակային:</p>
              <p><b>[2]</b> Digital քարտից կանխիկացումը կամ կանխիկի մուտքագրումը Բանկի և ԱրՔա անդամ այլ բանկերի բանկոմատներով (ATM CASH-IN) հնարավոր է միայն PIN ծածկագրի առկայության դեպքում:</p>
              <p><b>[3]</b> Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ:</p>
              <p><i>Նվազագույն մնացորդ, որի վրա իրականացվում է %-ների հաշվեգրում:</i></p>
              <p><b>[4]</b> Սակագինը գործում է նաև գործարքի մերժման դեպքում ուղարկված SMS հաղորդագրության համար՝ անկախ գործարքի գումարի չափից:</p>
              <p><b>[5]</b> Գանձվում է միայն այն դեպքում, երբ բողոքարկման գործընթացի արդյունքում պարզվել է, որ գործարքը կատարվել է հաճախորդի կողմից կամ հաճախորդի կողմից քարտի օգտագործման կանոնների խախտման հետևանքով:</p>
            </div>
          </div>
        )}
      </section>

      {/* ================= Այլ քարտեր Swiper Section ================= */}
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

      {/* ================= Օնլայն և մոբայլ բանկինգ Banner ================= */}
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

      {/* ================= Footer Section ================= */}
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

export default CardDetail;