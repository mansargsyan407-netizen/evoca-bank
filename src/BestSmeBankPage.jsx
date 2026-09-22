import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Share2, Phone } from 'lucide-react';

export default function BestSmeBankPage() {
  return (
    <div className="w-full bg-white text-gray-800 font-sans selection:bg-purple-500 selection:text-white min-h-screen flex flex-col justify-between">
      <div>
        {/* TOP BAR / BREADCRUMB */}
        <div className="max-w-7xl mx-auto px-6 pt-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-xs font-bold transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Վերադառնալ
            </Link>
          </div>

          <div className="text-[11px] text-gray-400 flex items-center gap-1.5 mb-6">
            <Link to="/" className="hover:underline">🏠</Link>
            <span>›</span>
            <Link to="/news" className="hover:underline">Նորություններ</Link>
            <span>›</span>
            <span className="hover:underline">Մրցանակներ</span>
            <span>›</span>
            <span className="text-gray-600 font-medium truncate max-w-[250px]">
              Evocabank. Լավագույն ՓՄՁ բանկը Հայաստանում՝ երկրորդ...
            </span>
          </div>
        </div>

        {/* HERO HEADER SECTION */}
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="bg-[#f5f3ff] rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative">
            {/* Left side content */}
            <div className="lg:col-span-6 p-8 lg:p-14 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 bg-yellow-400 inline-block rounded-sm"></span>
                  <span className="text-xs font-bold text-gray-900">Մրցանակներ</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  Evocabank. Լավագույն ՓՄՁ բանկը Հայաստանում՝ երկրորդ տարին անընդմեջ
                </h1>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Evocabank-ը երկրորդ տարին անընդմեջ արժանանում է «Լավագույն ՓՄՁ բանկը Հայաստանում» միջազգային մրցանակին The Digital Banker-ի կողմից:
                </p>
              </div>
              <p className="text-xs text-gray-400 font-medium">08.05.2026</p>
            </div>

            {/* Right side image */}
            <div className="lg:col-span-6 relative min-h-[320px] bg-gray-900 overflow-hidden flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17784860353078/450x295.png" 
                alt="Evocabank Լավագույն ՓՄՁ բանկը Հայաստանում" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* MAIN ARTICLE BODY */}
        <main className="max-w-4xl mx-auto px-6 pb-20 relative">
          {/* Floating Share Icons */}
          <div className="hidden lg:flex flex-col gap-3 fixed left-8 top-1/3 bg-white p-2 rounded-2xl shadow-md border border-gray-100 z-20">
            <button className="p-2 text-gray-500 hover:text-purple-700 transition" title="Կիսվել"><Share2 className="w-4 h-4" /></button>
            <a href="#" className="p-2 text-gray-500 hover:text-blue-600 font-bold text-xs transition text-center" title="Facebook">f</a>
            <a href="#" className="p-2 text-gray-500 hover:text-sky-400 font-bold text-xs transition text-center" title="Twitter">t</a>
            <a href="#" className="p-2 text-gray-500 hover:text-blue-700 font-bold text-xs transition text-center" title="LinkedIn">in</a>
          </div>

          <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
            <h2 className="text-xl md:text-2xl font-bold text-purple-900 text-center">
              «Լավագույն ՓՄՁ բանկը Հայաստանում»
            </h2>
            <h3 className="text-lg font-semibold text-purple-800 text-center">
              2-րդ տարին անընդմեջ
            </h3>
            <p className="text-center font-medium text-purple-900">
              The Digital Banker
            </p>

            <p>
              Փոքր և միջին ձեռնարկությունները Հայաստանի տնտեսության հիմքն են: Դրանք խթանում են նորարարությունը, ստեղծում աշխատատեղեր և ապահովում կայուն տնտեսական աճ:
            </p>

            <p>
              <strong className="text-purple-900 font-bold">Evocabank</strong>-ում մենք շարունակաբար զարգացնում ենք մեր ֆինանսական գործիքներն ու ծառայությունները՝ օգնելով բիզնեսներին ոչ միայն հաղթահարել մարտահրավերները, այլև բացահայտել նոր հնարավորություններ և ընդլայնել իրենց գործունեությունը:
            </p>

            <p>
              Երկրորդ տարին անընդմեջ այս հեղինակավոր մրցանակին արժանանալը ոչ միայն ճանաչում է մեր կատարած աշխատանքի նկատմամբ, այլև հաստատում է <strong className="text-purple-900 font-bold">Evocabank</strong>-ի երկարաժամկետ ռազմավարությունը և շարունակական զարգացումը:
            </p>

            <h3 className="text-lg font-bold text-purple-900 pt-4">
              The Digital Banker-ի մասին
            </h3>

            <p>
              <strong className="text-purple-900 font-bold">The Digital Banker</strong>-ը միջազգային, հեղինակավոր կազմակերպություն է, որը լուսաբանում է գլոբալ ֆինանսական շուկաները, տեխնոլոգիական նորարարությունները և բանկային ոլորտի զարգացման միտումները: Կազմակերպությունն ամեն տարի իրականացնում է մրցանակաբաշխություն, և այն բոլոր բանկերն ու ֆինանսական հաստատությունները, որոնք համապատասխանում են հատուկ մշակված չափորոշիչներին, արժանանում են հատուկ անվանական մրցանակների:
            </p>

            <p>
              <strong className="text-purple-900 font-bold">Evocabank</strong>-ը շարունակում է ամրապնդել իր դերը՝ որպես նորարար և վստահելի գործընկեր բիզնեսների համար՝ առաջարկելով լուծումներ, որոնք ստեղծում են իրական արժեք և երկարաժամկետ արդյունք:
            </p>
          </div>
        </main>
      </div>

 {/* Other News Section */}
              <section className="pt-12 border-t border-gray-100 space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Այլ նորություններ
                </h2>
      
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Card 1 - Ուղղորդում է Wilco քարտի էջ */}
                  <Link to="/news/evocabank-wilco" className="space-y-3 group cursor-pointer block">
                    <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3]">
                      <img 
                        src="https://www.evoca.am/images-cache/news/1/17815163976713/428x321.png" 
                        alt="Evocabank-ն ու Wilco-ն" 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-gray-900 leading-snug group-hover:text-[#6b21a8] transition">
                      Evocabank-ն ու Wilco-ն ներկայացնում են բացառիկ համատեղ քարտ
                    </h3>
                    <p className="text-xs text-gray-400">15.06.2026</p>
                  </Link>
      
                 {/* Card 2 - Ուղղորդում է Adidas-ի էջ */}
      <Link to="/news/adidas-armenia" className="space-y-3 group cursor-pointer block">
        <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3]">
          <img 
            src="https://www.evoca.am/images-cache/news/1/17804748057663/428x321.png" 
            alt="Adidas Armenia" 
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <h3 className="font-bold text-sm sm:text-base text-gray-900 leading-snug group-hover:text-[#6b21a8] transition">
          Վճարիր Evoca Mastercard-ով Adidas Armenia-ում և ստացիր 10% զեղչ
        </h3>
        <p className="text-xs text-gray-400">03.06.2026</p>
      </Link>
      
               {/* Card 3 - Globbing */}
      <Link to="/news/globbing" className="space-y-3 group cursor-pointer block">
        <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3]">
          <img 
            src="https://www.evoca.am/images-cache/news/1/1778751542792/780x585.png" 
            alt="Globbing" 
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <h3 className="font-bold text-sm sm:text-base text-gray-900 leading-snug group-hover:text-[#6b21a8] transition">
          Վճարիր Evoca Visa քարտով և ստացիր առավելություններ Globbing-ում
        </h3>
        <p className="text-xs text-gray-400">14.05.2026</p>
      </Link>
      
                </div>
      
                <div className="text-right text-xs text-gray-400 pt-4">
                  Թարմացվել է` 21/08/2026 18:58
                </div>
              </section>
  {/* Evocabank Full Footer */}
      <footer className="bg-[#fcfbfe] border-t border-gray-100 mt-16 pt-12 pb-8 px-6 text-xs text-gray-600">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1 */}
          <div className="space-y-4">
            <h2 className="text-xl font-black text-[#6b21a8] tracking-wider">evoca<span className="text-gray-900">BANK</span></h2>
            <p className="text-gray-500">
              ք. Երևան, 0010,<br />
              Հանրապետության 44/2
            </p>
            <p className="text-gray-400 text-[11px] leading-relaxed">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="text-gray-400 text-[11px]">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 text-sm mb-3">Բանկի մասին</h3>
            <p><a href="#about" className="hover:underline">Մեր մասին</a></p>
            <p><a href="#management" className="hover:underline">Ղեկավարություն</a></p>
            <p><a href="#shareholders" className="hover:underline">Բաժնետերեր</a></p>
            <p><a href="#reports" className="hover:underline">Հաշվետվություններ</a></p>
            <p><a href="#acts" className="hover:underline">Իրավական ակտեր</a></p>
            <p><a href="#rates" className="hover:underline">Սակագներ</a></p>
            <p><a href="#property" className="hover:underline">Օտարվող գույք</a></p>
            <p><a href="#builders" className="hover:underline">Կառուցապատողներ</a></p>
            <p><a href="#partners" className="hover:underline">Գործընկեր ավտոսրահներ</a></p>
            <p><a href="#archive" className="hover:underline">Սակագների արխիվ</a></p>
          </div>

          {/* Col 3 */}
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 text-sm mb-3">Օգտակար հղումներ</h3>
            <p><a href="#rights" className="hover:underline">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</a></p>
            <p><a href="#residency" className="hover:underline">Հաճախորդի ռեզիդենտության չափանիշներ</a></p>
            <p><a href="#regulation" className="hover:underline">Կարգավորում</a></p>
            <p><a href="#privacy" className="hover:underline">Գաղտնիության քաղաքականություն</a></p>
            <p><a href="#arbiter" className="hover:underline">Ֆին. հաշտարար</a></p>
            <p><a href="#aml" className="hover:underline">Ֆինանսական հանցագործությունների կանխարգելում</a></p>
            <p><a href="#cardholders" className="hover:underline">Հղումներ Բանկի քարտապանների համար</a></p>
          </div>

          {/* Col 4 */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-sm">Այլ հղումներ</h3>
            <div className="space-y-1.5">
              <p><a href="#online" className="hover:underline">EvocaONLINE</a></p>
              <p><a href="#safes" className="hover:underline">Պահատուփեր</a></p>
              <p><a href="#faq" className="hover:underline">Հաճախ տրվող հարցեր</a></p>
              <p><a href="#announcements" className="hover:underline">Հայտարարություններ</a></p>
              <p><a href="#dibrary" className="hover:underline">Dibrary</a></p>
              <p><a href="#booklets" className="hover:underline">Բուկլետներ</a></p>
              <p><a href="#contact" className="hover:underline">Հետադարձ կապ</a></p>
              <p><a href="#sitemap" className="hover:underline">Կայքի քարտեզ</a></p>
            </div>

            <div className="pt-2 space-y-2">
              <p className="font-bold text-[#6b21a8]"><a href="#branches">Բանկի հասցեները և աշխատաժամերը</a></p>
              <p className="font-bold text-[#6b21a8]"><a href="#contactus">Կապ մեզ հետ</a></p>
              <p className="font-bold text-gray-900 text-sm">+374 10 605555</p>
              <p className="font-bold text-[#6b21a8] text-base">8444</p>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Bottom Note */}
        <div className="max-w-7xl mx-auto pt-6 border-t border-gray-200 text-[10px] text-gray-400 leading-relaxed">
          Հարգելի' այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ԲԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստույգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
        </div>
      </footer>

      {/* Floating Chat Button (Bottom Right) */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-[#6b21a8] text-white px-4 py-2.5 rounded-full shadow-lg font-bold text-xs cursor-pointer hover:bg-purple-900 transition">
        <span>Գրեք մեզ, մենք օնլայն ենք !</span>
        <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
      </div>

    </div>
  );
}