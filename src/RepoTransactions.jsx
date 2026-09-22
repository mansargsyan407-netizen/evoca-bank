import React from 'react';
import { Link } from 'react-router-dom';

const RepoTransactions = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans pb-16">
      
      {/* 1. Մանուշակագույն Header navigation բար */}
      <div className="bg-[#6b21a8] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center overflow-x-auto font-semibold text-xs md:text-sm">
          <Link
            to="/securities/investment-services"
            className="hover:bg-[#581c87] px-6 py-3.5 whitespace-nowrap transition opacity-90 hover:opacity-100"
          >
            Ներդրումային ծառայություններ
          </Link>

          <Link
            to="/securities/bonds"
            className="hover:bg-[#581c87] px-6 py-3.5 whitespace-nowrap transition opacity-90 hover:opacity-100"
          >
            Պարտատոմսեր
          </Link>

          <Link
            to="/securities/custody"
            className="hover:bg-[#581c87] px-6 py-3.5 whitespace-nowrap transition opacity-90 hover:opacity-100"
          >
            ՀԿԴ ծառայություններ
          </Link>

          {/* Ակտիվ կետ՝ Ռեպո/Հակադարձ Ռեպո գործարքներ */}
          <Link
            to="/securities/repo"
            className="bg-[#4c1d95] px-6 py-3.5 whitespace-nowrap font-bold transition"
          >
            Ռեպո/Հակադարձ Ռեպո գործարքներ
          </Link>

          <Link
            to="/securities/evocainvest"
            className="hover:bg-[#581c87] px-6 py-3.5 whitespace-nowrap transition opacity-90 hover:opacity-100"
          >
            EvocaINVEST
          </Link>
        </div>
      </div>

      {/* Բովանդակություն */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        
        {/* 2. Breadcrumb */}
        <div className="text-xs text-gray-500 mb-6 flex items-center space-x-2">
          <span>🏠</span>
          <span>›</span>
          <Link to="/" className="hover:underline">Անհատ</Link>
          <span>›</span>
          <Link to="/securities/investment-services" className="hover:underline">Արժեթղթեր</Link>
          <span>›</span>
          <span className="text-gray-800 font-medium">Ռեպո/Հակադարձ Ռեպո գործարքներ</span>
        </div>

        {/* 3. Վերևի բլոկ՝ տեքստ + աջ կողմի նկարը */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
          <div className="bg-gray-50/80 p-8 md:p-10 rounded-3xl space-y-4">
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
              Ռեպո/Հակադարձ Ռեպո <br /> գործարքներ
            </h1>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
              Կարճաժամկետ դրամական միջոցներ ներգրավելու և տեղաբաշխելու նպատակով Evocabank-ն իրականացնում է Ռեպո/Հակադարձ Ռեպո գործարքներ: Ռեպո/Հակադարձ Ռեպո գործարքների շնորհիվ՝ Բանկը կատարում է կարճաժամկետ իրացվելիության կառավարում:
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-sm bg-[#e9d5ff]/30 p-4 flex items-center justify-center">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg" 
              alt="Repo Transactions" 
              className="w-full h-72 md:h-80 object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* 4. Նկարագրության հատված */}
        <div className="max-w-5xl mx-auto space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed font-medium mb-12">
          <p>
            Բանկը Ռեպո/Հակադարձ Ռեպո գործարքներ է կնքում բացառապես Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից գրանցված և լիցենզավորված, մասնագիտացված ընկերությունների հետ (Բանկեր, Ներդրումային ընկերություններ, Ներդրումային ֆոնդեր, Վարկային կազմակերպություններ, Ապահովագրական ընկերություններ):
          </p>

          <p>
            Գործարքները կնքվում են ՀՀ պետական գանձապետական և ԿԲ-ի կողմից թողարկված պարտատոմսերով, ինչպես նաև ՀՀ առևտրային բանկերի, վարկային կազմակերպությունների կողմից թողարկված և Հայաստանի Ֆոնդային Բորսայում ցուցակված այլ կորպորատիվ պարտատոմսերով:
          </p>

          <p>
            Գործարքի հիմնական պայմանները որոշվում են երկկողմ բանակցությունների արդյունքում:
          </p>
        </div>

      </div>
          {/* Footer Section */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6 text-xs text-gray-600">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-3">
            <h3 className="text-xl font-black text-[#6b21a8]">evocaBANK</h3>
            <p>ք. Երևան, 0010, Հանրապետության 44/2</p>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="text-[10px] text-gray-400 pt-2">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3 text-sm">Բանկի մասին</h4>
            <p className="hover:text-purple-700 cursor-pointer">Մեր մասին</p>
            <p className="hover:text-purple-700 cursor-pointer">Ղեկավարություն</p>
            <p className="hover:text-purple-700 cursor-pointer">Բաժնետերեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Հաշվետվություններ</p>
            <p className="hover:text-purple-700 cursor-pointer">Իրավական ակտեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Սակագներ</p>
            <p className="hover:text-purple-700 cursor-pointer">Օտարվող գույք</p>
            <p className="hover:text-purple-700 cursor-pointer">Կառուցապատողներ</p>
            <p className="hover:text-purple-700 cursor-pointer">Գործընկեր ավտոսրահներ</p>
            <p className="hover:text-purple-700 cursor-pointer">Սակագների արխիվ</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3 text-sm">Օգտակար հղումներ</h4>
            <p className="hover:text-purple-700 cursor-pointer">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</p>
            <p className="hover:text-purple-700 cursor-pointer">Հաճախորդի ռեզիդենտության չափանիշներ</p>
            <p className="hover:text-purple-700 cursor-pointer">Կարգավորում</p>
            <p className="hover:text-purple-700 cursor-pointer">Գաղտնիության քաղաքականություն</p>
            <p className="hover:text-purple-700 cursor-pointer">Ֆին. հաշտարար</p>
            <p className="hover:text-purple-700 cursor-pointer">Ֆինանսական հանցագործությունների կանխարգելում</p>
            <p className="hover:text-purple-700 cursor-pointer">Հղումներ Բանկի քարտապանների համար</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 mb-3 text-sm">Այլ հղումներ</h4>
            <p className="hover:text-purple-700 cursor-pointer">EvocaONLINE</p>
            <p className="hover:text-purple-700 cursor-pointer">Պահատուփեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Հաճախ տրվող հարցեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Հայտարարություններ</p>
            <p className="hover:text-[#6b21a8] cursor-pointer font-semibold">Dibrary</p>
            <p className="hover:text-purple-700 cursor-pointer">Բուկլետներ</p>
            <p className="hover:text-purple-700 cursor-pointer">Հետադարձ կապ</p>
            <p className="hover:text-purple-700 cursor-pointer">Կայքի քարտեզ</p>

            <div className="flex gap-3 text-lg text-gray-600 pt-2">
              <span className="cursor-pointer hover:text-purple-700">f</span>
              <span className="cursor-pointer hover:text-purple-700">i</span>
              <span className="cursor-pointer hover:text-purple-700">p</span>
              <span className="cursor-pointer hover:text-purple-700">y</span>
              <span className="cursor-pointer hover:text-purple-700">in</span>
            </div>
            
            <div className="flex gap-2 pt-1">
              <button className="bg-black text-white px-3 py-1.5 rounded text-[10px] font-semibold">App Store</button>
              <button className="bg-black text-white px-3 py-1.5 rounded text-[10px] font-semibold">Google Play</button>
            </div>
            
            <p className="text-purple-700 font-bold hover:underline cursor-pointer pt-2">
              Բանկի հասցեները և աշխատաժամերը
            </p>
            <p className="text-purple-700 font-bold hover:underline cursor-pointer">Կապ մեզ հետ</p>
            <p className="font-bold text-gray-900 text-sm"><a href="tel:+37410605555">+374 10 605555</a></p>
            <p className="text-[#6b21a8] font-black text-base"><a href="tel:8444">8444</a></p>
          </div>

        </div>

        {/* Disclaimer Bottom Bar */}
        <div className="bg-gray-50 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100">
          <p className="text-[10px] text-gray-500 leading-relaxed max-w-4xl">
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանություն, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ԲԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
          </p>
          <div className="flex gap-3 opacity-70">
            <span className="font-bold border px-2 py-1 rounded bg-white text-[10px] text-gray-600">fininfo</span>
            <span className="font-bold border px-2 py-1 rounded bg-white text-[10px] text-gray-600">abcfinance.am</span>
            <span className="font-bold border px-2 py-1 rounded bg-white text-[10px] text-gray-600">arca</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RepoTransactions;