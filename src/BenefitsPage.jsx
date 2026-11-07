import { useState } from "react";
import { Link } from "react-router-dom";
import SubNav from "./SubNav";

/* Եթե ունես hero-ի նկարի URL, դիր այստեղ (օր.՝ evoca.am-ի /images-cache/... հղումը) */
import { useFirebasePublicData } from './useFirebasePublicData';
import { pageData_BenefitsPage_BENEFITS } from './sitePageData';
const HERO_IMAGE = "https://www.evoca.am/images-cache/menu/1/16194612394395/1920x634.jpg";

/* ---------- Icons (inline SVG, մանուշակագույն 3D ոճին մոտ) ---------- */
const P1 = "#8b5cf6";
const P2 = "#5b21b6";
const GOLD = "#f5b731";

function Svg({ children }) {
  return (
    <svg viewBox="0 0 64 64" className="w-16 h-16 mx-auto" aria-hidden="true">
      <defs>
        <linearGradient id="pg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a78bfa" />
          <stop offset="1" stopColor={P2} />
        </linearGradient>
      </defs>
      {children}
    </svg>
  );
}

const icons = {
  health: (
    <Svg>
      <path d="M32 6l20 7v16c0 13-9 22-20 27C21 51 12 42 12 29V13z" fill="url(#pg)" />
      <path d="M28 20h8v8h8v8h-8v8h-8v-8h-8v-8h8z" fill="#fff" />
    </Svg>
  ),
  travel: (
    <Svg>
      <path d="M8 34l48-16-6-6L34 24 14 18l-4 4 16 10-8 8-8-2-2 4 10 4 4 10 4-2-2-8 8-8 10 16 4-4-6-20z" fill="url(#pg)" />
    </Svg>
  ),
  bank: (
    <Svg>
      <circle cx="32" cy="10" r="6" fill={GOLD} />
      <path d="M8 22L32 14l24 8v4H8z" fill="url(#pg)" />
      <rect x="12" y="30" width="8" height="18" rx="2" fill={P1} />
      <rect x="28" y="30" width="8" height="18" rx="2" fill={P1} />
      <rect x="44" y="30" width="8" height="18" rx="2" fill={P1} />
      <rect x="8" y="50" width="48" height="7" rx="2" fill="url(#pg)" />
    </Svg>
  ),
  discount: (
    <Svg>
      <path d="M16 8h26l6 6v40H16z" fill={P1} opacity=".55" transform="rotate(-8 32 32)" />
      <path d="M18 8h26l6 6v40H18z" fill="url(#pg)" />
      <circle cx="28" cy="24" r="4" fill="#fff" />
      <circle cx="40" cy="42" r="4" fill="#fff" />
      <path d="M40 22L28 44" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    </Svg>
  ),
  bonus: (
    <Svg>
      <path d="M20 4h10l6 22H26z" fill={P1} />
      <path d="M44 4H34l-6 22h10z" fill={P2} />
      <circle cx="32" cy="38" r="16" fill={GOLD} />
      <circle cx="32" cy="38" r="11" fill="#fde68a" />
      <path d="M32 30l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z" fill="#fff" />
    </Svg>
  ),
  gift: (
    <Svg>
      <path d="M32 20c-6-10-16-8-14-3s10 3 14 3zm0 0c6-10 16-8 14-3s-10 3-14 3z" fill={GOLD} />
      <rect x="10" y="20" width="44" height="12" rx="2" fill={P1} />
      <rect x="14" y="32" width="36" height="24" rx="2" fill="url(#pg)" />
      <rect x="28" y="20" width="8" height="36" fill={GOLD} />
    </Svg>
  ),
  dayoff: (
    <Svg>
      <rect x="10" y="12" width="44" height="42" rx="6" fill="#fef3c7" />
      <rect x="10" y="12" width="44" height="10" rx="5" fill="url(#pg)" />
      <path d="M32 46c-10-7-12-12-12-16a6 6 0 0 1 12-1 6 6 0 0 1 12 1c0 4-2 9-12 16z" fill={GOLD} />
    </Svg>
  ),
  sport: (
    <Svg>
      <rect x="6" y="22" width="10" height="20" rx="3" fill="url(#pg)" />
      <rect x="14" y="16" width="10" height="32" rx="3" fill={P1} />
      <rect x="24" y="29" width="16" height="6" fill="#4b5563" />
      <rect x="40" y="16" width="10" height="32" rx="3" fill={P1} />
      <rect x="48" y="22" width="10" height="20" rx="3" fill="url(#pg)" />
    </Svg>
  ),
  education: (
    <Svg>
      <path d="M32 10L4 24l28 14 28-14z" fill="url(#pg)" />
      <path d="M16 32v12c0 4 8 8 16 8s16-4 16-8V32L32 42z" fill={P1} />
      <path d="M56 26v18" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
      <circle cx="56" cy="46" r="3" fill={GOLD} />
    </Svg>
  ),
};



/* ---------- Form ---------- */
const inputCls =
  "w-full h-10 px-3 rounded border border-gray-200 bg-white text-sm outline-none focus:border-[#6200e0] transition";

function Field({ label, required, children }) {
  return (
    <label className="block mb-5">
      <span className="block text-[13px] font-medium text-gray-800 mb-2">
        {label} {required && <span className="text-red-600">*</span>}
      </span>
      {children}
    </label>
  );
}

function ApplyForm() {
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: ուղարկել backend
    alert("Շնորհակալություն։ Ձեր դիմումն ընդունված է։");
  };

  return (
    <section id="apply" className="max-w-xl mx-auto px-4 pt-20 pb-20">
      <h2 className="text-2xl font-bold text-[#6200e0] mb-4">Դառնալ թիմի անդամ</h2>
      <p className="text-center text-[13px] text-gray-800 mb-8 leading-relaxed">
        Եթե ցանկանում ես միանալ <span className="font-semibold text-[#6200e0]">EvocaTEAM</span>-ին,
        <br />
        կարող ես ուղարկել դիմում՝ կցելով ինքնակենսագրականը։
      </p>

      <form onSubmit={handleSubmit}>
        <Field label="Անուն" required>
          <input type="text" required className={inputCls} />
        </Field>
        <Field label="Ազգանուն" required>
          <input type="text" required className={inputCls} />
        </Field>
        <Field label="Հեռախոսահամար" required>
          <div className="flex items-center h-10 rounded border border-gray-200 focus-within:border-[#6200e0] transition">
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
          <textarea rows={3} className={`${inputCls} h-24 py-2 resize-y`} />
        </Field>
        <Field label="Վերբեռնեք Ձեր ռեզյումեն" required>
          <div className="relative flex items-center justify-between h-12 px-4 rounded border border-gray-200 text-xs text-gray-700 hover:border-[#6200e0] transition">
            <span>{fileName || "Կցել ֆայլը / ֆայլերը"}</span>
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

        {/* Captcha placeholder — փոխարինիր իրական captcha-ով */}
        <div className="mb-8">
          <span className="block text-[13px] font-medium mb-2">
            Ստուգման ծածկագիր <span className="text-red-600">*</span>
          </span>
          <div className="border border-gray-300 rounded p-3 max-w-[290px]">
            <p className="text-xs text-gray-700 mb-2">Մուտքագրեք ծածկագիրը</p>
            <input type="text" required className={inputCls} />
            <div className="mt-3 h-10 border border-gray-200 rounded flex items-center justify-center font-mono text-lg tracking-widest italic">
              F5E6YU
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-10 rounded-full bg-[#6200e0] hover:bg-[#5000b8] text-white text-xs font-semibold transition"
        >
          Ես ուզում եմ աշխատել Evoca-ում :)
        </button>
      </form>
    </section>
  );
}

/* ---------- Page ---------- */
export default function BenefitsPage() {
  const BENEFITS = useFirebasePublicData('siteContent/pageData/BenefitsPage/BENEFITS', pageData_BenefitsPage_BENEFITS);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-white">
        <div className="max-w-6xl mx-auto px-4 h-[50px] flex items-center gap-6 text-sm">
       
           <Link to="/careers" className="text-[#6200e0] font-semibold">
            Evoca Լայֆ
          </Link>
        <Link to="/work" className="font-semibold ">
          Աշխատանք և պրակտիկա
        </Link>
        
        </div>
      </header>

      <SubNav active="benefits" />

      {/* Hero */}
      <section
        className="relative h-[300px] md:h-[380px] bg-cover bg-center bg-gradient-to-br from-yellow-200 via-yellow-300 to-violet-300"
        style={HERO_IMAGE ? { backgroundImage: `url(${HERO_IMAGE})` } : undefined}
      >
        <div className="max-w-6xl mx-auto px-4 h-full relative">
          <div className="absolute left-4 top-14 max-w-[437px] bg-[#f5f3f8] rounded-br-[48px] rounded-tr-lg p-10 pb-12 shadow-sm">
            <h1 className="text-3xl font-bold mb-5">Առավելություններ</h1>
            <p className="text-[13px] leading-relaxed text-gray-800">
              Միացի՛ր թիմին, որի ամենամեծ ակտիվը ներգրավված և երջանիկ
              աշխատակիցներն են։
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-6xl mx-auto px-4 pt-16">
        <h2 className="text-2xl font-semibold pb-4 mb-10 border-b border-gray-100">
          Մեր առավելությունները
        </h2>

        <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <li key={b.icon} className="text-center px-6">
              {icons[b.icon]}
              <p className="mt-6 text-[13px] leading-8 text-gray-900 max-w-[240px] mx-auto">
                {b.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <ApplyForm />
       <footer className="mt-20 border-t border-gray-200 bg-white pt-12">
                 <div className="max-w-7xl mx-auto px-4 sm:px-8">
                   
                   {/* Վերևի աջ անկյունում՝ Թարմացման ամսաթիվը */}
                   <div className="text-right text-xs text-gray-400 font-medium mb-6">
                     Թարմացվել է՝ 28/08/2026 17:20
                   </div>
         
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
                     
                     {/* Սյունակ 1: Լոգո և հասցե */}
                     <div className="lg:col-span-1 space-y-4">
                       <div className="flex items-center gap-1 text-2xl font-black text-gray-900">
                         evoca<span className="text-xs font-semibold tracking-widest text-gray-500 ml-0.5">BANK</span>
                       </div>
                       <p className="text-xs text-gray-600 font-medium leading-relaxed">
                         ք. Երևան, 0010,<br />
                         Հանրապետության 44/2
                       </p>
                       <p className="text-xs text-gray-500 leading-relaxed pt-2">
                         <strong>Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից</strong>
                       </p>
                       <div className="text-[11px] text-gray-400">
                         1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
                       </div>
                     </div>
         
                     {/* Սյունակ 2: Բանկի մասին */}
                     <div>
                       <h4 className="text-sm font-bold text-gray-900 mb-4">Բանկի մասին</h4>
                       <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                         <li><Link to="/about" className="hover:text-[#6c00ff]">Մեր մասին</Link></li>
                         <li><Link to="/management" className="hover:text-[#6c00ff]">Ղեկավարություն</Link></li>
                         <li><Link to="/shareholders" className="hover:text-[#6c00ff]">Բաժնետերեր</Link></li>
                         <li><Link to="/reports" className="hover:text-[#6c00ff]">Հաշվետվություններ</Link></li>
                         <li><Link to="/legal" className="hover:text-[#6c00ff]">Իրավական ակտեր</Link></li>
                         <li><Link to="/tariffs" className="hover:text-[#6c00ff]">Սակագներ</Link></li>
                         <li><Link to="/property" className="hover:text-[#6c00ff]">Օտարվող գույք</Link></li>
                         <li><Link to="/developers" className="hover:text-[#6c00ff]">Կառուցապատողներ</Link></li>
                         <li><Link to="/partners" className="hover:text-[#6c00ff]">Գործընկեր ավտոսրահներ</Link></li>
                         <li><Link to="/tariffs-archive" className="hover:text-[#6c00ff]">Սակագների արխիվ</Link></li>
                       </ul>
                     </div>
         
                     {/* Սյունակ 3: Օգտակար հղումներ */}
                     <div>
                       <h4 className="text-sm font-bold text-gray-900 mb-4">Օգտակար հղումներ</h4>
                       <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                         <li><Link to="/rights" className="hover:text-[#6c00ff]">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</Link></li>
                         <li><Link to="/residence" className="hover:text-[#6c00ff]">Հաճախորդի ռեզիդենտության չափանիշներ</Link></li>
                         <li><Link to="/regulation" className="hover:text-[#6c00ff]">Կարգավորում</Link></li>
                         <li><Link to="/privacy" className="hover:text-[#6c00ff]">Գաղտնիության քաղաքականություն</Link></li>
                         <li><Link to="/mediator" className="hover:text-[#6c00ff]">Ֆին. հաշտարար</Link></li>
                         <li><Link to="/aml" className="hover:text-[#6c00ff]">Ֆինանսական հանցագործությունների կանխարգելում</Link></li>
                         <li><Link to="/cardholders" className="hover:text-[#6c00ff]">Հղումներ Բանկի քարտապանների համար</Link></li>
                       </ul>
                     </div>
         
                     {/* Սյունակ 4: Այլ հղումներ */}
                     <div>
                       <h4 className="text-sm font-bold text-gray-900 mb-4">Այլ հղումներ</h4>
                       <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                         <li><a href="https://evocaonline.am" target="_blank" rel="noreferrer" className="hover:text-[#6c00ff]">EvocaONLINE</a></li>
                         <li><Link to="/safes" className="hover:text-[#6c00ff]">Պահատուփեր</Link></li>
                         <li><Link to="/faq" className="hover:text-[#6c00ff]">Հաճախ տրվող հարցեր</Link></li>
                         <li><Link to="/announcements" className="hover:text-[#6c00ff]">Հայտարարություններ</Link></li>
                         <li><Link to="/dlibrary" className="hover:text-[#6c00ff]">Dlibrary</Link></li>
                         <li><Link to="/booklets" className="hover:text-[#6c00ff]">Բուկլետներ</Link></li>
                         <li><Link to="/feedback" className="hover:text-[#6c00ff]">Հետադարձ կապ</Link></li>
                         <li><Link to="/sitemap" className="hover:text-[#6c00ff]">Կայքի քարտեզ</Link></li>
                       </ul>
                     </div>
         
                     {/* Սյունակ 5: Սոց․ ցանցեր, հավելվածներ և Կոնտակտներ */}
                     <div className="space-y-6">
                       
                       {/* Սոց ցանցերի իկոնաներ */}
                       <div className="flex items-center gap-3 text-gray-400">
                         <a href="#facebook" className="hover:text-[#6c00ff]"><i className="fab fa-facebook-f text-base"></i></a>
                         <a href="#instagram" className="hover:text-[#6c00ff]"><i className="fab fa-instagram text-base"></i></a>
                         <a href="#pinterest" className="hover:text-[#6c00ff]"><i className="fab fa-pinterest text-base"></i></a>
                         <a href="#youtube" className="hover:text-[#6c00ff]"><i className="fab fa-youtube text-base"></i></a>
                         <a href="#linkedin" className="hover:text-[#6c00ff]"><i className="fab fa-linkedin-in text-base"></i></a>
                       </div>
         
                       {/* App Store / Google Play կոճակներ */}
                       <div className="flex flex-col gap-2">
                         <a href="#appstore" className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 w-max hover:opacity-80">
                           <span className="text-xs font-semibold">App Store</span>
                         </a>
                         <a href="#googleplay" className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 w-max hover:opacity-80">
                           <span className="text-xs font-semibold">Google Play</span>
                         </a>
                       </div>
         
                       {/* Կոնտակտային տվյալներ */}
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
         
                 {/* Ներքևի մոխրագույն զոլով տեքստ և լոգոներ */}
                 <div className="bg-gray-100 py-6 border-t border-gray-200">
                   <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
                     <p className="text-[10px] text-gray-500 leading-normal max-w-4xl">
                       Հարգելի' այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական կայք տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
                     </p>
                     
                     {/* Գործընկերների/Համակարգերի լոգոներ */}
                     <div className="flex flex-wrap items-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                       <span className="text-xs font-bold text-gray-600">fininfo</span>
                       <span className="text-xs font-bold text-gray-600">abcfinance.am</span>
                       <span className="text-xs font-bold text-gray-600">arca</span>
                     </div>
                   </div>
                 </div>
               </footer>
    </div>
  );
}