import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { CATEGORIES } from './newsAllData';

// «Գլխավոր»-ը մնում է այս էջը, մյուսները բացում են «Բոլորը» էջը՝ արդեն ֆիլտրած
const filters = [
  { label: 'Գլխավոր', to: '/news/main' },
  ...CATEGORIES.map((label) => ({
    label,
    to: `/news/all?category=${encodeURIComponent(label)}`,
  })),
];

const featured = {
  to: '/news/norakaruyc-memorandum',
  category: 'Գլխավոր',
  title: 'Evocabank-ը և Norakaruyc.am-ը համագործակցության հուշագիր են ստորագրել',
  desc: 'Նոր թվային լուծումը հնարավորություն կտա բնակարան ընտրել և հիփոթեքի հայտ ներկայացնել մեկ հարթակից:',
  date: '22.06.2026',
  // Փոխարինիր քո իրական նկարով
  image: 'https://www.evoca.am/images-cache/news/1/1782137837549/510x383.jpg',
};

export default function NewsMainPage() {
  const activeFilter = 'Գլխավոր';

  return (
    <div className="w-full bg-white text-gray-900 font-sans">
      {/* BREADCRUMB + TITLE + FILTERS */}
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-10">
        <nav className="flex items-center gap-2 text-[10px] text-gray-500 mb-8">
          <Link to="/" aria-label="Գլխավոր էջ" className="hover:text-[#6200d9]">
            <Home className="w-3 h-3" />
          </Link>
          <span>›</span>
          <Link to="/news" className="font-semibold text-gray-900 hover:text-[#6200d9]">
            Նորություններ
          </Link>
          <span>›</span>
          <span className="font-semibold text-gray-900">Գլխավոր</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8">
          Նորություններ
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => {
              const isActive = f.label === activeFilter;
              return (
                <Link
                  key={f.label}
                  to={f.to}
                  className={`px-4 py-2 rounded-full text-[11px] font-semibold transition ${
                    isActive
                      ? 'bg-[#6200d9] text-white'
                      : 'bg-[#f2f2f2] text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {f.label}
                </Link>
              );
            })}
          </div>

          <Link
            to="/news/all"
            className="bg-[#eadffa] text-[#6200d9] text-[11px] font-bold px-6 py-2.5 rounded-full flex items-center gap-1.5 hover:bg-[#dccbf6] transition"
          >
            Բոլորը <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* FEATURED SECTION */}
      <section className="w-full bg-[#f6f1fd]">
        <div className="w-full bg-[#f3f3f3] rounded-bl-[120px] pb-2">
          <div className="max-w-6xl mx-auto px-6 py-10 lg:py-9 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="order-2 lg:order-1 flex flex-col justify-center lg:pr-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-5 h-4 bg-[#6200d9] inline-block" />
                <span className="text-xs font-bold text-[#2a0a5e]">{featured.category}</span>
              </div>

              <Link to={featured.to} className="group">
                <h2 className="text-2xl md:text-[28px] font-extrabold leading-[1.25] text-[#1a0b3b] group-hover:text-[#6200d9] transition">
                  {featured.title}
                </h2>
              </Link>

              <p className="mt-5 text-[11px] leading-relaxed text-gray-700 max-w-sm">
                {featured.desc}
              </p>

              <p className="mt-9 text-[11px] text-gray-800">{featured.date}</p>
            </div>

            {/* Image with purple corner brackets */}
            <div className="order-1 lg:order-2 relative lg:ml-auto w-full max-w-[490px]">
              <span className="absolute -top-3 -left-3 w-6 h-6 border-t-[5px] border-l-[5px] border-[#6200d9] z-10" />
              <span className="absolute -bottom-3 -left-3 w-6 h-6 border-b-[5px] border-l-[5px] border-[#6200d9] z-10" />
              <Link to={featured.to} className="block overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-[280px] md:h-[365px] object-cover"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-24 bg-white" />
      
    </div>
  );
}