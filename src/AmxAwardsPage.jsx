import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Share2, Phone } from 'lucide-react';

export default function AmxAwardsPage() {
  return (
    <div className="w-full bg-white text-gray-800 font-sans selection:bg-purple-500 selection:text-white min-h-screen flex flex-col justify-between">
      <div>
        {/* TOP BAR / BREADCRUMB */}
        <div className="max-w-7xl mx-auto px-6 pt-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-xs font-bold transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Վերադառնալ
            </Link>
          </div>

          <div className="text-[11px] text-gray-400 flex items-center gap-1.5 mb-6">
            <Link to="/" className="hover:underline">🏠</Link>
            <span>›</span>
            <Link to="/news" className="hover:underline">Նորություններ</Link>
            <span>›</span>
            <span className="hover:underline">Մրցանակներ</span>
            <span>›</span>
            <span className="text-gray-600 font-medium truncate max-w-[250px]">Evocabank-ը՝ AMX AWARDS 2026-ի մրցանակակիր</span>
          </div>
        </div>

        {/* HERO HEADER SECTION */}
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="bg-[#f5f3ff] rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative">
            {/* Left side content */}
            <div className="lg:col-span-6 p-8 lg:p-14 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 bg-yellow-400 inline-block rounded-sm"></span>
                  <span className="text-xs font-bold text-gray-900">Մրցանակներ</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  Evocabank-ը՝ AMX AWARDS 2026-ի մրցանակակիր
                </h1>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Evocabank-ը AMX AWARDS 2026-ի ընթացքում արժանացել է «Դեպոզիտարիայի ավտոմատացված համակարգերի կիրառման լավագույն գործընկեր» մրցանակին:
                </p>
              </div>
              <p className="text-xs text-gray-400 font-medium">16.06.2026</p>
            </div>

            {/* Right side image */}
            <div className="lg:col-span-6 relative min-h-[320px] bg-gray-900 overflow-hidden flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17815943976247/616x462.png" 
                alt="Evocabank AMX AWARDS 2026" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* MAIN ARTICLE BODY */}
        <main className="max-w-4xl mx-auto px-6 pb-20 relative">
          {/* Floating Share Icons */}
          <div className="hidden lg:flex flex-col gap-3 fixed left-8 top-1/3 bg-white p-2 rounded-2xl shadow-md border border-gray-100 z-20">
            <button className="p-2 text-gray-500 hover:text-purple-700 transition" title="Կիսվել"><Share2 className="w-4 h-4" /></button>
            <a href="#" className="p-2 text-gray-500 hover:text-blue-600 font-bold text-xs transition text-center" title="Facebook">f</a>
            <a href="#" className="p-2 text-gray-500 hover:text-sky-400 font-bold text-xs transition text-center" title="Twitter">t</a>
            <a href="#" className="p-2 text-gray-500 hover:text-blue-700 font-bold text-xs transition text-center" title="LinkedIn">in</a>
          </div>

          <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
            <p>
              Տեղի ունեցավ <strong className="text-purple-900 font-bold">AMX AWARDS 2026</strong> ամենամյա մրցանակաբաշխությունը, որը համախմբեց Հայաստանի ֆինանսական ոլորտի առաջատար կազմակերպություններին՝ արժևորելու կապիտալի շուկայի զարգացման գործում նրանց ներդրումն ու ձեռքբերումները:
            </p>

            <p>
              Մրցանակաբաշխության շրջանակում Հայաստանի կենտրոնական դեպոզիտարիան <strong className="text-purple-900 font-bold">Evocabank</strong>-ին շնորհեց <strong className="text-purple-900 font-bold">«Դեպոզիտարիայի ավտոմատացված համակարգերի կիրառման լավագույն գործընկեր»</strong> մրցանակը՝ բարձր գնահատելով Բանկի ներդրած տեխնոլոգիական լուծումները և ավտոմատացված համակարգերի արդյունավետ կիրառումը:
            </p>

            <p>
              Այս մրցանակը ևս մեկ անգամ հաստատում է <strong className="text-purple-900 font-bold">Evocabank</strong>-ի հետևողական աշխատանքը թվային փոխակերպման ուղղությամբ:
            </p>

            <p>
              Վերջին տարիներին <strong className="text-purple-900 font-bold">Evocabank</strong>-ը զգալի ներդրումներ է կատարել թվային լուծումների զարգացման մեջ՝ շարունակաբար կատարելագործելով իր ծառայություններն ու գործընթացները: Այս ամենի մասին են վկայում <strong className="text-purple-900 font-bold">EvocaTOUCH</strong> բջջային հավելվածը և <strong className="text-purple-900 font-bold">EvocaINVEST</strong> ներդրումային հարթակը, որոնք հաճախորդներին հնարավորություն են տալիս մի քանի հպումով կառավարել իրենց ֆինանսները, կատարել ներդրումային գործարքներ և օգտվել ժամանակակից թվային գործիքներից:
            </p>

            <p className="font-semibold text-gray-900">
              Շնորհակալ ենք Հայաստանի կենտրոնական դեպոզիտարիային բարձր գնահատականի համար:
            </p>
          </div>
        </main>
      </div>

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
                   <h3 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-[#6b21a8] transition-colors">
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
                   <h3 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-[#6b21a8] transition-colors">
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
                   <h3 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-[#6b21a8] transition-colors">
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