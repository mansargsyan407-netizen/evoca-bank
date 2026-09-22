import React from 'react';
import { Link } from 'react-router-dom';

const Csr = () => {
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
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="text-xs text-gray-400 mb-8 flex items-center space-x-2">
          <Link to="/" className="hover:underline">
            <svg className="w-3.5 h-3.5 inline-block" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <span>›</span>
          <span>Մեր մասին</span>
          <span>›</span>
          <span>Evoca-ի մասին</span>
          <span>›</span>
          <span className="text-gray-600 font-medium">CSR</span>
        </nav>

        {/* Hero Section Banner */}
        <div className="relative bg-[#f6f5fa] rounded-3xl overflow-hidden mb-16 flex flex-col md:flex-row items-stretch">
          {/* Ձախ կողմի տեքստը */}
          <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center z-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Կորպորատիվ<br />
              Սոցիալական<br />
              Պատասխանատվություն
            </h1>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Մենք մեծ կարևորություն ենք տալիս CSR-ին՝ ապահովելով մեր գործունեության դրական ազդեցությունը թե՛ հասարակության, թե՛ շրջակա միջավայրի վրա:
            </p>
          </div>

          {/* Աջ կողմի նկարը */}
          <div className="md:w-1/2 bg-[#8a33fd] relative flex items-center justify-center p-6 min-h-[300px]">
            <img
              src="https://www.evoca.am/images-cache/menu/1/17108330711252/780x585.png"
              alt="CSR Icon"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>

        {/* Տեքստային բովանդակություն */}
        <div className="max-w-4xl space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
          <p>
            <strong className="text-purple-700 font-bold">Evocabank</strong>-ում Կորպորատիվ սոցիալական պատասխանատվությունը կարևորագույն արժեք է, որն արտացոլվում է Բանկի գրեթե բոլոր նախաձեռնություններում: Բանկը շարունակաբար աջակցություն է ցուցաբերում հանրության տարբեր խմբերին և հասարակական նախաձեռնություններին հետևյալ ոլորտներում՝
          </p>

          <ul className="space-y-4 pt-2 pl-2">
            <li className="flex items-start">
              <span className="w-2.5 h-2.5 bg-purple-600 rounded-full mt-2 mr-3 shrink-0"></span>
              <span>Նորագույն տեխնոլոգիաների զարգացում,</span>
            </li>
            <li className="flex items-start">
              <span className="w-2.5 h-2.5 bg-purple-600 rounded-full mt-2 mr-3 shrink-0"></span>
              <span>Երիտասարդության կրթական, գիտական և մշակութային նախաձեռնություններ,</span>
            </li>
            <li className="flex items-start">
              <span className="w-2.5 h-2.5 bg-purple-600 rounded-full mt-2 mr-3 shrink-0"></span>
              <span>Հասարակական կարևոր նշանակություն ունեցող նախաձեռնություններ,</span>
            </li>
            <li className="flex items-start">
              <span className="w-2.5 h-2.5 bg-purple-600 rounded-full mt-2 mr-3 shrink-0"></span>
              <span>Հասարակության առավել խոցելի խմբեր, մասնավորապես՝ ծնողազուրկ կամ հատուկ խնամքի տակ գտնվող երեխաներ:</span>
            </li>
          </ul>
        </div>
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

export default Csr;