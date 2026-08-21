import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function TravelCardPage() {
  const [activeTab, setActiveTab] = useState('about');

  const cardsData = [
    {
      id: 1,
      name: "Arca Classic",
      brand: "arca",
      number: "1000 2345 6000 7890",
      style: "bg-gradient-to-br from-[#0a0a1a] via-[#1a1440] to-[#0a0a1a]",
      pattern: true,
    },
    {
      id: 2,
      name: "Visa Digital",
      brand: "VISA",
      number: "0.00 $  •  000",
      style: "bg-gradient-to-br from-[#5eead4] via-[#a78bfa] to-[#f472b6]",
      holo: true,
    },
    {
      id: 3,
      name: "4U.am Gift card",
      brand: "arca",
      number: "1000 2345 6000 7890",
      style: "bg-gradient-to-br from-white to-gray-100 border border-gray-200",
      light: true,
      logo4u: true,
    },
    {
      id: 4,
      name: "Evoca Visa Platinum",
      brand: "VISA",
      number: "",
      style: "bg-gradient-to-br from-black via-[#111] to-black",
      lines: true,
    },
    {
      id: 5,
      name: "Evoca Gift Card",
      brand: "arca",
      number: "1000 2345 6000 7890",
      style: "bg-gradient-to-br from-black via-[#2e1065] to-[#6d28d9]",
      stacked: true,
    },
    {
      id: 6,
      name: "Rio Gift Card",
      brand: "arca",
      number: "1000 2345 6000 7890",
      style: "bg-gradient-to-br from-gray-50 to-white border border-gray-200",
      light: true,
      triangles: true,
    },
    {
      id: 7,
      name: "Digital Gift Card",
      brand: "mastercard",
      number: "**** 1234",
      style: "bg-gradient-to-br from-black via-[#1a1a2e] to-black",
      script: true,
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      
      {/* Sub Header Navigation */}
      <div className="bg-[#6b21a8] text-white px-8 py-3 flex items-center gap-8 text-sm font-semibold">
        <span className="bg-[#581c87] px-4 py-1 rounded cursor-pointer">Քարտեր</span>
        <span className="hover:opacity-80 cursor-pointer">Քարտերի տրամադրում և սպասարկում</span>
        <span className="hover:opacity-80 cursor-pointer">Սոցիալական ապահովության վճարային քարտեր</span>
        <span className="hover:opacity-80 cursor-pointer">Evoca Benefits</span>
      </div>

      {/* Hero Section */}
      <div className="bg-gray-100 px-8 md:px-20 py-12 flex flex-col md:flex-row items-center justify-between relative rounded-bl-[80px]">
        <div className="max-w-xl">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Evoca Travel Card</h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Սիրո՞ւմ ես ճամփորդել․ ուրեմն ժամանակն է ձեռք բերելու Evoca Mastercard Travel Card, որը կդառնա քո ճամփորդական անբաժան ընկերը։
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <img 
            src="https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg" 
            alt="Evoca Travel Card" 
            className="w-80 md:w-96 object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="px-8 md:px-20 py-4 text-xs text-gray-500 flex items-center gap-2">
        <Link to="/" className="hover:underline">Վերադառնալ</Link>
        <span>›</span>
        <span>Անհատ</span>
        <span>›</span>
        <span>Քարտեր</span>
        <span>›</span>
        <span>Mastercard</span>
        <span>›</span>
        <span className="font-bold text-gray-800">Evoca Travel Card</span>
      </div>

      {/* Main Content & Tabs */}
      <div className="px-8 md:px-20 py-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div className="border-b border-gray-200 flex gap-8 mb-6">
            <button 
              onClick={() => setActiveTab('about')}
              className={`pb-3 font-bold text-sm transition-colors ${activeTab === 'about' ? 'border-b-2 border-purple-600 text-purple-700' : 'text-gray-500'}`}
            >
              Քարտի մասին
            </button>
            <button 
              onClick={() => setActiveTab('rates')}
              className={`pb-3 font-bold text-sm transition-colors ${activeTab === 'rates' ? 'border-b-2 border-purple-600 text-purple-700' : 'text-gray-500'}`}
            >
              Սակագներ և դրույթներ
            </button>
          </div>

          {activeTab === 'about' ? (
            <div className="text-sm text-gray-700 space-y-4 leading-relaxed">
              <p>Որտե՞ղ ես ուզում լինել վաղը․ Փարիզո՞ւմ, Դուբայո՞ւմ, թե՞ քեզ համար նոր, արկածներով լի վայրում։</p>
              <p>
                <strong className="text-purple-700">Evocabank</strong>-ը ներկայացնում է <strong className="text-purple-700">Evoca Travel Card</strong>՝ ճամփորդական քարտ, որը կդառնա քո անփոխարինելի ուղեկիցը յուրաքանչյուր ճամփորդության ժամանակ։
              </p>
              <p>
                Ձեռք բերելով <strong className="text-purple-700">Evoca Travel Card</strong>՝ դու դառնում ես <strong className="text-purple-700">Evocabank</strong>-ի պրեմիում քարտապան և ստանում մի շարք արտոնություններ ոչ միայն Հայաստանում, այլև ամբողջ աշխարհում՝ միջազգային ճամփորդական ապահովագրություն, կոնսիերժ ծառայություն, անվճար մուտք օդանավակայանների բիզնես սպասասրահներ, Fast track, արտարժույթի արտոնյալ կուրս և այլն։
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm text-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th colSpan="2" className="p-3 font-bold text-gray-800 text-sm text-center">
                      Evoca Master Card Travel
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-700">
                  <tr>
                    <td className="p-3 font-medium">Քարտի տրամադրում</td>
                    <td className="p-3">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Քարտի տարեկան սպասարկում</td>
                    <td className="p-3">16,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Քարտի տարեկան սպասարկում օտարերկրյա քաղաքացիների համար</td>
                    <td className="p-3">45,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Կից քարտի տրամադրում</td>
                    <td className="p-3">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Կից քարտի տարեկան սպասարկում (որպես կից քարտ տրամադրվում է Mastercard Gold)</td>
                    <td className="p-3">10,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Քարտային հաշվի չնվազող մնացորդ</td>
                    <td className="p-3">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք</td>
                    <td className="p-3">0</td>
                  </tr>
                  {/* Կանխիկացման սակագներ */}
                  <tr className="bg-gray-50">
                    <td rowSpan="3" className="p-3 font-medium border-r border-gray-200">
                      Քարտերով կանխիկի տրամադրում Բանկի ATM-ով և POS-ով
                    </td>
                    <td className="p-3">ՀՀ դրամ՝ 0.5%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3">ԱՄՆ դոլար և Եվրո՝ 1%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3">Այլ արտարժույթ՝ 1%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">
                      Քարտերով կանխիկի տրամադրում «ԱրՔա» համակարգի անդամ հանդիսացող կամ H2H կապուղով «ԱրՔա» համակարգին միացած ՀՀ բանկերի ATM-ներով և POS-տերմինալներով
                    </td>
                    <td className="p-3">1%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">
                      Քարտերով կանխիկի տրամադրում օտարերկրյա բանկերի և «ԱրՔա» համակարգի անդամ չհանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով
                    </td>
                    <td className="p-3">1% min 1,500 ՀՀ դրամ</td>
                  </tr>
                  {/* SMS / Ծանուցումներ */}
                  <tr>
                    <td className="p-3 font-medium">Գործարքի վերաբերյալ SMS հաղորդագրությունների ստացում</td>
                    <td className="p-3">
                      Մինչև 5,000 ՀՀ դրամ՝ 20 ՀՀ դրամ<br/>
                      5,000 ՀՀ դրամը գերազանցող՝ 0
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Գործարքի վերաբերյալ հաղորդագրությունների ստացում Evoca Touch հավելվածով</td>
                    <td className="p-3 font-semibold text-green-600">Անվճար</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Գերածախսի գծով տույժեր</td>
                    <td className="p-3">20 % տարեկան</td>
                  </tr>
                  {/* Փոխանցումներ */}
                  <tr className="bg-gray-50">
                    <td colSpan="2" className="p-2 font-bold text-gray-800">Քարտից քարտ փոխանցումներ Բանկոմատների միջոցով</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Բանկի վճարային քարտին</td>
                    <td className="p-3">0.3%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">«ԱրՔա» համակարգի այլ բանկերի քարտերին</td>
                    <td className="p-3">0.5%</td>
                  </tr>
                  {/* Սահմանաչափի փոփոխություններ */}
                  <tr>
                    <td className="p-3 font-medium">Կանխիկացման սահմանաչափի փոփոխություն մինչև 5մլն ՀՀ դրամի դեպքում</td>
                    <td className="p-3">2,900 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Կանխիկացման սահմանաչափի փոփոխություն 5մլն ՀՀ դրամ և ավելի դեպքում</td>
                    <td className="p-3">4,900 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Քարտով կատարված գործարքների բողոքարկման հայտ</td>
                    <td className="p-3">5,000 ՀՀ դրամ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Right Column - Stats Widget */}
        <div className="lg:col-span-5 bg-white border border-gray-100 shadow-xl rounded-2xl p-6 space-y-6 self-start">
          <div className="flex gap-2">
            <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">֏</span>
            <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">$</span>
            <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">€</span>
          </div>

          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <span className="text-xs text-gray-400">Մինչև</span>
              <p className="text-2xl font-black text-purple-700">1.5%</p>
            </div>
            <p className="text-xs text-gray-600 max-w-[200px]">Cashback արտասահմանում իրականացրած վճարումների համար</p>
          </div>

          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <span className="text-xs text-gray-400">Անվճար</span>
              <p className="text-2xl font-black text-purple-700">6 մուտք</p>
            </div>
            <p className="text-xs text-gray-600 max-w-[200px]">Lounge Key սրահներ քեզ և հյուրերիդ համար</p>
          </div>

          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <span className="text-xs text-gray-400">Անվճար</span>
              <p className="text-2xl font-black text-purple-700">6 անգամ</p>
            </div>
            <p className="text-xs text-gray-600 max-w-[200px]">Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-2xl font-black text-purple-700">16.000֏</p>
            <p className="text-xs text-gray-600 max-w-[200px]">Քարտի տարեկան սպասարկում</p>
          </div>
        </div>
      </div>

      {/* Benefits Section (Քարտի առավելությունները) */}
      <div className="px-8 md:px-20 py-12 border-t border-gray-100">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-10">Քարտի առավելությունները</h2>

        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-3xl font-bold shrink-0">
              ★
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900">Անվճար մուտք Lounge Key սրահներ</h3>
              <p className="text-sm text-gray-600">
                Տարեկան 6 անվճար մուտք ավելի քան 1,200 օդանավակայանի Lounge Key սրահներ քեզ և հյուրերիդ համար։
              </p>
              <ul className="list-disc list-inside text-xs text-gray-600 space-y-1 pt-2">
                <li>Գտնել բիզնես սրահը, մուտք գործելիս նշել, որ օգտվում եք Lounge Key սրահների ծառայություններից,</li>
                <li>Տեղադրել քարտը սարքում կամ հավելվածում և գեներացված QR կոդի միջոցով անցնել նույնականացում,</li>
                <li>Վայելել բիզնես սրահի առավելությունները:</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-2xl font-bold shrink-0">
              🚀
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900">Fast track</h3>
              <p className="text-sm text-gray-600">
                Հնարավորություն անցնելու անվտանգության, միգրացիոն, մաքսային ստուգման գործընթացները 100-ից ավելի միջազգային օդանավակայանում:
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-2xl font-bold shrink-0">
              ♥
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900">Միջազգային ապահովագրություն</h3>
              <p className="text-sm text-gray-600">
                30 օր 1 տարվա ընթացքում, բազմաթիվ ուղևորությունների համար:
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-2xl shrink-0">
              👤
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900">Կոնսիերժ ծառայություն</h3>
              <p className="text-sm text-gray-600">
                Անձնական օգնական, որն աշխարհի որ կետում էլ լինեք, օրվա որ ժամին էլ անհրաժեշտ լինի, պատրաստ է 24/7 տեղեկություն տրամադրել:
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-2xl font-bold shrink-0">
              %
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900">Cashback</h3>
              <p className="text-sm text-gray-600">
                1.5% cashback արտասահմանում հյուրանոց, ավիատոմս, տուրիստական գործակալություններ, ավտովարձույթ իրականացնելու համար:
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Հատուկ առաջարկ */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-b border-t border-gray-100 flex flex-col md:flex-row items-start md:items-center gap-8">
        <div className="w-16 h-16 bg-[#7c3aed] rounded-2xl flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold shadow-lg">
          %
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">Հատուկ առաջարկ</h2>
          <p className="text-gray-600 mb-2 leading-relaxed">
            Պարբերաբար թարմացվող զեղչեր, ակցիաներ և այլ արտոնություններ Evocabank-ի և Mastercard-ի կողմից:
          </p>
          <p className="text-gray-600">
            Առաջարկներին կարող եք ծանոթանալ հղմամբ՝{" "}
            <a 
              href="https://benefits.evoca.am" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#7c3aed] font-semibold underline hover:text-purple-800"
            >
              benefits.evoca.am
            </a>
          </p>
        </div>
      </section>

      {/* 2. Այլ քարտեր (Swiper Slider) */}
      <section className="max-w-6xl mx-auto px-6 py-12 relative">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Այլ քարտեր</h2>

        <div className="relative group">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: ".cards-next",
              prevEl: ".cards-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {cardsData.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="flex flex-col items-center text-center cursor-pointer group/card p-2">
                  <div className="w-full h-44 flex items-center justify-center mb-4 transition-transform duration-300 group-hover/card:scale-105">
                    <div
                      className={`relative w-64 h-40 rounded-2xl shadow-lg overflow-hidden p-4 flex flex-col justify-between ${card.style}`}
                    >
                      {/* Brand logo */}
                      <div className="flex justify-between items-start">
                        <span
                          className={`text-xs font-bold tracking-wide ${
                            card.light ? "text-gray-800" : "text-white"
                          }`}
                        >
                          evoca
                        </span>
                        {card.brand === "VISA" && (
                          <span className="text-white italic font-black text-sm">VISA</span>
                        )}
                        {card.brand === "arca" && (
                          <span
                            className={`font-black text-sm ${
                              card.light ? "text-purple-700" : "text-lime-400"
                            }`}
                          >
                            arca
                          </span>
                        )}
                        {card.brand === "mastercard" && (
                          <div className="flex -space-x-2">
                            <span className="w-4 h-4 rounded-full bg-red-500 inline-block"></span>
                            <span className="w-4 h-4 rounded-full bg-orange-400 inline-block opacity-90"></span>
                          </div>
                        )}
                      </div>

                      {/* Decorative pattern layer */}
                      {card.pattern && (
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_60%)]" />
                      )}
                      {card.holo && (
                        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(120deg,rgba(255,255,255,0.6),transparent_40%,rgba(255,255,255,0.3)_70%)]" />
                      )}
                      {card.lines && (
                        <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.15)_0px,rgba(255,255,255,0.15)_1px,transparent_1px,transparent_10px)]" />
                      )}
                      {card.triangles && (
                        <div className="absolute top-2 right-2 w-10 h-10 bg-gradient-to-br from-pink-400 via-blue-400 to-orange-300 opacity-70 [clip-path:polygon(0_0,100%_0,100%_100%)]" />
                      )}
                      {card.logo4u && (
                        <div className="absolute top-3 left-3 text-[10px] font-black text-blue-600">
                          4U<span className="text-gray-400">.am</span>
                        </div>
                      )}
                      {card.stacked && (
                        <div className="absolute -bottom-4 -right-4 w-24 h-16 rounded-xl bg-purple-700/60 rotate-6" />
                      )}
                      {card.script && (
                        <p className="text-white/90 italic text-lg font-light leading-none">
                          Uber Byte
                        </p>
                      )}

                      {/* Card number */}
                      <p
                        className={`relative z-10 tracking-widest text-sm font-mono ${
                          card.light ? "text-gray-700" : "text-white/90"
                        }`}
                      >
                        {card.number}
                      </p>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base">
                    {card.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="cards-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 text-2xl text-[#7c3aed] font-bold hover:scale-125 transition cursor-pointer bg-white rounded-full p-1 shadow-md">
            &larr;
          </button>
          <button className="cards-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 text-2xl text-[#7c3aed] font-bold hover:scale-125 transition cursor-pointer bg-white rounded-full p-1 shadow-md">
            &rarr;
          </button>
        </div>
      </section>

      {/* 3. Օնլայն և մոբայլ բանկինգ Banner */}
      <section className="w-full bg-[#6b21a8] text-white py-12 px-6 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white rounded-full opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-10 h-10 rounded-full bg-purple-400/20 blur-sm pointer-events-none"></div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="w-full lg:w-1/2 flex items-center justify-center gap-4">
            {/* Laptop mockup */}
            <div className="relative">
              <div className="w-[380px] max-w-[80vw] rounded-t-xl border-[8px] border-b-0 border-neutral-800 bg-neutral-800">
                <div className="bg-neutral-100 aspect-[16/10] overflow-hidden flex rounded-t-sm">
                  <div className="flex-1 bg-[#EFEDF3] flex flex-col items-center justify-center gap-2">
                    <span className="text-3xl">🏠</span>
                    <span className="text-2xl font-black text-purple-800">%</span>
                  </div>
                  <div className="flex-1 bg-[#D9CFF2] flex flex-col items-center justify-center relative">
                    <div className="w-14 h-8 rounded-md bg-gradient-to-br from-purple-700 to-purple-900 shadow-md -rotate-6"></div>
                    <div className="w-14 h-8 rounded-md bg-gradient-to-br from-amber-300 to-amber-500 shadow-md rotate-6 -mt-2 ml-5"></div>
                    <div className="absolute w-9 h-9 rounded-full bg-neutral-500/40 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-cyan-300"></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-[#EFEDF3] flex flex-col items-center justify-center gap-1">
                    <svg viewBox="0 0 60 40" className="w-14 h-9 stroke-purple-700 fill-none stroke-[3]">
                      <polyline points="2,35 18,20 30,28 45,10 58,4" />
                      <polygon points="46,4 58,4 58,15" className="fill-purple-700 stroke-none" />
                    </svg>
                    <div className="flex gap-1 items-end">
                      <div className="w-1.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-1.5 h-4 rounded-full bg-yellow-400"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[420px] max-w-[88vw] -translate-x-[20px] h-2.5 bg-neutral-700 rounded-b-2xl"></div>
            </div>

            {/* Phone mockup */}
            <div className="hidden md:block relative -ml-8 mb-1">
              <div className="w-32 aspect-[9/19] rounded-[1.6rem] border-[5px] border-neutral-900 bg-gradient-to-b from-indigo-700 via-purple-700 to-fuchsia-700 relative overflow-hidden shadow-xl">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-11 h-2.5 bg-neutral-900 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-extrabold text-base tracking-wide">evoca</span>
                </div>
                <div className="absolute top-8 left-5 w-2.5 h-2.5 rounded-full bg-white/60"></div>
                <div className="absolute bottom-14 left-4 w-3 h-3 rounded-full bg-white/40"></div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold">Օնլայն և մոբայլ բանկինգ</h2>
            <p className="text-purple-100 text-sm md:text-base leading-relaxed">
              Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է
              տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ։
            </p>

            <Link
              to="/evoca-online"
              className="inline-block bg-white text-purple-900 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition shadow-lg text-center"
            >
              Դառնալ հաճախորդ
            </Link>
          </div>
        </div>
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