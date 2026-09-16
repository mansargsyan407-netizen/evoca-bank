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


const SecuredLoan = () => {
  const [activeTab, setActiveTab] = useState('about');

  // Պայմանների տվյալները
  const termsList = [
    {
      id: 1,
      title: 'Ովքեր կարող են դիմել',
      content: 'Բանկի ֆիզիկական անձ հաճախորդներ',
    },
    {
      id: 2,
      title: 'Ձևակերպման եղանակ',
      content: 'Օֆլայն',
    },
    {
      id: 3,
      title: 'Վարկավորման սահմանաչափ ',
      content: 'Ավանդ·          ՀՀ դրամով ներդրված ժամկետային ավանդի պայմանագրի գումարի մինչև 95%·          Այլ արժույթներով ներդրված ժամկետային ավանդի պայմանագրի գումարի մինչև 80%·          50 000 ՀՀ դրամից սկսածՊետական կամ Բանկի կողմից թողարկված պարտատոմս• ՀՀ դրամով ձեռքբերված պարտատոմսերի անվանական արժեքի մինչև 80% • Այլ արժույթներով ձեռքբերված պարտատոմսերի անվանական արժեքի մինչև 70%• 50 000 ՀՀ դրամից սկսած ',
    },
    {
      id: 4,
      title: 'Սահմանաչափի տեսակ և  մարման ձևը',
      content: 'Վերականգնվող կամ նվազող սահմանաչափով օվերդրաֆտ·          Վարկառուն պարտավորվում է վճարել կուտակված տոկոսագումարը  մինչև քաղվածում նշված վերջնաժամկետըՄարման գրաֆիկով վարկ·          Անուիտետային»·          «Միանգամյա»  ',
    },
    {
      id: 5,
      title: 'Մարման ժամկետ',
      content: ' Նվազագույնը 3 օր          Առավելագույնը մինչև Բանկում գործող ժամկետային ավանդի կամ ձեռքբերված պարտատոմսերի մարման վերջնաժամկետը          ',
    },
       {
      id: 6,
      title: 'Վարկավորման արժույթ',
      content: 'ՀՀ դրամ',
    },
       {
      id: 7,
      title: '	Անվանական տարեկան տոկոսադրույք',
      content: ' Ավանդ ՀՀ դրամով ներդրված ժամկետային ավանդի դեպքում ներդրված ժամկետային ավանդի տարեկան տոկոսադրույք գումարած 3.25%:Այլ արժույթներով ներդրված ժամկետային ավանդների դեպքում ՀՀ դրամի գծով Բանկում սահմանված ժամկետային ավանդի տարեկան առավելագույն տոկոսադրույք  գումարած 3.25% Պետական կամ Բանկի կողմից թողարկված պարտատոմսՀՀ դրամի գծով ձեռք բերված պարտատոմսերի համար սահմանված արժեկտրոնային տարեկան եկամտաբերություն գումարած 2%   ',
    },
       {
      id: 8,
      title: 'Փաստացի տարեկան տոկոսադրույք',
      content: 'Ավանդ Առավելագույնը 15.2% Պետական կամ Բանկի կողմից թողարկված պարտատոմս Առավելագույնը 13.2%',
    },
       {
      id: 9,
      title: 'Սահմանաչափի տրամադրման եղանակ',
      content: 'Անկանխիկ, օվերդրաֆտի դեպքում՝ Բանկի վճարային քարտերի միջոցով',
    },
       {
      id: 10,
      title: 'Օվերդրաֆտի դեպքում,Քաղվածքի օր,Վճարման վերջնաժամկետ,Արտոնյալ ժամանակահատված',
      content: 'Մինչև յուրաքանչյուր ամսվա 10 - ը,Յուրաքանչյուր ամսվա 16-ը (եթե տվյալ ամսվա 16-ը հանդիսանում է ոչ աշխատանքային օր, ապա վերջնաժամկետ է համարվում հաջորդ աշխատանքային օրը):,Չի տրամադրվում',
    },
       {
      id: 11,
      title: 'Վարկի վերադարձելիության ապահովման միջոց',
      content: 'Ավանդ,Բանկում ներդրված ժամկետային ավանդի պայմանագիր: Ընդ որում, գրավադրվող ժամկետային ավանդի պայմանագրի և ակնկալվող վարկի գումարի տարբեր արժույթներ լինելու դեպքում, հաշվարկի համար հիմք է ընդունվում տվյալ օրվա դրությամբ գրավադրվող ժամկետային ավանդի պայմանագրի արժույթի համար ՀՀ ԿԲ-ի կողմից սահմանված փոխարժեքը:,Պետական կամ Բանկի կողմից թողարկված պարտատոմս,Գրավադրվող պարտատոմսերի և ակնկալվող վարկի գումարի տարբեր արժույթներով լինելու դեպքում, հաշվարկի համար հիմք է ընդունվում տվյալ օրվա դրությամբ գրավադրվող պարտատոմսի արժույթի համար ՀՀ ԿԲ-ի կողմից սահմանված փոխարժեքը:',
    },
       {
      id: 12,
      title: 'Բանկի կողմից գանձվող միջնորդավճարներ',
      content: 'Վարկի գումարի կանխիկացման դեպքում գանձվում է բանկային հաշվից կամ բանկային քարտից կանխիկացման վճար՝ համաձայն Բանկում գործող սակագների',
    },
       {
      id: 13,
      title: 'Տույժեր',
      content: 'Ամսական նվազագույն վճարը վճարման ժամկետին չվճարելու տույժ` 0.015% օրական,Հաշվեգրված տոկոսները վճարման ժամկետին չվճարելու տույժ` 0.1% օրական',
    },
       {
      id: 14,
      title: 'Վարկունակության գնահատում /վարկի հաստատման պայմաններ/',
      content: 'Վարկի տրամադրման անհրաժեշտ պայման է հանդիսանում  ներկայացման պահին գործող  դասակարգված վարկերի, գործող ուշացումների բացակայությունը',
    },
       {
      id: 15,
      title: 'Տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման Ժամկետներ',
      content: 'Վարկի տրամադրման կամ մերժման որոշումը կայացվում է 1 (մեկ) օրվա ընթացքում՝ առանձին դեպքերում, կախված վարկի գումարից, որոշումը կարող է կայացվել մինչև 5 (հինգ)  աշխատանքային  օրվա ընթացքում:Վարկը տրամադրվում է դրական որոշման դեպքում, առավելագույնը 2 (երկու) աշխատանքային օրվա ընթացքում: ',
    },

  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200">
      

       

        {/* Sub Navigation Bar */}
        <div className="bg-purple-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-8 py-2.5 text-xs font-semibold">
            <span className="bg-purple-900 px-3 py-1 rounded cursor-pointer">Վարկեր</span>
            <span className="hover:text-purple-200 cursor-pointer self-center">Վարկային պատմություն և սքոր</span>
            <span className="hover:text-purple-200 cursor-pointer self-center">Կարևոր տեղեկատվություն</span>
          </div>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="bg-purple-50 relative overflow-hidden py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 z-10 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Դրամական միջոցների գրավով ապահովված անհատական վարկ
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-lg">
              Ստացիր վարկ՝ գրավադրելով քո ավանդը կամ պարտատոմսը՝ արագ, հեշտ և առանց ավելորդ ձևակերպումների:
            </p>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end">
           
          <img src="https://www.evoca.am/images-cache/loans/1/17828863013304/560x400.png" alt="" />
           
          </div>
        </div>
      </section>

      {/* Breadcrumbs & Navigation Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between text-xs text-gray-500">
        <button className="flex items-center space-x-1 border border-gray-300 rounded-full px-4 py-1.5 hover:bg-gray-100 transition">
          <span>←</span>
          <span>Վերադառնալ</span>
        </button>

        <div className="flex items-center space-x-2">
          <span>🏠</span>
          <span>›</span>
          <span>Անհատ</span>
          <span>›</span>
          <span>Վարկեր</span>
          <span>›</span>
          <span>Վարկեր</span>
          <span>›</span>
          <span className="font-semibold text-gray-700">Դրամական միջոցների գրավով ապահովված անհատական վարկ</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8 flex space-x-8 text-sm font-bold">
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-3 cursor-pointer transition ${
              activeTab === 'about'
                ? 'border-b-2 border-purple-700 text-purple-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Վարկի մասին
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`pb-3 cursor-pointer transition ${
              activeTab === 'terms'
                ? 'border-b-2 border-purple-700 text-purple-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Պայմաններ
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {activeTab === 'about' ? (
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  Ունե՞ս ավանդ կամ պարտատոմս <strong className="text-purple-700">Evocabank</strong>-ում: Գիտե՞ս, որ արդեն կարող ես օգտագործել քո ներդրված միջոցները որպես գրավ և ստանալ անհատական վարկ:
                </p>
                <p>
                  Վարկը հնարավորություն է տալիս շարունակել օգտվել քո ավանդից կամ պարտատոմսից ստացվող եկամուտներից և միաժամանակ ստանալ անհրաժեշտ ֆինանսավորում:
                </p>
                <p>
                  Գործընթացը հասանելի է Բանկի մասնաճյուղերում, այնպես որ քեզ մնում է միայն ընտրել քեզ հարմար հասցեն:
                </p>
              </div>
            ) : (
              /* Terms Tab Content */
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm divide-y divide-gray-100">
                {termsList.map((item) => (
                  <div key={item.id} className="p-5 flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 text-sm">
                    <div className="sm:w-1/3 font-bold text-gray-800 flex items-start space-x-2">
                      <span className="text-purple-700 font-extrabold min-w-[20px]">
                        {item.id}.
                      </span>
                      <span>{item.title}</span>
                    </div>
                    <div className="sm:w-2/3 text-gray-600 leading-relaxed pl-5 sm:pl-0">
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Summary Card (Image 1 side card) */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6 h-fit">
            <div className="w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">
              ֏
            </div>

            <div className="border-b border-gray-100 pb-4 flex justify-between items-center">
              <div>
                <span className="text-xs text-gray-400 block">ավանդի գումարի մինչև</span>
                <div className="text-2xl font-black text-purple-800">95%</div>
              </div>
              <span className="text-xs text-gray-600 font-semibold">Սահմանաչափ</span>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <span className="text-xs text-gray-400 block">պարտատոմսի գումարի մինչև</span>
                <div className="text-2xl font-black text-purple-800">80%</div>
              </div>
              <span className="text-xs text-gray-600 font-semibold">Սահմանաչափ</span>
            </div>
          </div>
        </div>
      </main>

      {/* Banner with Background Image (Image 2) */}
      <section className="w-full my-12">
        <div
          className="w-full h-64 sm:h-80 md:h-96 bg-cover bg-center flex items-center justify-center relative"
          style={{
            backgroundImage: `url('https://www.evoca.am/images-cache/loans/1/17828863013315/1920x527.jpg')`,
          }}
        >
          {/* Content Overlay */}
          <div className="text-center text-white px-4 max-w-3xl z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold drop-shadow-md leading-tight">
              Կատարե՛ք խնայողություններ՝ վստահելով միայն Evocabank-ին:
            </h3>
          </div>
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

export default SecuredLoan;