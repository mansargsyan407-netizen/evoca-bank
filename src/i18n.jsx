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
import { get, ref } from 'firebase/database';
import { realtimeDb } from './firebase';
import { SITE_TRANSLATIONS } from './siteTranslations';

const DICTIONARIES = { hy: {}, ...SITE_TRANSLATIONS };

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
  const [remoteDictionaries, setRemoteDictionaries] = useState(null);

  useEffect(() => {
    let active = true;

    get(ref(realtimeDb, 'siteContent/translations'))
      .then((snapshot) => {
        if (!active) return;

        if (!snapshot.exists()) {
          console.warn('Firebase-ում կայքի թարգմանությունները չկան․ օգտագործվում են պահուստային տվյալները։');
          return;
        }

        const remote = snapshot.val();
        const valid = ['ru', 'en'].every(
          (code) =>
            remote[code] &&
            (Array.isArray(remote[code]) || typeof remote[code] === 'object') &&
            Object.values(remote[code]).every(
              (entry) =>
                Array.isArray(entry) &&
                entry.length === 2 &&
                typeof entry[0] === 'string' &&
                typeof entry[1] === 'string',
            ),
        );

        if (!valid) {
          throw new Error('Firebase-ում կայքի թարգմանությունների ձևաչափը սխալ է։');
        }

        setRemoteDictionaries(
          Object.fromEntries(
            ['ru', 'en'].map((code) => [
              code,
              Object.fromEntries(Object.values(remote[code])),
            ]),
          ),
        );
      })
      .catch((error) => {
        console.error('Չհաջողվեց բեռնել կայքի թարգմանությունները Firebase-ից։', error);
      });

    return () => {
      active = false;
    };
  }, []);

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
    const dict = {
      ...DICTIONARIES[lang],
      ...remoteDictionaries?.[lang],
    };
    const t = (text) => {
      if (!text || typeof text !== 'string') return text;
      const cleanText = text.trim();
      return dict[cleanText] ?? dict[text] ?? text;
    };
    return { lang, setLang, t };
  }, [lang, remoteDictionaries]);

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