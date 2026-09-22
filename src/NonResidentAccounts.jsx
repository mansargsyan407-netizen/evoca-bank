import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NonResidentAccounts = () => {
  // Accordion-ների վիճակները
  const [openSections, setOpenSections] = useState({
    advantages: true, // «Առավելություններ»-ը բաց է ըստ նկար 2-ի
    conditions: false,
    documents: false,
    legalDocs: false,
    rates: false,
    steps: false,
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans pb-16">
      
      {/* 1. Մանուշակագույն Header navigation բար */}
      <div className="bg-[#6b21a8] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center overflow-x-auto font-semibold text-xs md:text-sm">
          <Link
            to="/accounts"
            className="hover:bg-[#581c87] px-5 py-3.5 whitespace-nowrap transition opacity-90 hover:opacity-100"
          >
            Հաշիվների բացում և սպասարկում
          </Link>

          <Link
            to="/accounts/metal"
            className="hover:bg-[#581c87] px-5 py-3.5 whitespace-nowrap transition opacity-90 hover:opacity-100"
          >
            Առարկայազուրկ մետաղական հաշիվներ
          </Link>

          {/* Ակտիվ կետ՝ Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում */}
          <Link
            to="/accounts/non-residents"
            className="bg-[#4c1d95] px-5 py-3.5 whitespace-nowrap font-bold transition"
          >
            Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում
          </Link>

          <Link
            to="/accounts/safe-deposit-boxes"
            className="hover:bg-[#581c87] px-5 py-3.5 whitespace-nowrap transition opacity-90 hover:opacity-100"
          >
            Պահատուփեր
          </Link>
        </div>
      </div>

      {/* Բովանդակություն */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        
        {/* 2. Breadcrumb (Նկար 1) */}
        <div className="text-xs text-gray-500 mb-6 flex items-center space-x-2">
          <span>🏠</span>
          <span>›</span>
          <Link to="/" className="hover:underline">Անհատ</Link>
          <span>›</span>
          <Link to="/accounts" className="hover:underline">Հաշիվներ</Link>
          <span>›</span>
          <span className="text-gray-800 font-medium">Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում</span>
        </div>

        {/* 3. Վերևի բլոկ՝ տեքստ + աջ կողմի V-ձև նկարը (Նկար 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="bg-gray-50/80 p-8 rounded-3xl space-y-4">
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
              Ոչ ռեզիդենտ <br /> հաճախորդների հեռավար <br /> սպասարկում
            </h1>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
              Բանկ այցելելն այլևս պարտադիր չէ: Անգամ եթե չեք բնակվում ՀՀ-ում, Evocabank-ի հետ Դուք կարող եք բացել հաշիվներ օնլայն եղանակով՝ աշխարհի ցանկացած կետից և ցանկացած պահի:
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-sm bg-black flex items-center justify-center p-4">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17510033256067/780x585.png" 
              alt="Evoca Prime" 
              className="w-full h-72 md:h-80 object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* 4. Նկարագրության տեքստային հատված (Նկար 1) */}
        <div className="max-w-4xl mx-auto text-center space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed font-semibold mb-16">
          <p>
            24/7 անձնական մենեջեր, ֆինանսական ծառայությունների հասանելիություն աշխարհի ցանկացած կետից, փաստաթղթերի անվճար առաքում Ձեր գտնվելու վայր: Բոլոր մանրուքները մտածված են, որ Դուք խնայեք Ձեր ժամանակը, չշեղվեք կարևոր գործերից և, իհարկե, օգտվեք prime սպասարկումից:
          </p>
          <p>
            Ուղարկեք փաստաթղթերը, անցեք տեսազանգով նույնականացում և բացեք Ձեր հաշիվը՝ առանց Բանկ այցելելու:
          </p>
          <p className="font-bold text-gray-900">
            Մանրամասները և քայլ առ քայլ ուղեցույցը՝ ներքևում:
          </p>
        </div>

        {/* 5. ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ Accordion-ներ (Նկար 2) */}
        <div className="pt-6 space-y-4 max-w-5xl mx-auto mb-16">
          <h2 className="text-center text-lg md:text-xl font-black text-gray-900 uppercase tracking-wide mb-6">
            Անհրաժեշտ տեղեկատվություն
          </h2>

          {/* Accordion 1: Առավելություններ (Բացված է) */}
          <div className="border border-purple-400 rounded-2xl overflow-hidden">
            <button
              onClick={() => toggleSection('advantages')}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-bold text-xs md:text-sm text-gray-900 bg-white hover:bg-purple-50 transition"
            >
              <span className="flex items-center space-x-2">
                <span className="text-purple-700 font-bold">ˆ</span>
                <span className="font-bold">Առավելություններ</span>
              </span>
            </button>

            {openSections.advantages && (
              <div className="px-8 py-6 bg-white text-xs md:text-sm text-gray-700 space-y-5 border-t border-purple-100">
                
                {/* Կետ 1 */}
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 font-bold text-purple-800">
                    <span>•</span>
                    <span>Prime կարգավիճակ Բանկում</span>
                  </div>
                  <p className="pl-4 text-gray-600 font-medium">
                    Բացառիկ արտոնություններ, առաջնահերթ սպասարկում և ժամանակի խնայում
                  </p>
                </div>

                {/* Կետ 2 */}
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 font-bold text-purple-800">
                    <span>•</span>
                    <span>Անհատական մենեջեր/Անձնական օգնական</span>
                  </div>
                  <p className="pl-4 text-gray-600 font-medium">
                    24/7 Աջակցություն ֆինանսական ցանկացած հարցում անմիջապես անձնական օգնականի կողմից
                  </p>
                </div>

                {/* Կետ 3 */}
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 font-bold text-purple-800">
                    <span>•</span>
                    <span>Հեռավար սպասարկում</span>
                  </div>
                  <p className="pl-4 text-gray-600 font-medium">
                    Ծառայությունների հասանելիություն առանց՝ աշխարհի ցանկացած կետից
                  </p>
                </div>

                {/* Կետ 4 */}
                <div className="pt-2">
                  <div className="font-bold text-purple-900">Փաստաթղթերի անվճար առաքում</div>
                  <p className="text-gray-600 font-medium">
                    Առաքում անմիջապես Ձեր գտնվելու վայր, Ձեզ հարմար պահի՝ արագ և անվճար:
                  </p>
                </div>

              </div>
            )}
          </div>

          {/* Մնացած Accordion-ները (Փակ վիճակում) */}
          {[
            { id: 'conditions', title: 'Ֆիզիկական անձանց հաշվի բացման պայմաններ' },
            { id: 'documents', title: 'Ֆիզիկական անձանց հաշվի բացման անհրաժեշտ փաստաթղթեր' },
            { id: 'legalDocs', title: 'Իրավաբանական անձանց փաստաթղթերի ցանկ' },
            { id: 'rates', title: 'Սակագներ' },
            { id: 'steps', title: 'Հաշվի բացման փուլեր' },
          ].map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleSection(item.id)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-bold text-xs md:text-sm text-gray-800 hover:bg-gray-50 transition"
              >
                <span className="flex items-center space-x-2">
                  <span className="text-purple-700 font-bold">
                    {openSections[item.id] ? 'ˆ' : 'ˇ'}
                  </span>
                  <span>{item.title}</span>
                </span>
              </button>
              {openSections[item.id] && (
                <div className="px-8 py-4 bg-white text-xs text-gray-600 border-t border-gray-100">
                  Տվյալ բաժնի տեղեկատվությունը թարմացման փուլում է:
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 6. Փաստաթղթեր (Նկար 3) */}
        <div className="pt-6 space-y-4 max-w-5xl mx-auto">
          <h2 className="text-xl font-black text-gray-900 mb-4 text-center md:text-left">
            Փաստաթղթեր
          </h2>

          <div className="space-y-3">
            <div className="bg-purple-50/60 hover:bg-purple-100/70 transition p-4 rounded-xl flex items-center space-x-3 cursor-pointer">
              <span className="text-purple-700 text-xl">📄</span>
              <span className="text-xs md:text-sm font-bold text-gray-800">
                Համալիր բանկային ծառայությունների մատուցման պայմաններ <span className="font-semibold text-gray-500">16.05.2025</span>
              </span>
            </div>
          </div>
        </div>

      </div>
       {/* ================= Օնլայն և մոբայլ բանկինգ Banner ================= */}
      <section className="w-full bg-[#6b21a8] text-white py-12 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="w-full lg:w-1/2 flex items-center justify-center gap-4">
            <div className="relative w-full max-w-[420px]">
              <div className="relative rounded-t-xl border-[8px] border-b-0 border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden aspect-[16/10]">
                <iframe
                  src="https://www.youtube.com/embed/KwAgMHEx8ys"
                  title="EvocaTOUCH Video"
                  className="w-full h-full border-0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-[108%] -translate-x-[4%] h-2.5 bg-neutral-700 rounded-b-lg border-t border-neutral-600 shadow-md"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-5">
            <h2 className="text-2xl md:text-3xl font-extrabold">Օնլայն և մոբայլ բանկինգ</h2>
            <p className="text-purple-100 text-xs md:text-sm leading-relaxed">
              Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է
              տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ։
            </p>

            <div>
              <button className="bg-white text-purple-900 px-6 py-2.5 rounded-full font-bold text-xs hover:bg-purple-50 transition shadow-md">
                Դառնալ հաճախորդ
              </button>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="bg-white p-1 rounded-lg shadow-md shrink-0">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://www.evoca.am"
                  alt="QR Code"
                  className="w-16 h-16"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-purple-100">
                  Ներբեռնել հավելվածները`
                </span>
                <div className="flex items-center gap-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                    className="h-7 cursor-pointer"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-7 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Footer Section ================= */}
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
};

export default NonResidentAccounts;