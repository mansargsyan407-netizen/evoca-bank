import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function EvocaSalaryPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "Ո՞վ կարող է միանալ Evoca աշխատավարձային նախագծին․",
      a: "Evoca աշխատավարձային նախագծին կարող է միանալ յուրաքանչյուր ֆիզիկական անձ, ով ցանկանում է իր աշխատավարձը ստանալ Evocabank-ի քարտով՝ անկախ գործունեության ոլորտից կամ զբաղվածությունից։"
    },
    {
      q: "Կարո՞ղ եմ օգտվել միայն նոր գործատուունենալու դեպքում․",
      a: "Ո՛չ։ Բավական է ձեր գործատուին ներկայացնել Evoca քարտի տվյալները, և աշխատավարձը կփոխանցվի արդեն Evoca-ում բացված հաշվին։"
    },
    {
      q: "Կարո՞ղ եմ դիմել, եթե դեռ Evoca-ի հաճախորդ չեմ․",
      a: "Իհարկե՛։ Եթե դեռ Evoca-ի հաճախորդ չես, դու նույնպես կարող ես միանալ Evoca աշխատավարձային նախագծին:"
    },
    {
      q: "Ե՞րբ կսկսեմ օգտվել արտոնություններից․",
      a: " Արտոնություններից կարող ես օգտվել այն պահից, երբ առաջին աշխատավարձդ փոխանցվի Evocabank-ի քարտին։Քարտերի առավելությունները գործում են անմիջապես, իսկ վարկային առավելություններից կարող ես օգտվել աշխատավարձդ Բանկի քարտին մեկ անգամ ստանալուց հետո։"
    },
    {
      q: "Կարո՞ղ եմունենալ մի քանի քարտ աշխատավարձային նախագծի շրջանակում․",
      a: "Այո՛, կարող ես ունենալ Բանկի կողմից թողարկված մի քանի գործող քարտ, սակայն աշխատավարձային նախագծի շրջանակում կարող ես ընտրել նշված քարտերից մեկը, որի վրա էլ կստանաս աշխատավարձդ, իսկ Evoca Travel Card-ը կարող ես ձեռք բերել 50% զեղչով։"
    },
    {
      q: "Ինչպե՞ս կարող եմ դիմել աշխատավարձային նախագծին միանալու համար․",
      a: "Միանալու համար կարող ես՝(Զանգահարել +37410605555 | 8444 հեռախոսահամարներով),կամ (Այցելել Evocabank-ի ցանկացած մասնաճյուղ և ստանալ խորհրդատվություն)"
    }
  ];

  return (
    <div className="w-full bg-[#f8f9fa] text-gray-800 font-sans relative">
      
      {/* Breadcrumb Navigation */}
      <div className="px-8 md:px-20 py-4 text-xs text-gray-500 flex items-center gap-2">
        <Link to="/" className="hover:underline">Վերադառնալ</Link>
        <span>›</span>
        <span>Անհատ</span>
        <span>›</span>
        <span className="font-bold text-gray-800">EvocaSALARY</span>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 p-8 lg:p-16 space-y-6">
            <h1 className="text-3xl lg:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              EVOCA<br />ԱՇԽԱՏԱՎԱՐՁԱՅԻՆ<br />ՆԱԽԱԳԻԾ
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Քո աշխատավարձը կարող է քեզ տալ շատ ավելին։<br />
              Պարզապես պետք է ընտրել Evocabank-ը։
            </p>
          </div>
          <img src="https://www.evoca.am/images-cache/menu/1/17738355890361/780x585.png" alt="" />
        </div>
      </section>

      {/* Main Benefits Content */}
      <section className="max-w-5xl mx-auto px-6 space-y-12 mb-20 text-sm md:text-base text-gray-700">
        <p className="leading-relaxed">
          Evoca աշխատավարձային նախագիծը մեկնարկել է նրանց համար, ովքեր, իրենց աշխատավարձը քարտին ստանալուց բացի, ցանկանում են նաև ստանալ <strong className="text-[#6b21a8]">նոր հնարավորություններ ու առավելություններ</strong>:
        </p>

        {/* Benefit 1 */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#6b21a8]">
            Բեր աշխատավարձդ Evoca, Ստացիր անվճար <span className="underline cursor-pointer">Mastercard Gold</span>
          </h3>
          <ul className="space-y-2 list-none pl-2">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#6b21a8] rounded-full"></span>
              <span>Պրեմիում դասի քարտ</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#6b21a8] rounded-full"></span>
              <span>Հասանելի ամբողջ աշխարհում</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#6b21a8] rounded-full"></span>
              <span>Գումարի անվտանգության բարձր մակարդակ</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#6b21a8] rounded-full"></span>
              <span>Դրական մնացորդի նկատմամբ <strong className="text-[#6b21a8]">2% տարեկան տոկոսադրույք</strong></span>
            </li>
          </ul>
        </div>

        {/* Benefit 2 */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#6b21a8]">
            Բեր աշխատավարձդ Evoca, Ստացիր 50% զեղչով <span className="underline cursor-pointer">Evoca Travel Card</span>
          </h3>
          <ul className="space-y-2 list-none pl-2">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#6b21a8] rounded-full"></span>
              <span>Մինչև <strong className="text-[#6b21a8]">1.5% cashback</strong> արտասահմանում իրականացրած վճարումների համար</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#6b21a8] rounded-full"></span>
              <span>Անվճար <strong className="text-[#6b21a8]">6 մուտք</strong> Lounge Key սրահներ քեզ և հյուրերիդ համար</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#6b21a8] rounded-full"></span>
              <span>Անվճար <strong className="text-[#6b21a8]">6 անգամ</strong> Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#6b21a8] rounded-full"></span>
              <span>Այլ ճամփորդական առավելություններ</span>
            </li>
          </ul>
        </div>

        {/* Benefit 3 */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#6b21a8]">
            Բեր աշխատավարձդ Evoca Ստացիր մի շարք <span className="underline cursor-pointer">Բենեֆիթներ</span>
          </h3>
          <p className="leading-relaxed">
            Դառնալով Evoca քարտապան՝ կունենաս հնարավորություն օգտվելու <strong className="text-[#6b21a8]">Evoca Benefits</strong> նախագծից և մեր 100-ից ավել գործընկերների մոտ կստանաս՝
          </p>
          <ul className="space-y-2 list-none pl-2">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#6b21a8] rounded-full"></span>
              <span>Մինչև <strong className="text-[#6b21a8]">25% զեղչ</strong></span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#6b21a8] rounded-full"></span>
              <span>Մինչև <strong className="text-[#6b21a8]">25% cashback</strong></span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#6b21a8] rounded-full"></span>
              <span>Նվեր քարտեր</span>
            </li>
          </ul>
        </div>

        {/* Loans Section */}
        <div className="space-y-6 pt-4">
          <h3 className="text-xl font-extrabold text-[#6b21a8]">
            Բեր աշխատավարձդ Evoca, Ստացիր ավելի ցածր տոկոսադրույքով վարկեր
          </h3>

          <div className="space-y-3">
            <h4 className="font-bold text-[#6b21a8] underline cursor-pointer">Օվերդրաֆտ կամ Մարման գրաֆիկով վարկ</h4>
            <ul className="space-y-2 list-none pl-2">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#6b21a8] rounded-full"></span>
                <span>Մինչև աշխատավարձի <strong className="text-[#6b21a8]">15-ապատիկի չափով</strong></span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#6b21a8] rounded-full"></span>
                <span>Մինչև <strong className="text-[#6b21a8]">10 մլն դրամ</strong> գումար</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#6b21a8] rounded-full"></span>
                <span>Մինչև <strong className="text-[#6b21a8]">60 ամիս</strong> մարման ժամկետ</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-[#6b21a8] underline cursor-pointer">Ավտովարկ</h4>
            <ul className="space-y-2 list-none pl-2">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#6b21a8] rounded-full"></span>
                <span>Մինչև <strong className="text-[#6b21a8]">50 մլն դրամ</strong> գումար</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#6b21a8] rounded-full"></span>
                <span>Մինչև <strong className="text-[#6b21a8]">84 ամիս</strong> մարման ժամկետ</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#6b21a8] rounded-full"></span>
                <span>Նախընտրած մեքենայի ձեռքբերում՝ ինչպես առաջնային, այնպես էլ երկրորդային շուկայից</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-[#6b21a8] underline cursor-pointer">Անշարժ գույքի գրավով սպառողական վարկ</h4>
            <ul className="space-y-2 list-none pl-2">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#6b21a8] rounded-full"></span>
                <span><strong className="text-[#6b21a8]">0.5</strong>-ով ցածր տոկոսադրույք</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#6b21a8] rounded-full"></span>
                <span>Մինչև <strong className="text-[#6b21a8]">100 մլն դրամ</strong> գումար</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#6b21a8] rounded-full"></span>
                <span>Մինչև <strong className="text-[#6b21a8]">120 ամիս</strong> մարման ժամկետ</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-purple-50/50 py-16 px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-gray-900">Վերջին նորությունները</h2>
            <button className="bg-purple-100 text-[#6b21a8] px-4 py-2 rounded-full text-xs font-bold hover:bg-purple-200 transition flex items-center gap-1">
              Բոլոր նորությունները <span>›</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Link 
              to="/news/back-to-school" 
              className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              <img src="https://www.evoca.am/images-cache/news/1/17873217684586/439x320.png" alt="" className="w-full h-auto object-cover" />
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-4 bg-[#6b21a8]"></span>
                  <span className="text-xs font-bold text-gray-800">Պրոդուկտներ</span>
                </div>
                <h3 className="font-bold text-sm text-gray-900 line-clamp-2">
                  Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով
                </h3>
                <p className="text-xs text-gray-400">21.08.2026</p>
              </div>
            </Link>

            {/* Card 2 - Moody's Link */}
            <Link 
              to="/news/banking/ba3-rating-from-moodys-to-evocabank"
              className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              <img src="https://www.evoca.am/images-cache/news/1/17870544210976/439x320.png" alt="" className="w-full h-auto object-cover" />
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-4 bg-[#6b21a8]"></span>
                  <span className="text-xs font-bold text-gray-800">Բանկային</span>
                </div>
                <h3 className="font-bold text-sm text-gray-900 line-clamp-2">
                  Ba3 վարկանիշ Moody’s-ից Evocabank-ին
                </h3>
                <p className="text-xs text-gray-400">18.08.2026</p>
              </div>
            </Link>

          {/* Card 3 - Link-ը ավելացված է */}
      <Link 
        to="/news/firebird-ai" 
        className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
      >
        <img src="https://www.evoca.am/images-cache/news/1/17864472573391/439x320.png" alt="" className="w-full h-auto object-cover" />
        <div className="p-5 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-1 h-4 bg-[#6b21a8]"></span>
            <span className="text-xs font-bold text-gray-800">Բանկային</span>
          </div>
          <h3 className="font-bold text-sm text-gray-900 line-clamp-2">
            Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»
          </h3>
          <p className="text-xs text-gray-400">11.08.2026</p>
        </div>
      </Link>
    </div>
  </div>
</section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-black text-gray-900 mb-8">Հաճախ տրվող հարցեր</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all overflow-hidden ${
                openFaq === index ? 'border-purple-600 bg-white shadow-sm' : 'border-gray-200 bg-white'
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-5 flex justify-between items-center font-bold text-sm text-gray-900 gap-4"
              >
                <span>{item.q}</span>
                <span className="text-purple-700 text-lg">
                  {openFaq === index ? '▲' : '▼'}
                </span>
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
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
            <div className="flex gap-3 text-lg text-gray-600 mb-2">
              <span className="cursor-pointer">f</span>
              <span className="cursor-pointer">i</span>
              <span className="cursor-pointer">p</span>
              <span className="cursor-pointer">y</span>
              <span className="cursor-pointer">in</span>
            </div>
            <div className="flex gap-2">
              <button className="bg-black text-white px-3 py-1 rounded text-[10px]">App Store</button>
              <button className="bg-black text-white px-3 py-1 rounded text-[10px]">Google Play</button>
            </div>
            <p className="text-purple-700 font-bold hover:underline cursor-pointer pt-2">
              Բանկի հասցեները և աշխատաժամերը
            </p>
            <p className="text-purple-700 font-bold hover:underline cursor-pointer">Կապ մեզ հետ</p>
            <p className="font-bold text-gray-900">+374 10 605555</p>
            <p className="text-[#6b21a8] font-black text-base">8444</p>
          </div>

        </div>

        {/* Disclaimer Bottom Bar */}
        <div className="bg-gray-100 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-gray-500 leading-relaxed max-w-3xl">
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանություն, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ԲԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
          </p>
          <div className="flex gap-3 opacity-70">
            <span className="font-bold border px-2 py-1 rounded bg-white text-[10px]">fininfo</span>
            <span className="font-bold border px-2 py-1 rounded bg-white text-[10px]">abcfinance.am</span>
            <span className="font-bold border px-2 py-1 rounded bg-white text-[10px]">arca</span>
          </div>
        </div>
      </footer>

      {/* Online Chat Floating Button */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
        <button className="bg-[#6b21a8] text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-xl hover:bg-purple-900 transition flex items-center gap-2">
          Գրեք մեզ, մենք օնլայն ենք !
        </button>
      </div>

    </div>
  );
}