import React from 'react';
import { Link } from 'react-router-dom';

const MetalAccounts = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans pb-16">
      
      {/* 1. Մանուշակագույն Header navigation բար */}
      <div className="bg-[#6b21a8] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center overflow-x-auto font-semibold text-xs md:text-sm">
          <Link
            to="/accounts"
            className="hover:bg-[#581c87] px-5 py-3.5 whitespace-nowrap transition opacity-90 hover:opacity-100"
          >
            Հաշիվների բացում և սպասարկում
          </Link>

          {/* Ակտիվ կետ՝ Առարկայազուրկ մետաղական հաշիվներ */}
          <Link
            to="/accounts/metal"
            className="bg-[#4c1d95] px-5 py-3.5 whitespace-nowrap font-bold transition"
          >
            Առարկայազուրկ մետաղական հաշիվներ
          </Link>

          <Link
            to="/accounts/non-residents"
            className="hover:bg-[#581c87] px-5 py-3.5 whitespace-nowrap transition opacity-90 hover:opacity-100"
          >
            Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում
          </Link>

          <Link
            to="/accounts/safe-deposit-boxes"
            className="hover:bg-[#581c87] px-5 py-3.5 whitespace-nowrap transition opacity-90 hover:opacity-100"
          >
            Պահատուփեր
          </Link>
        </div>
      </div>

      {/* Բովանդակություն */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        
        {/* 2. Breadcrumb (Նկար 1) */}
        <div className="text-xs text-gray-500 mb-6 flex items-center space-x-2">
          <span>🏠</span>
          <span>›</span>
          <Link to="/" className="hover:underline">Անհատ</Link>
          <span>›</span>
          <Link to="/accounts" className="hover:underline">Հաշիվներ</Link>
          <span>›</span>
          <span className="text-gray-800 font-medium">Առարկայազուրկ մետաղական հաշիվներ</span>
        </div>

        {/* 3. Վերևի բլոկ՝ տեքստ + աջ կողմի ոսկու սալիկների նկար (Նկար 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="bg-gray-50/80 p-8 rounded-3xl space-y-4">
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
              Առարկայազուրկ <br /> մետաղական հաշիվներ
            </h1>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
              Առաջարկում ենք բացել առարկայազուրկ մետաղական հաշիվներ, որոնք նախատեսված են անկանխիկ ոսկու հաշվառման համար: Այս ցպահանջ հաշիվները հնարավորություն են ընձեռում խնայողություններ կատարել անկանխիկ ոսկով, ինչպես նաև ավելացնել դրանք՝ միջազգային շուկայում ոսկու գնի բարձրացման շնորհիվ:
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-sm">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17092121924185/780x585.png" 
              alt="Gold Bars" 
              className="w-full h-72 md:h-80 object-cover"
            />
          </div>
        </div>

        {/* 4. Հիմնական պայմաններ (Նկար 2) */}
        <div className="max-w-5xl mx-auto space-y-6 mb-12">
          <h2 className="text-2xl font-black text-gray-900">Հիմնական պայմաններ</h2>

          <ul className="space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed font-medium">
            <li className="flex items-start space-x-3">
              <span className="text-purple-700 text-lg font-bold">•</span>
              <span>
                Հաշիվներ ենք բացում ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար, միայն <span className="text-purple-700 font-bold">999.9 հարգի ոսկով</span>, առանց նվազագույն մնացորդի պահանջի: Մեզ մոտ կարելի է գնել անկանխիկ ոսկի՝ սկսած <span className="text-purple-700 font-bold">1 գրամից</span> (ոսկու գնանշումը կատարվում է դրամով): Մեր կայքում հրապարակվում են ոսկու գնանշման օրական տվյալները, որոնք փոփոխվում են՝ կախված միջազգային շուկաներում ոսկու գնից:
              </span>
            </li>

            <li className="flex items-start space-x-3">
              <span className="text-purple-700 text-lg font-bold">•</span>
              <span>
                Հաշիվներում անկանխիկ ոսկին հաշվառում ենք դրամով՝ ՀՀ Կենտրոնական բանկի հայտարարած հաշվարկային գնով և կշռային (գրամային) արտահայտությամբ՝ 0.01 գրամ ճշտությամբ կամ տրոյական ունցիաներով՝ 0.001 տրոյական ունցիա ճշտությամբ (մեկ տրոյական ունցիան հավասար է 31.10348 գրամի):
              </span>
            </li>

            <li className="flex items-start space-x-3">
              <span className="text-purple-700 text-lg font-bold">•</span>
              <span>
                Մետաղական հաշիվներ բացելիս ղեկավարվում ենք ՀՀ օրենսդրությամբ, ՀՀ Կենտրոնական բանկի նորմատիվ ակտերով, որոշումներով, մեր ներքին իրավական ակտերով:
              </span>
            </li>

            <li className="flex items-start space-x-3">
              <span className="text-purple-700 text-lg font-bold">•</span>
              <div className="space-y-2">
                <span className="text-purple-700 font-bold">Այս հաշիվներով կարող ենք իրականացնել հետևյալ գործառնությունները՝</span>
                <ul className="space-y-2 pl-4 pt-1">
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-700 font-bold">-</span>
                    <span><strong className="text-gray-900">հաշվի համալրում՝</strong> բանկից անկանխիկ ոսկի գնելու և այն հաշվին մուտքագրելու, ինչպես նաև ձեր կամ այլ անձի՝ նույն բանկում կամ այլ բանկում առկա մետաղական հաշվից անկանխիկ ոսկի փոխանցելու միջոցով,</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-700 font-bold">-</span>
                    <span><strong className="text-gray-900">հաշվի ելքագրում՝</strong> հաշվին առկա անկանխիկ ոսկին բանկին վաճառելու, ինչպես նաև ձեր կամ այլ անձի՝ նույն բանկում կամ այլ բանկում առկա մետաղական հաշվին անկանխիկ ոսկի փոխանցելու միջոցով:</span>
                  </li>
                </ul>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <span className="text-purple-700 text-lg font-bold">•</span>
              <span>Մետաղական հաշիվները կարող են գրավադրվել:</span>
            </li>

            <li className="flex items-start space-x-3">
              <span className="text-purple-700 text-lg font-bold">•</span>
              <div className="space-y-2">
                <span className="text-purple-700 font-bold">Հաշիվ բացելու համար անհրաժեշտ փաստաթղթերը՝</span>
                <ul className="space-y-2 pl-4 pt-1">
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-700 font-bold">-</span>
                    <span>Դիմում՝ մեր ձևանմուշի համաձայն:</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-700 font-bold">-</span>
                    <span>Անձնագիր և սոցիալական քարտ կամ այն չունենալու մասին տեղեկանք, կամ միայն Նույնականացման քարտ:</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-700 font-bold">-</span>
                    <span>Մեր պահանջով այլ փաստաթղթեր:</span>
                  </li>
                </ul>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <span className="text-purple-700 text-lg font-bold">•</span>
              <span>
                Հաշիվներ բացելու համար կարող եք դիմել մեր Գլխամասային գրասենյակ և ցանկացած մասնաճյուղ: Մետաղական հաշիվների սպասարկման, գործառնությունների կատարման սակագներին և պայմաններին կարող եք ծանոթանալ <a href="#" className="text-purple-700 font-bold underline">այստեղ</a>:
              </span>
            </li>
          </ul>

          {/* Լրացուցիչ տեղեկատվություն (Նկար 3) */}
          <div className="pt-4 space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed font-medium">
            <p>
              Evocabank-ում նաև կարող եք ձեռք բերել ոսկու գրավով վարկեր՝ ամենահարմար պայմաններով: <a href="#" className="text-purple-700 font-bold underline">Ոսկու գրավով վարկը</a> տրամադրվում է ոսկյա իրերի գրավադրմամբ անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների, ծառայությունների) պատվիրման կամ ձեռքբերման նպատակով:
            </p>

            <p className="text-gray-800">
              <strong className="text-purple-700 font-bold">Ուշադրություն.</strong> Ավանդների հատուցումը երաշխավորող հիմնադրամը չի հատուցում մետաղական հաշիվները:
            </p>
          </div>
        </div>

        {/* 5. Փաստաթղթեր (Նկար 3) */}
        <div className="pt-6 space-y-4 max-w-5xl mx-auto">
          <h2 className="text-xl font-black text-gray-900 mb-4">Փաստաթղթեր</h2>

          <div className="space-y-3">
            {[
              { title: 'Տեղեկատվական ամփոփագիր (Բանկային հաշիվներ)', date: '08.06.26' },
              { title: 'Համալիր բանկային ծառայությունների մատուցման պայմաններ', date: '16.05.2025' },
            ].map((doc, index) => (
              <div
                key={index}
                className="bg-purple-50/60 hover:bg-purple-100/70 transition p-4 rounded-xl flex items-center space-x-3 cursor-pointer"
              >
                <span className="text-purple-700 text-xl">📄</span>
                <span className="text-xs md:text-sm font-bold text-gray-800">
                  {doc.title} <span className="font-semibold text-gray-500">{doc.date}</span>
                </span>
              </div>
            ))}
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

export default MetalAccounts;