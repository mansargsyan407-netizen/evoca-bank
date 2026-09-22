import React from 'react';
import { Link } from 'react-router-dom';

const SafeDepositBoxes = () => {
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

          <Link
            to="/accounts/metal"
            className="hover:bg-[#581c87] px-5 py-3.5 whitespace-nowrap transition opacity-90 hover:opacity-100"
          >
            Առարկայազուրկ մետաղական հաշիվներ
          </Link>

          <Link
            to="/accounts/non-residents"
            className="hover:bg-[#581c87] px-5 py-3.5 whitespace-nowrap transition opacity-90 hover:opacity-100"
          >
            Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում
          </Link>

          {/* Ակտիվ կետ՝ Պահատուփեր */}
          <Link
            to="/accounts/safe-deposit-boxes"
            className="bg-[#4c1d95] px-5 py-3.5 whitespace-nowrap font-bold transition"
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
          <span className="text-gray-800 font-medium">Պահատուփեր</span>
        </div>

        {/* 3. Վերևի բլոկ՝ տեքստ + աջ կողմի պահատուփերի նկարը (Նկար 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="bg-gray-50/80 p-8 rounded-3xl space-y-4">
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
              Անհատական <br /> պահատուփեր
            </h1>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
              Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձանց առաջարկում ենք արժեքավոր իրերը պահպանելու հուսալի և անվտանգ միջոց՝ չհրկիզվող անհատական պահատուփեր:
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-sm">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17793417530511/780x585.jpg" 
              alt="Safe Deposit Boxes" 
              className="w-full h-72 md:h-80 object-cover"
            />
          </div>
        </div>

        {/* 4. Նկարագրության տեքստային հատված (Նկար 1 և 2) */}
        <div className="max-w-5xl mx-auto space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed font-medium mb-12">
          <p>
            Պահատուփերի պարունակությունը միայն ձեր գաղտնիքն է: Դրանցում կարող եք պահել Ձեզ համար արժեք ներկայացնող ցանկացած իր (դրամ, արժեթղթեր, թանկարժեք մետաղներ և քարեր, ոսկերչական իրեր, արվեստի գործեր, ֆոտո և տեսաժապավեններ, մագնիսական կրիչներ և այլն):
          </p>
          <p>
            Պահատուփերը գտնվում են առանձնացված տարածքում՝ շուրջօրյա հսկողության ներքո: Դրանք զինված են միջազգային չափանիշներին համապատասխան անվտանգության միջոցներով և պաշտպանված են մեխանիկական ու քիմիական գործոնների ազդեցությունից: Յուրաքանչյուր գործարքի ժամանակ պահատուփերի առանձնացված տարածքում կարող եք գտնվել մինչև 15 րոպե:
          </p>
          <p className="font-bold text-gray-900">
            Առաջարկում ենք 3 չափսի պահատուփեր՝ փոքր, միջին, մեծ:
          </p>
          <p>
            Պահատուփերը փակվում են 2 բանալիով, որոնցից մեկը տրամադրում ենք ձեզ, իսկ մյուսը պահվում է մեզ մոտ (պահատուփը հնարավոր է բացել միայն երկու բանալիների միաժամանակյա կիրառմամբ): Ձեզ տրամադրված բանալիի օրինակը պարտավոր եք վերադարձնել՝ պահատուփի վարձակալության պայմանագրի գործողության ժամկետի վերջում:
          </p>
          <p>
            Պահատուփերը վարձակալության ենք տրամադրում անհատական պայմանագրի հիման վրա, ձեր նախընտրած վարձակալության ժամկետով: Վարձակալման գինը կախված է պահարանի չափից և ժամկետից՝ ըստ մեր սակագների:
          </p>
          <p>
            12 ամսից երկար ժամկետով վարձակալելու դեպքում պահատուփերի սակագները սահմանվում են պայմանագրային կարգով:
          </p>
          <p>
            Անհատական պահատուփից կարելի է օգտվել միայն մեր սպասարկման օրերին և ժամերին:
          </p>
        </div>

        {/* 5. Աղյուսակ 1: Չհրկիզվող անհատական պահարանների վարձակալման սակագներ (Նկար 2) */}
        <div className="max-w-5xl mx-auto space-y-4 mb-12">
          <h2 className="text-base md:text-lg font-black text-gray-900">
            Չհրկիզվող անհատական պահարանների վարձակալման սակագներ
          </h2>

          <div className="overflow-x-auto border border-purple-100 rounded-2xl shadow-sm">
            <table className="w-full text-xs md:text-sm text-left text-gray-700">
              <thead className="bg-purple-50/50 text-gray-900 font-bold border-b border-purple-100">
                <tr>
                  <th className="p-3 border-r border-purple-100" rowSpan={2}>Ժամկետ</th>
                  <th className="p-3 text-center border-purple-100" colSpan={3}>Պահարանի չափերը</th>
                </tr>
                <tr className="border-t border-purple-100">
                  <th className="p-2 text-center border-r border-purple-100">փոքր</th>
                  <th className="p-2 text-center border-r border-purple-100">միջին</th>
                  <th className="p-2 text-center">մեծ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100 font-medium">
                <tr>
                  <td className="p-3 font-semibold border-r border-purple-100">14 օր</td>
                  <td className="p-3 text-center border-r border-purple-100">5,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center border-r border-purple-100">7,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center">10,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border-r border-purple-100">1 ամիս</td>
                  <td className="p-3 text-center border-r border-purple-100">7,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center border-r border-purple-100">10,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center">12,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border-r border-purple-100">3 ամիս</td>
                  <td className="p-3 text-center border-r border-purple-100">10,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center border-r border-purple-100">15,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center">20,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border-r border-purple-100">6 ամիս</td>
                  <td className="p-3 text-center border-r border-purple-100">15,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center border-r border-purple-100">20,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center">25,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border-r border-purple-100">12 ամիս</td>
                  <td className="p-3 text-center border-r border-purple-100">30,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center border-r border-purple-100">40,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center">50,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border-r border-purple-100">Երկարաժամկետ</td>
                  <td className="p-3 text-center border-r border-purple-100">պայմանագրային</td>
                  <td className="p-3 text-center border-r border-purple-100">պայմանագրային</td>
                  <td className="p-3 text-center">պայմանագրային</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border-r border-purple-100" colSpan={2}>Պահարանի բանալու կորուստ կամ վնասում</td>
                  <td className="p-3 text-center font-semibold" colSpan={2}>20,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border-r border-purple-100" colSpan={2}>Պահարանի վնասում</td>
                  <td className="p-3 text-center font-semibold" colSpan={2}>Հասցված վնասի եռապատիկը</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border-r border-purple-100" colSpan={2}>Պայմանագրի ժամկետի ավարտին բանալու չհանձնում</td>
                  <td className="p-3 text-center font-semibold" colSpan={2}>Յուրաքանչյուր ուշացրած օրվա համար 1000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border-r border-purple-100" colSpan={2}>Իրերը Բանկի այլ տարածքում պահպանելու վճար</td>
                  <td className="p-3 text-center font-semibold" colSpan={2}>Ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 6. Աղյուսակ 2: Օտարերկրյա քաղաքացիների համար (Նկար 3) */}
        <div className="max-w-5xl mx-auto space-y-4 mb-8">
          <h2 className="text-base md:text-lg font-black text-gray-900">
            Չհրկիզվող անհատական պահարանների վարձակալում օտարերկրյա քաղաքացիների համար
          </h2>

          <div className="overflow-x-auto border border-purple-100 rounded-2xl shadow-sm">
            <table className="w-full text-xs md:text-sm text-left text-gray-700">
              <thead className="bg-purple-50/50 text-gray-900 font-bold border-b border-purple-100">
                <tr>
                  <th className="p-3 border-r border-purple-100" rowSpan={2}>Ժամկետ</th>
                  <th className="p-3 text-center border-purple-100" colSpan={3}>Պահարանի չափերը</th>
                </tr>
                <tr className="border-t border-purple-100">
                  <th className="p-2 text-center border-r border-purple-100">փոքր</th>
                  <th className="p-2 text-center border-r border-purple-100">միջին</th>
                  <th className="p-2 text-center">մեծ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100 font-medium">
                <tr>
                  <td className="p-3 font-semibold border-r border-purple-100">14 օր</td>
                  <td className="p-3 text-center border-r border-purple-100">25,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center border-r border-purple-100">35,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center">50,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border-r border-purple-100">1 ամիս</td>
                  <td className="p-3 text-center border-r border-purple-100">35,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center border-r border-purple-100">50,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center">60,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border-r border-purple-100">3 ամիս</td>
                  <td className="p-3 text-center border-r border-purple-100">50,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center border-r border-purple-100">75,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center">100,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border-r border-purple-100">6 ամիս</td>
                  <td className="p-3 text-center border-r border-purple-100">75,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center border-r border-purple-100">100,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center">125,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border-r border-purple-100">12 ամիս</td>
                  <td className="p-3 text-center border-r border-purple-100">100,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center border-r border-purple-100">125,000 ՀՀ դրամ</td>
                  <td className="p-3 text-center">150,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border-r border-purple-100">Երկարաժամկետ</td>
                  <td className="p-3 text-center border-r border-purple-100">պայմանագրային</td>
                  <td className="p-3 text-center border-r border-purple-100">պայմանագրային</td>
                  <td className="p-3 text-center">պայմանագրային</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border-r border-purple-100" colSpan={2}>Պահարանի բանալու կորուստ կամ վնասում</td>
                  <td className="p-3 text-center font-semibold" colSpan={2}>20,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border-r border-purple-100" colSpan={2}>Պահարանի վնասում</td>
                  <td className="p-3 text-center font-semibold" colSpan={2}>Հասցված վնասի եռապատիկը</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border-r border-purple-100" colSpan={2}>Պայմանագրի ժամկետի ավարտին բանալու չհանձնում</td>
                  <td className="p-3 text-center font-semibold" colSpan={2}>Յուրաքանչյուր ուշացրած օրվա համար 1,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border-r border-purple-100" colSpan={2}>Իրերը Բանկի այլ տարածքում պահպանելու վճար</td>
                  <td className="p-3 text-center font-semibold" colSpan={2}>Ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 font-semibold pt-1">
            <strong className="text-gray-800">Նշում -</strong> Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ:
          </p>
        </div>

        {/* 7. Փաստաթղթեր (Նկար 3) */}
        <div className="pt-6 space-y-4 max-w-5xl mx-auto">
          <h2 className="text-xl font-black text-gray-900 mb-4">
            Փաստաթղթեր
          </h2>

          <div className="space-y-3">
            <div className="bg-purple-50/60 hover:bg-purple-100/70 transition p-4 rounded-xl flex items-center space-x-3 cursor-pointer">
              <span className="text-purple-700 text-xl">📄</span>
              <span className="text-xs md:text-sm font-bold text-gray-800">
                Համալիր բանկային ծառայությունների մատուցման պայմաններ <span className="font-semibold text-gray-500">16.05.2025</span>
              </span>
            </div>
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

export default SafeDepositBoxes;