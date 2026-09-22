// Յուրաքանչյուր էլեմենտ՝ [վերնագիր, ամսաթիվ, հղում (ըստ ցանկության), նկարի URL (ըստ ցանկության)]
// Ամսաթիվը դատարկ է ('') այն քարտերի համար, որոնց ամսաթիվը նկարում կտրված էր՝ լրացրու ձեռքով։
// Նկար չլինելու դեպքում էջը ցույց է տալիս մանուշակագույն placeholder։

// Կատեգորիաների կոդեր (ամեն էջի վերջում՝ 36 տառ, ամեն քարտին՝ մեկ տառ)
//  b = Բանկային          i = Հարցազրույցներ     p = Պրոդուկտներ
//  n = Նորարարություններ  l = Կենսակերպ          a = Մրցանակներ
//  c = CSR               o = Այլ
const CODE_TO_CATEGORY = {
  b: 'Բանկային',
  i: 'Հարցազրույցներ',
  p: 'Պրոդուկտներ',
  n: 'Նորարարություններ',
  l: 'Կենսակերպ',
  a: 'Մրցանակներ',
  c: 'CSR',
  o: 'Այլ',
};

// filter-ների ցանկը (նույն հերթականությամբ, ինչ կայքում)
export const CATEGORIES = Object.values(CODE_TO_CATEGORY);

// build(էջի համար, տողեր, կոդեր)
// - id և հղում ավտոմատ՝ 5-րդ էջի 3-րդ քարտը -> id: 'p5-3', to: '/news/p5-3'
// - եթե տողում 3-րդ տարրը (հղում) գրված է, օգտագործվում է այն
// - կատեգորիան վերցվում է կոդից, կամ տողի 5-րդ տարրից (եթե ուզում ես ձեռքով փոխել)
const build = (pageNo, rows, codes = '') => {
  const list = codes.replace(/\s+/g, '');
  if (list && list.length !== rows.length) {
    console.warn(`Էջ ${pageNo}. կոդերի քանակը (${list.length}) չի համընկնում քարտերի քանակի հետ (${rows.length})`);
  }
  return rows.map(([title, date, to, image, category], i) => {
    const id = `p${pageNo}-${i + 1}`;
    return {
      id,
      title,
      date,
      to: to || `/news/${id}`,
      image,
      category: category || CODE_TO_CATEGORY[list[i]] || 'Այլ',
    };
  });
};

// ─────────────── ԷՋ 1 ───────────────
const page1 = build(1, [
  ['Դիլիջան, մենք գալիս ենք', '11.09.2026',null,'https://www.evoca.am/images-cache/news/1/17891134831451/510x383.png'],
  ['Evocabank-ը՝ Retro Fest-ի ֆինանսական գործընկեր','03.09.2026',null,'https://www.evoca.am/images-cache/news/1/17884237814941/510x383.png', ],
  ['Գործարքների արգելափակում 1 կոճակով', '01.06.2026',null, 'https://www.evoca.am/images-cache/news/1/17852444643548/510x383.png', '/news/transactions-blocked'],
  ['Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով','21.08.2026',null,'https://www.evoca.am/images-cache/news/1/17873217684586/510x383.png', '/news/back-to-school'],

  ["Ba3 վարկանիշ Moody's-ից Evocabank-ին", '18.08.2026',null,'https://www.evoca.am/images-cache/news/1/17870544210976/510x383.png'],
  ['Հայաստանում գործարկվեց Firebird AI-ի «ԱԻ գործարանը»','11.08.2026',null,'https://www.evoca.am/images-cache/news/1/17864472573391/510x383.png'],
  ['Evocabank-ը և Green Rock-ը մեկնարկեցին Բանկի նոր գլխամասի նախագիծը', '30.07.2026',null,'https://www.evoca.am/images-cache/news/1/17854167235525/510x383.png'],
  ['Evocabank՝ Լավագույն Բանկը Հայաստանում 2026', '30.06.2026',null,'https://www.evoca.am/images-cache/news/1/17847187625556/510x383.png'],

  ['Կարեն Եղիազարյանի նոր հարցազրույցը Banks.am-ին', '22.07.2026',null,'https://www.evoca.am/images-cache/news/1/17845396816254/510x383.png'],
  ['Evoca-ի ղեկավարները հաջողությամբ ավարտեցին Generative AI դասընթացը', '17.07.2026',null,'https://www.evoca.am/images-cache/news/1/17842875742396/510x383.png'],
  ['Evoca-ն՝ EuroBasket U16 մրցաշարի պաշտոնական հովանավոր', '09.07.2026',null,'https://www.evoca.am/images-cache/news/1/17835973514805/510x383.png'],
  ['Evocabank-ը՝ PREPA Run 2026-ի գլխավոր հովանավոր', '25.06.2026',null,'https://www.evoca.am/images-cache/news/1/17823731739564/510x383.png'],

  ['Evocabank-ը՝ Newmag Summerfest 2026-ի գլխավոր հովանավոր', '24.06.2026',null,'https://www.evoca.am/images-cache/news/1/17823755903426/510x383.png'],
  ['Evocabank-ը և Norakaruyc.am-ը համագործակցության հուշագիր են ստորագրել', '22.06.2026',null,'https://www.evoca.am/images-cache/news/1/1782137837549/510x383.jpg', '/news/norakaruyc-memorandum'],
  ['Evocabank-ը՝ AMX AWARDS 2026-ի մրցանակակիր', '16.06.2026',null,'https://www.evoca.am/images-cache/news/1/17815943976247/510x383.png', '/news/amx-awards-2026'],
  ['Evocabank-ն ու Wilco-ն ներկայացնում են բացառիկ համատեղ քարտ', '15.06.2026',null,'https://www.evoca.am/images-cache/news/1/17815163976713/510x383.png'],

  ['Evocabank-ը նոր գույներ է տալիս մեր քաղաքին', '12.06.2026',null,'https://www.evoca.am/images-cache/news/1/17812556342544/510x383.png', '/news/new-colors'],
  ['ՊԱՐԶԱԲԱՆՈՒՄ', '',null,'https://www.evoca.am/images-cache/news/1/17806626445767/510x383.jpg'],
  ['Վճարիր Evoca Mastercard-ով Adidas Armenia-ում և ստացիր 10% գեղչ', '',null,'https://www.evoca.am/images-cache/news/1/17804748057663/510x383.png'],
  ['Վազգեն Գևորգյանն արժանացել է Անանիա Շիրակացու մեդալի', '',null,'https://www.evoca.am/images-cache/news/1/17800482277397/510x383.png'],

  ['Վճարիր Evoca Visa քարտով և ստացիր առավելություններ Globbing-ում', '14.05.2026',null,'https://www.evoca.am/images-cache/news/1/1778751542792/510x383.png'],
  ['«Գյումրի» մասնաճյուղն արդեն գործում է նոր հասցեով', '12.05.2026',null,'https://www.evoca.am/images-cache/news/1/17785839458922/510x383.png'],
  ['Evocabank. Լավագույն ՓՄՁ բանկը Հայաստանում՝ երկրորդ տարին անընդմեջ', '08.05.2026',null,'https://www.evoca.am/images-cache/news/1/17784860353078/510x383.png', '/news/best-sme-bank'],
  ['Evocabank-ը և Proparco-AFD-ն ստորագրել են 20 միլիոն եվրոյի վարկային համաձայնագիր', '06.05.2026',null,'https://www.evoca.am/images-cache/news/1/17780463751358/510x383.png'],

  ['Վճարիր Evoca Mastercard-ով Glovo-ում և ստացիր 10,000 դրամ', '30.04.2026',null,'https://www.evoca.am/images-cache/news/1/17791803423671/510x383.png'],
  ['Evocabank-ը մասնակցում է CCF 2026-ին', '17.04.2026',null,'https://www.evoca.am/images-cache/news/1/1776423301974/510x383.png'],
  ['Կարեն Եղիազարյանը՝ IMF և WBG Spring Meetings 2026-ին', '13.04.2026',null,'https://www.evoca.am/images-cache/news/1/1776162446379/510x383.png'],
  ['Evoca-ն մասնակցում է Leasing Expo 2026-ին', '09.04.2026',null,'https://www.evoca.am/images-cache/news/1/17758068998241/510x383.png'],

  ['ESG կառավարման համակարգը Evocabank-ում', '31.03.2026',null,'https://www.evoca.am/images-cache/news/1/17757342882486/510x383.png', '/news/esg-framework'],
  ['Evocabank-ը միացել է AI մեգանախագծի 300 մլն ԱՄՆ դոլարի ֆինանսավորմանը', '27.03.2026',null,'https://www.evoca.am/images-cache/news/1/17746129517291/510x383.png'],
  ['Evoca-ն մասնակցում է TOON EXPO 2026-ին', '24.03.2026',null,'https://www.evoca.am/images-cache/news/1/17743534930147/510x383.png'],
  ['Վճարիր Evoca Mastercard-ով և ստացիր 10% cashback', '10.03.2026',null,'https://www.evoca.am/images-cache/news/1/17732233309185/510x383.png'],

  ['Ներդրումային առաջարկ կանանց համար', '06.03.2026',null,'https://www.evoca.am/images-cache/news/1/1773403253997/510x383.png'],
  ['Քո Crypto հաշիվը՝ արդեն EvocaTOUCH-ում', '27.02.2026',null,'https://www.evoca.am/images-cache/news/1/17722002491716/510x383.png', '/news/crypto-account'],
  ['Կարեն Եղիազարյանի հարցազրույցը Los Angeles Times ամսագրին', '25.02.2026',null,'https://www.evoca.am/images-cache/news/1/17720089281517/510x383.png', '/news/los-angeles-times'],
  ['Evocabank-ը միացել է AmCham Armenia-ին', '10.02.2026',null,'https://www.evoca.am/images-cache/news/1/17707319421286/510x383.png', '/news/amcham-armenia'],
], 'llbp bnba inll lbap lopa pbab pooo bbop ppib');

// ─────────────── ԷՋ 2 ───────────────
const page2 = build(2, [
  ['Evocabank: Excellence in Travel Segment Innovation', '10.02.2026',null,'https://www.evoca.am/images-cache/news/1/17707059995106/510x383.jpg'],
  ['Կատարիր գնումներ Evoca Mastercard-ով և շահիր MyLer նվեր քարտ', '01.02.2026',null,'https://www.evoca.am/images-cache/news/1/17700093062846/510x383.png'],
  ['Evocabank-ի «Աջափնյակ» մասնաճյուղն արդեն բաց է', '12.01.2026',null,'https://www.evoca.am/images-cache/news/1/17683825017248/510x383.jpg', '/news/ajapnyak-branch'],
  ['EvocaTOUCH: Best AI-Powered Mobile App', '30.12.2025',null,'https://www.evoca.am/images-cache/news/1/17701157882933/510x383.jpg'],

  ['Վճարիր Evoca Mastercard-ով, ստացիր հավելյալ 10% cashback', '24.12.2025',null,'https://www.evoca.am/images-cache/news/1/17665876075785/510x383.png'],
  ['50 մլն դրամ Սպանդարյանի ջրանցքի վերակառուցման համար', '24.12.2025',null,'https://www.evoca.am/images-cache/news/1/17666423680322/510x383.png'],
  ['Մրցանակ Visa-ի կողմից՝ Evocabank: Highest Cashless Achievement', '22.12.2025',null,'https://www.evoca.am/images-cache/news/1/17696763497988/510x383.jpg'],
  ['Evocabank-ը՝ Project Management Awards 2025-ի գլխավոր գործընկեր', '18.12.2025',null,'https://www.evoca.am/images-cache/news/1/17664112537702/510x383.png'],

  ['Evoca-ն՝ Yerevan Open շախմատային մրցաշարի ֆինանսական հովանավոր', '',null,'https://www.evoca.am/images-cache/news/1/17690803274151/510x383.png'],
  ['Evoca-ն հուշագիր է ստորագրել CCI France Armenia-ի հետ', '',null,'https://www.evoca.am/images-cache/news/1/1765801881883/510x383.png'],
  ['Evocabank. 20 մլն ԱՄՆ դոլար՝ շվեյցարական BlueOrchard-ից', '',null,'https://www.evoca.am/images-cache/news/1/17649374043883/510x383.png'],
  ['Evocabank՝ լավագույն թվային բանկը Հայաստանում 2025', '',null,'https://www.evoca.am/images-cache/news/1/17631178039892/510x383.png'],

  ['Վճարիր Evoca Mastercard-ով Glovo-ում և ստացիր 40% զեղչ', '26.11.2025',null,'https://www.evoca.am/images-cache/news/1/17641620297289/510x383.png'],
  ['Սև ուրբաթը Evoca-ում', '19.11.2025',null,'https://www.evoca.am/images-cache/news/1/17636522117371/510x383.png'],
  ['Կարեն Եղիազարյանի նոր հարցազրույցը Banks.am-ին', '11.11.2025',null,'https://www.evoca.am/images-cache/news/1/17628589568036/510x383.png'],
  ['Evocabank-ը՝ Robust Armenia 2025 կոնֆերանսի գլխավոր գործընկեր', '06.11.2025',null,'https://www.evoca.am/images-cache/news/1/17624341580743/510x383.png'],

  ['Evoca x Arca. Խաղարկում ենք 5 iPhone 17 Pro', '04.11.2025',null,'https://www.evoca.am/images-cache/news/1/17622656011294/510x383.png'],
  ['Evocabank-ը՝ ՆԱԻ-Հայաստան 2025 կոնֆերանսի Արծաթե գործընկեր', '03.11.2025',null,'https://www.evoca.am/images-cache/news/1/17623251404538/510x383.png'],
  ['Մեծ զեղչեր Չինաստանից, 20% cashback Evoca-ից', '01.11.2025',null,'https://www.evoca.am/images-cache/news/1/17625016329726/510x383.png'],
  ['Evoca x AZAT MARD', '27.10.2025',null,'https://www.evoca.am/images-cache/news/1/1761568122726/510x383.jpg'],

  ['Կարճ հեռախոսահամար՝ 8444', '',null,'https://www.evoca.am/images-cache/news/1/17611221350351/510x383.jpg'],
  ['Evocabank-ը ներգրավել է 30 մլն ԱՄՆ դոլար OPEC-ից', '',null,'https://www.evoca.am/images-cache/news/1/17610618951769/510x383.png'],
  ['Evoca is 35 Gala Event՝ VIP հաճախորդների և գործընկերների համար', '',null,'https://www.evoca.am/images-cache/news/1/17604369402663/510x383.png'],
  ['Getting Things Done կոնֆերանս՝ Evocabank-ի 35 ամյակի առթիվ', '',null,'https://www.evoca.am/images-cache/news/1/17600922901514/510x383.png'],

  ['Evocabank-ը ներգրավել է $5.5 մլն ստորադաս փոխառություն responsAbility-ից', '25.09.2025',null,'https://www.evoca.am/images-cache/news/1/17587062793679/510x383.png'],
  ['Հատուկ առաջարկներ Evoca Visa պրեմիում քարտապանների համար', '12.09.2025',null,'https://www.evoca.am/images-cache/news/1/17576778780897/510x383.png'],
  ['Evoca՝ ՓՄՁ վարկավորման ամենանորարար գործընկերը Հայաստանում', '09.09.2025',null,'https://www.evoca.am/images-cache/news/1/17574945834607/510x383.png'],
  ['iPhone և MacBook Air՝ 0% սպասարկման վճարով', '08.09.2025',null,'https://www.evoca.am/images-cache/news/1/17573391299753/510x383.png'],

  ['Evoca Visa քարտապաններն ունեն առաջարկ', '04.09.2025',null,'https://www.evoca.am/images-cache/news/1/17569912369255/510x383.png'],
  ['Նոր առաջարկ Evoca Mastercard քարտապանների համար', '01.09.2025',null,'https://www.evoca.am/images-cache/news/1/17567286835411/510x383.png'],
  ['Evoca-ն մասնակցում է TOON EXPO 2025-ին', '27.08.2025',null,'https://www.evoca.am/images-cache/news/1/175627574177/510x383.png'],
  ['Evocabank-ի Խորհրդի նոր կազմը', '26.08.2025',null,'https://www.evoca.am/images-cache/news/1/1755691060325/510x383.png'],

  ['Evocabank-ը՝ 50-րդ BACEE Jubilee համաժողովի պլատինում հովանավոր','19.08.2025',null,'https://www.evoca.am/images-cache/news/1/17556116751548/510x383.png' ],
  ['Back to School. Վճարիր Evoca Mastercard-ով, ստացիր 20% cashback','14.08.2025',null,'https://www.evoca.am/images-cache/news/1/17551746889694/510x383.png' ],
  ['Էվոկաբանկ ԲԲԸ', '01.08.2025',null,'https://www.evoca.am/images-cache/news/1/17540357468511/510x383.png'],
  ['Evoca x Al Fardan Exchange. արագ ու հարմար փոխանցումներ դեպի ԱՄԷ', '30.07.2025',null,'https://www.evoca.am/images-cache/news/1/17543142671349/510x383.png'],
], 'apba pcao lbba ppio popl bblo bpap ppob opbp');

// ─────────────── ԷՋ 3 ───────────────
const page3 = build(3, [
  ['10% cashback և Skip The Line հնարավորություն', '28.07.2025',null,'https://www.evoca.am/images-cache/news/1/17537015540189/510x383.png'],
  ['Դու ունես հնարավորություն հանդիպելու JLo-ին', '25.07.2025',null,'https://www.evoca.am/images-cache/news/1/17534487529816/510x383.png'],
  ['Վճարիր օնլայն՝ Apple Pay-ով', '22.07.2025',null,'https://www.evoca.am/images-cache/news/1/17531989779123/510x383.png'],
  ['Մեկնարկեցին Evoca Partners Club-ն ու Evoca Benefits նախագիծը', '21.07.2025',null,'https://www.evoca.am/images-cache/news/1/17530865995552/510x383.png'],

  ['Evocabank՝ «Լավագույն Բանկը Հայաստանում 2025»', '04.07.2025',null,'https://www.evoca.am/images-cache/news/1/17516321438473/510x383.png'],
  ['Ճամփորդիր ուր ուզես, վճարիր որտեղ և երբ ուզես', '03.07.2025',null,'https://www.evoca.am/images-cache/news/1/17515401570632/510x383.png'],
  ['Կարեն Եղիազարյանի հարցազրույցը TIME Magazine-ին', '25.06.2025',null,'https://www.evoca.am/images-cache/news/1/17508538711597/510x383.png'],
  ['Evocabank-ը միացել է IFC-ի առևտրի ֆինանսավորման ծրագրին', '17.06.2025',null,'https://www.evoca.am/images-cache/news/1/17501430419171/510x383.png'],

  ['Նոր ինտերֆեյս՝ ավելի հարմար առցանց վճարումներ', '',null,'https://www.evoca.am/images-cache/news/1/17500622728518/510x383.png'],
  ['Evocabank-ը՝ Newmag Summer Fest 2025-ի գլխավոր հովանավոր', '',null,'https://www.evoca.am/images-cache/news/1/1749800175046/510x383.png'],
  ['Վայելիր հանգիստը և խնայիր գումար Evoca Visa քարտի միջոցով', '',null,'https://www.evoca.am/images-cache/news/1/17490227658695/510x383.jpg'],
  ['Evoca Travel Card-ը վայրէջք կատարեց', '',null,'https://www.evoca.am/images-cache/news/1/17479803552747/510x383.png'],

  ['20% զեղչ ԱԿԳ հավելվածում Evoca Visa քարտապանների համար', '20.05.2025',null,'https://www.evoca.am/images-cache/news/1/17477364797809/510x383.png'],
  ['Evocabank-ը և EBRD-ն համագործակցության համաձայնագրեր են ստորագրել', '14.05.2025',null,'https://www.evoca.am/images-cache/news/1/17472925002048/510x383.png'],
  ['Այոոոո՜, Jennifer Lopez-ը գալիս է Հայաստան', '28.04.2025',null,'https://www.evoca.am/images-cache/news/1/17458487928291/510x383.png'],
  ['Evocabank-ը Career City Fest 2K25-ին', '28.04.2025',null,'https://www.evoca.am/images-cache/news/1/17458431584755/510x383.png'],

  ['Evocabank-ը կմասնակցի Career City Fest 2K25-ին', '21.04.2025',null,'https://www.evoca.am/images-cache/news/1/17452406787041/510x383.png'],
  ['Առցանց դասընթացներ միջազգային հարթակներում՝ մինչև 25% զեղչով', '18.04.2025',null,'https://www.evoca.am/images-cache/news/1/1744964814312/510x383.png'],
  ['Շաաաաատ զեղչեր ԱՄԷ-ում Evoca Visa քարտապանների համար', '15.04.2025',null,'https://www.evoca.am/images-cache/news/1/17447167969525/510x383.png'],
  ['Նոր մրցանակ BACEE-ի կողմից', '14.04.2025',null,'https://www.evoca.am/images-cache/news/1/17446266510076/510x383.png'],

  ['Մեծ զեղչեր Evoca Visa պրեմիում քարտապանների համար', '',null,'https://www.evoca.am/images-cache/news/1/17441042084127/510x383.png'],
  ['Նոր մրցանակ Evoca-ին՝ լավագույն ՓՄՁ բանկը Հայաստանում 2025', '',null,'https://www.evoca.am/images-cache/news/1/17435920140644/510x383.png'],
  ['Վճարիր Evoca Mastercard-ով և մասնակցիր մեքենայի խաղարկությանը', '',null,'https://www.evoca.am/images-cache/news/1/17545729507567/510x383.png'],
  ['Վճարիր Evoca Mastercard-ով և վայելիր անվճար Ալ Բուրգեր KFC-ից', '',null,'https://www.evoca.am/images-cache/news/1/17434047457376/510x383.png'],

  ['Գնիր iPhone Evocabank-ի միջոցով', '28.03.2025',null,'https://www.evoca.am/images-cache/news/1/17431499399716/510x383.png'],
  ['Ձեռք բեր քո երազանքների բնակարանը 12%-ով', '26.03.2025',null,'https://www.evoca.am/images-cache/news/1/17429755745448/510x383.png'],
  ['Ընդամենը Evoca Visa քարտ և 30% cashback buy.am-ում', '11.03.2025',null,'https://www.evoca.am/images-cache/news/1/17416830305613/510x383.jpg'],
  ['Նվիրիր նվեր քարտ, մասնակցիր խաղարկությանը և շահիր', '07.03.2025',null,'https://www.evoca.am/images-cache/news/1/17413527732385/510x383.jpg'],

  ['Phubber + Evoca Visa = 0% միջնորդավճար՝ հատուկ քեզ համար', '06.03.2025',null,'https://www.evoca.am/images-cache/news/1/17412622497205/510x383.png'],
  ['Evocabank-ի «Հանրապետության» մասնաճյուղն արդեն բաց է', '20.02.2025',null,'https://www.evoca.am/images-cache/news/1/1740120458201/510x383.png'],
  ['15% զեղչ KinoPark-ում՝ Evoca Visa քարտապանների համար', '19.02.2025',null,'https://www.evoca.am/images-cache/news/1/17399680512009/510x383.jpg'],
  ['15% cashback Myler-ում Evoca Visa քարտապանների համար', '18.02.2025',null,'https://www.evoca.am/images-cache/news/1/17398763342238/510x383.png'],

  ['Evoca Visa պրեմիում քարտեր. ճամփորդիր առանց սահմանների', '12.02.2025',null,'https://www.evoca.am/images-cache/news/1/17393570102872/510x383.png'],
  ['Անսահմանափակ Lounge Key մուտք՝ նոր պայմաններով', '07.02.2025',null,'https://www.evoca.am/images-cache/news/1/17389374853499/510x383.png'],
  ['Նոր զեղչեր Evoca Mastercard քարտապանների համար', '07.02.2025',null,'https://www.evoca.am/images-cache/news/1/17389114240578/510x383.png'],
  ['Վճարիր Evoca Visa քարտով և ստացիր 30% cashback buy.am-ում', '05.02.2025',null,'https://www.evoca.am/images-cache/news/1/17387624327634/510x383.jpg'],
], 'plnp apib nlpp pblo oppa papp pppp pbpp pppp');

// ─────────────── ԷՋ 4 ───────────────
const page4 = build(4, [
  ['Evocabank-ը մասնակցել է Miami-Dubai Chamber of Commerce 2-ին', '04.02.2025',null,'https://www.evoca.am/images-cache/news/1/17386587462914/510x383.png'],
  ['2 նոր մրցանակ Evocabank-ին Global Business & Finance-ի կողմից', '30.01.2025',null,'https://www.evoca.am/images-cache/news/1/17382449387143/510x383.png'],
  ['Նոր մրցանակ Evoca-ին՝ Excellence in New Products Development', '21.01.2025',null,'https://www.evoca.am/images-cache/news/1/17374660522736/510x383.jpg'],
  ['Համագործակցության նոր ֆորմատ Evoca-ի, ՀՊՏՀ-ի և ՀՖՀՀ-ի միջև', '20.01.2025',null,'https://www.evoca.am/images-cache/news/1/17373763573222/510x383.jpg'],

  ['Evocabank. 2024 թվականի ամփոփում', '17.01.2025',null,'https://www.evoca.am/images-cache/news/1/17371104329802/510x383.jpg'],
  ['Նոր մասնաճյուղ Երևան Մոլում', '13.01.2025',null,'https://www.evoca.am/images-cache/news/1/17369249643186/510x383.jpg'],
  ['Evocabank՝ լավագույն թվային բանկը Հայաստանում 2024', '13.01.2025',null,'https://www.evoca.am/images-cache/news/1/17367544923272/510x383.png'],
  ['Ընդամենը Evoca Mastercard և 10% զեղչ iSpace խանութներում', '24.12.2024',null,'https://www.evoca.am/images-cache/news/1/17350261083272/510x383.png'],

  ['Շատ ամանորյա առաջարկներ Evoca Visa քարտապաններին', '23.12.2024',null,'https://www.evoca.am/images-cache/news/1/17352073225371/510x383.png'],
  ['Ամանորյա առաջարկ Evoca Visa քարտապաններին', '18.12.2024',null,'https://www.evoca.am/images-cache/news/1/17345194462142/510x383.png  '],
  ['5 մլն դրամ «Երաժշտություն հանուն ապագայի» հիմնադրամին', '13.12.2024',null,'https://www.evoca.am/images-cache/news/1/17340920050867/510x383.png'],
  ['Evocabank-ը և Al Fardan Exchange-ը ստորագրել են համագործակցության…', '12.12.2024',null,'https://www.evoca.am/images-cache/news/1/17340172368299/510x383.png'],

  ['Evocabank-ը և IFC-ն համագործակցության պայմանագիր են ստորագրել', '11.12.2024',null,'https://www.evoca.am/images-cache/news/1/17339403687437/510x383.jpg'],
  ['Նվերներ շահելու հնարավորություն Evoca քարտապանների համար', '11.12.2024',null,'https://www.evoca.am/images-cache/news/1/17346144644078/510x383.png'],
  ['Navigating Business in a Sanctioned World', '10.12.2024',null,'https://www.evoca.am/images-cache/news/1/17338293917613/510x383.png'],
  ['Evoca-ն աջակցել էր Փարիզի Աստվածամոր տաճարի վերականգնմանը', '09.12.2024',null,'https://www.evoca.am/images-cache/news/1/17337499936685/510x383.jpg'],

  ['Evoca-ն՝ Miami-Dubai Chamber of Commerce-ի պլատինում հովանավոր', '09.12.2024',null,'https://www.evoca.am/images-cache/news/1/17337479879173/510x383.jpg'],
  ['Evocabank-ը ներգրավել է 5 մլն ԱՄՆ դոլար responsAbility-ից', '03.12.2024',null,'https://www.evoca.am/images-cache/news/1/17332069569872/510x383.png'],
  ['20 միլիոն դրամ «Հայաստան» համահայկական հիմնադրամին', '28.11.2024',null,'https://www.evoca.am/images-cache/news/1/17327982683146/510x383.png'],
  ['Black Friday-ի հատուկ առաջարկ Evoca Mastercard քարտապաններին', '27.11.2024',null,'https://www.evoca.am/images-cache/news/1/17327830533928/510x383.png'],

  ['Մրցանակ Visa-ի կողմից "Highest Cashless Ratio Achievement"', '',null,'https://www.evoca.am/images-cache/news/1/1737466907351/510x383.jpg'],
  ['Evoca-ն ավարտել է պարտատոմսերի տեղաբաշխումը', '',null,'https://www.evoca.am/images-cache/news/1/17325417143896/510x383.jpg'],
  ['EvocaTOUCH հավելվածով Idram QR վճարումներ', '',null,'https://www.evoca.am/images-cache/news/1/17283954133829/510x383.png'],
  ['Evocabank-ը միացել է ArCa Pay-ին', '',null,'https://www.evoca.am/images-cache/news/1/17313236323207/510x383.png'],

  ['MoneyTun՝ նոր արագ դրամական փոխանցումների համակարգ Evoca-ում', '06.11.2024',null,'https://www.evoca.am/images-cache/news/1/17308934051939/510x383.png'],
  ['Evoca-ն միացել է UBPay արագ դրամական փոխանցումների համակարգին', '01.11.2024',null,'https://www.evoca.am/images-cache/news/1/17304683213703/510x383.jpg'],
  ['Մրցանակներ Evocabank-ին Armenia Digital Awards 2024-ի կողմից', '01.11.2024',null,'https://www.evoca.am/images-cache/news/1/17304447813906/510x383.png'],
  ['Evocabank-ը կներգրավի 10 մլն ԱՄՆ դոլար BSTDB-ից', '31.10.2024',null,'https://www.evoca.am/images-cache/news/1/17304388351704/510x383.png'],

  ['Evoca-ն՝ Project Management Awards 2024-ի գլխավոր գործընկեր', '29.10.2024',null,'https://www.evoca.am/images-cache/news/1/17302076777661/510x383.png'],
  ['Հիփոթեքային վարկ՝ ավելի ցածր տոկոսադրույքով', '24.10.2024',null,'https://www.evoca.am/images-cache/news/1/17297753797877/510x383.png'],
  ['Evoca-ն՝ զբոսաշրջության տարածաշրջանային ֆորումի գլխավոր գործընկեր', '22.10.2024',null,'https://www.evoca.am/images-cache/news/1/17296009856437/510x383.png'],
  ['Վճարիր Evoca Mastercard-ով և ստացիր 30% զեղչ Glovo-ում', '14.10.2024',null,'https://www.evoca.am/images-cache/news/1/17289080193428/510x383.png'],

  ['Առաջարկ Evoca Visa բոլոր քարտապաններին', '11.10.2024',null,'https://www.evoca.am/images-cache/news/1/1728652233604/510x383.png'],
  ['Evocabank-ը՝ DigiTec24-ում', '07.10.2024',null,'https://www.evoca.am/images-cache/news/1/17278731436243/510x383.png'],
  ['Evocabank՝ լավագույն ՓՄՁ բանկը Հայաստանում', '03.10.2024',null,'https://www.evoca.am/images-cache/news/1/17279621060614/510x383.png'],
  ['Evoca-ն ներգրավել է 10.35 մլն ԱՄՆ դոլարին համարժեք դրամ Symbiotics Investments-ից', '03.10.2024',null,'https://www.evoca.am/images-cache/news/1/17279603303089/510x383.png'],
], 'oaao bbap ppcb bpoc obcp abnn nnab opop poab');




// Հաջորդ էջերը ավելացնելու համար՝ սարքիր page7 = build(7, [...]) և ավելացրու ցուցակի մեջ։
export const newsPages = [page1, page2, page3, page4, ];

// Էջերի քանակը ավտոմատ հաշվվում է՝ ինչքան էջ կա, այդքան էլ pagination-ում կերևա։
export const TOTAL_PAGES = newsPages.length;