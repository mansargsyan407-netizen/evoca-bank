import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MapPin, HelpCircle, Globe, Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white text-gray-800 font-sans border-b border-gray-200">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-8 py-2 text-sm border-b border-gray-100">
        {/* Left Navigation */}
        <nav className="flex items-center gap-6 font-medium">
          <a href="#" className="text-purple-700 font-bold border-b-2 border-purple-700 pb-2 -mb-2">
            Անհատ
          </a>
          <a href="#" className="hover:text-purple-700 transition">Բիզնես</a>
          <a href="#" className="hover:text-purple-700 transition">Ակնթարթային վճարումներ</a>
          <a href="#" className="hover:text-purple-700 transition">Մեր մասին</a>
          <Link to="/news" className="hover:text-purple-700 transition">Նորություններ</Link>
          <a href="#" className="hover:text-purple-700 transition">Բլոգ</a>
          <a href="#" className="hover:text-purple-700 transition">Կարիերա</a>
        </nav>

        {/* Right Navigation & Icons */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1 text-purple-700 font-semibold hover:opacity-80">
            Անցանց հայտեր <ChevronDown size={16} />
          </button>
          <button className="flex items-center gap-1 text-purple-700 font-semibold hover:opacity-80">
            Հետադարձ կապ <ChevronDown size={16} />
          </button>

          <div className="flex items-center gap-4 text-gray-700">
            <button className="hover:text-purple-700"><MapPin size={18} /></button>
            <button className="hover:text-purple-700"><HelpCircle size={18} /></button>
            <button className="hover:text-purple-700"><Globe size={18} /></button>
            <button className="hover:text-purple-700"><Search size={18} /></button>
            <button className="hover:text-purple-700"><Menu size={20} /></button>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-tight text-gray-500">
          evoca
        </div>

        {/* Main Navigation */}
        <nav className="flex items-center gap-8 font-bold text-gray-900 text-sm">
          <a href="#" className="hover:text-purple-700 transition">Վարկեր</a>
          <a href="#" className="hover:text-purple-700 transition">Քարտեր</a>
          <a href="#" className="hover:text-purple-700 transition">Ավանդներ</a>
          <a href="#" className="hover:text-purple-700 transition">Հաշիվներ</a>
          <a href="#" className="hover:text-purple-700 transition">Փոխանցումներ</a>
          <a href="#" className="hover:text-purple-700 transition">Արժեթղթեր</a>
          <Link to="/evoca-salary" className="hover:text-purple-700 transition">EvocaSALARY</Link>
          <a href="#" className="hover:text-purple-700 transition">EvocaTOUCH</a>
        </nav>

        {/* Online Button */}
        <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold px-6 py-2.5 rounded-full transition shadow-md">
          EvocaONLINE
        </button>
      </div>
    </header>
  );
}