import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  HelpCircle,
  Globe,
  Search,
  Menu,
  PhoneCall,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function EvocaOnlineDepositPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about");
  const [currency, setCurrency] = useState("AMD");

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slidesData = [
    {
      id: 1,
      title: "Ավանդ Evoca Online",
      img: "https://www.evoca.am/images-cache/deposits/1/16133900122121/415x261.jpg",
    },
    {
      id: 2,
      title: "Դասական ավանդ",
      img: "https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg",
    },
    {
      id: 3,
      title: "Մանկական ավանդ",
      img: "https://www.evoca.am/images-cache/deposits/1/16133900414285/415x261.jpg",
    },
  ];

  const depositData = {
    AMD: { symbol: "֏", amount: "100,000 ֏", rate: "10.75% ֏" },
    USD: { symbol: "$", amount: "200 $", rate: "4.50% $" },
    EUR: { symbol: "€", amount: "200 €", rate: "2.75% €" },
    RUB: { symbol: "₽", amount: "15,000 ₽", rate: "7.00% ₽" },
  };

  return (
    <div className="w-full bg-white text-gray-800 font-sans min-h-screen flex flex-col relative selection:bg-purple-600 selection:text-white">
    
    
      {/* 3. PURPLE SUB-NAV BAR */}
      <div className="bg-[#52098b] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center gap-2">
          <button className="bg-[#6400DC] px-6 py-3 font-semibold text-sm">
            Ավանդներ
          </button>
          <button className="bg-[#6400DC]/50 px-6 py-3 font-medium text-sm transition">
            Կարևոր տեղեկատվություն
          </button>
        </div>
      </div>

      {/* 4. MAIN BANNER SECTION */}
      <section className="bg-[#f7f7f9] py-12 md:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Ավանդ Evoca Online
            </h1>
            <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed max-w-xl">
              Ցանկանու՞մ եք ներդնել ավանդ բարձր տոկոսադրույքով, բայց չունե՞ք
              ժամանակ: Ձևակերպե՛ք EvocaONLINE ավանդ՝ առանց բանկ այցելելու: Իսկ
              մենք բոլոր փաստաթղթերը կուղարկենք Ձեր էլ. հասցեին:
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/3] bg-gradient-to-br from-[#5b1fa8] via-[#7c3aed] to-[#a855f7] rounded-3xl p-6 flex items-center justify-center shadow-2xl overflow-hidden">
              <div className="absolute top-6 left-12 w-4 h-4 bg-yellow-400 rounded-full"></div>
              <div className="absolute top-10 right-10 w-6 h-6 border-2 border-purple-300 rotate-45"></div>
              <div className="absolute bottom-12 left-8 w-5 h-5 bg-pink-400 rounded-sm rotate-12"></div>
              <div className="absolute top-1/2 right-4 w-12 h-2 bg-pink-400 rounded-full rotate-45"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-28 h-28 md:w-36 md:h-36 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50 flex items-center justify-center relative">
                  <svg
                    className="w-16 h-16 text-[#6a0dad] drop-shadow-md -rotate-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.64 21.97C13.14 22.21 12.54 22 12.31 21.5L9.34 14.88L4.69 18.52C4.19 18.91 3.44 18.66 3.29 18.04L1.04 2.82C0.92 2.22 1.48 1.69 2.07 1.83L17.15 5.56C17.77 5.71 17.98 6.47 17.57 6.94L13.78 11.27L16.74 17.89C16.97 18.39 16.76 18.99 16.26 19.22L13.64 21.97Z" />
                  </svg>
                </div>
                <div className="w-36 md:w-44 h-10 bg-white/40 rounded-t-full blur-[1px] mt-[-10px]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TABS & DETAILS SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 w-full">
        <div className="border-b border-gray-200 flex gap-8 mb-8 text-sm md:text-base font-bold">
          <button
            onClick={() => setActiveTab("about")}
            className={`pb-3 border-b-2 transition ${
              activeTab === "about"
                ? "border-[#6a0dad] text-[#6a0dad]"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            Ավանդի մասին
          </button>
          <button
            onClick={() => setActiveTab("terms")}
            className={`pb-3 border-b-2 transition ${
              activeTab === "terms"
                ? "border-[#6a0dad] text-[#6a0dad]"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            Պայմաններ և սակագներ
          </button>
        </div>
   {/* 11. BREADCRUMB & BACK BUTTON */}
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
          <span className="hover:text-gray-600 cursor-pointer">Ավանդներ</span>
          <span>›</span>
          <span className="hover:text-gray-600 cursor-pointer">Ավանդներ</span>
          <span>›</span>
          <span className="text-gray-600 font-semibold">
            Ավանդ Evoca Online
          </span>
        </div>
      </div>
        {activeTab === "about" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                Ավանդն ընդունվում է ֆիզիկական անձանցից՝ բացառապես{" "}
                <span className="text-[#6a0dad] font-semibold">EvocaTOUCH</span>{" "}
                և <span className="text-[#6a0dad] font-semibold">EvocaONLINE</span>{" "}
                հեռակառավարման համակարգերի միջոցով:
              </p>
              <p>
                Բացի այն, որ մենք խնայում ենք Ձեր ժամանակը, նաև 1 տարի և ավել
                ժամկետով{" "}
                <a
                  href="#"
                  className="text-[#6a0dad] underline hover:text-purple-900 font-semibold"
                >
                  ավանդ
                </a>{" "}
                ձևակերպելու դեպքում առաջարկում ենք մեր գործող տոկոսադրույքից{" "}
                <span className="text-[#6a0dad] font-bold">0.25 %</span>-ով բարձր
                տոկոսադրույք:
              </p>
              <p>
                Որպես Բանկի ավանդատու՝ Դուք նաև բացարձակապես անվճար կստանաք{" "}
                <a
                  href="#"
                  className="text-[#6a0dad] underline hover:text-purple-900 font-semibold"
                >
                  միջազգային քարտ
                </a>
                :
              </p>
              <p className="font-medium text-gray-800">
                Evocabank-ը մշտապես հոգում է Ձեր հարմարավետության մասին:
              </p>
            </div>

            <div className="lg:col-span-5 border border-purple-100 bg-white rounded-3xl p-6 md:p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-8">
                {[
                  { code: "AMD", label: "֏" },
                  { code: "USD", label: "$" },
                  { code: "EUR", label: "€" },
                  { code: "RUB", label: "₽" },
                ].map((c) => (
                  <button
                    key={c.code}
                    onClick={() => setCurrency(c.code)}
                    className={`w-9 h-9 rounded-full font-bold text-sm flex items-center justify-center transition ${
                      currency === c.code
                        ? "bg-[#6a0dad] text-[#ffffff] shadow-md"
                        : "bg-gray-100 text-[#6a0dad] hover:bg-gray-200"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <div className="space-y-6 text-gray-800">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Սկսած</div>
                    <div className="text-2xl font-black text-[#6a0dad]">
                      {depositData[currency].amount}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-gray-600">
                    Գումար
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div>
                    <div className="text-2xl font-black text-[#6a0dad]">
                      31-1,825 օր
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-gray-600">
                    Ժամկետ
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400 font-medium">մինչև</div>
                    <div className="text-2xl font-black text-[#6a0dad]">
                      {depositData[currency].rate}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-gray-600">
                    Տոկոսադրույք
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* TERMS AND RATES SECTION */
          <div className="space-y-12 text-sm md:text-base text-gray-700">
            {/* Main Rates Table */}
            <div className="overflow-x-auto rounded-xl border border-purple-100 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[750px]">
                <thead>
                  <tr className="bg-purple-50/50 border-b border-purple-100 text-xs font-bold text-gray-800 text-center">
                    <th className="p-4 border-r border-purple-100 w-1/6">Նվազագույն գումար և արժույթ</th>
                    <th className="p-4 border-r border-purple-100 w-1/5">Տոկոսների վճարման եղանակը</th>
                    <th className="p-4 border-r border-purple-100 col-span-7" colSpan={7}>
                      Ընդունման ժամկետներն ըստ օրերի քանակի
                    </th>
                  </tr>
                  <tr className="bg-purple-50/30 border-b border-purple-100 text-xs font-bold text-gray-700 text-center">
                    <th className="border-r border-purple-100"></th>
                    <th className="border-r border-purple-100"></th>
                    <th className="p-3 border-r border-purple-100">31 - 90 օր</th>
                    <th className="p-3 border-r border-purple-100">91 - 180 օր</th>
                    <th className="p-3 border-r border-purple-100">181 - 270 օր</th>
                    <th className="p-3 border-r border-purple-100">271 - 365 օր</th>
                    <th className="p-3 border-r border-purple-100">366 - 549 օր</th>
                    <th className="p-3 border-r border-purple-100">550 - 730 օր</th>
                    <th className="p-3">731 - 1825 օր</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-100 text-center text-xs md:text-sm font-medium">
                  {/* AMD */}
                  <tr>
                    <td rowSpan={3} className="p-4 font-bold border-r border-purple-100 bg-gray-50/50">
                      100,000 ՀՀ դրամ
                    </td>
                    <td className="p-3 text-left border-r border-purple-100">Տոկոսները ժամկետի վերջում վճարմամբ</td>
                    <td className="p-3 border-r border-purple-100">4.50 %</td>
                    <td className="p-3 border-r border-purple-100">6.00 %</td>
                    <td className="p-3 border-r border-purple-100">7.00 %</td>
                    <td className="p-3 border-r border-purple-100">8.00 %</td>
                    <td className="p-3 border-r border-purple-100">9.75 %</td>
                    <td className="p-3 border-r border-purple-100">10.25 %</td>
                    <td className="p-3">10.75 %</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-left border-r border-purple-100">Ամենամսյա տոկոսների վճարմամբ</td>
                    <td className="p-3 border-r border-purple-100">4.00 %</td>
                    <td className="p-3 border-r border-purple-100">5.50 %</td>
                    <td className="p-3 border-r border-purple-100">6.50 %</td>
                    <td className="p-3 border-r border-purple-100">7.50 %</td>
                    <td className="p-3 border-r border-purple-100">9.25 %</td>
                    <td className="p-3 border-r border-purple-100">9.75 %</td>
                    <td className="p-3">10.25 %</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-left border-r border-purple-100">Տոկոսները եռամսյա վճարմամբ</td>
                    <td className="p-3 border-r border-purple-100">-</td>
                    <td className="p-3 border-r border-purple-100">5.50 %</td>
                    <td className="p-3 border-r border-purple-100">6.50 %</td>
                    <td className="p-3 border-r border-purple-100">7.50 %</td>
                    <td className="p-3 border-r border-purple-100">9.25 %</td>
                    <td className="p-3 border-r border-purple-100">9.75 %</td>
                    <td className="p-3">10.25 %</td>
                  </tr>

                  {/* USD */}
                  <tr className="border-t-2 border-purple-100">
                    <td rowSpan={3} className="p-4 font-bold border-r border-purple-100 bg-gray-50/50">
                      200 ԱՄՆ դոլար
                    </td>
                    <td className="p-3 text-left border-r border-purple-100">Տոկոսները ժամկետի վերջում վճարմամբ</td>
                    <td className="p-3 border-r border-purple-100">0.75 %</td>
                    <td className="p-3 border-r border-purple-100">2.00 %</td>
                    <td className="p-3 border-r border-purple-100">2.50 %</td>
                    <td className="p-3 border-r border-purple-100">3.00 %</td>
                    <td className="p-3 border-r border-purple-100">4.25 %</td>
                    <td className="p-3 border-r border-purple-100">4.75 %</td>
                    <td className="p-3">5.25 %</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-left border-r border-purple-100">Ամենամսյա տոկոսների վճարմամբ</td>
                    <td className="p-3 border-r border-purple-100">0.50 %</td>
                    <td className="p-3 border-r border-purple-100">1.75 %</td>
                    <td className="p-3 border-r border-purple-100">2.25 %</td>
                    <td className="p-3 border-r border-purple-100">2.75 %</td>
                    <td className="p-3 border-r border-purple-100">4.00 %</td>
                    <td className="p-3 border-r border-purple-100">4.5 %</td>
                    <td className="p-3">5.00 %</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-left border-r border-purple-100">Տոկոսները եռամսյա վճարմամբ</td>
                    <td className="p-3 border-r border-purple-100">-</td>
                    <td className="p-3 border-r border-purple-100">1.75 %</td>
                    <td className="p-3 border-r border-purple-100">2.25 %</td>
                    <td className="p-3 border-r border-purple-100">2.75 %</td>
                    <td className="p-3 border-r border-purple-100">4.00 %</td>
                    <td className="p-3 border-r border-purple-100">4.5 %</td>
                    <td className="p-3">5.00 %</td>
                  </tr>

                  {/* EUR */}
                  <tr className="border-t-2 border-purple-100">
                    <td rowSpan={3} className="p-4 font-bold border-r border-purple-100 bg-gray-50/50">
                      200 Եվրո
                    </td>
                    <td className="p-3 text-left border-r border-purple-100">Տոկոսները ժամկետի վերջում վճարմամբ</td>
                    <td className="p-3 border-r border-purple-100">0.35 %</td>
                    <td className="p-3 border-r border-purple-100">1.00 %</td>
                    <td className="p-3 border-r border-purple-100">1.50 %</td>
                    <td className="p-3 border-r border-purple-100">1.75 %</td>
                    <td className="p-3 border-r border-purple-100">2.25 %</td>
                    <td className="p-3 border-r border-purple-100">2.75 %</td>
                    <td className="p-3">3.25 %</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-left border-r border-purple-100">Ամենամսյա տոկոսների վճարմամբ</td>
                    <td className="p-3 border-r border-purple-100">0.25 %</td>
                    <td className="p-3 border-r border-purple-100">0.75 %</td>
                    <td className="p-3 border-r border-purple-100">1.25 %</td>
                    <td className="p-3 border-r border-purple-100">1.50 %</td>
                    <td className="p-3 border-r border-purple-100">2.00 %</td>
                    <td className="p-3 border-r border-purple-100">2.5 %</td>
                    <td className="p-3">3.00 %</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-left border-r border-purple-100">Տոկոսները եռամսյա վճարմամբ</td>
                    <td className="p-3 border-r border-purple-100">-</td>
                    <td className="p-3 border-r border-purple-100">0.75 %</td>
                    <td className="p-3 border-r border-purple-100">1.25 %</td>
                    <td className="p-3 border-r border-purple-100">1.50 %</td>
                    <td className="p-3 border-r border-purple-100">2.00 %</td>
                    <td className="p-3 border-r border-purple-100">2.5 %</td>
                    <td className="p-3">3.00 %</td>
                  </tr>

                  {/* RUB */}
                  <tr className="border-t-2 border-purple-100">
                    <td rowSpan={2} className="p-4 font-bold border-r border-purple-100 bg-gray-50/50">
                      30,000 ՌԴ Ռուբլի
                    </td>
                    <td className="p-3 text-left border-r border-purple-100">Տոկոսները ժամկետի վերջում վճարմամբ</td>
                    <td className="p-3 border-r border-purple-100">4.00 %</td>
                    <td className="p-3 border-r border-purple-100">5.00 %</td>
                    <td className="p-3 border-r border-purple-100">5.25 %</td>
                    <td className="p-3 border-r border-purple-100">5.50 %</td>
                    <td className="p-3 border-r border-purple-100">6.25 %</td>
                    <td className="p-3 border-r border-purple-100">-</td>
                    <td className="p-3">-</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-left border-r border-purple-100">Ամենամսյա տոկոսների վճարմամբ</td>
                    <td className="p-3 border-r border-purple-100">3.75 %</td>
                    <td className="p-3 border-r border-purple-100">4.75 %</td>
                    <td className="p-3 border-r border-purple-100">5.00 %</td>
                    <td className="p-3 border-r border-purple-100">5.25 %</td>
                    <td className="p-3 border-r border-purple-100">6.00 %</td>
                    <td className="p-3 border-r border-purple-100">-</td>
                    <td className="p-3">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* List Conditions */}
            <div className="space-y-4 leading-relaxed">
              <ol className="list-decimal list-inside space-y-4 font-medium text-gray-800">
                <li>
                  Ավանդն ընդունվում է ֆիզիկական անձանցից <span className="font-bold">բացառապես</span> «EvocaTouch» կամ «EvocaOnline» հեռակառավարման համակարգերի միջոցով:
                </li>
                <li className="space-y-2">
                  <span>
                    Ավելացման հնարավորությամբ ավանդ ներդնելու դեպքում ՀՀ դրամով ավանդների համար սահմանվում է վերոնշյալ սանդղակի տոկոսադրույքներից 0.5 %-ով պակաս տոկոսադրույք, իսկ ԱՄՆ դոլարով, Եվրոյով և ՌԴ ռուբլով ավանդների համար սահմանվում է վերոնշյալ սանդղակի տոկոսադրույքներից 0.25 %-ով պակաս տոկոսադրույք: Ավանդի համալրումները կարող են իրականացվել ինչպես Բանկի գործունեության վայրում, այնպես էլ «EvocaTouch» կամ «EvocaOnline» հեռակառավարման համակարգերի միջոցով: Ավանդատուն կարող է համալրել (ավելացնել) իր Ավանդի գումարը սկսած նվազագույնը 40,000 ՀՀ դրամից, 100 ԱՄՆ դոլարից, 100 Եվրոյից կամ 10,000 ՌԴ ռուբլուց: Կատարված բոլոր համալրումների հանրագումարը չի կարող գերազանցել՝
                  </span>
                  <ul className="list-disc list-inside pl-6 space-y-2 font-normal text-gray-700">
                    <li>ՀՀ դրամի դեպքում Ավանդի ներդրման սկզբնական գումարի կրկնապատիկը,</li>
                    <li>
                      ԱՄՆ դոլարի, Եվրոյի և ՌԴ ռուբլու դեպքում Ավանդի ներդրման սկզբնական գումարը: <br />
                      <span className="text-[#6a0dad] font-semibold">Ավանդային պայմանագրի գործողության վերջին 3 (երեք) ամիսների ընթացքում Ավանդի գումարի համալրում չի թույլատրվում:</span>
                    </li>
                  </ul>
                </li>
                <li>Ավանդի գումարի մասնակի նվազեցում չի թույլատրվում:</li>
                <li>
                  Ավանդատուի պահանջով ավանդային պայմանագիրը ժամկետից շուտ լուծելու դեպքում Բանկն իրականացնում է Ավանդի տոկոսագումարների վերահաշվարկ հետևյալ դրույքաչափերով՝
                </li>
              </ol>

              {/* Early Termination Table */}
              <div className="overflow-x-auto rounded-xl border border-purple-100 shadow-sm my-4">
                <table className="w-full text-center border-collapse">
                  <thead>
                    <tr className="bg-purple-50/50 border-b border-purple-100 text-xs font-bold text-gray-800">
                      <th className="p-3 border-r border-purple-100" rowSpan={2}>Ավանդի արժույթ</th>
                      <th className="p-3 border-b border-purple-100" colSpan={2}>Տարեկան տոկոսադրույք ըստ ժամկետների</th>
                    </tr>
                    <tr className="bg-purple-50/30 border-b border-purple-100 text-xs font-bold text-gray-700">
                      <th className="p-2 border-r border-purple-100">Մինչև 365 օր</th>
                      <th className="p-2">366 - 1095 օր</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-100 text-xs md:text-sm">
                    <tr>
                      <td className="p-3 font-semibold border-r border-purple-100">ՀՀ դրամ</td>
                      <td className="p-3 border-r border-purple-100">0.5 %</td>
                      <td className="p-3">8.5 %</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-purple-100">ԱՄՆ դոլար</td>
                      <td className="p-3 border-r border-purple-100">0.1 %</td>
                      <td className="p-3">3.5 %</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-purple-100">Եվրո</td>
                      <td className="p-3 border-r border-purple-100">0.1 %</td>
                      <td className="p-3">1.5 %</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-purple-100">ՌԴ ռուբլի</td>
                      <td className="p-3 border-r border-purple-100">0.1 %</td>
                      <td className="p-3">5 %</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="font-medium text-gray-800">
                5. Ավանդի գումարի մասնակի նվազեցում չի թույլատրվում:
              </div>
            </div>

            {/* Additional Conditions Section */}
            <div className="space-y-6 pt-4 border-t border-gray-100">
              <h3 className="text-xl font-bold text-[#6a0dad]">Լրացուցիչ պայմաններ</h3>

              <ol className="list-decimal list-inside space-y-4 font-medium text-gray-800">
                <li>
                  ՀՀ ռեզիդենտ հանդիսացող ավանդատուի ցանկության դեպքում Բանկը կարող է տրամադրել վճարային քարտ առանց տարեկան սպասարկման վճարի գանձման:
                </li>
                <li>
                  Տրամադրվող վճարային քարտի տեսակները, ըստ ներդրվող ավանդի գումարի սահմանվում է ստորև՝
                </li>
              </ol>

              {/* Cards Table */}
              <div className="overflow-x-auto rounded-xl border border-purple-100 shadow-sm my-4">
                <table className="w-full text-center border-collapse">
                  <thead>
                    <tr className="bg-purple-50/50 border-b border-purple-100 text-xs font-bold text-gray-800">
                      <th className="p-3 border-r border-purple-100">Ավանդի արժույթ/Քարտի տեսակ *</th>
                      <th className="p-3 border-r border-purple-100">ArCa Classic/ Mastercard Standard/ Visa Classic</th>
                      <th className="p-3 border-r border-purple-100">Mastercard Gold/Evoca Travel/ Visa Platinum <br /><span className="font-normal text-[11px] text-gray-500">(ըստ հաճախորդի ընտրության)</span></th>
                      <th className="p-3">VISA Infinite</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-100 text-xs md:text-sm">
                    <tr>
                      <td className="p-3 font-semibold border-r border-purple-100 bg-gray-50/30">ՀՀ դրամ</td>
                      <td className="p-3 border-r border-purple-100">500,000 – 10,000,000 (ներառյալ)</td>
                      <td className="p-3 border-r border-purple-100">10,000,000 – 40,000,000 (ներառյալ)</td>
                      <td className="p-3">40,000,000 և ավել</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-purple-100 bg-gray-50/30">ԱՄՆ դոլար</td>
                      <td className="p-3 border-r border-purple-100">1,000 – 25,000 (ներառյալ)</td>
                      <td className="p-3 border-r border-purple-100">25,000 – 100,000 (ներառյալ)</td>
                      <td className="p-3">100,000 և ավել</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-purple-100 bg-gray-50/30">Եվրո</td>
                      <td className="p-3 border-r border-purple-100">1,000 – 20,000 (ներառյալ)</td>
                      <td className="p-3 border-r border-purple-100">20,000 – 100,000 (ներառյալ)</td>
                      <td className="p-3">100,000 և ավել</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-purple-100 bg-gray-50/30">ՌԴ ռուբլի</td>
                      <td className="p-3 border-r border-purple-100">60,000 – 3,000,000 (ներառյալ)</td>
                      <td className="p-3 border-r border-purple-100">2,000,000 – 7,000,000 (ներառյալ)</td>
                      <td className="p-3">7,000,000 և ավել</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Card Rules Bullets */}
              <ul className="list-disc list-inside space-y-3 pl-2 text-gray-700">
                <li>Քարտերը տրամադրվում են տվյալ քարտային պրոդուկտի համար հասանելի արժույթով ըստ հաճախորդի ցանկության:</li>
                <li>Հաճախորդի ցանկությամբ վերջինիս ընտանիքի անդամներին (ծնողներ, ամուսին/կին, չափահաս երեխաներ) կարող է տրամադրվել նույն դասի քարտ 50% զեղչով՝ բացառությամբ Infinite քարտի:</li>
                <li>Մեկ ավանդի շրջանակներում տրամադրվում է մեկ անվճար քարտ ավանդատուի անունով: Ավանդատուի կողմից 1-ից ավել ավանդներ ներդնելու դեպքում յուրաքանչյուր ավանդը դիտարկվում է առանձին:</li>
                <li>Ավանդի ժամկետը լրանալու կամ ավանդատուի կողմից Ավանդի պայմանագիրը ժամկետից շուտ դադարեցվելու դեպքում, Ավանդի Ներդրման դիմաց տրամադրված վճարային քարտի սպասարկումը շարունակվում է իրականացվել առանց տարեկան սպասարկման վճարի գանձման, մինչև վճարային քարտի սպասարկման ժամկետի ավարտը, բացառությամբ Ավանդի Ներդրման դիմաց տրամադրված Visa Infinite վճարային քարտերի:</li>
                <li>Visa Infinite վճարային քարտի քարտապանների կողմից Ավանդի պայմանագիրը ժամկետից շուտ դադարեցվելու կամ Ավանդի ժամկետը լրանալու դեպքում Բանկն իրավունք ունի փակել նաև այդ Ավանդի Ներդրման դիմաց տրամադրված Visa Infinite վճարային քարտը կամ հաճախորդի ցանկության դեպքում սկսել կիրառել տվյալ պահին Բանկում գործող սակագները և դրույքները:</li>
                <li>Տրամադրվող հասանելի քարտի դասը որոշվում է քարտի բացման պահին ավանդի գումարի չափով: Ավանդի համալրման դեպքում, եթե հաճախորդը ցանկանում է ավելի բարձր դասի քարտ,ապա գործող քարտը պետք է փակվի և բացվի նոր ավելի բարձր դասի քարտ:</li>
                <li>
                  Քարտի վերաթողարկումը գործողության ժամկետը լրանալու կամ այլ պատճառով, իրականացվում է.
                  <ul className="list-[# font-normal pl-6 space-y-1 mt-1 text-gray-600">
                    <li>- Անվճար, եթե հաճախորդի ավանդը գործում է, կամ եթե վերաթողարկման պահին հաճախորդի անունով գործում է համապատասխան սահմանաչափով այլ ավանդ, և որի շրջանակներում հաճախորդին արդեն չի տրամադրվել անվճար քարտ:</li>
                    <li>- Բանկի կողմից մատուցվող ծառայությունների սակագներով, եթե ավանդի ժամկետը լրացել է և չի երկարաձգվել:</li>
                  </ul>
                </li>
                <li>Քարտերի սպասարկման այլ սակագները և պայմանները ` համաձայն Բանկի կողմից մատուցվող ծառայությունների սակագների և պայմանների:</li>
              </ul>
            </div>

            {/* Annual Yield Section */}
            <div className="space-y-4 pt-6 border-t border-gray-100">
              <h3 className="text-xl font-bold text-[#6a0dad]">Ավանդի տարեկան տոկոսային եկամտաբերության չափը</h3>
              <p className="text-gray-600">
                Տարեկան տոկոսային եկամտաբերությունը ըստ ավանդատեսակների` հաշվարկված ՀՀ Կենտրոնական Բանկի կողմից սահմանված կարգով, կարող եք ծանոթանալ ստորև`
              </p>
              <div className="text-xs font-semibold text-gray-500 space-y-1">
                <div>ԱՏ - անվանական տոկոսադրույք</div>
                <div>ՏՏԵ - տարեկան տոկոսային եկամտաբերություն</div>
              </div>

              {/* Yield Table */}
              <div className="overflow-x-auto rounded-xl border border-purple-100 shadow-sm mt-4">
                <table className="w-full text-center border-collapse text-xs md:text-sm min-w-[700px]">
                  <thead>
                    <tr className="bg-[#6a0dad] text-white font-bold">
                      <th className="p-3 border-r border-purple-400" colSpan={9}>
                        ԷՎՈԿԱ ONLINE ԱՎԱՆԴԱՏԵՍԱԿԻ ՏԱՐԵԿԱՆ ՏՈԿՈՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅՈՒՆ
                      </th>
                    </tr>
                    <tr className="bg-purple-100 text-gray-800 font-bold border-b border-purple-200">
                      <th className="p-2 border-r border-purple-200" rowSpan={2}>Արժույթ</th>
                      <th className="p-2 border-r border-purple-200" colSpan={2}>31-90 օր</th>
                      <th className="p-2 border-r border-purple-200" colSpan={2}>91-180 օր</th>
                      <th className="p-2 border-r border-purple-200" colSpan={2}>181-270 օր</th>
                      <th className="p-2" colSpan={2}>...</th>
                    </tr>
                    <tr className="bg-purple-50 text-gray-700 font-bold border-b border-purple-200">
                      <th className="p-2 border-r border-purple-200">ԱՏ %</th>
                      <th className="p-2 border-r border-purple-200">ՏՏԵ %</th>
                      <th className="p-2 border-r border-purple-200">ԱՏ %</th>
                      <th className="p-2 border-r border-purple-200">ՏՏԵ %</th>
                      <th className="p-2 border-r border-purple-200">ԱՏ %</th>
                      <th className="p-2 border-r border-purple-200">ՏՏԵ %</th>
                      <th className="p-2 border-r border-purple-200">...</th>
                      <th className="p-2">...</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-100 font-medium">
                    {/* Monthly */}
                    <tr className="bg-purple-50/30 text-left font-bold text-purple-900">
                      <td colSpan={9} className="p-2.5">Տոկոսների ամսական վճարման դեպքում</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold border-r border-purple-100">AMD</td>
                      <td className="p-2 border-r border-purple-100">4.00%</td>
                      <td className="p-2 border-r border-purple-100">4.07%</td>
                      <td className="p-2 border-r border-purple-100">5.50%</td>
                      <td className="p-2 border-r border-purple-100">5.64%</td>
                      <td className="p-2 border-r border-purple-100">6.50%</td>
                      <td className="p-2 border-r border-purple-100">6.70%</td>
                      <td className="p-2 border-r border-purple-100">...</td>
                      <td className="p-2">...</td>
                    </tr>

                    {/* Quarterly */}
                    <tr className="bg-purple-50/30 text-left font-bold text-purple-900">
                      <td colSpan={9} className="p-2.5">Տոկոսների եռամսյակային վճարման դեպքում</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold border-r border-purple-100">AMD</td>
                      <td className="p-2 border-r border-purple-100">-</td>
                      <td className="p-2 border-r border-purple-100">-</td>
                      <td className="p-2 border-r border-purple-100">5.50%</td>
                      <td className="p-2 border-r border-purple-100">5.61%</td>
                      <td className="p-2 border-r border-purple-100">6.50%</td>
                      <td className="p-2 border-r border-purple-100">6.66%</td>
                      <td className="p-2 border-r border-purple-100">...</td>
                      <td className="p-2">...</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold border-r border-purple-100">USD</td>
                      <td className="p-2 border-r border-purple-100">-</td>
                      <td className="p-2 border-r border-purple-100">-</td>
                      <td className="p-2 border-r border-purple-100">1.75%</td>
                      <td className="p-2 border-r border-purple-100">1.76%</td>
                      <td className="p-2 border-r border-purple-100">2.25%</td>
                      <td className="p-2 border-r border-purple-100">2.27%</td>
                      <td className="p-2 border-r border-purple-100">...</td>
                      <td className="p-2">...</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold border-r border-purple-100">EUR</td>
                      <td className="p-2 border-r border-purple-100">-</td>
                      <td className="p-2 border-r border-purple-100">-</td>
                      <td className="p-2 border-r border-purple-100">0.75%</td>
                      <td className="p-2 border-r border-purple-100">0.75%</td>
                      <td className="p-2 border-r border-purple-100">1.25%</td>
                      <td className="p-2 border-r border-purple-100">1.26%</td>
                      <td className="p-2 border-r border-purple-100">...</td>
                      <td className="p-2">...</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold border-r border-purple-100">RUB</td>
                      <td className="p-2 border-r border-purple-100">-</td>
                      <td className="p-2 border-r border-purple-100">-</td>
                      <td className="p-2 border-r border-purple-100">4.75%</td>
                      <td className="p-2 border-r border-purple-100">4.84%</td>
                      <td className="p-2 border-r border-purple-100">5.00%</td>
                      <td className="p-2 border-r border-purple-100">5.09%</td>
                      <td className="p-2 border-r border-purple-100">...</td>
                      <td className="p-2">...</td>
                    </tr>

                    {/* End of term */}
                    <tr className="bg-purple-50/30 text-left font-bold text-purple-900">
                      <td colSpan={9} className="p-2.5">Տոկոսների տարեկան կամ ժամկետի վերջում վճարելու դեպքում</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold border-r border-purple-100">AMD</td>
                      <td className="p-2 border-r border-purple-100">4.50%</td>
                      <td className="p-2 border-r border-purple-100">4.50%</td>
                      <td className="p-2 border-r border-purple-100">6.00%</td>
                      <td className="p-2 border-r border-purple-100">6.00%</td>
                      <td className="p-2 border-r border-purple-100">7.00%</td>
                      <td className="p-2 border-r border-purple-100">7.00%</td>
                      <td className="p-2 border-r border-purple-100">...</td>
                      <td className="p-2">...</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold border-r border-purple-100">USD</td>
                      <td className="p-2 border-r border-purple-100">0.75%</td>
                      <td className="p-2 border-r border-purple-100">0.75%</td>
                      <td className="p-2 border-r border-purple-100">2.00%</td>
                      <td className="p-2 border-r border-purple-100">2.00%</td>
                      <td className="p-2 border-r border-purple-100">2.50%</td>
                      <td className="p-2 border-r border-purple-100">2.50%</td>
                      <td className="p-2 border-r border-purple-100">...</td>
                      <td className="p-2">...</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold border-r border-purple-100">EUR</td>
                      <td className="p-2 border-r border-purple-100">0.35%</td>
                      <td className="p-2 border-r border-purple-100">0.35%</td>
                      <td className="p-2 border-r border-purple-100">1.00%</td>
                      <td className="p-2 border-r border-purple-100">1.00%</td>
                      <td className="p-2 border-r border-purple-100">1.50%</td>
                      <td className="p-2 border-r border-purple-100">1.50%</td>
                      <td className="p-2 border-r border-purple-100">...</td>
                      <td className="p-2">...</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold border-r border-purple-100">RUB</td>
                      <td className="p-2 border-r border-purple-100">4.00%</td>
                      <td className="p-2 border-r border-purple-100">4.00%</td>
                      <td className="p-2 border-r border-purple-100">5.00%</td>
                      <td className="p-2 border-r border-purple-100">5.00%</td>
                      <td className="p-2 border-r border-purple-100">5.25%</td>
                      <td className="p-2 border-r border-purple-100">5.25%</td>
                      <td className="p-2 border-r border-purple-100">...</td>
                      <td className="p-2">...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Ruble Rules Section */}
            <div className="space-y-4 pt-6 border-t border-gray-100">
              <h3 className="text-xl font-bold text-[#6a0dad]">Ռուբլով ավանդի ներդրման և վերադարձման կարգը</h3>
              <ul className="list-disc list-inside space-y-3 pl-2 text-gray-700">
                <li>
                  Կանխիկ կամ անկանխիկ ռուբլով ներդրված ավանդները վերադարձվում են ներդրման նույն եղանակով (համապատասխանաբար՝ կանխիկ կամ անկանխիկ)՝ առանց միջնորդավճարների գանձման:
                </li>
                <li>
                  Անկանխիկ ռուբլով ներդրված ավանդը կանխիկ ռուբլով վերադարձնելու դեպքում գանձվում է վերադարձման օրը ռուբլու կանխիկացման համար սահմանված միջնորդավճարը:
                </li>
                <li>
                  Կանխիկ ռուբլով ներդրված ավանդը անկանխիկ ռուբլով վերադարձնելու դեպքում գանձվում է վերադարձման օրը կանխիկ ռուբլու մուտքագրման համար սահմանված միջնորդավճարը:
                </li>
              </ul>
            </div>

            {/* Notice / Warning Section */}
            <div className="space-y-4 pt-6 border-t border-gray-100 bg-purple-50/40 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-[#6a0dad]">Ուշադրություն.</h3>
              <p className="text-gray-700 leading-relaxed">
                Ձեր և մեր պայմանագրային փոխհարաբերությունները կարգավորվում են ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅՄԱՆՆԵՐՈՎ: Այն հրապարակային առաջարկ է (օֆերտա) և Ձեր կողմից համարվում է ընդունված այն պահից, երբ առձեռն կամ առցանց համակարգերի միջոցով մեզ եք ներկայացնում ձեր կողմից պատշաճ լրացված և վավերացված բանկային ծառայություններից օգտվելու հայտ/դիմում: Համալիր բանկային ծառայությունների մատուցման պայմաններին կարող եք ծանոթանալ{" "}
                <a href="#" className="text-[#6a0dad] font-bold underline">այստեղ</a>:
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                ՀՀ «Հարկային օրենսգրքի» համաձայն՝ մեր կողմից ֆիզիկական անձ ավանդատուին (ռեզիդենտ, ոչ ռեզիդենտ) վճարված տոկոսագումարները ենթակա են հարկման՝ ձեր կողմից ստացված եկամտի 10%-ի չափով:
              </p>
              <p>Ավանդային պայմանագիր կնքելիս և ավանդային պայմանագրի գործողության ընթացքում այլ վճարներ չենք գանձում: Անկանխիկ կերպով ներդրված ավանդը կանխիկ վերադարձնելու դեպքում Ձեզանից գանձում ենք գումարի կանխիկացման վճար, համաձայն՝ մեր Դրամարկղային գործառնությունների իրականացման սակագների:
Ավանդների ներգրավման պայմաններին (ըստ գործող ավանդատեսակների) կարող եք ծանոթանալ այստեղ: Ավանդների ներգրավման նախկին պայմանների կարող եք ծանոթանալ Պայմանների արխիվ բաժնում:
Տարեկան տոկոսային եկամտաբերությանը առընչվող տեղեկատվությանը կարող եք ծանոթանալ այս էջի Կարևոր տեղեկատվություն բաժնում:</p>
            </div>
          </div>
        )}
      </section>

      {/* 6. OTHER DEPOSITS SWIPER SLIDER SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 w-full">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
          Այլ ավանդներ
        </h2>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            speed={600}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="w-full"
          >
            {[...slidesData, ...slidesData].map((slide, index) => (
              <SwiperSlide key={`${slide.id}-${index}`}>
                <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition group cursor-pointer h-full">
                  <div className="w-full h-52 overflow-hidden">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4 text-center bg-white">
                    <h3 className="font-bold text-gray-800 text-sm md:text-base">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={prevRef}
            aria-label="Previous Slide"
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white text-purple-700 w-9 h-9 rounded-full shadow-md border border-gray-100 hover:bg-purple-50 transition flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            ref={nextRef}
            aria-label="Next Slide"
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white text-purple-700 w-9 h-9 rounded-full shadow-md border border-gray-100 hover:bg-purple-50 transition flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
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

      {/* 8. LAST UPDATED TIMESTAMP */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 text-right text-[11px] text-gray-400 border-b border-gray-100">
        Թարմացվել է՝ 14/10/2025 12:15
      </div>

      {/* 9. MAIN FOOTER */}
      <footer className="bg-white text-gray-700 py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-xs">
          {/* Logo and address */}
          <div className="space-y-4 lg:col-span-1">
            <span className="text-2xl font-black text-[#5b1fa8] tracking-tight block">
              evoca<span className="text-gray-400 font-light text-xs">BANK</span>
            </span>
            <p className="text-gray-500 font-medium leading-normal">
              ք. Երևան, 0010,
              <br />
              Հանրապետության 44/2
            </p>
            <p className="text-gray-400 text-[11px] leading-relaxed pt-2">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական
              բանկի կողմից
            </p>
            <p className="text-gray-400 text-[10px]">
              1990 - 2026, ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          {/* Link Column 1 */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-gray-900 text-sm mb-3">Բանկի մասին</h4>
            <ul className="space-y-2 text-gray-600 font-medium">
              <li><a href="#" className="hover:text-purple-700">Մեր մասին</a></li>
              <li><a href="#" className="hover:text-purple-700">Ղեկավարություն</a></li>
              <li><a href="#" className="hover:text-purple-700">Բաժնետերեր</a></li>
              <li><a href="#" className="hover:text-purple-700">Հաշվետվություններ</a></li>
              <li><a href="#" className="hover:text-purple-700">Իրավական ակտեր</a></li>
              <li><a href="#" className="hover:text-purple-700">Սակագներ</a></li>
              <li><a href="#" className="hover:text-purple-700">Օտարվող գույք</a></li>
              <li><a href="#" className="hover:text-purple-700">Կառուցապատողներ</a></li>
              <li><a href="#" className="hover:text-purple-700">Գործընկեր ավտոսրահներ</a></li>
              <li><a href="#" className="hover:text-purple-700">Սակագների արխիվ</a></li>
            </ul>
          </div>

          {/* Link Column 2 */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-gray-900 text-sm mb-3">Օգտակար հղումներ</h4>
            <ul className="space-y-2 text-gray-600 font-medium">
              <li><a href="#" className="hover:text-purple-700">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</a></li>
              <li><a href="#" className="hover:text-purple-700">Հաճախորդի ռեզիդենտության չափանիշներ</a></li>
              <li><a href="#" className="hover:text-purple-700">Կարգավորում</a></li>
              <li><a href="#" className="hover:text-purple-700">Գաղտնիության քաղաքականություն</a></li>
              <li><a href="#" className="hover:text-purple-700">Ֆին. հաշտարար</a></li>
              <li><a href="#" className="hover:text-purple-700">Ֆինանսական հանցագործությունների կանխարգելում</a></li>
              <li><a href="#" className="hover:text-purple-700">Հղումներ Բանկի քարտապանների համար</a></li>
            </ul>
          </div>

          {/* Link Column 3 */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-gray-900 text-sm mb-3">Այլ հղումներ</h4>
            <ul className="space-y-2 text-gray-600 font-medium">
              <li><a href="#" className="hover:text-purple-700">EvocaONLINE</a></li>
              <li><a href="#" className="hover:text-purple-700">Պահատուփեր</a></li>
              <li><a href="#" className="hover:text-purple-700">Հաճախ տրվող հարցեր</a></li>
              <li><a href="#" className="hover:text-purple-700">Հայտարարություններ</a></li>
              <li><a href="#" className="hover:text-purple-700">DIbrary</a></li>
              <li><a href="#" className="hover:text-purple-700">Բուկլետներ</a></li>
              <li><a href="#" className="hover:text-purple-700">Հետադարձ կապ</a></li>
              <li><a href="#" className="hover:text-purple-700">Կայքի քարտեզ</a></li>
            </ul>
          </div>

          {/* Socials & Contacts */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-500">
              <a href="#" className="hover:text-purple-700">f</a>
              <a href="#" className="hover:text-purple-700">i</a>
              <a href="#" className="hover:text-purple-700">p</a>
              <a href="#" className="hover:text-purple-700">yt</a>
              <a href="#" className="hover:text-purple-700">in</a>
            </div>

            <div className="flex gap-2">
              <a href="#" className="bg-black text-white px-2.5 py-1 rounded text-[10px] font-bold">App Store</a>
              <a href="#" className="bg-black text-white px-2.5 py-1 rounded text-[10px] font-bold">Google Play</a>
            </div>

            <div className="pt-2 space-y-2">
              <a href="#" className="text-purple-700 font-bold block hover:underline">
                Բանկի հասցեները և աշխատաժամերը
              </a>
              <a href="#" className="text-purple-700 font-bold block hover:underline">
                Կապ մեզ հետ
              </a>
              <div className="font-bold text-gray-800 text-sm pt-1">
                +374 10 605555
              </div>
              <div className="font-bold text-gray-800 text-sm">
                8444
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* 10. DISCLAIMER BOTTOM BAR */}
      <div className="bg-gray-100 text-gray-500 text-[10px] py-2 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p>
            Հարգելի՛ հաճախորդ, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներով անհամապատասխանության, ինչպես նաև հայերեն և անգլերեն լեզուներով ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: Էվոկաբանկ ՓԲԸ-ն պատասխանատվություն չի կրում...
          </p>
        </div>
      </div>

   

      {/* FIXED SIDEBAR & CHAT BUTTON */}
      <div className="hidden md:flex flex-col gap-4 fixed left-4 top-1/2 -translate-y-1/2 z-30 text-gray-400 bg-white/90 p-2.5 rounded-full shadow-md border border-gray-100">
        <svg className="w-4 h-4 hover:text-purple-700 cursor-pointer fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>

        <svg className="w-4 h-4 hover:text-purple-700 cursor-pointer fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>

        <svg className="w-4 h-4 hover:text-purple-700 cursor-pointer fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </div>

      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
        <button className="bg-[#6a0dad] hover:bg-purple-800 text-white font-bold text-xs md:text-sm px-5 py-3 rounded-full shadow-2xl transition flex items-center gap-2 cursor-pointer">
          Գրեք մեզ, մենք օնլայն ենք !
        </button>
        <button className="bg-[#6a0dad] text-white p-3 rounded-full shadow-2xl hover:bg-purple-800 transition cursor-pointer">
          <PhoneCall className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}