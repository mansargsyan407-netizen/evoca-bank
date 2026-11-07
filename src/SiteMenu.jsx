// SiteMenu.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useLang } from './i18n';

// TODO: ճշտիր route-երը քո router-ի համաձայն (ներքևինները կանխադրված/կռահված են)
import { useFirebasePublicData } from './useFirebasePublicData';

const MENUFirebaseFallback = [
  {
    id: 'individual',
    label: 'Անհատ',
    groups: [
      {
        title: 'Վարկեր',
        to: '/individual',
        items: [
          ['Վարկեր', '/individual'],
          ['Վարկային պատմություն և սքոր', '/credit-history'],
          ['Կարևոր տեղեկատվություն', '/loans/important-info'],
        ],
      },
      {
        title: 'Քարտեր',
        to: '/cards',
        items: [
          ['Քարտեր', '/cards'],
          ['Քարտերի տրամադրում և սպասարկում', '/cards/service'],
          ['Սոցիալական ապահովության վճարային քարտեր', '/cards/social'],
          ['Evoca Benefits', '/cards/benefits'],
        ],
      },
      {
        title: 'Ավանդներ',
        to: '/deposits/1',
        items: [
          ['Ավանդներ', '/deposits/1'],
          ['Կարևոր տեղեկատվություն', '/deposits/important-info'],
        ],
      },
      {
        title: 'Հաշիվներ',
        to: '/accounts',
        items: [
          ['Evoca խնայողական հաշիվ', '/accounts/savings'],
          ['Հաշիվների բացում և սպասարկում', '/accounts'],
          ['Առարկայազուրկ մետաղական հաշիվներ', '/accounts/metal'],
          ['Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում', '/accounts/non-resident'],
        ],
      },
      {
        title: 'Փոխանցումներ',
        to: '/transfers/money',
        items: [
          ['Դրամական փոխանցումներ', '/transfers/money'],
          ['Վճարային համակարգեր', '/transfers/systems'],
        ],
      },
      {
        title: 'Արժեթղթեր',
        to: '/securities/investment-services',
        items: [
          ['Ներդրումային ծառայություններ', '/securities/investment-services'],
          ['Պարտատոմսեր', '/securities/bonds'],
        ],
      },
    ],
  },
  {
    id: 'business',
    label: 'Բիզնես',
    groups: [
      {
        title: 'Վարկեր',
        to: '/business',
        items: [['Բիզնես վարկեր', '/business']],
      },
      {
        title: 'Լիզինգ',
        to: '/business/leasing',
        items: [
          ['Evoca Leasing', '/business/leasing'],
          ['Հատուկ առաջարկ', '/business/leasing/offer'],
        ],
      },
      {
        title: 'Հաշիվներ',
        to: '/business/accounts',
        items: [
          ['Հաշիվների բացում և սպասարկում', '/business/accounts'],
          ['Առարկայազուրկ մետաղական հաշիվներ', '/business/accounts/metal'],
        ],
      },
      {
        title: 'Ավանդներ',
        to: '/business/deposits',
        items: [['Դասական ավանդ', '/business/deposits']],
      },
      {
        title: 'Արժեթղթերի շուկա',
        to: '/business/securities',
        items: [
          ['Ներդրումային ծառայություններ', '/business/securities'],
          ['Պարտատոմսեր', '/business/bonds'],
          ['ՀԿԴ ծառայություններ', '/business/custody'],
          ['Ռեպո/Հակադարձ ռեպո գործարքներ', '/business/repo'],
          ['EvocaINVEST', '/business/evocainvest'],
        ],
      },
      {
        title: 'Առևտրի ֆինանսավորում',
        to: '/business/trade-finance',
        items: [
          ['Երաշխիք', '/business/guarantee'],
          ['Ֆակտորինգային ֆինանսավորում', '/business/factoring'],
          ['Ակրեդիտիվ', '/business/letter-of-credit'],
          ['Ինկասո', '/business/incasso'],
        ],
      },
      {
        title: 'Դիջիթալ',
        to: '/business/digital',
        items: [['V-POS Տերմինալ', '/business/v-pos']],
      },
      {
        title: 'Այլ',
        to: '/business/other',
        items: [['Պահատուփեր', '/business/safe-deposit']],
      },
    ],
  },
  // Առանց ենթամենյուի՝ սովորական հղում
  { id: 'instant', label: 'Ակնթարթային վճարումներ', to: '/payments-evoca' },
  {
    id: 'about',
    label: 'Մեր մասին',
    groups: [
      {
        title: 'Evoca-ի մասին',
        to: '/about',
        items: [
          ['Ընդհանուր', '/about'],
          ['Կառուցվածք', '/about/structure'],
          ['Բաժնետերեր', '/about/shareholders'],
          ['Ղեկավարություն', '/about/management'],
          ['Գործընկերներ', '/about/partners'],
          ['Մրցանակներ', '/about/awards'],
          ['CSR', '/about/csr'],
          ['Էվոկա ֆինանսական խումբ', '/about/group'],
        ],
      },
      {
        title: 'Սակագներ',
        to: '/tariffs',
        items: [
          ['Վարկեր ֆիզիկական անձանց', '/tariffs/individual-loans'],
          ['Վարկեր իրավաբանական անձանց', '/tariffs/business-loans'],
          ['Միջնորդավճարների սակագները', '/tariffs/fees'],
          ['Ավանդների սակագներ', '/tariffs/deposits'],
          ['Արխիվ', '/tariffs/archive'],
        ],
      },
      {
        title: 'Հաշվետվություններ',
        to: '/reports',
        items: [
          ['Աուդիտորական եզրակացություն', '/reports/audit'],
          ['Ֆինանսական հաշվետվություններ', '/reports/financial'],
          ['Ներդրողների համար', '/reports/investors'],
          ['Կիսամյակային հաշվետվություն', '/reports/semi-annual'],
        ],
      },
      { title: 'Հայտարարություններ', to: '/announcements', items: [] },
    ],
  },
  { id: 'news', label: 'Նորություններ', to: '/news' },
  { id: 'blog', label: 'Բլոգ', to: '/blog' },
  {
    id: 'careers',
    label: 'Կարիերա',
    groups: [
      {
        title: 'Evoca Լայֆ',
        to: '/careers',
        items: [
          ['Մշակույթ', '/careers/culture'],
          ['Առավելություններ', '/careers/benefits'],
          ['Հաճախ տրվող հարցեր', '/careers/faq'],
          ['Ինչպես ընդունվել աշխատանքի Evocabank-ում', '/careers/how-to-apply'],
        ],
      },
      {
        title: 'Աշխատանք և պրակտիկա',
        to: '/careers/jobs',
        items: [
          ['Աշխատանք Evoca-ում', '/careers/jobs'],
          ['Ուսումնական պրակտիկա', '/careers/internship'],
          ['EvocaBRIDGE', '/careers/evocabridge'],
        ],
      },
    ],
  },
];

export default function SiteMenu({ open, onClose }) {
  const MENU = useFirebasePublicData('siteContent/pageData/SiteMenu/MENU', MENUFirebaseFallback);

  const { t } = useLang();
  const [activeId, setActiveId] = useState('individual');
  const active = MENU.find((m) => m.id === activeId && m.groups) ?? MENU[0];

  // Esc-ով փակել + էջի scroll-ը արգելափակել բացված ժամանակ
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col md:flex-row bg-[#6600dd] text-white font-sans"
      role="dialog"
      aria-modal="true"
      aria-label={t('Կայքի մենյու')}
    >
      {/* ===== Ձախ մութ վահանակ ===== */}
      <aside className="relative w-full md:w-[37.5%] shrink-0 overflow-hidden bg-gradient-to-br from-[#2b2b33] via-[#1a1a20] to-[#121216]">
        {/* Եթե ունես statue-ի նկարը՝ դիր այստեղ՝ bg-[url('/img/menu-bg.jpg')] bg-cover */}
        <div className="pointer-events-none absolute -left-24 top-1/4 h-24 w-80 rounded-full bg-white/20 blur-sm" />

        <div className="relative flex h-full flex-col items-end pr-10 md:pr-[112px] pt-8 md:pt-12">
          <Link
            to="/"
            onClick={onClose}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            evoca
          </Link>

          <nav className="my-6 md:my-auto flex w-full flex-col items-end gap-5 md:gap-6 text-lg md:text-xl font-bold">
            {MENU.map((item) => {
              const isActive = item.groups && item.id === active.id;
              const cls = `relative w-full text-right transition-colors ${
                isActive ? 'text-[#6200e0]' : 'text-white hover:text-[#b58cff]'
              }`;

              const pointer = isActive && (
                <span
                  aria-hidden
                  className="absolute -right-10 md:-right-[112px] top-1/2 hidden md:block -translate-y-1/2
                             border-y-[14px] border-r-[24px] border-y-transparent border-r-[#6600dd]"
                />
              );

              // Ենթամենյուով tab
              if (item.groups) {
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    onMouseEnter={() => setActiveId(item.id)}
                    onFocus={() => setActiveId(item.id)}
                    className={cls}
                  >
                    {t(item.label)}
                    {pointer}
                  </button>
                );
              }

              // Սովորական հղում
              return (
                <Link key={item.id} to={item.to} onClick={onClose} className={cls}>
                  {t(item.label)}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* ===== Աջ մանուշակագույն վահանակ ===== */}
      <section className="relative flex-1 overflow-y-auto overflow-x-hidden">
        {/* Դեկորատիվ ձևեր */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[28%] top-[10%] h-[85%] w-[26%] -rotate-[28deg] rounded-[48px] bg-black/10" />
          <div className="absolute left-[56%] top-[8%] h-[40%] w-[26%] rotate-[28deg] rounded-[48px] bg-black/10" />
          <div className="absolute left-[30%] top-[58%] h-14 w-14 rounded-full border-[12px] border-white/10" />
          <div className="absolute left-2 top-[18%] border-y-[14px] border-r-[26px] border-y-transparent border-r-white/10" />
          <div className="absolute right-[12%] bottom-[8%] border-y-[14px] border-r-[26px] border-y-transparent border-r-white/10" />
        </div>

        {/* Փակել */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t('Փակել')}
          className="absolute right-8 top-6 z-10 text-white transition hover:opacity-70"
        >
          <X size={36} strokeWidth={1.5} />
        </button>

        <div className="relative px-8 pt-24 pb-24 md:pl-[13%] md:pr-16 md:pt-28">
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            {active.groups.map((group) => (
              <div key={group.title}>
                <Link
                  to={group.to}
                  onClick={onClose}
                  className="mb-5 block text-xl md:text-2xl font-bold hover:underline"
                >
                  {t(group.title)}
                </Link>

                <ul className="space-y-4 text-[15px] leading-snug text-white/90">
                  {group.items.map(([label, to]) => (
                    <li key={label}>
                      <Link
                        to={to}
                        onClick={onClose}
                        className="transition hover:text-white hover:underline"
                      >
                        {t(label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}