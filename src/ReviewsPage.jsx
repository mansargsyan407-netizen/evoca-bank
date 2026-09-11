import React from 'react';
import { Link } from 'react-router-dom';

export default function ReviewsPage() {
  return (
    <div className="w-full bg-[#fcfbfe] min-h-screen text-gray-800 font-sans">
      
      {/* 1. Վերևի Header-ը */}
      <header className="border-b border-gray-100 bg-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/">
              <span className="text-2xl font-black text-[#6c00ff] tracking-wider">EVOCABANK</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link to="/about" className="text-[#6c00ff] font-semibold border-b-2 border-[#6c00ff] pb-1">
                Evoca-ի մասին
              </Link>
              <Link to="/tariffs" className="text-gray-600 hover:text-purple-600">Սակագներ</Link>
              <Link to="/reports" className="text-gray-600 hover:text-purple-600">Հաշվետվություններ</Link>
              <Link to="/announcements" className="text-gray-600 hover:text-purple-600">Հայտարարություններ</Link>
            </nav>
          </div>
          <button className="bg-[#6c00ff] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#5800d4] transition shadow">
            EvocaONLINE
          </button>
        </div>
      </header>

      {/* 2. Մանուշակագույն Sub-navbar */}
      <nav className="bg-[#5800d4] text-white px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs sm:text-sm font-medium gap-4">
          <Link to="#" className="hover:text-purple-200">Ընդհանուր</Link>
          <Link to="#" className="hover:text-purple-200">Կառուցվածք</Link>
          <Link to="#" className="hover:text-purple-200">Բաժնետերեր</Link>
          <Link to="#" className="hover:text-purple-200">Ղեկավարություն</Link>
          <Link to="#" className="hover:text-purple-200">Գործընկերներ</Link>
          <Link to="#" className="hover:text-purple-200">Մրցանակներ</Link>
          <Link to="/reviews" className="bg-[#4600a8] px-4 py-1.5 rounded-sm font-bold shadow-inner">
            Կարծիքներ
          </Link>
          <Link to="#" className="hover:text-purple-200">CSR</Link>
        </div>
      </nav>

      {/* Էջի Վերնագիր */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-4">
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
          Կարծիքներ
        </h1>
      </div>

      {/* 3. ԿԱՐԾԻՔՆԵՐԻ ՑՈՒՑԱԿԸ */}
      <main className="max-w-6xl mx-auto px-6 py-6 space-y-12">

        {/* Կարծիք 1: Սուսաննա Վանյան */}
        <div className="bg-[#f5f3f9] rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative w-full md:w-5/12 flex items-center justify-center">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm w-full relative z-10 flex flex-col items-start min-h-[200px]">
              <div className="mb-4 text-cyan-400 font-bold">⌇⌇⌇</div>
              <h3 className="text-xl font-bold text-gray-900">Սուսաննա Վանյան</h3>
              <p className="text-gray-500 text-sm">Հաճախորդ</p>
            </div>
          </div>
          <div className="w-full md:w-7/12 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[#6c00ff] text-5xl font-serif font-black">‟‟</span>
              <div className="flex gap-1 text-amber-400 text-xl">★★★★★</div>
            </div>
            <p className="text-gray-800 text-base leading-relaxed">
              Հայաստանի իրականության մեջ բացառիկ հրաշք բանկ: Միայն այս հնարավորությունը ընձեռելով երիտասարդ ընտանիքներին ` նման ցածր տոկոսով բնակարան ձեռք բերել, արժանի է մեծ հարգանքի: Շնորհակալ ենք, որ Դուք կաք:
            </p>
          </div>
        </div>

        {/* Կարծիք 2: Նունե Գևորգյան */}
        <div className="bg-[#f5f3f9] rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-7/12 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[#6c00ff] text-5xl font-serif font-black">‟‟</span>
              <div className="flex gap-1 text-amber-400 text-xl">★★★★★</div>
            </div>
            <p className="text-gray-800 text-base leading-relaxed">
              Գերազանց սպասարկում, ընտիր ու հավես անձնակազմ Ազատության մասնաճյուղում: Վարկային բաժնից շատ շնորհակալ եմ, վարկս ձևակերպվեց առանց ավելորդ քաշքշուկների` հեշտ, արագ, որակով: Սպասարկման աղջիկներն էլ միշտ ժպիտով ու բարեհամբույր: Դարձել եմ արդեն մշտական հաճախորդ:
            </p>
          </div>
          <div className="relative w-full md:w-5/12 flex items-center justify-center">
            <div className="bg-white rounded-full p-8 shadow-sm w-64 h-64 relative z-10 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-bold text-gray-900">Նունե Գևորգյան</h3>
              <p className="text-gray-500 text-sm">Հաճախորդ</p>
            </div>
          </div>
        </div>

        {/* Կարծիք 3: Արամ Ազարյան */}
        <div className="bg-[#f5f3f9] rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative w-full md:w-5/12 flex items-center justify-center">
            <div className="bg-white rounded-[2.5rem] rotate-45 p-8 shadow-sm w-56 h-56 relative z-10 flex flex-col items-center justify-center text-center">
              <div className="-rotate-45">
                <h3 className="text-lg font-bold text-gray-900">Արամ Ազարյան</h3>
                <p className="text-gray-500 text-xs">Indigo Branding-ի հիմնադիր</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-7/12 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[#6c00ff] text-5xl font-serif font-black">‟‟</span>
              <div className="flex gap-1 text-amber-400 text-xl">★★★★★</div>
            </div>
            <p className="text-gray-800 text-base leading-relaxed">
              Դեպի նոր իրականություն. ահա թե ուր ենք մենք շարժվում ամեն մի նախագիծ <span className="text-[#6c00ff] font-bold">Evocabank</span>-ի հետ հաջողությամբ ավարտելիս: Ավելի քան 5 տարի համագործակցելով` կարելի է ասել, որ միասին անցել ենք մի մեծ ճանապարհ` լի էմոցիաներով, ստեղծագործ պահերով և ընկերական ու ջերմ հարաբերություններով:
            </p>
            <p className="text-gray-800 text-base leading-relaxed">
              Վստահորեն կարող ենք նշել, որ մեր ամենանորարարական և համարձակ գործընկերներից մեկն է <span className="text-[#6c00ff] font-bold">Evocabank</span>-ը` միշտ պատրաստ նորությունների և ստանդարտից դուրս լուծումների:
            </p>
          </div>
        </div>

        {/* Կարծիք 4: Էլեն Վարդանյան */}
        <div className="bg-[#f5f3f9] rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-7/12 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[#6c00ff] text-5xl font-serif font-black">‟‟</span>
              <div className="flex gap-1 text-amber-400 text-xl">★★★★★</div>
            </div>
            <p className="text-gray-800 text-base leading-relaxed">
              Լավագույն նորարարական և թվային բանկ` լավագույն ծառայություններով և անձնակազմով:
            </p>
          </div>
          <div className="relative w-full md:w-5/12 flex items-center justify-center">
            <div className="bg-white rounded-3xl p-8 shadow-sm w-full max-w-xs relative z-10 flex flex-col items-start min-h-[180px]">
              <h3 className="text-xl font-bold text-gray-900">Էլեն Վարդանյան</h3>
              <p className="text-gray-500 text-sm">Հաճախորդ</p>
            </div>
          </div>
        </div>

        {/* Կարծիք 5: Կամո Թովմասյան */}
        <div className="bg-[#f5f3f9] rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative w-full md:w-5/12 flex items-center justify-center">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm w-full relative z-10 flex flex-col items-start min-h-[220px]">
              <h3 className="text-xl font-bold text-gray-900">Կամո Թովմասյան</h3>
              <p className="text-gray-500 text-xs mt-1">
                KAMOBLOG մեդիա-հարթակի հիմնադիր, influencer
              </p>
            </div>
          </div>
          <div className="w-full md:w-7/12 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[#6c00ff] text-5xl font-serif font-black">‟‟</span>
              <div className="flex gap-1 text-amber-400 text-xl">★★★★★</div>
            </div>
            <p className="text-gray-800 text-base leading-relaxed">
              Բանկ, որ իր ռեբրենդինգի շքեղ միջոցառմամբ ու աշխատանքային ձևաչափով բանկայինոլորտում ամրապնդեց որակ և ճաշակ թելադրեց: <span className="text-[#6c00ff] font-bold">Evocabank</span>-ն առաջին իսկ վայրկյանից ստիպեց նորովի և ժամանակակից հայացքով նայել երբեմնի կարծրացած բանկային ծանր մթնոլորտին:
            </p>
            <p className="text-gray-800 text-base leading-relaxed">
              Հրաշալի թիմ, յուրահատուկ լուծումներ ու, իրոք, նոր իրականություն:
            </p>
          </div>
        </div>

      </main>

      {/* 4. FOOTER (Նկար 5-ի ճշգրիտ պատճենը) */}
      <footer className="bg-white border-t border-gray-200 mt-20 pt-12 pb-8 px-6 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Սյունակ 1: Logo & Հասցե */}
          <div className="space-y-4">
            <span className="text-2xl font-black text-gray-800 tracking-wider">evocaBANK</span>
            <p className="text-xs text-gray-500 leading-relaxed">
              ք. Երևան, 0010, <br />
              Հանրապետության 44/2
            </p>
            <p className="text-xs text-gray-500 leading-relaxed pt-2">
              <strong className="text-gray-700">Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից</strong>
            </p>
            <p className="text-[10px] text-gray-400 pt-2">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          {/* Սյունակ 2: Բանկի մասին */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Բանկի մասին</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="#" className="hover:text-[#6c00ff]">Մեր մասին</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Ղեկավարություն</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Բաժնետերեր</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Հաշվետվություններ</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Իրավական ակտեր</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Սակագներ</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Օտարվող գույք</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Կառուցապատողներ</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Գործընկեր ավտոսրահներ</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Սակագների արխիվ</Link></li>
            </ul>
          </div>

          {/* Սյունակ 3: Օգտակար հղումներ */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Օգտակար հղումներ</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="#" className="hover:text-[#6c00ff]">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Հաճախորդի ռեզիդենտության չափանիշներ</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Կարգավորում</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Գաղտնիության քաղաքականություն</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Ֆին. հաշտարար</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Ֆինանսական հանցագործությունների կանխարգելում</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Հղումներ Բանկի քարտապանների համար</Link></li>
            </ul>
          </div>

          {/* Սյունակ 4: Այլ հղումներ & Կապ */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Այլ հղումներ</h4>
            <ul className="space-y-2 text-xs mb-6">
              <li><Link to="#" className="hover:text-[#6c00ff]">EvocaONLINE</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Պահատուփեր</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Հաճախ տրվող հարցեր</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Հայտարարություններ</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Dibrary</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Բուկլետներ</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Հետադարձ կապ</Link></li>
              <li><Link to="#" className="hover:text-[#6c00ff]">Կայքի քարտեզ</Link></li>
            </ul>

            <div className="space-y-2 text-xs text-[#6c00ff] font-semibold">
              <p className="cursor-pointer hover:underline">Բանկի հասցեները և աշխատաժամերը</p>
              <p className="cursor-pointer hover:underline">Կապ մեզ հետ</p>
              <p className="text-gray-900 font-bold text-sm">+374 10 605555</p>
              <p className="text-gray-900 font-bold text-sm">8444</p>
            </div>
          </div>

        </div>
      </footer>

      {/* Օնլայն Չատի կոճակ */}
      <div className="fixed bottom-4 right-6 z-50">
        <button className="bg-[#6c00ff] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-xl hover:bg-[#5800d4] transition">
          Գրեք մեզ, մենք օնլայն ենք !
        </button>
      </div>

    </div>
  );
}