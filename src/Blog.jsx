import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tr, useLang } from './i18n';

/* ------------------------------ DATA ------------------------------ */

import { useFirebasePublicData } from './useFirebasePublicData';
import { pageData_Blog_categories, pageData_Blog_allPosts } from './sitePageData';




const updatedAt = "05/06/2026 16:43";

/* --------------------------- SMALL COMPONENTS --------------------------- */

function CategoryTag({ children }) {
  const { t } = useLang();
  return (
    <div className="flex items-center gap-2 border-l-2 border-purple-950 pl-2">
      <span className="text-[11px] font-semibold text-purple-950">{t(children)}</span>
    </div>
  );
}

function CategoryBlock({ children }) {
  const { t } = useLang();
  return (
    <div className="flex items-center gap-2">
      <span className="h-4 w-6 bg-purple-950" />
      <span className="text-xs font-semibold text-purple-950">{t(children)}</span>
    </div>
  );
}

function GhostTitle({ children, className = "" }) {
  const { t } = useLang();
  return (
    <h2
      className={`pointer-events-none relative z-10 select-none text-6xl font-extrabold leading-[1.15] tracking-tight text-neutral-200/70 md:text-7xl ${className}`}
    >
      {t(children)}
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
  const { t } = useLang();
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
            {t(post.title)}
          </Link>
        </h3>
        {post.description && (
          <p className="mt-2 text-xs text-neutral-600 line-clamp-2">
            {t(post.description)}
          </p>
        )}
        <time className="mt-4 block text-[11px] text-neutral-400">{post.date}</time>
      </div>
    </article>
  );
}

/* ------------------------------ MAIN PAGE ------------------------------ */

export default function Blog() {
  const categories = useFirebasePublicData('siteContent/pageData/Blog/categories', pageData_Blog_categories);
  const allPosts = useFirebasePublicData('siteContent/pageData/Blog/allPosts', pageData_Blog_allPosts);

  const { t } = useLang();
  const [activeCategory, setActiveCategory] = useState(null);
  const [isArchive, setIsArchive] = useState(false);

  const filteredPosts = activeCategory
    ? allPosts.filter((p) => p.category === activeCategory)
    : allPosts;

  const topPost = allPosts.find((p) => p.isTop) || allPosts[0];
  const missBig = allPosts.find((p) => p.id === 9) || allPosts[1];
  const missSmall = allPosts.filter((p) => [8, 10, 11, 7].includes(p.id));
  const bestPost = allPosts.find((p) => p.isBest) || allPosts[1];
  const bestRow = allPosts.filter((p) => [3, 4, 5].includes(p.id));
  const mainPost = allPosts.find((p) => p.isMain) || allPosts[5];

  const filteredFeatured = activeCategory ? filteredPosts[0] : null;
  const filteredGrid = activeCategory ? filteredPosts.slice(1) : [];

  const handleCategoryClick = (category) => {
    setIsArchive(false);
    setActiveCategory(activeCategory === category ? null : category);
  };

  const handleArchiveToggle = () => {
    setIsArchive(!isArchive);
    setActiveCategory(null);
  };

  return (
    <Tr>
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
            <span className="text-neutral-900">{t('Բլոգ')}</span>
            {isArchive && (
              <>
                <span>›</span>
                <span className="text-neutral-500">{t('Արխիվ')}</span>
              </>
            )}
          </nav>

          <h1 className="mt-8 text-3xl font-bold">
            {isArchive ? t('Բլոգի Արխիվ') : t('Բլոգ')}
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
                  {t(c)}
                </button>
              ))}
            </div>

            {/* Archive Button */}
            <button
              type="button"
              onClick={handleArchiveToggle}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-[11px] font-semibold transition ${
                isArchive
                  ? "bg-purple-800 text-white hover:bg-purple-900"
                  : "bg-purple-100 text-purple-800 hover:bg-purple-200"
              }`}
            >
              {isArchive ? t('Բոլոր հոդվածները') : t('Արխիվ')}
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

        {/* ===================== ARCHIVE VIEW ===================== */}
        {isArchive ? (
          <section className="mx-auto max-w-[1000px] px-4 pb-20">
            <div className="mb-8 flex items-center justify-between border-b border-neutral-100 pb-4">
              <h2 className="text-lg font-bold text-neutral-800">
                {t('Բոլոր հրապարակումները')} ({allPosts.length})
              </h2>
            </div>

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
                        {t(filteredFeatured.title)}
                      </Link>
                    </h2>
                    {filteredFeatured.description && (
                      <p className="mt-4 text-xs leading-relaxed text-neutral-700">
                        {t(filteredFeatured.description)}
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
            {/* Top featured */}
            <section className="rounded-bl-[80px] bg-gradient-to-b from-neutral-100 to-purple-50/60 py-14">
              <div className="mx-auto grid max-w-[1000px] grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
                <div className="max-w-[300px]">
                  <CategoryBlock>{topPost.category}</CategoryBlock>
                  <h2 className="mt-6 text-2xl font-semibold">
                    <Link to={topPost.href} className="transition hover:text-purple-700">
                      {t(topPost.title)}
                    </Link>
                  </h2>
                  <p className="mt-4 text-xs leading-relaxed text-neutral-700">
                    {t(topPost.description)}
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
              <GhostTitle className="-mb-2 md:-mb-3">{t('Բաց մի թող')}</GhostTitle>

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
                        {t(missBig.title)}
                      </Link>
                    </h3>
                    <p className="mt-5 text-xs leading-6 text-neutral-700">
                      {t(missBig.description)}
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
                <GhostTitle className="-mb-2 md:-mb-3">{t('Լավագույն')}</GhostTitle>
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
                        {t(bestPost.title)}
                      </Link>
                    </h3>
                    <p className="mt-5 text-xs leading-6 text-neutral-700">
                      {t(bestPost.description)}
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
                  {t('Գլխավոր')}
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
                        {t(mainPost.title)}
                      </Link>
                    </h3>
                    <p className="mt-4 text-[11px] leading-5 text-neutral-700">
                      {t(mainPost.description)}
                    </p>
                  </article>
                </div>
              </div>

              <div className="border-t border-neutral-100">
                <div className="mx-auto max-w-[1000px] px-4 py-4 text-right text-[10px] font-medium text-neutral-500">
                  {t('Թարմացվել է՝')} {updatedAt}
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
                {t('ք. Երևան, 0010,')}<br />
                {t('Հանրապետության 44/2')}
              </p>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                {t('Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից')}
              </p>
              <p className="text-gray-400 text-[11px]">
                1990 - 2026, © {t('ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ')}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-gray-900 text-sm mb-3">{t('Բանկի մասին')}</h3>
              <p><Link to="/about" className="hover:underline">{t('Մեր մասին')}</Link></p>
              <p><Link to="/management" className="hover:underline">{t('Ղեկավարություն')}</Link></p>
              <p><Link to="/shareholders" className="hover:underline">{t('Բաժնետերեր')}</Link></p>
              <p><Link to="/reports" className="hover:underline">{t('Հաշվետվություններ')}</Link></p>
              <p><Link to="#" className="hover:underline">{t('Իրավական ակտեր')}</Link></p>
              <p><Link to="/rates" className="hover:underline">{t('Սակագներ')}</Link></p>
              <p><Link to="#" className="hover:underline">{t('Օտարվող գույք')}</Link></p>
              <p><Link to="#" className="hover:underline">{t('Կառուցապատողներ')}</Link></p>
              <p><Link to="#" className="hover:underline">{t('Գործընկեր ավտոսրահներ')}</Link></p>
              <p><Link to="#" className="hover:underline">{t('Սակագների արխիվ')}</Link></p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-gray-900 text-sm mb-3">{t('Օգտակար հղումներ')}</h3>
              <p><Link to="#" className="hover:underline">{t('Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)')}</Link></p>
              <p><Link to="#" className="hover:underline">{t('Հաճախորդի ռեզիդենտության չափանիշներ')}</Link></p>
              <p><Link to="#" className="hover:underline">{t('Կարգավորում')}</Link></p>
              <p><Link to="#" className="hover:underline">{t('Գաղտնիության քաղաքականություն')}</Link></p>
              <p><Link to="#" className="hover:underline">{t('Ֆին. հաշտարար')}</Link></p>
              <p><Link to="#" className="hover:underline">{t('Ֆինանսական հանցագործությունների կանխարգելում')}</Link></p>
              <p><Link to="#" className="hover:underline">{t('Հղումներ Բանկի քարտապանների համար')}</Link></p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-gray-900 text-sm">{t('Այլ հղումներ')}</h3>
              <div className="space-y-1.5">
                <p><Link to="#" className="hover:underline">EvocaONLINE</Link></p>
                <p><Link to="#" className="hover:underline">{t('Պահատուփեր')}</Link></p>
                <p><Link to="#" className="hover:underline">{t('Հաճախ տրվող հարցեր')}</Link></p>
                <p><Link to="/announcements" className="hover:underline">{t('Հայտարարություններ')}</Link></p>
                <p><Link to="#" className="hover:underline">Dibrary</Link></p>
                <p><Link to="#" className="hover:underline">{t('Բուկլետներ')}</Link></p>
                <p><Link to="#" className="hover:underline">{t('Հետադարձ կապ')}</Link></p>
                <p><Link to="#" className="hover:underline">{t('Կայքի քարտեզ')}</Link></p>
              </div>

              <div className="pt-2 space-y-2">
                <p className="font-bold text-[#6b21a8]"><Link to="#">{t('Բանկի հասցեները և աշխատաժամերը')}</Link></p>
                <p className="font-bold text-[#6b21a8]"><Link to="#">{t('Կապ մեզ հետ')}</Link></p>
                <p className="font-bold text-gray-900 text-sm">+374 10 605555</p>
                <p className="font-bold text-[#6b21a8] text-base">8444</p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto pt-6 border-t border-gray-200 text-[10px] text-gray-400 leading-relaxed">
            {t('Հարգելի\' այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանություն...')}
          </div>
        </footer>

        {/* Floating Chat Button */}
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-[#6b21a8] text-white px-4 py-2.5 rounded-full shadow-lg font-bold text-xs cursor-pointer hover:bg-purple-900 transition">
          <span>{t('Գրեք մեզ, մենք օնլայն ենք !')}</span>
          <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
        </div>
      </div>
    </Tr>
  );
}