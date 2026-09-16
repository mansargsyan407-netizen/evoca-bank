import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

const MortgageDisplaced = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about'); // 'about' | 'terms'

  // «Այլ վարկեր» ցանկը
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

  // 19 Պայմանների ցանկը
  const conditions = [
    {
      id: 1,
      title: 'Վարկավորման նպատակը',
      content: 'ՀՀ-ում բնակելի նշանակության անշարժ գույքի` բնակարանի, անհատական բնակելի տան (առաջնային և երկրորդային շուկայից) ձեռքբերում կամ կառուցապատում:'
    },
    {
      id: 2,
      title: 'Ովքեր կարող են դիմել',
      content: 'Հավաստագրում ներառված անձը կամ նրա ընտանիքի անդամը: Վարկառուի տարիքային շեմը հաշվի չի առնվում, եթե գործում առկա է համավարկառու, ում 65 տարեկանը չի բոլորի վարկի սպասարկման ողջ ընթացքում:'
    },
    {
      id: 3,
      title: 'Ծրագրի շահառուներ',
      content: 'Կառավարության 2024 թ․ մայիսի 16-ի N 710-L որոշմամբ սահմանված անձիք'
    },
    {
      id: 4,
      title: 'Վարկավորման արժույթը',
      content: 'ՀՀ դրամ'
    },
    {
      id: 5,
      title: 'Վարկավորման գումար',
      content: '2,000,000.00 - 55,000,000.00 ՀՀ դրամ'
    },
    {
      id: 6,
      title: 'Վարկի մարման ժամկետը',
      content: '120 ամիս'
    },
    {
      id: 7,
      title: 'Պետության կողմից վճարվող կանխավճար',
      content: 'Հավաստագրի արժեքի 20%'
    },
    {
      id: 8,
      title: 'Տարեկան անվանական տոկոսադրույք',
      content: '13%'
    },
    {
      id: 9,
      title: 'Աջակցության սահմանաչափեր',
      content: 'Աջակցության չափն ընտանիքի յուրաքանչյուր անդամի հաշվով որոշվում է ըստ հավաստագրի իրացման համար շահառու ընտանիքի կողմից ընտրված բնակավայրի: Բնակավայրերի ցանկը հաստատված է Կառավարության 2024 թ․ մայիսի 16-ի N 710-L որոշմամբ:'
    },
    {
      id: 10,
      title: 'Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք',
      content: 'Տուգանք չի կիրառվում:'
    },
    {
      id: 11,
      title: 'Վարկային պայմանագրով ամրագրված վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր',
      content: 'Ժամկետանց վարկի համար՝ օրական 0,015 %, ժամկետանց տոկոսագումարի համար՝ օրական 0,1 %:'
    },
    {
      id: 12,
      title: 'Վարկի վերադարձելիության ապահովման միջոց',
      content: 'Ձեռք բերվող անշարժ գույք, անշարժ գույքի գնման իրավունքը: Կառուցապատման դեպքում հողամասը, որտեղ իրականացվում է անշարժ գույքի կառուցումը/կառուցվող անշարժ գույքը:'
    },
    {
      id: 13,
      title: 'Ապահովագրություն',
      content: 'Չի պահանջվում'
    },
    {
      id: 14,
      title: 'Վարկի տրամադրման եղանակը',
      content: 'Անկանխիկ` միանվագ կամ փուլային'
    },
    {
      id: 15,
      title: 'Բանկի կողմից գանձվող միջնորդավճարներ',
      content: 'Առանց միջնորդավճարի'
    },
    {
      id: 16,
      title: 'Վարկունակության գնահատում',
      content: `1. Վարկային հայտի ներկայացման օրվա դրությամբ, վարկառուն, համավարկառուները, գրավատուները չպետք է ունենան ստանդարտ դասից խիստ դասով դասակարգված գործող պարտավորություններ:
2. Այն դեպքում, երբ վարկի գումարը չի գերազանցում ծրագրով սահմանված պետական աջակցության սահմանաչափերը, վարկունակության գնահատում չի իրականացվում:
Այն դեպքում, երբ վարկի գումարը գերազանցում է ծրագրով սահմանված պետական աջակցության սահմանաչափերը, կատարվում է վարկունակության գնահատում, ընդ որում եկամուտ/ծախս հարաբերակցությունը (OTI) կարող է կազմել առավելագույնը 100%:`
    },
    {
      id: 17,
      title: 'Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ',
      content: `1. Վարկի տրամադրման կամ մերժման որոշումը կայացվում է առավելագույնը 10 (տաս) աշխատանքային օրվա ընթացքում, որոշումների կայացման համար Բանկի կողմից պահանջվող նախնական փաստաթղթերը ամբողջությամբ ներկայացնելուց հետո:
2. Վարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, գրավի առարկա հանդիսացող գույքի գրավադրման գործընթացը ավարտելուց հետո առավելագույնը 2 (երկու) աշխատանքային օրվա ընթացքում:`
    },
    {
      id: 18,
      title: 'Հատուկ պայմաններ',
      content: `1. Շահառու ընտանիքի բոլոր անդամներն ունեն Հայաստանի Հանրապետության քաղաքացիություն.
2. Ձեռք բերվող կամ կառուցվող բնակարանի կամ անհատական բնակելի տան բնակելի մակերեսը շահառու ընտանիքի յուրաքանչյուր անդամի հաշվով չպետք է պակաս լինի 9 քմ-ից.
3. Ձեռք բերվող բնակարանի կամ կառուցվող շենքից բնակարան գնելու իրավունքի կամ անհատական բնակելի տան ձեռքբերման գինը չպետք է գերազանցի 55 մլն դրամը:`
    },
    {
      id: 19,
      title: 'Այլ դրույթներ',
      content: 'Սույն պայմաններով չկարգավորվող դեպքերը կարգավորվում են Կառավարության 2024 թ․ մայիսի 16-ի N 710-L որոշման դրույթներով և պայմաններով:'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#333] relative">
      {/* 1. TOP HEADER NAVIGATION */}
      <header className="border-b bg-white text-xs text-gray-600">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex gap-4">
            <span className="font-semibold text-[#8b00ff] cursor-pointer">Անհատ</span>
            <span className="hover:text-black cursor-pointer">Բիզնես</span>
            <span className="hover:text-black cursor-pointer">Ակնթարթային վճարումներ</span>
            <span className="hover:text-black cursor-pointer">Մեր մասին</span>
            <span className="hover:text-black cursor-pointer">Նորություններ</span>
            <span className="hover:text-black cursor-pointer">Բլոգ</span>
            <span className="hover:text-black cursor-pointer">Կարիերա</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="cursor-pointer hover:text-black">Առցանց հայտեր ▾</span>
            <span className="cursor-pointer hover:text-black">Հետադարձ կապ ▾</span>
            <div className="flex items-center gap-2 text-gray-500">
              <span className="cursor-pointer">📍</span>
              <span className="cursor-pointer">🌐</span>
              <span className="cursor-pointer">🔍</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. MAIN NAVBAR */}
      <nav className="bg-white border-b py-3 px-4">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-black tracking-tight text-[#333] cursor-pointer">
              evoca
            </h1>
            <div className="hidden md:flex gap-6 text-sm font-semibold">
              <span className="text-[#8b00ff] border-b-2 border-[#8b00ff] pb-1 cursor-pointer">Վարկեր</span>
              <span className="hover:text-[#8b00ff] cursor-pointer">Քարտեր</span>
              <span className="hover:text-[#8b00ff] cursor-pointer">Ավանդներ</span>
              <span className="hover:text-[#8b00ff] cursor-pointer">Հաշիվներ</span>
              <span className="hover:text-[#8b00ff] cursor-pointer">Փոխանցումներ</span>
              <span className="hover:text-[#8b00ff] cursor-pointer">Արժեթղթեր</span>
              <span className="hover:text-[#8b00ff] cursor-pointer">EvocaSALARY</span>
              <span className="hover:text-[#8b00ff] cursor-pointer">EvocaTOUCH</span>
            </div>
          </div>
          <button className="bg-[#5c00e6] hover:bg-[#4d00c4] text-white text-xs font-bold py-2 px-5 rounded-full transition">
            EvocaONLINE
          </button>
        </div>
      </nav>

      {/* 3. SUB CATEGORY BAR */}
      <div className="bg-[#5c00e6] text-white text-xs py-3 px-4">
        <div className="max-w-[1200px] mx-auto flex gap-6 font-medium">
          <span className="bg-[#4100a8] px-3 py-1 rounded cursor-pointer font-bold">Վարկեր</span>
          <span className="py-1 hover:text-purple-200 cursor-pointer">Վարկային պատմություն և սքոր</span>
          <span className="py-1 hover:text-purple-200 cursor-pointer">Կարևոր տեղեկատվություն</span>
        </div>
      </div>

      {/* 4. HERO SECTION */}
      <div className="bg-[#f2f0f9] min-h-[380px] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center min-h-[380px]">
          <div className="p-8 md:p-12 z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug mb-4">
              Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Evocabank-ը միշտ ձեր կողքին է: Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Լեռնային Ղարաբաղից բռնի տեղահանված ընտանիքներին:
            </p>
          </div>

          <div className="bg-[#5c00e6] h-full flex items-center justify-center relative min-h-[300px]">
            <img 
              src="https://www.evoca.am/images-cache/loans/1/17364209867554/560x400.png" 
              alt="Հիփոթեքային վարկ" 
              className="object-cover w-full h-full max-h-[380px]"
            />
          </div>
        </div>
      </div>

      {/* 5. TABS SECTION */}
      <div className="bg-white border-b mt-4">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex gap-12 text-sm font-bold text-gray-600">
            <button
              onClick={() => setActiveTab('about')}
              className={`py-3 border-b-2 transition-all ${
                activeTab === 'about'
                  ? 'border-[#5c00e6] text-[#5c00e6]'
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              Վարկի մասին
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`py-3 border-b-2 transition-all ${
                activeTab === 'terms'
                  ? 'border-[#5c00e6] text-[#5c00e6]'
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              Պայմաններ
            </button>
          </div>
        </div>
      </div>

      {/* 6. TAB CONTENT */}
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        {activeTab === 'about' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 text-sm md:text-base text-gray-800 leading-relaxed font-medium pt-4">
              <p>
                Հիփոթեքային վարկը տրամադրվում է ՀՀ-ում բնակելի նշանակության անշարժ գույքի` 
                բնակարանի, անհատական բնակելի տան (առաջնային և երկրորդային շուկայից) ձեռքբերման 
                կամ բնակելի տան կառուցապատման նպատակով:
              </p>
            </div>

            <div className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm space-y-6">
              <div className="w-10 h-10 rounded-full bg-[#6a0dad] text-white flex items-center justify-center font-bold text-lg">
                ֏
              </div>

              <div className="flex justify-between items-baseline border-b pb-4 border-gray-100">
                <div>
                  <span className="text-xs text-gray-400 block mb-1">մինչև</span>
                  <div className="text-2xl font-black text-[#6a0dad]">
                    55 մլն ֏
                  </div>
                </div>
                <span className="text-xs font-semibold text-gray-700">Գումար</span>
              </div>

              <div className="flex justify-between items-baseline border-b pb-4 border-gray-100">
                <div>
                  <span className="text-xs text-gray-400 block mb-1">մինչև</span>
                  <div className="text-2xl font-black text-[#6a0dad]">
                    120 ամիս
                  </div>
                </div>
                <span className="text-xs font-semibold text-gray-700">Մարման ժամկետ</span>
              </div>

              <div className="flex justify-between items-baseline pt-2">
                <div className="text-2xl font-black text-[#6a0dad]">
                  13%
                </div>
                <span className="text-xs font-semibold text-gray-700">Տոկոսադրույք</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b bg-gray-50">
              <h3 className="text-lg font-bold text-gray-800">
                Վարկավորման հիմնական պայմանները
              </h3>
            </div>
            <div className="divide-y divide-gray-100">
              {conditions.map((item) => (
                <div 
                  key={item.id} 
                  className="grid grid-cols-1 md:grid-cols-3 p-5 hover:bg-gray-50/50 transition gap-4"
                >
                  <div className="font-semibold text-gray-800 text-sm flex gap-2">
                    <span className="text-[#6a0dad] font-bold">{item.id}.</span>
                    <span>{item.title}</span>
                  </div>
                  <div className="md:col-span-2 text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* BREADCRUMB & BACK ACTION */}
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        {/* Ուղղված կոճակը այստեղ է */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-1 border bg-white px-4 py-1.5 rounded-full shadow-sm hover:bg-gray-50 transition cursor-pointer"
        >
          ← Վերադառնալ
        </button>

        <div className="flex items-center gap-2 flex-wrap">
          <Link to="/" className="hover:underline">🏠</Link>
          <span>›</span>
          <Link to="/" className="hover:underline">Անհատ</Link>
          <span>›</span>
          <Link to="/loans" className="hover:underline">Վարկեր</Link>
          <span>›</span>
          <Link to="/loans" className="hover:underline">Վարկեր</Link>
          <span>›</span>
          <span className="text-gray-800 font-medium">
            Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին
          </span>
        </div>
      </div>

      {/* 7. ԱՅԼ ՎԱՐԿԵՐ (SWIPER CAROUSEL) SECTION */}
      <section className="max-w-[1200px] mx-auto px-4 py-8 mt-12">
        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6">
          Այլ վարկեր
        </h3>

        <div className="relative group/swiper">
          <button className="swiper-button-prev-custom absolute -left-5 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-2 rounded-full text-purple-700 hover:bg-purple-50 hidden md:flex items-center justify-center border border-gray-100 transition">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="swiper-button-next-custom absolute -right-5 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-2 rounded-full text-purple-700 hover:bg-purple-50 hidden md:flex items-center justify-center border border-gray-100 transition">
            <ChevronRight className="w-5 h-5" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            autoplay={{
              delay: 3500,
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
                <Link to={loan.path || '#'} className="group cursor-pointer block">
                  <div className="w-full overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                    <img
                      src={loan.image}
                      alt={loan.title}
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="font-bold text-center text-xs md:text-sm text-gray-800 group-hover:text-purple-700 transition mt-3 line-clamp-2 px-1">
                    {loan.title}
                  </p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 8. ONLINE & MOBILE BANKING BANNER SECTION */}
      <section className="w-full bg-[#6a0dad] text-white py-12 px-6 relative overflow-hidden mt-12">
        <div className="absolute top-0 left-0 w-36 h-36 bg-purple-500/30 rounded-br-full pointer-events-none z-0"></div>
        <div className="absolute top-10 left-10 w-12 h-12 rounded-full border-4 border-pink-400 opacity-40 pointer-events-none"></div>
        <div className="absolute top-6 right-20 w-8 h-8 border-2 border-white/20 rotate-45 pointer-events-none"></div>
        <div className="absolute bottom-12 right-32 w-10 h-10 bg-pink-400/30 rounded-lg rotate-12 blur-sm pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="w-full lg:w-1/2 flex items-center justify-center relative">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] z-10">
              <div className="relative rounded-t-xl border-[6px] border-[#1e1e1e] bg-black shadow-2xl overflow-hidden aspect-[16/10]">
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

            <div className="relative -ml-16 sm:-ml-20 z-20 top-4 shrink-0">
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
                className="inline-block bg-white text-[#6a0dad] px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition shadow-lg text-sm md:text-base"
              >
                Դառնալ հաճախորդ
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="bg-white p-2 rounded-lg shadow">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://www.evoca.am"
                  alt="Evoca App QR Code"
                  className="w-16 h-16"
                />
              </div>
              <p className="text-xs text-purple-200 max-w-[160px]">
                Սկանավորեք QR կոդը EvocaTOUCH հավելվածը ներբեռնելու համար:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER SECTION */}
      <footer className="bg-white border-t border-gray-200 text-xs text-gray-600 pt-10 pb-12">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="space-y-4">
            <span className="text-2xl font-black text-gray-900 block">
              evoca<span className="text-gray-400 font-normal">BANK</span>
            </span>
            <p className="text-gray-500">
              ք․ Երևան, 0010,<br /> Հանրապետության 44/2
            </p>
            <p className="text-[11px] text-gray-400 leading-tight">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="text-[10px] text-gray-400">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          <div className="space-y-2">
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

          <div className="space-y-2">
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

          <div className="space-y-2">
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
            <div className="flex gap-3 text-gray-500">
              <a href="#" className="hover:text-[#6a0dad]">f</a>
              <a href="#" className="hover:text-[#6a0dad]">in</a>
              <a href="#" className="hover:text-[#6a0dad]">yt</a>
            </div>

            <div className="space-y-1">
              <a href="#" className="bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded inline-block mr-2">
                App Store
              </a>
              <a href="#" className="bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded inline-block">
                Google Play
              </a>
            </div>

            <a href="#" className="text-[#6a0dad] font-bold block hover:underline">
              Բանկի հասցեները և աշխատաժամերը
            </a>

            <a href="#" className="text-[#6a0dad] font-bold block hover:underline">
              Կապ մեզ հետ
            </a>

            <div className="space-y-1 font-bold text-gray-900 text-sm">
              <p>+374 10 605555</p>
              <p className="text-[#6a0dad] text-base">8444</p>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 pt-8 mt-8 border-t border-gray-100 flex flex-wrap justify-between items-center gap-4 text-[10px] text-gray-400">
          <p className="max-w-xl">
            Կայքում տեղադրված տեղեկատվության վերաբերյալ տարբերություններ առաջանալու դեպքում, ինչպես նաև ռուսերեն և անգլերեն լեզուներով ոչ ամբողջական լինելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով։ «Էվոկաբանկ» ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների համար։
          </p>
          <div className="flex items-center gap-4 opacity-60 grayscale hover:grayscale-0 transition">
            <span className="font-bold">fininfo</span>
            <span className="font-bold">abcfinance.am</span>
            <span className="font-bold">arca</span>
          </div>
        </div>
      </footer>

      {/* FLOATING SOCIAL ICONS */}
      <div className="hidden lg:flex flex-col items-center gap-3 fixed left-3 top-1/2 -translate-y-1/2 z-30 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md border border-gray-100 text-gray-500">
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

export default MortgageDisplaced;