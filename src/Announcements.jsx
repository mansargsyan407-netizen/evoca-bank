import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Announcements = () => {
  const [openId, setOpenId] = useState(null);

  // Նկարներում պատկերված հայտարարությունների ցուցակը
  const announcementsList = [
    {
      id: 1,
      title: 'Գործարքների արգելափակում Ֆունկցիոնալ',
      date: '26.06.2026',
      content: 'Հարգելի՛ հաճախորդներ, տեղեկացնում ենք, որ նշված ժամանակահատվածում հնարավոր են գործարքների ժամանակավոր սահմանափակումներ։'
    },
    {
      id: 2,
      title: '«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ Բաժնետերերի տարեկան ընդհանուր ժողով',
      date: '28.08.2026',
      content: 'Տեղեկացնում ենք, որ տեղի կունենա «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ Բաժնետերերի տարեկան ընդհանուր ժողովը:'
    },
    {
      id: 3,
      title: '«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ի Բաժնետերերի տարեկան ընդհանուր ժողով',
      date: '04.06.2025',
      content: '«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ի Բաժնետերերի տարեկան ընդհանուր ժողովի անցկացման մասին ծանուցում:'
    },
    {
      id: 4,
      title: '«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ Բաժնետերերի արտահերթ ընդհանուր ժողով',
      date: '28.03.2025',
      content: 'Տեղեկացնում ենք արտահերթ ընդհանուր ժողովի անցկացման և օրակարգի մասին:'
    },
    {
      id: 5,
      title: 'Արտաքին աուդիտի մրցույթի հայտարարություն',
      date: '30.12.2024',
      content: 'Էվոկաբանկը հայտարարում է բաց մրցույթ՝ արտաքին աուդիտ իրականացնող ընկերության ընտրության համար:'
    },
    {
      id: 6,
      title: 'Բանկի ներսում նույն արժույթով քարտերի միջև փոխանցման սակագինը սահմանվել է 0%',
      date: '12.11.2024',
      content: 'Ուրախ ենք տեղեկացնել, որ բանկի ներսում նույն արժույթով քարտային փոխանցումներն այսուհետ անվճար են:'
    },
    {
      id: 7,
      title: 'МИР քարտերի սպասարկման դադարեցում',
      date: '13.06.2024',
      content: 'Տեղեկացնում ենք МИР քարտերի սպասարկման պայմանների փոփոխության մասին:'
    },
    {
      id: 8,
      title: 'Արտարժույթային գործարքների սահմանափակում',
      date: '02.10.2023',
      content: 'Տեղեկացնում ենք արտարժութային գործարքների իրականացման ժամանակավոր սահմանափակումների մասին:'
    }
  ];

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans pb-16">
      {/* Լոգոյի և հիմնական մենյուի շերտը */}
      <div className="py-4 px-4 md:px-8 border-b border-gray-100">
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
              <Link to="/reports" className="text-gray-800 hover:text-purple-700 transition">
                Հաշվետվություններ
              </Link>
              <Link
                to="/announcements"
                className="text-purple-700 font-bold border-b-2 border-purple-700 pb-1"
              >
                Հայտարարություններ
              </Link>
            </nav>
          </div>

          <button className="bg-[#6b21a8] hover:bg-purple-800 text-white text-xs md:text-sm font-bold px-6 py-2.5 rounded-full shadow-md transition">
            EvocaONLINE
          </button>
        </div>
      </div>

      {/* Breadcrumb, Վերնագիր և Օրացույցի ֆիլտր */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-6">
        <div className="text-xs text-gray-500 mb-6 flex items-center space-x-2">
          <span>🏠</span>
          <span>›</span>
          <Link to="/about" className="hover:underline">Մեր մասին</Link>
          <span>›</span>
          <span className="text-gray-800 font-medium">Հայտարարություններ</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h1 className="text-2xl md:text-3xl font-black text-gray-900">
            Հայտարարություններ
          </h1>

          {/* Ամսաթվի ֆիլտր (նկարում պատկերված ոճով) */}
          <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg text-xs font-semibold text-gray-500 border border-gray-100">
            <span className="text-lg">📅</span>
            <input
              type="text"
              placeholder="Սկսած"
              className="bg-transparent w-20 outline-none text-center"
            />
            <span>-</span>
            <input
              type="text"
              placeholder="Մինչև"
              className="bg-transparent w-20 outline-none text-center"
            />
          </div>
        </div>
      </div>

      {/* Հիմնական բովանդակություն (Ձախից պատկեր, Աջից հայտարարություններ) */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Ձախ կողմի դեկորատիվ պատկերը (նկարում պատկերված ոճով) */}
        <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center p-6 bg-purple-50/50 rounded-3xl relative overflow-hidden min-h-[400px]">
          <div className="w-48 h-64 bg-purple-600 rounded-2xl shadow-xl flex flex-col p-4 text-white transform -rotate-6 border-4 border-purple-400">
            <div className="w-12 h-2 bg-purple-300 rounded mb-4 mx-auto"></div>
            <div className="space-y-2">
              <div className="h-2 bg-purple-300 rounded w-full"></div>
              <div className="h-2 bg-purple-300 rounded w-4/5"></div>
              <div className="h-2 bg-purple-300 rounded w-3/4"></div>
              <div className="h-2 bg-purple-300 rounded w-5/6"></div>
            </div>
          </div>
        </div>

        {/* Աջ կողմի հայտարարությունների ցուցակը */}
        <div className="lg:col-span-8 space-y-4">
          {announcementsList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition border border-gray-100 cursor-pointer"
              onClick={() => toggleAccordion(item.id)}
            >
              <div className="flex items-start space-x-3">
                <span
                  className={`text-purple-700 text-sm transform transition-transform duration-200 mt-1 ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
                <div className="flex-1">
                  <h3 className="text-sm md:text-base font-extrabold text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                  <span className="text-[11px] font-semibold text-gray-400 block mt-2">
                    {item.date}
                  </span>

                  {/* Բացվող տեքստը (Accordion) */}
                  {openId === item.id && (
                    <div className="mt-4 pt-3 border-t border-gray-100 text-xs md:text-sm text-gray-600 leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer Section */}
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

export default Announcements;