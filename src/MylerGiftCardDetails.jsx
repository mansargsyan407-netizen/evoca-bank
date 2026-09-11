import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function MylerGiftCardDetails() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');
  
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const cardsData = [
   {
    id: 'travel',
    title: 'Evoca Travel Card',
    imgUrl: 'https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png',
    link: '/cards/travel-card'
  },
  {
    id: 'visa-platinum',
    title: 'Evoca Visa Platinum',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png',
    link: '/cards/visa-platinum'
  },
  {
    id: 'wilco-infinite',
    title: 'Wilco Visa Infinite',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png',
    link: '/cards/wilco-visa-infinite'
  },
  {
    id: 'gift-card',
    title: 'Evoca Gift Card',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png',
    link: '/cards/gift-card'
  },
  {
    id: 'gift-4u',
    title: 'Digital Gift Card',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png',
    link: '/cards/4u-gift-card'
  },
  {
    id: 'mc-gold',
    title: 'Mastercard Gold',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png',
    link: '/cards/mastercard-gold'
  },
  {
    id: 'visa-infinite',
    title: 'Visa Infinite',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png',
    link: '/cards/visa-infinite'
  },
  {
    id: 'visa-vision',
    title: 'Visa Vision',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png',
    link: '/cards/visa-vision'
  },
  {
    id: 'mc-world-digital',
    title: 'Mastercard World Digital',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png',
    link: '/cards/mastercard-world-digital'
  },
  {
    id: 'unionpay-business-platinum',
    title: 'UnionPay Business Platinum',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png',
    link: '/cards/unionpay-business-platinum'
  },
  {
    id: 'myler-gift-card',
    title: 'MyLer Gift Card',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png',
    link: '/cards/myler-gift-card'
  },
  {
    id: 'unionpay-gold',
    title: 'UnionPay Gold',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png',
    link: '/cards/unionpay-gold'
  },
  {
    id: 'arca-classic',
    title: 'Arca Classic',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png',
    link: '/cards/arca-classic'
  },
  {
    id: 'arca-unionpay',
    title: 'Arca Union Pay Co-badge',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png',
    link: '/cards/arca-unionpay'
  },
  {
    id: 'mc-standard',
    title: 'Mastercard Standard',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png',
    link: '/cards/mastercard-standard'
  },
  {
    id: 'visa-digital',
    title: 'Visa Digital',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png',
    link: '/cards/visa-digital'
  },
  {
    id: 'visa-classic',
    title: 'Visa Classic',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png',
    link: '/cards/visa-classic'
  },
  {
    id: 'arca-classic-page',
    title: 'Arca Classic',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png',
    link: '/cards/arca-classic-card'
  },
  {
    id: 'arca-unionpay-cobadge',
    title: 'Arca Union Pay Co-badge',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png',
    link: '/cards/arca-union-pay-co-badge'
  },
  /* --- Վերջին 4 քարտերը փոխված link-երով --- */
  {
    id: 'visa-business-premium',
    title: 'Visa Business',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png',
    link: '/cards/visa-business-card'
  },
  {
    id: 'dalma-gift-card-page',
    title: 'Dalma Gift Card',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png',
    link: '/cards/dalma-card'
  },
  {
    id: 'rio-gift-card-page',
    title: 'Rio Gift Card',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png',
    link: '/cards/rio-card'
  },
  {
    id: 'visa-gold-premium',
    title: 'Visa Gold',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png',
    link: '/cards/visa-gold-card'
  }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans">
      
      {/* 1. Hero Section */}
      <div className="bg-gradient-to-r from-purple-50 via-purple-100/50 to-purple-50 py-12 px-4 md:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              MyLer Gift Card
            </h1>
            <p className="text-slate-600 text-lg">
              Մեկ քարտ, անսահմանափակ արկածներ:
            </p>
          </div>
          <div className="relative w-full max-w-md">
           <img src="https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png" alt="" />
          </div>
        </div>
      </div>

      {/* 2. Navigation & Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 border rounded-full text-slate-700 bg-white hover:bg-slate-100 transition text-sm font-medium shadow-sm"
          >
            ← Վերադառնալ
          </button>
          
          <nav className="text-xs md:text-sm text-slate-500 flex items-center gap-2">
            <span>🏠</span>
            <span>›</span>
            <span>Անհատ</span>
            <span>›</span>
            <span>Քարտեր</span>
            <span>›</span>
            <span>ArCa</span>
            <span>›</span>
            <span className="font-semibold text-slate-800">MyLer Gift Card</span>
          </nav>
        </div>

        {/* 3. Tabs */}
        <div className="flex border-b border-slate-200 mt-6 gap-8 text-sm font-semibold">
          <button 
            onClick={() => setActiveTab('about')}
            className={`pb-3 border-b-2 transition ${activeTab === 'about' ? 'border-purple-600 text-purple-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            Քարտի մասին
          </button>
          <button 
            onClick={() => setActiveTab('terms')}
            className={`pb-3 border-b-2 transition ${activeTab === 'terms' ? 'border-purple-600 text-purple-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            Տրամադրման պայմանները
          </button>
          <button 
            onClick={() => setActiveTab('service')}
            className={`pb-3 border-b-2 transition ${activeTab === 'service' ? 'border-purple-600 text-purple-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            Սպասարկման պայմանները
          </button>
        </div>

        {/* 4. Tab Content */}
        <div className="py-8 space-y-6 text-slate-700 leading-relaxed text-sm md:text-base max-w-4xl">
          {activeTab === 'about' && (
            <>
              <p>
                <strong className="text-purple-700">Evocabank</strong>-ը և <strong className="text-purple-700">MYLER MOUNTAIN RESORT</strong>-ը ներկայացնում են նվեր քարտ՝ հատուկ էքստրիմի ու ակտիվ հանգստի սիրահարների համար:
              </p>
              <p>
                Այնպես որ, դու գիտես՝ ում նվիրել <strong className="text-purple-700">MyLer Gift Card</strong>-ը:
              </p>
              <p>
                Քարտը հնարավորություն է տալիս օգտվել Myler համալիրի տարածքում գործող սպասարկման բոլոր կետերից և ինքնուրույն ընտրել լավագույն փորձառությունը:
              </p>
              <p>
                Նվեր քարտը գործում է բացառապես անկանխիկ տարբերակով և կարող է օգտագործվել քարտի ձեռքբերման օրվանից սկսած 1 տարվա ընթացքում:
              </p>

              <h3 className="text-purple-700 font-bold text-lg pt-4">Ինչպե՞ս ձեռք բերել MyLer Gift Card-ը:</h3>
              <p>
                <strong className="text-purple-700">MyLer Gift Card</strong> կարելի է ձեռք բերել <strong className="text-purple-700">Evocabank</strong>-ի մասնաճյուղերից (բացառությամբ՝ Էրեբունի և Yerevan Mall մասնաճյուղերի)՝ ներկայացնելով անձնագիր կամ ID քարտ: Քարտը տրամադրվում է հենց տեղում՝ նորաոճ փաթեթավորմամբ:
              </p>
              <p>
                Նվեր քարտը կարող ես պատվիրել նաև օնլայն՝ <strong className="text-purple-700">Evocabank</strong>-ի կամ <strong className="text-purple-700">MYLER MOUNTAIN RESORT</strong>-ի պաշտոնական կայքերի միջոցով՝ մուտքագրելով համապատասխան գումարը քարտին:
              </p>
              <p>
                Մենք այն անվճար կմոտեցնենք <strong className="text-purple-700">Evocabank</strong>-ի քո նախընտրած մասնաճյուղ կամ կառաքենք քո կողմից նշված հասցեով: Քարտը օնլայն պատվիրելու դեպքում, այն կտրամադրվի հաջորդ աշխատանքային օրը: Առաքման արժեքը՝ <strong className="text-purple-700">1,000 ՀՀ դրամ</strong>:
              </p>
            </>
          )}

          {activeTab === 'terms' && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50 w-1/2">Քարտի տեսակ</td>
                    <td className="py-3 px-4 font-semibold text-slate-900">Arca Gift card</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50">Քարտի արժույթ</td>
                    <td className="py-3 px-4 font-semibold text-slate-900">ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50">Նվեր քարտի համալրման գումար</td>
                    <td className="py-3 px-4 text-slate-900">
                      <div>Նվազագույնը՝ <strong>30 000 ՀՀ դրամ</strong></div>
                      <div>Առավելագույնը՝ <strong>2 000 000 ՀՀ դրամ</strong></div>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50">Քարտի գործողության ժամկետ</td>
                    <td className="py-3 px-4 text-slate-900">Քարտի թողարկման պահից 1 տարի</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50">Myler gift քարտով կատարվող գործարքներ</td>
                    <td className="py-3 px-4 text-slate-900">Myler-ի տարածքում գործող առևտրային կետեր</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50">Կանխիկացում</td>
                    <td className="py-3 px-4 text-slate-900">Չի թույլատրվում</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50">Քարտային հաշվի չնվազող մնացորդ</td>
                    <td className="py-3 px-4 text-slate-900">Չի սահմանվում</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք</td>
                    <td className="py-3 px-4 text-slate-900">0%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50">Ապրանքների և ծառայությունների դիմաց անկանխիկ վճարման միջնորդավճար</td>
                    <td className="py-3 px-4 text-slate-900">Անվճար</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50">Քարտի գործողության կասեցում</td>
                    <td className="py-3 px-4 text-slate-900">Անվճար</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50">Քարտի վերաթողարկում</td>
                    <td className="py-3 px-4 text-slate-900">Չի վերաթողարկվում</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50">Մնացորդի տեղափոխության միջնորդավճար<sup>[1]</sup></td>
                    <td className="py-3 px-4 text-slate-900">4 900 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50">PIN ծածկագրի գեներացման հայտ</td>
                    <td className="py-3 px-4 text-slate-900">1 000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50">Քարտի ապաբլոկավորման վճար</td>
                    <td className="py-3 px-4 text-slate-900">1 000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50">Քարտային հաշվի ամսական քաղվածքի տրամադրում</td>
                    <td className="py-3 px-4 text-slate-900">Անվճար</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50">Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար</td>
                    <td className="py-3 px-4 text-slate-900">Անվճար</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50">Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում</td>
                    <td className="py-3 px-4 text-slate-900">Անվճար</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50">Գերածախսի գծով տույժեր</td>
                    <td className="py-3 px-4 text-slate-900">20% տարեկան</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50">Ակտիվացված Քարտի գործողության ժամկետի ավարտից հետո ամսական սպասարկման վճար:</td>
                    <td className="py-3 px-4 text-slate-900">10% ժամկետի ավարտի օրվա դրությամբ քարտային հաշվի մնացորդի նկատմամբ</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50">Կայքից քարտի պատվիրում առաքման եղանակով դեպի հաճախորդի նշած հասցե</td>
                    <td className="py-3 px-4 text-slate-900">1 000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium text-slate-700 bg-slate-50/50">Կայքից քարտի պատվիրում դեպի Բանկի մասնաճյուղեր</td>
                    <td className="py-3 px-4 text-slate-900">անվճար</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-6 text-xs text-slate-600 space-y-2 leading-normal border-t pt-4">
                <p>
                  <sup>[1]</sup> Մնացորդի տեղափոխության համար Բանկի կողմից գանձվում է GIFT քարտերի պայմաններով սահմանված համապատասխան միջնորդավճար: Քարտի վավերականության ժամկետը լրանալուց հետո կամ քարտի կորստի կամ վնասման դեպքում վերջինիս մնացորդային գումարը կարող է տրամադրվել բացառապես մնացորդի տեղափոխման միջոցով այլ GIFT քարտի: Սույն ենթակետով սահմանված դրույթը վերաբերում է ինչպես ակտիվացված, այնպես էլ չակտիվացված GIFT քարտերին:
                </p>
              </div>
            </div>
          )}

          {activeTab === 'service' && (
            <div className="space-y-3">
              <ul className="list-disc pl-5 space-y-3 text-slate-700">
                <li>Քարտը տրամադրվում է անվճար:</li>
                <li>Քարտի լիցքավորումն իրականացվում է Բանկի, ինչպես նաև այլ վճարային տերմինալների միջոցով, ընդ որում՝ Բանկի վճարային տերմինալների միջոցով լիցքավորում իրականացնելիս միջնորդավճար չի գանձվում, իսկ առցանց եղանակով ձեռք բերված Քարտի պարագայում համալրումն իրականացվում է Evoca Touch հավելվածում հաճախորդի կողմից նշված բանկային/քարտային հաշվի միջոցով կամ կայքում՝ V-Pos միջոցով:</li>
                <li>Քարտի մնացորդի նկատմամբ Բանկի կողմից տոկոսագումարներ չեն վճարվում:</li>
                <li>Քարտը գործում է մինչև Քարտի դիմերեսին նշված ամսվա վերջին օրը ներառյալ:</li>
                <li>Քարտը նվեր ստացած անձը պարտավոր է Քարտի գործողության ժամկետում ներկայանալ Բանկ՝ անձը հաստատող փաստաթղթով և Բանկի հետ կնքել Վճարային քարտի պատվիրման հայտ-պայմանագիր՝ ակտիվացնելով Քարտը, կամ առցանց եղանակով՝ ակտիվացումն իրականացնելով Բանկի "EVOCA TOUCH" Հավելվածի միջոցով:</li>
                <li>Քարտի գործողության ժամկետի ընթացքում նվեր ստացած անձի կողմից Բանկ չներկայանալու և Քարտը չակտիվացնելու դեպքում Քարտի գումարը ենթակա չէ վերադարձման:</li>
                <li>Ակտիվացված Քարտի գործողության ժամկետի ավարտից հետո Բանկը սկսում է հաշվարկել ամսական 10% (տասը տոկոս) սպասարկման վճար՝ ժամկետի ավարտի օրվա դրությամբ քարտային հաշվի մնացորդի նկատմամբ:</li>
                <li>Բանկը պատասխանատվություն չի կրում Դիմումատուին հասցված այն վնասի համար, որը հասցվել է Քարտը կորցնելու, Դիմումատուի կողմից Քարտն ու PIN կոդն այլ անձին փոխանցելու, ինչպես նաև Քարտի գործողության ժամկետի ավարտի հետևանքով:</li>
                <li>Բանկը պատասխանատվություն չի կրում իր հսկողության տիրույթից դուրս տեղի ունեցած իրադարձությունների համար:</li>
                <li>Դիմում-Պայմանագրի շրջանակներում առաջացած վեճերն ու տարաձայնությունները լուծվում են երկկողմանի համաձայնության սկզբունքով: Համաձայնության չգալու դեպքում վեճերը լուծվում են ՀՀ օրենսդրությամբ սահմանված կարգով:</li>
                <li>Բանկը և Դիմումատուն կրում են պատասխանատվություն ՀՀ օրենսդրությամբ սահմանված դեպքերում և կարգով:</li>
                <li>Դիմումատուն տալիս է Բանկից գովազդային և տեղեկատվական հաղորդագրություններ ստանալու համաձայնություն:</li>
                <li>Բանկը և Դիմումատուն ժամանակավորապես ազատվում են պարտավորությունների կատարումից՝ ՀՀ օրենսդրությամբ որպես ֆորս-մաժորային ճանաչված իրադարձությունների առաջացման դեպքում և ընթացքում:</li>
                <li>Սույն պայմաններով չկարգավորվող հարցերը կարգավորվում են Բանկի ներքին այլ իրավական ակտերով:</li>
              </ul>
            </div>
          )}
        </div>

        {/* ================= ԱՅԼ ՔԱՐՏԵՐ SWIPER SECTION ================= */}
             <section className="max-w-7xl mx-auto px-16 pb-20 relative">
               <h2 className="text-2xl font-bold text-gray-900 mb-8">Այլ քարտեր</h2>
       
               <button className="other-prev absolute left-6 top-[60%] -translate-y-1/2 z-10 text-purple-700 hover:text-purple-900 transition">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                 </svg>
               </button>
       
               <button className="other-next absolute right-6 top-[60%] -translate-y-1/2 z-10 text-purple-700 hover:text-purple-900 transition">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                 </svg>
               </button>
       
               <Swiper
                 modules={[Navigation]}
                 navigation={{
                   prevEl: '.other-prev',
                   nextEl: '.other-next',
                 }}
                 spaceBetween={24}
                 slidesPerView={1}
                 breakpoints={{
                   640: { slidesPerView: 2 },
                   768: { slidesPerView: 3 },
                   1024: { slidesPerView: 4 },
                 }}
                 className="w-full"
               >
               {cardsData.map((card, index) => (
  <SwiperSlide key={`${card.id}-${index}`}>
    <Link 
      to={card.path || card.link} 
      className="flex flex-col items-center text-center cursor-pointer group/card block"
    >
      <div className="w-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover/card:scale-[1.03]">
        <img
          src={card.image || card.imgUrl}
          alt={card.name || card.title}
          className="w-full h-auto object-contain drop-shadow-lg"
        />
      </div>
      <h3 className="font-bold text-gray-900 text-sm md:text-base group-hover/card:text-purple-700 transition-colors">
        {card.name || card.title}
      </h3>
    </Link>
  </SwiperSlide>
))}
               </Swiper>
             </section>
      </div>

      {/* ================= ՕՆԼԱՅՆ ԵՎ ՄՈԲԱՅԼ ԲԱՆԿԻՆԳ BANNER ================= */}
      <section className="w-full bg-[#6b21a8] text-white py-14 px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Mockup / Video */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-[440px]">
              <div className="relative rounded-t-2xl border-[8px] border-b-0 border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden aspect-[16/10]">
                <iframe
                  src="https://www.youtube.com/embed/KwAgMHEx8ys"
                  title="EvocaTOUCH Video"
                  className="w-full h-full border-0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-[108%] -translate-x-[4%] h-3 bg-neutral-700 rounded-b-xl border-t border-neutral-600 shadow-md"></div>
            </div>
          </div>

          {/* Right Text Block */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-extrabold">Օնլայն և մոբայլ բանկինգ</h2>
            <p className="text-purple-100 text-xs leading-relaxed">
              Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
            </p>

            <div>
              <button className="bg-white text-purple-900 px-6 py-2.5 rounded-full font-bold text-xs hover:bg-purple-50 transition shadow-md">
                Դառնալ հաճախորդ
              </button>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="bg-white p-1.5 rounded-lg shadow-md shrink-0">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://www.evoca.am"
                  alt="QR Code"
                  className="w-14 h-14"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-purple-100">
                  Ներբեռնել հավելվածները`
                </span>
                <div className="flex items-center gap-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                    className="h-7 cursor-pointer"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-7 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="w-full bg-[#f8f8fa] text-[#2d2d2d] pt-10 pb-6 px-16 border-t border-gray-100 text-xs">
        <div className="max-w-7xl mx-auto flex justify-end items-center pb-4 border-b border-gray-200">
          <div className="text-gray-400 text-[11px]">
            Թարմացվել է` 31/08/2026 17:46
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
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
            <p className="hover:text-purple-700 cursor-pointer">Dlibrary</p>
            <p className="hover:text-purple-700 cursor-pointer">Բուկլետներ</p>
            <p className="hover:text-purple-700 cursor-pointer">Հետադարձ կապ</p>
            <p className="hover:text-purple-700 cursor-pointer">Կայքի քարտեզ</p>

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

        <div className="border-t border-gray-200/60 pt-4 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400">
          <p className="max-w-2xl leading-relaxed">
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով:
          </p>
          <div className="flex gap-4 items-center opacity-70">
            <span className="font-bold text-gray-500">arca</span>
            <span className="font-bold text-gray-500">fininfo</span>
          </div>
        </div>

        {/* Chat Widget Icon */}
        <div className="fixed bottom-4 right-4 z-50 flex items-center">
          <div className="bg-[#6b21a8] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-105 transition">
            💬
          </div>
        </div>
      </footer>

    </div>
  );
}