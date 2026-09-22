import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BusinessGuide = () => {
  const navigate = useNavigate();

  const relatedBlogs = [
    {
      id: 1,
      title: "Ամեն ինչ բանկոմատների մասին",
      date: "31.01.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/16679076091685/428x321.jpg",
      href: "/blog/atms"
    },
    {
      id: 2,
      title: "Ֆինանսական ճգնաժամեր",
      date: "06.07.2020",
      image: "https://www.evoca.am/images-cache/blogs/1/16329967423394/428x321.png",
      href: "/blog/financial-crises"
    },
    {
      id: 3,
      title: "Հաջողակ բանակցությունների 10 պատվիրանները",
      date: "18.06.2020",
      image: "https://www.evoca.am/images-cache/blogs/1/16336139236001/428x321.png",
      href: "/blog/negotiation-rules"
    }
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
            <Link to="/blog/business" className="hover:text-purple-600">Բիզնես</Link>
            <span>›</span>
            <span className="text-gray-400 font-medium truncate max-w-[150px] sm:max-w-none">
              Ինչպես սկսել բիզնես: Guide from A to Z
            </span>
          </div>
        </div>

        {/* Hero Section Banner */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          <div className="p-8 md:w-1/2 flex flex-col justify-between space-y-6">
            <div>
              <span className="inline-block bg-indigo-950 text-white text-xs font-bold px-3 py-1 rounded mb-4">
                Բիզնես
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                Ինչպես սկսել բիզնես:<br />Guide from A to Z
              </h1>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                Եթե ուզում եք ունենալ այն, ինչը երբեք չեք ունեցել, սկսեք անել այն, ինչը երբեք չեք արել:
              </p>
            </div>
            <div className="text-xs text-gray-400 font-medium">
              05.01.2024
            </div>
          </div>
          <div className="md:w-1/2 bg-black p-8 flex flex-col justify-between text-white relative min-h-[280px]">
            <div className="text-right">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide leading-snug">
                ԻՆՉՊԵՍ ՍԿՍԵԼ ԲԻԶՆԵՍ<br />ՀԱՅԱՍՏԱՆՈՒՄ
              </h2>
            </div>
            <div className="mt-8 flex justify-center items-center">
              <img 
                src="https://www.evoca.am/images-cache/blogs/1/16691870758279/450x295.jpg" 
                alt="Evoca Bank Business Card" 
                className="w-64 object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-6 text-sm sm:text-base leading-relaxed text-gray-700">
          
          <p>
            Բիզնես ունենալը բոլորի համար էլ գրավիչ է ու ցանկալի, սակայն հարց է ծագում՝ որտեղի՞ց սկսել բիզնես:
          </p>
          <p>
            Ոչ բոլորն են պատկերացնում, թե ինչ պետք է անել կամ ուր դիմել:
          </p>
          <p>
            <strong>Evoca</strong>-ն պատրաստել է <strong>բիզնես սկսելու guide from A to Z</strong>՝ իրական, աշխատող խորհուրդներով և քայլերի հերթականությամբ: Այն կօգնի քեզ քո բիզնես գաղափարը դարձնել իրականություն:
          </p>
          <p>
            Այստեղ կգտնես անգամ բիզնեսի գրանցման փաստաթղթային և հարկային մանրամասները՝ հղումներով:
          </p>

          <h3 className="text-center font-extrabold text-purple-700 text-lg sm:text-xl my-6">
            Եվ այսպես. որտեղի՞ց սկսել բիզնես
          </h3>

          <p>
            Նախևառաջ, պետք է ունենալ հստակ <strong>բիզնես գաղափար</strong>, այսինքն՝ ինչ եք դուք ցանկանում և ինչու: Միշտ սկսեք Ձեր բիզնես գաղափարը ԻՆՉՈՒ-ից:
          </p>

          <p className="font-semibold text-gray-900">Պատասխանեք այս հարցերին՝</p>

          <ul className="list-disc pl-6 space-y-2 text-purple-900 font-medium">
            <li>Ինչո՞ւ եք ուզում սկսել բիզնեսը, որն է Ձեր նպատակը</li>
            <li>Ի՞նչ խնդիր է լուծելու Ձեր պրոդուկտը կամ ծառայությունը</li>
            <li>Ինչո՞վ եք Դուք տարբերվելու մրցակիցներից</li>
            <li>Ո՞վ է Ձեր թիրախը</li>
            <li>Ո՞րն է եկամուտ ստանալու Ձեր բանաձևը</li>
            <li>Ինչպե՞ս եք խթանելու ու զարգացնելու բիզնեսը</li>
            <li>Ի՞նչ է Ձեզ պետք առաջին քայլերն անելու համար</li>
          </ul>

          <p>
            Կատարեք հետազոտություններ ու վերլուծություններ՝ թե ընդհանուր շուկայում, թե կոնկրետ մրցակիցների շարքում: Նախքան շուկա մտնելը մշակեք Ձեր բրենդը և հավաքեք հետևորդներ, ովքեր պատրաստ են վճարել Ձեր պրոդուկտի համար:
          </p>

          <p>
            Բիզնես սկսելու և հաջողելու կարևոր քայլը <strong>բիզնես պլանի</strong> մշակումն է: Գրագետ գրված բիզնես պլանը կօգնի Ձեզ պատրաստ լինել Ձեր բիզնեսի հետագա մարտահրավերներին:
          </p>

          {/* Section: Պետական գրանցում */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <h3 className="text-center font-bold text-purple-800 text-lg sm:text-xl">
              Ինչպե՞ս ստանալ բիզնեսի պետական գրանցում
            </h3>

            <p>
              Բիզնես սկսելու մյուս կարևոր մասը թղթաբանությունն է, որը ժամանակատար է, երբեմն՝ անհասկանալի, և կարող է հետ պահել Ձեզ բիզնես սկսելուց: Եթե որոշել եք սկսել սեփական բիզնես Հայաստանում, նախևառաջ պետք է ընտրեք բիզնեսի կազմակերպաիրավական ձևը, ինչը կարող է ազդել ամեն ինչի վրա՝ սկսած հարկերից մինչև պարտավորություններ: Եթե դժվարանում եք որոշում կայացնել, խորհրդակցեք բիզնես խորհրդատուի, իրավաբանի կամ հաշվապահի հետ:
            </p>

            <p className="font-semibold text-gray-900">
              Որոշեք՝ գրանցում եք <strong>անհատ ձեռնարկատեր (ԱՁ)</strong>, թե՞ <strong>իրավաբանական անձ (ԻԱ)</strong>.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                ԱՁ-ն իրավաբանական անձ <strong>չի</strong> համարվում. ֆիզիկական անձը հաշվառվում է և ձեռք է բերում ձեռնարկատիրական գործունեություն ծավալելու իրավունք:
              </li>
              <li>
                ԻԱ է համարվում այն կազմակերպությունը, որը որպես սեփականություն ունի առանձնացված գույք և իր պարտավորությունների համար պատասխանատու է այդ գույքով: ԻԱ կարող է լինել մի քանի տեսակի՝ ՍՊԸ, ՓԲԸ, ԲԲԸ, ԼԸ, ԿԸ:
              </li>
            </ul>

            <p>
              Կազմակերպաիրավական ձևն ընտրելուց հետո պետք է կատարել բիզնեսի պետական գրանցում կամ հաշվառում:
            </p>

            <p>
              <strong>Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ)</strong> հանդիսանում է բիզնեսի նույնականացման կոդը: Այն միակն է և ենթակա չէ փոփոխման: Յուրաքանչյուր կազմակերպություն ունի իր ՀՎՀՀ-ն: Այն անհրաժեշտ է հարկեր վճարելու, բանկային հաշիվներ բացելու և բիզնեսի այլ կարևոր գործառույթների համար:
            </p>

            <p>
              ԻԱ և ԱՁ պետական գրանցումն իրականացնելու համար անհրաժեշտ է մոտենալ իրավաբանական անձանց պետական ռեգիստրի գործակալություն՝{' '}
              <a href="https://www.e-register.am/am/docs/213" target="_blank" rel="noreferrer" className="text-purple-600 underline font-medium">
                https://www.e-register.am/am/docs/213
              </a>:
            </p>

            <p>
              <strong>ԱՁ-ի պետական հաշվառման</strong> համար անհրաժեշտ է պետական ռեգիստրի գործակալություն ներկայացնել անձնագիր և սոցիալական քարտ կամ նույնականացման (ID) քարտ: Դուք տեղում լրացնում եք ԱՁ-ի գրանցման դիմում և վճարում պետական տուրք՝ 3,000 ՀՀ դրամ, լիազորված անձի կողմից դիմում ներկայացվելու դեպքում՝ նաև լիազորագիր (նոտարական վավերացում չի պահանջվում): Նշված փաստաթղթերի ներկայացումից հետո ԱՁ-ն հաշվառվում է և ստանում է ՀՎՀՀ:
            </p>

            <p>
              <strong>ԻԱ գրանցման</strong> համար իրավունք ունեն դիմել հիմնադիրները, գործադիր մարմնի ղեկավարը, լիազորված անձը: Դիմողն իրավաբանական անձի պետական գրանցման համար գործակալություն է ներկայացնում՝
            </p>

            <ul className="list-disc pl-6 space-y-2 text-purple-900 font-medium">
              <li>դիմում (լրացվում է տեղում)</li>
              <li>իրավաբանական անձ հիմնադրելու մասին հիմնադիրների որոշումը</li>
              <li>իրավաբանական անձի կանոնադրությունը</li>
              <li>պետական տուրքի վճարումը հավաստող փաստաթուղթ (պետական տուրքի դրույքաչափը կախված է կազմակերպաիրավական տեսակից)</li>
              <li>իրավաբանական անձի գործադիր մարմնի ղեկավարի անձնագրային տվյալները և սոցիալական քարտի համարը կամ Նշում անձի՝ սոցիալական քարտից հրաժարվելու մասին, և համապատասխան տեղեկանքի համարը</li>
              <li>էլեկտրոնային փոստի հասցեն:</li>
            </ul>

            <p>
              Բիզնեսի գրանցման ժամանակ կարևոր է իմանալ, թե ինչ տեսակի գործունեություն եք իրականացնելու: <strong>Գործունեության տեսակները</strong> համապատասխան կոդերով կարող եք գտնել{' '}
              <a href="#" className="text-purple-600 underline font-semibold">այստեղ</a>:
            </p>

            <p>Գործունեության որոշ տեսակների համար անհրաժեշտ է ունենալ լիցենզիա:</p>

            <p>
              ԻԱ և ԱՁ պետական գրանցումը կարող է իրականացվել նաև օնլայն՝{' '}
              <a href="https://www.e-register.am/am/" target="_blank" rel="noreferrer" className="text-purple-600 underline font-medium">
                https://www.e-register.am/am/
              </a>{' '}
              (Ուղեցույց բաժնում ներկայացված են անհրաժեշտ փաստաթղթերը):
            </p>

            <p className="font-semibold text-gray-900"><strong>Օնլայն պետական գրանցման դեպքում</strong> անհրաժեշտ է ունենալ՝</p>

            <ul className="list-disc pl-6 space-y-2 text-purple-900 font-medium">
              <li>Նույնականացման (ID) քարտ (կարող են ստանալ միայն ՀՀ քաղաքացիները)</li>
              <li>Նույնականացման քարտի ընթերցող սարք (ID card reader)</li>
              <li>Էլեկտրոնային ստորագրություն, որն ակտիվացնում եք{' '}
                <a href="https://www.ekeng.am/hy/sub/digital_signature" target="_blank" rel="noreferrer" className="text-purple-600 underline">
                  https://www.ekeng.am/hy/sub/digital_signature
                </a>-ում:
              </li>
            </ul>

            <p>Օնլայն պետական գրանցում կարելի է իրականացնել նաև լիազորված անձի միջոցով:</p>

            <p>
              <strong>Նույնականացման (ID) քարտ</strong> ստանալու համար անհրաժեշտ է ունենալ հանրային ծառայության համարանիշ (ՀԾՀ), որը նշված է սոցիալական քարտում: ՀԾՀ տրամադրվում է ՀՀ քաղաքացուն, ՀՀ-ում բնակության իրավունք ունեցող օտարերկրյա քաղաքացուն, մշտապես բնակվող՝ քաղաքացիություն չունեցող անձին, փախստականին:
            </p>

            <p>
              <strong>Սոցիալական քարտ</strong> ստանալու համար կարող եք դիմել Ձեր բնակության полиցիայի տարածքային բաժնի անձնագրային բաժանմունք կամ ՀՀ полиցիայի անձնագրային և վիզաների վարչություն: Մանրամասները կարող եք գտնել այստեղ՝
            </p>

            <ul className="list-disc pl-6 space-y-2 text-purple-600 underline font-medium">
              <li><a href="http://diaspora.gov.am/hy/pages/104/socialcard" target="_blank" rel="noreferrer">http://diaspora.gov.am/hy/pages/104/socialcard</a></li>
              <li><a href="https://avv.police.am/hy/territorial-passport-services" target="_blank" rel="noreferrer">https://avv.police.am/hy/territorial-passport-services</a></li>
            </ul>

            <p>
              <strong>Նույնականացման քարտ ընթերցող սարք</strong> կարող եք ձեռք բերել նաև ekeng.am -ից: Մանրամասներին ծանոթացեք{' '}
              <a href="#" className="text-purple-600 underline font-semibold">այստեղ</a>:
            </p>

            <p>
              <strong>Էլեկտրոնային ստորագրությանը</strong> վերաբերող հաճախ տրվող հարցերին կարելի է ծանոթանալ{' '}
              <a href="#" className="text-purple-600 underline font-semibold">այստեղ</a>: Իսկ այլ երկրների քաղաքացիները էլեկտրոնային ստորագրություն ստանալու համար պետք է զանգահարեն +374 60 464 504 հեռախոսահամարով կամ support@ekeng.am էլ. հասցեին ուղարկեն իրենց անձնագրի և հանրային ծառայության համարանիշի (սոցիալական քարտ) սկանավորված տարբերակները: Էլեկտրոնային ստորագրության ակտիվացման տարեկան վճարը 3,000 ՀՀ դրամ է:
            </p>
          </div>

          {/* Section: Հարկային հաշվառում */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <h3 className="text-center font-bold text-purple-800 text-lg sm:text-xl">
              Ինչպե՞ս ստանալ բիզնեսի հարկային հաշվառում
            </h3>

            <p>ՀՎՀՀ ստանալը նշանակում է, որ Դուք արդեն ունեք հարկային գրանցում:</p>

            <p>
              ՀՀ-ում հարկային հաշվետվությունները ներկայացվում են առցանց: Պետական գրանցում և ՀՎՀՀ ստանալուց հետո անհրաժեշտ է գրանցվել հարկային մարմնի էլեկտրոնային համակարգում՝{' '}
              <a href="https://file-online.taxservice.am/pages/loginPage.jsf" target="_blank" rel="noreferrer" className="text-purple-600 underline font-medium">
                https://file-online.taxservice.am/pages/loginPage.jsf
              </a>:
            </p>

            <p>Գրանցման վերաբերյալ մանրամասն տեղեկատվություն կարելի է գտնել այստեղ՝</p>

            <ul className="list-disc pl-6 space-y-2 text-purple-600 underline font-medium">
              <li><a href="https://www.petekamutner.am/Content.aspx?itn=tsOSOnlineReportingSystem" target="_blank" rel="noreferrer">https://www.petekamutner.am/Content.aspx?itn=tsOSOnlineReportingSystem</a></li>
              <li><a href="https://youtu.be/HGZGPCMwZEs" target="_blank" rel="noreferrer">https://youtu.be/HGZGPCMwZEs</a></li>
            </ul>

            <p>
              ԱՁ-ն կամ ԻԱ-ն ՀՎՀՀ ստանալուց հետո 20 օրացուցային օրվա ընթացքում պետք է հարկային մարմնին ներկայացնի օնլայն հայտ՝ հարկման ռեժիմ ընտրելու մասին: Հարկման ռեժիմի ընտրությունը բիզնես գործունեության կարևորագույն փուլերից է: <strong>Հարկման 3 ռեժիմներն են՝</strong>
            </p>

            <ul className="list-disc pl-6 space-y-3 text-purple-900 font-medium">
              <li>
                <strong>Միկրոձեռնարկատիրության</strong> (մինչև 24 մլն. դրամ իրացման շրջանառություն ունեցող բիզնեսները ազատվում են միկրոձեռնարկատիրության մասով առաջացող հարկերից)
              </li>
              <li>
                <strong>Շրջանառության հարկի</strong> (հարկը հաշվարկվում է շրջանառությունից ֆիքսված տոկոսադրույքով՝ կախված գործունեության տեսակից)
              </li>
              <li>
                <strong>Ընդհանուր հարկման</strong> (20% ԱԱՀ + 18% շահութահարկ):
              </li>
            </ul>

            <p>
              Գործունեության տեսակից կախված՝ կարող է սահմանվել նաև ակցիզային հարկ, բնապահպանական հարկ կամ այլ հարկեր: Հարկման ռեժիմի ընտրության ժամանակ անհրաժեշտ է հաշվի առնել ՀՀ հարկային օրենսգրքով սահմանված գործունեության տեսակների սահմանափակումները:
            </p>

            <p>
              Տարվա ընթացքում որպես ԻԱ պետական գրանցման, որպես ԱՁ հաշվառման կամ որպես Նոտար նշանակման օրվան հաջորդող օրը 20-րդ օրը ներառյալ անհրաժեշտ է օնլայն հայտարարություն ներկայացնել հարկային մարմնին միկրոձեռնարկատիրության կամ շրջանառության հարկով հարկվելու վերաբերյալ: Նշված ժամկետում օնլայն հայտարարություն չներկայացնելու դեպքում ավտոմատ կերպով կհարկվեք ընդհանուր հարկման ռեժիմով: Իսկ հարկման ռեժիմից կախված՝ տարբերվում է հարկերի չափը, հաշվետվության տեսակը և ժամկետները:
            </p>

            <p>
              Ձեր բիզնեսի ֆինանսական և հարկային հաշվետվությունները կազմելու համար կարող եք ունենալ հաշվապահ, ով կօգնի կատարել հաշվարկները, ձևակերպել և վճարել Ձեր գործունեության հետ կապված բոլոր հարկերը:
            </p>

            <p>
              Հիշեք կատարել Ձեր <strong>հարկային պարտավորությունները</strong>: Իսկ կախված բիզնեսի տեսակից՝ հաճախ կարևոր է նաև ապահովագրել բիզնեսը և անձնական ակտիվները:
            </p>
          </div>

          {/* Section: Բանկային հաշիվ */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <h3 className="text-center font-bold text-purple-800 text-lg sm:text-xl">
              Ինչպե՞ս բացել բանկային հաշիվ
            </h3>

            <p>
              Բիզնեսի գրանցումից անմիջապես հետո անհրաժեշտ է բացել <strong>բանկային հաշիվ</strong> բիզնեսի համար: Կարևոր է ընտրել Ձեր բիզնես կարիքներին համապատասխան բանկ: Այս առանձին բանկային հաշիվը կօգնի կառավարել Ձեր բիզնես միջոցները՝ առանձնացնելով դրանք անձնական միջոցներից: Կազմակերպության համար բանկային հաշիվ բացելու համար անհրաժեշտ է պետական գրանցման վկայականի բնօրինակը, ինչպես նաև՝
            </p>

            <ul className="list-disc pl-6 space-y-2 text-purple-900 font-medium">
              <li>ԱՁ դեպքում՝ հաշվառված անձի անձնագիրը և սոցիալական քարտը կամ նույնականացման քարտը</li>
              <li>ԻԱ դեպքում՝ կանոնադրության բնօրինակը, տնօրենի անձնագիրը և սոցիալական քարտը կամ նույնականացման քարտը, հիմնադիրների անձնագրի և սոցիալական քարտի պատճենները կամ նույնականացման քարտի պատճենը:</li>
            </ul>

            <p>
              Հիշեցնենք, որ ԱՁ-ի համար առանձին բանկային հաշիվ բացելը պարտադիր չէ՝ ի տարբերություն ԻԱ-ի: Իմացեք ավելին{' '}
              <a href="#" className="text-purple-600 underline font-semibold">բիզնես բանկային հաշիվ բացելու մասին</a>:
            </p>

            <p>
              Բանկային հաշիվ բացելուց հետո Ձեզ անհրաժեշտ է <strong>բանկային բիզնես քարտ</strong>, որի միջոցով կկատարեք բիզնեսի համար վճարումներ և գնումներ: Ի դեպ, միջազգային բիզնես քարտերի համար հաճախ գործում են լրացուցիչ առաջարկներ ՀՀ տարածքում և դրանից դուրս: Բիզնես քարտի մանրամասներին կարող եք ծանոթանալ{' '}
              <a href="#" className="text-purple-600 underline font-semibold">այստեղ</a>:
            </p>

            <p>
              Հաջորդ կարևոր քայլը՝ որոշել, թե ինչպես է Ձեր բիզնեսը <strong>ստանալու վճարումներ</strong>: Բանկային քարտերով կամ ժամանակակից այլ տարբերակներով (Apple Pay, Google Pay) վճարումներ ընդունելու համար պետք է ունենաք POS տերմինալ կամ mPOS՝ mobile POS ծառայություն: POS-ի ֆունկցիոնալին կարող եք ծանոթանալ{' '}
              <a href="#" className="text-purple-600 underline font-semibold">այստեղ</a>, mPOS-ի մանրամասներին և տեղադրման ընթացակարգին ծանոթացեք{' '}
              <a href="#" className="text-purple-600 underline font-semibold">այստեղ</a>:
            </p>

            <p>
              Եթե Ձեր բիզնեսը ենթադրում է ապրանքների և ծառայությունների <strong>օնլայն վաճառք՝ կայքի կամ հավելվածի միջոցով</strong>, Ձեզ անհրաժեշտ է ներդնել նաև V-POS՝ վիրտուալ վճարային համակարգ՝ հարմարավետ, ապահով, և արագ վճարումներ ընդունելու համար: Մանրամասները ներկայացված են{' '}
              <a href="#" className="text-purple-600 underline font-semibold">այստեղ</a>:
            </p>

            <p>
              Ձեր բիզնեսին անհրաժեշտ կլինի նաև ՀԴՄ սարք, որը յուրաքանչյուր գնման ժամանակ պետք է տրամադրի ՀԴՄ կտրոն: Ի դեպ, կարող եք վաճառքի կետում տեղադրել 1 ընդհանուր սարք, որը կկատարի և՛ ՀԴՄ սարքի, և՛ POS տերմինալի ֆունկցիաները:
            </p>

            <p>
              POS, V-POS կամ ՀԴՄ POS տեղադրելու համար կարող եք դիմել Ձեր բանկ կամ պարզապես օնլայն հայտ ներկայացնել{' '}
              <a href="#" className="text-purple-600 underline font-semibold">այստեղ</a>:
            </p>

            <p>
              Ձեզ անհրաժեշտ կլինի նաև <strong>ֆինանսական software ծրագրեր</strong> Ձեր բիզնեսի ֆինանսական մասը վարելու համար: Ֆինանսական ծրագրերին կարող եք ծանոթանալ{' '}
              <a href="#" className="text-purple-600 underline font-semibold">այստեղ</a>:
            </p>
          </div>

          {/* Section: Օնլայն ներկայացվածություն */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <p>
              Մեր օրերում բիզնեսի համար առաջնային նշանակություն ունի վերջինիս <strong>օնլայն ներկայացվածությունը</strong>: Կախված բիզնեսի տեսակից և ոլորտից՝ Ձեզ անհրաժեշտ կլինի բիզնես կայք, սոցիալական էջեր և օնլայն այլ հարթակներ: Բիզնես կայքի ստեղծման համար անհրաժեշտ է նաև կատարել domain-ի (դոմեյնի) գրանցում: Դոմեյնի անունն ընտրելիս՝ ցանկալի է, որպեսզի այն լինի հեշտ հիշվող և պարունակի Ձեր բիզնեսի անունը, այնուհետև պետք է կատարել օնլայն ստուգում՝ արդյոք այն ազատ է,ապա կատարվում էնք մոտ 8,000 դրամ վճարում 1 տարվա համար: Դոմեյն կարելի է գտնել ու գնել{' '}
              <a href="https://www.domain.com/" target="_blank" rel="noreferrer" className="text-purple-600 underline font-medium">https://www.domain.com/</a>{' '}
              կամ{' '}
              <a href="https://www.godaddy.com/" target="_blank" rel="noreferrer" className="text-purple-600 underline font-medium">https://www.godaddy.com/</a>{' '}
              կայքերից:
            </p>

            <p>
              Կախված Ձեր ոլորտից և ծառայություններից՝ օգտագործեք Facebook, Instagram, LinkedIn, Viber, WhatsApp և այլ հարթակներ ու հավելվածներ:
            </p>
          </div>

          {/* Section: Ֆինանսական միջոցներ */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <h3 className="text-center font-bold text-purple-800 text-lg sm:text-xl">
              Ինչպե՞ս ներգրավել ֆինանսական միջոցներ
            </h3>

            <p>
              Հաճախ բիզնես գործունեության ընթացքում առաջանում են պարտադիր, չնախատեսված ծախսեր, որոնց կարգավորման համար անհրաժեշտ է ֆինանսական միջոցների ներգրավում: Ձեր բիզնեսի համար ֆինանսավորում ձեռք բերելու լավագույն միջոցներից են՝ ներդրողները, դրամահավաքը, և բիզնես վարկը:
            </p>

            <p>
              <strong>Evocabank</strong>-ն առաջարկում է{' '}
              <a href="#" className="text-purple-600 underline font-bold">փոքր և միջին բիզնես վարկեր</a>: Կարող եք լրացնել օնլայն հայտը մեր կայքում{' '}
              <a href="#" className="text-purple-600 underline font-semibold">այստեղ</a>, և մեր անհատական բիզնես խորհրդատուն կապ կհաստատի Ձեզ հետ 1 աշխատանքային օրվա ընթացքում՝ պատասխանելով Ձեր բոլոր հարցերին:
            </p>

            <p>
              Evoca բիզնես բոլոր վարկատեսակներին կարող եք ծանոթանալ{' '}
              <a href="#" className="text-purple-600 underline font-semibold">այստեղ</a>{' '}
              կամ զանգահարել <strong>010605555</strong> կամ գրել մեզ <strong>099605555</strong> համարով՝ Viber, WhatsApp, Telegram:
            </p>
          </div>

          {/* Section: Զարգացում */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <h3 className="text-center font-bold text-purple-800 text-lg sm:text-xl">
              Ինչպե՞ս զարգացնել բիզնեսը
            </h3>

            <p>
              Եթե ուզում եք ավելի խորը գիտելիքներ ստանալ բիզնեսի մասին, կարող եք այցելել օնլայն և օֆլայն բիզնես դասընթացների:
            </p>

            <p>
              Եվ հիշեք՝ բիզնես սկսելուց որքան էլ մանրակրկիտ նախապատրաստվեք, կլինեն իրավիճակներ, որոնք չէիք կանխատեսել: Այդ պատճառով բիզնեսում հաջողելու համար պետք է սովորել լինել ճկուն և արագ արձագանքել փոփոխվող իրավիճակներին:
            </p>

            <p>
              Հավատացեք Ձեր ուժերին, հավատացեք Ձեր գաղափարին, մի վախեցեք փորձեր կատարել, մի վախեցեք ձախողել, փորձեք նոր լուծումներ, նոր ճանապարհներ՝ Ձեր նպատակին հասնելու համար: Մի լսեք շրջապատի սուբյեկտիվ մեկնաբանությունները, օրինակ վերցրեք հաջողակ մարդկանցից, ովքեր ունեն փորձ: Մի վախեցեք խորհուրդ հարցնել կամ օգնություն խնդրել ոլորտի առաջատարներից: Կենտրոնացեք նպատակի վրա, հավաքեք ուժերն ու պարզապես սկսեք:
            </p>

            <p className="font-bold text-center text-gray-900 pt-2">
              Ու հիշեք՝ ապագան կանխատեսելու լավագույն ձևն այն կերտելն է:
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

export default BusinessGuide;