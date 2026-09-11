import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function EvocaTouchAppPage() {
  const navigate = useNavigate();

  const otherNews = [
    {
      id: 1,
      title: "Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով",
      date: "21.08.2026",
      image: "https://www.evoca.am/images-cache/news/1/17873217684586/428x321.png",
      link: "/news/back-to-school"
    },
    {
      id: 2,
      title: "Evocabank-ն ու Wilco-ն ներկայացնում են բացառիկ համատեղ քարտ",
      date: "15.06.2026",
      image: "https://www.evoca.am/images-cache/news/1/17815163976713/428x321.png",
      link: "/news/evocabank-wilco"
    },
    {
      id: 3,
      title: "Վճարիր Evoca Mastercard-ով Adidas Armenia-ում և ստացիր 10% զեղչ",
      date: "03.06.2026",
      image: "https://www.evoca.am/images-cache/news/1/17804748057663/428x321.png",
      link: "/news/adidas-armenia"
    }
  ];

  return (
    <div className="w-full bg-[#fcfaff] min-h-screen py-8 px-4 sm:px-8 md:px-16 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto space-y-12 w-full">
        
        {/* Breadcrumb & Back Button */}
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 transition shadow-sm font-medium"
          >
            &larr; Վերադառնալ
          </button>

          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-purple-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>
            <span>&rsaquo;</span>
            <Link to="/news" className="hover:text-purple-600">Նորություններ</Link>
            <span>&rsaquo;</span>
            <span className="text-gray-400">Պրոդուկտներ</span>
            <span>&rsaquo;</span>
            <span className="text-gray-800 font-medium truncate max-w-[200px] sm:max-w-none">
              Նոր EvocaTOUCH հավելվածն արդեն հասանելի է
            </span>
          </div>
        </div>

        {/* Hero Section Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm border border-purple-50">
          
          {/* Left Side Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-block bg-[#e02424] text-white text-xs font-bold px-3 py-1 rounded-sm w-max mb-6">
              Պրոդուկտներ
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Նոր EvocaTOUCH <br />
              հավելվածն արդեն <br />
              հասանելի է
            </h1>

            <p className="text-gray-600 text-sm sm:text-base font-normal">
              Գիտեինք, որ սպասում էիր:
            </p><br /><br />
            <p className="text-gray-400 text-sm">23.05.2023</p>
          </div>

          {/* Right Side Banner Image */}
          <div className="lg:col-span-7 relative w-full h-[280px] sm:h-[380px] bg-gradient-to-r from-[#1e0242] via-[#4c00b0] to-[#6c00ff] rounded-2xl overflow-hidden flex items-center justify-center p-6 sm:p-10 shadow-lg">
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full" viewBox="0 0 500 500">
                <path d="M0 100 L500 400 M0 200 L500 500 M100 0 L500 300" stroke="white" strokeWidth="2" />
              </svg>
            </div>

            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/news/1/16848286806716/780x585.png" 
                alt="EvocaTOUCH" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

        </div>

        {/* Article Text Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm border border-purple-50 space-y-6 text-gray-800 text-sm sm:text-base leading-relaxed">
          
          <p>
            Այոոո՛, այդ օրը եկավ․ վերջապես քո սիրելի <strong className="text-[#6c00ff] font-bold">Evoca</strong>-ն ներկայացրեց իր նոր՝ <strong className="text-[#6c00ff] font-bold">EvocaTOUCH</strong> հավելվածը՝ ժամանակակից, նորագույն թվային լուծումներով ու անսահմանափակ հնարավորություններով։
          </p>

          <p>Գիտեինք, որ սպասում էիր:</p>

          <p>
            Մեր նոր հավելվածը <strong className="text-[#6c00ff] font-bold">24/7</strong> հասանելի է աշխարհի ցանկացած կետից, ցանկացած ժամի՝ պարզ, արագ ու ապահով:
          </p>

          <p>
            <span className="text-[#6c00ff] font-semibold">EvocaTOUCH</span>-ը պարզապես բանկային հավելված չէ, վստահ ենք՝ այն քեզ համար դառնալու է ապրելակերպ:
          </p>

          <p className="font-bold text-gray-900 pt-2">
            Ի՞նչ առավելություններ ունի նոր <span className="text-[#6c00ff]">EvocaTOUCH</span>-ը՝
          </p>

          <ul className="space-y-4 pt-2">
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6c00ff] mt-2 shrink-0" />
              <span>
                Նոր հավելվածը նման է սոցիալական ցանցերի <strong className="text-[#6c00ff]">feed</strong>-ին՝ ամենակարևոր և հաճախ օգտագործվող ֆունկցիաներն անմիջապես առաջին էջում են՝ քարտեր, հաշիվներ, վարկեր, ավանդներ,
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6c00ff] mt-2 shrink-0" />
              <span>
                կարող ես ստեղծել և պահպանել <strong className="text-[#6c00ff]">Ձևանմուշներ</strong>,
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6c00ff] mt-2 shrink-0" />
              <span>
                կարող ես իրականացնել մի շարք բանկային գործընթացներ ընդամենը <strong className="text-[#6c00ff]">մեկ ակնթարթում</strong>,
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6c00ff] mt-2 shrink-0" />
              <span>
                <strong className="text-[#6c00ff]">Story</strong> բաժնում կարող ես ծանոթանալ Բանկի նորություններին ու ամենաակտուալ
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6c00ff] mt-2 shrink-0" />
              <span>
                հավելվածն ունի գունային <strong className="text-[#6c00ff]">2 ինտերֆեյս</strong>՝ բաց և մուգ, որը կարող ես փոխել Կարգավորումներ բաժնից,
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6c00ff] mt-2 shrink-0" />
              <span>
                դե իսկ մյուս բոլոր բանկային գործարքները հասանելի են ավելի նոր, թարմացված, պարզ ու արագ տարբերակով՝ խնայելով քո համար ամենակարևոր ռեսուրսը՝ <strong className="text-[#6c00ff]">ժամանակը</strong>,
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6c00ff] mt-2 shrink-0" />
              <span>
                այլ հետաքրքիր ու կարևոր գործիքների և նորարարությունների մասին կիմանաս շատ շուտով...
              </span>
            </li>
          </ul>

          <div className="pt-4 font-bold text-[#6c00ff] text-base sm:text-lg">
            Նոր EvocaTOUCH-ով հնարավոր է ՄԵԿ ԱԿՆԹԱՐԹՈՒՄ
          </div>

          {/* Embedded YouTube Video Container */}
          <div className="pt-6">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-purple-100">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/KwAgMHEx8ys"
                title="EvocaTOUCH | New EvocaTOUCH app it's possible IN an INSTANT"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Footer Call to Action Text */}
          <div className="pt-4 text-center sm:text-left text-gray-800">
            Սիրով սպասում ենք քեզ մեր նոր թվային աշխարհում՝{' '}
            <a 
              href="https://www.youtube.com/watch?v=KwAgMHEx8ys" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6c00ff] font-bold underline hover:opacity-80 transition"
            >
              EvocaTOUCH 2
            </a>{' '}
            հավելվածում:
          </div>

        </div>

        {/* Այլ Նորություններ Section */}
        <div className="pt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Այլ Նորություններ
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherNews.map((item) => (
              <Link 
                key={item.id} 
                to={item.link} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-48 overflow-hidden bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base line-clamp-2 leading-snug mb-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-0">
                  <span className="text-xs text-gray-400">
                    {item.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-right text-xs text-gray-400 mt-6">
            Թարմացվել է՝ 28/08/2026 17:20
          </div>
        </div>

      </div>

      {/* Footer Section */}
      <footer className="mt-16 pt-12 border-t border-gray-200 bg-white text-xs text-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            
            {/* Logo & Address */}
            <div className="space-y-4 md:col-span-1">
              <div className="text-2xl font-extrabold text-[#6c00ff] tracking-tight">
                evoca<span className="text-gray-900 font-bold">BANK</span>
              </div>
              <p className="leading-relaxed">
                ք. Երևան, 0010,<br />
                Հանրապետության 44/2
              </p>
              <p className="text-[11px] text-gray-500 leading-relaxed pt-2">
                Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից<br /><br />
                1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
              </p>
            </div>

            {/* Column 1 */}
            <div className="space-y-2">
              <h4 className="font-bold text-gray-900 mb-3">Բանկի մասին</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-600">Մեր մասին</a></li>
                <li><a href="#" className="hover:text-purple-600">Ղեկավարություն</a></li>
                <li><a href="#" className="hover:text-purple-600">Բաժնետերեր</a></li>
                <li><a href="#" className="hover:text-purple-600">Հաշվետվություններ</a></li>
                <li><a href="#" className="hover:text-purple-600">Իրավական ակտեր</a></li>
                <li><a href="#" className="hover:text-purple-600">Սակագներ</a></li>
                <li><a href="#" className="hover:text-purple-600">Օտարվող գույք</a></li>
                <li><a href="#" className="hover:text-purple-600">Կառուցապատողներ</a></li>
                <li><a href="#" className="hover:text-purple-600">Գործընկեր ավտոսրահներ</a></li>
                <li><a href="#" className="hover:text-purple-600">Սակագների արխիվ</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-2">
              <h4 className="font-bold text-gray-900 mb-3">Օգտակար հղումներ</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-600">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</a></li>
                <li><a href="#" className="hover:text-purple-600">Հաճախորդի ռեզիդենտության չափանիշներ</a></li>
                <li><a href="#" className="hover:text-purple-600">Կարգավորում</a></li>
                <li><a href="#" className="hover:text-purple-600">Գաղտնիության քաղաքականություն</a></li>
                <li><a href="#" className="hover:text-purple-600">Ֆին․ հաշտարար</a></li>
                <li><a href="#" className="hover:text-purple-600">Ֆինանսական հանցագործությունների կանխարգելում</a></li>
                <li><a href="#" className="hover:text-purple-600">Հղումներ Բանկի քարտապանների համար</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-2">
              <h4 className="font-bold text-gray-900 mb-3">Այլ հղումներ</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-600">EvocaONLINE</a></li>
                <li><a href="#" className="hover:text-purple-600">Պահատուփեր</a></li>
                <li><a href="#" className="hover:text-purple-600">Հաճախ տրվող հարցեր</a></li>
                <li><a href="#" className="hover:text-purple-600">Հայտարարություններ</a></li>
                <li><a href="#" className="hover:text-purple-600">Dlibrary</a></li>
                <li><a href="#" className="hover:text-purple-600">Բուկլետներ</a></li>
                <li><a href="#" className="hover:text-purple-600">Հետադարձ կապ</a></li>
                <li><a href="#" className="hover:text-purple-600">Կայքի քարտեզ</a></li>
              </ul>
            </div>

            {/* Column 4 - Social & Apps */}
            <div className="space-y-4">
              <div className="flex gap-3 text-gray-600 text-base">
                <a href="#" className="hover:text-purple-600">f</a>
                <a href="#" className="hover:text-purple-600">i</a>
                <a href="#" className="hover:text-purple-600">p</a>
                <a href="#" className="hover:text-purple-600">y</a>
                <a href="#" className="hover:text-purple-600">in</a>
              </div>

              <div className="space-y-2 pt-2">
                <a href="#" className="block w-28">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
                </a>
                <a href="#" className="block w-28">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
                </a>
              </div>

              <div className="space-y-2 pt-2">
                <a href="#" className="block font-bold text-[#6c00ff] hover:underline">
                  Բանկի հասցեները և աշխատաժամերը
                </a>
                <a href="#" className="block font-bold text-[#6c00ff] hover:underline">
                  Կապ մեզ հետ
                </a>
                <p className="font-bold text-gray-900 pt-1">+374 10 605555</p>
                <p className="font-bold text-gray-900">8444</p>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}