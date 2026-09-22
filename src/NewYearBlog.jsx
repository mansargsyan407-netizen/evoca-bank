import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NewYearBlog = () => {
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
        
        {/* Breadcrumb Navigation */}
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
              Ամանորի քո Evocaգույն երազանքը
            </span>
          </div>
        </div>

        {/* Banner Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          <div className="p-8 md:w-1/2 flex flex-col justify-between space-y-6">
            <div>
              <span className="inline-block bg-indigo-950 text-white text-xs font-bold px-3 py-1 rounded mb-4">
                Կենսակերպ
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                Ամանորի քո Evocaգույն երազանքը
              </h1>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                Ավելի հաճելի է նվեր նվիրե՛լ, թե՛ ստանալ: Ինչպե՛ս երազանք պահել Ամանորի գիշերը: Ո՞րն է ամենաթրենդային նվերի տարբերակը: Բոլոր պատասխանները կգտնես բլոգում:
              </p>
            </div>
            <div className="text-xs text-gray-400 font-medium">
              21.12.2023
            </div>
          </div>

          <div className="md:w-1/2 bg-purple-900 flex items-center justify-center p-4">
            <img 
              src="https://www.evoca.am/images-cache/blogs/1/1703162335976/780x585.png" 
              alt="Ամանորի քո Evocaգույն երազանքը" 
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-6 text-sm sm:text-base leading-relaxed text-gray-700">
          
          {/* Christmas Song Greetings */}
          <div className="text-center italic font-bold text-purple-700 space-y-2 py-2">
            <p className="text-lg">We wish you a Merry Christmas</p>
            <p className="text-lg">We wish you a Merry Christmas</p>
            <p className="text-lg">We wish you a Merry Christmas</p>
            <p className="text-xl pt-2">And a Happy New Year!</p>
          </div>

          <p>
            Շուրջբոլորը ամանորյա զարդարանքներ, փայլեր, լույսեր... Ամեն ինչ հուշում է, որ տոներն են մոտենում: Իսկ տոների հետ միասին՝ նվերներ ու անակնկալներ:
          </p>

          <p>
            Հաճելի է ստանալ նվերներ, բայց միևնույն ժամանակ ավելի հաճելի ու հետաքրքիր է նվիրելը:
          </p>

          <p>
            Ամերիկացի գիտնականների ուսումնասիրությունը հաստատվել է փորձարարական ճանապարհով: Մեկ ամիս շարունակ հետազոտության հեղինակները ուսանողների խմբին 5-ական դոլար են նվիրել, ընդ որում՝ նրանցից յուրաքանչյուրը գումարի մի մասով պետք է ընկերոջ համար նվեր պատրաստեր: Գիտնականները, ուսումնասիրելով ուսանողների հույզերը, եկել են եզրահանգման. փաստն այն է, որ նվիրելուց առաջացած ուրախությունն ավելի երկար է տևում, քան նվեր ստանալուց:
          </p>

          <p>
            Նվերներ ընտրելն առաջին հայացքից շատ հեշտ է, բայց խոստովանենք, որ իրականում այն բավականին բարդ, ժամանակատար և պատասխանատու գործընթաց է:
          </p>

          <p className="font-semibold text-gray-900">
            Իսկ գիտե՞ս՝ որտեղի՞ց է եկել Ամանորին միմյանց նվերներ տալու սովորույթը:
          </p>

          <p>
            Ամանորյա նվերներ տալու սովորույթը գալիս է Հին Հռոմից: Ասում են՝ առաջին նվերները եղել են դափնու տերևներ, որոնք երջանկություն ու հաջողություն էին բերում գալիք տարում:
          </p>

          <p className="italic bg-purple-50 p-4 border-l-4 border-purple-600 rounded-r-lg text-purple-900">
            «Ցանկանում եմ բարենպաստ ու երջանիկ Նոր տարի»,- գրում էին հռոմեացիները ամանորյա նվերների վրա:
          </p>

          <p>
            Քեզ համար առանձնացրել ենք թոփ ամենահետաքրքիր հնգյակը՝ ինչեր են սիրում նվիրել Ամանորին աշխարհի տարբեր երկրներում:
          </p>

          {/* Numbered List for Countries */}
          <ol className="space-y-6 list-none pl-0">
            <li className="flex gap-3">
              <span className="font-bold text-purple-600 text-lg">1.</span>
              <div>
                <strong>Անգլիացիներն</strong> անընդունելի են համարում Ամանորին ճոխ նվերներ նվիրելը: Նրանք երբեք չեն նվիրի որևէ թանկարժեք, եզակի հուշանվեր կամ զարդ, սիրում են նվիրել բուրավետ մոմեր, գեղեցիկ տիկնիկներ կամ թեյ պատրաստելու համար գդալներ: Այս ամենին հակառակ՝ <strong>ամերիկացիները</strong>, օրինակ, սիրում են ճոխ նվերներ նվիրել, ընդ որում՝ կտրոնով: Կտրոնը պետք է նրա համար, որ, հարկ եղած դեպքում, այն վերադարձվի խանութին կամ փոխարինվի:
              </div>
            </li>

            <li className="flex gap-3">
              <span className="font-bold text-purple-600 text-lg">2.</span>
              <div>
                <strong>Ավստրիացիները</strong> նախընտրում են Ամանորին նվիրել անհրաժեշտ իրեր: Քանի որ Ավստրիայում կյանքը բավականին թանկ է, ընտանիքների մեծ մասը նախընտրում է գեղեցիկ հագուստ կամ աքսեսուարներ ստանալ: Այստեղ նաև ընդունված է նվիրել Վիեննայի հանրահայտ օպերային տոնական երեկոյի հրավիրատոմս: Ուշադրության նման նշանները գնահատում են թե՛ տարեց, թե՛ երիտասարդ ավստրիացիները:
              </div>
            </li>

            <li className="flex gap-3">
              <span className="font-bold text-purple-600 text-lg">3.</span>
              <div>
                <strong>Իտալացիների</strong> համար նվերը բարձր ու նուրբ ճաշակի դրսևորում է: Մեկ շիշ լավ գինին նրանց կուրախացնի այնքան, որքան, օրինակ, ոճային պայուսակը, հագուստը կամ աքսեսուարը: Իտալացիները գտնում են, որ Ամանորին պետք է ազատվել բոլոր հին և անպետք իրերից: Ըստ նրանց՝ որքան շատ իրեր դեն նետես, այդքան ավելի հարուստ կլինես Նոր տարում: Այդ պատճառով Ամանորի գիշերը իտալացիները պատուհանից դուրս են նետում իրենց բոլոր հին իրերը՝ հին արդուկներ, ծաղկամաններ, աթոռներ, կոշիկներ...
              </div>
            </li>

            <li className="flex gap-3">
              <span className="font-bold text-purple-600 text-lg">4.</span>
              <div>
                <strong>Չինացիները</strong> Ամանորին նվիրում են զույգ իրեր, որոնք խորհրդանշում են միասնությունը, ընտանեկան ներդաշնակությունը: Նրանց համար անընդունելի է ժամացույց նվիրելը. դա Չինաստանում մահվան խորհրդանիշ է համարվում:
              </div>
            </li>

            <li className="flex gap-3">
              <span className="font-bold text-purple-600 text-lg">5.</span>
              <div>
                <strong>Ճապոնացիները</strong> Ամանորին միմյանց նվիրում են «սեյբո», որն ավանդական նվերների հավաքածու է: Համարվում է, որ ծաղիկ նվիրելու իրավունք ունեն միայն կայսերական ընտանիքի անդամները:
              </div>
            </li>
          </ol>

          {/* Armenia Section */}
          <div className="pt-4 space-y-4">
            <p className="font-semibold text-gray-900">
              Իսկ ի՞նչ են նվիրում Ամանորին Հայաստանում:
            </p>
            <p>Մեզ մոտ չկան «ավանդական» նվերներ, որոնք պարտադիր է նվիրել Ամանորին:</p>
            <p>
              Նվերներն ընտրվում են ըստ նախասիրությունների. հիմնականում նվիրում են քաղցրավենիք, ոճային աքսեսուար, պայուսակ, ժամացույց և այլ անհրաժեշտ իրեր:
            </p>
            <p>
              Վերջին տարիներին թրենդային է դարձել նվեր քարտ նվիրելը, որը տալիս է անսահմանափակ ընտրության հնարավորություն:
            </p>
            <p>
              Ու եթե նախկինում մարդիկ նախընտրում էին հատուկ խանութների նվեր քարտեր նվիրել, այժմ այդ սահմանափակումն էլ չկա: Նվիրում են այնպիսի նվեր քարտեր, որոնց հնարավոր է օգտագործել ամենուրեք՝ առանց բացառության:
            </p>
            <p>
              <strong>Evocabank</strong>-ը առաջարկում է <strong>Evoca Gift Card</strong>-ը, որն իդեալական է Ամանորին նվիրելու համար, քանի որ ունի գեղեցիկ փաթեթավորում, էսթետիկ է և թրենդային:
            </p>
            <p>Նվիրողը պարզապես ընտրում է գումարի չափը, իսկ ստացողը՝ իր նվերը:</p>
            <p>
              Քարտը տրամադրվում է տեղում՝ դիմելու պահին, կամ առաքման միջոցով պատվիրելուց հետո՝ 1 աշխատանքային օրվա ընթացքում:
            </p>
          </div>

          {/* Gift Card Benefits */}
          <div className="space-y-3 pt-2">
            <p className="font-bold text-purple-900">
              Իսկ ի՞նչ առավելություններ կտա քարտը.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-purple-900 font-medium">
              <li>Ընտրության ազատություն</li>
              <li>Գեղեցիկ դիզայն և փաթեթավորում</li>
              <li>Ժամանակի խնայողություն</li>
              <li>Սխալ ընտրության բացառում</li>
            </ul>
          </div>

          {/* How to Order */}
          <div className="space-y-3 pt-2">
            <p className="font-bold text-purple-900">
              Ինչպե՞ս պատվիրել քարտը.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-purple-900 font-medium">
              <li>Evocabank-ի ցանկացած մասնաճյուղում</li>
              <li>EvocaTOUCH հավելվածի միջոցով</li>
              <li>evoca.am կայքում</li>
            </ul>
            <p className="pt-2">
              Պատկերացնո՞ւմ ես անգամ կարող ես ինքդ ընտրել դիզայնը՝ <strong className="text-purple-700">Violet Gift Card</strong> կամ <strong className="text-gray-900">Black Gift Card</strong>:
            </p>
          </div>

          {/* Bank Cards Image Display */}
          <div className="py-6 flex justify-center items-center">
         <img src="https://www.evoca.am/file_manager/black-gift.png" alt="" />
          </div>

          <p>
            Մեր <strong>Evoca Gift Card</strong>-ի մանրամասներին կարող ես ծանոթանալ <a href="https://evoca.am" target="_blank" rel="noreferrer" className="text-purple-600 underline font-bold">այստեղ</a>:
          </p>

          <p>
            Բայց վերջում ցանկանում ենք ամանորյա տրամադրությամբ ավարտել: Չէ՞ որ երբ խոսում ենք Ամանորից, բացի նվերներից՝ մտածում ենք նաև երազանքների կատարման և հրաշքների մասին:
          </p>

          <p>
            Իսկ դու ունե՞ս որևէ տարբերակ Ամանորի գիշերը երազանք պահելու: Ցանկանում ենք քեզ հետ կիսվել մի քանի տարբերակով.
          </p>

          {/* Wishes List */}
          <ul className="list-disc pl-6 space-y-3 text-purple-900 font-medium">
            <li>
              Շատերն են երազանքը գրում թղթի վրա, այրում այն, գցում շամպայնի մեջ ու խմում՝ հավատալով, որ այն անպայման իրականանալու է գալիք տարվա ընթացքում:
            </li>
            <li>
              Սա գուցե ծիծաղելի հնչի, բայց գրիր նամակ Ձմեռ պապին: Երազանքների մասին գրելը դրանց իրագործման ճանապարհին առաջին քայլն է: Ամեն տարի ծրարի մեջ դիր երազանքներով քո նամակը և հաջորդ տարի բացիր այն ու տես՝ գրածներից որ երազանքն ես իրականացրել, և որի վրա դեռ պետք է աշխատես:
            </li>
            <li>
              Նոր տարվա գիշերը 12 թերթիկների վրա գրիր քո 11 ցանկությունները, իսկ մի թերթիկը դատարկ թող: Դիր թերթիկները բարձի տակ և առավոտյան պատահականության սկզբունքով հանիր մի թերթիկ: Այն, ինչ գրված կլինի այնտեղ, կկատարվի այդ տարի:
            </li>
          </ul>

          {/* Final Tree Decoration Image */}
          <div className="py-6 flex justify-center">
            <img 
              src="https://www.evoca.am/file_manager/2.png" 
              alt="Christmas Decorations" 
              className="rounded-3xl max-h-80 w-full object-cover shadow-md"
            />
          </div>

          <p>
            Չմոռանաս գալիք տարում քեզ համար դնել նպատակներ, ձեռնարկել քայլեր դրանց հասնելու համար և պատրաստ լինել ցանկացած մարտահրավերի, որովհետև դու հաղթելու ես:
          </p>

          <p>
            Քեզ մաղթում ենք հրաշքներով ու նվերներով լի Ամանոր: Ամենակարևորը՝ հավատա ու գնա երազանքներիդ հետևից:
          </p>

          <p className="font-extrabold text-purple-800 text-lg">
            XOXO, քո Evoca...
          </p>

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

export default NewYearBlog;