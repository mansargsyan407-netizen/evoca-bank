import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ShortNumberDetails() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white text-gray-900 font-sans min-h-screen relative">
      
      {/* Floating Social Media Side Icons */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-gray-100/80 backdrop-blur-sm p-1.5 rounded-r-lg flex flex-col gap-3 text-gray-600 text-xs shadow-sm">
        <span className="cursor-pointer hover:text-purple-700 font-bold">f</span>
        <span className="cursor-pointer hover:text-purple-700 font-bold">t</span>
        <span className="cursor-pointer hover:text-purple-700 font-bold">in</span>
        <span className="cursor-pointer hover:text-purple-700 font-bold">p</span>
      </div>

      {/* Back button & Breadcrumbs section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 rounded-full font-semibold transition text-xs"
          >
            ← Վերադառնալ
          </button>
          
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
            <span>&gt;</span>
            <Link to="/news" className="hover:underline">Նորություններ</Link>
            <span>&gt;</span>
            <span>Բանկային</span>
            <span>&gt;</span>
            <span className="text-gray-900 font-medium">Կարճ հեռախոսահամար՝ 8444</span>
          </div>
        </div>
      </div>

      {/* Main Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm items-stretch">
          
          {/* Left Text Block */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-3 bg-purple-700 inline-block rounded-sm"></span>
              <span className="text-purple-700 font-bold text-sm">Բանկային</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Կարճ հեռախոսահամար՝ 8444
            </h1>

            <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
              Evocabank-ի հետ արդեն կարող եք կապ հաստատել նոր, կարճ հեռախոսահամարով՝ ընդամենը հավաքելով 8444:
            </p>

            <span className="text-xs text-gray-400 font-medium">
              22.10.2025
            </span>
          </div>

          {/* Right Image Block (Real Image URL) */}
          <div className="w-full h-full min-h-[300px] lg:min-h-[420px]">
            <img 
              src="https://www.evoca.am/images-cache/news/1/17611221350351/780x585.jpg" 
              alt="Evocabank 8444" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

      {/* Detail Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-12">
        <h2 className="text-3xl font-black text-purple-700 mb-2">8444</h2>
        <p className="italic text-purple-900 font-medium mb-1">Բարի գալուստ, Evocabank</p>
        <p className="italic text-purple-800 font-medium mb-10">Մենք սպասում էինք Ձեր զանգին...</p>

        <div className="text-left space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
          <p>
            Այսուհետ <strong className="text-purple-900">Evocabank</strong>-ի հաճախորդներն ավելի հեշտ ու արագ կարող են կապ հաստատել Բանկի հետ՝ պարզապես հավաքելով <strong className="text-purple-900">8444</strong> քաղաքային կամ բջջային հեռախոսներից:
          </p>
          <p>
            Հիշեցնենք նաև, որ <strong className="text-purple-900">Evocabank</strong>-ի հետ կարող եք նաև կապ հաստատել <strong className="text-purple-900">+37410605555</strong> հեռախոսահամարով: Իսկ արտասահմանից զանգահարելիս՝ գործում է միայն <strong className="text-purple-900">+37410605555</strong> հեռախոսահամարը:
          </p>
        </div>
      </div>

      {/* Other News Section Header */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-100 mt-12">
        <h2 className="text-2xl font-black text-gray-900 mb-8">Այլ նորություններ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* News Card 1 */}
          <Link to="/news/moodys-rating" className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 block group">
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

          {/* News Card 2 */}
          <Link to="/news/firebird-ai" className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 block group">
            <img 
              src="https://www.evoca.am/images-cache/news/1/17864472573391/439x320.png" 
              alt="Firebird AI" 
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-[#6b21a8] transition">
                Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»
              </h3>
              <p className="text-xs text-gray-400 pt-2">11.08.2026</p>
            </div>
          </Link>

          {/* News Card 3 */}
          <Link to="/news/green-rock" className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 block group">
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
            <p className="font-bold text-gray-900 text-sm">+374 10 605555</p>
            <p className="text-[#6b21a8] font-black text-base">8444</p>
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
        <button className="w-12 h-12 bg-purple-200 text-[#6b21a8] rounded-full flex items-center justify-center text-lg shadow-lg hover:bg-purple-300 transition">
          📞
        </button>
        <button className="bg-[#6b21a8] text-white px-5 py-3 rounded-full font-bold text-xs shadow-xl hover:bg-purple-900 transition flex items-center gap-2">
          Գրեք մեզ, մենք օնլայն ենք !
        </button>
      </div>

    </div>
  );
}