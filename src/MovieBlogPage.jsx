import React from 'react';
import { Link } from 'react-router-dom';

const moviesList = [
  {
    id: 1,
    title: "1. Fast & Furious 9",
    description: "Այս ֆիլմն ասոցացվում է ավտոմեքենայի շարժիչի ձայնի ու խելահեղ արագության հետ: Բոլոր 8 ֆիլմերի հիմքում կա մեկ և անփոփոխ գաղափարախոսություն՝ ընկերություն և ընտանիք: Իսկ ֆիլմի գլխավոր հերոսներից մեկը' Դոմինիկը, մեծ պատասխանատվությամբ է վերաբերվում իսկական ընկերությանը' համարելով այն ընտանիքի մի մաս: Սակայն այս անգամ փոխվում է ֆիլմի լոզունգը. «Ամեն արյուն չէ' ընտանիք»: Ֆիլմում հայտնվում է նոր դավաճան կերպար' պրոֆեսիոնալ մարդասպան Ջեյքոբը' Դոմինիկի կրտսեր եղբայրը: P.S. Իհարկե, Փոլ Ուոկերի (Բրայան) մահից հետո շատերն էին պահանջում, որ ֆիլմն այլևս չշարունակվի, սակայն նախորդ մասն ապացուցեց, որ ֆիլմի հանդեպ հետաքրքրվածությունը չի պակասել: Պրեմիերան տեղի կունենա ապրիլի 28-ին:"
  },
  {
    id: 2,
    title: "2. No Time to Die",
    description: "\"My name is Bond, James Bond\". Դասական կոստյումով, հմայիչ, խելացի և գեղեցիկ կանանցով շրջապատված լրտեսը վերադառնում է: Թեպետ ըստ ֆիլմի սյուժեի' Բոնդը թողել էր լրտեսի իր կարիերան և հանգստանում էր արևոտ Յամայկայի ափերին, սակայն չարագործի ձեռքերից հայտնի գիտնականին փրկելու համար' Բոնդն ընդհատում է իր հանգիստը, որպեսզի հանդիպի մեզ հետ ապրիլի 2-ին:"
  },
  {
    id: 3,
    title: "3. Dune",
    description: "Ֆանտաստիկայի ժանրի ֆիլմի գլխավոր հերոսը հայտնի և ազնվական ընտանիքից է, որն անապատային մոլորակ Արակիում պետք է պահպանի Գալակտիկայի ամենաարժեքավոր տարրը' Spice-ը (համեմունք): Ով տիրում է Spice-ին, տիրում է տիեզերքին: Հոկտեմբերին կիմանանք, թե ով դարձավ Spice-ի տիրակալը:"
  },
  {
    id: 4,
    title: "4. Free Guy",
    description: "Համաձայն եք չէ՞, որ 2020-ից հետո կյանքը կոմեդիաների կարիք ունի: Ռայան Ռեյնոլդսը, որին շատերս գիտենք որպես կոմեդի-ընտանեկան ժանրի դերասան, բանկային աշխատող էր, ով հանկարծ հայտնվում է համակարգչային խաղի մեջ, որտեղ ամեն ինչ որոշում էին խաղային պերսոնաժները: Եվ, իհարկե, հենց գլխավոր հերոսը պետք է փրկի աշխարհը կործանումից: Ի սկզբանե, Ռայանին խաղի միջից ազատելու տարեթիվը որոշված էր 2020-ը, բայց համաշխարհային պանդեմիայի պատճառով հավանաբար նա այնտեղ կմնա մինչև այս տարվա մայիս:"
  },
  {
    id: 5,
    title: "5. Jungle Cruise",
    description: "1900 թվական: Արկածախնդիր ճանապարհորդների մի խումբ ուղևորվում է Ամազոնի ջունգլիներ: Հիմա կմտածեք, որ արկածներ փնտրելու համար Ամազոնն ամենահուսալի տեղն է: Սակայն, իրականում, նրանք փնտրում էին լեգենդար և հինավուրց կյանքի ծառը, որը բուժիչ և վերակենդանացնող ուժ ունի: Ֆիլմի ոգեշնչման աղբյուր է եղել Դիսնեյլենդի թեմատիկ ատրակցիոնները: Հուլիսին կպարզենք, թե արդյոք վտանգավոր ճանապարհորդությունից բոլորը վերադարձան անվնաս:"
  },
  {
    id: 6,
    title: "6. Minions: The Rise of Gru",
    description: "Կարոտել եք փոքրիկ ու չարաճճի Մինիոններին, որոնց ամենա-ամենա ցանկությունն է գտնել և ծառայել չարագործի: Եվ ահա, երկար փորձերից հետո, նրանք գտնում են 12-ամյա Գրյուին, ով երազում էր դառնալ աշխարհի մեծագույն չարագործը: Այս անգամ մեր շատ սիրելի բարի չարագործին կտեսնենք մանուկ հասակում: Սպասենք արևոտ ամառային օրերին, չէ՞ որ Մինիոններն այդ ժամանակ են գալու:"
  },
  {
    id: 7,
    title: "7. The King's Man",
    description: "Լրտեսների կյանքը չգիտես ինչու բոլորին հետաքրքրում է: Գաղտնիքներով լի կյանք, անսպասելի իրադարձություններ և խորհրդավոր արտաքին: The King's Man-ը լրտեսների կազմակերպություն է, որի տաղանդավոր օպերատիվ աշխատողներից մեկն է երիտասարդ Կոնրադը' Օքսֆորդի դքսի որդին, որի միակ երազանքն էր ծառայել Անգլիային: Սակայն իրադարձություններն այնպես են փոխվում, որ նա ներգրավվում է մարդասպանների և լրտեսների մութ և գաղտնի աշխարհ: Երկար ենք սպասել ֆիլմի պրեմիերային: Հուսանք, որ փետրվար-մարտ ամիսներին վերջապես կտեսնենք երկար սպասված ֆիլմը:"
  },
  {
    id: 8,
    title: "8. Black Widow",
    description: "Թերևս Marvel կինոստուդիայի ամենասիրված, համառ, գաղտնիքներով լեցուն կերպարն է Նատաշա Ռոմանոֆը: «Սև Այրու» մասին նկարահանվող ֆիլմին մենք շատ վաղուց էինք սպասում: Նատաշային հետապնդում են իր անցյալի մութ և չբացահայտված գաղտնիքները, որոնց նա պետք է վերջնական լուծում տա «Վրեժխնդրու» դառնալուց առաջ: Ֆիլմը կինոթատրոններում կլինի մայիսի 7-ից:"
  },
  {
    id: 9,
    title: "9. Morbius",
    description: "Ֆիլմի գլխավոր հերոսն է Ջարեդ Լետոն' դերասան և ռոք-երաժիշտ: Եթե հետևում եք նրա դերասանական կարիերային,ապա կհամաձայնվեք, որ նա անմիջապես կերպարանափոխվում է և վերցնում իր կերպարը: Մորբիուսի կերպարն առավել պատկերավոր ներկայացնել հանդիսատեսին ոչ մեկ չէր կարող: Խորաթափանց, սուր և տխուր աչքեր, հմտորեն թաքցրած հոգեվիճակ. ահա բժիշկ Մորբիուսի կերպարը, որն արյան անբուժելի հիվանդությունից ազատվելու համար մասնակցում է վտանգավոր փորձաքննության' արդյունքում դառնալով հմայիչ Վամպիր: Պատկերացրեցի՞ք... Աշնանը սպասում ենք ֆիլմի պրեմիերային:"
  },
  {
    id: 10,
    title: "10. Chaos Walking",
    description: "Երկրբնակների կողմից գաղութացված անհայտ մոլորակում ինչ-որ տարօրինակ վիրուսից մահանում են բոլոր կանայք: Տղամարդիկ էլ տիրապետում են արտասովոր մի հատկության: Նրանք կարող են միմյանց մտքերը հասկանալ պատկերների, բառերի և հնչյունների տեսքով, որը կոչվում է Աղմուկ: Հենց այդ պատճառով ոչ մի անձնական գաղտնիք հնարավոր չէր պահել: Ֆիլմի հերոսը հայտնաբերում է լռության մի տեղ, որտեղ այդ Աղմուկը բացակայում է: Այնուհետև հայտնաբերում է մարդկանց, ովքեր կարող են այդպիսի լռության տարածքներ գեներացնել նրա շուրջ, և սկսում է պայքարել տոտալիտար հասարակության դեմ: Լռության հետքերով կգնանք այս տարվա ապրիլին:"
  },
  {
    id: 11,
    title: "11. The Suicide Squad",
    description: "Բոլոր նրանք, ովքեր նայել են Ջոկերի մասնակցությամբ այս ֆիլմը, իհարկե տպավորված են Մարգո Ռոբիի չար, դաժան և սեփական դժբախտությունները խելագարություններով թաքցնելու իր անգնահատելի կարողությամբ: Լինելով մասնագիտությամբ հոգեբան' նա գերադասում է կերպարանափոխվել և դառնալ Ջոկերի ընկերուհին: Թեպետ ֆիլմը սիրվել էր, սակայն մասնագետները համարել էին չհաջողված: Ի՞նչ ենք տեսնելու ֆիլմի այս մասում: Օգոստոսյան տաք օրերը «Ինքնասպանների ջոկատը» էլ ավելի է ջերմացնելու: Սպասենք:"
  },
  {
    id: 12,
    title: "12. Top Gun: Maverick",
    description: "1986թ.-ին օսկարակիր դերասան Թոմ Քրուզի մասնակցությամբ նկարահանված Մեվերիկ մարտաֆիլմը կինոաշխարհի լավագույններից համարվեց: Մասնագիտական պատասխանատվություն, մարզական պատրաստվածություն և քրտնաջան աշխատանք. երեք հատկանիշներ, որոնք անխոս նկարագրում են Թոմ Քրուզին: Հմուտ օդաչուն, թողնելով ծառայությունը, զբաղվում էր նորեկների ուսուցմամբ: Բայց փոխվում են ժամանակները, փոխվում է նաև տեխնիկական առաջընթացը, և երբ հասունանում է վտանգը, Մեվերիկը վերադառնում է ու ցուցադրում անգերազանցելի վարպետություն: Բոլոր նրանց, ովքեր կարոտել էին Մեվերիկին, ուզում ենք ասել' քիչ մնաց: Ամառային երկնքում ավելի պարզ կերևա նրա հմուտ թռիչքը:"
  },
  {
    id: 13,
    title: "13. Tom and Jerry",
    description: "Կինոաշխարհի ամենասիրված մուլտհերոսները ձմռան վերջին ամիսը կդարձնեն անչափ ուրախ' մուտք գործելով կինոաշխարհ: Մինչ օրս դեռ հստակ պատասխան չկա' փոքրերն են նրանց ավելի շատ սիրում, թե՞ մեծերը: Կհարթվի՞ արդյոք երկար տարիների անհաշտությունը, թե՞ հավետ թշնամիներ կմնան մուկն ու կատուն: Բայց այն, որ մուկը' Ջերին, պետք է փախչի, իսկ կատուն' Թոմը, նրան փորձի բռնել, դա հաստատ է, և որքան էլ, որ մի պահ թվում է, թե վերջ, ամեն ինչ սկսվում է նորից: Անհամբեր սպասում ենք ընկերության և թշնամության մասին ամենաբարի ու հարազատ ֆիլմին:"
  },
  {
    id: 14,
    title: "14. Candyman",
    description: "Կինոաշխարհն առանց սարսափ ֆիլմերի հնարավոր չէ պատկերացնել Ալֆրեդ Հիչքոքից հետո: Սիրու՞մ եք գիշերը երկար նայել հայելու մեջ: Առաջարկում ենք թողնել այդ սովորությունը, քանի որ Քենդիմենն իր զոհի հետևից գալու է հայելու միջով: Իսկ եթե չեք հավատում, մարտի կեսերից արդեն կհավատաք:"
  },
  {
    id: 15,
    title: "15. Coming 2 America",
    description: "33 տարին ոչինչ է, երբ սպասում ես Աֆրիկյան ինչ-որ ցեղի թագավորին' Էդի Մերֆիին: Ինչու՞ է նա վերադառնում Միացյալ Նահանգներ: Պատճառը նրա որդին է, որի մասին նա իմանում է միայն երկար տարիներ հետո: Կոմեդիայի սիրահարներին մնում է սպասել մարտ ամսին և վայելել սիրելի ֆիլմի շարունակությունը:"
  },
  {
    id: 16,
    title: "16. The Matrix 4",
    description: "Դու էլ ես ամեն անգամ նայել Մատրիցայի 3 մասերն ու հարց տվել քեզ' արդյո՞ք էլ չեն լինելու օդում քարացած կադրեր: Այո, Նեօ-ն նորից էկրաններին է: Ամենազոր Քիանու Ռիվզը կմարմնավորի սիրված կերպարին: Ֆանտաստիկ մարտաֆիլմին սպասենք այս տարվա վերջում:"
  },
  {
    id: 17,
    title: "17. Mortal Kombat",
    description: "HBO Max-ի և Warner Bros.-ի մտահղացումն է' ստեղծել ֆիլմ լայն տարածում գտած համակարգչային խաղի հիման վրա: Mortal kombat-ի մասին ֆիլմեր ու սերիալներ պարբերաբար տեսել ենք, բայց այս անգամ, կարծես թե, մասշտաբները շատ մեծ են: Warner Bros.-ը պատրաստվում է թողարկել տարվա ամենաքննարկվող ֆիլմերից մեկը: Շուտով կհայտնվենք ամենավտանգավոր մարտարվեստի մրցության մեջ:"
  },
  {
    id: 18,
    title: "18. Ghostbusters: Afterlife",
    description: "Սիրուն, փափլիկ ու բարի ուրվականները նորից էկրաններին են: Նրանք նման չեն այն ուրվականներին, որոնց մասին պատմում են: Նրանք սիրվում են թե' փոքրերի և թե' մեծերի կողմից: Այս անգամ երկու դեռահաս, փորձելով ավելին իմանալ իրենց պապիկի մասին, պատահաբար գտնում են Ecto-1 ավտոմեքենան, որը պատկանում եր ուրվականների հայտնի որսորդներին: Ուրվականները մրսկան են և նրանք կգան ամռանը:"
  },
  {
    id: 19,
    title: "19. Eternals",
    description: "Marvel-ի ֆաներն այս տարի զարմանալու և հիանալու բազմաթիվ առիթներ են ունենալու: «Հավերժները» մարդկային անմահ սուպերրասա է, որը պատասխանատվություն է կրում Երկրում էվոլյուցիոն զարգացման գործընթացի համար: Ֆիլմում իրար են բախվում հավերժներն ու դևիանտները' գենետիկորեն անկայուն և հրեշային կործանարարները: Իսկ հիմա խնդրում ենք ուշադրություն, Marvel-ն այս անգամ գերազանցել է ինքն իրեն' հավաքելով հզոր դերասանական կազմ' Անջելինա Ջոլի, Սալմա Հայեք, Ռիչարդ Մեդեն, Քիթ Հարինգթոն և կինոաշխարհի այլ փայլուն դեմքեր: Սպասումները ֆիլմից մեծ են: Պրեմիերան նախատեսվում է այս աշնանը:"
  },
  {
    id: 20,
    title: "20. Shang-Chi and the Legend of the Ten Rings",
    description: "Այս տարի կինոմանները զարմանալու առիթներ շատ են ունենալու: Marvel-ն իր ֆաների համար անակնկալներ է պատրաստել' առաջին անգամ գլխավոր սուպերհերոսի դերում ներկայացնելով ասիական կերպար: Պրեմիերան նախատեսվում է հուլիսի 9-ին:"
  },
  {
    id: 21,
    title: "21. The Hitman's Wife's Bodyguard",
    description: "Եկեք մի պահ պատկերացնենք, որ Եվրամիության փրկությունը Ռայան Ռեյնոլդսի, Սալմա Հայեքի և Սեմուել Լ. Ջեքսոնի ձեռքերում է: Վստահել, թե՞ ոչ: Մի՞թե դա է հարցը: Իհարկե ոչ: Կարևորն այն է, որ օգոստոսի 19-ից մեծ էկրաններին մեզ սպասում է կոմեդի-մարտաֆիլմ տաղանդավոր և սիրված դերասանների մասնակցությամբ:"
  },
  {
    id: 22,
    title: "22. Godzilla vs. Kong",
    description: "Աշխարհը, որում մենք մեզ հայտարարել ենք տերեր, պատկանում է Նրանց: Ու հիմա հասունացել է էպիկ հանդիպման պահը' սարսափազդու Գոդզիլան ընդդեմ դաժան, բայց նուրբ ու բարի ներաշխարհով Քոնգի: Այստեղ հիմնական հարցն այն է, թե ու՞մ կողմից ես դու և ու՞մ համար է քո սիրտը անհանգստանալու: Կինոպրեմիերան սպասվում է մարտ ամսին:"
  }
];

// Ֆիլմերի պոստերների նկարները (Grid ցանցի համար)
const moviePosters = [
  "https://www.evoca.am/images-cache/blogs/1/16309342678308/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/1630934267833/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678376/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678394/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/1630934267841/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678456/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678471/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678487/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678503/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678518/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678533/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678552/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678571/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678589/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678606/428x321.jpg",
   "https://www.evoca.am/images-cache/blogs/1/16309342678623/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678641/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678656/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678671/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678687/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678703/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678719/428x321.jpg",
  
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

export default function MovieBlogPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans pb-16">
      {/* Navigation / Breadcrumbs */}
      <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-gray-500 flex items-center gap-2">
        <Link to="/" className="hover:underline flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1 bg-gray-50 text-gray-700 font-medium">
          ← Back
        </Link>
        <span className="ml-2">🏠</span>
        <span>›</span>
        <Link to="/blog" className="hover:underline">Բլոգ</Link>
        <span>›</span>
        <span className="text-purple-600">Կենսակերպ</span>
        <span>›</span>
        <span className="text-gray-400 truncate max-w-xs">2021-ը դարձել է կինո պրեմիերաների մրցավազք</span>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* Banner Section */}
        <div className="bg-[#f5f4f8] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="md:w-1/2 space-y-4">
            <span className="bg-[#5b2282] text-white text-xs font-semibold px-3 py-1 rounded-sm inline-block">
              Կենսակերպ
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#222222] leading-tight">
              2021-ը դարձել է կինո պրեմիերաների մրցավազք
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              Կինոմաններին են ներկայացվելու բազմաժանր գլուխգործոցներ, որոնցից ընտրել ենք ամենասպասվածներն ու մրցակցայինները:
            </p>
            <div className="pt-4 text-xs text-gray-400 font-medium">
              01.02.2021
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src="https://www.evoca.am/images-cache/blogs/1/16329119822114/438x328.jpg"
                alt="2021-ի ամենասպասված ֆիլմերը"
                className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Բոլոր 22 ֆիլմերի ցանկը */}
        <div className="mt-12 space-y-8 max-w-4xl">
          {moviesList.map((movie) => (
            <div key={movie.id} className="space-y-2">
              <h2 className="text-lg font-bold text-[#8c30d2]">
                {movie.title}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {movie.description}
              </p>
            </div>
          ))}
        </div>

        {/* Ֆիլմերի պոստերների 3x Grid Ցանցը */}
        <div className="mt-12">
          <p className="text-sm text-gray-600 font-medium mb-6">
            Ամենասպասված ֆիլմերը դիտեք ամենաբարձր տրամադրությամբ' շրջապատված լավագույն մարդկանցով:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
            {moviePosters.map((poster, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-sm border border-gray-100 h-64 bg-black">
                <img
                  src={poster}
                  alt={`Movie Poster ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Related Blogs Հատվածը */}
        <div className="mt-16 pt-8 border-t border-gray-100">
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