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

const VisaGoldCard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      <div>
        {/* Top Header / Navigation Bar */}
        <header className="border-b border-gray-100 bg-white">
         

          {/* Submenu */}
          <div className="bg-purple-700 text-white text-xs py-2 px-6">
            <div className="max-w-7xl mx-auto flex items-center gap-6">
              <span className="bg-purple-900 px-3 py-1 rounded font-bold">Քարտեր</span>
              <span className="hover:text-purple-200 cursor-pointer">Քարտերի տրամադրում և սպասարկում</span>
              <span className="hover:text-purple-200 cursor-pointer">Սոցիալական ապահովության վճարային քարտեր</span>
              <span className="hover:text-purple-200 cursor-pointer">Evoca Benefits</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-50 via-purple-50/40 to-white py-12 px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-lg space-y-3">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Visa Gold
              </h1>
              <p className="text-purple-700 font-semibold text-xs md:text-sm">
                Նոր քարտերի թողարկումը դադարեցված է 25.11.2024 թվականից
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src="https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png"
                alt="Visa Gold"
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
          <div className="flex items-center gap-1.5 flex-wrap">
            <span>›</span>
            <span>Անհատ</span>
            <span>›</span>
            <span>Քարտեր</span>
            <span>›</span>
            <span>Քարտեր</span>
            <span>›</span>
            <span>Visa</span>
            <span>›</span>
            <span className="text-purple-600 font-semibold">Visa Gold</span>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="max-w-6xl mx-auto px-6 py-6">
          {/* Tabs Navigation */}
          <div className="flex border-b border-gray-200 mb-8 gap-8">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-3 font-semibold text-sm md:text-base border-b-2 transition-colors cursor-pointer ${
                activeTab === 'about'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Քարտի մասին
            </button>
            <button
              onClick={() => setActiveTab('tariffs')}
              className={`pb-3 font-semibold text-sm md:text-base border-b-2 transition-colors cursor-pointer ${
                activeTab === 'tariffs'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Սակագներ և դրույքներ
            </button>
          </div>

          {/* TAB 1: ՔԱՐՏԻ ՄԱՍԻՆ */}
          {activeTab === 'about' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column Text */}
              <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-xs md:text-sm">
                <p className="text-purple-700 font-bold text-sm md:text-base">
                  Նոր քարտերի թողարկումը դադարեցված է 25.11.2024 թվականից:
                </p>
                <p>
                  Visa Gold քարտը Visa International միջազգային վճարահաշվարկային համակարգի պրեմիում դասի չիպային քարտ է, որն ապահովում է Ձեր հարմարավետությունն ու ընդգծում Ձեր կարգավիճակը:
                </p>
                <p>
                  Աշխարհի ցանկացած կետում Ձեր ֆինանսական միջոցները 24/7 սկզբունքով հասանելի կլինեն: Դուք կկարողանաք բանկոմատի միջոցով Evoca Visa Gold քարտից գումար կանխիկացնել և անկանխիկ վճարումներ կատարել աշխարհի բոլոր այն սպասարկման և առևտրի կետերում, որտեղ փակցված կլինի Visa տարբերանշանը:
                </p>
                <p>
                  <strong className="text-purple-700 font-bold">Evoca Visa Gold</strong> քարտն օժտված է դրամական միջոցների անվտանգության ապահովման բարձր մակարդակով: Այն միջազգային payWave տեխնոլոգիայով աշխատող չիպային քարտ է, որի շնորհիվ սպասարկման կետերում անկանխիկ վճարումներ կատարելիս քարտը հատուկ վճարային տերմինալներին մոտեցնելով գործարքը կհաստատվի հաշված վայրկյանների ընթացքում:
                </p>
                <p>
                  Սա նվազեցնում է քարտի հնարավոր կեղծման ռիսկը՝ ցանկացած վճարում դարձնելով պարզ, արագ և հեշտ:
                </p>
              </div>

              {/* Right Column Tariffs Summary Box */}
              <div className="lg:col-span-5 bg-white border border-gray-100 rounded-2xl p-6 shadow-lg space-y-4">
                {/* Currency Switchers */}
                <div className="flex gap-2 mb-2">
                  <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs shadow">֏</span>
                  <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs hover:bg-purple-200 cursor-pointer">$</span>
                  <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs hover:bg-purple-200 cursor-pointer">€</span>
                  <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs hover:bg-purple-200 cursor-pointer">₽</span>
                </div>

                <div className="border-b border-gray-100 pb-3 flex items-baseline justify-between">
                  <div className="text-2xl font-extrabold text-purple-700">0.2%</div>
                  <div className="text-xs text-gray-600 text-right max-w-[200px]">
                    Կանխիկացում բանկի կանխիկացման կետերում
                  </div>
                </div>

                <div className="border-b border-gray-100 pb-3 flex items-baseline justify-between">
                  <div className="text-2xl font-extrabold text-purple-700">0.8%</div>
                  <div className="text-xs text-gray-600 text-right max-w-[200px]">
                    Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում
                  </div>
                </div>

                <div className="border-b border-gray-100 pb-3 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 block">min 1,500 ֏</span>
                    <span className="text-2xl font-extrabold text-purple-700">1%</span>
                  </div>
                  <div className="text-xs text-gray-600 text-right max-w-[200px]">
                    Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում
                  </div>
                </div>

                <div className="border-b border-gray-100 pb-3 flex items-baseline justify-between">
                  <div className="text-2xl font-extrabold text-purple-700">15,000 ֏</div>
                  <div className="text-xs text-gray-600 text-right">Տարեկան սպասարկում</div>
                </div>

                <div className="flex items-baseline justify-between">
                  <div className="text-2xl font-extrabold text-purple-700">75,000 ֏</div>
                  <div className="text-xs text-gray-600 text-right max-w-[200px]">
                    Տարեկան սպասարկում օտարերկրյա քաղաքացիների համար
                  </div>
                </div>
              </div>
            </div>
          )}

        
        </main>

        {/* Travel Banner with Custom Background Image */}
        <section
          className="w-full my-8 py-20 px-6 text-center text-white bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://www.evoca.am/images-cache/cards/1/16132304407253/1920x527.jpg')`
          }}
        >
          {/* Overlay to ensure maximum contrast and legibility */}
          <div className="absolute inset-0 bg-purple-950/40"></div>
          
          <div className="max-w-4xl mx-auto relative z-10 space-y-2">
            <h2 className="text-xl md:text-3xl font-extrabold leading-snug drop-shadow-md">
              Evoca Visa Gold քարտը ճամփորդության ողջ ընթացքում կլինի Ձեր հուսալի ուղեկիցը և կընդգծի Ձեր յուրահատուկ կարգավիճակը:
            </h2>
          </div>
        </section>

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

export default VisaGoldCard;