import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Phone, CheckCircle2 } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function LoanDetailPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about'); // 'about' | 'terms' | 'documents'

  // "Այլ վարկեր" կարուսելի տվյալները
  const otherLoans = [
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

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      <div>
        {/* Top Header Navigation */}
        <header className="border-b border-gray-100 bg-white">
          <div className="bg-purple-700 text-white text-xs font-semibold py-3">
            <div className="max-w-7xl mx-auto px-4 flex space-x-8">
              <span className="bg-purple-900/50 px-3 py-1 rounded cursor-pointer">
                Վարկեր
              </span>
              <span className="hover:text-purple-200 cursor-pointer py-1">
                Վարկային պատմություն և սքոր
              </span>
              <span className="hover:text-purple-200 cursor-pointer py-1">
                Կարևոր տեղեկատվություն
              </span>
            </div>
          </div>
        </header>

        {/* Hero Banner Section */}
        <section className="bg-gradient-to-r from-[#f7f5fd] to-[#f0ebfc] relative overflow-hidden py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-4">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Անգրավ սպառողական վարկ
              </h1>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ: Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման:
              </p>
            </div>

            <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
              <img
                src="https://www.evoca.am/images-cache/loans/1/16142452390597/560x400.png"
                alt="Անգրավ սպառողական վարկ"
                className="w-full h-full object-cover scale-110"
              />
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Back Button & Breadcrumb */}
          <div className="flex items-center space-x-3 mb-8">
            <button
              onClick={() => navigate(-1)}
              className="bg-white border border-gray-200 hover:bg-gray-50 text-xs font-semibold px-4 py-1.5 rounded-full flex items-center space-x-1.5 shadow-sm transition-all"
            >
              <span>←</span>
              <span>Վերադառնալ</span>
            </button>

            <div className="text-xs text-gray-400 flex items-center space-x-1.5 flex-wrap">
              <span>🏠</span>
              <span>›</span>
              <span className="hover:text-purple-700 cursor-pointer">Անհատ</span>
              <span>›</span>
              <span className="hover:text-purple-700 cursor-pointer">Վարկեր</span>
              <span>›</span>
              <span className="hover:text-purple-700 cursor-pointer">Վարկեր</span>
              <span>›</span>
              <span className="text-gray-700 font-medium">
                Անգրավ սպառողական վարկ
              </span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-gray-200 mb-8 flex space-x-8 text-sm">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-3 font-bold transition-all ${
                activeTab === 'about'
                  ? 'text-purple-700 border-b-2 border-purple-700'
                  : 'text-gray-500 hover:text-purple-700'
              }`}
            >
              Վարկի մասին
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`pb-3 font-bold transition-all ${
                activeTab === 'terms'
                  ? 'text-purple-700 border-b-2 border-purple-700'
                  : 'text-gray-500 hover:text-purple-700'
              }`}
            >
              Պայմաններ
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`pb-3 font-bold transition-all ${
                activeTab === 'documents'
                  ? 'text-purple-700 border-b-2 border-purple-700'
                  : 'text-gray-500 hover:text-purple-700'
              }`}
            >
              Պահանջվող փաստաթղթերի ցանկ
            </button>
          </div>

          {/* Detailed Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-16">
            
            {/* TAB 1: ՎԱՐԿԻ ՄԱՍԻՆ */}
            {activeTab === 'about' && (
              <div className="lg:col-span-2 space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed">
                <p>
                  <span className="text-purple-700 font-bold">Evocabank</span>-ն առաջարկում է մինչև 10,000,000 ՀՀ դրամ անգրավ սպառողական վարկ՝ պարզ, արագ և հարմար: Վարկը նախատեսված է Ձեր ամենատարբեր ֆինանսական կարիքները հոգալու համար՝ անկախ նրանից՝ ցանկանում եք իրականացնել վաղուց պլանավորված նպատակը, թե լուծել անսպասելի ծախսերը:
                </p>
                <p>
                  Կախված վարկի գումարից, վարկունակությունից և ընտրված պայմաններից՝ վարկը կարող է տրամադրվել առանց երաշխավորի, ինչպես նաև մեկ կամ երկու անձի երաշխավորությամբ: Այս մոտեցումը հնարավորություն է տալիս ընտրել Ձեզ ամենահարմար տարբերակը:
                </p>
                <p>
                  Մենք անում ենք հնարավոր ամեն բան՝ վարկավորման գործընթացը պարզեցնելու և արագացնելու համար՝ նվազագույն թղթաբանությամբ և վարկի արագ ձևակերպմամբ:
                </p>
              </div>
            )}

            {/* TAB 2: ՊԱՅՄԱՆՆԵՐ */}
            {activeTab === 'terms' && (
              <div className="lg:col-span-2 space-y-6 text-xs md:text-sm text-gray-700">
                <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      {/* 1 */}
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                        <td className="p-3.5 font-bold text-purple-900 bg-purple-50/30 w-12 text-center">1.</td>
                        <td className="p-3.5 font-semibold text-gray-800 w-1/3">Վարկի տրամադրման նպատակը</td>
                        <td className="p-3.5 text-gray-600">
                          Վարկը տրամադրվում է անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների, ծառայությունների) պատվիրման կամ ձեռքբերման նպատակով:
                        </td>
                      </tr>
                      {/* 2 */}
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                        <td className="p-3.5 font-bold text-purple-900 bg-purple-50/30 text-center">2.</td>
                        <td className="p-3.5 font-semibold text-gray-800">Ովքեր կարող են դիմել</td>
                        <td className="p-3.5 text-gray-600">
                          18 – 65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն բոլորի 65 տարին: Տվյալ պայմանը վերաբերում է նաև երաշխավոր ֆիզիկական անձանց:
                        </td>
                      </tr>
                      {/* 3 */}
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                        <td className="p-3.5 font-bold text-purple-900 bg-purple-50/30 text-center">3.</td>
                        <td className="p-3.5 font-semibold text-gray-800">Վարկավորման արժույթ</td>
                        <td className="p-3.5 text-gray-600 font-medium">ՀՀ դրամ</td>
                      </tr>
                      {/* 4 */}
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                        <td className="p-3.5 font-bold text-purple-900 bg-purple-50/30 text-center">4.</td>
                        <td className="p-3.5 font-semibold text-gray-800">Վարկավորման գումար</td>
                        <td className="p-3.5 text-gray-600 space-y-1">
                          <p><strong className="text-gray-800">Առանց եկամուտների հիմնավորման՝</strong> 1,000,000 - 3,000,000 ՀՀ դրամ</p>
                          <p><strong className="text-gray-800">Եկամուտների հիմնավորմամբ՝</strong> 1,000,000 - 10,000,000 ՀՀ դրամ</p>
                        </td>
                      </tr>
                      {/* 5 */}
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                        <td className="p-3.5 font-bold text-purple-900 bg-purple-50/30 text-center">5.</td>
                        <td className="p-3.5 font-semibold text-gray-800">Վարկի մարման ժամկետը</td>
                        <td className="p-3.5 text-gray-600">36 - 60 ամիս</td>
                      </tr>
                      {/* 6 */}
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                        <td className="p-3.5 font-bold text-purple-900 bg-purple-50/30 text-center">6.</td>
                        <td className="p-3.5 font-semibold text-gray-800">Տարեկան տոկոսադրույքներ</td>
                        <td className="p-3.5 text-gray-600">
                          <table className="w-full text-xs border border-gray-200 rounded-lg overflow-hidden my-1">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="p-2 border-b">Տեսակ</th>
                                <th className="p-2 border-b">Անվանական</th>
                                <th className="p-2 border-b">Փաստացի</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="p-2">Առանց եկամուտների հիմնավորման</td>
                                <td className="p-2 font-semibold">21%</td>
                                <td className="p-2 font-semibold text-purple-700">23.17%</td>
                              </tr>
                              <tr>
                                <td className="p-2">Եկամուտների հիմնավորմամբ</td>
                                <td className="p-2 font-semibold">19%</td>
                                <td className="p-2 font-semibold text-purple-700">20.77%</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      {/* 7 */}
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                        <td className="p-3.5 font-bold text-purple-900 bg-purple-50/30 text-center">7.</td>
                        <td className="p-3.5 font-semibold text-gray-800">Վարկի մարման ժամանակացույց</td>
                        <td className="p-3.5 text-gray-600">Անուիտետային (ամենամսյա պարբերականությամբ)</td>
                      </tr>
                      {/* 8 */}
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                        <td className="p-3.5 font-bold text-purple-900 bg-purple-50/30 text-center">8.</td>
                        <td className="p-3.5 font-semibold text-gray-800">Վարկի գումարը պայմանագրից շուտ մարելու տուգանք</td>
                        <td className="p-3.5 text-green-600 font-semibold">Տուգանք չի կիրառվում</td>
                      </tr>
                      {/* 9 */}
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                        <td className="p-3.5 font-bold text-purple-900 bg-purple-50/30 text-center">9.</td>
                        <td className="p-3.5 font-semibold text-gray-800">Ժամկետների ուշացման դեպքում վճարվող տույժեր</td>
                        <td className="p-3.5 text-gray-600">
                          <p>Ժամկետանց վարկի համար՝ <strong className="text-red-600">օրական 0.015%</strong></p>
                          <p>Ժամկետանց տոկոսագումարի համար՝ <strong className="text-red-600">օրական 0.1%</strong></p>
                        </td>
                      </tr>
                      {/* 10 */}
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                        <td className="p-3.5 font-bold text-purple-900 bg-purple-50/30 text-center">10.</td>
                        <td className="p-3.5 font-semibold text-gray-800">Վարկի տրամադրման եղանակը</td>
                        <td className="p-3.5 text-gray-600">Անկանխիկ</td>
                      </tr>
                      {/* 11 */}
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                        <td className="p-3.5 font-bold text-purple-900 bg-purple-50/30 text-center">11.</td>
                        <td className="p-3.5 font-semibold text-gray-800">Միանվագ կամ ամսական սպասարկման վճարներ</td>
                        <td className="p-3.5 text-gray-600 font-semibold">Չի սահմանվում</td>
                      </tr>
                      {/* 12 */}
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                        <td className="p-3.5 font-bold text-purple-900 bg-purple-50/30 text-center">12.</td>
                        <td className="p-3.5 font-semibold text-gray-800">Վարկի վերադարձելիության ապահովման միջոցները</td>
                        <td className="p-3.5 text-gray-600 space-y-1.5">
                          <p>• <strong>Առանց եկամուտների հիմնավորման (1,000,000 ՀՀ դրամ)՝</strong> Նվազագույնը 1 անձի երաշխավորություն</p>
                          <p>• <strong>Առանց եկամուտների հիմնավորման (1,000,001 - 3,000,000 ՀՀ դրամ)՝</strong> Նվազագույնը 2 անձի երաշխավորություն</p>
                          <p>• <strong>Եկամուտների հիմնավորմամբ (1,000,000 - 3,000,000 ՀՀ դրամ)՝</strong> Առանց երաշխավորի պահանջի</p>
                          <p>• <strong>Եկամուտների հիմնավորմամբ (3,000,001 - 5,000,000 ՀՀ դրամ)՝</strong> Նվազագույնը 1 անձի երաշխավորություն</p>
                          <p>• <strong>Եկամուտների հիմնավորմամբ (5,000,001 - 10,000,000 ՀՀ դրամ)՝</strong> Նվազագույնը 2 անձի երաշխավորություն</p>
                        </td>
                      </tr>
                      {/* 13 */}
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                        <td className="p-3.5 font-bold text-purple-900 bg-purple-50/30 text-center">13.</td>
                        <td className="p-3.5 font-semibold text-gray-800">Վարկունակության գնահատում / հաստատման պայմաններ</td>
                        <td className="p-3.5 text-gray-600 space-y-1.5">
                          <p>• Եկամուտների հիմնավորմամբ հայտերի վերլուծության ժամանակ իրականացվում է պարզեցված վարկունակության գնահատում, սակայն OTI<sup>[1]</sup> գործակիցը չպետք է գերազանցի 70%:</p>
                          <p>• Անկախ վարկի գումարից և բավարար հիմնավորված եկամուտների առկայությունից՝ «ԱՔՌԱ Քրեդիտ Ռեփորթինգ» ՓԲԸ-ից ստացված տեղեկատվության համաձայն Հաճախորդի կամ երաշխավորներից որևէ մեկի FICO (սքորը) պետք է լինի 540 և բարձր:</p>
                          <p>• Առանց եկամուտների վարկավորման դեպքում Հաճախորդը վերջին 1 տարվա ընթացքում չպետք է ունենա վարկային պարտավորությունների գծով դասակարգումներ և մարումների գծով ուշացման օրերի հանրագումարը չպետք է գերազանցի 30 օրը:</p>
                        </td>
                      </tr>
                      {/* 14 */}
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                        <td className="p-3.5 font-bold text-purple-900 bg-purple-50/30 text-center">14.</td>
                        <td className="p-3.5 font-semibold text-gray-800">Այլ բանկերից վերաֆինանսավորման դեպքում (հատուկ պայման)</td>
                        <td className="p-3.5 text-gray-600">
                          Այլ բանկերից և վարկային կազմակերպություններից վարկերի վերաֆինանսավորման դեպքում, եթե ակնկալվող վարկի գումարը գերազանցում է 3,000,000 ՀՀ դրամը, ապա կարող է տրամադրվել մայր գումարի մարման գծով արտոնյալ ժամանակահատված մինչև 6 ամիս ժամկետով:
                        </td>
                      </tr>
                      {/* 15 */}
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                        <td className="p-3.5 font-bold text-purple-900 bg-purple-50/30 text-center">15.</td>
                        <td className="p-3.5 font-semibold text-gray-800">Որոշումների կայացման ժամկետներ</td>
                        <td className="p-3.5 text-gray-600 space-y-1">
                          <p>• Վարկի տրամադրման կամ մերժման որոշումը կայացվում է առավելագույնը 3 աշխատանքային օրվա ընթացքում՝ պահանջվող փաստաթղթերը ներկայացնելուց հետո:</p>
                          <p>• Վարկը տրամադրվում է դրական որոշման դեպքում, պայմանագրերը կնքելուց հետո 2 աշխատանքային օրվա ընթացքում:</p>
                        </td>
                      </tr>
                      {/* 16 */}
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-3.5 font-bold text-purple-900 bg-purple-50/30 text-center">16.</td>
                        <td className="p-3.5 font-semibold text-gray-800">Այլ պայմաններ</td>
                        <td className="p-3.5 text-gray-600 space-y-1">
                          <p>• Վարկի համար դիմող անձի հետ փոխկապակցված անձը (ընտանիքի անդամը կամ համատեղ տնտեսություն վարող անձը) չպետք է ունենա այս վարկատեսակի գործող վարկ:</p>
                          <p>• Վարկի գումարի կանխիկացման դեպքում գանձվում է կանխիկացման վճար՝ ըստ Բանկում գործող սակագների:</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* OTI Footnote */}
                <div className="bg-purple-50/60 border-l-4 border-purple-700 p-4 rounded-r-xl text-xs text-purple-950 mt-4 leading-relaxed">
                  <strong>[1] OTI (Obligations to income)</strong> – Վարկունակության ստուգման գործակից, որով Հաճախորդի վարկային պարտավորությունների ամսական մարումները հարաբերակցվում են միջին ամսական զուտ եկամտին:
                </div>
              </div>
            )}

            {/* TAB 3: ՊԱՀԱՆՋՎՈՂ ՓԱՍՏԱԹՂԹԵՐԻ ՑԱՆԿ */}
            {activeTab === 'documents' && (
              <div className="lg:col-span-2 space-y-4 text-xs md:text-sm text-gray-700">
                <p className="font-semibold text-gray-900 mb-2">
                  Վարկի ստացման համար անհրաժեշտ է ներկայացնել հետևյալ փաստաթղթերը․
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                    <span>Վարկի տրամադրման դիմում-հայտ</span>
                  </li>
                  <li className="flex items-start space-x-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                    <span>
                      Անձնագիր կամ նույնականացման քարտ, ինչպես նաև սոցիալական քարտ կամ սոցիալական քարտ չունենալու մասին տեղեկանք (ընդ որում սոցիալական քարտ և սոցիալական քարտ չունենալու մասին տեղեկանք չի պահանջվում, եթե ներկայացվել է նույնականացման քարտ)
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                    <span>Տեղեկանք փաստացի բնակության վայրից</span>
                  </li>
                  <li className="flex items-start space-x-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                    <span>Տեղեկանք եկամուտների վերաբերյալ</span>
                  </li>
                  <li className="flex items-start space-x-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                    <span>Այլ եկամուտների մեծությունը հավաստող տեղեկատվություն (առկայության դեպքում)</span>
                  </li>
                  <li className="flex items-start space-x-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                    <span>Տեղեկատվություն՝ երաշխավորող անձի/անց վերաբերյալ</span>
                  </li>
                  <li className="flex items-start space-x-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100 text-gray-500 italic">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    <span>Անհրաժեշտության դեպքում կարող են պահանջվել նաև այլ փաստաթղթեր</span>
                  </li>
                </ul>
              </div>
            )}

            {/* Right Floating Card */}
            <div className="bg-[#fcfaff] p-6 rounded-2xl border border-purple-50 shadow-sm space-y-6">
              <div className="w-9 h-9 rounded-full bg-purple-700 text-white flex items-center justify-center font-extrabold text-sm shadow-sm">
                ֏
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 block">մինչև</span>
                  <span className="text-2xl font-black text-purple-700">
                    10 մլն. ֏
                  </span>
                </div>
                <span className="text-xs text-gray-500 font-medium">Գումար</span>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 block">մինչև</span>
                  <span className="text-2xl font-black text-purple-700">
                    60 ամիս
                  </span>
                </div>
                <span className="text-xs text-gray-500 font-medium">Ժամկետ</span>
              </div>

              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 block">սկսած</span>
                  <span className="text-2xl font-black text-purple-700">
                    19%-ից
                  </span>
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  Տոկոսադրույք
                </span>
              </div>
            </div>
          </div>
        </main>

        {/* 1. PURPLE HERO BANNER SECTION */}
        <section
          className="relative bg-cover bg-center py-20 md:py-24 text-white text-center shadow-inner overflow-hidden my-8"
          style={{
            backgroundImage:
              "url('https://www.evoca.am/images-cache/loans/1/16142452390653/1920x527.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-purple-950/30 backdrop-blur-[0.5px]"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-3xl font-extrabold leading-relaxed md:leading-normal drop-shadow-md">
              Լավագույն գաղափարներդ կյանքի՛ կոչիր Evocabank-ի հետ ու պատրա՛ստ եղիր նոր իրադարձությունների:
            </h2>
          </div>
        </section>

        {/* 2. OTHER LOANS CAROUSEL SECTION */}
        <section className="max-w-7xl mx-auto px-4 py-8">
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

        {/* 3. ONLINE & MOBILE BANKING BANNER SECTION */}
        <section className="w-full bg-[#6a0dad] text-white py-12 px-6 relative overflow-hidden mt-12">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-0 w-36 h-36 bg-purple-500/30 rounded-br-full pointer-events-none z-0"></div>
          <div className="absolute top-10 left-10 w-12 h-12 rounded-full border-4 border-pink-400 opacity-40 pointer-events-none"></div>
          <div className="absolute top-6 right-20 w-8 h-8 border-2 border-white/20 rotate-45 pointer-events-none"></div>
          <div className="absolute bottom-12 right-32 w-10 h-10 bg-pink-400/30 rounded-lg rotate-12 blur-sm pointer-events-none"></div>

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            {/* Left Side: Laptop & Phone Mockups */}
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

            {/* Right Side: Text, Action Button & Downloads */}
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
                  Սկանավորեք QR կոդը EvocaTOUCH հավելվածը ներբեռնելու համար:
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 4. FOOTER SECTION */}
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