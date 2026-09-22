import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ImportantInfo = () => {
  // Accordion-ների վիճակները կառավարելու համար
  const [openSections, setOpenSections] = useState({
    general: true, // «Անհրաժեշտ տեղեկատվություն»-ը ըստ նկարի բաց է
    interest: false,
    account: false,
    guarantee: false,
    cards: false,
    examples: false,
    yield: false,
    tables: false,
    fatca: false,
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans pb-16">
      {/* Վերևի մանուշակագույն navigation */}
      <div className="bg-[#6b21a8] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center space-x-6 text-xs md:text-sm py-3 font-semibold">
          <Link
            to="/deposits/1"
            className="hover:bg-purple-900 px-4 py-2 rounded-md transition"
          >
            Ավանդներ
          </Link>
          <Link
            to="/deposits/important-info"
            className="bg-purple-950 px-4 py-2 rounded-md font-bold"
          >
            Կարևոր տեղեկատվություն
          </Link>
        </div>
      </div>

      {/* Բովանդակություն */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 pt-6">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 mb-6 flex items-center space-x-2">
          <span>🏠</span>
          <span>›</span>
          <Link to="/" className="hover:underline">Անհատ</Link>
          <span>›</span>
          <Link to="/deposits/1" className="hover:underline">Ավանդներ</Link>
          <span>›</span>
          <span className="text-gray-800 font-medium">Կարևոր տեղեկատվություն</span>
        </div>

        {/* Վերնագիր */}
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">
          Կարևոր տեղեկատվություն
        </h1>

        <div className="space-y-6">
          {/* Ընդհանուր դրույթներ */}
          <section className="space-y-4">
            <h2 className="text-xl font-black text-gray-900">Ընդհանուր դրույթներ</h2>
            
            <ol className="list-decimal list-inside space-y-3 text-xs md:text-sm text-gray-700 leading-relaxed font-semibold">
              <li>
                «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ն (այսուհետ՝ Բանկ) իրականացնում է իրավաբանական և ֆիզիկական անձանցից (ռեզիդենտ, ոչ ռեզիդենտ) ժամկետային ավանդների (այսուհետ՝ Ավանդ) ներգրավում:
              </li>
              <li>Ավանդները ներգրավվում են՝ ՀՀ դրամով, ԱՄՆ դոլարով, Եվրոյով և ՌԴ ռուբլով:</li>
              <li>
                Ավանդներն ընդունվում են ինչպես կանխիկ, այնպես էլ անկանխիկ եղանակով: Ավանդների դիմաց հաշվեգրվող տոկոսագումարների վճարումն իրականացվում է ինչպես կանխիկ, այնպես էլ անկանխիկ եղանակով:
              </li>
              <li>
                Ֆիզիկական անձ հաճախորդի կողմից Ավանդի ներդրումը ձևակերպվում է Բանկի կողմից սահմանված ձևի Հայտ-պայմանագիրը ստորագրելով և/կամ էլեկտրոնային հայտ ներկայացնելով: Հայտ-պայմանագրում/էլ. հայտում նշվում է Ավանդի տեսակը, գումարը, արժույթը, ժամկետը, տոկոսադրույքը և ըստ անհրաժեշտության այլ պայմաններ:
              </li>
              <li>
                Ավանդների ներդրման համար գործառնական օր է համարվում՝
                <ul className="list-disc list-inside pl-6 mt-2 space-y-1 font-normal text-gray-600">
                  <li>
                    Գլխամասում և մասնաճյուղերում ներդրվող ավանդների գծով՝ տվյալ ստորաբաժանման Հաճախորդների սպասարկման համար սահմանված ժամերը:
                  </li>
                  <li>
                    Հեռակառավարման համակարգերի միջոցով ներդրվող ավանդների համար՝ տվյալ օրացուցային օրվա 24-ժամյա ժամանակահատվածը:
                  </li>
                </ul>
              </li>
              <li>
                Ավանդների ներդրման և համալրման համար տվյալ գործառնական օրվա ընթացքում ներկայացված հայտերը կատարվում են միևնույն գործառնական օրվա ընթացքում:
              </li>
              <li>
                Ֆիզիկական անձ հանդիսացող Ավանդատուների ավանդները երաշխավորվում են համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի:
              </li>
            </ol>
          </section>

          {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ Accordion-ներ */}
          <div className="pt-8 space-y-4">
            <h2 className="text-lg md:text-xl font-black text-gray-900 uppercase tracking-wide">
              Անհրաժեշտ տեղեկատվություն
            </h2>

            {/* 1. Ավանդների ներգրավման պայմանները (Բացված էստ 3-րդ նկարի) */}
            <div className="border border-purple-200 rounded-2xl overflow-hidden bg-purple-50/20">
              <button
                onClick={() => toggleSection('general')}
                className="w-[#100%] flex justify-between items-center px-6 py-4 text-left font-bold text-sm md:text-base text-gray-900 hover:bg-purple-50 transition"
              >
                <span className="flex items-center space-x-3">
                  <span className="text-purple-700">Ավանդների ներգրավման պայմանները</span>
                </span>
                <span className="text-purple-700 font-black text-xl">
                  {openSections.general ? 'ˆ' : 'ˇ'}
                </span>
              </button>

              {openSections.general && (
                <div className="px-6 py-4 border-t border-purple-100 bg-white text-xs md:text-sm text-gray-700 space-y-3 leading-relaxed">
                  <p>
                    1. Հաճախորդը (ստորև նաև՝ Ավանդատու) կարող է ավանդ ներդնել ինչպես «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ գործունեության վայրում (գլխամասային գրասենյակ և մասնաճյուղեր), այնպես էլ Բանկի հեռակառավարման համակարգերի (EvocaMobile, EvocaTouch) միջոցով:
                  </p>
                  <p>
                    2. Հեռակառավարման համակարգերի միջոցով ավանդ ներդնելու համար Հաճախորդը պետք է նախապես հանդիսանա Բանկի հաշվետեր հաճախորդ և Բանկից ստացած լինի նշված համակարգեր մուտք գործելու գաղտնաբառերը:
                  </p>
                  <p>
                    3. Ավանդների ներդրումը, դրանց դիմաց հաշվեգրված տոկոսագումարների վճարումը Ավանդատուի ցանկությամբ կարող է կատարվել ինչպես կանխիկ, այնպես էլ անկանխիկ:
                  </p>
                  <p>
                    4. Ավանդ ներդնելու համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ և հանրային ծառայությունների համարանիշ (սոցիալական քարտ):
                  </p>
                </div>
              )}
            </div>

            {/* 2. Accordion elements (մնացած ծալվող բաժինները) */}
            {[
              { id: 'interest', title: 'Ավանդների տոկոսագումարների հաշվարկման և վճարման կարգը' },
              { id: 'account', title: 'Ավանդային հաշվի վերաբերյալ տրամադրվող տեղեկատվություն' },
              { id: 'guarantee', title: 'Երաշխավորված ավանդների չափերը' },
              { id: 'cards', title: 'Ավանդատուներին անվճար տրամադրվող վճարային քարտեր' },
              { id: 'examples', title: 'Տոկոսագումարների հաշվարկման ներկայացուցչական օրինակներ' },
              { id: 'yield', title: 'Ավանդի տարեկան տոկոսային եկամտաբերության չափը' },
              { id: 'tables', title: 'Բանկի կողմից առաջարկվող ավանդատեսակների տարեկան տոկոսային եկամտաբերության աղյուսակներ' },
              { id: 'fatca', title: 'Օտարերկրյա Հաշիվների Հարկման Համապատասխանության ակտի (FATCA) ծանուցում' },
            ].map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleSection(item.id)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-bold text-xs md:text-sm text-gray-800 hover:bg-gray-50 transition"
                >
                  <span>{item.title}</span>
                  <span className="text-purple-700 font-bold text-lg">
                    {openSections[item.id] ? 'ˆ' : 'ˇ'}
                  </span>
                </button>
                {openSections[item.id] && (
                  <div className="px-6 py-4 border-t border-gray-100 bg-white text-xs text-gray-600">
                    Տվյալ բաժնի տեղեկատվությունը թարմացման փուլում է:
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Փաստաթղթեր (ըստ 5-րդ նկարի) */}
          <div className="pt-10 space-y-4">
            <h2 className="text-xl font-black text-gray-900">Փաստաթղթեր</h2>

            <div className="space-y-3">
              {[
                { title: 'Տեղեկատվական ամփոփագիր (Ավանդներ)', date: '09.06.2026' },
                { title: 'Համալիր բանկային ծառայությունների մատուցման պայմաններ', date: '16.05.2025' },
                { title: 'Դեբետային և կրեդիտային քարտեր (Տեղեկատվական ամփոփագիր)', date: '17.03.2026' },
              ].map((doc, index) => (
                <div
                  key={index}
                  className="bg-purple-50/60 hover:bg-purple-100/70 transition p-4 rounded-xl flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-700 text-xl">📄</span>
                    <span className="text-xs md:text-sm font-bold text-gray-800">
                      {doc.title} <span className="font-normal text-gray-500">{doc.date}</span>
                    </span>
                  </div>
                  <span className="text-purple-700 font-bold text-sm">↓</span>
                </div>
              ))}
            </div>
          </div>

          {/* Թարմացման ամսաթիվ */}
          <div className="text-right text-[11px] text-gray-400 pt-6">
            Թարմացվել է՝ 16/07/2026 14:28
          </div>
        </div>
      </div>
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

export default ImportantInfo;