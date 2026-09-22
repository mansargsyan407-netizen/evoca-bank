import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  ChevronRight,
  ChevronDown,
  MapPin,
  HelpCircle,
  Globe,
  Search,
  Menu,
  MessageCircle,
} from "lucide-react";

export default function Incasso() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* HEADER SECTION */}
       <header className="border-b border-gray-100 bg-white">
         
     
             {/* Main navigation */}
             <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
           
     
               <nav className="hidden md:flex items-center space-x-8 text-sm font-bold text-gray-800">
                
                 <Link to="/business/leasing" className="hover:text-purple-700">
                   Լիզինգ
                 </Link>
               
                
               
                 <Link
                   to="/business/trade-finance"
                   className="text-purple-700 font-extrabold"
                 >
                   Առևտրի ֆինանսավորում
                 </Link>
               <Link
  to="/business/digital"
  className="hover:text-purple-700 font-extrabold"
>
  Դիջիթալ
</Link>
             
               </nav>
     
           
             </div>
           </header>

      {/* Sub-banner navigation */}
      <div className="bg-[#6a0dad] text-white">
        <div className="mx-auto flex max-w-7xl items-center text-xs sm:text-sm font-bold">
          <Link
            to="/business/trade-finance"
            className="px-8 py-3.5 hover:bg-purple-800/50 cursor-pointer"
          >
            Երաշխիք
          </Link>
          <Link
            to="/business/factoring"
            className="px-8 py-3.5 hover:bg-purple-800/50 cursor-pointer"
          >
            Ֆակտորինգային ֆինանսավորում
          </Link>
          <Link
            to="/business/letter-of-credit"
            className="px-8 py-3.5 hover:bg-purple-800/50 cursor-pointer"
          >
            Ակրեդիտիվ
          </Link>
          <Link
            to="/business/incasso"
            className="bg-purple-950/60 px-8 py-3.5 border-b-2 border-white cursor-pointer"
          >
            Ինկասո
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 py-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <Home size={14} />
          <ChevronRight size={12} />
          <span>Բիզնես</span>
          <ChevronRight size={12} />
          <span>Առևտրի ֆինանսավորում</span>
          <ChevronRight size={12} />
          <span className="text-gray-800 font-medium">Ինկասո</span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Ինկասո
        </h1>

        {/* Introduction text */}
        <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4 mb-8">
          <p className="font-medium">
            Ինկասոն վճարումների ստացման և պարտքերի մարման արագ, պարզ ու արդյունավետ գործիք է։[cite: 38]
          </p>
          <p>
            Այն վաճառողի հանձնարարությունն է մեզ՝ մատակարարված ապրանքների փաստաթղթերը, վճարի դիմաց, փոխանցելու գնորդին։ Ընդ որում, մենք վճարման որևէ պարտավորություն չենք ստանձնում, այլ կատարում ենք փաստաթղթերը փոխանցողի (միջնորդի) դեր։[cite: 38]
          </p>
        </div>

        {/* Section Heading */}
        <h2 className="text-sm sm:text-base font-bold text-gray-900 mb-4">
          Ինկասոյի վճարման հիմնական ձևերն են՝[cite: 38]
        </h2>

        {/* Requirements Bullet Points */}
        <ul className="space-y-4 text-xs sm:text-sm text-gray-700 mb-10">
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-lg leading-none">
              •
            </span>
            <span className="leading-relaxed">
              <strong className="text-gray-900">Փաստաթղթեր՝ վճարման դիմաց</strong> (Documents Against Payment or D/P). փաստաթղթերը տրամադրում ենք գնորդին՝ միայն նրա կողմից ապրանքների դիմաց վճարելուց հետո։[cite: 38]
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-lg leading-none">
              •
            </span>
            <span className="leading-relaxed">
              <strong className="text-gray-900">Փաստաթղթեր՝ ակցեպտի դիմաց</strong> (Documents Against Acceptance or D/A). փաստաթղթերը տրամադրում ենք գնորդին՝ ապրանքների դիմաց հետագայում վճարելու պայմանով (վճարումների հետաձգման պարտավորագրի (մուրհակ) ակցեպտի դեպքում)։ Ինկասոյի այս ձևը կիրառվում է, երբ գնորդն ու վաճառողը պայմանավորվածություն ունեն վճարման հետաձգման վերաբերյալ։[cite: 38]
            </span>
          </li>
        </ul>

        {/* Tariffs Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          Սակագներ[cite: 38]
        </h2>

        {/* Additional Info Paragraph */}
        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-16">
          Ինկասոյի գործառնությունների վերաբերյալ լրացուցիչ տեղեկություններ և խորհրդատվություն ստանալու համար կարող եք դիմել մեր Գլխամասային գրասենյակի՝ «Միջազգային և արտարժութային գործառնությունների» բաժին։[cite: 38]
        </p>
      </main>

    
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
            <p className="hover:text-purple-700 cursor-pointer">Dlibrary</p>
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