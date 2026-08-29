import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  HelpCircle, 
  Globe, 
  Search, 
  Menu, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  Phone 
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Swiper-ի CSS ֆայլերը
import 'swiper/css';
import 'swiper/css/navigation';

export default function MortgagePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="w-full bg-white text-gray-800 font-sans min-h-screen flex flex-col relative selection:bg-purple-600 selection:text-white">
      
      

      {/* 2. MAIN NAVBAR */}
      <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-40">
            

        {/* SUB NAVBAR */}
        <div className="bg-[#6a0dad] text-white text-xs font-semibold">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center gap-6 py-2.5 overflow-x-auto">
            <span className="bg-[#52098b] px-4 py-1.5 rounded-md cursor-pointer whitespace-nowrap">
              Վարկեր
            </span>
            <span className="hover:text-purple-200 cursor-pointer whitespace-nowrap">
              Վարկային պատմություն և սքոր
            </span>
            <span className="hover:text-purple-200 cursor-pointer whitespace-nowrap">
              Կարևոր տեղեկատվություն
            </span>
          </div>
        </div>
      </header>

      {/* 3. HERO BANNER SECTION */}
      <section className="bg-[#f0ebfc] relative overflow-hidden py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          <div className="md:col-span-7 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով
            </h1>
            <p className="text-sm md:text-base text-gray-600 font-medium pt-2">
              Ձեռք բերեք Ձեր նախընտրած բնակարանը հիփոթեքային վարկավորման միջոցով:
            </p>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <img
              src="https://www.evoca.am/images-cache/loans/1/16142449060912/560x400.png" 
              alt="Evocabank Mortgage 3D"
              className="w-full max-w-sm md:max-w-md object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* 4. BREADCRUMB & BACK BUTTON SECTION */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 w-full flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 border border-gray-300 bg-white px-5 py-2 rounded-full text-xs font-bold text-gray-700 hover:bg-gray-50 transition shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Վերադառնալ
        </button>

        <div className="text-[11px] text-gray-400 flex items-center gap-1.5 flex-wrap">
          <span className="hover:text-gray-600 cursor-pointer">🏠</span>
          <span>›</span>
          <span className="hover:text-gray-600 cursor-pointer">Անհատ</span>
          <span>›</span>
          <span className="hover:text-gray-600 cursor-pointer">Վարկեր</span>
          <span>›</span>
          <span className="hover:text-gray-600 cursor-pointer">Վարկեր</span>
          <span>›</span>
          <span className="text-gray-600 font-semibold truncate max-w-[200px] sm:max-w-none">
            Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով
          </span>
        </div>
      </div>

      {/* 5. TABS NAVIGATION & CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-4 w-full">
        {/* TAB HEADERS */}
        <div className="border-b border-gray-200 flex gap-8 mb-8 text-sm font-bold text-gray-500">
          <button 
            onClick={() => setActiveTab('about')}
            className={`pb-3 transition ${activeTab === 'about' ? 'text-[#6a0dad] border-b-2 border-[#6a0dad]' : 'hover:text-gray-800'}`}
          >
            Վարկի մասին
          </button>
          <button 
            onClick={() => setActiveTab('terms')}
            className={`pb-3 transition ${activeTab === 'terms' ? 'text-[#6a0dad] border-b-2 border-[#6a0dad]' : 'hover:text-gray-800'}`}
          >
            Պայմաններ
          </button>
          <button 
            onClick={() => setActiveTab('docs')}
            className={`pb-3 transition ${activeTab === 'docs' ? 'text-[#6a0dad] border-b-2 border-[#6a0dad]' : 'hover:text-gray-800'}`}
          >
            Պահանջվող փաստաթղթերի ցանկ
          </button>
        </div>

        {/* TAB CONTENT */}
        {activeTab === 'about' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5 text-gray-700 text-sm leading-relaxed">
              <p>
                <span className="text-[#6a0dad] font-semibold cursor-pointer">Evocabank</span>-ն առաջարկում է բնակարանի, առանձնատան, բնակելի տան ձեռքբերման, կառուցապատման ու վերանորոգման նպատակով Բանկի սեփական միջոցներով տրամադրվող <span className="text-[#6a0dad] font-semibold underline cursor-pointer">հիփոթեքային վարկեր</span>:
              </p>
              <p>
                Վարկը գործում է ինչպես երկրորդային, այնպես էլ առաջնային շուկայից` կառուցապատողից ձեռք բերվող, անգամ շինարարության անավարտ փուլում գտնվող անշարժ գույքի ձեռքբերման դեպքում:
              </p>
              <p>
                Գրավիչ ու մատչելի պայմաններով այս վարկատեսակի շնորհիվ մեզ հետ կստեղծեք ապրելու համար հարմարավետ պայմաններ, կկարողանաք վերանորոգել Ձեր բնակարանը նորաձևության վերջին ստանդարտներին համապատասխան՝ դարձնելով այն գունեղ և լուսավոր:
              </p>
              <p>
                Ընտրելով <span className="text-[#6a0dad] font-semibold cursor-pointer">Evocabank</span>-ը՝ կխնայեք Ձեր գումարն ու ժամանակը:
              </p>
              <p>Ձեր կողմից անշարժ գույքի ընտրությունից և վարկի ձևակերպման համար անհրաժեշտ փաստաթղթերը ներկայացնելուց հետո Evocabank-ը վարկի տրամադրման որոշումը կկայացնի ամենասեղմ ժամկետներում։</p>

              <p>Գործընկերներ կառուցապատողների ցանկին կարող եք ծանոթանալ հետևյալ հղումով։</p>
            </div>

            <div className="lg:col-span-5 bg-[#fbfafd] border border-purple-100 rounded-2xl p-6 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-[#6a0dad] text-white flex items-center justify-center font-bold mb-6">
                ֏
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <div>
                    <span className="text-[11px] text-gray-400 block font-medium">մինչև</span>
                    <span className="text-2xl font-black text-[#6a0dad]">80 մլն. ֏</span>
                  </div>
                  <span className="text-xs text-gray-500 font-semibold">Գումար</span>
                </div>

                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <div>
                    <span className="text-[11px] text-gray-400 block font-medium">մինչև</span>
                    <span className="text-2xl font-black text-[#6a0dad]">240 ամիս</span>
                  </div>
                  <span className="text-xs text-gray-500 font-semibold">Ժամկետ</span>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[11px] text-gray-400 block font-medium">սկսած</span>
                    <span className="text-2xl font-black text-[#6a0dad]">13.2%</span>
                  </div>
                  <span className="text-xs text-gray-500 font-semibold">Տոկոսադրույք</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'terms' && (
          <div className="py-6 text-gray-800 text-sm overflow-x-auto">
            <div className="min-w-[700px] border border-purple-100 rounded-xl overflow-hidden bg-white shadow-sm">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <tbody>
                  {/* 1 */}
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 font-bold text-gray-500 w-12 text-center border-r border-purple-50">1.</td>
                    <td className="p-4 font-bold text-gray-700 w-1/3 border-r border-purple-50">
                      Վարկի տրամադրման նպատակը
                    </td>
                    <td className="p-4 text-gray-600" colSpan={2}>
                      Վարկը տրամադրվում է բնակելի նշանակության անշարժ գույքի՝ բնակարանի, առանձնատան, բնակելի տան (առաջնային և երկրորդային շուկայից) ձեռք բերման կամ վերանորոգման կամ առանձնատան, բնակելի տան կառուցապատման նպատակով:
                    </td>
                  </tr>

                  {/* 2 */}
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 font-bold text-gray-500 text-center border-r border-purple-50">2.</td>
                    <td className="p-4 font-bold text-gray-700 border-r border-purple-50">
                      Ովքեր կարող են դիմել
                    </td>
                    <td className="p-4 text-gray-600" colSpan={2}>
                      18 – 65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն բոլորի 65 տարեկանը կամ առկա է վերոնշյալ պահանջներին բավարարող համավարկառու:
                    </td>
                  </tr>

                  {/* 3 */}
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 font-bold text-gray-500 text-center border-r border-purple-50">3.</td>
                    <td className="p-4 font-bold text-gray-700 border-r border-purple-50">
                      Վարկավորման արժույթը
                    </td>
                    <td className="p-4 text-gray-600" colSpan={2}>
                      ՀՀ դրամ
                    </td>
                  </tr>

                  {/* 4 */}
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 font-bold text-gray-500 text-center border-r border-purple-50" rowSpan={3}>4.</td>
                    <td className="p-4 font-bold text-gray-700 border-r border-purple-50" rowSpan={3}>
                      Վարկավորման գումար
                    </td>
                    <td className="p-4 border-r border-purple-50 text-gray-700 font-medium">
                      Անշարժ գույք ձեռք բերում, Կառուցապատում
                    </td>
                    <td className="p-4 font-bold text-[#6a0dad]">
                      2,000,000 - 80,000,000 ՀՀ դրամ
                    </td>
                  </tr>
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 border-r border-purple-50 text-gray-700 font-medium">
                      Անշարժ գույքի ձեռքբերում առանց եկամտի վերլուծության
                    </td>
                    <td className="p-4 font-bold text-[#6a0dad]">
                      2,000,000 – 50,000,000 ՀՀ դրամ
                    </td>
                  </tr>
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 border-r border-purple-50 text-gray-700 font-medium">
                      Վերանորոգում
                    </td>
                    <td className="p-4 font-bold text-[#6a0dad]">
                      1,000,000 - 10,000,000 ՀՀ դրամ
                    </td>
                  </tr>

                  {/* 5 */}
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 font-bold text-gray-500 text-center border-r border-purple-50" rowSpan={3}>5.</td>
                    <td className="p-4 font-bold text-gray-700 border-r border-purple-50" rowSpan={3}>
                      Վարկի մարման ժամկետը
                    </td>
                    <td className="p-4 border-r border-purple-50 text-gray-700 font-medium">
                      Անշարժ գույք ձեռք բերում, Կառուցապատում
                    </td>
                    <td className="p-4 text-gray-700">
                      60 - 180 ամիս
                    </td>
                  </tr>
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 border-r border-purple-50 text-gray-700 font-medium">
                      Անշարժ գույք ձեռք բերում, Կառուցապատում լողացող տոկոսադրույքի դեպքում
                    </td>
                    <td className="p-4 text-gray-700">
                      60 - 240 ամիս
                    </td>
                  </tr>
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 border-r border-purple-50 text-gray-700 font-medium">
                      Վերանորոգում
                    </td>
                    <td className="p-4 text-gray-700">
                      60 - 84 ամիս
                    </td>
                  </tr>

                  {/* 6 */}
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 font-bold text-gray-500 text-center border-r border-purple-50" rowSpan={4}>6.</td>
                    <td className="p-4 font-bold text-gray-700 border-r border-purple-50" rowSpan={4}>
                      Տարեկան անվանական տոկոսադրույք / հաստատուն/
                    </td>
                    <td className="p-4 border-r border-purple-50 text-gray-700 font-medium">
                      Անշարժ գույք ձեռք բերում, Կառուցապատում
                    </td>
                    <td className="p-4 text-gray-700 font-semibold">
                      14-15%
                    </td>
                  </tr>
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 border-r border-purple-50 text-gray-700 font-medium">
                      Անշարժ գույք ձեռք բերում առանց եկամտի վերլուծության
                    </td>
                    <td className="p-4 text-gray-700 font-semibold">
                      15-16%
                    </td>
                  </tr>
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 border-r border-purple-50 text-gray-700 font-medium">
                      Վերանորոգում
                    </td>
                    <td className="p-4 text-gray-700 font-semibold">
                      15-17%
                    </td>
                  </tr>
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 border-r border-purple-50 text-gray-600 text-xs">
                      Բանկի կողմից հաճախորդի փոխարեն գույքի ապահովագրություն իրականացնելու դեպքում (իրականացվում է վարկի գործողության երկրորդ տարվանից սկսված)
                    </td>
                    <td className="p-4 text-gray-700 font-semibold">
                      Վարկի տոկոսադրույք + 0.2%
                    </td>
                  </tr>

                  {/* 7 */}
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 font-bold text-gray-500 text-center border-r border-purple-50">7.</td>
                    <td className="p-4 font-bold text-gray-700 border-r border-purple-50">
                      Տարեկան փաստացի տոկոսադրույք / հաստատուն/
                    </td>
                    <td className="p-4 text-gray-700 font-bold text-[#6a0dad]" colSpan={2}>
                      15.2 – 18.7 %
                    </td>
                  </tr>

                  {/* 8 */}
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 font-bold text-gray-500 text-center border-r border-purple-50" rowSpan={5}>8.</td>
                    <td className="p-4 font-bold text-gray-700 border-r border-purple-50" rowSpan={5}>
                      Տարեկան անվանական տոկոսադրույք / լողացող/
                    </td>
                    <td className="p-4 border-r border-purple-50 text-gray-700 font-medium">
                      Անշարժ գույք ձեռք բերում, Կառուցապատում
                    </td>
                    <td className="p-4 text-gray-700">
                      Սկսած 13.2%-ից (հաստատուն բաղադրիչ՝ սկսած 4.2%-ից + փոփոխուն բաղադրիչ)
                    </td>
                  </tr>
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 border-r border-purple-50 text-gray-700 font-medium">
                      Անշարժ գույք ձեռք բերում առանց եկամտի վերլուծության
                    </td>
                    <td className="p-4 text-gray-700">
                      Սկսած 14.2%-ից (հաստատուն բաղադրիչ՝ սկսած 5.2%-ից + փոփոխուն բաղադրիչ)
                    </td>
                  </tr>
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 border-r border-purple-50 text-gray-700 font-medium">
                      Վերանորոգում
                    </td>
                    <td className="p-4 text-gray-700">
                      Սկսած 14.2%-ից (հաստատուն բաղադրիչ՝ սկսած 5.2%-ից + փոփոխուն բաղադրիչ)
                    </td>
                  </tr>
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 border-r border-purple-50 text-gray-700 font-medium">
                      Լողացող տոկոսադրույքի տատանման առավելագույն և նվազագույն շեմ
                    </td>
                    <td className="p-4 text-gray-700 font-bold">
                      ±4%
                    </td>
                  </tr>
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 text-gray-600 text-xs leading-relaxed" colSpan={2}>
                      <p className="mb-2">
                        Լողացող տոկոսադրույքի փոփոխուն բաղադրիչը կսկսի վերանայվել վարկի տրամադրման պահից 36 ամիս (Վերանորոգման վարկերի դեպքում՝ 12 ամիս) ժամանակահատվածին հաջորդող առաջին մարման ամսաթվից սկսած և յուրաքանչյուր 6 ամիսը մեկ՝ կիրառելով վերանայման պահին Բանկում գործող (կայքում փաստացի հրապարակված) տոկոսադրույքը:
                      </p>
                      <a href="#" className="text-[#6a0dad] font-bold underline hover:text-[#52098b]">
                        Լողացող տոկոսադրույքի հաշվարկման կարգ
                      </a>
                    </td>
                  </tr>

                  {/* 9 */}
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 font-bold text-gray-500 text-center border-r border-purple-50">9.</td>
                    <td className="p-4 font-bold text-gray-700 border-r border-purple-50">
                      Տարեկան փաստացի տոկոսադրույք / լողացող/
                    </td>
                    <td className="p-4 text-gray-700 font-bold text-[#6a0dad]" colSpan={2}>
                      9.7 – 18.4 %
                    </td>
                  </tr>

                  {/* 10 */}
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 font-bold text-gray-500 text-center border-r border-purple-50">10.</td>
                    <td className="p-4 font-bold text-gray-700 border-r border-purple-50">
                      Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք
                    </td>
                    <td className="p-4 text-gray-600 font-medium" colSpan={2}>
                      Տուգանք չի կիրառվում
                    </td>
                  </tr>

                  {/* 11 */}
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 font-bold text-gray-500 text-center border-r border-purple-50">11.</td>
                    <td className="p-4 font-bold text-gray-700 border-r border-purple-50">
                      Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր
                    </td>
                    <td className="p-4 text-gray-600 space-y-2" colSpan={2}>
                      <p><span className="font-semibold text-gray-800">Ժամկետանց վարկի համար՝</span> օրական 0.015%,</p>
                      <p><span className="font-semibold text-gray-800">Ժամկետանց տոկոսագումարի համար՝</span> օրական 0.1%:</p>
                    </td>
                  </tr>

                  {/* 12 */}
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 font-bold text-gray-500 text-center border-r border-purple-50">12.</td>
                    <td className="p-4 font-bold text-gray-700 border-r border-purple-50">
                      Վարկի մարման ձևը
                    </td>
                    <td className="p-4 text-gray-600" colSpan={2}>
                      Անուիտետային կամ մայր գումարի հավասարաչափ մարումներով վարկ: Վճարումները պետք է կատարվեն ամսական կտրվածքով:
                    </td>
                  </tr>

                  {/* 13 */}
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 font-bold text-gray-500 text-center border-r border-purple-50">13.</td>
                    <td className="p-4 font-bold text-gray-700 border-r border-purple-50">
                      Վարկի վերադարձելիության ապահովման միջոց
                    </td>
                    <td className="p-4 text-gray-600 space-y-3" colSpan={2}>
                      <p><strong className="text-purple-900">1.</strong> Ձեռք բերվող, վերանորոգվող անշարժ գույք, այլ անշարժ գույք: Կառուցապատման դեպքում հողամասը, որտեղ իրականացվում է անշարժ գույքի կառուցումը/կառուցվող անշարժ գույքը:</p>
                      <p><strong className="text-purple-900">2.</strong> Կառուցապատվող շենքից անշարժ գույք ձեռք բերելու դեպքում, կառուցապատվող շենքի տվյալ անշարժ գույքը գնելու իրավունքը:</p>
                      <p><strong className="text-purple-900">3.</strong> Կառուցապատվող շենքից անշարժ գույք ձեռք բերելու դեպքում, եթե կառուցապատողի հատուկ հաշիվը գտնվում է այլ բանկում, կառուցապատվող շենքի տվյալ անշարժ գույքը գնելու իրավունքը, ինչպես նաև այլ անշարժ գույք, որի շուկայական արժեքը չպետք է ցածր լինի տրամադրվող վարկի գումարի չափից:</p>
                      <p><strong className="text-purple-900">4.</strong> Բացի անշարժ գույքի գրավադրումից վարկառուից կարող է պահանջվել նաև առնվազն մեկ ֆիզիկական կամ իրավաբանական անձի երաշխավորություն:</p>
                    </td>
                  </tr>

                  {/* 14 */}
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 font-bold text-gray-500 text-center border-r border-purple-50" rowSpan={5}>14.</td>
                    <td className="p-4 font-bold text-gray-700 border-r border-purple-50" rowSpan={5}>
                      Վարկ/գրավ հարաբերակցությունը <sup>[1]</sup>
                    </td>
                    <td className="p-4 border-r border-purple-50 text-gray-700 font-medium">
                      Առաջնային շուկայից (կառուցապատողից) ձեռք բերում <sup>[2]</sup>
                    </td>
                    <td className="p-4 text-gray-700 font-bold">
                      Գնահատված արժեքի մինչև 90%
                    </td>
                  </tr>
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 border-r border-purple-50 text-gray-700 font-medium">
                      Երկրորդային շուկայից ձեռք բերում
                    </td>
                    <td className="p-4 text-gray-700 font-bold">
                      Գնահատված արժեքի մինչև 85%
                    </td>
                  </tr>
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 border-r border-purple-50 text-gray-700 font-medium">
                      Առանց եկամտի վերլուծության
                    </td>
                    <td className="p-4 text-gray-700 font-bold">
                      Գնահատված արժեքի մինչև 70%
                    </td>
                  </tr>
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 border-r border-purple-50 text-gray-700 font-medium">
                      Կառուցապատում և Վերանորոգում
                    </td>
                    <td className="p-4 text-gray-700 font-bold">
                      Գնահատված արժեքի մինչև 70%
                    </td>
                  </tr>
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 text-gray-600 text-xs leading-relaxed" colSpan={2}>
                      Լրացուցիչ անշարժ գույքի գրավադրման դեպքում, վարկի գումարը չպետք է գերազանցի ձեռք բերվող անշարժ գույքի գնահատված շուկայական արժեքը՝ պահպանելով գրավադրվող բոլոր գույքերի գնահատված շուկայական արժեքների հանրագումարի 70% «Վարկ/գրավ» հարաբերակցությունը:
                    </td>
                  </tr>

                  {/* 15 */}
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 font-bold text-gray-500 text-center border-r border-purple-50" rowSpan={2}>15.</td>
                    <td className="p-4 font-bold text-gray-700 border-r border-purple-50">
                      Ապահովագրություն
                    </td>
                    <td className="p-4 text-gray-600" colSpan={2}>
                      Անշարժ գույքի ապահովագրություն - պարտադիր յուրաքանչյուր տարի վարկի մնացորդի չափով:
                    </td>
                  </tr>
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 font-bold text-gray-700 border-r border-purple-50">
                      Վարկի տրամադրման եղանակը
                    </td>
                    <td className="p-4 text-gray-600 space-y-2" colSpan={2}>
                      <p>Անկանխիկ՝ /գումարը փոխանցվում է վաճառողի հաշվեհամարին/</p>
                      <p>Վերանորոգման և կառուցապատման նպատակով Վարկերը տրամադրվում են միանվագ կամ փուլային, որը սահմանվում է Վարկի տրամադրման որոշումը կայացնող Լիազոր մարմնի կողմից: Վարկը փուլերով տրամադրման դեպքում, փուլերը սահմանվում են՝ հիմք ընդունելով Հաճախորդի կողմից ներկայացված կատարվելիք ծախսերի նախահաշիվը, վարկի ժամկետը, գումարի չափը, Հաճախորդի վարկունակությունը:</p>
                    </td>
                  </tr>

                  {/* 16 */}
                  <tr className="border-b border-purple-50 hover:bg-purple-50/30 transition">
                    <td className="p-4 font-bold text-gray-500 text-center border-r border-purple-50">16.</td>
                    <td className="p-4 font-bold text-gray-700 border-r border-purple-50">
                      Այլ պայմաններ
                    </td>
                    <td className="p-4 text-gray-600 space-y-2" colSpan={2}>
                      <p>Անշարժ գույքի ձեռք բերման դեպքում Վարկառուն Բանկում մուտքագրում է կանխավճար <sup>[3]</sup>, որը սառեցվում է մինչև վարկի տրամադրումը:</p>
                      <p>Առաջնային շուկայից անշարժ գույք ձեռք բերելու դեպքում, որպես կանխավճարը հավաստող փաստաթուղթ, Հաճախորդը կարող է Բանկ ներկայացնել կառուցապատողի կողմից տրամադրված նախավճարի անդորրագիր և/կամ նախավճարների պայմանագրեր/համաձայնագրեր:</p>
                    </td>
                  </tr>

                  {/* 17 */}
                  <tr className="hover:bg-purple-50/30 transition">
                    <td className="p-4 font-bold text-gray-500 text-center border-r border-purple-50">17.</td>
                    <td className="p-4 font-bold text-gray-700 border-r border-purple-50">
                      Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ
                    </td>
                    <td className="p-4 text-gray-600 space-y-3" colSpan={2}>
                      <p>Վարկի տրամադրման կամ մերժման որոշումը կայացվում է առավելագույնը 10 (տաս) աշխատանքային օրվա ընթացքում, որոշումների կայացման համար Բանկի կողմից պահանջվող նախնական փաստաթղթերը ամբողջությամբ ներկայացնելուց հետո:</p>
                      <p>Վարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, գրավի առարկա հանդիսացող գույքի գրավադրման գործընթացը ավարտելուց հետո առավելագույնը 2 (երկու) աշխատանքային օրվա ընթացքում:</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footnotes */}
            <div className="mt-6 pt-4 border-t border-purple-100 space-y-3 text-xs text-gray-600">
              <p><strong className="text-[#6a0dad]">[1]</strong> Վարկ/գրավ գործակցի հաշվարկման ժամանակ ընդունվում է անշարժ գույքի գնահատման և ձեռքբերման արժեքներից նվազագույնը:</p>
              <p><strong className="text-[#6a0dad]">[2]</strong> Անավարտ շինության դեպքում (Կառուցապատողից ձեռքբերման դեպքում) որպես գրավի արժեք հանդիսանում է կառուցապատողի կողմից տրամադրված տեղեկանքում և հետագայում առուվաճառքի պայմանագրում նշված առուվաճառքի գինը:</p>
              <p><strong className="text-[#6a0dad]">[3]</strong> Գույքի ձեռքբերման գնի և վարկի գումարի տարբերության չափով:</p>
            </div>
          </div>
        )}

        {activeTab === 'docs' && (
          <div className="py-8 text-gray-700 text-sm space-y-4 leading-relaxed">
            <p className="text-gray-500 font-medium mb-4">
              Անհրաժեշտ փաստաթղթեր՝ անձնագիր, հանրային ծառայությունների համարանիշ, եկամուտների տեղեկանք և այլն:
            </p>
            
            <ol className="list-decimal list-inside space-y-3 font-medium text-gray-800">
              <li>
                <a href="#" className="text-[#6a0dad] font-semibold underline hover:text-[#52098b]">
                  Հիփոթեքային վարկի
                </a>{' '}
                տրամադրման դիմում-հայտ,
              </li>
              <li>
                անձնագիր կամ նույնականացման քարտ ինչպես նաև, սոցիալական քարտ կամ սոցիալական քարտ չունենալու մասին տեղեկանք (ընդ որում սոցիալական քարտ և սոցիալական քարտ չունենալու մասին տեղեկանք չի պահանջվում, եթե ներկայացվել է նույնականացման քարտ),
              </li>
              <li>ամուսնության վկայական (առկայության դեպքում),</li>
              <li>անչափահաս երեխաների ծննդյան վկայական (առկայության դեպքում),</li>
              <li>
                տեղեկանք աշխատանքի վայրից աշխատավարձի չափի մեծության մասին,որի տրամադրման ժամկետը Բանկին ներկայացման օրվա դրությամբ չպետք է գերազանցի 30 օրացուցային օրը,
              </li>
              <li>
                Հաճախորդի ինքնազբաղված լինելու դեպքում՝
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700 font-normal">
                  <li>Պետական ռեգիստրի գրանցման վկայական կամ պետական ռեգիստրի կողմից տրված քաղվածք գրանցամատյանից,</li>
                  <li>Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում կամ քաղվածքում, Գործունեության լիցենզիա (եթե առկա է)</li>
                  <li>Վերջին 1 տարվա ֆինանսական հաշվետվությունները:</li>
                </ul>
              </li>
              <li>այլ եկամուտների մեծությունը հավաստող տեղեկատվություն (առկայության դեպքում),</li>
              <li>ձեռք բերվող անշարժ գույքի գնահատման հաշվետվություն,</li>
              <li>վաճառվող կամ վերանորոգվող անշարժ գույքի սեփականության վկայականը,</li>
              <li>վաճառվող անշարժ գույքի ձեռք բերման հիմքերը,</li>
              <li>անշարժ գույքի սեփականատերերի անձնագրերը,</li>
              <li>տեղեկատվություն՝ երաշխավորող անձի/անց վերաբերյալ /առկայության դեպքում/</li>
              <li>Վերանորոգման դեպքում կատարվելիք ծախսերի նախահաշիվ,</li>
              <li>
                Կառուցապատման դեպքում՝
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700 font-normal">
                  <li>կատարվելիք ծախսերի նախահաշիվ,</li>
                  <li>հողամասի սեփականության վկայական,</li>
                  <li>կառուցապատման թույլտվություն,</li>
                  <li>կառուցվող անշարժ գույքի նախագիծ:</li>
                </ul>
              </li>
              <li>Բանկի պահանջով այլ փաստաթղթեր:</li>
            </ol>
          </div>
        )}
      </section>

      {/* 6. MOTIVATIONAL BANNER WITH IMAGE BACKGROUND (IMAGE 1 UPDATE) */}
      <section 
        className="my-12 w-full min-h-[260px] sm:min-h-[320px] bg-cover bg-center flex items-center justify-center text-white px-4 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://www.evoca.am/images-cache/loans/1/16142449060958/1920x527.jpg')`
        }}
      >
        {/* Light Overlay to guarantee legibility if needed */}
        <div className="absolute inset-0 bg-purple-900/20" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug drop-shadow-md">
            Երբ խնայողությունները չեն բավականացնում նպատակներն
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug drop-shadow-md">
            իրագործելու համար, դիմե՛ք Evocabank:
          </h2>
        </div>
      </section>

       {/* 7. OTHER LOANS CAROUSEL SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 w-full">
        <h3 className="text-2xl font-black text-gray-900 mb-8">Այլ վարկեր</h3>

        <div className="relative group/swiper">
          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-2 rounded-full text-purple-700 hover:bg-purple-50 hidden md:flex items-center justify-center border border-gray-100 transition">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="swiper-button-next-custom absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-2 rounded-full text-purple-700 hover:bg-purple-50 hidden md:flex items-center justify-center border border-gray-100 transition">
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Swiper Slider Component */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full py-2"
          >
            {/* Card 1 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg" alt="Ավտոմեքենայի ձեռքբերման նպատակով վարկ" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Ավտոմեքենայի ձեռքբերման նպատակով վարկ
                </p>
              </div>
            </SwiperSlide>

            {/* Card 2 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg" alt="Անգրավ սպառողական վարկ" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Անգրավ սպառողական վարկ
                </p>
              </div>
            </SwiperSlide>

            {/* Card 3 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg" alt="Գույքի գրավով ապահովված վարկ" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Գույքի գրավով ապահովված վարկ
                </p>
              </div>
            </SwiperSlide>

            {/* Card 4 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/17552479364123/415x261.png" alt="Արևային կայանների ձեռք բերման վարկ EvocaPOWER" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Արևային կայանների ձեռք բերման վարկ EvocaPOWER
                </p>
              </div>
            </SwiperSlide>

            {/* Card 5 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg" alt="Ոսկու գրավով (լոմբարդային) վարկ" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Ոսկու գրավով (լոմբարդային) վարկ
                </p>
              </div>
            </SwiperSlide>

            {/* Card 6 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/16131174467985/415x261.jpg" alt="Տեղում Ապառիկ" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Տեղում Ապառիկ
                </p>
              </div>
            </SwiperSlide>

            {/* Card 7 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg" alt="Evoca աշխատավարձային փաթեթ" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Evoca աշխատավարձային փաթեթի շրջականակում տրամադրվող վարկ
                </p>
              </div>
            </SwiperSlide>

            {/* Card 8 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg" alt="Բնակարանային հիփոթեքային վարկեր" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով
                </p>
              </div>
            </SwiperSlide>

            {/* Card 9 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png" alt="Action" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Action
                </p>
              </div>
            </SwiperSlide>

            {/* Card 10 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png" alt="Հիփոթեքային վարկ ԼՂ-ից" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին
                </p>
              </div>
            </SwiperSlide>

            {/* Card 11 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg" alt="Հողամասի ձեռքբերման վարկ" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Հողամասի ձեռքբերման վարկ
                </p>
              </div>
            </SwiperSlide>

            {/* Card 12 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png" alt="Միկրովերանորոգման վարկ" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Միկրովերանորոգման վարկ Բանկի ռեսուրսներով
                </p>
              </div>
            </SwiperSlide>

            {/* Card 13 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png" alt="Տրանսպորտային միջոցների լիզինգ" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ
                </p>
              </div>
            </SwiperSlide>

            {/* Card 14 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/16947885698869/415x261.png" alt="Վճարային քարտով օվերդրաֆտ" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Վճարային քարտով օվերդրաֆտ (վարկային քարտ)
                </p>
              </div>
            </SwiperSlide>

            {/* Card 15 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png" alt="Անհատական վարկ «Ներդրումային»" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Անհատական վարկ «Ներդրումային»
                </p>
              </div>
            </SwiperSlide>

            {/* Card 16 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg" alt="Ավտոկայանատեղիի ձեռքբերման վարկ" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Ավտոկայանատեղիի ձեռքբերման վարկ
                </p>
              </div>
            </SwiperSlide>

            {/* Card 17 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png" alt="Հեծանիվի ձեռքբերման վարկ" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Հեծանիվի ձեռքբերման վարկ
                </p>
              </div>
            </SwiperSlide>

            {/* Card 18 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png" alt="Ոչ ռեզիդենտ ֆիզ․ անձանց համար" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ
                </p>
              </div>
            </SwiperSlide>

            {/* Card 19 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/17198124761415/415x261.png" alt="Վերանորոգման վարկ EvocaHOME" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Վերանորոգման վարկ EvocaHOME
                </p>
              </div>
            </SwiperSlide>

            {/* Card 20 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/1782886301331/415x261.jpg" alt="Դրամական միջոցների գրավով" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Դրամական միջոցների գրավով ապահովված անհատական վարկ
                </p>
              </div>
            </SwiperSlide>

            {/* Card 21 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/16142450609707/415x261.jpg" alt="Առևտրային հիփոթեքային վարկեր" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Առևտրային հիփոթեքային վարկեր
                </p>
              </div>
            </SwiperSlide>

            {/* Card 22 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/16142450957048/415x261.jpg" alt="ԱՀԸ-ի ծրագրով ձեռք բերման վարկեր" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  ԱՀԸ-ի ծրագրով ձեռք բերման վարկեր
                </p>
              </div>
            </SwiperSlide>

            {/* Card 23 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/17265524369781/415x261.png" alt="ԱՀԸ-ի ծրագրով կառուցապատման վարկեր" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  ԱՀԸ-ի ծրագրով կառուցապատման վարկեր
                </p>
              </div>
            </SwiperSlide>

            {/* Card 24 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/16142533830767/415x261.jpg" alt="ԱՀԸ-ի ծրագրով վերանորոգման վարկեր" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  ԱՀԸ-ի ծրագրով վերանորոգման վարկեր
                </p>
              </div>
            </SwiperSlide>

            {/* Card 25 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/16142451699164/415x261.jpg" alt="Երիտասարդ ընտանիքին՝ մատչելի բնակարան" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»
                </p>
              </div>
            </SwiperSlide>

            {/* Card 26 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/16142652333164/415x261.jpg" alt="Visa Infinite վճարային քարտեր" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ
                </p>
              </div>
            </SwiperSlide>

            {/* Card 27 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/16690386016508/415x261.png" alt="Հիփոթեքային վարկ Արցախի շրջաններից" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին
                </p>
              </div>
            </SwiperSlide>

            {/* Card 28 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/17133596531389/415x261.png" alt="Վերանորոգման հիփոթեքային վարկ Արցախից" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին
                </p>
              </div>
            </SwiperSlide>

            {/* Card 29 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/16142452651138/415x261.jpg" alt="«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  «ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ
                </p>
              </div>
            </SwiperSlide>

            {/* Card 30 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png" alt="Հիփոթեքային վարկեր ՀՀ սահմանամերձ" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր
                </p>
              </div>
            </SwiperSlide>

            {/* Card 31 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/16644424027338/415x261.png" alt="Evolution" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Evolution
                </p>
              </div>
            </SwiperSlide>

            {/* Card 32 */}
            <SwiperSlide>
              <div className="group cursor-pointer">
                <img src="https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png" alt="Հիփոթեքային վարկեր Զինծառայողներին" className="w-full rounded-xl object-cover" />
                <p className="font-bold text-center text-sm text-gray-800 group-hover:text-[#6a0dad] transition mt-3">
                  Հիփոթեքային վարկեր Զինծառայողներին
                </p>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </section>

     {/* 6. ONLINE & MOBILE BANKING BANNER SECTION */}
      <section className="w-full bg-[#6a0dad] text-white py-12 px-6 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-36 h-36 bg-purple-500/30 rounded-br-full pointer-events-none z-0"></div>
        <div className="absolute top-10 left-10 w-12 h-12 rounded-full border-4 border-pink-400 opacity-40 pointer-events-none"></div>
        <div className="absolute top-6 right-20 w-8 h-8 border-2 border-white/20 rotate-45 pointer-events-none"></div>
        <div className="absolute bottom-12 right-32 w-10 h-10 bg-pink-400/30 rounded-lg rotate-12 blur-sm pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Left Side: Laptop & Phone Mockups */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative">
            
            {/* Laptop Container */}
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] z-10">
              {/* Screen */}
              <div className="relative rounded-t-xl border-[6px] border-[#1e1e1e] bg-black shadow-2xl overflow-hidden aspect-[16/10]">
                <iframe
                  src="https://www.youtube.com/embed/KwAgMHEx8ys?enablejsapi=1"
                  title="EvocaTOUCH Video"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Base */}
              <div className="w-[108%] -translate-x-[4%] h-3 bg-[#2d2d2d] rounded-b-xl border-t border-neutral-700 shadow-xl relative flex justify-center">
                <div className="w-16 h-1 bg-neutral-600 rounded-b-md"></div>
              </div>
            </div>

            {/* Mobile Phone Container */}
            <div className="relative -ml-16 sm:-ml-20 z-20 top-4 shrink-0">
              <div className="w-32 sm:w-40 aspect-[9/19] rounded-[2.2rem] border-[5px] border-[#1a1a1a] bg-black overflow-hidden shadow-2xl relative">
                {/* Notch/Camera */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-[#1a1a1a] rounded-full z-30"></div>
                <img
                  src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg"
                  alt="Evoca Mobile App"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

          {/* Right Side: Text, Action Button & Downloads */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Օնլայն և մոբայլ բանկինգ
            </h2>
            
            <p className="text-purple-100 text-sm md:text-base leading-relaxed max-w-xl">
              Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն
              առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
            </p>

            <div>
              <Link
                to="/evoca-online"
                className="inline-block bg-white text-[#6a0dad] px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition shadow-lg text-sm md:text-base"
              >
                Դառնալ հաճախորդ
              </Link>
            </div>

            {/* QR Code and Stores */}
            <div className="flex items-center gap-6 pt-4">
              {/* QR Code */}
              <div className="bg-white p-2 rounded-lg shadow">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://www.evoca.am" 
                  alt="Evoca App QR Code" 
                  className="w-16 h-16"
                />
              </div>
              <p className="text-xs text-purple-200 max-w-[160px]">
                Սկանավորեք QR կոդը EvocaTOUCH հավելվածը ներբեռնելու համար:
              </p>
            </div>
          </div>

        </div>
      </section>
 {/* 9. FOOTER SECTION */}
      <footer className="bg-white border-t border-gray-200 text-xs text-gray-600 pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          <div className="space-y-4">
            <span className="text-2xl font-black text-gray-900 block">evoca<span className="text-gray-400 font-normal">BANK</span></span>
            <p className="text-gray-500">
              ք․ Երևան, 0010,<br /> Հանրապետության 44/2
            </p>
            <p className="text-[11px] text-gray-400 leading-tight">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="text-[10px] text-gray-400">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3">Բանկի մասին</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#6a0dad]">Մեր մասին</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Ղեկավարություն</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Բաժնետերեր</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հաշվետվություններ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Իրավական ակտեր</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Սակագներ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Օտարվող գույք</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Կառուցապատողներ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Գործընկեր ավտոսրահներ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Սակագների արխիվ</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3">Օգտակար հղումներ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#6a0dad]">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հաճախորդի ռեզիդենտության չափանիշներ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Կարգավորում</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Գաղտնիության քաղաքականություն</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Ֆին. հաշտարար</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Ֆինանսական հանցագործությունների կանխարգելում</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հղումներ Բանկի քարտապանների համար</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3">Այլ հղումներ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#6a0dad]">EvocaONLINE</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Պահատուփեր</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հաճախ տրվող հարցեր</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հայտարարություններ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Dibrary</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Բուկլետներ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հետադարձ կապ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Կայքի քարտեզ</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3 text-gray-500">
              <a href="#" className="hover:text-[#6a0dad]">f</a>
              <a href="#" className="hover:text-[#6a0dad]">in</a>
              <a href="#" className="hover:text-[#6a0dad]">yt</a>
            </div>

            <div className="space-y-1">
              <a href="#" className="bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded inline-block mr-2">
                App Store
              </a>
              <a href="#" className="bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded inline-block">
                Google Play
              </a>
            </div>

            <a href="#" className="text-[#6a0dad] font-bold block hover:underline">
              Բանկի հասցեները և աշխատաժամերը
            </a>

            <a href="#" className="text-[#6a0dad] font-bold block hover:underline">
              Կապ մեզ հետ
            </a>

            <div className="space-y-1 font-bold text-gray-900 text-sm">
              <p>+374 10 605555</p>
              <p className="text-[#6a0dad] text-base">8444</p>
            </div>
          </div>

        </div>

        {/* BOTTOM PARTNERS / CERTIFICATES BAR */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 mt-8 border-t border-gray-100 flex flex-wrap justify-between items-center gap-4 text-[10px] text-gray-400">
          <p className="max-w-xl">
            Կայքում տեղադրված տեղեկատվության վերաբերյալ տարբերություններ առաջանալու դեպքում, ինչպես նաև ռուսերեն և անգլերեն լեզուներով ոչ ամբողջական լինելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով։ «Էվոկաբանկ» ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների համար։
          </p>
          <div className="flex items-center gap-4 opacity-60 grayscale hover:grayscale-0 transition">
            <span className="font-bold">fininfo</span>
            <span className="font-bold">abcfinance.am</span>
            <span className="font-bold">arca</span>
          </div>
        </div>
      </footer>

      {/* FLOATING SOCIAL ICONS */}
      <div className="hidden lg:flex flex-col items-center gap-3 fixed left-3 top-1/2 -translate-y-1/2 z-30 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md border border-gray-100 text-gray-500">
        <a href="#" className="hover:text-[#6a0dad] transition font-bold text-xs">f</a>
        <a href="#" className="hover:text-[#6a0dad] transition font-bold text-xs">in</a>
        <a href="#" className="hover:text-[#6a0dad] transition font-bold text-xs">P</a>
      </div>

      {/* FLOATING CHAT BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <button className="bg-[#6a0dad] text-white font-bold text-xs px-5 py-3 rounded-full shadow-xl hover:bg-purple-900 transition flex items-center gap-2">
          Գրեք մեզ, մենք օնլայն ենք ․․․
        </button>
        <button className="bg-[#d8b4fe] text-[#6a0dad] p-3 rounded-full shadow-lg hover:bg-purple-300 transition">
          <Phone className="w-5 h-5 fill-current" />
        </button>
      </div>
    </div>
  );
}