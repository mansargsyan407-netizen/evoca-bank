import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Էջ 1-ի և Էջ 2-ի բոլոր լոգոները
const allPartners = [
  // Էջ 1-ի լոգոները
  { id: 1, logo: "https://www.evoca.am/images-cache/partners/1/17104032198171/348x150_grayscale.png", name: "Chip Store" },
  { id: 2, logo: "https://www.evoca.am/images-cache/partners/1/17077436606929/348x150_grayscale.png", name: "Ֆաբ Լաբ Հայաստան" },
  { id: 3, logo: "https://www.evoca.am/images-cache/partners/1/17107493820339/348x150_grayscale.png", name: "IMR" },
  { id: 4, logo: "https://www.evoca.am/images-cache/partners/1/17072192942611/348x150_grayscale.png", name: "DIGNISI" },
  { id: 5, isHandBanner: true }, // Կենտրոնի ձեռքով բլոկը
  { id: 6, logo: "https://www.evoca.am/images-cache/partners/1/17072192635138/348x150_grayscale.png", name: "Wizzy" },
  { id: 7, logo: "https://www.evoca.am/images-cache/partners/1/17072192435541/348x150_grayscale.png", name: "Kamo Blog" },
  { id: 8, logo: "https://www.evoca.am/images-cache/partners/1/16104577054001/348x150_grayscale.png", name: "Dalma Garden Mall" },
  { id: 9, logo: "https://www.evoca.am/images-cache/partners/1/16104583322099/348x150_grayscale.png", name: "Նոր Տուն" },

  // Էջ 2-ի լոգոները
  { id: 10, logo: "https://www.evoca.am/images-cache/partners/1/17689930369925/348x150_grayscale.png", name: "Factory" },
  { id: 11, logo: "https://www.evoca.am/images-cache/partners/1/16104594273635/348x150_grayscale.png", name: "Indigo" },
  { id: 12, logo: "https://www.evoca.am/images-cache/partners/1/1610459808737/348x150_grayscale.png", name: "Futuris Home" },
  { id: 13, logo: "https://www.evoca.am/images-cache/partners/1/16104599802947/348x150_grayscale.png", name: "Adelie & the Stone" },
  { id: 14, logo: "https://www.evoca.am/images-cache/partners/1/16104603665095/348x150_grayscale.png", name: "Earlyone" },
  { id: 15, logo: "https://www.evoca.am/images-cache/partners/1/16104604109064/348x150_grayscale.png", name: "EasyPay" },
  { id: 16, logo: "https://www.evoca.am/images-cache/partners/1/16104604382658/348x150_grayscale.png", name: "Telcell" },
];

export default function PartnersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(allPartners.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPartners = allPartners.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full bg-white min-h-screen pb-20 font-sans">
      
      {/* Breadcrumb Navigation Nav */}
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

      <div className="max-w-7xl mx-auto px-4 md:px-12 pt-8">
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-10">
          Գործընկերներ
        </h1>

        {/* Partners Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-100 rounded-lg overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {currentPartners.map((item, index) => {
            if (item.isHandBanner) {
              return (
                <div key="hand" className="h-64 flex items-center justify-center p-6 border-b border-gray-100 relative bg-white">
                  <div className="relative w-40 h-40 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-yellow-400 opacity-80"></div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUr7tL5P1w6a7e7nEIK2Al6xjtT82vHJlmmjslUPoO525_neNhZMr6mh0&s=10"
                      alt="Evoca Hand"
                      className="w-28 h-32 object-contain z-10"
                    />
                  </div>
                </div>
              );
            }

            return (
              <div 
                key={item.id || index} 
                className="h-64 flex items-center justify-center p-8 border-b border-gray-100 hover:shadow-inner transition-all duration-300 group cursor-pointer bg-white"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-24 max-w-[80%] object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-start gap-4 mt-12 pl-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`text-purple-600 transition-opacity ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'}`}
          >
            ←
          </button>

          {[...Array(totalPages)].map((_, idx) => {
            const pageNum = idx + 1;
            const isActive = pageNum === currentPage;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-[#6c00ff] text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`text-purple-600 transition-opacity ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'}`}
          >
            →
          </button>
        </div>
         {/* Footer */}
      <footer className="w-full bg-[#f8f8fa] text-[#2d2d2d] pt-8 pb-6 px-6 border-t border-gray-100 text-xs relative">
        <div className="max-w-6xl mx-auto flex justify-end pb-4 border-b border-gray-200">
          <div className="text-gray-400 text-[11px]">
            Թարմացվել է` 07/09/2026 14:49
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
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
            <p className="hover:text-purple-700 cursor-pointer">Հետադարձ կապ</p>
            <p className="hover:text-purple-700 cursor-pointer">Կայքի քարտեզ</p>

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

        {/* Footer Bottom Bar */}
        <div className="border-t border-gray-200/60 pt-4 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400">
          <p className="max-w-2xl leading-normal">
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության,
            ինչպես նաև ռուսերեն և անգլերեն լեզուներով ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք
            առաջնորդվել հայերեն տարբերակով: Evocabank ՓԲԸ-ն պատասխանատվություն չի կրում իր
            ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստույգության և
            արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ
            կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
          </p>
          <div className="flex items-center gap-4 opacity-70">
            <span className="font-bold text-gray-500">fininfo</span>
            <span className="font-bold text-gray-500">abcfinance.am</span>
            <span className="font-bold text-gray-700 text-sm">arca</span>
          </div>
        </div>

        {/* Floating Chat Button */}
        <div className="fixed bottom-4 right-4 z-50 flex items-center">
          <div className="bg-purple-600 p-3 rounded-full text-white shadow-xl hover:scale-110 transition cursor-pointer">
            💬
          </div>
        </div>
      </footer>

      </div>
    </div>
  );
}
