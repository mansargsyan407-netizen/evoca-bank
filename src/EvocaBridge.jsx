import React from "react";

import { Link } from "react-router-dom";

// Հարաբերական ճանապարհը (/images-cache/...) աշխատում է միայն evoca.am դոմենում,
// իսկ քո local/այլ դոմենում նկարը չի բացվի, դրա համար՝ լրիվ հասցե.
const heroImg =
  "https://www.evoca.am/images-cache/menu/1/17377293888049/1920x634.jpg";

const subNav = [
  { label: "Աշխատանք Evoca-ում", path: "/work-at-evoca" },
  { label: "Ուսումնական պրակտիկա", path: "/internship" },
  { label: "EvocaBRIDGE", path: "/evocabridge" },
];

const Header = () => (
  <header className="w-full">
    {/* Top white bar */}
    <div className="h-[63px] border-t-4 border-t-gray-50 bg-white">
      <div className="mx-auto flex h-full max-w-[1080px] items-center justify-between px-4">
        <div className="flex items-center gap-8">
          
            <Link to="/careers" className="font-semibold">
          Evoca Լայֆ
        </Link>
        <Link to="/work" className="font-semibold text-[#6200e0]">
          Աշխատանք և պրակտիկա
        </Link>
        </div>
     
      </div>
    </div>

    {/* Purple sub navigation */}
    <nav className="bg-[#6600dd]">
      <div className="mx-auto flex h-[38px] max-w-[1080px] items-stretch px-4">
        {subNav.map((item) => {
          const active = item.path === "/evocabridge";
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-3.5 text-[11px] font-bold text-white ${
                active ? "bg-[#4a00a8]" : "hover:bg-[#4a00a8]/60"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  </header>
);

const CheckIcon = () => (
  <svg
    className="mt-1 h-5 w-5 flex-shrink-0 text-[#6600dd]"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
      clipRule="evenodd"
    />
  </svg>
);

const CheckList = ({ items }) => (
  <ul className="my-6 space-y-6">
    {items.map((text) => (
      <li key={text} className="flex items-start gap-8">
        <CheckIcon />
        <span className="text-[15px] leading-relaxed text-gray-800">{text}</span>
      </li>
    ))}
  </ul>
);

const benefits = [
  "երկամսյա խորացված ուսումնական ծրագիր,",
  "ծանոթացում նորարար բանկային միջավայրին ներսից,",
  "գործնական կապերի հաստատում,",
  "ամսական 180.000 ՀՀ դրամ վարձատրություն՝ ներառյալ հարկերը և այլ պարտադիր վճարումները,",
  "անմիջապես ծրագրի ավարտից հետո աշխատանքի անցնելու հնարավորություն։",
];

const requirements = [
  "սովորում ես համալսարանի 4-րդ կուրսում, մագիստրատուրայում կամ մինչև 1 տարի է՝ ինչ ավարտել ես համալսարանը,",
  "ունես բարձր առաջադիմություն,",
  "հետաքրքրասեր ես, ակտիվ ու նպատակասլաց,",
  "սիրում ես բացահայտել նորը, սովորել և զարգանալ։",
];

const documents = [
  "ինքնակենսագրական,",
  "ՄՈԳ-ի ցուցանիշը հաստատող տեղեկանք,",
  "«Նամակ ապագայից» այն մասին, թե ինչպես ես ամենամեծ 2 նպատակներդ դարձրել հաջողված նախագծեր։",
];

const phases = [
  {
    title: "Փուլ 1:",
    text: "Տեսական ուսուցման ընթացքում մասնակիցներն ունենում են հանդիպումներ Բանկի մի շարք ստորաբաժանումների ղեկավարների հետ, ստանում խորացված գիտելիքներ բանկային պրոդուկտների, ծառայությունների և մի շարք գործընթացների վերաբերյալ։",
  },
  {
    title: "Փուլ 2:",
    text: "Գործնական փուլի շրջանակում մասնակիցները հնարավորություն են ունենում տեսական և գործնական գիտելիքները կիրառել պրակտիկ միջավայրում։ Այս փուլի ընթացքում մասնակիցները նաև ներգրավվում են նախագծերի մշակման և ներկայացման հետաքրքիր գործընթացում։",
  },
  {
    title: "Փուլ 3:",
    text: "Տեսական և գործնական փուլերի ավարտից հետո իրականացվում է թեստավորում և ավարտական նախագծերի հանձնում։ Լավագույն արդյունք ցուցաբերած մասնակիցները ստանում են աշխատանքի առաջարկ Evocabank-ից և սկսում իրենց մասնագիտական ուղին։",
  },
];

const EvocaBridge = () => {
  return (
    <main className="w-full bg-[#f4f4f5]">
      <Header />

      {/* Hero */}
      <section
        className="flex min-h-[265px] w-full items-center bg-[#f5c1ec] bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="mx-auto w-full max-w-[1080px] px-4">
          <div className="w-full max-w-[437px] rounded-bl-[60px] bg-gradient-to-b from-[#f3f3f4] to-[#f7f0fd] px-11 py-9">
            <h1
              className="inline-block bg-[#e3d4fb] px-1 text-[22px] font-extrabold leading-tight text-[#1a1030]"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              EvocaBRIDGE
            </h1>
            <p className="mt-6 text-[11px] text-gray-800">
              EvocaBRIDGE: Bridging Ideas, Shaping The Future
            </p>
          </div>
        </div>
      </section>

      {/* White spacer under hero */}
      <div className="h-16 bg-white" />

      {/* Content */}
      <section className="mx-auto max-w-[600px] px-4 pb-24 pt-2">
        <h2 className="text-[15px] font-bold leading-snug text-[#6600dd]">
          Չունե՞ս աշխատանքային փորձ, բայց փնտրո՞ւմ ես աշխատանք, ուրեմն
          EvocaBRIDGE ծրագիրը քեզ համար է!
        </h2>

        <CheckList items={benefits} />

        <p className="mt-8 text-[15px] text-gray-800">
          <span aria-hidden="true">💼 </span>
          <strong className="font-bold text-[#6600dd]">EvocaBRIDGE-ին</strong>{" "}
          կարող ես մասնակցել, եթե…
        </p>

        <CheckList items={requirements} />

        <p className="mt-8 text-[15px] text-gray-800">
          <span aria-hidden="true">💼 </span>
          <strong className="font-bold text-[#6600dd]">EvocaBRIDGE-ին</strong>{" "}
          մասնակցելու համար{" "}
          <a
            href="mailto:evocabridge@evoca.am"
            className="font-bold text-[#6600dd] underline"
          >
            evocabridge@evoca.am
          </a>{" "}
          էլեկտրոնային հասցեին ուղարկիր․
        </p>

        <CheckList items={documents} />

        <p className="mt-8 text-[15px] leading-relaxed text-gray-800">
          Նախնական ընտրությունն անցած թեկնածուների հետ կիրականացվեն անհատական
          հարցազրույցներ, որի արդյունքում կընտրվեն ծրագրի մասնակիցները։
        </p>

        <h3 className="mt-8 text-[15px] font-bold text-[#6600dd]">
          Ծրագրի մանրամասներ.
        </h3>

        <p className="mt-6 text-[15px] text-gray-800">
          <span className="text-[#6600dd]">EvocaBRIDGE</span>-ն իրականացվում է 3
          փուլերով՝
        </p>

        <div className="mt-1 space-y-0 text-[13px] leading-relaxed text-gray-800">
          {phases.map((p) => (
            <p key={p.title}>
              <span className="text-[#6600dd]">{p.title}</span> {p.text}
            </p>
          ))}
        </div>
      </section>
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
    </main>
  );
};

export default EvocaBridge;