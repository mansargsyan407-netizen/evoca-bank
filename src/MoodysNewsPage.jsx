import React from 'react';
import { Link } from 'react-router-dom';

export default function MoodysNewsPage() {
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
          Ba3 վարկանիշ Moody’s-ից Evocabank-ին
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
              Ba3 վարկանիշ Moody’s-ից Evocabank-ին
            </h1>

            <p className="text-base font-semibold text-gray-600 leading-relaxed">
              Evocabank-ը Moody's-ից ստացել է Ba3 վարկանիշ՝ դրական հեռանկարով, որը համապատասխանում է Հայաստանի սուվերեն վարկանիշին:
            </p>

            <p className="text-xs text-gray-400">18.08.2026</p>

            <hr className="border-gray-100 my-6" />

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong className="text-[#6b21a8]">Evocabank</strong>-ը <strong className="text-gray-900">Moody’s Ratings</strong>-ի կողմից ստացել է <strong className="text-gray-900">Ba3</strong> երկարաժամկետ տեղական արժույթով և արտարժույթով ավանդների և թողարկողի վարկանիշներ, որոնք գտնվում են Հայաստանի Հանրապետության (Ba3 positive) սուվերեն վարկանիշի նույն մակարդակում:
              </p>

              <p>
                Moody’s-ի գնահատմամբ՝ <strong className="text-[#6b21a8]">Evocabank</strong>-ի Ba3 վարկունակության բազային գնահատականը (Baseline Credit Assessment, BCA) արտացոլում է Բանկի կապիտալի ամուր բուֆերը, կայուն շահութաբերությունը և ֆինանսավորման դիվերսիֆիկացված բազան:
              </p>

              <p>
                Moody’s-ը նաև ընդգծում է <strong className="text-[#6b21a8]">Evocabank</strong>-ի վարկային պորտֆելի դիվերսիֆիկացված կառուցվածքը՝ կորպորատիվ, փոքր և միջին ձեռնարկությունների (ՓՄՁ) և մանրածախ վարկավորման հատվածներում, ինչպես նաև Բանկի կենտրոնացումը գրավով ապահովված վարկավորման վրա:
              </p>

              <p>
                Բանկի ֆինանսավորման բազան ևս գնահատվել է որպես դիվերսիֆիկացված՝ պայմանավորված ձևավորված հաճախորդային բազայով և միջազգային ֆինանսական հաստատությունների հետ երկարամյա համագործակցությամբ:
              </p>

              <p>
                Moody’s-ի կողմից շնորհված վարկանիշները կարևոր ձեռքբերում են <strong className="text-[#6b21a8]">Evocabank</strong>-ի համար՝ ամրապնդելով Բանկի ճանաչելիությունը և նպաստելով միջազգային ֆինանսական հաստատությունների ու ներդրողների հետ հարաբերությունների հետագա զարգացմանը:
              </p>
            </div>
          </div>

          {/* Article Image Banner */}
          <div className="lg:col-span-6 sticky top-8">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17870544210976/439x320.png" 
                alt="Moody's Ratings Evocabank" 
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
          {/* News Card 1 - Firebird AI */}
          <Link 
            to="/news/firebird-ai" 
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 block cursor-pointer group"
          >
            <img 
              src="https://www.evoca.am/images-cache/news/1/17864472573391/439x320.png" 
              alt="Firebird AI" 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-purple-700 transition-colors">
                Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»
              </h3>
              <p className="text-xs text-gray-400 pt-2">11.08.2026</p>
            </div>
          </Link>

          {/* News Card 2 - Green Rock */}
          <Link 
            to="/news/green-rock" 
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 block cursor-pointer group"
          >
            <img 
              src="https://www.evoca.am/images-cache/news/1/17854167235525/780x585.png" 
              alt="Green Rock" 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-purple-700 transition-colors">
                Evocabank-ը և Green Rock-ը մեկնարկեցին Բանկի նոր գլխամասի նախագիծը
              </h3>
              <p className="text-xs text-gray-400 pt-2">30.07.2026</p>
            </div>
          </Link>

          {/* News Card 3 - MIT Certified */}
          <Link 
            to="/news/mit-certified" 
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 block cursor-pointer group"
          >
            <img 
              src="https://www.evoca.am/images-cache/news/1/17842875742396/428x321.png" 
              alt="MIT Certified" 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-purple-700 transition-colors">
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

          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3 text-sm">Օգտակար հղումներ</h4>
            <p className="hover:text-purple-700 cursor-pointer">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</p>
            <p className="hover:text-purple-700 cursor-pointer">Հաճախորդի ռեզիդենտության չափանիշներ</p>
            <p className="hover:text-purple-700 cursor-pointer">Կարգավորում</p>
            <p className="hover:text-purple-700 cursor-pointer">Գաղտնիության քաղաքականություն</p>
            <p className="hover:text-purple-700 cursor-pointer">Ֆին. հաշտարար</p>
            <p className="hover:text-purple-700 cursor-pointer">Ֆինանսական հանցագործությունների կանխարգելում</p>
            <p className="hover:text-purple-700 cursor-pointer">Հղումներ Բանկի քարտապանների համար</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 mb-3 text-sm">Այլ հղումներ</h4>
            <p className="hover:text-purple-700 cursor-pointer">EvocaONLINE</p>
            <p className="hover:text-purple-700 cursor-pointer">Պահատուփեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Հաճախ տրվող հարցեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Հայտարարություններ</p>
            <p className="hover:text-[#6b21a8] cursor-pointer font-semibold">Dibrary</p>
            <p className="hover:text-purple-700 cursor-pointer">Բուկլետներ</p>
            <p className="hover:text-purple-700 cursor-pointer">Հետադարձ կապ</p>
            <p className="hover:text-purple-700 cursor-pointer">Կայքի քարտեզ</p>

            <div className="flex gap-3 text-lg text-gray-600 pt-2">
              <span className="cursor-pointer hover:text-purple-700">f</span>
              <span className="cursor-pointer hover:text-purple-700">i</span>
              <span className="cursor-pointer hover:text-purple-700">p</span>
              <span className="cursor-pointer hover:text-purple-700">y</span>
              <span className="cursor-pointer hover:text-purple-700">in</span>
            </div>
            
            <div className="flex gap-2 pt-1">
              <button className="bg-black text-white px-3 py-1.5 rounded text-[10px] font-semibold">App Store</button>
              <button className="bg-black text-white px-3 py-1.5 rounded text-[10px] font-semibold">Google Play</button>
            </div>
            
            <p className="text-purple-700 font-bold hover:underline cursor-pointer pt-2">
              Բանկի հասցեները և աշխատաժամերը
            </p>
            <p className="text-purple-700 font-bold hover:underline cursor-pointer">Կապ մեզ հետ</p>
            <p className="font-bold text-gray-900 text-sm"><a href="tel:+37410605555">+374 10 605555</a></p>
            <p className="text-[#6b21a8] font-black text-base"><a href="tel:8444">8444</a></p>
          </div>

        </div>

        {/* Disclaimer Bottom Bar */}
        <div className="bg-gray-50 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100">
          <p className="text-[10px] text-gray-500 leading-relaxed max-w-4xl">
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանություն, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ԲԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
          </p>
          <div className="flex gap-3 opacity-70">
            <span className="font-bold border px-2 py-1 rounded bg-white text-[10px] text-gray-600">fininfo</span>
            <span className="font-bold border px-2 py-1 rounded bg-white text-[10px] text-gray-600">abcfinance.am</span>
            <span className="font-bold border px-2 py-1 rounded bg-white text-[10px] text-gray-600">arca</span>
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