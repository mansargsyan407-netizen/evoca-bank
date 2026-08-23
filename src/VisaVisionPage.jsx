import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function VisaVisionPage() {
  const [activeTab, setActiveTab] = useState('about');

  // Այլ քարտերի տվյալները Slider-ի համար
  const cardsData = [
    {
      id: 1,
      name: "Evoca Travel Card",
      image: "https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg",
    },
    {
      id: 2,
      name: "Evoca Visa Platinum",
      image: "https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png",
    },
    {
      id: 3,
      name: "Wilco Visa Infinite",
      image: "https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png",
    },
    {
      id: 4,
      name: "Evoca Gift Card",
      image: "https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png",
    },
    {
      id: 5,
      name: "Digital Gift Card",
      image: "https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png",
    },
    {
      id: 6,
      name: "Visa Infinite",
      image: "https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png",
    },
    {
      id: 7,
      name: "UnionPay Business Platinum",
      image: "https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png",
    },
    {
      id: 8,
      name: "Mastercard World Digital",
      image: "https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png",
    },
    {
      id: 9,
      name: "MyLer Gift Card",
      image: "https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png",
    },
    {
      id: 10,
      name: "UnionPay Gold",
      image: "https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png",
    },
    {
      id: 11,
      name: "4U.am Gift card",
      image: "https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png",
    },
    {
      id: 12,
      name: "Mastercard Gold",
      image: "https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png",
    },
    {
      id: 13,
      name: "Mastercard Standard",
      image: "https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png",
    },
    {
      id: 14,
      name: "Visa Digital",
      image: "https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png",
    },
    {
      id: 15,
      name: "Visa Classic",
      image: "https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png",
    },
    {
      id: 16,
      name: "Arca Classic",
      image: "https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png",
    },
    {
      id: 17,
      name: "Visa Business",
      image: "https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png",
    },
    {
      id: 18,
      name: "Dalma Gift Card",
      image: "https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png",
    },
    {
      id: 19,
      name: "Rio Gift Card",
      image: "https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png",
    },
    {
      id: 20,
      name: "Visa Gold",
      image: "https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800 font-sans min-h-screen flex flex-col justify-between">
      <div>
        {/* Sub Header Navigation */}
        <div className="bg-[#6b21a8] text-white px-8 py-3 flex items-center justify-center gap-8 text-sm font-semibold overflow-x-auto">
          <span className="bg-[#581c87] px-4 py-1 rounded cursor-pointer whitespace-nowrap">Քարտեր</span>
          <span className="hover:opacity-80 cursor-pointer whitespace-nowrap">Քարտերի տրամադրում և սպասարկում</span>
          <span className="hover:opacity-80 cursor-pointer whitespace-nowrap">Սոցիալական ապահովության վճարային քարտեր</span>
          <span className="hover:opacity-80 cursor-pointer whitespace-nowrap">Evoca Benefits</span>
        </div>

        {/* Hero Section */}
        <div className="bg-[#faf5ff] px-8 md:px-20 py-12 flex flex-col md:flex-row items-center justify-center gap-12 rounded-bl-[80px]">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Visa Vision</h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              Կյանքին նայիր մանուշակագույն ակնոցով ու տես Visa Vision քարտի բազմաթիվ առավելությունները։
            </p>
          </div>
          <div className="mt-6 md:mt-0 shrink-0">
            <img
              src="https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png"
              alt="Visa Vision"
              className="w-80 md:w-96 object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Breadcrumb Navigation - Centered */}
        <div className="max-w-4xl mx-auto px-6 py-4 text-xs text-gray-500 flex items-center justify-start gap-2 flex-wrap">
          <Link to="/" className="hover:underline flex items-center gap-1">
            <span>←</span> Վերադառնալ
          </Link>
          <span>›</span>
          <span>Անհատ</span>
          <span>›</span>
          <span>Քարտեր</span>
          <span>›</span>
          <span>Visa</span>
          <span>›</span>
          <span className="font-bold text-gray-800">Visa Vision</span>
        </div>

        {/* MAIN CONTENT SECTION - CENTERED (mx-auto) */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Tabs header */}
          <div className="border-b border-gray-200 flex justify-center gap-12 mb-8">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-3 font-bold text-sm md:text-base transition-colors ${
                activeTab === 'about'
                  ? 'border-b-2 border-purple-600 text-purple-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Քարտի մասին
            </button>
            <button
              onClick={() => setActiveTab('rates')}
              className={`pb-3 font-bold text-sm md:text-base transition-colors ${
                activeTab === 'rates'
                  ? 'border-b-2 border-purple-600 text-purple-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Visa Vision քարտի սակագներ
            </button>
          </div>

          {activeTab === 'about' ? (
            <div className="text-sm md:text-base text-gray-700 space-y-6 leading-relaxed">
              <p className="font-semibold text-gray-800">
                <strong className="text-purple-700">Evocabank</strong>-ը ներկայացնում է իր նոր <strong className="text-purple-700">Visa Vision</strong> քարտը, որի հետ դու կստանաս՝
              </p>

              {/* Bullet list */}
              <ul className="space-y-3 pl-2">
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600 mt-2 shrink-0"></span>
                  <span>0% կանխիկացում Evoca-ի բոլոր բանկոմատներից</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600 mt-2 shrink-0"></span>
                  <span>Cashback բոլոր անկանխիկ վճարումներից</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600 mt-2 shrink-0"></span>
                  <span>Դրական մնացորդի վրա գումարի կուտակում</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600 mt-2 shrink-0"></span>
                  <span>Վարկային սահմանաչափ՝ քո ցանկությամբ</span>
                </li>
              </ul>

              <p className="pt-2">
                Ի դեպ, քո քարտի դիզայնը դու էս ընտրում՝ մինիմալիստիկ սպիտակ, թե՞ ոճային սև:
              </p>

              {/* Cards Showcase Box */}
              <div className="flex justify-center items-center py-8 px-4 bg-gray-50/80 rounded-2xl border border-gray-100 my-8 shadow-sm">
                <img
                  src="https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png"
                  alt="Visa Vision Black & White"
                  className="max-h-72 object-contain drop-shadow-lg rounded-lg"
                />
              </div>

              <p>Դե կարող ես ընտրել գույնն ու պատվիրել քո Visa Vision քարտը:</p>
              <p className="font-bold text-gray-900">Այո՛, այս ամենն իրական է!</p>

              <p className="pt-2">
                <strong className="text-purple-700 font-bold">Vision</strong> քարտը <strong className="text-gray-900 font-bold">Visa Rewards</strong> տեսակի քարտ է: Անկախ մնացորդի չափից՝ դրամային քարտի վրա դու կուտակում ես տարեկան <strong className="text-purple-700">4%</strong> գումար, դոլարային քարտերի դեպքում՝ <strong className="text-purple-700">1%</strong>, իսկ Եվրոյով՝ <strong className="text-purple-700">0.5%</strong>:
              </p>

              <p>Բայց այսքանով քարտի առավելությունները չեն ավարտվում:</p>

              <p>
                Կատարիր անկանխիկ գնումներ ու վճարումներ քո Visa Vision քարտով և ստացիր <strong className="text-purple-700">0.25% cashback</strong> տեղական գործարքների համար, և <strong className="text-purple-700">0.5% cashback</strong> արտասահմանյան գործարքների համար:
              </p>

              <p>
                <strong className="text-purple-700 font-bold">Visa Vision</strong> քարտը գործում է ամենուր, որտեղ կարելի է վճարել Visa տեսակի քարտերով՝ <strong className="text-gray-900 font-bold">թե՛ Հայաստանում, թե՛ Հայաստանից դուրս՝ 200-ից ավել երկրներում</strong>:
              </p>

              <p className="font-semibold text-gray-900 pt-4">Evoca Vision քարտով կարելի է կատարել՝</p>

              {/* 3 Grid Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-6 bg-purple-50/60 rounded-2xl border border-purple-100 flex flex-col justify-between hover:shadow-md transition">
                  <div>
                    <div className="w-15 h-15 mb-4 text-purple-600 flex items-center justify-center text-3xl"> <img src="https://www.evoca.am/file_manager/Visa%20Vision/icon1.png" alt="" /></div>
                    <h4 className="font-bold text-gray-900 mb-2">Օնլայն գնումներ</h4><br />
                    <p className="text-xs text-gray-600">Պարզ, անվտանգ և արագ վճարման միջոց</p>
                  </div>
                </div>

                <div className="p-6 bg-purple-50/60 rounded-2xl border border-purple-100 flex flex-col justify-between hover:shadow-md transition">
                  <div>
                    <div className="w-15 h-15 mb-4 text-purple-600 flex items-center justify-center text-3xl"><img src="https://www.evoca.am/file_manager/Visa%20Vision/icon2.png" alt="" /></div>
                    <h4 className="font-bold text-gray-900 mb-2">Բանկոմատով կանխիկացում</h4><br />
                    <p className="text-xs text-gray-600">0% կանխիկացում Evoca բանկոմատներով</p>
                  </div>
                </div>

                <div className="p-6 bg-purple-50/60 rounded-2xl border border-purple-100 flex flex-col justify-between hover:shadow-md transition">
                  <div>
                    <div className="w-15 h-15 mb-4 text-purple-600 flex items-center justify-center text-3xl"><img src="https://www.evoca.am/file_manager/Visa%20Vision/icon3.png" alt="" /></div>
                    <h4 className="font-bold text-gray-900 mb-2">Գնումներ և cashback ողջ աշխարհում</h4><br />
                    <p className="text-xs text-gray-600">Մինչև 0.5% cashback բոլոր անկանխիկ գնումներից</p>
                  </div>
                </div>
              </div>

              {/* How to order */}
              <div className="pt-8 space-y-4">
                <h3 className="text-xl font-extrabold text-purple-700">Ինչպե՞ս պատվիրել քարտը</h3>
                <p className="font-medium">Evoca Vision քարտը կարող ես պատվիրել՝</p>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600 shrink-0"></span>
                    <span>Evocabank-ի ցանկացած մասնաճյուղում</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600 shrink-0"></span>
                    <span>EvocaTOUCH հավելվածի միջոցով</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600 shrink-0"></span>
                    <span>evoca.am կայքում</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 pt-2">
                  Քարտը ստանալու համար անհրաժեշտ է անձնագիր ու սոց. քարտ կամ նույնականացման քարտ:
                </p>
              </div>

              {/* Where to use & Service fee */}
              <div className="pt-6 space-y-6">
                <div>
                  <h3 className="text-xl font-extrabold text-purple-700 mb-2">Որտե՞ղ կարելի է օգտագործել քարտը</h3>
                  <p>
                    <strong className="text-gray-900">Evoca Vision</strong> քարտով կարող ես վճարել խանութներում, սրճարաններում, զվարճանքի կենտրոններում, սուպերմարկետներում՝ ինչպես ՀՀ տարածքում, այնպես էլ ՀՀ տարածքից դուրս: Այս քարտով կարելի է նաև կատարել օնլայն գնումներ՝ աշխարհի ցանկացած կետից:
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-purple-700 mb-2">Որքա՞ն է քարտի սպասարկման վճարը</h3>
                  <p>
                    Քարտի ամսական սպասարկման վճարը կազմում է <strong className="text-purple-700 font-bold">600 ՀՀ դրամ</strong>:
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Rates Tab (Սակագներ) - CENTERED TABLE */
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm text-xs md:text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th colSpan="2" className="p-4 font-bold text-gray-800 text-sm md:text-base text-center">
                      Visa Vision քարտեր
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-700">
                  <tr>
                    <td className="p-4 font-medium">Քարտի տեսակ</td>
                    <td className="p-4">Visa Rewards</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Քարտի արժույթ</td>
                    <td className="p-4 ">ՀՀ դրամ, ԱՄՆ դոլար, Եվրո</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Visa Vision քարտի սպասարկման վճար</td>
                    <td className="p-4"><p>Տարեկան 6500 ՀՀ դրամ</p>
                    <p>Ամսական 600 ՀՀ դրամ</p>
                    <p>24.02.2022թ.–ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար</p>
<p>45,000 ՀՀ դրամ[1]</p>
</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Քարտապանին այլ արժույթով Visa Classic քարտ` նվեր ցանկության դեպքում/Լրացուցիչ քարտ/</td>
                    <td className="p-4">Անվճար, առանց տարեկան սպասարկման վճարի։</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Նույն հաշվեհամարին կից քարտ Visa Vision քարտի սպասարկման վճար</td>
                    <td className="p-4">Ամսական 300 ՀՀ դրամ։ Օտարերկրյա անձանց համար գործում է  միանվագ 225,000 ՀՀ դրամ սակագինը։</td>
                  </tr>
                   <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> Visa Classic քարտի տրամադրում Visa Vision քարտապանի ընկերոջը` նվեր ցանկության դեպքում</td>
                    <td className="p-4 f">Անվճար, իսկ օտարերկրյա անձանց համար՝ 75,000 ՀՀ դրամ միանվագ</td>
                  </tr>
                   <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Քարտային հաշվի չնվազող մնացորդ </td>
                    <td className="p-4 f">չի սահմանվում</td>
                  </tr>
                   <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք[2] </td>
                    <td className="p-4 f">ՀՀ դրամ՝ 4%, ԱՄՆ դոլար՝ 1%, Եվրո՝ 0.5%</td>
                  </tr>
                   <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Քարտով կատարվող գործարքների դիմաց տրամադրվող cash back[3] </td>
                    <td className="p-4 f">ԱրՔա համակարգի բանկերի POS և vPOS տերմինալներով կատարված գործարքների դեպքում
                       <p>0.25 %, առավելագույնը՝ 5,000 ՀՀ դրամ</p>                       
Ոչ ԱրՔա համակարգի բանկերի (արտերկրյա) POS և vPOS տերմինալներով կատարված գործարքների դեպքում</td>
                  </tr>
                   <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Բանկի բանկոմատներից, քարտային հաշվից, Բանկի POS տերմինալների միջոցով </td>
                    <td className="p-4 f">ՀՀ դրամ՝

<p>Ամսական մինչև 2,000,000 ՀՀ դրամ (ներառյալ)` Անվճար, 
2,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ` 0.2 %
POS տերմինալների միջոցով՝ 0.2 %
ԱՄՆ դոլար՝ 0.5 %

Եվրո՝ 0.5 %</p>
</td>
                  </tr>
                   <tr className="bg-gray-50">
                    <td className="p-4 font-medium">ԱրՔա համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից և POS տերմինալների միջոցով
<p>1 %Այլ բանկերի բանկոմատներից և POS-տերմինալների միջոցով</p> </td>
                    <td className="p-4 f">1.5 %, min 1,500 ՀՀ դրամ</td>
                  </tr>
                   <tr className="bg-gray-50">
                    <td className="p-4 font-medium"><p>Կանխիկացման օրական առավելագույն սահմանաչափեր
Գումարային,
Քանակային,Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն գումարային սահմանաչափ</p> </td>
                    <td className="p-4 f"><p>1,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ,10 հատ,Նվազագույնը 300,000 ՀՀ դրամ (կախված է ԱԳՄ-ից)</p></td>
                  </tr>
                    <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> <p>Կանխիկի մուտքագրում Բանկի վճարային տերմինալներով</p> </td>
                    <td className="p-4 f">0</td>
                  </tr>
                     <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> <p>Բանկի վճարային տերմինալներով կանխիկի մուտքագրման մեկ գործարքի առավելագույն սահմանաչափ</p> </td>
                    <td className="p-4 f">100,000 ՀՀ դրամ</td>
                  </tr>
                    <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> <p>Կանխիկի մուտքագրում Բանկի և ԱրՔա անդամ այլ բանկերի բանկոմատներով (ATM CASH-IN)</p> </td>
                    <td className="p-4 f">0.6 %</td>
                  </tr>
                    <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> <p>Քարտային հաշվի համալրում անկանխիկ փոխանցմամբ</p> </td>
                    <td className="p-4 f">0</td>
                  </tr>
                    <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> <p>Ապրանքների և ծառայությունների դիմաց անկանխիկ վճարման միջնորդավճար</p> </td>
                    <td className="p-4 f">0</td>
                  </tr>
                    <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> <p>Քարտից քարտ փոխանցումներ բանկոմատների միջոցով</p> </td>
                    <td className="p-4 f">Բանկի հաճախորդների օգտին` 0.3 %,«ԱրՔա»  համակարգի  անդամ հանդիսացող այլ  բանկերի և ԱրՔա  համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին` 0.5%</td>
                  </tr>
                    <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> <p>Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում</p> </td>
                    <td className="p-4 f">Նույն արժույթով քարտին` 0%,Տարբեր արժույթով  քարտին` 0.3%</td>
                  </tr>
                    <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> <p>Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով «ԱրՔա»  համակարգի  անդամ հանդիսացող այլ  բանկերի և ԱրՔա  համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին`</p> </td>
                    <td className="p-4 f">0.5%</td>
                  </tr>
                    <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> <p>Քարտի գործողության կասեցում</p> </td>
                    <td className="p-4 f">0</td>
                  </tr>
                    <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> <p>Քարտի գործողության ապակասեցում  (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)</p> </td>
                    <td className="p-4 f">500 ՀՀ դրամ</td>
                  </tr>
                     <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> <p>Քարտի վերաթողարկում,գործողության ժամկետը ավարտվելու դեպքում</p> </td>
                    <td className="p-4 f">0</td>
                  </tr>
                     <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> <p>Քարտի վերաթողարկում կորստի կամ վնասվելու դեպքում</p> </td>
                    <td className="p-4 f">2,000 ՀՀ դրամ</td>
                  </tr>
                     <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> <p>Նոր PIN ծածկագրի գեներացում</p> </td>
                    <td className="p-4 f">1,000 ՀՀ դրամ</td>
                  </tr>
                     <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> <p>Քարտային հաշվի ամսական քաղվածքի տրամադրում</p> </td>
                    <td className="p-4 f">0</td>
                  </tr>
                     <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> <p>Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար [5]</p> </td>
                    <td className="p-4 f">0</td>
                  </tr>
                     <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> <p>Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում</p> </td>
                    <td className="p-4 f">Մինչև 5,000 ՀՀ դրամ գործարքներ [6],20 ՀՀ դրամ,5,000 ՀՀ դրամը գերազանցող գործարքներ,0</td>
                  </tr>
                    <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> <p>Կանխիկացման գործարքների քանակի կամ սահմանաչափերի  ավելացման միջնորդավճար</p> </td>
                    <td className="p-4 f">0</td>
                  </tr>
                    <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> <p>Քարտով կատարված գործարքների բողոքարկման հայտ[7]</p> </td>
                    <td className="p-4 f">5,000 ՀՀ դրամ</td>
                  </tr>
                    <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> <p>Գերածախսի գծով տույժեր</p> </td>
                    <td className="p-4 f">20% տարեկան</td>
                  </tr>
                    <tr className="bg-gray-50">
                    <td className="p-4 font-medium"> <p>Վարկային սահմանաչափի հնարավորություն</p> </td>
                    <td className="p-4 f">Առկա է՝ Համաձայն Վարկավորման պայմանների և սակագների</td>
                  </tr>
                    </tbody>
              </table>
                   <br />  <p>[1] Քարտի 5 տարվա սպասարկման վճարը գանձվում է միանվագ՝ քարտի բացման պահին։</p>
        <br /><p>[2] Տոկոսագումարները տրամադրվում են եռամսյակային:</p>
        <br /><p>[3] Cash back-ը տրամադրվում է մինչև յուրաքանչյուր ամսվա 10-րդ աշխատանքային օրը ներառյալ: Եթե կուտակված Cash back-ի գումարը չի գերազանցում 100 ՀՀ դրամը կամ դրան համարժեք արտարժույթը ապա այն չի վճարվում: Cash back չի տրամադրվում կոմունալ և դրանց հավասարեցված վճարումների, betting/gambling կայքերում, էլեկտրոնային դրամապանակների համալրման և ֆինանսական հաստատություններում կատարված վճարումների գործարքների դիմաց:</p>
        <br /><p>[4] Կանխիկացման սակագները գործում են նաև քարտին կից տրամադրված ցանկացած տեսակի այլ քարտի դեպքում:</p>
        <br /><p>[5] Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ: <br /></p>
        <br /><p>Նվազագույն մնացորդ, որի վրա իրականացվում է %-ների հաշվեգրում՝ 0 ՀՀ դրամ</p>
        <br /><p>[6] Սակագինը գործում է նաև գործարքի մերժման դեպքում ուղարկված SMS հաղորդագրության համար՝ անկախ գործարքի գումարի չափից:</p>
          <br /><p>[7] Գանձվում է միայն այն դեպքում, երբ բողոքարկման գործընթացի արդյունքում պարզվել է, որ գործարքը կատարվել է հաճախորդի կողմից կամ հաճախորդի կողմից քարտի օգտագործման կանոնների խախտման հետևանքով:</p>
              
            </div>
          )}
       
        </div>

        
        {/* Այլ քարտեր (Swiper Slider) */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-14">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-gray-900 text-center md:text-left">Այլ քարտեր</h2>

          <div className="relative">
            <button
              className="cards-prev absolute -left-2 md:-left-8 top-[35%] -translate-y-1/2 z-20 text-3xl font-bold text-[#7c3aed] hover:scale-125 transition cursor-pointer w-8 h-8 flex items-center justify-center"
              aria-label="Նախորդ"
            >
              ‹
            </button>
            <button
              className="cards-next absolute -right-2 md:-right-8 top-[35%] -translate-y-1/2 z-20 text-3xl font-bold text-[#7c3aed] hover:scale-125 transition cursor-pointer w-8 h-8 flex items-center justify-center"
              aria-label="Հաջորդ"
            >
              ›
            </button>

            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView={1.3}
              navigation={{
                nextEl: ".cards-next",
                prevEl: ".cards-prev",
              }}
              breakpoints={{
                480: { slidesPerView: 1.8 },
                640: { slidesPerView: 2.3 },
                1024: { slidesPerView: 3.3 },
                1280: { slidesPerView: 4 },
              }}
              className="w-full px-1"
            >
              {cardsData.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className="flex flex-col items-center text-center cursor-pointer group/card">
                    <div className="w-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover/card:scale-[1.03]">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-full h-auto object-contain drop-shadow-lg"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm md:text-base">
                      {card.name}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
{/* Օնլայն և մոբայլ բանկինգ Banner (ԱՎԵԼԱՑՎԱԾ Է ԱՅՍՏԵՂ) */}
        <section className="w-full bg-[#6b21a8] text-white py-12 px-6 relative overflow-hidden mt-12">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white rounded-full opacity-10 pointer-events-none"></div>
          <div className="absolute bottom-10 right-10 w-10 h-10 rounded-full bg-purple-400/20 blur-sm pointer-events-none"></div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="w-full lg:w-1/2 flex items-center justify-center gap-4">
              {/* Laptop Mockup with YouTube Video */}
              <div className="relative w-full max-w-[480px]">
                {/* Laptop Screen Frame */}
                <div className="relative rounded-t-2xl border-[10px] border-b-0 border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden aspect-[16/10]">
                  <iframe
                    src="https://www.youtube.com/embed/KwAgMHEx8ys?enablejsapi=1&origin=https%3A%2F%2Fwww.evoca.am&widgetid=1&forigin=https%3A%2F%2Fwww.evoca.am%2Fhy%2Fcards%2Fmaster%2Ftravel-card&aoriginsup=1&gporigin=https%3A%2F%2Fwww.evoca.am%2Fhy&vf=6"
                    title="EvocaTOUCH Video"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                {/* Laptop Base */}
                <div className="w-[108%] -translate-x-[4%] h-3 bg-neutral-700 rounded-b-xl border-t border-neutral-600 shadow-md relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-neutral-500 rounded-b-md"></div>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="hidden md:block relative -ml-6 mb-2 shrink-0">
                <div className="w-28 aspect-[9/19] rounded-[1.6rem] border-[5px] border-neutral-900 bg-gradient-to-b from-indigo-700 via-purple-700 to-fuchsia-700 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-9 h-2 bg-neutral-900 rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" alt="" />
                  </div>
                  <div className="absolute top-8 left-4 w-2 h-2 rounded-full bg-white/60"></div>
                  <div className="absolute bottom-12 left-3 w-2.5 h-2.5 rounded-full bg-white/40"></div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold">Օնլայն և մոբայլ բանկինգ</h2>
              <p className="text-purple-100 text-sm md:text-base leading-relaxed">
                Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է
                տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ։
              </p>

              <div>
                <Link
                  to="/evoca-online"
                  className="inline-block bg-white text-purple-900 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition shadow-lg text-center"
                >
                  Դառնալ հաճախորդ
                </Link>
              </div>

              {/* QR & Mobile Apps Download Section */}
              <div className="flex items-center gap-4 pt-4">
                {/* QR Code */}
                <div className="bg-white p-1.5 rounded-xl shadow-md shrink-0">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.evoca.am"
                    alt="QR Code"
                    className="w-20 h-20"
                  />
                </div>

                {/* Text & Store Buttons */}
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-purple-100">
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
                        className="h-8"
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
                        className="h-8"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#f8f8fa] text-[#2d2d2d] pt-12 pb-6 px-6 border-t border-gray-100 text-xs">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Column 1: Logo & Address */}
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-black text-[#2d2d2d] tracking-tight">evoca</span>
              <span className="text-2xl font-black text-[#7c3aed] tracking-tight">BANK</span>
            </div>
            <p className="text-gray-600 leading-relaxed text-[13px]">
              ք. Երևան, 0010,<br />
              Հանրապետության 44/2
            </p>
            <p className="text-gray-500 leading-normal text-[12px] max-w-[220px]">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="text-[11px] text-gray-400 pt-2">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          {/* Column 2: Բանկի մասին */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Բանկի մասին</h4>
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

          {/* Column 3: Օգտակար հղումներ */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Օգտակար հղումներ</h4>
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

          {/* Column 4: Այլ հղումներ + Socials & Contacts */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-gray-900 mb-2 text-sm">Այլ հղումներ</h4>
              <div className="flex gap-2 text-gray-400 text-sm">
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
            <p className="hover:text-purple-700 cursor-pointer">Հետադարձ կապ</p>
            <p className="hover:text-purple-700 cursor-pointer">Կայքի քարտեզ</p>

            <div className="flex gap-2 pt-2">
              <button className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-1 text-[10px]">
                <span className="text-xs"></span> App Store
              </button>
              <button className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-1 text-[10px]">
                <span className="text-xs">▶</span> Google Play
              </button>
            </div>

            <div className="pt-3 space-y-1.5">
              <p className="text-[#6b21a8] font-bold hover:underline cursor-pointer">
                Բանկի հասցեները և աշխատաժամերը
              </p>
              <p className="text-[#6b21a8] font-bold hover:underline cursor-pointer">
                Կապ մեզ հետ
              </p>
              <p className="text-[#6b21a8] font-bold text-sm">+374 10 605555</p>
              <p className="text-[#6b21a8] font-extrabold text-base">8444</p>
            </div>
          </div>

        </div>

        {/* BOTTOM NOTICE & PARTNER LOGOS BAR */}
        <div className="border-t border-gray-200/60 pt-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-400 leading-relaxed max-w-2xl">
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանություն, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ԲԲԸ-ն պատասխանատվություն չի կրում իր...
          </p>
          
          <div className="flex items-center gap-3 opacity-60 grayscale hover:grayscale-0 transition">
            <span className="text-xs font-bold text-gray-500">fininfo</span>
          </div>
        </div>

        {/* FLOATING ONLINE CHAT BUTTON */}
        <div className="fixed bottom-4 right-4 z-50 flex items-center">
          <button className="bg-[#6b21a8] text-white font-bold text-xs px-5 py-2.5 rounded-l-full shadow-lg hover:bg-purple-800 transition">
            Գրեք մեզ, մենք օնլայն ենք !
          </button>
          <div className="bg-[#a855f7] p-2.5 rounded-full text-white shadow-lg -ml-2">
            💬
          </div>
        </div>
      </footer>

    </div>
  );
}