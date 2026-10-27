import React from 'react';
import { Link } from 'react-router-dom';
import { Tr, useLang } from './i18n';

const Structure = () => {
  const { t } = useLang();

  return (
    <Tr>
      <div className="bg-white min-h-screen text-gray-800">
        {/* ================= HEADER SECTION ================= */}
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
                    {t('Evoca-ի մասին')}
                  </span>
                  <Link to="/rates" className="text-gray-800 hover:text-purple-700 cursor-pointer transition">
                    {t('Սակագներ')}
                  </Link>
                  <Link
                    to="/reports"
                    className="text-gray-800 hover:text-purple-700 cursor-pointer transition"
                  >
                    {t('Հաշվետվություններ')}
                  </Link>
                  <Link
                    to="/announcements"
                    className="text-gray-800 hover:text-purple-700 cursor-pointer transition font-semibold"
                  >
                    {t('Հայտարարություններ')}
                  </Link>
                </nav>
              </div>

            </div>
          </div>

          {/* 3. Մանուշակագույն ենթամենյու (Purple Sub-Menu) */}
          <nav className="bg-[#6b21a8] text-white text-xs md:text-sm font-medium py-3 px-4 overflow-x-auto shadow-md">
            <div className="max-w-6xl mx-auto flex space-x-6 whitespace-nowrap justify-start md:justify-center">
              <Link to="/about" className="hover:text-purple-200 transition py-1">
                {t('Ընդհանուր')}
              </Link>
              <Link to="/structure" className="bg-purple-900 px-3 py-1 rounded font-bold">
                {t('Կառուցվածք')}
              </Link>
              <Link to="/shareholders" className="hover:text-purple-200 transition py-1">
                {t('Բաժնետերեր')}
              </Link>
              <Link to="/management" className="hover:text-purple-200 transition py-1">
                {t('Ղեկավարություն')}
              </Link>
              <Link to="/partners" className="hover:text-purple-200 transition py-1">
                {t('Գործընկերներ')}
              </Link>
              <Link to="/awards" className="hover:text-purple-200 transition py-1">
                {t('Մրցանակներ')}
              </Link>
              <Link to="/csr" className="hover:text-purple-200 transition py-1">
                CSR
              </Link>
              <Link to="/financial-group" className="hover:text-purple-200 transition py-1">
                {t('Էվոկա Ֆինանսական խումբ')}
              </Link>
            </div>
          </nav>

        </header>

        {/* Breadcrumb Navigation & Main Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          {/* Breadcrumb */}
          <nav className="text-xs text-gray-500 mb-6 flex items-center space-x-2">
            <span>&gt;</span>
            <Link to="/" className="hover:underline">
              {t('Մեր մասին')}
            </Link>
            <span>&gt;</span>
            <Link to="/" className="hover:underline">
              {t('Evoca-ի մասին')}
            </Link>
            <span>&gt;</span>
            <span className="font-semibold text-gray-700">{t('Կառուցվածք')}</span>
          </nav>

          {/* Էջի Վերնագիր */}
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-slate-800">
            {t('Բանկի կառուցվածքը')}
          </h1>

          {/* Կառուցվածքի Նկարը */}
          <div className="flex justify-center items-center my-6">
            <img
              src="https://www.evoca.am/file_manager/structure/Organizational%20Structure-arm.png"
              alt="Բանկի կառավարման կազմակերպական կառուցվածք"
              className="w-full max-w-5xl h-auto object-contain rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* 6. Footer Section */}
        <footer className="w-full bg-[#f8f8fa] text-[#2d2d2d] pt-10 pb-6 px-6 border-t border-gray-100 text-xs">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end pb-4 border-b border-gray-200 gap-4">
            <div className="text-gray-400 text-[11px]">
              {t('Թարմացվել է`')} 31/08/2026 17:46
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
                {t('ք. Երևան, 0010,')}<br />
                {t('Հանրապետության 44/2')}
              </p>
              <p className="text-gray-500 leading-normal text-[11px]">
                {t('Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից')}
              </p>
              <p className="text-[10px] text-gray-400 pt-1">
                1990 - 2026, © {t('ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ')}
              </p>
            </div>

            {/* Column 2 */}
            <div className="space-y-2">
              <h4 className="font-bold text-gray-900 mb-3 text-xs">{t('Բանկի մասին')}</h4>
              <p className="hover:text-purple-700 cursor-pointer">{t('Մեր մասին')}</p>
              <p className="hover:text-purple-700 cursor-pointer">{t('Ղեկավարություն')}</p>
              <p className="hover:text-purple-700 cursor-pointer">{t('Բաժնետերեր')}</p>
              <p className="hover:text-purple-700 cursor-pointer">{t('Հաշվետվություններ')}</p>
              <p className="hover:text-purple-700 cursor-pointer">{t('Իրավական ակտեր')}</p>
              <p className="hover:text-purple-700 cursor-pointer">{t('Սակագներ')}</p>
              <p className="hover:text-purple-700 cursor-pointer">{t('Օտարվող գույք')}</p>
              <p className="hover:text-purple-700 cursor-pointer">{t('Կառուցապատողներ')}</p>
              <p className="hover:text-purple-700 cursor-pointer">{t('Գործընկեր ավտոսրահներ')}</p>
              <p className="hover:text-purple-700 cursor-pointer">{t('Սակագների արխիվ')}</p>
            </div>

            {/* Column 3 */}
            <div className="space-y-2">
              <h4 className="font-bold text-gray-900 mb-3 text-xs">{t('Օգտակար հղումներ')}</h4>
              <p className="hover:text-purple-700 cursor-pointer leading-tight">
                {t('Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)')}
              </p>
              <p className="hover:text-purple-700 cursor-pointer leading-tight">
                {t('Հաճախորդի ռեզիդենտության չափանիշներ')}
              </p>
              <p className="hover:text-purple-700 cursor-pointer">{t('Կարգավորում')}</p>
              <p className="hover:text-purple-700 cursor-pointer">{t('Գաղտնիության քաղաքականություն')}</p>
              <p className="hover:text-purple-700 cursor-pointer">{t('Ֆին. հաշտարար')}</p>
              <p className="hover:text-purple-700 cursor-pointer leading-tight">
                {t('Ֆինանսական հանցագործությունների կանխարգելում')}
              </p>
              <p className="hover:text-purple-700 cursor-pointer leading-tight">
                {t('Հղումներ Բանկի քարտապանների համար')}
              </p>
            </div>

            {/* Column 4 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-gray-900 text-xs">{t('Այլ հղումներ')}</h4>
                <div className="flex gap-2 text-gray-400 text-xs">
                  <span className="hover:text-purple-600 cursor-pointer">f</span>
                  <span className="hover:text-purple-600 cursor-pointer">📷</span>
                  <span className="hover:text-purple-600 cursor-pointer">p</span>
                  <span className="hover:text-purple-600 cursor-pointer">▶</span>
                  <span className="hover:text-purple-600 cursor-pointer">in</span>
                </div>
              </div>

              <p className="hover:text-purple-700 cursor-pointer">EvocaONLINE</p>
              <p className="hover:text-purple-700 cursor-pointer">{t('Պահատուփեր')}</p>
              <p className="hover:text-purple-700 cursor-pointer">{t('Հաճախ տրվող հարցեր')}</p>
              <p className="hover:text-purple-700 cursor-pointer">{t('Հայտարարություններ')}</p>
              <p className="hover:text-purple-700 cursor-pointer">Dibrary</p>
              <p className="hover:text-purple-700 cursor-pointer">{t('Բուկլետներ')}</p>

              <div className="pt-2 space-y-1">
                <p className="text-[#6b21a8] font-bold hover:underline cursor-pointer">
                  {t('Բանկի հասցեները և աշխատաժամերը')}
                </p>
                <p className="text-[#6b21a8] font-bold hover:underline cursor-pointer">
                  {t('Կապ մեզ հետ')}
                </p>
                <p className="text-[#6b21a8] font-bold text-xs">+374 10 605555</p>
                <p className="text-[#6b21a8] font-extrabold text-sm">8444</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200/60 pt-4 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400">
            <p className="max-w-2xl">
              {t('Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանություն...')}
            </p>
            <div className="flex gap-4">
              <span className="font-bold text-gray-500">arca</span>
              <span className="font-bold text-gray-500">fininfo</span>
            </div>
          </div>

          {/* Floating Online Chat Widget */}
          <div className="fixed bottom-4 right-4 z-50 flex items-center">
            <button className="bg-[#6b21a8] text-white font-bold text-xs px-4 py-2 rounded-l-full shadow-lg hover:bg-purple-800 transition">
              {t('Գրեք մեզ, մենք օնլայն ենք !')}
            </button>
            <div className="bg-purple-500 p-2 rounded-full text-white shadow-lg -ml-2 cursor-pointer">
              💬
            </div>
          </div>
        </footer>
      </div>
    </Tr>
  );
};

export default Structure;