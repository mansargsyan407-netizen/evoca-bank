import React from 'react';
import { Link } from 'react-router-dom';

export default function GlobbingNewsPage() {
  return (
    <div className="w-full bg-white text-[#333333] font-sans min-h-screen relative">

      {/* Social Sticky Bar (Left Side) */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 bg-gray-100/80 backdrop-blur-sm p-2 rounded-r-xl flex flex-col gap-3 text-gray-500 z-40 text-sm">
        <a href="#facebook" className="hover:text-[#6b21a8] transition">f</a>
        <a href="#twitter" className="hover:text-[#6b21a8] transition">🐦</a>
        <a href="#linkedin" className="hover:text-[#6b21a8] transition">in</a>
        <a href="#pinterest" className="hover:text-[#6b21a8] transition">P</a>
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <div className="px-4 md:px-8 py-4 text-xs text-gray-500 flex items-center gap-2 flex-wrap">
          <Link to="/" className="hover:underline flex items-center gap-1">
            <span>←</span> Վերադառնալ
          </Link>
          <span>›</span>
          <Link to="/news" className="hover:underline">Նորություններ</Link>
          <span>›</span>
          <span>Պրոդուկտներ</span>
          <span>›</span>
          <span>Վճարիր Evoca Visa քարտով և ստացիր առավելություններ Globbing-ում</span>
        </div>

        {/* Top Hero Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Hero Card */}
          <div className="bg-[#fcfbfe] rounded-3xl p-8 lg:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-4 h-1.5 bg-[#d946ef] rounded-full"></span>
                <span className="text-xs font-bold text-[#6b21a8]">Պրոդուկտներ</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Վճարիր Evoca Visa քարտով և ստացիր առավելություններ Globbing-ում
              </h1>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-2">
                Մինչև դեկտեմբերի 31-ը Evoca Visa Business քարտապաններն ունեն հատուկ զեղչեր, արտոնյալ սակագներ, անվճար առաքում և այլ առավելություններ Globbing-ում:
              </p>
            </div>

            <div className="text-xs text-gray-400 font-medium">
              14.05.2026
            </div>
          </div>

          {/* Right Banner Image */}
          <div className="rounded-3xl overflow-hidden shadow-sm relative min-h-[300px]">
            <img 
              src="https://www.evoca.am/images-cache/news/1/1778751542792/780x585.png" 
              alt="Globbing Evocabank" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Detailed Article Body */}
        <section className="max-w-4xl mx-auto space-y-8 text-sm md:text-base leading-relaxed text-gray-700">
          
          <p className="font-bold text-base md:text-lg text-[#6b21a8]">
            <strong className="text-[#6b21a8]">Evoca Visa Business</strong> քարտապանների համար օնլայն գնումներ կատարելու լավագույն ժամանակն է:
          </p>

          <div className="text-center pt-2">
            <h2 className="text-lg md:text-xl font-extrabold text-[#6b21a8]">
              Evoca - Visa - Globbing համատեղ առաջարկ
            </h2>
          </div>

          <p>
            Ունե՞ս <strong className="text-[#6b21a8]">Evoca Visa Business քարտ</strong>, սիրո՞ւմ ես օնլայն գնումներ, հիմա լավագույն ժամանակն է:
          </p>

          <p>
            Վճարիր <strong className="text-[#6b21a8]">Evoca Visa Business քարտով Globbing</strong>-ում քո միջազգային առաքումների համար և ստացիր՝
          </p>

          {/* Bulleted Benefits List */}
          <ul className="space-y-4 pl-4">
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6b21a8] mt-2 shrink-0"></span>
              <span>արտոնյալ սակագներ միջազգային առաքումների համար,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6b21a8] mt-2 shrink-0"></span>
              <span>ծանրոցի անվճար առաքում քո նախընտրած հասցեով,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6b21a8] mt-2 shrink-0"></span>
              <span>50% զեղչ «Գնիր իմ փոխարեն» ծառայության համար,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6b21a8] mt-2 shrink-0"></span>
              <span>անհատական օգնական՝ լոգիստիկայի, առաքումների և ընթացիկ այլ հարցերի համար:</span>
            </li>
          </ul>

          <p className="pt-2">
            Առաջարկը գործում է մինչև <strong className="text-gray-900 font-bold">դեկտեմբերի 30-ը</strong> և հասանելի է բացառապես <strong className="text-[#6b21a8]">Evoca Visa Business</strong> քարտապանների համար:
          </p>

          <p className="pt-2">
            Պատվիրիր քո <Link to="/travel-card" className="text-[#6b21a8] underline font-bold">Evoca Visa Business քարտը</Link> հիմա և օգտվիր առաջարկից:
          </p>

        </section>

        {/* Other News Section */}
        <section className="pt-12 border-t border-gray-100 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 - Back to School */}
            <Link to="/news/products/back-to-school" className="space-y-3 group cursor-pointer block">
              <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3]">
                <img 
                  src="https://www.evoca.am/images-cache/news/1/17873217684586/439x320.png" 
                  alt="Back to School" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-gray-900 leading-snug group-hover:text-[#6b21a8] transition">
                Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով
              </h3>
              <p className="text-xs text-gray-400">21.08.2026</p>
            </Link>

            {/* Card 2 - Wilco */}
            <Link to="/news/evocabank-wilco" className="space-y-3 group cursor-pointer block">
              <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3]">
                <img 
                  src="https://www.evoca.am/images-cache/news/1/17815163976713/428x321.png" 
                  alt="Evocabank Wilco" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-gray-900 leading-snug group-hover:text-[#6b21a8] transition">
                Evocabank-ն ու Wilco-ն ներկայացնում են բացառիկ համատեղ քարտ
              </h3>
              <p className="text-xs text-gray-400">15.06.2026</p>
            </Link>

            {/* Card 3 - Adidas Armenia */}
            <Link to="/news/adidas-armenia" className="space-y-3 group cursor-pointer block">
              <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3]">
                <img 
                  src="https://www.evoca.am/images-cache/news/1/17804748057663/428x321.png" 
                  alt="Adidas Armenia" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-gray-900 leading-snug group-hover:text-[#6b21a8] transition">
                Վճարիր Evoca Mastercard-ով Adidas Armenia-ում և ստացիր 10% զեղչ
              </h3>
              <p className="text-xs text-gray-400">03.06.2026</p>
            </Link>

          </div>

          <div className="text-right text-xs text-gray-400 pt-4">
            Թարմացվել է` 21/08/2026 18:58
          </div>
        </section>

      </main>

      {/* Evocabank Full Footer */}
      <footer className="bg-[#fcfbfe] border-t border-gray-100 mt-16 pt-12 pb-8 px-6 text-xs text-gray-600">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4">
            <h2 className="text-xl font-black text-[#6b21a8] tracking-wider">evoca<span className="text-gray-900">BANK</span></h2>
            <p className="text-gray-500">
              ք. Երևան, 0010,<br />
              Հանրապետության 44/2
            </p>
            <p className="text-gray-400 text-[11px] leading-relaxed">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="text-gray-400 text-[11px]">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 text-sm mb-3">Բանկի մասին</h3>
            <p><a href="#about" className="hover:underline">Մեր մասին</a></p>
            <p><a href="#management" className="hover:underline">Ղեկավարություն</a></p>
            <p><a href="#shareholders" className="hover:underline">Բաժնետերեր</a></p>
            <p><a href="#reports" className="hover:underline">Հաշվետվություններ</a></p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 text-sm mb-3">Օգտակար հղումներ</h3>
            <p><a href="#rights" className="hover:underline">Հաճախորդի իրավունքները</a></p>
            <p><a href="#privacy" className="hover:underline">Գաղտնիության քաղաքականություն</a></p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-sm">Այլ հղումներ</h3>
            <div className="space-y-1.5">
              <p><a href="#online" className="hover:underline">EvocaONLINE</a></p>
              <p><a href="#contact" className="hover:underline">Հետադարձ կապ</a></p>
            </div>
            <div className="pt-2 space-y-2">
              <p className="font-bold text-gray-900 text-sm">+374 10 605555</p>
              <p className="font-bold text-[#6b21a8] text-base">8444</p>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-[#6b21a8] text-white px-4 py-2.5 rounded-full shadow-lg font-bold text-xs cursor-pointer hover:bg-purple-900 transition">
        <span>Գրեք մեզ, մենք օնլայն ենք !</span>
        <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
      </div>

    </div>
  );
}