import React from 'react';
import { Link } from 'react-router-dom';

const relatedBlogs = [
  {
    id: 1,
    title: "Monthly Recap",
    date: "05.01.2026",
    image: "https://www.evoca.am/images-cache/blogs/1/17683779856926/428x321.png"
  },
  {
    id: 2,
    title: "Habit Tracker",
    date: "05.01.2026",
    image: "https://www.evoca.am/images-cache/blogs/1/17683792444137/428x321.png"
  },
  {
    id: 3,
    title: "Եվրոպայի լավագույն 5 Christmas Market-ները",
    date: "16.12.2025",
    image: "https://www.evoca.am/images-cache/blogs/1/17658933558475/428x321.png"
  }
];
export default function EvocaColorPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans pb-16">
      {/* 1. Top Breadcrumbs Navigation */}
      <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-gray-500 flex items-center gap-2">
        <Link 
          to="/blog" 
          className="hover:bg-gray-100 transition flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1 bg-gray-50 text-gray-700 font-medium"
        >
          ← Back
        </Link>
        <span className="ml-2">🏠</span>
        <span>›</span>
        <Link to="/blog" className="hover:underline">Բլոգ</Link>
        <span>›</span>
        <span className="text-purple-600 font-medium">Կենսակերպ</span>
        <span>›</span>
        <span className="text-gray-400 truncate max-w-xs">Evoca-գույնի հոգեբանական նկարագիրը</span>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* 2. Banner Header Section (Ճշգրիտ ըստ Image 1-ի) */}
        <div className="bg-[#f5f4f8] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="md:w-1/2 space-y-4">
            <span className="bg-[#5b2282] text-white text-xs font-semibold px-3 py-1 rounded-sm inline-block">
              Կենսակերպ
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#222222] leading-tight">
              Evoca-գույնի հոգեբանական նկարագիրը
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              Գույնը մարքեթինգային գործիք է: Այն ազդում է մարդու հոգեբանության վրա:
            </p>
            <div className="pt-4 text-xs text-gray-400 font-medium">
              18.06.2020
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img
                src="https://www.evoca.am/images-cache/blogs/1/16336923273854/1440x650.png"
                alt="Evoca-գույնի հոգեբանական նկարագիրը"
                className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* 3. Article Content */}
        <div className="mt-10 max-w-4xl mx-auto space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            Յուրաքանչյուր գույն՝ ակտիվացնելով գլխուղեղի բաժիններն, առաջացնում է տարբեր զգացողություններ՝ հանգստություն, երջանկություն, ջերմություն, ընդհուպ մինչև տագնապ:
            Օգտագործելով գույնի հոգեբանական ֆակտորը՝ բրենդները սկսեցին թիրախային լսարան ներգրավել: Ճիշտ ընտրված գույնը բրենդի հաջողության հիմքն է: Այն գրավում է ուշադրությունը, ազդում զգայարանների և վարքի վրա:
          </p>

          <h2 className="text-base font-bold text-[#8c30d2] pt-2">
            Իսկ ո՞րն է Evoca-գույն մանուշակագույնի հոգեբանությունը (PANTONE 18-3838 Ultra Violet)
          </h2>

          <p>
            Դրամատիկ ու սադրիչ ուլտրա-մանուշակագույնը ամենաբազմամակարդակ ու խորհրդավոր գույներից է: Նախ և առաջ, մանուշակագույնը <span className="text-[#8c30d2] font-semibold">տիեզերական</span> գույն է, այն արտասովորի և գեղարվեստական շքեղության սիմվոլ է: Այն լի է տարբեր զգացողություններով և ոգեշնչում է անհատներին գտնել տիեզերքում իրենց յուրահատուկ դիրքը: Այս գույնը նախընտրում են բարձր հոգևոր արժեքներ ունեցող մարդիկ:
          </p>

          <p>
            Այս գույնը խորհրդանշում է ինչ-որ <span className="text-[#8c30d2] font-semibold">նորի առաջացում</span>, ծաղկում, երազկոտություն, նրբանկատություն, ներդաշնակություն սեփական եսի հետ: Գույնի հոգեբանական վերլուծության ժամանակ պարզվել է, որ այս գույնն ավելի հաճախ գերադասում են երեխաները: Միգուցե այն կախարդակա՞ն է:
          </p>

          <p>
            Ուլտրա-մանուշակագույնը խորհուրդ է տրվում կիրառել բիզնեսի, կրթության, մշակույթի և արվեստի ոլորտներում: Այն համապատասխանում է այն ապրանքանիշերին, որոնք դիրքավորվում են որպես հեղինակություն վայելող: <span className="text-[#8c30d2] font-[#8c30d2] font-bold">Evocabank</span>-ի բրենդային գույներն են մոխրագույնն ու ուլտրա-մանուշակագույնը:
          </p>

          <h3 className="text-base font-bold text-[#8c30d2] pt-2">
            Ինչո՞ւ
          </h3>

          <p>
            Որովհետև մենք ուզում ենք ընդգծել բրենդի յուրահատկությունը, նորարարությունը և ձգտումը դեպի նոր իրականություն: Այն վառ է, երիտասարդական, խորհրդավոր, մոտիվացնող ու տալիս է երևակայությունից դուրս ցանկացած նպատակին հասնելու ազատություն:
          </p>

          <p>
            Բազում հայտնի ապրանքանիշեր, ինչպիսիք են՝ Yahoo-ն, FedEx-ը, Milka-ն և Hallmark-ը, որպես մարքեթինգային գույն ընտրել են մանուշակագույնի երանգները:
            Cadbury-ի քաղցրավենիքի բրենդինգը մանուշակագույն արվեց՝ ի պատիվ Վիկտորիա թագուհու, ով խենթանում էր գույնի համար:
          </p>
        </div>

        {/* 4. Related Blogs Section */}
        <div className="mt-16 pt-8 border-t border-gray-100 max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Related Blogs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedBlogs.map((blog) => (
              <div key={blog.id} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-3 bg-purple-900 h-44">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h4 className="font-bold text-sm text-gray-900 group-hover:text-purple-600 transition">
                  {blog.title}
                </h4>
                <p className="text-xs text-gray-400 mt-1">{blog.date}</p>
              </div>
            ))}
          </div>
        </div>
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