import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ClassicDeposit = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');
  const [selectedCurrency, setSelectedCurrency] = useState('AMD');


   const otherDeposits = [
  {
    id: 1,
    title: 'Դասական ավանդ',
    img: 'https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg',
    link: '/deposits/1/classic',
  },
  {
    id: 2,
    title: 'Մանկական ավանդ',
    img: 'https://www.evoca.am/images-cache/deposits/1/16133900414285/415x261.jpg',
    link: '/deposits/1/mankakan',
  },
  {
    id: 3,
    title: 'Ավանդ Evoca Online',
    img: 'https://www.evoca.am/images-cache/deposits/1/16133900122121/415x261.jpg',
    link: '/deposits/1/evoca-online',
  },
  {
    id: 4,
    title: 'Դասական ավանդ',
    img: 'https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg',
    link: '/deposits/1/classic',
  },
];
  

  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans pb-16 relative">
      {/* Վերևի մանուշակագույն Navbar */}
      <div className="bg-[#6b21a8] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center space-x-6 text-xs md:text-sm py-3 font-semibold">
          <Link to="/deposits" className="bg-purple-950 px-4 py-2 rounded-md font-bold">
            Ավանդներ
          </Link>
          <span className="hover:text-purple-200 cursor-pointer transition">
            Կարևոր տեղեկատվություն
          </span>
        </div>
      </div>

      {/* Hero Header section */}
      <div className="bg-gradient-to-r from-purple-50 via-purple-50 to-purple-100 py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          <div className="md:col-span-7 space-y-4">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900">
              Դասական ավանդ
            </h1>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
              Ձեր անհոգ ապագայի համար առաջարկում ենք ավելացնել Ձեր խնայողությունները` ներդնելով Դասական ավանդ` կայուն և բարձր եկամտաբերությամբ:
            </p>
          </div>
          <div className="md:col-span-5 flex justify-center">
            <img
              src="https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg"
              alt="Դասական ավանդ"
              className="w-full max-w-sm rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* Breadcrumb & «Վերադառնալ» կոճակ */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-6">
        <div className="flex flex-wrap items-center space-x-4 text-xs text-gray-500 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-1 border border-gray-300 px-4 py-1.5 rounded-full hover:bg-gray-50 text-gray-700 font-medium transition"
          >
            <span>←</span>
            <span>Վերադառնալ</span>
          </button>

          <div className="flex items-center space-x-2">
            <span>🏠</span>
            <span>›</span>
            <Link to="/" className="hover:underline">Անհատ</Link>
            <span>›</span>
            <Link to="/deposits" className="hover:underline">Ավանդներ</Link>
            <span>›</span>
            <span className="hover:underline">Ավանդներ</span>
            <span>›</span>
            <span className="text-gray-800 font-medium">Դասական ավանդ</span>
          </div>
        </div>

        {/* Tabs (Ավանդի մասին / Պայմաններ և սակագներ) */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-3 text-sm md:text-base font-bold relative transition ${
                activeTab === 'about'
                  ? 'text-purple-800 border-b-2 border-purple-800'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Ավանդի մասին
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`pb-3 text-sm md:text-base font-bold relative transition ${
                activeTab === 'terms'
                  ? 'text-purple-800 border-b-2 border-purple-800'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Պայմաններ և սակագներ
            </button>
          </div>
        </div>

        {/* Main content + Side stats box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Տեքստային բովանդակություն */}
          <div className="lg:col-span-7 space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>
              Դասական ժամկետային ավանդն ընդունվում է և՛ ֆիզիկական, և՛ իրավաբանական անձանցից: Այն կայուն բարձր եկամտաբերությամբ կավելացնի Ձեր խնայած գումարը: Կուտակված տոկոսագումարները կարող եք ստանալ ինչպես ժամկետի վերջում, այնպես էլ Ձեր նախընտրած պարբերականությամբ: Որպես Բանկի ավանդատու՝ Դուք կստանաք նաև <span className="text-purple-700 font-bold underline cursor-pointer">միջազգային քարտ՝ բացարձակապես անվճար</span>, որին ցանկության դեպքում կփոխանցվեն Ձեր ավանդի տոկոսագումարները:
            </p>
            <p>
              <span className="text-purple-700 font-bold underline cursor-pointer">Ավանդը</span> ձևակերպվում է շատ արագ՝ Բանկի Գլխամասային գրասենյակում և բոլոր մասնաճյուղերում /բացառությամբ Էրեբունի մասնաճյուղի/:
            </p>
            <p>
              Խնայելը Evocabank-ի հետ դառնում է ավելի արդյունավետ և ապահով:
            </p>
          </div>

          {/* Աջ կողմի Տվյալների Card (Արտույթների ընտրությամբ) */}
          <div className="lg:col-span-5 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-6">
            {/* Արտույթների կոճակներ */}
            <div className="flex space-x-2">
              {[
                { symbol: '֏', code: 'AMD' },
                { symbol: '$', code: 'USD' },
                { symbol: '€', code: 'EUR' },
                { symbol: '₽', code: 'RUB' },
              ].map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => setSelectedCurrency(curr.code)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition ${
                    selectedCurrency === curr.code
                      ? 'bg-purple-700 text-white shadow-sm'
                      : 'bg-purple-600 text-white opacity-80 hover:opacity-100'
                  }`}
                >
                  {curr.symbol}
                </button>
              ))}
            </div>

            {/* Պարամետրեր */}
            <div className="divide-y divide-gray-100 space-y-4">
              <div className="flex justify-between items-center pt-2">
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase font-medium">Սկսած</span>
                  <span className="text-xl font-black text-purple-700">100,000 ֏</span>
                </div>
                <span className="text-xs text-gray-600 font-medium">Գումար</span>
              </div>

              <div className="flex justify-between items-center pt-4">
                <div>
                  <span className="text-xl font-black text-purple-700">31-1,825 օր</span>
                </div>
                <span className="text-xs text-gray-600 font-medium">Ժամկետ</span>
              </div>

              <div className="flex justify-between items-center pt-4">
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase font-medium">մինչև</span>
                  <span className="text-xl font-black text-purple-700">10.5% ֏</span>
                </div>
                <span className="text-xs text-gray-600 font-medium">Տոկոսադրույք</span>
              </div>

              <div className="flex justify-between items-center pt-4">
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase font-medium">սկսած</span>
                  <span className="text-xl font-black text-purple-700">100,000 ֏</span>
                </div>
                <span className="text-xs text-gray-600 font-medium">Համալրման հնարավորություն</span>
              </div>
            </div>
          </div>
        </div>

        {/* Այլ ավանդներ Slider / Section */}
    {/* Այլ ավանդներ slider/section */}
<div className="mt-16 pt-8 border-t border-gray-100">
  <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6">
    Այլ ավանդներ
  </h2>

  <div className="relative flex items-center">
    <button className="absolute -left-4 z-10 w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 text-purple-700 font-bold flex items-center justify-center hover:bg-gray-50">
      ‹
    </button>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
      {otherDeposits.map((item) => {
        // Որոշում ենք link-ը ըստ item.id-ի
        const targetLink =
          item.id === 1
            ? '/deposits/1/classic'
            : item.id === 2
            ? '/deposits/1/mankakan'
            : '/deposits/1/evoca-online';

        return (
          <Link
            to={targetLink}
            key={item.id}
            className="group flex flex-col items-center text-center space-y-3 cursor-pointer"
          >
            <div className="w-full h-36 rounded-2xl overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <span className="text-sm font-bold text-gray-800 group-hover:text-purple-700 transition">
              {item.title}
            </span>
          </Link>
        );
      })}
    </div>

    <button className="absolute -right-4 z-10 w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 text-purple-700 font-bold flex items-center justify-center hover:bg-gray-50">
      ›
    </button>
  </div>
</div>
        
      </div>
        {/* ================= Օնլայն և մոբայլ բանկինգ Banner ================= */}
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
              <button className="bg-white text-purple-900 px-6 py-2.5 rounded-full font-bold text-xs hover:bg-purple-50 transition shadow-md">
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

      {/* ================= Footer Section ================= */}
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

export default ClassicDeposit;