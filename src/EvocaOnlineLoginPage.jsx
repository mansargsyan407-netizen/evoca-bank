import React from 'react';
import { Link } from 'react-router-dom';

export default function EvocaOnlineLoginPage() {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-gray-800 flex flex-col justify-between">
      
      {/* Top Purple Header Bar */}
      <div>
        <div className="bg-[#6b21a8] text-white px-6 py-2 flex justify-between items-center text-xs">
          <div className="flex items-center gap-4">
            <span className="text-xl font-black tracking-wider flex items-center">
              evoca<span className="font-normal text-xs ml-1 tracking-widest uppercase">ONLINE</span>
            </span>
            <div className="flex gap-2 text-[11px] text-purple-200">
              <span className="font-bold text-white cursor-pointer underline">Հայերեն</span>
              <span className="cursor-pointer hover:text-white">English</span>
              <span className="cursor-pointer hover:text-white">Русский</span>
            </div>
            <span className="text-[11px] text-purple-200 ml-4">
              21/08/2026 21:15 (UTC+04:00)
            </span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:underline text-xs">
            <span>❓</span>
            <span>Օգնություն</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Form Column */}
          <div className="md:col-span-4 border-r border-gray-100 pr-6">
            <p className="text-xs text-gray-500 mb-4">
              Մուտքագրեք Ձեր մուտքանունը և գաղտնաբառը
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <label className="text-gray-700 font-semibold">* Մուտքանուն</label>
                <input 
                  type="text" 
                  className="border border-gray-300 rounded px-2 py-1 w-36 focus:outline-none focus:border-purple-600"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="text-gray-700 font-semibold">* Գաղտնաբառ</label>
                <div className="flex items-center gap-1">
                  <input 
                    type="password" 
                    className="border border-gray-300 rounded px-2 py-1 w-36 focus:outline-none focus:border-purple-600"
                  />
                  <span className="cursor-pointer text-base">🔳</span>
                </div>
              </div>

              <div className="pt-1">
                <a href="#forgot" className="text-purple-700 text-[11px] hover:underline">
                  Մոռացե՞լ եք գաղտնաբառը
                </a>
              </div>

              <div className="pt-3">
                <button 
                  type="submit" 
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 px-6 py-1 rounded text-xs shadow-sm"
                >
                  Մուտք
                </button>
              </div>
            </form>

            {/* Bullet Info Points */}
            <div className="mt-8 space-y-3 text-[11px] text-gray-700 leading-snug">
              <div className="flex items-start gap-1">
                <span className="text-purple-700 font-bold">►</span>
                <p>
                  <strong>ՀԾ-ԻնտերնետԲանկ</strong> համակարգը թույլ է տալիս Ձեզ աշխարհի ցանկացած կետից, ցանկացած պահին Ինտերնետի միջոցով, ապահով և անվտանգ օգտվել բանկային ծառայություններից՝ առանց Բանկ այցելելու:
                </p>
              </div>

              <div className="flex items-start gap-1">
                <span className="text-purple-700 font-bold">►</span>
                <div>
                  <p>
                    Բարձր մակարդակի անվտանգություն ապահովելու համար համակարգում կիրառված են <strong>VASCO Data Security</strong> համաշխարհային ճանաչում ունեցող ընկերության <strong>Digipass</strong> ընտանիքի սարքերը:
                  </p>
                  <ul className="list-disc list-inside pl-2 pt-1 text-purple-700">
                    <li>
                      <span className="text-gray-700">Սարքերից օգտվելու կանոններին ծանոթանալու համար, մանրամասն տես՝ </span>
                      <a href="#digipass" className="underline">Digipass 270</a>, <a href="#digipass" className="underline">Digipass 260</a>, <a href="#digipass" className="underline">Digipass GO3</a>, <a href="#digipass" className="underline">Digipass GO6</a>:
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-1">
                <span className="text-purple-700 font-bold">►</span>
                <p>
                  Համակարգը ապահովում է անվտանգ և պաշտպանված բանկային սպասարկում 256-բիթ գաղտնագրմամբ SSL արձանագրության միջոցով:
                </p>
              </div>

              <div className="flex items-start gap-1">
                <span className="text-purple-700 font-bold">►</span>
                <p>
                  Համակարգից օգտվելու համար մանրամասն տես՝ <a href="#guide" className="text-purple-700 underline font-semibold">Օգտագործողի ձեռնարկը</a>:
                </p>
              </div>
            </div>
          </div>

          {/* Right News Column */}
          <div className="md:col-span-8 space-y-4">
            <h2 className="text-lg font-bold text-gray-900 border-b pb-2">
              Նորություններ
            </h2>

            <div className="space-y-1">
              <p className="text-xs">
                <span className="font-bold text-purple-800 underline cursor-pointer">
                  Անցանց Անվտանգություն
                </span>{' '}
                <span className="text-gray-400 text-[11px]">- 23 սեպտեմբերի, 2024</span>
              </p>
              <p className="text-xs text-gray-600">
                Անվտանգության նկատառումներից ելնելով խորհուրդ ենք տալիս
              </p>
              <a href="#more" className="text-xs text-purple-700 underline block">
                մանրամասն
              </a>
            </div>

            <div className="pt-4 border-t border-dashed border-gray-200">
              <a href="#all-news" className="text-xs text-purple-700 underline font-semibold">
                Բոլոր նորությունները
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="w-full text-right px-6 py-2 border-t border-gray-200 text-[11px] text-gray-500">
        © 2008-2026 Մշակված է Հայկական Ծրագրեր Կողմից | Տարբերակ 8.17.3
      </div>

    </div>
  );
}