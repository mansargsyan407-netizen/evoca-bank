import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GiftCardOrderBlackPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    passport: '',
    email: '',
    deliveryMethod: 'Բանկի տարածքում',
    branch: 'Գլխամաս',
    amount: '',
    agree: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert('Խնդրում ենք համաձայնվել պայմաններին');
      return;
    }
    console.log('Order submitted (Black):', formData);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f8] text-gray-800 font-sans flex flex-col justify-between relative">
      
      {/* BACKGROUND LEAF PATTERN */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200&auto=format&fit=crop')`,
        }}
      />

      {/* HEADER */}
      <header className="relative z-10 bg-white border-b border-gray-100 py-3.5 px-6 md:px-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div 
            onClick={() => navigate('/')} 
            className="cursor-pointer text-2xl font-black tracking-tight text-[#4a0082]"
          >
            evoca
          </div>
          <span className="text-gray-500 font-medium text-xs sm:text-sm">
            Պատվիրել Evoca Gift Card Black
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium">
          <span className="text-gray-600 hidden sm:inline">+374 10 605555</span>
          <button className="text-gray-500 hover:text-black text-sm">🌐</button>
          <button className="bg-[#6c00ff] hover:bg-[#5800d4] text-white px-5 py-1.5 rounded-full font-semibold transition shadow-sm cursor-pointer">
            Պատմություն
          </button>
        </div>
      </header>

      {/* MAIN FORM AREA */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-8 w-full my-auto">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: CARD DISPLAY (BLACK) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-5">
            <div className="w-full bg-white rounded-full py-3 px-8 text-center border border-gray-100 shadow-sm">
              <h1 className="text-gray-700 font-medium text-base sm:text-lg">
                Black Gift Card
              </h1>
            </div>

            <div className="w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden shadow-lg hover:scale-101 transition-transform">
              <img
                src="https://www.evoca.am/file_manager/Gift%20Card/gift11.png"
                alt="Black Gift Card"
                className="w-full h-auto object-cover"
              />
            </div>

            <p className="text-xs text-[#7c3aed] font-medium leading-relaxed text-center lg:text-left max-w-sm px-1">
              Անհրաժեշտ է լրացնել այն անձի տվյալները, ով ֆիզիկապես վերցնելու է Evoca Gift Card-ի առաքանին:
            </p>
          </div>

          {/* RIGHT COLUMN: INPUT FIELDS */}
          <div className="lg:col-span-7 bg-white/40 backdrop-blur-sm p-4 sm:p-6 rounded-3xl border border-gray-100/40 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
            
            {/* Անուն */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#6c00ff]">* Անուն</label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-full text-xs outline-none focus:border-[#6c00ff] transition"
              />
            </div>

            {/* Ստացման եղանակ */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#6c00ff]">* Ստացման եղանակ</label>
              <select
                name="deliveryMethod"
                value={formData.deliveryMethod}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-full text-xs outline-none focus:border-[#6c00ff] cursor-pointer"
              >
                <option value="Բանկի տարածքում">Բանկի տարածքում</option>
                <option value="Առաքում">Առաքում</option>
              </select>
            </div>

            {/* Ազգանուն */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#6c00ff]">* Ազգանուն</label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-full text-xs outline-none focus:border-[#6c00ff] transition"
              />
            </div>

            {/* Ընտրել մասնաճյուղը */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#6c00ff]">* Ընտրել մասնաճյուղը</label>
              <select
                name="branch"
                value={formData.branch}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-full text-xs outline-none focus:border-[#6c00ff] cursor-pointer"
              >
                <option value="Գլխամաս">Գլխամաս</option>
                <option value="Կենտրոն">Կենտրոն մասնաճյուղ</option>
              </select>
            </div>

            {/* Հեռախոսահամար */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#6c00ff]">* Հեռախոսահամար</label>
              <input
                type="text"
                name="phone"
                placeholder="374XXXXXXXX"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-full text-xs outline-none focus:border-[#6c00ff] transition"
              />
            </div>

            {/* Գումար */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#6c00ff]">* Գումար՝ 10,000 - 1,000,000 ՀՀ դրամ</label>
              <input
                type="number"
                name="amount"
                min="10000"
                max="1000000"
                placeholder="Օր․ 50000"
                required
                value={formData.amount}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-full text-xs outline-none focus:border-[#6c00ff] transition"
              />
            </div>

            {/* Անձնագիր կամ ID քարտ */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#6c00ff]">* Անձնագիր կամ ID քարտ</label>
              <input
                type="text"
                name="passport"
                required
                value={formData.passport}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-full text-xs outline-none focus:border-[#6c00ff] transition"
              />
            </div>

            {/* Էլ․ փոստ */}
            <div className="space-y-1 sm:col-start-1">
              <label className="text-xs font-semibold text-[#6c00ff]">* Էլ․ փոստ</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-full text-xs outline-none focus:border-[#6c00ff] transition"
              />
            </div>

            {/* CHECKBOX & SUBMIT BUTTON */}
            <div className="sm:col-span-2 pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleInputChange}
                  className="w-4 h-4 rounded border-gray-300 text-[#6c00ff] focus:ring-[#6c00ff] cursor-pointer"
                />
                <label htmlFor="agree" className="text-xs text-gray-600 font-medium cursor-pointer">
                  Համաձայնվել պայմաններին{' '}
                  <a href="#terms" className="text-[#6c00ff] underline font-bold ml-1">
                    Պայմաններ
                  </a>
                </label>
              </div>

              <div className="flex flex-col items-end gap-2 w-full sm:w-auto">
                <div className="text-right text-[10px] text-gray-500 font-medium">
                  <div>Փաթեթավորման գումար՝ 0 ՀՀ դրամ</div>
                  <div className="font-bold text-gray-700 text-xs">
                    Ընդհանուր՝ {formData.amount ? Number(formData.amount).toLocaleString() : 0} ՀՀ դրամ
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#6c00ff] hover:bg-[#5800d4] text-white px-10 py-2 rounded-full font-bold text-xs shadow-md transition cursor-pointer"
                >
                  Վճարել
                </button>
              </div>
            </div>

          </div>

        </form>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 bg-white border-t border-gray-100 pt-6 pb-4 px-6 md:px-16 text-xs text-gray-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pb-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xl font-black text-[#4a0082]">evocaBANK</div>
            <p className="text-[11px] text-gray-400">Բանկը Վերահսկվում է ՀՀ ԿԲ-ի Կողմից</p>
            <p className="text-[10px] text-gray-400">Copyright © 1990-2026 Evocabank</p>
          </div>

          <div className="text-center md:text-left space-y-1 text-[11px]">
            <p>ք. Երևան, 0010, Հանրապետության 44/2</p>
            <p className="text-[#6c00ff] font-medium">hello@evoca.am</p>
            <p className="font-semibold text-gray-700">+374 10 605555</p>
          </div>

          <div className="flex items-center justify-center">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=70x70&data=https://www.evoca.am" 
              alt="QR Code" 
              className="w-16 h-16 rounded border p-1"
            />
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex gap-2 text-gray-400">
              <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs hover:bg-[#6c00ff] hover:text-white transition cursor-pointer">f</span>
              <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs hover:bg-[#6c00ff] hover:text-white transition cursor-pointer">in</span>
              <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs hover:bg-[#6c00ff] hover:text-white transition cursor-pointer">yt</span>
              <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs hover:bg-[#6c00ff] hover:text-white transition cursor-pointer">ig</span>
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-0.5 border text-[10px] rounded text-gray-400">ArCa</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-3 text-[10px] text-gray-400 leading-tight flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="max-w-4xl text-center md:text-left">
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև տեքստերի և անգլերեն լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: Էվոկաբանկ ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստույգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
          </p>
          <div className="flex items-center gap-2 opacity-60">
            <span className="font-bold text-gray-600">ArCa</span>
            <span className="font-bold text-gray-600">abcfinance</span>
          </div>
        </div>
      </footer>

    </div>
  );
}