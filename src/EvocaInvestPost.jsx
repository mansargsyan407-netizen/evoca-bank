import { Link } from "react-router-dom";

/* ------------------------------ DATA ------------------------------ */

const post = {
  category: "Ներդրումներ",
  title: "EvocaINVEST. ինչպե՞ս կատարել գործարքներ",
  description:
    "Այս բլոգում կներկայացնենք EvocaINVEST-ն, ինչպես նաև գործարքներ կնքելու համար առաջնային անհրաժեշտ գործիքներից օգտվելու քայլերը:",
  date: "17.06.2024",
  image: "https://www.evoca.am/images-cache/blogs/1/17186317173483/616x462.jpg",
};

const orderTypes = [
  {
    name: "Market",
    text: "Այստեղ նշում ենք միայն գնվող կամ վաճառվող արժեթղթի քանակը, գործարքը կատարվում է շուկայում առկա լավագույն գնով:",
  },
  {
    name: "Limit",
    text: "Այս պատվերում բացի քանակից նշվում է նաև գին, գնման պատվերի դեպքում առավելագույն, վաճառքի դեպքում՝ նվազագույն գին, որով պատրաստ եք գնել/վաճառել արժեթղթերը:",
  },
  {
    name: "Stop",
    text: "Այս պատվերում ես նշում է գին, որին շուկայական գներ հասանելիուն պես՝ պատվեր դառնում է շուկայական, ու գործարքը կնքվում է շուկայում առկա լավագույն գնով:",
  },
  {
    name: "Stop Limit",
    text: "Այս հայտում նշվում է երկու գին՝ stop և limit. տարբերությունը stop պատվերից կայանում, որ երբ շուկայական գները հասանելիուն են պատվերում նշված stop գնին, հայտը դառնում է լիմիտային՝ իմ նշված ընդունելով stop limit պատվերում նշված լիմիտային գինը:",
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
    title: "Ինչպե՛ս կառավարել պորտֆելը: Պորտֆելի կառավարման 3 փուլերը",
    date: "17.05.2024",
    image: "https://www.evoca.am/images-cache/blogs/1/17159356763697/428x321.jpg",
    href: "/blog/portfolio-management",
  },
  {
    title: "Ներդրումների կարելիներն ու չի կարելիները",
    date: "23.04.2024",
    image: "https://www.evoca.am/images-cache/blogs/1/17138737784517/428x321.jpg",
    href: "/blog/invest-dos-donts",
  },
];

const updatedAt = "05/06/2026 16:43";

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

function PhoneShot({ src, alt, notes = [] }) {
  return (
    <div className="relative my-6 flex justify-center md:justify-start">
      <img
        src={src}
        alt={alt}
        className="w-[220px] rounded-[24px] border border-neutral-200 shadow-sm md:w-[240px]"
      />
      {notes.length > 0 && (
        <ul className="ml-6 hidden max-w-[280px] list-none space-y-3 self-center text-[10px] leading-relaxed text-neutral-500 md:block">
          {notes.map((n) => (
            <li key={n} className="border-l-2 border-red-300 pl-2">
              {n}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SubHeading({ children }) {
  return (
    <h3 className="mt-10 flex items-center gap-2 text-sm font-bold text-purple-700">
      <span className="h-1.5 w-1.5 rounded-full bg-purple-700" />
      {children}
    </h3>
  );
}

/* ------------------------------ PAGE ------------------------------ */

export default function EvocaInvestPost() {
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

          <img src={post.image} alt={post.title} className="h-full min-h-[320px] w-full object-cover" />
        </div>

        {/* Body */}
        <div className="mt-14 flex gap-8">
          <ShareRail />

          <article className="max-w-[700px] flex-1 text-[13px] leading-relaxed text-neutral-800">
            <p>
              Մեր{" "}
              <Link to="/blog" className="font-semibold text-purple-700 underline">
                նախորդ բլոգներում
              </Link>{" "}
              ընդարձակեցինք, թե ինչ քայլեր են հարկավոր կատարել ներդրումային որոշում կայացնելուց առաջ, գործարքների կնքման ժամանակ ինչպես առաջնորդվել, և, եթե արդեն կայացրել ենք որոշում ներդրումներ կատարելու մասին, ապա տեխնիկապես ինչպե՛ս իրագործենք մեր ներդրումային գաղափարները: Այսօր կխոսենք հենց դրա մասին, կներկայացնենք EvocaINVEST-ն, ինչպես նաև գործարքներ կնքելու համար առաջնային անհրաժեշտ գործիքներից օգտվելու քայլերը:
            </p>

            <p className="mt-5">
              <span className="font-semibold">EvocaINVEST</span>-ը հարթակ է, որը հասանելիություն է տալիս միջազգային խոշոր{" "}
              <span className="font-semibold text-purple-700 underline">բորսաների</span>, այստեղ ողջ հնարավորություն ունեք իրական ժամանակում գործարքներ կնքել աշխարհի տարբեր երկրների բորսաներում տասնյակից ավելի արժեթղթերով: EvocaINVEST-ը հասանելիություն է ապահովում վեբ տարբերակով և հավելվածով <span className="font-semibold text-purple-700 underline">(App Store և Google Play)</span>` հնարավորություն տալով ինտուսն և կառավարել ցանկացած վայրում Ձեր համակարգչի կամ հեռախոսի միջոցով:
            </p>

            <p className="mt-5">
              Հարթակի վեբ տարբերակին կարող եք ծանոթանալ{" "}
              <span className="font-semibold text-purple-700 underline">Guest Mode</span>-ի միջոցով:
            </p>

            <p className="mt-5">Իրական հաշիվ բացելու համար անհրաժեշտ է`</p>
            <ul className="mt-3 space-y-2">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-700" />
                Լինել Բանկի հաճախորդ
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-700" />
                Կնքել բրոքերային պայմանագիր
              </li>
            </ul>

            <p className="mt-5">
              Հաշիվը բացելուց հետո Ձուր կունենաք live տարբերակ, որտեղ կարող եք կատարել Ձեր իրական գործարքները, և demo տարբերակ, որտեղ կարող եք կատարել փորձնական գործարքներ, թեստավորել ռազմավարություններ նախապես հաշվին առանց ոչ իրական գումարով:
            </p>

            <p className="mt-5">
              Այժմ ծանոթանանք <span className="font-semibold">EvocaINVEST</span>-ի քթքային հավելվածին ու առավել շատ օգտագործվող գործիքներին:
            </p>

            <p className="mt-5">Մուտք գործելուվ հավելված կտեսնենք հինգ հիմնական բաժիններ`</p>

            <SubHeading>Summary</SubHeading>
            <PhoneShot
              src="https://www.evoca.am/file_manager/1.png"
              alt="Summary screen"
          
            />
            <p className="mt-5">
              Այս բաժնում կարող եք տեսնել Ձեր հաշվի ամփոփ  դրամական միջոցները` ըստ արժույթների և արժեթղթերի մասին տեղեկատվություն` բանակց, ձեռքբերումն միջին գին, տվյալ պահին առկա գին (ցեթ շուկան փակ է, նախորդ օրվա փակման գինը) ու ընդհանուր դրամական միջոցներ, ինչպես նաև ընդհանուր պորտֆելի ծծին շահույթ կամ վնասը, ինչպես նաև ընդհանուր դրամագլխի արդյունքը:
            </p>

            <SubHeading>Watchlists</SubHeading>
            <PhoneShot
              src="https://www.evoca.am/file_manager/two.png"
              alt="Watchlists screen"
             
            />
            <p className="mt-5">
              Այստեղ կարող եք ավելացնել արժեթղթեր, որոնց հետագայում առաց հասանելիություն կարող եք ունենալ, տեսնել նաև ընթացիկ փոփոխությունները: Կարող եք ստեղծել մի քանի ցանկեր, հետագայում փոփոխել դրանք կամ ջնջել:
            </p>

            <SubHeading>Trade</SubHeading>
            <PhoneShot
              src="https://www.evoca.am/file_manager/3.png"
              alt="Trade screen"
            />

            <p className="mt-5">
              Այստեղ մուտքագրվում են առևտրաշուրջի պատվերները: Չարքումում կարող եք մուտքագրել հետևյալ չորս տեսակի պատվերները`
            </p>

            <div className="mt-5 space-y-5">
              {orderTypes.map((o) => (
                <p key={o.name}>
                  <span className="font-semibold">{o.name}</span> - {o.text}
                </p>
              ))}
            </div>

            <SubHeading>Orders</SubHeading>
            <PhoneShot
              src="https://www.evoca.am/file_manager/4.png"
              alt="Orders screen"
            />

            <p className="mt-5">
              Այս բաժնում կարող եք տեսնել Ձեր բոլոր պատվերները՝ ակտիվ ու կատարվածները: Յուրաքանչյուր պատվերի քլիքով կարող եք մուտք գործել երկրորդ նկարում ցուցադրված դաշտը, որտեղից էլ կկարողանաք փոփոխել տեղադրված ու ցանկացած պատվերը, չեղարկել այն կամ ավելի արժեթղթի համար ստանանել գնահատման:
            </p>

            <SubHeading>Profile</SubHeading>
            <PhoneShot
              src="https://www.evoca.am/file_manager/5.png"
              alt="Profile screen"
           
            />

            <p className="mt-5">
              Այս բաժնում կարող եք տեսնել Ձեր բոլոր պատվերները՝ ըստ ցանկության: Յուրաքանչյուր պատվերի քլիքով կարող եք մուտք գործել ընդլայնված դաշտ, որտեղից էլ կկարողանաք փոփոխել տեղադրված փոփոխված ու ցանկացած պատվերը, չեղարկել այն կամ ցանկացած արժեթղթի համար ստանալ գնանշում` չեղարկել այն կամ ցանկացած արժեթղթի համար ստանալ գնանշում` ցանկանալիք գնահատմամբ:
            </p>

            <p className="mt-5">
              Այստեղից կարող եք տեսնել Ձեր հաշվով կատարված բոլոր գործարքները, կատարել հաշվի կարգավորումները, փոխել գաղտնաբառը և այլն:
            </p>

            <p className="mt-8">
              Այսպիսով, ծանոթացանք <span className="font-semibold text-purple-700">EvocaINVEST</span>-ի հիմնական բաժիններին, իսկ վերլուծության համար օգտագործվող գործիքակազմի ու առաջին այլ հնարավորությունների մասին կտեսնենք մեր միուս բլոգներում:
            </p>

            <p className="mt-5 italic">
              Արժեթղթերում ներդրումների հետ կապված հարցերի դեպքում կարող եք դիմել հասատատել ներդրումային գործառնությունների ամսին հետ`
            </p>

            <ul className="mt-3 space-y-2">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-700" />
                <a href="tel:+37410205555" className="font-semibold text-purple-700 hover:underline">
                  +374-10-20-55-55
                </a>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-700" />
                <a href="mailto:invest@evoca.am" className="font-semibold text-purple-700 underline hover:no-underline">
                  invest@evoca.am
                </a>
              </li>
            </ul>

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