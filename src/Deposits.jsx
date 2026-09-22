import React from 'react';
import { Link } from 'react-router-dom';

const Deposits = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans pb-16">
      
      {/* ================= BREADCRUMB & HEADER TITLE ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <div className="text-xs text-gray-500 mb-6 flex items-center space-x-2">
          <span>🏠</span>
          <span>›</span>
          <Link to="/about" className="hover:underline">Մեր մասին</Link>
          <span>›</span>
          <Link to="/rates" className="hover:underline">Սակագներ</Link>
          <span>›</span>
          <span className="text-gray-800 font-medium">Ավանդների սակագներ</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">
          Ավանդների սակագներ
        </h1>
      </div>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* LEFT SIDEBAR MENU */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-4">
              <div>
                <div className="flex justify-between items-center text-purple-700 font-bold text-sm mb-3 cursor-pointer">
                  <span>Ավանդների սակագներ</span>
                  <span className="text-xs">▲</span>
                </div>

                <div className="space-y-2 text-xs font-semibold text-gray-600 pl-2 border-l-2 border-purple-100">
                  <div className="text-purple-700 font-bold bg-purple-50 p-1.5 rounded cursor-pointer">
                    Դասական ավանդ
                  </div>
                  <div className="hover:text-purple-700 cursor-pointer p-1">Evoca Online Ավանդ</div>
                  <div className="hover:text-purple-700 cursor-pointer p-1">Մանկական ավանդ</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT MAIN DETAILS AREA */}
          <div className="lg:col-span-3 space-y-8">
            
            <h2 className="text-xl font-bold text-gray-900">
              Դասական ավանդ
            </h2>

            {/* MAIN INTEREST RATES TABLE */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
              <table className="w-full text-center border-collapse text-xs min-w-[700px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100 text-gray-700">
                    <th className="p-3 font-bold border-r border-gray-100" rowSpan={2}>
                      Նվազագույն գումար և արժույթ
                    </th>
                    <th className="p-3 font-bold border-r border-gray-100" rowSpan={2}>
                      Տոկոսների վճարման եղանակը
                    </th>
                    <th className="p-3 font-bold border-b border-gray-100" colSpan={7}>
                      Ընդունման ժամկետներն ըստ օրերի քանակի
                    </th>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-100 text-gray-700">
                    <th className="p-2 border-r border-gray-100">31 - 90 օր</th>
                    <th className="p-2 border-r border-gray-100">91 - 180 օր</th>
                    <th className="p-2 border-r border-gray-100">181 - 270 օր</th>
                    <th className="p-2 border-r border-gray-100">271 - 365 օր</th>
                    <th className="p-2 border-r border-gray-100">366 - 549 օր</th>
                    <th className="p-2 border-r border-gray-100">550 - 730 օր</th>
                    <th className="p-2">731 - 1825 օր</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  
                  {/* AMD SECTION */}
                  <tr>
                    <td className="p-3 font-semibold border-r border-gray-100 bg-gray-50/30" rowSpan={3}>
                      100,000 ՀՀ դրամ
                    </td>
                    <td className="p-2 text-left border-r border-gray-100">Տոկոսները ժամկետի վերջում վճարմամբ</td>
                    <td className="p-2 border-r border-gray-100 font-medium">4.50 %</td>
                    <td className="p-2 border-r border-gray-100 font-medium">6.00 %</td>
                    <td className="p-2 border-r border-gray-100 font-medium">7.00 %</td>
                    <td className="p-2 border-r border-gray-100 font-medium">8.00 %</td>
                    <td className="p-2 border-r border-gray-100 font-medium">9.50 %</td>
                    <td className="p-2 border-r border-gray-100 font-medium">10.00 %</td>
                    <td className="p-2 font-medium">10.50 %</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-left border-r border-gray-100">Ամենամսյա տոկոսների վճարմամբ</td>
                    <td className="p-2 border-r border-gray-100">4.00 %</td>
                    <td className="p-2 border-r border-gray-100">5.50 %</td>
                    <td className="p-2 border-r border-gray-100">6.50 %</td>
                    <td className="p-2 border-r border-gray-100">7.50 %</td>
                    <td className="p-2 border-r border-gray-100">9.00 %</td>
                    <td className="p-2 border-r border-gray-100">9.50 %</td>
                    <td className="p-2">10.00 %</td>
                  </tr>
                  <tr className="border-b-2 border-gray-200">
                    <td className="p-2 text-left border-r border-gray-100">Տոկոսները եռամսյակային վճարմամբ</td>
                    <td className="p-2 border-r border-gray-100 text-gray-400">-</td>
                    <td className="p-2 border-r border-gray-100">5.50 %</td>
                    <td className="p-2 border-r border-gray-100">6.50 %</td>
                    <td className="p-2 border-r border-gray-100">7.50 %</td>
                    <td className="p-2 border-r border-gray-100">9.00 %</td>
                    <td className="p-2 border-r border-gray-100">9.50 %</td>
                    <td className="p-2">10.00 %</td>
                  </tr>

                  {/* USD SECTION */}
                  <tr>
                    <td className="p-3 font-semibold border-r border-gray-100 bg-gray-50/30" rowSpan={3}>
                      200 ԱՄՆ դոլար
                    </td>
                    <td className="p-2 text-left border-r border-gray-100">Տոկոսները ժամկետի վերջում վճարմամբ</td>
                    <td className="p-2 border-r border-gray-100">0.75 %</td>
                    <td className="p-2 border-r border-gray-100">2.00 %</td>
                    <td className="p-2 border-r border-gray-100">2.50 %</td>
                    <td className="p-2 border-r border-gray-100">3.00 %</td>
                    <td className="p-2 border-r border-gray-100">4.00 %</td>
                    <td className="p-2 border-r border-gray-100">4.50 %</td>
                    <td className="p-2">5.00 %</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-left border-r border-gray-100">Ամենամսյա տոկոսների վճարմամբ</td>
                    <td className="p-2 border-r border-gray-100">0.50 %</td>
                    <td className="p-2 border-r border-gray-100">1.75 %</td>
                    <td className="p-2 border-r border-gray-100">2.25 %</td>
                    <td className="p-2 border-r border-gray-100">2.75 %</td>
                    <td className="p-2 border-r border-gray-100">3.75 %</td>
                    <td className="p-2 border-r border-gray-100">4.25 %</td>
                    <td className="p-2">4.75 %</td>
                  </tr>
                  <tr className="border-b-2 border-gray-200">
                    <td className="p-2 text-left border-r border-gray-100">Տոկոսները եռամսյակային վճարմամբ</td>
                    <td className="p-2 border-r border-gray-100 text-gray-400">-</td>
                    <td className="p-2 border-r border-gray-100">1.75 %</td>
                    <td className="p-2 border-r border-gray-100">2.25 %</td>
                    <td className="p-2 border-r border-gray-100">2.75 %</td>
                    <td className="p-2 border-r border-gray-100">3.75 %</td>
                    <td className="p-2 border-r border-gray-100">4.25 %</td>
                    <td className="p-2">4.75 %</td>
                  </tr>

                  {/* EUR SECTION */}
                  <tr>
                    <td className="p-3 font-semibold border-r border-gray-100 bg-gray-50/30" rowSpan={3}>
                      200 Եվրո
                    </td>
                    <td className="p-2 text-left border-r border-gray-100">Տոկոսները ժամկետի վերջում վճարմամբ</td>
                    <td className="p-2 border-r border-gray-100">0.35 %</td>
                    <td className="p-2 border-r border-gray-100">1.00 %</td>
                    <td className="p-2 border-r border-gray-100">1.50 %</td>
                    <td className="p-2 border-r border-gray-100">1.75 %</td>
                    <td className="p-2 border-r border-gray-100">2.00 %</td>
                    <td className="p-2 border-r border-gray-100">2.50 %</td>
                    <td className="p-2">3.00 %</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-left border-r border-gray-100">Ամենամսյա տոկոսների վճարմամբ</td>
                    <td className="p-2 border-r border-gray-100">0.25 %</td>
                    <td className="p-2 border-r border-gray-100">0.75 %</td>
                    <td className="p-2 border-r border-gray-100">1.25 %</td>
                    <td className="p-2 border-r border-gray-100">1.50 %</td>
                    <td className="p-2 border-r border-gray-100">1.75 %</td>
                    <td className="p-2 border-r border-gray-100">2.25 %</td>
                    <td className="p-2">2.75 %</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-left border-r border-gray-100">Տոկոսները եռամսյակային վճարմամբ</td>
                    <td className="p-2 border-r border-gray-100 text-gray-400">-</td>
                    <td className="p-2 border-r border-gray-100">0.75 %</td>
                    <td className="p-2 border-r border-gray-100">1.25 %</td>
                    <td className="p-2 border-r border-gray-100">1.50 %</td>
                    <td className="p-2 border-r border-gray-100">1.75 %</td>
                    <td className="p-2 border-r border-gray-100">2.25 %</td>
                    <td className="p-2">2.75 %</td>
                  </tr>

                </tbody>
              </table>
            </div>

            {/* TERMS & RULES LIST */}
            <div className="space-y-4 text-xs text-gray-700 leading-relaxed">
              <p>
                <b className="text-purple-800 font-bold">1. Ավանդն</b> ընդունվում է ֆիզիկական և իրավաբանական անձանցից, ինչպես Բանկի գործունեության վայրում, այնպես էլ «EvocaTouch» կամ «EvocaOnline» հեռակառավարման համակարգերի միջոցով:
              </p>
              <p>
                <b className="text-purple-800 font-bold">2.</b> Ավանդատուն կարող է համալրել (ավելացնել) իր Ավանդի գումարը սկսած նվազագույնը 40,000 ՀՀ դրամից, 100 ԱՄՆ դոլարից, 100 Եվրոյից կամ 10,000 ՌԴ ռուբլուց:
              </p>
              <p>
                <b className="text-purple-800 font-bold">3.</b> Ավանդի գումարի մասնակի նվազեցում չի թույլատրվում:
              </p>
              <p>
                <b className="text-purple-800 font-bold">4.</b> Ավանդատուի պահանջով ավանդային պայմանագիրը ժամկետից շուտ լուծելու դեպքում Բանկն իրականացնում է Ավանդի տոկոսագումարների վերահաշվարկ:
              </p>
            </div>

            {/* EARLY TERMINATION RECALCULATION TABLE */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
              <table className="w-full text-center border-collapse text-xs">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100 text-gray-700">
                    <th className="p-3 font-bold text-left border-r border-gray-100" rowSpan={2}>
                      Ավանդի արժույթ
                    </th>
                    <th className="p-2 font-bold border-b border-gray-100" colSpan={2}>
                      Տարեկան տոկոսադրույք ըստ ժամկետների
                    </th>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-100 text-gray-700">
                    <th className="p-2 border-r border-gray-100">Մինչև 365 օր</th>
                    <th className="p-2">366 - 1095 օր</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr>
                    <td className="p-2 text-left border-r border-gray-100 font-semibold">ՀՀ դրամ</td>
                    <td className="p-2 border-r border-gray-100">0.5 %</td>
                    <td className="p-2">8.5 %</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-left border-r border-gray-100 font-semibold">ԱՄՆ դոլար</td>
                    <td className="p-2 border-r border-gray-100">0.1 %</td>
                    <td className="p-2">3.5 %</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-left border-r border-gray-100 font-semibold">Եվրո</td>
                    <td className="p-2 border-r border-gray-100">0.1 %</td>
                    <td className="p-2">1.5 %</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-left border-r border-gray-100 font-semibold">ՌԴ ռուբլի</td>
                    <td className="p-2 border-r border-gray-100">0.1 %</td>
                    <td className="p-2">5 %</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ADDITIONAL CARDS PROMOTION TABLE */}
            <h3 className="text-base font-bold text-purple-900 pt-4">
              Լրացուցիչ պայմաններ (Անվճար քարտերի տրամադրում)
            </h3>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
              <table className="w-full text-center border-collapse text-xs min-w-[600px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100 text-gray-700">
                    <th className="p-3 font-bold border-r border-gray-100 text-left">
                      Ավանդի արժույթ / Քարտի տեսակ *
                    </th>
                    <th className="p-3 font-bold border-r border-gray-100">
                      ArCa Classic / Mastercard Standard / Visa Classic
                    </th>
                    <th className="p-3 font-bold border-r border-gray-100">
                      Mastercard Gold / Evoca Travel
                    </th>
                    <th className="p-3 font-bold">
                      VISA Infinite
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr>
                    <td className="p-2 text-left border-r border-gray-100 font-semibold">ՀՀ դրամ</td>
                    <td className="p-2 border-r border-gray-100">500,000 – 10,000,000 (ներառյալ)</td>
                    <td className="p-2 border-r border-gray-100">10,000,000 – 40,000,000 (ներառյալ)</td>
                    <td className="p-2">40,000,000 և ավել</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-left border-r border-gray-100 font-semibold">ԱՄՆ դոլար</td>
                    <td className="p-2 border-r border-gray-100">1,000 – 25,000 (ներառյալ)</td>
                    <td className="p-2 border-r border-gray-100">25,000 – 100,000 (ներառյալ)</td>
                    <td className="p-2">100,000 և ավել</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-left border-r border-gray-100 font-semibold">Եվրո</td>
                    <td className="p-2 border-r border-gray-100">1,000 – 20,000 (ներառյալ)</td>
                    <td className="p-2 border-r border-gray-100">20,000 – 100,000 (ներառյալ)</td>
                    <td className="p-2">100,000 և ավել</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ADDITIONAL BULLET POINTS */}
            <ul className="list-disc pl-5 space-y-2 text-xs text-gray-600 leading-relaxed">
              <li>Քարտերը տրամադրվում են տվյալ քարտային պրոդուկտի համար հասանելի արժույթով՝ ըստ հաճախորդի ցանկության:</li>
              <li>Հաճախորդի ցանկությամբ վերջինիս ընտանիքի անդամներին (ծնողներ, ամուսին/կին, չափահաս երեխաներ) կարող է տրամադրվել նույն դասի քարտ 50% զեղչով:</li>
              <li>Մեկ ավանդի շրջանակներում տրամադրվում է մեկ անվճար քարտ ավանդատուի անունով:</li>
            </ul>

          </div>

        </div>
      </div>
 {/* Footer Section */}
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
            <p className="hover:text-purple-700 cursor-pointer">Dibrary</p>
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

export default Deposits;