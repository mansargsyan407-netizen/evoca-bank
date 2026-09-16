import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Phone,
  Search,
  Globe,
  HelpCircle,
  MapPin,
  Menu,
  Home,
} from 'lucide-react';

// «Այլ վարկեր» ցանկը
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

// «Պայմաններ և սակագներ» աղյուսակի տվյալները
const termsRows = [
  { label: 'Տրամադրման նպատակը', value: 'Անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների, ծառայությունների) պատվիրման կամ ձեռքբերման նպատակով:' },
  { label: 'Ովքեր կարող են դիմել', value: '21 - 65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք' },
  { label: 'Սահմանաչափի արժույթ', value: 'ՀՀ դրամ' },
  { label: 'Սահմանաչափ', value: '100,000 - 10,000,000' },
  { label: 'Ձևակերպման եղանակ', value: ['Օնլայն', 'Օֆլայն'] },
  { label: 'Սահմանաչափի տեսակ', value: 'Վերականգնվող` ամսական նվազագույն մարման պահանջով' },
  { label: 'Սահմանաչափի տրամադրման եղանակ', value: 'Վարկային սահմանաչափը տրամադրվում է Բանկի վճարային քարտերի միջոցով:' },
  { label: 'Անվանական տոկոսադրույք', value: '16%-21.5%' },
  { label: 'Փաստացի տոկոսադրույք', value: '17.24 – 23.78%' },
  { label: 'Արտոնյալ ժամանակահատված', value: 'Չի տրամադրվում' },
  { label: 'Մարման ժամկետ', value: '36 ամիս' },
  { label: 'Ամսական նվազագույն մարման պահանջ', value: 'Քարտապանը պարտավորվում է վճարել նախորդ ամսվա ընթացքում օգտագործված սահմանաչափի 5%-ը /նվազագույնը` 5,000 ՀՀ դրամ/ և կուտակված տոկոսագումարները մինչև քաղվածում նշված վերջնաժամկետը: Ամիս է սահմանվում յուրաքանչյուր ամսվա 1-ից մինչ հաջորդ ամսվա 1-ը ընկած ժամանակահատվածը:' },
  { label: 'Քաղվածքի օր', value: 'Մինչև յուրաքանչյուր ամսվա 10-ը' },
  { label: 'Վճարման վերջնաժամկետ', value: 'Յուրաքանչյուր ամսվա 16-ը (եթե տվյալ ամսվա 16-ը հանդիսանում է ոչ աշխատանքային օր, ապա վերջնաժամկետ է համարվում հաջորդ աշխատանքային օրը):' },
  { label: 'Օվերդրաֆտի մայր գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր', value: ['Ամսական նվազագույն վճարը վճարման ժամկետին չվճարելու տույժ` 0.015% օրական', 'Հաշվեգրված տոկոսները վճարման ժամկետին չվճարելու տույժ` 0.1% օրական'] },
  { label: 'Վարկունակության գնահատում /օվերդրաֆտի հաստատման պայմաններ/', value: 'Համաձայն բանկում գործող առցանց վարկերի վարկունակության գնահատման համար օգտագործվող սքորինգային մոդելի' },
  { label: 'Տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման ժամկետներ', value: ['Օվերդրաֆտը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, առավելագույնը 1 (մեկ) աշխատանքային օրվա ընթացքում:', 'Շեղումներով և/կամ ավտոմատ մշակված սքորինգային համակարգի կողմից մերժված օվերդրաֆտի հայտերը կարող են ներկայացվել Բանկի աշխատակցի լրամշակմանը: Այս դեպքում կարող է պահանջվել Բանկի համար ընդունելի ապահովման միջոց և որոշումը կայացվում է առավելագույնը 7 (յոթ) աշխատանքային օրվա ընթացքում:'] },
];

const OverdraftLoanPage = () => {
  const [infoTab, setInfoTab] = useState('about');

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* 1. Ենթամենյու (Submenu) */}
      <div className="w-full bg-[#6a0dad] text-white px-6 md:px-12 py-2.5 text-xs md:text-sm font-semibold flex items-center gap-6 z-20">
        <span className="bg-[#52098b] px-4 py-1 rounded-md cursor-pointer">
          Վարկեր
        </span>
        <span className="hover:opacity-80 cursor-pointer">
          Վարկային պատմություն և սքոր
        </span>
        <span className="hover:opacity-80 cursor-pointer">
          Կարևոր տեղեկատվություն
        </span>
      </div>

      {/* 4. HERO */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-gray-50 px-6 lg:px-16 py-16 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-black leading-tight text-gray-900 max-w-lg">
            Վճարային քարտով օվերդրաֆտ (վարկային քարտ)
          </h1>
          <p className="mt-6 text-gray-500 max-w-md leading-relaxed">
            Ունես չնախատեսված ծախսե՞ր. Evocabank-ի Online Օվերդրաֆտը լավագույն
            կարճաժամկետ լուծումն է. 24/7 հասանելիություն և առանց
            փաստաթղթաշրջանառության:
          </p>
        </div>

        <img
          src="https://www.evoca.am/images-cache/loans/1/16947885698863/560x400.png"
          alt="Վճարային քարտով օվերդրաֆտ"
          
        />
      </section>

      {/* 5. BREADCRUMB */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between text-sm">
          <button className="flex items-center gap-2 text-gray-500 hover:text-purple-700 transition font-semibold">
            <ChevronLeft className="w-4 h-4" /> Վերադառնալ
          </button>
          <nav className="flex items-center gap-2 text-gray-400">
            <Home className="w-4 h-4" />
            <span>/</span>
            <Link to="/" className="hover:text-purple-700 transition">Անհատ</Link>
            <span>/</span>
            <Link to="/loans" className="hover:text-purple-700 transition">Վարկեր</Link>
            <span>/</span>
            <Link to="/loans" className="hover:text-purple-700 transition">Վարկեր</Link>
            <span>/</span>
            <span className="text-gray-600">Վճարային քարտով օվերդրաֆտ (վարկային քարտ)</span>
          </nav>
        </div>
      </div>

      {/* 6. LOAN DETAIL CONTENT */}
      <section className="max-w-[1200px] mx-auto px-4 py-10">
        <div className="border-t-4 border-[#6a0dad] flex gap-8 text-sm font-bold mb-8">
          <button
            onClick={() => setInfoTab('about')}
            className={
              infoTab === 'about'
                ? 'pt-4 pb-3 border-b-2 border-[#6a0dad] text-[#6a0dad]'
                : 'pt-4 pb-3 text-gray-400 hover:text-[#6a0dad] transition'
            }
          >
            Վարկի մասին
          </button>
          <button
            onClick={() => setInfoTab('terms')}
            className={
              infoTab === 'terms'
                ? 'pt-4 pb-3 border-b-2 border-[#6a0dad] text-[#6a0dad]'
                : 'pt-4 pb-3 text-gray-400 hover:text-[#6a0dad] transition'
            }
          >
            Պայմաններ և սակագներ
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          {/* Main article */}
          {infoTab === 'about' ? (
            <article className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
              <p>
                <span className="text-[#6a0dad] font-bold">Evoca</span> հաճախորդ ես, ստացիր{' '}
                <span className="font-bold">Online Օվերդրաֆտը</span> Evoca քարտին մինչև 3 րոպեում:
              </p>
              <p>
                Իսկ եթե դեռևս Evoca քարտատեր չես, օվերդրաֆտին դիմելու ընթացքում տեղում բացիր{' '}
                <span className="font-bold">Evoca Digital քարտ</span> և ստացիր օվերդրաֆտը քո քարտին:
                Evoca Digital քարտը կհայտնվի EvocaTOUCH հավելվածում հաշված վայրկյանների ընթացքում:
              </p>

              <div>
                <p className="font-semibold text-gray-900 mb-3">Ինչ կդիմես օվերդրաֆտի համար՝</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Համոզվիր՝ արդյոք ունես բավարար ինֆորմացիա օվերդրաֆտի մասին</li>
                  <li>
                    EvocaTOUCH հավելվածում ընտրիր ստուգիր՝ արդյոք համապատասխանում ես օվերդրաֆտի
                    տրամադրման պահանջներին
                  </li>
                  <li>Տեղում տես, թե որքան կկազմի քո օվերդրաֆտի ամսական մարումը</li>
                </ul>
              </div>

              <p>
                <span className="font-bold">Online Օվերդրաֆտը</span> տրամադրվում է{' '}
                <span className="font-bold text-[#6a0dad]">100,000 դրամից 10,000,000 դրամի</span> չափով
                և 36 ամիս մարման ժամկետով վերականգնվող՝ ամսական նվազագույն մարման պահանջով:
              </p>

              <p>Անվանական տոկոսադրույքը կազմում է՝</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>ՀՀ դրամ` 16%-21.5%</li>
              </ul>

              <div className="pt-2">
                <p className="font-semibold text-gray-900 mb-3">
                  Ի՞նչ է օվերդրաֆտը և ինչո՞վ է այն տարբերվում{' '}
                  <a href="#" className="text-[#6a0dad] underline">սպառողական վարկից</a>.
                </p>
                <p>
                  Օվերդրաֆտը <a href="#" className="text-[#6a0dad] underline">օնլայն վարկի</a> տեսակ
                  է, որը հնարավորություն է տալիս ծախսել ավելի շատ գումար, քան տվյալ պահին պարտիկն ունեք
                  ձեր հաշվեհամարի վրա: Օվերդրաֆտի գումարը կարող են կանխիկացնել կամ օգտագործել
                  անկանխիկ տարբերակով կատարվող գնումներ կամ օնլայն վճարումներ:
                </p>

                <p className="mt-4 font-semibold text-gray-900">Օրինակ՝</p>
                <p>
                  Եթե քո քարտին ունես 1,000 դրամ, սակայն ցանկանում ես գնել 5,000 դրամ արժեքով ապրանք,
                  տվյալ քարտի վրա բացված օվերդրաֆտի շնորհիվ կարող են կատարել տվյալ գնումը, իսկ գումարը
                  հետո վճարել ավելի ուշ:
                </p>

                <p className="mt-4 font-semibold text-gray-900">Ինչպես դիմել Online Օվերդրաֆտի համար.</p>
                <p>
                  EvocaTOUCH հավելվածում մուտք գործիր Վարկեր բաժին և ընտրիր Օվերդրաֆտ: Այնուհետև
                  ծանոթացիր պայմաններին և լրացրու անհրաժեշտ դաշտերը: Վերջ, քո օվերդրաֆտը կհաստատվի
                  հաշված րոպեների ընթացքում:
                </p>

                <p className="mt-4 font-semibold text-gray-900">Ինչպե՞ս է բանկը որոշում վարկի գումարի չափը և տոկոսադրույքը.</p>
                <p>
                  Վարկը, վարկի գումարի չափը և տոկոսադրույքը հաստատվում են օվերդրաֆտի համար դիմորդի
                  վարկունակության չափանիշների հիման վրա:
                </p>

                <p className="mt-4 font-semibold text-gray-900">Որքա՞ն ժամանակ է տևում Online Օվերդրաֆտին դիմելու պրոցեսը.</p>
                <p>
                  Օվերդրաֆտի տրամադրման կամ մերժման որոշումը կայացվում է վայրկյանների ընթացքում:
                </p>

                <p className="mt-4 font-semibold text-gray-900">Արդյո՞ք անհրաժեշտ է մուտվենալ Բանկ Online Օվերդրաֆտ ստանալու համար.</p>
                <p>
                  Online Օվերդրաֆտից օգտվելու համար անհրաժեշտ է պարզապես ունենալ EvocaTOUCH հավելված:
                  Լրացուցիչ Բանկ մուտենալու անհրաժեշտություն չկա:
                </p>

                <p className="mt-4 font-semibold text-gray-900">Ինչպե՞ս է կատարվում Online Օվերդրաֆտի մարումը.</p>
                <p>
                  Օվերդրաֆտի շահառու պարտավորվում է վճարել նախորդ ամսվա ընթացքում օգտագործված
                  սահմանաչափի 5%-ը (նվազագույնը` 5,000 ՀՀ դրամ) և օգտագործված գումարի մասով կուտակված
                  տոկոսագումարը:
                </p>

                <p className="mt-4 font-semibold text-gray-900">Օրինակ՝</p>
                <p>
                  Ու պատրաստում ես գնել բրենդային կրկիկ, որի արժեքն է պայմանական 100,000 դրամ: Դիմելով
                  օվերդրաֆտի համար՝ դու ստանում ես 1,000,000 դրամ սահմանաչափի 16% տոկոսադրույքով, որից
                  օգտագործում ես միայն 100,000 դրամը՝ կրկիկը գնելու համար:
                </p>
                <p>
                  Արդյունքում՝ տվյալ ամսվա կտրվածքով դու Բանկին վճարում ես օգտագործված 100,000 դրամի
                  5%-ը, այսինքն՝ 5000 դրամ (նվազագույնը՝ 5,000 դրամ, որը կարող են և ավելին օգտագործել
                  վճարման հաջորդ օրվանից), և կուտակված տոկոսագումարը՝ 1,333.33 դրամ: Այսինքն՝ ընդհանուր
                  մարման գումարը տվյալ ամիս կկազմի՝ 5,000+1,333.33=6,333.33 դրամ:
                </p>

                <p className="mt-4 font-semibold text-gray-900">
                  Արդյո՞ք օվերդրաֆտի օգտագործումն ազդում է վարկունակության վրա.
                </p>
                <p>
                  Օվերդրաֆտի օգտագործումը չի կարող անդրադառնալ վարկունակության վրա:
                </p>
                <p>
                  Սակայն նոր օվերդրաֆտի համար հաճախակի հայտ ներկայացնելը կարող է արդյունքում ազդել
                  վարկունակության վրա:
                </p>
              </div>
            </article>
          ) : (
            <article className="text-gray-700 text-[15px]">
              <div className="overflow-hidden rounded-2xl border border-gray-100">
                <table className="w-full border-collapse text-left">
                  <tbody>
                    {termsRows.map((row, index) => (
                      <tr
                        key={row.label}
                        className={index % 2 === 0 ? 'bg-gray-50/70' : 'bg-white'}
                      >
                        <th
                          scope="row"
                          className="align-top w-[40%] p-4 text-sm font-semibold text-gray-900 border-b border-gray-100"
                        >
                          <span className="text-[#6a0dad] mr-2">{index + 1}.</span>
                          {row.label}
                        </th>
                        <td className="align-top p-4 text-sm text-gray-600 leading-relaxed border-b border-gray-100">
                          {Array.isArray(row.value) ? (
                            <ul className="list-disc pl-5 space-y-1.5">
                              {row.value.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          ) : (
                            row.value
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          )}

          {/* Sidebar info card */}
          <aside className="lg:sticky lg:top-6 h-fit border border-gray-100 rounded-2xl shadow-sm p-6 space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-purple-100 text-[#6a0dad] flex items-center justify-center font-bold">
                Դ
              </span>
              <div>
                <p className="text-lg font-black text-gray-900">10 մլն Դ</p>
                <p className="text-xs text-gray-400">Սահմանաչափ</p>
              </div>
            </div>
            <hr className="border-gray-100" />
            <div>
              <p className="text-lg font-black text-gray-900">36 ամիս</p>
              <p className="text-xs text-gray-400">Մարման ժամկետ</p>
            </div>
            <hr className="border-gray-100" />
            <div>
              <p className="text-lg font-black text-gray-900">16%-ից</p>
              <p className="text-xs text-gray-400">Տարեկան անվանական տոկոսադրույք</p>
            </div>
            <Link
              to="/evoca-online"
              className="block text-center bg-[#6a0dad] text-white font-bold text-sm py-3 rounded-full hover:bg-purple-900 transition"
            >
              Դիմել հիմա
            </Link>
          </aside>
        </div>
      </section>

      {/* 7. ԱՅԼ ՎԱՐԿԵՐ (SWIPER CAROUSEL) SECTION */}
      <section className="max-w-[1200px] mx-auto px-4 py-8 mt-12">
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

      {/* 8. ONLINE & MOBILE BANKING BANNER SECTION */}
      <section className="w-full bg-[#6a0dad] text-white py-12 px-6 relative overflow-hidden mt-12">
        <div className="absolute top-0 left-0 w-36 h-36 bg-purple-500/30 rounded-br-full pointer-events-none z-0"></div>
        <div className="absolute top-10 left-10 w-12 h-12 rounded-full border-4 border-pink-400 opacity-40 pointer-events-none"></div>
        <div className="absolute top-6 right-20 w-8 h-8 border-2 border-white/20 rotate-45 pointer-events-none"></div>
        <div className="absolute bottom-12 right-32 w-10 h-10 bg-pink-400/30 rounded-lg rotate-12 blur-sm pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
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

      {/* 9. FOOTER SECTION */}
      <footer className="bg-white border-t border-gray-200 text-xs text-gray-600 pt-10 pb-12">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
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

        <div className="max-w-[1200px] mx-auto px-4 pt-8 mt-8 border-t border-gray-100 flex flex-wrap justify-between items-center gap-4 text-[10px] text-gray-400">
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

      {/* FLOATING CHAT & CALL BUTTONS */}
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

export default OverdraftLoanPage;