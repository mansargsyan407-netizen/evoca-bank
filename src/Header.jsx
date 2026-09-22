// Header.jsx
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
          {/* ԱՅՍՏԵՂ ՓՈԽՎԵԼ Է Link-Ի */}
          <Link to="/individual" className="hover:text-purple-700 transition">
            Անհատ
          </Link>
        
          <Link to="/business" className="hover:text-purple-700 transition">Բիզնես</Link>
<a href="/payments-evoca" className="hover:text-purple-700 transition">
  Ակնթարթային վճարումներ</a>      
    <Link to="/about" className="hover:text-purple-700 transition">
  Մեր մասին
</Link>
          <Link to="/news" className="hover:text-purple-700 transition">Նորություններ</Link>
   <Link to="/blog" className="hover:text-purple-700 transition">
          Բլոգ
        </Link>
          <a href="#" className="hover:text-purple-700 transition">Կարիերա</a>
        </nav>

        {/* Right Navigation & Icons */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1 text-purple-700 font-semibold hover:opacity-80">
            Առցանց հայտեր <ChevronDown size={16} />
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
       <Link 
  to="/" 
  className="text-3xl font-extrabold tracking-tight text-purple-800 cursor-pointer hover:opacity-90 transition"
>
  evoca
</Link>

        {/* Main Navigation */}
        <nav className="flex items-center gap-8 font-bold text-gray-900 text-sm">
          <a href="/individual" className="hover:text-purple-700 transition ">Վարկեր</a>
<Link to="/cards" className="hover:text-purple-700 transition">Քարտեր</Link>
<Link to="/deposits/1" className="hover:text-purple-700 transition font-semibold">
  Ավանդներ
</Link>
<Link to="/accounts" className="hover:text-purple-700 transition">
  Հաշիվներ
</Link>
<Link 
  to="/transfers/money" 
  className="hover:text-purple-700 transition font-medium"
>
  Փոխանցումներ
</Link>
<Link 
  to="/securities/investment-services" 
  className="hover:text-purple-700 transition"
>
  Արժեթղթեր
</Link>
          <Link to="/evoca-salary" className="hover:text-purple-700 transition">EvocaSALARY</Link>
          <Link 
  to="/evocatouch" 
  className="hover:text-purple-700 transition font-bold"
>
  EvocaTOUCH
</Link>
        </nav>

        {/* Online Button */}
        <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold px-6 py-2.5 rounded-full transition shadow-md">
          EvocaONLINE
        </button>
      </div>
    </header>
  );
}