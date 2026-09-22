import React from 'react';
import { Link } from 'react-router-dom';

const BusinessLoans = () => {
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
          <span className="text-gray-800 font-medium">Վարկեր իրավաբանական անձանց</span>
        </div>

        <h1 className="text-3xl font-black text-gray-900 mb-8">
          Վարկեր իրավաբանական անձանց
        </h1>
      </div>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* LEFT SIDEBAR MENU */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              
              <div className="flex justify-between items-center text-purple-700 font-bold text-sm mb-4 cursor-pointer">
                <span>Վարկեր իրավաբանական անձանց</span>
                <span className="text-xs">▲</span>
              </div>

              <div className="space-y-3 text-xs font-semibold text-gray-600 pl-2 border-l-2 border-purple-100">
                <div className="text-purple-700 font-bold bg-purple-50 p-2 rounded cursor-pointer">
                  Խոշոր և ՓՄՁ բիզնես վարկ
                </div>
                <div className="hover:text-purple-700 cursor-pointer p-1">Վարկային գիծ</div>
                <div className="hover:text-purple-700 cursor-pointer p-1">Փոքր և միջին բիզնեսի վարկավորում</div>
                <div className="hover:text-purple-700 cursor-pointer p-1">Ավանդի գրավով ապահովված վարկ / վարկային սահմանաչափ</div>
                <div className="hover:text-purple-700 cursor-pointer p-1">Հաշվի վարկավորում</div>
                <div className="hover:text-purple-700 cursor-pointer p-1">Վարկեր ԳԳՀ - ԷԱ ՓՄՁ-ների համար ծրագիր</div>
                <div className="hover:text-purple-700 cursor-pointer p-1">Պարզ բիզնես վարկ</div>
                <div className="hover:text-purple-700 cursor-pointer p-1">Վարկ` ուղղված տնտեսության արդիականացման...</div>
                <div className="hover:text-purple-700 cursor-pointer p-1">Evoca GO</div>
                <div className="hover:text-purple-700 cursor-pointer p-1">KfW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում</div>
                <div className="hover:text-purple-700 cursor-pointer p-1">Բանկային երաշխիքներ</div>
                <div className="hover:text-purple-700 cursor-pointer p-1">Ֆակտորինգային ֆինանսավորում</div>
                <div className="hover:text-purple-700 cursor-pointer p-1">Աշխատավարձային նախագծի պայմաններ</div>
                <div className="hover:text-purple-700 cursor-pointer p-1">Լիզինգ</div>
                <div className="hover:text-purple-700 cursor-pointer p-1">Արագ բիզնես վարկ</div>
              </div>

            </div>
          </div>

          {/* RIGHT MAIN DETAILS AREA */}
          <div className="lg:col-span-3 space-y-8">
            
            <h2 className="text-2xl font-bold text-gray-900">
              Խոշոր և ՓՄՁ բիզնես վարկ
            </h2>

            {/* TABLE SECTION */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full text-left border-collapse text-xs">
                <tbody>
                  
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-semibold text-gray-400 w-8">1.</td>
                    <td className="p-4 font-bold text-gray-700 w-1/3">Արժույթ</td>
                    <td className="p-4 text-gray-700 font-medium">ՀՀ դրամ, ԱՄՆ դոլար կամ Եվրո</td>
                  </tr>

                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="p-4 font-semibold text-gray-400">2.</td>
                    <td className="p-4 font-bold text-gray-700">Վարկառու</td>
                    <td className="p-4 text-gray-700">ՀՀ ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական անձ, անհատ ձեռնարկատեր*</td>
                  </tr>

                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-semibold text-gray-400 align-top">3.</td>
                    <td className="p-4 font-bold text-gray-700 align-top">Նպատակ</td>
                    <td className="p-4 text-gray-700 space-y-2">
                      <p>• Հիմնական միջոցների ձեռքբերում/Կապիտալ ներդրումների իրականացում</p>
                      <p>• Նախագծերի ֆինանսավորում</p>
                      <p>• Շրջանառու միջոցների համալրում</p>
                      <p>• Ընթացիկ ծախսերի ֆինանսավորում, կրեդիտորական պարտքի մարում</p>
                      <p>• Այլ ֆինանսական կազմակերպություններում և/կամ Էվոկաբանկ ԲԲԸ-ում գործող վարկերի վերաֆինանսավորում</p>
                      <p>• Այլ նպատակներ</p>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="p-4 font-semibold text-gray-400">4.</td>
                    <td className="p-4 font-bold text-gray-700">Սահմանաչափ</td>
                    <td className="p-4 text-gray-700 font-bold">10,000,000-4,000,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ,</td>
                  </tr>

                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-semibold text-gray-400 align-top">5.</td>
                    <td className="p-4 font-bold text-gray-700 align-top">Տրամադրման եղանակ</td>
                    <td className="p-4 text-gray-700 space-y-1">
                      <p>• <b>Անկանխիկ</b></p>
                      <p>• <b>Վարկերը կարող են տրամադրվել միանվագ կամ փուլերով</b></p>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="p-4 font-semibold text-gray-400 align-top">6.</td>
                    <td className="p-4 font-bold text-gray-700 align-top">Մարման ժամկետ</td>
                    <td className="p-4 text-gray-700 space-y-1">
                      <p>• <b>Մինչև 120 ամիս՝</b> հաստատուն տոկոսադրույքի դեպքում,</p>
                      <p>• <b>Մինչև 180 ամիս՝</b> լողացող տոկոսադրույքի դեպքում**:</p>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-semibold text-gray-400 align-top">7.</td>
                    <td className="p-4 font-bold text-gray-700 align-top">Մարման եղանակը</td>
                    <td className="p-4 text-gray-700 space-y-2">
                      <p>• <b>«Անուիտետային»</b></p>
                      <p>• <b>«Զսպանակաձև»</b></p>
                      <p>• <b>Անհատական՝</b> կախված հաճախորդի գործունեության տեսակի առանձնահատկությունից:</p>
                      <p className="text-[11px] text-gray-500 italic mt-2">
                        Անհատական մարման եղանակի դեպքում մայր գումարի մարումները պետք է լինեն տարեկան հավասարաչափ և նվազագույնը տարվա ընթացքում մայր գումարի 3 մարում...
                      </p>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="p-4 font-semibold text-gray-400">8.</td>
                    <td className="p-4 font-bold text-gray-700">Արտոնյալ ժամանակահատված</td>
                    <td className="p-4 text-gray-700">Սահմանվում է բիզնեսի առանձնահատկություններից ելնելով</td>
                  </tr>

                  {/* SUB TABLE FOR INTEREST RATES */}
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-semibold text-gray-400 align-top">9.</td>
                    <td className="p-4 font-bold text-gray-700 align-top">Տարեկան անվանական տոկոսադրույք*</td>
                    <td className="p-4">
                      <table className="w-full border text-center text-xs">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="p-2 border">Արժույթ</th>
                            <th className="p-2 border">Հաստատուն</th>
                            <th className="p-2 border">Լողացող</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-2 border font-semibold">ՀՀ դրամ</td>
                            <td className="p-2 border">Սկսած՝ 12.25%-ից</td>
                            <td className="p-2 border">Սկսած՝ 11.5%-ից (սկսած՝ 4.78%-ից + փոփոխուն բաղադրիչի հանրագումար)</td>
                          </tr>
                          <tr>
                            <td className="p-2 border font-semibold">ԱՄՆ դոլար</td>
                            <td className="p-2 border">Սկսած՝ 8.5%-ից</td>
                            <td className="p-2 border">Սկսած՝ 8.4%-ից (սկսած՝ 4.69%-ից + փոփոխուն բաղադրիչի հանրագումար)</td>
                          </tr>
                          <tr>
                            <td className="p-2 border font-semibold">Եվրո</td>
                            <td className="p-2 border">Սկսած՝ 8.2%-ից</td>
                            <td className="p-2 border">Սկսած՝ 8.2%-ից (սկսած՝ 5.65%-ից + փոփոխուն բաղադրիչի հանրագումար)</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="p-4 font-semibold text-gray-400 align-top">10.</td>
                    <td className="p-4 font-bold text-gray-700 align-top">Տույժեր ուշացման դեպքում</td>
                    <td className="p-4 text-gray-700 space-y-1">
                      <p>• Ժամկետանց վարկի դեպքում՝ օրական <b>0.015%</b>-ի չափով</p>
                      <p>• Ժամկետանց տոկոսագումարների դեպքում՝ օրական <b>0.1%</b>-ի չափով</p>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-semibold text-gray-400">11.</td>
                    <td className="p-4 font-bold text-gray-700">Ժամկետից շուտ մարելու տուգանք</td>
                    <td className="p-4 text-gray-700">Մինչև պայմանագրի գործողության ժամկետի կեսը... տուգանք՝ <b>5%</b>-ի չափով։</td>
                  </tr>

                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="p-4 font-semibold text-gray-400">12.</td>
                    <td className="p-4 font-bold text-gray-700">Ապահովում</td>
                    <td className="p-4 text-gray-700 font-semibold">Գրավ և/կամ երաշխավորություն</td>
                  </tr>

                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-semibold text-gray-400">13.</td>
                    <td className="p-4 font-bold text-gray-700">Երաշխավոր</td>
                    <td className="p-4 text-gray-700">ՀՀ ռեզիդենտ իրավաբանական անձ, ֆիզիկական անձ (ըստ անհրաժեշտության)</td>
                  </tr>

                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="p-4 font-semibold text-gray-400">14.</td>
                    <td className="p-4 font-bold text-gray-700">Վարկի տրամադրման միանվագ վճար</td>
                    <td className="p-4 text-gray-700"><b>0.5%</b>, սակայն առավելագույնը 100,000 ՀՀ դրամ</td>
                  </tr>

                </tbody>
              </table>
            </div>

            {/* TEXT INFORMATION SECTIONS (Ըստ նկար 3, 4, 5-ի) */}
            <div className="space-y-6 text-xs text-gray-700 leading-relaxed">
              
              {/* Անհրաժեշտ տեղեկատվություն */}
              <div>
                <h3 className="text-sm font-bold text-purple-800 mb-3">Անհրաժեշտ տեղեկատվություն</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Ձեզ հետ փոխհարաբերությունները կարգավորվում են վարկային պայմանագրով՝ ՀՀ օրենսդրական ակտերին համապատասխան:</li>
                  <li>Վարկավորման տոկոսադրույքները, ժամկետները, սահմանաչափերը սահմանվում են «Վարկային քաղաքականությամբ»:</li>
                  <li>Ծրագրային վարկավորման դեպքում վարկային միջոցները տրամադրվում են տվյալ ծրագրի պայմաններով:</li>
                </ul>
              </div>

              {/* Վարկ/գրավ ընդունելի սահմանաչափեր */}
              <div>
                <h3 className="text-sm font-bold text-purple-800 mb-3">Վարկ/գրավ ընդունելի սահմանաչափերը՝ ըստ գրավի տեսակների</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><b>Անշարժ գույքի և այլ հիմնական միջոցների դեպքում՝</b> գնահատված շուկայական արժեքի մինչև <b>70%</b>-ի չափով:</li>
                  <li><b>Պետական կարճաժամկետ պարտատոմսերի դեպքում՝</b> անվանական արժեքի մինչև <b>95%</b>-ի չափով:</li>
                  <li><b>Ոսկու ստանդարտացված ձուլակտորների դեպքում՝</b> գնահատված արժեքի մինչև <b>95%</b>-ի չափով:</li>
                  <li><b>Դրամական միջոցների (ավանդային և ընթացիկ հաշվի) դեպքում՝</b> մինչև <b>90%</b>-ի չափով:</li>
                </ul>
              </div>

              {/* Որոշումների կայացման ժամկետները */}
              <div>
                <h3 className="text-sm font-bold text-purple-800 mb-3">Որոշումների կայացման և վարկերի տրամադրման ժամկետները</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Որոշումը կայացնում ենք փաստաթղթերը ներկայացնելուց հետո <b>10 (տասը)</b> բանկային օրվա ընթացքում:</li>
                  <li>Որոշման արդյունքների մասին տեղեկացնում ենք <b>1 (մեկ)</b> բանկային օրվա ընթացքում:</li>
                  <li>Վարկը տրամադրում ենք գույքի գրավադրումից հետո՝ <b>5 (հինգ)</b> բանկային օրվա ընթացքում:</li>
                </ul>
              </div>

              {/* Զգուշացում */}
              <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                <h3 className="text-sm font-bold text-purple-900 mb-2">Զգուշացում</h3>
                <p className="text-purple-900 leading-normal">
                  Տոկոսագումարների և վարկի գումարի մարումները ժամանակին չկատարելու դեպքում գրավադրված գույքը կարող է օրենքով սահմանված կարգով <b>ԲՌՆԱԳԱՆՁՎԵԼ</b>, իսկ Ձեր մասին տեղեկատվությունը կգրանցվի Վարկային ռեգիստրում:
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
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

export default BusinessLoans;