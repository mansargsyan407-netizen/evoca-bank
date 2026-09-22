import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FinancialReports = () => {
  const [activeSubTab, setActiveSubTab] = useState('financial');

  // Տարիների տվյալների ցուցակ 2026-ից մինչև 2010
  const financialData = [
    { year: 2026, quarters: ['1-2026', '2-2026'], hasAnnual: false },
    { year: 2025, quarters: ['1-2025', '2-2025', '3-2025', '4-2025'], hasAnnual: false },
    { year: 2024, quarters: ['1-2024', '2-2024', '3-2024', '4-2024'], hasAnnual: false },
    { year: 2023, quarters: ['1-2023', '2-2023', '3-2023', '4-2023'], hasAnnual: false },
    { year: 2022, quarters: ['1-2022', '2-2022', '3-2022', '4-2022'], hasAnnual: false },
    { year: 2021, quarters: ['1-2021', '2-2021', '3-2021', '4-2021'], hasAnnual: false },
    { year: 2020, quarters: ['1-2020', '2-2020', '3-2020', '4-2020'], hasAnnual: false },
    { year: 2019, quarters: ['1-2019', '2-2019', '3-2019', '4-2019'], hasAnnual: false },
    { year: 2018, quarters: ['1-2018', '2-2018', '3-2018', '4-2018'], hasAnnual: false },
    { year: 2017, quarters: ['1-2017', '2-2017', '3-2017', '4-2017'], hasAnnual: false },
    { year: 2016, quarters: ['1-2016', '2-2016', '3-2016', '4-2016'], hasAnnual: true },
    { year: 2015, quarters: ['1-2015', '2-2015', '3-2015', '4-2015'], hasAnnual: true },
    { year: 2014, quarters: ['1-2014', '2-2014', '3-2014', '4-2014'], hasAnnual: false },
    { year: 2013, quarters: ['1-2013', '2-2013', '3-2013', '4-2013'], hasAnnual: false },
    { year: 2012, quarters: ['1-2012', '2-2012', '3-2012', '4-2012'], hasAnnual: true },
    { year: 2011, quarters: ['1-2011', '2-2011', '3-2011', '4-2011'], hasAnnual: true },
    { year: 2010, quarters: ['1-2010', '2-2010', '3-2010', '4-2010'], hasAnnual: true },
  ];

  const subTabs = [
    { id: 'audit', label: 'Աուդիտորական եզրակացություն', link: '/reports' },
    { id: 'financial', label: 'Ֆինանսական հաշվետվություններ', link: '/financial-reports' },
    { id: 'investors', label: 'Ներդրողների համար', link: '/investors' },
    { id: 'semi-annual', label: 'Կիսամյակային հաշվետվություն', link: '/semi-annual-reports' },
    { id: 'annual', label: 'Տարեկան հաշվետվություն', link: '/annual-reports' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans pb-16">
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
                    <Link to="/rates" className="text-gray-800 hover:text-purple-700 transition">
                      Սակագներ
                    </Link>
                    <Link
                      to="/reports"
                      className="text-gray-800 hover:text-purple-700 cursor-pointer transition font-medium"
                    >
                      Հաշվետվություններ
                    </Link>
                    <span className="text-gray-800 hover:text-purple-700 cursor-pointer transition">
                      Հայտարարություններ
                    </span>
                  </nav>
                </div>
      
                <div>
                  <button className="bg-[#6b21a8] hover:bg-purple-800 text-white text-xs md:text-sm font-bold px-6 py-2.5 rounded-full shadow-md transition">
                    EvocaONLINE
                  </button>
                </div>
              </div>
            </div>
      {/* ================= PURPLE SUB-HEADER NAVIGATION ================= */}
      <div className="bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-wrap items-center justify-center md:justify-start space-x-2 md:space-x-6 text-xs md:text-sm py-3 font-semibold">
          {subTabs.map((tab) => (
            <Link
              key={tab.id}
              to={tab.link}
              onClick={() => setActiveSubTab(tab.id)}
              className={`px-3 py-1.5 rounded transition ${
                activeSubTab === tab.id
                  ? 'bg-purple-950 text-white font-bold'
                  : 'hover:text-purple-200'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ================= BREADCRUMB & PAGE TITLE ================= */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-6">
        <div className="text-xs text-gray-500 mb-6 flex items-center space-x-2">
          <span>🏠</span>
          <span>›</span>
          <Link to="/about" className="hover:underline">Մեր մասին</Link>
          <span>›</span>
          <Link to="/reports" className="hover:underline">Հաշվետվություններ</Link>
          <span>›</span>
          <span className="text-gray-800 font-medium">Ֆինանսական հաշվետվություններ</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">
          Ֆինանսական հաշվետվություններ
        </h1>
      </div>

      {/* ================= FINANCIAL REPORTS GRID SECTION ================= */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {financialData.map((item) => (
            <div key={item.year} className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900">{item.year}</h2>
              
              {/* 1, 2, 3, 4 Եռամսյակների ցանց (2 սյունակով) */}
              <div className="grid grid-cols-2 gap-3">
                {item.quarters.map((q) => (
                  <div
                    key={q}
                    className="bg-purple-50/60 hover:bg-purple-100/60 rounded-xl p-3 flex items-center space-x-2.5 text-xs font-bold text-gray-800 border border-purple-100/80 cursor-pointer transition"
                  >
                    <div className="p-1.5 bg-purple-100 rounded-lg text-purple-700 text-xs">
                      📄 ⬇
                    </div>
                    <span>{q}</span>
                  </div>
                ))}
              </div>

              {/* Տարեկան հաշվետվություն (եթե առկա է տվյալ տարում) */}
              {item.hasAnnual && (
                <div className="grid grid-cols-2 gap-3 pt-0.5">
                  <div className="bg-purple-50/60 hover:bg-purple-100/60 rounded-xl p-3 flex items-center space-x-2.5 text-xs font-bold text-gray-800 border border-purple-100/80 cursor-pointer transition">
                    <div className="p-1.5 bg-purple-100 rounded-lg text-purple-700 text-xs">
                      📄 ⬇
                    </div>
                    <span>Տարեկան {item.year}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
 <footer className="w-full bg-[#f8f8fa] text-[#2d2d2d] pt-10 pb-6 px-6 border-t border-gray-100 text-xs mt-12">
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

export default FinancialReports;