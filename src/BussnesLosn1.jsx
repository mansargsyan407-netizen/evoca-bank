import { useRef, useState } from "react";
import {
  RefreshCw,
  DollarSign,
  Euro,
  ChevronLeft,
  ChevronRight,
  Home,
  Phone,
  FileText,
  Briefcase,
  Zap,
  Landmark,
  DoorOpen,
  SunMedium,
  Gift,
  Search,
  RotateCcw,
  CreditCard,
  Factory,
  Shirt,
  TrendingUp,
} from "lucide-react";
import { Link } from 'react-router-dom';

// Small inline social icons (lucide-react no longer ships brand/logo icons)
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} {...props}>
    <path d="M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-.95.27-1.6 1.63-1.6h1.74V3.5c-.3-.04-1.33-.13-2.53-.13-2.5 0-4.22 1.53-4.22 4.34v2.42H7.3v3.3h2.85V22h3.35Z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} {...props}>
    <path d="M21 5.9c-.66.3-1.36.5-2.1.6a3.6 3.6 0 0 0 1.6-2 7.3 7.3 0 0 1-2.3.9 3.6 3.6 0 0 0-6.2 3.3A10.2 10.2 0 0 1 4.7 4.9a3.6 3.6 0 0 0 1.1 4.8 3.6 3.6 0 0 1-1.6-.45v.05a3.6 3.6 0 0 0 2.9 3.5 3.6 3.6 0 0 1-1.6.06 3.6 3.6 0 0 0 3.36 2.5A7.3 7.3 0 0 1 3 16.6a10.3 10.3 0 0 0 5.6 1.6c6.7 0 10.4-5.6 10.4-10.4v-.5c.7-.5 1.3-1.2 1.8-1.9Z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={16} height={16} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const stats = [
  { value: "60 ամիս", label: "Ժամկետ" },
  { value: "30 մլն Դ", label: "Սահմանաչափը կամ համարժեք արտարժույթ" },
  { value: "9.22%-17.89%", label: "Տարեկան տոկոսադրույք" },
];

const purposes = [
  "Շրջանառու միջոցների համալրման,",
  "Հիմնական միջոցների ձեռքբերման,",
  "Ընթացիկ ծախսերի ֆինանսավորման,",
  "Կրեդիտորական պարտքերի մարման,",
  "և այլ բիզնես նպատակների համար:",
];

const terms = [
  { label: "ԱՌԱՆՑ", rest: "ֆինանսական վերլուծության," },
  { label: "ԱՌԱՆՑ", rest: "գրավի," },
  { label: "ԱՌԱՆՑ", rest: "հայտի ուսումնասիրության վճարի," },
  { label: "ՄԻԱՅՆ", rest: "երաշխավորությամբ" },
];

// Other loans shown in the "Այլ վարկեր" carousel (kept in sync with BussnesPage.jsx)
const otherLoans = [
  {
    icon: Zap,
    img: "https://www.evoca.am/images-cache/loans/1/16148706367372/415x261.jpg",
    title: "KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում",
    link: "/business/loans/kfw-green-finance",
  },
  {
    icon: Landmark,
    img: "https://www.evoca.am/images-cache/loans/1/16394873850552/415x261.png",
    title: "KFW բանկի կողմից ՓՄՁ-ների ֆինանսավորում",
    link: "/business/loans/kfw-sme-finance",
  },
  {
    icon: Briefcase,
    img: "https://www.evoca.am/images-cache/loans/1/16148637167789/415x261.jpg",
    title: "Խոշոր և ՓՄՁ բիզնես վարկ",
    link: "/business/loans/sme",
  },
  {
    icon: RefreshCw,
    img: "https://www.evoca.am/images-cache/loans/1/17822121684763/415x261.png",
    title: "Բիզնես վարկերի վերաֆինանսավորում",
    link: "/business/loans/business-refinancing",
  },
  {
    icon: Shirt,
    img: "https://www.evoca.am/images-cache/loans/1/17749381045652/415x261.png",
    title: "Տեքստիլ ոլորտում իսկ նպատակային ուղղված վարկ",
    link: "/business/loans/textile",
  },
  {
    icon: FileText,
    img: "https://www.evoca.am/images-cache/loans/1/17848707149538/415x261.png",
    title: "Պարտատոմսերով ապահովված վարկ",
    link: "/business/loans/bond-secured",
  },
  {
    icon: DoorOpen,
    img: "https://www.evoca.am/images-cache/loans/1/1614870243661/415x261.jpg",
    title: "Evoca GO",
    link: "/business/loans/evoca-go",
  },
  {
    icon: SunMedium,
    img: "https://www.evoca.am/images-cache/loans/1/16148681592638/415x261.jpg",
    title: "Վարկեր ԳՀՀ - Էներգաարդյունավետություն ՓՄՁ-ների համար ծրագիր",
    link: "/business/loans/gff-energy",
  },
  {
    icon: Gift,
    img: "https://www.evoca.am/images-cache/loans/1/16142658362638/415x261.jpg",
    title: "Ավանդի գրավով ապահովված վարկ / վարկային սահմանաչափ",
    link: "/business/loans/deposit-secured",
  },
  {
    icon: Search,
    img: "https://www.evoca.am/images-cache/loans/1/1614869229831/415x261.jpg",
    title: "Պարզ բիզնես վարկ",
    link: "/business/loans/simple-business",
  },
  {
    icon: RotateCcw,
    img: "https://www.evoca.am/images-cache/loans/1/16148678149192/415x261.jpg",
    title: "Հաշվի վարկավորում",
    link: "/business/loans/account-credit",
  },
  {
    icon: CreditCard,
    img: "https://www.evoca.am/images-cache/loans/1/16148665659945/415x261.jpg",
    title: "Վարկային գիծ",
    link: "/business/loans/credit-line",
  },
  {
    icon: Factory,
    img: "https://www.evoca.am/images-cache/loans/1/16148696068365/415x261.jpg",
    title: "Արտադրողականության խթանման ծրագրի ներքո վարկ (գործում է մինչև 31.12.2026թ.)",
    link: "/business/loans/productivity-program",
  },
];

export default function BussnesLosn1() {
  const [activeTab, setActiveTab] = useState("about");
  const scrollerRef = useRef(null);

  const scroll = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Top utility bar */}
      <div className="border-b border-slate-100">
    
      </div>

      

      {/* Section banner */}
      <div className="bg-purple-700">
        <div className="mx-auto max-w-6xl px-6">
          <span className="inline-block bg-purple-900/40 px-5 py-3 text-sm font-medium text-white">
            Բիզնես վարկեր
          </span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-slate-50">
        {/* social rail */}
        <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 flex-col gap-4 border border-slate-200 bg-white p-2 md:flex">
          <FacebookIcon className="text-slate-500 hover:text-purple-700" />
          <TwitterIcon className="text-slate-500 hover:text-purple-700" />
          <InstagramIcon className="text-slate-500 hover:text-purple-700" />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 py-14 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Արագ բիզնես վարկ/վարկային գիծ
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
              Արագ ֆինանսավորում Ձեր բիզնեսի զարգացման համար միայն երաշխավորությամբ և ցածր
              տոկոսադրույքով:
            </p>
          </div>
          <div className="flex h-56 items-center justify-center rounded-2xl bg-white/60 sm:h-64">
         <img src="	https://www.evoca.am/images-cache/loans/1/17721008940365/560x400.png" alt="" />
          </div>
        </div>
      </div>

      {/* Back + breadcrumb */}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 pt-5 text-sm">
        <a href="#" className="flex items-center gap-1 font-medium text-purple-700 hover:text-purple-800">
          <ChevronLeft size={14} />
          Վերադառնալ
        </a>
        <div className="flex items-center gap-2 text-slate-400">
          <Home size={14} />
          <ChevronRight size={12} />
          <span>Բիզնես</span>
          <ChevronRight size={12} />
          <span>Վարկեր</span>
          <ChevronRight size={12} />
          <span>Բիզնես վարկեր</span>
          <ChevronRight size={12} />
          <span className="text-slate-600">Արագ բիզնես վարկ/վարկային գիծ</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <div className="flex gap-8 border-b border-slate-200 text-sm font-medium">
          <button
            onClick={() => setActiveTab("about")}
            className={`-mb-px border-b-2 pb-3 transition ${
              activeTab === "about"
                ? "border-purple-700 text-purple-700"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            Վարկի մասին
          </button>
          <button
            onClick={() => setActiveTab("terms")}
            className={`-mb-px border-b-2 pb-3 transition ${
              activeTab === "terms"
                ? "border-purple-700 text-purple-700"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            Պայմաններ
          </button>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
          {/* Left: text content */}
          <div className="text-sm leading-relaxed text-slate-700">
            {activeTab === "about" ? (
              <>
                <p>
                  Evocabank-ի Արագ բիզնես վարկ/վարկային գիծը այն բիզնեսների համար է, որոնք
                  ցանկանում են արագ ներդրումներ առանց ավելորդ փաստաթղթաշրջանառության և բարդ
                  ընթացակարգերի:
                </p>

                <h3 className="mt-6 font-semibold text-slate-900">
                  Արագ բիզնես վարկ, վարկային գիծ հարմար է՝
                </h3>
                <ul className="mt-3 space-y-2">
                  {purposes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-6 font-semibold text-slate-900">
                  Վարկը/վարկային գիծը տրամադրվում է՝
                </h3>
                <ul className="mt-3 space-y-2">
                  {terms.map((item) => (
                    <li key={item.rest} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-700" />
                      <span>
                        <span className="font-semibold text-purple-700">{item.label}</span>{" "}
                        {item.rest}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6">
                  Անկախ նրանից՝ Evocabank-ի հաճախորդ եք, թե ոչ, եթե ունեք գործող բիզնես և հստակ
                  նպատակ, վարկը, վարկային գիծը հենց Ձեզ համար է:
                </p>

                <p className="mt-6">
                  Ամենայն նրանից՝ Evocabank-ի հաճախորդ եք, թե ոչ, եթե ունեք գործող բիզնես և
                  հստակ նպատակ, վարկը, վարկային գիծը հենց Ձեզ համար է:
                </p>
              </>
            ) : (
              <>
                <h3 className="font-semibold text-slate-900">Հիմնական պայմաններ</h3>
                <ul className="mt-3 space-y-2">
                  {stats.map((s) => (
                    <li key={s.label} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-700" />
                      <span>
                        <span className="font-semibold text-purple-700">{s.value}</span> —{" "}
                        {s.label}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6">
                  Վարկի/վարկային գծի վերջնական պայմանները սահմանվում են Բանկի կողմից՝ հաճախորդի
                  ֆինանսական վիճակի և վարկունակության գնահատման հիման վրա:
                </p>
              </>
            )}
          </div>

          {/* Right: sticky stats card */}
          <aside className="h-fit rounded-2xl border border-slate-100 bg-slate-50/60 p-6 lg:sticky lg:top-6">
            <div className="mb-6 flex gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-700 text-white">
                <RefreshCw size={16} />
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-700 text-white">
                <DollarSign size={16} />
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-700 text-white">
                <Euro size={16} />
              </span>
            </div>

            <div className="divide-y divide-slate-200">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                  <div className="text-lg font-bold text-purple-700">{s.value}</div>
                  <div className="max-w-[160px] text-right text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>

            <button className="mt-6 w-full rounded-full bg-purple-700 py-3 text-sm font-semibold text-white transition hover:bg-purple-800">
              Դիմել հիմա
            </button>
          </aside>
        </div>

   {/* Other loans carousel */}
        <section className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Այլ վարկեր</h2>
            <div className="flex gap-2">
              <button
                onClick={() => scroll(-1)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-purple-700 hover:text-purple-700"
                aria-label="Նախորդ"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll(1)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-purple-700 hover:text-purple-700"
                aria-label="Հաջորդ"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {otherLoans.map(({ icon: Icon, img, title, link }) => (
              <Link
                key={title}
                to={link}
                className="group w-56 shrink-0"
              >
                <div className="h-40 w-full overflow-hidden rounded-lg bg-slate-100 transition group-hover:opacity-90">
                  {img ? (
                    <img
                      src={img}
                      alt={title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Icon size={40} className="text-purple-700" strokeWidth={1.5} />
                    </div>
                  )}
                </div>
                <p className="mt-3 text-sm font-semibold leading-snug text-slate-800 group-hover:text-purple-700">
                  {title}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

    
      {/* 5. Օնլայն և մոբայլ բանկինգ Banner */}
      <section className="w-full bg-[#6b21a8] text-white py-12 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="w-full lg:w-1/2 flex items-center justify-center gap-4">
            <div className="relative w-full max-w-[420px]">
              <div className="relative rounded-t-xl border-[8px] border-b-0 border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden aspect-[16/10]">
                <iframe
                  src="https://www.youtube.com/embed/KwAgMHEx8ys"
                  title="EvocaTOUCH Video"
                  className="w-full h-full border-0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-[108%] -translate-x-[4%] h-2.5 bg-neutral-700 rounded-b-lg border-t border-neutral-600 shadow-md"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-5">
            <h2 className="text-2xl md:text-3xl font-extrabold">Օնլայն և մոբայլ բանկինգ</h2>
            <p className="text-purple-100 text-xs md:text-sm leading-relaxed">
              Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է
              տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ։
            </p>

            <div>
              <button className="bg-white text-purple-900 px-6 py-2.5 rounded-full font-bold text-xs hover:bg-purple-50 transition shadow-md">
                Դառնալ հաճախորդ
              </button>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="bg-white p-1 rounded-lg shadow-md shrink-0">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://www.evoca.am"
                  alt="QR Code"
                  className="w-16 h-16"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-purple-100">
                  Ներբեռնել հավելվածները`
                </span>
                <div className="flex items-center gap-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                    className="h-7 cursor-pointer"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-7 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer Section */}
      <footer className="w-full bg-[#f8f8fa] text-[#2d2d2d] pt-10 pb-6 px-6 border-t border-gray-100 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end pb-4 border-b border-gray-200 gap-4">
          <div className="text-gray-400 text-[11px]">
            Թարմացվել է` 31/08/2026 17:46
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
          {/* Column 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-1">
              <span className="text-xl font-black text-purple-700 tracking-tight">evoca</span>
              <span className="text-xl font-black text-gray-800 tracking-tight">BANK</span>
            </div>
            <p className="text-gray-600 leading-relaxed text-[12px]">
              ք. Երևան, 0010,<br />
              Հանրապետության 44/2
            </p>
            <p className="text-gray-500 leading-normal text-[11px]">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="text-[10px] text-gray-400 pt-1">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3 text-xs">Բանկի մասին</h4>
            <p className="hover:text-purple-700 cursor-pointer">Մեր մասին</p>
            <p className="hover:text-purple-700 cursor-pointer">Ղեկավարություն</p>
            <p className="hover:text-purple-700 cursor-pointer">Բաժնետերեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Հաշվետվություններ</p>
            <p className="hover:text-purple-700 cursor-pointer">Իրավական ակտեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Սակագներ</p>
            <p className="hover:text-purple-700 cursor-pointer">Օտարվող գույք</p>
            <p className="hover:text-purple-700 cursor-pointer">Կառուցապատողներ</p>
            <p className="hover:text-purple-700 cursor-pointer">Գործընկեր ավտոսրահներ</p>
            <p className="hover:text-purple-700 cursor-pointer">Սակագների արխիվ</p>
          </div>

          {/* Column 3 */}
          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3 text-xs">Օգտակար հղումներ</h4>
            <p className="hover:text-purple-700 cursor-pointer leading-tight">
              Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)
            </p>
            <p className="hover:text-purple-700 cursor-pointer leading-tight">
              Հաճախորդի ռեզիդենտության չափանիշներ
            </p>
            <p className="hover:text-purple-700 cursor-pointer">Կարգավորում</p>
            <p className="hover:text-purple-700 cursor-pointer">Գաղտնիության քաղաքականություն</p>
            <p className="hover:text-purple-700 cursor-pointer">Ֆին. հաշտարար</p>
            <p className="hover:text-purple-700 cursor-pointer leading-tight">
              Ֆինանսական հանցագործությունների կանխարգելում
            </p>
            <p className="hover:text-purple-700 cursor-pointer leading-tight">
              Հղումներ Բանկի քարտապանների համար
            </p>
          </div>

          {/* Column 4 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-gray-900 text-xs">Այլ հղումներ</h4>
              <div className="flex gap-2 text-gray-400 text-xs">
                <span className="hover:text-purple-600 cursor-pointer">f</span>
                <span className="hover:text-purple-600 cursor-pointer">📷</span>
                <span className="hover:text-purple-600 cursor-pointer">p</span>
                <span className="hover:text-purple-600 cursor-pointer">▶</span>
                <span className="hover:text-purple-600 cursor-pointer">in</span>
              </div>
            </div>

            <p className="hover:text-purple-700 cursor-pointer">EvocaONLINE</p>
            <p className="hover:text-purple-700 cursor-pointer">Պահատուփեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Հաճախ տրվող հարցեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Հայտարարություններ</p>
            <p className="hover:text-purple-700 cursor-pointer">Dibrary</p>
            <p className="hover:text-purple-700 cursor-pointer">Բուկլետներ</p>

            <div className="pt-2 space-y-1">
              <p className="text-[#6b21a8] font-bold hover:underline cursor-pointer">
                Բանկի հասցեները և աշխատաժամերը
              </p>
              <p className="text-[#6b21a8] font-bold hover:underline cursor-pointer">
                Կապ մեզ հետ
              </p>
              <p className="text-[#6b21a8] font-bold text-xs">+374 10 605555</p>
              <p className="text-[#6b21a8] font-extrabold text-sm">8444</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200/60 pt-4 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400">
          <p className="max-w-2xl">
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանություն...
          </p>
          <div className="flex gap-4">
            <span className="font-bold text-gray-500">arca</span>
            <span className="font-bold text-gray-500">fininfo</span>
          </div>
        </div>

        {/* Floating Online Chat Widget */}
        <div className="fixed bottom-4 right-4 z-50 flex items-center">
          <button className="bg-[#6b21a8] text-white font-bold text-xs px-4 py-2 rounded-l-full shadow-lg hover:bg-purple-800 transition">
            Գրեք մեզ, մենք օնլայն ենք !
          </button>
          <div className="bg-purple-500 p-2 rounded-full text-white shadow-lg -ml-2 cursor-pointer">
            💬
          </div>
        </div>
      </footer>
    </div>
   
  );
}