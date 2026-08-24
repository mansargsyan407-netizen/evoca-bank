import React from 'react';
import { Link } from 'react-router-dom';

export default function FirebirdAiFactoryPage() {
  return (
    <div className="w-full bg-white text-gray-800 font-sans min-h-screen relative">
      
      {/* Floating Social Media Side Icons */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-gray-100/80 backdrop-blur-sm p-1.5 rounded-r-lg flex flex-col gap-3 text-gray-600 text-xs shadow-sm">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-purple-700 font-bold">f</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-purple-700 font-bold">t</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-purple-700 font-bold">in</a>
        <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-purple-700 font-bold">p</a>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-gray-500 flex items-center gap-2">
        <Link to="/" className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full font-bold transition flex items-center gap-1">
          ← Վերադառնալ
        </Link>
        <span>›</span>
        <Link to="/news" className="hover:underline">Նորություններ</Link>
        <span>›</span>
        <span>Բանկային</span>
        <span>›</span>
        <span className="font-bold text-gray-800 truncate max-w-xs">
          Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»
        </span>
      </div>

      {/* Article Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Article Text Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-5 bg-[#6b21a8]"></span>
              <span className="text-xs font-bold text-[#6b21a8] uppercase tracking-wider">
                Բանկային
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»
            </h1>

            <p className="text-base font-semibold text-gray-600 leading-relaxed">
              Evocabank-ի համաֆինանսավորմամբ Հրազդանում գործարկվել է Firebird AI-ի տարածաշրջանի ամենամեծ «ԱԲ գործարանը»:
            </p>

            <p className="text-xs text-gray-400">11.08.2026</p>

            <hr className="border-gray-100 my-6" />

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                Այս տարվա մարտին <strong className="text-[#6b21a8]">Evocabank</strong>-ը 5 այլ ֆինանսական կառույցների հետ միացավ Հայաստանում արհեստական բանականության ենթակառուցվածքային մեգանախագծերից մեկին՝ <a href="https://firebird.ai" target="_blank" rel="noreferrer" className="text-[#6b21a8] font-bold underline italic">Firebird AI-ի «ԱԲ գործարանի» 300 մլն ԱՄՆ դոլարի ֆինանսավորմանը</a>:
              </p>

              <p>
                Այսօր՝ ընդամենը մի քանի ամիս անց, արդեն տեսնում ենք ֆինանսավորման արդյունքը. Հրազդանում պաշտոնապես բացվեց ԱԲ գործարանը՝ դառնալով տարածաշրջանի ամենամեծ արհեստական բանականության կենտրոններից մեկը:
              </p>

              <p>
                Firebird AI-ի գործարանը նախատեսված է Հայաստանում արհեստական բանականության և բարձր տեխնոլոգիաների զարգացման նոր հնարավորություններ ստեղծելու համար՝ տրամադրելով մեծ քանակությամբ ռեսուրսներ հետազոտական հաստատություններին, տեխնոլոգիական ընկերություններին և բիզնեսներին: Ծրագրի 2-րդ փուլը գործարկելուց հետո ներդրումների ծավալը կկազմի մոտ <em className="font-semibold">4 մլրդ դոլար</em>:
              </p>

              <p>
                <strong className="text-[#6b21a8]">Evocabank</strong>-ը շարունակում է աջակցել Հայաստանի տնտեսության և տեխնոլոգիական ոլորտի զարգացմանն ուղղված խոշոր նախագծերին՝ մասնակցելով այն նախաձեռնություններին, որոնք նոր հնարավորություններ են ստեղծում բիզնեսի, գիտության ու նորարարության համար:
              </p>
            </div>
          </div>

          {/* Article Image Banner */}
          <div className="lg:col-span-6 sticky top-8">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17864472573391/439x320.png" 
                alt="Firebird AI Evocabank" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </main>

      {/* Other News Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-100 mt-12">
        <h2 className="text-2xl font-black text-gray-900 mb-8">Այլ նորություններ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* News Card 1 - Moody's */}
          <Link to="/news/moodys-rating" className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 block group cursor-pointer">
            <img 
              src="https://www.evoca.am/images-cache/news/1/17870544210976/439x320.png" 
              alt="Moody's Ratings" 
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-[#6b21a8] transition">
                Ba3 վարկանիշ Moody’s-ից Evocabank-ին
              </h3>
              <p className="text-xs text-gray-400 pt-2">18.08.2026</p>
            </div>
          </Link>

          {/* News Card 2 - Green Rock */}
          <Link to="/news/green-rock" className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 block group cursor-pointer">
            <img 
              src="https://www.evoca.am/images-cache/news/1/17854167235525/780x585.png" 
              alt="Green Rock" 
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-[#6b21a8] transition">
                Evocabank-ը և Green Rock-ը մեկնարկեցին Բանկի նոր գլխամասի նախագիծը
              </h3>
              <p className="text-xs text-gray-400 pt-2">30.07.2026</p>
            </div>
          </Link>

          {/* News Card 3 - MIT Certified */}
          <Link to="/news/mit-certified" className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 block group cursor-pointer">
            <img 
              src="https://www.evoca.am/images-cache/news/1/17842875742396/428x321.png" 
              alt="MIT Certified" 
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-[#6b21a8] transition">
                Evoca-ի ղեկավարները հաջողությամբ ավարտեցին Generative AI դասընթացը
              </h3>
              <p className="text-xs text-gray-400 pt-2">17.07.2026</p>
            </div>
          </Link>

        </div>

        {/* Updated Timestamp */}
        <div className="text-right text-[11px] text-gray-400 mt-6">
          Թարմացվել է` 21/08/2026 18:58
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6 text-xs text-gray-600">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-3">
            <h3 className="text-xl font-black text-[#6b21a8]">evocaBANK</h3>
            <p>ք. Երևան, 0010, Հանրապետության 44/2</p>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="text-[10px] text-gray-400 pt-2">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3 text-sm">Բանկի մասին</h4>
            <Link to="/about" className="block hover:text-purple-700">Մեր մասին</Link>
            <Link to="/management" className="block hover:text-purple-700">Ղեկավարություն</Link>
            <Link to="/shareholders" className="block hover:text-purple-700">Բաժնետերեր</Link>
            <Link to="/reports" className="block hover:text-purple-700">Հաշվետվություններ</Link>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3 text-sm">Օգտակար հղումներ</h4>
            <Link to="/rights" className="block hover:text-purple-700">Հաճախորդի իրավունքները</Link>
            <Link to="/privacy" className="block hover:text-purple-700">Գաղտնիության քաղաքականություն</Link>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 mb-3 text-sm">Այլ հղումներ</h4>
            <a href="https://evocaonline.am" target="_blank" rel="noreferrer" className="block hover:text-purple-700">EvocaONLINE</a>
            <Link to="/contact" className="block hover:text-purple-700">Հետադարձ կապ</Link>
            <p className="font-bold text-gray-900 text-sm"><a href="tel:+37410605555">+374 10 605555</a></p>
            <p className="text-[#6b21a8] font-black text-base"><a href="tel:8444">8444</a></p>
          </div>

        </div>
      </footer>

      {/* Floating Call & Online Chat Button */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3">
        <a href="tel:8444" className="w-12 h-12 bg-purple-200 text-[#6b21a8] rounded-full flex items-center justify-center text-lg shadow-lg hover:bg-purple-300 transition">
          📞
        </a>
        <button className="bg-[#6b21a8] text-white px-5 py-3 rounded-full font-bold text-xs shadow-xl hover:bg-purple-900 transition flex items-center gap-2">
          Գրեք մեզ, մենք օնլայն ենք !
        </button>
      </div>

    </div>
  );
}