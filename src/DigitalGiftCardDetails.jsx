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

const ratesDetailedData = [
  { service: "Քարտի տեսակ", fee: "Mastercard World Digital Gift Card" },
  { service: "Քարտի արժույթ", fee: "ՀՀ դրամ, ԱՄՆ դոլար, Եվրո" },
  { 
    service: "Քարտի պատվիրման աղբյուր և միջնորդավճար Նվեր տվողից", 
    fee: "",
    subItems: [
      { name: "Բանկի պաշտոնական կայք միջազգային և լոկալ քարտերով", value: "3%" },
      { name: "Evoca Touch App", value: "0%" }
    ]
  },
  { 
    service: "Նվեր քարտի համալրման գումար", 
    fee: "",
    subItems: [
      { name: "Նվազագույնը", value: "10 000 ՀՀ դրամ / 20 EURO / 20 USD" },
      { name: "Առավելագույնը", value: "2 000 000 ՀՀ դրամ / 5 000 EURO / 5 000 USD" }
    ]
  },
  { service: "Քարտի գործողության ժամկետ", fee: "Նվեր քարտը պատվիրելու պահից 6 ամիս" },
  { service: "Mastercard Digital Gift քարտի գործողության ժամկետի ավարտից հետո քարտային հաշվի սպասարկման վճար", fee: "10% ամսական չօգտագործված մնացորդի նկատմամբ" },
  { service: "Mastercard Digital Gift քարտով կատարվող գործարքներ", fee: "Լոկալ և միջազգային գործարքներ ֆիզիկական և օնլայն առևտրային կետերում[1]" },
  { service: "Քարտային հաշվի չնվազող մնացորդ", fee: "Չի սահմանվում" },
  { service: "Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք", fee: "0%" },
  { service: "Ապրանքների և ծառայությունների դիմաց անկանխիկ վճարման միջնորդավճար", fee: "Անվճար" },
  { service: "Քարտի գործողության կասեցում", fee: "Անվճար" },
  { service: "Քարտի վերաթողարկում", fee: "Քարտը կարող է վերաթողարկվել միայն քարտապանի կողմից գումարի չօգտագործման դեպքում" },
  { service: "Քարտապանի կողմից Mastercard Digital Gift գումարի չօգտագործման դեպքում նոր Նվեր քարտ վերաթողարկելու և նվեր քարտի մնացորդը տեղափոխելու հայտի միջնորդավճար", fee: "4,900 ՀՀ դրամ" },
  { service: "Քարտային հաշվի ամսական քաղվածքի տրամադրում", fee: "Անվճար" },
  { service: "Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար", fee: "Անվճար" },
  { service: "Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում", fee: "Անվճար" },
  { service: "Քարտով կատարված գործարքների բողոքարկման հայտ[2]", fee: "5,000 ՀՀ դրամ" },
  { service: "Գերածախսի գծով տույժեր", fee: "20% տարեկան" }
];

const DigitalGiftCardDetails = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      <div>
        {/* Top Header Navigation Bar */}
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
            <div className="max-w-xl space-y-6">
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
                Digital Gift Card
              </h1>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Սիրելի մարդկանց համար նվեր ընտրելը պատասխանատու ու հաճելի գործ է, բայց նաև ժամանակատար ու նյարդայնացնող, հատկապես երբ չգիտես՝ կհավանի՞, թե՞ոչ: Մենք առաջարկում ենք իդեալական նվերի տարբերակ:
              </p>
              <div>
                <button className="bg-[#6b21a8] hover:bg-purple-800 text-white font-bold text-sm px-8 py-3 rounded-full transition shadow-lg">
                  Պատվիրել օնլայն
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png" 
                alt="Digital Gift Card" 
                className="w-72 md:w-80 object-contain drop-shadow-xl hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>

        {/* Breadcrumbs Section */}
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
            <span className="hover:underline cursor-pointer">Քարտեր</span>
            <span>›</span>
            <span className="hover:underline cursor-pointer">Նվեր քարտեր</span>
            <span>›</span>
            <span className="text-gray-900 font-semibold">Digital Gift Card</span>
          </div>
        </div>

        {/* Main Content Area */}
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

          {/* Tab 1: Քարտի մասին */}
          {activeTab === 'about' && (
            <div className="space-y-8 text-gray-800 text-sm md:text-base leading-relaxed">
              <div>
                <h3 className="text-purple-700 font-bold text-lg mb-2">Անժամանակատար ու օգտակար</h3>
                <p>
                  Առանց չափազանցնելու' նվիրելը դեռ երբեք այսքան հարմար ու հաճելի չի եղել: <strong className="text-purple-700 font-semibold">Evoca</strong>-ի նոր <strong className="text-purple-700 font-semibold">Digital Gift Card</strong>-ի հետ դու նաև նվիրում ես անսահման էմոցիաներ և ընտրության ազատություն: Այլևս պետք չէ ժամեր անցկացնել խանութներում, կամ պատվիրել ու անհանգստանալ պատվիրած նվերի առաքման ժամկետների համար, կամ լարվել ու մտածել, թե այդքանից հետո' արդյո՞ք նվերը դուր կգա նրան, թե՞ ոչ...
                </p>
              </div>

              <div>
                <h3 className="text-purple-700 font-bold text-lg mb-2">Արագ ու հարմար</h3>
                <p>
                  Digital Gift Card-ը հանգիստ կարող է դառնալ ամենակրեատիվ ու օգտակար նվերը' ցանկացած վայրից, ցանկացած ժամի և ցանկացած առիթի համար: Այն կարելի է ուղարկել ընդամենը մի քանի քլիքով' Evocabank-ի վեբ հարթակի միջոցով, իսկ թվային նվեր քարտը կարելի է օգտագործել ամբողջ աշխարհում:
                </p>
              </div>

              <div>
                <h3 className="text-purple-700 font-bold text-lg mb-2">Հավես ու յուրահատուկ</h3>
                <p className="mb-3">
                  Եվ իհարկե, պետք չէ անհանգստանալ չտարբերվելու համար. դու ինքդ կարող ես ընտրել թվային նվեր քարտի գումարի չափը, արժույթը, ուղարկման ժամկետը և անգամ դիզայնը' ընտրելով իրավիճակին հարմար ամենաթույն արտահայտությունը: Այ սրանցից մեկը'
                </p>
                <ul className="space-y-1 font-bold text-purple-700 list-disc list-inside">
                  <li>«Սիրո Տիրո չծախսես»</li>
                  <li>«Մեր սեղանից ձեր սեղան»</li>
                  <li>«Փողը ծախսել ա սիրում»</li>
                  <li>«Չեմ հասցրել նվեր առնեմ»</li>
                  <li>«Շնորհավորոոոր»</li>
                </ul>
              </div>

              <p className="font-medium text-gray-700 pt-2">
                Մի խոսքով, սա նվեր է, որը կուրախացնի և՛ ստացողին, և՛ նվիրողին, և՛ Evoca-ին:
              </p>

              {/* Graphic/Mobile Showcase Section */}
              <div className="py-8 flex flex-col items-center justify-center">
                <div className="relative w-72 md:w-80 h-72 flex items-center justify-center">
                  <img 
                    src="https://www.evoca.am/file_manager/Gift%20Card/digitec-web2.png" 
                    alt="Digital Gift Cards Fan" 
                    className="w-full object-contain drop-shadow-2xl hover:rotate-6 transition duration-500"
                  />
                </div>
                <button className="mt-6 bg-[#6b21a8] hover:bg-purple-800 text-white font-bold text-sm px-10 py-3 rounded-full transition shadow-lg tracking-wide uppercase">
                  ՊԱՏՎԻՐԵԼ ՕՆԼԱՅՆ
                </button>
              </div>
            </div>
          )}

          {/* Tab 2: Սակագներ և դրույթներ */}
          {activeTab === 'rates' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden text-xs md:text-sm shadow-sm">
                <div className="divide-y divide-gray-100">
                  {ratesDetailedData.map((row, idx) => (
                    <div key={idx} className="flex flex-col">
                      <div className="flex justify-between items-center p-4 hover:bg-purple-50/30 transition">
                        <span className="text-gray-700 font-medium max-w-[70%]">{row.service}</span>
                        <span className="font-semibold text-gray-900 text-right">{row.fee}</span>
                      </div>
                      {row.subItems && (
                        <div className="bg-gray-50/60 px-6 py-2 divide-y divide-gray-200/50 border-t border-gray-100">
                          {row.subItems.map((sub, sIdx) => (
                            <div key={sIdx} className="flex justify-between items-center py-2 text-xs">
                              <span className="text-gray-600 pl-4">{sub.name}</span>
                              <span className="font-bold text-purple-900">{sub.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footnotes Section */}
              <div className="space-y-3 pt-4 text-xs text-gray-600 leading-relaxed border-t border-gray-100">
                <p>
                  <strong className="text-purple-700 font-bold">[1]</strong> Սահմանափակված են հետևյալ գործարքները` կանխիկացում, կանխիկի մուտքագրում վճարային տերմինալներով և անկանխիկ փոխանցմամբ, հաշվից հաշիվ փոխանցումներ, կոմունալ վճարումներ, էլեկտրոնային դրամապանակների համալրում, բեթթինգ/գեմբլինգ գործարքները, ինչպես նաև ֆինանսական ծառայությունների վճարման գործարքները (այդ թվում` վարկի մարում, ավանդի համալրում և այլն):
                </p>
                <p>
                  <strong className="text-purple-700 font-bold">[2]</strong> Գանձվում է միայն այն դեպքում, երբ բողոքարկման գործընթացի արդյունքում պարզվել է, որ գործարքը կատարվել է հաճախորդի կողմից կամ հաճախորդի կողմից քարտի օգտագործման կանոնների խախտման հետևանքով:
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
      </div>

      {/* Footer Section */}
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
};

export default DigitalGiftCardDetails;