import React from 'react';
import { Link } from 'react-router-dom';

const seriesList = [
  {
    id: 1,
    title: "1. Wanda Vision",
    description: "Marvel-ը 2021-ը սկսում է շատ բուռն՝ գրեթե բոլոր սիրված սուպերհերոսներին spin-off-ներ բաժանելով: Բացումն արդեն եղել է Վանդայի և Վիժնի կյանքի միստիկ ներկայացմամբ: 1960-ականների Ամերիկա, սուպերհերոսների ընտանեկան հանգիստ ու խաղաղ կյանք, և հեռուստադիտողի զարմացած հայացքը մինչև այն պահը, երբ հասկանում ենք, որ նրանց կյանքի խաղը չի համապատասխանում իրականությանը:"
  },
  {
    id: 2,
    title: "2. Superman & Lois",
    description: "DC-ն նույնպես իր ֆաներին ուրախացնելու առիթ ունի: Երկար դադարից հետո' փետրվարի 23-ին, էկրաններին է վերադառնում շատերի սիրելի կարմիր ու կապույտ հագուստով սուպերհերոսը: Լուիսն ու Քլարկ Քենթն ամբողջությամբ նվիրվել էին իրենց երկու թինեյջերների դաստիարակմանը: Արդյո՞ք նրանք կկարողանան պահպանել բալանսն ընտանեկան և սուպերհերոսի կյանքի միջև:"
  },
  {
    id: 3,
    title: "3. Bliss",
    description: "Amazon Prime-ը ներկայացրեց ֆանտաստիկ մելոդրամայի թրեյլերը, որը հեռուստադիտողին հասանելի կլինի փետրվարի 5-ից: Ամուսնալուծությունից հետո Գրեգը հանդիպում է փողոցում ապրող Իզաբելին, որն ամեն կերպ փորձում է համոզել Գրեգին, որ կյանքը գուտ համակարգչային իլյուզիա է: Ֆիլմի ստեղծողներն այս սյուժեով փորձել են ցույց տալ, թե որքան փխրուն ու ենթարկվող է մարդկային ուղեղն աշխարհընկալման և տարբեր տեսակետների ընկալման հարցում:"
  },
  {
    id: 4,
    title: "4. The Falcon and The Winter Soldier",
    description: "Եվս մեկ պատմություն Marvel-ի սիրված սուպերհերոսների մասին: Գլխավոր հերոսները' Սեմ Ուիլսոնը, որը Կապիտան Ամերիկայից ստացավ նրա վահանն ու անունը, և Բակի Բարնսը, որը դեռևս չի համակերպվել ժամանակակից կյանքին, պայքարելու են ահաբեկիչների դեմ' փրկելով աշխարհը: Պրեմիերան նախատեսվում է մարտի 19-ին:"
  },
  {
    id: 5,
    title: "5. Loki",
    description: "Marvel-ի ամենահմայիչ, ամենախարիզմատիկ և ամենախորամանկ սուպերհերոս ու Աստված Լոքին կվերադառնա մայիսին: Շատ շուտով կտեսնենք, թե ինչպես է նա ճանապարհորդում ժամանակի մեջ' օգտագործելով Տեսերակտը, և փորձում փոփոխել մարդկության պատմությունը: Կարոտել եք չէ՞ այս չարաճճի կերպարին:"
  },
  {
    id: 6,
    title: "6. Zack Snyder's Justice League",
    description: "Իսկ հիմա կրկին ուրախանալու առիթ ունեն DC-ի ֆաները, քանի որ հենց այդ ֆաների բազմաթիվ բողոքների ու պահանջների շնորհիվ է վերսկսվում Զակ Սնայդերի «Արդարության լիգա»-ն: Դեռ 2020թ. փետրվարին հայտարարվեց, որ այս նախագիծը կվերսկսվի մինի սերիալի ֆորմատով, և դերասանական կազմին կմիանա Ջարեդ Լետոն իր Ջոկերի կերպարով: Ըստ տեղեկությունների' պրեմիերան կկայանա մարտ ամսին:"
  },
  {
    id: 7,
    title: "7. Hawkeye",
    description: "Marvel-ի սուպերհերոսները հերթով վերադառնում են: Բազեի աչքը որպես վրիժառու անցնում է թոշակի, որից հետո ստանձնում է մարզիչի դեր: Լեգենդար նետահարը պետք է մարզի իր իրավահաջորդին' Քեյթ Փիշոփին, որը մանկուց հետաքրքրված էր նետաձգությամբ: Ի դեպ, Քեյթը միլիոնատիրոջ աղջիկ է, իսկ թե դա էր իրական պատճառը նրա իրավահաջորդ դառնալու մեջ' կիմանանք տարվա վերջում:"
  },
  {
    id: 8,
    title: "8. Ms Marvel",
    description: "Այս նոր սուպերհերոսուհուն Marvel-ը փորձում է որոշ չափով գաղտնի պահել և դեռ շատ քիչ է լուսաբանում: Հայտնի է, որ այս տարվա վերջում կինոաշխարհը կունենա նոր սուպերհերոս, իսկ գլխավոր դերակատարը կլինի կինոաշխարհում իր առաջին քայլն անող Իման Վելանին (տեսնես նրա հայրն է՞լ է միլիոնատեր):"
  },
  {
    id: 9,
    title: "9. Mare of Easttown",
    description: "Այս տարվա մեջ HBO Max-ը մեզ կներկայացնի սերիալ, որի դեպքերը կզարգանան ամերիկյան փոքրիկ քաղաքում: Գլխավոր հերոսուհին' Քեյթ Ուինսլեթը, հանդես կգա խուզարկուի դերում, որն իր ողջ ժամանակը տրամադրում է աշխատանքին' տեղ չտալով անձնական կյանքին:"
  },
  {
    id: 10,
    title: "10. The Book of Boba Fett",
    description: "Հիանալի նորություն Star Wars-ի սիրահարների համար: The Mandalorian-ն այնքան սիրվեց, որ անգամ spin-off ստացավ: Բոբա Ֆետը վերադառնում է, իսկ նրա պատմությունը դեռ նոր է սկսվում: «Աստղային պատերազմների» սիրված սուպերհերոսին էկրաններին կտեսնենք այս տարվա դեկտեմբերին:"
  },
  {
    id: 11,
    title: "11. The Witcher (season 2)",
    description: "Այո, այո, համաձայն ենք... Կինոաշխարհի ամենասպասված նորություններից մեկը «Կախարդ»-ի վերադարձն է: Համաձայն աղբյուրների' նոր եթերաշրջանը կեկրանավորվի այս տարվա վերջին: Սպասում եք, չէ՞:"
  },
  {
    id: 12,
    title: "12. Lupin",
    description: "Սիրված դերասան Օմար Սին մարմնավորում է Արսեն Լուպինին' ժամանակակից ջենթլմեն գողին: Իր դերի մասին Օմար Սին ասել է, որ եթե ինքը լիներ բրիտանացի,ապա կանվանվեր Ջեյմս Բոնդ, բայց քանի որ ֆրանսիացի է,ուրեմն' Արսեն Լուպին: «Նա զվարճալի է, խելացի, զբաղվում է գողությամբ և շրջապատված է կանանցով: Բացի այդ, նա հերոս է: Սա դերասանի համար հնարավոր լավագույն դերն է»: Սերիալի 5 մասերն արդեն հասանելի են համացանցում, իսկ կինոմաններն այն արդեն անվանել են 2021-ի առաջին ամենապահանջված սերիալը:"
  },
  {
    id: 13,
    title: "13. Vikings (final season)",
    description: "Օրեր առաջ վերսկսվեց Vikings-ի վերջին' 6-րդ եթերաշրջանը: Եվս մի քանի էպիզոդ, և մենք ստիպված կլինենք հրաժեշտ տալ մեր սիրված հերոսներին: 2013-ին' առաջին եթերաշրջանի ցուցադրումից անմիջապես հետո, պարզ դարձավ, որ պատմական դրաման ունի ֆաների հսկայական խումբ: «Յուրաքանչյուր եթերաշրջանը մեր կյանքին նոր իմաստ եր տալիս»,- ասում էին նրանցից օմանք: Շատերն ապրում ու տառապում էին կերպարների հետ' հասնելով ֆանատիզմի: Դիտեք վերջին եթերաշրջանը մարդկային հզոր կերպարների մասին, որոնք ապրում էին ամենադժվար դարաշրջաններից մեկում' Վիկինգների դարաշրջանում:"
  },
  {
    id: 14,
    title: "14. Friends Reunion",
    description: "Մեր բոլորի «Ընկերներ»-ի վերամիավորման մասին դեռ երկար տարիներ խոսում էին, իսկ հիմա արդեն պաշտոնապես կարող ենք հայտարարել դրա մասին: Սա թերևս 2021-ի ամենաոգևորիչ նորություններից է: Թե ինչ ժանրով է ներկայացվելու ընկերների կյանքը' դեռ հստակ չէ, բայց այն, որ նրանք վերադառնում են, պարզապես հրաշալի է:"
  },
  {
    id: 15,
    title: "15. See (season 2)",
    description: "Ի սկզբանե Apple TV-ն շատ մեծ շեշտ էր դրել այս սերիալի վրա և անգամ հրավիրել կանանց կողմից շատ սիրված Ջեյսոն Մամոային: Անխոս սա այն սերիալներից էր, որ հավասարաչափ ն՛ սիրվեց, ն՛ քննադատվեց: Այս գարնանը կտեսնենք 2-րդ եթերաշրջանը: Ո՛չ մի սպոյլեր և թրեյլեր. սպասենք և կտեսնենք..."
  },
  {
    id: 16,
    title: "16. Emily in Paris (season 2)",
    description: "Սերիալ նորաձևության, զավեշտալի պատմությունների, ընկերության և սիրային հարաբերությունների մասին, անկրկնելի դերակատարում և հմայիչ դերասանուհի: Պաշտոնապես հաստատվել է սերիալի 2-րդ եթերաշրջանի լուրը, բայց ժամկետների հետ կապված ոչ մի հստակ տվյալներ չկան: Ըստ ասեկոսեների' նկարահանումները կսկսվեն գարնանը, իսկ սերիալի նոր եթերաշրջանը մեզ հասանելի կլինի այս տարեվերջին:"
  },
  {
    id: 17,
    title: "17. Stranger Things (season 4)",
    description: "Netflix-ը կրկին ուրախացնելու առիթ ունի: Սերիալի 3 եթերաշրջաններն այնքան էին սիրվել հեռուստադիտողների կողմից, որ 4-րդն իրեն երկար սպասեցնել չի տա: Իհարկե, սյուժեի հեղինակները վստահ են, որ 5-րդը կլինի եզրափակիչ եթերաշրջան, բայց այս տարի անհամբեր սպասում ենք 4-րդին:"
  },
  {
    id: 18,
    title: "18. The Lord Of The Rings",
    description: "Amazon-ը հաստատեց Մատանիների Տիրակալի նոր եթերաշրջանի մասին տարածված լուրերը: Դեպքերը մեզ կտանեն անցյալ դարերի խորքեր, երբ ծաղկում և վերանում էին թագավորություններ, երբ հերոսների կյանքը կախված էր թելից, իսկ հզոր չարագործը սպառնում էր կործանել աշխարհը... Այս պահին Նոր Զելանդիայում նկարահանվում է միաժամանակ 2 եթերաշրջան: Մենք համբերատար սպասում ենք:"
  },
  {
    id: 19,
    title: "19. Sex and The City",
    description: "Սերիալի նկարահանումների մեկնարկի կամ ավարտի մասին դեռևս ոչ մի տեղեկություն չկա, բայց այն, որ չորս գրավիչ, նորաձև և ճակատագրական կանայք այս եթերաշրջանում կլինեն երեքով' դա հաստատ է: Հուսանք առանց Սամանտայի Sex and The City-ին չի դառնա..."
  },
  {
    id: 20,
    title: "20. Peaky Blinders (season 6)",
    description: "Ասում են, որ, հնարավոր է, այս տարվա վերջում նրանք վերադառնան: Գրեթե ամեն ինչ պատրաստ է' կոստյումները, նկարահանման վայրերը, ամեն-ամեն ինչ... Լուրեր են տարածվել, որ սերիալում Հիտլերին պետք է մարմնավորի Միստր Բինը, ό, ներեցեք, Ռոուեն Էտկինսոնը: Չեն խոստանում, բայց գիտեն, որ իրենց սպասում են:"
  },
  {
    id: 21,
    title: "21. La Casa De Papel (season 5)",
    description: "Դե իսկ հայերի կողմից, երևի թե, ամենասպասված սերիալը կլինի մեր սիրելի Հովիկ Կեուչկերյանի մասնակցությամբ La Casa De Papel-ը: Կարծում ենք' սերիալի մասին պատմելու կարիք չկա, քանի որ բոլորդ լավ տեղյակ եք: Բացի նոր պերսոնաժներից և ֆանտաստիկ հանգուցալուծումներից, մեզ նաև անակնկալներ են սպասում... Նկարահանումներն արդեն տեղի են ունեցել, և մենք անհամբեր սպասում ենք պրեմիերայի պաշտոնական օրվա հրապարակմանը: Ի դեպ, այստեղ կարող եք շատ հետաքրքիր թեստ անցնել և փորձել գուշակել 5-րդ եթերաշրջանի զարգացող դեպքերը, իսկ լավագույն արդյունքը գրանցողներն անակնկալ կստանան Evocabank-ի կողմից:"
  },
  {
    id: 22,
    title: "Bonus. Your Honor",
    description: "Դե իսկ վերջում բոնուսի կարգով ներկայացնում ենք Your Honor-ը: Սերիալ, որը հանրությանը ներկայացվեց դեռ 2020-ի դեկտեմբերին և շարունակվում է մինչ օրս: Your Honor-ը բաղկացած է ընդամենը 10 էպիզոդից և գլխավոր դերում է աշխարհի ամենաբարձր ռեյտինգ ունեցող սերիալի' Breaking Bad-ի գլխավոր հերոսը' Բրայան Քրենսթոնը: Նրա ներկայությունըապահովում է սերիալի նկատմամբ բարձր հետաքրքրվածություն: Ակնկալվում է, որ այս սերիալը նույնպես կհամալրի լավագույնների շարքը: Շատ շուտով կներկայացնենք 2021-ի ամենասպասված ֆիլմերը:"
  }
];

// Grid նկարների ցանկը (ըստ 3-րդ և 4-րդ նկարների)
const postersGrid = [
  "https://www.evoca.am/images-cache/blogs/1/16329045873929/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16329045873993/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16329045874021/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16329045874041/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16329045874058/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16329045874075/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16329045874092/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16329045874111/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/1632904587413/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16329045874148/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16329045874167/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16329045874186/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16329045874204/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16329045874223/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16329045874242/428x321.jpg",
   "https://www.evoca.am/images-cache/blogs/1/1632904587426/428x321.png",
  "https://www.evoca.am/images-cache/blogs/1/16329045874279/428x321.jpg", 
  "https://www.evoca.am/images-cache/blogs/1/16329045874296/428x321.png",
  "https://www.evoca.am/images-cache/blogs/1/16329045874314/428x321.jpg",
   "https://www.evoca.am/images-cache/blogs/1/16329045874332/428x321.png",
  "https://www.evoca.am/images-cache/blogs/1/1632904587435/428x321.png",
"https://www.evoca.am/images-cache/blogs/1/16329045874368/428x321.png"
];

// «Related Blogs» Հոդվածներ
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

export default function Series2021Page() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans pb-16">
      {/* 1. Header Navigation & Breadcrumbs */}
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
        <span className="text-gray-400 truncate max-w-xs">2021-ի ամենասպասված 21 սերիալները</span>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* 2. Top Banner Card Section (Ճշգրիտ ըստ Image 1-ի) */}
        <div className="bg-[#f5f4f8] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="md:w-1/2 space-y-4">
            <span className="bg-[#5b2282] text-white text-xs font-semibold px-3 py-1 rounded-sm inline-block">
              Կենսակերպ
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#222222] leading-tight">
              2021-ի ամենասպասված 21 սերիալները
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ի՞նչ սպասել 21-ի կինոաշխարհից. սուպերհերոսներ, պատմական, ֆանտաստիկ և միստիկ կերպարներ, ռետրո, նորաձևություն և ավելին:
            </p>
            <div className="pt-4 text-xs text-gray-400 font-medium">
              18.01.2021
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img
                src="https://www.evoca.am/images-cache/blogs/1/16329974590876/438x328.png"
                alt="2021 21 ԼԱՎԱԳՈՒՅՆ ՍԵՐԻԱԼՆԵՐԸ"
                className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Intro Subtitle */}
        <div className="mt-8 text-center md:text-left">
          <p className="text-sm text-gray-700 font-medium">
            Ձեզ ենք ներկայացնում 2021-ի #mustwatch սերիալները' ըստ պաշտոնական և ոչ պաշտոնական տվյալների, ինչպես նաև ինֆորմացիայի արտահոսքի:
          </p>
        </div>

        {/* 3. 21 Սերիալների ամբողջական ցանկը */}
        <div className="mt-8 space-y-8 max-w-4xl">
          {seriesList.map((series) => (
            <div key={series.id} className="space-y-2">
              <h2 className="text-lg font-bold text-[#8c30d2]">
                {series.title}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {series.description}
              </p>
            </div>
          ))}
        </div>

        {/* Outro Text & Poster Grid */}
        <div className="mt-10 max-w-4xl">
          <p className="text-sm text-gray-700 font-medium mb-6">
            Բազմոցին տեղ ամրագրիր' շուտով միասին կվայելենք թույն ֆիլմերով երեկոներ:
          </p>
          
          {/* 3x Grid Poster-ների ցանց */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {postersGrid.map((poster, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-sm border border-gray-100 h-64 bg-black">
                <img
                  src={poster}
                  alt={`Series Poster ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 4. Related Blogs (Առնչվող բլոգներ) */}
        <div className="mt-16 pt-8 border-t border-gray-100 max-w-4xl">
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