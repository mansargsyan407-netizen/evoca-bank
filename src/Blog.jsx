import { useState } from "react";
import { Link } from "react-router-dom";

/* ------------------------------ DATA ------------------------------ */

const categories = ["Բիզնես", "Կենսակերպ", "Ներդրումներ"];

const allPosts = [
  // Կենսակերպ
  {
    id: 1,
    category: "Կենսակերպ",
    title: "Monthly Recap",
    description:
      "Monthly Recap-ն օգնում է ամփոփել ամիսը, հասկանալ ձեռքբերումները, բաց թողածները և փոքր քայլերով կատարել մեծ ու արդյունավետ փոփոխություններ:",
    date: "05.01.2026",
    image: "https://www.evoca.am/images-cache/blogs/1/17683779856926/780x585.png",
    href: "/blog/monthly-recap",
    isTop: true,
  },
  {
    id: 2,
    category: "Կենսակերպ",
    title: "Ամանորի քո Evocaգույն երազանքը",
    description:
      "Ավելի հաճելի է նվեր նվիրե՛լ, թե՛ ստանալ: Ինչպե՛ս երազանք պահել Ամանորի գիշերը: Ո՞րն է ամենաթրենդային նվերի տարբերակը: Բոլոր պատասխանները կգտնես բլոգում:",
    date: "21.12.2023",
    image: "https://www.evoca.am/images-cache/blogs/1/1703162335976/780x585.png",
    href: "/blog/new-year",
    isBest: true,
  },
  {
    id: 3,
    category: "Կենսակերպ",
    title: "2021-ը դարձել է կինո պրեմիերաների մրցավազք",
    date: "01.02.2021",
    image: "https://www.evoca.am/images-cache/blogs/1/16329119822114/438x328.jpg",
    href: "/blog/movies-2021",
  },
  {
    id: 4,
    category: "Կենսակերպ",
    title: "2021-ի ամենասպասված 21 սերիալները",
    date: "18.01.2021",
    image: "https://www.evoca.am/images-cache/blogs/1/16329974590876/438x328.png",
    href: "/blog/series-2021",
  },
  {
    id: 5,
    category: "Կենսակերպ",
    title: "Ապագայի ամենապահանջված մասնագիտությունները",
    date: "22.06.2020",
    image: "https://www.evoca.am/images-cache/blogs/1/16335957379/438x328.png",
    href: "/blog/future-jobs",
  },
  {
    id: 6,
    category: "Կենսակերպ",
    title: "Evoca-գույնի հոգեբանական նկարագիրը",
    description: "Գույնը մարքեթինգային գործիք է: Այն ազդում է մարդու հոգեբանության վրա:",
    date: "10.05.2020",
    image: "https://www.evoca.am/images-cache/blogs/1/16336923273854/1440x650.png",
    href: "/blog/evoca-color",
    isMain: true,
  },
  {
    id: 7,
    category: "Կենսակերպ",
    title: "Նայիր շուրջդ և տես, թե որքան ավելորդ իրեր կան",
    date: "09.02.2022",
    image: "https://www.evoca.am/images-cache/blogs/1/16443271105456/450x295.png",
    href: "/blog/declutter",
  },

  // Ներդրումներ
  {
    id: 8,
    category: "Ներդրումներ",
    title: "Ներդրումների կարելիներն ու չի կարելիները",
    description:
      "Ներդրումներ կատարելիս՝ դժվար է կողմնորոշվել՝ որտեղի՞ց սկսել, ինչպե՞ս կայացնել որոշումներ: Այսօր կխոսենք ներդրումների կարելիների և չի կարելիների մասին:",
    date: "23.04.2024",
    image: "https://www.evoca.am/images-cache/blogs/1/17138737784517/450x295.jpg",
    href: "/blog/invest-dos-donts",
  },
  {
    id: 9,
    category: "Ներդրումներ",
    title: "EvocaINVEST. ինչպե՞ս կատարել գործարքներ",
    description:
      "Այս բլոգում կներկայացնենք EvocaINVEST-ն, ինչպես նաև գործարքներ կնքելու համար առաջնային անհրաժեշտ գործիքներից օգտվելու քայլերը:",
    date: "17.06.2024",
    image: "https://www.evoca.am/images-cache/blogs/1/17186317173483/616x462.jpg",
    href: "/blog/evocainvest",
  },
  {
    id: 10,
    category: "Ներդրումներ",
    title: "Փոքր քայլերով դեպի մեծ եկամուտներ",
    date: "11.04.2024",
    image: "https://www.evoca.am/images-cache/blogs/1/17128187874533/450x295.jpg",
    href: "/blog/small-steps",
  },

  // Բիզնես
  {
    id: 11,
    category: "Բիզնես",
    title: "Ինչպես սկսել բիզնես: Guide from A to Z",
    description:
      "Եթե ուզում եքունենալ այն, ինչը երբեք չեք ունեցել, սկսեք անել այն, ինչը երբեք չեք արել:",
    date: "05.01.2024",
    image: "https://www.evoca.am/images-cache/blogs/1/16691870758279/450x295.jpg",
    href: "/blog/business-guide",
  },
];

const updatedAt = "05/06/2026 16:43";

/* --------------------------- SMALL COMPONENTS --------------------------- */

function CategoryTag({ children }) {
  return (
    <div className="flex items-center gap-2 border-l-2 border-purple-950 pl-2">
      <span className="text-[11px] font-semibold text-purple-950">{children}</span>
    </div>
  );
}

function CategoryBlock({ children }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-4 w-6 bg-purple-950" />
      <span className="text-xs font-semibold text-purple-950">{children}</span>
    </div>
  );
}

function GhostTitle({ children, className = "" }) {
  return (
    <h2
      className={`pointer-events-none relative z-10 select-none text-6xl font-extrabold leading-[1.15] tracking-tight text-neutral-200/70 md:text-7xl ${className}`}
    >
      {children}
    </h2>
  );
}

function Img({ src, alt, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`block w-full bg-neutral-200 object-cover ${className}`}
    />
  );
}

function SmallCard({ post }) {
  return (
    <article className="group">
      <Link to={post.href} className="block overflow-hidden">
        <Img
          src={post.image}
          alt={post.title}
          className="aspect-[3/2] transition duration-500 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="mt-4">
        <CategoryTag>{post.category}</CategoryTag>
        <h3 className="mt-4 text-[13px] font-semibold leading-snug">
          <Link to={post.href} className="transition hover:text-purple-700">
            {post.title}
          </Link>
        </h3>
        {post.description && (
          <p className="mt-2 text-xs text-neutral-600 line-clamp-2">
            {post.description}
          </p>
        )}
        <time className="mt-4 block text-[11px] text-neutral-400">{post.date}</time>
      </div>
    </article>
  );
}

/* ------------------------------ MAIN PAGE ------------------------------ */

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isArchive, setIsArchive] = useState(false);

  // Կատեգորիայով ֆիլտրացված ցուցակ
  const filteredPosts = activeCategory
    ? allPosts.filter((p) => p.category === activeCategory)
    : allPosts;

  // Default էջի համար տվյալներ
  const topPost = allPosts.find((p) => p.isTop) || allPosts[0];
  const missBig = allPosts.find((p) => p.id === 9) || allPosts[1];
  const missSmall = allPosts.filter((p) => [8, 10, 11, 7].includes(p.id));
  const bestPost = allPosts.find((p) => p.isBest) || allPosts[1];
  const bestRow = allPosts.filter((p) => [3, 4, 5].includes(p.id));
  const mainPost = allPosts.find((p) => p.isMain) || allPosts[5];

  // Կատեգորիայի ընտրության ժամանակ առաջին հոդվածը Featured է
  const filteredFeatured = activeCategory ? filteredPosts[0] : null;
  const filteredGrid = activeCategory ? filteredPosts.slice(1) : [];

  const handleCategoryClick = (category) => {
    setIsArchive(false); // Կատեգորիա ընտրելիս դուրս է գալիս արխիվից
    setActiveCategory(activeCategory === category ? null : category);
  };

  const handleArchiveToggle = () => {
    setIsArchive(!isArchive);
    setActiveCategory(null); // Արխիվ բացելիս չեղարկում ենք ֆիլտրը
  };

  return (
    <div className="w-full bg-white font-sans text-neutral-900">
      {/* ===================== Header & Navigation ===================== */}
      <section className="mx-auto max-w-[1000px] px-4 pt-8 pb-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[10px] text-neutral-500">
          <Link to="/" aria-label="Գլխավոր" className="transition hover:text-purple-700">
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 11.5 12 4l9 7.5M5.5 10v9.5h13V10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <span>›</span>
          <span className="text-neutral-900">Բլոգ</span>
          {isArchive && (
            <>
              <span>›</span>
              <span className="text-neutral-500">Արխիվ</span>
            </>
          )}
        </nav>

        <h1 className="mt-8 text-3xl font-bold">
          {isArchive ? "Բլոգի Արխիվ" : "Բլոգ"}
        </h1>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => handleCategoryClick(c)}
                className={`rounded-full px-3 py-1.5 text-[11px] transition ${
                  activeCategory === c && !isArchive
                    ? "bg-purple-700 text-white"
                    : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Archive Button[cite: 50] */}
          <button
            type="button"
            onClick={handleArchiveToggle}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-[11px] font-semibold transition ${
              isArchive
                ? "bg-purple-800 text-white hover:bg-purple-900"
                : "bg-purple-100 text-purple-800 hover:bg-purple-200"
            }`}
          >
            {isArchive ? "Բոլոր հոդվածները" : "Արխիվ"}
            <svg
              viewBox="0 0 24 24"
              className={`h-3 w-3 transition-transform ${isArchive ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>

      {/* ===================== ARCHIVE VIEW (Բոլոր քարտերը) ===================== */}
      {isArchive ? (
        <section className="mx-auto max-w-[1000px] px-4 pb-20">
          <div className="mb-8 flex items-center justify-between border-b border-neutral-100 pb-4">
            <h2 className="text-lg font-bold text-neutral-800">
              Բոլոր հրապարակումները ({allPosts.length})
            </h2>
          </div>

          {/* Grid View for Archive */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {allPosts.map((post) => (
              <SmallCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      ) : activeCategory ? (
        /* ===================== CATEGORY FILTER VIEW ===================== */
        <div className="mx-auto max-w-[1000px] px-4 pb-20">
          {filteredFeatured && (
            <section className="mb-16 rounded-bl-[80px] bg-gradient-to-b from-neutral-100 to-purple-50/60 py-14 px-6 md:px-12">
              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                <div className="max-w-[340px]">
                  <CategoryBlock>{filteredFeatured.category}</CategoryBlock>
                  <h2 className="mt-6 text-2xl font-bold leading-snug">
                    <Link to={filteredFeatured.href} className="transition hover:text-purple-700">
                      {filteredFeatured.title}
                    </Link>
                  </h2>
                  {filteredFeatured.description && (
                    <p className="mt-4 text-xs leading-relaxed text-neutral-700">
                      {filteredFeatured.description}
                    </p>
                  )}
                  <time className="mt-8 block text-[11px] text-neutral-500">
                    {filteredFeatured.date}
                  </time>
                </div>

                <Link to={filteredFeatured.href} className="relative block justify-self-end">
                  <span className="pointer-events-none absolute -left-2 -top-2 h-6 w-6 border-l-[5px] border-t-[5px] border-neutral-800" />
                  <span className="pointer-events-none absolute -bottom-2 -right-2 h-6 w-6 border-b-[5px] border-r-[5px] border-neutral-800" />
                  <Img
                    src={filteredFeatured.image}
                    alt={filteredFeatured.title}
                    className="max-w-[490px]"
                  />
                </Link>
              </div>
            </section>
          )}

          {filteredGrid.length > 0 && (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              {filteredGrid.map((post) => (
                <SmallCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      ) : (
        /* ===================== DEFAULT HOME VIEW ===================== */
        <>
          {/* Top featured: Monthly Recap */}
          <section className="rounded-bl-[80px] bg-gradient-to-b from-neutral-100 to-purple-50/60 py-14">
            <div className="mx-auto grid max-w-[1000px] grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
              <div className="max-w-[300px]">
                <CategoryBlock>{topPost.category}</CategoryBlock>
                <h2 className="mt-6 text-2xl font-semibold">
                  <Link to={topPost.href} className="transition hover:text-purple-700">
                    {topPost.title}
                  </Link>
                </h2>
                <p className="mt-4 text-xs leading-relaxed text-neutral-700">
                  {topPost.description}
                </p>
                <time className="mt-8 block text-[11px] text-neutral-700">
                  {topPost.date}
                </time>
              </div>

              <Link to={topPost.href} className="relative block justify-self-end">
                <span className="pointer-events-none absolute -left-2 -top-2 h-6 w-6 border-l-[5px] border-t-[5px] border-neutral-800" />
                <span className="pointer-events-none absolute -bottom-2 -right-2 h-6 w-6 border-b-[5px] border-r-[5px] border-neutral-800" />
                <Img src={topPost.image} alt={topPost.title} className="max-w-[490px]" />
              </Link>
            </div>
          </section>

          {/* Բաց մի թող */}
          <section className="mx-auto max-w-[1000px] px-4 pt-16 pb-20">
            <GhostTitle className="-mb-2 md:-mb-3">Բաց մի թող</GhostTitle>

            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
              <article className="group">
                <Link to={missBig.href} className="block overflow-hidden">
                  <Img
                    src={missBig.image}
                    alt={missBig.title}
                    className="aspect-[385/290] transition duration-500 group-hover:scale-[1.03]"
                  />
                </Link>
                <div className="mt-5">
                  <CategoryTag>{missBig.category}</CategoryTag>
                  <h3 className="mt-5 text-lg font-semibold leading-snug">
                    <Link to={missBig.href} className="transition hover:text-purple-700">
                      {missBig.title}
                    </Link>
                  </h3>
                  <p className="mt-5 text-xs leading-6 text-neutral-700">
                    {missBig.description}
                  </p>
                  <time className="mt-5 block text-[11px] text-neutral-300">
                    {missBig.date}
                  </time>
                </div>
              </article>

              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                {missSmall.map((p) => (
                  <SmallCard key={p.id} post={p} />
                ))}
              </div>
            </div>
          </section>

          {/* Լավագույն */}
          <section>
            <div className="mx-auto max-w-[1000px] px-4">
              <GhostTitle className="-mb-2 md:-mb-3">Լավագույն</GhostTitle>
            </div>

            <div className="relative bg-gradient-to-b from-neutral-100 to-purple-50/60 py-8">
              <div className="mx-auto grid max-w-[1000px] grid-cols-1 items-center gap-10 px-4 md:grid-cols-[1.15fr_1fr]">
                <Link to={bestPost.href} className="relative block">
                  <span className="pointer-events-none absolute -right-2 -top-2 z-10 h-6 w-6 border-r-[5px] border-t-[5px] border-neutral-800" />
                  <span className="pointer-events-none absolute -bottom-2 -right-2 z-10 h-6 w-6 border-b-[5px] border-r-[5px] border-neutral-800" />
                  <Img
                    src={bestPost.image}
                    alt={bestPost.title}
                    className="aspect-[488/366]"
                  />
                </Link>

                <div className="max-w-[290px] md:pl-4">
                  <CategoryBlock>{bestPost.category}</CategoryBlock>
                  <h3 className="mt-6 text-2xl font-semibold leading-snug">
                    <Link to={bestPost.href} className="transition hover:text-purple-700">
                      {bestPost.title}
                    </Link>
                  </h3>
                  <p className="mt-5 text-xs leading-6 text-neutral-700">
                    {bestPost.description}
                  </p>
                  <time className="mt-10 block text-[11px] text-neutral-500">
                    {bestPost.date}
                  </time>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-[1000px] px-4 pt-14 pb-20">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {bestRow.map((p) => (
                  <SmallCard key={p.id} post={p} />
                ))}
              </div>
            </div>
          </section>

          {/* Գլխավոր */}
          <section>
            <div className="mx-auto max-w-[1000px] px-4">
              <GhostTitle className="-mb-2 text-neutral-100 md:-mb-3">
                Գլխավոր
              </GhostTitle>

              <div className="relative pb-20">
                <div className="relative h-[280px] overflow-hidden bg-gradient-to-br from-purple-300 via-purple-100 to-purple-300 md:h-[406px]">
                  <img
                    src={mainPost.image}
                    alt={mainPost.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>

                <article className="absolute bottom-0 left-4 w-[calc(100%-2rem)] max-w-[360px] bg-white p-6 shadow-[0_10px_40px_rgba(124,58,237,0.12)] md:left-[77px] md:pb-10">
                  <CategoryBlock>{mainPost.category}</CategoryBlock>
                  <h3 className="mt-5 text-lg font-bold leading-snug">
                    <Link to={mainPost.href} className="transition hover:text-purple-700">
                      {mainPost.title}
                    </Link>
                  </h3>
                  <p className="mt-4 text-[11px] leading-5 text-neutral-700">
                    {mainPost.description}
                  </p>
                </article>
              </div>
            </div>

            <div className="border-t border-neutral-100">
              <div className="mx-auto max-w-[1000px] px-4 py-4 text-right text-[10px] font-medium text-neutral-500">
                Թարմացվել է՝ {updatedAt}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Evocabank Full Footer */}
      <footer className="bg-[#fcfbfe] border-t border-gray-100 mt-16 pt-12 pb-8 px-6 text-xs text-gray-600">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-xl font-black text-[#6b21a8] tracking-wider">
              evoca<span className="text-gray-900">BANK</span>
            </h2>
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

        <div className="max-w-7xl mx-auto pt-6 border-t border-gray-200 text-[10px] text-gray-400 leading-relaxed">
          Հարգելի' այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ԲԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստույգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-[#6b21a8] text-white px-4 py-2.5 rounded-full shadow-lg font-bold text-xs cursor-pointer hover:bg-purple-900 transition">
        <span>Գրեք մեզ, մենք օնլայն ենք !</span>
        <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
      </div>
    </div>
  );
}