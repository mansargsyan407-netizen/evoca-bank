import React from 'react';
import { Link } from 'react-router-dom';

export default function GreenRockNewsPage() {
  return (
    <div className="w-full bg-white text-gray-800 font-sans min-h-screen relative">

      {/* Floating Social Media Side Icons */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-gray-100/80 backdrop-blur-sm p-1.5 rounded-r-lg flex flex-col gap-3 text-gray-600 text-xs shadow-sm">
        <span className="cursor-pointer hover:text-purple-700 font-bold">f</span>
        <span className="cursor-pointer hover:text-purple-700 font-bold">t</span>
        <span className="cursor-pointer hover:text-purple-700 font-bold">in</span>
        <span className="cursor-pointer hover:text-purple-700 font-bold">p</span>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-gray-500 flex items-center gap-2">
        <Link to="/" className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full font-bold transition flex items-center gap-1">
          ← Վերադառնալ
        </Link>
        <span>›</span>
        <Link to="/news" className="hover:underline">Նորություններ</Link>
        <span>›</span>
        <span>Բանկային</span>
        <span>›</span>
        <span className="font-bold text-gray-800 truncate max-w-xs">
          Evocabank-ը և Green Rock-ը մեկնարկեցին Բանկի նոր գլխամասի նախագիծը
        </span>
      </div>

      {/* Article Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Article Text Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-5 bg-[#6b21a8]"></span>
              <span className="text-xs font-bold text-[#6b21a8] uppercase tracking-wider">
                Բանկային
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              Evocabank-ը և Green Rock-ը մեկնարկեցին Բանկի նոր գլխամասի նախագիծը
            </h1>

            <p className="text-base font-semibold text-gray-600 leading-relaxed">
              Evocabank-ը և Green Rock Management Group-ը ստորագրեցին համագործակցության հուշագիր՝ պաշտոնապես մեկնարկելով Բանկի նոր գլխամասի նախագիծը:
            </p>

            <p className="text-xs text-gray-400">30.07.2026</p>

            <hr className="border-gray-100 my-6" />

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong className="text-[#6b21a8]">Evocabank</strong>-ի Վարչության նախագահ <strong>Կարեն Եղիազարյանը</strong> և <strong>Green Rock Management Group</strong>-ի գործադիր տնօրեն <strong>Կատերինա Դանեկինան</strong> ստորագրեցին <em>համագործակցության հուշագիր</em>՝ պաշտոնապես մեկնարկելով Բանկի նոր գլխամասի նախագծի իրականացումը:
              </p>

              <p>
                <strong className="text-[#6b21a8]">Evocabank</strong>-ի նոր գլխամասը կկառուցվի Երևանի <em>Դեմիրճյան 14</em> հասցեում և կմիավորի Բանկի բոլոր աշխատակիցներին մեկ ժամանակակից, միջազգային չափանիշներին համապատասխանող աշխատանքային միջավայրում: Նախագծի իրականացումը վստահված է <em>MVRDV</em> միջազգային ճարտարապետական բյուրոյին:
              </p>

              <p>
                <strong className="text-gray-900">Evocabank-ի Վարչության նախագահ Կարեն Եղիազարյանը</strong> նշեց. <em>«Այսօր խորհրդանշական օր է Բանկի համար: Մենք նշում ենք Բանկի զարգացման նոր փուլը: Բանկի նոր գլխամասը լինելու է միջազգային ստանդարտներին համապատասխանող կենտրոն, որը, վստահ եմ, նոր նշաձող է սահմանելու Երևանի քաղաքաշինական մշակույթում: Այս նոր կենտրոնը դառնալու է Բանկի նոր խորհրդանիշը, և այս պահն առանձնահատուկ իմաստ ունի, քանի որ այսօր մենք հավաքվել ենք Բանկի ներկայիս՝ շուրջ 35 տարի գործող գլխամասի մոտ: Մեր գործընկեր Green Rock Management Group-ի հետ մեզ երկար ճանապարհ է սպասվում, և համոզված եմ, որ արդյունքը կգերազանցի սպասելիքները»:</em>
              </p>

              <p>
                <strong className="text-gray-900">Green Rock Management Group-ի գործադիր տնօրեն Կատերինա Դանեկինան</strong> նշեց. <em>«Այսօր կարևոր օր է ինչպես Evocabank-ի, այնպես էլ Green Rock-ի համար: Մենք նշում ենք Evocabank-ի նոր գլխամասի նախագծի պաշտոնական մեկնարկը Երևանում: Այս համագործակցության հուշագրի ստորագրումով մենք սկսում ենք նախագծի հաջորդ փուլը, որը հիմնված է ամուր ընդհանուր արժեքների վրա: Evocabank-ն ունի իր նոր գլխամասի հստակ տեսլականը՝ ստեղծել ժամանակակից աշխատանքային միջավայր, որն արտացոլում է Բանկի ինքնությունը, աջակցում է աշխատակիցներին և նպաստում Բանկի հետագա զարգացմանը: Մենք հպարտ ենք, որ ղեկավարում ենք այս նախագծի իրականացումը՝ գաղափարից մինչև շինարարության ավարտ: Մեզ համար մեծ պատիվ է արժանանալ Evocabank-ի ղեկավարության վստահությանը, որի համար անկեղծ շնորհակալություն ենք հայտնում:»</em>
              </p>

              <p>
                Միջոցառման ավարտին տեղի ունեցավ նախագծի մեկնարկը խորհրդանշող առաջին քայլը. պատճենի (կապսուլայի) մեջ դրվեց <strong className="text-[#6b21a8]">Evocabank</strong>-ի <em>նոր տեսլականը</em>, որն ընկած է Բանկի նոր գլխամասի և <strong className="text-[#6b21a8]">Evocabank</strong>-իապագա զարգացման հիմքում:
              </p>
            </div>
          </div>

          {/* Article Image Banner */}
          <div className="lg:col-span-6 sticky top-8">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17854167235525/780x585.png" 
                alt="Green Rock Evocabank" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </main>

      {/* Other News Section (Նկար 4-ի համապատասխան) */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-100 mt-12">
        <h2 className="text-2xl font-black text-gray-900 mb-8">Այլ նորություններ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 - Moody's */}
          <Link to="/news/moodys-rating" className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 block group">
            <img 
              src="https://www.evoca.am/images-cache/news/1/17870544210976/439x320.png" 
              alt="Moody's Ratings" 
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-[#6b21a8] transition">
                Ba3 վարկանիշ Moody’s-ից Evocabank-ին
              </h3>
              <p className="text-xs text-gray-400 pt-2">18.08.2026</p>
            </div>
          </Link>

          {/* Card 2 - Firebird AI */}
          <Link to="/news/firebird-ai" className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 block group">
            <img 
              src="https://www.evoca.am/images-cache/news/1/17864472573391/439x320.png" 
              alt="Firebird AI" 
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-[#6b21a8] transition">
                Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»
              </h3>
              <p className="text-xs text-gray-400 pt-2">11.08.2026</p>
            </div>
          </Link>

          {/* Card 3 - MIT Certified */}
          <Link to="/news/mit-certified" className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 block group">
            <img 
              src="https://www.evoca.am/images-cache/news/1/17842875742396/428x321.png" 
              alt="MIT Certified" 
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-[#6b21a8] transition">
                Evoca-ի ղեկավարները հաջողությամբ ավարտեցին Generative AI դասընթացը
              </h3>
              <p className="text-xs text-gray-400 pt-2">17.07.2026</p>
            </div>
          </Link>

        </div>

        {/* Updated Timestamp */}
        <div className="text-right text-[11px] text-gray-400 mt-6">
          Թարմացվել է` 21/08/2026 18:58
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6 text-xs text-gray-600">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-3">
            <h3 className="text-xl font-black text-[#6b21a8]">evocaBANK</h3>
            <p>ք. Երևան, 0010, Հանրապետության 44/2</p>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="text-[10px] text-gray-400 pt-2">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3 text-sm">Բանկի մասին</h4>
            <p className="hover:text-purple-700 cursor-pointer">Մեր մասին</p>
            <p className="hover:text-purple-700 cursor-pointer">Ղեկավարություն</p>
            <p className="hover:text-purple-700 cursor-pointer">Բաժնետերեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Հաշվետվություններ</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3 text-sm">Օգտակար հղումներ</h4>
            <p className="hover:text-purple-700 cursor-pointer">Հաճախորդի իրավունքները</p>
            <p className="hover:text-purple-700 cursor-pointer">Գաղտնիության քաղաքականություն</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 mb-3 text-sm">Այլ հղումներ</h4>
            <p className="hover:text-purple-700 cursor-pointer">EvocaONLINE</p>
            <p className="hover:text-purple-700 cursor-pointer">Հետադարձ կապ</p>
            <p className="font-bold text-gray-900 text-sm">+374 10 605555</p>
            <p className="text-[#6b21a8] font-black text-base">8444</p>
          </div>

        </div>
      </footer>

      {/* Floating Call & Online Chat Button */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3">
        <button className="w-12 h-12 bg-purple-200 text-[#6b21a8] rounded-full flex items-center justify-center text-lg shadow-lg hover:bg-purple-300 transition">
          📞
        </button>
        <button className="bg-[#6b21a8] text-white px-5 py-3 rounded-full font-bold text-xs shadow-xl hover:bg-purple-900 transition flex items-center gap-2">
          Գրեք մեզ, մենք օնլայն ենք !
        </button>
      </div>

    </div>
  );
}