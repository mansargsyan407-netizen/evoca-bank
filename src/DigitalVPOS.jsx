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

export default function DigitalVPOS() {
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
            className="bg-purple-950/60 px-8 py-3.5 border-b-2 border-white cursor-pointer"
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
  className="px-8 py-3.5 hover:bg-purple-800/50 cursor-pointer"
>
  Evoca Mobile POS` mPOS
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
          <span>Դիջիթալ</span>
          <ChevronRight size={12} />
          <span className="text-gray-800 font-medium">V-POS Տերմինալ</span>
        </div>

        {/* Hero Section Banner */}
        <div className="bg-gray-100/70 rounded-3xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
          <div className="max-w-md">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
              V-POS Տերմինալ
            </h1>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              V-POS-ը (virtual point of sale) վիրտուալ վճարային համակարգ է, որը
              հարմարավետ, ապահով և հեշտ լուծում է օնլայն առևտրով զբաղվող
              բիզնեսների համար: Արագ և տեղում օնլայն վճարումներ կատարելն այսօր
              կարևոր նախապայման է Ձեր գնորդների համար:[cite: 39]
            </p>
          </div>
          <div className="relative flex justify-center items-center w-full md:w-1/2">
          <img src="https://www.evoca.am/images-cache/menu/1/16158111599306/780x585.jpg" alt="" />
          </div>
        </div>

        {/* Text descriptions */}
        <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4 mb-10">
          <p>
            Evocabank-ը կապահովի Ձեր կայքում V-POS տերմինալի տեղադրումը: Այն
            հնարավորություն կտա Ձեզ{" "}
            <span className="text-purple-700 font-semibold cursor-pointer underline">
              խուսափել լրացուցիչ ծրագրային ծախսերից
            </span>
            , սերտիֆիկացումից և հետագա ծրագրային ապահովումից:[cite: 39]
          </p>
          <p>
            Ձեր գնորդները կկարողանան{" "}
            <span className="text-purple-700 font-semibold cursor-pointer underline">
              գնումներ կատարել Ձեր կայքից
            </span>{" "}
            ու <span className="text-purple-700 font-semibold cursor-pointer underline">վճարել</span> դրանց համար
            իրենց միջազգային VISA, Mastercard և տեղական ArCa վճարային քարտերով:[cite: 39]
          </p>
          <p>
            V-POS-ը հասանելի կլինի ինչպես{" "}
            <span className="text-purple-700 font-semibold cursor-pointer underline">
              Ձեր կայքում
            </span>
            , այնպես էլ{" "}
            <span className="text-purple-700 font-semibold cursor-pointer underline">
              մոբայլ հավելվածում
            </span>
            :[cite: 39]
          </p>
          <p className="font-bold text-gray-900 pt-2">
            Իսկ ինչո՞ւ տեղադրել Evocabank-ի V-POS տերմինալ՝[cite: 39]
          </p>
        </div>

        {/* Benefits List */}
        <ul className="space-y-4 text-xs sm:text-sm text-gray-700 mb-12">
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-lg leading-none">•</span>
            <span>
              Օնլայն վաճառքների շնորհիվ{" "}
              <span className="text-purple-700 font-semibold cursor-pointer underline">
                կաճեն Ձեր եկամուտները
              </span>
              ,[cite: 39]
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-lg leading-none">•</span>
            <span>
              Evocabank-ը V-POS-ով կատարված վաճառքներից կգանձի{" "}
              <span className="text-purple-700 font-semibold cursor-pointer underline">
                նվազագույն միջնորդավճարներ
              </span>
              ՝ հատուկ Ձեր բիզնեսի համար,[cite: 40]
            </span>
          </li>
        </ul>

        <p className="text-xs sm:text-sm text-gray-700 mb-6">
          Սպասարկման կետի գրանցման համար անհրաժեշտ{" "}
          <span className="text-purple-700 font-semibold cursor-pointer underline">
            V-POS տերմինալների տեղադրման
          </span>{" "}
          ստանդարտ սակագներն են՝[cite: 40]
        </p>

        {/* Tariffs Table */}
        <div className="overflow-x-auto border border-purple-100 rounded-2xl shadow-sm mb-4">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-purple-100 bg-purple-50/20 text-gray-800 font-bold">
                <th className="p-3 border-r border-purple-100">Գործարքի տեսակ</th>
                <th className="p-3 border-r border-purple-100">
                  Արքա /ArCa/ վճարային համակարգի քարտերով կատարված գործարքների դեպքում
                </th>
                <th className="p-3 border-r border-purple-100">
                  ՀՀ տարածքում գործող բանկերի կողմից թողարկված MasterCard, Visa, քարտերի դեպքում
                </th>
                <th className="p-3 border-r border-purple-100">
                  Արտասահմանյան բանկերի կողմից թողարկված MasterCard, Visa, քարտերի դեպքում
                </th>
                <th className="p-3">QR կոդով վճարման դեպքում</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50 text-gray-700">
              <tr>
                <td className="p-3 font-semibold border-r border-purple-100">Վճարվող գումարի չափ<sup>[1]</sup></td>
                <td className="p-3 border-r border-purple-100">1.50%</td>
                <td className="p-3 border-r border-purple-100">1.90%</td>
                <td className="p-3 border-r border-purple-100">3.00%</td>
                <td className="p-3">1%</td>
              </tr>
              <tr className="bg-purple-50/10">
                <td className="p-3 font-semibold border-r border-purple-100">
                  200,000 (երկու հարյուր հազար) ՀՀ դրամը չգերազանցող շրջանառության պարագայում
                </td>
                <td className="p-3 border-r border-purple-100"></td>
                <td className="p-3 border-r border-purple-100"></td>
                <td className="p-3 border-r border-purple-100">3000<sup>[2]</sup></td>
                <td className="p-3"></td>
              </tr>
              <tr>
                <td className="p-3 font-semibold border-r border-purple-100">
                  Վճարային էջի ստանդարտից դուրս դիզայնի պատվիրման պարագայում
                </td>
                <td className="p-3 border-r border-purple-100"></td>
                <td className="p-3 border-r border-purple-100"></td>
                <td className="p-3 border-r border-purple-100">20000<sup>[3]</sup></td>
                <td className="p-3"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table footnotes */}
        <div className="text-[11px] text-gray-500 space-y-1 mb-8">
          <p><sup>[1]</sup> Կախված նորտի առանձնահատկություններից և շրջանառությունից՝ սակագները կարող են փոփոխվել[cite: 40]</p>
          <p><sup>[2]</sup> Ներառյալ կիրառելի բոլոր հարկերը[cite: 40]</p>
          <p><sup>[3]</sup> Ներառյալ կիրառելի բոլոր հարկերը[cite: 40]</p>
        </div>

        {/* Features List */}
        <ul className="space-y-3 text-xs sm:text-sm text-gray-700 mb-10">
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-lg leading-none">•</span>
            <span>
              Վճարումներն անվտանգ են, գործում են{" "}
              <span className="text-purple-700 font-semibold cursor-pointer underline">
                3D Secure Code
              </span>{" "}
              անվտանգության համակարգերը,[cite: 40]
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-lg leading-none">•</span>
            <span>Վճարման պարզ գործընթաց, Ձեր գնորդները վճարում կկատարեն 1 քայլով,[cite: 40]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-lg leading-none">•</span>
            <span>
              <span className="text-purple-700 font-semibold cursor-pointer underline">
                Անվճար տեխնիկական խորհրդատվություն
              </span>{" "}
              և տեխնիկական սպասարկում Բանկի մասնագետների կողմից,[cite: 40]
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-700 font-bold text-lg leading-none">•</span>
            <span>Անհատական մոտեցում Ձեր բիզնեսին ու կայքին:[cite: 40]</span>
          </li>
        </ul>

        {/* Process steps */}
        <div className="space-y-4 text-xs sm:text-sm text-gray-700 mb-12">
          <p>
            V-POS տերմինալ տեղադրելու համար լրացրեք{" "}
            <span className="text-purple-700 font-bold cursor-pointer underline">
              Տերմինալի տեղադրման հայտը
            </span>{" "}
            հիմա:[cite: 40]
          </p>

          <ol className="space-y-3 pl-4 list-decimal font-medium">
            <li className="pl-2">
              Մեր մասնագետը 3 աշխատանքային օրում կապ կհաստատի Ձեզ հետ, կներկայացնի պայմանները, կպատասխանի Ձեր բոլոր հարցերին և կպատրաստի գործընթացի համար անհրաժեշտ բոլոր փաստաթղթերը:[cite: 40]
            </li>
            <li className="pl-2">
              Պայմանագրի ստորագրումից հետո V-POS-ը կտեղադրվի Ձեր բիզնեսի կայքում:[cite: 40]
            </li>
          </ol>

          <p className="font-bold text-gray-900 pt-2">
            Կառուցեք Ձեր բիզնեսի թվային ապագան:[cite: 40]
          </p>
        </div>

        {/* Banner Section */}
        <div className="bg-gray-100 rounded-2xl p-6 mb-12 text-center">
          <p className="text-xs sm:text-sm text-gray-700 mb-4">
            Evocabank-ում այսուհետ գործում են բիզնես վարկ և բիզնես օվերդրաֆտ POS տերմինալի շրջանառության հիման վրա:[cite: 41]
          </p>
        </div>
       <img src="https://www.evoca.am/file_manager/pos2-600x315.jpg" alt="" />
          

        {/* Business Loan Section */}
        <section className="space-y-4 text-xs sm:text-sm text-gray-700 mb-10">
          <h2 className="text-base sm:text-lg font-bold text-purple-800">
            Բիզնես վարկ POS տերմինալի շրջանառության հիման վրա[cite: 41]
          </h2>
          <p className="leading-relaxed">
            Եթե ունեք փոքր և միջին բիզնես ու իրականացնում եք անկանխիկ գործարքներ,ապա այս բիզնես վարկը Ձեզ համար է: Մեզ մոտ փոքր և միջին բիզնեսներն ունեն հնարավորություն ձևակերպել արագ բիզնես վարկեր իրենց կարճաժամկետ ֆինանսական խնդիրները լուծելու համար:[cite: 41]
          </p>
          
          <p className="font-semibold text-gray-900">Վարկի համար կարող են դիմել՝[cite: 41]</p>
          <ul className="space-y-2 pl-2">
            <li className="flex items-start gap-2">
              <span className="text-purple-700 font-bold">•</span>
              <span>ՀՀ ռեզիդենտ անհատ ձեռնարկատեր և իրավաբանական անձինք, ովքեր գրանցված գործունեություն են ծավալում առնվազն 12 ամիս[cite: 41]</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-700 font-bold">•</span>
              <span>Այն հաճախորդները, ովքեր Evocabank-ի հետ ունեն կնքված POS տերմինալի համագործակցության պայմանագիր[cite: 41]</span>
            </li>
          </ul>

          <p className="font-semibold text-gray-900 pt-2">Որպես վարկի ապահովության միջոց կարող են հանդիսանալ՝[cite: 41, 42]</p>
          <ul className="space-y-2 pl-2">
            <li className="flex items-start gap-2">
              <span className="text-purple-700 font-bold">•</span>
              <span>POS տերմինալի շրջանառություն[cite: 41, 42]</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-700 font-bold">•</span>
              <span>Անհրաժեշտության դեպքում ֆիզիկական և/կամ իրավաբանական անձի երաշխավորություն[cite: 41, 42]</span>
            </li>
          </ul>

          <p className="pt-2">Օգտվեք մեր կողմից տրվող հնարավորությունից և գրանցեք Ձեր նոր բիզնես հաջողությունները:[cite: 41, 42]</p>
          <p>
            Վարկի պայմաններին կարող եք ծանոթանալ{" "}
            <span className="text-purple-700 font-bold underline cursor-pointer">
              այստեղ
            </span>
            :[cite: 41, 42]
          </p>
        </section>

        {/* Business Overdraft Section */}
        <section className="space-y-4 text-xs sm:text-sm text-gray-700 mb-16">
          <h2 className="text-base sm:text-lg font-bold text-purple-800">
            Բիզնես օվերդրաֆտ POS տերմինալի շրջանառության հիման վրա[cite: 42]
          </h2>
          <p className="leading-relaxed">
            Evocabank-ում կարող եք ձեռք բերել բիզնես օվերդրաֆտ՝ առանց ավելորդ թղթաբանության և ժամանակի կորստի: Եթե կան կարճաժամկետ ֆինանսական խնդիրներ կամ պարզապես ցանկանում եք ավելի զարգացնել բիզնեսը, ապա մեզ մոտ շատ արագ և պարզ տարբերակով կարող եք ձևակերպել բիզնես օվերդրաֆտ:[cite: 42]
          </p>
          
          <p className="font-semibold text-gray-900">Վարկի համար կարող են դիմել՝[cite: 42]</p>
          <ul className="space-y-2 pl-2">
            <li className="flex items-start gap-2">
              <span className="text-purple-700 font-bold">•</span>
              <span>ՀՀ ռեզիդենտ իրավաբանական և անհատ ձեռնարկատեր անձինք, ովքեր գրանցված գործունեություն են ծավալում առնվազն 12 ամիս[cite: 42]</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-700 font-bold">•</span>
              <span>Այն հաճախորդները, ովքեր Evocabank-ի հետ ունեն կնքված POS տերմինալի համագործակցության առնվազն 6 ամսվա պայմանագիր[cite: 42]</span>
            </li>
          </ul>

          <p className="pt-2">
            Օվերդրաֆտի պայմաններին կարող եք ծանոթանալ{" "}
            <span className="text-purple-700 font-bold underline cursor-pointer">
              այստեղ
            </span>
            :[cite: 42]
          </p>
          <p>
            Մեր մյուս բիզնես վարկերին կարող եք ծանոթանալ{" "}
            <span className="text-purple-700 font-bold underline cursor-pointer">
              այստեղ
            </span>
            :[cite: 42]
          </p>
          <p>
Հարցերի դեպքում մեր թիմի հետ կարող եք կապ հաստատել հետևյալ հղումով</p>
        </section>
      </main>

      {/* BANNER SECTION */}
            <section className="w-full bg-[#6a0dad] text-white py-12 px-6 relative overflow-hidden mt-12">
              <div className="absolute top-0 left-0 w-36 h-36 bg-purple-500/30 rounded-br-full pointer-events-none z-0"></div>
              <div className="absolute top-10 left-10 w-12 h-12 rounded-full border-4 border-pink-400 opacity-40 pointer-events-none"></div>
              <div className="absolute top-6 right-20 w-8 h-8 border-2 border-white/20 rotate-45 pointer-events-none"></div>
              <div className="absolute bottom-12 right-32 w-10 h-10 bg-pink-400/30 rounded-lg rotate-12 blur-sm pointer-events-none"></div>
    
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                <div className="w-full lg:w-1/2 flex items-center justify-center relative">
                  <div className="relative w-full max-w-[420px] sm:max-w-[480px] z-10">
                    <div className="relative rounded-t-xl border-[6px] border-[#1e1e1e] bg-black shadow-2xl overflow-hidden aspect-[16/10]">
                      <iframe
                        src="https://www.youtube.com/embed/KwAgMHEx8ys?enablejsapi=1"
                        title="EvocaTOUCH Video"
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="w-[108%] -translate-x-[4%] h-3 bg-[#2d2d2d] rounded-b-xl border-t border-neutral-700 shadow-xl relative flex justify-center">
                      <div className="w-16 h-1 bg-neutral-600 rounded-b-md"></div>
                    </div>
                  </div>
    
                  <div className="relative -ml-16 sm:-ml-20 z-20 top-4 shrink-0">
                    <div className="w-32 sm:w-40 aspect-[9/19] rounded-[2.2rem] border-[5px] border-[#1a1a1a] bg-black overflow-hidden shadow-2xl relative">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-[#1a1a1a] rounded-full z-30"></div>
                      <img
                        src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg"
                        alt="Evoca Mobile App"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
    
                <div className="w-full lg:w-1/2 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    Օնլայն և մոբայլ բանկինգ
                  </h2>
    
                  <p className="text-purple-100 text-sm md:text-base leading-relaxed max-w-xl">
                    Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
                  </p>
    
                  <div>
                    <Link
                      to="/evoca-online"
                      className="inline-block bg-white text-[#6a0dad] px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition shadow-lg text-sm md:text-base"
                    >
                      Դառնալ հաճախորդ
                    </Link>
                  </div>
    
                  <div className="flex items-center gap-6 pt-4">
                    <div className="bg-white p-2 rounded-lg shadow">
                      <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://www.evoca.am"
                        alt="Evoca App QR Code"
                        className="w-16 h-16"
                      />
                    </div>
                    <p className="text-xs text-purple-200 max-w-[160px]">
                      Ներբեռնել հավելվածը`
                    </p>
                  </div>
                </div>
              </div>
            </section>


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
}