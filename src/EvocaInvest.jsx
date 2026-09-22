import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EvocaInvest = () => {
  // FAQ Accordion-ի վիճակը
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // YouTube տեսանյութերի հղումները embed ֆորմատով
  const videoUrls = [
    'https://www.youtube.com/embed/5kUF-3KueZ8',
    'https://www.youtube.com/embed/wax5BjEOAGQ',
    'https://www.youtube.com/embed/oxxOZXf2kPA',
    'https://www.youtube.com/embed/XCz2N5eicHs',
    'https://www.youtube.com/embed/8_C9YpvlZAE',
    'https://www.youtube.com/embed/3mPDelJ-KcM',
    'https://www.youtube.com/embed/OIfnnN40_DA',
  ];

  const faqs = [
    {
      q: 'Ի՞նչ է բաժնետոմսը:',
      a: 'Բաժնետոմսը ընկերության սեփականության մասնաբաժին ներկայացնող արժեթուղթ է: Բաժնետոմս գնելիս՝ ներդրողը դառնում է տվյալ ընկերության մասնակի սեփականատեր և կարող է շահույթ ստանալ բաժնետոմսի գնի աճից կամ ընկերության կողմից վճարվող դիվիդենտներից: Բաժնետոմսերի արժեքը կարող է փոփոխվել՝ շուկայական պահանջարկից, ընկերության արդյունքներից և տնտեսական պայմաններից կախված:',
    },
    { q: 'Ի՞նչ է պարտատոմսը:', a: 'Պարտատոմսը պարտքային արժեթուղթ է, որը թողարկողը պարտավորվում է վերադարձնել ներդրված գումարը որոշակի ժամկետում՝ վճարելով տոկոսագումար:' },
    { q: 'Ի՞նչ է ETF-ը:', a: 'ETF-ը (Exchange-Traded Fund) բորսայական ֆոնդ է, որը ներդրում է կատարում ակտիվների զամբյուղում (բաժնետոմսեր, պարտատոմսեր) և վաճառվում է բորսայում:' },
    { q: 'Ո՞րն է տարբերությունը բաժնետոմսերի, պարտատոմսերի և ETF-ների միջև:', a: 'Բաժնետոմսը ընկերության սեփականություն է, պարտատոմսը՝ պարտք, իսկ ETF-ը՝ դիվերսիֆիկացված ակտիվների զամբյուղ:' },
    { q: 'Կարո՞ղ եմ բրոքերային հաշիվ բացել առանց մասնաճյուղ այցելելու:', a: 'Այո, կարող եք բացել բրոքերային հաշիվ անմիջապես EvocaTOUCH հավելվածից՝ մի քանի րոպեում:' },
    { q: 'Ո՞ր շուկաներին և գործիքներին է EvocaINVEST-ըապահովում հասանելիություն:', a: 'EvocaINVEST-ը ապահովում է հասանելիություն ամերիկյան, եվրոպական և ասիական ֆոնդային բորսաներին:' },
    { q: 'Կարո՞ղ եմ միաժամանակ ունենալ տարբեր տեսակի արժեթղթեր:', a: 'Այո, Ձեր պորտֆելում կարող եք միաժամանակ ունենալ բաժնետոմսեր, պարտատոմսեր և ETF-ներ:' },
    { q: 'Ինչպե՞ս գտնել և գնել կոնկրետ արժեթուղթ:', a: 'Փնտրեք ընկերությունը ըստ անվան կամ ticker-ի EvocaINVEST հավելվածում, տեղադրեք պատվերը:' },
    { q: 'Ո՞րն է տարբերությունը լիմիտային և շուկայական պատվերների միջև:', a: 'Լիմիտային պատվերը կատարվում է Ձեր նշած գնով կամ ավելի լավ, իսկ շուկայականը՝ ընթացիկ լավագույն գնով:' },
    { q: 'Ի՞նչ է ticker-ը:', a: 'Ticker-ը բորսայում ընկերության կամ արժեթղթի կարճ տառային կոդն է (օրինակ՝ AAPL, TSLA):' },
    { q: 'Ի՞նչ է դիվիդենտը:', a: 'Դիվիդենտը ընկերության շահույթի այն մասն է, որը բաշխվում է բաժնետերերի միջև:' },
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans pb-16">
      
      {/* 1. Մանուշակագույն Header navigation բար */}
      <div className="bg-[#6b21a8] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center overflow-x-auto font-semibold text-xs md:text-sm">
          <Link
            to="/securities/investment-services"
            className="hover:bg-[#581c87] px-6 py-3.5 whitespace-nowrap transition opacity-90 hover:opacity-100"
          >
            Ներդրումային ծառայություններ
          </Link>

          <Link
            to="/securities/bonds"
            className="hover:bg-[#581c87] px-6 py-3.5 whitespace-nowrap transition opacity-90 hover:opacity-100"
          >
            Պարտատոմսեր
          </Link>

          <Link
            to="/securities/custody"
            className="hover:bg-[#581c87] px-6 py-3.5 whitespace-nowrap transition opacity-90 hover:opacity-100"
          >
            ՀԿԴ ծառայություններ
          </Link>

          <Link
            to="/securities/repo"
            className="hover:bg-[#581c87] px-6 py-3.5 whitespace-nowrap transition opacity-90 hover:opacity-100"
          >
            Ռեպո/Հակադարձ Ռեպո գործարքներ
          </Link>

          {/* Ակտիվ կետ՝ EvocaINVEST */}
          <Link
            to="/securities/evocainvest"
            className="bg-[#4c1d95] px-6 py-3.5 whitespace-nowrap font-bold transition"
          >
            EvocaINVEST
          </Link>
        </div>
      </div>

      {/* Բովանդակություն */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        
        {/* 2. Breadcrumb */}
        <div className="text-xs text-gray-500 mb-6 flex items-center space-x-2">
          <span>🏠</span>
          <span>›</span>
          <Link to="/" className="hover:underline">Անհատ</Link>
          <span>›</span>
          <Link to="/securities/investment-services" className="hover:underline">Արժեթղթեր</Link>
          <span>›</span>
          <span className="text-gray-800 font-medium">EvocaINVEST</span>
        </div>

        {/* 3. Hero banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="bg-gray-50/80 p-8 md:p-10 rounded-3xl space-y-4">
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
              Կատարիր Ներդրումեր և <br /> ստացիր եկամուտ <br /> EvocaINVEST հավելվածով
            </h1>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
              EvocaINVEST հավելվածի միջոցով կարող ես կատարել ներդրումներ մի շարք միջազգային ֆինանսական շուկաներում:
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-sm bg-[#e9d5ff]/30 p-4 flex items-center justify-center">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17812682689927/780x585.png" 
              alt="EvocaINVEST Banner" 
              className="w-full h-72 md:h-80 object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* 4. Տեքստային բովանդակություն */}
        <div className="max-w-4xl space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed font-medium mb-12">
          <p className="font-semibold text-gray-800">Apple, Tesla, Google, Amazon, թե՞ Nike:</p>
          
          <p>
            <strong className="text-purple-900 font-bold">EvocaINVEST</strong>-ի միջոցով դու կարող ես ներդրումներ կատարել միջազգային և տեղական կապիտալի շուկաներում: Իսկ բրոքերային հաշիվ կարող ես բացել ընդամենը մի քանի րոպեում՝ անմիջապես <strong className="text-purple-900 font-bold">EvocaTOUCH</strong> հավելվածից:
          </p>

          <p>Գնիր բաժնետոմսեր, պարտատոմսեր, ETF-ներ և կառավարիր պորտֆելդ մեկ հարթակից:</p>

          <p className="text-purple-900 font-bold text-sm md:text-base pt-2">Քո Ներդրումային գործիքները</p>

          <p>
            <strong className="text-purple-900 font-bold">EvocaINVEST</strong>-ը հնարավորություն է տալիս ներդրումներ կատարել ամերիկյան, եվրոպական և ասիական ֆոնդային բորսաներում՝ ընտրելով քեզ հարմար ռազմավարությունը:
          </p>

          <ul className="space-y-3 pt-2">
            <li className="flex items-start gap-2">
              <span className="text-purple-700 font-bold text-base">•</span>
              <span><strong className="text-purple-900 font-bold">Բաժնետոմսեր՝</strong> Ներդրումներ համաշխարհային առաջատար ընկերություններում</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-700 font-bold text-base">•</span>
              <span><strong className="text-purple-900 font-bold">Պարտատոմսեր և եվրոպարտատոմսեր՝</strong> ավելի կանխատեսելի ներդրումներ և կայուն եկամտի հնարավորություն</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-700 font-bold text-base">•</span>
              <span><strong className="text-purple-900 font-bold">ETF-ներ՝</strong> դիվերսիֆիկացված ներդրումներ մեկ գործիքի միջոցով</span>
            </li>
          </ul>

          <p className="pt-4">
            Անկախ նրանից՝ նո՞ր ես սկսում ներդրում կատարել, թե՞ արդեն ունես փորձ, կատարում ես երկարաժամկե՞տ, թե՞ կարճաժամկետ ներդրումներ, <strong className="text-purple-900 font-bold">EvocaINVEST</strong>-ը տալիս է բոլոր անհրաժեշտ գործիքները քո ներդրումային ռազմավարության համար:
          </p>

          <p className="text-purple-900 font-bold text-sm md:text-base pt-4">Բացիր բրոքերային հաշիվ 3 պարզ քայլով</p>

          <div className="space-y-4">
            <div>
              <p className="font-bold text-purple-900">1. Ներբեռնիր EvocaTOUCH հավելվածը</p>
              <p className="mt-1">Բանկային և Ներդրումային գործառույթները՝ մեկ հավելվածում: Հասանելի է iOS և Android համակարգերում:</p>
              <p className="mt-1">
                Ներբեռնելու համար անցիր (
                <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className="text-purple-700 underline font-semibold">App Store</a> և {' '}
                <a href="https://play.google.com" target="_blank" rel="noreferrer" className="text-purple-700 underline font-semibold">Google Play</a>):
              </p>
            </div>

            <div>
              <p className="font-bold text-purple-900">2. Բացիր Բրոքերային հաշիվ</p>
              <p className="mt-1">
                Մուտք գործիր հավելվածի «Հաշիվներ» բաժին, ընտրիր «Բրոքերային հաշիվ» և ավարտիր գրանցումը մի քանի րոպեում՝ առանց Բանկ այցելելու անհրաժեշտության:
              </p>
            </div>

            <div>
              <p className="font-bold text-purple-900">3. Սկսիր Ներդրումներ կատարել</p>
              <p className="mt-1">
                Փնտրիր ընկերությունն ըստ անվան կամ ticker-ի EvocaINVEST հավելվածում, տեղադրիր լիմիտային կամ շուկայական պատվեր և հետևիր պորտֆելինգ:
              </p>
            </div>
          </div>
        </div>

        {/* 5. 7 քայլերի իլյուստրացիայի բաները */}
        <div className="my-10 rounded-2xl overflow-hidden border border-purple-100 shadow-sm">
          <img 
            src="https://www.evoca.am/file_manager/other/invest%20steps%20(1).png" 
            alt="7 Steps EvocaINVEST" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* 6. Ինչու ընտրել EvocaINVEST */}
        <div className="max-w-4xl space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed font-medium mb-12">
          <h2 className="text-purple-900 font-bold text-base md:text-lg">Ինչո՞ւ ընտրել EvocaINVEST Ներդրումային հարթակը</h2>

          <div>
            <p className="font-bold text-purple-900">24/7 պատվերներ</p>
            <p className="mt-1">Տեղադրիր պատվերդ ցանկացած ժամի, այն կհերթագրվի և կկատարվի ավտոմատ՝ բորսայի բացվելուն պես:</p>
          </div>

          <div>
            <p className="font-bold text-purple-900">Մրցակցային սակագներ</p>
            <p className="mt-1">Մրցակցային և թափանցիկ միջնորդավճարներ: Ամբողջական սակագներին ծանոթանում ես նախքան գործարքը հաստատելը:</p>
          </div>

          <div>
            <p className="font-bold text-purple-900">Լիմիտային և շուկայական պատվերներ</p>
            <p className="mt-1">
              Պատվերներն ավտոմատ կիրառվում են որպես լիմիտային՝ գնի ճշգրտության համար: Անհրաժեշտության դեպքում կարող ես ակնթարթորեն անցնել շուկայական պատվերի, եթե արագությունն ավելի կարևոր է:
            </p>
          </div>

          <div>
            <p className="font-bold text-purple-900">Զարգացրու ոչ միայն պորտֆելոդ, այլ նաև գիտելիքդ</p>
            <p className="mt-1">Միանալով <strong className="text-purple-900 font-bold">EvocaINVEST</strong> տելեգրամյան ալիքին՝ դու կգտնես.</p>
            <ul className="space-y-2 mt-2">
              <li className="flex items-start gap-2"><span className="text-purple-700">•</span> <span>Ներդրումների մասին պարզ և հասկանալի նյութեր,</span></li>
              <li className="flex items-start gap-2"><span className="text-purple-700">•</span> <span>Շուկայական հետազոտություններ և վերլուծություններ,</span></li>
              <li className="flex items-start gap-2"><span className="text-purple-700">•</span> <span>Փորձագետների կարծիքներ միջազգային ներդրումային մասնագետների կողմից,</span></li>
              <li className="flex items-start gap-2"><span className="text-purple-700">•</span> <span>Համաշխարհային ներդրումային շուկաների մասին կարևոր թարմացումներ:</span></li>
            </ul>
          </div>
        </div>

        {/* 7. ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ / Օգտակար Նյութեր (YouTube Videos) */}
        <div className="mb-12">
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 tracking-wide uppercase">
            Անհրաժեշտ տեղեկատվություն
          </h3>

          <div className="border border-purple-200 rounded-2xl p-4 md:p-6 bg-white">
            <div className="flex items-center gap-2 text-purple-900 font-bold mb-6 text-sm md:text-base">
              <span>▲</span>
              <span>EvocaINVEST օգտակար նյութեր</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videoUrls.map((url, index) => (
                <div key={index} className="aspect-video w-full rounded-xl overflow-hidden shadow-sm bg-black">
                  <iframe
                    className="w-full h-full"
                    src={url}
                    title={`EvocaINVEST Video ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 8. Հաճախ տրվող հարցեր (FAQ) */}
        <div className="mb-12">
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-6">
            Հաճախ տրվող հարցեր
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`border rounded-xl transition ${
                    isOpen ? 'border-purple-400 bg-purple-50/20' : 'border-gray-200 bg-white'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 text-left font-bold text-xs md:text-sm text-gray-800"
                  >
                    <span>{faq.q}</span>
                    <span className="text-purple-700 text-xs font-bold ml-2">
                      {isOpen ? '▲' : '▼'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-purple-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
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

export default EvocaInvest;