import React, { useState } from 'react';
import { Eye, EyeOff, Globe, Phone, Mail, QrCode } from 'lucide-react';

export default function EvocaOn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f5f8] text-gray-800 flex flex-col justify-between p-4 md:p-8 font-sans">
      {/* Վերևի հատված՝ Լոգո և Լեզվի կոճակ */}
      <header className="flex justify-between items-center max-w-7xl w-full mx-auto">
        <div className="flex items-center space-x-1">
          <span className="text-3xl font-black text-[#5900b3] tracking-tight">evoca</span>
          <span className="text-3xl font-light text-gray-500 tracking-tight">BANK</span>
        </div>
        <button className="p-2 text-gray-700 hover:text-purple-700 transition">
          <Globe className="w-6 h-6" />
        </button>
      </header>

      {/* Կենտրոնական հատված՝ Մուտքի ձև (Form) */}
      <main className="w-full max-w-md mx-auto my-8">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Մուտք համակարգ</h1>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Մուտքանուն */}
            <div>
              <input
                type="text"
                placeholder="Մուտքանուն"
                className="w-full px-4 py-3 rounded-md border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm transition"
              />
            </div>

            {/* Գաղտնաբառ */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Գաղտնաբառ"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-purple-600 text-sm transition pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Մուտք կոճակ */}
            <button
              type="submit"
              className="w-full bg-[#5900b3] hover:bg-[#47008f] text-white font-medium py-3 rounded-md transition duration-200 mt-2"
            >
              Մուտք
            </button>
          </form>

          {/* Մոռացել եք մուտքանունը */}
          <div className="text-center pt-2">
            <a href="#" className="text-sm font-medium text-gray-800 hover:text-purple-700 underline underline-offset-4">
              Մոռացե՞լ եք մուտքանունը կամ գաղտնաբառը
            </a>
          </div>
        </div>

        {/* Մուտք QR կոդով */}
        <div className="bg-white rounded-lg shadow-sm p-4 mt-4 flex items-center justify-center space-x-2 text-gray-800 cursor-pointer hover:bg-gray-50 transition">
          <QrCode className="w-5 h-5 text-purple-700" />
          <span className="text-sm font-semibold">Մուտք QR կոդով</span>
        </div>

        {/* Կայքի հին տարբերակ */}
        <div className="text-center mt-6">
          <a href="#" className="text-xs font-semibold text-gray-700 hover:underline">
            Կայքի հին տարբերակ
          </a>
        </div>
      </main>

      {/* Ներքևի հատված (Footer) */}
      <footer className="max-w-7xl w-full mx-auto pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <div className="space-y-1 text-center md:text-left">
          <p>© 2026 Էվոկաբանկ</p>
          <p>Բանկը վերահսկվում է ՀՀ Կենտրոնական բանկի կողմից</p>
          <p>Տարբերակ 9.19.0.0</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center space-x-1">
            <Phone className="w-4 h-4 text-gray-600" />
            <span>(+374 10) 60 55 55</span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail className="w-4 h-4 text-gray-600" />
            <span>hello@evoca.am</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <a href="#" className="border border-gray-300 rounded px-2 py-1 flex items-center space-x-1 bg-white hover:bg-gray-50">
            <span className="font-semibold text-[10px]">App Store</span>
          </a>
          <a href="#" className="border border-gray-300 rounded px-2 py-1 flex items-center space-x-1 bg-white hover:bg-gray-50">
            <span className="font-semibold text-[10px]">Google Play</span>
          </a>
        </div>
      </footer>
    </div>
  );
}