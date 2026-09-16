import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Phone } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ActionLoan() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about'); // 'about' կամ 'conditions'

  const conditionsData = [
    {
      id: 1,
      title: '1. Վարկի տրամադրման նպատակը',
      content:
        'Վարկը տրամադրվում է Բանկի «EvocaTOUCH» հեռակառավարման համակարգով հայտ ներկայացնելու միջոցով, անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների, ծառայությունների) պատվիրման կամ ձեռքբերման նպատակով:',
    },
    {
      id: 2,
      title: '2. Ովքեր կարող են դիմել',
      content:
        '21-65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր հանդիսանում են բանկի հաճախորդ:',
    },
    {
      id: 3,
      title: '3. Վարկի արժույթը',
      content: 'ՀՀ դրամ',
    },
    {
      id: 4,
      title: '4. Վարկի գումարը',
      content: (
        <div>
          <p className="font-semibold text-purple-700">
            310,000 – 10,000,000 ՀՀ դրամ
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Վարկի առավելագույն գումարը որոշվում է համաձայն հաճախորդի
            վարկարժանության գնահատականի
          </p>
        </div>
      ),
    },
    {
      id: 5,
      title: '5. Վարկի տրամադրման կարգը',
      content:
        'Վարկի տրամադրումն իրականացվում է անկանխիկ եղանակով` հաշվեգրելով հաճախորդի բանկային հաշվին:',
    },
    {
      id: 6,
      title: '6. Տարեկան տոկոսադրույք',
      content: (
        <div className="space-y-1">
          <p>
            <span className="font-medium text-gray-600">Անվանական՝</span>{' '}
            <span className="font-bold text-gray-900">18% - 21.5%</span>
          </p>
          <p>
            <span className="font-medium text-gray-600">Փաստացի՝</span>{' '}
            <span className="font-bold text-gray-900">19.58% - 23.79%</span>
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Վարկի տարեկան անվանական տոկոսադրույքը որոշվում է համաձայն
            հաճախորդի վարկարժանության գնահատականի
          </p>
        </div>
      ),
    },
    {
      id: 7,
      title: '7. Վարկի մարման ժամկետը',
      content: '24 – 60 ամիս',
    },
    {
      id: 8,
      title: '8. Վարկի մարման եղանակ',
      content: '«Անուիտետային»',
    },
    {
      id: 9,
      title: '9. Գանձվող վճարներ',
      content: 'Առկա չէ',
    },
    {
      id: 10,
      title:
        '10. Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր',
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>ժամկետանց վարկի համար՝ օրական 0.015%</li>
          <li>ժամկետանց տոկոսագումարի համար՝ օրական 0.1%</li>
        </ul>
      ),
    },
    {
      id: 11,
      title:
        '11. Վարկունակության գնահատում /վարկի հաստատման պայմաններ/',
      content: 'Համաձայն սքորինգի և վարկունակության չափանիշների',
    },
    {
      id: 12,
      title:
        '12. Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման Ժամկետներ',
      content: (
        <div className="space-y-2">
          <p>
            Վարկի տրամադրման կամ մերժման որոշումը կայացվում է վայրկյանների
            ընթացքում:
          </p>
          <p>
            Վարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում,
            առավելագույնը 1 (մեկ) աշխատանքային օրվա ընթացքում:
          </p>
          <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-[#6a0dad] text-xs text-purple-900 mt-2">
            Վարկային առաջարկը ստանալու պահից սկսած՝ եթե 72 ժամվա ընթացքում
            վարկառուի կողմից այն չի հաստատվում, ապա առաջարկը համակարգում
            ավտոմատ կերպով մերժվում է։
          </div>
        </div>
      ),
    },
  ];

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

  return (
    <div className="w-full font-sans select-none overflow-hidden bg-white text-gray-800 flex flex-col min-h-screen relative">
      
      {/* 1. Ենթամենյու (Submenu) */}
      <div className="w-full bg-[#6a0dad] text-white px-6 md:px-12 py-2.5 text-xs md:text-sm font-semibold flex items-center gap-6 z-20">
        <span className="bg-[#52098b] px-4 py-1 rounded-md cursor-pointer">
          Վարկեր
        </span>
        <span className="hover:opacity-80 cursor-pointer">
          Վարկային պատմություն և սքոր
        </span>
        <span className="hover:opacity-80 cursor-pointer">
          Կարևոր տեղեկատվություն
        </span>
      </div>

      {/* 2. HERO BANNER SECTION */}
      <section className="relative w-full bg-[#f6f6f8] min-h-[380px] md:min-h-[440px] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-8 relative z-10">
          {/* Ձախ կողմի տեքստը */}
          <div className="space-y-4 max-w-xl">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
              Action
            </h1>
            <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
              Action online վարկ կարող ես ստանալ EvocaTOUCH հավելվածի միջոցով` 24/7 ռեժիմով, ցանկացած վայրից և ցանկացած ժամի:
            </p>
          </div>

          {/* Աջ կողմի նկարը */}
          <div className="relative flex justify-center items-center">
            <img
              src="https://www.evoca.am/images-cache/loans/1/16994456305593/560x400.png"
              alt="Action Online Loan"
              className="w-full max-w-[500px] object-contain rounded-2xl drop-shadow-lg"
            />
          </div>
        </div>

        {/* Floating Social Icons (Banner Left) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-r-md py-3 px-1.5 flex flex-col gap-3 text-gray-400 z-30 shadow-md text-xs font-bold">
          <a href="#" className="hover:text-[#6a0dad] transition-colors">f</a>
          <a href="#" className="hover:text-[#6a0dad] transition-colors">in</a>
          <a href="#" className="hover:text-[#6a0dad] transition-colors">p</a>
        </div>
      </section>

      {/* 3. BREADCRUMBS SECTION */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 w-full flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold px-4 py-2 rounded-full transition"
        >
          ← Վերադառնալ
        </button>

        <div className="flex items-center gap-2 flex-wrap text-gray-600">
          <span>🏠</span>
          <span>›</span>
          <span className="hover:underline cursor-pointer">Անհատ</span>
          <span>›</span>
          <span className="hover:underline cursor-pointer">Վարկեր</span>
          <span>›</span>
          <span className="hover:underline cursor-pointer">Վարկեր</span>
          <span>›</span>
          <span className="text-gray-900 font-semibold">Action</span>
        </div>
      </div>

      {/* 4. MAIN ACTION DETAILS SECTION */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 w-full my-6">
        {/* TABS (Վարկի մասին / Պայմաններ) */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-3 px-6 text-sm font-bold transition-all border-b-2 ${
              activeTab === 'about'
                ? 'border-[#6a0dad] text-[#6a0dad]'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            Վարկի մասին
          </button>
          <button
            onClick={() => setActiveTab('conditions')}
            className={`pb-3 px-6 text-sm font-bold transition-all border-b-2 ${
              activeTab === 'conditions'
                ? 'border-[#6a0dad] text-[#6a0dad]'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            Պայմաններ
          </button>
        </div>

        {/* TAB CONTENT */}
        {activeTab === 'about' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Ձախ կողմի տեքստային բովանդակությունը */}
            <div className="lg:col-span-7 space-y-5 text-sm md:text-base text-gray-700 leading-relaxed font-medium">
              <p>
                <span className="text-[#6a0dad] font-bold">Action</span> վարկատեսակի տրամադրման գործընթացը շատ պարզ է, արագ և հեշտ: Այն ձևակերպվում է առանց երաշխավորի և գրավի առկայության, ինչպես նաև առանց հավելյալ փաստաթղթեր ներկայացնելու, բանկ այցելելու և հերթերում ժամանակ կորցնելու: <span className="text-[#6a0dad] font-bold underline cursor-pointer">Վարկը</span> հաստատվում է վայրկյանների ընթացքում, որից հետո՝ առավելագույնը 1 աշխատանքային օրվա ընթացքում, գումարը փոխանցվում է քո տրամադրած հաշվեհամարին:
              </p>

              <p>
                Վարկի ստացման համար անհրաժեշտ է ձեռքի տակ ունենալ անձը հաստատող փաստաթուղթ, սոցիալական քարտ և սմարթֆոն, որտեղ անհրաժեշտ է ներբեռնել <span className="text-[#6a0dad] font-bold">EvocaTOUCH</span> հավելվածը:
              </p>

              <p>
                <span className="text-[#6a0dad] font-bold">Evocabank</span>-ը մշտապես փայլում է նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ: Մենք անում ենք ամեն ինչ, որպեսզի հեշտացնենք քո կյանքը՝ խնայելով քեզ համար թերևս ամենակարևորը՝ ժամանակը:
              </p>
            </div>

            {/* Աջ կողմի սպիտակ բլոկը (Ցուցանիշներ) */}
            <div className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
              {/* Մանուշակագույն կլոր նշանը */}
              <div className="w-10 h-10 bg-[#6a0dad] rounded-full flex items-center justify-center text-white font-bold text-lg">
                ֏
              </div>

              {/* Ցուցանիշ 1 */}
              <div className="border-b border-gray-100 pb-4">
                <span className="text-xs text-gray-400 font-medium block">մինչև</span>
                <div className="flex justify-between items-baseline mt-1">
                  <span className="text-2xl md:text-3xl font-black text-[#6a0dad]">10 մլն ֏</span>
                  <span className="text-xs text-gray-500 font-medium">Սահմանաչափ</span>
                </div>
              </div>

              {/* Ցուցանիշ 2 */}
              <div className="border-b border-gray-100 pb-4">
                <span className="text-xs text-gray-400 font-medium block">մինչև</span>
                <div className="flex justify-between items-baseline mt-1">
                  <span className="text-2xl md:text-3xl font-black text-[#6a0dad]">60 ամիս</span>
                  <span className="text-xs text-gray-500 font-medium">Մարման ժամկետ</span>
                </div>
              </div>

              {/* Ցուցանիշ 3 */}
              <div>
                <span className="text-xs text-gray-400 font-medium block">սկսած</span>
                <div className="flex justify-between items-baseline mt-1">
                  <span className="text-2xl md:text-3xl font-black text-[#6a0dad]">18%-ից</span>
                  <span className="text-xs text-gray-500 font-medium">Տարեկան անվանական տոկոսադրույք</span>
                </div>
              </div>
            </div>

          </div>
        ) : (
          /* ՊԱՅՄԱՆՆԵՐ TAB CONTENT (Թարմացված 12 կետերով) */
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Վարկի տրամադրման հիմնական պայմանները
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {conditionsData.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 hover:bg-purple-50/40 border border-gray-100 rounded-2xl p-5 transition-all duration-200"
                >
                  <h4 className="font-bold text-gray-900 text-sm md:text-base mb-2">
                    {item.title}
                  </h4>
                  <div className="text-gray-700 text-xs md:text-sm leading-relaxed">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* 5. ԱՅԼ ՎԱՐԿԵՐ SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-8 mt-12 w-full">
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

      {/* 6. ONLINE & MOBILE BANKING BANNER SECTION */}
      <section className="w-full bg-[#6a0dad] text-white py-12 px-6 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-36 h-36 bg-purple-500/30 rounded-br-full pointer-events-none z-0"></div>
        <div className="absolute top-10 left-10 w-12 h-12 rounded-full border-4 border-pink-400 opacity-40 pointer-events-none"></div>
        <div className="absolute top-6 right-20 w-8 h-8 border-2 border-white/20 rotate-45 pointer-events-none"></div>
        <div className="absolute bottom-12 right-32 w-10 h-10 bg-pink-400/30 rounded-lg rotate-12 blur-sm pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Left Side: Laptop & Phone Mockups */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative">
            
            {/* Laptop Container */}
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] z-10">
              {/* Screen */}
              <div className="relative rounded-t-xl border-[6px] border-[#1e1e1e] bg-black shadow-2xl overflow-hidden aspect-[16/10]">
                <iframe
                  src="https://www.youtube.com/embed/KwAgMHEx8ys?enablejsapi=1"
                  title="EvocaTOUCH Video"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Base */}
              <div className="w-[108%] -translate-x-[4%] h-3 bg-[#2d2d2d] rounded-b-xl border-t border-neutral-700 shadow-xl relative flex justify-center">
                <div className="w-16 h-1 bg-neutral-600 rounded-b-md"></div>
              </div>
            </div>

            {/* Mobile Phone Container */}
            <div className="relative -ml-16 sm:-ml-20 z-20 top-4 shrink-0">
              <div className="w-32 sm:w-40 aspect-[9/19] rounded-[2.2rem] border-[5px] border-[#1a1a1a] bg-black overflow-hidden shadow-2xl relative">
                {/* Notch/Camera */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-[#1a1a1a] rounded-full z-30"></div>
                <img
                  src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg"
                  alt="Evoca Mobile App"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

          {/* Right Side: Text & Actions */}
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

            {/* QR Code and Stores */}
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

      {/* 7. FOOTER SECTION */}
      <footer className="bg-white border-t border-gray-200 text-xs text-gray-600 pt-10 pb-12 w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          <div className="space-y-4">
            <span className="text-2xl font-black text-gray-900 block">evoca<span className="text-gray-400 font-normal">BANK</span></span>
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

        {/* BOTTOM PARTNERS / CERTIFICATES BAR */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 mt-8 border-t border-gray-100 flex flex-wrap justify-between items-center gap-4 text-[10px] text-gray-400">
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

      {/* FLOATING CHAT BUTTON */}
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
}