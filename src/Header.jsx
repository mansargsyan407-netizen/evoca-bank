// Header.jsx
import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { MapPin, HelpCircle, Globe, Search, Menu, X } from 'lucide-react';
import Dropdown from './Dropdown';
import SiteMenu from './SiteMenu';
import { useLang } from './i18n';

const TopLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `transition hover:text-[#6200e0] ${isActive ? 'text-[#6200e0]' : ''}`
    }
  >
    {children}
  </NavLink>
);

const MainLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `transition hover:text-[#6200e0] ${isActive ? 'text-[#6200e0]' : ''}`
    }
  >
    {children}
  </NavLink>
);

// label-ները հայերեն են՝ թարգմանվում են t()-ով
const onlineApplications = [
  { to: '/pmz-loan', label: 'ՓՄՁ վարկավորում' },
  { to: '/visa-infinite', label: 'Visa Infinite' },
  { to: '/cards/mastercard-standard', label: 'MasterCard Gold' },
  { to: '/cards/visa-gold-card', label: 'Visa Gold' },
];

export default function Header({ onOrderCall, onChangeLanguage }) {
  const { t, setLang } = useLang();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Բացվելիս ավտոմատ focus input-ի վրա
  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  // Esc-ով փակել
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeSearch();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery('');
  };

  const openMenu = () => {
    closeSearch();
    setMenuOpen(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    navigate(`/site-search?q=${encodeURIComponent(q)}`);
    closeSearch();
  };

  // Լեզվի փոխում՝ context-ում + (ցանկության դեպքում) արտաքին callback
  const changeLanguage = (code) => {
    setLang(code);
    onChangeLanguage?.(code);
  };

  const applicationItems = onlineApplications.map((i) => ({ ...i, label: t(i.label) }));

  const feedbackItems = [
    { href: 'tel:+37410605555', label: '+374 10 605555' },
    { href: 'tel:+37498205555', label: '+374 98 205555' },
    { href: 'tel:+37499605555', label: '+374 99 605555' },
    { href: 'tel:8444', label: '8444' },
    { onClick: onOrderCall, label: t('Պատվիրել զանգ') },
  ];

  const languageItems = [
    { onClick: () => changeLanguage('hy'), label: 'ՀԱՅ' },
    { onClick: () => changeLanguage('ru'), label: 'РУС' },
    { onClick: () => changeLanguage('en'), label: 'ENG' },
  ];

  return (
    <header className="w-full bg-white text-gray-800 font-sans border-b border-gray-200 relative">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-8 py-2 text-sm border-b border-gray-100">
        <nav className="flex items-center gap-6 font-medium">
          <TopLink to="/individual">{t('Անհատ')}</TopLink>
          <TopLink to="/business">{t('Բիզնես')}</TopLink>
          <TopLink to="/payments-evoca">{t('Ակնթարթային վճարումներ')}</TopLink>
          <TopLink to="/about">{t('Մեր մասին')}</TopLink>
          <TopLink to="/news">{t('Նորություններ')}</TopLink>
          <TopLink to="/blog">{t('Բլոգ')}</TopLink>
          <TopLink to="/careers">{t('Կարիերա')}</TopLink>
        </nav>

        <div className="flex items-center gap-6">
          <Dropdown label={t('Առցանց հայտեր')} items={applicationItems} />
          <Dropdown label={t('Հետադարձ կապ')} items={feedbackItems} />

          <div className="flex items-center gap-4 text-gray-700">
            <Link to="/addresses" className="hover:text-purple-700" aria-label={t('Հասցեներ')}>
              <MapPin size={18} />
            </Link>
            <Link to="/help-center" className="hover:text-purple-700" aria-label={t('Օգնություն')}>
              <HelpCircle size={18} />
            </Link>
            <Dropdown label={<Globe size={18} />} items={languageItems} />

            {/* Search icon → բացում է որոնման տողը */}
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              className="hover:text-purple-700 transition"
              aria-label={t('Որոնում')}
              aria-expanded={searchOpen}
            >
              <Search size={18} />
            </button>

            {/* Menu icon → բացում է կայքի մենյուն */}
            <button
              type="button"
              onClick={openMenu}
              className="hover:text-purple-700 transition"
              aria-label={t('Կայքի մենյու')}
              aria-expanded={menuOpen}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar (բացվող) */}
      {searchOpen && (
        <div className="absolute inset-x-0 top-0 z-50 bg-white border-b border-gray-200 shadow-md">
          <form
            onSubmit={handleSearch}
            className="flex items-center justify-center gap-6 px-8 py-5"
          >
            <label htmlFor="site-search" className="font-bold text-gray-900 text-base">
              {t('Որոնում')}
            </label>

            <div className="relative w-full max-w-3xl">
              <input
                id="site-search"
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full h-10 pl-3 pr-10 border border-gray-200 rounded-sm bg-white text-sm
                           focus:outline-none focus:border-purple-700"
              />
              <button
                type="submit"
                aria-label={t('Որոնել')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-800 hover:text-purple-700"
              >
                <Search size={16} />
              </button>
            </div>

            <button
              type="button"
              onClick={closeSearch}
              aria-label={t('Փակել')}
              className="text-gray-300 hover:text-gray-500 transition"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
          </form>
        </div>
      )}

      {/* Main Bar */}
      <div className="flex items-center justify-between px-8 py-4">
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight text-purple-800 cursor-pointer hover:opacity-90 transition"
        >
          evoca
        </Link>

        <nav className="flex items-center gap-8 font-bold text-gray-900 text-sm">
          <MainLink to="/individual">{t('Վարկեր')}</MainLink>
          <MainLink to="/cards">{t('Քարտեր')}</MainLink>
          <MainLink to="/deposits/1">{t('Ավանդներ')}</MainLink>
          <MainLink to="/accounts">{t('Հաշիվներ')}</MainLink>
          <MainLink to="/transfers/money">{t('Փոխանցումներ')}</MainLink>
          <MainLink to="/securities/investment-services">{t('Արժեթղթեր')}</MainLink>
          <MainLink to="/evoca-salary">EvocaSALARY</MainLink>
          <MainLink to="/evocatouch">EvocaTOUCH</MainLink>
        </nav>

        <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold px-6 py-2.5 rounded-full transition shadow-md">
          EvocaONLINE
        </button>
      </div>

      {/* Full-screen site menu */}
      <SiteMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}