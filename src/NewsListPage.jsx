import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone } from 'lucide-react';

export default function NewsListPage() {
  const [activeFilter, setActiveFilter] = useState('Գլխավոր');

  const filters = [
    'Գլխավոր',
    'Բանկային',
    'Հարցազրույցներ',
    'Պրոդուկտներ',
    'Նորարարություններ',
    'Կենսակերպ',
    'Մրցանակներ',
    'CSR',
    'Այլ',
  ];

  const newsData = [
    {
      id: 1,
      to: '/news/back-to-school',
      image: 'https://www.evoca.am/images-cache/news/1/17873217684586/439x320.png',
      category: 'Պրոդուկտներ',
      categoryColor: 'bg-emerald-500',
      title: 'Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով',
      date: '21.08.2026',
      isHero: true,
    },
    {
      id: 2,
      to: '/news/amx-awards-2026',
      image: 'https://www.evoca.am/images-cache/news/1/17815943976247/616x462.png',
      category: 'Մրցանակներ',
      categoryColor: 'bg-yellow-400',
      title: 'Evocabank-ը՝ AMX AWARDS 2026-ի մրցանակակիր',
      desc: 'Evocabank-ը AMX AWARDS 2026-ի ընթացքում արժանացել է «Դեպոզիտարիայի ավտոմատացված համակարգերի կիրառման լավագույն գործընկեր» մրցանակին:',
      date: '16.06.2026',
      isMainGridLeft: true,
    },
    {
      id: 3,
      to: '/news/best-sme-bank',
      image: 'https://www.evoca.am/images-cache/news/1/17784860353078/450x295.png',
      category: 'Մրցանակներ',
      categoryColor: 'bg-yellow-400',
      title: 'Evocabank. Լավագույն ՓՄՁ բանկը Հայաստանում՝ երկրորդ...',
      date: '08.05.2026',
    },
    {
      id: 4,
      to: '/news/crypto-account',
      image: 'https://www.evoca.am/images-cache/news/1/17722002491716/450x295.png',
      category: 'Պրոդուկտներ',
      categoryColor: 'bg-[#7c3aed]',
      title: 'Քո Crypto հաշիվը՝ արդեն EvocaTOUCH-ում',
      date: '27.02.2026',
    },
    {
      id: 5,
      to: '/news/los-angeles-times',
      image: 'https://www.evoca.am/images-cache/news/1/17720089281517/450x295.png',
      category: 'Հարցազրույցներ',
      categoryColor: 'bg-[#7c3aed]',
      title: 'Կարեն Եղիազարյանի հարցազրույցը Los Angeles',
      date: '25.02.2026',
    },
    {
      id: 6,
      to: '/news/ajapnyak-branch',
      image: 'https://www.evoca.am/images-cache/news/1/17683825017248/450x295.jpg',
      category: 'Բանկային',
      categoryColor: 'bg-[#7c3aed]',
      title: 'Evocabank-ի «Աջափնյակ» մասնաճյուղն արդեն բաց է',
      date: '12.01.2026',
    },
    {
      id: 7,
      to: '/news/new-colors',
      image: 'https://www.evoca.am/images-cache/news/1/17812556342544/780x585.png',
      category: 'Կենսակերպ',
      categoryColor: 'bg-lime-400',
      title: 'Evocabank-ը նոր գույներ է տալիս մեր քաղաքին',
      desc: 'Street art-երը շուտով կհայտնվեն Երևանի ամենատարբեր անկյուններում՝ քաղաքին հաղորդելով նոր շունչ և նոր գույներ:',
      date: '12.06.2026',
    },
    {
      id: 8,
      to: '/news/transactions-blocked',
      image: 'https://www.evoca.am/images-cache/news/1/17852444643548/438x328.png',
      category: 'Բանկային',
      categoryColor: 'bg-[#6b21a8]',
      title: 'Գործարքների արգելափակում 1 կոճակով',
      date: '01.06.2026',
    },
    {
      id: 9,
      to: '/news/esg-framework',
      image: 'https://www.evoca.am/images-cache/news/1/17757342882486/438x328.png',
      category: 'Բանկային',
      categoryColor: 'bg-[#6b21a8]',
      title: 'ESG կառավարման համակարգը Evocabank-ում',
      date: '31.03.2026',
    },
    {
      id: 10,
      to: '/news/amcham-armenia',
      image: 'https://www.evoca.am/images-cache/news/1/17707319421286/438x328.png',
      category: 'Բանկային',
      categoryColor: 'bg-[#6b21a8]',
      title: 'Evocabank-ը միացել է AmCham Armenia-ին',
      date: '10.02.2026',
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800 font-sans selection:bg-purple-500 selection:text-white">
      {/* 2. BREADCRUMB & TITLE */}
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-4">
        <div className="text-[11px] text-gray-400 flex items-center gap-1.5 mb-6">
          <Link to="/" className="hover:underline">🏠</Link>
          <span>›</span>
          <span className="text-gray-500 font-medium">Նորություններ</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
          Նորություններ
        </h1>
      </div>

      {/* 3. FILTER BUTTONS */}
      <div className="max-w-7xl mx-auto px-6 pb-12 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition ${
                activeFilter === f
                  ? 'bg-purple-100 text-[#6b21a8]'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <button className="bg-purple-100 text-[#6b21a8] text-xs font-bold px-5 py-2 rounded-full flex items-center gap-1 hover:bg-purple-200 transition">
          Բոլորը <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 4. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-[#f5f3ff] rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 bg-[#FF00FF] inline-block"></span>
              <span className="text-xs font-bold text-gray-900">Պրոդուկտներ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Մինչև սեպտեմբերի 15-ը վճարիր Evoca Mastercard-ով ակցիայի մասնակից խանութներում և գրախանութներում ու ստացիր մինչև 23% cashback։
            </p>
            <p className="text-[11px] text-gray-400 pt-1">21.08.2026</p>
          </div>
          <div className="lg:col-span-7 relative bg-purple-400 overflow-hidden flex items-end justify-center">
            <div className="absolute top-4 left-4 w-6 h-6 border-t-4 border-l-4 border-pink-500"></div>
            <img
              src={newsData[0].image}
              alt="Back to school"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* WATERMARK: "Բաց մի թող" */}
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-[150px] font-black text-gray-100 select-none pointer-events-none leading-none -mb-2">
          Բաց մի թող
        </div>

        {/* 5. MAIN GRID SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10 pt-6">
          {/* Left Large News Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative mb-9">
              <div className="absolute -left-5 -top-3 w-20 h-20 bg-yellow-400 -z-10"></div>
              <img src={newsData[1].image} alt={newsData[1].title} className="w-full h-auto object-cover rounded-xl" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1 h-3.5 bg-yellow-400 inline-block"></span>
                <span className="text-xs font-bold text-gray-900">{newsData[1].category}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 leading-snug">
                {newsData[1].title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {newsData[1].desc}
              </p>
              <p className="text-[11px] text-gray-400 pt-1">{newsData[1].date}</p>
            </div>
          </div>

          {/* Right 2x2 Small Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {newsData.slice(2, 6).map((item) => (
              <div key={item.id} className="flex flex-col justify-between group cursor-pointer">
                <div>
                  <div className="overflow-hidden rounded-xl mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition duration-300 rounded-xl"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`w-1 h-3.5 ${item.categoryColor}`}></span>
                    <span className="text-xs font-bold text-gray-800">{item.category}</span>
                  </div>
                  <h4 className="font-bold text-sm text-gray-900 line-clamp-2 leading-snug group-hover:text-purple-700 transition">
                    {item.title}
                  </h4>
                </div>
                <p className="text-[11px] text-gray-400 mt-2">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. MIDDLE FULL BANNER (ԹԱՐՄԱՑՎԱԾ՝ 1-ԻՆ ՆԿԱՐԻ ՈՃՈՎ) */}
      <section className="max-w-7xl mx-auto px-1 my-20 relative">
        {/* WATERMARK: "Կարևոր" */}
        <div className="text-[150px] font-black text-gray-100 select-none pointer-events-none leading-none -mb-1 ml-8">
          Կարևոր
        </div>

        <div className="bg-[#faf8ff] rounded-[32px] p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Image Side */}
          <div className="lg:col-span-6 relative">
            {/* Lime corner accent on top-right */}
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-lime-400 z-10"></div>
            
            <div className="rounded-2xl overflow-hidden">
              <img
                src={newsData[6].image}
                alt={newsData[6].title}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Text Side */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5 lg:pl-6">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 bg-lime-400 inline-block"></span>
              <span className="text-xs font-bold text-gray-900">{newsData[6].category}</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
              {newsData[6].title}
            </h2>
            
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-md">
              {newsData[6].desc}
            </p>
            
            <p className="text-[11px] text-gray-400 pt-2">{newsData[6].date}</p>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CARDS */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.slice(7, 10).map((item) => (
            <div key={item.id} className="group cursor-pointer flex flex-col justify-between">
              <div>
                <div className="overflow-hidden rounded-xl mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300 rounded-xl"
                  />
                </div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1 h-3.5 bg-[#6b21a8] inline-block"></span>
                  <span className="text-xs font-bold text-gray-900">{item.category}</span>
                </div>
                <h4 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-purple-700 transition">
                  {item.title}
                </h4>
              </div>
              <p className="text-[11px] text-gray-400 mt-2">{item.date}</p>
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

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
        <button className="w-10 h-10 rounded-full bg-purple-200 text-[#6b21a8] flex items-center justify-center shadow-lg hover:scale-110 transition">
          <Phone className="w-5 h-5" />
        </button>
        <button className="bg-[#6b21a8] text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-xl hover:bg-purple-900 transition flex items-center gap-2">
          Գրեք մեզ, մենք օնլայն ենք !
        </button>
      </div>

    </div>
  );
}