// Dropdown.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const itemClass =
  'block px-6 py-3 text-center font-bold text-gray-900 text-sm hover:text-[#6200e0] hover:bg-gray-50 transition';

export default function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Փակել, երբ սեղմում են դրսում
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 text-[#6200e0] font-semibold hover:opacity-80"
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
          {items.map((item) => {
            // Կոճակ (օր. modal բացելու համար)
            if (item.onClick) {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    item.onClick();
                  }}
                  className={`${itemClass} w-full`}
                >
                  {item.label}
                </button>
              );
            }

            // tel:, mailto: կամ արտաքին հղում
            if (item.href) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={itemClass}
                >
                  {item.label}
                </a>
              );
            }

            // Ներքին route
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={itemClass}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}