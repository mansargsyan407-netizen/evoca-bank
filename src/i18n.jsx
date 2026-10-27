import React, {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ru, en } from './translations';
import { ruHero, enHero } from './translations.hero';
import { ruIndividual, enIndividual } from './translations.individual';
import { ruPower, enPower } from './translations.evocapower';
import { ruGoldLoan, enGoldLoan } from './translations.GoldLoanPage';
import { ruBusinessLoans, enBusinessLoans } from './translations.businessLoans';
import { ruFees, enFees } from './translations.fees';
import { ruLoanDetail, enLoanDetail } from './translations.LoanDetailPage';
import { ruCarLoan, enCarLoan } from './translations.CarLoanPage';
import { ruPropertySecuredLoan, enPropertySecuredLoan } from './translations.PropertySecuredLoanPage';
import { ruPayments, enPayments } from './translations.PaymentsPage';
import { ruAbout, enAbout } from './translations.about';
import { ruRate, enRate } from './translations.rate';
import { ruReport, enReport } from './translations.report';
import { ruAnnouncements, enAnnouncements } from './translations.announcements';
import { ruStructure, enStructure } from './translations.structure';
import { ruShareholders, enShareholders } from './translations.shareholders';
import { ruManagement, enManagement } from './translations.management';
import { ruNews, enNews } from './translations.news';
import { ruBlog, enBlog } from './translations.blog';
import { ruCareers, enCareers } from './translations.careers'; // Ավելացված է

const DICTIONARIES = {
  hy: {},
  ru: {
    ...ru,
    ...ruHero,
    ...ruIndividual,
    ...ruPower,
    ...ruGoldLoan,
    ...ruBusinessLoans,
    ...ruFees,
    ...ruLoanDetail,
    ...ruCarLoan,
    ...ruPropertySecuredLoan,
    ...ruPayments,
    ...ruAbout,
    ...ruRate,
    ...ruReport,
    ...ruAnnouncements,
    ...ruStructure,
    ...ruShareholders,
    ...ruManagement,
    ...ruNews,
    ...ruBlog,
    ...ruCareers, // Միացված է
  },
  en: {
    ...en,
    ...enHero,
    ...enIndividual,
    ...enPower,
    ...enGoldLoan,
    ...enBusinessLoans,
    ...enFees,
    ...enLoanDetail,
    ...enCarLoan,
    ...enPropertySecuredLoan,
    ...enPayments,
    ...enAbout,
    ...enRate,
    ...enReport,
    ...enAnnouncements,
    ...enStructure,
    ...enShareholders,
    ...enManagement,
    ...enNews,
    ...enBlog,
    ...enCareers, // Միացված է
  },
};

const SUPPORTED = ['hy', 'ru', 'en'];
const STORAGE_KEY = 'lang';

const LanguageContext = createContext({
  lang: 'hy',
  setLang: () => {},
  t: (s) => s,
});

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(saved)) return saved;
  } catch {
    /* localStorage հասանելի չէ */
  }
  return 'hy';
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  const setLang = (code) => {
    if (!SUPPORTED.includes(code)) return;
    setLangState(code);
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => {
    const dict = DICTIONARIES[lang] || {};
    const t = (text) => {
      if (!text || typeof text !== 'string') return text;
      const cleanText = text.trim();
      return dict[cleanText] ?? dict[text] ?? text;
    };
    return { lang, setLang, t };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);

const UNITS = {
  ru: { mln: 'млн', month: 'мес.', day: 'дн.', upto: 'До', from: 'от', to: 'до' },
  en: { mln: 'mln', month: 'months', day: 'days', upto: 'Up to', from: 'from', to: 'to' },
};

function translateValue(s, lang) {
  const u = UNITS[lang];
  if (!u) return s;
  const leftover = s
    .replace(/Մինչև|մլն\.?|ամիս|օր|ից|֏|%/g, '')
    .replace(/[\d\s.,\-–]/g, '');
  if (leftover) return s;

  return s
    .replace(/^([\d.,]+%?)-ից\s*-\s*([\d.,]+%)$/, (_, a, b) => `${u.from} ${a} ${u.to} ${b}`)
    .replace(/^([\d.,]+%?)-ից$/, (_, a) => a)
    .replace(/^Մինչև\s+/, `${u.upto} `)
    .replace(/մլն\.?/g, u.mln)
    .replace(/ամիս/g, u.month)
    .replace(/օր/g, u.day);
}

function translateString(str, t, lang) {
  if (!str) return str;
  const m = str.match(/^(\s*)([\s\S]*?)(\s*)$/);
  if (!m) return str;
  const core = m[2];
  if (!core) return str;

  const hit = t(core);
  if (hit !== core) return (/^[.,;:!?)]/.test(hit) ? '' : m[1]) + hit + m[3];
  return m[1] + translateValue(core, lang) + m[3];
}

export function Tr({ children }) {
  const { lang, t } = useLang();
  if (lang === 'hy') return <>{children}</>;

  const walk = (node) => {
    if (typeof node === 'string') return translateString(node, t, lang);
    if (!isValidElement(node)) return node;
    const inner = node.props.children;
    if (inner === undefined || inner === null) return node;
    return cloneElement(node, { children: Children.map(inner, walk) });
  };

  return <>{Children.map(children, walk)}</>;
}