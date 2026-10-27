// NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center px-4 py-16 text-center bg-white">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        This page does not exist
      </h1>

      <p className="mt-8 max-w-2xl text-base md:text-lg text-gray-900">
        Sorry, the page you are looking for does not exist or has been removed.
        Continue exploring the site through the links.
      </p>

      {/* 404 գրաֆիկա */}
      <div className="mt-16 flex items-center justify-center text-[#6200e0] font-extrabold leading-none select-none">
        <span className="text-[10rem] md:text-[18rem]">4</span>

        {/* «0»-ի փոխարեն շրջան՝ ռոբոտի նկարով */}
        <div className="mx-2 md:mx-4 w-40 h-40 md:w-[22rem] md:h-[22rem] rounded-full border-[1.5rem] md:border-[2.75rem] border-[#6200e0] bg-white flex items-center justify-center overflow-hidden">
          <img
            src="https://www.evoca.am/img/robot-animation.gif"
            alt="Evoca robot"
            className="w-3/4 h-3/4 object-contain"
          />
        </div>

        <span className="text-[10rem] md:text-[18rem]">4</span>
      </div>

      <Link
        to="/"
        className="mt-12 inline-block bg-[#6200e0] hover:bg-purple-800 text-white font-bold px-8 py-3 rounded-full transition shadow-md"
      >
       Go home
      </Link>
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
    </main>
  );
}