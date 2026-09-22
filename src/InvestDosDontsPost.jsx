import { Link } from "react-router-dom";

/* ------------------------------ DATA ------------------------------ */

const post = {
  category: "Ներդրումներ",
  title: "Ներդրումների կարելիներն ու չի կարելիները",
  description:
    "Ներդրումներ կատարելիս՝ դժվար է կողմնորոշվել՝ որտեղի՛ց սկսել, ինչպե՛ս կայացնել որոշումներ: Այսօր կխոսենք ներդրումների կարելիների և չի կարելիների մասին:",
  date: "23.04.2024",
  image: "https://www.evoca.am/images-cache/blogs/1/17138737784517/616x462.jpg",
};

const quote = {
  text: "\u201CIt's not whether you're right or wrong that's important, but how much money you make when you're right and how much you lose when you're wrong.\u201D",
  author: "George Soros",
};

const dos = [
  {
    title: "Գնահատել ռիսկերը",
    text: "Շարքեր ներդրողների համար ռիսկի ընդունելի մակարդակը տարբեր է, և նախքան ներդրում կատարելը՝ ինքներդ ձեզ համար պետք է որոշեք, թե առավելագույնը որքան գումար եք պատրաստ կորցնել, եթե հանգամանքները դասավորվեն ոչ ձեր օգտին, ինչպես կանխատեսում էիք:",
  },
  {
    title: "Ինքնակրթվել",
    text: "Ներդրում կատարելիս առաջին հերթին կարևոր է ուսումնասիրել, հասկանալ, թե ինչ գործիքներ են գործում շուկայում, և որքան ձեզ համար կարող որպահ ուղենիշ, որոնք կարող են վկայել ապագա գործողությունների պլանավորման համար: Շուկաներում փոփոխությունները թավականին արագ են ընթանում, ուստի ավելացված պատասխանատվությամբ վերջին տեխնոլոգիաների արագացմամբ, ու այդ ամենին գրագետ քայլերով կարողանալու համար:",
  },
  {
    title: "Իրականացնել դիվերսիֆիկացիա",
    text: "Ներդրումային տարբեր ակտիվների ներդրում են փոխկապակցված տարբեր ռիսկեր, հետևաբար լավ տարբերակ է համարվում տարբատեսակ ակտիվներում ներդրումներ կատարելը, որոշ ռիսկերի ազդեցության չափը ամրողջ արդյունքի վրա նվազեցնելու համար:",
  },
  {
    title: "Նախապես մշակել ռազմավարություն",
    text: "Ներդրումների ընթացքում առաջ մոտեցված ու մշակված գործողությունների հաջորդականությունը թույլ կտա շուկայական փոփոխնային պայմաններում առավել հասկանալ ու դրանցից բխող քայլերը ու դրանցից բխող կայացվող որոշումների հիմքում: Հայացվող որոշումների հիմքում այս է ընկած գրագետ ներդրումների հիմքում:",
  },
];

const dosNoteHeading = "Ինչ պետք է անել ներդրումներ կատարելիս:";
const dontsHeading = "Ինչ պետք է չանել ներդրումներ կատարելիս:";

const donts = [
  {
    title: "Մի հետևեք ամբոխին",
    text: "Հետևել որիշներին ու կատարել ներդրումներ, որովհետև մյուսներն են դա անում, սա հաճախ սխալների պատճառ է հանդիսանում: Այն նույն ձևով է կատարում, նույն արդյունքը շառ ընկար ես, կամ ցուցադր ադրավ ներդրումը մաս է իր ընդունելի ներդրումային ռազմավարությանը, որը ձեր ռազմավարությանը, որը ձեր ռազմավարությանը, որը ձեր ռազմաշիմերում չի կարող ինչ արդյունունքներից չընկնված:",
  },
  {
    title: "Մի հիմնվեք բացառապես հավանականության վրա",
    text: "Ներդրումներին վերաբերվող վստահություն ունեցող ընկնված են դրդապատճառներ՝ աշխարհաքաղաքական, ինստիտուցիոնալ, հոգեբանական կամ այլ, դրանց խորությամբ ուստումնասիրության արդյունքում է հնարավոր կատարել լրջահեռավոր որոշումները:",
  },
  {
    title: "Մի կայացրեք էմոցիոնալ որոշումներ",
    text: "Ձեր որոշումների վրա ազդում են տարբեր գործոններ, և դժվար է առանց նախապես մշակված ռազմավարության երևել էմոցիաներին ու կատարել ներդրումներ, ինչը կարող է հանգեցնել ոչ ցանկալի արդյունքների: Ներդրումներ կատարելիս պետք է կատարվեն սեփական դատողությունների և ռազմավարության վրա հիմնված:",
  },
  {
    title: "Մի ներդրեք վերջին գումարը",
    text: "Ներդրումներ կատարելով այն գումարով, որը նախատեսված է ընթացիկ ծախսերի համար, կավելացնեք ֆինանսական ճնշումը: Ինչքանոք թույլ չի տա կայացնել ներդրումային որոշումներ, ինչը հանգեցնում է շտապողականության:",
  },
];

const closingParagraphs = [
  "Եվ պետք է հիշել, որ լրացանցիոլու ներդրումներ կատարում ենք յուրովի ձևով, ընտանեկան ու ունեցվածքային համապատասխան: Ինքնուրույն, մտածված, հիմնավորված որոշումներն ու ամրողդատ կրթությունն են, որ կարող են բերել ներդրումներից ակնկալվող արդյունքին:",
];

const contactLine =
  "Արժեթղթերում ներդրումների հետ կապված հարցերի դեպքում կարող եք կապ հաստատել ներդրումային գործառնությունների բաժնի հետ`";

const finalLines = [
  {
    prefix: "Եթե դեռ ցանկանում եք ",
    linkText: "նախորդ բլոգը",
    suffix: ", անպայման կարդացեք այն և ավելի մանրամասն ծանոթացեք ներդրումների ու EvocaINVEST-ի մասին:",
    linkHref: "/blog/evocainvest",
  },
];

const relatedPosts = [
  {
    title: "Ֆիլներ ֆինանսական աշխարհի էնտուզիաստների համար Մաս 1",
    date: "28.08.2024",
    image: "https://www.evoca.am/images-cache/blogs/1/17248413426642/428x321.png",
    href: "/blog/films-finance-1",
  },
  {
    title: "EvocaINVEST. ինչպե՞ս կատարել գործարքներ",
    date: "17.06.2024",
    image: "https://www.evoca.am/images-cache/blogs/1/17186317173483/428x321.jpg",
    href: "/blog/evocainvest",
  },
  {
    title: "Ինչպե՛ս կառավարել պորտֆելը: Պորտֆելի կառավարման 3 փուլերը",
    date: "17.05.2024",
    image: "https://www.evoca.am/images-cache/blogs/1/17159356763697/428x321.jpg",
    href: "/blog/portfolio-management",
  },
];

const updatedAt = "05/06/2026 16:43";

/* --------------------------- SMALL PIECES --------------------------- */

function ShareRail() {
  const icons = [
    { name: "Facebook", d: "M22 12a10 10 0 1 0-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.9-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z" },
    { name: "X", d: "M18.9 3H21l-6.9 7.9L22.3 21h-6.4l-5-6.5L4.9 21H2.8l7.4-8.5L2 3h6.6l4.5 5.9L18.9 3Zm-1.1 16.2h1.2L7.3 4.7H6L17.8 19.2Z" },
    { name: "LinkedIn", d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.8-2 3.7-2 3.95 0 4.68 2.6 4.68 6V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4z" },
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

function DoItem({ item }) {
  return (
    <div className="mt-6">
      <h3 className="flex items-center gap-2 text-sm font-bold text-purple-700">
        <span className="text-purple-700">&#128140;</span>
        {item.title}
      </h3>
      <p className="mt-3 text-[13px] leading-relaxed text-neutral-800">{item.text}</p>
    </div>
  );
}

function DontItem({ item }) {
  return (
    <div className="mt-6">
      <h3 className="flex items-center gap-2 text-sm font-bold text-purple-700">
        <span className="text-purple-700">&#10060;</span>
        {item.title}
      </h3>
      <p className="mt-3 text-[13px] leading-relaxed text-neutral-800">{item.text}</p>
    </div>
  );
}

/* ------------------------------ PAGE ------------------------------ */

export default function InvestDosDontsPost() {
  return (
    <div className="w-full bg-white font-sans text-neutral-900">
      <div className="mx-auto max-w-[1000px] px-4 pt-6 pb-10">
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

          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[11px] text-neutral-500">
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
            <h1 className="mt-6 text-2xl font-bold leading-snug md:text-3xl">{post.title}</h1>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-neutral-700">{post.description}</p>
            <time className="mt-8 block text-[11px] text-neutral-500">{post.date}</time>
          </div>

          <div className="relative flex min-h-[320px] w-full flex-col justify-between bg-black p-8 text-white">
            <h2 className="text-2xl font-bold uppercase leading-tight">
              Ներդրումների
              <br />
              կարելիներն ու
              <br />
              չի կարելիները
            </h2>
            <div className="flex flex-1 items-center justify-center">
              <img
                src={post.image}
                alt={post.title}
                className="max-h-[180px] object-contain"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            <span className="text-sm font-bold">#evocainvest</span>
          </div>
        </div>

        {/* Body */}
        <div className="mt-14 flex gap-8">
          <ShareRail />

          <article className="max-w-[700px] flex-1">
            {/* Quote */}
            <blockquote className="mx-auto max-w-[560px] text-center">
              <p className="text-sm font-semibold italic text-purple-800">{quote.text}</p>
              <cite className="mt-3 block text-sm font-bold not-italic text-purple-800">{quote.author}</cite>
            </blockquote>

            <p className="mt-10 text-[13px] leading-relaxed text-neutral-800">
              Ֆինանսական որոշում ներդրումներ կատարելիս՝ երբեմն դժվար է կողմնորոշվել՝ որտեղի՛ց սկսել, ինչպե՛ս կայացնել որոշումներ: Այսօր կխոսենք, թե ինչ են խորհուրդ տալիս փորձագետները ներդրումներ կատարելիս կարելի և չի կարելիների մասին:
            </p>

            <h2 className="mt-10 text-base font-bold text-purple-700">{dosNoteHeading}</h2>
            {dos.map((d) => (
              <DoItem key={d.title} item={d} />
            ))}

            <h2 className="mt-12 text-base font-bold text-purple-700">{dontsHeading}</h2>
            {donts.map((d) => (
              <DontItem key={d.title} item={d} />
            ))}

            <div className="mt-10 space-y-4">
              {closingParagraphs.map((p) => (
                <p key={p} className="text-[13px] leading-relaxed text-neutral-800">
                  {p}
                </p>
              ))}
            </div>

            <p className="mt-6 text-[13px] italic leading-relaxed text-neutral-800">
              {contactLine}
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex gap-2 text-[13px]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-700" />
                <a href="tel:+37410205555" className="font-semibold text-purple-700 hover:underline">
                  +374-10-20-55-55
                </a>
              </li>
              <li className="flex gap-2 text-[13px]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-700" />
                <a href="mailto:invest@evoca.am" className="font-semibold text-purple-700 underline hover:no-underline">
                  invest@evoca.am
                </a>
              </li>
            </ul>

            {finalLines.map((l) => (
              <p key={l.linkText} className="mt-6 text-[13px] italic leading-relaxed text-neutral-800">
                {l.prefix}
                <Link to={l.linkHref} className="font-semibold text-purple-700 underline">
                  {l.linkText}
                </Link>
                {l.suffix}
              </p>
            ))}

            <p className="mt-4 text-[13px] italic leading-relaxed text-neutral-800">
              Իսկ առաջիկայում սպասեք ներդրումների մասին մեր նոր բլոգին:
            </p>

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

            <div className="mt-10 border-t border-neutral-100 pt-4 text-right text-[10px] font-medium text-neutral-500">
              Թարմացվել է՝ {updatedAt}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}