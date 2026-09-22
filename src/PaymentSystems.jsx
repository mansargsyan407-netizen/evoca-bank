import React from 'react';
import { Link } from 'react-router-dom';

const PaymentSystems = () => {
  const paymentSystemsList = [
    {
      id: 1,
      name: 'MoneyTun',
      logo: 'https://www.evoca.am/images-cache/payment_systems/1/1738743146575/200x100.png',
      description:
        'MoneyTun-ը գործում է 2007 թվականից: Կազմակերպության նպատակն է Ամերիկայի և Հայաստանի միջևապահով ու պաշտպանված գործարքներիապահովումն է՝ հիմնված տասնամյակների փորձի վրա: Դրամական փոխանցումները կազմում են MoneyTun-ի կողմից մատուցվող ծառայությունների զգալի մասը:',
      supportTitle: 'MoneyTun Հաճախորդների սպասարկման հեռախոսահամար`',
      phone: '+374 10 27 72 85',
      scheduleTitle: 'Աշխատանքային գրաֆիկ`',
      schedule: [
        'Երկուշաբթի-ուրբաթ 10:00-17:30',
        'Շաբաթ 10:00-14:00',
        'Կիրակի 10:00-13:00'
      ]
    },
    {
      id: 2,
      name: 'Ria',
      logo: 'https://www.evoca.am/images-cache/payment_systems/1/16510581265332/200x100.png',
      description:
        'Գործում է 182 երկրի ավելի քան 509,000 սպասարկման կետերում: Փոխանցումները կատարվում են դոլարով և եվրոյով: Միջնորդավճարը գանձվում է՝ ըստ RIA համակարգի սահմանած սակագների:',
      supportTitle: 'Ria Հաճախորդների սպասարկման հեռախոսահամար Հայաստանի համար`',
      phone: '+374 94 23 59 00',
      scheduleTitle: 'Աշխատանքային գրաֆիկ`',
      schedule: ['Երկուշաբթի-ուրբաթ, 09:00-18:00 (Երևանի ժամանակով)'],
      languagesTitle: 'Հաճախորդների աջակցության լեզուներ`',
      languages: 'ռուսերեն, անգլերեն'
    },
    {
      id: 3,
      name: 'UBPay',
      logo: 'https://www.evoca.am/images-cache/payment_systems/1/17304660969195/200x100.png',
      description:
        'UBPay - ը արագ դրամական փոխանցումների համակարգ է նախատեսված ֆիզիկական անձանց միջև ոչ առևտրային դրամական փոխանցումների իրականացման համար: Համակարգի միջոցով կարող եք իրականացնել փոխանցումներ Հայաստանից դեպի ՌԴ և հակառակ ուղղությամբ:',
      supportTitle: 'UBPay Հաճախորդների սպասարկման հեռախոսահամար`',
      phone: '+374 43 00 49 35'
    },
    {
      id: 4,
      name: 'INTELEXPRESS',
      logo: 'https://www.evoca.am/images-cache/payment_systems/1/16133289933621/200x100.png',
      description:
        'Գործում է 90 երկրի ավելի քան 57,000 կետերում (Ռուսաստան, ԱՄՆ այլ երկրներ, Մեծ Բրիտանիա, Չինաստան, Եվրոպական երկրներ և այլն): Փոխանցումները կատարվում են ռուբլով, դոլարով և եվրոյով: Միջնորդավճարը գանձվում է՝ ըստ IntelExpress-ի սահմանած սակագների:',
      supportTitle: 'INTELEXPRESS Հաճախորդների սպասարկման հեռախոսահամար`',
      phone: '+995 32 2 49 25 25'
    },
    {
      id: 5,
      name: 'STAK',
      logo: 'https://www.evoca.am/images-cache/payment_systems/1/17651707946608/200x100.png',
      description:
        '«ՍՏԱԿ» դրամական փոխանցումների հայաստանյան միասնական համակարգի գործունեության նպատակը ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար պատշաճ որակի դրամական փոխանցումների իրականացման կազմակերպումն է:\n\nՀամակարգը հնարավորություն է տալիս կատարել և ստանալ փոխանցումներ դոլարով և, ինչպես նաև եվրոյով:'
    },
    {
      id: 6,
      name: 'MoneyGram',
      logo: 'https://www.evoca.am/images-cache/payment_systems/1/17651703221475/200x100.png',
      description:
        'Գործում է 170 երկրի ավելի քան 125,000 կետերում: Արտերկրից Հայաստան փոխանցվում է դոլար և եվրո, իսկ Հայաստանից արտերկիր՝ միայն դոլար: Միջնորդավճարը գանձվում է ըստ MoneyGram-ի սահմանած սանդղակի:',
      supportTitle: 'MoneyGram Հաճախորդների սպասարկման հեռախոսահամար`',
      phone: '1-800-926-9400'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans pb-16">
      
      {/* 1. Մանուշակագույն Header navigation բար (Նկար 1) */}
      <div className="bg-[#6b21a8] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center overflow-x-auto font-semibold text-xs md:text-sm">
          <Link
            to="/transfers/money"
            className="hover:bg-[#581c87] px-6 py-3.5 whitespace-nowrap transition opacity-90 hover:opacity-100"
          >
            Դրամական փոխանցումներ
          </Link>

          {/* Ակտիվ կետ՝ Վճարային համակարգեր */}
          <Link
            to="/transfers/payment-systems"
            className="bg-[#4c1d95] px-6 py-3.5 whitespace-nowrap font-bold transition"
          >
            Վճարային համակարգեր
          </Link>
        </div>
      </div>

      {/* Բովանդակություն */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        
        {/* 2. Breadcrumb (Նկար 1) */}
        <div className="text-xs text-gray-500 mb-6 flex items-center space-x-2">
          <span>🏠</span>
          <span>›</span>
          <Link to="/" className="hover:underline">Անհատ</Link>
          <span>›</span>
          <Link to="/transfers/money" className="hover:underline">Փոխանցումներ</Link>
          <span>›</span>
          <span className="text-gray-800 font-medium">Վճարային համակարգեր</span>
        </div>

        {/* 3. Վերնագիր */}
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">
          Վճարային համակարգեր
        </h1>

        {/* 4. Քարտերի ցանց ( Grid layout - 3 սյունակով, Նկար 1 և 2 ) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paymentSystemsList.map((system) => (
            <div
              key={system.id}
              className="border border-purple-100/80 rounded-3xl p-6 bg-white shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                {/* Լոգո */}
                <div className="h-20 flex items-center justify-center mb-6">
                  <img
                    src={system.logo}
                    alt={system.name}
                    className="max-h-16 max-w-[180px] object-contain"
                  />
                </div>

                {/* Նկարագրություն */}
                <p className="text-xs md:text-sm text-gray-600 font-medium leading-relaxed mb-6 whitespace-pre-line text-center">
                  {system.description}
                </p>
              </div>

              {/* Սպասարկման տվյալներ (եթե առկա են) */}
              {(system.supportTitle || system.schedule || system.languages) && (
                <div className="pt-4 border-t border-purple-50 text-center text-xs space-y-2 font-medium">
                  {system.supportTitle && (
                    <div>
                      <span className="text-purple-800 font-bold block mb-0.5">
                        {system.supportTitle}
                      </span>
                      <a
                        href={`tel:${system.phone}`}
                        className="text-gray-900 font-black hover:text-purple-700 transition"
                      >
                        {system.phone}
                      </a>
                    </div>
                  )}

                  {system.scheduleTitle && (
                    <div className="pt-1">
                      <span className="text-purple-800 font-bold block mb-0.5">
                        {system.scheduleTitle}
                      </span>
                      {system.schedule.map((item, idx) => (
                        <span key={idx} className="block text-gray-700">
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  {system.languagesTitle && (
                    <div className="pt-1">
                      <span className="text-purple-800 font-bold block mb-0.5">
                        {system.languagesTitle}
                      </span>
                      <span className="text-gray-700">{system.languages}</span>
                    </div>
                  )}
                </div>
              )}
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

export default PaymentSystems;