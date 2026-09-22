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

export default function TerminalsTariffs() {
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
            className="bg-purple-950/60 px-8 py-3.5 border-b-2 border-white cursor-pointer"
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
          <span className="text-gray-800 font-medium">Սակագներ</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          Սակագներ
        </h1>

        {/* Intro text */}
        <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4 mb-12">
          <p>
            Տերմինալը փողոցում, ինչպես նաև առևտրի կետերում վճարումների համար նախատեսված սարք է:[cite: 46]
            Տերմինալների միջոցով Դուք նաև կարող եք կատարել բանկային ծառայություններ՝ առանց բանկ այցելելու՝ հեշտ և հարմար տարբերակով:[cite: 46]
          </p>
          <p>
            Եթե Ձեր տարածքում չկա Evocabank-ի մասնաճյուղ, Դուք կարող եք կատարել Ձեր վճարումները հետևյալ տերմինալների միջոցով․[cite: 46]
          </p>
        </div>

        {/* SECTION 1: Telcell */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Telcell</h2>
          
          {/* Telcell Logo Box */}
         <img src="https://www.evoca.am/file_manager/telcell-evoca-logo.png" alt="" />

          <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4 mb-6">
            <p>
              Telcell վճարային տերմինալների միջոցով Դուք կարող եք 24/7 ռեժիմով կատարել ընթացիկ և քարտային հաշիվների համալրում և վարկի մարումներ․[cite: 46]
            </p>
            <p>
              Telcell համակարգը հասանելի է ինչպես Հայաստանի Հանրապետության տարածքում, այնպես էլ Արցախի Հանրապետությունում: Տերմինալների ցանկին և հասցեներին կարող եք ծանոթանալ{" "}
              <span className="text-purple-700 font-semibold cursor-pointer underline">
                այստեղ
              </span>
              :[cite: 46]
            </p>
            <p>
              Evocabank-ի մասնաճյուղերում տեղադրված Telcell տերմինալներից օգտվելիս գործում է 0% միջնորդավճար: Այլ վայրերում տեղադրված Telcell տերմինալով Evocabank-ի վճարում կատարելիս գործում են հետևյալ միջնորդավճարները՝[cite: 46]
            </p>
          </div>

          {/* Telcell Table */}
          <div className="overflow-x-auto border border-purple-100 rounded-xl shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <tbody className="divide-y divide-purple-50 text-gray-700">
                <tr>
                  <td className="p-3 font-semibold w-1/3">Հաշվի համալրում</td>
                  <td className="p-3 w-1/3 text-gray-600">մինչև 100,000 դրամը ներառյալ</td>
                  <td className="p-3 w-1/3 font-medium">300 ՀՀ դրամ</td>
                </tr>
                <tr className="bg-purple-50/10">
                  <td className="p-3 font-semibold">Քարտային հաշվի համալրում</td>
                  <td className="p-3 text-gray-600">մինչև 100,000 դրամը ներառյալ</td>
                  <td className="p-3 font-medium">300 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Վարկի մարում</td>
                  <td className="p-3 text-gray-600">մինչև 100,000 դրամը ներառյալ</td>
                  <td className="p-3 font-medium">300 ՀՀ դրամ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 2: uPay */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-4">uPay</h2>
          
          {/* uPay Logo Box */}
          <img src="https://www.evoca.am/file_manager/uPay-evoca.png" alt="" />
         

          <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4 mb-6">
            <p>
              uPay -ի միջոցով վճարումներ կարող եք կատարել՝ ինչպես uPay հավելվածով, այնպես էլ այցելելով Ucom սպասարկման կենտրոններ․[cite: 47]
            </p>
            <p>
              uPay-ում վճարում կատարելիս գործում են հետևյալ միջնորդավճարները՝[cite: 47]
            </p>
          </div>

          {/* uPay Table */}
          <div className="overflow-x-auto border border-purple-100 rounded-xl shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <tbody className="divide-y divide-purple-50 text-gray-700">
                <tr>
                  <td className="p-3 font-semibold w-1/3" rowSpan={2}>
                    Վարկերի մարում և փոխանցում բանկային հաշիվներին
                  </td>
                  <td className="p-3 w-1/3 text-gray-600 border-b border-purple-50">մինչև 35,000 ՀՀ դրամի դեպքում</td>
                  <td className="p-3 w-1/3 font-medium border-b border-purple-50">200 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 w-1/3 text-gray-600">35,001-ից ավելի ՀՀ դրամի դեպքում</td>
                  <td className="p-3 w-1/3 font-medium">0.6%, բայց ոչ ավել 1,200 ՀՀ դրամ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3: ՄոբիԴրամ */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-4">ՄոբիԴրամ</h2>
          
          {/* MobiDram Logo Box */}
         <img src="https://www.evoca.am/file_manager/mobidram-evoca.jpg" alt="" />

          <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4 mb-6">
            <p>
              Տերմինալների ցանկին և հասցեներին կարող եք ծանոթանալ{" "}
              <span className="text-purple-700 font-semibold cursor-pointer underline">
                այստեղ
              </span>
              :[cite: 47]
            </p>
            <p>
              ՄոբիԴրամի տերմինալներով Evocabank-ի վճարում կատարելիս գործում են հետևյալ միջնորդավճարները՝[cite: 47]
            </p>
          </div>

          {/* MobiDram Table */}
          <div className="overflow-x-auto border border-purple-100 rounded-xl shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <tbody className="divide-y divide-purple-50 text-gray-700">
                <tr>
                  <td className="p-3 font-semibold w-1/3" rowSpan={2}>Վարկի մարում</td>
                  <td className="p-3 w-1/3 text-gray-600 border-b border-purple-50">մինչև 50,000 դրամի դեպքում</td>
                  <td className="p-3 w-1/3 font-medium border-b border-purple-50">200 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-600">50,001 - 100,000 դրամի դեպքում</td>
                  <td className="p-3 font-medium">300 ՀՀ դրամ</td>
                </tr>
                <tr className="bg-purple-50/10">
                  <td className="p-3 font-semibold w-1/3" rowSpan={2}>Բանկային հաշիվների/քարտերի համալրում</td>
                  <td className="p-3 text-gray-600 border-b border-purple-50">մինչև 50,000 դրամի դեպքում</td>
                  <td className="p-3 font-medium border-b border-purple-50">200 ՀՀ դրամ</td>
                </tr>
                <tr className="bg-purple-50/10">
                  <td className="p-3 text-gray-600">50,001 - 100,000 դրամի դեպքում</td>
                  <td className="p-3 font-medium">300 ՀՀ դրամ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 4: iDram */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-4">iDram</h2>
          
          {/* iDram Logo Box */}
        <img src="https://www.evoca.am/file_manager/idram-evoca.png" alt="" />

          <div className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6">
            <p>
              Idram հավելվածով կարող եք կատարել գործարքներ հետևյալ միջնորդավճարներով՝[cite: 48]
            </p>
          </div>

          {/* iDram Table */}
          <div className="overflow-x-auto border border-purple-100 rounded-xl shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <tbody className="divide-y divide-purple-50 text-gray-700">
                <tr>
                  <td className="p-3 font-semibold w-1/3" rowSpan={3}>Վարկի մարում</td>
                  <td className="p-3 w-1/3 text-gray-600 border-b border-purple-50">մինչև 15,000 դրամի դեպքում</td>
                  <td className="p-3 w-1/3 font-medium border-b border-purple-50">100 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-600 border-b border-purple-50">15,001 - 50,000 դրամի դեպքում</td>
                  <td className="p-3 font-medium border-b border-purple-50">200 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-600">50,001 - 100,000 դրամի դեպքում</td>
                  <td className="p-3 font-medium">300 ՀՀ դրամ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 5: EasyPay */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-4">EasyPay</h2>
          
          {/* EasyPay Logo Box */}
        <img src="https://www.evoca.am/file_manager/easypay-evoca.png" alt="" />

          <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4 mb-6">
            <p>
              2,000-ից ավել վճարային տերմինալ, որոնց ցանկին և հասցեներին կարող եք ծանոթանալ{" "}
              <span className="text-purple-700 font-semibold cursor-pointer underline">
                այստեղ
              </span>
              :[cite: 48]
            </p>
            <p>
              Evocabank-ի մասնաճյուղերում տեղադրված EasyPay տերմինալներից օգտվելիս գործում է 0% միջնորդավճար: Այլ վայրերում տեղադրված EasyPay տերմինալներով Evocabank-ի վճարում կատարելիս գործում են հետևյալ միջնորդավճարները՝[cite: 48]
            </p>
          </div>

          {/* EasyPay Table */}
          <div className="overflow-x-auto border border-purple-100 rounded-xl shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <tbody className="divide-y divide-purple-50 text-gray-700">
                <tr>
                  <td className="p-3 font-semibold w-1/3">Հաշվի համալրում</td>
                  <td className="p-3 w-1/3 text-gray-600">1,000 - 100,000 դրամի դեպքում</td>
                  <td className="p-3 w-1/3 font-medium">300 ՀՀ դրամ (առավելագույնը 1,200 ՀՀ դրամ)</td>
                </tr>
                <tr className="bg-purple-50/10">
                  <td className="p-3 font-semibold">Քարտային հաշվի համալրում</td>
                  <td className="p-3 text-gray-600">1,000 - 100,000 դրամի դեպքում</td>
                  <td className="p-3 font-medium">300 ՀՀ դրամ (առավելագույնը 1,200 ՀՀ դրամ)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Վարկի մարում</td>
                  <td className="p-3 text-gray-600">1,000 - 100,000 դրամի դեպքում</td>
                  <td className="p-3 font-medium">300 ՀՀ դրամ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
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