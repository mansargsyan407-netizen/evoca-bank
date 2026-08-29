import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Swiper component & modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper CSS styles
import "swiper/css";
import "swiper/css/navigation";

// Քարտերի տվյալների զանգվածը (cardsData)
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
    name: "Visa Vision",
    image: "https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png",
  },
  {
    id: 8,
    name: "UnionPay Business Platinum",
    image: "https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png",
  },
  {
    id: 9,
    name: "Mastercard World Digital",
    image: "https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png",
  },
  {
    id: 10,
    name: "MyLer Gift Card",
    image: "https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png",
  },
  {
    id: 11,
    name: "UnionPay Gold",
    image: "https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png",
  },
  {
    id: 12,
    name: "4U.am Gift card",
    image: "https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png",
  },
  {
    id: 13,
    name: "Mastercard Gold",
    image: "https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png",
  },
  {
    id: 14,
    name: "Mastercard Standard",
    image: "https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png",
  },
  {
    id: 15,
    name: "Visa Digital",
    image: "https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png",
  },
  {
    id: 16,
    name: "Visa Classic",
    image: "https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png",
  },
  {
    id: 17,
    name: "Arca Classic",
    image: "https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png",
  },
  {
    id: 18,
    name: "Visa Business",
    image: "https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png",
  },
  {
    id: 19,
    name: "Dalma Gift Card",
    image: "https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png",
  },
  {
    id: 20,
    name: "Rio Gift Card",
    image: "https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png",
  },
  {
    id: 21,
    name: "Visa Gold",
    image: "https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png",
  },
];

export default function UnionPayGoldPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about");
  const [activeCurrency, setActiveCurrency] = useState("AMD");

  return (
    <div className="w-full bg-[#fbfafd] text-gray-800 font-sans min-h-screen flex flex-col relative selection:bg-purple-600 selection:text-white">
      {/* TOP HEADER / NAVBAR */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="bg-[#6a0dad] text-white text-xs font-semibold">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center gap-6 py-2.5 overflow-x-auto">
            <span className="bg-[#52098b] px-4 py-1.5 rounded-md cursor-pointer whitespace-nowrap">
              Քարտեր
            </span>
            <span className="hover:text-purple-200 cursor-pointer whitespace-nowrap">
              Քարտերի տրամադրում և սպասարկում
            </span>
            <span className="hover:text-purple-200 cursor-pointer whitespace-nowrap">
              Սոցիալական ապահովության վճարային քարտեր
            </span>
            <span className="hover:text-purple-200 cursor-pointer whitespace-nowrap">
              Evoca Benefits
            </span>
          </div>
        </div>
      </header>

      {/* HERO BANNER SECTION */}
      <section className="bg-[#f7f5fa] relative overflow-hidden py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
              UnionPay Gold
            </h1>
            <p className="text-sm md:text-base text-gray-600 font-medium">
              Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը:
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img
              src="https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png"
              alt="UnionPay Gold"
            />
          </div>
        </div>
      </section>

      {/* BREADCRUMB & BACK BUTTON */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 w-full flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 border border-gray-300 bg-white px-5 py-2 rounded-full text-xs font-bold text-gray-700 hover:bg-gray-50 transition shadow-sm cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Վերադառնալ
        </button>

        <div className="text-[11px] text-gray-400 flex items-center gap-1.5 flex-wrap font-medium">
          <span className="hover:text-gray-600 cursor-pointer">🏠</span>
          <span>›</span>
          <span className="hover:text-gray-600 cursor-pointer">Անհատ</span>
          <span>›</span>
          <span className="hover:text-gray-600 cursor-pointer">Քարտեր</span>
          <span>›</span>
          <span className="hover:text-gray-600 cursor-pointer">Քարտեր</span>
          <span>›</span>
          <span className="hover:text-gray-600 cursor-pointer">Պրեմիում</span>
          <span>›</span>
          <span className="text-gray-600 font-semibold">UnionPay Gold</span>
        </div>
      </div>

      {/* MAIN CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-4 w-full flex-grow">
        {/* TABS */}
        <div className="border-b border-gray-200 flex gap-8 mb-8 text-sm font-bold text-gray-500">
          <button
            onClick={() => setActiveTab("about")}
            className={`pb-3 transition cursor-pointer ${
              activeTab === "about"
                ? "text-[#6a0dad] border-b-2 border-[#6a0dad]"
                : "hover:text-gray-800"
            }`}
          >
            Քարտի մասին
          </button>
          <button
            onClick={() => setActiveTab("rates")}
            className={`pb-3 transition cursor-pointer ${
              activeTab === "rates"
                ? "text-[#6a0dad] border-b-2 border-[#6a0dad]"
                : "hover:text-gray-800"
            }`}
          >
            Սակագներ և դրույթներ
          </button>
        </div>

        {/* TAB CONTENT */}
        {activeTab === "about" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6 text-gray-700 text-sm leading-relaxed">
              <p>
                Աշխարհում ավելի քան 240 միլիոն մարդ նախընտրում է UnionPay վճարային
                համակարգի քարտերը․ այսօր այդ հնարավորությունն ունես նաև դու։
              </p>
              <p>
                <strong className="text-[#6a0dad]">Evoca UnionPay Gold</strong>{" "}
                քարտն ունի մի շարք առավելություններ։ Քարտն ապահովված է վերջին
                գերժամանակակից լուծումներով, որը թույլ է տալիս անհպում ու անվտանգ
                վճարումներ կատարել ամբողջ աշխարհում։
              </p>
              <p>
                <strong className="text-[#6a0dad]">EvocaTOUCH</strong> հավելվածով
                կարող ես կառավարել քո ֆինանսները և 24/7 ունենալ քո գործարքներին
                վերաբերող ցանկացած ինֆորմացիայի հասանելիություն։
              </p>
              <p>
                UnionPay Gold քարտ կարող են պատվիրել ֆիզիկական անձինք՝{" "}
                <strong className="text-[#6a0dad]">EvocaTOUCH</strong>{" "}
                հավելվածով, և evoca.am կայքով, իսկ դրանց առաքումը կլինի{" "}
                <strong className="text-[#6a0dad]">անվճար</strong>։ Չմոռանանք
                մեր ավանդական տարբերակի մասին․ քարտերը կարելի է նաև ձեռք բերել՝
                մոտենալով Բանկի ցանկացած մասնաճյուղ։Բացահայտիր քո քարտի
                բենեֆիթները՝ բացառիկ զեղչեր և առաջարկներ աշխարհի տարբեր
                կետերում։ Մանրամասներին ծանոթացիր այստեղ։
              </p>
            </div>

            <div className="lg:col-span-5 bg-white border border-purple-100 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="flex gap-2">
                {["֏", "$", "€"].map((curr, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCurrency(curr)}
                    className={`w-9 h-9 rounded-full text-sm font-bold flex items-center justify-center transition cursor-pointer ${
                      activeCurrency === curr
                        ? "bg-[#6a0dad] text-white shadow-md"
                        : "bg-purple-50 text-[#6a0dad] hover:bg-purple-100"
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>

              <div className="space-y-5 pt-2">
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <span className="text-2xl font-black text-[#6a0dad]">
                    0.5%
                  </span>
                  <span className="text-xs font-semibold text-gray-600">
                    Կանխիկացում
                  </span>
                </div>

                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <span className="text-2xl font-black text-[#6a0dad]">
                    5 տարի
                  </span>
                  <span className="text-xs font-semibold text-gray-600">
                    Քարտի ժամկետ
                  </span>
                </div>

                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <span className="text-2xl font-black text-[#6a0dad]">
                    15000 ֏
                  </span>
                  <span className="text-xs font-semibold text-gray-600">
                    Տարեկան սպասարկման վճար
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-black text-[#6a0dad]">
                    Ամենուր
                  </span>
                  <span className="text-xs font-semibold text-gray-600">
                    Կիրառություն
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* RATES AND FEES TAB */}
        {activeTab === "rates" && (
          <div className="w-full overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-sm my-4">
            <h3 className="text-base font-bold text-gray-800 p-6 border-b border-gray-100 bg-gray-50/50">
              Union Pay International վճարային համակարգի թողարկման և սպասարկման
              սակագներ
            </h3>

            <table className="w-full text-left text-xs text-gray-700 border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/80 font-bold text-gray-900">
                  <th className="p-4 w-1/2 min-w-[300px]">
                    Մատուցվող ծառայություններ
                  </th>
                  <th className="p-4 w-1/4 min-w-[180px]">UPI GOLD</th>
                  <th className="p-4 w-1/4 min-w-[180px]">
                    UPI BUSINESS PLATINUM
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-4 font-semibold">Քարտի արժույթ</td>
                  <td className="p-4">ՀՀ դրամ, ԱՄՆ դոլար, Եվրո</td>
                  <td className="p-4">ՀՀ դրամ, ԱՄՆ դոլար, Եվրո</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">
                    Քարտի գործողության ժամկետ
                  </td>
                  <td className="p-4">5 տարի</td>
                  <td className="p-4">5 տարի</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Քարտի տրամադրում</td>
                  <td className="p-4">0</td>
                  <td className="p-4">0</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">
                    Քարտի տարեկան սպասարկում
                  </td>
                  <td className="p-4">15,000 ՀՀ դրամ</td>
                  <td className="p-4">15,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">
                    24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ
                    ռեզիդենտ քաղաքացիների համար․
                    <br />
                    <span className="font-normal text-gray-500">
                      UPI Business Platinum քարտի դեպքում օտարերկրյա
                      քաղաքացիություն ունեցող Հայաստանում գրանցված անհատ
                      ձեռնարկատերերի և իրավաբանական անձանց քարտի տարեկան
                      սպասարկում․
                    </span>
                  </td>
                  <td className="p-4 font-medium">30,000 ՀՀ դրամ</td>
                  <td className="p-4 font-medium">30,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Կից քարտի տրամադրում</td>
                  <td className="p-4">0</td>
                  <td className="p-4">0</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">
                    Կից քարտի տարեկան սպասարկում
                  </td>
                  <td className="p-4">7,500 ՀՀ դրամ</td>
                  <td className="p-4">7,500 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">
                    Քարտային հաշվի չնվազող մնացորդ
                  </td>
                  <td className="p-4">Չի կիրառվում</td>
                  <td className="p-4">Չի կիրառվում</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">
                    Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան %
                  </td>
                  <td className="p-4">0%</td>
                  <td className="p-4">0%</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">
                    Քարտերով կանխիկի տրամադրում Բանկի ATM-ով
                  </td>
                  <td className="p-4">
                    Ամսական մինչև 2,000,000 ՀՀ դրամ (ներառյալ)՝{" "}
                    <strong>Անվճար</strong>,
                    <br />
                    2,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ՝{" "}
                    <strong>0.2%</strong>
                  </td>
                  <td className="p-4 font-medium">0.5%</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">
                    Քարտերով կանխիկի տրամադրում Բանկի POS-տերմինալներով և
                    քարտային հաշվից (ՀՀ դրամ և արտարժույթ)
                  </td>
                  <td className="p-4">1%</td>
                  <td className="p-4">1%</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">
                    Քարտերով կանխիկի տրամադրում «ԱրՔա» համակարգի անդամ հանդիսացող
                    ՀՀ բանկերի ATM-ներով և POS-տերմինալներով
                  </td>
                  <td className="p-4">1%</td>
                  <td className="p-4">1%</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">
                    Քարտերով կանխիկի տրամադրում օտարերկրյա
                  </td>
                  <td className="p-4">1.5% min 2,000 ՀՀ դրամ</td>
                  <td className="p-4">1.5% min 2,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">
                    Բանկոմատի միջոցով կանխիկացման մեկ գործարքի առավելագույն
                    գումարային սահմանաչափ
                  </td>
                  <td className="p-4 col-span-2" colSpan={2}>
                    Նվազագույնը 300,000 ՀՀ դրամ (կախված է ԱԳՄ-ից)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">
                    Առևտրի կետերում Բանկի և այլ բանկերի POS տերմինալներով
                    անանխիկ գործարքների իրականացում
                  </td>
                  <td className="p-4">0</td>
                  <td className="p-4">0</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Քարտի գործողության կասեցում</td>
                  <td className="p-4">0</td>
                  <td className="p-4">0</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">
                    Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV
                    մուտքագրման դեպքում)
                  </td>
                  <td className="p-4">1,000 ՀՀ դրամ</td>
                  <td className="p-4">1,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">
                    Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում
                  </td>
                  <td className="p-4">0</td>
                  <td className="p-4">0</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">
                    Քարտի վերաթողարկում կորստի, վնասվելու կամ PIN ծածկագրի
                    կորստի դեպքում
                  </td>
                  <td className="p-4">7,500 ՀՀ դրամ</td>
                  <td className="p-4">7,500 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">
                    PIN ծածկագրի գեներացման հայտ
                  </td>
                  <td className="p-4">1,000 ՀՀ դրամ</td>
                  <td className="p-4">1,000 ՀՀ դրամ</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>
        {/* GOLD CALL-TO-ACTION BANNER */}
   <div>

         <img src=" https://www.evoca.am/images-cache/cards/1/17250055027908/1920x527.png" alt="" />
   </div>

      {/* 2. Այլ քարտեր (Swiper Slider) */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-14 w-full">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-gray-900">
          Այլ քարտեր
        </h2>

        <div className="relative">
          {/* Prev / Next - simple chevrons */}
          <button
            className="cards-prev absolute -left-2 md:-left-8 top-[35%] -translate-y-1/2 z-20
                       text-3xl font-bold text-[#7c3aed] hover:scale-125 transition cursor-pointer
                       w-8 h-8 flex items-center justify-center"
            aria-label="Նախորդ"
          >
            ‹
          </button>
          <button
            className="cards-next absolute -right-2 md:-right-8 top-[35%] -translate-y-1/2 z-20
                       text-3xl font-bold text-[#7c3aed] hover:scale-125 transition cursor-pointer
                       w-8 h-8 flex items-center justify-center"
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

      {/* 3. Օնլայն և մոբայլ բանկինգ Banner */}
      <section className="w-full bg-[#6b21a8] text-white py-12 px-6 relative overflow-hidden">
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
                  <img
                    src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg"
                    alt="EvocaTOUCH Mobile App"
                  />
                </div>
                <div className="absolute top-8 left-4 w-2 h-2 rounded-full bg-white/60"></div>
                <div className="absolute bottom-12 left-3 w-2.5 h-2.5 rounded-full bg-white/40"></div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Օնլայն և մոբայլ բանկինգ
            </h2>
            <p className="text-purple-100 text-sm md:text-base leading-relaxed">
              Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է,
              որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ
              կիրառմամբ։
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

      {/* Footer */}
      <footer className="w-full bg-white text-gray-700 py-12 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-extrabold text-[#7c3aed]">
              evocaBANK
            </h3>
            <p className="text-xs text-gray-500">
              ք. Երևան, 0010, Հանրապետության 44/2
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական
              բանկի կողմից
            </p>
            <p className="text-[11px] text-gray-400">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-gray-900 mb-3 text-sm">
              Բանկի մասին
            </h4>
            <p className="hover:text-purple-700 cursor-pointer">Մեր մասին</p>
            <p className="hover:text-purple-700 cursor-pointer">Ղեկավարություն</p>
            <p className="hover:text-purple-700 cursor-pointer">Բաժնետերեր</p>
            <p className="hover:text-purple-700 cursor-pointer">
              Հաշվետվություններ
            </p>
            <p className="hover:text-purple-700 cursor-pointer">
              Իրավական ակտեր
            </p>
            <p className="hover:text-purple-700 cursor-pointer">Սակագներ</p>
            <p className="hover:text-purple-700 cursor-pointer">Օտարվող գույք</p>
            <p className="hover:text-purple-700 cursor-pointer">
              Կառուցապատողներ
            </p>
            <p className="hover:text-purple-700 cursor-pointer">
              Գործընկեր ավտոսրահներ
            </p>
            <p className="hover:text-purple-700 cursor-pointer">
              Սակագների արխիվ
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-gray-900 mb-3 text-sm">
              Օգտակար հղումներ
            </h4>
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
            <h4 className="font-bold text-gray-900 mb-3 text-sm">
              Այլ հղումներ
            </h4>
            <p className="hover:text-purple-700 cursor-pointer">EvocaONLINE</p>
            <p className="hover:text-purple-700 cursor-pointer">Պահատուփեր</p>
            <p className="hover:text-purple-700 cursor-pointer">
              Հաճախ տրվող հարցեր
            </p>
            <p className="hover:text-purple-700 cursor-pointer">
              Հայտարարություններ
            </p>
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
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր
            լեզուներում անհամապատասխանություն, ինչպես նաև ռուսերեն և անգլերեն
            լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք
            առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ԲԲԸ-ն
            պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ
            անձանց ինտերնետային կայքերի բովանդակության ստուգության և
            արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ
            անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման
            հնարավոր հետևանքների համար:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 opacity-70">
            <span className="font-bold border p-1 rounded bg-white">
              fininfo
            </span>
            <span className="font-bold border p-1 rounded bg-white">
              abcfinance.am
            </span>
            <span className="font-bold border p-1 rounded bg-white">arca</span>
            <span className="font-bold border p-1 rounded bg-white">ACRA</span>
          </div>
        </div>
      </div>

      {/* Online Chat Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button className="bg-[#7c3aed] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-2xl flex items-center gap-2 hover:bg-purple-800 transition cursor-pointer">
          Գրեք մեզ, մենք օնլայն ենք !
        </button>
      </div>
    </div>
  );
}