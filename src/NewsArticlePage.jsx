import React from 'react';
import { Link } from 'react-router-dom';

export default function NewsArticlePage() {
  return (
    <div className="w-full bg-white text-[#333333] font-sans min-h-screen relative">

      {/* Social Sticky Bar (Left Side) */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 bg-gray-100/80 backdrop-blur-sm p-2 rounded-r-xl flex flex-col gap-3 text-gray-500 z-40 text-sm">
        <a href="#facebook" className="hover:text-[#6b21a8] transition">f</a>
        <a href="#twitter" className="hover:text-[#6b21a8] transition">🐦</a>
        <a href="#linkedin" className="hover:text-[#6b21a8] transition">in</a>
        <a href="#pinterest" className="hover:text-[#6b21a8] transition">P</a>
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
          {/* Breadcrumb Navigation */}
              <div className="px-8 md:px-20 py-4 text-xs text-gray-500 flex items-center gap-2">
                <Link to="/" className="hover:underline">Վերադառնալ</Link>
                <span>›</span>
                <span>Նորություններ</span>
                <span>›</span>
                <span>Պրոդուկտներ</span>
                <span>›</span>
                <span>Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով</span>
                <span>›</span>
              </div>

        {/* Top Hero Layout (Header + Image Grid) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Hero Card */}
          <div className="bg-[#fcfbfe] rounded-3xl p-8 lg:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-4 h-1.5 bg-[#d946ef] rounded-full"></span>
                <span className="text-xs font-bold text-[#6b21a8]">Պրոդուկտներ</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով
              </h1>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-2">
                Մինչև սեպտեմբերի 15-ը վճարիր Evoca Mastercard-ով ակցիայի մասնակից խանութներում և գրախանութներում ու ստացիր մինչև 23% cashback:
              </p>
            </div>

            <div className="text-xs text-gray-400 font-medium">
              21.08.2026
            </div>
          </div>

          {/* Right Banner Image */}
          <div className="rounded-3xl overflow-hidden shadow-sm relative min-h-[300px]">
            <img 
              src="https://www.evoca.am/images-cache/news/1/17873217684586/439x320.png" 
              alt="Back to School Evocabank" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Detailed Article Body */}
        <section className="max-w-4xl mx-auto space-y-8 text-sm md:text-base leading-relaxed text-gray-700">
          
          <p>
            Նոր տետրերի հոտը, դեռ չգրված առաջին էջերը, գունավոր գրիչների ընտրությունը, այն նոր պայուսակը, որի մեջ գեղեցիկ դասավորվում են նոր գնված իրերը։
          </p>

          <p>
            <strong className="text-[#6b21a8] font-bold">Մինչև սեպտեմբերի 15-ը</strong> կատարիր գնումներ ակցիայի մասնակից խանութներում և գրախանութներում, պարզապես վճարիր <strong className="text-[#6b21a8] font-bold">Evoca Mastercard</strong>-ով և գումարի մի մասը կվերադառնա քեզ՝ <strong className="text-[#6b21a8] font-bold">մինչև 23% cashback-ի</strong> տեսքով։
          </p>

          {/* Partner Stores List */}
          <div className="space-y-4">
            <h2 className="text-base sm:text-lg font-bold text-[#6b21a8]">
              Ակցիային մասնակցում են՝
            </h2>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#6b21a8] mt-2 shrink-0"></span>
                <span>Miniso` <strong className="text-gray-900 font-bold">20% cashback + 3% cashback EvocaBENEFITS</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#6b21a8] mt-2 shrink-0"></span>
                <span>Zangak` <strong className="text-gray-900 font-bold">20% cashback</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#6b21a8] mt-2 shrink-0"></span>
                <span>Epigraph` <strong className="text-gray-900 font-bold">20% cashback</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#6b21a8] mt-2 shrink-0"></span>
                <span>Bookinist` <strong className="text-gray-900 font-bold">20% cashback</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#6b21a8] mt-2 shrink-0"></span>
                <span>Amrak` <strong className="text-gray-900 font-bold">20% cashback</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#6b21a8] mt-2 shrink-0"></span>
                <span>Penbox` <strong className="text-gray-900 font-bold">20% cashback</strong></span>
              </li>
            </ul>
          </div>

          {/* Important Facts List */}
          <div className="space-y-4 pt-4">
            <h2 className="text-base sm:text-lg font-bold text-[#6b21a8]">
              Մի քանի կարևոր փաստ՝
            </h2>
            <ul className="space-y-4 pl-2">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#6b21a8] mt-2 shrink-0"></span>
                <span>Վճարումը հնարավոր է կատարել ցանկացած <strong className="text-[#6b21a8] font-bold">Evoca Mastercard</strong> քարտով</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#6b21a8] mt-2 shrink-0"></span>
                <span><strong className="text-[#6b21a8] font-bold">Cashback</strong>-ը տրամադրվում է մեկ հաճախորդի հաշվով (կարող ես գնումներ կատարել քո բոլոր Evoca Mastercard-երով, սակայն cashback-ի ընդհանուր սահմանաչափը չի փոխվում)։</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#6b21a8] mt-2 shrink-0"></span>
                <span><strong className="text-[#6b21a8] font-bold">Cashback</strong>-ի առավելագույն չափը՝ <strong className="text-[#6b21a8] font-bold">20,000 դրամ</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#6b21a8] mt-2 shrink-0"></span>
                <span><strong className="text-[#6b21a8] font-bold">Cashback</strong>-ը կտրամադրվի ակցիայի ավարտից հետո՝ առավելագույնը <strong className="text-[#6b21a8] font-bold">20 աշխատանքային օրվա ընթացքում</strong>։</span>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="pt-6 space-y-2">
            <p>Ցուցակդ պատրաստ է, իսկ <strong className="text-[#6b21a8] font-bold">Evoca Mastercard</strong>-ը։ Դեռ չունե՞ս։</p>
            <p>
              Շտապիր պատվիրել <Link to="/travel-card" className="text-[#6b21a8] underline font-bold">քարտը</Link> հիմա և օգտվել <strong className="text-[#6b21a8] font-bold">մինչև 23% cashback-ից</strong>։
            </p>
          </div>

        </section>

        {/* Other News Section */}
        <section className="pt-12 border-t border-gray-100 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="space-y-3 group cursor-pointer">
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
            </div>

            {/* Card 2 */}
            <div className="space-y-3 group cursor-pointer">
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
            </div>

            {/* Card 3 */}
            <div className="space-y-3 group cursor-pointer">
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
            </div>

          </div>

          <div className="text-right text-xs text-gray-400 pt-4">
            Թարմացվել է` 21/08/2026 18:58
          </div>
        </section>

      </main>

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