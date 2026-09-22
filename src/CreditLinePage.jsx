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

export default function CreditLinePage() {
  const [activeTab, setActiveTab] = useState('about');
  const [currency, setCurrency] = useState('AMD'); // AMD, USD, EUR
  const scrollerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({
        left: direction * 300,
        behavior: 'smooth',
      });
    }
  };

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
    <div className="min-h-screen bg-white text-gray-800 font-sans relative">
      {/* Social Sticky Sidebar */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 bg-gray-100/80 p-2 rounded-r-md flex flex-col gap-3 text-gray-600 z-10 shadow-sm border border-l-0 border-gray-200">
        <a href="#" className="hover:text-purple-700 font-bold text-sm">f</a>
        <a href="#" className="hover:text-purple-700 font-bold text-sm">in</a>
        <a href="#" className="hover:text-purple-700 font-bold text-sm">P</a>
      </div>

      {/* Top Navbar Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-20">
     
        <div className="bg-purple-700 text-white px-6 py-2 text-xs font-bold">
          <div className="max-w-7xl mx-auto">Բիզնես վարկեր</div>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="bg-slate-50 text-gray-900 relative overflow-hidden rounded-b-[40px] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="md:col-span-7 space-y-4 z-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight text-gray-900">
              Վարկային գիծ
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
              Եթե Դուք ունեք կազմակերպություն կամ անհատ ձեռնարկատեր եք և ցանկանում եք մշտապես ունենալ հասանելի վարկային միջոցներ,ապա կարող եք օգտվել Evocabank-ի վերականգնվող և չվերականգնվող վարկային գծերից:
            </p>
          </div>

          {/* Right Graphic */}
          <div className="md:col-span-5 flex justify-center relative">
              <img
                src="	https://www.evoca.am/images-cache/loans/1/16148665659945/415x261.jpg"
                alt="Վարկային գիծ"
                className="max-h-full object-contain filter drop-shadow-md"
              />
         
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-8">
          <button className="flex items-center gap-1 bg-white border border-gray-300 rounded-full px-3 py-1 font-semibold text-gray-700 hover:bg-gray-100 shadow-sm transition">
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
            Վարկային գիծ
          </span>
        </div>

        {/* Dynamic Tabs Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex gap-8 text-sm font-bold">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-3 transition ${
                activeTab === 'about'
                  ? 'text-purple-700 border-b-2 border-purple-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Վարկի մասին
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`pb-3 transition ${
                activeTab === 'terms'
                  ? 'text-purple-700 border-b-2 border-purple-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Պայմաններ և սակագներ
            </button>
          </div>
        </div>

        {/* Tab Content & Right Summary Card Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
          
          {/* Left Text Description */}
          <div className="lg:col-span-7 space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            {activeTab === 'about' && (
              <>
                <p>
                  Վարկային գծերը տրամադրվում են Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական և անհատ ձեռնարկատեր անձանց` բիզնես վարկերի համար սահմանված տոկոսադրույքներով, մինչև 5 տարի մարման ժամկետով, դրամով կամ արտարժույթով` շրջանառու կապիտալի համալրման նպատակով: Կարող եք օգտվել հետևյալ վարկային գծերից՝
                </p>

                <ul className="space-y-3 pl-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold text-lg leading-none">&bull;</span>
                    <span>
                      <strong className="text-gray-900">Վարկային գիծ վերականգնվող,</strong> որի դեպքում կարող եք հաստատված վարկային գծի սահմանաչափում և գործելու ժամանակահատվածում պարբերաբար մարումներ կատարել և մնացորդի սահմաններում միջոցներ ստանալ վարկային գծից: Ընդ որում` վարկային գծի չօգտագործված մասի վրա սահմանվում է 0-3% տարեկան տոկոսադրույք:
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold text-lg leading-none">&bull;</span>
                    <span>
                      <strong className="text-gray-900">Չվերականգնվող վարկային գիծ,</strong> որի դեպքում վարկային գիծը տրամադրում ենք մաս-մաս, և կատարված մարումներից հետո վարկային գծի սահմանաչափը չի վերականգնվում, ընդ որում` չօգտագործված մասի վրա տոկոսների հաշվարկում չի կատարվում:
                    </span>
                  </li>
                </ul>

                <p className="pt-2">
                  Վարկերը կարող եք ձևակերպել մեր Գլխամասային գրասենյակում և ցանկացած մասնաճյուղում (բացառությամբ «Էրեբունի», «Երևան Մոլ», «Հանրապետության» մասնաճյուղերի):
                </p>
              </>
            )}

            {activeTab === 'terms' && (
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-bold text-purple-900 mb-2">Պայմաններ և սակագներ</h3>
                <p className="text-sm text-gray-600">
                  Մանրամասն պայմանների և սակագների համար կարող եք այցելել Evocabank-ի մոտակա մասնաճյուղ կամ զանգահարել 8444 հեռախոսահամարով:
                </p>
              </div>
            )}
          </div>

          {/* Right Rates & Limits Card Widget */}
          <div className="lg:col-span-5 bg-white border border-purple-100 rounded-2xl p-6 shadow-xl shadow-purple-500/5 space-y-6">
            
            {/* Currency Selector Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setCurrency('AMD')}
                className={`w-8 h-8 rounded-full font-bold text-sm flex items-center justify-center transition shadow-sm ${
                  currency === 'AMD'
                    ? 'bg-purple-700 text-white'
                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
              >
                ֏
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`w-8 h-8 rounded-full font-bold text-sm flex items-center justify-center transition shadow-sm ${
                  currency === 'USD'
                    ? 'bg-purple-700 text-white'
                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
              >
                $
              </button>
              <button
                onClick={() => setCurrency('EUR')}
                className={`w-8 h-8 rounded-full font-bold text-sm flex items-center justify-center transition shadow-sm ${
                  currency === 'EUR'
                    ? 'bg-purple-700 text-white'
                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
              >
                €
              </button>
            </div>

            {/* Info Rows Table */}
            <div className="space-y-5 divide-y divide-gray-100">
              
              <div className="flex items-baseline justify-between pt-2">
                <div>
                  <span className="text-xs text-gray-400 block mb-0.5">մինչև</span>
                  <div className="text-2xl font-black text-purple-900">
                    1.5 մլրդ․ ֏
                  </div>
                </div>
                <div className="text-xs font-semibold text-gray-500 text-right">
                  Սահմանաչափ
                </div>
              </div>

              <div className="flex items-baseline justify-between pt-4">
                <div>
                  <span className="text-xs text-gray-400 block mb-0.5">մինչև</span>
                  <div className="text-2xl font-black text-purple-900">
                    5 տարի
                  </div>
                </div>
                <div className="text-xs font-semibold text-gray-500 text-right">
                  Մարման ժամկետ
                </div>
              </div>

              <div className="flex items-baseline justify-between pt-4">
                <div>
                  <span className="text-xs text-gray-400 block mb-0.5">սկսած</span>
                  <div className="text-2xl font-black text-purple-900">
                    6%-ից
                  </div>
                </div>
                <div className="text-xs font-semibold text-gray-500 text-right">
                  Տոկոսադրույք
                </div>
              </div>

            </div>
          </div>

        </div>

      </main>

      {/* Other Loans Carousel Section */}
      <section className="max-w-6xl mx-auto px-6 my-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-black text-slate-900">Այլ վարկեր</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-purple-700 hover:text-purple-700 shadow-sm"
              aria-label="Նախորդ"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-purple-700 hover:text-purple-700 shadow-sm"
              aria-label="Հաջորդ"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {otherLoans.map(({ title, img }) => (
            <a
              key={title}
              href="#"
              className="group w-64 shrink-0 bg-white rounded-xl overflow-hidden p-2 transition hover:shadow-md border border-transparent hover:border-gray-100"
            >
              <div className="h-44 w-full overflow-hidden rounded-lg bg-slate-50 flex items-center justify-center p-2">
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-xs md:text-sm font-bold text-center leading-snug text-slate-800 group-hover:text-purple-700">
                {title}
              </p>
            </a>
          ))}
        </div>
      </section>

    {/* Online & Mobile Banking Banner */}
      <section className="w-full bg-[#6b21a8] text-white py-12 px-6 relative overflow-hidden mt-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="w-full lg:w-1/2 flex items-center justify-center">
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