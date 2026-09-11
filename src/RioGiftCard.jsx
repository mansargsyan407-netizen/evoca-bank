import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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

const RioGiftCard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      <div>
        {/* Header / Subnav Top Bar */}
        <div className="bg-[#6b21a8] text-white px-8 py-3 flex items-center gap-8 text-sm font-semibold">
        <span className="bg-[#581c87] px-4 py-1 rounded cursor-pointer">Քարտեր</span>
        <span className="hover:opacity-80 cursor-pointer">Քարտերի տրամադրում և սպասարկում</span>
        <span className="hover:opacity-80 cursor-pointer">Սոցիալական ապահովության վճարային քարտեր</span>
        <span className="hover:opacity-80 cursor-pointer">Evoca Benefits</span>
      </div>


        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-50 via-purple-50/50 to-white py-10 px-6 md:px-16 relative overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                Rio Gift Card
              </h1>
              <p className="text-gray-500 text-sm md:text-base">
                Ամեն ինչ մեկ նվեր քարտում
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src="https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png"
                alt="Rio Gift Card"
                className="w-80 md:w-96 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4 text-xs text-gray-500">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-sm hover:bg-gray-50 transition cursor-pointer text-gray-700 font-medium"
          >
            ← Վերադառնալ
          </button>
          <div className="flex items-center gap-1.5">
            <span>›</span>
            <span>Անհատ</span>
            <span>›</span>
            <span>Քարտեր</span>
            <span>›</span>
            <span>Քարտեր</span>
            <span>›</span>
            <span>Նվեր քարտեր</span>
            <span>›</span>
            <span className="text-purple-600 font-semibold">Rio Gift Card</span>
          </div>
        </div>

        {/* Main Tabs Container */}
        <main className="max-w-6xl mx-auto px-6 py-6">
          {/* Tabs Navigation */}
          <div className="flex border-b border-gray-200 mb-8 gap-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-3 font-semibold text-sm md:text-base border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'about'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Քարտի մասին
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`pb-3 font-semibold text-sm md:text-base border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'terms'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Տրամադրման պայմանները
            </button>
            <button
              onClick={() => setActiveTab('service')}
              className={`pb-3 font-semibold text-sm md:text-base border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'service'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Սպասարկման պայմանները
            </button>
          </div>

          {/* TAB 1: ՔԱՐՏԻ ՄԱՍԻՆ */}
          {activeTab === 'about' && (
            <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base max-w-4xl">
              <p>
                <strong className="text-purple-700 font-bold">Evocabank</strong>-ը Rio Mall-ի հետ համատեղ թողարկել է <strong className="text-purple-700 font-bold">Rio Gift Card</strong>-ը:
              </p>
              <p>
                Մեզ հետ դու կարող ես խնայել ամենաթանկը՝ ժամանակը, բայց նույն պահին ունենալ նվերի լավագույն տարբերակը:
              </p>
              <p>
                Նվեր քարտը հնարավորություն է տալիս գնումներ կատարել Rio Mall-ի խանութ սրահներից և ժամանցի բոլոր կետերից: Այն նախատեսված է բացառապես անկանխիկ տարբերակով գնումներ կատարելու համար քարտի ձեռքբերման օրվանից սկսած 6 ամսվա ընթացքում:
              </p>
              <p>
                Վստահ ենք, արդեն որոշել ես՝ ում նվիրել Rio Gift Card-ը:
              </p>
              <p>
                Մնում է միայն որոշել քարտի գումարի չափը՝ <strong className="text-purple-700 font-bold">10,000-1,000,000 ՀՀ դրամի</strong> սահմաններում:
              </p>
              <p>
                Նվեր քարտը կարելի է ձեռք բերել Rio Mall-ի ինֆոկետից անձնագրով կամ ID քարտով: Քարտը տրամադրվում է հենց տեղում՝ հատուկ նորաոճ փաթեթավորմամբ:
              </p>
            </div>
          )}

          {/* TAB 2: ՏՐԱՄԱԴՐՄԱՆ ՊԱՅՄԱՆՆԵՐԸ */}
          {activeTab === 'terms' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm text-gray-700 border border-gray-100 shadow-sm rounded-lg">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 px-4 font-semibold w-1/2 bg-gray-50/50">Քարտի տեսակ</td>
                    <td className="py-3.5 px-4">Arca Gift card</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 px-4 font-semibold bg-gray-50/50">Քարտի արժույթ</td>
                    <td className="py-3.5 px-4">ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 px-4 font-semibold align-top bg-gray-50/50">Նվեր քարտի համալրման գումար</td>
                    <td className="py-3.5 px-4">
                      <div>Նվազագույնը՝ 10 000 ՀՀ դրամ</div>
                      <div className="mt-1">Առավելագույնը՝ 1 000 000 ՀՀ դրամ</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 px-4 font-semibold bg-gray-50/50">Քարտի գործողության ժամկետ</td>
                    <td className="py-3.5 px-4">Քարտի թողարկման պահից 6 ամիս</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 px-4 font-semibold bg-gray-50/50">Rio Gift քարտով կատարվող գործարքներ</td>
                    <td className="py-3.5 px-4">
                      «ՌԻՈ» ՓԲԸ կազմակերպության տարածքում տեղադրված POS-տերմինալներով միայն անկանխիկ վճարումներ կատարելու նպատակով: Քարտը համարվում է վավերական Քարտի դիմերեսին նշված ժամկետի սահմաններում:
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 px-4 font-semibold bg-gray-50/50">Կանխիկացում</td>
                    <td className="py-3.5 px-4">Չի թույլատրվում</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 px-4 font-semibold bg-gray-50/50">Քարտային հաշվի չնվազող մնացորդ</td>
                    <td className="py-3.5 px-4">Չի սահմանվում</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 px-4 font-semibold bg-gray-50/50">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք</td>
                    <td className="py-3.5 px-4">0%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 px-4 font-semibold bg-gray-50/50">Ապրանքների և ծառայությունների դիմաց անկանխիկ վճարման միջնորդավճար</td>
                    <td className="py-3.5 px-4">Անվճար</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 px-4 font-semibold bg-gray-50/50">Քարտի գործողության կասեցում</td>
                    <td className="py-3.5 px-4">Անվճար</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 px-4 font-semibold bg-gray-50/50">Քարտի վերաթողարկում</td>
                    <td className="py-3.5 px-4">Չի վերաթողարկվում</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 px-4 font-semibold bg-gray-50/50">Մնացորդի տեղափոխության միջնորդավճար⁽¹⁾</td>
                    <td className="py-3.5 px-4">4 900 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 px-4 font-semibold bg-gray-50/50">PIN ծածկագրի գեներացման հայտ</td>
                    <td className="py-3.5 px-4">1 000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 px-4 font-semibold bg-gray-50/50">Քարտային հաշվի ամսական քաղվածքի տրամադրում</td>
                    <td className="py-3.5 px-4">Անվճար</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 px-4 font-semibold bg-gray-50/50">Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար</td>
                    <td className="py-3.5 px-4">Անվճար</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 px-4 font-semibold bg-gray-50/50">Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում</td>
                    <td className="py-3.5 px-4">Անվճար</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3.5 px-4 font-semibold bg-gray-50/50">Գերածախսի գծով տույժեր</td>
                    <td className="py-3.5 px-4">20% տարեկան</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 3: ՍՊԱՍԱՐԿՄԱՆ ՊԱՅՄԱՆՆԵՐԸ */}
          {activeTab === 'service' && (
            <ul className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed list-disc pl-5 max-w-5xl">
              <li>Քարտը տրամադրվում է անվճար:</li>
              <li>
                Քարտի լիցքավորումն իրականացվում է Բանկի, ինչպես նաև այլ վճարային տերմինալների միջոցով, ընդ որում՝ Բանկի վճարային տերմինալների միջոցով լիցքավորում իրականացնելիս միջնորդավճար չի գանձվում:
              </li>
              <li>Քարտի մնացորդի նկատմամբ Բանկի կողմից տոկոսագումարներ չեն վճարվում:</li>
              <li>Քարտը գործում է մինչև Քարտի դիմերեսին նշված ամսվա վերջին օրը ներառյալ:</li>
              <li>
                Քարտը Նվեր ստացած անձը պարտավոր է Քարտի գործողության ժամկետում Ներկայանալ Բանկ՝ անձը հաստատող փաստաթղթով և Բանկի հետ կնքել Վճարային քարտի պատվիրման հայտ-պայմանագիր՝ ակտիվացնելով Քարտը:
              </li>
              <li>
                Քարտի գործողության ժամկետի ընթացքում Նվեր ստացած անձի կողմից Բանկ չներկայանալու և Քարտը չակտիվացնելու դեպքում Քարտի գումարը ենթակա չէ վերադարձման:
              </li>
              <li>
                Ակտիվացված Քարտի գործողության ժամկետի ավարտից հետո Բանկը սկսում է հաշվարկել ամսական 10% (տասը տոկոս) սպասարկման վճար՝ ժամկետի ավարտի օրվա դրությամբ քարտային հաշվի մնացորդի նկատմամբ:
              </li>
              <li>
                Մնացորդային գումարը կարող է տրամադրվել բացառապես մնացորդի տեղափոխման միջոցով այլ Նվեր քարտի՝ Հաճախորդի /Նվեր Քարտը ստացած քարտապան/ դիմումի հիման վրա: Ընդ որում, մնացորդի տեղափոխում այլ Նվեր քարտի կատարվում է բացառապես արդեն իսկ Հաճախորդին Կցագրված և ժամկետանց/կորցրած/վնասված Նվեր քարտերի դեպքում: Գործարքի համար Բանկի կողմից գանձվում է համապատասխան միջնորդավճար:
              </li>
              <li>
                Բանկը պատասխանատվություն չի կրում Դիմումատուին հասցված այն վնասի համար, որը հասցվել է Քարտը կորցնելու, Դիմումատուի կողմից Քարտն ու PIN կոդն այլ անձին փոխանցելու, ինչպես նաև Քարտի գործողության ժամկետի ավարտի հետևանքով:
              </li>
              <li>
                Բանկը պատասխանատվություն չի կրում իր հսկողության տիրույթից դուրս տեղի ունեցած իրադարձությունների համար:
              </li>
              <li>
                Դիմումատուն պարտավոր է Նվեր ստացողին պարզաբանել Նվեր քարտի օգտագործման կանոնները և սույն Պայմանները:
              </li>
              <li>
                Դիմումատուն տալիս է Բանկից գովազդային և տեղեկատվական հաղորդագրություններ ստանալու համաձայնություն:
              </li>
              <li>
                Բանկը և Դիմումատուն կրում են պատասխանատվություն ՀՀ օրենսդրությամբ սահմանված դեպքերում և կարգով:
              </li>
              <li>
                Բանկը և Դիմումատուն ժամանակավորապես ազատվում են պարտավորությունների կատարումից՝ ՀՀ օրենսդրությամբ որպես ֆորս-մաժորային ճանաչված իրադարձությունների առաջացման դեպքում և ընթացքում:
              </li>
              <li>
                Սույն պայմաններով չկարգավորվող հարցերը կարգավորվում են Բանկի Ներքին այլ իրավական ակտերով:
              </li>
              <li>
                Դիմում-Պայմանագրի շրջանակներում առաջացած վեճերն ու տարաձայնությունները լուծվում են երկկողմանի համաձայնության սկզբունքով: Համաձայնության չգալու դեպքում, վեճերը լուծվում են ՀՀ օրենսդրությամբ սահմանված կարգով:
              </li>
            </ul>
          )}
        </main>

        {/* Այլ քարտեր Swiper */}
        <div className="max-w-6xl mx-auto px-6 py-12 relative">
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

        {/* 3. Օնլայն և մոբայլ բանկինգ Banner */}
            <section className="w-full bg-[#6b21a8] text-white py-12 px-6 relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-white rounded-full opacity-10 pointer-events-none"></div>
              <div className="absolute bottom-10 right-10 w-10 h-10 rounded-full bg-purple-400/20 blur-sm pointer-events-none"></div>
      
              <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
                <div className="w-full lg:w-1/2 flex items-center justify-center gap-4">
                  {/* Laptop Mockup with YouTube Video */}
                  <div className="relative w-full max-w-[480px]">
                    {/* Laptop Screen Frame */}
                    <div className="relative rounded-t-2xl border-[10px] border-b-0 border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden aspect-[16/10]">
                      <iframe
                        src="https://www.youtube.com/embed/KwAgMHEx8ys?enablejsapi=1&origin=https%3A%2F%2Fwww.evoca.am&widgetid=1&forigin=https%3A%2F%2Fwww.evoca.am%2Fhy%2Fcards%2Fmaster%2Ftravel-card&aoriginsup=1&gporigin=https%3A%2F%2Fwww.evoca.am%2Fhy&vf=6"
                        title="EvocaTOUCH Video"
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    {/* Laptop Base */}
                    <div className="w-[108%] -translate-x-[4%] h-3 bg-neutral-700 rounded-b-xl border-t border-neutral-600 shadow-md relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-neutral-500 rounded-b-md"></div>
                    </div>
                  </div>
      
                  {/* Phone Mockup */}
                  <div className="hidden md:block relative -ml-6 mb-2 shrink-0">
                    <div className="w-28 aspect-[9/19] rounded-[1.6rem] border-[5px] border-neutral-900 bg-gradient-to-b from-indigo-700 via-purple-700 to-fuchsia-700 relative overflow-hidden shadow-2xl">
                      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-9 h-2 bg-neutral-900 rounded-full"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                       <img src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" alt="" />
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
      
                  {/* QR & Mobile Apps Download Section */}
                  <div className="flex items-center gap-4 pt-4">
                    {/* QR Code */}
                    <div className="bg-white p-1.5 rounded-xl shadow-md shrink-0">
                      <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.evoca.am"
                        alt="QR Code"
                        className="w-20 h-20"
                      />
                    </div>
      
                    {/* Text & Store Buttons */}
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-semibold text-purple-100">
                        Ներբեռնել հավելվածները`
                      </span>
                      <div className="flex items-center gap-2">
                        <a
                          href="https://apps.apple.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-80 transition"
                        >
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                            alt="App Store"
                            className="h-8"
                          />
                        </a>
                        <a
                          href="https://play.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-80 transition"
                        >
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Google Play"
                            className="h-8"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#f8f8fa] text-[#2d2d2d] pt-8 pb-6 px-6 border-t border-gray-100 text-xs relative">
        <div className="max-w-6xl mx-auto flex justify-end pb-4 border-b border-gray-200">
          <div className="text-gray-400 text-[11px]">
            Թարմացվել է` 07/09/2026 14:49
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

        {/* Footer Bottom Bar */}
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

        {/* Floating Chat Button */}
        <div className="fixed bottom-4 right-4 z-50 flex items-center">
          <div className="bg-purple-600 p-3 rounded-full text-white shadow-xl hover:scale-110 transition cursor-pointer">
            💬
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RioGiftCard;