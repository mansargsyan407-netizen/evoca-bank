import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  HelpCircle,
  Globe,
  Search,
  Menu,
  Home,
  Phone
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

const otherLoans = [
   {
    id: 1,
    title: 'Անգրավ սպառողական վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg',
    path: '/loans/1',
  },
  {
    id: 2,
    title: 'Դրամական միջոցների գրավով ապահովված անհատական վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/1782886301331/415x261.jpg',
    path: '/loans/20',
  },
  {
    id: 3,
    title: 'Action',
    image: 'https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png',
    path: '/loans/9',
  },
  {
    id: 4,
    title: 'Ոսկու գրավով (լոմբարդային) վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg',
    path: '/loans/5',
  },
  {
    id: 5,
    title: 'Ավտոմեքենայի ձեռքբերման նպատակով վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg',
    path: '/loans/2',
  },
  {
    id: 6,
    title: 'Գույքի գրավով ապահովված վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg',
    path: '/loans/3',
  },
  {
    id: 7,
    title: 'Արևային կայանների ձեռք բերման վարկ EvocaPOWER',
    image: 'https://www.evoca.am/images-cache/loans/1/17552479364123/415x261.png',
    path: '/loans/4',
  },
  {
    id: 8,
    title: 'Տեղում Ապառիկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16131174467985/415x261.jpg',
    path: '/loans/6',
  },
  {
    id: 9,
    title: 'Evoca աշխատավարձային փաթեթի շրջականակում տրամադրվող վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg',
    path: '/loans/7',
  },
  {
    id: 10,
    title: 'Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով',
    image: 'https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg',
    path: '/loans/8',
  },
  {
    id: 11,
    title: 'Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին',
    image: 'https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png',
    path: '/loans/10',
  },
  {
    id: 12,
    title: 'Հողամասի ձեռքբերման վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg',
    path: '/loans/11',
  },
  {
    id: 13,
    title: 'Միկրովերանորոգման վարկ Բանկի ռեսուրսներով',
    image: 'https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png',
    path: '/loans/12',
  },
  {
    id: 14,
    title: 'Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ',
    image: 'https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png',
    path: '/loans/13',
  },
  {
    id: 15,
    title: 'Վճարային քարտով օվերդրաֆտ (վարկային քարտ)',
    image: 'https://www.evoca.am/images-cache/loans/1/16947885698869/415x261.png',
    path: '/loans/14',
  },
  {
    id: 16,
    title: 'Անհատական վարկ «Ներդրումային»',
    image: 'https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png',
    path: '/loans/15',
  },
  {
    id: 17,
    title: 'Ավտոկայանատեղիի ձեռքբերման վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg',
    path: '/loans/16',
  },
  {
    id: 18,
    title: 'Հեծանիվի ձեռքբերման վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png',
    path: '/loans/17',
  },
  {
    id: 19,
    title: 'Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png',
    path: '/loans/18',
  },
  {
    id: 20,
    title: 'Վերանորոգման վարկ EvocaHOME',
    image: 'https://www.evoca.am/images-cache/loans/1/17198124761415/415x261.png',
    path: '/loans/19',
  },
  {
    id: 21,
    title: 'Առևտրային հիփոթեքային վարկեր',
    image: 'https://www.evoca.am/images-cache/loans/1/16142450609707/415x261.jpg',
    path: '/loans/21',
  },
  {
    id: 22,
    title: 'ԱՀԸ-ի ծրագրով ձեռք բերման վարկեր',
    image: 'https://www.evoca.am/images-cache/loans/1/16142450957048/415x261.jpg',
    path: '/loans/22',
  },
  {
    id: 23,
    title: 'ԱՀԸ-ի ծրագրով կառուցապատման վարկեր',
    image: 'https://www.evoca.am/images-cache/loans/1/17265524369781/415x261.png',
    path: '/loans/23',
  },
  {
    id: 24,
    title: 'ԱՀԸ-ի ծրագրով վերանորոգման վարկեր',
    image: 'https://www.evoca.am/images-cache/loans/1/16142533830767/415x261.jpg',
    path: '/loans/24',
  },
  {
    id: 25,
    title: 'Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»',
    image: 'https://www.evoca.am/images-cache/loans/1/16142451699164/415x261.jpg',
    path: '/loans/25',
  },
  {
    id: 26,
    title: 'Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142652333164/415x261.jpg',
    path: '/loans/26',
  },
  {
    id: 27,
    title: 'Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին',
    image: 'https://www.evoca.am/images-cache/loans/1/16690386016508/415x261.png',
    path: '/loans/27',
  },
  {
    id: 28,
    title: 'Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին',
    image: 'https://www.evoca.am/images-cache/loans/1/17133596531389/415x261.png',
    path: '/loans/28',
  },
  {
    id: 29,
    title: '«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142452651138/415x261.jpg',
    path: '/loans/29',
  },
  {
    id: 30,
    title: 'Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր',
    image: 'https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png',
    path: '/loans/30',
  },
  {
    id: 31,
    title: 'Evolution',
    image: 'https://www.evoca.am/images-cache/loans/1/16644424027338/415x261.png',
    path: '/loans/31',
  },
  {
    id: 32,
    title: 'Հիփոթեքային վարկեր Զինծառայողներին',
    image: 'https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png',
    path: '/loans/32',
  },
];

const NonResidentMortgagePage = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-[rgb(248,249,251)] text-slate-800 font-sans selection:bg-purple-200 relative">
      
      {/* LEFT FIXED SOCIAL BAR */}
      <div className="hidden xl:flex fixed left-3 top-1/2 -translate-y-1/2 flex-col items-center space-y-4 z-40 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md border border-gray-100 text-gray-500 text-xs font-bold">
        <a href="#" className="hover:text-[#6a0dad] transition">f</a>
        <a href="#" className="hover:text-[#6a0dad] transition">in</a>
        <a href="#" className="hover:text-[#6a0dad] transition">P</a>
      </div>

    
    

      {/* 3. PURPLE SUB-HEADER BAR */}
      <div className="bg-[#6a0dad] text-white px-4 md:px-12 py-2.5 flex items-center space-x-6 text-xs md:text-sm font-semibold">
        <a href="#" className="bg-[#52098d] px-5 py-1.5 rounded-md font-bold">Վարկեր</a>
        <a href="#" className="hover:text-purple-200 transition">Վարկային պատմություն և սքոր</a>
        <a href="#" className="hover:text-purple-200 transition">Կարևոր տեղեկատվություն</a>
      </div>

      {/* 4. HERO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px] bg-white border-b border-gray-100">
        <div className="p-8 lg:p-16 flex flex-col justify-center bg-[rgb(248,249,251)]">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
            Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ
          </h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg">
            Ձեռք բեր քո երազանքների բնակարանը Evocabank-ի հիփոթեքային վարկավորման միջոցով:
          </p>
        </div>

        <img src="	https://www.evoca.am/images-cache/loans/1/17262174043676/560x400.png" alt="" />
      </div>

      {/* 5. BREADCRUMBS & ACTION BAR */}
      <div className="px-4 md:px-12 py-3 flex items-center justify-between text-xs text-gray-500 bg-white border-b border-gray-100">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center space-x-2 border border-gray-200 rounded-full px-4 py-1.5 hover:bg-gray-50 transition font-bold text-gray-700 shadow-sm"
        >
          <ChevronLeft className="w-4 h-4 text-gray-800" />
          <span>Վերադառնալ</span>
        </button>

        <div className="hidden sm:flex items-center space-x-2 font-medium">
          <Home className="w-3.5 h-3.5 text-gray-400" />
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <a href="#" className="hover:underline">Անհատ</a>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <a href="#" className="hover:underline">Վարկեր</a>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <a href="#" className="hover:underline">Վարկեր</a>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <span className="text-gray-700 font-semibold">Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ</span>
        </div>
      </div>

      {/* 6. DETAILS SECTION (TABS & CONTENT) */}
      <section className="max-w-[1240px] mx-auto px-4 md:px-8 py-12">
        {/* TAB BUTTONS */}
        <div className="border-b border-gray-200 mb-8 flex space-x-8 text-sm md:text-base font-bold">
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-3 transition relative ${
              activeTab === 'about'
                ? 'text-[#6a0dad] border-b-2 border-[#6a0dad]'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Վարկի մասին
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`pb-3 transition relative ${
              activeTab === 'terms'
                ? 'text-[#6a0dad] border-b-2 border-[#6a0dad]'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Պայմաններ
          </button>
          <button
            onClick={() => setActiveTab('docs')}
            className={`pb-3 transition relative ${
              activeTab === 'docs'
                ? 'text-[#6a0dad] border-b-2 border-[#6a0dad]'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Պահանջվող փաստաթղթերի ցանկ
          </button>
        </div>

        {/* TAB 1: ՎԱՐԿԻ ՄԱՍԻՆ */}
        {activeTab === 'about' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
              <p className="text-gray-800">
                <span className="font-bold text-[#6a0dad]">Evocabank</span>-ն առաջարկում է բնակարանի, առանձնատան, բնակելի տան ձեռքբերման նպատակով տրամադրվող <a href="#" className="text-[#6a0dad] font-bold underline">հիփոթեքային վարկեր</a>:
              </p>

              <p className="text-gray-700">
                Գրավիչ ու մատչելի պայմաններով այս վարկատեսակի շնորհիվ մեզ հետ կստեղծես ապրելու համար հարմարավետ պայմաններ, կկարողանաս ձեռք բերել քո երազանքների բնակարանը՝ ցածր տոկոսադրույքով և ամենապարզ պայմաններով:
              </p>

              <p className="text-gray-700">
                Ընտրելով <span className="font-bold text-[#6a0dad]">Evocabank</span>-ը՝ կխնայես քո գումարն ու ժամանակը: Քո կողմից անշարժ գույքի ընտրությունից և վարկի ձևակերպման համար անհրաժեշտ փաստաթղթերը ներկայացնելուց հետո <span className="font-bold text-[#6a0dad]">Evocabank</span>-ը վարկի տրամադրման գործընթացը կկազմակերպի ամենասեղմ ժամկետներում:
              </p>

              <p className="text-gray-800 pt-2">
                Գործընկերներ կառուցապատողների ցանկին կարող եք ծանոթանալ հետևյալ <a href="#" className="text-[#6a0dad] font-bold underline">հղումով</a>:
              </p>
            </div>

            {/* Right Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-6">
              <div className="flex space-x-2">
                <span className="w-8 h-8 rounded-full bg-[#6a0dad] text-white flex items-center justify-center font-bold text-sm">
                  $
                </span>
                <span className="w-8 h-8 rounded-full bg-[#6a0dad] text-white flex items-center justify-center font-bold text-sm">
                  €
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-100 pb-5">
                <div>
                  <span className="text-xs text-gray-400 font-medium block">Մինչև</span>
                  <span className="text-2xl md:text-3xl font-black text-[#6a0dad]">80 մլն. ֏</span>
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-700 text-right">
                  Գումար (Համարժեք արտարժույթ)
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-100 pb-5">
                <div>
                  <span className="text-xs text-gray-400 font-medium block">Մինչև</span>
                  <span className="text-2xl md:text-3xl font-black text-[#6a0dad]">180 ամիս</span>
                </div>
                <span className="text-sm font-semibold text-gray-700">Ժամկետ</span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-100 pb-5">
                <div>
                  <span className="text-[10px] text-gray-400 font-medium block">Ֆիքսված տոկոսադրույքով սկսած</span>
                  <span className="text-2xl md:text-3xl font-black text-[#6a0dad]">8.2%-ից</span>
                </div>
                <span className="text-sm font-semibold text-gray-700">Տոկոսադրույք</span>
              </div>

              <div className="flex justify-between items-center pt-1">
                <div>
                  <span className="text-[10px] text-gray-400 font-medium block">Լողացող տոկոսադրույքով սկսած</span>
                  <span className="text-2xl md:text-3xl font-black text-[#6a0dad]">7.7%-ից</span>
                </div>
                <span className="text-sm font-semibold text-gray-700">Տոկոսադրույք</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ՊԱՅՄԱՆՆԵՐ */}
        {activeTab === 'terms' && (
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6 text-sm md:text-base text-gray-700">
            <ol className="space-y-6 list-decimal list-inside font-bold text-gray-900">
              
              {/* 1 */}
              <li className="border-b pb-4 border-gray-100">
                <span className="text-[#6a0dad] font-extrabold mr-2">1. Վարկի տրամադրման նպատակը</span>
                <p className="font-normal text-gray-600 mt-2 pl-6">
                  Վարկը տրամադրվում է բնակելի նշանակության անշարժ գույքի` բնակարանի, առանձնատան, բնակելի տան (առաջնային և երկրորդային շուկայից) ձեռք բերման նպատակով:
                </p>
              </li>

              {/* 2 */}
              <li className="border-b pb-4 border-gray-100">
                <span className="text-[#6a0dad] font-extrabold mr-2">2. Ովքեր կարող են դիմել</span>
                <p className="font-normal text-gray-600 mt-2 pl-6">
                  18 – 63 տարեկան ոչ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն բոլորի 63 տարեկանը կամ առկա է վերոնշյալ պահանջներին բավարարող ոչ ռեզիդենտ համավարկառու:
                </p>
              </li>

              {/* 3 */}
              <li className="border-b pb-4 border-gray-100">
                <span className="text-[#6a0dad] font-extrabold mr-2">3. Վարկավորման արժույթը</span>
                <p className="font-normal text-gray-600 mt-2 pl-6">
                  ԱՄՆ դոլար, Եվրո, ՀՀ դրամ
                </p>
              </li>

              {/* 4 */}
              <li className="border-b pb-4 border-gray-100">
                <span className="text-[#6a0dad] font-extrabold mr-2">4. Վարկավորման գումար</span>
                <p className="font-normal text-gray-600 mt-2 pl-6">
                  2.000.000 - 80.000.000 ՀՀ դրամ կամ համարժեք արտարժույթ
                </p>
              </li>

              {/* 5 */}
              <li className="border-b pb-4 border-gray-100">
                <span className="text-[#6a0dad] font-extrabold mr-2">5. Վարկի մարման ժամկետը</span>
                <p className="font-normal text-gray-600 mt-2 pl-6">
                  60 - 180 ամիս
                </p>
              </li>

              {/* 6. TABLE */}
              <li className="border-b pb-6 border-gray-100">
                <span className="text-[#6a0dad] font-extrabold mr-2">6. Տարեկան անվանական տոկոսադրույքներ [1]</span>
                <div className="overflow-x-auto mt-4 font-normal">
                  <table className="w-full text-left text-xs md:text-sm border-collapse border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50 text-gray-800">
                        <th className="border border-gray-200 p-3 font-bold">Արժույթ</th>
                        <th className="border border-gray-200 p-3 font-bold">Հաստատուն</th>
                        <th className="border border-gray-200 p-3 font-bold">Փաստացի</th>
                        <th className="border border-gray-200 p-3 font-bold">Լողացող</th>
                        <th className="border border-gray-200 p-3 font-bold">Փաստացի</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr>
                        <td className="border border-gray-200 p-3 font-bold text-slate-900">ԱՄՆ դոլար</td>
                        <td className="border border-gray-200 p-3">9.2% - 11%</td>
                        <td className="border border-gray-200 p-3">9.8 - 11.8%</td>
                        <td className="border border-gray-200 p-3">Սկսած 9.2%-ից (հաստատուն բաղադրիչ` սկսած 8.2%-ից + փոփոխուն բաղադրիչ)</td>
                        <td className="border border-gray-200 p-3">5.5 - 16.3%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3 font-bold text-slate-900">Եվրո</td>
                        <td className="border border-gray-200 p-3">8.2% - 10%</td>
                        <td className="border border-gray-200 p-3">8.7 - 10.7%</td>
                        <td className="border border-gray-200 p-3">Սկսած 7.7%-ից (հաստատուն բաղադրիչ` սկսած 7.7%-ից + փոփոխուն բաղադրիչ)</td>
                        <td className="border border-gray-200 p-3">4.45 - 15.2%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3 font-bold text-slate-900">ՀՀ դրամ</td>
                        <td className="border border-gray-200 p-3">14 - 15%</td>
                        <td className="border border-gray-200 p-3">15.2 - 16.3%</td>
                        <td className="border border-gray-200 p-3">Սկսած 13.2%-ից (հաստատուն բաղադրիչ` սկսած 4.2%-ից + փոփոխուն բաղադրիչ)</td>
                        <td className="border border-gray-200 p-3">9.7 – 18.4%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 font-normal text-xs md:text-sm text-gray-600 space-y-2 bg-purple-50/50 p-4 rounded-xl">
                  <p><span className="font-bold text-gray-800">Լողացող տոկոսադրույքի տատանման առավելագույն և նվազագույն շեմ:</span> +4%</p>
                  <p>Լողացող տոկոսադրույքի փոփոխուն բաղադրիչը կսկսի վերանայվել վարկի տրամադրման պահից 36 ամիս ժամանակաշրջանին հաջորդող առաջին մարման ամսաթվից սկսած և յուրաքանչյուր 6 ամիսը մեկ՝ կիրառելով վերանայման պահին Բանկում գործող (կայքում փաստացի հրապարակված) տոկոսադրույքը։</p>
                  <p><span className="font-bold text-gray-800">Լողացող տոկոսադրույքի հաշվարկման կարգ:</span> Բանկի կողմից հաճախորդի փոխարեն գույքի ապահովագրություն իրականացնելու դեպքում (իրականացվում է վարկի գործողության երկրորդ տարվանից սկսված)՝ Վարկի տոկոսադրույք + 0.2%</p>
                </div>
              </li>

              {/* 7 */}
              <li className="border-b pb-4 border-gray-100">
                <span className="text-[#6a0dad] font-extrabold mr-2">7. Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք</span>
                <p className="font-normal text-gray-600 mt-2 pl-6">
                  Տուգանք չի կիրառվում
                </p>
              </li>

              {/* 8 */}
              <li className="border-b pb-4 border-gray-100">
                <span className="text-[#6a0dad] font-extrabold mr-2">8. Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր</span>
                <p className="font-normal text-gray-600 mt-2 pl-6">
                  ժամկետանց վարկի համար՝ օրական 0.015%,<br />
                  ժամկետանց տոկոսագումարի համար՝ օրական 0.1%:
                </p>
              </li>

              {/* 9 */}
              <li className="border-b pb-4 border-gray-100">
                <span className="text-[#6a0dad] font-extrabold mr-2">9. Վարկի մարման ձևը</span>
                <p className="font-normal text-gray-600 mt-2 pl-6">
                  Անուիտետային կամ մայր գումարի հավասարաչափ մարումներով վարկ. վճարումները պետք է կատարվեն ամսական կտրվածքով։
                </p>
              </li>

              {/* 10 */}
              <li className="border-b pb-4 border-gray-100">
                <span className="text-[#6a0dad] font-extrabold mr-2">10. Վարկի վերադարձելիության ապահովման միջոց</span>
                <ul className="font-normal text-gray-600 mt-2 pl-6 list-disc space-y-1">
                  <li>Ձեռքբերվող անշարժ գույք</li>
                  <li>Գնման իրավունք` կառուցապատողնից ձեռքբերման դեպքում:</li>
                  <li>Բացի անշարժ գույքի գրավադրումից վարկառուից կարող է պահանջվել նաև ՀՀ ռեզիդենտ հանդիսացող առնվազն մեկ ֆիզիկական կամ իրավաբանական անձի երաշխավորություն:</li>
                </ul>
              </li>

              {/* 11 */}
              <li className="border-b pb-4 border-gray-100">
                <span className="text-[#6a0dad] font-extrabold mr-2">11. Վարկ/գրավ հարաբերակցությունը [2]</span>
                <p className="font-normal text-gray-600 mt-2 pl-6">
                  Գնահատված արժեքի մինչև 70%<br />
                  Լրացուցիչ անշարժ գույքի գրավադրման դեպքում, վարկի գումարը չպետք է գերազանցի ձեռք բերվող անշարժ գույքի գնահատված շուկայական արժեքը` պահպանելով գրավադրվող բոլոր գույքերի գնահատված շուկայական արժեքների հանրագումարի 70% «Վարկ/գրավ» հարաբերակցությունը:
                </p>
              </li>

              {/* 12 */}
              <li className="border-b pb-4 border-gray-100">
                <span className="text-[#6a0dad] font-extrabold mr-2">12. Ապահովագրություն</span>
                <p className="font-normal text-gray-600 mt-2 pl-6">
                  Անշարժ գույքի ապահովագրություն- պարտադիր յուրաքանչուր տարի վարկի մնացորդի չափով:
                </p>
              </li>

              {/* 13 */}
              <li className="border-b pb-4 border-gray-100">
                <span className="text-[#6a0dad] font-extrabold mr-2">13. Վարկի տրամադրման եղանակը</span>
                <p className="font-normal text-gray-600 mt-2 pl-6">
                  Անկանխիկ՝ /գումարը փոխանցվում է վաճառողի հաշվեհամարին/
                </p>
              </li>

              {/* 14 */}
              <li className="border-b pb-4 border-gray-100">
                <span className="text-[#6a0dad] font-extrabold mr-2">14. Վարկունակության գնահատում</span>
                <p className="font-normal text-gray-600 mt-2 pl-6">
                  Հաճախորդը չպետք է ունենա վերջին 1 տարվա ընթացքում վարկային պարտավորությունների գծով դասակարգումներ և մարումների գծով ուշացման օրերի հանրագումարը չպետք է գերազանցի 30 օրը: Եկամուտների վերլուծություն չի իրականացվում:
                </p>
              </li>

              {/* 15 */}
              <li className="border-b pb-4 border-gray-100">
                <span className="text-[#6a0dad] font-extrabold mr-2">15. Այլ պայմաններ</span>
                <ul className="font-normal text-gray-600 mt-2 pl-6 list-disc space-y-1">
                  <li>Վարկառուն Բանկում մուտքագրում է կանխավճար [3], որը սառեցվում է մինչև վարկի տրամադրումը:</li>
                  <li>Առաջնային շուկայից անշարժ գույք ձեռք բերելու դեպքում, որպես կանխավճարը հավաստող փաստաթուղթ, Հաճախորդը կարող է Բանկ ներկայացնել կառուցապատողի կողմից տրամադրված նախավճարի անդորրագիր և/կամ նախավճարների պայմանանագրեր/համաձայնագրեր:</li>
                  <li>Հաճախորդը պետք է ներկայացնի եկամտի աղբյուրների վերաբերյալ անհրաժեշտ տեղեկատվություն</li>
                </ul>
              </li>

              {/* 16 */}
              <li className="pb-2">
                <span className="text-[#6a0dad] font-extrabold mr-2">16. Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման Ժամկետներ</span>
                <p className="font-normal text-gray-600 mt-2 pl-6">
                  Վարկի տրամադրման կամ մերժման որոշումը կայացվում է առավելագույնը 10 (տաս) աշխատանքային օրվա ընթացքում, որոշումների կայացման համար Բանկի կողմից պահանջվող նախնական փաստաթղթերը ամբողջությամբ ներկայացնելուց հետո:<br />
                  Վարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, գրավի առարկա հանդիսացող գույքի գրավադրման գործընթացը ավարտելուց հետո առավելագույնը 2 (երկու) աշխատանքային օրվա ընթացքում:
                </p>
              </li>

            </ol>

            {/* Footnotes */}
            <div className="pt-6 border-t border-gray-200 text-xs text-gray-500 space-y-1">
              <p>[1] Բանկի կողմից հաճախորդի փոխարեն գույքի ապահովագրություն իրականացնելու դեպքում (իրականացվում է վարկի գործողության երկրորդ տարվանից սկսված)՝ նշված տոկոսադրույք + 0.2%:</p>
              <p>[2] Վարկ/գրավ գործակցի հաշվարկման ժամանակ ընդունվում է անշարժ գույքի գնահատման և ձեռքբերման արժեքներից նվազագույնը:</p>
              <p>[3] Գույքի ձեռքբերման գնի և վարկի գումարի տարբերության չափով:</p>
            </div>
          </div>
        )}

        {/* TAB 3: ՓԱՍՏԱԹՂԹԵՐ */}
        {activeTab === 'docs' && (
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm text-gray-700 text-sm md:text-base leading-relaxed">
            <h3 className="font-extrabold text-slate-900 text-lg mb-6 text-[#6a0dad]">
              Պահանջվող փաստաթղթերի ցանկ
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Հիփոթեքային վարկի տրամադրման դիմում-հայտ</li>
              <li>
                Անձնագիր կամ նույնականացման քարտ, ինչպես նաև սոցիալական քարտ կամ սոցիալական քարտ չունենալու մասին տեղեկանք 
                <span className="text-gray-500 italic block text-xs md:text-sm mt-0.5">
                  (ընդ որում սոցիալական քարտ և սոցիալական քարտ չունենալու մասին տեղեկանք չի պահանջվում, եթե ներկայացվել է նույնականացման քարտ)
                </span>
              </li>
              <li>Անչափահաս երեխաների ծննդյան վկայական (առկայության դեպքում)</li>
              <li>
                Տեղեկանք կամ աշխատանքային պայմանագիր, բանկային հաշվի քաղվածք /12 ամիս/ եկամուտները հավաստող այլ փաստաթղթեր, որոնց տրամադրման ժամկետը Բանկին ներկայացման օրվա դրությամբ չպետք է գերազանցի 30 օրացույցային օրը
              </li>
              <li>Ամուսնության վկայական (առկայության դեպքում)</li>
              <li>Լիազորագիր /անհրաժեշտության դեպքում/</li>
              <li>Լիազորված անձի անձնագիր</li>
              <li>Ամուսնացած լինելու դեպքում, ամուսնու/կնոջ համաձայնություն</li>
              <li>Ձեռք բերվող անշարժ գույքի գնահատման հաշվետվություն</li>
              <li>Ձեռք բերվող անշարժ գույքի սեփականության վկայական</li>
              <li>Ձեռք բերվող անշարժ գույքի ձեռք բերման հիմքեր</li>
              <li>Ձեռք բերվող անշարժ գույքի սեփականատերերի անձնագրեր, ամուսնության վկայական /առկայության դեպքում/</li>
              <li>Երաշխավորող անձ /ՀՀ ռեզիդենտ/</li>
              <li>Բանկի պահանջով այլ փաստաթղթեր</li>
            </ul>
          </div>
        )}
      </section>

      {/* 6.5. BANNER SECTION */}
      <section 
        className="w-full min-h-[300px] md:min-h-[420px] bg-cover bg-center flex items-center justify-center my-8 relative px-4 text-center"
        style={{
          backgroundImage: `url('https://www.evoca.am/images-cache/loans/1/16494230496694/1920x527.jpg')`
        }}
      >
        <div className="max-w-3xl z-10 px-4">
          <h2 className="text-white text-xl md:text-3xl lg:text-4xl font-extrabold leading-snug drop-shadow-md">
            Evocabank-ը կօգնի ձեռք բերել քեզ երազանքների բնակարանը` առանց որևէ դժվարության:
          </h2>
        </div>
      </section>

       {/* 7. ԱՅԼ ՎԱՐԿԵՐ SLIDER */}
            <section className="max-w-[1240px] mx-auto px-4 py-12">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#222] mb-8">
                Այլ վարկեր
              </h3>
      
              <div className="relative">
                <button className="swiper-button-prev-custom absolute -left-6 top-1/2 -translate-y-1/2 z-20 text-[#6a0dad] hover:scale-110 transition hidden md:block">
                  <ChevronLeft className="w-8 h-8 stroke-[3]" />
                </button>
                <button className="swiper-button-next-custom absolute -right-6 top-1/2 -translate-y-1/2 z-20 text-[#6a0dad] hover:scale-110 transition hidden md:block">
                  <ChevronRight className="w-8 h-8 stroke-[3]" />
                </button>
      
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={24}
                  slidesPerView={1}
                  navigation={{
                    prevEl: '.swiper-button-prev-custom',
                    nextEl: '.swiper-button-next-custom',
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                  }}
                  className="w-full py-2"
                >
                  {otherLoans.map((loan) => (
                    <SwiperSlide key={loan.id}>
                      <Link to={loan.path || '#'} className="group block text-center">
                        <div className="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm mb-3">
                          <img
                            src={loan.image}
                            alt={loan.title}
                            className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <p className="font-bold text-xs md:text-sm text-gray-900 group-hover:text-[#6a0dad] transition line-clamp-2 px-1">
                          {loan.title}
                        </p>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </section>
      
      
             {/* 9. ONLINE & MOBILE BANKING SECTION */}
                 <section className="w-full bg-[#6a0dad] text-white py-14 px-6 md:px-12 relative overflow-hidden rounded-t-[2.5rem] lg:rounded-t-[3.5rem]">
                   {/* Background Geometric Figures */}
                   <div className="absolute top-10 left-16 w-8 h-8 rounded-full border-4 border-pink-400 opacity-60 pointer-events-none"></div>
                   <div className="absolute top-1/3 left-12 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-purple-400 rotate-12 opacity-50 pointer-events-none"></div>
                   <div className="absolute top-16 right-20 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[22px] border-b-pink-300 -rotate-45 opacity-70 pointer-events-none"></div>
                   <div className="absolute bottom-16 right-12 w-8 h-8 border-4 border-pink-400 rotate-12 opacity-80 pointer-events-none"></div>
           
                   <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                     
                     {/* Left Side Mockups */}
                     <div className="w-full lg:w-1/2 flex items-center justify-center relative">
                       {/* Laptop */}
                       <div className="relative w-full max-w-[440px]">
                         <div className="relative rounded-t-xl border-[7px] border-[#1a1a1a] bg-black shadow-2xl overflow-hidden aspect-[16/10]">
                           <iframe
                             src="https://www.youtube.com/embed/KwAgMHEx8ys?enablejsapi=1"
                             title="EvocaTOUCH Video"
                             className="w-full h-full border-0"
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                             allowFullScreen
                           ></iframe>
                         </div>
                         <div className="w-[108%] -translate-x-[4%] h-3 bg-[#2d2d2d] rounded-b-xl border-t border-neutral-700 shadow-xl relative flex justify-center">
                           <div className="w-16 h-1 bg-neutral-600 rounded-b-md"></div>
                         </div>
                       </div>
           
                       {/* Mobile Phone */}
                       <div className="relative -ml-20 z-20 top-6 shrink-0">
                         <div className="w-32 sm:w-40 aspect-[9/19] rounded-[2.2rem] border-[5px] border-[#1a1a1a] bg-black overflow-hidden shadow-2xl relative">
                           <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-[#1a1a1a] rounded-full z-30"></div>
                           <img
                             src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg"
                             alt="Evoca Mobile App"
                             className="w-full h-full object-cover"
                           />
                         </div>
                       </div>
                     </div>
           
                     {/* Right Side Info */}
                     <div className="w-full lg:w-1/2 space-y-6">
                       <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                         Օնլայն և մոբայլ բանկինգ
                       </h2>
                       
                       <p className="text-purple-100 text-sm md:text-base leading-relaxed max-w-xl">
                         Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն
                         առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
                       </p>
           
                       <div>
                         <Link
                           to="/evoca-online"
                           className="inline-block bg-white text-[#6a0dad] px-7 py-2.5 rounded-full font-bold hover:bg-purple-50 transition shadow-md text-sm md:text-base"
                         >
                           Դառնալ հաճախորդ
                         </Link>
                       </div>
           
                       {/* QR Code and Stores */}
                       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                         <div className="bg-white p-1.5 rounded-lg shadow-md">
                           <img
                             src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://www.evoca.am"
                             alt="Evoca App QR Code"
                             className="w-16 h-16"
                           />
                         </div>
                         
                         <div className="space-y-2">
                           <p className="text-xs text-purple-200">
                             Ներբեռնել հավելվածները՝
                           </p>
                           <div className="flex gap-2">
                             <a href="#" className="bg-black text-white text-[11px] font-bold px-3 py-1.5 rounded-md hover:opacity-80 transition">
                               App Store
                             </a>
                             <a href="#" className="bg-black text-white text-[11px] font-bold px-3 py-1.5 rounded-md hover:opacity-80 transition">
                               Google Play
                             </a>
                           </div>
                         </div>
                       </div>
                     </div>
           
                   </div>
           
                   {/* Updated Date Banner Notice */}
                   <div className="text-right text-[10px] text-purple-200 mt-8 max-w-[1240px] mx-auto">
                     Թարմացվել է` 04/09/2026 17:45
                   </div>
                 </section>
           
                 {/* 10. FOOTER SECTION */}
                 <footer className="bg-white border-t border-gray-100 text-xs text-gray-600 pt-12 pb-12">
                   <div className="max-w-[1240px] mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                     
                     <div className="space-y-4">
                       <span className="text-2xl font-black text-gray-900 block">
                         evoca<span className="text-gray-400 font-bold">BANK</span>
                       </span>
                       <p className="text-gray-600 leading-relaxed">
                         ք․ Երևան, 0010,<br /> Հանրապետության 44/2
                       </p>
                       <p className="text-[11px] text-gray-400 leading-tight">
                         Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
                       </p>
                       <p className="text-[10px] text-gray-400 pt-2">
                         1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
                       </p>
                     </div>
           
                     <div>
                       <h4 className="font-bold text-gray-900 mb-3">Բանկի մասին</h4>
                       <ul className="space-y-2">
                         <li><a href="#" className="hover:text-[#6a0dad]">Մեր մասին</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Ղեկավարություն</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Բաժնետերեր</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Հաշվետվություններ</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Իրավական ակտեր</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Սակագներ</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Օտարվող գույք</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Կառուցապատողներ</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Գործընկեր ավտոսրահներ</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Սակագների արխիվ</a></li>
                       </ul>
                     </div>
           
                     <div>
                       <h4 className="font-bold text-gray-900 mb-3">Օգտակար հղումներ</h4>
                       <ul className="space-y-2">
                         <li><a href="#" className="hover:text-[#6a0dad]">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Հաճախորդի ռեզիդենտության չափանիշներ</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Կարգավորում</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Գաղտնիության քաղաքականություն</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Ֆին. հաշտարար</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Ֆինանսական հանցագործությունների կանխարգելում</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Հղումներ Բանկի քարտապանների համար</a></li>
                       </ul>
                     </div>
           
                     <div>
                       <h4 className="font-bold text-gray-900 mb-3">Այլ հղումներ</h4>
                       <ul className="space-y-2">
                         <li><a href="#" className="hover:text-[#6a0dad]">EvocaONLINE</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Պահատուփեր</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Հաճախ տրվող հարցեր</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Հայտարարություններ</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Dibrary</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Բուկլետներ</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Հետադարձ կապ</a></li>
                         <li><a href="#" className="hover:text-[#6a0dad]">Կայքի քարտեզ</a></li>
                       </ul>
                     </div>
           
                     <div className="space-y-4">
                       <div className="flex gap-3 text-gray-400 font-semibold">
                         <a href="#" className="hover:text-[#6a0dad]">f</a>
                         <a href="#" className="hover:text-[#6a0dad]">in</a>
                         <a href="#" className="hover:text-[#6a0dad]">yt</a>
                       </div>
           
                       <div className="flex gap-2">
                         <a href="#" className="bg-black text-white text-[10px] font-bold px-3 py-1 rounded hover:opacity-80 transition">
                           App Store
                         </a>
                         <a href="#" className="bg-black text-white text-[10px] font-bold px-3 py-1 rounded hover:opacity-80 transition">
                           Google Play
                         </a>
                       </div>
           
                       <a href="#" className="text-[#6a0dad] font-bold block hover:underline">
                         Բանկի հասցեները և աշխատաժամերը
                       </a>
           
                       <a href="#" className="text-[#6a0dad] font-bold block hover:underline">
                         Կապ մեզ հետ
                       </a>
           
                       <div className="space-y-0.5 font-bold text-gray-900 text-sm">
                         <p>+374 10 605555</p>
                         <p className="text-[#6a0dad] text-base">8444</p>
                       </div>
                     </div>
           
                   </div>
           
                   {/* BOTTOM PARTNERS / CERTIFICATES BAR */}
                   <div className="max-w-[1240px] mx-auto px-4 md:px-8 pt-8 mt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-400">
                     <p className="max-w-2xl leading-relaxed">
                       Կայքում տեղադրված տեղեկատվության վերաբերյալ տարբերություններ առաջանալու դեպքում, ինչպես նաև ռուսերեն և անգլերեն լեզուներով ոչ ամբողջական լինելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով։ «Էվոկաբանկ» ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների համար։
                     </p>
                     <div className="flex items-center gap-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition">
                       <span className="font-bold text-xs">fininfo</span>
                       <span className="font-bold text-xs">abcfinance.am</span>
                       <span className="font-bold text-xs">arca</span>
                     </div>
                   </div>
                 </footer>
           
                 {/* FLOATING SIDEBAR SOCIAL ICONS */}
                 <div className="hidden lg:flex flex-col items-center gap-3 fixed left-2 top-1/2 -translate-y-1/2 z-30 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-md border border-gray-100 text-gray-500">
                   <a href="#" className="hover:text-[#6a0dad] transition font-bold text-xs">f</a>
                   <a href="#" className="hover:text-[#6a0dad] transition font-bold text-xs">in</a>
                   <a href="#" className="hover:text-[#6a0dad] transition font-bold text-xs">P</a>
                 </div>
           
                 {/* FLOATING CHAT & CALL BUTTONS */}
                 <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
                   <button className="bg-[#6a0dad] text-white font-bold text-xs px-5 py-3 rounded-full shadow-xl hover:bg-purple-900 transition flex items-center gap-2">
                     Գրեք մեզ, մենք օնլայն ենք ․․․
                   </button>
                   <button className="bg-[#d8b4fe] text-[#6a0dad] p-3 rounded-full shadow-lg hover:bg-purple-300 transition">
                     <Phone className="w-5 h-5 fill-current" />
                   </button>
                 </div>
           
               </div>
             );
           };
export default NonResidentMortgagePage;