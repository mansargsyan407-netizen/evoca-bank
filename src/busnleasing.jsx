import { Link } from "react-router-dom";
import {
  Home,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  MapPin,
  HelpCircle,
  Globe,
  Search,
  Menu,
  Phone,
} from "lucide-react";

export default function BusnLeasing() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* HEADER SECTION */}
      <header className="border-b border-gray-100 bg-white">
    

        {/* Main navigation */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        

          <nav className="hidden md:flex items-center space-x-8 text-sm font-bold text-gray-800">
            <Link to="/business/leasing" className="text-purple-700 font-extrabold">Լիզինգ</Link>
<Link to="/business/trade-finance" className="hover:text-purple-700">
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

      {/* Sub-banner section */}
      <div className="bg-[#6a0dad] text-white">
        <div className="mx-auto flex max-w-7xl items-center text-sm font-bold">
       <Link 
      to="/business/leasing" 
      className="px-8 py-3.5 hover:bg-purple-800/50 cursor-pointer"
    >
      Evoca Leasing
    </Link>
    <Link 
      to="/business/leasing/special-offer" 
      className=" px-8 py-3.5 border-b-2  cursor-pointer"
    >
      Հատուկ առաջարկ
    </Link>
        
        </div>
      </div>

      {/* Main Content Container */}
      <main className="mx-auto max-w-5xl px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <Home size={14} />
          <ChevronRight size={12} />
          <span>Բիզնես</span>
          <ChevronRight size={12} />
          <span>Լիզինգ</span>
          <ChevronRight size={12} />
          <span className="text-gray-800 font-medium">Evoca Leasing</span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
          Evoca Leasing
        </h1>

        {/* Section Heading */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
          Անհրաժեշտ տեղեկատվություն
        </h2>

        {/* Accordion Box - Evoca Leasing */}
        <div className="rounded-2xl border border-purple-300 p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between cursor-pointer border-b border-gray-100 pb-4 mb-4">
            <div className="flex items-center gap-3 text-purple-700 font-bold text-lg">
              <ChevronUp size={20} />
              <span>Evoca Leasing</span>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4 px-2">
            <p>
              Լիզինգի առարկան կարող է ձեռք բերվել ինչպես ՀՀ-ից, այնպես էլ արտերկրից՝ առաջնային և երկրորդային շուկաներից։ Լիզինգի առարկա կարող են հանդիսանալ՝
            </p>

            <ul className="list-disc pl-6 space-y-2 text-purple-900 font-medium">
              <li><span className="text-gray-700">Արտադրական/արդյունաբերական հաստոցներ/հոսքագծեր,</span></li>
              <li><span className="text-gray-700">Բեռնատար/մարդատար ավտոմեքենաներ,</span></li>
              <li><span className="text-gray-700">Շինարարական տեխնիկա</span></li>
              <li><span className="text-gray-700">Արևային կայաններ,</span></li>
              <li><span className="text-gray-700">Բժշկական սարքավորումներ,</span></li>
              <li><span className="text-gray-700">Կոմերցիոն անշարժ գույք,</span></li>
              <li><span className="text-gray-700">և այլն։</span></li>
            </ul>

            <h3 className="font-bold text-gray-900 pt-4">Լիզինգի առավելությունները</h3>

            <ul className="list-disc pl-6 space-y-2 text-purple-900 font-medium">
              <li><span className="text-gray-700">Առանց գրավի առկայության պրոդուկտ է,</span></li>
              <li><span className="text-gray-700">Առանց նոտարական/կադաստրային ծախսերի,</span></li>
              <li><span className="text-gray-700">Հնարավորություն է տալիս իրականացնել ԱԱՀ-ի հաշվանցումներ և ծախսագրումներ,</span></li>
              <li><span className="text-gray-700">Լիզինգի առարկայի ձեռքբերում արտերկրից՝ առանց հաճախորդի մասնակցության գնման գործընթացին,</span></li>
              <li><span className="text-gray-700">Ստանալ էքսպերտային գնահատում և խորհրդատվություն լիզինգային նախագծի վերաբերյալ։</span></li>
            </ul>

            {/* Terms Table */}
            <h3 className="font-bold text-gray-900 pt-6 pb-2 text-base">
              Պայմաններ և սակագներ
            </h3>

            <div className="overflow-x-auto border border-purple-100 rounded-lg">
              <table className="w-full text-left text-xs sm:text-sm text-gray-700">
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-purple-50/30">
                    <td className="p-3 font-semibold text-gray-800 w-1/3">Արժույթը</td>
                    <td className="p-3">ՀՀ դրամ, ԱՄՆ դոլար, Եվրո</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-gray-800">Լիզինգառուները</td>
                    <td className="p-3">ՀՀ ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական անձինք և անհատ ձեռնարկատերեր</td>
                  </tr>
                  <tr className="bg-purple-50/30">
                    <td className="p-3 font-semibold text-gray-800">Լիզինգի առարկայի ձեռքբերման հնարավորությունները</td>
                    <td className="p-3">Լիզինգի առարկան կարող է ձեռք բերվել ինչպես ՀՀ-ից, այնպես էլ արտերկրից՝ առաջնային և երկրորդային շուկաներից</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-gray-800">Լիզինգի սահմանաչափերը</td>
                    <td className="p-3">5,000,001-1,000,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ</td>
                  </tr>
                  <tr className="bg-purple-50/30">
                    <td className="p-3 font-semibold text-gray-800">Կանխավճար</td>
                    <td className="p-3">Նվազագույնը՝ 10%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-gray-800">Մարման ժամկետը</td>
                    <td className="p-3">6-72 ամիս՝ կախված ձեռքբերվող Լիզինգի առարկայից</td>
                  </tr>
                  <tr className="bg-purple-50/30">
                    <td className="p-3 font-semibold text-gray-800">Մարման եղանակը</td>
                    <td className="p-3">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Անուիտետային</li>
                        <li>Զսպանակաձև</li>
                        <li>Պայմանագրային</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-gray-800">Տարեկան տոկոսադրույքը</td>
                    <td className="p-3">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>ՀՀ դրամ՝ սկսած 10.5%-ից</li>
                        <li>ԱՄՆ դոլար՝ սկսած 8%-ից</li>
                        <li>Եվրո՝ սկսած 6%-ից</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-purple-50/30">
                    <td className="p-3 font-semibold text-gray-800">Լիզինգի մարման ժամկետների ուշացման դեպքում վճարվող տույժեր</td>
                    <td className="p-3 space-y-1">
                      <p>• Ժամկետանց լիզինգի մայր գումարի դեպքում՝ օրական 0.015%-ի չափով</p>
                      <p>• Ժամկետանց տոկոսագումարների դեպքում՝ օրական 0.1%-ի չափով</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-gray-800">Ժամկետից շուտ մարելու տուգանք</td>
                    <td className="p-3 space-y-2">
                      <p>• Մինչև պայմանագրի գործողության ժամկետի կեսը մարումների ժամանակացույցով սահմանված ամսական վարձավճարից ավելին մարելու դեպքում վճարվում է տուգանք՝ մարումների ժամանակացույցով սահմանված ամսական Լիզինգի մայր գումարի չափը գերազանցող գումարի 5%-ի չափով</p>
                      <p>• Առանձին դեպքերում Բանկի լիազոր մարմնի որոշմամբ սահմանված տուգանքի չափը կարող է փոփոխվել</p>
                    </td>
                  </tr>
                  <tr className="bg-purple-50/30">
                    <td className="p-3 font-semibold text-gray-800">Ապահովվածություն</td>
                    <td className="p-3 space-y-1">
                      <p>• Երաշխավորություններ՝ ըստ պահանջի</p>
                      <p>• Գույքի/իրավունքի գրավ՝ ըստ պահանջի</p>
                      <p>• Առանձին դեպքերում, բարձր ռիսկայնությամբ գործարքների դեպքում կարող է պահանջվել նաև այլ գրավ</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-gray-800">Գանձվող վճարներ</td>
                    <td className="p-3 space-y-1">
                      <p>• Լիզինգային հայտի ուսումնասիրման միանվագ վճար՝ 20,000 ՀՀ դրամ</p>
                      <p>• Լիզինգի գումարից միանվագ գանձվող միջնորդավճար՝ 0.4-1%, ոչ ավել քան 500,000 ՀՀ դրամ</p>
                    </td>
                  </tr>
                  <tr className="bg-purple-50/30">
                    <td className="p-3 font-semibold text-gray-800">Սեփականության իրավունքի փոխանցման վճար՝ յուրաքանչյուր պայմանագրի մասով անկախ դրա գույքերի քանակից</td>
                    <td className="p-3">10,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-gray-800">Լիզինգի պայմանների վերանայում</td>
                    <td className="p-3">15,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="bg-purple-50/30">
                    <td className="p-3 font-semibold text-gray-800">Ենթավարձակալությամբ տրամադրելու համաձայնություն</td>
                    <td className="p-3">50,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-gray-800">Լիզինգի առարկայի տարեկան ապահովագրություն</td>
                    <td className="p-3">Լիզինգի ողջ ժամկետի ընթացքում՝ լիզինգի մնացորդային արժեքի հիման վրա</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 pt-2">
              Լիզինգի տրամադրման վերջնական պայմանները, մասնավորապես մարման ժամկետը և տոկոսադրույքը կախված են Լիզինգի առարկայի տեսակից, մատակարարից, բիզնեսի առանձնահատկություններից և այլ ռիսկերից:
            </p>
          </div>
        </div>

        {/* Accordion 2 */}
        <div className="rounded-xl border border-gray-200 p-4 shadow-sm mb-4 flex items-center justify-between cursor-pointer hover:border-purple-300 transition">
          <div className="flex items-center gap-3 text-purple-700 font-bold text-sm sm:text-base">
            <ChevronDown size={18} />
            <span>ՀՀ Կառավարության Տնտեսության Արդիականացման Նպատակային ծրագրի ներքո արտադրողականության խթանմանն ուղղված լիզինգ (գործելու է մինչև 31.12.2026թ.)</span>
          </div>
        </div>

        {/* Accordion 3 */}
        <div className="rounded-xl border border-gray-200 p-4 shadow-sm mb-12 flex items-center justify-between cursor-pointer hover:border-purple-300 transition">
          <div className="flex items-center gap-3 text-purple-700 font-bold text-sm sm:text-base">
            <ChevronDown size={18} />
            <span>Լիզինգ՝ գյուղատնտեսական տեխնիկայի ձեռքբերման նպատակով</span>
          </div>
        </div>
      </main>

       {/* ================= Footer Section ================= */}
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