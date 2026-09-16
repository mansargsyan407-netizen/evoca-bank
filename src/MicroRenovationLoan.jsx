import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';

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

const loanTermsData = [
  {
    id: 1,
    title: 'Վարկի տրամադրման նպատակը',
    details: 'Բնակելի անշարժ գույքի վերանորոգում` բնակարանային պայմանների բարելավում',
  },
  {
    id: 2,
    title: 'Ովքեր կարող են դիմել',
    details: '18– 65 տարեկան ՀՀ քաղաքացի հանդիսացող ֆիզիկական անձինք, որոնց եկամուտների հիմնական աղբյուրը գտնվում է ՀՀ-ում և ովքեր վարկի սպասարկման ողջ ընթացքում չեն բոլորի 65 տարեկանը կամ առկա է վերոնշյալ պահանջներին բավարարող համավարկառու:',
  },
  {
    id: 3,
    title: 'Վարկավորման արժույթը',
    details: 'ՀՀ դրամ',
  },
  {
    id: 4,
    title: 'Վարկավորման գումար',
    details: '275,000 - 5,000,000 ՀՀ դրամ',
  },
  {
    id: 5,
    title: 'Վարկի մարման ժամկետը',
    details: '60 ամիս',
  },
  {
    id: 6,
    title: 'Տարեկան տոկոսադրույքներ',
    details: 'Անվանական՝ 17%, Փաստացի՝ 18.62%',
  },
  {
    id: 7,
    title: 'Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք',
    details: 'Տուգանք չի կիրառվում',
  },
  {
    id: 8,
    title: 'Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր',
    details: 'Ժամկետանց վարկի համար՝ օրական 0.015%,\nժամկետանց տոկոսագումարի համար՝ օրական 0.1%:',
  },
  {
    id: 9,
    title: 'Վարկի մարման ձևը',
    details: 'Անուիտետային կամ մայր գումարի հավասարաչափ մարումներով վարկ. վճարումները պետք է կատարվեն ամսական կտրվածքով։',
  },
  {
    id: 10,
    title: 'Վարկի վերադարձելիության ապահովման միջոց',
    details: 'Առանց գրավադրման\n275,000 - 3,000,000 ՀՀ դրամ՝ Երրորդ անձի /անձանց/ երաշխավորություն (անհրաժեշտության դեպքում)\n3,000,001 – 5,000,000 ՀՀ դրամ՝ Երրորդ անձի /անձանց/ երաշխավորություն',
  },
  {
    id: 11,
    title: 'Ապահովագրություն',
    details: 'Արևային կայան ձեռքբերելու դեպքում` արևային կայանի ապահովագրություն, որի ծածկույթը պետք է լինի արևային կայանի ձեռքբերման գումարի չափով։',
  },
  {
    id: 12,
    title: 'Վարկի տրամադրման եղանակը',
    details: 'Անկանխիկ',
  },
  {
    id: 13,
    title: 'Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման Ժամկետներ',
    details: 'Վարկի տրամադրման կամ մերժման որոշումը կայացվում է առավելագույնը 10 (տաս) աշխատանքային օրվա ընթացքում, որոշումների կայացման համար Բանկի կողմից պահանջվող նախնական փաստաթղթերը ամբողջությամբ ներկայացնելուց հետո:\nՎարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, առավելագույնը 2 (երկու) աշխատանքային օրվա ընթացքում:',
  },
];

const MicroRenovationLoan = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about'); // 'about' | 'terms'
  const [activeCurrency, setActiveCurrency] = useState('AMD');

  return (
    <div className="min-h-screen bg-white font-sans text-[#333] relative">
      {/* 1. TOP SMALL HEADER */}
      

      {/* 3. PURPLE SUB NAVBAR */}
      <div className="bg-[#5c00e6] text-white text-xs py-3 px-4">
        <div className="max-w-[1240px] mx-auto flex gap-6 font-semibold">
          <span className="bg-[#4100a8] px-3 py-1 rounded cursor-pointer font-bold">Վարկեր</span>
          <span className="py-1 hover:text-purple-200 cursor-pointer">Վարկային պատմություն և սքոր</span>
          <span className="py-1 hover:text-purple-200 cursor-pointer">Կարևոր տեղեկատվություն</span>
        </div>
      </div>

      {/* 4. HERO BANNER */}
      <div className="bg-[#f2f0f9] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-12 items-center min-h-[360px]">
          {/* Left Text */}
          <div className="md:col-span-7 p-8 md:p-12 z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
              Միկրովերանորոգման վարկ Բանկի ռեսուրսներով
            </h2>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-lg font-medium">
              Պլանավորո՞ւմ ես բնակարանի վերանորոգում: Ստացիր Evocabank-ի միկրովերանորոգման վարկ և օգտվիր պետական սուբսիդավորման հնարավորությունից:
            </p>
          </div>

          {/* Right Image Container */}
          <div className="md:col-span-5 bg-[#b28df7] h-full flex items-center justify-center min-h-[360px] p-6">
            <img 
              src="https://www.evoca.am/images-cache/loans/1/17421922764361/560x400.jpg" 
              alt="Միկրովերանորոգման վարկ" 
              className="object-contain max-h-[300px] drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* 5. BREADCRUMB & BACK BUTTON */}
      <div className="max-w-[1240px] mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-1.5 border bg-white border-gray-200 px-5 py-2 rounded-full shadow-sm hover:bg-gray-50 transition font-bold text-gray-700 cursor-pointer"
        >
          ← Վերադարձնել
        </button>

        <div className="flex items-center gap-2 flex-wrap text-gray-600 font-medium">
          <Link to="/" className="hover:underline">🏠</Link>
          <span>›</span>
          <Link to="/" className="hover:underline">Անհատ</Link>
          <span>›</span>
          <Link to="/loans" className="hover:underline">Վարկեր</Link>
          <span>›</span>
          <Link to="/loans" className="hover:underline">Վարկեր</Link>
          <span>›</span>
          <span className="text-gray-900 font-bold">
            Միկրովերանորոգման վարկ Բանկի ռեսուրսներով
          </span>
        </div>
      </div>

      {/* 6. TABS NAVIGATION */}
      <div className="max-w-[1240px] mx-auto px-4 border-b border-gray-100">
        <div className="flex gap-12 text-sm font-bold">
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'about'
                ? 'border-[#5c00e6] text-[#5c00e6]'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            Վարկի մասին
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`pb-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'terms'
                ? 'border-[#5c00e6] text-[#5c00e6]'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            Պայմաններ
          </button>
        </div>
      </div>

      {/* 7. TAB CONTENT SECTION */}
      <section className="max-w-[1240px] mx-auto px-4 py-10 min-h-[300px]">
        {activeTab === 'about' ? (
          /* TAB 1: ՎԱՐԿԻ ՄԱՍԻՆ */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <h3 className="text-xl md:text-2xl font-extrabold text-[#222]">
                Արագ, առանց գրավի, ողջ ՀՀ տարածքում՝ <br />
                <span className="text-gray-900">միկրովերանորոգման վարկ Բանկի ռեսուրսներով</span>
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Երազո՞ւմ ես նորոգված, հարմարավետ ու գեղեցիկ բնակարանի մասին, բայց բյուջեն չի հերիքում:{' '}
                <span className="text-[#6a0dad] font-bold">Evocabank</span>-ը քեզ համար ունի արագ լուծում՝{' '}
                <span className="text-[#6a0dad] font-bold">Միկրովերանորոգման վարկ:</span>
              </p>
              <p className="text-gray-900 font-extrabold text-base pt-2">
                Թարմացրու քո բնակարանը՝ առանց մեծ ծախսերի:
              </p>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-[#faf9fe] border border-purple-50 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-purple-100 pb-5 mb-5">
                <div>
                  <span className="text-xs text-gray-400 font-semibold block mb-0.5">մինչև</span>
                  <span className="text-2xl md:text-3xl font-black text-[#5c00e6]">
                    5 մլն. ֏
                  </span>
                </div>
                <span className="text-sm font-bold text-gray-700">Գումար</span>
              </div>

              <div className="flex items-center justify-between border-b border-purple-100 pb-5 mb-5">
                <span className="text-2xl md:text-3xl font-black text-[#5c00e6]">
                  60 ամիս
                </span>
                <span className="text-sm font-bold text-gray-700">Ժամկետ</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl md:text-3xl font-black text-[#5c00e6]">
                  17%
                </span>
                <span className="text-sm font-bold text-gray-700">Տոկոսադրույք</span>
              </div>
            </div>
          </div>
        ) : (
          /* TAB 2: ՊԱՅՄԱՆՆԵՐ */
          <div className="w-full">
            <h3 className="text-xl md:text-2xl font-extrabold text-[#222] mb-6">
              Վարկավորման պայմաններ
            </h3>

            {/* Currency selector tabs */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setActiveCurrency('AMD')}
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition ${
                  activeCurrency === 'AMD'
                    ? 'bg-[#5c00e6] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                AMD
              </button>
            </div>

            {/* Terms Table */}
            <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full text-left text-xs md:text-sm border-collapse">
                <thead>
                  <tr className="bg-[#f9f8fd] border-b border-gray-200 text-gray-700 font-bold">
                    <th className="p-4 w-12 text-center">#</th>
                    <th className="p-4 w-1/3 border-r border-gray-200">Պայման</th>
                    <th className="p-4">Մանրամասներ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {loanTermsData.map((item) => (
                    <tr key={item.id} className="hover:bg-purple-50/40 transition-colors">
                      <td className="p-4 text-center font-bold text-purple-900 bg-gray-50/50">
                        {item.id}
                      </td>
                      <td className="p-4 font-bold text-gray-900 border-r border-gray-200 align-top">
                        {item.title}
                      </td>
                      <td className="p-4 text-gray-700 whitespace-pre-line leading-relaxed align-top font-medium">
                        {item.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      {/* 8. SLIDER SECTION */}
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

      {/* FLOATING CALL BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#5c00e6] text-white p-3.5 rounded-full shadow-lg hover:bg-purple-900 transition flex items-center justify-center">
          <Phone className="w-5 h-5 fill-current" />
        </button>
      </div>
    </div>
  );
};

export default MicroRenovationLoan;




