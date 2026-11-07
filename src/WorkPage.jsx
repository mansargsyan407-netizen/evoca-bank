import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// Նկարը բեռնվում է Evoca-ի կայքից
import { useFirebasePublicData } from './useFirebasePublicData';

const HERO_IMG =
  "https://www.evoca.am/images-cache/menu/1/16194611253542/1920x634.jpg";

// Մենյուի տաբերը իրենց հղումներով (լինկերով)
const TABSFirebaseFallback = [
  { label: "Աշխատանք Evoca-ում", path: "/work" },
  { label: "Ուսումնական պրակտիկա", path: "/internship" },
  { label: "EvocaBRIDGE", path: "/evocabridge" },
];

const HQ = "Երևան, Գլխամասային գրասենյակ";
const HQ_S = "Երևան, Գլխամասային գրասենյակ, Սեբաստիա 108/3";

const JOBSFirebaseFallback = [
  { title: "Քարտային պրոդուկտների թվայնացման մասնագետ", date: "02.10.2026", place: HQ_S },
  { title: "ՓՄՁ վարկավորման ավագ վարկային մասնագետ", date: "02.10.2026", place: HQ },
  { title: "Վարկերի հաստատման մասնագետ (Իրավաբանական անձանց)", date: "02.10.2026", place: HQ },
  { title: "Համապատասխանության ապահովման մասնագետ", date: "28.10.2026", place: HQ },
  { title: "Ավագ Հաշվապահ", date: "02.10.2026", place: HQ },
  { title: "ԱԲ ռիսկերի կառավարման մասնագետ", date: "30.09.2026", place: HQ },
  { title: "Թվային զարգացման մասնագետ (արժեթղթային և ներդրումային պրոդուկտներ)", date: "02.10.2026", place: HQ_S },
  { title: "Արժեթղթերով գործառնությունների մասնագետ", date: "02.10.2026", place: HQ },
  { title: "Թվային ինտեգրացիաների զարգացման մասնագետ", date: "02.10.2026", place: HQ_S },
  { title: "Համակարգերի ադմինիստրատոր", date: "02.10.2026", place: HQ_S },
  { title: "Պայմանագրային ապահովման ավագ մասնագետ", date: "28.10.2026", place: HQ },
  { title: "Հիփոթեքային վարկավորման և փաստաթղթաշրջանառության մասնագետ", date: "08.10.2026", place: "Արմավիրի մարզ, Մեծամոր" },
  { title: "Վարկերի մոնիթորինգի մասնագետ", date: "09.10.2026", place: HQ },
  { title: "Նոտարական ձևակերպումների մասնագետ", date: "23.10.2026", place: HQ },
  { title: "Կառավարչի տեղակալ - ավագ վարկային մասնագետ «Դիլիջան» մասնաճյուղում", date: "28.10.2026", place: "Ք. Դիլիջան" },
  { title: "Պրոդուկտ մարքեթինգ մենեջեր", date: "20.10.2026", place: "Երևան, EvocaHUB" },
  { title: "Հաճախորդների վերլուծությունների բաժնի վերլուծաբան (բիզնես վարկավորման ուղղություն)", date: "02.10.2026", place: HQ },
  { title: "Վարկային մասնագետ", date: "28.09.2026", place: "Երևան" },
  { title: "Կոնտակտային կենտրոնի մասնագետ (Ցերեկային հերթափոխ)", date: "14.10.2026", place: HQ },
  { title: "Ցանցային ադմինիստրատոր", date: "02.10.2026", place: HQ_S },
];

/* ---------- Icons (inline SVG) ---------- */
const stroke = {
  fill: "none",
  stroke: "#6200e0",
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const ICONS = {
  motivated: (
    <svg viewBox="0 0 64 64" className="h-16 w-16">
      <circle cx="32" cy="32" r="28" fill="#efe3ff" />
      <path {...stroke} d="M22 18h20v10a10 10 0 0 1-20 0V18Z" />
      <path {...stroke} d="M22 22h-6a4 4 0 0 0 4 8M42 22h6a4 4 0 0 1-4 8" />
      <path {...stroke} d="M32 38v8M25 47h14" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 64 64" className="h-16 w-16">
      <circle cx="30" cy="34" r="24" fill="#efe3ff" />
      <circle {...stroke} cx="30" cy="34" r="18" />
      <circle {...stroke} cx="30" cy="34" r="10" />
      <circle cx="30" cy="34" r="3.5" fill="#6200e0" />
      <path {...stroke} d="M32 32 52 12M46 12h6v6" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 64 64" className="h-16 w-16">
      <circle cx="32" cy="32" r="28" fill="#efe3ff" />
      <path {...stroke} d="M40 16c6 0 8 2 8 8 0 8-8 16-16 20l-12-12c4-8 12-16 20-16Z" />
      <circle {...stroke} cx="38" cy="26" r="3" />
      <path {...stroke} d="M20 40l-4 8 8-4M14 32h-4M32 54v-4" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 64 64" className="h-16 w-16">
      <circle cx="32" cy="28" r="18" fill="#efe3ff" />
      <path
        d="M32 38 23 29a5.5 5.5 0 0 1 9-6 5.5 5.5 0 0 1 9 6l-9 9Z"
        fill="#6200e0"
      />
      <path
        d="M6 40c6-2 12 0 16 4l10 2c2 0 3 2 1 3l-8 1M58 40c-6-2-12 0-16 4"
        fill="none"
        stroke="#f4b79a"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect x="14" y="54" width="10" height="4" rx="2" fill="#6200e0" />
      <rect x="40" y="54" width="10" height="4" rx="2" fill="#6200e0" />
    </svg>
  ),
  idea: (
    <svg viewBox="0 0 64 64" className="h-16 w-16">
      <circle cx="32" cy="22" r="16" fill="#efe3ff" />
      <path {...stroke} d="M25 22a7 7 0 1 1 14 0c0 3-2 5-3 7h-8c-1-2-3-4-3-7Z" />
      <path {...stroke} d="M28 33h8M29 37h6" />
      <path d="M20 46h24l-3 12H23l-3-12Z" fill="#6200e0" />
      <rect x="18" y="43" width="28" height="4" rx="1" fill="#d8b8ff" />
    </svg>
  ),
};

const QUALITIESFirebaseFallback = [
  { icon: ICONS.motivated, label: "Մոտիվացված" },
  { icon: ICONS.target, label: "Նպատակասլաց" },
  { icon: ICONS.rocket, label: "Արագ և ճկուն" },
  { icon: ICONS.heart, label: "Իր աշխատանքը շա՜տ սիրող" },
  { icon: ICONS.idea, label: "Նորարարական և կրեատիվ լուծումներ գտնող" },
];

/* ---------- Header ---------- */
const PURPLE = "bg-[#6200e0]";

function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-[50px] max-w-6xl items-center gap-6 px-4 text-sm">
        <Link to="/careers" className="font-semibold">
          Evoca Լայֆ
        </Link>
        <Link to="/work" className="font-semibold text-[#6200e0]">
          Աշխատանք և պրակտիկա
        </Link>

      
      </div>
    </header>
  );
}

/* ---------- Footer links ---------- */
const ABOUT_LINKS = [
  ["/about", "Մեր մասին"],
  ["/management", "Ղեկավարություն"],
  ["/shareholders", "Բաժնետերեր"],
  ["/reports", "Հաշվետվություններ"],
  ["/legal", "Իրավական ակտեր"],
  ["/tariffs", "Սակագներ"],
  ["/property", "Օտարվող գույք"],
  ["/developers", "Կառուցապատողներ"],
  ["/partners", "Գործընկեր ավտոսրահներ"],
  ["/tariffs-archive", "Սակագների արխիվ"],
];

const USEFUL_LINKS = [
  ["/rights", "Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)"],
  ["/residence", "Հաճախորդի ռեզիդենտության չափանիշներ"],
  ["/regulation", "Կարգավորում"],
  ["/privacy", "Գաղտնիության քաղաքականություն"],
  ["/mediator", "Ֆին. հաշտարար"],
  ["/aml", "Ֆինանսական հանցագործությունների կանխարգելում"],
  ["/cardholders", "Հղումներ Բանկի քարտապանների համար"],
];

const OTHER_LINKS = [
  ["/safes", "Պահատուփեր"],
  ["/faq", "Հաճախ տրվող հարցեր"],
  ["/announcements", "Հայտարարություններ"],
  ["/dlibrary", "Dlibrary"],
  ["/booklets", "Բուկլետներ"],
  ["/feedback", "Հետադարձ կապ"],
  ["/sitemap", "Կայքի քարտեզ"],
];

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-right text-xs text-gray-400 font-medium mb-6">
          Թարմացվել է՝ 28/08/2026 17:20
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-1 text-2xl font-black text-gray-900">
              evoca
              <span className="text-xs font-semibold tracking-widest text-gray-500 ml-0.5">
                BANK
              </span>
            </div>
            <p className="text-xs text-gray-600 font-medium leading-relaxed">
              ք. Երևան, 0010,
              <br />
              Հանրապետության 44/2
            </p>
            <p className="text-xs text-gray-500 leading-relaxed pt-2">
              <strong>
                Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
              </strong>
            </p>
            <div className="text-[11px] text-gray-400">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Բանկի մասին</h4>
            <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
              {ABOUT_LINKS.map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-[#6c00ff]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Օգտակար հղումներ</h4>
            <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
              {USEFUL_LINKS.map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-[#6c00ff]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Այլ հղումներ</h4>
            <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
              <li>
                <a
                  href="https://evocaonline.am"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#6c00ff]"
                >
                  EvocaONLINE
                </a>
              </li>
              {OTHER_LINKS.map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-[#6c00ff]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 text-gray-400">
              <a href="#facebook" className="hover:text-[#6c00ff]">
                <i className="fab fa-facebook-f text-base"></i>
              </a>
              <a href="#instagram" className="hover:text-[#6c00ff]">
                <i className="fab fa-instagram text-base"></i>
              </a>
              <a href="#pinterest" className="hover:text-[#6c00ff]">
                <i className="fab fa-pinterest text-base"></i>
              </a>
              <a href="#youtube" className="hover:text-[#6c00ff]">
                <i className="fab fa-youtube text-base"></i>
              </a>
              <a href="#linkedin" className="hover:text-[#6c00ff]">
                <i className="fab fa-linkedin-in text-base"></i>
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="#appstore"
                className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 w-max hover:opacity-80"
              >
                <span className="text-xs font-semibold">App Store</span>
              </a>
              <a
                href="#googleplay"
                className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 w-max hover:opacity-80"
              >
                <span className="text-xs font-semibold">Google Play</span>
              </a>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <Link to="/branches" className="text-[#6c00ff] font-bold hover:underline">
                  Բանկի հասցեները և աշխատաժամերը
                </Link>
              </div>
              <div>
                <Link to="/contact" className="text-[#6c00ff] font-bold hover:underline">
                  Կապ մեզ հետ
                </Link>
              </div>
              <div className="pt-2 font-bold text-gray-800">+374 10 605555</div>
              <div className="font-extrabold text-[#6c00ff] text-sm">8444</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-gray-500 leading-normal max-w-4xl">
            Հարգելի' այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում
            անհամապատասխանության, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական
            կայք տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ"
            ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց
            ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ
            տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված
            տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
          </p>

          <div className="flex flex-wrap items-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
            <span className="text-xs font-bold text-gray-600">fininfo</span>
            <span className="text-xs font-bold text-gray-600">abcfinance.am</span>
            <span className="text-xs font-bold text-gray-600">arca</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */
const JOBS_PER_PAGE = 5;

export default function WorkPage() {
  const TABS = useFirebasePublicData('siteContent/pageData/WorkPage/TABS', TABSFirebaseFallback);
  const JOBS = useFirebasePublicData('siteContent/pageData/WorkPage/JOBS', JOBSFirebaseFallback);
  const QUALITIES = useFirebasePublicData('siteContent/pageData/WorkPage/QUALITIES', QUALITIESFirebaseFallback);

  const [activeTab, setActiveTab] = useState(0);

  /* --- SEARCH & PAGINATION STATES --- */
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredJobs = JOBS.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.place.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + JOBS_PER_PAGE);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />

      {/* Sub nav - ՓՈԽԱՐԻՆՎԱԾ ՀԱՏՎԱԾԸ (NavLink-երով) */}
      <nav className={`${PURPLE} sticky top-0 z-30`}>
        <div className="mx-auto flex max-w-6xl overflow-x-auto px-4 text-xs font-semibold text-white">
          {TABS.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `whitespace-nowrap px-6 py-4 transition hover:bg-white/10 ${
                  isActive ? "bg-black/20" : ""
                }`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {activeTab === 0 ? (
        <>
          {/* Hero */}
          <section
            className="relative h-64 overflow-hidden bg-[#4a2aa8] bg-cover bg-center bg-no-repeat sm:h-[17rem]"
            style={{ backgroundImage: `url(${HERO_IMG})` }}
          >
            <div className="relative mx-auto h-full max-w-4xl px-4">
              <div className="absolute left-4 top-14 w-[90%] max-w-md rounded-bl-[3rem] bg-[#f4f3f6] px-10 pb-16 pt-10 shadow-lg">
                <h1 className="text-xl font-bold sm:text-2xl">Աշխատանք Evoca-ում</h1>
              </div>
            </div>
          </section>

          {/* Qualities */}
          <section className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="border-b border-gray-100 pb-4 text-xl font-medium">
              Ինչպիսի թիմակից ենք մենք փնտրում ?
            </h2>

            <ul className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
              {QUALITIES.map((q) => (
                <li key={q.label} className="flex flex-col items-center text-center">
                  {q.icon}
                  <span className="mt-4 max-w-[14rem] text-sm font-semibold leading-relaxed">
                    {q.label}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Vacancies */}
          <section className="mx-auto max-w-2xl px-4 pb-16">
            <h2 className="text-2xl font-medium underline decoration-1 underline-offset-4">
              Բաց մի թող քո նոր հնարավորությունը
            </h2>

            {/* SEARCH INPUT */}
            <div className="mt-8 mb-6 relative">
              <input
                type="text"
                placeholder="Որոնել ըստ հաստիքի կամ վայրի..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 pl-10 text-sm outline-none transition-all focus:border-[#6200e0] focus:ring-1 focus:ring-[#6200e0]"
              />
              <svg
                className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <p className="mb-6 text-xs text-gray-600 font-medium">
              Գտնված է {filteredJobs.length} աշխատատեղ (Ընդհանուր՝ {JOBS.length})
            </p>

            {/* JOBS LIST */}
            {currentJobs.length > 0 ? (
              <ul className="space-y-6">
                {currentJobs.map((job) => (
                  <li
                    key={job.title}
                    className="relative overflow-hidden rounded-xl bg-white px-6 pb-14 pt-6 shadow-[0_2px_16px_rgba(106,0,224,0.10)]"
                  >
                    <h3 className="mb-5 text-base font-bold leading-snug">{job.title}</h3>

                    <dl className="space-y-3 text-xs">
                      <div className="grid grid-cols-1 gap-1 sm:grid-cols-[14rem_1fr]">
                        <dt>Փաստաթղթերի ներկայացման վերջնաժամկետ</dt>
                        <dd className="font-bold">{job.date}</dd>
                      </div>
                      <div className="grid grid-cols-1 gap-1 sm:grid-cols-[14rem_1fr]">
                        <dt>Աշխատանքի վայր</dt>
                        <dd className="font-bold">{job.place}</dd>
                      </div>
                    </dl>

                    <button
                      type="button"
                      className="absolute bottom-0 right-0 rounded-tl-2xl bg-[#6200e0] px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#5500b8]"
                    >
                      Տեսնել մանրամասն և դիմել
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="py-12 text-center text-sm text-gray-500">
                Ձեր որոնմանը համապատասխան աշխատատեղ չի գտնվել:
              </div>
            )}

            {/* PAGINATION CONTROLS */}
            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-transparent"
                >
                  Նախորդ
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`h-8 w-8 rounded-lg text-xs font-semibold transition ${
                      currentPage === page
                        ? "bg-[#6200e0] text-white"
                        : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-transparent"
                >
                  Հաջորդ
                </button>
              </div>
            )}

            <p className="mt-10 border-y border-gray-100 py-3 text-right text-[11px] text-gray-500">
              Թարմացվել է՝ 29/09/2026 11:19
            </p>
          </section>
        </>
      ) : (
        <section className="mx-auto max-w-2xl px-4 py-24 text-center">
          <h2 className="text-2xl font-semibold">{TABS[activeTab].label}</h2>
          <p className="mt-4 text-sm text-gray-500">Բովանդակությունը շուտով։</p>
        </section>
      )}

      <Footer />
    </div>
  );
}