import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tr, useLang } from './i18n';

const Rates = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState('loans-personal');
  const [activeSubLoan, setActiveSubLoan] = useState('evocahome');

  // Աղյուսակի տվյալները (թարգմանվող)
  const evocahomeData = [
    {
      id: 1,
      label: t('Տրամադրման նպատակը'),
      value: t('Շինարարական նյութերի, կենցաղային տեխնիկայի և կահույքի վաճառքով զբաղվող և համագործակցության շրջանակներում գործընկեր հանդիսացող կազմակերպությունների կողմից առաջարկվող ապրանքների ձեռք բերման՝ այդ թվում աշխատանքների, ծառայությունների պատվիրման նպատակով:')
    },
    {
      id: 2,
      label: t('Ովքեր կարող են դիմել'),
      value: t('21-65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք')
    },
    {
      id: 3,
      label: t('Սահմանաչափ'),
      value: '500,000 - 10,000,000 ' + t('ՀՀ դրամ')
    },
    {
      id: 4,
      label: t('Սահմանաչափի տեսակ'),
      value: t('Չվերականգնվող')
    },
    {
      id: 5,
      label: t('Սահմանաչափի տրամադրման եղանակ'),
      value: t('Վարկային սահմանաչափը տրամադրվում է Բանկի կողմից թողարկված հատուկ ARCA վճարային քարտերի միջոցով:')
    },
    {
      id: 6,
      label: t('Արժույթը'),
      value: t('ՀՀ դրամ')
    },
    {
      id: 7,
      label: t('Անվանական տոկոսադրույք'),
      value: '16%'
    },
    {
      id: 8,
      label: t('Փաստացի տոկոսադրույք'),
      value: '17.42%'
    },
    {
      id: 9,
      label: t('Արտոնյալ ժամանակահատված'),
      value: t('Չի տրամադրվում')
    },
    {
      id: 10,
      label: t('Մարման ժամկետ'),
      value: '60 ' + t('ամիս')
    },
    {
      id: 11,
      label: t('Մարման եղանակ'),
      value: t('Անուիտետային')
    },
    {
      id: 12,
      label: t('Քաղվածքի օր'),
      value: t('Մինչև յուրաքանչյուր ամսվա 10-ը')
    },
    {
      id: 13,
      label: t('Վճարման վերջնաժամկետ'),
      value: t('Յուրաքանչյուր ամսվա 16-ը (եթե տվյալ ամսվա 16-ը հանդիսանում է ոչ աշխատանքային օր,ապա վերջնաժամկետ է համարվում հաջորդ աշխատանքային օրը):')
    },
    {
      id: 14,
      label: t('Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր'),
      value: t('Ժամկետանց վարկի համար՝ օրական 0.015%,\nԺամկետանց տոկոսագումարի համար՝ օրական 0.1%:')
    },
    {
      id: 15,
      label: t('Տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ'),
      value: t('Վարկի տրամադրման կամ մերժման որոշումը կայացվում է վայրկյանների ընթացքում:\nՎարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, առավելագույնը 1 (մեկ) աշխատանքային օրվա ընթացքում:')
    }
  ];

  return (
    <Tr>
      <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
        
        {/* ================= HEADER SECTION ================= */}
        <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
          
          {/* 2. Լոգոյի և հիմնական մենյուի շերտը */}
          <div className="py-4 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-8 md:space-x-12">
                <Link to="/" className="flex items-center gap-1 text-2xl font-black">
                  <span className="text-purple-700">evo</span>
                  <span className="text-gray-400">ca</span>
                </Link>

                <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold">
                  <Link to="/about" className="text-gray-800 hover:text-purple-700 transition">
                    {t('Evoca-ի մասին')}
                  </Link>
                  <Link to="/rates" className="text-purple-700 border-b-2 border-purple-700 pb-1 font-bold">
                    {t('Սակագներ')}
                  </Link>
                  <Link
                    to="/reports"
                    className="text-gray-800 hover:text-purple-700 cursor-pointer transition font-semibold"
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

              <div>
                <button className="bg-[#6b21a8] hover:bg-purple-800 text-white text-xs md:text-sm font-bold px-6 py-2.5 rounded-full shadow-md transition">
                  EvocaONLINE
                </button>
              </div>
            </div>
          </div>

          {/* 3. Մանուշակագույն ենթամենյու */}
          <nav className="bg-[#6b21a8] text-white text-xs md:text-sm font-semibold py-3 px-4 shadow-md">
            <div className="max-w-7xl mx-auto flex space-x-4 md:space-x-8 overflow-x-auto whitespace-nowrap">
              <button
                onClick={() => setActiveTab('loans-personal')}
                className={`px-4 py-1 rounded transition ${activeTab === 'loans-personal' ? 'bg-purple-900 text-white font-bold' : 'hover:text-purple-200'}`}
              >
                {t('Վարկեր ֆիզիկական անձանց')}
              </button>
              <Link
                to="/business-loans"
                className={`px-4 py-1 rounded transition flex items-center ${
                  activeTab === 'loans-business'
                    ? 'bg-purple-900 text-white font-bold'
                    : 'hover:text-purple-200'
                }`}
              >
                {t('Վարկեր իրավաբանական անձանց')}
              </Link>
               
              <Link
                to="/fees"
                className={`px-4 py-1 rounded transition flex items-center ${
                  activeTab === 'fees'
                    ? 'bg-purple-900 text-white font-bold'
                    : 'hover:text-purple-200'
                }`}
              >
                {t('Միջնորդավճարների սակագները')}
              </Link>

              <Link
                to="/deposits"
                className={`px-4 py-1 rounded transition flex items-center ${
                  activeTab === 'deposits'
                    ? 'bg-purple-900 text-white font-bold'
                    : 'hover:text-purple-200'
                }`}
              >
                {t('Ավանդների սակագներ')}
              </Link>
              <Link
                to="/archive"
                className={`px-4 py-1 rounded transition flex items-center ${
                  activeTab === 'archive'
                    ? 'bg-purple-900 text-white font-bold'
                    : 'hover:text-purple-200'
                }`}
              >
                {t('Արխիվ')}
              </Link>
            </div>
          </nav>

        </header>

        {/* ================= BREADCRUMBS & TITLE ================= */}
        <main className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          
          {/* Breadcrumb path */}
          <div className="text-xs text-gray-500 mb-6 flex items-center space-x-2">
            <span>🏠</span>
            <span>›</span>
            <Link to="/about" className="hover:underline">{t('Մեր մասին')}</Link>
            <span>›</span>
            <span>{t('Սակագներ')}</span>
            <span>›</span>
            <span className="text-gray-800 font-medium">{t('Վարկեր ֆիզիկական անձանց')}</span>
          </div>

          {/* Page Title */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 max-w-4xl leading-tight">
            {t('Ֆիզիկական անձանց տրամադրվող անհատական վարկեր ըստ պրոդուկտների / Պայմաններ և սակագներ /')}
          </h1>

          {/* ================= CONTENT SECTION (Sidebar + Table) ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* LEFT SIDEBAR */}
            <div className="lg:col-span-1 space-y-3">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                
                {/* Accordion Item 1: Սպառողական վարկեր */}
                <div className="mb-4">
                  <button className="w-full flex items-center justify-between text-left text-purple-700 font-bold text-sm mb-3">
                    <span>{t('Սպառողական վարկեր')}</span>
                    <span>▲</span>
                  </button>
                  
                  <div className="pl-2 space-y-2 text-xs font-semibold text-gray-600 border-l-2 border-purple-100">
                    <button 
                      onClick={() => setActiveSubLoan('evocahome')}
                      className={`block w-full text-left p-1.5 rounded transition ${activeSubLoan === 'evocahome' ? 'text-purple-700 font-extrabold bg-purple-50' : 'hover:text-purple-700'}`}
                    >
                      {t('Վերանորոգման վարկ EvocaHOME')}
                    </button>
                    <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                      {t('Անհատական վարկ «Ներդրումային»')}
                    </button>
                    <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                      {t('Գույքի գրավով ապահովված վարկ')}
                    </button>
                    <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                      {t('Անգրավ սպառողական վարկ')}
                    </button>
                    <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                      {t('Ոսկու գրավով (լոմբարդային) վարկ')}
                    </button>
                    <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                      {t('Վճարային քարտով օվերդրաֆտ (վարկային քարտ)')}
                    </button>
                    <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                      {t('Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ')}
                    </button>
                    <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                      {t('«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ (ծրագրային)')}
                    </button>
                    <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                      {t('Evolution')}
                    </button>
                    <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                      {t('Evoca աշխատավարձային փաթեթի շրջանակում տրամադրվող վարկ')}
                    </button>
                    <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                      {t('Ավտոկայանատեղի ձեռքբերման վարկ')}
                    </button>
                    <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                      {t('Արևային կայանների ձեռք բերման վարկ EvocaPOWER')}
                    </button>
                    <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                      {t('Հեծանիվի ձեռքբերման վարկ')}
                    </button>
                    <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                      {t('Տեղում Ապառիկ')}
                    </button>
                    <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                      {t('Դրամական միջոցների գրավով ապահովված անհատական վարկ')}
                    </button>
                  </div>
                </div>

                {/* Other Accordion Items */}
                <div className="pt-2 border-t border-gray-100 space-y-3 text-sm font-bold text-gray-700">
                  <div className="flex justify-between items-center cursor-pointer hover:text-purple-700">
                    <span>{t('Հիփոթեքային վարկեր')}</span>
                    <span>▼</span>
                  </div>
                  <div className="flex justify-between items-center cursor-pointer hover:text-purple-700">
                    <span>{t('Ավտովարկեր')}</span>
                    <span>▼</span>
                  </div>
                  <div className="flex justify-between items-center cursor-pointer hover:text-purple-700">
                    <span>{t('Լիզինգ')}</span>
                    <span>▼</span>
                  </div>
                  <div className="flex justify-between items-center cursor-pointer hover:text-purple-700">
                    <span>{t('Օնլայն վարկեր')}</span>
                    <span>▼</span>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT MAIN CONTENT (Աղյուսակը) */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {t('Վերանորոգման վարկ EvocaHOME')}
              </h2>

              {/* Structured Table */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {evocahomeData.map((item, index) => (
                      <tr 
                        key={item.id} 
                        className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                      >
                        {/* Number Column */}
                        <td className="py-4 px-3 text-xs font-semibold text-gray-400 w-8 align-top text-center">
                          {item.id}.
                        </td>

                        {/* Title Column */}
                        <td className="py-4 px-4 text-xs font-bold text-gray-700 w-1/3 align-top">
                          {item.label}
                        </td>

                        {/* Description Column */}
                        <td className="py-4 px-4 text-xs text-gray-600 leading-relaxed align-top whitespace-pre-line">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </main>

        {/* Floating Chat Button */}
        <div className="fixed bottom-4 right-4 z-50 flex items-center">
          <button className="bg-[#6b21a8] text-white font-bold text-xs px-4 py-2 rounded-l-full shadow-lg hover:bg-purple-800 transition">
            {t('Գրեք մեզ, մենք օնլայն ենք !')}
          </button>
          <div className="bg-purple-500 p-2 rounded-full text-white shadow-lg -ml-2 cursor-pointer">
            💬
          </div>
        </div>

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
        </footer>

      </div>
    </Tr>
  );
};

export default Rates;