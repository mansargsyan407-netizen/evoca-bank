import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  ArrowLeft,
  Upload
} from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function PosCreditPage() {
  const [activeTab, setActiveTab] = useState('about');

  // «Ապառիկ համագործակցության հայտ»-ի state-եր
  const [formData, setFormData] = useState({
    applicationType: 'Օնլայն ապառիկ',
    companyName: '',
    brandName: '',
    contactPerson: '',
    phone: '',
    email: '',
    website: '',
    fieldOfActivity: '',
    operatingTime: '',
    isEvocaCustomer: 'Ոչ',
    turnover: '',
    branchesCount: '',
    branchAddresses: '',
    hasOtherBankPartnership: 'Ոչ',
    files: null,
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 14 Պայմանները
  const loanTerms = [
    { id: 1, title: 'Վարկի տրամադրման նպատակը', value: 'Վարկը տրամադրվում է Բանկի հետ համագործակցող ընկերություններից ծառայությունների ստացումը և/կամ սպառողական ապրանքների ձեռքբերումը ֆինանսավորելու նպատակով' },
    { id: 2, title: 'Ովքեր կարող են դիմել', value: '18 – 65 տարեկան ՀՀ քաղաքացիություն ունեցող և չունեցող ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն բոլորի 65 տարին' },
    { id: 3, title: 'Վարկավորման արժույթ', value: 'ՀՀ դրամ' },
    { id: 4, title: 'Վարկավորման գումար', value: '50,000 - 5,000,000' },
    { id: 5, title: 'Վարկի մարման ժամկետը', value: '12 - 60 ամիս' },
    { id: 6, title: 'Տարեկան անվանական տոկոսադրույք', value: 'Սահմանվում է Ընկերության և Բանկի միջև կնքվող Համագործակցության պայմանագրով' },
    { id: 7, title: 'Տարեկան փաստացի տոկոսադրույք', value: '0 - 23.99%' },
    { id: 8, title: 'Տարեկան տոկոսադրույքի տեսակ', value: 'Հաստատուն' },
    { id: 9, title: 'Վարկի ամսական սպասարկման վճար', value: 'Սահմանվում է Ընկերության և Բանկի միջև կնքվող Համագործակցության պայմանագրով' },
    { id: 10, title: 'Վարկի մարման ժամանակացույց', value: 'Սահմանվում է Ընկերության և Բանկի միջև կնքվող Համագործակցության պայմանագրով' },
    { id: 11, title: 'Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք', value: 'Տուգանք չի կիրառվում' },
    { id: 12, title: 'Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր', value: 'ժամկետանց վարկի համար՝ օրական 0.015%,\nժամկետանց տոկոսագումարի համար՝ օրական 0.1%' },
    { id: 13, title: 'Պահանջվող փաստաթղթեր', value: '• Անձը հաստատող փաստաթուղթ\n• Սոցիալական քարտ' },
    { id: 14, title: 'Վարկի տրամադրման եղանակ', value: 'Անկանխիկ' },
  ];

  // Գործընկերների ցանկը՝ տրամադրված ճշգրիտ URL-ներով
  const partnersList = [
    { name: 'Reebok Sports Club Armenia', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Reebook.png' },
    { name: 'Allegro Sport Cultural Complex', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Allegro.png' },
    { name: 'InSport', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/InSport.png' },
    { name: 'Hills Sport Complex', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Hills-Sport-Complex.png' },
    { name: "Gold's Gym", logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Golds-Gym.png' },
    { name: 'Օլիմպավան', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Olimpavan.png' },
    { name: 'Multi Wellness Centre', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Multi-Wellness.png' },
    { name: 'Energym Gym', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Energym.png' },
    { name: 'Orion Sports Club', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Orion-Sports-Club.png' },
    { name: 'Նոր Տուն', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Nor-Tun.png' },
    { name: 'Exterior Group', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Exterior-Group.png' },
    { name: 'Avanta', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Avanta.png' },
    { name: 'Maletti Medical Center', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Maletti-Medical-Center.png' },
    { name: 'Designo Furniture', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Designo-Furniture.png' },
    { name: 'Comodo Redefining Quality', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Comodo-Redefining-Quality.png' },
    { name: 'Ecox', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Ecox.png' },
    { name: 'VLV Electronics', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/VLV-Electronics.png' },
    { name: 'Իդեալ', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Ideal-System-Logo.png' },
    { name: 'Beko', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Beko.png' },
    { name: 'Vega', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Vega.png' },
    { name: 'Shtigen Energy Systems', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Shtigen.png' },
    { name: 'Time / Pandora', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Time-Pandora.png' },
    { name: 'Pixel', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Pixel.png' },
    { name: 'iBOLIT', logo: 'https://www.evoca.am/file_manager/Online-and-point-of-sale-partners/Ibolit.png' },
  ];

  // «Այլ վարկեր» կարուսելի տվյալները
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

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
      {/* TOP HEADER */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="bg-[#6a0dad] text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-2.5 flex items-center gap-6 text-xs md:text-sm font-medium overflow-x-auto">
            <span className="bg-purple-900/50 px-3 py-1 rounded-md cursor-pointer whitespace-nowrap">Վարկեր</span>
            <span className="hover:text-purple-200 cursor-pointer whitespace-nowrap">Վարկային պատմություն և սքոր</span>
            <span className="hover:text-purple-200 cursor-pointer whitespace-nowrap">Կարևոր տեղեկատվություն</span>
          </div>
        </div>
      </header>

      {/* 1. HERO BANNER SECTION */}
      <section className="w-full bg-[#f8f6fc] py-10 md:py-16 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2 space-y-4 z-10">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
              Տեղում Ապառիկ
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl">
              Ցանկանո՞ւմ ես ձեռք բերել քո նախընտրած ապրանքը կամ օգտվել ծառայությունից, բայց չես ցանկանում ամբողջ գումարը վճարել միանգամից։ Օգտվիր Evoca-ի տեղումապառիկից։
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg flex items-center justify-center bg-purple-600">
              <img
                src="https://www.evoca.am/images-cache/loans/1/16131174467985/415x261.jpg"
                alt="Տեղում Ապառիկ"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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

      {/* 2. TABS & LOAN DETAILS SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-6 w-full">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-6 md:gap-10 border-b border-gray-200 text-xs md:text-sm font-bold overflow-x-auto mb-8">
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-3 border-b-2 transition whitespace-nowrap ${
              activeTab === 'about'
                ? 'border-purple-700 text-purple-700'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Վարկի մասին
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`pb-3 border-b-2 transition whitespace-nowrap ${
              activeTab === 'terms'
                ? 'border-purple-700 text-purple-700'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Պայմաններ
          </button>
          <button
            onClick={() => setActiveTab('apply')}
            className={`pb-3 border-b-2 transition whitespace-nowrap ${
              activeTab === 'apply'
                ? 'border-purple-700 text-purple-700'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Ապառիկ համագործակցության հայտ
          </button>
          <button
            onClick={() => setActiveTab('partners')}
            className={`pb-3 border-b-2 transition whitespace-nowrap ${
              activeTab === 'partners'
                ? 'border-purple-700 text-purple-700'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Գործընկերների ցանկ
          </button>
        </div>

        {/* TAB CONTENTS */}
        {/* 1. ՎԱՐԿԻ ՄԱՍԻՆ (ABOUT) */}
        {activeTab === 'about' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                <strong className="text-purple-800 font-bold">Evoca</strong>-ի տեղում ապառիկը հնարավորություն է տալիս Բանկի գործընկեր կազմակերպություններում գնումներն ու ծառայություններն ավելի հասանելի դարձնել՝ ձևակերպելով ապառիկն անմիջապես վաճառքի կետում:
              </p>
              <p>
                Մի քանի րոպեում կիմանաս քեզ հասանելի վարկի առավելագույն գումարը, իսկ հաստատման դեպքում պայմանագրերը կստանաս էլեկտրոնային փոստով:
              </p>
              <p>
                Բանկի գործընկեր կազմակերպությունների ցանկին կարող ես ծանոթանալ{' '}
                <button onClick={() => setActiveTab('partners')} className="text-purple-700 font-bold underline">
                  այստեղ
                </button>:
              </p>
              <p className="pt-2">
                Եթե դու էլ ես ցանկանում դառնալ մեր գործընկերը, լրացրու{' '}
                <button onClick={() => setActiveTab('apply')} className="text-purple-700 font-bold underline">
                  online հայտը
                </button>{' '}
                և մեր աշխատակիցը կապ կհաստատի քեզ հետ երկու աշխատանքային օրվա ընթացքում:
              </p>
            </div>

            {/* Right Summary Card */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-lg">
                ֏
              </div>
              <div className="space-y-4 divide-y divide-gray-200 text-sm">
                <div className="pt-2 flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-black text-purple-900">մինչև 5 մլն. ֏</div>
                  </div>
                  <span className="text-gray-500 font-medium text-xs">Գումար</span>
                </div>
                <div className="pt-4 flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-black text-purple-900">մինչև 60 ամիս</div>
                  </div>
                  <span className="text-gray-500 font-medium text-xs">Ժամկետ</span>
                </div>
                <div className="pt-4 flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-black text-purple-900">Սկսած 0%-ից</div>
                  </div>
                  <span className="text-gray-500 font-medium text-xs">Տոկոսադրույք</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. ՊԱՅՄԱՆՆԵՐ (TERMS) */}
        {activeTab === 'terms' && (
          <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-8">
            <h3 className="text-xl md:text-2xl font-black text-purple-900 mb-6 border-b pb-4">
              Վարկի տրամադրման պայմանները
            </h3>
            <div className="space-y-4">
              {loanTerms.map((term) => (
                <div key={term.id} className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 py-3 border-b border-gray-100 text-sm md:text-base">
                  <div className="font-bold text-gray-900 flex items-start gap-2">
                    <span className="text-purple-700">{term.id}.</span>
                    <span>{term.title}</span>
                  </div>
                  <div className="md:col-span-2 text-gray-700 whitespace-pre-line">
                    {term.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. ԱՊԱՌԻԿ ՀԱՄԱԳՈՐԾԱԿՑՈՒԹՅԱՆ ՀԱՅՏ (APPLY) */}
        {activeTab === 'apply' && (
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-10">
            <h3 className="text-xl md:text-2xl font-black text-purple-900 mb-6 text-center">
              Ապառիկ համագործակցության դիմում / հայտ
            </h3>

            <form className="space-y-6 text-sm" onSubmit={(e) => e.preventDefault()}>
              {/* Ապառիկի հայտի տեսակ */}
              <div>
                <label className="block font-bold text-gray-800 mb-2">
                  Ապառիկի հայտի տեսակ <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="applicationType"
                      value="Օնլայն ապառիկ"
                      checked={formData.applicationType === 'Օնլայն ապառիկ'}
                      onChange={handleInputChange}
                      className="accent-purple-700 w-4 h-4"
                    />
                    <span>Օնլայն ապառիկ</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="applicationType"
                      value="Ապառիկ տեղում"
                      checked={formData.applicationType === 'Ապառիկ տեղում'}
                      onChange={handleInputChange}
                      className="accent-purple-700 w-4 h-4"
                    />
                    <span>Ապառիկ տեղում</span>
                  </label>
                </div>
              </div>

              {/* Ընկերության անվանում */}
              <div>
                <label className="block font-bold text-gray-800 mb-1">
                  Ընկերության անվանում <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
                  required
                />
              </div>

              {/* Վաճառակետի / Ֆիրմային անվանումը */}
              <div>
                <label className="block font-bold text-gray-800 mb-1">
                  Վաճառակետի / Ֆիրմային անվանումը <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
                  required
                />
              </div>

              {/* Կոնտակտային անձ */}
              <div>
                <label className="block font-bold text-gray-800 mb-1">
                  Ընկերության կոնտակտային անձի Անուն, Ազգանուն <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
                  required
                />
              </div>

              {/* Հեռախոսահամար և Էլ. փոստ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-800 mb-1">
                    Հեռախոսահամար <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:border-purple-700">
                    <span className="bg-gray-100 px-3 py-2.5 text-gray-600 font-semibold border-r border-gray-300">+374</span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 focus:outline-none"
                      placeholder="XX XXXXXX"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-gray-800 mb-1">
                    Էլ. փոստ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
                    required
                  />
                </div>
              </div>

              {/* Կայքի հասցե */}
              <div>
                <label className="block font-bold text-gray-800 mb-1">
                  Կայքի հասցե
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
                />
              </div>

              {/* Գործունեության ոլորտը */}
              <div>
                <label className="block font-bold text-gray-800 mb-1">
                  Ընկերության գործունեության ոլորտը /վաճառվող ապրանքների կամ մատուցվող ծառայությունների տեսակը/ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fieldOfActivity"
                  value={formData.fieldOfActivity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
                  required
                />
              </div>

              {/* Որքա՞ն ժամանակ է ընկերությունը գործում շուկայում */}
              <div>
                <label className="block font-bold text-gray-800 mb-1">
                  Որքա ՞ն ժամանակ է ընկերությունը գործում շուկայում <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="operatingTime"
                  value={formData.operatingTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
                  required
                />
              </div>

              {/* Ընկերությունը հանդիսանու՞մ է Evocabank-ի հաճախորդ */}
              <div>
                <label className="block font-bold text-gray-800 mb-2">
                  Ընկերությունը հանդիսանու՞մ է Evocabank-ի հաճախորդ <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="isEvocaCustomer"
                      value="Այո"
                      checked={formData.isEvocaCustomer === 'Այո'}
                      onChange={handleInputChange}
                      className="accent-purple-700 w-4 h-4"
                    />
                    <span>Այո</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="isEvocaCustomer"
                      value="Ոչ"
                      checked={formData.isEvocaCustomer === 'Ոչ'}
                      onChange={handleInputChange}
                      className="accent-purple-700 w-4 h-4"
                    />
                    <span>Ոչ</span>
                  </label>
                </div>
              </div>

              {/* Շրջանառությունը & Վաճառակետերի քանակը */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-800 mb-1">
                    Ընկերության վերջին 1 տարվա շրջանառությունը հարկային հաշվետվություններով <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="turnover"
                    value={formData.turnover}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-800 mb-1">
                    Ընկերության վաճառակետերի քանակը <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="branchesCount"
                    value={formData.branchesCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
                    required
                  />
                </div>
              </div>

              {/* Վաճառակետերի հասցեները */}
              <div>
                <label className="block font-bold text-gray-800 mb-1">
                  Ընկերության վաճառակետերի հասցեները <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="branchAddresses"
                  value={formData.branchAddresses}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
                  required
                />
              </div>

              {/* Կազմակերպությունը ու՞նի ապառիկ համագործակցություն այլ բանկերի հետ */}
              <div>
                <label className="block font-bold text-gray-800 mb-2">
                  Կազմակերպությունը ու՞նի ապառիկ համագործակցություն այլ բանկերի հետ <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hasOtherBankPartnership"
                      value="Այո"
                      checked={formData.hasOtherBankPartnership === 'Այո'}
                      onChange={handleInputChange}
                      className="accent-purple-700 w-4 h-4"
                    />
                    <span>Այո</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hasOtherBankPartnership"
                      value="Ոչ"
                      checked={formData.hasOtherBankPartnership === 'Ոչ'}
                      onChange={handleInputChange}
                      className="accent-purple-700 w-4 h-4"
                    />
                    <span>Ոչ</span>
                  </label>
                </div>
              </div>

              {/* Գաղտնիության երաշխավորում */}
              <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 text-purple-900 text-xs leading-relaxed">
                Հարգելի հաճախորդ, Բանկը երաշխավորում է, որ Ձեր կողմից տրամադրված տեղեկությունը համարվում է գաղտնի տեղեկատվություն և օգտագործվելու է միայն այս դիմում-հայտի վերաբերյալ որոշում կայացնելու նպատակով:
              </div>

              {/* Լուսանկարների կցում */}
              <div>
                <label className="block font-bold text-gray-800 mb-1">
                  Ընկերության վաճառակետի լուսանկարներ (առկայության դեպքում)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-purple-500 transition cursor-pointer bg-gray-50 flex flex-col items-center justify-center gap-2">
                  <Upload className="w-8 h-8 text-purple-700" />
                  <span className="text-sm font-semibold text-purple-800">Կցել ֆայլը / ֆայլերը</span>
                  <span className="text-xs text-gray-400">Upload file</span>
                  <input type="file" multiple className="hidden" />
                </div>
              </div>

              {/* Ամսաթիվ */}
              <div>
                <label className="block font-bold text-gray-800 mb-1">
                  Ամսաթիվ <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700 text-gray-700"
                  required
                />
              </div>

              {/* Ուղարկել Կոճակ */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-[#6a0dad] hover:bg-purple-900 text-white font-bold px-10 py-3 rounded-full shadow-lg transition duration-200 text-base"
                >
                  Ուղարկել
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 4. ԳՈՐԾԸՆԿԵՐՆԵՐԻ ՑԱՆԿ (PARTNERS) */}
        {activeTab === 'partners' && (
          <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-black text-purple-900 mb-6 border-b pb-4 text-center md:text-left">
              Մեր Գործընկերները
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {partnersList.map((partner, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-4 flex items-center justify-center h-32 hover:shadow-md transition bg-white group"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.parentNode.innerText = partner.name;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 3. PURPLE KITCHEN BACKGROUND BANNER */}
      <section className="w-full my-12 relative overflow-hidden">
        <div
          className="w-full bg-cover bg-center py-20 px-6 flex items-center justify-center text-center relative"
          style={{
            backgroundImage: `url('https://www.evoca.am/images-cache/loans/1/16131174467988/1920x527.jpg')`,
            minHeight: '280px',
          }}
        >
          <div className="absolute inset-0 bg-purple-900/30 backdrop-blur-[1px]"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-white px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug md:leading-normal drop-shadow-md">
              Evocabank-ի շնորհիվ ցանկալի ապրանքի ձեռքբերման համար երկար սպասելու և խնայողություն կատարելու կարիք այլևս չկա:
            </h2>
          </div>
        </div>
      </section>

      {/* 4. OTHER LOANS CAROUSEL SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 w-full">
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
            {allLoans.map((loan) => (
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

      {/* 5. ONLINE & MOBILE BANKING BANNER SECTION */}
      <section className="w-full bg-[#6a0dad] text-white py-12 px-6 relative overflow-hidden mt-12">
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
          </div>
        </div>
      </section>

      {/* 6. FOOTER SECTION */}
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