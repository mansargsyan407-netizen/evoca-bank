// translations.PaymentsPage.js — «Ակնթարթային վճարումներ» (Online payment) էջի թարգմանությունները
// Ձևաչափ՝ "հայերեն տեքստ": ["русский", "English"]

const PAIRS = {
  /* ---------- Header / generic UI ---------- */
  "Online payment": ["Онлайн-платежи", "Online payment"],
  "Պատմություն": ["История", "History"],
  "Գլխավոր": ["Главная", "Home"],
  "Շարունակել": ["Продолжить", "Continue"],

  /* ---------- Main categories ---------- */
  "Միջազգային բջջային օպերատորներ": ["Международные мобильные операторы", "International mobile operators"],
  "Կոմունալ վճարումներ": ["Коммунальные платежи", "Utility payments"],
  "Ինտերնետ և TV": ["Интернет и ТВ", "Internet and TV"],
  "ՃՈ վճարներ": ["Платежи ГАИ (дорожная полиция)", "Traffic police payments"],
  "Վարկային կազմակերպություններ": ["Кредитные организации", "Credit organisations"],
  "Միջոցառումներ": ["Мероприятия", "Events"],

  /* ---------- EVOCABANK ---------- */
  "Վարկի մարում": ["Погашение кредита", "Loan repayment"],
  "Հաշվի համալրում": ["Пополнение счёта", "Account top-up"],
  "Քարտի համալրում": ["Пополнение карты", "Card top-up"],
  "Վարկի մայր գումարի վաղաժամկետ մարում": ["Досрочное погашение основной суммы кредита", "Early repayment of the loan principal"],
  "Հերթական մարում": ["Очередной платёж", "Regular repayment"],

  /* ---------- International ---------- */
  "Վրացական": ["Грузинские", "Georgian"],
  "Ռուսական": ["Российские", "Russian"],
  "Ջեոսել": ["Geocell", "Geocell"],
  "Մագթի Բանի": ["Magti Bani", "Magti Bani"],
  "Մագթի": ["Magti", "Magti"],
  "Բիլայն Ռուսաստան": ["Билайн Россия", "Beeline Russia"],

  /* ---------- Utility ---------- */
  "Հեռախոս": ["Телефон", "Telephone"],
  "Լույս": ["Электричество", "Electricity"],
  "Ջուր": ["Вода", "Water"],
  "Գազի սպառում": ["Потребление газа", "Gas consumption"],
  "Գազի սպասարկում": ["Обслуживание газа", "Gas servicing"],
  "Ֆիքսված հեռախոսակապ": ["Стационарная телефонная связь", "Fixed-line telephony"],
  "Ղարաբաղ Տելեկոմ ֆիքսված հեռախոսակապ": ["Стационарная связь «Карабах Телеком»", "Karabakh Telecom fixed-line telephony"],

  /* ---------- Internet & TV ---------- */
  "Team ինտերնետ": ["Team Интернет", "Team Internet"],

  /* ---------- Police ---------- */
  "Արագաչափեր և տեսախցիկներ": ["Радары и камеры", "Speed cameras and cameras"],

  /* ---------- Loan organisations (ՈՒՎԿ = universal credit organisation) ---------- */
  "ԲԼԵՍՍ ՈՒՎԿ": ["БЛЕСС УКО", "BLESS UCO"],
  "Պրեմիում Կրեդիտ ՈՒՎԿ": ["Премиум Кредит УКО", "Premium Credit UCO"],
  "ՖԻՆՔԱ ՈՒՎԿ": ["ФИНКА УКО", "FINCA UCO"],
  "Միկրո Կապիտալ ՈՒՎԿ": ["Микро Капитал УКО", "Mikro Capital UCO"],

  /* ---------- Form field labels ---------- */
  "* Վարկային պայմանագրի համար": ["* Номер кредитного договора", "* Loan agreement number"],
  "Հաշվեհամար": ["Номер счёта", "Account number"],
  "Քարտի համար": ["Номер карты", "Card number"],
  "* Հեռախոսահամար": ["* Номер телефона", "* Phone number"],
  "Հեռախոսահամար": ["Номер телефона", "Phone number"],
  "Բաժանորդի համար": ["Номер абонента", "Subscriber number"],
  "Հեռախոս ֆիքս./բջջ.": ["Телефон стац./моб.", "Phone landline/mobile"],
  "* Բաժանորդի Id": ["* ID абонента", "* Subscriber ID"],
  "* Բաժանորդի ID / Հեռ.": ["* ID абонента / тел.", "* Subscriber ID / phone"],
  "* Բաժանորդի ID համար": ["* Номер ID абонента", "* Subscriber ID number"],
  "* Որոշման համար": ["* Номер постановления", "* Decision number"],
  "* Պայմանագրի համար / ՀԾՀ": ["* Номер договора / ПСН", "* Agreement number / PSN"],
  "* Պայմանագրի համար": ["* Номер договора", "* Agreement number"],

  /* ---------- Footer ---------- */
  "Բանկը վերահսկվում է ՀՀ ԿԲ-ի կողմից": ["Банк находится под надзором ЦБ РА", "The Bank is supervised by the CBA"],
  "ք. Երևան, 0010, Հանրապետության 44/2": ["г. Ереван, 0010, Республики 44/2", "44/2 Hanrapetutyan, Yerevan, 0010"],
};

export const ruPayments = Object.fromEntries(Object.entries(PAIRS).map(([k, v]) => [k, v[0]]));
export const enPayments = Object.fromEntries(Object.entries(PAIRS).map(([k, v]) => [k, v[1]]));