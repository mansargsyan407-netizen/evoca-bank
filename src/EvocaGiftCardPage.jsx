import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function EvocaGiftCardPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about'); // 'about' | 'issue' | 'service'

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
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      
      <div>
        {/* TOP HEADER / NAVBAR */}
        <header className="bg-white border-b border-gray-100">
          {/* Purple Header Bar */}
          <div className="bg-[#5c00d2] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-8 text-xs font-bold py-3 overflow-x-auto">
              <Link to="/cards" className="bg-[#4800a7] px-4 py-1.5 rounded-lg whitespace-nowrap">Քարտեր</Link>
              <Link to="/cards/issuance" className="hover:text-gray-200 whitespace-nowrap">Քարտերի տրամադրում և սպասարկում</Link>
              <Link to="/cards/social" className="hover:text-gray-200 whitespace-nowrap">Սոցիալական ապահովության վճարային քարտեր</Link>
              <Link to="/cards/benefits" className="hover:text-gray-200 whitespace-nowrap">Evoca Benefits</Link>
            </div>
          </div>
        </header>

        {/* HERO BANNER SECTION */}
        <section className="bg-[#f3f1f8] relative overflow-hidden py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                Evoca Gift Card
              </h1>
              <p className="text-gray-600 text-base sm:text-lg font-medium max-w-xl">
                Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը:
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-md">
                <img src="https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png" alt="Evoca Gift Card" />
              </div>
            </div>
          </div>
        </section>

        {/* BREADCRUMBS & BACK BUTTON */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex flex-wrap items-center justify-between gap-4 border-b border-gray-100">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-white px-5 py-2 rounded-full border border-gray-200 text-xs font-bold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span>←</span> Վերադառնալ
          </button>

          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <Link to="/" className="hover:text-purple-600">🏠</Link>
            <span>›</span>
            <Link to="/personal" className="hover:text-purple-600">Անհատ</Link>
            <span>›</span>
            <Link to="/cards" className="hover:text-purple-600">Քարտեր</Link>
            <span>›</span>
            <Link to="/cards/gift" className="hover:text-purple-600">Նվեր քարտեր</Link>
            <span>›</span>
            <span className="text-gray-900 font-bold">Evoca Gift Card</span>
          </div>
        </div>

        {/* TABS MENU SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8">
          <div className="flex items-center gap-8 border-b border-gray-200 text-sm font-bold overflow-x-auto">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-3 transition-colors relative whitespace-nowrap cursor-pointer ${
                activeTab === 'about'
                  ? 'text-[#6c00ff] border-b-2 border-[#6c00ff]'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Քարտի մասին
            </button>
            <button
              onClick={() => setActiveTab('issue')}
              className={`pb-3 transition-colors relative whitespace-nowrap cursor-pointer ${
                activeTab === 'issue'
                  ? 'text-[#6c00ff] border-b-2 border-[#6c00ff]'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Տրամադրման պայմանները
            </button>
            <button
              onClick={() => setActiveTab('service')}
              className={`pb-3 transition-colors relative whitespace-nowrap cursor-pointer ${
                activeTab === 'service'
                  ? 'text-[#6c00ff] border-b-2 border-[#6c00ff]'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Սպասարկման պայմանները
            </button>
          </div>
        </div>

        {/* TAB CONTENT */}
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10">
          {activeTab === 'about' && (
            <div className="space-y-10 text-center text-gray-700">
              
              {/* Introduction Text */}
              <div className="space-y-2 text-sm sm:text-base font-medium leading-relaxed">
                <p>
                  Նվերը դառնում է հատկապես կարևոր, երբ համապատասխանում է Նվեր ստացողի
                  ցանկություններին: <span className="font-bold text-[#6c00ff]">Evoca Gift Card</span>-ը երբեք չի հիասթափեցնի. այն իդեալական նվեր է:
                </p>
                <p className="font-semibold text-gray-900">
                  Քարտը հարմար է բոլոր առիթների համար՝
                </p>
              </div>

              {/* Occasions Bullet List */}
              <ul className="inline-block text-left text-sm sm:text-base font-semibold text-gray-800 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6c00ff]" />
                  Ամանոր
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6c00ff]" />
                  Մարտի 8
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6c00ff]" />
                  Սիրո տոն
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6c00ff]" />
                  Ծննդյան օր
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6c00ff]" />
                  Հարսանիք
                </li>
              </ul>

              {/* Ordering Description */}
              <div className="space-y-2 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto pt-4">
                <p className="font-bold text-gray-900">
                  Դու պարզապես ընտրում ես գումարի չափը, իսկ ստացողը՝ իր Նվերը:
                </p>
                <p>
                  Քարտը տրամադրվում է տեղում՝ դիմելու պահին, կամ առաքման միջոցով պատվիրելուց հետո 1 աշխատանքային օրվա ընթացքում:
                </p>
              </div>

            {/* Design Selector Section */}
<div className="pt-6 space-y-6">
  <p className="text-sm sm:text-base font-medium">
    Ընտրիր <span className="font-bold text-[#6c00ff]">Evoca Gift Card</span>-ի քո սիրելի դիզայնը՝ <span className="font-bold text-[#6c00ff]">Violet</span> կամ <span className="font-bold text-gray-900">Black</span>.
  </p>

  <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
    {/* Violet Card */}
    <Link 
      to="/cards/gift/order-violet" 
      className="flex flex-col items-center gap-3 group cursor-pointer"
    >
      <div className="overflow-hidden rounded-xl shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
        <img
          src="https://www.evoca.am/file_manager/Gift%20Card/gift22.png"
          alt="Violet Gift Card"
          className="w-56 sm:w-64"
        />
      </div>
     
    </Link>

    {/* Black Card */}
    <Link 
      to="/cards/gift/order-black" 
      className="flex flex-col items-center gap-3 group cursor-pointer"
    >
      <div className="overflow-hidden rounded-xl shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
        <img
          src="https://www.evoca.am/file_manager/Gift%20Card/gift11.png"
          alt="Black Gift Card"
          className="w-56 sm:w-64"
        />
      </div>
      
    </Link>
  </div>
</div>

              {/* Packaging Section */}
              <div className="pt-10 space-y-4">
                <p className="text-sm sm:text-base font-semibold text-gray-800">
                  Քարտը կարող ես ձեռք բերել հետևյալ փաթեթավորմամբ՝
                </p>
                <div className="flex justify-center">
                  <img
                    src="https://www.evoca.am/file_manager/Gift%20Card/GIFTCARD-WEB2.png"
                    alt="Evoca Gift Card Box"
                    className="w-64 sm:w-80 object-contain drop-shadow-lg"
                    onError={(e) => {
                      e.target.src = "https://www.evoca.am/file_manager/Gift%20Card/GIFTCARD-WEB2.png";
                    }}
                  />
                </div>
              </div>

              {/* Ինչ առավելություններ կտա քարտը */}
              <div className="text-left space-y-4 pt-8">
                <h3 className="text-base sm:text-lg font-bold text-[#6c00ff]">
                  Ի՞նչ առավելություններ կտա քարտը.
                </h3>
                <ul className="space-y-2 text-sm sm:text-base font-semibold text-gray-800 pl-4">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6c00ff]" />
                    Ընտրության ազատություն
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6c00ff]" />
                    Գեղեցիկ դիզայն և փաթեթավորում
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6c00ff]" />
                    Ժամանակի խնայողություն
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6c00ff]" />
                    Սխալ ընտրության բացառում
                  </li>
                </ul>
              </div>

              {/* Ինչպես պատվիրել քարտը */}
              <div className="text-left space-y-3 pt-4 text-sm sm:text-base leading-relaxed">
                <h3 className="font-bold text-[#6c00ff]">
                  Ինչպե՞ս պատվիրել քարտը.
                </h3>
                <p>
                  <span className="font-bold text-[#6c00ff]">Evoca Gift Card</span> կարելի է ձեռք բերել <span className="font-bold text-[#6c00ff]">Evocabank</span>-ի մասնաճյուղերից (բացառությամբ՝ Էրեբունի մասնաճյուղի)` ներկայացնելով անձնագիր կամ ID քարտ: Քարտը տրամադրվում է հենց տեղում՝ նորաոճ փաթեթավորմամբ:
                </p>
                <p>
                  Նվեր քարտը կարող ես պատվիրել նաև օնլայն՝ <span className="font-bold text-[#6c00ff]">Evocabank</span>-ի պաշտոնական կայքի միջոցով՝ մուտքագրելով համապատասխան գումարը քարտին:
                </p>
                <p>
                  Մենք այն անվճար կմոտեցնենք <span className="font-bold text-[#6c00ff]">Evocabank</span>-ի քո նախընտրած մասնաճյուղ կամ կառաքենք քո կողմից նշված հասցեով: Քարտը օնլայն պատվիրելու դեպքում, այն կտրամադրվի հաջորդ աշխատանքային օրը: Առաքման արժեքը՝ <span className="font-bold text-[#6c00ff]">1,000 ՀՀ դրամ</span>:
                </p>
                <p>
                  Քարտը կարող ես լիցքավորել 10,000 ՀՀ դրամից մինչև 1,000,000 ՀՀ դրամ՝ քո նախընտրած գումարի չափով:
                </p>
              </div>

              {/* Ինչպես ակտիվացնել քարտը */}
              <div className="text-left space-y-2 pt-4 text-sm sm:text-base leading-relaxed">
                <h3 className="font-bold text-[#6c00ff]">
                  Ինչպե՞ս ակտիվացնել քարտը.
                </h3>
                <p>
                  Evoca Gift Card-ը կարող ես ակտիվացնել Evocabank-ի ցանկացած մասնաճյուղում կամ EvocaTOUCH հավելվածի միջոցով:
                </p>
                <p>
                  Քարտի ակտիվացման համար անհրաժեշտ է անձնագիր:
                </p>
              </div>

              {/* Որտեղ կարելի է օգտագործել քարտը */}
              <div className="text-left space-y-2 pt-4 text-sm sm:text-base leading-relaxed">
                <h3 className="font-bold text-[#6c00ff]">
                  Որտե՞ղ կարելի է օգտագործել քարտը.
                </h3>
                <p>
                  Evoca Gift Card-ով կարող ես վճարել ցանկացած POS և V-POS տերմինալով՝ խանութներում, սրճարաններում, զվարճանքի կենտրոններում, սուպերմարկետներում, օնլայն խանութներում:
                </p>
              </div>

              {/* Ինչու նվիրել Evoca Gift Card */}
              <div className="text-left space-y-2 pt-4 text-sm sm:text-base leading-relaxed">
                <h3 className="font-bold text-[#6c00ff]">
                  Ինչո՞ւ նվիրել Evoca Gift Card, այլ ոչ կանխիկ գումար.
                </h3>
                <p>
                  Evoca Gift Card-ն ուղղակի իդեալական նվեր է. չէ՞ որ գեղեցիկ փաթեթավորմամբ նվեր քարտն ավելի էսթետիկ է, թրենդային և, իհարկե, ստատուսային, քան ծրարով գումարը: Բացի դրանից, նվեր քարտը հարմար տարբերակ է նույնիսկ եթե լավ ծանոթ չես նվեր ստացողի նախասիրություններին և ճաշակին:
                </p>
              </div>

            </div>
          )}

         {/* ՏՐԱՄԱԴՐՄԱՆ ՊԱՅՄԱՆՆԵՐԸ */}
{activeTab === 'issue' && (
  <div className="space-y-6">
    <div className="bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden">
      <div className="bg-[#fcfaff] px-6 py-4 border-b border-purple-100">
        <h2 className="text-lg font-extrabold text-gray-900">Evoca Gift քարտեր</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <tbody className="divide-y divide-purple-50">
            <tr className="hover:bg-purple-50/30 transition-colors">
              <td className="py-3.5 px-6 font-semibold text-gray-700 w-1/2">Քարտի տեսակ</td>
              <td className="py-3.5 px-6 font-medium text-gray-900 w-1/2">ArCa Gift card</td>
            </tr>
            <tr className="hover:bg-purple-50/30 transition-colors">
              <td className="py-3.5 px-6 font-semibold text-gray-700">Քարտի արժույթ</td>
              <td className="py-3.5 px-6 font-medium text-gray-900">ՀՀ դրամ</td>
            </tr>
            <tr className="hover:bg-purple-50/30 transition-colors">
              <td className="py-3.5 px-6 font-semibold text-gray-700">Նվեր քարտի համալրման գումար</td>
              <td className="py-3.5 px-6 font-medium text-gray-900 space-y-1">
                <div>Նվազագույնը՝ 10 000 ՀՀ դրամ</div>
                <div>Առավելագույնը՝ 1 000 000 ՀՀ դրամ</div>
              </td>
            </tr>
            <tr className="hover:bg-purple-50/30 transition-colors">
              <td className="py-3.5 px-6 font-semibold text-gray-700">Քարտի գործողության ժամկետ</td>
              <td className="py-3.5 px-6 font-medium text-gray-900">Քարտի թողարկման պահից 6 ամիս</td>
            </tr>
            <tr className="hover:bg-purple-50/30 transition-colors">
              <td className="py-3.5 px-6 font-semibold text-gray-700">Evoca Gift քարտով կատարվող գործարքներ</td>
              <td className="py-3.5 px-6 font-medium text-gray-900">
                ՀՀ տարածքում գտնվող առևտրային սպասարկման կետեր <sup className="text-[#6c00ff] font-bold">[1]</sup>
              </td>
            </tr>
            <tr className="hover:bg-purple-50/30 transition-colors">
              <td className="py-3.5 px-6 font-semibold text-gray-700">Կանխիկացում</td>
              <td className="py-3.5 px-6 font-medium text-gray-900">Չի թույլատրվում</td>
            </tr>
            <tr className="hover:bg-purple-50/30 transition-colors">
              <td className="py-3.5 px-6 font-semibold text-gray-700">Քարտային հաշվի չնվազող մնացորդ</td>
              <td className="py-3.5 px-6 font-medium text-gray-900">Չի սահմանվում</td>
            </tr>
            <tr className="hover:bg-purple-50/30 transition-colors">
              <td className="py-3.5 px-6 font-semibold text-gray-700">
                Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք
              </td>
              <td className="py-3.5 px-6 font-medium text-gray-900">0%</td>
            </tr>
            <tr className="hover:bg-purple-50/30 transition-colors">
              <td className="py-3.5 px-6 font-semibold text-gray-700">
                Ապրանքների և ծառայությունների դիմաց անկանխիկ վճարման միջնորդավճար
              </td>
              <td className="py-3.5 px-6 font-medium text-gray-900">Անվճար</td>
            </tr>
            <tr className="hover:bg-purple-50/30 transition-colors">
              <td className="py-3.5 px-6 font-semibold text-gray-700">Քարտի գործողության կասեցում</td>
              <td className="py-3.5 px-6 font-medium text-gray-900">Անվճար</td>
            </tr>
            <tr className="hover:bg-purple-50/30 transition-colors">
              <td className="py-3.5 px-6 font-semibold text-gray-700">Քարտի վերաթողարկում</td>
              <td className="py-3.5 px-6 font-medium text-gray-900">Չի վերաթողարկվում</td>
            </tr>
            <tr className="hover:bg-purple-50/30 transition-colors">
              <td className="py-3.5 px-6 font-semibold text-gray-700">
                Մնացորդի տեղափոխության միջնորդավճար <sup className="text-[#6c00ff] font-bold">[2]</sup>
              </td>
              <td className="py-3.5 px-6 font-medium text-gray-900">4 900 ՀՀ դրամ</td>
            </tr>
            <tr className="hover:bg-purple-50/30 transition-colors">
              <td className="py-3.5 px-6 font-semibold text-gray-700">PIN ծածկագրի գեներացման հայտ</td>
              <td className="py-3.5 px-6 font-medium text-gray-900">1 000 ՀՀ դրամ</td>
            </tr>
            <tr className="hover:bg-purple-50/30 transition-colors">
              <td className="py-3.5 px-6 font-semibold text-gray-700">Քարտային հաշվի ամսական քաղվածքի տրամադրում</td>
              <td className="py-3.5 px-6 font-medium text-gray-900">Անվճար</td>
            </tr>
            <tr className="hover:bg-purple-50/30 transition-colors">
              <td className="py-3.5 px-6 font-semibold text-gray-700">
                Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար
              </td>
              <td className="py-3.5 px-6 font-medium text-gray-900">Անվճար</td>
            </tr>
            <tr className="hover:bg-purple-50/30 transition-colors">
              <td className="py-3.5 px-6 font-semibold text-gray-700">
                Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում
              </td>
              <td className="py-3.5 px-6 font-medium text-gray-900">Անվճար</td>
            </tr>
            <tr className="hover:bg-purple-50/30 transition-colors">
              <td className="py-3.5 px-6 font-semibold text-gray-700">Գերածախսի գծով տույժեր</td>
              <td className="py-3.5 px-6 font-medium text-gray-900">20% տարեկան</td>
            </tr>
            <tr className="hover:bg-purple-50/30 transition-colors">
              <td className="py-3.5 px-6 font-semibold text-gray-700">
                Ակտիվացված Քարտի գործողության ժամկետի ավարտից հետո ամսական սպասարկման վճար.
              </td>
              <td className="py-3.5 px-6 font-medium text-gray-900">
                10% ժամկետի ավարտի օրվա դրությամբ քարտային հաշվի մնացորդի նկատմամբ
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Ծանոթագրություններ */}
    <div className="space-y-3 pt-4 text-xs sm:text-sm text-gray-600 border-t border-gray-100">
      <p>
        <sup className="text-[#6c00ff] font-bold">[1]</sup> Բացառությամբ այն առևտրային սպասարկման կետերի, որտեղ առկա է քարտապանի նույնականացման (անձը հաստատող փաստաթղթի ստուգման) պահանջ։
      </p>
      <p>
        <sup className="text-[#6c00ff] font-bold">[2]</sup> Միջնորդավճարը գանձվում է քարտապանի դիմումի համաձայն՝ քարտի գործողության ժամկետի ավարտից հետո չօգտագործված մնացորդը այլ քարտային կամ բանկային հաշվին փոխանցելու դեպքում։
      </p>
    </div>
  </div>
)}

{/* ՍՊԱՍԱՐԿՄԱՆ ՊԱՅՄԱՆՆԵՐԸ */}
{activeTab === 'service' && (
  <div className="space-y-5 text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
    <ul className="space-y-4">
      <li className="flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-[#6c00ff] mt-1.5 shrink-0" />
        <span>Քարտը տրամադրվում է անվճար:</span>
      </li>

      <li className="flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-[#6c00ff] mt-1.5 shrink-0" />
        <span>
          Քարտի լիցքավորումն իրականացվում է Բանկի, ինչպես նաև այլ վճարային տերմինալների միջոցով, ընդ որում՝ Բանկի վճարային տերմինալների միջոցով լիցքավորում իրականացնելիս միջնորդավճար չի գանձվում:
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-[#6c00ff] mt-1.5 shrink-0" />
        <span>Քարտի մնացորդի նկատմամբ Բանկի կողմից տոկոսագումարներ չեն վճարվում:</span>
      </li>

      <li className="flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-[#6c00ff] mt-1.5 shrink-0" />
        <span>Քարտը գործում է մինչև Քարտի դիմերեսին նշված ամսի վերջին օրը ներառյալ:</span>
      </li>

      <li className="flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-[#6c00ff] mt-1.5 shrink-0" />
        <span>
          Քարտը նվեր ստացած անձը պարտավոր է Քարտի գործողության ժամկետում ներկայանալ Բանկ՝ անձը հաստատող փաստաթղթով և Բանկի հետ կնքել Վճարային քարտի պատվիրման հայտ-պայմանագիր՝ ակտիվացնելով Քարտը:
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-[#6c00ff] mt-1.5 shrink-0" />
        <span>
          Քարտի գործողության ժամկետի ընթացքում նվեր ստացած անձի կողմից Բանկ չներկայանալու և Քարտը չակտիվացնելու դեպքում Քարտի գումարը ենթակա չէ վերադարձման:
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-[#6c00ff] mt-1.5 shrink-0" />
        <span>
          Ակտիվացված Քարտի գործողության ժամկետի ավարտից հետո Բանկը սկսում է հաշվարկել ամսական 10% (տասը տոկոս) սպասարկման վճար՝ ժամկետի ավարտի օրվա դրությամբ քարտային հաշվի մնացորդի նկատմամբ:
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-[#6c00ff] mt-1.5 shrink-0" />
        <span>
          Մնացորդային գումարը կարող է տրամադրվել բացառապես մնացորդի տեղափոխման միջոցով այլ Նվեր քարտի՝ Հաճախորդի /Նվեր Քարտը ստացած քարտապան/ դիմումի հիման վրա: Ընդ որում, մնացորդի տեղափոխում այլ Նվեր քարտի կատարվում է բացառապես արդեն իսկ Հաճախորդին կցագրված և ժամկետանց/կորցրած/վնասված Նվեր քարտերի դեպքում: Գործարքի համար Բանկի կողմից գանձվում է համապատասխան միջնորդավճար:
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-[#6c00ff] mt-1.5 shrink-0" />
        <span>
          Բանկը պատասխանատվություն չի կրում Դիմումատուին հասցված այն վնասի համար, որը հասցվել է Քարտը կորցնելու, Դիմումատուի կողմից Քարտն ու PIN կոդն այլ անձին փոխանցելու, ինչպես նաև Քարտի գործողության ժամկետի ավարտի հետևանքով:
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-[#6c00ff] mt-1.5 shrink-0" />
        <span>Բանկը պատասխանատվություն չի կրում իր հսկողության տիրույթից դուրս տեղի ունեցած իրադարձությունների համար:</span>
      </li>
    </ul>
  </div>
)}
        </div>

        
              {/* 5. OTHER CARDS SLIDER SECTION */}
              <section className="max-w-7xl mx-auto px-4 md:px-12 py-12 relative w-full">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-gray-900">
                  Այլ քարտեր
                </h2>
        
                <div className="relative group px-4">
                  <button
  className="other-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 text-2xl font-bold text-[#6a0dad] hover:scale-125 transition cursor-pointer p-2"
  aria-label="Նախորդ"
>
  ‹
</button>
<button
  className="other-next absolute right-0 top-1/2 -translate-y-1/2 z-20 text-2xl font-bold text-[#6a0dad] hover:scale-125 transition cursor-pointer p-2"
  aria-label="Հաջորդ"
>
  ›
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
              </section>
        {/* 3. ՕՆԼԱՅՆ ԵՎ ՄՈԲԱՅԼ ԲԱՆԿԻՆԳ Banner Section */}
        <section className="w-full bg-[#6b21a8] text-white py-12 px-6 relative overflow-hidden my-8">
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
                    <img src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" alt="Mobile App" />
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
            </div>
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-right text-xs text-gray-400 font-medium mb-6">
            Թարմացվել է՝ 28/08/2026 17:20
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
            <div className="lg:col-span-1 space-y-4">
              <div className="flex items-center gap-1 text-2xl font-black text-gray-900">
                evoca<span className="text-xs font-semibold tracking-widest text-gray-500 ml-0.5">BANK</span>
              </div>
              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                ք. Երևան, 0010,<br />
                Հանրապետության 44/2
              </p>
              <p className="text-xs text-gray-500 leading-relaxed pt-2">
                <strong>Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից</strong>
              </p>
              <div className="text-[11px] text-gray-400">
                1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4">Բանկի մասին</h4>
              <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                <li><Link to="/about" className="hover:text-[#6c00ff]">Մեր մասին</Link></li>
                <li><Link to="/management" className="hover:text-[#6c00ff]">Ղեկավարություն</Link></li>
                <li><Link to="/shareholders" className="hover:text-[#6c00ff]">Բաժնետերեր</Link></li>
                <li><Link to="/reports" className="hover:text-[#6c00ff]">Հաշվետվություններ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4">Օգտակար հղումներ</h4>
              <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                <li><Link to="/rights" className="hover:text-[#6c00ff]">Հաճախորդի իրավունքները</Link></li>
                <li><Link to="/privacy" className="hover:text-[#6c00ff]">Գաղտնիության քաղաքականություն</Link></li>
                <li><Link to="/mediator" className="hover:text-[#6c00ff]">Ֆին. հաշտարար</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4">Այլ հղումներ</h4>
              <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                <li><a href="https://evocaonline.am" target="_blank" rel="noreferrer" className="hover:text-[#6c00ff]">EvocaONLINE</a></li>
                <li><Link to="/faq" className="hover:text-[#6c00ff]">Հաճախ տրվող հարցեր</Link></li>
                <li><Link to="/feedback" className="hover:text-[#6c00ff]">Հետադարձ կապ</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="space-y-1 text-xs">
                <div className="font-bold text-gray-800">+374 10 605555</div>
                <div className="font-extrabold text-[#6c00ff] text-sm">8444</div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
        <button className="bg-[#6c00ff] text-white p-3.5 rounded-full shadow-xl hover:bg-purple-700 transition-colors cursor-pointer">
          📞
        </button>
      </div>

    </div>
  );
}