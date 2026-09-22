import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DeclutterBlog = () => {
  const navigate = useNavigate();

  const relatedBlogs = [
    {
      id: 1,
      title: "Monthly Recap",
      date: "05.01.2026",
      image: "https://www.evoca.am/images-cache/blogs/1/17683779856926/428x321.png",
      href: "/blog/monthly-recap"
    },
    {
      id: 2,
      title: "Habit Tracker",
      date: "05.01.2026",
      image: "https://www.evoca.am/images-cache/blogs/1/17683792444137/428x321.png",
      href: "/blog/habit-tracker"
    },
    {
      id: 3,
      title: "Եվրոպայի լավագույն 5 Christmas Market-ները",
      date: "16.12.2025",
      image: "https://www.evoca.am/images-cache/blogs/1/17658933558475/428x321.png",
      href: "/blog/christmas-markets"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Navigation / Breadcrumb */}
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-1 bg-white border border-gray-300 rounded-full px-4 py-1.5 shadow-sm hover:bg-gray-100 transition font-medium"
          >
            ← Back
          </button>
          <div className="flex items-center space-x-2 text-xs sm:text-sm">
            <Link to="/" className="hover:text-purple-600">🏠</Link>
            <span>›</span>
            <Link to="/blog" className="hover:text-purple-600">Բլոգ</Link>
            <span>›</span>
            <Link to="/blog/lifestyle" className="hover:text-purple-600">Կենսակերպ</Link>
            <span>›</span>
            <span className="text-gray-400 font-medium truncate max-w-[150px] sm:max-w-none">
              Նայիր շուրջդ և տես, թե որքան ավելորդ իրեր կան
            </span>
          </div>
        </div>

        {/* Hero Section Banner */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          <div className="p-8 md:w-1/2 flex flex-col justify-between space-y-6">
            <div>
              <span className="inline-block bg-indigo-950 text-white text-xs font-bold px-3 py-1 rounded mb-4">
                Կենսակերպ
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                Նայիր շուրջդ և տես, թե որքան ավելորդ իրեր կան
              </h1>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                Այս տարի լինենք ավելի eco-friendly, օգտագործենք քիչ պլաստիկ և չվնասենք բնությանը:
              </p>
            </div>
            <div className="text-xs text-gray-400 font-medium">
              09.02.2022
            </div>
          </div>

          <div className="md:w-1/2 bg-gray-100 relative min-h-[280px] flex items-center justify-center overflow-hidden">
            <img 
              src="https://www.evoca.am/images-cache/blogs/1/16443271105456/450x295.png" 
              alt="Eco-friendly eco bag and items" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Content Article */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-6 text-sm sm:text-base leading-relaxed text-gray-700">
          
          <p className="font-semibold text-gray-800">
            Մեր շուրջն ամեն ինչ կազմված է էներգիայից: Իսկ ավելորդ իրերը խլում են լրացուցիչ էներգիա:
          </p>

          <p>
            Մենք կյանքի ընթացքում մեծ քանակությամբ աղբ ենք կուտակում՝ սննդային, արդյունաբերական, պլաստիկ, հին հագուստ և կահույք, էլեկտրական սարքեր (այս ցանկը կարելի է անվերջ շարունակել), որոնց մեծ մասը հետագայում ենթակա չէ վերամշակման: Մեր կողմից կուտակած աղբն ուղիղ համեմատական է մեր սպառման և արտադրության ծավալներին, ինչը տարեցտարի աճում է:
          </p>

          <p>
            Մի քանի խորհուրդ, թե ինչպե՞ս նվազագույնի հասցնել ավելորդ աղբի կուտակումը՝ ըստ <strong>Zero Waste Home</strong> գրքի հեղինակ Bea Johnson-ի.
          </p>

          <ul className="list-none space-y-3 pl-2 text-purple-900 font-medium">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span><strong>Հրաժարվիր այն ամենից, ինչ քեզ պետք չէ:</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span><strong>Նվազեցրու այն, ինչ քեզ հարկավոր է և ինչից չես կարող հրաժարվել:</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span><strong>Կրկին օգտագործիր այն, ինչ օգտագործում ես և ինչից չես կարող հրաժարվել կամ նվազեցնել:</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span><strong>Վերամշակիր այն, ինչից չես կարող հրաժարվել, կրճատել կամ նորից օգտագործել:</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span><strong>Այն ինչ մնաց, արդեն ավելորդ է:</strong></span>
            </li>
          </ul>

          <p>
            Ձեզ սկզբում կարող է բարդ թվալ «Zero waste» ապրելակերպը, սակայն վստահ ենք՝ շատ արագ կսովորեք: Աղբի քիչ կուտակումը ոչ միայն լավ է շրջակա միջավայրի համար, այլ նաև բարելավում է առողջությունը և խնայում է ժամանակ ու գումար:
          </p>

          <p>
            Հաճախակի ազատվեք այն իրերից, որոնք չեք օգտագործում՝ նվիրելով այն մարդկանց, ովքեր դրա կարիքն ունեն: Ունեցեք shopping list՝ ցուցակ, թե ինչի կարիքն իրոք ունեք: Այս դեպքում խանութներով շրջելիս երբեք ավելորդ գնումներ չեք անի՝ այսպես պայքարելով հետագա իրերի կուտակումից: Գնեք բազմակի օգտագործման իրեր, հատկապես երբ դրանք պլաստիկից են՝ ափսեներ, բաժակներ, շշեր, կտորից անձեռոցիկներ՝ թղթի փոխարեն: Գնումներից մնացած տոպրակները մի նետեք և հաջորդ անգամ ձեզ հետ խանութ տարեք:
          </p>

          <p>
            Տարբերակեք ձեր աղբը՝ թուղթ, ապակի, պլաստիկ,ապա իմացեք, թե որոնք են ձեր քաղաքում վերամշակման կետերը, որտեղ կարող եք հանձնել ձեր տարբերակված աղբը:
          </p>

          <p>
            Վերջերս կատարված ուսումնասիրությունը ցույց է տվել, որ արտադրված 6,3 միլիարդ տոննա պլաստիկ թափոններից միայն 9%-ն է վերամշակվում:
          </p>

          {/* Subheading Section */}
          <div className="pt-4 border-t border-gray-100 space-y-4">
            <h3 className="font-extrabold text-purple-900 text-base sm:text-lg">
              Ինչպե՞ս են թափոններն ազդում մոլորակի և շրջակա միջավայրի վրա:
            </h3>

            <p>
              Թափոնները մեծ ազդեցություն են ունենում մթնոլորտի և շրջակա միջավայրի վրա: Աղբամաններում թափվող աղբն արտանետում է մեթան գազ: Իսկ աշխարհի տարբեր մասերում աղբի մեծ, բաց կույտերի այրումից առաջանում է ածխածնի երկօքսիդ՝ վտանգավոր ծավալով ջերմոցային գազ, որը տաքացնում է մեր մոլորակը:
            </p>

            <p>
              Էլեկտրական և էլեկտրոնային սարքավորումների թափոնները կարող են նույնպես շատ վնասակար լինել շրջակա միջավայրի համար: Այս թափոններն անվանում են նաև e-waste, որոնք հանգեցնում են օդի աղտոտման: Բացի դրանից՝ էլեկտրական և էլեկտրոնային սարքավորումներից գոյացած թափոնները վտանգավոր են նաև մարդու առողջության համար:
            </p>

            <p>
              Այսպիսով, ի՞նչ կարելի է անել այս ամենի դեմ պայքարելու համար: Ձեր թափոնների՝ շրջակա միջավայրի վրա ազդեցությունը նվազեցնելու ճանապարհներից մեկը դրանք պատասխանատու կերպով հեռացնելն է, ինչի համար կան հատուկ մասնագիտացված ընկերություններ:
            </p>
          </div>

        </div>

        {/* Related Blogs Section */}
        <div className="pt-8 space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Related Blogs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedBlogs.map((blog) => (
              <Link 
                key={blog.id} 
                to={blog.href}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col justify-between"
              >
                <div className="h-44 overflow-hidden bg-gray-100">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-1 space-y-4">
                  <h4 className="font-bold text-sm text-gray-800 line-clamp-2">
                    {blog.title}
                  </h4>
                  <span className="text-xs text-gray-400 font-medium">
                    {blog.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer timestamp */}
        <div className="text-right text-xs text-gray-400 pt-4">
          Թարմացվել է՝ 05/06/2026 16:43
        </div>

      </div>
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
};

export default DeclutterBlog;