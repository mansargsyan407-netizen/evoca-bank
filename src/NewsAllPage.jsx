import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Home } from 'lucide-react';
import { newsPages, CATEGORIES } from './newsAllData';

const PAGE_SIZE = 36;
const ALL = 'Բոլորը';

// բոլոր էջերի քարտերը՝ մեկ ցանկով
const allNews = newsPages.flat();

// "dd.mm.yyyy" -> Date
const parseDate = (str) => {
  if (!str) return null;
  const [d, m, y] = str.split('.').map(Number);
  return new Date(y, m - 1, d);
};

function NewsCard({ item }) {
  return (
    <Link to={item.to || '/news'} className="group flex flex-col">
      <div className="aspect-[4/3] overflow-hidden bg-[#f2f2f2]">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#6200d9] to-[#a855f7] flex items-center justify-center group-hover:scale-105 transition duration-300">
            <span className="text-white/90 font-black text-2xl tracking-tight">evoca</span>
          </div>
        )}
      </div>

      <h3 className="mt-4 text-[13px] font-bold leading-snug text-gray-900 group-hover:text-[#6200d9] transition min-h-[3.6rem] line-clamp-3">
        {item.title}
      </h3>

      <p className="mt-2 text-[10px] font-bold text-gray-300">{item.date}</p>
    </Link>
  );
}

export default function NewsAllPage() {
  // կատեգորիան պահվում է URL-ում՝ /news/all?category=Բանկային
  const [searchParams, setSearchParams] = useSearchParams();
  const paramCategory = searchParams.get('category');
  const category = CATEGORIES.includes(paramCategory) ? paramCategory : ALL;
  const setCategory = (label) =>
    label === ALL ? setSearchParams({}) : setSearchParams({ category: label });

  const [page, setPage] = useState(1);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  // filter-ը կամ ամսաթիվը փոխելիս՝ վերադառնում ենք 1-ին էջ
  useEffect(() => {
    setPage(1);
  }, [category, from, to]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  // կատեգորիա + ամսաթվի միջակայք՝ ըստ բոլոր նորությունների
  const filtered = useMemo(() => {
    const fromDate = from ? new Date(from) : null;
    const toDate = to ? new Date(to) : null;

    return allNews.filter((item) => {
      if (category !== ALL && item.category !== category) return false;

      if (fromDate || toDate) {
        const d = parseDate(item.date);
        if (!d) return false;
        if (fromDate && d < fromDate) return false;
        if (toDate && d > toDate) return false;
      }
      return true;
    });
  }, [category, from, to]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const items = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // «Գլխավոր»-ը առանձին էջ է, մյուսները՝ այս էջի filter-ներ
  const pills = [ALL, 'Գլխավոր', ...CATEGORIES];

  return (
    <div className="w-full bg-white text-gray-900 font-sans">
      {/* faint lavender top edge */}
      <div className="h-2 w-full bg-gradient-to-b from-[#f3ecfd] to-white" />

      <div className="max-w-6xl mx-auto px-6 pt-6 pb-16">
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 text-[10px] text-gray-500 mb-6">
          <Link to="/" aria-label="Գլխավոր էջ" className="hover:text-[#6200d9]">
            <Home className="w-3 h-3" />
          </Link>
          <span>›</span>
          <Link to="/news" className="font-semibold text-gray-900 hover:text-[#6200d9]">
            Նորություններ
          </Link>
          <span>›</span>
          <span className="font-semibold text-gray-900">{category}</span>
        </nav>

        {/* TITLE */}
        <h1 className="text-2xl font-extrabold tracking-tight mb-8">{category}</h1>

        {/* FILTERS + DATE RANGE */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-3 lg:max-w-[720px]">
            {pills.map((label) => {
              const isActive = label === category;
              const classes = `px-4 py-2 rounded-full text-[11px] font-semibold transition ${
                isActive
                  ? 'bg-[#6200d9] text-white'
                  : 'bg-[#f2f2f2] text-gray-800 hover:bg-gray-200'
              }`;

              if (label === 'Գլխավոր') {
                return (
                  <Link key={label} to="/news/main" className={classes}>
                    {label}
                  </Link>
                );
              }

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setCategory(label)}
                  className={classes}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Calendar className="w-5 h-5 text-gray-400" />
            <input
              type="date"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              aria-label="Սկսած"
              className="w-[110px] border-b border-gray-300 bg-transparent pb-1 text-[10px] font-semibold text-gray-600 outline-none focus:border-[#6200d9]"
            />
            <span className="text-gray-400 text-xs">-</span>
            <input
              type="date"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              aria-label="Մինչև"
              className="w-[110px] border-b border-gray-300 bg-transparent pb-1 text-[10px] font-semibold text-gray-600 outline-none focus:border-[#6200d9]"
            />
          </div>
        </div>

        {/* GRID */}
        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            {items.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="py-24 text-center text-sm text-gray-400">
            Այս բաժնում նորություններ չկան։
          </p>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-14 border-t border-gray-200 pt-6 flex items-center gap-6">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              aria-label="Նախորդ էջ"
              className="text-gray-300 disabled:cursor-default enabled:text-[#6200d9] enabled:hover:opacity-70 transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-3 pl-6">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  className={`w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center transition ${
                    page === n
                      ? 'bg-[#6200d9] text-white'
                      : 'text-gray-800 hover:bg-[#eadffa]'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              aria-label="Հաջորդ էջ"
              className="text-gray-300 disabled:cursor-default enabled:text-[#6200d9] enabled:hover:opacity-70 transition"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}