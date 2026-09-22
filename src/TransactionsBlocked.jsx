import React from 'react';
import { Link } from 'react-router-dom';

export default function TransactionsBlocked() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Վերին նավիգացիա և հացհատիկային ուղի (Breadcrumbs) */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-start md:items-center justify-between border-b border-gray-100 gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          <span>←</span> Վերադառնալ
        </Link>
        <div className="text-xs text-gray-500 flex items-center gap-2 flex-wrap">
          <span>🏠 Նորություններ</span>
          <span>›</span>
          <span className="text-purple-700 font-medium">Բանկային</span>
          <span>›</span>
          <span className="text-gray-800">Գործարքների արգելափակում 1 կոճակով</span>
        </div>
      </div>

      {/* Հիմնական բաժին */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-br from-purple-50/50 via-white to-purple-50/30 rounded-3xl p-6 md:p-12 shadow-sm border border-purple-100/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* ձախ կողմի տեքստային մաս */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block bg-[#6b21a8] text-white text-xs font-semibold px-3 py-1.5 rounded-md uppercase tracking-wider">
              Բանկային
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Գործարքների արգելափակում 1 կոճակով
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Հուլիսի 1-ից EvocaTOUCH հավելվածում ու EvocaONLINE համակարգում հասանելի կլինի նոր՝ «Գործարքների արգելափակում» ֆունկցիոնալը:
            </p>
            <div className="text-sm text-gray-400 font-medium pt-2">
              01.06.2026
            </div>
          </div>

          {/* Աջ կողմի նկար */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md w-full border border-purple-900/10">
              <img
                src="https://www.evoca.am/images-cache/news/1/17852444643548/438x328.png"
                alt="Գործարքների արգելափակում 1 կոճակով"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Ստորին մանրամասն բովանդակություն */}
        <div className="max-w-4xl mx-auto mt-12 space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
          <p>
            Այսօր թվային աշխարհում խարդախության փորձերը գնալով ավելի բազմազան են դառնում: Այդ պատճառով{' '}
            <strong className="text-purple-900">EvocaTOUCH</strong> հավելվածում ու{' '}
            <strong className="text-purple-900">EvocaONLINE</strong> համակարգում հասանելի կլինի նոր՝{' '}
            <span className="text-purple-800 italic font-medium">«Գործարքների արգելափակում» գործիքը</span>, որը կօգնի մեր օգտատերերին վերահսկել ու պաշտպանել իրենց հաշիվները:
          </p>

          <p>
            Այն հնարավորություն է տալիս ընդամենը <span className="text-purple-900 font-semibold italic">մեկ կոճակով</span> ժամանակավորապես արգելափակել առանձին կամ բոլոր օնլայն բանկային ծառայությունները:
          </p>

          <p>
            Եթե կասկածում եք, որ Ձեր տվյալները հայտնվել են երրորդ անձանց մոտ, կարող եք ինքնուրույն, ընդամենը մի քանի վայրկյանում ակտիվացնել արգելափակումը՝ առանց սպասելու կամ զանգահարելու Բանկ:
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-purple-900 pt-4">
            «Գործարքների արգելափակում» գործիքի միջոցով հնարավոր է արգելափակել հետևյալ բանկային ծառայությունները՝
          </h3>

          <ul className="space-y-3 pl-2">
            <li className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-purple-700 rounded-full"></span>
              <span>Փոխանցումներ և Վճարումներ</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-purple-700 rounded-full"></span>
              <span>Կանխիկացման հայտ</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-purple-700 rounded-full"></span>
              <span>Փոխանցում քարտից</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-purple-700 rounded-full"></span>
              <span>Վարկի բացման հայտ</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-purple-700 rounded-full"></span>
              <span>Վարկային գծի տրամադրման հայտ</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-purple-700 rounded-full"></span>
              <span>Հաշվի բացման հայտ</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-purple-700 rounded-full"></span>
              <span>Քարտի բացման հայտ</span>
            </li>
          </ul>

          <p className="pt-4">
            Արգելափակման ընթացքում ընտրված ծառայություններն անհասանելի կլինեն բոլորի համար, այդ թվում՝ Ձեզ:
          </p>

          <p>
            Ծառայությունների ապաարգելափակման համար անհրաժեշտ կլինի այցելել <span className="text-purple-800 font-medium underline">Evoca-ի ցանկացած մասնաճյուղ</span> և անցնել նույնականացման գործընթաց:
          </p>

          <div className="bg-purple-50/70 border-l-4 border-purple-800 p-6 rounded-r-2xl my-6 space-y-3">
            <h4 className="font-bold text-purple-900 text-lg">Կարևոր է</h4>
            <p className="text-gray-700 text-base">
              <em className="text-purple-900 font-medium">«Գործարքների արգելափակում» գործիքը</em> ստեղծվել է բացառապես Ձեր միջոցների և անձնական տվյալների անվտանգությունն ապահովելու համար: Խորհուրդ ենք տալիս այն չօգտագործել փորձարկման նպատակով, քանի որ արգելափակումից հետո ընտրված ծառայությունները կդառնան անհասանելի մինչև Բանկի մասնաճյուղում դրանց ապաարգելափակումը:
            </p>
          </div>

          <p className="font-semibold text-purple-900 pt-2">
            Ձեր ֆինանսական և անձնական տվյալների անվտանգությունը մեր առաջնահերթություններից է:
          </p>
        </div>
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