import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  HelpCircle, 
  Globe, 
  Search, 
  Menu, 
  Home, 
  ChevronRight, 
  ChevronLeft, 
  Phone,
  FileText,
  CheckCircle2
} from 'lucide-react';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
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

const LeasingPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="w-full min-h-screen bg-white text-gray-800 font-sans relative">
      
      {/* 1. Sub Navigation Bar */}
      <div className="w-full bg-purple-700 text-white flex px-4 lg:px-10 text-sm overflow-x-auto">
        <Link to="#" className="bg-purple-900 font-bold px-6 py-3 whitespace-nowrap">
          Վարկեր
        </Link>
        <Link to="#" className="hover:bg-purple-800 px-6 py-3 whitespace-nowrap">
          Վարկային պատմություն և սքոր
        </Link>
        <Link to="#" className="hover:bg-purple-800 px-6 py-3 whitespace-nowrap">
          Կարևոր տեղեկատվություն
        </Link>
      </div>

      {/* 2. Hero Banner Section */}
      <section className="w-full bg-[#f4f3f9] px-6 lg:px-16 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between min-h-[380px]">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Ֆիզիկական անձանց <br />
            տրանսպորտային միջոցների <br />
            լիզինգ
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-lg leading-relaxed">
            Ձեռք բեր քո երազանքների մեքենան Evocabank-ի լիզինգի միջոցով՝ ճկուն պայմաններով և մատչելի գնով։
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img 
            src="https://www.evoca.am/images-cache/loans/1/17764888992078/560x400.png" 
            alt="Car Leasing" 
            className="w-full max-w-lg h-auto object-contain rounded-xl drop-shadow-md"
          />
        </div>
      </section>

      {/* 3. Bottom Navigation & Breadcrumbs */}
      <div className="w-full bg-white px-4 lg:px-10 py-4 flex flex-wrap items-center justify-between border-t border-gray-100 gap-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 border border-gray-300 rounded-full px-5 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition"
        >
          <ChevronLeft size={16} className="text-gray-500" />
          <span>Վերադառնալ</span>
        </button>

        <div className="flex items-center space-x-2 text-xs text-gray-500 flex-wrap">
          <Home size={14} className="text-gray-400" />
          <ChevronRight size={12} className="text-gray-300" />
          <Link to="#" className="hover:underline">Անհատ</Link>
          <ChevronRight size={12} className="text-gray-300" />
          <Link to="#" className="hover:underline">Վարկեր</Link>
          <ChevronRight size={12} className="text-gray-300" />
          <span className="text-gray-800 font-semibold">Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ</span>
        </div>
      </div>

 {/* 5. Main Content Tabs Section */}
      <main className="max-w-7xl mx-auto px-4 lg:px-10 py-10">
        {/* Navigation Tabs Header */}
        <div className="border-b border-gray-200 flex space-x-8 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-3 text-sm font-semibold transition-all whitespace-nowrap relative ${
              activeTab === 'about'
                ? 'text-purple-700 border-b-2 border-purple-700'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Վարկի մասին
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`pb-3 text-sm font-semibold transition-all whitespace-nowrap relative ${
              activeTab === 'terms'
                ? 'text-purple-700 border-b-2 border-purple-700'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Պայմաններ
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`pb-3 text-sm font-semibold transition-all whitespace-nowrap relative ${
              activeTab === 'documents'
                ? 'text-purple-700 border-b-2 border-purple-700'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Պահանջվող փաստաթղթերի ցանկ
          </button>
        </div>

        {/* Tab 1: Վարկի մասին */}
        {activeTab === 'about' && (
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-7/12 space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Քո մեքենան ավելի մոտ է, քան թվում է:
              </h3>
              <p>
                Եթե մտածում ես քո երազանքների ավտոմեքենայի մասին, հիմա ճիշտ պահն է:
              </p>
              <p>
                Դու ընտրում ես՝ ինչպիսին լինի քո մեքենան՝ սկսած մոդելից մինչև փոքրիկ դետալներ՝ անգամ ինտերիերի գույնը: 
                <span className="font-bold text-purple-700"> Evocabank</span>-ն առաջարկում է մրցունակ պայմաններ, ցածր տոկոսադրույք և ճկուն մարման տարբերակներ, որպեսզի դու կենտրոնանաս միայն մեկ բանի վրա՝ քո մեքենայի ընտրության:
              </p>
              <p>
                Դու որոշում ես, թե ինչպիսին լինի մեքենադ, մենք հոգում ենք մնացած ամեն ինչ՝ ֆինանսավորումից մինչև ամբողջ գործընթացի կազմակերպում:
              </p>
              <p>
                Ընտրիր մեքենան Հայաստանում կամ պատվիրիր այն արտասահմանյան առաջնային շուկայից, իսկ մենք կօգնենք, որ այն դառնա իրականություն՝ հնարավորինս հարմար և հասանելի պայմաններով:
              </p>
            </div>

            <div className="lg:w-5/12 w-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start space-x-4 mb-6 pb-6 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  ֏
                </div>
                <div>
                  <div className="text-xs text-gray-400">Մինչև</div>
                  <div className="text-2xl font-extrabold text-purple-700">50 մլն ֏</div>
                  <div className="text-xs text-gray-500 font-medium mt-1">Գումար</div>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6 pb-6 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  ⌛
                </div>
                <div>
                  <div className="text-xs text-gray-400">Մինչև</div>
                  <div className="text-2xl font-extrabold text-purple-700">60 ամիս</div>
                  <div className="text-xs text-gray-500 font-medium mt-1">Ժամկետ</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  %
                </div>
                <div>
                  <div className="text-xs text-gray-400">Սկսած</div>
                  <div className="text-2xl font-extrabold text-purple-700">14%-ից</div>
                  <div className="text-xs text-gray-500 font-medium mt-1">Տոկոսադրույքից</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Պայմաններ */}
        {activeTab === 'terms' && (
          <div className="space-y-6">
            <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-purple-700 text-white">
                    <th className="p-4 font-semibold w-12 text-center">#</th>
                    <th className="p-4 font-semibold w-1/3 border-r border-purple-600">Պայման</th>
                    <th className="p-4 font-semibold">Մանրամասն</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-center font-bold text-gray-400">1</td>
                    <td className="p-4 font-semibold text-gray-900 border-r border-gray-100">Ովքեր կարող են դիմել</td>
                    <td className="p-4 text-gray-700">18 – 65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր լիզինգի սպասարկման ողջ ընթացքում չեն բոլորի 65 տարեկանը կամ առկա է վերոնշյալ պահանջներին բավարարող համալիզինգառու:</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-center font-bold text-gray-400">2</td>
                    <td className="p-4 font-semibold text-gray-900 border-r border-gray-100">Ֆինանսավորման արժույթը</td>
                    <td className="p-4 text-gray-700 font-semibold text-purple-700">ՀՀ դրամ</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-center font-bold text-gray-400">3</td>
                    <td className="p-4 font-semibold text-gray-900 border-r border-gray-100">Ֆինանսավորման գումար</td>
                    <td className="p-4 text-gray-700 font-bold">4,000,000 - 50,000,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-center font-bold text-gray-400">4</td>
                    <td className="p-4 font-semibold text-gray-900 border-r border-gray-100">Մարման ժամկետը</td>
                    <td className="p-4 text-gray-700 font-bold">24 - 60 ամիս</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-center font-bold text-gray-400">5</td>
                    <td className="p-4 font-semibold text-gray-900 border-r border-gray-100">Տարեկան տոկոսադրույքի տեսակ</td>
                    <td className="p-4 text-gray-700">Հաստատուն</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-center font-bold text-gray-400">6</td>
                    <td className="p-4 font-semibold text-gray-900 border-r border-gray-100">Մարման ժամանակացույց</td>
                    <td className="p-4 text-gray-700 space-y-2">
                      <p><span className="font-semibold text-purple-700">Անուիտետային</span> (լիզինգի գումարի և տոկոսագումարի հանրագումարը վճարվում է հավասարաչափ ամսական պարբերականությամբ)</p>
                      <p><span className="font-semibold text-purple-700">Զսպանակաձև</span> (մայր գումարի հավասարաչափ մարումներով լիզինգ), վճարումները պետք է կատարվեն ամսական կտրվածքով</p>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-center font-bold text-gray-400">7</td>
                    <td className="p-4 font-semibold text-gray-900 border-r border-gray-100">Ձևակերպման շուկա</td>
                    <td className="p-4 text-gray-700">Լիզինգի առարկան կարող է ձեռք բերվել ինչպես ՀՀ-ից, այնպես էլ արտերկրից` առաջնային շուկայից</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-center font-bold text-gray-400">8</td>
                    <td className="p-4 font-semibold text-gray-900 border-r border-gray-100">Տարեկան անվանական և փաստացի տոկոսադրույքներ</td>
                    <td className="p-4 text-gray-700">
                      <div className="grid grid-cols-2 gap-4 max-w-xs bg-purple-50 p-3 rounded-lg border border-purple-100">
                        <div>
                          <div className="text-xs text-gray-500">Անվանական</div>
                          <div className="font-bold text-purple-700 text-base">14% - 18%</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Փաստացի</div>
                          <div className="font-bold text-purple-700 text-base">15.31% - 22.41%</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-center font-bold text-gray-400">9</td>
                    <td className="p-4 font-semibold text-gray-900 border-r border-gray-100">Վաղաժամկետ մարման տուգանք</td>
                    <td className="p-4 text-gray-700 font-semibold text-green-600">Տուգանք չի կիրառվում</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-center font-bold text-gray-400">10</td>
                    <td className="p-4 font-semibold text-gray-900 border-r border-gray-100">Ուշացման տույժեր</td>
                    <td className="p-4 text-gray-700">
                      <p>Ժամկետանց վարկի համար՝ օրական <span className="font-semibold text-red-600">0.015%</span></p>
                      <p>Ժամկետանց տոկոսագումարի համար՝ օրական <span className="font-semibold text-red-600">0.1%</span></p>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-center font-bold text-gray-400">11</td>
                    <td className="p-4 font-semibold text-gray-900 border-r border-gray-100">Ապահովման միջոց</td>
                    <td className="p-4 text-gray-700">Ֆիզիկական և/կամ իրավաբանական անձանց երաշխավորություններ /ըստ պահանջի/, առանձին դեպքերում՝ Բանկի համար ընդունելի այլ ապահովում</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-center font-bold text-gray-400">12</td>
                    <td className="p-4 font-semibold text-gray-900 border-r border-gray-100">Լիզինգի առարկայի սահմանափակումներ</td>
                    <td className="p-4 text-gray-700">Լիզինգի առարկա չեն կարող հանդիսանալ այն տրանսպորտային միջոցները, որոնք կրում են վտանգ սպառնացող ապրանքներ` տոքսիկ նյութեր, քիմիկատներ, ռադիոակտիվ և պայթյունավտանգ նյութեր:</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-center font-bold text-gray-400">13</td>
                    <td className="p-4 font-semibold text-gray-900 border-r border-gray-100">Լիզինգի առարկայի գնահատում</td>
                    <td className="p-4 text-gray-700">Գնահատում չի իրականացվում: Որպես լիզինգի արժեք հիմք է ընդունվում մատակարար ընկերության կողմից ներկայացված հաշիվ-ապրանքագրում նշված արժեքը:</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-center font-bold text-gray-400">14</td>
                    <td className="p-4 font-semibold text-gray-900 border-r border-gray-100">Կանխավճար</td>
                    <td className="p-4 text-gray-700">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                          <div className="text-xs text-gray-500">Եկամտի վերլուծությամբ</div>
                          <div className="font-bold text-purple-700">նվազագույնը 10%</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                          <div className="text-xs text-gray-500">Առանց եկամուտների վերլուծության</div>
                          <div className="font-bold text-purple-700">նվազագույնը 30%</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-center font-bold text-gray-400">15</td>
                    <td className="p-4 font-semibold text-gray-900 border-r border-gray-100">Տրամադրման եղանակը</td>
                    <td className="p-4 text-gray-700 font-semibold">Անկանխիկ</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-center font-bold text-gray-400">16</td>
                    <td className="p-4 font-semibold text-gray-900 border-r border-gray-100">Գանձվող պարտադիր վճարներ</td>
                    <td className="p-4 text-gray-700 space-y-1">
                      <p>• Լիզինգի գումարից միանվագ գանձվող միջնորդավճար` պայմանագրային գումարի <span className="font-bold">0.6%</span> չափով</p>
                      <p>• Լիզինգի իրավունքի գրանցման հետ կապված վճարներ պետական իրավասու մարմնում</p>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-center font-bold text-gray-400">17</td>
                    <td className="p-4 font-semibold text-gray-900 border-r border-gray-100">Ապահովագրություն</td>
                    <td className="p-4 text-gray-700 space-y-2">
                      <p><span className="font-bold text-purple-700">Տրանսպորտային միջոցի ԿԱՍԿՈ ապահովագրություն:</span> Պարտադիր է յուրաքանչյուր տարի լիզինգի սպասարկման ամբողջ ժամկետի ընթացքում, առնվազն լիզինգի մայր գումարի մնացորդի չափով:</p>
                      <p className="text-xs bg-yellow-50 p-3 rounded-lg border border-yellow-200 text-yellow-800">
                        * ԿԱՍԿՈ ապահովագրությունը հաճախորդի հաշվին կնքելու դեպքում լիզինգի տարեկան անվանական տոկոսադրույքը նվազում է 1 տոկոսային կետով, ոչ պակաս քան 14%:
                      </p>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-center font-bold text-gray-400">18</td>
                    <td className="p-4 font-semibold text-gray-900 border-r border-gray-100">Որոշումների կայացման ժամկետներ</td>
                    <td className="p-4 text-gray-700 space-y-1">
                      <p>• Մինչև 10,000,000 ՀՀ դրամ հայտի դեպքում՝ <span className="font-semibold text-purple-700">3 աշխատանքային օր</span></p>
                      <p>• 10,000,000 ՀՀ դրամը գերազանցող հայտի դեպքում՝ <span className="font-semibold text-purple-700">7 աշխատանքային օր</span></p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Պահանջվող փաստաթղթերի ցանկ */}
        {activeTab === 'documents' && (
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <FileText className="text-purple-700" size={22} />
              <span>Անհրաժեշտ փաստաթղթերի ցանկ</span>
            </h3>

            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-purple-700 flex-shrink-0 mt-0.5" />
                <span>Լիզինգի տրամադրման դիմում:</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-purple-700 flex-shrink-0 mt-0.5" />
                <span>Անձնագիր կամ նույնականացման քարտ, ինչպես նաև սոցիալական քարտ կամ տեղեկանք (կարող է պահանջվել նաև ընտանիքի անդամներինը):</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-purple-700 flex-shrink-0 mt-0.5" />
                <span>Ամուսնացած լինելու դեպքում՝ ամուսնու/կնոջ անձնական փաստաթղթերը և ամուսնության վկայականը:</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-purple-700 flex-shrink-0 mt-0.5" />
                <span>Տեղեկանք աշխատանքի վայրից աշխատավարձի չափի վերաբերյալ (տվյալ պահին 30 օրացույցային օրը չգերազանցող):</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-purple-700 flex-shrink-0 mt-0.5" />
                <span>Ինքնազբաղված լինելու դեպքում՝ Պետական ռեգիստրի վկայական կամ քաղվածք, ՀՎՀՀ, գործունեության լիցենզիա (առկայության դեպքում):</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-purple-700 flex-shrink-0 mt-0.5" />
                <span>Վերջին 1 տարվա ֆինանսական հաշվետվությունները և այլ եկամուտները հավաստող տեղեկատվություն (առկայության դեպքում):</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-purple-700 flex-shrink-0 mt-0.5" />
                <span>Տեղեկատվություն երաշխավորող անձի/անձանց վերաբերյալ (առկայության դեպքում):</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-purple-700 flex-shrink-0 mt-0.5" />
                <span>Վաճառողի կողմից տրված ավտոմեքենայի գնման համաձայնագիր, կանխավճարի վճարման անդորրագիր, առուվաճառքի պայմանագիր, հաշիվ-ապրանքագիր:</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-purple-700 flex-shrink-0 mt-0.5" />
                <span>Բանկի պահանջով այլ փաստաթղթեր:</span>
              </li>
            </ul>
          </div>
        )}

    
      </main>

      {/* 5. SLIDER SECTION */}
      <section className="max-w-[1240px] mx-auto px-4 py-12 border-t border-gray-100">
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
            autoplay={{ delay: 4000, disableOnInteraction: false }}
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

      {/* 6. ONLINE & MOBILE BANKING SECTION */}
      <section className="w-full bg-[#6a0dad] text-white py-14 px-6 md:px-12 relative overflow-hidden rounded-t-[2.5rem] lg:rounded-t-[3.5rem]">
        {/* Geometric Elements */}
        <div className="absolute top-10 left-16 w-8 h-8 rounded-full border-4 border-pink-400 opacity-60 pointer-events-none"></div>
        <div className="absolute top-1/3 left-12 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-purple-400 rotate-12 opacity-50 pointer-events-none"></div>
        <div className="absolute top-16 right-20 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[22px] border-b-pink-300 -rotate-45 opacity-70 pointer-events-none"></div>
        <div className="absolute bottom-16 right-12 w-8 h-8 border-4 border-pink-400 rotate-12 opacity-80 pointer-events-none"></div>

        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Laptop & Mobile Phone Mockups */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative">
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

          {/* Text & Store Links */}
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

        <div className="text-right text-[10px] text-purple-200 mt-8 max-w-[1240px] mx-auto">
          Թարմացվել է` 04/09/2026 17:45
        </div>
      </section>

      {/* 7. FOOTER SECTION */}
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

      {/* FLOATING CALL BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#5c00e6] text-white p-3.5 rounded-full shadow-lg hover:bg-purple-900 transition flex items-center justify-center">
          <Phone className="w-5 h-5 fill-current" />
        </button>
      </div>

    </div>
  );
};

export default LeasingPage;