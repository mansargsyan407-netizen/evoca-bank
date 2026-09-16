import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // 1. Ավելացվել է Link-ը

export default function IndividualPage() {
  const filterTabs = [
    { label: 'Բոլորը', active: true },
    { label: 'Գրավով ապահովված սպառողական վարկեր', active: false },
    { label: 'Անգրավ սպառողական վարկեր', active: false },
    { label: 'Հիփոթեքային վարկեր', active: false },
    { label: 'Ավտոմեքենաների ձեռքբերման ֆինանսավորում', active: false },
    { label: 'Ապառիկ', active: false },
    { label: 'Օնլայն վարկեր', active: false },
  ];

  const loans = [
    {
      id: 1,
      title: 'Անգրավ սպառողական վարկ',
      description: 'Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ: Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման:',
      image: 'https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg',
      stats: [
        { label: 'Գումար', value: '10 մլն. ֏', prefix: 'մինչև' },
        { label: 'Ժամկետ', value: '60 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույք', value: '19%-ից', prefix: 'սկսած' },
      ],
    },
    {
      id: 2,
      title: 'Ավտոմեքենայի ձեռքբերման նպատակով վարկ',
      description: 'Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը:',
      image: 'https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg',
      stats: [
        { label: 'Գումար', value: '50 մլն. ֏', prefix: 'մինչև' },
        { label: 'Ժամկետ', value: '84 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույք', value: '13%-ից', prefix: 'սկսած' },
        { label: 'Կանխավճար', value: '10%-ից', prefix: 'սկսած' },
      ],
    },
    {
      id: 3,
      title: 'Գույքի գրավով ապահովված վարկ',
      description: 'Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց:',
      image: 'https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg',
      stats: [
        { label: 'Գումար', value: '150 մլն. ֏', prefix: 'մինչև' },
        { label: 'Վարկի մարման ժամկետը (անշարժ)', value: '24-180 ամիս', prefix: 'անշարժ գույքի գրավադրման դեպքում' },
        { label: 'Վարկի մարման ժամկետը (շարժական)', value: '60 ամիս', prefix: 'շարժական գույքի գրավադրման դեպքում' },
        { label: 'Տոկոսադրույք', value: '14%-ից', prefix: 'սկսած' },
      ],
    },
    {
      id: 4,
      title: 'Արևային կայանների ձեռք բերման վարկ EvocaPOWER',
      description: 'Քո տան էլեկտրաէներգիան արևից, իսկ վարկը՝ Evoca-ից: EvocaPOWER վարկատեսակը տրամադրվում է առանց կանխավճարի, գրավի և բանկ այցելելու անհրաժեշտության:',
      image: 'https://www.evoca.am/images-cache/loans/1/17552479364123/415x261.png',
      stats: [
        { label: 'Գումար', value: '5 մլն. ֏', prefix: 'մինչև' },
        { label: 'Ժամկետ', value: '60 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույքից', value: '0%-ից', prefix: 'սկսած' },
      ],
    },
    {
      id: 5,
      title: 'Ոսկու գրավով (լոմբարդային) վարկ',
      description: 'Ձևակերպե՛ք ոսկյա իրերի գրավով վարկեր Evocabank-ի մասնաճյուղերում հաշված րոպեների ընթացքում և ստացե՛ք վարկ ոսկու գնահատված արժեքի մինչև 150%-ի չափով:',
      image: 'https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg',
      stats: [
        { label: 'Գումար', value: '50 մլն. ֏', prefix: 'մինչև' },
        { label: 'Ժամկետ', value: '3-60 ամիս', prefix: '' },
        { label: 'Տոկոսադրույք', value: '15.5%-ից', prefix: 'սկսած' },
        { label: 'Վարկ / գրավ հարաբերակցություն', value: '150%', prefix: 'մինչև' },
      ],
    },
    {
      id: 6,
      title: 'Տեղում Ապառիկ',
      description: 'Ցանկանու՞մ ես ձեռք բերել քո նախընտրած ապրանքը կամ օգտվել ծառայությունից, բայց չես ցանկանում ամբողջ գումարը վճարել միանգամից: Օգտվիր Evoca-ի տեղում ապառիկից:',
      image: 'https://www.evoca.am/images-cache/loans/1/16131174467985/415x261.jpg',
      stats: [
        { label: 'Գումար', value: '5 մլն. ֏', prefix: 'մինչև' },
        { label: 'Ժամկետ', value: '60 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույք', value: '0%-ից', prefix: 'սկսած' },
      ],
    },
    {
      id: 7,
      title: 'Evoca աշխատավարձային փաթեթի շրջանակներում տրամադրվող վարկ',
      description: 'Աշխատավա՞րձ ես ստանում մեր բանկային քարտով և ունե՞ս ընթացիկ ծախսերի հետ կապված խնդիրներ. Evocabank-ը Ձեզ կտրամադրի շահավետ պայմաններով վարկ:',
      image: 'https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg',
      stats: [],
    },
    {
      id: 8,
      title: 'Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով',
      description: 'Ձեռք բերեք Ձեր նախընտրած բնակարանը հիփոթեքային վարկավորման միջոցով:',
      image: 'https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg',
      stats: [
        { label: 'Գումար', value: '80 մլն. ֏', prefix: 'մինչև' },
        { label: 'Ժամկետ', value: '240 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույք', value: '13.2%', prefix: 'սկսած' },
      ],
    },
    {
      id: 9,
      title: 'Action',
      description: 'Action online վարկ կարող ես ստանալ EvocaTOUCH հավելվածի միջոցով` 24/7 ռեժիմով, ցանկացած վայրից և ցանկացած ժամի:',
      image: 'https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png',
      stats: [
        { label: 'Սահմանաչափ', value: '10 մլն. ֏', prefix: 'մինչև' },
        { label: 'Մարման ժամկետ', value: '60 ամիս', prefix: 'մինչև' },
        { label: 'Տարեկան անվանական տոկոսադրույք', value: '18%-ից', prefix: 'սկսած' },
      ],
    },
    {
      id: 10,
      title: 'Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին',
      description: 'Evocabank-ը միշտ ձեր կողքին է: Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Լեռնային Ղարաբաղից բռնի տեղահանված ընտանիքներին:',
      image: 'https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png',
      stats: [
        { label: 'Գումար', value: '55 մլն ֏', prefix: 'մինչև' },
        { label: 'Մարման ժամկետ', value: '120 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույք', value: '13%', prefix: 'սկսած' },
      ],
    },
    {
      id: 11,
      title: 'Հողամասի ձեռքբերման վարկ',
      description: 'Փնտրո՞ւմ ես հողատարածք՝ քո երազանքների տունը կառուցելու, հանգստի գոտի ստեղծելու կամ այլ նպատակների համար: Դու արդեն գտել ես այն:',
      image: 'https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg',
      stats: [
        { label: 'Գումար', value: '80 մլն. ֏', prefix: 'մինչև' },
        { label: 'Ժամկետ', value: '240 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույք', value: '14%-ից', prefix: 'սկսած' },
      ],
    },
    {
      id: 12,
      title: 'Միկրովերանորոգման վարկ Բանկի ռեսուրսներով',
      description: 'Պլանավորո՞ւմ ես բնակարանի վերանորոգում: Ստացիր Evocabank-ի միկրովերանորոգման վարկ և օգտվիր պետական սուբսիդավորման հնարավորությունից:',
      image: 'https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png',
      stats: [
        { label: 'Գումար', value: '5 մլն. ֏', prefix: 'մինչև' },
        { label: 'Ժամկետ', value: '60 ամիս', prefix: '' },
        { label: 'Տոկոսադրույք', value: '17%', prefix: '' },
      ],
    },
    {
      id: 13,
      title: 'Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ',
      description: 'Ձեռք բեր քո երազանքների մեքենան Evocabank-ի լիզինգի միջոցով՝ ճկուն պայմաններով և մատչելի գնով:',
      image: 'https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png',
      stats: [
        { label: 'Գումար', value: '50 մլն ֏', prefix: 'մինչև' },
        { label: 'Ժամկետ', value: '60 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույքից', value: '14%-ից', prefix: 'Սկսած' },
      ],
    },
    {
      id: 14,
      title: 'Վճարային քարտով օվերդրաֆտ (վարկային քարտ)',
      description: 'Ունես չնախատեսված ծախսե՞ր. Evocabank-ի Online Օվերդրաֆտը լավագույն կարճաժամկետ լուծումն է: 24/7 հասանելիություն և առանց փաստաթղթաշրջանառության:',
      image: 'https://www.evoca.am/images-cache/loans/1/16947885698869/415x261.png',
      stats: [
        { label: 'Սահմանաչափ', value: '10 մլն ֏', prefix: 'մինչև' },
        { label: 'Մարման ժամկետ', value: '36 ամիս', prefix: '' },
        { label: 'Տարեկան անվանական տոկոսադրույք', value: '16%-ից', prefix: 'սկսած' },
      ],
    },
    {
      id: 15,
      title: 'Անհատական վարկ «Ներդրումային»',
      description: 'Ոչ թե վարկ, այլ Ներդրում. գիտե՞իր, որ Evoca-ի միջոցով դու կարող ես ձեռք բերել անշարժ կամ շարժական գույք արտերկրում և ստանալ լրացուցիչ եկամուտներ:',
      image: 'https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png',
      stats: [
        { label: 'Գումար', value: '350 մլն ֏', prefix: 'մինչև' },
        { label: 'Մարման ժամկետ', value: '240 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույք', value: '15%', prefix: '' },
      ],
    },
    {
      id: 16,
      title: 'Ավտոկայանատեղիի ձեռքբերման վարկ',
      description: 'Evocabank-ի նոր վարկատեսակով վերջապես կարող ես ձեռք բերել սեփական ավտոկայանատեղի և մոռանալ մեքենան կանգնեցնելու անհարմարությունների մասին:',
      image: 'https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg',
      stats: [
        { label: 'Գումար', value: '8 մլն ֏', prefix: 'մինչև' },
        { label: 'Մարման ժամկետ', value: '60 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույք', value: '16%', prefix: '' },
      ],
    },
    {
      id: 17,
      title: 'Հեծանիվի ձեռքբերման վարկ',
      description: 'Evoca-ն տրամադրում է հեծանիվի ձեռքբերման վարկ մասնագիտական ուսումնական հաստատությունների ուսանողների և աշխատակիցների համար` պետական սուբսիդավորմամբ:',
      image: 'https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png',
      stats: [
        { label: 'Գումար', value: '300,000 ֏', prefix: 'մինչև' },
        { label: 'Ժամկետ', value: '36 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույքից', value: '16%-ից', prefix: 'Սկսած' },
        { label: 'Պետության կողմից սուբսիդավորվող տոկոս', value: '16%', prefix: '' },
      ],
    },
    {
      id: 18,
      title: 'Ոչ ռեզիդենտ ֆիզ. անձանց համար բնակարանային հիփոթեքային վարկ',
      description: 'Ձեռք բեր քո երազանքների բնակարանը Evocabank-ի հիփոթեքային վարկավորման միջոցով:',
      image: 'https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png',
      stats: [
        { label: 'Գումար (Համարժեք արտարժույթ)', value: '80 մլն. ֏', prefix: 'մինչև' },
        { label: 'Ժամկետ', value: '180 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույք (Ֆիքսված)', value: '8.2%-ից', prefix: 'սկսած' },
        { label: 'Տոկոսադրույք (Լողացող)', value: '7.7%-ից', prefix: 'սկսած' },
      ],
    },
    {
      id: 19,
      title: 'Վերանորոգման վարկ EvocaHOME',
      description: 'Ցանկանու՞մ ես վերանորոգել բնակարանդ կամ պլանավորու՞մ ես գնել նոր կահույք: Evoca-ի կողմից առաջարկվող նոր օվերդրաֆտի միջոցով դու կստեղծես քո երազանքների բնակարանը` ամենահարմար պայմաններով:',
      image: 'https://www.evoca.am/images-cache/loans/1/17198124761415/415x261.png',
      stats: [
        { label: 'Գումար', value: '10 մլն ֏', prefix: 'մինչև' },
        { label: 'Մարման ժամկետ', value: '60 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույք', value: '16%', prefix: '' },
      ],
    },
    {
      id: 20,
      title: 'Դրամական միջոցների գրավով ապահովված անհատական վարկ',
      description: 'Ստացիր վարկ` գրավադրելով քո ավանդը կամ պարտատոմսը` արագ, հեշտ և առանց ավելորդ ձևակերպումների:',
      image: 'https://www.evoca.am/images-cache/loans/1/1782886301331/415x261.jpg',
      stats: [
        { label: 'Սահմանաչափ (ավանդ)', value: '95%', prefix: 'ավանդի գումարի մինչև' },
        { label: 'Սահմանաչափ (պարտատոմս)', value: '80%', prefix: 'պարտատոմսի գումարի մինչև' },
      ],
    },
    {
      id: 21,
      title: 'Առևտրային հիփոթեքային վարկեր',
      description: 'Բիզնեսն ընդլայնելու համար Ձեր ֆինանսական միջոցները բավարար չե՞ն, եկե՛ք Evocabank:',
      image: 'https://www.evoca.am/images-cache/loans/1/16142450609707/415x261.jpg',
      stats: [
        { label: 'Գումար', value: '120 մլն. ֏', prefix: 'մինչև' },
        { label: 'Ժամկետ', value: '240 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույք', value: '7.2%-ից', prefix: 'սկսած' },
      ],
    },
    {
      id: 22,
      title: 'ԱՀԸ-ի ծրագրով ձեռք բերման վարկեր',
      description: 'Evocabank-ն առաջարկում է Ազգային հիփոթեքային ընկերության ծրագրի շրջանակներում տրամադրվող բնակարանային հիփոթեքային վարկեր:',
      image: 'https://www.evoca.am/images-cache/loans/1/16142450957048/415x261.jpg',
      stats: [
        { label: 'Գումար', value: '45 մլն. ֏', prefix: 'մինչև' },
        { label: 'Ժամկետ', value: '240 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույք', value: '12%-ից', prefix: 'սկսած' },
      ],
    },
    {
      id: 23,
      title: 'ԱՀԸ-ի ծրագրով կառուցապատման վարկեր',
      description: 'Կատարիր ներդրում քո բնակարանի էներգաարդյունավետ կառուցապատման մեջ և ստացիր հնարավորություն վճարել ավելի քիչ ծախսված էլեկտրաէներգիայի և գազի համար:',
      image: 'https://www.evoca.am/images-cache/loans/1/17265524369781/415x261.png',
      stats: [
        { label: 'Գումար', value: '45 մլն. ֏', prefix: 'մինչև' },
        { label: 'Վարկի մարման ժամկետ', value: '240 ամիս', prefix: 'առավելագույնը' },
        { label: 'Տոկոսադրույք', value: '12.5%', prefix: 'սկսած' },
      ],
    },
    {
      id: 24,
      title: 'ԱՀԸ-ի ծրագրով վերանորոգման վարկեր',
      description: 'Կազմակերպիր քո բնակարանի էներգաարդյունավետ վերանորոգումն Evocabank-ի հետ:',
      image: 'https://www.evoca.am/images-cache/loans/1/16142533830767/415x261.jpg',
      stats: [
        { label: 'Գումար', value: '15 մլն. ֏', prefix: 'մինչև' },
        { label: 'Ժամկետ', value: '84 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույք', value: '12.5%-ից', prefix: 'սկսած' },
      ],
    },
    {
      id: 25,
      title: 'Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»',
      description: 'Գնե՛ք Ձեր երազանքների բնակարանն Evocabank-ի օգնությամբ: Մեզ հետ բնակարան գնելը հեշտ է, գործընթացն էլ՝ պարզեցված:',
      image: 'https://www.evoca.am/images-cache/loans/1/16142451699164/415x261.jpg',
      stats: [
        { label: 'Գումար', value: '27 մլն. ֏', prefix: 'մինչև' },
        { label: 'Վարկի մարման ժամկետը', value: '180 ամիս', prefix: 'մինչև' },
        { label: 'Սուբսիդավորվող տոկոս', value: '2-ից - 4%', prefix: '' },
        { label: 'Տոկոսադրույք', value: '6.9%-ից - 7.9%', prefix: '' },
      ],
    },
    {
      id: 26,
      title: 'Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ',
      description: 'Ստացե՛ք օվերդրաֆտ Evocabank-ից Visa միջազգային վճարային համակարգի ամենաբարձր դասի Visa Infinite քարտով և կունենաք բանալի՝ դեպի արտոնությունների մեծ աշխարհ:',
      image: 'https://www.evoca.am/images-cache/loans/1/16142652333164/415x261.jpg',
      stats: [
        { label: 'Գումար', value: '10 մլն. ֏', prefix: 'մինչև' },
        { label: 'Ժամկետ', value: '12-36 ամիս', prefix: '' },
        { label: 'Տոկոսադրույք', value: '15%', prefix: '' },
        { label: 'Արտոնյալ ժամանակահատված', value: 'Մինչև 45 օր', prefix: '' },
      ],
    },
    {
      id: 27,
      title: 'Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին',
      description: 'Evocabank-ը միշտ ձեր կողքին է: Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Ադրբեջանի կողմից 2020 թվականի սեպտեմբերի 27-ին սանձազերծված պատերազմի հետևանքով տեղահանված ընտանիքներին:',
      image: 'https://www.evoca.am/images-cache/loans/1/16690386016508/415x261.png',
      stats: [
        { label: 'Գումար', value: '45 մլն ֏', prefix: 'մինչև' },
        { label: 'Վարկի մարման ժամկետ', value: '120 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույք', value: '10%-ից', prefix: 'սկսած' },
      ],
    },
    {
      id: 28,
      title: 'Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին',
      description: 'Evocabank-ը տրամադրում է հիփոթեքային վարկ՝ բնակարանի կամ բնակելի տան վերանորոգման համար:',
      image: 'https://www.evoca.am/images-cache/loans/1/17133596531389/415x261.png',
      stats: [
        { label: 'Գումար', value: '10 մլն ֏', prefix: 'մինչև' },
        { label: 'Վարկի մարման ժամկետ', value: '60 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույք', value: '13%', prefix: '' },
      ],
    },
    {
      id: 29,
      title: '«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ',
      description: 'Նոր որակավորումների և մասնագիտացումների ժամանակն է, բայց ուսման վարձի վճարման խոչընդոտնե՞ր կան, Evocabank-ը կվճարի Ձեր փոխարեն:',
      image: 'https://www.evoca.am/images-cache/loans/1/16142452651138/415x261.jpg',
      stats: [
        { label: 'Գումար', value: '4 մլն. ֏', prefix: 'մինչև' },
        { label: 'Ժամկետ', value: '120 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույք', value: '9%', prefix: '' },
        { label: 'Սուբսիդավորվող տոկոս', value: '2-ից - 3%', prefix: '' },
      ],
    },
    {
      id: 30,
      title: 'Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր',
      description: 'Evocabank-ը միշտ ձեր կողքին է: Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր ՀՀ սահմանամերձ համայնքների բնակիչներին:',
      image: 'https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png',
      stats: [
        { label: 'Գումար', value: '21 մլն ֏', prefix: 'մինչև' },
        { label: 'Վարկի մարման ժամկետ', value: '120 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույք', value: '13%', prefix: '' },
      ],
    },
    {
      id: 31,
      title: 'Evolution',
      description: 'Նոր որակավորումների և մասնագիտացումների ժամանակն է, բայց ուսման վարձի վճարման խոչընդոտնե՞ր կան, Evocabank-ը կվճարի քո փոխարեն:',
      image: 'https://www.evoca.am/images-cache/loans/1/16644424027338/415x261.png',
      stats: [
        { label: 'Գումար', value: '1 մլն. ֏', prefix: 'մինչև' },
        { label: 'Ժամկետ', value: '18 ամիս', prefix: 'մինչև' },
        { label: 'Տոկոսադրույք', value: '18%-ից', prefix: 'սկսած' },
      ],
    },
    {
      id: 32,
      title: 'Հիփոթեքային վարկեր Զինծառայողներին',
      description: 'Ձեռք բեր քո նոր բնակարանը ամենահարմար պայմաններով: Հիփոթեքային վարկը տրամադրվում է պետական նպատակային ծրագրի շրջանակում:',
      image: 'https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png',
      stats: [
        { label: 'Սահմանաչափ', value: '25,65 մլն ֏', prefix: 'մինչև' },
        { label: 'Մարման ժամկետ', value: '120-240 ամիս', prefix: '' },
        { label: 'Տարեկան անվանական տոկոսադրույք', value: '11-ից - 12.75%', prefix: '' },
        { label: 'Սուբսիդավորվող տոկոսադրույք', value: '5%', prefix: '' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      <div>
        {/* 1. Մանուշակագույն ենթամենյու */}
        <div className="bg-purple-700 text-white px-8">
          <div className="flex items-center gap-4 text-sm font-semibold">
            <button className="bg-purple-900 px-6 py-3.5 border-b-4 border-white font-bold">
              Վարկեր
            </button>
            <button className="hover:bg-purple-800 px-4 py-3.5 transition">
              Վարկային պատմություն և սքոր
            </button>
            <button className="hover:bg-purple-800 px-4 py-3.5 transition">
              Կարևոր տեղեկատվություն
            </button>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-8 py-6">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
            <span>🏠</span>
            <ChevronRight size={12} />
            <span>Անհատ</span>
            <ChevronRight size={12} />
            <span>Վարկեր</span>
            <ChevronRight size={12} />
            <span className="text-gray-800 font-medium">Վարկեր</span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl font-black text-gray-900 mb-8">Վարկեր</h1>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {filterTabs.map((tab, idx) => (
              <button
                key={idx}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                  tab.active
                    ? 'bg-purple-700 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Loan Cards Grid/List */}
          <div className="space-y-12 mb-16">
            {loans.map((loan) => (
              <div
                key={loan.id}
                className="flex flex-col md:flex-row items-stretch gap-8 bg-white rounded-2xl p-2 transition"
              >
                {/* Image Container */}
                <div className="w-full md:w-80 h-56 rounded-2xl overflow-hidden shrink-0 shadow-sm bg-gray-100">
                  <img
                    src={loan.image}
                    alt={loan.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Box */}
                <div className="flex flex-col justify-between flex-grow py-2">
                  <div>
                    <h2 className="text-2xl font-black text-gray-900 mb-2">
                      {loan.title}
                    </h2>
                    <p className="text-sm text-gray-600 max-w-2xl leading-relaxed mb-6">
                      {loan.description}
                    </p>
                  </div>

                  {/* Dynamic Stats Grid */}
                  {loan.stats.length > 0 && (
                    <div className={`grid grid-cols-2 md:grid-cols-${Math.min(loan.stats.length, 4)} gap-6 mb-6 max-w-2xl`}>
                      {loan.stats.map((stat, idx) => (
                        <div key={idx}>
                          {stat.prefix && (
                            <div className="text-xs text-gray-500 font-medium">
                              {stat.prefix}
                            </div>
                          )}
                          <div className="text-2xl font-black text-purple-700">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-400 mt-0.5">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Details Link (ԱՎԵԼԱՑՎԵԼ Է LINK) */}
                  <div>
                    <Link
                      to={`/loans/${loan.id}`}
                      className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold px-6 py-2.5 rounded-full text-sm inline-flex items-center gap-2 transition"
                    >
                      Մանրամասն <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* FOOTER SECTION */}
      <footer className="bg-white border-t border-gray-100 text-gray-700 text-sm">
        <div className="max-w-7xl mx-auto px-8 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Column 1: Logo, Address, Legal info */}
            <div className="space-y-4">
              <div className="text-2xl font-black text-purple-700 flex items-center">
                evoca<span className="text-gray-400 font-light">BANK</span>
              </div>
              <div className="text-xs text-gray-600 leading-relaxed">
                <p>ք. Երևան, 0010,</p>
                <p>Հանրապետության 44/2</p>
              </div>
              <div className="text-xs text-gray-800 font-semibold pt-2">
                <p>Evocabank-ը վերահսկվում է</p>
                <p>Հայաստանի Հանրապետության</p>
                <p>Կենտրոնական բանկի կողմից</p>
              </div>
              <p className="text-[10px] text-gray-400 pt-2">
                1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
              </p>
            </div>

            {/* Column 2: Բանկի մասին */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Բանկի մասին</h3>
              <ul className="space-y-2 text-xs text-gray-700">
                <li><a href="#" className="hover:underline">Մեր մասին</a></li>
                <li><a href="#" className="hover:underline">Ղեկավարություն</a></li>
                <li><a href="#" className="hover:underline">Բաժնետերեր</a></li>
                <li><a href="#" className="hover:underline">Հաշվետվություններ</a></li>
                <li><a href="#" className="hover:underline">Իրավական ակտեր</a></li>
                <li><a href="#" className="hover:underline">Սակագներ</a></li>
                <li><a href="#" className="hover:underline">Օտարվող գույք</a></li>
                <li><a href="#" className="hover:underline">Կառուցապատողներ</a></li>
                <li><a href="#" className="hover:underline">Գործընկեր ավտոսրահներ</a></li>
                <li><a href="#" className="hover:underline">Սակագների արխիվ</a></li>
              </ul>
            </div>

            {/* Column 3: Օգտակար հղումներ */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Օգտակար հղումներ</h3>
              <ul className="space-y-2 text-xs text-gray-700">
                <li><a href="#" className="hover:underline">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</a></li>
                <li><a href="#" className="hover:underline">Հաճախորդի ռեզիդենտության չափանիշներ</a></li>
                <li><a href="#" className="hover:underline">Կարգավորում</a></li>
                <li><a href="#" className="hover:underline">Գաղտնիության քաղաքականություն</a></li>
                <li><a href="#" className="hover:underline">Ֆին. հաշտարար</a></li>
                <li><a href="#" className="hover:underline">Ֆինանսական հանցագործությունների կանխարգելում</a></li>
                <li><a href="#" className="hover:underline">Հղումներ Բանկի քարտապանների համար</a></li>
              </ul>
            </div>

            {/* Column 4: Այլ հղումներ */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Այլ հղումներ</h3>
              <ul className="space-y-2 text-xs text-gray-700">
                <li><a href="#" className="hover:underline">EvocaONLINE</a></li>
                <li><a href="#" className="hover:underline">Պահատուփեր</a></li>
                <li><a href="#" className="hover:underline">Հաճախ տրվող հարցեր</a></li>
                <li><a href="#" className="hover:underline">Հայտարարություններ</a></li>
                <li><a href="#" className="hover:underline">Dibrary</a></li>
                <li><a href="#" className="hover:underline">Բուկլետներ</a></li>
                <li><a href="#" className="hover:underline">Հետադարձ կապ</a></li>
                <li><a href="#" className="hover:underline">Կայքի քարտեզ</a></li>
              </ul>
            </div>

            {/* Column 5: Social, Apps & Contact */}
            <div className="space-y-4">
              {/* Social icons */}
              <div className="flex items-center gap-3 text-gray-400">
                <a href="#" className="hover:text-purple-700 font-bold">f</a>
                <a href="#" className="hover:text-purple-700 font-bold">📷</a>
                <a href="#" className="hover:text-purple-700 font-bold">P</a>
                <a href="#" className="hover:text-purple-700 font-bold">▶</a>
                <a href="#" className="hover:text-purple-700 font-bold">in</a>
              </div>

              {/* Mobile Apps */}
              <div className="flex items-center gap-2 pt-2">
                <a href="#" className="bg-black text-white text-[10px] px-3 py-1.5 rounded-md flex items-center gap-1">
                  <span> App Store</span>
                </a>
                <a href="#" className="bg-black text-white text-[10px] px-3 py-1.5 rounded-md flex items-center gap-1">
                  <span>► Google Play</span>
                </a>
              </div>

              {/* Links */}
              <div className="space-y-1 text-xs pt-2">
                <a href="#" className="block text-purple-700 font-bold hover:underline">
                  Բանկի հասցեները և աշխատաժամերը
                </a>
                <a href="#" className="block text-purple-700 font-bold hover:underline">
                  Կապ մեզ հետ
                </a>
              </div>

              {/* Phones */}
              <div className="text-xs space-y-1 pt-1">
                <div className="font-bold text-gray-800">+374 10 605555</div>
                <div className="font-black text-purple-700 text-lg">8444</div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Partner Logos Strip */}
        <div className="bg-gray-100 py-6 px-8 text-[10px] text-gray-500 border-t border-gray-200">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="leading-relaxed max-w-3xl">
              Կայքում՝ անգլերեն, ռուսերեն կամ այլ լեզուներով տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև տեքստային և անգլերեն թարգմանության ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: «Էվոկաբանկ» ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
            </p>
            {/* Logos mockup */}
            <div className="flex items-center gap-4 shrink-0 opacity-60">
              <span className="font-bold text-xs tracking-wider">fininfo</span>
              <span className="font-bold text-xs">abcfinance.am</span>
              <span className="font-black text-xs">arca</span>
              <span className="font-bold text-xs">AAC</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}