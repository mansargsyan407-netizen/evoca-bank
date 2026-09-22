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
  MessageCircle,
} from "lucide-react";

export default function TradeFinance() {
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

      {/* Sub-banner section */}
      <div className="bg-[#6a0dad] text-white">
        <div className="mx-auto flex max-w-7xl items-center text-sm font-bold">
          <div className="bg-purple-950/60 px-8 py-3.5 border-b-2 border-white cursor-pointer">
            Երաշխիք
          </div>
       <Link 
  to="/business/factoring" 
  className="px-8 py-3.5 hover:bg-purple-800/50 cursor-pointer block"
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

      {/* Main Content Container */}
      <main className="mx-auto max-w-5xl px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <Home size={14} />
          <ChevronRight size={12} />
          <span>Բիզնես</span>
          <ChevronRight size={12} />
          <span>Առևտրի ֆինանսավորում</span>
          <ChevronRight size={12} />
          <span className="text-gray-800 font-medium">Երաշխիք</span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Երաշխիք
        </h1>

        {/* Description Section */}
        <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4 mb-8">
          <p>
            Բանկային երաշխիքը անկախ, անվերապահ և գրավոր պարտավորություն է, որը
            բանկը ստանձնում է իր հաճախորդի (Applicant) հանձնարարությամբ հօգուտ
            երրորդ կողմի (Beneficiary)՝ վճարելու երաշխիքով սահմանված գումարը
            ներկայացված պահանջի դիմաց, եթե պահանջը համապատասխանում է երաշխիքի
            պայմաններին։[cite: 45]
          </p>
          <p>
            Բանկային երաշխիքները, որպես կանոն, կարգավորվում են{" "}
            <span className="text-purple-700 font-bold underline cursor-pointer">
              Միջազգային առևտրի պալատի (ICC) կողմից ընդունված URDG 758
              կանոններով
            </span>
            , եթե երաշխիքում այլ բան նախատեսված չէ։[cite: 45]
          </p>
        </div>

        {/* Section Heading */}
        <h2 className="text-sm sm:text-base font-bold text-purple-800 mb-6 uppercase tracking-wide">
          Բանկային երաշխիքների հիմնական տեսակները[cite: 45]
        </h2>

        {/* List of Guarantee Types */}
        <div className="space-y-6 mb-12">
          {/* 1. Կանխավճարային երաշխիք */}
          <div>
            <div className="flex items-center gap-2 text-purple-800 font-bold text-sm mb-2">
              <span className="text-purple-700 text-lg">•</span>
              <span>Կանխավճարային երաշխիք</span>[cite: 45]
            </div>
            <div className="bg-purple-50/50 border border-purple-100 rounded-xl p-4 text-xs text-gray-600 leading-relaxed">
              <p className="font-semibold text-gray-500 italic mb-1">
                (Advance Payment Guarantee)[cite: 45]
              </p>
              <p>
                Տրվում է այն դեպքերում, երբ գնորդը (Buyer) մատակարարին (Seller)
                տրամադրում է կանխավճար մինչև ապրանքի մատակարարումը կամ ծառայության
                մատուցումը։[cite: 45]
              </p>
              <p>
                Երաշխիքը ապահովում է կանխավճարի վերադարձը բենեֆիցիարին, եթե դիմողը
                չի կատարում հիմնական պայմանագրով նախատեսված իր
                պարտավորությունները։[cite: 45]
              </p>
            </div>
          </div>

          {/* 2. Պարտավորությունների կատարման երաշխիք */}
          <div>
            <div className="flex items-center gap-2 text-purple-800 font-bold text-sm mb-2">
              <span className="text-purple-700 text-lg">•</span>
              <span>Պարտավորությունների կատարման երաշխիք</span>[cite: 45]
            </div>
            <div className="bg-purple-50/50 border border-purple-100 rounded-xl p-4 text-xs text-gray-600 leading-relaxed">
              <p className="font-semibold text-gray-500 italic mb-1">
                (Performance Guarantee / Performance Bond)[cite: 45]
              </p>
              <p>
                Տրվում է պայմանագրով նախատեսված պարտավորությունների պատշաճ
                կատարումն ապահովելու նպատակով։[cite: 45]
              </p>
              <p>
                Բանկը պարտավորվում է վճարել բենեֆիցիարին երաշխիքով սահմանված
                գումարը պայմանագրային պարտավորությունների չկատարման կամ ոչ
                պատշաճ կատարման դեպքում։[cite: 45]
              </p>
            </div>
          </div>

          {/* 3. Մրցույթային երաշխիք */}
          <div>
            <div className="flex items-center gap-2 text-purple-800 font-bold text-sm mb-2">
              <span className="text-purple-700 text-lg">•</span>
              <span>Մրցույթային երաշխիք</span>[cite: 45]
            </div>
            <div className="bg-purple-50/50 border border-purple-100 rounded-xl p-4 text-xs text-gray-600 leading-relaxed">
              <p className="font-semibold text-gray-500 italic mb-1">
                (Tender / Bid Guarantee)[cite: 45]
              </p>
              <p>
                Տրվում է մրցույթներին կամ տենդերներին մասնակցելու, ինչպես նաև
                պայմանագրի, որակավորման, կանխավճարի ապահովման նպատակով։[cite: 45]
              </p>
            </div>
          </div>

          {/* 4. Վճարման երաշխիք */}
          <div>
            <div className="flex items-center gap-2 text-purple-800 font-bold text-sm mb-2">
              <span className="text-purple-700 text-lg">•</span>
              <span>Վճարման երաշխիք</span>[cite: 46]
            </div>
            <div className="bg-purple-50/50 border border-purple-100 rounded-xl p-4 text-xs text-gray-600 leading-relaxed">
              <p className="font-semibold text-gray-500 italic mb-1">
                (Payment Guarantee)[cite: 46]
              </p>
              <p>
                Կիրառվում է բաց հաշվով վճարման (open account) առևտրային
                գործարքներում։[cite: 46]
              </p>
              <p>
                Երաշխիքը ապահովում է բենեֆիցիարի վճարումը այն դեպքում, երբ դիմողը
                չի կատարում պայմանագրով սահմանված վճարային պարտավորությունները։[cite: 46]
              </p>
            </div>
          </div>

          {/* 5. Մաքսային երաշխիք */}
          <div>
            <div className="flex items-center gap-2 text-purple-800 font-bold text-sm mb-2">
              <span className="text-purple-700 text-lg">•</span>
              <span>Մաքսային երաշխիք</span>[cite: 46]
            </div>
            <div className="bg-purple-50/50 border border-purple-100 rounded-xl p-4 text-xs text-gray-600 leading-relaxed">
              <p className="font-semibold text-gray-500 italic mb-1">
                (Customs Guarantee)[cite: 46]
              </p>
              <p>
                Տրվում է մաքսային մարմինների օգտին և ապահովում է մաքսային
                տուրքերի, հարկերի և այլ վճարների կատարումը՝ մաքսային
                օրենսդրությամբ նախատեսված դեպքերում։[cite: 46]
              </p>
              <p>
                Մաքսային երաշխիքները կարող են կարգավորվել ինչպես ազգային
                օրենսդրությամբ, այնպես էլ համապատասխան միջազգային կանոններով։[cite: 46]
              </p>
            </div>
          </div>

          {/* 6. Պահուստային ակրեդիտիվ */}
          <div>
            <div className="flex items-center gap-2 text-purple-800 font-bold text-sm mb-2">
              <span className="text-purple-700 text-lg">•</span>
              <span>Պահուստային ակրեդիտիվ</span>[cite: 46]
            </div>
            <div className="bg-purple-50/50 border border-purple-100 rounded-xl p-4 text-xs text-gray-600 leading-relaxed">
              <p className="font-semibold text-gray-500 italic mb-1">
                (Standby Letter of Credit - SBLC)[cite: 46]
              </p>
              <p>
                Պահուստային ակրեդիտիվը անկախ վճարային գործիք է, որը իր տնտեսական
                էությամբ համարժեք է բանկային երաշխիքին։[cite: 46]
              </p>
              <p>
                Այն սովորաբար կարգավորվում է ICC ISP98 կամ UCP 600 կանոններով և
                կիրառվում է այն դեպքերում, երբ բանկային երաշխիքի թողարկումը
                իրավական կամ գործառնական տեսանկյունից սահմանափակ է։[cite: 46]
              </p>
              <p>
                SBLC-ի հիման վրա վճարումը կատարվում է միայն բենեֆիցիարի կողմից
                պայմաններին համապատասխան պահանջ ներկայացնելու դեպքում։[cite: 46]
              </p>
            </div>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="mb-12">
          <h2 className="text-sm sm:text-base font-bold text-purple-800 mb-4 uppercase">
            Բանկային երաշխիքների առավելությունները[cite: 46]
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-purple-700 font-bold">•</span>
              <span>Նվազեցնում են առևտրային և ֆինանսական ռիսկերը,</span>[cite: 46]
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-700 font-bold">•</span>
              <span>ապահովում են գործարքների վստահելի իրականացումը,</span>[cite: 46]
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-700 font-bold">•</span>
              <span>հնարավորություն են տալիս կիրառել հետաձգված վճարման պայմաններ,</span>[cite: 46]
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-700 font-bold">•</span>
              <span>նպաստում են գործընկերների միջև երկարաժամկետ և վստահելի համագործակցությանը,</span>[cite: 46]
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-700 font-bold">•</span>
              <span>հանդիսանում են վարկային միջոցներին համեմատ երկրորդային և ծախսաարդյունավետ գործիք:</span>[cite: 46]
            </li>
          </ul>
        </div>

        {/* Conditions Accordion Section */}
        <div>
          <h2 className="text-sm sm:text-base font-bold text-gray-900 uppercase mb-6">
            Անհրաժեշտ տեղեկատվություն[cite: 47]
          </h2>

          {/* Accordion 1 - Միջազգային Բանկային Երաշխիքներ (Open) */}
          <div className="rounded-2xl border border-purple-300 p-6 shadow-sm mb-4">
            <div className="flex items-center justify-between cursor-pointer border-b border-gray-100 pb-4 mb-4">
              <div className="flex items-center gap-3 text-purple-700 font-bold text-base sm:text-lg">
                <ChevronUp size={20} />
                <span>Միջազգային Բանկային Երաշխիքներ</span>[cite: 47]
              </div>
            </div>

            {/* Terms Table */}
            <div className="overflow-x-auto border border-purple-100 rounded-lg">
              <table className="w-full text-left text-xs sm:text-sm text-gray-700">
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-purple-50/20">
                    <td className="p-3 font-semibold text-gray-600 w-8">1.</td>
                    <td className="p-3 font-semibold text-gray-800 w-1/3">Արժույթ</td>[cite: 47]
                    <td className="p-3">ԱՄՆ դոլար, Եվրո, ՌԴ ռուբլի կամ Բանկի համար ընդունելի այլ արտարժույթ</td>[cite: 47]
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-gray-600">2.</td>
                    <td className="p-3 font-semibold text-gray-800">Գումարային սահմանաչափ</td>[cite: 47]
                    <td className="p-3">Պայմանագրային</td>[cite: 47]
                  </tr>
                  <tr className="bg-purple-50/20">
                    <td className="p-3 font-semibold text-gray-600">3.</td>
                    <td className="p-3 font-semibold text-gray-800">Ժամկետներ</td>[cite: 47]
                    <td className="p-3">Պայմանագրային</td>[cite: 47]
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-gray-600">4.</td>
                    <td className="p-3 font-semibold text-gray-800">
                      Երաշխիքի թողարկում և/կամ հաստատում (տարեկան)[cite: 47]
                    </td>
                    <td className="p-3">Պայմանագրային</td>[cite: 47]
                  </tr>
                  <tr className="bg-purple-50/20">
                    <td className="p-3 font-semibold text-gray-600">5.</td>
                    <td className="p-3 font-semibold text-gray-800">
                      Երաշխիքի պայմանների փոփոխում (ա.թ. երկարաձգում)[cite: 47]
                    </td>
                    <td className="p-3">0.15%, նվազ. 50,000 ՀՀ դրամ</td>[cite: 47]
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-gray-600">6.</td>
                    <td className="p-3 font-semibold text-gray-800">Երաշխիքի ծանուցում</td>[cite: 47]
                    <td className="p-3">0.15%, նվազ. 50,000 ՀՀ դրամ</td>[cite: 47]
                  </tr>
                  <tr className="bg-purple-50/20">
                    <td className="p-3 font-semibold text-gray-600">7.</td>
                    <td className="p-3 font-semibold text-gray-800">
                      Բանկի կողմից թողարկված և/կամ հաստատված երաշխիքով վճարում[cite: 47]
                    </td>
                    <td className="p-3">0.5%, նվազ. 50,000 ՀՀ դրամ</td>[cite: 47]
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-gray-600">8.</td>
                    <td className="p-3 font-semibold text-gray-800">Երաշխիքի հետ կանչում</td>[cite: 47]
                    <td className="p-3">50,000 ՀՀ դրամ</td>[cite: 47]
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Accordion 2 - Տեղական Բանկային Երաշխիքներ */}
          <div className="rounded-xl border border-gray-200 p-4 shadow-sm mb-3 flex items-center justify-between cursor-pointer hover:border-purple-300 transition">
            <div className="flex items-center gap-3 text-purple-700 font-bold text-xs sm:text-sm">
              <ChevronDown size={18} />
              <span>Տեղական Բանկային Երաշխիքներ</span>[cite: 47]
            </div>
          </div>

          {/* Accordion 3 - Առաջնակարգ ապահովվածությամբ... */}
          <div className="rounded-xl border border-gray-200 p-4 shadow-sm mb-3 flex items-center justify-between cursor-pointer hover:border-purple-300 transition">
            <div className="flex items-center gap-3 text-purple-700 font-bold text-xs sm:text-sm">
              <ChevronDown size={18} />
              <span>
                Առաջնակարգ ապահովվածությամբ առանց վարկունակության գնահատման Բանկային երաշխիքներ[cite: 47]
              </span>
            </div>
          </div>

          {/* Accordion 4 - Դրամական հոսքերով ապահովված... */}
          <div className="rounded-xl border border-gray-200 p-4 shadow-sm mb-3 flex items-center justify-between cursor-pointer hover:border-purple-300 transition">
            <div className="flex items-center gap-3 text-purple-700 font-bold text-xs sm:text-sm">
              <ChevronDown size={18} />
              <span>
                Դրամական հոսքերով ապահովված առանց վարկունակության գնահատման Բանկային երաշխիքներ[cite: 47]
              </span>
            </div>
          </div>

          {/* Accordion 5 - Անշարժ գույքով ապահովված... */}
          <div className="rounded-xl border border-gray-200 p-4 shadow-sm mb-12 flex items-center justify-between cursor-pointer hover:border-purple-300 transition">
            <div className="flex items-center gap-3 text-purple-700 font-bold text-xs sm:text-sm">
              <ChevronDown size={18} />
              <span>Անշարժ գույքով ապահովված Բանկային երաշխիքներ</span>[cite: 47]
            </div>
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