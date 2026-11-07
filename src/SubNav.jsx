import { Link } from "react-router-dom";

import { useFirebasePublicData } from './useFirebasePublicData';
import { pageData_SubNav_ITEMS } from './sitePageData';


export default function SubNav({ active }) {
  const ITEMS = useFirebasePublicData('siteContent/pageData/SubNav/ITEMS', pageData_SubNav_ITEMS);

  return (
    <nav className="bg-[#6200e0] sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 flex overflow-x-auto text-white text-xs font-semibold">
        {ITEMS.map((item) => {
          const cls = `whitespace-nowrap px-6 py-4 hover:bg-white/10 transition ${
            active === item.key ? "bg-black/20" : ""
          }`;
          return item.to ? (
            <Link key={item.key} to={item.to} className={cls}>
              {item.label}
            </Link>
          ) : (
            <a key={item.key} href={item.href} className={cls}>
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}