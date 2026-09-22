import React from 'react';
import { Link } from 'react-router-dom';

const EvocaTouch = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans pb-16">
      <div className="max-w-5xl mx-auto px-4 md:px-8 pt-6">
        
        {/* 1. Breadcrumb Navigation */}
        <div className="text-xs text-gray-500 mb-8 flex items-center space-x-2">
          <span>🏠</span>
          <span>›</span>
          <Link to="/" className="hover:underline">Անհատ</Link>
          <span>›</span>
          <span className="text-gray-800 font-medium">EvocaTOUCH</span>
        </div>

        {/* 2. Վերնագիր */}
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8">
          EvocaTOUCH
        </h1>

        {/* 3. Տեքստային բովանդակություն */}
        <div className="space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed font-medium mb-12">
          <p>
            Շատերին թվում է՝ դժվար ու անիրական է ֆինանսական ոլորտում լինել կրեատիվ, սակայն Evocabank-ին տարիներ շարունակ հաջողվում է գտնել out of box լուծումներ և շուկային ներկայանալ նոր և ժամանակակից պրոդուկտներով:
          </p>

          <p>
            Այդ գաղափարների շարքից է Նոր EvocaTOUCH հավելվածը, որն առանձնանում է ժամանակակից թվային լուծումներով և հնարավորություններով:
          </p>

          <p>
            EvocaTOUCH հավելվածն անվտանգ է, հարմար և նախատեսված է անմիջապես smartphone-ից մի շարք բանկային ծառայություններից օգտվելու համար: Կարևորելով հավելվածի անվտանգ օգտագործումը՝ Բանկնապահովում է օգտատերերի մասին ինֆորմացիայի և կատարած գործարքների պաշտպանությունը՝ օգտագործելով գաղտնագրման վերջին տեխնոլոգիաները:
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

          {/* Բուլետների ցանկ */}
          <ul className="space-y-3 pl-2 md:pl-4 text-purple-900 font-semibold">
            <li className="flex items-start gap-3">
              <span className="text-purple-700 text-lg">•</span>
              <span className="text-gray-800 font-medium">Բացել բանկային հաշիվներ,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 text-lg">•</span>
              <span className="text-gray-800 font-medium">Պատվիրել քարտ կամ բացել թվային քարտ վայրկյանների ընթացքում,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 text-lg">•</span>
              <span className="text-gray-800 font-medium">Ներդնել ավանդ,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 text-lg">•</span>
              <span className="text-gray-800 font-medium">Կատարել փոխանցումներ հաշիվներին և քարտերին, ինչպես հայաստանյան, այնպես էլ արտերկրյա բանկերին,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 text-lg">•</span>
              <span className="text-gray-800 font-medium">Կատարել բանկային փոխանցումներ և վճարումներ,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 text-lg">•</span>
              <span className="text-gray-800 font-medium">Կատարել կոմունալ վճարումներ,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 text-lg">•</span>
              <span className="text-gray-800 font-medium">Առցանց ստանալ ավտոմեքենաների տուգանքները և իրականացնել վճարումներ մեկ հպումով,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 text-lg">•</span>
              <span className="text-gray-800 font-medium">Կատարել փոխանցումներ կոնտակտային տվյալներով,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-700 text-lg">•</span>
              <span className="text-gray-800 font-medium">24/7 ուղղել հարցեր նամակի միջոցով:</span>
            </li>
          </ul>

          <p className="pt-4">
            Հավելվածի հիմնական ուժեղ կողմերից մեկն անհատականացված բանկային ծառայության տրամադրումն է: Հաճախորդակենտրոն մոտեցման շնորհիվ Բանկը հնարավորություն է տալիս օգտատերերին հավելվածը հարմարեցնել իրենց նախասիրություններին և կարիքներին:
          </p>

          <p>
            Հավելվածից օգտվելու հարմարավետությունն ու անվտանգությունը բարձրացնելու համար օգտատերը կարող է ակտիվացնել կենսաչափական նույնականացումը՝ օգտագործելով մատնահետքի կամ դեմքի ճանաչման համակարգերը: Բացի այդ, Նոր հավելվածն առաջարկում է արագ և հեշտ ինտեգրում այլ ֆինանսական գործիքների հետ, ինչը թույլ է տալիս օգտատերերին կառավարել իրենց ֆինանսները մեկ հավելվածի միջոցով:
          </p>

          <p>
            EvocaTOUCH-ի միջոցով օգտատերերը կարող են 24/7 հասանելիություն ունենալ իրենց ֆինանսներին, վերահսկել իրենց դրամական միջոցները, արագ ու անվտանգ գործարքներ կատարել աշխարհի ցանկացած կետից, ցանկացած ժամի:
          </p>

          <p className="font-semibold text-gray-800">
            EvocaTOUCH-ը պարզապես բանկային հավելված չէ. կարծում ենք, այն Ձեզ համար դառնալու է ապրելակերպի մի մաս:
          </p>
        </div>

        {/* 4. Փաստաթղթեր բաժին */}
        <div className="mt-12">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6 text-center">
            Փաստաթղթեր
          </h2>

          <div className="space-y-3 max-w-3xl mx-auto">
            {/* Document Item 1 */}
            <a
              href="#"
              className="flex items-center justify-between p-4 bg-purple-50/50 hover:bg-purple-100/50 border border-purple-100 rounded-2xl transition group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg">
                  ⇩
                </div>
                <span className="text-xs md:text-sm font-bold text-gray-800 group-hover:text-purple-900">
                  Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025
                </span>
              </div>
            </a>

            {/* Document Item 2 */}
            <a
              href="#"
              className="flex items-center justify-between p-4 bg-purple-50/50 hover:bg-purple-100/50 border border-purple-100 rounded-2xl transition group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg">
                  ⇩
                </div>
                <span className="text-xs md:text-sm font-bold text-gray-800 group-hover:text-purple-900">
                  SWIFT Transfers (20.03.2026)
                </span>
              </div>
            </a>

            {/* Document Item 3 */}
            <a
              href="#"
              className="flex items-center justify-between p-4 bg-purple-50/50 hover:bg-purple-100/50 border border-purple-100 rounded-2xl transition group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg">
                  ⇩
                </div>
                <span className="text-xs md:text-sm font-bold text-gray-800 group-hover:text-purple-900">
                  SWIFT переводы в РФ (20.03.2026)
                </span>
              </div>
            </a>
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

export default EvocaTouch;