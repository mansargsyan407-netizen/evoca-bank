import React from 'react';
import { Link } from 'react-router-dom';

const Avand = () => {
  const depositsData = [
    {
      id: 1,
      title: 'Դասական ավանդ',
      description:
        'Ձեր անհոգ ապագայի համար առաջարկում ենք ավելացնել Ձեր խնայողությունները` ներդնելով Դասական ավանդ` կայուն և բարձր եկամտաբերությամբ:',
      amount: '100,000 ֏',
      duration: '31-1,825 օր',
      rate: '10.5% ֏',
      replenishment: '100,000 ֏',
      bgColor: 'bg-purple-200',
      img: 'https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg',
    },
    {
      id: 2,
      title: 'Մանկական ավանդ',
      description:
        'Ձեր երեխայի անհոգ ապագայի համար առաջարկում ենք ներդնել «Մանկական» ավանդ: «Մանկական» ժամկետային ավանդն ընդունում ենք ֆիզիկական անձանցից` երեխաների անունով ներդնելու պայմանով:',
      amount: '100,000 ֏',
      duration: '18 լրանալը',
      rate: '9.5% ֏',
      replenishment: '40,000 ֏',
      bgColor: 'bg-amber-300',
      img: 'https://www.evoca.am/images-cache/deposits/1/16133900414285/415x261.jpg',
    },
    {
      id: 3,
      title: 'Ավանդ Evoca Online',
      description:
        'Ցանկանու՞մ եք ներդնել ավանդ բարձր տոկոսադրույքով, բայց չունե՞ք ժամանակ: Ձևակերպե՛ք EvocaONLINE ավանդ` առանց բանկ այցելելու: Իսկ մենք բոլոր փաստաթղթերը կուղարկենք Ձեր էլ. հասցեին:',
      amount: '100,000 ֏',
      duration: '31-1,825 օր',
      rate: '10.75% ֏',
      replenishment: null,
      bgColor: 'bg-purple-600',
      img: 'https://www.evoca.am/images-cache/deposits/1/16133900122121/415x261.jpg',
    },
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans pb-16">
      {/* Վերևի մանուշակագույն navigation */}
      <div className="bg-[#6b21a8] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center space-x-6 text-xs md:text-sm py-3 font-semibold">
          <Link to="/deposits/1" className="bg-purple-950 px-4 py-2 rounded-md font-bold">
            Ավանդներ
          </Link>

          <Link
      to="/deposits/1/important-info"
      className="hover:text-purple-200 cursor-pointer transition"
    >
      Կարևոր տեղեկատվություն
    </Link>
        </div>
      </div>

      {/* Breadcrumb և վերնագիր */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-6">
        <div className="text-xs text-gray-500 mb-6 flex items-center space-x-2">
          <span>🏠</span>
          <span>›</span>
          <Link to="/" className="hover:underline">Անհատ</Link>
          <span>›</span>
          <Link to="/deposits/1" className="hover:underline">Ավանդներ</Link>
          <span>›</span>
          <span className="text-gray-800 font-medium">Ավանդներ</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">
          Ավանդներ
        </h1>

        {/* Ավանդների ցուցակը */}
        <div className="space-y-12">
          {depositsData.map((deposit) => (
            <div key={deposit.id} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Նկարի բլոկը */}
              <div className="lg:col-span-5 h-64 md:h-72 rounded-2xl overflow-hidden shadow-sm bg-gray-100">
                <img
                  src={deposit.img}
                  alt={deposit.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Տվյալների բլոկը */}
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-xl md:text-2xl font-black text-gray-900">
                  {deposit.title}
                </h2>

                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {deposit.description}
                </p>

                {/* Ցուցանիշների ցանց (Grid) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                  <div>
                    <span className="text-[11px] text-gray-500 block font-medium">Սկսած</span>
                    <span className="text-lg md:text-xl font-black text-purple-700 block">
                      {deposit.amount}
                    </span>
                    <span className="text-[11px] text-gray-500 font-semibold">Գումար</span>
                  </div>

                  <div>
                    <span className="text-[11px] text-gray-500 block font-medium">
                      {deposit.id === 2 ? 'մինչև' : ''}
                    </span>
                    <span className="text-lg md:text-xl font-black text-purple-700 block">
                      {deposit.duration}
                    </span>
                    <span className="text-[11px] text-gray-500 font-semibold">Ժամկետ</span>
                  </div>

                  <div>
                    <span className="text-[11px] text-gray-500 block font-medium">
                      {deposit.id === 1 || deposit.id === 3 ? 'մինչև' : ''}
                    </span>
                    <span className="text-lg md:text-xl font-black text-purple-700 block">
                      {deposit.rate}
                    </span>
                    <span className="text-[11px] text-gray-500 font-semibold">Տոկոսադրույք</span>
                  </div>

                  {deposit.replenishment && (
                    <div>
                      <span className="text-[11px] text-gray-500 block font-medium">սկսած</span>
                      <span className="text-lg md:text-xl font-black text-purple-700 block">
                        {deposit.replenishment}
                      </span>
                      <span className="text-[11px] text-gray-500 font-semibold">
                        Համալրման հնարավորություն
                      </span>
                    </div>
                  )}
                </div>

                {/* «Մանրամասն» կոճակը */}
                <div className="pt-2">
                  <Link
                    to={
                      deposit.id === 1
                        ? '/deposits/1/classic'
                        : deposit.id === 2
                        ? '/deposits/1/mankakan'
                        : '/deposits/1/evoca-online'
                    }
                    className="inline-flex items-center space-x-1 bg-purple-100 hover:bg-purple-200 text-purple-800 text-xs font-bold px-6 py-2.5 rounded-full transition"
                  >
                    <span>Մանրամասն</span>
                    <span>›</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
       {/* ================= Footer Section ================= */}
      <footer className="w-full bg-[#f8f8fa] text-[#2d2d2d] pt-10 pb-6 px-6 border-t border-gray-100 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end pb-4 border-b border-gray-200 gap-4">
          <div className="text-gray-400 text-[11px]">
            Թարմացվել է` 31/08/2026 17:46
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
          {/* Column 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-1">
              <span className="text-xl font-black text-purple-700 tracking-tight">evoca</span>
              <span className="text-xl font-black text-gray-800 tracking-tight">BANK</span>
            </div>
            <p className="text-gray-600 leading-relaxed text-[12px]">
              ք. Երևան, 0010,<br />
              Հանրապետության 44/2
            </p>
            <p className="text-gray-500 leading-normal text-[11px]">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="text-[10px] text-gray-400 pt-1">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3 text-xs">Բանկի մասին</h4>
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

          {/* Column 3 */}
          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3 text-xs">Օգտակար հղումներ</h4>
            <p className="hover:text-purple-700 cursor-pointer leading-tight">
              Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)
            </p>
            <p className="hover:text-purple-700 cursor-pointer leading-tight">
              Հաճախորդի ռեզիդենտության չափանիշներ
            </p>
            <p className="hover:text-purple-700 cursor-pointer">Կարգավորում</p>
            <p className="hover:text-purple-700 cursor-pointer">Գաղտնիության քաղաքականություն</p>
            <p className="hover:text-purple-700 cursor-pointer">Ֆին. հաշտարար</p>
            <p className="hover:text-purple-700 cursor-pointer leading-tight">
              Ֆինանսական հանցագործությունների կանխարգելում
            </p>
            <p className="hover:text-purple-700 cursor-pointer leading-tight">
              Հղումներ Բանկի քարտապանների համար
            </p>
          </div>

          {/* Column 4 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-gray-900 text-xs">Այլ հղումներ</h4>
              <div className="flex gap-2 text-gray-400 text-xs">
                <span className="hover:text-purple-600 cursor-pointer">f</span>
                <span className="hover:text-purple-600 cursor-pointer">📷</span>
                <span className="hover:text-purple-600 cursor-pointer">p</span>
                <span className="hover:text-purple-600 cursor-pointer">▶</span>
                <span className="hover:text-purple-600 cursor-pointer">in</span>
              </div>
            </div>

            <p className="hover:text-purple-700 cursor-pointer">EvocaONLINE</p>
            <p className="hover:text-purple-700 cursor-pointer">Պահատուփեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Հաճախ տրվող հարցեր</p>
            <p className="hover:text-purple-700 cursor-pointer">Հայտարարություններ</p>
            <p className="hover:text-purple-700 cursor-pointer">Dlibrary</p>
            <p className="hover:text-purple-700 cursor-pointer">Բուկլետներ</p>

            <div className="pt-2 space-y-1">
              <p className="text-[#6b21a8] font-bold hover:underline cursor-pointer">
                Բանկի հասցեները և աշխատաժամերը
              </p>
              <p className="text-[#6b21a8] font-bold hover:underline cursor-pointer">
                Կապ մեզ հետ
              </p>
              <p className="text-[#6b21a8] font-bold text-xs">+374 10 605555</p>
              <p className="text-[#6b21a8] font-extrabold text-sm">8444</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200/60 pt-4 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400">
          <p className="max-w-2xl">
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանություն...
          </p>
          <div className="flex gap-4">
            <span className="font-bold text-gray-500">arca</span>
            <span className="font-bold text-gray-500">fininfo</span>
          </div>
        </div>

        {/* Floating Online Chat Widget */}
        <div className="fixed bottom-4 right-4 z-50 flex items-center">
          <button className="bg-[#6b21a8] text-white font-bold text-xs px-4 py-2 rounded-l-full shadow-lg hover:bg-purple-800 transition">
            Գրեք մեզ, մենք օնլայն ենք !
          </button>
          <div className="bg-purple-500 p-2 rounded-full text-white shadow-lg -ml-2 cursor-pointer">
            💬
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Avand;