import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Reports = () => {
  const [activeSubTab, setActiveSubTab] = useState('audit');

  // Տարիների ցուցակը 2025-ից մինչև 2006
  const years = Array.from({ length: 2025 - 2006 + 1 }, (_, i) => 2025 - i);

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
          <span className="text-gray-500">Հաշվետվություններ</span>
          <span>›</span>
          <span className="text-gray-800 font-medium">Աուդիտորական եզրակացություն</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">
          Աուդիտորական եզրակացություն
        </h1>
      </div>

      {/* ================= REPORTS GRID SECTION ================= */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {years.map((year) => (
            <div key={year} className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900">{year}</h2>
              <div className="bg-purple-50/60 hover:bg-purple-100/60 rounded-xl p-3.5 flex items-center space-x-3 text-xs md:text-sm font-semibold text-gray-800 border border-purple-100/80 cursor-pointer transition">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-700 font-bold">
                  📄 ⬇
                </div>
                <span>{year} Աուդիտորական եզրակացություն</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
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

export default Reports;