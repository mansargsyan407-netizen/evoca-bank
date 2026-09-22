import { Link } from "react-router-dom";
import {
  TrendingUp,
  Shirt,
  RefreshCw,
  FileText,
  Briefcase,
  DoorOpen,
  SunMedium,
  Gift,
  Zap,
  Search,
  RotateCcw,
  CreditCard,
  Layers,
  Factory,
  Landmark,
  ChevronRight,
  Home,
  Phone,
  MapPin,
  HelpCircle,
  Globe,
  Menu,
  ChevronDown,
} from "lucide-react";

const loans = [
  {
    icon: TrendingUp,
    img: "https://www.evoca.am/images-cache/loans/1/17721008940374/415x261.png",
    title: "Առաջ բիզնես վարկ/վարկային գիծ",
    description:
      "Ապահովագրված կամ չապահովագրված վարկ ցանկացած գործարար նպատակների համար, ընդլայնման կամ շրջանառու միջոցների ձեռքբերման նպատակով։",
    stats: [
      { label: "Ժամկետ", value: "60 ամիս" },
      { label: "Գումար", value: "30 մլն Դ" },
      { label: "Տարեկան անվանական տոկոսադրույք", value: "9.22%-17.89%" },
    ],
    link: "/business/loans/quick-business-loan",
  },
  {
    icon: Shirt,
    img: "https://www.evoca.am/images-cache/loans/1/17749381045652/415x261.png",
    title: "Տեքստիլ ոլորտում իսկ նպատակային ուղղված վարկ",
    description:
      "Evocabank-ը տրամադրում է բիզնես վարկ տեքստիլ ոլորտի ներկայացուցիչներին՝ Հայաստանում արտադրական գործունեություն ծավալելու համար։",
    stats: [
      { label: "Ժամկետ", value: "36 ամիս" },
      { label: "Գումար", value: "500 մլն Դ" },
      { label: "Տարեկան անվանական տոկոսադրույք", value: "8%" },
    ],
    link: "/business/loans/textile",
  },
  {
    icon: RefreshCw,
    img: "https://www.evoca.am/images-cache/loans/1/17822121684763/415x261.png",
    title: "Բիզնես վարկերի վերաֆինանսավորում",
    description:
      "Ներավորինեք Ձեր բիզնես վարկը Evocabank, ստացեք վարկի վերաֆինանսավորում և իրացուցիչ ֆինանսավորում ավելի հարմար պայմաններով։",
    stats: [
      { label: "Վերաֆինանսավորում", value: "36-120 ամիս" },
      { label: "Գումար", value: "15մլն-500մլն" },
      { label: "Սկսած ՀՀ դրամ", value: "12%" },
      { label: "Սկսած ԱՄՆ դոլար", value: "9%" },
    ],
    link: "/business/loans/business-refinancing",
  },
  { 
    icon: FileText,
    img: "https://www.evoca.am/images-cache/loans/1/17848707149538/415x261.png",
    title: "Պարտատոմսերով ապահովված վարկ",
    description:
      "Ստացեք վարկ՝ Բանկի պարտատոմսերի գրավով և շարունակեք զարգացնել Ձեր բիզնեսը։",
    stats: [],
    link: "/business/loans/bond-secured",
  },
  {
    icon: Briefcase,
    img: "https://www.evoca.am/images-cache/loans/1/16148637167789/415x261.jpg",
    title: "Խոշոր և ՓՄՁ բիզնես վարկ",
    description:
      "Զարգացրեք Ձեր բիզնեսը Evocabank-ի հետ փոխշահավետ պայմաններով։",
    stats: [
      { label: "Նվազագույնը", value: "4 մլրդ Դ" },
      { label: "Նվազագույնը", value: "180 ամիս" },
      { label: "Տոկոսադրույք", value: "8.2%-ից" },
    ],
    link: "/business/loans/sme",
  },
  {
    icon: DoorOpen,
    img: "https://www.evoca.am/images-cache/loans/1/1614870243661/415x261.jpg",
    title: "Evoca GO",
    description:
      "Օգտվեք Եվրոպական Ներդրումային Բանկի (ԵԻԲ) կողմից ֆինանսավորվող ծրագրի շրջանակներում վարկավորման փոփոխական հնարավորություններից։",
    stats: [
      { label: "Սահմանաչափ", value: "500 մլն Դ" },
      { label: "Մարման ժամկետ", value: "90 ամիս" },
      { label: "Տոկոսադրույք", value: "10.5 % Դ" },
      { label: "Ապառ գումարի արտոնյալ ժամկետ (ոչ պարտադիր)", value: "30 ամիս" },
    ],
    link: "/business/loans/evoca-go",
  },
  {
    icon: SunMedium,
    img: "https://www.evoca.am/images-cache/loans/1/16148681592638/415x261.jpg",
    title: "Վարկեր ԳՀՀ - Էներգաարդյունավետություն ՓՄՁ-ների համար ծրագիր",
    description:
      "Եթե Դուք ցանկանում եք ձեռք բերել էներգասարքավորումներ և մեքենաներ կամ իրականացնել այլ էներգաարդյունավետության ներդրումներ, այս վարկածրագիրը Ձեզ համար է։",
    stats: [
      { label: "Սահմանաչափ", value: "500 մլն Դ" },
      { label: "Մարման ժամկետ", value: "5 տարի" },
      { label: "Տոկոսադրույք", value: "9%-ից" },
    ],
    link: "/business/loans/gff-energy",
  },
  {
    icon: Gift,
    img: "https://www.evoca.am/images-cache/loans/1/16142658362638/415x261.jpg",
    title: "Ավանդի գրավով ապահովված վարկ / վարկային սահմանաչափ",
    description:
      "Մի՛ օգտագործեք կուտակված խնայողությունները, Ձեր ֆինանսական խնդիրները կարգավորելու համար մենք ավելի շահավետ տարբերակ ունենք։",
    stats: [
      { label: "Ավանդի գումարի միջին", value: "95%" },
      { label: "Պարտատոմսի գումարի միջին", value: "80%" },
    ],
    link: "/business/loans/deposit-secured",
  },
  {
    icon: Zap,
    img: "https://www.evoca.am/images-cache/loans/1/16148706367372/415x261.jpg",
    title: "KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում",
    description:
      "Եթե ցանկանում եք իրականացնել էներգաարդյունավետ և էներգախնայող ներդրումներ Ձեր բիզնեսի ծախսերը կրճատելու և արդյունավետությունը բարձրացնելու, այս ֆինանսավորումը Ձեզ համար է։",
    stats: [
      { label: "Առավելագույնի միջին", value: "10 մլն Դ" },
      { label: "Տոկոսադրույք ԵՀ ռեժիմում", value: "9.5%" },
      { label: "Տոկոսադրույք ԵՆՆ ռեժիմում", value: "10.25%" },
      { label: "Մարման ժամկետ", value: "120 ամիս" },
    ],
    link: "/business/loans/kfw-green-finance",
  },
  {
    icon: Search,
    img: "https://www.evoca.am/images-cache/loans/1/1614869229831/415x261.jpg",
    title: "Պարզ բիզնես վարկ",
    description:
      "Ստացեք Պարզ բիզնես վարկ՝ անշարժ գույքի ապահովմամբ և ցածր տոկոսադրույքով: Վարկի տրամադրման որոշումը կայացվում է ընդամենը 2-4 աշխատանքային օրվա ընթացքում։",
    stats: [
      { label: "Մինչև", value: "50 մլն Դ" },
      { label: "Մինչև", value: "60 ամիս" },
      { label: "Տոկոսադրույք", value: "7.5%-ից" },
    ],
    link: "/business/loans/simple-business",
  },
  {
    icon: RotateCcw,
    img: "https://www.evoca.am/images-cache/loans/1/16148678149192/415x261.jpg",
    title: "Հաշվի վարկավորում",
    description:
      "Հանդիսանում եք Evocabank-ի հաշվետեր առնվազն 1 տարի, ուրեմն Evocabank-ը կօգնի հոգալ Ձեր բիզնեսի ընթացիկ ծախսերը։",
    stats: [
      { label: "Առավելագույնը", value: "500 մլն Դ" },
      { label: "Առավելագույնը", value: "12 ամիս" },
      { label: "Տոկոսադրույք", value: "7%-ից" },
    ],
    link: "/business/loans/account-credit",
  },
  {
    icon: CreditCard,
    img: "https://www.evoca.am/images-cache/loans/1/16148665659945/415x261.jpg",
    title: "Վարկային գիծ",
    description:
      "Եթե Դուք ունեք կազմակերպություն կամ անհատ ձեռնարկատեր եք և ցանկանում եք մշտապես ունենալ հասանելի վարկային միջոցներ, ապա կարող եք օգտվել Evocabank-ի վերականգնվող և չվերականգնվող վարկային գծերից։",
    stats: [
      { label: "Մինչև", value: "1.5 մլրդ Դ" },
      { label: "Մինչև", value: "5 տարի" },
      { label: "Տոկոսադրույք", value: "6%-ից" },
    ],
    link: "/business/loans/credit-line",
  },
  {
    icon: Factory,
    img: "https://www.evoca.am/images-cache/loans/1/16148696068365/415x261.jpg",
    title:
      "Արտադրողականության խթանման ծրագրի ներքո վարկ (գործում է մինչև 31.12.2026թ.)",
    description:
      "Մասնակցեք ֆինանսավորմանը՝ Ձեր բիզնեսը արդիականացնելու և արտադրողականությունը խթանելու նպատակով։",
    stats: [
      { label: "Մինչև", value: "1 մլրդ Դ" },
      { label: "Մինչև", value: "120 ամիս" },
      { label: "Տոկոսադրույք", value: "6%" },
      { label: "Սուբսիդավորում", value: "6%" },
    ],
    link: "/business/loans/productivity-program",
  },
  {
    icon: Landmark,
    img: "https://www.evoca.am/images-cache/loans/1/16394873850552/415x261.png",
    title: "KFW բանկի կողմից ՓՄՁ-ների ֆինանսավորում",
    description:
      "Կատարեք Ձեր կապիտալ ներդրումները և իրականացրեք բիզնես գործունեության ընդլայնման պահանջները Evocabank-ի հետ։",
    stats: [
      { label: "Մինչև", value: "160 մլն Դ" },
      { label: "Մինչև", value: "60 ամիս" },
      { label: "Տոկոսադրույք", value: "9,5%-ից" },
    ],
    link: "/business/loans/kfw-sme-finance",
  },
];

export default function BussnesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* HEADER SECTION (Matching 1st Image) */}
      <header className="border-b border-gray-100 bg-white">
     

        {/* Main navigation */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          

          <nav className="hidden md:flex items-center space-x-8 text-sm font-bold text-gray-800">
<Link to="/business/leasing" className="hover:text-purple-700 font-extrabold">
  Լիզինգ
</Link>
<Link to="/business/trade-finance" className="hover:text-purple-700">
  Առևտրի ֆինանսավորում
</Link>
<Link
  to="/business/digital"
  className="hover:text-purple-700 font-extrabold"
>
  Դիջիթալ
</Link>
          </nav>

       
        </div>
      </header>

    

      {/* Breadcrumb */}
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-6 pt-5 text-sm text-slate-400">
        <Home size={14} />
        <ChevronRight size={12} />
        <span>Բիզնես</span>
        <ChevronRight size={12} />
        <span className="text-slate-600">Բիզնես վարկեր</span>
      </div>

      {/* Title */}
      <div className="mx-auto max-w-6xl px-6 pt-4">
        <h1 className="text-3xl font-bold text-slate-900">Բիզնես վարկեր</h1>
      </div>

      {/* Loan cards */}
      <main className="mx-auto max-w-6xl divide-y divide-slate-100 px-6 pb-20">
        {loans.map(({ icon: Icon, img, title, description, stats, link }) => (
          <section key={title} className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-[220px_1fr]">
            <div className="h-40 w-full overflow-hidden rounded-lg bg-slate-100 sm:h-full">
              {img ? (
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <Icon size={56} className="text-purple-700" strokeWidth={1.5} />
                </div>
              )}
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">
                {description}
              </p>

              {stats.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="max-w-[220px]">
                      <div className="text-xs text-slate-400">{stat.label}</div>
                      <div className="text-lg font-semibold text-purple-700">{stat.value}</div>
                    </div>
                  ))}
                </div>
              )}

              <Link
                to={link || "#"}
                className="mt-6 inline-flex items-center gap-1 rounded-full border border-purple-700 px-5 py-2 text-sm font-semibold text-purple-700 transition hover:bg-purple-700 hover:text-white"
              >
                Մանրամասն
                <ChevronRight size={14} />
              </Link>
            </div>
          </section>
        ))}
      </main>

      {/* FOOTER SECTION */}
      <footer className="bg-white border-t border-gray-200 text-xs text-gray-600 pt-10 pb-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="space-y-4">
            <span className="text-2xl font-black text-gray-900 block">
              evoca<span className="text-gray-400 font-normal">BANK</span>
            </span>
            <p className="text-gray-500">
              ք․ Երևան, 0010,<br /> Հանրապետության 44/2
            </p>
            <p className="text-[11px] text-gray-400 leading-tight">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="text-[10px] text-gray-400">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3">Բանկի մասին</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#6a0dad]">Մեր մասին</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Ղեկավարություն</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Բաժնետերեր</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հաշվետվություններ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Իրավական ակտեր</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Սակագներ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Օտարվող գույք</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Կառուցապատողներ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Գործընկեր ավտոսրահներ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Սակագների արխիվ</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3">Օգտակար հղումներ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#6a0dad]">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հաճախորդի ռեզիդենտության չափանիշներ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Կարգավորում</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Գաղտնիության քաղաքականություն</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Ֆին. հաշտարար</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Ֆինանսական հանցագործությունների կանխարգելում</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հղումներ Բանկի քարտապանների համար</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3">Այլ հղումներ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#6a0dad]">EvocaONLINE</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Պահատուփեր</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հաճախ տրվող հարցեր</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հայտարարություններ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Dibrary</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Բուկլետներ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հետադարձ կապ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Կայքի քարտեզ</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3 text-gray-500">
              <a href="#" className="hover:text-[#6a0dad]">f</a>
              <a href="#" className="hover:text-[#6a0dad]">in</a>
              <a href="#" className="hover:text-[#6a0dad]">yt</a>
            </div>

            <div className="space-y-1">
              <a href="#" className="bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded inline-block mr-2">
                App Store
              </a>
              <a href="#" className="bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded inline-block">
                Google Play
              </a>
            </div>

            <a href="#" className="text-[#6a0dad] font-bold block hover:underline">
              Բանկի հասցեները և աշխատաժամերը
            </a>

            <a href="#" className="text-[#6a0dad] font-bold block hover:underline">
              Կապ մեզ հետ
            </a>

            <div className="space-y-1 font-bold text-gray-900 text-sm">
              <p>+374 10 605555</p>
              <p className="text-[#6a0dad] text-base">8444</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 mt-8 border-t border-gray-100 flex flex-wrap justify-between items-center gap-4 text-[10px] text-gray-400">
          <p className="max-w-xl">
            Կայքում տեղադրված տեղեկատվության վերաբերյալ տարբերություններ առաջանալու դեպքում, ինչպես նաև ռուսերեն և անգլերեն լեզուներով ոչ ամբողջական լինելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով։ «Էվոկաբանկ» ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների համար։
          </p>
          <div className="flex items-center gap-4 opacity-60 grayscale hover:grayscale-0 transition">
            <span className="font-bold">fininfo</span>
            <span className="font-bold">abcfinance.am</span>
            <span className="font-bold">arca</span>
          </div>
        </div>
      </footer>

      {/* FLOATING CHAT BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <button className="bg-[#6a0dad] text-white font-bold text-xs px-5 py-3 rounded-full shadow-xl hover:bg-purple-900 transition flex items-center gap-2">
          Գրեք մեզ, մենք օնլայն ենք ․․․
        </button>
        <button className="bg-[#d8b4fe] text-[#6a0dad] p-3 rounded-full shadow-lg hover:bg-purple-300 transition">
          <Phone className="w-5 h-5 fill-current" />
        </button>
      </div>
    </div>
  );
}