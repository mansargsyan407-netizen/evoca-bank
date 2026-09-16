import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';

// Swiper style-ներ
import 'swiper/css';
import 'swiper/css/navigation';

const GoldLoanDetails = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');

  // Ընթացիկ էջի վարկի ID-ն
  const currentLoanId = 4; // Ոսկու գրավով (լոմբարդային) վարկ

  // "Այլ վարկեր" կարուսելի ամբողջական տվյալները (32 վարկ)
  const allLoans = [
   {
    id: 1,
    title: 'Անգրավ սպառողական վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg',
    path: '/loans/1',
  },
  {
    id: 2,
    title: 'Դրամական միջոցների գրավով ապահովված անհատական վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/1782886301331/415x261.jpg',
    path: '/loans/20',
  },
  {
    id: 3,
    title: 'Action',
    image: 'https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png',
    path: '/loans/9',
  },
  {
    id: 4,
    title: 'Ոսկու գրավով (լոմբարդային) վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg',
    path: '/loans/5',
  },
  {
    id: 5,
    title: 'Ավտոմեքենայի ձեռքբերման նպատակով վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg',
    path: '/loans/2',
  },
  {
    id: 6,
    title: 'Գույքի գրավով ապահովված վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg',
    path: '/loans/3',
  },
  {
    id: 7,
    title: 'Արևային կայանների ձեռք բերման վարկ EvocaPOWER',
    image: 'https://www.evoca.am/images-cache/loans/1/17552479364123/415x261.png',
    path: '/loans/4',
  },
  {
    id: 8,
    title: 'Տեղում Ապառիկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16131174467985/415x261.jpg',
    path: '/loans/6',
  },
  {
    id: 9,
    title: 'Evoca աշխատավարձային փաթեթի շրջականակում տրամադրվող վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg',
    path: '/loans/7',
  },
  {
    id: 10,
    title: 'Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով',
    image: 'https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg',
    path: '/loans/8',
  },
  {
    id: 11,
    title: 'Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին',
    image: 'https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png',
    path: '/loans/10',
  },
  {
    id: 12,
    title: 'Հողամասի ձեռքբերման վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg',
    path: '/loans/11',
  },
  {
    id: 13,
    title: 'Միկրովերանորոգման վարկ Բանկի ռեսուրսներով',
    image: 'https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png',
    path: '/loans/12',
  },
  {
    id: 14,
    title: 'Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ',
    image: 'https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png',
    path: '/loans/13',
  },
  {
    id: 15,
    title: 'Վճարային քարտով օվերդրաֆտ (վարկային քարտ)',
    image: 'https://www.evoca.am/images-cache/loans/1/16947885698869/415x261.png',
    path: '/loans/14',
  },
  {
    id: 16,
    title: 'Անհատական վարկ «Ներդրումային»',
    image: 'https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png',
    path: '/loans/15',
  },
  {
    id: 17,
    title: 'Ավտոկայանատեղիի ձեռքբերման վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg',
    path: '/loans/16',
  },
  {
    id: 18,
    title: 'Հեծանիվի ձեռքբերման վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png',
    path: '/loans/17',
  },
  {
    id: 19,
    title: 'Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png',
    path: '/loans/18',
  },
  {
    id: 20,
    title: 'Վերանորոգման վարկ EvocaHOME',
    image: 'https://www.evoca.am/images-cache/loans/1/17198124761415/415x261.png',
    path: '/loans/19',
  },
  {
    id: 21,
    title: 'Առևտրային հիփոթեքային վարկեր',
    image: 'https://www.evoca.am/images-cache/loans/1/16142450609707/415x261.jpg',
    path: '/loans/21',
  },
  {
    id: 22,
    title: 'ԱՀԸ-ի ծրագրով ձեռք բերման վարկեր',
    image: 'https://www.evoca.am/images-cache/loans/1/16142450957048/415x261.jpg',
    path: '/loans/22',
  },
  {
    id: 23,
    title: 'ԱՀԸ-ի ծրագրով կառուցապատման վարկեր',
    image: 'https://www.evoca.am/images-cache/loans/1/17265524369781/415x261.png',
    path: '/loans/23',
  },
  {
    id: 24,
    title: 'ԱՀԸ-ի ծրագրով վերանորոգման վարկեր',
    image: 'https://www.evoca.am/images-cache/loans/1/16142533830767/415x261.jpg',
    path: '/loans/24',
  },
  {
    id: 25,
    title: 'Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»',
    image: 'https://www.evoca.am/images-cache/loans/1/16142451699164/415x261.jpg',
    path: '/loans/25',
  },
  {
    id: 26,
    title: 'Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142652333164/415x261.jpg',
    path: '/loans/26',
  },
  {
    id: 27,
    title: 'Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին',
    image: 'https://www.evoca.am/images-cache/loans/1/16690386016508/415x261.png',
    path: '/loans/27',
  },
  {
    id: 28,
    title: 'Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին',
    image: 'https://www.evoca.am/images-cache/loans/1/17133596531389/415x261.png',
    path: '/loans/28',
  },
  {
    id: 29,
    title: '«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142452651138/415x261.jpg',
    path: '/loans/29',
  },
  {
    id: 30,
    title: 'Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր',
    image: 'https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png',
    path: '/loans/30',
  },
  {
    id: 31,
    title: 'Evolution',
    image: 'https://www.evoca.am/images-cache/loans/1/16644424027338/415x261.png',
    path: '/loans/31',
  },
  {
    id: 32,
    title: 'Հիփոթեքային վարկեր Զինծառայողներին',
    image: 'https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png',
    path: '/loans/32',
  },
  ];

  // «Այլ վարկեր» ցուցակից հանում ենք ընթացիկ էջի վարկը
  const otherLoans = allLoans.filter((loan) => loan.id !== currentLoanId);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col relative selection:bg-purple-500 selection:text-white">
      
      {/* 1. TOP HEADER & NAVBAR */}
      <header className="w-full bg-white border-b border-gray-100 text-xs">
       
      

        {/* Purple Sub-category Bar */}
        <div className="bg-[#6a0dad] text-white py-2.5">
          <div className="max-w-[1400px] mx-auto px-6 flex items-center space-x-8 text-xs font-semibold">
            <span className="bg-purple-900/60 px-4 py-1.5 rounded-md font-bold">Վարկեր</span>
            <span className="hover:opacity-80 cursor-pointer">Վարկային պատմություն և սքոր</span>
            <span className="hover:opacity-80 cursor-pointer">Կարևոր տեղեկատվություն</span>
          </div>
        </div>
      </header>

      {/* 2. HERO BANNER */}
      <section className="relative w-full bg-[#f8f6fb] overflow-hidden min-h-[360px] md:min-h-[420px] flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full py-8 grid grid-cols-1 md:grid-cols-12 items-center gap-8 z-10">
          {/* Left Text Box */}
          <div className="md:col-span-7 space-y-4">
            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Ոսկու գրավով (լոմբարդային) վարկ
            </h1>
            <p className="text-gray-600 text-xs md:text-sm max-w-xl leading-relaxed">
              Ձևակերպե՛ք ոսկյա իրերի գրավով վարկեր Evocabank-ի մասնաճյուղերում հաշված րոպեների ընթացքում և ստացե՛ք վարկ ոսկու գնահատված արժեքի մինչև 150%-ի չափով:
            </p>
          </div>

          {/* Right Banner Image */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <img 
              src="https://www.evoca.am/images-cache/loans/1/1614245290258/560x400.png" 
              alt="Ոսկու գրավով վարկ" 
              className="max-h-[300px] md:max-h-[380px] w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* 3. BREADCRUMBS & NAVIGATION */}
      <div className="max-w-[1400px] mx-auto px-6 py-4 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-gray-500 gap-4 border-b border-gray-100">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 bg-white border border-gray-200 shadow-sm px-5 py-2 rounded-full text-gray-800 font-bold hover:bg-gray-50 transition active:scale-95"
        >
          <span>←</span>
          <span>Վերադառնալ</span>
        </button>

        <div className="flex items-center space-x-2 text-[11px] font-medium text-gray-600 flex-wrap">
          <span>🏠</span>
          <span>›</span>
          <Link to="/" className="hover:text-purple-700 transition">Անհատ</Link>
          <span>›</span>
          <span className="hover:text-purple-700 cursor-pointer">Վարկեր</span>
          <span>›</span>
          <span className="hover:text-purple-700 cursor-pointer">Վարկեր</span>
          <span>›</span>
          <span className="text-gray-900 font-bold">Ոսկու գրավով (լոմբարդային) վարկ</span>
        </div>
      </div>

      {/* 4. MAIN CONTENT (TABS & DETAILS GRID) */}
      <main className="max-w-[1400px] mx-auto px-6 py-8 w-full flex-grow">
        {/* Tabs Header */}
        <div className="border-b border-gray-200 mb-8 flex space-x-8 text-xs md:text-sm font-bold">
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-3 transition relative ${
              activeTab === 'about'
                ? 'text-purple-700 border-b-2 border-purple-700'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Վարկի մասին
          </button>
          <button
            onClick={() => setActiveTab('conditions')}
            className={`pb-3 transition relative ${
              activeTab === 'conditions'
                ? 'text-purple-700 border-b-2 border-purple-700'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Պայմաններ
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`pb-3 transition relative ${
              activeTab === 'documents'
                ? 'text-purple-700 border-b-2 border-purple-700'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Պահանջվող փաստաթղթերի ցանկ
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-xs md:text-sm">
            {activeTab === 'about' && (
              <div className="space-y-4">
                <p>
                  Դիմե՛ք <span className="font-bold text-purple-800">Evocabank</span>-ի մասնաճյուղեր (բացառությամբ Էրեբունի, Հանրապետության և Երևան Մոլ մասնաճյուղերի) և ստացե՛ք վարկ հաշված րոպեների ընթացքում: Վարկը Ձեզ կտրամադրվի անմիջապես՝ ոսկերիչ-փորձագետի գնահատումից հետո:
                </p>
                <p>
                  <span className="font-bold text-purple-800">Evocabank</span>-ը առաջարկում է ոսկյա իրերի գրավադրմամբ վարկեր՝ մարման գրաֆիկների մի քանի տարբերակներով: Մեր մասնագետները մշտապես պատրաստ են տրամադրել Ձեզ անհատական խորհրդատվություն՝ հնարավորություն տալով ընտրել մարումների Ձեզ համար առավել նպատակահարմար տարբերակ:
                </p>
              </div>
            )}

           {activeTab === 'conditions' && (
  <div className="space-y-6 text-xs md:text-sm text-gray-700">
    <div>
      <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">1. Վարկի տրամադրման նպատակը</h3>
      <p>
        Վարկը տրամադրվում է ոսկյա իրերի գրավադրմամբ անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների, ծառայությունների) պատվիրման կամ ձեռքբերման նպատակով:
      </p>
    </div>

    <div>
      <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">2. Ովքեր կարող են դիմել</h3>
      <p>18 – 70 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն բոլորի 70 տարեկանը:</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
      <div>
        <h3 className="font-bold text-gray-900 mb-1">3. Վարկավորման արժույթ</h3>
        <p className="text-purple-700 font-semibold">ՀՀ դրամ</p>
      </div>
      <div>
        <h3 className="font-bold text-gray-900 mb-1">4. Վարկավորման գումար</h3>
        <p className="text-purple-700 font-semibold">50,000 – 50,000,000 ՀՀ դրամ</p>
      </div>
      <div>
        <h3 className="font-bold text-gray-900 mb-1">5. Վարկի մարման ժամկետը</h3>
        <p className="text-purple-700 font-semibold">3 - 60 ամիս</p>
      </div>
      <div>
        <h3 className="font-bold text-gray-900 mb-1">13. Վարկի տրամադրման եղանակը</h3>
        <p className="text-purple-700 font-semibold">Անկանխիկ</p>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">6. Վարկի մարման եղանակը</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><span className="font-semibold text-gray-900">«Անուիտետային»</span> — 3 - 60 ամիս մարման ժամկետով</li>
        <li><span className="font-semibold text-gray-900">«Միանգամյա»</span> — 3 - 12 ամիս մարման ժամկետով</li>
      </ul>
    </div>

    {/* 7. ՏԱՐԵԿԱՆ ԱՆՎԱՆԱԿԱՆ ՏՈԿՈՍԱԴՐՈՒՅՔՆԵՐ (ՍՏԱՆԴԱՐՏ) */}
    <div>
      <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">7. Տարեկան անվանական տոկոսադրույքներ /ստանդարտ/</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-purple-50 text-purple-900 font-bold border-b border-gray-200">
              <th className="p-2.5 border-r border-gray-200">Վարկի ժամկետ (ամիս)</th>
              <th className="p-2.5 border-r border-gray-200 text-center">«Անուիտետային»</th>
              <th className="p-2.5 text-center">«Միանգամյա»</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="p-2.5 border-r border-gray-200 font-medium">3 - 12</td>
              <td className="p-2.5 border-r border-gray-200 text-center font-bold text-purple-700">15.5%</td>
              <td className="p-2.5 text-center font-bold text-purple-700">16.5%</td>
            </tr>
            <tr>
              <td className="p-2.5 border-r border-gray-200 font-medium">13 - 36</td>
              <td className="p-2.5 border-r border-gray-200 text-center font-bold text-purple-700">16.5%</td>
              <td className="p-2.5 text-center text-gray-400">-</td>
            </tr>
            <tr>
              <td className="p-2.5 border-r border-gray-200 font-medium">37 - 60</td>
              <td className="p-2.5 border-r border-gray-200 text-center font-bold text-purple-700">17.5%</td>
              <td className="p-2.5 text-center text-gray-400">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* 8 & 9. ԼՐԱՑՈՒՑԻՉ ՍԱՀՄԱՆԱՉԱՓ ԵՎ ՓԱՍՏԱՑԻ ՏՈԿՈՍԱԴՐՈՒՅՔ */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="border border-purple-100 bg-purple-50/50 p-4 rounded-xl">
        <h3 className="font-bold text-gray-900 text-sm mb-1">8. Տարեկան անվանական տոկոսադրույք /լրացուցիչ սահմանաչափ/</h3>
        <p className="text-xs text-gray-600 mb-2">24 - 60 ամիս ժամկետով</p>
        <span className="text-xl font-black text-purple-700">19.5%</span>
      </div>

      <div className="border border-purple-100 bg-purple-50/50 p-4 rounded-xl">
        <h3 className="font-bold text-gray-900 text-sm mb-1">9. Տարեկան փաստացի տոկոսադրույք</h3>
        <p className="text-xs text-gray-600 mb-2">24 - 60 ամիս ժամկետով</p>
        <span className="text-xl font-black text-purple-700">16.7% - 21.38%</span>
      </div>
    </div>

    {/* 10, 11, 12 */}
    <div className="space-y-4">
      <div>
        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">10. Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք</h3>
        <p className="text-green-600 font-semibold">Տուգանք չի կիրառվում</p>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">11. Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր</h3>
        <ul className="list-disc list-inside text-red-600 space-y-1">
          <li>Ժամկետանց վարկի համար՝ <span className="font-bold">օրական 0.015%</span></li>
          <li>Ժամկետանց տոկոսագումարի համար՝ <span className="font-bold">օրական 0.1%</span></li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">12. Վարկ/գրավ հարաբերակցությունը</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><span className="font-semibold text-gray-900">«Անուիտետային» (լրացուցիչ սահմանաչափ)՝</span> ոսկյա իրերի գնահատված արժեքի մինչև <strong>150%</strong></li>
          <li><span className="font-semibold text-gray-900">«Անուիտետային» / «Միանգամյա» (3 - 12 ամիս)՝</span> ոսկյա իրերի գնահատված արժեքի մինչև <strong>95%</strong></li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">14. Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման Ժամկետներ</h3>
        <p>
          Վարկի տրամադրման կամ մերժման որոշումը կայացվում է առավելագույնը <span className="font-bold">1 (մեկ) աշխատանքային օրվա</span> ընթացքում: Վարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, <span className="font-bold">1 (մեկ) աշխատանքային օրվա</span> ընթացքում:
        </p>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">15. Այլ պայմաններ</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Վարկի գումարը մուտքագրվում է հաճախորդի հաշվին:</li>
          <li>Վարկի գումարի կանխիկացման դեպքում գանձվում է կանխիկացման վճար՝ ըստ Բանկում գործող սակագների:</li>
          <li>Լրացուցիչ սահմանաչափով տրամադրվող վարկի պայմանագրային գումարը չի կարող գերազանցել <strong>10,000,000 ՀՀ դրամը</strong>: Տրամադրման վերաբերյալ որոշումը կայացվում է ինքնաշխատ եղանակով:</li>
          <li>Վարկի ամբողջական մարումից հետո Բանկ մոտենալու դեպքում գրավ հանդիսացած ոսկյա իրերը վերադարձվում են հաճախորդին առավելագույնը <strong>2 աշխատանքային օրվա</strong> ընթացքում:</li>
        </ul>
      </div>
    </div>
  </div>
)}

            {activeTab === 'documents' && (
  <div className="space-y-4 text-xs md:text-sm text-gray-700">
    <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">Պահանջվող փաստաթղթերի ցանկ</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Ոսկու գրավով (լոմբարդային) վարկի տրամադրման դիմում:</li>
      <li>Անձնագիր կամ նույնականացման քարտ:</li>
      <li>
        Սոցիալական քարտ կամ սոցիալական քարտ չունենալու մասին տեղեկանք <span className="text-gray-500 font-medium">(ընդ որում սոցիալական քարտ և սոցիալական քարտ չունենալու մասին տեղեկանք չի պահանջվում, եթե անձը ներկայացրել է նույնականացման քարտ)</span>:
      </li>
      <li>Բանկի պահանջով այլ փաստաթղթեր:</li>
    </ul>
  </div>
)}
          </div>

          {/* Right Info Box */}
          <div className="lg:col-span-5 bg-white border border-gray-100 shadow-xl rounded-2xl p-6 space-y-5">
            <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-black text-lg shadow-md">
              ֏
            </div>

            <div className="divide-y divide-gray-100">
              <div className="py-3 flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-gray-400 block font-medium">մինչև</span>
                  <span className="text-xl md:text-2xl font-black text-purple-700">50 մլն. ֏</span>
                </div>
                <span className="text-xs font-semibold text-gray-500">Գումար</span>
              </div>

              <div className="py-3 flex justify-between items-center">
                <div className="text-xl md:text-2xl font-black text-purple-700">
                  3-60 ամիս
                </div>
                <span className="text-xs font-semibold text-gray-500">Ժամկետ</span>
              </div>

              <div className="py-3 flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-gray-400 block font-medium">սկսած</span>
                  <span className="text-xl md:text-2xl font-black text-purple-700">15.5%-ից</span>
                </div>
                <span className="text-xs font-semibold text-gray-500">Տոկոսադրույք</span>
              </div>

              {/* ⚠️ ԱՎԵԼԱՑՎԱԾ ՊԱԿԱՍՈՂ ՏՈՂԸ ⚠️ */}
              <div className="py-3 flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-gray-400 block font-medium">մինչև</span>
                  <span className="text-xl md:text-2xl font-black text-purple-700">150%</span>
                </div>
                <span className="text-xs font-semibold text-gray-500">Վարկ / գրավ հարաբերակցություն</span>
              </div>
            </div>
          </div>
        </div>
      </main>

     {/* ⚠️ ԱՎԵԼԱՑՎԱԾ ՊԱԿԱՍՈՂ ՄԻՋԱՆԿՅԱԼ ԲԱՆՆԵՐԸ (IMAGE_8FE621.PNG) ՖՈՆՈՎ ⚠️ */}
<section className="w-full text-white py-14 my-8 relative overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('https://www.evoca.am/images-cache/loans/1/16142452902619/1920x527.jpg')]">
  <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
    <div className="border-2 border-dashed border-yellow-300 rounded-3xl p-8 md:p-12 max-w-3xl bg-purple-900/30 backdrop-blur-sm">
      <h2 className="text-2xl md:text-4xl font-black leading-tight text-white">
        Գրավադրելով Ձեր ոսկյա իրերը՝ <br />
        հնարավորություն կունենաք շատ արագ հոգալու չնախատեսված ծախսերը:
      </h2>
    </div>
  </div>
</section>

        {/* 5. OTHER LOANS CAROUSEL SECTION */}
        <section className="max-w-7xl mx-auto px-4 py-8 w-full">
          <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6">
            Այլ վարկեր
          </h3>

          <div className="relative group/swiper">
            <button className="swiper-button-prev-custom absolute -left-5 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-2 rounded-full text-purple-700 hover:bg-purple-50 hidden md:flex items-center justify-center border border-gray-100 transition">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="swiper-button-next-custom absolute -right-5 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-2 rounded-full text-purple-700 hover:bg-purple-50 hidden md:flex items-center justify-center border border-gray-100 transition">
              <ChevronRight className="w-5 h-5" />
            </button>

            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
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
                480: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="w-full py-2"
            >
              {otherLoans.map((loan) => (
                <SwiperSlide key={loan.id}>
                  <Link to={loan.path || '#'} className="group cursor-pointer block">
                    <div className="w-full overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                      <img
                        src={loan.image}
                        alt={loan.title}
                        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="font-bold text-center text-xs md:text-sm text-gray-800 group-hover:text-purple-700 transition mt-3 line-clamp-2 px-1">
                      {loan.title}
                    </p>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* 6. ONLINE & MOBILE BANKING BANNER SECTION */}
        <section className="w-full bg-[#6a0dad] text-white py-12 px-6 relative overflow-hidden mt-12">
          <div className="absolute top-0 left-0 w-36 h-36 bg-purple-500/30 rounded-br-full pointer-events-none z-0"></div>
          <div className="absolute top-10 left-10 w-12 h-12 rounded-full border-4 border-pink-400 opacity-40 pointer-events-none"></div>
          <div className="absolute top-6 right-20 w-8 h-8 border-2 border-white/20 rotate-45 pointer-events-none"></div>
          <div className="absolute bottom-12 right-32 w-10 h-10 bg-pink-400/30 rounded-lg rotate-12 blur-sm pointer-events-none"></div>

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="w-full lg:w-1/2 flex items-center justify-center relative">
              <div className="relative w-full max-w-[420px] sm:max-w-[480px] z-10">
                <div className="relative rounded-t-xl border-[6px] border-[#1e1e1e] bg-black shadow-2xl overflow-hidden aspect-[16/10]">
                  <iframe
                    src="https://www.youtube.com/embed/KwAgMHEx8ys?enablejsapi=1"
                    title="EvocaTOUCH Video"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="w-[108%] -translate-x-[4%] h-3 bg-[#2d2d2d] rounded-b-xl border-t border-neutral-700 shadow-xl relative flex justify-center">
                  <div className="w-16 h-1 bg-neutral-600 rounded-b-md"></div>
                </div>
              </div>

              <div className="relative -ml-16 sm:-ml-20 z-20 top-4 shrink-0">
                <div className="w-32 sm:w-40 aspect-[9/19] rounded-[2.2rem] border-[5px] border-[#1a1a1a] bg-black overflow-hidden shadow-2xl relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-[#1a1a1a] rounded-full z-30"></div>
                  <img
                    src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg"
                    alt="Evoca Mobile App"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Օնլայն և մոբայլ բանկինգ
              </h2>

              <p className="text-purple-100 text-sm md:text-base leading-relaxed max-w-xl">
                Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
              </p>

              <div>
                <Link
                  to="/evoca-online"
                  className="inline-block bg-white text-[#6a0dad] px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition shadow-lg text-sm md:text-base"
                >
                  Դառնալ հաճախորդ
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="bg-white p-2 rounded-lg shadow">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://www.evoca.am"
                    alt="Evoca App QR Code"
                    className="w-16 h-16"
                  />
                </div>
                <p className="text-xs text-purple-200 max-w-[160px]">
                  Ներբեռնել հավելվածը`
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FOOTER SECTION */}
        <footer className="bg-white border-t border-gray-200 text-xs text-gray-600 pt-10 pb-12 mt-auto">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="space-y-4">
              <span className="text-2xl font-black text-gray-900 block">
                evoca<span className="text-gray-400 font-normal">BANK</span>
              </span>
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
  };

  export default GoldLoanDetails;