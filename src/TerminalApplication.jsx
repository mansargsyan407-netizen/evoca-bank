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

export default function TerminalApplication() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-16">
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
            className="px-8 py-3.5 hover:bg-purple-800/50 cursor-pointer"
          >
            Սակագներ
          </Link>
          <Link
            to="/business/terminal-application"
            className="bg-purple-950/60 px-8 py-3.5 border-b-2 border-white cursor-pointer"
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
      <main className="mx-auto max-w-4xl px-4 py-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <Home size={14} />
          <ChevronRight size={12} />
          <span>Բիզնես</span>
          <ChevronRight size={12} />
          <span>Դիջիթալ</span>
          <ChevronRight size={12} />
          <span className="text-gray-800 font-medium">Տերմինալի տեղադրման հայտ</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          Տերմինալի տեղադրման հայտ
        </h1>

        {/* Form Container Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-[#6a0dad] mb-8">
            V-POS, POS կամ mPOS տերմինալի տեղադրման հայտ
          </h2>

          <form className="space-y-6 text-xs sm:text-sm">
            {/* Անուն Ազգանուն */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                Անուն Ազգանուն
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition"
                  />
                  <span className="text-[10px] text-gray-400 italic mt-1 block">Անուն</span>
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition"
                  />
                  <span className="text-[10px] text-gray-400 italic mt-1 block">Ազգանուն</span>
                </div>
              </div>
            </div>

            {/* Հեռախոսի համար */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                Հեռախոսի համար
              </label>
              <div className="flex border border-gray-200 rounded-lg overflow-hidden focus-within:border-purple-600 transition">
                <div className="bg-gray-50 border-r border-gray-200 px-3 flex items-center gap-1 text-xs text-gray-600">
                  <span className="w-4 h-3 bg-red-600 inline-block relative overflow-hidden rounded-sm">
                    <span className="bg-blue-600 h-1/3 w-full block"></span>
                    <span className="bg-orange-400 h-1/3 w-full block"></span>
                  </span>
                  <span>+374</span>
                  <ChevronDown size={12} />
                </div>
                <input
                  type="tel"
                  className="w-full p-3 outline-none"
                />
              </div>
            </div>

            {/* Կազմակերպության անվանում */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                Կազմակերպության անվանում <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition"
              />
            </div>

            {/* ՀՎՀՀ */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                ՀՎՀՀ <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition"
              />
            </div>

            {/* Կազմակերպության ստեղծման ամսաթիվ */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                Կազմակերպության ստեղծման ամսաթիվ օր/ամիս/տարի <span className="text-red-500">*</span>
              </label>
              <div className="relative max-w-xs">
                <input
                  type="text"
                  defaultValue="20-Sep-2026"
                  required
                  className="w-full border border-gray-200 rounded-lg p-3 pr-10 outline-none focus:border-purple-600 transition"
                />
                <Calendar size={18} className="absolute right-3 top-3.5 text-gray-400 cursor-pointer" />
              </div>
              <span className="text-[10px] text-gray-400 italic mt-1 block">dd-MMM-yyyy</span>
            </div>

            {/* Իրավաբանական հասցե */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                Իրավաբանական հասցե
              </label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition mb-1"
              />
              <span className="text-[10px] text-gray-400 italic mb-4 block">Փողոցի անուն, տան համար, բնակարանի համար</span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition"
                  />
                  <span className="text-[10px] text-gray-400 italic mt-1 block">Մարզ</span>
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition"
                  />
                  <span className="text-[10px] text-gray-400 italic mt-1 block">Քաղաք</span>
                </div>
              </div>

              <div className="max-w-xs">
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition"
                />
                <span className="text-[10px] text-gray-400 italic mt-1 block">Փոստային կոդ</span>
              </div>
            </div>

            {/* Տնօրենի Անուն Ազգանուն */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                Տնօրենի Անուն Ազգանուն
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition"
                  />
                  <span className="text-[10px] text-gray-400 italic mt-1 block">Անուն</span>
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition"
                  />
                  <span className="text-[10px] text-gray-400 italic mt-1 block">Ազգանուն</span>
                </div>
              </div>
            </div>

            {/* Տնօրենի անձնագրի համարը */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                Տնօրենի անձնագրի համարը <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition"
              />
            </div>

            {/* Անձնագրի տրման ամսաթիվը */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                Անձնագրի տրման ամսաթիվը <span className="text-red-500">*</span>
              </label>
              <div className="relative max-w-xs">
                <input
                  type="text"
                  defaultValue="20-Sep-2026"
                  required
                  className="w-full border border-gray-200 rounded-lg p-3 pr-10 outline-none focus:border-purple-600 transition"
                />
                <Calendar size={18} className="absolute right-3 top-3.5 text-gray-400 cursor-pointer" />
              </div>
              <span className="text-[10px] text-gray-400 italic mt-1 block">dd-MMM-yyyy</span>
            </div>

            {/* Ում կողմից է տրված */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                Ում կողմից է տրված <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition"
              />
            </div>

            {/* Խնդրում ենք նշել իրավասու կոնտակտային անձի հեռախոսահամարները */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                Խնդրում ենք նշել իրավասու կոնտակտային անձի հեռախոսահամարները <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition"
              />
            </div>

            {/* Խնդրում ենք նշել իրավասու կոնտակտային անձի էլ. փոստի հասցեն */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                Խնդրում ենք նշել իրավասու կոնտակտային անձի էլ. փոստի հասցեն
              </label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition"
              />
            </div>

            {/* Կազմակերպության իրավական ձևը */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                Կազմակերպության իրավական ձևը <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap items-center gap-6 text-xs text-gray-600">
                {["ԱՁ", "ՍՊԸ", "ՓԲԸ", "ԲԲԸ", "Այլ"].map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="legalForm" className="accent-purple-700" />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Պահանջվող տերմինալի ձևը */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                Պահանջվող տերմինալի ձևը <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap items-center gap-6 text-xs text-gray-600">
                {["POS", "ՀԴՄ POS", "V-POS", "M-POS"].map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="terminalType" className="accent-purple-700" />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Առևտրային և սպասարկման կետի անվանում (հայերեն և անգլերեն) */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                Առևտրային և սպասարկման կետի անվանում (հայերեն և անգլերեն) <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={3}
                required
                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition resize-y"
              />
            </div>

            {/* Առևտրային և սպասարկման կետի հասցե */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                Առևտրային և սպասարկման կետի հասցե
              </label>
              <textarea
                rows={3}
                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition resize-y"
              />
            </div>

            {/* Ինտերնետային կայքի անվանում (V-POS-ի դեպքում) */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                Ինտերնետային կայքի անվանում (V-POS-ի դեպքում)
              </label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition"
              />
            </div>

            {/* Վերջին տարվա,ամսվա միջին շրջանառությունը ՀՀ դրամով */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                Վերջին տարվա,ամսվա միջին շրջանառությունը ՀՀ դրամով
              </label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition"
              />
            </div>

            {/* Կազմակերպության կողմից վաճառվող ապրանքների կամ ծառայությունների համառոտ նկարագիրը */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                Կազմակերպության կողմից վաճառվող ապրանքների կամ ծառայությունների համառոտ նկարագիրը <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={3}
                required
                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition resize-y"
              />
            </div>

            {/* Արդյո՞ք նախկինում վճարումներն ընդունել եք վճարային քարտերով... */}
            <div>
              <label className="block font-bold text-gray-700 mb-2 leading-relaxed">
                Արդյո՞ք նախկինում վճարումներն ընդունել եք վճարային քարտերով: Եթե այո, խնդրում ենք նշել նաև սպասարկող կազմակերպության անվանումը և վերջինիս հետ պայմանագիրը խզելու պատճառները:
              </label>
              <textarea
                rows={3}
                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition resize-y"
              />
            </div>

            {/* Որքան ամսական իրացում եք կանխատեսում վճարային քարտերով վճարումներով */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                Որքան ամսական իրացում եք կանխատեսում վճարային քարտերով վճարումներով <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition"
              />
            </div>

            {/* Նշումների համար */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                Նշումների համար
              </label>
              <textarea
                rows={3}
                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-600 transition resize-y"
              />
            </div>

            {/* Checkbox agreement */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                required
                className="mt-1 accent-purple-700 cursor-pointer"
              />
              <span className="text-[11px] text-gray-500 leading-normal">
                Սույն հայտը լրացնելով՝ հավաստում եմ, որ դրանում ներկայացված տվյալները ստույգ են, լրիվ և արժանահավատ: Տալիս եմ իմ համաձայնությունը, որպեսզի Բանկը ստուգի դրանց իսկությունը:[cite: 38]
              </span>
            </div>

            {/* Submit Button */}
            <div className="pt-6 text-center">
              <button
                type="submit"
                className="bg-[#6a0dad] hover:bg-purple-800 text-white font-bold text-sm px-10 py-3 rounded-xl shadow-lg transition transform active:scale-95"
              >
                Ուղարկել
              </button>
            </div>
          </form>
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