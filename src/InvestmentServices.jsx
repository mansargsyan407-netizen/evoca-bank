import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InvestmentServices = () => {
  // Accordion (Անհրաժեշտ տեղեկատվություն) բացել/փակելու state
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionItems = [
    {
      title: 'Ներդրումային ծառայությունների մատուցման կանոններ',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-purple-700 underline mb-2 cursor-pointer">
              Արժեթղթերի շուկայում Բրոքերային ծառայությունների մատուցման կանոններ
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Այս կանոնները սահմանում են մեր հաճախորդների կողմից մեզ ներկայացված արժեթղթերով գործարքների կնքման պատվերների ընդունման/հաղորդման, հաճախորդների հետ կապի իրականացման, հաճախորդների հաշվին արժեթղթերով գործարքների կատարման կարգն ու պայմանները, ինչպես նաև տրամադրում գործառնությունների իրականացման հետ կապված შესაძլավոր ռիսկերի վերաբերյալ ընդհանրական տեղեկություններ: Կանոնները մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին, ՀՀ Կենտրոնական բանկի նորմատիվ և այլ իրավական ակտերին համապատասխան:
            </p>
          </div>

          <div>
            <h4 className="font-bold text-purple-700 underline mb-2 cursor-pointer">
              Արժեթղթերի Պահառության գործունեության կանոններ
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Այս կանոնները սահմանում են արժեթղթերի հաշիվների հետ կատարվող գործառնությունների ցանկը, ծառայությունների մատուցման/կատարման կարգն ու պայմանները, պահառության հետ կապված հարաբերությունները, ինչպես նաև պահառուի աշխատանքների կանոնները: Կանոնները մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին և պահառության գործունեությունը կանոնակարգող իրավական այլ ակտերին (այդ թվում՝ Հայաստանի կենտրոնական դեպոզիտարիայի կանոնների պահանջներին) համապատասխան:
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Ծառայությունների մատուցման սակագներ',
      content: (
        <p className="text-gray-600 leading-relaxed">
          Ներդրումային և բրոքերային ծառայությունների մատուցման սակագները սահմանվում են բանկի կողմից հաստատված դրույքաչափերին համապատասխան:
        </p>
      )
    },
    {
      title: 'Լրացուցիչ տեղեկատվություն',
      content: (
        <p className="text-gray-600 leading-relaxed">
          Լրացուցիչ տեղեկությունների համար կարող եք կապ հաստատել բանկի ներդրումային դեպարտամենտի հետ:
        </p>
      )
    }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans pb-16">
      
      {/* 1. Մանուշակագույն Header navigation բար (Նկար 1) */}
      <div className="bg-[#6b21a8] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center overflow-x-auto font-semibold text-xs md:text-sm">
          {/* Ակտիվ կետ՝ Ներդրումային ծառայություններ */}
          <Link
            to="/securities/investment-services"
            className="bg-[#4c1d95] px-6 py-3.5 whitespace-nowrap font-bold transition"
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
          <span className="hover:underline cursor-pointer">Արժեթղթեր</span>
          <span>›</span>
          <span className="text-gray-800 font-medium">Ներդրումային ծառայություններ</span>
        </div>

        {/* 3. Վերևի բլոկ՝ տեքստ + աջ կողմի նկարը (Նկար 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
          <div className="bg-gray-50/80 p-8 md:p-10 rounded-3xl space-y-4">
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
              Ներդրումային <br /> ծառայություններ
            </h1>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
              Evocabank-ն առաջարկում է ներդրումային ծառայություններ և տալիս եկամտի նոր աղբյուրների հնարավորություն՝ ձեր պահանջներին և ցանկություններին համապատասխան:
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-sm bg-[#e9d5ff]/30 p-4 flex items-center justify-center">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg" 
              alt="Investment Services" 
              className="w-full h-72 md:h-80 object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* 4. Նկարագրության հատված & Կոնտակտներ (Նկար 1 և 2) */}
        <div className="max-w-5xl mx-auto space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed font-medium mb-12">
          <p>
            Բանկն իր հաճախորդներին ներդրումային ծառայություններ է մատուցում ինչպես տեղական, այնպես էլ՝ միջազգային շուկաներում: Բանկի կողմից առաջարկվող ծառայությունները հասանելի են իրավաբանական և ֆիզիկական անձ հանդիսացող հաճախորդներին:
          </p>

          <div className="space-y-2 pt-2">
            <h3 className="font-bold text-purple-800 text-sm md:text-base">
              Ինչպե՞ս դառնալ հաճախորդ.
            </h3>
            <p>
              Ներդրումային ծառայություններից օգտվելու համար անհրաժեշտ է Բանկում ունենալ ընթացիկ բանկային հաշիվ, որի բացման համար պահանջվող փաստաթղթերին կարող եք ծանոթանալ{' '}
              <span className="text-purple-700 font-bold underline cursor-pointer">
                այստեղ
              </span>:
            </p>
            <p>
              Բրոքերային հաշվի բացման համար անհրաժեշտ է այցելել Բանկի գլխամասային գրասենյակ:
            </p>
          </div>

          {/* Կոնտակտային տվյալներ (Նկար 2) */}
          <div className="pt-4 space-y-3 border-t border-gray-100">
            <div>
              <span className="font-bold text-purple-800 block">Հասցե`</span>
              <span>Երևան, Հանրապետության 44/2</span>
            </div>

            <div>
              <span className="font-bold text-purple-800 block">Հետադարձ կապ`</span>
              <div>Հեռ.` <strong className="text-gray-900">374 33 777 453</strong></div>
              <div><strong className="text-gray-900">374 33 603 055</strong></div>
            </div>

            <div className="pt-1">
              <span>Էլ. հասցե` </span>
              <a href="mailto:investsecurities@evoca.am" className="text-purple-700 font-bold underline">
                investsecurities@evoca.am
              </a>
            </div>
          </div>

          {/* Ուշադրություն (Նկար 2) */}
          <div className="pt-4 text-xs leading-relaxed">
            <strong className="text-purple-800 font-bold">ՈՒՇԱԴՐՈՒԹՅՈՒՆ.</strong>{' '}
            Ֆինանսական շուկաներում գործարքների իրականացման հետ կապված ՌԻՍԿԸ ԿՐՈՒՄ Է ՀԱՃԱԽՈՐԴԸ: Բանկը ՉԻ ՓՈԽՀԱՏՈՒՑԵԼՈՒ հաճախորդի վնասները, եթե դրանք չեն պատճառվել Բանկի կողմից անբարեխիղճ վարքագծի արդյունքում:
          </div>
        </div>

        {/* 5. Անհրաժեշտ տեղեկատվություն / Accordions (Նկար 2 և 3) */}
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-base md:text-lg font-black text-gray-900 tracking-wide uppercase mb-4">
            Անհրաժեշտ տեղեկատվություն
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

      </div>
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-100 mt-12">
              <h2 className="text-2xl font-black text-gray-900 mb-8">Այլ նորություններ</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
                {/* News Card 1 - Firebird AI */}
                <Link 
                  to="/news/firebird-ai" 
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 block cursor-pointer group"
                >
                  <img 
                    src="https://www.evoca.am/images-cache/news/1/17864472573391/439x320.png" 
                    alt="Firebird AI" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-[#6b21a8] transition-colors">
                      Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»
                    </h3>
                    <p className="text-xs text-gray-400 pt-2">11.08.2026</p>
                  </div>
                </Link>
      
                {/* News Card 2 - Green Rock */}
                <Link 
                  to="/news/green-rock" 
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 block cursor-pointer group"
                >
                  <img 
                    src="https://www.evoca.am/images-cache/news/1/17854167235525/780x585.png" 
                    alt="Green Rock" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-[#6b21a8] transition-colors">
                      Evocabank-ը և Green Rock-ը մեկնարկեցին Բանկի նոր գլխամասի նախագիծը
                    </h3>
                    <p className="text-xs text-gray-400 pt-2">30.07.2026</p>
                  </div>
                </Link>
      
                {/* News Card 3 - MIT Certified */}
                <Link 
                  to="/news/mit-certified" 
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 block cursor-pointer group"
                >
                  <img 
                    src="https://www.evoca.am/images-cache/news/1/17842875742396/428x321.png" 
                    alt="MIT Certified" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-[#6b21a8] transition-colors">
                      Evoca-ի ղեկավարները հաջողությամբ ավարտեցին Generative AI դասընթացը
                    </h3>
                    <p className="text-xs text-gray-400 pt-2">17.07.2026</p>
                  </div>
                </Link>
      
              </div>
      
              {/* Updated Timestamp */}
              <div className="text-right text-[11px] text-gray-400 mt-6">
                Թարմացվել է` 21/08/2026 18:58
              </div>
            </section>
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

export default InvestmentServices;