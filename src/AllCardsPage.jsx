// src/pages/AllCardsPage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cardsData = [
  {
    id: 'travel',
    title: 'Evoca Travel Card',
    imgUrl: 'https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png',
    link: '/cards/travel-card',
    network: 'mastercard',
    tags: ['premium'],
    description:
      'Սիրու՞մ եք ճամփորդել, ուրեմն ժամանակն է ձեռք բերելու Evoca Mastercard Travel Card, որը կդառնա ձեր ճամփորդական անբաժան ընկերը:',
    stats: [
      { value: '1.5%', label: 'Cashback արտասահմանում իրականացրած վճարումների համար' },
      { value: '6 ամիս', label: 'Lounge Key սպասման սրահ ձեզ և հրավիրյալի համար' },
      { value: '6 անգամ', label: 'Fast track-ից օգտվելու հնարավորություն ձեզ և հրավիրյալի համար' },
      { value: '16.000Դ', label: 'Քարտի տարեկան սպասարկում' }
    ]
  },
  {
    id: 'visa-platinum',
    title: 'Evoca Visa Platinum',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png',
    link: '/cards/visa-platinum',
    network: 'visa',
    tags: ['premium'],
    description: 'Պրեմիում առավելություններ պարգևող քարտով:',
    stats: [
      { value: '30.000 Դ', label: 'Սպասարկման վճար' },
      { value: '6 ամիս', label: 'Օդանավակայանների բիզնես սրահներ' }
    ]
  },
  {
    id: 'wilco-infinite',
    title: 'Wilco Visa Infinite',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png',
    link: '/cards/wilco-visa-infinite',
    network: 'visa',
    tags: ['premium'],
    description:
      'Բացահայտեք արժեքով բանկինգը և անհատականացված ֆինանսական փորձառությունը Wilco Visa Infinite քարտի հետ:',
    stats: []
  },
  {
    id: 'gift-card',
    title: 'Evoca Gift Card',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png',
    link: '/cards/gift-card',
    network: 'arca',
    tags: [],
    description: 'Գնեք Evoca Gift Card, և ուրախացրեք ում կլինի սիրելին:',
    stats: []
  },
  {
    id: 'gift-4u',
    title: 'Digital Gift Card',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png',
    link: '/cards/4u-gift-card',
    network: 'mastercard',
    tags: ['digital'],
    description:
      'Սիրելի մարդկանց համար նվեր ընտրելը պատահականություն ու հաճելի գործ է, բայց նաև ժամանակատար ու նյարդայնացնող, հատկապես երբ չգիտես կհավանի, թե՞ ոչ: Մենք առաջարկում ենք իդեալական նվերի տարբերակ:',
    stats: []
  },
  {
    id: 'mc-gold',
    title: 'Mastercard Gold',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png',
    link: '/cards/mastercard-gold',
    network: 'mastercard',
    tags: ['premium'],
    description: 'Ընդգծիր կարգավիճակդ Mastercard Gold քարտով:',
    stats: [
      { value: '0%', label: 'Կանխիկացում բանկի կանխիկացման կետերում մինչև 2 մլն Դ' },
      { value: '0.8%', label: 'Կանխիկացում Արցախ անդամ բանկերի կանխիկացման կետերում' },
      { value: 'min 1,500 Դ 1%', label: 'Կանխիկացում Արցախ անդամ չհանդիսացող բանկերի կանխիկացման կետերում' },
      { value: '15.000 Դ', label: 'Տարեկան սպասարկում' }
    ]
  },
  {
    id: 'visa-infinite',
    title: 'Visa Infinite',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png',
    link: '/cards/visa-infinite',
    network: 'visa',
    tags: ['premium'],
    description: 'Visa Infinite-ը Visa վճարային համակարգի ամենաբարձր դասի քարտն է:',
    stats: [
      { value: '1%', label: 'Կանխիկացում բանկի կանխիկացման կետերում' },
      { value: '1.2%', label: 'Կանխիկացում Արցախ անդամ բանկերի կանխիկացման կետերում' },
      { value: 'min 2,500 Դ 1.5%', label: 'Կանխիկացում Արցախ անդամ չհանդիսացող բանկերի կանխիկացման կետերում' },
      { value: '100,000 Դ', label: 'Տարեկան սպասարկում' }
    ]
  },
  {
    id: 'visa-vision',
    title: 'Visa Vision',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png',
    link: '/cards/visa-vision',
    network: 'visa',
    tags: ['new'],
    description:
      'Կյանքին նայիր մանուշակագույն ակնոցով ու տես Visa Vision քարտի բացառիկ առավելությունները:',
    stats: []
  },
  {
    id: 'mc-world-digital',
    title: 'Mastercard World Digital',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png',
    link: '/cards/mastercard-world-digital',
    network: 'mastercard',
    tags: ['digital', 'new'],
    description:
      'Mastercard World Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածում: Պատվիրիր թվային քարտը հիմա և այն հասանելի կլինի քո հավելվածում մի քանի րոպեի ընթացքում:',
    stats: [
      { value: '2%', label: 'Կանխիկացում բանկի բանկոմատներից' },
      { value: '2.5%', label: 'Կանխիկացում Արցախ համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից և POS տերմինալների միջոցով' },
      { value: '1000 Դ', label: 'Տարեկան սպասարկում' }
    ]
  },
  {
    id: 'unionpay-business-platinum',
    title: 'UnionPay Business Platinum',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png',
    link: '/cards/unionpay-business-platinum',
    network: 'unionpay',
    tags: ['premium'],
    description: 'Այս արտոնյալ դասի քարտը կդառնա Ձեր գործընկերները հաջողության ճանապարհին:',
    stats: [
      { value: '0.5%', label: 'Կանխիկացում' },
      { value: '5 տարի', label: 'Քարտի ժամկետ' },
      { value: '15000 Դ', label: 'Տարեկան սպասարկման վճար' },
      { value: 'Ամենուր', label: 'Կիրառություն' }
    ]
  },
  {
    id: 'myler-gift-card',
    title: 'MyLer Gift Card',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png',
    link: '/cards/myler-gift-card',
    network: 'arca',
    tags: [],
    description: 'Մեկ քարտ, անսահմանափակ արկածներ:',
    stats: []
  },
  {
    id: 'unionpay-gold',
    title: 'UnionPay Gold',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png',
    link: '/cards/unionpay-gold',
    network: 'unionpay',
    tags: [],
    description: 'Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը:',
    stats: [
      { value: '0.5%', label: 'Կանխիկացում' },
      { value: '5 տարի', label: 'Քարտի ժամկետ' },
      { value: '15000 Դ', label: 'Տարեկան սպասարկման վճար' },
      { value: 'Ամենուր', label: 'Կիրառություն' }
    ]
  },
  {
    id: 'gift-4u-am',
    title: '4U.am Gift Card',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png',
    link: '/cards/4u-am-gift-card',
    network: 'arca',
    tags: [],
    description: 'Երբ ժամանակակից ու կրեատիվ ես, նվերն էլ պատահական չէ, այն ընտրված է հատուկ քեզ համար:',
    stats: []
  },
  {
    id: 'arca-classic',
    title: 'Arca Classic',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png',
    link: '/cards/arca-classic',
    network: 'arca',
    tags: [],
    description: 'Evocabank-ի հետ ցանկացած գնում և վճարում ապահով է և հուսալի:',
    stats: [
      { value: '0.5%', label: 'Արտարժույթ' },
      { value: 'մինչև 300,000 Դ', label: 'Ամսական անվճար կանխիկացում Banki ATM-ով' },
      { value: '1%', label: 'Կանխիկացում «Արցախ» համակարգի այլ բանկերի ATM-ով և POS-ով' },
      { value: '1500 Դ', label: 'Տարեկան սպասարկում' }
    ]
  },
  {
    id: 'arca-unionpay',
    title: 'Arca Union Pay Co-badge',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png',
    link: '/cards/arca-unionpay',
    network: 'arca',
    tags: [],
    description:
      'Մեկ քարտ, բազմաթիվ հնարավորություններ. Arca՝ ամենօրյա գնումների և UnionPay՝ ճանապարհորդությունների և միջազգային գնումների համար:',
    stats: [
      { value: '2,500 Դ', label: 'Սկզբում (ամսական 250Դ)' },
      { value: '2%', label: 'Cashback տեղական գործարքներից' },
      { value: '1,000,000Դ', label: 'Անվճար կանխիկացում Banki ATM-ով' },
      { value: '189', label: 'Երկրում քարտով գործարքներ կատարելու հնարավորություն' }
    ]
  },
  {
    id: 'mc-standard',
    title: 'Mastercard Standard',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png',
    link: '/cards/mastercard-standard',
    network: 'mastercard',
    tags: [],
    description:
      'Աշխարհի ցանկացած կետում, որտեղ էլ լինես, քո ֆինանսական միջոցները 24/7 ապահովված ու հասանելի կլինեն:',
    stats: [
      { value: '0%', label: 'Կանխիկացում բանկի կանխիկացման կետերում մինչև 1 մլն Դ' },
      { value: '0.8%', label: 'Կանխիկացում Արցախ անդամ բանկերի կանխիկացման կետերում' },
      { value: 'min 1,500 Դ 1%', label: 'Կանխիկացում Արցախ անդամ չհանդիսացող բանկերի կանխիկացման կետերում' },
      { value: '5000 Դ', label: 'Տարեկան սպասարկում' }
    ]
  },
  {
    id: 'visa-digital',
    title: 'Visa Digital',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png',
    link: '/cards/visa-digital',
    network: 'visa',
    tags: ['digital'],
    description:
      'Պատվիրիր Evoca Digital քարտը հիմա EvocaTOUCH հավելվածով, և քարտը կակտիվանա րոպեների ընթացքում:',
    stats: [
      { value: '2%', label: 'Կանխիկացում բանկի բանկոմատներից' },
      { value: 'min 4%', label: 'Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք' },
      { value: '1000 Դ', label: 'Տարեկան սպասարկում' },
      { value: 'min 0.5%', label: 'Բեջեր' }
    ]
  },
  {
    id: 'visa-classic',
    title: 'Visa Classic',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png',
    link: '/cards/visa-classic',
    network: 'visa',
    tags: [],
    description:
      'Կատարիր մինչև 20,000 ՀՀ դրամի անվճար գործարքներ Visa Classic քարտով՝ առանց PIN կոդի մուտքագրման:',
    stats: [
      { value: '0.2%', label: 'Կանխիկացում բանկի կանխիկացման կետերում' },
      { value: '0.8%', label: 'Կանխիկացում Արցախ անդամ բանկերի կանխիկացման կետերում' },
      { value: 'min 1,500 Դ 1%', label: 'Կանխիկացում Արցախ անդամ չհանդիսացող բանկերի կանխիկացման կետերում' },
      { value: '5,000 Դ', label: 'Տարեկան սպասարկում' }
    ]
  },
  {
    id: 'arca-classic-page',
    title: 'Arca Classic',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png',
    link: '/cards/arca-classic-card',
    network: 'arca',
    tags: [],
    description: 'Evocabank-ի հետ ցանկացած գնում և վճարում ապահով է և հուսալի:',
    stats: [
      { value: '0.5%', label: 'Արտարժույթ' },
      { value: 'մինչև 300,000 Դ', label: 'Ամսական անվճար կանխիկացում Banki ATM-ով' },
      { value: '1%', label: 'Կանխիկացում «Արցախ» համակարգի այլ բանկերի ATM-ով և POS-ով' },
      { value: '1500 Դ', label: 'Տարեկան սպասարկում' }
    ]
  },
  {
    id: 'arca-unionpay-cobadge',
    title: 'Arca Union Pay Co-badge',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png',
    link: '/cards/arca-union-pay-co-badge',
    network: 'arca',
    tags: [],
    description:
      'Մեկ քարտ, բազմաթիվ հնարավորություններ. Arca՝ ամենօրյա գնումների և UnionPay՝ ճանապարհորդությունների և միջազգային գնումների համար:',
    stats: [
      { value: '2,500 Դ', label: 'Սկզբում (ամսական 250Դ)' },
      { value: '2%', label: 'Cashback տեղական գործարքներից' },
      { value: '1,000,000Դ', label: 'Անվճար կանխիկացում Banki ATM-ով' },
      { value: '189', label: 'Երկրում քարտով գործարքներ կատարելու հնարավորություն' }
    ]
  },
  {
    id: 'visa-business-premium',
    title: 'Visa Business',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png',
    link: '/cards/visa-business-card',
    network: 'visa',
    tags: ['premium'],
    description:
      'Գործընկերության հետ կապված ներկայացուցչական ծախսերը կարող եք հոգալ Visa Business քարտով:',
    stats: [
      { value: '0.2%', label: 'Կանխիկացում բանկի կանխիկացման կետերում' },
      { value: '0.8%', label: 'Կանխիկացում Արցախ անդամ բանկերի կանխիկացման կետերում' },
      { value: 'min 1,500 Դ 1%', label: 'Կանխիկացում Արցախ անդամ չհանդիսացող բանկերի կանխիկացման կետերում' },
      { value: '0.2%', label: 'Բանկի տարածքում քարտային հաշվի կանխիկացում' }
    ]
  },
  {
    id: 'dalma-gift-card-page',
    title: 'Dalma Gift Card',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png',
    link: '/cards/dalma-card',
    network: 'arca',
    tags: [],
    description: 'Նվեր ընտրելն այլևս դժվար չէ:',
    stats: []
  },
  {
    id: 'rio-gift-card-page',
    title: 'Rio Gift Card',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png',
    link: '/cards/rio-card',
    network: 'arca',
    tags: [],
    description: 'Ամեն ինչ մեկ նվեր քարտում:',
    stats: []
  },
  {
    id: 'visa-gold-premium',
    title: 'Visa Gold',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png',
    link: '/cards/visa-gold-card',
    network: 'visa',
    tags: [],
    description: 'Նոր քարտերի թողարկումը դադարեցված է 25.11.2024 թվականից:',
    stats: [
      { value: '0.2%', label: 'Կանխիկացում բանկի կանխիկացման կետերում' },
      { value: '0.8%', label: 'Կանխիկացում Արցախ անդամ բանկերի կանխիկացման կետերում' },
      { value: 'min 1,500 Դ 1%', label: 'Կանխիկացում Արցախ անդամ չհանդիսացող բանկերի կանխիկացման կետերում' },
      { value: '15,000 Դ', label: 'Տարեկան սպասարկում' }
    ]
  }
];

const FILTERS = [
  { id: 'all', label: 'Բոլորը' },
  { id: 'premium', label: 'Պրեմիում' },
  { id: 'new', label: 'Նոր քարտեր' },
  { id: 'digital', label: 'Թվային քարտեր' },
  { id: 'arca', label: 'arca' },
  { id: 'visa', label: 'VISA' },
  { id: 'mastercard', label: 'Mastercard' },
  { id: 'unionpay', label: 'UnionPay' }
];

const NetworkBadge = ({ network }) => {
  const styles = {
    arca: 'bg-gray-100 text-gray-700',
    visa: 'bg-blue-50 text-blue-700',
    mastercard: 'bg-orange-50 text-orange-700',
    unionpay: 'bg-red-50 text-red-700'
  };
  const labels = {
    arca: 'arca',
    visa: 'VISA',
    mastercard: 'Mastercard',
    unionpay: 'UnionPay'
  };
  return (
    <span className={`text-xs font-semibold px-2 py-1 rounded-md ${styles[network] || 'bg-gray-100 text-gray-700'}`}>
      {labels[network]}
    </span>
  );
};

const CardRow = ({ card }) => (
  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 py-8 border-b border-gray-100 last:border-b-0">
    <Link to={card.link} className="shrink-0 sm:w-[260px] block">
      <img
        src={card.imgUrl}
        alt={card.title}
        loading="lazy"
        className="w-full rounded-2xl shadow-sm object-contain bg-gray-50"
      />
    </Link>

    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <Link to={card.link}>
          <h2 className="text-xl font-bold text-gray-900 hover:text-purple-700 transition">
            {card.title}
          </h2>
        </Link>
        {card.network && <NetworkBadge network={card.network} />}
      </div>

      <p className="text-sm text-gray-600 max-w-2xl mb-4">{card.description}</p>

      {card.stats && card.stats.length > 0 && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5 max-w-3xl">
          {card.stats.map((stat, i) => (
            <div key={i}>
              <div className="text-lg font-bold text-purple-700 leading-tight">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      <Link
        to={card.link}
        className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 hover:bg-purple-200 transition px-4 py-2 rounded-full text-sm font-medium"
      >
        Մանրամասնել
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  </div>
);

const AllCardsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCards = cardsData.filter((card) => {
    if (activeFilter === 'all') return true;
    if (['premium', 'new', 'digital'].includes(activeFilter)) {
      return card.tags?.includes(activeFilter);
    }
    return card.network === activeFilter;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Քարտեր</h1>

      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              activeFilter === f.id
                ? 'bg-purple-700 text-white border-purple-700'
                : 'bg-white text-gray-700 border-gray-200 hover:border-purple-300'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filteredCards.length > 0 ? (
        <div>
          {filteredCards.map((card) => (
            <CardRow key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Այս ֆիլտրին համապատասխան քարտեր չեն գտնվել:</p>
      )}
       {/* 6. Footer Section */}
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

export default AllCardsPage;