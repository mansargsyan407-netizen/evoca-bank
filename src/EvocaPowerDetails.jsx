import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const EvocaPowerDetails = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');

  // "Այլ վարկեր" կարուսելի տվյալները
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
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col">
      {/* HEADER & HERO SECTION */}
      <section className="bg-[#f9f5ff] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-stretch justify-between min-h-[320px]">
          <div className="md:w-3/5 py-10 px-8 md:px-12 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Արևային կայանների ձեռք բերման վարկ EvocaPOWER
            </h1>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-xl">
              Քո տան էլեկտրաէներգիան արևից, իսկ վարկը՝ Evoca-ից: EvocaPOWER վարկատեսակը տրամադրվում է առանց կանխավճարի, գրավի և բանկ այցելելու անհրաժեշտության:
            </p>
          </div>

          <div className="md:w-2/5 bg-[#14001a] flex items-center justify-center p-6 rounded-l-3xl">
            <img 
              src="https://www.evoca.am/images-cache/loans/1/17552479364114/560x400.png" 
              alt="EvocaPOWER Solar Panel" 
              className="max-h-64 object-contain"
            />
          </div>
        </div>
      </section>

      {/* BREADCRUMBS & GO BACK */}
      <div className="max-w-[1400px] mx-auto px-6 py-4 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-gray-500 gap-4">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center space-x-2 bg-white border border-gray-200 shadow-sm px-5 py-2 rounded-full text-gray-800 font-bold hover:bg-gray-50 transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Վերադառնալ</span>
        </button>

        <div className="flex items-center space-x-2 text-[11px] font-medium text-gray-600 flex-wrap">
          <span>🏠</span>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <Link to="/" className="hover:text-purple-700">Անհատ</Link>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <Link to="#" className="hover:text-purple-700">Վարկեր</Link>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <span className="text-gray-800 font-bold">Արևային կայանների ձեռք բերման վարկ EvocaPOWER</span>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-[1400px] mx-auto px-6 py-6 w-full flex-grow">
        {/* 1. TABS & DETAILS GRID */}
        <div className="border-b mb-8 flex space-x-8 text-sm font-semibold">
          <button 
            onClick={() => setActiveTab('about')}
            className={`pb-3 transition ${activeTab === 'about' ? 'border-b-2 border-purple-700 text-purple-700' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Վարկի մասին
          </button>
          <button 
            onClick={() => setActiveTab('conditions')}
            className={`pb-3 transition ${activeTab === 'conditions' ? 'border-b-2 border-purple-700 text-purple-700' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Պայմաններ
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Text Description */}
          <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed text-sm">
            <p>
              EvocaPOWER-ի միջոցով կարող ես տեղադրել արևային ֆոտովոլտային կայաններ կամ արևային ջրատաքացուցիչներ, և որ ամենակարևորն է՝ <strong className="text-purple-700 uppercase font-extrabold">ԱՌԱՆՑ</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-purple-700 font-semibold pl-2">
              <li><span className="text-gray-700 font-normal">կանխավճարի</span></li>
              <li><span className="text-gray-700 font-normal">գրավի</span></li>
              <li><span className="text-gray-700 font-normal">բանկ այցելելու անհրաժեշտության</span></li>
            </ul>
            <p>
              Այս վարկատեսակից օգտվելու համար՝ հարկավոր է այցելել մեր գործընկերների խանութ-սրահներ, ընտրել համապատասխան պրոդուկտը և անմիջապես այնտեղից դիմել վարկի համար: Իսկ հաստատումը կկատարվի մեր կողմից՝ հաշված րոպեների ընթացքում:
            </p>
            <p>
              Բայց <span className="text-purple-700 font-semibold">EvocaPOWER</span> վարկի առավելություններն այսքանով չեն ավարտվում. դու կարող ես ձեռք բերել արևային էներգիայի համակարգեր մեր վստահելի գործընկեր մատակարարներից, որի արդյունքում՝ վարկի ամսական մարումները կարող են ամբողջությամբ փոխհատուցվել քո էլեկտրաէներգիայի խնայողության հաշվին:
            </p>
          </div>

          {/* Loan Card Stats */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-6">
            <div className="flex justify-start">
              <span className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">֏</span>
            </div>
            
            <div className="border-b pb-4 flex justify-between items-baseline">
              <div>
                <span className="text-xs text-gray-400 block">Մինչև</span>
                <span className="text-2xl font-bold text-purple-700">5 մլն. ֏</span>
              </div>
              <span className="text-xs text-gray-500 font-medium">Գումար</span>
            </div>

            <div className="border-b pb-4 flex justify-between items-baseline">
              <div>
                <span className="text-xs text-gray-400 block">Մինչև</span>
                <span className="text-2xl font-bold text-purple-700">60 ամիս</span>
              </div>
              <span className="text-xs text-gray-500 font-medium">Ժամկետ</span>
            </div>

            <div className="flex justify-between items-baseline">
              <div>
                <span className="text-xs text-gray-400 block">սկսած</span>
                <span className="text-2xl font-bold text-purple-700">0%-ից</span>
              </div>
              <span className="text-xs text-gray-500 font-medium">Տոկոսադրույքից</span>
            </div>
          </div>
        </div>

        {/* 2. OTHER LOANS CAROUSEL SECTION */}
        <section className="max-w-7xl mx-auto px-4 py-8 mt-12">
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

        {/* 3. ONLINE & MOBILE BANKING BANNER SECTION */}
        <section className="w-full bg-[#6a0dad] text-white py-12 px-6 relative overflow-hidden mt-12 rounded-3xl">
          <div className="absolute top-0 left-0 w-36 h-36 bg-purple-500/30 rounded-br-full pointer-events-none z-0"></div>
          <div className="absolute top-10 left-10 w-12 h-12 rounded-full border-4 border-pink-400 opacity-40 pointer-events-none"></div>
          <div className="absolute top-6 right-20 w-8 h-8 border-2 border-white/20 rotate-45 pointer-events-none"></div>
          <div className="absolute bottom-12 right-32 w-10 h-10 bg-pink-400/30 rounded-lg rotate-12 blur-sm pointer-events-none"></div>

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            {/* Left Side: Laptop & Phone Mockups */}
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

            {/* Right Side: Text, Action Button & Downloads */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Օնլայն և մոբայլ բանկինգ
              </h2>

              <p className="text-purple-100 text-sm md:text-base leading-relaxed max-w-xl">
                Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
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
      </main>

      {/* FLOATING CONTACT BUTTON */}
      <div className="fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2.5 rounded-full shadow-lg flex items-center space-x-2 text-xs font-bold cursor-pointer hover:bg-purple-700 transition z-50">
        <Phone className="w-4 h-4" />
        <span>Գրեք մեզ, մենք օնլայն ենք !</span>
      </div>

      {/* 4. FOOTER SECTION */}
     <footer className="mt-20 border-t border-gray-200 bg-white pt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              
              {/* Վերևի աջ անկյունում՝ Թարմացման ամսաթիվը */}
              <div className="text-right text-xs text-gray-400 font-medium mb-6">
                Թարմացվել է՝ 28/08/2026 17:20
              </div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
                
                {/* Սյունակ 1: Լոգո և հասցե */}
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
    
                {/* Սյունակ 2: Բանկի մասին */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-4">Բանկի մասին</h4>
                  <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                    <li><Link to="/about" className="hover:text-[#6c00ff]">Մեր մասին</Link></li>
                    <li><Link to="/management" className="hover:text-[#6c00ff]">Ղեկավարություն</Link></li>
                    <li><Link to="/shareholders" className="hover:text-[#6c00ff]">Բաժնետերեր</Link></li>
                    <li><Link to="/reports" className="hover:text-[#6c00ff]">Հաշվետվություններ</Link></li>
                    <li><Link to="/legal" className="hover:text-[#6c00ff]">Իրավական ակտեր</Link></li>
                    <li><Link to="/tariffs" className="hover:text-[#6c00ff]">Սակագներ</Link></li>
                    <li><Link to="/property" className="hover:text-[#6c00ff]">Օտարվող գույք</Link></li>
                    <li><Link to="/developers" className="hover:text-[#6c00ff]">Կառուցապատողներ</Link></li>
                    <li><Link to="/partners" className="hover:text-[#6c00ff]">Գործընկեր ավտոսրահներ</Link></li>
                    <li><Link to="/tariffs-archive" className="hover:text-[#6c00ff]">Սակագների արխիվ</Link></li>
                  </ul>
                </div>
    
                {/* Սյունակ 3: Օգտակար հղումներ */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-4">Օգտակար հղումներ</h4>
                  <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                    <li><Link to="/rights" className="hover:text-[#6c00ff]">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</Link></li>
                    <li><Link to="/residence" className="hover:text-[#6c00ff]">Հաճախորդի ռեզիդենտության չափանիշներ</Link></li>
                    <li><Link to="/regulation" className="hover:text-[#6c00ff]">Կարգավորում</Link></li>
                    <li><Link to="/privacy" className="hover:text-[#6c00ff]">Գաղտնիության քաղաքականություն</Link></li>
                    <li><Link to="/mediator" className="hover:text-[#6c00ff]">Ֆին. հաշտարար</Link></li>
                    <li><Link to="/aml" className="hover:text-[#6c00ff]">Ֆինանսական հանցագործությունների կանխարգելում</Link></li>
                    <li><Link to="/cardholders" className="hover:text-[#6c00ff]">Հղումներ Բանկի քարտապանների համար</Link></li>
                  </ul>
                </div>
    
                {/* Սյունակ 4: Այլ հղումներ */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-4">Այլ հղումներ</h4>
                  <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                    <li><a href="https://evocaonline.am" target="_blank" rel="noreferrer" className="hover:text-[#6c00ff]">EvocaONLINE</a></li>
                    <li><Link to="/safes" className="hover:text-[#6c00ff]">Պահատուփեր</Link></li>
                    <li><Link to="/faq" className="hover:text-[#6c00ff]">Հաճախ տրվող հարցեր</Link></li>
                    <li><Link to="/announcements" className="hover:text-[#6c00ff]">Հայտարարություններ</Link></li>
                    <li><Link to="/dlibrary" className="hover:text-[#6c00ff]">Dlibrary</Link></li>
                    <li><Link to="/booklets" className="hover:text-[#6c00ff]">Բուկլետներ</Link></li>
                    <li><Link to="/feedback" className="hover:text-[#6c00ff]">Հետադարձ կապ</Link></li>
                    <li><Link to="/sitemap" className="hover:text-[#6c00ff]">Կայքի քարտեզ</Link></li>
                  </ul>
                </div>
    
                {/* Սյունակ 5: Սոց․ ցանցեր, հավելվածներ և Կոնտակտներ */}
                <div className="space-y-6">
                  
                  {/* Սոց ցանցերի իկոնաներ */}
                  <div className="flex items-center gap-3 text-gray-400">
                    <a href="#facebook" className="hover:text-[#6c00ff]"><i className="fab fa-facebook-f text-base"></i></a>
                    <a href="#instagram" className="hover:text-[#6c00ff]"><i className="fab fa-instagram text-base"></i></a>
                    <a href="#pinterest" className="hover:text-[#6c00ff]"><i className="fab fa-pinterest text-base"></i></a>
                    <a href="#youtube" className="hover:text-[#6c00ff]"><i className="fab fa-youtube text-base"></i></a>
                    <a href="#linkedin" className="hover:text-[#6c00ff]"><i className="fab fa-linkedin-in text-base"></i></a>
                  </div>
    
                  {/* App Store / Google Play կոճակներ */}
                  <div className="flex flex-col gap-2">
                    <a href="#appstore" className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 w-max hover:opacity-80">
                      <span className="text-xs font-semibold">App Store</span>
                    </a>
                    <a href="#googleplay" className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 w-max hover:opacity-80">
                      <span className="text-xs font-semibold">Google Play</span>
                    </a>
                  </div>
    
                  {/* Կոնտակտային տվյալներ */}
                  <div className="space-y-2 text-xs">
                    <div>
                      <Link to="/branches" className="text-[#6c00ff] font-bold hover:underline">
                        Բանկի հասցեները և աշխատաժամերը
                      </Link>
                    </div>
                    <div>
                      <Link to="/contact" className="text-[#6c00ff] font-bold hover:underline">
                        Կապ մեզ հետ
                      </Link>
                    </div>
                    <div className="pt-2 font-bold text-gray-800">
                      +374 10 605555
                    </div>
                    <div className="font-extrabold text-[#6c00ff] text-sm">
                      8444
                    </div>
                  </div>
    
                </div>
    
              </div>
            </div>
    
            {/* Ներքևի մոխրագույն զոլով տեքստ և լոգոներ */}
            <div className="bg-gray-100 py-6 border-t border-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
                <p className="text-[10px] text-gray-500 leading-normal max-w-4xl">
                  Հարգելի' այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական կայք տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
                </p>
                
                {/* Գործընկերների/Համակարգերի լոգոներ */}
                <div className="flex flex-wrap items-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                  <span className="text-xs font-bold text-gray-600">fininfo</span>
                  <span className="text-xs font-bold text-gray-600">abcfinance.am</span>
                  <span className="text-xs font-bold text-gray-600">arca</span>
                </div>
              </div>
            </div>
          </footer>
    </div>
  );
};

export default EvocaPowerDetails;