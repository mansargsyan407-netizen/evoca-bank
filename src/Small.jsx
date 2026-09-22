import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Small = () => {
  const navigate = useNavigate();

  const relatedBlogs = [
    {
    title: "Ֆիլներ ֆինանսական աշխարհի էնտուզիաստների համար Մաս 1",
    date: "28.08.2024",
    image: "https://www.evoca.am/images-cache/blogs/1/17248413426642/428x321.png",
    href: "/blog/films-finance-1",
  },
  {
    title: "EvocaINVEST. ինչպե՞ս կատարել գործարքներ",
    date: "17.06.2024",
    image: "https://www.evoca.am/images-cache/blogs/1/17186317173483/428x321.jpg",
    href: "/blog/evocainvest",
  },
  {
    title: "Ինչպե՛ս կառավարել պորտֆելը: Պորտֆելի կառավարման 3 փուլերը",
    date: "17.05.2024",
    image: "https://www.evoca.am/images-cache/blogs/1/17159356763697/428x321.jpg",
    href: "/blog/portfolio-management",
  },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Navigation & Breadcrumbs */}
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
            <Link to="/blog/investments" className="hover:text-purple-600">Ներդրումներ</Link>
            <span>›</span>
            <span className="text-gray-400 font-medium truncate max-w-[150px] sm:max-w-none">
              Փոքր քայլերով դեպի մեծ եկամուտներ
            </span>
          </div>
        </div>

        {/* Hero Section Banner */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          <div className="p-8 md:w-1/2 flex flex-col justify-between space-y-6">
            <div>
              <span className="inline-block bg-indigo-950 text-white text-xs font-bold px-3 py-1 rounded mb-4">
                Ներդրումներ
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                Փոքր քայլերով դեպի մեծ եկամուտներ
              </h1>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                Ինչպե՞ս կատարել ներդրումներ: Ինչպիսի՞ ներդրող եք Դուք: Ո՞րն է Ձեր ներդրումային ոճը: Այս և շատ այլ հարցերի պատասխաններ կգտնեք մեր նոր բլոգում:
              </p>
            </div>
            <div className="text-xs text-gray-400 font-medium">
              11.04.2024
            </div>
          </div>
          <div className="md:w-1/2 bg-[#7032ec] p-8 flex flex-col justify-between text-white relative min-h-[280px]">
            <div>
             <img src="https://www.evoca.am/images-cache/blogs/1/17128187874533/780x585.jpg" alt="" />
            </div>
       
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-6 text-sm sm:text-base leading-relaxed text-gray-700">
          
          <div className="text-center italic font-bold text-purple-700 text-base sm:text-lg my-6">
            “Never depend on a single income. Make an investment to create a second source.”
            <div className="not-italic text-sm text-indigo-900 mt-2 font-bold">
              Warren Buffett
            </div>
          </div>

          <p>
            ԱՄՆ-ում շուրջ 158 մլն մարդ՝ չափահաս բնակչության մոտ 61%-ը, ներդրումներ է կատարում բաժնետոմսերում, իսկ ըստ Հայաստանի ֆոնդային բորսայի հաշվետվությունների՝ միայն պետական պարտատոմսերով 2023 թվականի ընթացքում բորսայում կնքվել են ավելի քան 90 մլրդ, իսկ կորպորատիվ պարտատոմսերով 45 մլրդ ՀՀ դրամ ծավալով գործարքներ:
          </p>

          <p className="font-semibold text-gray-900">
            Իսկ Դուք երբևէ մտածե՞լ եք ներդրումներ կատարելու մասին:
          </p>

          <p>
            Բաժնետոմսերը, պարտատոմսերը, ֆոնդերի փայերը (ETF) ամենատարածված ներդրումային ակտիվներից են ամբողջ աշխարհում: Եկեք հասկանանք՝ ինչ են դրանք ու ինչով են տարբերվում միմյանցից, և թե որն է Ձեզ համար դրանցից ամենանպատակահարմար ներդրումային ակտիվը:
          </p>

          <div className="space-y-3 pt-2">
            <h3 className="font-bold text-gray-900 text-lg">
              Պարտատոմսեր:
            </h3>
            <p>
              Պարտատոմսը ցածր ռիսկային արժեթուղթ է: Ձեռք բերելով պարտատոմս՝ Դուք իրավունք եք ստանում նշված ժամկետում պարտատոմս թողարկած անձից ստանալ պարտատոմսի անվանական արժեքը, ինչպես նաև տոկոս: Տարբերում ենք երկու հիմնական տեսակ՝
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <strong className="text-purple-900">Զեղչատոկոսային</strong> - ձեռք եք բերում անվանական արժեքից ցածր արժեքով (զեղչով), մարվում է անվանական արժեքով: Օրինակ՝ եթե գնեք ԱՄՆ գանձապետական զեղչատոկոսային պարտատոմսեր (UST-Bill) 100,000 ԱՄՆ դոլար անվանական արժեքով, ձեռքբերման պահին Դուք կվճարեք ավելի փոքր գումար, ենթադրենք՝ 99,000 ԱՄՆ դոլար, իսկ պարտատոմսի մարման օրը կստանաք 100,000 ԱՄՆ դոլարը, և ձեր եկամուտը կլինի 100,000-99,000=1000 ԱՄՆ դոլար տարբերության չափով:
              </li>
              <li>
                <strong className="text-purple-900">Արժեկտրոնային</strong> - կատարվում են արժեկտրոնային վճարումներ սահմանված ժամանակացույցով՝ հաշվարկված անվանական արժեքի նկատմամբ: Օրինակ՝ եթե ձեռք բերեք 10 մլն դրամ անվանական արժեքով 10% արժեկտրոնային եկամտաբերությամբ պարտատոմս, որի արժեկտրոնները վճարվում են տարեկան կտրվածքով, պարտատոմսի ժամկետի ընթացքում տարեկան կստանաք 1 մլն դրամ արժեկտրոն, իսկ պարտատոմսի մարման օրը՝ նաև անվանական 10 մլն դրամը:
              </li>
            </ul>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="font-bold text-gray-900 text-lg">
              Բաժնետոմսեր:
            </h3>
            <p>
              Բաժնետոմսեր ձեռք բերելով ոչ միայն կարող եք եկամուտ ստանալ դրանց գնի աճից, այլ նաև այն տալիս է կազմակերպության շահույթից մասնաբաժին ստանալու իրավունք, եթե կազմակերպությունը կայացնի շահաբաժինների վճարման որոշում: Ի տարբերություն պարտատոմսերի՝ բաժնետոմսերում ներդրումը ավելի ռիսկային է. դրանք չունեն պարտատոմսերի նման հստակ սահմանված մարման ու դրամական հոսքերի ժամանակացույց:
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="font-bold text-gray-900 text-lg">
              ETF (ֆոնդի փայեր):
            </h3>
            <p>
              ETF-ները, բաժնետոմսերի համեմատ, ավելի ցածր ռիսկային ներդրումային ակտիվներ են, քանի որ հնարավորություն են տալիս կատարել զամբյուղային ներդրումներ: Դուք գնում եք ֆոնդի փայ, որը ներդրումներ է կատարում իր ռազմավարությանը համապատասխանող բազմաթիվ ակտիվներում, այսինքն՝ ոչ մեծ գումարով կարողանում եք ապահովել նաև պորտֆելի դիվերսիֆիկացիա:
            </p>
          </div>

          <p className="pt-2 italic">
            Կատարելով նախապես կշռադատված ու գրագետ ներդրումներ՝ թույլ եք տալիս, որ Ձեր գումարն աշխատի Ձեր փոխարեն:
          </p>

          <div className="bg-purple-50 rounded-2xl p-6 my-6 border border-purple-100 space-y-3">
            <h4 className="text-purple-800 font-bold text-lg">
              EvocaINVEST. Նոր եկամուտների ժամանակն է
            </h4>
            <p>
              <strong className="text-purple-900">EvocaINVEST</strong> հավելվածի միջոցով կարող եք կատարել ներդրումներ մի շարք միջազգային ֆինանսական շուկաներում:
            </p>
            <p>
              <strong className="text-purple-900">EvocaINVEST</strong>-ը հասանելի է <strong>web</strong> և <strong>mobile հավելվածի</strong> (<a href="#" className="text-purple-600 underline">App Store</a> և <a href="#" className="text-purple-600 underline">Google Play</a>) տարբերակներով:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-purple-900 font-medium pt-2">
              <li>Դարձեք Բանկի հաճախորդ</li>
              <li>Բացեք Բրոքերային հաշիվ</li>
              <li>Ներբեռնեք հավելվածը</li>
              <li>Համալրեք հաշիվը</li>
              <li>Կատարեք ներդրումեր</li>
              <li>Ստացեք եկամուտներ</li>
            </ul>

            <div className="pt-4 border-t border-purple-200 text-sm space-y-1">
              <p className="italic text-gray-600">Հարցերի և մանրամասների համար՝</p>
              <p className="font-semibold text-purple-900">• +374-10-20-55-55</p>
              <p className="font-semibold text-purple-900">• invest@evoca.am</p>
            </div>
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

      </div>
    </div>
  );
};

export default Small;