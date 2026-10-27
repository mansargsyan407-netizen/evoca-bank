// translations.evocapower.js — EvocaPOWER մանրամասն էջի թարգմանությունները
// Ձևաչափ՝ "հայերեն տեքստ": ["русский", "English"]

const PAIRS = {
  "Վերադառնալ": ["Назад", "Back"],
  "Վարկի մասին": ["О кредите", "About the loan"],
  "Պայմաններ": ["Условия", "Terms"],
  "Այլ վարկեր": ["Другие кредиты", "Other loans"],
  "Մինչև": ["До", "Up to"],

  "EvocaPOWER-ի միջոցով կարող ես տեղադրել արևային ֆոտովոլտային կայաններ կամ արևային ջրատաքացուցիչներ, և որ ամենակարևորն է՝": [
    "С помощью EvocaPOWER ты можешь установить солнечные фотоэлектрические станции или солнечные водонагреватели и, что самое важное, —",
    "With EvocaPOWER you can install solar photovoltaic systems or solar water heaters, and most importantly:"
  ],
  "ԱՌԱՆՑ": ["БЕЗ", "WITHOUT"],
  "կանխավճարի": ["первоначального взноса", "a down payment"],
  "գրավի": ["залога", "collateral"],
  "բանկ այցելելու անհրաժեշտության": ["необходимости посещать банк", "the need to visit the bank"],
  "Այս վարկատեսակից օգտվելու համար՝ հարկավոր է այցելել մեր գործընկերների խանութ-սրահներ, ընտրել համապատասխան պրոդուկտը և անմիջապես այնտեղից դիմել վարկի համար: Իսկ հաստատումը կկատարվի մեր կողմից՝ հաշված րոպեների ընթացքում:": [
    "Чтобы воспользоваться этим видом кредита, нужно посетить магазины-салоны наших партнёров, выбрать подходящий продукт и сразу же там подать заявку на кредит. А одобрение мы дадим в течение считаных минут.",
    "To use this loan, visit our partners' stores, choose the product you need and apply for the loan right there. We will confirm the approval within minutes."
  ],
  "Բայց": ["Но у кредита", "But the advantages of"],
  "վարկի առավելություններն այսքանով չեն ավարտվում. դու կարող ես ձեռք բերել արևային էներգիայի համակարգեր մեր վստահելի գործընկեր մատակարարներից, որի արդյունքում՝ վարկի ամսական մարումները կարող են ամբողջությամբ փոխհատուցվել քո էլեկտրաէներգիայի խնայողության հաշվին:": [
    "есть и другие преимущества: ты можешь приобрести системы солнечной энергии у наших надёжных партнёров-поставщиков, в результате чего ежемесячные платежи по кредиту могут быть полностью компенсированы за счёт экономии твоей электроэнергии.",
    "loan don't end there: you can buy solar energy systems from our trusted partner suppliers, so your monthly loan repayments can be fully offset by your electricity savings."
  ],

  "Evoca աշխատավարձային փաթեթի շրջականակում տրամադրվող վարկ": ["Кредит в рамках зарплатного пакета Evoca", "Loan under the Evoca salary package"],
  "Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ": ["Жилищный ипотечный кредит для физических лиц-нерезидентов", "Residential mortgage loan for non-resident individuals"],

  "Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:": [
    "Evocabank — это банк, предоставляющий быстрые, простые и инновационные услуги и отличающийся активным применением новейших информационных технологий.",
    "Evocabank is a bank providing fast, simple and innovative services, distinguished by the active use of the latest information technologies."
  ],
  "Սկանավորեք QR կոդը EvocaTOUCH հավելվածը ներբեռնելու համար:": ["Отсканируйте QR-код, чтобы скачать приложение EvocaTOUCH.", "Scan the QR code to download the EvocaTOUCH app."],
  "Գրեք մեզ, մենք օնլայն ենք !": ["Напишите нам, мы онлайн!", "Write to us, we are online!"],
  "Թարմացվել է՝ 28/08/2026 17:20": ["Обновлено: 28/08/2026 17:20", "Updated: 28/08/2026 17:20"],
  "Հարգելի' այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական կայք տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: \"Էվոկաբանկ\" ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:": [
    "Уважаемый посетитель! При обнаружении расхождений информации сайта на разных языках, а также неполной версии сайта на русском и английском языках просим руководствоваться армянской версией. ЗАО «Эвокабанк» не несёт ответственности за достоверность и надёжность содержания сайтов третьих лиц, ссылки на которые размещены на его сайте, за размещённую там рекламу, а также за возможные последствия использования информации, размещённой третьими лицами на этих сайтах.",
    "Dear visitor, in case of discrepancies between the information on this website in different languages, or if you find an incomplete version of the website in Russian or English, please refer to the Armenian version. Evocabank CJSC is not responsible for the accuracy and reliability of the content of third-party websites linked from its website, for the advertisements placed there, or for the possible consequences of using information posted on those websites by third parties."
  ],
};

export const ruPower = Object.fromEntries(Object.entries(PAIRS).map(([k, v]) => [k, v[0]]));
export const enPower = Object.fromEntries(Object.entries(PAIRS).map(([k, v]) => [k, v[1]]));