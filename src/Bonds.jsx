import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Bonds = () => {
  // Accordion-ների բացել/փակելու state
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionItems = [
    {
      title: 'Պարտատոմսերի թողարկում',
      content: (
        <div className="space-y-6">
          <h3 className="text-center font-black text-purple-800 text-sm md:text-base uppercase tracking-wide">
            ԹՈՂԱՐԿՎԱԾ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ
          </h3>

          {/* Աղյուսակ */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="p-2 font-bold text-gray-700">Դաս</th>
                  <th className="p-2 font-bold text-purple-800">Անվանական արժեկտրոնային</th>
                  <th className="p-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="p-2 font-medium">Անվանական արժեք</td>
                  <td className="p-2 font-bold text-gray-900">10,000 ՀՀ դրամ</td>
                  <td className="p-2 font-bold text-gray-900">100 ԱՄՆ դոլար</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Ընդհանուր ծավալ</td>
                  <td className="p-2 font-bold text-gray-900">3,000,000,000 ՀՀ դրամ</td>
                  <td className="p-2 font-bold text-gray-900">15,000,000 ԱՄՆ դոլար</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Թողարկվող պարտատոմսերի քանակ</td>
                  <td className="p-2 font-bold text-gray-900">300,000 հատ</td>
                  <td className="p-2 font-bold text-gray-900">150,000 հատ</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Շրջանառության ժամկետ</td>
                  <td className="p-2 font-bold text-gray-900">36 ամիս</td>
                  <td className="p-2 font-bold text-gray-900">36 ամիս</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Արժեկտրոնային տարեկան տոկոսադրույք</td>
                  <td className="p-2 font-bold text-purple-700">10%</td>
                  <td className="p-2 font-bold text-purple-700">5%</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Արժեկտրոնների վճարման պարբերականություն</td>
                  <td className="p-2 font-bold text-gray-900">Եռամսյակային</td>
                  <td className="p-2 font-bold text-gray-900">Եռամսյակային</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Տեղաբաշխող</td>
                  <td className="p-2 font-bold text-gray-900" colSpan={2}>«Էվոկաբանկ» ԲԲԸ</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-600 font-medium">
            Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 03.07.2024թ-ի թիվ 1/254Ա որոշմամբ:
          </p>

          {/* 3 Քարտ-փաստաթղթեր */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100 flex flex-col items-center text-center space-y-3 cursor-pointer hover:bg-purple-100/50 transition">
              <span className="text-purple-700 font-bold uppercase text-xs">ԾՐԱԳՐԱՅԻՆ ԱԶԴԱԳԻՐ</span>
              <div className="w-16 h-20 border-2 border-purple-300 rounded-lg flex items-center justify-center text-purple-600 font-bold text-2xl">
                ✓
              </div>
            </div>

            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100 flex flex-col items-center text-center space-y-3 cursor-pointer hover:bg-purple-100/50 transition">
              <span className="text-purple-700 font-bold uppercase text-xs">ՊԱՅՄԱՆՆԵՐ ՀՀ ԴՐԱՄՈՎ</span>
              <div className="w-16 h-20 border-2 border-purple-300 rounded-lg flex items-center justify-center text-purple-600 font-bold text-2xl">
                ֏
              </div>
            </div>

            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100 flex flex-col items-center text-center space-y-3 cursor-pointer hover:bg-purple-100/50 transition">
              <span className="text-purple-700 font-bold uppercase text-xs">ՊԱՅՄԱՆՆԵՐ ԱՄՆ ԴՈԼԱՐՈՎ</span>
              <div className="w-16 h-20 border-2 border-purple-300 rounded-lg flex items-center justify-center text-purple-600 font-bold text-2xl">
                $
              </div>
            </div>
          </div>
        </div>
      )
    },
    { title: 'ՏԱՍՆԵՐԿՈՒԵՐՈՐԴ ԵՎ ՏԱՍՆԵՐԵՔԵՐՈՐԴ', content: <p className="text-gray-600">Տեղեկատվությունը թարմացվում է:</p> },
    { title: 'ՏԱՍՆԵՐՈՐԴ ԵՎ ՏԱՍՆՄԵԿԵՐՈՐԴ', content: <p className="text-gray-600">Տեղեկատվությունը թարմացվում է:</p> },
    { title: 'ՅՈԹԵՐՈՐԴ, ՈՒԹԵՐՈՐԴ ԵՎ ԻՆՆԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ', content: <p className="text-gray-600">Տեղեկատվությունը թարմացվում է:</p> },
    { title: 'ՀԻՆԳԵՐՈՐԴ ԵՎ ՎԵՑԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ', content: <p className="text-gray-600">Տեղեկատվությունը թարմացվում է:</p> },
    { title: 'ԵՐՐՈՐԴ ԵՎ ՉՈՐՐՈՐԴ ԹՈՂԱՐԿՈՒՄ', content: <p className="text-gray-600">Տեղեկատվությունը թարմացվում է:</p> },
    { title: 'ԱՌԱՋԻՆ ԵՎ ԵՐԿՐՈՐԴ ԹՈՂԱՐԿՈՒՄ', content: <p className="text-gray-600">Տեղեկատվությունը թարմացվում է:</p> },
    { title: 'Հաճախ տրվող հարցեր պարտատոմսերի մասին', content: <p className="text-gray-600">Պարտատոմսերի վերաբերյալ հաճախ տրվող հարցերի պատասխանները:</p> }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans pb-16">
      
      {/* 1. Մանուշակագույն Header navigation բար (Նկար 1) */}
      <div className="bg-[#6b21a8] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center overflow-x-auto font-semibold text-xs md:text-sm">
          <Link
            to="/securities/investment-services"
            className="hover:bg-[#581c87] px-6 py-3.5 whitespace-nowrap transition opacity-90 hover:opacity-100"
          >
            Ներդրումային ծառայություններ
          </Link>

          {/* Ակտիվ կետ՝ Պարտատոմսեր */}
          <Link
            to="/securities/bonds"
            className="bg-[#4c1d95] px-6 py-3.5 whitespace-nowrap font-bold transition"
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

          <Link
            to="/securities/evocainvest"
            className="hover:bg-[#581c87] px-6 py-3.5 whitespace-nowrap transition opacity-90 hover:opacity-100"
          >
            EvocaINVEST
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
          <Link to="/securities/investment-services" className="hover:underline">Արժեթղթեր</Link>
          <span>›</span>
          <span className="text-gray-800 font-medium">Պարտատոմսեր</span>
        </div>

        {/* 3. Վերևի բլոկ՝ տեքստ + աջ կողմի նկարը (Նկար 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
          <div className="bg-gray-50/80 p-8 md:p-10 rounded-3xl space-y-4">
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
              Պարտատոմսեր
            </h1>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
              Evocabank-ը հնարավորություն է տալիս ձեռք բերել պարտատոմսեր և ստանալ բարձր եկամուտներ: Մենք ցանկանում ենք դառնալ Ձեր բարեկեցիկ ապագայի մի մասնիկը:
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-sm bg-[#e9d5ff]/30 p-4 flex items-center justify-center">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg" 
              alt="Bonds" 
              className="w-full h-72 md:h-80 object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* 4. Նկարագրության հատված (Նկար 1 և 2) */}
        <div className="max-w-5xl mx-auto space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed font-medium mb-12">
          <p>
            Առաջին անգամ հայաստանյան ֆինանսական համակարգում <strong className="text-purple-700">Evocabank</strong>-ը, որպես նորարար և ժամանակակից Բանկ, իրականացրել է իր կողմից թողարկված պարտատոմսերի օնլայն տեղաբաշխում՝ <strong className="text-purple-700">EvocaTOUCH</strong> հավելվածի միջոցով:
          </p>

          <p>
            <strong className="text-purple-800">Պարտատոմսերը</strong> պահանջված և բարձր եկամտաբեր ֆինանսական գործիքներ են: Դրանք ապահով են և ունեն մի շարք առավելություններ՝
          </p>

          <ul className="list-disc pl-5 space-y-3 text-gray-700">
            <li>
              Անվանական պարտատոմսերով ներգրավված դրամական միջոցները համարվում են երաշխավորված բանկային ավանդ և ՀՀ օրենսդրությամբ սահմանված չափերով երաշխավորված են «Ավանդների հատուցումը երաշխավորող հիմնադրամ»-ի կողմից:
            </li>
            <li>
              ՀՀ Ֆոնդային Բորսայում ցուցակված պարտատոմսերից ստացված եկամուտները ազատվում են եկամտային հարկից և ոչ ռեզիդենտի շահութահարկից՝ ապահովելով ավելի բարձր եկամտաբերություն:
            </li>
          </ul>
        </div>

        {/* 5. Անհրաժեշտ տեղեկատվություն / Accordions (Նկար 2 և 3) */}
        <div className="max-w-5xl mx-auto space-y-4 mb-14">
          <h2 className="text-base md:text-lg font-black text-gray-900 tracking-wide uppercase mb-4">
            ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
          </h2>

          <div className="space-y-3">
            {accordionItems.map((item, index) => (
              <div 
                key={index}
                className="border border-purple-200 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-4 md:p-5 flex justify-between items-center bg-white hover:bg-purple-50/50 transition font-bold text-xs md:text-sm text-gray-800"
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-purple-600 font-bold">
                      {openAccordion === index ? '˄' : '˅'}
                    </span>
                    <span>{item.title}</span>
                  </span>
                </button>

                {openAccordion === index && (
                  <div className="p-4 md:p-6 pt-2 bg-white text-xs md:text-sm text-gray-700 font-medium border-t border-purple-50">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 6. Փաստաթղթեր բաժին (Նկար 4) */}
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-base md:text-lg font-black text-gray-900 tracking-wide mb-4">
            Փաստաթղթեր
          </h2>

          <div className="space-y-3">
            <div className="bg-gray-50 hover:bg-purple-50/60 p-4 rounded-2xl border border-gray-100 flex items-center space-x-3 cursor-pointer transition">
              <span className="text-purple-700 text-xl">📄</span>
              <span className="text-xs md:text-sm font-bold text-gray-900">
                Դոլարային պարտատոմսերիի գները 30.09.2024-29.11.2024 ժամանակահատվածի համար
              </span>
            </div>

            <div className="bg-gray-50 hover:bg-purple-50/60 p-4 rounded-2xl border border-gray-100 flex items-center space-x-3 cursor-pointer transition">
              <span className="text-purple-700 text-xl">📄</span>
              <span className="text-xs md:text-sm font-bold text-gray-900">
                Դրամային պարտատոմսերիի գները 30.09.2024-29.11.2024 ժամանակահատվածի համար
              </span>
            </div>
          </div>
        </div>

      </div>
            {/* Footer Section */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6 text-xs text-gray-600">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-3">
            <h3 className="text-xl font-black text-[#6b21a8]">evocaBANK</h3>
            <p>ք. Երևան, 0010, Հանրապետության 44/2</p>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="text-[10px] text-gray-400 pt-2">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3 text-sm">Բանկի մասին</h4>
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
            <h4 className="font-bold text-gray-900 mb-3 text-sm">Օգտակար հղումներ</h4>
            <p className="hover:text-purple-700 cursor-pointer">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</p>
            <p className="hover:text-purple-700 cursor-pointer">Հաճախորդի ռեզիդենտության չափանիշներ</p>
            <p className="hover:text-purple-700 cursor-pointer">Կարգավորում</p>
            <p className="hover:text-purple-700 cursor-pointer">Գաղտնիության քաղաքականություն</p>
            <p className="hover:text-purple-700 cursor-pointer">Ֆին. հաշտարար</p>
            <p className="hover:text-purple-700 cursor-pointer">Ֆինանսական հանցագործությունների կանխարգելում</p>
            <p className="hover:text-purple-700 cursor-pointer">Հղումներ Բանկի քարտապանների համար</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 mb-3 text-sm">Այլ հղումներ</h4>
            <p className="hover:text-purple-700 cursor-pointer">EvocaONLINE</p>
            <p className="hover:text-purple-700 cursor-pointer">Պահատուփեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Հաճախ տրվող հարցեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Հայտարարություններ</p>
            <p className="hover:text-[#6b21a8] cursor-pointer font-semibold">Dibrary</p>
            <p className="hover:text-purple-700 cursor-pointer">Բուկլետներ</p>
            <p className="hover:text-purple-700 cursor-pointer">Հետադարձ կապ</p>
            <p className="hover:text-purple-700 cursor-pointer">Կայքի քարտեզ</p>

            <div className="flex gap-3 text-lg text-gray-600 pt-2">
              <span className="cursor-pointer hover:text-purple-700">f</span>
              <span className="cursor-pointer hover:text-purple-700">i</span>
              <span className="cursor-pointer hover:text-purple-700">p</span>
              <span className="cursor-pointer hover:text-purple-700">y</span>
              <span className="cursor-pointer hover:text-purple-700">in</span>
            </div>
            
            <div className="flex gap-2 pt-1">
              <button className="bg-black text-white px-3 py-1.5 rounded text-[10px] font-semibold">App Store</button>
              <button className="bg-black text-white px-3 py-1.5 rounded text-[10px] font-semibold">Google Play</button>
            </div>
            
            <p className="text-purple-700 font-bold hover:underline cursor-pointer pt-2">
              Բանկի հասցեները և աշխատաժամերը
            </p>
            <p className="text-purple-700 font-bold hover:underline cursor-pointer">Կապ մեզ հետ</p>
            <p className="font-bold text-gray-900 text-sm"><a href="tel:+37410605555">+374 10 605555</a></p>
            <p className="text-[#6b21a8] font-black text-base"><a href="tel:8444">8444</a></p>
          </div>

        </div>

        {/* Disclaimer Bottom Bar */}
        <div className="bg-gray-50 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100">
          <p className="text-[10px] text-gray-500 leading-relaxed max-w-4xl">
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանություն, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ԲԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
          </p>
          <div className="flex gap-3 opacity-70">
            <span className="font-bold border px-2 py-1 rounded bg-white text-[10px] text-gray-600">fininfo</span>
            <span className="font-bold border px-2 py-1 rounded bg-white text-[10px] text-gray-600">abcfinance.am</span>
            <span className="font-bold border px-2 py-1 rounded bg-white text-[10px] text-gray-600">arca</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Bonds;