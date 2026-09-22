import React, { useState, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Landmark,
  Briefcase,
  RefreshCw,
  Shirt,
  FileText,
  DoorOpen,
  SunMedium,
  Gift,
  Search,
  RotateCcw,
  CreditCard,
  Factory,
} from 'lucide-react';

export default function TextileLoanPage() {
  const [activeTab, setActiveTab] = useState('about');
  const [currency, setCurrency] = useState('AMD');

  // Carousel ref and scroll function
  const scrollerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({
        left: direction * 300,
        behavior: 'smooth',
      });
    }
  };

  // Other loans data with provided items, images, and icons
  const otherLoans = [
    {
      icon: Zap,
      img: 'https://www.evoca.am/images-cache/loans/1/16148706367372/415x261.jpg',
      title: 'KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում',
    },
    {
      icon: Landmark,
      img: 'https://www.evoca.am/images-cache/loans/1/16394873850552/415x261.png',
      title: 'KFW բանկի կողմից ՓՄՁ-ների ֆինանսավորում',
    },
    {
      icon: Briefcase,
      img: 'https://www.evoca.am/images-cache/loans/1/16148637167789/415x261.jpg',
      title: 'Խոշոր և ՓՄՁ բիզնես վարկ',
    },
    {
      icon: RefreshCw,
      img: 'https://www.evoca.am/images-cache/loans/1/17822121684763/415x261.png',
      title: 'Բիզնես վարկերի վերաֆինանսավորում',
    },
    {
      icon: Shirt,
      img: 'https://www.evoca.am/images-cache/loans/1/17749381045652/415x261.png',
      title: 'Տեքստիլ ոլորտում իսկ նպատակային ուղղված վարկ',
    },
    {
      icon: FileText,
      img: 'https://www.evoca.am/images-cache/loans/1/17848707149538/415x261.png',
      title: 'Պարտատոմսերով ապահովված վարկ',
    },
    {
      icon: DoorOpen,
      img: 'https://www.evoca.am/images-cache/loans/1/1614870243661/415x261.jpg',
      title: 'Evoca GO',
    },
    {
      icon: SunMedium,
      img: 'https://www.evoca.am/images-cache/loans/1/16148681592638/415x261.jpg',
      title: 'Վարկեր ԳՀՀ - Էներգաարդյունավետություն ՓՄՁ-ների համար ծրագիր',
    },
    {
      icon: Gift,
      img: 'https://www.evoca.am/images-cache/loans/1/16142658362638/415x261.jpg',
      title: 'Ավանդի գրավով ապահովված վարկ / վարկային սահմանաչափ',
    },
    {
      icon: Search,
      img: 'https://www.evoca.am/images-cache/loans/1/1614869229831/415x261.jpg',
      title: 'Պարզ բիզնես վարկ',
    },
    {
      icon: RotateCcw,
      img: 'https://www.evoca.am/images-cache/loans/1/16148678149192/415x261.jpg',
      title: 'Հաշվի վարկավորում',
    },
    {
      icon: CreditCard,
      img: 'https://www.evoca.am/images-cache/loans/1/16148665659945/415x261.jpg',
      title: 'Վարկային գիծ',
    },
    {
      icon: Factory,
      img: 'https://www.evoca.am/images-cache/loans/1/16148696068365/415x261.jpg',
      title: 'Արտադրողականության խթանման ծրագրի ներքո վարկ (գործում է մինչև 31.12.2026թ.)',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans relative">
      {/* Social Sidebar */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 bg-gray-200/80 p-2 rounded-r-md flex flex-col gap-3 text-gray-600 z-10">
        <a href="#" className="hover:text-purple-700 font-bold text-sm">f</a>
        <a href="#" className="hover:text-purple-700 font-bold text-sm">in</a>
        <a href="#" className="hover:text-purple-700 font-bold text-sm">P</a>
      </div>

     

      {/* Hero Banner Section */}
      <section className="bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-900 text-white relative overflow-hidden rounded-b-[40px]">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Box */}
          <div className="md:col-span-7 space-y-6 z-10">
         
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              Տեքստիլ ոլորտում հումքի ներմուծմանն ուղղված վարկ
            </h1>
            <p className="text-purple-100 text-sm md:text-base leading-relaxed max-w-2xl opacity-90">
              Evocabank-ը տրամադրում է բիզնես վարկ՝ տեքստիլ հումքի ներմուծման համար։ Շտապեք դիմել, զարգացնել Ձեր բիզնեսը և դառնալ ոլորտում մրցունակ։
            </p>
          </div>

          {/* Right Hero Image Graphic */}
          <div className="md:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md aspect-4/3 bg-purple-600/30 rounded-2xl flex items-center justify-center p-6 border border-purple-400/20 backdrop-blur-sm shadow-2xl">
              <div className="text-center space-y-2">
          <img src="	https://www.evoca.am/images-cache/loans/1/17749381045647/560x400.png" alt="" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-8">
          <button className="flex items-center gap-1 bg-white border border-gray-300 rounded-full px-3 py-1 font-semibold text-gray-700 hover:bg-gray-100">
            &larr; Վերադառնալ
          </button>
          <span>/</span>
          <a href="#" className="hover:underline">🏠</a>
          <span>&rsaquo;</span>
          <a href="#" className="hover:underline">Բիզնես</a>
          <span>&rsaquo;</span>
          <a href="#" className="hover:underline">Վարկեր</a>
          <span>&rsaquo;</span>
          <a href="#" className="hover:underline">Բիզնես վարկեր</a>
          <span>&rsaquo;</span>
          <span className="text-purple-700 font-semibold truncate max-w-xs">
            Տեքստիլ ոլորտում հումքի ներմուծմանն ուղղված վարկ
          </span>
        </div>

        {/* Dynamic Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-3 font-bold text-sm transition relative ${
                activeTab === 'about'
                  ? 'text-purple-700 border-b-2 border-purple-700'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Վարկի մասին
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`pb-3 font-bold text-sm transition relative ${
                activeTab === 'terms'
                  ? 'text-purple-700 border-b-2 border-purple-700'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Պայմաններ
            </button>
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Detailed Paragraph Text */}
          <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
            <p>
              Ցանկանո՞ւմ եք ներմուծել հումք և մեծացնել <span className="font-extrabold text-purple-700">տեքստիլի</span> արտադրության ծավալները, բարձրացնել արդյունավետությունը։ Այդ դեպքում այս վարկատեսակը հենց Ձեզ համար է։
            </p>
            <p>
              Օգտվելով այս բիզնես վարկից՝ Դուք կստանաք մրցունակ տոկոսադրույք, երկարաժամկետ մարման հնարավորություն, պարզ պայմաններ և ձևակերպման արագ գործընթաց։ <span className="font-extrabold text-purple-700">Դուք նաև կարող եք ստանալ</span> մինչև <span className="font-extrabold text-purple-700">8%</span> սուբսիդավորում պետության կողմից։
            </p>
            <p className="text-gray-600">
              Այս վարկը նախատեսված է ՀՀ ռեզիդենտ իրավաբանական անձանց և անհատ ձեռնարկատերերի համար, որոնք գործունեություն են ծավալում տեքստիլ ոլորտում և <em>զբաղվում են հումքի ներկրմամբ</em>։
            </p>
            <p className="text-gray-600">
              Բիզնես վարկը կարող եք ձևակերպել նաև արտարժույթով։
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="lg:col-span-5 bg-white border border-gray-100 rounded-2xl p-6 shadow-xl space-y-6">
            
            {/* Currency Selector */}
            <div className="flex gap-2">
              {['AMD', 'USD', 'EUR'].map((curr, idx) => {
                const symbols = ['֏', '$', '€'];
                return (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`w-9 h-9 rounded-full font-bold flex items-center justify-center transition text-sm ${
                      currency === curr
                        ? 'bg-purple-700 text-white shadow-md'
                        : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                    }`}
                  >
                    {symbols[idx]}
                  </button>
                );
              })}
            </div>

            {/* Metric Items */}
            <div className="divide-y divide-gray-100 space-y-4">
              <div className="pt-2 flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-400 font-medium block">Մինչև</span>
                  <span className="text-2xl font-black text-purple-700">36 ամիս</span>
                </div>
                <span className="text-xs font-semibold text-gray-500">Ժամկետ</span>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-400 font-medium block">Մինչև</span>
                  <span className="text-2xl font-black text-purple-700">
                    500 մլն {currency === 'AMD' ? '֏' : currency === 'USD' ? '$' : '€'}
                  </span>
                </div>
                <span className="text-xs font-semibold text-gray-500 text-right max-w-[140px]">
                  Սահմանաչափ կամ համարժեք արտարժույթ
                </span>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <div>
                  <span className="text-2xl font-black text-purple-700">8%</span>
                </div>
                <span className="text-xs font-semibold text-gray-500 text-right max-w-[180px]">
                  Տոկոսադրույքի սուբսիդավորման չափ
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Other loans slider / carousel */}
        <section className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Այլ վարկեր</h2>
            <div className="flex gap-2">
              <button
                onClick={() => scroll(-1)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-purple-700 hover:text-purple-700"
                aria-label="Նախորդ"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll(1)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-purple-700 hover:text-purple-700"
                aria-label="Հաջորդ"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {otherLoans.map(({ icon: Icon, img, title }, index) => (
              <a
                key={index}
                href="#"
                className="group w-64 shrink-0"
              >
                <div className="h-40 w-full overflow-hidden rounded-lg bg-slate-100 transition group-hover:opacity-90">
                  {img ? (
                    <img
                      src={img}
                      alt={title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Icon size={40} className="text-purple-700" strokeWidth={1.5} />
                    </div>
                  )}
                </div>
                <p className="mt-3 text-sm font-semibold leading-snug text-slate-800 group-hover:text-purple-700">
                  {title}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>

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
}