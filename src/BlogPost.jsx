import { Link, useParams } from "react-router-dom";

/* ------------------------------ DATA ------------------------------ */

const post = {
  category: "Կենսակերպ",
  title: "Monthly Recap",
  description:
    "Monthly Recap-ն օգնում է ամփոփել ամիսը, հասկանալ ձեռքբերումները, բաց թողածները և փոքր քայլերով կատարել մեծ ու արդյունավետ փոփոխություններ:",
  date: "05.01.2026",
  image: "https://www.evoca.am/images-cache/blogs/1/17683779856926/780x585.png",
};

const intro = [
  "Մենք հաճախ շտապում ենք առաջ նոր նպատակներ, նոր պլաններ, նոր ամիսներ: Բայց արդյո՞ք կանգ ենք առնում և հարցնում ինքներս մեզ, «Ի՞նչ տվեց ինձ այս ամիսը»:",
];

const sections = [
  {
    heading: "Ի՞նչ է Monthly Recap-ը",
    paragraphs: [
      "Monthly Recap-ն ամսին ամփոփելու պարզ, բայց շատ արդյունավետ մեթոդ է: Այն օգնում է ամփոփել նախորդ ամիսը՝ թե ինչ ընտանութությանը, պլ վերլուծությանը, հասկանալ ինչն է աշխատել, ինչը՝ ոչ, և ինչ կարելի է անել հաջորդ ամսին ավելի արդյունավետ դարձնելու համար:",
    ],
  },
  {
    heading: "Evoca notebook-ում",
    paragraphs: [
      "Evoca notebook-ում սա հենց այս հատվածն է, որը սպասում է քեզ ցուցակնուցիր ամսվա վերջում:",
    ],
  },
  {
    heading: "Ինչե՞ս է սա աշխատում",
    bullets: [
      "Ուղեղն ավելի լավ է հովրում փորձից, երբ այն ամփոփվում է:",
      "Ամսական վերլուծությունը բարձրացնում է ինքնագիտակցությունը:",
      "Մարդիկ, ովքեր պարբերաբար ամփոփում են իրենց ամիսը, ավելի արագ են ձևավորում նոր, օգտակար սովորությունններ:",
    ],
  },
  {
    heading: "Ինչպե՞ս կատարել Monthly Recap (իրական օրինակներ)",
    intro: "Ամսվա վերջում կարող ես պատասխանել մի քանի պարզ հարցի:",
  },
];

const questions = [
  {
    number: "1",
    title: "Ի՞նչ էր ինձ մոտիվացնում այս ամիս",
    bullets: [
      "Նոր նախագծի մեկնարկը, որտեղ դգացի, որ իմ գաղափարները կարևոր են և լսված:",
      "Ձերք բերեցի նոր սովորություն՝ ամեն օր 20 րոպե քայլել:",
    ],
  },
  {
    number: "2",
    title: "Ի՞նչ սովորեցի",
    bullets: [
      "Սովորեցի նոր մասնագիտական գործիքներ",
      "Սովորեցի արդյունավետ ժամանակի կառավարում",
    ],
  },
  {
    number: "3",
    title: "Ի՞նչ դժվարություններ հաղթահարեցի",
    bullets: [
      "Կազմեցի ամենաբարդ հաշվետվությունը",
      "Վերջապես հանձնեցի մեծենայի գործնական քննությունը",
    ],
  },
  {
    number: "4",
    title: "Ինչո՞վ եմ հպարտ",
    bullets: [
      "Ավարտեցի նոր նախագիծը՝ առանց վերջնաժամկետը խախտելու",
      "Ընդունվեցի Harvard բիզնես դպրոց",
    ],
  },
  {
    number: "5",
    title: "Ումի՞ց կամ ինչի՞ց եմ շնորհակալ",
    bullets: [
      "Ղեկավարիս և թիմակիցներիս՝ աջակցության համար",
      "Կատվիս՝ ինձ ուրախ և դրական լիցքեր փոխանցելու համար",
    ],
  },
  {
    number: "6",
    title: "Ինչպե՞ս կարող եմ հաջորդ ամիսն ավելի լավը դարձնել",
    bullets: [
      "Ավելի հստակ սահմաններ աշխատանքային առաջնահերթությունների և պարապանդ աշխատանք-կյանք բալանսի:",
      "Գնել սպորտ փաթեթ և անցնել առողջ ապրելակերպի:",
    ],
  },
];

const closingParagraphs = [
  "Monthly Recap-ը ոչ հաշվետվություն է, ոչ պարտադրություն և ոչ էլ քննություն:",
  "Ամսվա վերջում մի քանի րոպե հատկացնելով այս հարցերին դու ոչ միայն ամփոփում ես նախորդ ամիսը, այլ նաև ձևավորում ես հաջորդ ամսվա որակը:",
];

const relatedPosts = [
  {
    title: "Habit Tracker",
    date: "05.01.2026",
    image: "https://www.evoca.am/images-cache/blogs/1/17683792444137/428x321.png",
    href: "/blog/habit-tracker",
  },
  {
    title: "Եվրոպայի լավագույն 5 Christmas Market-ները",
    date: "16.12.2025",
    image: "https://www.evoca.am/images-cache/blogs/1/17658933558475/428x321.png",
    href: "/blog/christmas-markets",
  },
  {
    title: "Անլ ուրբաթի իրական գույնը",
    date: "24.11.2025",
    image: "https://www.evoca.am/images-cache/blogs/1/17639790235101/428x321.png",
    href: "/blog/black-friday",
  },
];

/* --------------------------- SMALL PIECES --------------------------- */

function ShareRail() {
  const icons = [
  ];
  return (
    <div className="sticky top-24 hidden h-fit w-12 shrink-0 flex-col items-center gap-4 rounded-lg bg-neutral-100 py-4 md:flex">
      {icons.map((i) => (
        <button
          key={i.name}
          type="button"
          aria-label={`Կիսվել ${i.name}-ում`}
          className="text-neutral-500 transition hover:text-purple-700"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d={i.d} />
          </svg>
        </button>
      ))}
    </div>
  );
}

function QuestionBlock({ q }) {
  return (
    <div className="mt-8">
      <h3 className="text-sm font-bold text-purple-700">
        {q.number}. {q.title}
      </h3>
      <p className="mt-4 text-sm font-semibold text-neutral-900">Օրինակներ`</p>
      <ul className="mt-3 space-y-2">
        {q.bullets.map((b) => (
          <li key={b} className="flex gap-2 text-[13px] leading-relaxed text-neutral-700">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-700" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------ PAGE ------------------------------ */

export default function BlogPost() {
  const { slug } = useParams();

  return (
    <div className="w-full bg-white font-sans text-neutral-900">
      <div className="mx-auto max-w-[1000px] px-4 pt-6 pb-20">
        {/* Top bar: back + breadcrumb */}
        <div className="flex flex-wrap items-center gap-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-700 transition hover:bg-neutral-50"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Link>

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] text-neutral-500">
            <Link to="/" aria-label="Գլխավոր" className="transition hover:text-purple-700">
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 11.5 12 4l9 7.5M5.5 10v9.5h13V10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <span>›</span>
            <Link to="/blog" className="transition hover:text-purple-700">Բլոգ</Link>
            <span>›</span>
            <Link to="/blog" className="transition hover:text-purple-700">{post.category}</Link>
            <span>›</span>
            <span className="text-neutral-900">{post.title}</span>
          </nav>
        </div>

        {/* Hero */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-0 overflow-hidden rounded-r-[60px] bg-neutral-100 md:grid-cols-2">
          <div className="flex flex-col justify-center px-8 py-10 md:px-10">
            <div className="flex items-center gap-2">
              <span className="h-4 w-6 bg-purple-950" />
              <span className="text-xs font-semibold text-purple-950">{post.category}</span>
            </div>
            <h1 className="mt-6 text-3xl font-bold">{post.title}</h1>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-neutral-700">{post.description}</p>
            <time className="mt-8 block text-[11px] text-neutral-500">{post.date}</time>
          </div>

          <img
            src={post.image}
            alt={post.title}
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>

        {/* Body */}
        <div className="mt-14 flex gap-8">
          <ShareRail />

          <article className="max-w-[700px] flex-1">
            {intro.map((p) => (
              <p key={p} className="text-[13px] leading-relaxed text-neutral-800">
                {p}
              </p>
            ))}

            <p className="mt-6 text-[13px] leading-relaxed text-neutral-800">
              Այստեղ օգնության է գալիս <span className="font-semibold">Monthly Recap</span>-ը:
            </p>

            {sections.map((s) => (
              <div key={s.heading} className="mt-10">
                <h2 className="text-base font-bold text-purple-700">{s.heading}</h2>
                {s.intro && (
                  <p className="mt-4 text-[13px] leading-relaxed text-neutral-800">{s.intro}</p>
                )}
                {s.paragraphs?.map((p) => (
                  <p key={p} className="mt-4 text-[13px] leading-relaxed text-neutral-800">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-[13px] leading-relaxed text-neutral-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-700" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {questions.map((q) => (
              <QuestionBlock key={q.number} q={q} />
            ))}

            <div className="mt-10 space-y-4">
              {closingParagraphs.map((p) => (
                <p key={p} className="text-[13px] leading-relaxed text-neutral-800">
                  {p}
                </p>
              ))}
            </div>

            {/* Related */}
            <div className="mt-16">
              <h2 className="text-base font-bold">Related Blogs</h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {relatedPosts.map((r) => (
                  <Link key={r.href} to={r.href} className="group block">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="aspect-[3/2] w-full bg-neutral-200 object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                    <h3 className="mt-3 text-[13px] font-semibold leading-snug transition group-hover:text-purple-700">
                      {r.title}
                    </h3>
                    <time className="mt-2 block text-[11px] text-neutral-400">{r.date}</time>
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
      {/* Evocabank Full Footer */}
      <footer className="bg-[#fcfbfe] border-t border-gray-100 mt-16 pt-12 pb-8 px-6 text-xs text-gray-600">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1 */}
          <div className="space-y-4">
            <h2 className="text-xl font-black text-[#6b21a8] tracking-wider">evoca<span className="text-gray-900">BANK</span></h2>
            <p className="text-gray-500">
              ք. Երևան, 0010,<br />
              Հանրապետության 44/2
            </p>
            <p className="text-gray-400 text-[11px] leading-relaxed">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="text-gray-400 text-[11px]">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 text-sm mb-3">Բանկի մասին</h3>
            <p><a href="#about" className="hover:underline">Մեր մասին</a></p>
            <p><a href="#management" className="hover:underline">Ղեկավարություն</a></p>
            <p><a href="#shareholders" className="hover:underline">Բաժնետերեր</a></p>
            <p><a href="#reports" className="hover:underline">Հաշվետվություններ</a></p>
            <p><a href="#acts" className="hover:underline">Իրավական ակտեր</a></p>
            <p><a href="#rates" className="hover:underline">Սակագներ</a></p>
            <p><a href="#property" className="hover:underline">Օտարվող գույք</a></p>
            <p><a href="#builders" className="hover:underline">Կառուցապատողներ</a></p>
            <p><a href="#partners" className="hover:underline">Գործընկեր ավտոսրահներ</a></p>
            <p><a href="#archive" className="hover:underline">Սակագների արխիվ</a></p>
          </div>

          {/* Col 3 */}
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 text-sm mb-3">Օգտակար հղումներ</h3>
            <p><a href="#rights" className="hover:underline">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</a></p>
            <p><a href="#residency" className="hover:underline">Հաճախորդի ռեզիդենտության չափանիշներ</a></p>
            <p><a href="#regulation" className="hover:underline">Կարգավորում</a></p>
            <p><a href="#privacy" className="hover:underline">Գաղտնիության քաղաքականություն</a></p>
            <p><a href="#arbiter" className="hover:underline">Ֆին. հաշտարար</a></p>
            <p><a href="#aml" className="hover:underline">Ֆինանսական հանցագործությունների կանխարգելում</a></p>
            <p><a href="#cardholders" className="hover:underline">Հղումներ Բանկի քարտապանների համար</a></p>
          </div>

          {/* Col 4 */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-sm">Այլ հղումներ</h3>
            <div className="space-y-1.5">
              <p><a href="#online" className="hover:underline">EvocaONLINE</a></p>
              <p><a href="#safes" className="hover:underline">Պահատուփեր</a></p>
              <p><a href="#faq" className="hover:underline">Հաճախ տրվող հարցեր</a></p>
              <p><a href="#announcements" className="hover:underline">Հայտարարություններ</a></p>
              <p><a href="#dibrary" className="hover:underline">Dibrary</a></p>
              <p><a href="#booklets" className="hover:underline">Բուկլետներ</a></p>
              <p><a href="#contact" className="hover:underline">Հետադարձ կապ</a></p>
              <p><a href="#sitemap" className="hover:underline">Կայքի քարտեզ</a></p>
            </div>

            <div className="pt-2 space-y-2">
              <p className="font-bold text-[#6b21a8]"><a href="#branches">Բանկի հասցեները և աշխատաժամերը</a></p>
              <p className="font-bold text-[#6b21a8]"><a href="#contactus">Կապ մեզ հետ</a></p>
              <p className="font-bold text-gray-900 text-sm">+374 10 605555</p>
              <p className="font-bold text-[#6b21a8] text-base">8444</p>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Bottom Note */}
        <div className="max-w-7xl mx-auto pt-6 border-t border-gray-200 text-[10px] text-gray-400 leading-relaxed">
          Հարգելի' այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ԲԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստույգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
        </div>
      </footer>

      {/* Floating Chat Button (Bottom Right) */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-[#6b21a8] text-white px-4 py-2.5 rounded-full shadow-lg font-bold text-xs cursor-pointer hover:bg-purple-900 transition">
        <span>Գրեք մեզ, մենք օնլայն ենք !</span>
        <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
      </div>
    </div>
  );
}