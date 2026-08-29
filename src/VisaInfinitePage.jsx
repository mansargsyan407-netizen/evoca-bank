import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const cardsData = [
  {
    id: 1,
    name: "Rio Gift Card",
    image: "https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png",
  },
  {
    id: 2,
    name: "Dalma Gift Card",
    image: "https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png",
  },
  {
    id: 3,
    name: "Mastercard World Digital",
    image: "https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png",
  },
  {
    id: 4,
    name: "Visa Infinite",
    image: "https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png",
  },
  {
    id: 5,
    name: "Evoca Travel Card",
    image: "https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg",
  },
  {
    id: 6,
    name: "Evoca Visa Platinum",
    image: "https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png",
  },
  {
    id: 7,
    name: "Evoca Gift Card",
    image: "https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png",
  },
  {
    id: 8,
    name: "Visa Vision",
    image: "https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png",
  },
  {
    id: 9,
    name: "4U.am Gift card",
    image: "https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png",
  },
  {
    id: 10,
    name: "Visa Gold",
    image: "https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png",
  },
];

export default function VisaInfinitePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');
  const [currency, setCurrency] = useState('AMD');

  return (
    <div>
 <header>
      

        {/* Sub-menu Bar */}
        <div className="bg-[#6b21a8] text-white text-xs font-semibold">
          <div className="max-w-7xl mx-auto px-6 flex items-center gap-8 py-3">
            <span className="bg-purple-950/40 px-3 py-1.5 rounded-md cursor-pointer">Քարտեր</span>
            <span className="hover:text-gray-200 cursor-pointer">Քարտերի տրամադրում և սպասարկում</span>
            <span className="hover:text-gray-200 cursor-pointer">Սոցիալական ապահովության վճարային քարտեր</span>
            <span className="hover:text-gray-200 cursor-pointer">Evoca Benefits</span>
          </div>
        </div>
      </header>

      {/* 2. HERO BANNER SECTION */}
      <section className="bg-[#f7f5fd] relative overflow-hidden py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Visa Infinite
            </h1>
            <p className="text-sm md:text-base text-gray-600 font-medium">
              Visa Infinite-ը Visa վճարային համակարգի ամենաբարձր դասի քարտն է:
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png"
              alt="Visa Infinite Card"
              className="w-full max-w-md object-contain drop-shadow-2xl transform rotate-[-12deg]"
            />
          </div>
        </div>
      </section>

      {/* BREADCRUMB & BACK BUTTON */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 border border-gray-200 px-5 py-2 rounded-full text-xs font-bold text-gray-700 hover:bg-gray-50 transition shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Վերադառնալ
        </button>

        <div className="text-[11px] text-gray-400 flex items-center gap-2">
          <span>🏠</span>
          <span>›</span>
          <span>Անհատ</span>
          <span>›</span>
          <span>Քարտեր</span>
          <span>›</span>
          <span>Քարտեր</span>
          <span>›</span>
          <span>Պրեմիում</span>
          <span>›</span>
          <span className="text-gray-600 font-semibold">Visa Infinite</span>
        </div>
      </div>

      {/* 3. TABS & PRICING SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 flex gap-8 mb-10 text-sm font-bold">
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-3 ${activeTab === 'about' ? 'text-purple-700 border-b-2 border-purple-700' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Քարտի մասին
          </button>
          <button
            onClick={() => setActiveTab('conditions')}
            className={`pb-3 ${activeTab === 'conditions' ? 'text-purple-700 border-b-2 border-purple-700' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Սահմանաչափի տրամադրման պայմանները
          </button>
          <button
            onClick={() => setActiveTab('warning')}
            className={`pb-3 ${activeTab === 'warning' ? 'text-purple-700 border-b-2 border-purple-700' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Զգուշացում
          </button>
        </div>

        {/* Tab content & Rates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Description Text */}
          <div className="lg:col-span-7 space-y-6 text-sm leading-relaxed text-gray-700">
            <p>
              <strong className="text-purple-950 font-black">Visa Infinite</strong> քարտը տալիս է բազմաթիվ արտոնություններ ոչ միայն Հայաստանում, այլև ամբողջ աշխարհում, ներառյալ՝ քարտապիրոջ և նրա ընտանիքի անդամների ճամփորդական ապահովագրություն, գնումների ապահովագրություն, Կոնսիերժ ծառայություն (<span className="text-purple-700 font-bold underline cursor-pointer">Telegram</span>, <span className="text-purple-700 font-bold underline cursor-pointer">Viber</span>), անվճար մուտք ավելի քան 1,200 օդանավակայանի բիզնես սպասասրահներ աշխարհի 450-ից ավելի քաղաքներում, Speed Pass ծառայություն, ավելի քան 900 լյուքս դասի շքեղ հյուրանոցներում VIP հյուրի կարգավիճակ և բազմաթիվ այլ արտոնություններ:
            </p>

            <p>
              Մեր <strong className="text-purple-950 font-black">Visa Infinite</strong> գործընկերները կարող են ստանալ հատուկ արտոնյալ պայմաններով վարկային սահմանաչափ: Սահմանաչափի համար կարելի է դիմել <strong className="text-purple-700">EvocaTOUCH</strong> հավելվածի միջոցով, շաբաթվա բոլոր օրերին և ցանկացած ժամի՝ առանց հավելյալ թղթաբանության ու ժամանակ կորցնելու կամ այցելել Բանկի գլխավոր գրասենյակ:
            </p>
          </div>

          {/* Right Pricing Box */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-gray-100 shadow-xl space-y-6">
            {/* Currency Buttons */}
            <div className="flex gap-2">
              {['֏', '$', '€', '₽'].map((symbol, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrency(symbol)}
                  className={`w-10 h-10 rounded-full font-bold text-xs flex items-center justify-center transition ${
                    currency === symbol
                      ? 'bg-[#6b21a8] text-white'
                      : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  }`}
                >
                  {symbol}
                </button>
              ))}
            </div>

            {/* Price Table Items */}
            <div className="space-y-4 text-xs divide-y divide-gray-100">
              <div className="pt-2 flex justify-between items-center">
                <span className="text-2xl font-black text-purple-700">1%</span>
                <span className="text-gray-600 font-medium text-right max-w-[200px]">
                  Կանխիկացում բանկի կանխիկացման կետերում
                </span>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <span className="text-2xl font-black text-purple-700">1.2%</span>
                <span className="text-gray-600 font-medium text-right max-w-[200px]">
                  Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում
                </span>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400">min 2,500 ֏</span>
                  <span className="text-2xl font-black text-purple-700">1.5%</span>
                </div>
                <span className="text-gray-600 font-medium text-right max-w-[200px]">
                  Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում
                </span>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <span className="text-2xl font-black text-purple-700">100,000 ֏</span>
                <span className="text-gray-600 font-medium text-right">
                  Տարեկան սպասարկում
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ADVANTAGES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-black text-gray-900 mb-12">
          Քարտի առավելությունները
        </h2>

        <div className="space-y-16">
          {/* Advantage Items */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-gray-100 pb-12">
            <div className="md:col-span-4 flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-purple-700 text-2xl font-bold">
                🪑
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">Visa Airport Companion - Անվճար</h3>
              </div>
            </div>
            <div className="md:col-span-8 text-sm text-gray-600 space-y-4 leading-relaxed">
              <p>
                <strong className="text-purple-700">Visa Airport Companion</strong> համակարգում գրանցվելով՝ Դուք ոչ միայն ստանում եք թվային անդամակցություն, այլ նաև հնարավորություն՝ ծանոթանալու բիզնես սրահներին, ստուգելու Ձեզ հասանելի տարեկան մուտքերի քանակը և այլ առավելություններ:
              </p>
              <p>
                Դուք կգտնեք օդանավակայաններում հարմարավետության Ձեր բանալին: Պարզություն՝ սկզբից մինչև վերջ․ ընդամենը հարկավոր է ներբեռնել Visa Airport Companion հավելվածը, գրանցել Ձեր վավեր Evoca Visa Infinite պրեմիում քարտը և ստանալ Ձեր թվային բաժանորդագրության անցագիրը:
              </p>
              <p>
                Չմոռանաք, որ կարող եք օգտագործել նաև Visa Concierge Chatbot-ը՝ Ձեր թվային բաժանորդագրությունը ստանալու համար:
              </p>
              <p>
                Իսկ թե ինչպես գրանցվել Visa Airport Companion հավելվածում և մուտք գործել բիզնես սրահներ, ծանոթացեք <a href="#" className="text-purple-700 font-bold underline">այստեղ</a>:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-gray-100 pb-12">
            <div className="md:col-span-4 flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-purple-700 text-2xl font-bold">
                🏢
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">Մուտք DragonPass բիզնես սրահներ</h3>
              </div>
            </div>
            <div className="md:col-span-8 text-sm text-gray-600 space-y-4 leading-relaxed">
              <p>
                Ամբողջ աշխարհում ավելի քան 1,200 օդանավակայանի բիզնես սպասասրահներ սպասում են Ձեզ: Էքսկլյուզիվ սպասարկում, նորաոճ միջավայր, հատուկ առավելություններ միայն <strong className="text-purple-700">Evoca Visa Infinite</strong> գործընկերների համար:
              </p>
              <p>
                Դուք կարող եք օգտվել օդանավակայանների բիզնես սպասասրահների 20 անվճար մուտքի հնարավորությունից, եթե նախորդ 35 օրվա ընթացքում Ձեր <strong className="text-purple-700">Evoca Visa Infinite</strong> քարտով կատարել եք առնվազն 400 ԱՄՆ դոլարի կամ համարժեք արտարժույթի անկանխիկ վճարումներ: Իսկ եթե ոչ, կակտիվանա տարեկան 3 անվճար մուտքի հնարավորությունը:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-gray-100 pb-12">
            <div className="md:col-span-4 flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-purple-700 text-2xl font-bold">
                🩺
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">Բժշկական միջազգային ապահովագրություն</h3>
              </div>
            </div>
            <div className="md:col-span-8 text-sm text-gray-600 space-y-4 leading-relaxed">
              <p>
                Բոլոր անկանխատեսելի իրավիճակներում Դուք միշտ ապահով եք ու պաշտպանված, քանի որ մեկ զանգով մենք կտրամադրենք Ձեզ անհրաժեշտ բժշկական և իրավաբանական խորհրդատվություն, տեղեկատվություն բժշկական կենտրոնների մասին, կապ կհաստատենք լավագույն բժիշկների հետ, կկատարենք բուժման համար բոլոր քայլերը, իսկ անհրաժեշտության դեպքում՝ կապահովենք Ձեր և Ձեր ընտանիքի հարմարավետ ու արագ տեղափոխումը տուն՝ վճարելով առաջացած ծախսերը:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-gray-100 pb-12">
            <div className="md:col-span-4 flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-purple-700 text-2xl font-bold">
                🧳
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">Ճամփորդական ապահովագրություն</h3>
              </div>
            </div>
            <div className="md:col-span-8 text-sm text-gray-600 space-y-4 leading-relaxed">
              <p>
                Չեղարկվե՞լ կամ փոփոխվե՞լ են ճանապարհորդության սկզբնական պլանները, հետաձգվե՞լ է թռիչքը, կորե՞լ է ուղեբեռը կամ կանխիկ դրամական միջոցները, մենք կփոխհատուցենք առաջացած ծախսերը:
              </p>
              <p>
                Վայելեք կյանքի ամեն րոպեն, ստացեք ադրենալինի Ձեր չափաբաժինը էքստրեմալ սպորտից: Մենք ապահովագրել ենք շուրջ 58 սպորտաձևի արդյունքում վնասվածքներ ստանալու դեպքերը: Իսկ եթե ճամփորդության ընթացքում վարձակալել եք մեքենա, կարող եք հանգիստ լինել դրա խափանման դեպքերի համար:
              </p>
              <p className="font-bold text-gray-800">
                <strong className="text-purple-700">Visa Infinite</strong> գործընկերների համար ճամփորդական ապահովագրությունը տարեկան <span className="text-purple-700">90 օր</span> տրամադրվում է անվճար:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-gray-100 pb-12">
            <div className="md:col-span-4 flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-purple-700 text-2xl font-bold">
                👔
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">Visa Concierge Chatbot</h3>
              </div>
            </div>
            <div className="md:col-span-8 text-sm text-gray-600 space-y-4 leading-relaxed">
              <p>
                Աշխարհի ցանկացած կետում, օրվա ցանկացած ժամին Ձեր անձնական օգնականը պատրաստ է Ձեզ տեղեկություն տրամադրել ավելի քան <strong className="text-purple-700">6,000</strong> ծառայությունների մասին և ամրագրել դրանք Ձեզ համար բացարձակապես անվճար:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-gray-100 pb-12">
            <div className="md:col-span-4 flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-purple-700 text-2xl font-bold">
                🛍️
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">Անվտանգ գնումներ</h3>
              </div>
            </div>
            <div className="md:col-span-8 text-sm text-gray-600 space-y-4 leading-relaxed">
              <p>
                Ձեր գնումները պաշտպանված են: Մենք կհոգանք Ձեր իրերի ապահովության համար:
              </p>
              <p>
                Գնումների անվտանգության ծրագիրը Ձեր իրերի ապահովությունն է հնարավոր կորստի, գողության կամ չկանխամտածված վնասի դեպքում՝ գնումից <span className="text-purple-700 font-bold">90 օրվա</span> ընթացքում:
              </p>
              <p className="font-semibold text-gray-800">Վնասված կամ կորցրած գնումների դիմաց փոխհատուցում ստանալու համար՝</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Վճարումը պետք է 100%-ով կատարված լինի <strong className="text-purple-700">Visa Infinite</strong> քարտով (ոչ ապառիկ կամ ապառիկ), իսկ ապրանքի նվազագույն արժեքը պետք է լինի առնվազն 100 ԱՄՆ դոլար:
                </li>
                <li>
                  Պարտադիր է ներկայացնել գնման անդորրագիրը, հաշվից ելքագրումը, երաշխավորման կտրոնը, խանութի կողմից երաշխիքային սպասարկումից հրաժարումը և վերանորոգման վճարման դեպքում անդորրագրերը:
                </li>
                <li>
                  Գողության դեպքում պարտադիր է ներկայացնել ոստիկանական ընթացակարգ:
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-gray-100 pb-12">
            <div className="md:col-span-4 flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-purple-700 text-2xl font-bold">
                🅿️
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">
                  Անվճար կայանատեղի «Զվարթնոց» օդանավակայանում
                </h3>
              </div>
            </div>
            <div className="md:col-span-8 text-sm text-gray-600 space-y-4 leading-relaxed">
              <p>
                <strong className="text-purple-700">Evocabank</strong>-ի <strong className="text-purple-700">Visa Infinite</strong> քարտապանները կարող են անվճար կայանել մեքենան «Զվարթնոց» օդանավակայանում տարեկան 3 անգամ Visa Concierge Chatbot-ի միջոցով՝ օգտվելով առկա փաթեթներից՝
              </p>
              <ul className="list-disc pl-5 space-y-2 font-medium text-gray-700">
                <li>1 ժամ տևողությամբ վաուչեր</li>
                <li>2 ժամ տևողությամբ վաուչեր</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-gray-100 pb-12">
            <div className="md:col-span-4 flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-purple-700 text-2xl font-bold">
                💼
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">
                  Ուղեբեռի անվճար փաթեթավորում
                </h3>
              </div>
            </div>
            <div className="md:col-span-8 text-sm text-gray-600 space-y-4 leading-relaxed">
              <p>
                Որպես <strong className="text-purple-700">Evocabank</strong>-ի պրեմիում քարտապան՝ Դուք կարող եք նաև օգտվել ուղեբեռի անվճար փաթեթավորման հնարավորությունից:
              </p>
              <p className="font-bold text-gray-800">Ինչպե՞ս օգտվել ծառայությունից.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Ցույց տվեք Ձեր <strong className="text-purple-700">Visa Infinite</strong> քարտը Զվարթնոց օդանավակայանի ուղեբեռի սպասարկման տարածքում:
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-gray-100 pb-12">
            <div className="md:col-span-4 flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-purple-700 text-2xl font-bold">
                📱
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">Ինտերնետ ռոումինգ</h3>
              </div>
            </div>
            <div className="md:col-span-8 text-sm text-gray-600 space-y-4 leading-relaxed">
              <p>
                Որպես <strong className="text-purple-700">Visa Infinite</strong> քարտապան՝ Դուք ունեք՝
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>3GB անվճար ռոումինգ AIR ALO-ից</li>
                <li>UCOM-ից 500MB</li>
              </ul>
              <p className="font-bold text-gray-800">Ակտիվացման համար անհրաժեշտ է՝</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Գրանցվել կամ գրանցված լինել Visa Concierge Chatbot-ում:</li>
                <li>Chatbot-ում ընտրել «Ռոումինգ» բաժինը:</li>
                <li>Ծանոթանալ կանոններին և ստուգել քարտի համապատասխանությունը ծառայությունից օգտվելու համար:</li>
                <li>Հետևել Chatbot-ի հրահանգներին՝ ակտիվացման QR-կոդ ստանալու համար:</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-gray-100 pb-12">
            <div className="md:col-span-4 flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-purple-700 text-2xl font-bold">
                ⭐
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">
                  Արտոնությունների աշխարհ
                </h3>
              </div>
            </div>
            <div className="md:col-span-8 text-sm text-gray-600 space-y-4 leading-relaxed">
              <p>
                <strong className="text-purple-700">Visa Infinite</strong>-ը Ձեր բանալին է դեպի արտոնությունների մեծ աշխարհ:
              </p>
              <p>
                Անկախ Ձեր գտնվելու վայրից՝ օգտագործեք Ձեր <strong className="text-purple-700">Visa Infinite</strong> քարտը և օգտվեք հատուկ առաջարկներից, գրավիչ արտոնություններից և զեղչերից:
              </p>
              <p>Ավելի քան 600 գործընկեր աշխարհի տարբեր կետերում...</p>
              <p>
                Վայելեք աջակցության ամեն մի մանրուք՝ ճամփորդելով մեքենայով, իսկ մեքենան վարձակալեք մինչև <span className="text-purple-700 font-bold">35%</span> զեղչով:
              </p>
              <p>
                Իսկ աշխարհի ավելի քան 985,000 հյուրանոցներ հատուկ Ձեզ համար կտրամադրվեն մինչև <span className="text-purple-700 font-bold">12%</span> զեղչով:
              </p>
              <p>
                Visa-ն միայն Ձեզ համար առանձնացրել է 900 լյուքս դասի շքեղ հյուրանոց, որտեղ Դուք կստանաք՝
              </p>
              <ul className="list-disc pl-5 space-y-2 font-medium text-gray-800">
                <li>Տվյալ պահին երաշխավորված ամենացածր գին</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-gray-100 pb-12">
            <div className="md:col-span-4 flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-purple-700 text-2xl font-bold">
                🔒
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">Պահատուփ</h3>
              </div>
            </div>
            <div className="md:col-span-8 text-sm text-gray-600 space-y-4 leading-relaxed">
              <p>
                Դուք հանգիստ ճամփորդում եք, իսկ մենք 24-ժամյա հսկողության ներքո պահպանում ենք Ձեր արժեքավոր իրերը:
              </p>
              <p>
                Պահատուփերի պարունակությունը միայն Ձեր գաղտնիքն է: Դրանցում կարող եք պահել Ձեզ համար արժեք ներկայացնող ցանկացած իր՝ դրամ, արժեթղթեր, թանկարժեք մետաղներ ու քարեր, ոսկերչական իրեր, արվեստի գործեր, ֆոտո և տեսաժապավեններ, մագնիսական կրիչներ և այլն:
              </p>
              <p>
                <strong className="text-purple-700">Visa Infinite</strong> գործընկերների համար <strong className="text-purple-700">Evocabank</strong>-ում չհրկիզվող պահատուփը տրամադրվում է <span className="text-purple-700 font-bold">անվճար</span>:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-gray-100 pb-12">
            <div className="md:col-span-4 flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-purple-700 text-2xl font-bold">
                ⭐
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">YQnow Group</h3>
              </div>
            </div>
            <div className="md:col-span-8 text-sm text-gray-600 space-y-4 leading-relaxed">
              <p>
                Մինչև <span className="text-purple-700 font-bold">25%</span> զեղչ օդանավակայաններում ուղեկցման ծառայությունների համար:
              </p>
              <p>
                YQnow Group-ի ծառայությունները հասանելի են ավելի քան 500 միջազգային օդանավակայանում: YQnow Group-ի ծառայությունների օգնությամբ Դուք կարող եք ավելի հեշտ ու արագ անցնել գրանցումներն օդանավակայանում, Ձեզ կդիմավորեն և կուղեկցեն:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12">
            <div className="md:col-span-4 flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-purple-700 text-2xl font-bold">
                🚕
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">gg Airport rides</h3>
              </div>
            </div>
            <div className="md:col-span-8 text-sm text-gray-600 space-y-4 leading-relaxed">
              <p>
                <strong className="text-purple-700">Visa Infinite</strong> քարտապանները կարող են օգտվել gg-ի հատուկ սակագներից՝ «Զվարթնոց» օդանավակայանից ուղևորությունների դեպքում՝ ստանալով 1,000 դրամ զեղչ:
              </p>
              <p className="font-bold text-gray-800">Ինչպե՞ս օգտվել առաջարկից.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Ներբեռնեք gg հավելվածը:</li>
                <li>Կցեք Ձեր Visa Infinite քարտը:</li>
                <li>Պատվիրեք ուղևորություն «Զվարթնոց» օդանավակայանից հավելվածի միջոցով և ստացեք 1,000 դրամ զեղչ օդանավակայանից gg-ով ուղևորությունների դեպքում:</li>
              </ul>
              <p className="text-xs text-gray-400 pt-2">
                Առաջարկը հասանելի է մինչև 2025 թվականի դեկտեմբերի 31-ը:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OTHER CARDS SLIDER SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-12 relative w-full">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-gray-900">
          Այլ քարտեր
        </h2>

        <div className="relative group px-4">
          <button
            className="cards-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 text-2xl font-bold text-[#6a0dad] hover:scale-125 transition cursor-pointer p-2"
            aria-label="Նախորդ"
          >
            ‹
          </button>
          <button
            className="cards-next absolute right-0 top-1/2 -translate-y-1/2 z-20 text-2xl font-bold text-[#6a0dad] hover:scale-125 transition cursor-pointer p-2"
            aria-label="Հաջորդ"
          >
            ›
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1.2}
            navigation={{
              nextEl: ".cards-next",
              prevEl: ".cards-prev",
            }}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {cardsData.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="flex flex-col items-center text-center cursor-pointer">
                  <div className="w-full flex items-center justify-center mb-3 transition-transform duration-300 hover:scale-105">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base mt-2">
                    {card.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 6. ONLINE & MOBILE BANKING BANNER SECTION */}
      <section className="w-full bg-[#5b0eaf] text-white py-14 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-36 h-36 bg-white rounded-br-full pointer-events-none z-0"></div>

        <div className="absolute top-8 left-1/3 w-8 h-8 rounded-full border-2 border-purple-400 opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-6 right-1/4 w-12 h-12 bg-purple-400/20 rounded-full blur-sm pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
          {/* Left Side: Mockups */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative">
            <div className="relative w-full max-w-[460px] z-10">
              <div className="relative rounded-t-xl border-[8px] border-b-0 border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden aspect-[16/10]">
                <iframe
                  src="https://www.youtube.com/embed/KwAgMHEx8ys?enablejsapi=1"
                  title="EvocaTOUCH Video"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-[108%] -translate-x-[4%] h-2.5 bg-neutral-700 rounded-b-xl border-t border-neutral-600 shadow-md relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-neutral-500 rounded-b-md"></div>
              </div>
            </div>

            <div className="relative -ml-12 z-20 top-4 shrink-0">
              <div className="w-32 md:w-36 aspect-[9/19] rounded-[2rem] border-[4px] border-neutral-900 bg-black overflow-hidden shadow-2xl relative">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-neutral-900 rounded-full z-30"></div>
                <img
                  src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg"
                  alt="Evoca Mobile App"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Text & Buttons */}
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
                className="inline-block bg-white text-[#5b0eaf] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-md text-sm md:text-base"
              >
                Դառնալ հաճախորդ
              </Link>
            </div>

            <div className="flex items-center gap-5 pt-2">
              <div className="bg-white p-2 rounded-xl shadow-md shrink-0">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.evoca.am"
                  alt="QR Code"
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs md:text-sm font-semibold text-purple-100">
                  Ներբեռնել հավելվածները`
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                      alt="App Store"
                      className="h-8 md:h-9"
                    />
                  </a>
                  <a
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Google Play"
                      className="h-8 md:h-9"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          aria-label="Call"
          className="absolute bottom-4 right-4 bg-purple-300/30 hover:bg-purple-300/50 p-3 rounded-full text-white transition z-20 backdrop-blur-sm"
        >
          <Phone className="w-5 h-5" />
        </button>
      </section>
      {/* Footer */}
      <footer className="w-full bg-white text-gray-700 py-12 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="space-y-4">
            <h3 className="text-xl font-extrabold text-[#7c3aed]">evocaBANK</h3>
            <p className="text-xs text-gray-500">
              ք. Երևան, 0010, Հանրապետության 44/2
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="text-[11px] text-gray-400">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          <div className="space-y-2 text-xs">
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

          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-gray-900 mb-3 text-sm">Օգտակար հղումներ</h4>
            <p className="hover:text-purple-700 cursor-pointer">
              Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)
            </p>
            <p className="hover:text-purple-700 cursor-pointer">
              Հաճախորդի ռեզիդենտության չափանիշներ
            </p>
            <p className="hover:text-purple-700 cursor-pointer">Կարգավորում</p>
            <p className="hover:text-purple-700 cursor-pointer">
              Գաղտնիության քաղաքականություն
            </p>
            <p className="hover:text-purple-700 cursor-pointer">Ֆին. հաշտարար</p>
            <p className="hover:text-purple-700 cursor-pointer">
              Ֆինանսական հանցագործությունների կանխարգելում
            </p>
            <p className="hover:text-purple-700 cursor-pointer">
              Հղումներ Բանկի քարտապանների համար
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-gray-900 mb-3 text-sm">Այլ հղումներ</h4>
            <p className="hover:text-purple-700 cursor-pointer">EvocaONLINE</p>
            <p className="hover:text-purple-700 cursor-pointer">Պահատուփեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Հաճախ տրվող հարցեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Հայտարարություններ</p>
            <p className="hover:text-purple-700 cursor-pointer">Dibrary</p>
            <p className="hover:text-purple-700 cursor-pointer">Բուկլետներ</p>
            <p className="hover:text-purple-700 cursor-pointer">Հետադարձ կապ</p>
            <p className="hover:text-purple-700 cursor-pointer">Կայքի քարտեզ</p>

            <div className="pt-4 space-y-1">
              <p className="text-purple-700 font-bold hover:underline cursor-pointer">
                Բանկի հասցեները և աշխատաժամերը
              </p>
              <p className="text-purple-700 font-bold hover:underline cursor-pointer">
                Կապ մեզ հետ
              </p>
              <p className="text-gray-900 font-bold">+374 10 605555</p>
              <p className="text-[#7c3aed] font-extrabold text-base">8444</p>
            </div>
          </div>

        </div>
      </footer>

      {/* Bottom legal notice */}
      <div className="w-full bg-gray-100 py-6 px-6 text-gray-500 text-[11px]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="leading-relaxed max-w-2xl">
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանություն, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ԲԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 opacity-70">
            <span className="font-bold border p-1 rounded bg-white">fininfo</span>
            <span className="font-bold border p-1 rounded bg-white">abcfinance.am</span>
            <span className="font-bold border p-1 rounded bg-white">arca</span>
            <span className="font-bold border p-1 rounded bg-white">ACRA</span>
          </div>
        </div>
      </div>

      {/* Online Chat Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button className="bg-[#7c3aed] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-2xl flex items-center gap-2 hover:bg-purple-800 transition">
          Գրեք մեզ, մենք օնլայն ենք !
        </button>
      </div>

    </div>
  );
}