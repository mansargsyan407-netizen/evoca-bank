import React from 'react';
import { Link } from 'react-router-dom';

const FinancialGroup = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Վերևի մենյու (Purple Header Menu) */}
        <header className="w-full bg-white text-gray-800 border-b border-gray-100">
                   
                 
           
                   {/* 2. Լոգոյի և հիմնական մենյուի շերտը (Main Header Layer) */}
                   <div className="py-4 px-4 md:px-8">
                     <div className="max-w-7xl mx-auto flex items-center justify-between">
                       
                       {/* Լոգո և ենթաբաժիններ */}
                       <div className="flex items-center space-x-8 md:space-x-12">
                         <Link to="/" className="flex items-center gap-1 text-2xl font-black">
                           <span className="text-purple-700">evo</span>
                           <span className="text-gray-400">ca</span>
                         </Link>
           
                         <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold">
                           <span className="text-purple-700 cursor-pointer border-b-2 border-purple-700 pb-1">
                             Evoca-ի մասին
                           </span>
           <Link to="/rates" className="text-gray-800 hover:text-purple-700 cursor-pointer transition">
             Սակագներ
           </Link>
                          <Link
             to="/reports"
             className="text-gray-800 hover:text-purple-700 cursor-pointer transition"
           >
             Հաշվետվություններ
           </Link>
                         <Link
             to="/announcements"
             className="text-gray-800 hover:text-purple-700 cursor-pointer transition font-semibold"
           >
             Հայտարարություններ
           </Link>
                         </nav>
                       </div>
           
                     
           
                     </div>
                   </div>
           
                   {/* 3. Մանուշակագույն ենթամենյու (Purple Sub-Menu) */}
                   <nav className="bg-[#6b21a8] text-white text-xs md:text-sm font-medium py-3 px-4 overflow-x-auto shadow-md">
                     <div className="max-w-6xl mx-auto flex space-x-6 whitespace-nowrap justify-start md:justify-center">
                       <Link to="/about" className="bg-purple-900 px-3 py-1 rounded font-bold">
                         Ընդհանուր
                       </Link>
                       <Link to="/structure" className="hover:text-purple-200 transition py-1">
                         Կառուցվածք
                       </Link>
                       <Link to="/shareholders" className="hover:text-purple-200 transition py-1">
                         Բաժնետերեր
                       </Link>
                       <Link to="/management" className="hover:text-purple-200 transition py-1">
                         Ղեկավարություն
                       </Link>
                       <Link to="/partners" className="hover:text-purple-200 transition py-1">
                         Գործընկերներ
                       </Link>
                       <Link to="/awards" className="hover:text-purple-200 transition py-1">
                         Մրցանակներ
                       </Link>
                       <Link to="/csr" className="hover:text-purple-200 transition py-1">
                         CSR
                       </Link>
                       <Link to="/financial-group" className="hover:text-purple-200 transition py-1">
                         Էվոկա Ֆինանսական խումբ
                       </Link>
                     </div>
                   </nav>
           
                 </header>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-900">
          Էվոկա Ֆինանսական խումբ
        </h1>

        {/* Տեքստային մաս */}
        <div className="space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12">
          <p>
            ՀՀ Կենտրոնական բանկի խորհրդի 30.06.2025թ. թիվ 05 ԲԳ Ա որոշմամբ <strong className="font-bold text-gray-900">Evocabank</strong>-ը («ԷՎՈԿԱԲԱՆԿ» ԲԲԸ) և <strong className="font-bold text-gray-900">WiLco</strong>-ն («Վիլկո» ՍՊԸ) միավորվում են՝ դառնալով մեկ ֆինանսական խումբ՝ <strong className="font-bold text-gray-900">Evoca</strong> անվամբ:
          </p>
          <p>
            <strong className="font-bold text-gray-900">Evocabank</strong>-ը նշանակվել է <strong className="font-bold text-gray-900">Evoca</strong> ֆինանսական խմբի պատասխանատու անձ:
          </p>
          <p>
            <strong className="font-bold text-gray-900">WiLco</strong> կապիտալի կառավարման ընկերության մասին ամբողջական տեղեկատվությունը՝{' '}
            <a href="#" className="text-purple-600 font-bold hover:underline">
              այստեղ
            </a>:
          </p>
        </div>

        {/* Կառուցվածքային սխեմայի բաժին */}
        
          {/* Եթե ցանկանում եք օգտագործել բնօրինակ նկարը */}
        <img src="https://www.evoca.am/file_manager/Evoca%20financia…6%20%D5%AD%D5%B8%D6%82%D5%B4%D5%A2%20Armenian.png" alt="" />
     
      </div>
         {/* 6. Footer Section */}
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
            <p className="hover:text-purple-700 cursor-pointer">Dibrary</p>
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

export default FinancialGroup;