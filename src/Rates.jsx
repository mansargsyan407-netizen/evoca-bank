import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Rates = () => {
  const [activeTab, setActiveTab] = useState('loans-personal');
  const [activeSubLoan, setActiveSubLoan] = useState('evocahome');

  // Աղյուսակի տվյալները (ըստ 1-ին և 2-րդ նկարների)
  const evocahomeData = [
    {
      id: 1,
      label: 'Տրամադրման նպատակը',
      value: 'Շինարարական նյութերի, կենցաղային տեխնիկայի և կահույքի վաճառքով զբաղվող և համագործակցության շրջանակներում գործընկեր հանդիսացող կազմակերպությունների կողմից առաջարկվող ապրանքների ձեռք բերման՝ այդ թվում աշխատանքների, ծառայությունների պատվիրման նպատակով:'
    },
    {
      id: 2,
      label: 'Ովքեր կարող են դիմել',
      value: '21-65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք'
    },
    {
      id: 3,
      label: 'Սահմանաչափ',
      value: '500,000 - 10,000,000 ՀՀ դրամ'
    },
    {
      id: 4,
      label: 'Սահմանաչափի տեսակ',
      value: 'Չվերականգնվող'
    },
    {
      id: 5,
      label: 'Սահմանաչափի տրամադրման եղանակ',
      value: 'Վարկային սահմանաչափը տրամադրվում է Բանկի կողմից թողարկված հատուկ ARCA վճարային քարտերի միջոցով:'
    },
    {
      id: 6,
      label: 'Արժույթը',
      value: 'ՀՀ դրամ'
    },
    {
      id: 7,
      label: 'Անվանական տոկոսադրույք',
      value: '16%'
    },
    {
      id: 8,
      label: 'Փաստացի տոկոսադրույք',
      value: '17.42%'
    },
    {
      id: 9,
      label: 'Արտոնյալ ժամանակահատված',
      value: 'Չի տրամադրվում'
    },
    {
      id: 10,
      label: 'Մարման ժամկետ',
      value: '60 ամիս'
    },
    {
      id: 11,
      label: 'Մարման եղանակ',
      value: 'Անուիտետային'
    },
    {
      id: 12,
      label: 'Քաղվածքի օր',
      value: 'Մինչև յուրաքանչյուր ամսվա 10-ը'
    },
    {
      id: 13,
      label: 'Վճարման վերջնաժամկետ',
      value: 'Յուրաքանչյուր ամսվա 16-ը (եթե տվյալ ամսվա 16-ը հանդիսանում է ոչ աշխատանքային օր,ապա վերջնաժամկետ է համարվում հաջորդ աշխատանքային օրը):'
    },
    {
      id: 14,
      label: 'Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր',
      value: 'Ժամկետանց վարկի համար՝ օրական 0.015%,\nԺամկետանց տոկոսագումարի համար՝ օրական 0.1%:'
    },
    {
      id: 15,
      label: 'Տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ',
      value: 'Վարկի տրամադրման կամ մերժման որոշումը կայացվում է վայրկյանների ընթացքում:\nՎարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, առավելագույնը 1 (մեկ) աշխատանքային օրվա ընթացքում:'
    }
  ];

  return (
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
                  Evoca-ի մասին
                </Link>
                <Link to="/rates" className="text-purple-700 border-b-2 border-purple-700 pb-1 font-bold">
                  Սակագներ
                </Link>
                        <Link
                to="/reports"
                className="text-gray-800 hover:text-purple-700 cursor-pointer transition font-semibold"
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

            <div>
              <button className="bg-[#6b21a8] hover:bg-purple-800 text-white text-xs md:text-sm font-bold px-6 py-2.5 rounded-full shadow-md transition">
                EvocaONLINE
              </button>
            </div>
          </div>
        </div>

        {/* 3. Մանուշակագույն ենթամենյու (Մանուշակագույն շերտ ըստ նկար 1-ի) */}
        <nav className="bg-[#6b21a8] text-white text-xs md:text-sm font-semibold py-3 px-4 shadow-md">
          <div className="max-w-7xl mx-auto flex space-x-4 md:space-x-8 overflow-x-auto whitespace-nowrap">
            <button
              onClick={() => setActiveTab('loans-personal')}
              className={`px-4 py-1 rounded transition ${activeTab === 'loans-personal' ? 'bg-purple-900 text-white font-bold' : 'hover:text-purple-200'}`}
            >
              Վարկեր ֆիզիկական անձանց
            </button>
          <Link
  to="/business-loans"
  className={`px-4 py-1 rounded transition flex items-center ${
    activeTab === 'loans-business'
      ? 'bg-purple-900 text-white font-bold'
      : 'hover:text-purple-200'
  }`}
>
  Վարկեր իրավաբանական անձանց
</Link>
           
           <Link
  to="/fees"
  className={`px-4 py-1 rounded transition flex items-center ${
    activeTab === 'fees'
      ? 'bg-purple-900 text-white font-bold'
      : 'hover:text-purple-200'
  }`}
>
  Միջնորդավճարների սակագները
</Link>

         <Link
  to="/deposits"
  className={`px-4 py-1 rounded transition flex items-center ${
    activeTab === 'deposits'
      ? 'bg-purple-900 text-white font-bold'
      : 'hover:text-purple-200'
  }`}
>
  Ավանդների սակագներ
</Link>
          <Link
  to="/archive"
  className={`px-4 py-1 rounded transition flex items-center ${
    activeTab === 'archive'
      ? 'bg-purple-900 text-white font-bold'
      : 'hover:text-purple-200'
  }`}
>
  Արխիվ
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
          <Link to="/about" className="hover:underline">Մեր մասին</Link>
          <span>›</span>
          <span>Սակագներ</span>
          <span>›</span>
          <span className="text-gray-800 font-medium">Վարկեր ֆիզիկական անձանց</span>
        </div>

        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 max-w-4xl leading-tight">
          Ֆիզիկական անձանց տրամադրվող անհատական վարկեր ըստ պրոդուկտների / Պայմաններ և սակագներ /
        </h1>

        {/* ================= CONTENT SECTION (Sidebar + Table) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* LEFT SIDEBAR (Կողային Մենյու) */}
          <div className="lg:col-span-1 space-y-3">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              
              {/* Accordion Item 1: Սպառողական վարկեր */}
              <div className="mb-4">
                <button className="w-full flex items-center justify-between text-left text-purple-700 font-bold text-sm mb-3">
                  <span>Սպառողական վարկեր</span>
                  <span>▲</span>
                </button>
                
                <div className="pl-2 space-y-2 text-xs font-semibold text-gray-600 border-l-2 border-purple-100">
                  <button 
                    onClick={() => setActiveSubLoan('evocahome')}
                    className={`block w-full text-left p-1.5 rounded transition ${activeSubLoan === 'evocahome' ? 'text-purple-700 font-extrabold bg-purple-50' : 'hover:text-purple-700'}`}
                  >
                    Վերանորոգման վարկ EvocaHOME
                  </button>
                  <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                    Անհատական վարկ «Ներդրումային»
                  </button>
                  <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                    Գույքի գրավով ապահովված վարկ
                  </button>
                  <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                    Անգրավ սպառողական վարկ
                  </button>
                  <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                    Ոսկու գրավով (լոմբարդային) վարկ
                  </button>
                  <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                    Վճարային քարտով օվերդրաֆտ (վարկային քարտ)
                  </button>
                  <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                    Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ
                  </button>
                  <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                    «ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ (ծրագրային)
                  </button>
                  <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                    Evolution
                  </button>
                  <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                    Evoca աշխատավարձային փաթեթի շրջանակում տրամադրվող վարկ
                  </button>
                  <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                    Ավտոկայանատեղի ձեռքբերման վարկ
                  </button>
                  <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                    Արևային կայանների ձեռք բերման վարկ EvocaPOWER
                  </button>
                  <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                    Հեծանիվի ձեռքբերման վարկ
                  </button>
                  <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                    Տեղում Ապառիկ
                  </button>
                  <button className="block w-full text-left p-1.5 hover:text-purple-700 transition">
                    Դրամական միջոցների գրավով ապահովված անհատական վարկ
                  </button>
                </div>
              </div>

              {/* Other Accordion Items */}
              <div className="pt-2 border-t border-gray-100 space-y-3 text-sm font-bold text-gray-700">
                <div className="flex justify-between items-center cursor-pointer hover:text-purple-700">
                  <span>Հիփոթեքային վարկեր</span>
                  <span>▼</span>
                </div>
                <div className="flex justify-between items-center cursor-pointer hover:text-purple-700">
                  <span>Ավտովարկեր</span>
                  <span>▼</span>
                </div>
                <div className="flex justify-between items-center cursor-pointer hover:text-purple-700">
                  <span>Լիզինգ</span>
                  <span>▼</span>
                </div>
                <div className="flex justify-between items-center cursor-pointer hover:text-purple-700">
                  <span>Օնլայն վարկեր</span>
                  <span>▼</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT MAIN CONTENT (Աղյուսակը) */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Վերանորոգման վարկ EvocaHOME
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
          Գրեք մեզ, մենք օնլայն ենք !
        </button>
        <div className="bg-purple-500 p-2 rounded-full text-white shadow-lg -ml-2 cursor-pointer">
          💬
        </div>
      </div>
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

export default Rates;