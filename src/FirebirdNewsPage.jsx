import React from 'react';
import { Link } from 'react-router-dom';

export default function FirebirdNewsPage() {
  return (
    <div className="w-full bg-[#f8f9fa] text-gray-800 font-sans min-h-screen relative">
      
    
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
       {/* Breadcrumb Navigation */}
            <div className="px-8 md:px-20 py-4 text-xs text-gray-500 flex items-center gap-2">
              <Link to="/" className="hover:underline">Վերադառնալ</Link>
          <div className="flex items-center gap-2">
            <span>Նորություններ</span>
            <span>›</span>
            <span>Բանկային</span>
            <span>›</span>
            <span className="font-bold text-gray-800">Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»</span>
          </div>
        </div>

        {/* Article Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#6b21a8]"></span>
              <span className="text-xs font-bold text-gray-900 uppercase">Բանկային</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-snug">
              Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»
            </h1>

            <p className="text-sm text-gray-600 leading-relaxed font-medium">
              Evocabank-ի համաֆինանսավորմամբ Հրազդանում գործարկվել է Firebird AI-ի տարածաշրջանի ամենամեծ «ԱԲ գործարանը»։
            </p>

            <p className="text-xs text-gray-400">11.08.2026</p>
          </div>

          {/* Right Image Banner */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-md">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17864472573391/439x320.png" 
                alt="Firebird AI" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>

        {/* Article Details Text */}
        <div className="mt-12 max-w-4xl space-y-6 text-sm text-gray-700 leading-relaxed border-t border-gray-200 pt-8">
          <p>
            Այս տարվա մարտին <strong className="text-[#6b21a8]">Evocabank</strong>-ը 5 այլ ֆինանսական կառույցների հետ միացավ Հայաստանում արհեստական բանականության ենթակառուցվածքային մեգանախագծերից մեկի՝ <span className="text-[#6b21a8] underline font-bold cursor-pointer">Firebird AI-ի «ԱԲ գործարանի» 300 մլն ԱՄՆ դոլարի ֆինանսավորմանը</span>:
          </p>

          <p>
            Այսօր՝ ընդամենը մի քանի ամիս անց, արդեն տեսնում ենք ֆինանսավորման արդյունքը․ Հրազդանում պաշտոնապես բացվեց ԱԲ գործարանը՝ դառնալով տարածաշրջանի ամենամեծ արհեստական բանականության կենտրոններից մեկը։
          </p>

          <p>
            Firebird AI-ի գործարանը նախատեսված է Հայաստանում արհեստական բանականության և բարձր տեխնոլոգիաների զարգացման նոր հնարավորություններ ստեղծելու համար՝ տրամադրելով մեծ քանակությամբ ռեսուրսներ հետազոտական հաստատություններին, տեխնոլոգիական ընկերություններին և բիզնեսներին։ Ծրագրի 2-րդ փուլը գործարկելուց հետո ներդրումների ծավալը կկազմի մոտ <span className="italic">4 մլրդ դոլար</span>։
          </p>

          <p>
            <strong className="text-[#6b21a8]">Evocabank</strong>-ը շարունակում է աջակցել Հայաստանի տնտեսության և տեխնոլոգիական ոլորտի զարգացմանն ուղղված խոշոր նախագծերին՝ մասնակցելով այն նախաձեռնություններին, որոնք նոր հնարավորություններ են ստեղծում բիզնեսի, գիտության ու նորարարության համար։
          </p>
        </div>

        {/* Bottom Related News Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Այլ նորություններ</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm p-3">
              <img src="https://www.evoca.am/images-cache/news/1/17870544210976/439x320.png" alt="" className="rounded-lg mb-3 w-full" />
              <h4 className="font-bold text-xs text-gray-900">Ba3 վարկանիշ Moody’s-ից Evocabank-ին</h4>
              <p className="text-[10px] text-gray-400 mt-2">18.08.2026</p>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm p-3">
              <img src="https://www.evoca.am/images-cache/news/1/17854167235525/428x321.png" alt="" className="rounded-lg mb-3 w-full" />
              <h4 className="font-bold text-xs text-gray-900">Evocabank-ը և Green Rock-ը մեկնարկեցին Բանկի նոր գլխամասի նախագիծը</h4>
              <p className="text-[10px] text-gray-400 mt-2">30.07.2026</p>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm p-3">
              <img src="https://www.evoca.am/images-cache/news/1/17842875742396/428x321.png" alt="" className="rounded-lg mb-3 w-full" />
              <h4 className="font-bold text-xs text-gray-900">Evoca-ի ղեկավարները հաջողությամբ ավարտեցին Generative AI դասընթացը</h4>
              <p className="text-[10px] text-gray-400 mt-2">17.07.2026</p>
            </div>
          </div>
        </div>

      </main>

 {/* Footer */}
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
            <div className="flex gap-3 text-lg text-gray-600 mb-2">
              <span className="cursor-pointer">f</span>
              <span className="cursor-pointer">i</span>
              <span className="cursor-pointer">p</span>
              <span className="cursor-pointer">y</span>
              <span className="cursor-pointer">in</span>
            </div>
            <div className="flex gap-2">
              <button className="bg-black text-white px-3 py-1 rounded text-[10px]">App Store</button>
              <button className="bg-black text-white px-3 py-1 rounded text-[10px]">Google Play</button>
            </div>
            <p className="text-purple-700 font-bold hover:underline cursor-pointer pt-2">
              Բանկի հասցեները և աշխատաժամերը
            </p>
            <p className="text-purple-700 font-bold hover:underline cursor-pointer">Կապ մեզ հետ</p>
            <p className="font-bold text-gray-900">+374 10 605555</p>
            <p className="text-[#6b21a8] font-black text-base">8444</p>
          </div>

        </div>

        {/* Disclaimer Bottom Bar */}
        <div className="bg-gray-100 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-gray-500 leading-relaxed max-w-3xl">
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանություն, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ԲԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
          </p>
          <div className="flex gap-3 opacity-70">
            <span className="font-bold border px-2 py-1 rounded bg-white text-[10px]">fininfo</span>
            <span className="font-bold border px-2 py-1 rounded bg-white text-[10px]">abcfinance.am</span>
            <span className="font-bold border px-2 py-1 rounded bg-white text-[10px]">arca</span>
          </div>
        </div>
      </footer>

      {/* Online Chat Floating Button */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
        <button className="bg-[#6b21a8] text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-xl hover:bg-purple-900 transition flex items-center gap-2">
          Գրեք մեզ, մենք օնլայն ենք !
        </button>
      </div>

    </div>
  );
}