import React from 'react';
import { Link } from 'react-router-dom';

// Swiper component-ների և module-ների ներմուծում
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Swiper-ի ոճերի ներմուծում
import 'swiper/css';
import 'swiper/css/pagination';

export default function EvocaTouchPage() {
  const documents = [
    { 
      title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025", 
      link: "https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf" 
    },
    { 
      title: "SWIFT Transfers (20.03.2026)", 
      link: "https://www.evoca.am/files/global_files/1/evocatouch-eng.pdf" 
    },
    { 
      title: "SWIFT переводы в РФ (20.03.2026)", 
      link: "https://www.evoca.am/files/global_files/1/evocatouch-rus.pdf" 
    }
  ];

  // Կարծիքների տվյալների զանգված
  const reviews = [
    {
      id: 1,
      text: "Հայաստանի իրականության մեջ բացառիկ հրաշք բանկ: Միայն այս հնարավորությունը ընձեռելով երիտասարդ ընտանիքներին ` նման ցածր տոկոսով բնակարան ձեռք բերել, արժանի է մեծ հարգանքի: Շնորհակալ ենք, որ Դուք կաք:",
      author: "Սուսաննա Վանյան",
      role: "Հաճախորդ"
    },
    {
      id: 2,
      text: "Գերազանց սպասարկում, ընտիր ու հավես անձնակազմ Ազատության մասնաճյուղում: Վարկային բաժնից շատ շնորհակալ եմ, վարկս ձևակերպվեց առանց ավելորդ քաշքշուկների` հեշտ, արագ, որակով: Սպասարկման...",
      author: "Նունե Գևորգյան",
      role: "Հաճախորդ"
    },
    {
      id: 3,
      text: "Դեպի նոր իրականություն. ահա թե ուր ենք մենք շարժվում ամեն մի նախագիծ Evocabank-ի հետ հաջողությամբ ավարտելիս: Ավելի քան 5 տարի համագործակցելով` կարելի է ասել, որ միասին անցել ենք մի մեծ ճանապարհ` լի...",
      author: "Արամ Ազարյան",
      role: "Indigo Branding-ի հիմնադիր"
    },
    {
      id: 4,
      text: "Լավագույն նորարարական և թվային բանկ` լավագույն ծառայություններով և անձնակազմով:",
      author: "Էլեն Վարդանյան",
      role: "Հաճախորդ"
    },
    {
      id: 5,
      text: "Բանկ, որ իր ռեբրենդինգի շքեղ միջոցառմամբ ու աշխատանքային ձևաչափով բանկային ոլորտում ամրապնդեց որակ և ճաշակ թելադրեց: Evocabank-ն առաջին իսկ վայրկյանից ստիպեց նորովի և ժամանակակից...",
      author: "Կամո Թովմասյան",
      role: "KAMOBLOG մեդիա-հարթակի հիմնադիր, influencer"
    }
  ];

  return (
    <div className="w-full bg-white min-h-screen text-gray-800 font-sans flex flex-col justify-between">
      
      <div>
        {/* Էջի բովանդակության կոնտեյներ */}
        <main className="max-w-5xl mx-auto px-6 py-10">
          
          {/* Breadcrumb նավիգացիա */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-purple-700 transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>
            <span>›</span>
            <Link to="/" className="hover:text-purple-700 transition">Անհատ</Link>
            <span>›</span>
            <span className="text-gray-400">EvocaTOUCH</span>
          </nav>

          {/* Էջի Վերնագիր */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">
            EvocaTOUCH
          </h1>

          {/* Տեքստային հատված */}
          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-700 max-w-4xl">
            <p>
              Շատերին թվում է՝ դժվար ու անիրական է ֆինանսական ոլորտում լինել կրեատիվ, սակայն Evocabank-ին տարիներ շարունակ հաջողվում է գտնել out of box լուծումներ և շուկային ներկայանալ նոր և ժամանակակից պրոդուկտներով:
            </p>

            <p>
              Այդ գաղափարների շարքից է նոր EvocaTOUCH հավելվածը, որն առանձնանում է ժամանակակից թվային լուծումներով և հնարավորություններով:
            </p>

            <p>
              EvocaTOUCH հավելվածն անվտանգ է, հարմար և նախատեսված է անմիջապես smartphone-ից մի շարք բանկային ծառայություններից օգտվելու համար: Կարևորելով հավելվածի անվտանգ օգտագործումը՝ Բանկն ապահովում է օգտատերերի մասին ինֆորմացիայի և կատարած գործարքների պաշտպանությունը՝ օգտագործելով գաղտնագրման վերջին տեխնոլոգիաները:
            </p>

            <p>
              EvocaTOUCH հավելվածը կառուցված է այս պահին հայտնի ամենավերջին մոբայլ տեխնոլոգիաներով:
            </p>

            <p>
              Հավելվածը գրվել է User Interface և User Experience նորագույն սկզբունքներով, ունի գունային 2 appearance՝ Dark և Light: Այն ավելի նման է facebook-ի կամ instagram-ի feed-ի՝ ամենակարևոր ու շատ օգտագործվող ֆունկցիաներն անմիջապես առաջին էջին են՝ Քարտեր, Հաշիվներ, Վարկեր, Ավանդներ: Օգտատերերը հնարավորություն ունեն ստեղծել Template-ներ, որի շնորհիվ բանկային փոխանցումները կատարվում են ավելի արագ ու հեշտ: Հնարավոր է ծանոթանալ Բանկի նորություններին ու ամենաակտուալ պրոդուկտներին՝ թերթվող story-ների միջոցով:
            </p>

            <p>
              EvocaTOUCH հավելվածը 24/7 հասանելի է իր բոլոր օգտատերերին աշխարհի ցանկացած կետից, ցանկացած ժամի:
            </p>

            <p>
              Նոր հավելվածն առաջարկում է գործառույթների լայն շրջանակ, որը ներառում է ամենօրյա բանկային գործընթացները՝ վերացնելով ֆիզիկական մասնաճյուղ այցելելու անհրաժեշտությունը: Առանց գրանցման և սպասարկման վճարի՝ օգտատերերը կարող են.
            </p>

            {/* Կետերով ցանկ */}
            <ul className="space-y-3 pl-2 py-2">
              <li className="flex items-start gap-3 text-gray-800">
                <span className="w-2.5 h-2.5 bg-[#6c00ff] rounded-full mt-2 flex-shrink-0"></span>
                <span>Բացել բանկային հաշիվներ,</span>
              </li>
              <li className="flex items-start gap-3 text-gray-800">
                <span className="w-2.5 h-2.5 bg-[#6c00ff] rounded-full mt-2 flex-shrink-0"></span>
                <span>Պատվիրել քարտ կամ բացել թվային քարտ վայրկյանների ընթացքում,</span>
              </li>
              <li className="flex items-start gap-3 text-gray-800">
                <span className="w-2.5 h-2.5 bg-[#6c00ff] rounded-full mt-2 flex-shrink-0"></span>
                <span>Ստանալ վարկ,</span>
              </li>
              <li className="flex items-start gap-3 text-gray-800">
                <span className="w-2.5 h-2.5 bg-[#6c00ff] rounded-full mt-2 flex-shrink-0"></span>
                <span>Ներդնել ավանդ,</span>
              </li>
              <li className="flex items-start gap-3 text-gray-800">
                <span className="w-2.5 h-2.5 bg-[#6c00ff] rounded-full mt-2 flex-shrink-0"></span>
                <span>Կատարել փոխանցումներ հաշիվներին և քարտերին, ինչպես հայաստանյան, այնպես էլ արտերկրյա բանկերին,</span>
              </li>
              <li className="flex items-start gap-3 text-gray-800">
                <span className="w-2.5 h-2.5 bg-[#6c00ff] rounded-full mt-2 flex-shrink-0"></span>
                <span>Կատարել բանկային փոխանցումներ և վճարումներ,</span>
              </li>
              <li className="flex items-start gap-3 text-gray-800">
                <span className="w-2.5 h-2.5 bg-[#6c00ff] rounded-full mt-2 flex-shrink-0"></span>
                <span>Կատարել կոմունալ վճարումներ,</span>
              </li>
              <li className="flex items-start gap-3 text-gray-800">
                <span className="w-2.5 h-2.5 bg-[#6c00ff] rounded-full mt-2 flex-shrink-0"></span>
                <span>Առցանց ստանալ ավտոմեքենաների տուգանքները և իրականացնել վճարումներ մեկ հպումով,</span>
              </li>
              <li className="flex items-start gap-3 text-gray-800">
                <span className="w-2.5 h-2.5 bg-[#6c00ff] rounded-full mt-2 flex-shrink-0"></span>
                <span>Կատարել փոխանցումներ կոնտակտային տվյալներով,</span>
              </li>
              <li className="flex items-start gap-3 text-gray-800">
                <span className="w-2.5 h-2.5 bg-[#6c00ff] rounded-full mt-2 flex-shrink-0"></span>
                <span>24/7 ուղղել հարցեր նամակի միջոցով:</span>
              </li>
            </ul>

            <p>
              Հավելվածի հիմնական ուժեղ կողմերից մեկն անհատականացված բանկային ծառայության տրամադրումն է: Հաճախորդակենտրոն մոտեցման շնորհիվ՝ Բանկը հնարավորություն է տալիս օգտատերերին հավելվածը հարմարեցնել իրենց նախասիրություններին և կարիքներին:
            </p>

            <p>
              Հավելվածից օգտվելու հարմարավետությունն ու անվտանգությունը բարձրացնելու համար օգտատերը կարող է ակտիվացնել կենսաչափական նույնականացումը՝ օգտագործելով մատնահետքի կամ դեմքի ճանաչման համակարգերը: Բացի այդ, նոր հավելվածն առաջարկում է արագ և հեշտ ինտեգրում այլ ֆինանսական գործիքների հետ, ինչը թույլ է տալիս օգտատերերին կառավարել իրենց ֆինանսները մեկ հավելվածի միջոցով:
            </p>

            <p>
              EvocaTOUCH-ի միջոցով օգտատերերը կարող են 24/7 հասանելիություն ունենալ իրենց ֆինանսներին, վերահսկել իրենց դրամական միջոցները, արագ ու անվտանգ գործարքներ կատարել աշխարհի ցանկացած կետից, ցանկացած ժամի:
            </p>

            <p>
              EvocaTOUCH-ը պարզապես բանկային հավելված չէ. կարծում ենք, այն ձեզ համար դառնալու է ապրելակերպի մի մաս:
            </p>
          </div>

          {/* Փաստաթղթեր Բաժին */}
          <div className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Փաստաթղթեր
            </h2>

            <div className="space-y-3">
              {documents.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#f8f5fe] rounded-xl hover:bg-[#f0e8ff] transition-colors group"
                >
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#efe7fe] text-[#6c00ff] group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium text-sm sm:text-base">
                    {doc.title}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </main>

        {/* Օնլայն և մոբայլ բանկինգ Banner */}
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

        {/* Կարծիքների Սլայդեր Բաժին */}
        <section className="w-full bg-[#f6f3f9] py-16 px-4 relative overflow-hidden my-10 select-none">
          
          {/* Նավիգացիոն մենյու / Navigation Bar */}
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-gray-200 pb-6 px-4">
            
            {/* Բանկի Լոգո / Գլխավոր հղում */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-black tracking-widest text-[#6c00ff] group-hover:opacity-80 transition">
                EVOCA<span className="text-gray-900">BANK</span>
              </span>
            </Link>

            {/* Նավիգացիոն հղումներ */}
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-gray-600">
              <Link to="/" className="hover:text-[#6c00ff] transition-colors">
                Գլխավոր
              </Link>
              <Link to="/about" className="hover:text-[#6c00ff] transition-colors">
                Մեր մասին
              </Link>
              <Link to="/services" className="hover:text-[#6c00ff] transition-colors">
                Ծառայություններ
              </Link>
              {/* Ակտիվ կոճակ «Կարծիքներ» բաժնի համար */}
              <Link 
                to="/reviews" 
                className="text-[#6c00ff] font-bold border-b-2 border-[#6c00ff] pb-1 transition-all"
              >
                Կարծիքներ
              </Link>
              <Link to="/contact" className="hover:text-[#6c00ff] transition-colors">
                Կապ
              </Link>
            </nav>

            {/* Կոճակ՝ «Թողնել կարծիք» */}
            <div>
              <Link
                to="/add-review"
                className="inline-flex items-center justify-center bg-[#6c00ff] text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#5800d4] transition-all shadow-md hover:shadow-lg"
              >
                Թողնել կարծիք
              </Link>
            </div>
          </div>

          {/* Կարծիքների սլայդերի կոնտենտ */}
          <div className="max-w-6xl mx-auto relative flex items-center justify-between">

            {/* Ձախ կողմի դեկորացիա (OK Hand) */}
            <div className="hidden lg:flex flex-col items-center justify-center w-36 shrink-0">
              <img 
                src="https://www.evoca.am/files/global_files/1/ok-hand.png" 
                alt="OK Hand" 
                className="w-24 h-auto object-contain drop-shadow-md"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <svg className="w-12 h-6 text-[#6c00ff] mt-4" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M0 10 L10 2 L20 18 L30 2 L40 18 L50 10" />
              </svg>
            </div>

            {/* Swiper Slider */}
            <div className="w-full max-w-3xl mx-auto px-4">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  el: '.custom-swiper-pagination',
                }}
                className="w-full"
              >
                {reviews.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Link 
                      to="/reviews" 
                      className="flex flex-col items-center justify-center text-center px-2 sm:px-8 py-4 cursor-pointer group block"
                    >
                      <div className="flex justify-center gap-1.5 mb-6 text-amber-400 text-2xl">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                      </div>

                      <div className="relative w-full max-w-2xl my-2 px-6">
                        <span className="text-[#6c00ff] text-3xl sm:text-4xl font-serif font-bold absolute -left-2 sm:left-0 top-0">
                          ‟‟
                        </span>

                        <p className="text-gray-800 group-hover:text-[#6c00ff] transition-colors text-base sm:text-lg leading-relaxed font-medium px-4">
                          {item.text.split(/(Evocabank)/g).map((part, index) =>
                            part === 'Evocabank' ? (
                              <span key={index} className="text-[#6c00ff] font-bold">
                                {part}
                              </span>
                            ) : (
                              part
                            )
                          )}
                        </p>

                        <span className="text-[#6c00ff] text-3xl sm:text-4xl font-serif font-bold absolute -right-2 sm:right-0 bottom-0">
                          ‟‟
                        </span>
                      </div>

                      <div className="mt-8 flex flex-col items-center">
                        <h4 className="text-gray-900 group-hover:text-[#6c00ff] transition-colors font-bold text-base sm:text-lg">
                          {item.author}
                        </h4>
                        <span className="text-gray-500 text-sm mt-1">
                          {item.role}
                        </span>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination Կետիկներ */}
              <div className="custom-swiper-pagination flex justify-center items-center gap-2.5 mt-8"></div>
            </div>

            {/* Աջ կողմի դեկորացիա (Thumbs Up) */}
            <div className="hidden lg:flex flex-col items-center justify-center w-36 shrink-0">
              <img 
                src="https://www.evoca.am/files/global_files/1/thumbs-up.png" 
                alt="Thumbs Up" 
                className="w-24 h-auto object-contain drop-shadow-md"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <svg className="w-12 h-6 text-[#ff00ea] mt-4" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M0 10 L10 2 L20 18 L30 2 L40 18 L50 10" />
              </svg>
            </div>

          </div>

          {/* Custom Pagination Styles */}
          <style>{`
            .custom-swiper-pagination .swiper-pagination-bullet {
              width: 9px;
              height: 9px;
              background-color: #cbd5e1;
              opacity: 1;
              transition: all 0.3s ease;
              border-radius: 50%;
              cursor: pointer;
            }
            .custom-swiper-pagination .swiper-pagination-bullet-active {
              background-color: #6c00ff;
              transform: scale(1.25);
            }
          `}</style>
        </section>
      </div>

      {/* FOOTER SECTION */}
      <footer className="w-full bg-[#f9f9fb] pt-12 text-gray-700 text-sm border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10">
          
          {/* Սյունակ 1․ Լոգո և հասցե */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-black tracking-widest text-[#6c00ff]">
                EVOCA<span className="text-gray-900">BANK</span>
              </span>
            </Link>
            
            <p className="text-gray-600 font-medium">
              ք. Երևան, 0010,<br />
              Հանրապետության 44/2
            </p>

            <div className="text-xs text-gray-500 space-y-2 pt-2">
              <p className="font-semibold text-gray-800">
                Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
              </p>
              <p className="text-gray-400">
                1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
              </p>
            </div>
          </div>

          {/* Սյունակ 2․ Բանկի մասին */}
          <div>
            <h3 className="font-bold text-gray-900 text-base mb-4">Բանկի մասին</h3>
            <ul className="space-y-2.5 text-gray-600 text-xs sm:text-sm">
              <li><Link to="/about" className="hover:text-[#6c00ff] transition">Մեր մասին</Link></li>
              <li><Link to="/management" className="hover:text-[#6c00ff] transition">Ղեկավարություն</Link></li>
              <li><Link to="/shareholders" className="hover:text-[#6c00ff] transition">Բաժնետերեր</Link></li>
              <li><Link to="/reports" className="hover:text-[#6c00ff] transition">Հաշվետվություններ</Link></li>
              <li><Link to="/legal-acts" className="hover:text-[#6c00ff] transition">Իրավական ակտեր</Link></li>
              <li><Link to="/tariffs" className="hover:text-[#6c00ff] transition">Սակագներ</Link></li>
              <li><Link to="/disposed-property" className="hover:text-[#6c00ff] transition">Օտարվող գույք</Link></li>
              <li><Link to="/developers" className="hover:text-[#6c00ff] transition">Կառուցապատողներ</Link></li>
              <li><Link to="/partner-salons" className="hover:text-[#6c00ff] transition">Գործընկեր ավտոսրահներ</Link></li>
              <li><Link to="/tariffs-archive" className="hover:text-[#6c00ff] transition">Սակագների արխիվ</Link></li>
            </ul>
          </div>

          {/* Սյունակ 3․ Օգտակար հղումներ */}
          <div>
            <h3 className="font-bold text-gray-900 text-base mb-4">Օգտակար հղումներ</h3>
            <ul className="space-y-2.5 text-gray-600 text-xs sm:text-sm">
              <li><Link to="/customer-rights" className="hover:text-[#6c00ff] transition">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</Link></li>
              <li><Link to="/residency-criteria" className="hover:text-[#6c00ff] transition">Հաճախորդի ռեզիդենտության չափանիշներ</Link></li>
              <li><Link to="/regulation" className="hover:text-[#6c00ff] transition">Կարգավորում</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#6c00ff] transition">Գաղտնիության քաղաքականություն</Link></li>
              <li><Link to="/financial-mediator" className="hover:text-[#6c00ff] transition">Ֆին․ հաշտարար</Link></li>
              <li><Link to="/financial-crime-prevention" className="hover:text-[#6c00ff] transition">Ֆինանսական հանցագործությունների կանխարգելում</Link></li>
              <li><Link to="/debtors-links" className="hover:text-[#6c00ff] transition">Հղումներ Բանկի պարտապանների համար</Link></li>
            </ul>
          </div>

          {/* Սյունակ 4․ Այլ հղումներ */}
          <div>
            <h3 className="font-bold text-gray-900 text-base mb-4">Այլ հղումներ</h3>
            <ul className="space-y-2.5 text-gray-600 text-xs sm:text-sm">
              <li><a href="https://online.evoca.am" target="_blank" rel="noopener noreferrer" className="hover:text-[#6c00ff] transition">EvocaONLINE</a></li>
              <li><Link to="/safes" className="hover:text-[#6c00ff] transition">Պահատուփեր</Link></li>
              <li><Link to="/faq" className="hover:text-[#6c00ff] transition">Հաճախ տրվող հարցեր</Link></li>
              <li><Link to="/announcements" className="hover:text-[#6c00ff] transition">Հայտարարություններ</Link></li>
              <li><Link to="/dlibrary" className="hover:text-[#6c00ff] transition">Dlibrary</Link></li>
              <li><Link to="/booklets" className="hover:text-[#6c00ff] transition">Բուկլետներ</Link></li>
              <li><Link to="/feedback" className="hover:text-[#6c00ff] transition">Հետադարձ կապ</Link></li>
              <li><Link to="/sitemap" className="hover:text-[#6c00ff] transition">Կայքի քարտեզ</Link></li>
            </ul>
          </div>

          {/* Սյունակ 5․ Սոց․ ցանցեր և Կոնտակտներ */}
          <div className="space-y-6">
            {/* Սոց․ ցանցերի իքոններ */}
            <div className="flex items-center gap-3 text-gray-500">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#6c00ff] transition">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#6c00ff] transition">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#6c00ff] transition">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#6c00ff] transition">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#6c00ff] transition">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>

            {/* App Store & Google Play */}
            <div className="flex flex-col gap-2">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
              </a>
            </div>

            {/* Կոնտակտային տվյալներ */}
            <div className="space-y-2 pt-2">
              <Link to="/branches" className="text-[#6c00ff] font-semibold hover:underline block text-sm">
                Բանկի հասցեները և աշխատաժամերը
              </Link>
              <Link to="/contact" className="text-[#6c00ff] font-semibold hover:underline block text-sm">
                Կապ մեզ հետ
              </Link>
              <div className="pt-2 text-gray-800 font-bold text-base">
                <a href="tel:+37410605555" className="hover:text-[#6c00ff] transition block">+374 10 605555</a>
                <a href="tel:8444" className="hover:text-[#6c00ff] transition block mt-1">8444</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner Bar */}
        <div className="bg-[#e9ecef] text-gray-500 text-[11px] leading-tight py-4 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="max-w-4xl text-justify">
              Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
            </p>
            <div className="flex items-center gap-3 shrink-0 opacity-70">
              <span className="font-bold text-xs">fininfo</span>
              <span className="font-bold text-xs">abcfinance.am</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}