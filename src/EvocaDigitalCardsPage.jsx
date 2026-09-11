import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const otherNews = [
  {
    id: 1,
    title: "Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով",
    date: "21.08.2026",
    imgUrl: "https://www.evoca.am/images-cache/news/1/17873217684586/439x320.png",
    link: "/news/back-to-school"
  },
  {
    id: 2,
    title: "Evocabank-ն ու Wilco-ն ներկայացնում են բացառիկ համատեղ քարտ",
    date: "15.06.2026",
    imgUrl: "https://www.evoca.am/images-cache/news/1/17815163976713/428x321.png",
    link: "/news/evocabank-wilco"
  },
  {
    id: 3,
    title: "Վճարիր Evoca Mastercard-ով Adidas Armenia-ում և ստացիր 10% զեղչ",
    date: "03.06.2026",
    imgUrl: "https://www.evoca.am/images-cache/news/1/17804748057663/428x321.png",
    link: "/news/adidas-armenia"
  }
];

export default function EvocaDigitalCardsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-800 font-sans flex flex-col justify-between">
      
      <div>
        {/* Նավիգացիոն հատված (Breadcrumbs & Back button) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 pb-4 flex flex-wrap items-center justify-between gap-4">
          
          {/* Վերադառնալ կոճակ */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span className="text-lg">←</span> Վերադառնալ
          </button>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 font-medium">
            <Link to="/" className="hover:text-purple-600">
              <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <span>›</span>
            <Link to="/news" className="hover:text-purple-600">Նորություններ</Link>
            <span>›</span>
            <Link to="/products" className="hover:text-purple-600">Պրոդուկտներ</Link>
            <span>›</span>
            <span className="text-gray-900 font-semibold">Evoca Digital քարտեր</span>
          </div>
        </div>

        {/* Հիմնական բովանդակության banner բլոկ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
          <div className="bg-[#f5f6fa] rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
            
            {/* Ձախ կողմ՝ Տեքստային հատված */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
              
              {/* Պրոդուկտներ tag */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-2 bg-[#d900ff] rounded-sm" />
                <span className="text-sm font-bold text-[#6c00ff] tracking-wide">
                  Պրոդուկտներ
                </span>
              </div>

              {/* Վերնագիր */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                Evoca Digital քարտեր
              </h1>

              {/* Նկարագրություն */}
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10 font-medium">
                Թվային ապագան Evoca-ում է․ EvocaTOUCH հավելվածում արդեն կարող ես ձեռք բերել Evoca Digital քարտերը՝ քո նախընտրած դիզայնով։
              </p>

              {/* Ամսաթիվ */}
              <div className="text-xs text-gray-400 font-semibold tracking-wider">
                16.06.2023
              </div>
            </div>

            {/* Աջ կողմ՝ Գլխավոր նկարը */}
            <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-full bg-[#11052C] flex items-center justify-center overflow-hidden">
              <img
                src="https://www.evoca.am/images-cache/news/1/16868326578274/780x585.png"
                alt="Evoca Digital Cards"
                className="w-full h-full object-cover object-center"
              />
            </div>

          </div>

          {/* Հոդվածի մանրամասն տեքստը */}
          <div className="max-w-4xl mx-auto mt-12 space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed font-normal">
            
            <p>
              Այսուհետ «Քարտս թողեցի տանը», «Քարտս մնաց մյուս պայուսակիս մեջ», «Քարտս մոռացա բանկոմատի մեջ» և նմանատիպ շատ այլ արտահայտություններ ակտուալ չեն մեզ մոտ: <strong className="text-[#6c00ff]">Evoca Digital քարտը</strong> <strong className="text-gray-900">Visa</strong> միջազգային վճարային համակարգի թվային քարտ է, որի միջոցով կարող ես իրականացնել քարտային բոլոր տեսակի գործարքներ՝ միայն այն տարբերությամբ, որ քարտը քեզ մոտ կլինի ոչ թե ֆիզիկապես, այլ քո <strong className="text-[#6c00ff]">EvocaTOUCH</strong> հավելվածում:
            </p>

            <p>
              Քո բոլոր թվային գործարքները այժմ կլինեն ավելի արագ ու ապահով: Կարող ես կատարել վճարումներ օնլայն հարթակում ցանկացած վայրից և ցանկացած ժամի: Թվային քարտը կարող ես կցել նաև <strong>Apple Pay</strong>-ին և <strong>Google Pay</strong>-ին:
            </p>

            <p>
              <strong className="text-[#6c00ff]">Evoca Digital քարտը</strong> կարող ես պատվիրել <strong className="text-[#6c00ff]">EvocaTOUCH</strong> հավելվածով, և քարտը կակտիվանա րոպեների ընթացքում: Ի դեպ, քարտը մինչև <strong className="text-[#6c00ff]">դեկտեմբերի 31-ը</strong> պատվիրելու դեպքում՝ այն կստանաս ամբողջովին <strong className="text-[#6c00ff]">ԱՆՎՃԱՐ</strong>: Թվային քարտը քոնը կլինի քո իսկ նախընտրած արժույթով և դիզայնով:
            </p>

            <p>
              Ի դեպ, հավելվածում դու կգտնես <strong className="text-[#6c00ff]">Evoca Digital քարտի</strong> 5 դիզայն: Կարող ես ընտրել քո սիրելի դիզայնը և փոփոխել այն երբ ցանկանաս: Իսկ շուտով քեզ սպասվում են թվային քարտի դիզայնի շաաատ հետաքրքիր տարբերակներ:
            </p>

            {/* 5 Դիզայնների նկարը */}
            <div className="my-8 rounded-2xl overflow-hidden shadow-md">
              <img 
                src="https://www.evoca.am/file_manager/CreditCard_Template%D5%B6%D5%A5%D5%B8.png" 
                alt="Evoca Digital Card Designs" 
                className="w-full h-auto object-cover"
              />
            </div>

            <p>
              <strong className="text-[#6c00ff]">Evoca Digital քարտերի</strong> պայմաններին ավելի մանրամասն կարող ես ծանոթանալ{' '}
              <Link to="/terms" className="text-[#6c00ff] font-bold underline hover:text-purple-800">
                այստեղ
              </Link>:
            </p>

            <p className="italic text-gray-600 my-4">
              Իսկ հիմա եկեք խոսենք ֆիզիկական և թվային քարտերի տարբերության մասին.
            </p>

            <p>
              Ֆիզիկական քարտի վրա երևում է քարտի համարը, CVV կոդը և ժամկետի ավարտը, իսկ թվային քարտի դեպքում՝ տվյալ ինֆորմացիան հասանելի է միայն հավելվածում: Մյուս տարբերությունն այն է, որ թվային քարտով օնլայն գործարք իրականացնելիս ոչ մի ֆինանսական տվյալ չի փոխանցվում, ինչն էլ ապահովում է առավելագույն անվտանգություն:
            </p>

            <p className="italic font-medium text-gray-700 mt-8">
              Ամփոփելով նշենք թվային քարտերի հիմնական առավելությունները.
            </p>

            <ul className="space-y-4 my-6 pl-2">
              <li className="flex items-start gap-3">
                <span className="inline-block w-3 h-3 bg-[#6c00ff] rounded-full mt-2 shrink-0" />
                <div>
                  <strong>Արագություն</strong> - ի տարբերություն ֆիզիկական քարտի՝ թվային քարտն ակտիվանում է վայրկյանների ընթացքում: Քարտի ժամկետը լրանալու դեպքում առանց ավելորդ ժամանակ կորցնելու՝ կարող ես շատ արագ վերաակտիվացնել այն: Թվային քարտը նաև հեշտ վերահսկելի է: Այն հնարավոր է ակտիվացնել և ապաակտիվացնել մեկ ակնթարթում:
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-block w-3 h-3 bg-[#6c00ff] rounded-full mt-2 shrink-0" />
                <div>
                  <strong>Անվտանգություն</strong> - քարտի տվյալները հասանելի են միայն հավելվածում, ինչն էլ պաշտպանում է երրորդ կողմի հնարավոր խարդախություններից: Թվային քարտերի դեպքում այն բանկոմատներում մնալու կամ մոռանալու տարբերակներից նույնպես կարող ես խուսափել:
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-block w-3 h-3 bg-[#6c00ff] rounded-full mt-2 shrink-0" />
                <div>
                  <strong>Ճկունություն</strong> - այժմ <strong className="text-[#6c00ff]">EvocaTOUCH</strong> հավելվածում հասանելի է թվային քարտի 5 դիզայն: Շուտով կներկայացնենք մի շարք նոր, հետաքրքիր դիզայններ: Այս ամենի հետ մեկտեղ, դու նաև հնարավորություն ունես ցանկացած պահի փոխել քարտիդ դիզայնը:
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-block w-3 h-3 bg-[#6c00ff] rounded-full mt-2 shrink-0" />
                <div>
                  <strong>Պարզություն</strong> - թվային քարտերով յուրաքանչյուր գործընթաց ավելի պարզ է, արագ ու հարմար. այն հիմնականում արտացոլվում է օնլայն հարթակում գնումներ կատարելիս:
                </div>
              </li>
            </ul>

            <p className="pt-4 font-bold text-lg">
              <span className="text-[#6c00ff]">Evoca</span>-ն պատրաստ է թվային ապագային՝ իր նոր թվային լուծումներով, իսկ դո՞ւ:
            </p>

          </div>

          {/* Այլ նորություններ բաժին */}
          <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">
              Այլ Նորություններ
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherNews.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-full h-[220px] overflow-hidden bg-gray-100">
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#6c00ff] transition-colors leading-snug mb-4">
                      {item.title}
                    </h3>
                    <div className="text-xs text-gray-400 font-semibold mt-auto">
                      {item.date}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </main>
      </div>

      {/* FOOTER ԲԱԺԻՆ */}
      <footer className="mt-20 border-t border-gray-200 bg-white pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Վերևի աջ անկյունում՝ Թարմացման ամսաթիվը */}
          <div className="text-right text-xs text-gray-400 font-medium mb-6">
            Թարմացվել է՝ 28/08/2026 17:20
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
            
            {/* Սյունակ 1: Լոգո և հասցե */}
            <div className="lg:col-span-1 space-y-4">
              <div className="flex items-center gap-1 text-2xl font-black text-gray-900">
                evoca<span className="text-xs font-semibold tracking-widest text-gray-500 ml-0.5">BANK</span>
              </div>
              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                ք. Երևան, 0010,<br />
                Հանրապետության 44/2
              </p>
              <p className="text-xs text-gray-500 leading-relaxed pt-2">
                <strong>Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից</strong>
              </p>
              <div className="text-[11px] text-gray-400">
                1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
              </div>
            </div>

            {/* Սյունակ 2: Բանկի մասին */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4">Բանկի մասին</h4>
              <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                <li><Link to="/about" className="hover:text-[#6c00ff]">Մեր մասին</Link></li>
                <li><Link to="/management" className="hover:text-[#6c00ff]">Ղեկավարություն</Link></li>
                <li><Link to="/shareholders" className="hover:text-[#6c00ff]">Բաժնետերեր</Link></li>
                <li><Link to="/reports" className="hover:text-[#6c00ff]">Հաշվետվություններ</Link></li>
                <li><Link to="/legal" className="hover:text-[#6c00ff]">Իրավական ակտեր</Link></li>
                <li><Link to="/tariffs" className="hover:text-[#6c00ff]">Սակագներ</Link></li>
                <li><Link to="/property" className="hover:text-[#6c00ff]">Օտարվող գույք</Link></li>
                <li><Link to="/developers" className="hover:text-[#6c00ff]">Կառուցապատողներ</Link></li>
                <li><Link to="/partners" className="hover:text-[#6c00ff]">Գործընկեր ավտոսրահներ</Link></li>
                <li><Link to="/tariffs-archive" className="hover:text-[#6c00ff]">Սակագների արխիվ</Link></li>
              </ul>
            </div>

            {/* Սյունակ 3: Օգտակար հղումներ */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4">Օգտակար հղումներ</h4>
              <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                <li><Link to="/rights" className="hover:text-[#6c00ff]">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</Link></li>
                <li><Link to="/residence" className="hover:text-[#6c00ff]">Հաճախորդի ռեզիդենտության չափանիշներ</Link></li>
                <li><Link to="/regulation" className="hover:text-[#6c00ff]">Կարգավորում</Link></li>
                <li><Link to="/privacy" className="hover:text-[#6c00ff]">Գաղտնիության քաղաքականություն</Link></li>
                <li><Link to="/mediator" className="hover:text-[#6c00ff]">Ֆին. հաշտարար</Link></li>
                <li><Link to="/aml" className="hover:text-[#6c00ff]">Ֆինանսական հանցագործությունների կանխարգելում</Link></li>
                <li><Link to="/cardholders" className="hover:text-[#6c00ff]">Հղումներ Բանկի քարտապանների համար</Link></li>
              </ul>
            </div>

            {/* Սյունակ 4: Այլ հղումներ */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4">Այլ հղումներ</h4>
              <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                <li><a href="https://evocaonline.am" target="_blank" rel="noreferrer" className="hover:text-[#6c00ff]">EvocaONLINE</a></li>
                <li><Link to="/safes" className="hover:text-[#6c00ff]">Պահատուփեր</Link></li>
                <li><Link to="/faq" className="hover:text-[#6c00ff]">Հաճախ տրվող հարցեր</Link></li>
                <li><Link to="/announcements" className="hover:text-[#6c00ff]">Հայտարարություններ</Link></li>
                <li><Link to="/dlibrary" className="hover:text-[#6c00ff]">Dlibrary</Link></li>
                <li><Link to="/booklets" className="hover:text-[#6c00ff]">Բուկլետներ</Link></li>
                <li><Link to="/feedback" className="hover:text-[#6c00ff]">Հետադարձ կապ</Link></li>
                <li><Link to="/sitemap" className="hover:text-[#6c00ff]">Կայքի քարտեզ</Link></li>
              </ul>
            </div>

            {/* Սյունակ 5: Սոց․ ցանցեր, հավելվածներ և Կոնտակտներ */}
            <div className="space-y-6">
              
              {/* Սոց ցանցերի իկոնաներ */}
              <div className="flex items-center gap-3 text-gray-400">
                <a href="#facebook" className="hover:text-[#6c00ff]"><i className="fab fa-facebook-f text-base"></i></a>
                <a href="#instagram" className="hover:text-[#6c00ff]"><i className="fab fa-instagram text-base"></i></a>
                <a href="#pinterest" className="hover:text-[#6c00ff]"><i className="fab fa-pinterest text-base"></i></a>
                <a href="#youtube" className="hover:text-[#6c00ff]"><i className="fab fa-youtube text-base"></i></a>
                <a href="#linkedin" className="hover:text-[#6c00ff]"><i className="fab fa-linkedin-in text-base"></i></a>
              </div>

              {/* App Store / Google Play կոճակներ */}
              <div className="flex flex-col gap-2">
                <a href="#appstore" className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 w-max hover:opacity-80">
                  <span className="text-xs font-semibold">App Store</span>
                </a>
                <a href="#googleplay" className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 w-max hover:opacity-80">
                  <span className="text-xs font-semibold">Google Play</span>
                </a>
              </div>

              {/* Կոնտակտային տվյալներ */}
              <div className="space-y-2 text-xs">
                <div>
                  <Link to="/branches" className="text-[#6c00ff] font-bold hover:underline">
                    Բանկի հասցեները և աշխատաժամերը
                  </Link>
                </div>
                <div>
                  <Link to="/contact" className="text-[#6c00ff] font-bold hover:underline">
                    Կապ մեզ հետ
                  </Link>
                </div>
                <div className="pt-2 font-bold text-gray-800">
                  +374 10 605555
                </div>
                <div className="font-extrabold text-[#6c00ff] text-sm">
                  8444
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Ներքևի մոխրագույն զոլով տեքստ և լոգոներ */}
        <div className="bg-gray-100 py-6 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <p className="text-[10px] text-gray-500 leading-normal max-w-4xl">
              Հարգելի' այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական կայք տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
            </p>
            
            {/* Գործընկերների/Համակարգերի լոգոներ */}
            <div className="flex flex-wrap items-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
              <span className="text-xs font-bold text-gray-600">fininfo</span>
              <span className="text-xs font-bold text-gray-600">abcfinance.am</span>
              <span className="text-xs font-bold text-gray-600">arca</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Widget Button (Ներքևի աջ անկյունում) */}
      <div className="fixed bottom-4 right-4 z-50">
        <button className="bg-[#6c00ff] text-white px-5 py-3 rounded-full shadow-lg font-bold text-sm flex items-center gap-2 hover:bg-purple-700 transition-colors">
          <span>Գրեք մեզ, մենք օնլայն ենք ։</span>
        </button>
      </div>

    </div>
  );
}