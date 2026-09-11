import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export const cardsData = [
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
    id: 'rio-gift-card-page',
    title: 'Rio Gift Card',
    imgUrl: 'https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png',
    link: '/cards/rio-card'
  }
];

const DalmaCardGift = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      <div>
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-purple-100 via-purple-50 to-white py-12 px-6 md:px-16 relative overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Dalma Gift Card
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                Նվեր ընտրելն այլևս դժվար չէ:
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors cursor-pointer">
                Պատվիրել օնլայն
              </button>
            </div>
            <div className="flex-shrink-0">
              <img
                src="https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png"
                alt="Dalma Gift Card"
                className="w-80 md:w-96 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Navigation Breadcrumb */}
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4 text-sm text-gray-500">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm hover:bg-gray-100 transition cursor-pointer text-gray-700 font-medium"
          >
            ← Վերադառնալ
          </button>
          <div className="flex items-center gap-2">
            <span>›</span>
            <span>Անհատ</span>
            <span>›</span>
            <span>Քարտեր</span>
            <span>›</span>
            <span>ArCa</span>
            <span>›</span>
            <span className="text-purple-600 font-semibold">Dalma Gift Card</span>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="max-w-6xl mx-auto px-6 py-8">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-8 gap-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-3 font-semibold text-base border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'about'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Քարտի մասին
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`pb-3 font-semibold text-base border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'terms'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Տրամադրման պայմանները
            </button>
            <button
              onClick={() => setActiveTab('service')}
              className={`pb-3 font-semibold text-base border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'service'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Սպասարկման պայմանները
            </button>
          </div>

          {/* TAB 1: ՔԱՐՏԻ ՄԱՍԻՆ */}
          {activeTab === 'about' && (
            <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">
              <div className="space-y-4">
                <p>
                  <strong className="text-purple-700 font-bold">Evocabank</strong>-ը Dalma Garden Mall-ի հետ համատեղ ներկայացնում է <strong className="text-purple-700 font-bold">Dalma Gift Card</strong>-ը:
                </p>
                <p>
                  21-րդ դարում տոներին Gift քարտ նվիրելը նորաձև է դարձել: Դու որոշում՝ որքան գումար տալ, նրանք որոշում՝ որտեղ ծախսել:
                  <br />
                  <strong className="text-purple-700 font-bold">Dalma Gift Card</strong>-ը նվերի իդեալական տարբերակ է, որը համապատասխանում է նվեր ընտրելու քո բոլոր պահանջներին: Ընտրիր միայն քարտի գումարի չափը՝ 10,000-2,000,000 ՀՀ դրամի սահմաններում:
                </p>
                <p>
                  Քարտը հնարավորություն է տալիս գնումներ կատարել Dalma Garden Mall-ի խանութ-սրահների, սննդի, սպասարկման և ժամանցի բոլոր կետերում: Այն նախատեսված է բացառապես անկանխիկ տարբերակով գնումներ կատարելու համար քարտի ձեռքբերման օրվանից սկսած 6 ամսվա ընթացքում:
                </p>
              </div>

              {/* Ինչպես ձեռք բերել Dalma Gift Card-ը */}
              <div className="pt-6 border-t border-gray-100 space-y-4">
                <h3 className="text-purple-700 font-bold text-lg">
                  Ինչպե՞ս ձեռք բերել Dalma Gift Card-ը.
                </h3>
                <p>
                  <strong className="text-purple-700 font-bold">Dalma Gift Card</strong> կարելի է ձեռք բերել <strong className="text-purple-700 font-bold">Dalma Garden Mall</strong>-ի ինֆոկետից կամ <strong className="text-purple-700 font-bold">Evocabank</strong>-ի մասնաճյուղերից (բացառությամբ՝ Էրեբունի, Հանրապետության և Yerevan Mall մասնաճյուղերի)՝ ներկայացնելով անձնագիր կամ ID քարտ: Քարտը տրամադրվում է հենց տեղում՝ նորաոճ փաթեթավորմամբ:
                </p>
                <p>
                  Նվեր քարտը կարող ես պատվիրել նաև օնլայն՝ <strong className="text-purple-700 font-bold">Evocabank</strong>-ի կամ <strong className="text-purple-700 font-bold">Dalma Garden Mall</strong>-ի պաշտոնական կայքերի միջոցով՝ մուտքագրելով համապատասխան գումարը քարտին:
                </p>
                <p>
                  Մենք այն անվճար կմոտեցնենք <strong className="text-purple-700 font-bold">Evocabank</strong>-ի քո նախընտրած մասնաճյուղ կամ կառաքենք քո կողմից նշված հասցեով: Քարտը օնլայն պատվիրելու դեպքում, այն կտրամադրվի հաջորդ աշխատանքային օրը: Առաքման արժեքը՝ <strong className="text-purple-700 font-bold">1,000 ՀՀ դրամ</strong>:
                </p>
                <p className="pt-2">
                  Կարող ես քարտը պատվիրել նաև սկանավորելով QR կոդը.
                </p>

                {/* QR Code */}
                <div className="pt-2 flex justify-start">
                  <div className="p-3 bg-white border border-purple-100 rounded-2xl shadow-sm">
                    <img
                      src="https://www.evoca.am/file_manager/Gift%20Card/evoca_dalma_gift_card-1024.jpeg"
                      alt="QR Code"
                      className="w-32 h-32"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ՏՐԱՄԱԴՐՄԱՆ ՊԱՅՄԱՆՆԵՐԸ (1-ին նկարից) */}
          {activeTab === 'terms' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm text-gray-700">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold w-1/2">Քարտի տեսակ</td>
                    <td className="py-3 px-4">Arca Gift card</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="py-3 px-4 font-semibold">Քարտի արժույթ</td>
                    <td className="py-3 px-4">ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold align-top">Նվեր քարտի համալրման գումար</td>
                    <td className="py-3 px-4">
                      <div>Նվազագույնը՝ 10 000 ՀՀ դրամ</div>
                      <div className="mt-1">Առավելագույնը՝ 2 000 000 ՀՀ դրամ</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="py-3 px-4 font-semibold">Քարտի գործողության ժամկետ</td>
                    <td className="py-3 px-4">Քարտի թողարկման պահից 6 ամիս</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold">Dalma Gift քարտով կատարվող գործարքներ</td>
                    <td className="py-3 px-4">
                      «Դալմա Գարդեն Մոլ» ՍՊԸ կազմակերպության տարածքում տեղադրված POS-տերմինալներով միայն անկանխիկ վճարումներ կատարելու նպատակով: Քարտը համարվում է վավերական Քարտի դիմերեսին նշված ժամկետի սահմաններում:
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="py-3 px-4 font-semibold">Կանխիկացում</td>
                    <td className="py-3 px-4">Չի թույլատրվում</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold">Քարտային հաշվի չնվազող մնացորդ</td>
                    <td className="py-3 px-4">Չի սահմանվում</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="py-3 px-4 font-semibold">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք</td>
                    <td className="py-3 px-4">0%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold">Ապրանքների և ծառայությունների դիմաց անկանխիկ վճարման միջնորդավճար</td>
                    <td className="py-3 px-4">Անվճար</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="py-3 px-4 font-semibold">Քարտի գործողության կասեցում</td>
                    <td className="py-3 px-4">Անվճար</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold">Քարտի վերաթողարկում</td>
                    <td className="py-3 px-4">Չի վերաթողարկվում</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="py-3 px-4 font-semibold">Մնացորդի տեղափոխության միջնորդավճար⁽¹⁾</td>
                    <td className="py-3 px-4">4 900 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold">PIN ծածկագրի գեներացման հայտ</td>
                    <td className="py-3 px-4">1 000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="py-3 px-4 font-semibold">Քարտային հաշվի ամսական քաղվածքի տրամադրում</td>
                    <td className="py-3 px-4">Անվճար</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold">Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար</td>
                    <td className="py-3 px-4">Անվճար</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="py-3 px-4 font-semibold">Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում</td>
                    <td className="py-3 px-4">Անվճար</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold">Գերածախսի գծով տույժեր</td>
                    <td className="py-3 px-4">20% տարեկան</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 3: ՍՊԱՍԱՐԿՄԱՆ ՊԱՅՄԱՆՆԵՐԸ (2-րդ և 3-րդ նկարներից) */}
          {activeTab === 'service' && (
            <ul className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed list-disc pl-5">
              <li>Քարտը տրամադրվում է անվճար:</li>
              <li>
                Քարտի լիցքավորումն իրականացվում է Բանկի, ինչպես նաև այլ վճարային տերմինալների միջոցով, ընդ որում՝ Բանկի վճարային տերմինալների միջոցով լիցքավորում իրականացնելիս միջնորդավճար չի գանձվում:
              </li>
              <li>Քարտի մնացորդի նկատմամբ Բանկի կողմից տոկոսագումար չի վճարվում:</li>
              <li>
                Քարտի գործողության ժամկետը նշված է դրա դիմերեսին, այն կարող է օգտագործվել մինչև նշված ամսվա վերջին օրը ներառյալ:
              </li>
              <li>
                Քարտը նվեր ստացած անձը պարտավոր է Քարտի գործողության ժամկետում ներկայանալ Դալմա Գարդեն Մոլ՝ անձը հաստատող փաստաթղթով և Բանկի հետ կնքել Վճարային քարտի պատվիրման հայտ-պայմանագիր՝ ակտիվացնելով Քարտը:
              </li>
              <li>
                Քարտի գործողության ժամկետի ընթացքում Նվեր քարտ ստացած անձի կողմից Դալմա Գարդեն Մոլ չներկայանալու և Քարտը չակտիվացնելու դեպքում Քարտի գումարը ենթակա չէ վերադարձման:
              </li>
              <li>
                Ակտիվացված Քարտի գործողության ժամկետի ավարտից հետո Բանկը սկսում է հաշվարկել ամսական 10% (տասը տոկոս) սպասարկման վճար՝ ժամկետի ավարտի օրվա դրությամբ քարտային հաշվի մնացորդի նկատմամբ:
              </li>
              <li>
                Մնացորդային գումարը կարող է տրամադրվել բացառապես մնացորդի տեղափոխման միջոցով այլ Նվեր քարտի՝ Հաճախորդի /Նվեր Քարտը ստացած քարտապան/ դիմումի հիման վրա: Ընդ որում, մնացորդի տեղափոխում այլ Նվեր քարտի կատարվում է բացառապես արդեն իսկ Հաճախորդին Կցագրված և ժամկետանց/կորցրած/վնասված Նվեր քարտերի կամ չկցագրված, սակայն գործողության ժամկետի մեջ գտնվող քարտերի դեպքում, երբ հնարավոր է նույնականացնել Նվեր քարտը գնող հաճախորդին, ով նշված դեպքում իրավասու է ներկայացնել մնացորդի տեղափոխման դիմումը: Գործարքի համար Բանկի կողմից գանձվում է համապատասխան միջնորդավճար:
              </li>
              <li>
                Բանկը պատասխանատվություն չի կրում այն վնասի համար, որը Դիմումատուն կրել է Քարտը կորցնելու, Դիմումատուի կողմից Քարտն ու PIN կոդը այլ անձի փոխանցելու, ինչպես նաև Քարտի գործողության ժամկետի ավարտի հետևանքով:
              </li>
              <li>
                Բանկը պատասխանատվություն չի կրում իր հսկողության տիրույթից դուրս տեղի ունեցած իրադարձությունների համար:
              </li>
              <li>
                Դիմումատուն պարտավոր է Նվեր ստացողին պարզաբանել Նվեր քարտի օգտագործման կանոնները և սույն Պայմանները:
              </li>
              <li>
                Դիմումատուն տալիս է Բանկից գովազդային և տեղեկատվական հաղորդագրություններ ստանալու համաձայնություն:
              </li>
              <li>
                Բանկը և Դիմումատուն կրում են պատասխանատվություն ՀՀ օրենսդրությամբ սահմանված դեպքերում և կարգով:
              </li>
              <li>
                Բանկը և Դիմումատուն ժամանակավորապես ազատվում են պարտավորությունների կատարումից՝ ՀՀ օրենսդրությամբ որպես ֆորս-մաժորային ճանաչված իրադարձությունների առաջացման դեպքում և ընթացքում:
              </li>
              <li>
                Սույն պայմաններով չկարգավորվող հարցերը կարգավորվում են Բանկի ներքին այլ իրավական ակտերով:
              </li>
              <li>
                Դիմում-Պայմանագրի շրջանակներում առաջացած վեճերն ու տարաձայնությունները լուծվում են երկկողմանի համաձայնության սկզբունքով: Համաձայնության չգալու դեպքում, վեճերը լուծվում են ՀՀ օրենսդրությամբ սահմանված կարգով:
              </li>
            </ul>
          )}
        </main>

        {/* Ֆոնային Banner */}
        <section
          className="w-full py-20 px-6 bg-cover bg-center relative flex items-center justify-center text-center my-8"
          style={{
            backgroundImage: `url('https://www.evoca.am/images-cache/cards/1/16131362596808/1920x527.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-md leading-relaxed">
              Քարտը տրամադրվում է գեղեցիկ փաթեթավորմամբ՝ դառնալով ցանկալի նվեր յուրաքանչյուրի համար:
            </h2>
          </div>
        </section>

        {/* Այլ քարտեր Swiper */}
        <div className="max-w-6xl mx-auto px-6 pb-24 relative">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Այլ քարտեր</h2>

          <button className="other-prev absolute left-0 top-[60%] -translate-y-1/2 z-10 text-purple-600 hover:text-purple-800 transition cursor-pointer">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="other-next absolute right-0 top-[60%] -translate-y-1/2 z-10 text-purple-600 hover:text-purple-800 transition cursor-pointer">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="px-8">
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
                    to={card.link || card.path}
                    className="flex flex-col items-center text-center cursor-pointer group/card block"
                  >
                    <div className="w-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover/card:scale-[1.03]">
                      <img
                        src={card.imgUrl || card.image}
                        alt={card.title || card.name}
                        className="w-full h-auto object-contain drop-shadow-lg"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm md:text-base group-hover/card:text-purple-700 transition-colors">
                      {card.title || card.name}
                    </h3>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Banner Section */}
        <section className="w-full bg-[#6b21a8] text-white py-12 px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="w-full lg:w-1/2 flex items-center justify-center gap-4">
              <div className="relative w-full max-w-[420px]">
                <div className="relative rounded-t-xl border-[8px] border-b-0 border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden aspect-[16/10]">
                  <iframe
                    src="https://www.youtube.com/embed/KwAgMHEx8ys"
                    title="EvocaTOUCH Video"
                    className="w-full h-full border-0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="w-[108%] -translate-x-[4%] h-2.5 bg-neutral-700 rounded-b-lg border-t border-neutral-600 shadow-md"></div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-5">
              <h2 className="text-2xl md:text-3xl font-extrabold">Օնլայն և մոբայլ բանկինգ</h2>
              <p className="text-purple-100 text-xs md:text-sm leading-relaxed">
                Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է
                տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ։
              </p>

              <div>
                <button className="bg-white text-purple-900 px-6 py-2.5 rounded-full font-bold text-xs hover:bg-purple-50 transition shadow-md cursor-pointer">
                  Դառնալ հաճախորդ
                </button>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <div className="bg-white p-1 rounded-lg shadow-md shrink-0">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://www.evoca.am"
                    alt="QR Code"
                    className="w-16 h-16"
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
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#f8f8fa] text-[#2d2d2d] pt-10 pb-6 px-6 border-t border-gray-100 text-xs relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end pb-4 border-b border-gray-200 gap-4">
          <div className="text-gray-400 text-[11px]">
            Թարմացվել է` 31/08/2026 17:46
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
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
          <p className="max-w-2xl leading-normal">
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության,
            ինչպես նաև ռուսերեն և անգլերեն լեզուներով ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք
            առաջնորդվել հայերեն տարբերակով: Evocabank ՓԲԸ-ն պատասխանատվություն չի կրում իր
            ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստույգության և
            արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ
            կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
          </p>
          <div className="flex items-center gap-4 opacity-70">
            <span className="font-bold text-gray-500">fininfo</span>
            <span className="font-bold text-gray-500">abcfinance.am</span>
            <span className="font-bold text-gray-700 text-sm">arca</span>
          </div>
        </div>

        <div className="fixed bottom-4 right-4 z-50 flex items-center">
          <button className="bg-[#6b21a8] text-white font-bold text-xs px-4 py-2 rounded-l-full shadow-lg hover:bg-purple-800 transition cursor-pointer">
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

export default DalmaCardGift;