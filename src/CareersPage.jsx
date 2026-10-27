import { useState } from "react";
import { Link } from "react-router-dom";
import { Tr, useLang } from "./i18n";

const BASE = "https://www.evoca.am";

const IMAGES = {
  hero: `${BASE}/images-cache/menu/1/16195117975601/1920x634.jpg`,
  girl: `${BASE}/file_manager/Career/evoca-girl.jpg`,
};

const CULTURE_SLIDES = [
  {
    title: "Evocabank neon art corporate party",
    img: `${BASE}/images-cache/culture_sliders/1/16760069357338/744x419.jpg`,
  },
  {
    title: "Evoca New Year Corporate Party 2022",
    img: `${BASE}/images-cache/culture_sliders/1/16760071256254/744x419.jpg`,
  },
  {
    title: "EVOCAISLAND Evoca Summer Party 2022",
    img: `${BASE}/images-cache/culture_sliders/1/16196059430279/744x419.jpg`,
  },
];

const TEAM_WORDS = [
  {
    words: ["Թրենդային", "Պահանջված", "Ուրախ"],
    name: "Հարություն Սահակյան",
    role: "Անվտանգության մասնագետ",
  },
  {
    words: ["Դինամիկ", "Պրպտող", "Զարգացող"],
    name: "Լիլիթ Գաբրիյան",
    role: "Գլխավոր ֆինանսական տնօրեն",
  },
  {
    words: ["Կրեատիվ", "Նորարար", "Մանուշակագույն"],
    name: "Ալլա Չաքարյան",
    role: "Վճարային գործիքների մասնագետ",
  },
];

const SUB_NAV = [
  { label: "Մշակույթ", href: "#culture" },
  { label: "Առավելություններ", href: "/benefits" },
  { label: "Հաճախ տրվող հարցեր", href: "/faq" },
  { label: "Ինչպես ընդունվել աշխատանքի Evocabank-ում", href: "#apply" },
];

const PURPLE = "bg-[#6200e0]";

function Arrow({ dir = "left", className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-7 h-7 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {dir === "left" ? (
        <path d="M20 12H4M10 6l-6 6 6 6" />
      ) : (
        <path d="M4 12h16M14 6l6 6-6 6" />
      )}
    </svg>
  );
}

function Field({ label, required, children }) {
  const { t } = useLang();
  return (
    <label className="block mb-5">
      <span className="block text-[13px] font-medium text-gray-800 mb-2">
        {t(label)} {required && <span className="text-red-600">*</span>}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full h-10 px-3 rounded border border-gray-200 bg-gray-50 text-sm outline-none focus:border-[#6200e0] focus:bg-white transition";

export default function CareersPage() {
  const { t } = useLang();
  const [slide, setSlide] = useState(1);
  const [teamPage, setTeamPage] = useState(0);
  const [fileName, setFileName] = useState("");

  const prev = CULTURE_SLIDES[(slide - 1 + CULTURE_SLIDES.length) % CULTURE_SLIDES.length];
  const cur = CULTURE_SLIDES[slide];
  const next = CULTURE_SLIDES[(slide + 1) % CULTURE_SLIDES.length];

  const goPrev = () => setSlide((s) => (s - 1 + CULTURE_SLIDES.length) % CULTURE_SLIDES.length);
  const goNext = () => setSlide((s) => (s + 1) % CULTURE_SLIDES.length);

  const PER_PAGE = 3;
  const teamPages = Math.ceil(TEAM_WORDS.length / PER_PAGE);
  const teamVisible = TEAM_WORDS.slice(teamPage * PER_PAGE, teamPage * PER_PAGE + PER_PAGE);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t("Շնորհակալություն։ Ձեր դիմումն ընդունված է։"));
  };

  return (
    <Tr>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Top bar */}
        <header className="bg-white">
          <div className="max-w-6xl mx-auto px-4 h-[50px] flex items-center gap-6 text-sm">
            <Link to="/careers" className="text-[#6200e0] font-semibold">
              {t("Evoca Լայֆ")}
            </Link>
            <Link to="/work" className="font-semibold">
              {t("Աշխատանք և պրակտիկա")}
            </Link>
          </div>
        </header>

        {/* Sub nav */}
        <nav className={`${PURPLE} sticky top-0 z-30`}>
          <div className="max-w-6xl mx-auto px-4 flex overflow-x-auto text-white text-xs font-semibold">
            {SUB_NAV.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap px-6 py-4 hover:bg-white/10 transition ${
                  i === 0 ? "bg-black/20" : ""
                }`}
              >
                {t(item.label)}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero */}
        <section
          id="culture"
          className="relative h-[300px] md:h-[380px] bg-cover bg-center bg-pink-300"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        >
          <div className="max-w-6xl mx-auto px-4 h-full relative">
            <div className="absolute left-4 top-14 md:top-14 max-w-[435px] bg-[#f6f2fb] rounded-br-[40px] rounded-tr-lg p-8 shadow-sm">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">{t("Մշակույթ")}</h1>
              <p className="text-[13px] leading-relaxed text-gray-800">
                {t("Evoca-ում աշխատելը հաճելի է։ Առօրյան լցված է նորարարություններով։ Այստեղ տաղանդները անընդհատ զարգանում են ու կատարելագործվում։")}
              </p>
            </div>
          </div>
        </section>

        {/* Why work at Evoca */}
        <section id="benefits" className="max-w-3xl mx-auto px-4 pt-16 pb-10">
          <h2 className="text-xl font-bold mb-4">{t("Ինչո՞ւ աշխատել Evoca-ում")}</h2>
          <p className="text-[15px] leading-relaxed text-gray-800">
            {t("«Բացահայտիր, թե ինչն է Evoca-ն դարձնում այդքան յուրահատուկ։ Աշխատակիցներն ուրախ են, մոտիվացված, իսկ առավելությունների մեծ փաթեթն օգնում է հոգ տանել իրենց և ընտանիքների մասին»")}
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-16">
          <img
            src={IMAGES.girl}
            alt="Evoca աշխատակից"
            className="w-full max-w-[591px] mx-auto block"
            loading="lazy"
          />
        </section>

        {/* Culture slider */}
        <section className={`${PURPLE} relative overflow-hidden py-14 text-white`}>
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">{t("Մշակույթ")}</h2>
            <p className="text-[13px] leading-relaxed mb-6">
              {t("Evoca-ում մենք ոչ միայն անում ենք այն, ինչ սիրում ենք, այլ նաև կյանքից վերցնում ենք ամեն ինչ։ Անընդհատ սովորում ենք, մեր փորձը կիսում ենք գործընկերների հետ, սպորտով ենք զբաղվում և հանգստանում։ Միացեք մեզ!")}
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 flex items-center justify-center gap-4">
            <button onClick={goPrev} aria-label="Նախորդ" className="absolute left-4 z-10 hidden md:block hover:scale-110 transition">
              <Arrow dir="left" />
            </button>

            {/* Prev */}
            <button
              onClick={goPrev}
              className="hidden md:block w-[220px] bg-white text-gray-900 rounded-lg p-2 text-left self-end"
            >
              <img src={prev.img} alt={prev.title} className="w-full h-[115px] object-cover rounded" />
              <p className="text-[11px] font-bold mt-3 mb-1 px-1">{t(prev.title)}</p>
            </button>

            {/* Current */}
            <div className="w-full max-w-[590px] bg-white text-gray-900 rounded-lg p-4">
              <img src={cur.img} alt={cur.title} className="w-full aspect-[16/9] object-cover rounded" />
              <p className="text-lg font-bold mt-4 mb-1">{t(cur.title)}</p>
            </div>

            {/* Next */}
            <button
              onClick={goNext}
              className="hidden md:block w-[220px] bg-white text-gray-900 rounded-lg p-2 text-left self-center"
            >
              <img src={next.img} alt={next.title} className="w-full h-[115px] object-cover rounded" />
              <p className="text-[11px] font-bold mt-3 mb-1 px-1">{t(next.title)}</p>
            </button>

            <button onClick={goNext} aria-label="Հաջորդ" className="absolute right-4 z-10 hidden md:block hover:scale-110 transition">
              <Arrow dir="right" />
            </button>
          </div>

          {/* Mobile arrows */}
          <div className="flex md:hidden justify-center gap-8 mt-6">
            <button onClick={goPrev} aria-label="Նախորդ"><Arrow dir="left" /></button>
            <button onClick={goNext} aria-label="Հաջորդ"><Arrow dir="right" /></button>
          </div>
        </section>

        {/* Team words */}
        <section id="faq" className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-center text-lg md:text-xl font-bold mb-10">
            {t("Հարցրու՛ մեր թիմին. «Ինչպիսի՞ն է Evoca-ն՝ 3 բառով»")}
          </h2>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setTeamPage((p) => (p - 1 + teamPages) % teamPages)}
              aria-label="Նախորդ"
              className={`text-[#6200e0] ${teamPages > 1 ? "" : "invisible"}`}
            >
              <Arrow dir="left" />
            </button>

            <div className="flex-1 grid gap-6 md:grid-cols-3">
              {teamVisible.map((tItem) => (
                <article key={tItem.name} className="relative bg-[#f8f5fe] p-6 min-h-[175px]">
                  <span className="absolute top-0 right-6 flex gap-1" aria-hidden="true">
                    <span className="w-4 h-7 bg-[#6200e0] [clip-path:polygon(0_0,100%_0,100%_60%,0_100%)]" />
                    <span className="w-4 h-7 bg-[#6200e0] [clip-path:polygon(0_0,100%_0,100%_60%,0_100%)]" />
                  </span>
                  <h3 className="text-[#6200e0] font-bold text-lg leading-tight mb-8">
                    {tItem.words.map((w) => (
                      <span key={w} className="block">{t(w)}</span>
                    ))}
                  </h3>
                  <p className="text-xs text-gray-800">{t(tItem.name)}</p>
                  <p className="text-[10px] text-gray-600">{t(tItem.role)}</p>
                </article>
              ))}
            </div>

            <button
              onClick={() => setTeamPage((p) => (p + 1) % teamPages)}
              aria-label="Հաջորդ"
              className={`text-[#6200e0] ${teamPages > 1 ? "" : "invisible"}`}
            >
              <Arrow dir="right" />
            </button>
          </div>

          {teamPages > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: teamPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTeamPage(i)}
                  aria-label={`Էջ ${i + 1}`}
                  className={`w-2 h-2 rounded-full ${i === teamPage ? "bg-[#6200e0]" : "bg-gray-300"}`}
                />
              ))}
            </div>
          )}
        </section>

        {/* Application form */}
        <section id="apply" className="max-w-xl mx-auto px-4 pb-20">
          <h2 className="text-2xl font-bold text-[#6200e0] mb-4">{t("Դառնալ թիմի անդամ")}</h2>
          <p className="text-center text-[13px] text-gray-800 mb-8 leading-relaxed">
            {t("Եթե ցանկանում ես միանալ")} <span className="font-semibold text-[#6200e0]">EvocaTEAM</span>-ին,
            <br />
            {t("կարող ես ուղարկել դիմում՝ կցելով ինքնակենսագրականը։")}
          </p>

          <form onSubmit={handleSubmit}>
            <Field label="Անուն" required>
              <input type="text" required className={inputCls} />
            </Field>

            <Field label="Ազգանուն" required>
              <input type="text" required className={inputCls} />
            </Field>

            <Field label="Հեռախոսահամար" required>
              <div className="flex items-center h-10 rounded border border-gray-200 bg-gray-50 focus-within:border-[#6200e0] focus-within:bg-white transition">
                <span className="px-3 text-xs text-gray-700 border-r border-gray-200 h-full flex items-center gap-2">
                  <span className="inline-block w-4 h-3 bg-gradient-to-b from-red-600 via-blue-700 to-orange-400" />
                  +374
                </span>
                <input type="tel" required className="flex-1 h-full px-3 bg-transparent text-sm outline-none" />
              </div>
            </Field>

            <Field label="Էլ. հասցե">
              <input type="email" className={inputCls} />
            </Field>

            <Field label="Facebook սոց. կայքում անձնական էջի հղում">
              <input type="url" className={inputCls} />
            </Field>

            <Field label="LinkedIn սոց. կայքում անձնական էջի հղում">
              <input type="url" className={inputCls} />
            </Field>

            <Field label="Ուղեկցող նամակ">
              <textarea rows={4} className={`${inputCls} h-28 py-2 resize-y`} />
            </Field>

            <Field label="Վերբեռնեք Ձեր ռեզյումեն" required>
              <div className="relative flex items-center justify-between h-14 px-4 rounded border border-gray-200 text-xs text-gray-700 hover:border-[#6200e0] transition">
                <span>{fileName || t("Կցել ֆայլը / ֆայլերը")}</span>
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 16V4M7 9l5-5 5 5M4 20h16" />
                </svg>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </Field>

            {/* Captcha */}
            <div className="mb-8">
              <span className="block text-[13px] font-medium mb-2">
                {t("Ստուգման ծածկագիր")} <span className="text-red-600">*</span>
              </span>
              <div className="border border-gray-200 rounded p-3">
                <p className="text-xs text-gray-700 mb-2">{t("Մուտքագրեք ծածկագիրը")}</p>
                <input type="text" required className={inputCls} />
                <div className="mt-3 h-10 border border-gray-200 rounded flex items-center justify-center font-mono text-lg tracking-widest line-through decoration-gray-500">
                  RLD6K5
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-10 rounded-full bg-[#6200e0] hover:bg-[#5000b8] text-white text-xs font-semibold transition"
            >
              {t("Ես ուզում եմ աշխատել Evoca-ում")}
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-200 bg-white pt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-right text-xs text-gray-400 font-medium mb-6">
              {t("Թարմացվել է՝")} 28/08/2026 17:20
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
              {/* Սյունակ 1 */}
              <div className="lg:col-span-1 space-y-4">
                <div className="flex items-center gap-1 text-2xl font-black text-gray-900">
                  evoca<span className="text-xs font-semibold tracking-widest text-gray-500 ml-0.5">BANK</span>
                </div>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                  {t("ք. Երևան, 0010,")}<br />
                  {t("Հանրապետության 44/2")}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed pt-2">
                  <strong>{t("Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից")}</strong>
                </p>
                <div className="text-[11px] text-gray-400">
                  1990 - 2026, © {t("ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ")}
                </div>
              </div>

              {/* Սյունակ 2 */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-4">{t("Բանկի մասին")}</h4>
                <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                  <li><Link to="/about" className="hover:text-[#6c00ff]">{t("Մեր մասին")}</Link></li>
                  <li><Link to="/management" className="hover:text-[#6c00ff]">{t("Ղեկավարություն")}</Link></li>
                  <li><Link to="/shareholders" className="hover:text-[#6c00ff]">{t("Բաժնետերեր")}</Link></li>
                  <li><Link to="/reports" className="hover:text-[#6c00ff]">{t("Հաշվետվություններ")}</Link></li>
                  <li><Link to="/legal" className="hover:text-[#6c00ff]">{t("Իրավական ակտեր")}</Link></li>
                  <li><Link to="/tariffs" className="hover:text-[#6c00ff]">{t("Սակագներ")}</Link></li>
                  <li><Link to="/property" className="hover:text-[#6c00ff]">{t("Օտարվող գույք")}</Link></li>
                  <li><Link to="/developers" className="hover:text-[#6c00ff]">{t("Կառուցապատողներ")}</Link></li>
                  <li><Link to="/partners" className="hover:text-[#6c00ff]">{t("Գործընկեր ավտոսրահներ")}</Link></li>
                  <li><Link to="/tariffs-archive" className="hover:text-[#6c00ff]">{t("Սակագների արխիվ")}</Link></li>
                </ul>
              </div>

              {/* Սյունակ 3 */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-4">{t("Օգտակար հղումներ")}</h4>
                <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                  <li><Link to="/rights" className="hover:text-[#6c00ff]">{t("Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)")}</Link></li>
                  <li><Link to="/residence" className="hover:text-[#6c00ff]">{t("Հաճախորդի ռեզիդենտության չափանիշներ")}</Link></li>
                  <li><Link to="/regulation" className="hover:text-[#6c00ff]">{t("Կարգավորում")}</Link></li>
                  <li><Link to="/privacy" className="hover:text-[#6c00ff]">{t("Գաղտնիության քաղաքականություն")}</Link></li>
                  <li><Link to="/mediator" className="hover:text-[#6c00ff]">{t("Ֆին. հաշտարար")}</Link></li>
                  <li><Link to="/aml" className="hover:text-[#6c00ff]">{t("Ֆինանսական հանցագործությունների կանխարգելում")}</Link></li>
                  <li><Link to="/cardholders" className="hover:text-[#6c00ff]">{t("Հղումներ Բանկի քարտապանների համար")}</Link></li>
                </ul>
              </div>

              {/* Սյունակ 4 */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-4">{t("Այլ հղումներ")}</h4>
                <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                  <li><a href="https://evocaonline.am" target="_blank" rel="noreferrer" className="hover:text-[#6c00ff]">EvocaONLINE</a></li>
                  <li><Link to="/safes" className="hover:text-[#6c00ff]">{t("Պահատուփեր")}</Link></li>
                  <li><Link to="/faq" className="hover:text-[#6c00ff]">{t("Հաճախ տրվող հարցեր")}</Link></li>
                  <li><Link to="/announcements" className="hover:text-[#6c00ff]">{t("Հայտարարություններ")}</Link></li>
                  <li><Link to="/dlibrary" className="hover:text-[#6c00ff]">Dlibrary</Link></li>
                  <li><Link to="/booklets" className="hover:text-[#6c00ff]">{t("Բուկլետներ")}</Link></li>
                  <li><Link to="/feedback" className="hover:text-[#6c00ff]">{t("Հետադարձ կապ")}</Link></li>
                  <li><Link to="/sitemap" className="hover:text-[#6c00ff]">{t("Կայքի քարտեզ")}</Link></li>
                </ul>
              </div>

              {/* Սյունակ 5 */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-gray-400">
                  <a href="#facebook" className="hover:text-[#6c00ff]"><i className="fab fa-facebook-f text-base"></i></a>
                  <a href="#instagram" className="hover:text-[#6c00ff]"><i className="fab fa-instagram text-base"></i></a>
                  <a href="#pinterest" className="hover:text-[#6c00ff]"><i className="fab fa-pinterest text-base"></i></a>
                  <a href="#youtube" className="hover:text-[#6c00ff]"><i className="fab fa-youtube text-base"></i></a>
                  <a href="#linkedin" className="hover:text-[#6c00ff]"><i className="fab fa-linkedin-in text-base"></i></a>
                </div>

                <div className="flex flex-col gap-2">
                  <a href="#appstore" className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 w-max hover:opacity-80">
                    <span className="text-xs font-semibold">App Store</span>
                  </a>
                  <a href="#googleplay" className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 w-max hover:opacity-80">
                    <span className="text-xs font-semibold">Google Play</span>
                  </a>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <Link to="/branches" className="text-[#6c00ff] font-bold hover:underline">
                      {t("Բանկի հասցեները և աշխատաժամերը")}
                    </Link>
                  </div>
                  <div>
                    <Link to="/contact" className="text-[#6c00ff] font-bold hover:underline">
                      {t("Կապ մեզ հետ")}
                    </Link>
                  </div>
                  <div className="pt-2 font-bold text-gray-800">
                    +374 10 605555
                  </div>
                  <div className="font-extrabold text-[#6c00ff] text-sm">
                    8444
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 py-6 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
              <p className="text-[10px] text-gray-500 leading-normal max-w-4xl">
                {t("Հարգելի\' այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանություն...")}
              </p>
              <div className="flex flex-wrap items-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                <span className="text-xs font-bold text-gray-600">fininfo</span>
                <span className="text-xs font-bold text-gray-600">abcfinance.am</span>
                <span className="text-xs font-bold text-gray-600">arca</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Tr>
  );
}