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
  FileText,
  Download,
} from "lucide-react";

export default function FactoringFinance() {
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
            className="bg-purple-950/60 px-8 py-3.5 border-b-2 border-white cursor-pointer"
          >
            Ֆակտորինգային ֆինանսավորում
          </Link>
        <Link
  to="/business/letter-of-credit"
  className="px-8 py-3.5 hover:bg-purple-800/50 cursor-pointer block"
>
  Ակրեդիտիվ
</Link>
         
         <Link
  to="/business/incasso"
  className="px-8 py-3.5 hover:bg-purple-800/50 cursor-pointer block"
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
          <span className="text-gray-800 font-medium">
            Ֆակտորինգային ֆինանսավորում
          </span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Ֆակտորինգային ֆինանսավորում
        </h1>

        {/* Introduction text */}
        <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4 mb-8">
          <p>
            Եթե ցանկանում եք լինել շուկայում ավելի մրցունակ,{" "}
            <span className="text-purple-700 font-bold">Evocabank</span>-ը կօգնի
            Ձեզ՝ առաջարկում ենք ֆակտորինգային ֆինանսավորում:[cite: 40]
          </p>
          <p>
            <span className="text-purple-700 font-bold">Evocabank</span>-ն
            իրականացնում է ֆակտորինգային ֆինանսավորում նաև «Հայաստանի
            արտահանման ապահովագրական գործակալություն» ԱՓԲԸ-ի հետ
            համագործակցության պայմանագրի շրջանակում:[cite: 40]
          </p>
          <p>
            Ֆակտորինգ կարող եք ձևակերպել մեր Գլխամասային գրասենյակում և ցանկացած
            մասնաճյուղում (Բացառությամբ «Հանրապետության», «Երևան Մոլ»,
            «Էրեբունի» մասնաճյուղերի):[cite: 40]
          </p>
        </div>

        {/* Section Heading */}
        <h2 className="text-sm sm:text-base font-bold text-gray-900 mb-6">
          Պայմաններ և սակագներ[cite: 40]
        </h2>

        {/* Conditions Table */}
        <div className="overflow-x-auto border border-purple-100 rounded-2xl shadow-sm mb-12">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <tbody className="divide-y divide-purple-50 text-gray-700">
              {/* Row 1 */}
              <tr className="bg-purple-50/20">
                <td className="p-4 font-semibold text-gray-500 w-12 text-center">
                  1.
                </td>
                <td className="p-4 font-bold text-gray-800 w-1/3">
                  Ֆակտորինգի սահմանաչափ
                </td>[cite: 40]
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-700 font-bold">•</span>
                    <span>
                      5,000,000 - 1,000,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ
                    </span>[cite: 40]
                  </div>
                </td>
              </tr>

              {/* Row 2 */}
              <tr>
                <td className="p-4 font-semibold text-gray-500 text-center">
                  2.
                </td>
                <td className="p-4 font-bold text-gray-800">Հաճախորդները</td>[cite: 40]
                <td className="p-4 leading-relaxed">
                  ՀՀ ռեզիդենտ իրավաբանական անձինք և անհատ ձեռնարկատեր, ովքեր
                  գրանցված գործունեություն են ծավալում առնվազն 12 ամիս:[cite: 40]
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="bg-purple-50/20">
                <td className="p-4 font-semibold text-gray-500 text-center">
                  3.
                </td>
                <td className="p-4 font-bold text-gray-800">
                  Ֆակտորինգային սահմանաչափի գործողության ժամկետ[cite: 40]
                </td>
                <td className="p-4">Մինչև 24 ամիս</td>[cite: 40]
              </tr>

              {/* Row 4 */}
              <tr>
                <td className="p-4 font-semibold text-gray-500 text-center align-top">
                  4.
                </td>
                <td className="p-4 font-bold text-gray-800 align-top">
                  Ֆինանսավորման ժամկետ
                </td>[cite: 40]
                <td className="p-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">•</span>
                    <span>Մինչև 120 օր,</span>[cite: 40]
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">•</span>
                    <span>
                      «Հայաստանի արտահանման ապահովագրական գործակալություն»
                      ԱՓԲԸ-ի հետ համագործակցության պայմանագրի շրջանակներում -
                      մինչև 250 օր,
                    </span>[cite: 40]
                  </div>
                </td>
              </tr>

              {/* Row 5 */}
              <tr className="bg-purple-50/20">
                <td className="p-4 font-semibold text-gray-500 text-center">
                  5.
                </td>
                <td className="p-4 font-bold text-gray-800">
                  Ֆինանսավորման չափ
                </td>[cite: 40]
                <td className="p-4">
                  Ներկայացված հաշիվ ապրանքագրի մինչև 90%
                </td>[cite: 40]
              </tr>

              {/* Row 6 */}
              <tr>
                <td className="p-4 font-semibold text-gray-500 text-center align-top">
                  6.
                </td>
                <td className="p-4 font-bold text-gray-800 align-top">
                  Ֆինանսավորման գումարի տարեկան տոկոսադրույք և արժույթ
                </td>[cite: 40]
                <td className="p-4">
                  <div className="grid grid-cols-2 gap-y-2 border-b border-gray-100 pb-2 mb-2">
                    <span className="font-semibold text-gray-700">
                      ՀՀ դրամ
                    </span>[cite: 40]
                    <span>սկսած 12%-ից</span>[cite: 40]
                  </div>
                  <div className="grid grid-cols-2 gap-y-2 border-b border-gray-100 pb-2 mb-2">
                    <span className="font-semibold text-gray-700">
                      ԱՄՆ դոլար
                    </span>[cite: 40]
                    <span>սկսած 8%-ից</span>[cite: 40]
                  </div>
                  <div className="grid grid-cols-2 gap-y-2 border-b border-gray-100 pb-2 mb-2">
                    <span className="font-semibold text-gray-700">Եվրո</span>[cite: 40]
                    <span>սկսած 6%-ից</span>[cite: 40]
                  </div>
                  <div className="grid grid-cols-2 gap-y-2">
                    <span className="font-semibold text-gray-700">
                      ՌԴ ռուբլի
                    </span>[cite: 40]
                    <span>Սկսած 12%-ից</span>[cite: 40]
                  </div>
                </td>
              </tr>

              {/* Row 7 */}
              <tr className="bg-purple-50/20">
                <td className="p-4 font-semibold text-gray-500 text-center align-top">
                  7.
                </td>
                <td className="p-4 font-bold text-gray-800 align-top">
                  Ֆինանսավորման գումարի և տոկոսագումարների մարման կարգ
                </td>[cite: 40]
                <td className="p-4">
                  Ժամկետանց գումարի համար՝ օրական 0.015%,
                </td>[cite: 40]
              </tr>

              {/* Row 8 */}
              <tr>
                <td className="p-4 font-semibold text-gray-500 text-center">
                  8.
                </td>
                <td className="p-4 font-bold text-gray-800">
                  Վաղաժամկետ մարում
                </td>[cite: 41]
                <td className="p-4">
                  Վաղաժամկետ մարման տուժանքներ չեն կիրառվում
                </td>[cite: 41]
              </tr>

              {/* Row 9 */}
              <tr className="bg-purple-50/20">
                <td className="p-4 font-semibold text-gray-500 text-center">
                  9.
                </td>
                <td className="p-4 font-bold text-gray-800">
                  Սահմանաչափի հաստատման վճար
                </td>[cite: 41]
                <td className="p-4">
                  Սահմանաչափի 0.20% նվազագույնը 10,000 ՀՀ դրամ առավելագույնը
                  200,000 ՀՀ դրամ
                </td>[cite: 41]
              </tr>

              {/* Row 10 */}
              <tr>
                <td className="p-4 font-semibold text-gray-500 text-center">
                  10.
                </td>
                <td className="p-4 font-bold text-gray-800">
                  Գործող սահմանաչափի ավելացում
                </td>[cite: 41]
                <td className="p-4">
                  ավելացվող մասի 0.20% նվազագույնը 10,000 ՀՀ դրամ
                </td>[cite: 41]
              </tr>

              {/* Row 11 */}
              <tr className="bg-purple-50/20">
                <td className="p-4 font-semibold text-gray-500 text-center">
                  11.
                </td>
                <td className="p-4 font-bold text-gray-800">
                  Հ/Ա գանձվող միջնորդավճար
                </td>[cite: 41]
                <td className="p-4">0.5-3%, min 10,000 դրամ</td>[cite: 41]
              </tr>

              {/* Row 12 */}
              <tr>
                <td className="p-4 font-semibold text-gray-500 text-center">
                  12.
                </td>
                <td className="p-4 font-bold text-gray-800">
                  Սահմանաչափի վերահաստատում
                </td>[cite: 41]
                <td className="p-4">10,000 ՀՀ դրամ</td>[cite: 41]
              </tr>

              {/* Row 13 */}
              <tr className="bg-purple-50/20">
                <td className="p-4 font-semibold text-gray-500 text-center">
                  13.
                </td>
                <td className="p-4 font-bold text-gray-800">
                  Հայտի ուսումնասիրման վճար
                </td>[cite: 41]
                <td className="p-4">10,000 ՀՀ դրամ</td>[cite: 41]
              </tr>

              {/* Row 14 */}
              <tr>
                <td className="p-4 font-semibold text-gray-500 text-center align-top">
                  14.
                </td>
                <td className="p-4 font-bold text-gray-800 align-top">
                  Ապահովվածություն
                </td>[cite: 41]
                <td className="p-4 space-y-3 leading-relaxed">
                  <p>
                    Հաճախորդի/պարտապանների անձնական երաշխավորություններ՝ ըստ
                    պահանջի:
                  </p>[cite: 41]
                  <p>
                    Առանձին դեպքերում, բարձր ռիսկայնությամբ գործարքների դեպքում
                    կարող է պահանջվել նաև լրացուցիչ գրավ:
                  </p>[cite: 41]
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Documents Section */}
        <div className="mb-16">
          <h2 className="text-lg font-bold text-gray-900 mb-6">
            Փաստաթղթեր[cite: 41]
          </h2>
          <div className="bg-[#f7f5f9] p-4 rounded-2xl flex items-center justify-between hover:bg-purple-100/50 transition cursor-pointer max-w-xl">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-700">
                <FileText size={22} />
              </div>
              <span className="text-xs sm:text-sm font-bold text-gray-800">
                Տեղեկատվական ամփոփագիր (Վարկային պրոդուկտներ) 07.04.2026[cite: 41]
              </span>
            </div>
            <Download size={18} className="text-purple-700" />
          </div>
        </div>
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