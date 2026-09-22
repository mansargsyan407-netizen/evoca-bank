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
  Calendar,
  MessageCircle,
} from "lucide-react";

const EvocaMpos = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans p-6 md:p-12 max-w-6xl mx-auto">
      {/* Breadcrumb Navigation */}

       <header className="border-b border-gray-100 bg-white">
                                     
        {/* Main navigation */}
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                                 
                           
<nav className="hidden md:flex items-center space-x-8 text-sm font-bold text-gray-800">
                                      
<Link to="/business/leasing" className="hover:text-purple-700">
  Լիզինգ
 </Link>
                                     
                                      
                                     
 <Link
to="/business/trade-finance"
className="hover:text-purple-700"
>
 Առևտրի ֆինանսավորում
</Link>
 <Link
to="/business/digital"
className="text-purple-700 font-extrabold"
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
            to="/business/digital"
            className="px-8 py-3.5 hover:bg-purple-800/50 cursor-pointer"
          >
            V-POS Տերմինալ
          </Link>
          <Link
            to="/business/pos-terminal"
            className="px-8 py-3.5 hover:bg-purple-800/50 cursor-pointer"
          >
            POS Տերմինալ
          </Link>
          <Link
            to="/business/terminals-tariffs"
            className="px-8 py-3.5 hover:bg-purple-800/50 cursor-pointer"
          >
            Սակագներ
          </Link>
          <Link
            to="/business/terminal-application"
            className="px-8 py-3.5 hover:bg-purple-800/50 cursor-pointer"
          >
            Տերմինալի տեղադրման հայտ
          </Link>
       <Link
  to="/business/mpos"
  className="bg-purple-950/60 px-8 py-3.5 border-b-2 border-white cursor-pointer"
>
  Evoca Mobile POS` mPOS
</Link>
        </div>
      </div>
      <nav className="text-xs text-gray-500 mb-6 flex items-center gap-1">
        <span>🏠</span>
        <span></span>
        <a href="#" className="hover:underline">Բիզնես</a>
        <span></span>
        <a href="#" className="hover:underline">Գործիքներ</a>
        <span></span>
        <span className="text-gray-400">Evoca Mobile POS` mPOS</span>
      </nav>

      {/* Hero Section */}
      <div className="bg-slate-100 rounded-3xl p-8 md:p-12 mb-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-lg z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Evoca Mobile POS` mPOS
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Evocabank-ի նոր mobile POS` mPOS գործիքի շնորհիվ Ձեր բիզնեսը կարող է ստանալ անկանխիկ վճարումներ` ավելի հեշտ ու արագ:
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center">
        <img src="https://www.evoca.am/images-cache/menu/1/16697156723793/780x585.png" alt="" />
        </div>
      </div>

      {/* Description Content */}
      <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed max-w-4xl">
        <p>
          <strong className="text-purple-900 font-bold">mPOS</strong>-ը ստանդարտ POS տերմինալի մոբայլ տարբերակն է, որը ցանկացած Android սմարթֆոն վերածում է վճարային տերմինալի:
        </p>
        <p>
          mPOS-ը հատկապես հարմար է շարժական բիզնեսով զբաղվողների համար՝ բացօթյա խանութներ, սրճարաններ, միջոցառումների ընթացքում սննդի վաճառքի կետեր, օնլայն խանութներ, առաքման ծառայություններ, կամ ցանկացած այլ բիզնես, որը հաճախորդից վճարում ընդունում է բիզնեսի տարածքից դուրս:
        </p>
        <p>
          mPOS-ն ակտիվացնելու համար բիզնեսին պարզապես անհրաժեշտ է{" "}
          <strong className="text-purple-900 font-bold">NFC ընթերցող Android սմարթֆոն</strong>, որը միացված է Ինտերնետին, և{" "}
          <a href="#" className="text-purple-700 font-bold underline hover:text-purple-900">
            Evoca-ի mPOS հավելվածը
          </a>
          : Այն կարող եք ներբեռնել Google Play-ից` Android 8.1 կամ ավելի թարմ ծրագրային ապահովման դեպքում:
        </p>
        <p>
          Հավելվածը ներբեռնելուց հետո պետք է մուտք գործել հավելված՝ Բանկի տրամադրած մուտքանունով և գաղտնաբառով: Եվ վերջ: Դուք արդեն կարող եք Ձեր հաճախորդներից ստանալ անհպում վճարումներ:Վճարում կատարելու համար հաճախորդը պարզապես մոտեցնում է Ձեր սմարթֆոնին իր քարտը կամ Apple Pay ունեցող հեռախոսը, որին կցված է Evoca վճարային քարտ:
        </p>
      </div>
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
            <p>
                
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
};

export default EvocaMpos;