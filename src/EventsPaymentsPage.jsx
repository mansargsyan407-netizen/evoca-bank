import React from 'react';
import { Link } from 'react-router-dom';

export default function EventsPaymentsPage() {
  const eventsList = []; // Էջը դեռ դատարկ է, ինչպես 2-րդ նկարում

  return (
    <div className="min-h-screen bg-[#f8f7fc] text-gray-800 font-sans flex flex-col justify-between">
      
      {/* Top Navbar Header */}
      <header className="bg-white border-b border-gray-100 py-3 px-4 sm:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-2xl font-black text-[#6c00ff] tracking-tight">
              evoca
            </Link>
            <span className="text-xs sm:text-sm text-gray-500 font-medium pl-2 border-l border-gray-300">
              Online payment
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:+37410605555" className="text-xs sm:text-sm text-gray-700 font-semibold hover:text-[#6c00ff]">
              +374 10 605555
            </a>

            <button className="text-gray-500 hover:text-gray-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10z" strokeWidth="1.5" />
              </svg>
            </button>

            <button className="bg-[#6c00ff] hover:bg-[#5b00d6] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition shadow-sm">
              Պատմություն
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 w-full flex-1">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm mb-8 justify-center sm:justify-start">
          <Link to="/online-payments" className="text-[#6c00ff] font-semibold hover:underline">
            Գլխավոր
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-500 font-medium">Միջոցառումներ</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-10">
          Միջոցառումներ
        </h1>

        {/* Content Container */}
        {eventsList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto justify-items-center">
            {eventsList.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="w-full flex flex-col items-center justify-center p-8 rounded-3xl cursor-pointer min-h-[200px] text-center bg-white border border-transparent transition-all duration-300 hover:bg-[#e8e0fc] hover:border-[#8c46ff] hover:shadow-md"
              >
                <div className="mb-6 h-16 flex items-center justify-center">
                  <img src={item.icon} alt={item.title} className="max-h-full max-w-[120px] object-contain" />
                </div>
                <span className="font-bold text-gray-800 text-sm sm:text-base">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        ) : null}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 px-4 sm:px-8 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xl font-extrabold text-[#6c00ff]">
              evoca<span className="text-gray-900 font-bold">BANK</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              ք. Երևան, 0010, <br />
              Հանրապետության 44/2
            </p>
            <p className="text-[10px] text-gray-400">
              Բանկը վերահսկվում է ՀՀ ԿԲ-ի կողմից <br />
              Copyright © 1990-2026 Evocabank
            </p>
          </div>

          <div className="text-center md:text-left text-xs space-y-1">
            <a href="mailto:hello@evoca.am" className="text-[#6c00ff] font-semibold hover:underline block">
              hello@evoca.am
            </a>
            <p className="text-[#6c00ff] font-semibold">+374 10 605555</p>
          </div>

          <div className="flex justify-center items-center">
            <img 
              src="https://payments.evoca.am/assets/images/qr-evoca.png" 
              alt="Evoca QR Code" 
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
            />
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex gap-3 text-gray-500 text-xs font-semibold">
              <a href="https://www.facebook.com/evocabank/" className="hover:text-purple-600">f</a>
              <a href="https://www.instagram.com/evocabank/" className="hover:text-purple-600">i</a>
              <a href="https://www.youtube.com/channel/UCX1h31_vVfNdSATrEnWTWRA/videos" className="hover:text-purple-600">y</a>
              <a href="https://www.linkedin.com/company/evocabank" className="hover:text-purple-600">in</a>
              <a href="https://www.pinterest.com/evocabank/_created" className="hover:text-purple-600">p</a>
            </div>

            <div className="flex gap-2">
              <a href="#" className="w-24 block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
              </a>
              <a href="#" className="w-24 block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}