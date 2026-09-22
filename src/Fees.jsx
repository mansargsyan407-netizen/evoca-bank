import React from 'react';
import { Link } from 'react-router-dom';

const Fees = () => {
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
          <span className="text-gray-800 font-medium">Միջնորդավճարների սակագները</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">
          Միջնորդավճարների սակագները և դրույքները
        </h1>
      </div>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* LEFT SIDEBAR MENU */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-4">
              
              {/* Քարտեր accordion */}
              <div>
                <div className="flex justify-between items-center text-purple-700 font-bold text-sm mb-3 cursor-pointer">
                  <span>Քարտեր</span>
                  <span className="text-xs">▲</span>
                </div>

                <div className="space-y-2 text-xs font-semibold text-gray-600 pl-2 border-l-2 border-purple-100">
                  <div className="text-purple-700 font-bold bg-purple-50 p-1.5 rounded cursor-pointer">
                    Վճարային քարտեր
                  </div>
                  <div className="hover:text-purple-700 cursor-pointer p-1">Visa Digital քարտեր</div>
                  <div className="hover:text-purple-700 cursor-pointer p-1">Visa Vision քարտեր</div>
                  <div className="hover:text-purple-700 cursor-pointer p-1">ArCa Classic քարտեր</div>
                  <div className="hover:text-purple-700 cursor-pointer p-1">Սոցիալական հաշվի (կենսաթոշակային) քարտեր</div>
                  <div className="hover:text-purple-700 cursor-pointer p-1">Mastercard World Digital քարտեր</div>
                  <div className="hover:text-purple-700 cursor-pointer p-1">Evoca Gift Card</div>
                  <div className="hover:text-purple-700 cursor-pointer p-1">Mastercard Digital Gift Card</div>
                  <div className="hover:text-purple-700 cursor-pointer p-1">UnionPay քարտեր</div>
                  <div className="hover:text-purple-700 cursor-pointer p-1">Evoca Travel Card</div>
                  <div className="hover:text-purple-700 cursor-pointer p-1">4U.am Gift card</div>
                  <div className="hover:text-purple-700 cursor-pointer p-1">Homplex Gift card</div>
                  <div className="hover:text-purple-700 cursor-pointer p-1">Dalma Gift Card</div>
                  <div className="hover:text-purple-700 cursor-pointer p-1">Garage Masters' Mall Gift Card</div>
                  <div className="hover:text-purple-700 cursor-pointer p-1">Rio Gift Card</div>
                  <div className="hover:text-purple-700 cursor-pointer p-1">MyLer Gift card</div>
                  <div className="hover:text-purple-700 cursor-pointer p-1">Visa Infinite քարտեր</div>
                  <div className="hover:text-purple-700 cursor-pointer p-1">Visa Platinum վճարային</div>
                  <div className="hover:text-purple-700 cursor-pointer p-1">Arca Union Pay Co-badge քարտեր</div>
                </div>
              </div>

              {/* Հաշիվներ, Փոխանցումներ, Այլ */}
              <div className="pt-2 border-t border-gray-100 space-y-3 text-xs font-bold text-gray-700">
                <div className="flex justify-between items-center cursor-pointer hover:text-purple-700">
                  <span>Հաշիվներ</span>
                  <span className="text-xs">▼</span>
                </div>
                <div className="flex justify-between items-center cursor-pointer hover:text-purple-700">
                  <span>Փոխանցումներ</span>
                  <span className="text-xs">▼</span>
                </div>
                <div className="flex justify-between items-center cursor-pointer hover:text-purple-700">
                  <span>Այլ</span>
                  <span className="text-xs">▼</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT MAIN DETAILS AREA */}
          <div className="lg:col-span-3 space-y-6">
            
            <h2 className="text-xl font-bold text-gray-900">
              Վճարային քարտեր
            </h2>

            {/* MAIN FEES TABLE */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs min-w-[600px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100 text-gray-700">
                    <th className="p-3 font-bold border-r border-gray-100 w-1/3">Մատուցվող ծառայություններ</th>
                    <th className="p-3 font-bold border-r border-gray-100 text-center">
                      MasterCard Standard /<br />Visa Classic
                    </th>
                    <th className="p-3 font-bold border-r border-gray-100 text-center">
                      MasterCard Gold / Visa Gold<sup>[2]</sup>
                    </th>
                    <th className="p-3 font-bold text-center">
                      Visa Business
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  
                  <tr>
                    <td className="p-3 font-semibold border-r border-gray-100">Քարտի տրամադրում</td>
                    <td className="p-3 text-center border-r border-gray-100">0</td>
                    <td className="p-3 text-center border-r border-gray-100">0</td>
                    <td className="p-3 text-center">0</td>
                  </tr>

                  {/* Քարտի սպասարկում */}
                  <tr>
                    <td className="p-3 font-semibold border-r border-gray-100 align-top" rowSpan={2}>
                      Քարտի սպասարկում
                    </td>
                    <td className="p-2 border-r border-gray-100 bg-gray-50/50 font-medium">Տարեկան</td>
                    <td className="p-2 text-center border-r border-gray-100">5,000 ՀՀ դրամ</td>
                    <td className="p-2 text-center border-r border-gray-100">15,000 ՀՀ դրամ</td>
                    <td className="p-2 text-center">10,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-2 border-r border-gray-100 bg-gray-50/50 font-medium">Ամսական</td>
                    <td className="p-2 border-r border-gray-100 text-[11px] leading-tight">
                      <b>MasterCard Standard</b> 500 ՀՀ դրամ (Ամսական սպասարկման վճարով քարտի պատվեր հնարավոր է իրականացնել միայն <b>Բանկի մասնաճյուղերում</b>)
                    </td>
                    <td className="p-2 border-r border-gray-100 text-[11px] leading-tight">
                      <b>MasterCard Gold</b> 1,500 ՀՀ դրամ (Ամսական սպասարկման վճարով քարտի պատվեր հնարավոր է իրականացնել միայն <b>Բանկի մասնաճյուղերում</b>)
                    </td>
                    <td className="p-2 text-center text-gray-400">-</td>
                  </tr>

                  <tr>
                    <td className="p-3 font-semibold border-r border-gray-100">Շտապ թողարկում</td>
                    <td className="p-3 text-center border-r border-gray-100" colSpan={2}>10,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">10,000 ՀՀ դրամ</td>
                  </tr>

                  <tr>
                    <td className="p-3 font-semibold border-r border-gray-100">Կից քարտի տրամադրում</td>
                    <td className="p-3 text-center border-r border-gray-100">0</td>
                    <td className="p-3 text-center border-r border-gray-100">0</td>
                    <td className="p-3 text-center">0</td>
                  </tr>

                  <tr>
                    <td className="p-3 font-semibold border-r border-gray-100">Կից քարտի տարեկան սպասարկում<sup>[4]</sup></td>
                    <td className="p-3 text-center border-r border-gray-100">3,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center border-r border-gray-100">10,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">7,000 ՀՀ դրամ</td>
                  </tr>

                  <tr>
                    <td className="p-3 font-semibold border-r border-gray-100">Քարտային հաշվի չնվազող մնացորդ</td>
                    <td className="p-3 text-center border-r border-gray-100">0</td>
                    <td className="p-3 text-center border-r border-gray-100">0</td>
                    <td className="p-3 text-center">0</td>
                  </tr>

                  {/* Կանխիկացման սակագներ */}
                  <tr>
                    <td className="p-3 font-semibold border-r border-gray-100">
                      Քարտով կանխիկի տրամադրում Բանկի ATM-ով, քարտային հաշվից և POS տերմինալով<sup>[5]</sup>
                    </td>
                    <td className="p-3 text-center border-r border-gray-100 text-[11px]" colSpan={2}>
                      <b>ՀՀ դրամ՝</b> Ամսական մինչև 1,000,000 ՀՀ դրամ՝ Անվճար: 1,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ՝ 0.2%
                    </td>
                    <td className="p-3 text-center text-[11px]">
                      0.2%
                    </td>
                  </tr>

                  <tr>
                    <td className="p-3 font-semibold border-r border-gray-100">
                      Քարտով կանխիկի տրամադրում «ԱրՔա» համակարգի այլ բանկերի ATM-ներով և POS-երով<sup>[6]</sup>
                    </td>
                    <td className="p-3 text-center border-r border-gray-100">0.8%</td>
                    <td className="p-3 text-center border-r border-gray-100">0.8%</td>
                    <td className="p-3 text-center">0.8%</td>
                  </tr>

                  <tr>
                    <td className="p-3 font-semibold border-r border-gray-100">
                      Քարտով կանխիկի տրամադրում օտարերկրյա բանկերի ATM-ներով<sup>[7]</sup>
                    </td>
                    <td className="p-3 text-center border-r border-gray-100">1% min 1,500 ՀՀ դրամ</td>
                    <td className="p-3 text-center border-r border-gray-100">1% min 1,500 ՀՀ դրամ</td>
                    <td className="p-3 text-center">1% min 1,500 ՀՀ դրամ</td>
                  </tr>

                  <tr>
                    <td className="p-3 font-semibold border-r border-gray-100">Անկանխիկ գործարքներ POS տերմինալով</td>
                    <td className="p-3 text-center border-r border-gray-100">0</td>
                    <td className="p-3 text-center border-r border-gray-100">0</td>
                    <td className="p-3 text-center">0</td>
                  </tr>

                  <tr>
                    <td className="p-3 font-semibold border-r border-gray-100">Քարտի ապաբլոկավորում (սխալ PIN/CVV)</td>
                    <td className="p-3 text-center border-r border-gray-100">1,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center border-r border-gray-100">1,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">1,000 ՀՀ դրամ</td>
                  </tr>

                  <tr>
                    <td className="p-3 font-semibold border-r border-gray-100">Քարտի վերաթողարկում կորստի/վնասվելու դեպքում</td>
                    <td className="p-3 text-center border-r border-gray-100">3,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center border-r border-gray-100">10,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">5,000 ՀՀ դրամ</td>
                  </tr>

                  <tr>
                    <td className="p-3 font-semibold border-r border-gray-100">Գերածախսի գծով տույժեր</td>
                    <td className="p-3 text-center border-r border-gray-100">20% տարեկան</td>
                    <td className="p-3 text-center border-r border-gray-100">20% տարեկան</td>
                    <td className="p-3 text-center">20% տարեկան</td>
                  </tr>

                </tbody>
              </table>
            </div>

            {/* FOOTNOTES & EXTRA INFO (Ըստ նկար 5, 6, 7-ի) */}
            <div className="space-y-3 text-[11px] text-gray-500 leading-relaxed pt-4 border-t border-gray-200">
              <p>
                <sup>[1]</sup> MasterCard Standard, Visa Classic, MasterCard Gold, Visa Gold և VISA Infinite տեսակի վճարային քարտերը տրամադրվում են ֆիզիկական անձանց, իսկ Visa Business տեսակի վճարային քարտերը՝ իրավաբանական անձանց:
              </p>
              <p>
                <sup>[2]</sup> Visa Gold քարտերի թողարկումը դադարեցվել է 25.11.2024թ.-ից:
              </p>
              <p>
                <sup>[3]</sup> Քարտի 5 տարվա սպասարկման վճարը գանձվում է միանվագ՝ քարտի բացման պահին:
              </p>
              <p>
                <sup>[4]</sup> Օտարերկրյա քաղաքացիների համար գործում է նշված սակագնի հնգապատիկը:
              </p>
              <p>
                <sup>[8]</sup> Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ:
              </p>
              <p>
                <sup>[12]</sup> Գանձվում է միայն այն դեպքում, երբ բողոքարկման գործընթացի արդյունքում պարզվել է, որ գործարքը կատարվել է հաճախորդի կողմից:
              </p>
            </div>

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

export default Fees;