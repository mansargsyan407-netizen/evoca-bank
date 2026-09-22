import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [activeYear, setActiveYear] = useState('2026');

  const historyData = {
    '2026': 'Բանկը բացեց նոր «Աջափնյակ» մասնաճյուղը, կնքեց նոր միջազգային համագործակցության պայմանագրեր, մասնակցեց միջազգային կոնֆերանսների, արժանացավ հեղինակավոր մրցանակների և կյանքի կոչեց Երևանը գունավորող street art-երը:',
    '2025': '2025 թվականի ընթացքում Բանկը ներդրեց նոր թվային ծառայություններ և ընդլայնեց իր ֆինտեխ էկոհամակարգը:',
    '2024': '2024 թվականին ակտիվորեն զարգացվեցին մոբայլ բանկինգի ֆունկցիոնալությունը և հաճախորդների սպասարկման որակը:',
    '2023': '2023 թվականին Բանկն իրականացրեց մի շարք խոշոր սոցիալական և տեխնոլոգիական նախագծեր:',
    '2022': '2022 թվականի ձեռքբերումները ներառում էին միջազգային նոր զարգացման ծրագրեր:',
    '2021': '2021 թվականին Բանկը վերահաստատեց իր դիրքերը որպես առաջատար թվային բանկ:',
  };

  return (
    <div className="bg-purple-900 min-h-screen text-white font-sans">
      {/* ================= HEADER SECTION ================= */}
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

            {/* Աջ կողմի կոճակը */}
            <div>
              <button className="bg-[#6b21a8] hover:bg-purple-800 text-white text-xs md:text-sm font-bold px-6 py-2.5 rounded-full shadow-md transition">
                EvocaONLINE
              </button>
            </div>

          </div>
        </div>

        {/* 3. Մանուշակագույն ենթամենյու (Purple Sub-Menu) */}
        <nav className="bg-[#6b21a8] text-white text-xs md:text-sm font-medium py-3 px-4 overflow-x-auto shadow-md">
          <div className="max-w-6xl mx-auto flex space-x-6 whitespace-nowrap justify-start md:justify-center">
            <Link to="/" className="bg-purple-900 px-3 py-1 rounded font-bold">
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
      {/* ================= END HEADER SECTION ================= */}

      {/* Ընդհանուր տեղեկություն */}
      <section className="bg-white text-gray-800 py-12 px-6 md:px-16 rounded-b-3xl shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black">
            Ընդհանուր տեղեկություն
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Տեքստային հատված */}
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700">
              <p>
                <span className="font-semibold text-purple-700">Evocabank</span>-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
              </p>
              <p>
                Մենք հատուկ ուշադրություն ենք դարձնում մոբայլ ծառայությունների զարգացմանը:
              </p>
              <p>
                Մենք աշխատում ենք <span className="font-semibold">mobile-first</span> ֆորմատով՝ յուրաքանչյուր նոր ծառայություն նախագծելիս նախևառաջ հաշվի ենք առնում դրան՝ հավելվածով օգտագործման հարմարավետությունը:
              </p>
              <p className="font-medium text-black">
                Աշխարհը թվային է դառնում, և մենք պատրաստ ենք դրան:
              </p>
            </div>

            {/* Նկարի հատված */}
            <div className="flex justify-center">
              <img
                src="https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png"
                alt="Evocabank"
                className="w-full max-w-md h-auto rounded-xl shadow-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Մեր տեսլականը */}
      <section className="py-16 px-6 md:px-16 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Մեր տեսլականը
          </h2>
          <div className="w-12 h-1 bg-white mx-auto rounded-full"></div>
          <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Դառնալ գլոբալ ֆինտեխ գործընկեր, որը միավորում է լավագույն փորձն ու տեխնոլոգիական նորարարությունները հարմարավետ և ճկուն ծառայություններ ապահովելու համար:
          </p>
        </div>
      </section>

      {/* Մեր առաքելությունը */}
      <section className="bg-white text-gray-800 py-12 px-6 md:px-16 shadow-lg">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black">
            Մեր առաքելությունը
          </h2>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
            <img
              src="https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg"
              alt="Evoca Office"
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 md:left-12 md:right-12 bg-purple-50/95 backdrop-blur-md p-6 rounded-xl text-left border-l-4 border-purple-700 shadow-lg">
              <p className="text-sm md:text-base text-gray-800 leading-relaxed font-medium">
                Որպես <span className="font-semibold text-purple-700">human-first</span> և խելացի ֆինտեխ ընկերություն՝ մենք հնարավորություն ենք տալիս մարդկանց երազելու ավելի համարձակ, բիզնեսներին՝ բացահայտելու նոր հորիզոններ, և հասարակությանը՝ կառուցելու ավելի լավ ապագա:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Բանկի պատմությունը (Timeline) */}
      <section className="bg-white text-gray-800 py-12 px-6 md:px-16 border-t">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-black">
            Բանկի պատմությունը
          </h2>

          {/* Տարեթվերի ժամանակացույց (Timeline Nav) */}
          <div className="flex items-center justify-center space-x-4 md:space-x-8 mb-8 overflow-x-auto py-2">
            <span className="text-gray-400 text-xl font-bold cursor-pointer">&larr;</span>
            {Object.keys(historyData).map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`flex flex-col items-center focus:outline-none transition ${
                  activeYear === year ? 'text-purple-700 font-bold scale-110' : 'text-gray-500 hover:text-purple-500'
                }`}
              >
                <span className="text-sm md:text-base mb-1">{year}</span>
                <span className={`w-3 h-3 rounded-full ${activeYear === year ? 'bg-purple-700 ring-4 ring-purple-200' : 'bg-gray-300'}`}></span>
              </button>
            ))}
            <span className="text-purple-700 text-xl font-bold cursor-pointer">&rarr;</span>
          </div>

          {/* Տվյալ տարվա բովանդակությունը */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center shadow-inner">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              {historyData[activeYear]}
            </p>
            <div className="flex justify-center items-center">
              <img
                src="https://www.evoca.am/images-cache/histories/1/17823049564741/450x330.png"
                alt="Evocabank History"
                className="w-full max-w-sm h-auto rounded-lg object-contain shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Արժեքներ և առաջնայնություններ */}
      <section className="bg-white text-gray-800 py-12 px-6 md:px-16 border-t">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-black">
            Արժեքներ և առաջնայնություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-purple-700">Human-first</h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                Առաջին տեղում միշտ մարդիկ են՝ մեր հաճախորդները, էքսպերտների թիմը և հասարակությունը: Չէ՞ որ աշխարհում ամեն ինչ արվում է մարդկանց կողմից մարդկանց համար:
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-purple-700">Նորարարություն</h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                Նորարարությունը մեր ԴՆԹ-ի մասն է, իսկ փոփոխությունն այսօր միակ հաստատունն է: Մենք բաց ենք և պատրաստակամ զարգանալու համար:
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-purple-700">Դրական ազդեցություն</h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                Մենք ձգտում ենք ունենալ դրական ազդեցություն և նպաստել աշխարհն ավելի լավը դարձնելուն:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Կորպորատիվ սոցիալական պատասխանատվություն (CSR) */}
      <section className="bg-purple-50 text-gray-800 py-12 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            Կորպորատիվ սոցիալական պատասխանատվություն
          </h2>
          <p className="text-sm text-gray-600 mb-8">
            Բանկը շարունակաբար աջակցություն է ցուցաբերում հանրության տարբեր խմբերին և հասարակական նախաձեռնություններին հետևյալ ոլորտներում՝
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <span className="w-8 h-1 bg-purple-700 mt-2 rounded"></span>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Նորագույն տեխնոլոգիաների զարգացում</span>, նորարար նախաձեռնություններ, startup-եր:
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <span className="w-8 h-1 bg-purple-700 mt-2 rounded"></span>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Երիտասարդության կրթական</span>, գիտական և մշակութային նախաձեռնություններ:
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <span className="w-8 h-1 bg-purple-700 mt-2 rounded"></span>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Հասարակական կարևոր</span> նշանակություն ունեցող նախաձեռնություններ:
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <span className="w-8 h-1 bg-purple-700 mt-2 rounded"></span>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Հասարակության առավել խոցելի խմբեր</span>, մասնավորապես՝ ծնողազուրկ կամ հատուկ խնամքի տակ գտնվող երեխաներ:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Բանկի լոգոտիպը */}
      <section className="bg-white text-gray-800 py-12 px-6 md:px-16 border-t">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-left">
            Բանկի լոգոտիպը
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-left">
            Բանկի լոգոն կազմված է evolution՝ էվոլյուցիա բառի արմատից և նմանեցված է evoke՝ զարթեցնել բառին: Բառի երկրորդ տառը՝ V-ն, պատկերված է կորացված անկյուններով հավասարակողմ եռանկյան տեսքով և նմանեցված է դեպի աջ և վեր ուղղված սլաքի տեսքով՝ խորհրդանշելով Բանկի ձգտումը դեպի առաջընթաց:
          </p>
          <div className="pt-6 flex justify-center items-center">
            <img src="https://www.evoca.am/file_manager/icons/logo.png" alt="Evocabank Logo" />
          </div>
        </div>
      </section>

      {/* Բանկի բրենդբուքը և Կորպորատիվ գույները */}
      <section className="bg-white text-gray-800 py-12 px-6 md:px-16 border-t">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Brandbook */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Բանկի բրենդբուքը
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Բրենդբուքում կգտնեք Բանկի լոգոյի կիրառման կանոնները, բրենդային գույները, տառատեսակները և բրենդի այլ կարևոր տարրերը: Սա պարզապես ուղեցույց չէ, այլ ոգեշնչման աղբյուր՝ ուժեղ և ճանաչելի բրենդ կառուցելու համար:
            </p>
            <img src="https://www.evoca.am/file_manager/other/52.png" alt="Brandbook" />
          </div>

          {/* Corporate Colors */}
          <div className="space-y-6 pt-6">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Բանկի կորպորատիվ գույները
            </h2>
            <p className="text-sm text-gray-600">
              Բանկի կորպորատիվ գույներն են՝ սպիտակը, մոխրագույնը և մանուշակագույնը:
            </p>

            <div className="bg-purple-50/50 p-6 rounded-2xl space-y-4 border border-purple-100">
              <div className="flex items-center space-x-4">
                <span className="w-5 h-5 rounded-full bg-white border border-gray-300 flex-shrink-0"></span>
                <p className="text-xs md:text-sm text-gray-700">
                  <span className="font-semibold">Սպիտակը</span> խորհրդանշում է նորը:
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="w-5 h-5 rounded-full bg-gray-500 flex-shrink-0"></span>
                <p className="text-xs md:text-sm text-gray-700">
                  <span className="font-semibold">Մոխրագույնը</span> խորհրդանշում է Նորագույն տեխնոլոգիաների կիրառումը:
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="w-5 h-5 rounded-full bg-purple-700 flex-shrink-0"></span>
                <p className="text-xs md:text-sm text-gray-700">
                  <span className="font-semibold">Մանուշակագույնը</span> երիտասարդության, ստեղծարարության և Նորարարության գույնն է:
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Վիդեոյի բաժին */}
      <section className="bg-purple-900 py-12 px-6 md:px-16 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl border border-purple-700">
            <iframe
              className="w-full h-[250px] sm:h-[400px] md:h-[480px]"
              src="https://www.youtube.com/embed/eHhrs6W4qjA"
              title="Evocabank Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-xs text-purple-300 text-right">
            Թարմացվել է՝ 18/02/2026 10:20
          </p>
        </div>
      </section>

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

export default About;