import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slidesData = [
  {
    title: "Evoca Travel Card",
    description: "Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը",
    btnText: "Իմանալ ավելին",
    bgColor: "bg-[#d1d5db]", // light gray/silver
    textColor: "text-gray-900",
    btnBg: "bg-[#7c3aed] text-white hover:bg-purple-800",
    imgUrl: "https://v1.screenshot.api.evocabank.am/travel.png" // Replace with local image path if preferred
  },
  {
    title: "Evoca Աշխատավարձային Նախագիծ",
    description: "Բեր աշխատավարձդ Evoca: Տար շատ ավելին...",
    btnText: "Իմանալ ավելին",
    bgColor: "bg-[#6b21a8]", // deep purple
    textColor: "text-white",
    btnBg: "bg-white text-purple-900 hover:bg-gray-100",
    imgUrl: "https://v1.screenshot.api.evocabank.am/salary.png"
  },
  {
    title: "Կարճ հեռախոսահամար՝ 8444",
    description: "Բարի գալուստ, Evocabank: Մենք սպասում ենք Ձեր զանգին...",
    btnText: "Իմանալ ավելին",
    bgColor: "bg-black",
    textColor: "text-white",
    btnBg: "bg-white text-black hover:bg-gray-200",
    imgUrl: "https://v1.screenshot.api.evocabank.am/8444.png"
  },
  {
    title: "Visa Vision",
    description: "Ձեռք բեր Visa Vision քարտ քո նախընտրած գույնով, դիզայնով ու ոճով և օգտվիր բազմաթիվ առավելություններից",
    btnText: "Իմանալ ավելին",
    bgColor: "bg-[#27272a]", // dark slate
    textColor: "text-white",
    btnBg: "bg-white text-purple-900 hover:bg-gray-100",
    imgUrl: "https://v1.screenshot.api.evocabank.am/visavision.png"
  },
  {
    title: "Visa Infinite",
    description: "Ձեռք բեր Visa վճարային համակարգի ամենաբարձր դասի քարտը հենց հիմա",
    btnText: "Իմանալ ավելին",
    bgColor: "bg-[#09090b]", // dark theme with purple glow
    textColor: "text-white",
    btnBg: "bg-white text-purple-900 hover:bg-gray-100",
    imgUrl: "https://v1.screenshot.api.evocabank.am/visainfinite.png"
  },
  {
    title: "Հիփոթեքային վարկեր Evocabank-ում՝ ամենահարմար պայմաններով",
    description: "Ձեռք բեր քո երազանքի բնակարանը՝ ցածր տոկոսադրույքով:",
    btnText: "Իմանալ ավելին",
    bgColor: "bg-[#e9d5ff]", // soft lavender
    textColor: "text-purple-950",
    btnBg: "bg-[#7c3aed] text-white hover:bg-purple-800",
    imgUrl: "https://v1.screenshot.api.evocabank.am/mortgage.png"
  },
  {
    title: "UnionPay Gold",
    description: "Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը",
    btnText: "Իմանալ ավելին",
    bgColor: "bg-[#b45309]", // mustard gold
    textColor: "text-white",
    btnBg: "bg-[#7c3aed] text-white hover:bg-purple-800",
    imgUrl: "https://v1.screenshot.api.evocabank.am/unionpay.png"
  },
  {
    title: "Օնլայն ավանդ EvocaTOUCH հավելվածով",
    description: "Դի'ր ավանդ Evocabank-ում' բարձր, շա'տ բարձր տոկոսներով:",
    btnText: "Ծանոթանալ պայմաններին",
    bgColor: "bg-[#fbcfe8]", // pink/lavender tint
    textColor: "text-gray-900",
    btnBg: "bg-[#7c3aed] text-white hover:bg-purple-800",
    imgUrl: "https://v1.screenshot.api.evocabank.am/deposit.png"
  }
];

export default function HeroSlider() {
  return (
    <div className="w-full relative overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: '.custom-pagination' }}
        navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
        className="w-full"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`w-full min-h-[420px] md:min-h-[480px] ${slide.bgColor} ${slide.textColor} flex items-center justify-between px-8 md:px-20 relative rounded-bl-[100px] transition-colors duration-500`}>
              
              {/* Left Content */}
              <div className="max-w-xl z-10 py-12">
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg mb-8 opacity-90">
                  {slide.description}
                </p>
                <button className={`px-7 py-3 rounded-full font-bold text-sm transition-all shadow-md ${slide.btnBg}`}>
                  {slide.btnText}
                </button>
              </div>

              {/* Right Image Container */}
              <div className="hidden md:flex items-center justify-center max-w-md lg:max-w-lg z-10">
                <img 
                  src={slide.imgUrl} 
                  alt={slide.title} 
                  className="max-h-[350px] object-contain drop-shadow-2xl" 
                />
              </div>

            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation and Pagination Controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
          <button className="custom-prev text-2xl font-bold hover:scale-125 transition cursor-pointer">
            &larr;
          </button>
          
          <div className="custom-pagination flex items-center gap-1.5 cursor-pointer"></div>

          <button className="custom-next text-2xl font-bold hover:scale-125 transition cursor-pointer">
            &rarr;
          </button>
        </div>
      </Swiper>
    </div>
  );
}