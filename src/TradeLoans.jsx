import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Phone, Coins, DollarSign, Percent } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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

const TABS = [
  { id: 'about', label: 'Վարկի մասին' },
  { id: 'requirements', label: 'Պահանջներ' },
  { id: 'documents', label: 'Պահանջվող փաստաթղթերի ցանկ' },
];

const TradeLoans = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="bg-white">
        <div>
             <div className="bg-[#6a0dad] text-white px-4 md:px-12 py-2.5 flex items-center space-x-6 text-xs md:text-sm font-semibold">
        <a href="#" className="bg-[#52098d] px-5 py-1.5 rounded-md font-bold">Վարկեր</a>
        <a href="#" className="hover:text-purple-200 transition">Վարկային պատմություն և սքոր</a>
        <a href="#" className="hover:text-purple-200 transition">Կարևոր տեղեկատվություն</a>
      </div>
        </div>
      {/* 1. BREADCRUMB */}
      <div className="max-w-[1200px] mx-auto px-4 pt-6 flex items-center gap-2 text-xs text-gray-400">
      
        <Link to="/" className="hover:text-[#6a0dad]">Գլխավոր</Link>
        <span>/</span>
        <Link to="/loans" className="hover:text-[#6a0dad]">Վարկեր</Link>
        <span>/</span>
        <span className="text-gray-600">Առևտրային հիփոթեքային վարկեր</span>
      </div>

      {/* 2. HERO SECTION */}
      <section className="max-w-[1200px] mx-auto px-4 pt-6 pb-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-3/5">
            <h1 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
              Առևտրային հիփոթեքային վարկեր
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
         Բիզնեսն ընդլայնելու համար Ձեր ֆինանսական միջոցները բավարա՞ր չեն, եկե՛ք Evocabank։
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end">
            <img
              src="https://www.evoca.am/images-cache/loans/1/16142450609699/560x400.png"
              alt="Անտրոպային հիփոթեքային վարկեր"
              className="w-full max-w-sm object-contain"
            />
          </div>
        </div>
      </section>

      {/* 3. TABS */}
      <div className="border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 flex gap-8 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-4 text-sm md:text-base font-semibold border-b-2 transition ${
                activeTab === tab.id
                  ? 'border-[#6a0dad] text-[#6a0dad]'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 4. MAIN CONTENT: TEXT + INFO CARD */}
      <section className="max-w-[1200px] mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/3 space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            {activeTab === 'about' && (
              <>
                <p>
              Առևտրային գործունեություն ծավալելու համար տարածք վարձակալելու փոխարեն այժմ կարող եք ձեռք բերեք Ձեր սեփական բիզնես տարածքը։
                </p>
                <p>
                  <span className="text-[#6a0dad] font-semibold">Evocabank</span>-ը
                Evocabank-ն առաջարկում է առևտրային նշանակության անշարժ գույքի՝ արտադրական, հասարակական կամ այլ առևտրային տարածքի ձեռքբերման, արդիականացման կամ կառուցապատման նպատակով մատչելի տոկոսադրույքով տրամադրվող հիփոթեքային վարկ։
                </p>
                <p>
                  Վարկի տրամադրման գործընթացը պարզեցված է, իրականացվում է շատ արագ՝ վարկավորման անհրաժեշտ փաստաթղթերը Բանկ ներկայացնելու պահից սկսված։ Կախված վարկավորման Ձեր ցանկալի գումարի չափից՝ կարող է պահանջվել նաև լրացուցիչ գույքի գրավ։ Որպես գրավի առարկա կարող եք ներկայացնել ինչպես Երևանում, այնպես էլ ՀՀ մարզերում գտնվող Ձեր անշարժ գույքը։
                </p>
                <p>
                 Ընտրե՛ք տրամադրվող վարկի արժույթն ու ժամկետը, իսկ գույքի գրավադրման և վարկի տրամադրման ամբողջ գործընթացը մենք կիրականացնենք շատ արագ։
                </p>
              </>
            )}
            {activeTab === 'requirements' && (
              <ul className="list-disc list-inside space-y-2">
                <li>Վարկը տրամադրվում է առևտրային նշանակության անշարժ գույքի` արտադրական, հասարակական կամ այլ առևտրային տարածքի, շինության (առաջնային և երկրորդային շուկայից) ձեռքբերման, վերանորոգման, արդիականացման կամ կառուցապատման նպատակով:</li>
                <li>Ովքեր կարող են դիմել

18– 65 տարեկան ՀՀ ռեզիդենտ կամ ոչ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն բոլորի 65 տարեկանը կամ առկա է վերոնշյալ պահանջներին բավարարող համավարկառու:</li>
                <li>Վարկավորման արժույթը

ՀՀ դրամ, ԱՄՆ դոլար, Եվրո</li>
                <li>Վարկավորման գումար

Անշարժ գույք ձեռք բերում,

Կառուցապատում

 10,000,000 - 120,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ

 

Վերանորոգում

5,000,000-50,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ</li>
<li>Վարկի մարման ժամկետը

Անշարժ գույք ձեռք բերում,

Կառուցապատում

Հաստատուն տոկոսադրույքով

 60 -180 ամիս

Լողացող տոկոսադրույքով

60 - 240 ամիս

 

Վերանորոգում

Հաստատուն տոկոսադրույքով

60 -84 ամիս

Լողացող տոկոսադրույքով

60 -84 ամիս</li>
<li>Տարեկան անվանական տոկոսադրույքներ (հաստատուն)[1]

ՀՀ դրամ

14% - 17%

ԱՄՆ դոլար

9.2% - 11%

Եվրո

7.2% - 10%</li>
<li>Տարեկան անվանական տոկոսադրույքներ (լողացող) [2]

ՀՀ դրամ

Սկսած  13.2% - ից (հաստատուն բաղադրիչ` սկսած  4.2%-ից + փոփոխուն բաղադրիչ)

ԱՄՆ դոլար

Սկսած 9.2%  - ից (հաստատուն բաղադրիչ` սկսած 8.2%-ից + փոփոխուն բաղադրիչ)

Եվրո

Սկսած 7.2%  - ից (հաստատուն բաղադրիչ` սկսած 7.2%-ից + փոփոխուն բաղադրիչ)

Լողացող տոկոսադրույքի տատանման առավելագույն և նվազագույն շեմ

+4%

Լողացող տոկոսադրույքի փոփոխուն բաղադրիչը կսկսի վերանայվել վարկի տրամադրման պահից 12 ամիս ժամանակաշրջանին հաջորդող  առաջին մարման ամսաթվից սկսած և յուրաքանչյուր 6 ամիսը մեկ՝ կիրառելով վերանայման պահին Բանկում գործող (կայքում փաստացի հրապարակված) տոկոսադրույքը։

Լողացող տոկոսադրույքի հաշվարկման կարգ</li>
<li>Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք

Տուգանք չի կիրառվում</li>
<li>Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր

ժամկետանց վարկի համար՝ օրական 0.015%,

ժամկետանց տոկոսագումարի համար օրական 0.1%:</li>
<li>Վարկի վերադարձելիության ապահովման միջոց

Ձեռք բերվող, վերանորոգվող անշարժ գույք, այլ անշարժ գույք: Կառուցապատման դեպքում հողամասը, որտեղ իրականացվում է անշարժ գույքի  կառուցումը/կառուցվող անշարժ գույքը :</li>
<li>Վարկ/գրավ հարաբերակցությունը[3]

Առաջնային շուկայից (կառուցապատողից) ձեռք բերում[4]

ՀՀ դրամ

Գնահատված արժեքի մինչև 90%

Արտարժույթ

Գնահատված արժեքի մինչև 70%
Երկրորդային շուկայից ձեռք բերում

ՀՀ դրամ

Գնահատված արժեքի մինչև 85%

Արտարժույթ

Գնահատված արժեքի մինչև 70%

Առանց եկամտի վերլուծության ձեռքբերում

Գնահատված արժեքի մինչև 70%

Կառուցապատում և վերանորոգում

Գնահատված արժեքի մինչև 70%</li>
<li>Ապահովագրություն

Անշարժ գույքի ապահովագրություն-  պարտադիր յուրաքանչուր տարի վարկի մնացորդի չափով:</li>
<li>Վարկի տրամադրման եղանակը

Անկանխիկ՝ /գումարը փոխանցվում է վաճառողի հաշվեհամարին/

Վերանորոգման և կառուցապատման նպատակով Վարկերը տրամադրվում են միանվագ կամ փուլային, որը սահմանվում է Վարկի տրամադրման որոշումը կայացնող Լիազոր մարմնի կողմից: Վարկը փուլերով տրամադրման դեպքում, փուլերը սահմանվում է` հիմք ընդունելով Հաճախորդի կողմից ներկայացված կատարվելիք ծախսերի նախահաշիվը, վարկի ժամկետը, գումարի չափը, Հաճախորդի վարկունակությունը:</li>
<li>Այլ պայմաններ

Անշարժ գույքի ձեռք բերման դեպքում Վարկառուն Բանկում մուտքագրում է կանխավճար[5], որը սառեցվում է մինչև վարկի տրամադրումը:

Վարկառուն կարող է  չմուտքագրել կանխավճար, փոխարենը իրականացնելով լրացուցիչ անշարժ գույքի գրավադրում, որի դեպքում Վարկառուին տրամադրվող Վարկի գումարը չպետք է գերազանցի ձեռք բերվող անշարժ գույքի գնահատված շուկայական արժեքը` պահպանելով գրավադրվող բոլոր գույքերի գնահատված շուկայական արժեքների հանրագումարի 70% «Վարկ/գրավ» հարաբերակցությունը:

Առաջնային շուկայից անշարժ գույք ձեռք բերելու դեպքում, որպես կանխավճարը հավաստող փաստաթուղթ, Հաճախորդը կարող է Բանկ ներկայացնել կառուցապատողի կողմից տրամադրված նախավճարի անդորրագիր և/կամ նախավճարների պայմանանագրեր/համաձայնագրեր:

Անշարժ գույքի գնելու իրավունքը ձեռք բերելու դեպքում, որպես  վարկի ապահովման միջոց կարող է հանդիսանալ անշարժ գույքի գնման իրավունքը:</li>
<li>Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման Ժամկետներ

Վարկի տրամադրման կամ մերժման որոշումը կայացվում է առավելագույնը 10 (տաս) աշխատանքային օրվա ընթացքում, որոշումների կայացման համար Բանկի կողմից պահանջվող նախնական փաստաթղթերը ամբողջությամբ ներկայացնելուց հետո:

Վարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, գրավի առարկա հանդիսացող գույքի գրավադրման գործընթացը ավարտելուց հետո առավելագույնը 2 (երկու) աշխատանքային օրվա ընթացքում:</li>
<p>[1] Բանկի կողմից հաճախորդի փոխարեն գույքի ապահովագրություն իրականացնելու դեպքում (իրականացվում է վարկի գործողության երկրորդ տարվանից սկսված)՝ նշված տոկոսադրույք + 0.2%:</p>
<p>[2] Բանկի կողմից հաճախորդի փոխարեն գույքի ապահովագրություն իրականացնելու դեպքում (իրականացվում է վարկի գործողության երկրորդ տարվանից սկսված)՝ նշված տոկոսադրույք + 0.2%:

</p>
<p>[3] Վարկ/գրավ գործակցի հաշվարկման ժամանակ ընդունվում է անշարժ գույքի գնահատման և ձեռքբերման արժեքներից նվազագույնը:

</p>

<p>[4] Անավարտ շինության դեպքում (Կառուցապատողից ձեռբերման դեպքում) որպես գրավի արժեք հանդիսանում է կառուցապատողի կողմից տրամադրված տեղեկանքում և հետագայում առուվաճառքի պայմանագրում նշված առուվաճառքի գինը:

</p>

<p>[5] Գույքի ձեռքբերման գնի և վարկի գումարի տարբերության չափով:

</p>


              </ul>
            )}
            {activeTab === 'documents' && (
              <ul className="list-disc list-inside space-y-2">
            <li>Վարկի տրամադրման դիմում-հայտ,</li>
            <li>անձնագիր կամ նույնականացման քարտ ինչպես նաև, սոցիալական քարտ կամ սոցիալական քարտ չունենալու մասին տեղեկանք (ընդ որում սոցիալական քարտ և սոցիալական քարտ չունենալու մասին տեղեկանք չի պահանջվում, եթե ներկայացվել է նույնականացման քարտ),</li>
            <li>ամուսնության վկայական (առկայության դեպքում),
</li>
            <li>անչափահաս երեխաների ծննդյան վկայական (առկայության դեպքում),
</li>
<li>տեղեկանք աշխատանքի վայրից աշխատավարձի չափի մեծության մասին,որի տրամադրման ժամկետը Բանկին ներկայացման օրվա դրությամբ չպետք է գերազանցի 30 օրացույցային օրը,
</li>
<li>Հաճախորդի ինքնազբաղված լինելու դեպքում`
Պետական ռեգիստրի գրանցման վկայական կամ պետական ռեգիստրի կողմից տրված՝ քաղվածք գրանցամատյանից,
Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում կամ քաղվածքում, Գործունեության լիցենզիա (եթե առկա է)
Վերջին 1 տարվա ֆինանսական հաշվետվությունները`
</li>
<li>այլ եկամուտների մեծությունը հավաստող տեղեկատվություն (առկայության դեպքում),
</li>
<li>ձեռք բերվող անշարժ գույքի գնահատման հաշվետվություն,
</li>
<li>վաճառվող կամ վերանորոգվող անշարժ գույքի սեփականության վկայականը,
</li>
<li>վաճառվող անշարժ գույքի ձեռք բերման հիմքերը (պահանջի դեպքում),
</li>
<li>անշարժ գույքի սեփականատերերի անձնագրերը,
</li>
<li>տեղեկատվություն՝ երաշխավորող անձի/անց վերաբերյալ (առկայության դեպքում)
</li>
<li>Վերանորոգման դեպքում կատարվելիք ծախսերի նախահաշիվ,
</li>
<li>Կառուցապատման դեպքում՝
կատարվելիք ծախսերի նախահաշիվ,
հողամասի սեփականության վկայական,
կառուցապատման թույլտվություն,
կառուցվող անշարժ գույքի նախագիծ:
</li>
<li>Բանկի պահանջով այլ փաստաթղթեր:
</li>

              </ul>
            )}
          </div>

          {/* Info card */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-6 space-y-5">
              <div className="flex gap-3">
                <span className="w-9 h-9 rounded-full bg-[#6a0dad] text-white flex items-center justify-center">
                  <Coins className="w-4 h-4" />
                </span>
                <span className="w-9 h-9 rounded-full bg-[#6a0dad] text-white flex items-center justify-center">
                  <DollarSign className="w-4 h-4" />
                </span>
                <span className="w-9 h-9 rounded-full bg-[#6a0dad] text-white flex items-center justify-center">
                  <Percent className="w-4 h-4" />
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Մինչև</p>
                  <p className="text-xl font-black text-[#6a0dad]">120 մլն. Դ</p>
                </div>
                <p className="text-sm text-gray-500">Գումար</p>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Մինչև</p>
                  <p className="text-xl font-black text-[#6a0dad]">240 ամիս</p>
                </div>
                <p className="text-sm text-gray-500">Ժամկետ</p>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Սկսած</p>
                  <p className="text-xl font-black text-[#6a0dad]">7.2%-ից</p>
                </div>
                <p className="text-sm text-gray-500">Տոկոսադրույք</p>
              </div>

              <Link
                to="/loans/apply"
                className="block text-center bg-[#6a0dad] text-white font-bold py-3 rounded-full hover:bg-purple-900 transition"
              >
                Դիմել հիմա
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HERO BANNER WITH IMAGE + OVERLAY TEXT */}
      <section
        className="relative w-full min-h-[320px] flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.evoca.am/images-cache/loans/1/16142450609738/1920x527.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#6a0dad]/95 via-[#6a0dad]/80 to-[#6a0dad]/40"></div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-4">
          <p className="text-white text-xl md:text-3xl font-extrabold max-w-2xl leading-snug">
            Evocabank-ը մշտապես պատրաստ է խթանել Ձեր բիզնեսի զարգացմանը՝
            հնարավորություն տալով գրավելու նոր սահմաններ:
          </p>
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
              Օնլայն եւ մոբայլ բանկինգ
            </h2>

            <p className="text-purple-100 text-sm md:text-base leading-relaxed max-w-xl">
              Evocabank-ը արագ, պարզ եւ նորարար ծառայություններ մատուցող բանկ է, որն
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
              ք. Երեւան, 0010,<br /> Հանրապետության 44/2
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
              Բանկի հասցեները եւ աշխատաժամերը
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
            Կայքում տեղադրված տեղեկատվության վերաբերյալ տարբերություններ առաջանալու դեպքում, ինչպես նաեւ ռուսերեն եւ անգլերեն լեզուներով ոչ ամբողջական լինելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով։ «Էվոկաբանկ» ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության եւ արժանահավատության, այնտեղ տեղադրված գովազդների համար։
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
          Գրեք մեզ, մենք օնլայն ենք ...
        </button>
        <button className="bg-[#d8b4fe] text-[#6a0dad] p-3 rounded-full shadow-lg hover:bg-purple-300 transition">
          <Phone className="w-5 h-5 fill-current" />
        </button>
      </div>
    </div>
  );
};

export default TradeLoans;