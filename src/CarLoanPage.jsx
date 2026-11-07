import { useFirebasePublicData } from './useFirebasePublicData';
import { pageData_CarLoanPage_otherLoans, pageData_CarLoanPage_dealersList } from './sitePageData';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Phone, CheckCircle2 } from 'lucide-react';
import { Tr, useLang } from './i18n';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function CarLoanPage() {
  const navigate = useNavigate();
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState('about'); // 'about' | 'terms' | 'dealers' | 'documents'

  // "Այլ վարկեր" կարուսելի տվյալները
  const otherLoans = useFirebasePublicData('siteContent/pageData/CarLoanPage/otherLoans', pageData_CarLoanPage_otherLoans);;

  // Գործընկեր ավտոսրահների ցանկը
  const dealersList = useFirebasePublicData('siteContent/pageData/CarLoanPage/dealersList', pageData_CarLoanPage_dealersList);;

  return (
    <Tr>
      <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
        <div>
          {/* Top Header Navigation */}
          <header className="border-b border-gray-100 bg-white">
            <div className="bg-purple-700 text-white text-xs font-semibold py-3">
              <div className="max-w-7xl mx-auto px-4 flex space-x-8">
                <span className="bg-purple-900/50 px-3 py-1 rounded cursor-pointer">
                  {t('Վարկեր')}
                </span>
                <span className="hover:text-purple-200 cursor-pointer py-1">
                  {t('Վարկային պատմություն և սքոր')}
                </span>
                <span className="hover:text-purple-200 cursor-pointer py-1">
                  {t('Կարևոր տեղեկատվություն')}
                </span>
              </div>
            </div>
          </header>

          {/* Hero Banner Section */}
          <section className="bg-gradient-to-r from-[#f7f5fd] to-[#f0ebfc] relative overflow-hidden py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl space-y-4">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  {t('Ավտոմեքենայի ձեռքբերման նպատակով վարկ')}
                </h1>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {t(
                    'Նոր ավտոմեքենա գնելու որոշո՞ւմ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը:'
                  )}
                </p>
              </div>

              <div className="relative w-72 h-72 md:w-96 md:h-80 flex items-center justify-center">
                <img
                  src="https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg"
                  alt={t('Ավտոմեքենայի ձեռքբերման նպատակով վարկ')}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </section>

          {/* Main Content Area */}
          <main className="max-w-7xl mx-auto px-4 py-8">
            {/* Back Button & Breadcrumb */}
            <div className="flex items-center space-x-3 mb-8">
              <button
                onClick={() => navigate(-1)}
                className="bg-white border border-gray-200 hover:bg-gray-50 text-xs font-semibold px-4 py-1.5 rounded-full flex items-center space-x-1.5 shadow-sm transition-all"
              >
                <span>←</span>
                <span>{t('Վերադառնալ')}</span>
              </button>

              <div className="text-xs text-gray-400 flex items-center space-x-1.5 flex-wrap">
                <span>🏠</span>
                <span>›</span>
                <span className="hover:text-purple-700 cursor-pointer">{t('Անհատ')}</span>
                <span>›</span>
                <span className="hover:text-purple-700 cursor-pointer">{t('Վարկեր')}</span>
                <span>›</span>
                <span className="hover:text-purple-700 cursor-pointer">{t('Վարկեր')}</span>
                <span>›</span>
                <span className="text-gray-700 font-medium">
                  {t('Ավտոմեքենայի ձեռքբերման նպատակով վարկ')}
                </span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-gray-200 mb-8 flex space-x-8 text-sm overflow-x-auto">
              <button
                onClick={() => setActiveTab('about')}
                className={`pb-3 font-bold transition-all whitespace-nowrap ${
                  activeTab === 'about'
                    ? 'text-purple-700 border-b-2 border-purple-700'
                    : 'text-gray-500 hover:text-purple-700'
                }`}
              >
                {t('Վարկի մասին')}
              </button>
              <button
                onClick={() => setActiveTab('terms')}
                className={`pb-3 font-bold transition-all whitespace-nowrap ${
                  activeTab === 'terms'
                    ? 'text-purple-700 border-b-2 border-purple-700'
                    : 'text-gray-500 hover:text-purple-700'
                }`}
              >
                {t('Պայմաններ')}
              </button>
              <button
                onClick={() => setActiveTab('dealers')}
                className={`pb-3 font-bold transition-all whitespace-nowrap ${
                  activeTab === 'dealers'
                    ? 'text-purple-700 border-b-2 border-purple-700'
                    : 'text-gray-500 hover:text-purple-700'
                }`}
              >
                {t('Գործընկեր ավտոսրահներ')}
              </button>
              <button
                onClick={() => setActiveTab('documents')}
                className={`pb-3 font-bold transition-all whitespace-nowrap ${
                  activeTab === 'documents'
                    ? 'text-purple-700 border-b-2 border-purple-700'
                    : 'text-gray-500 hover:text-purple-700'
                }`}
              >
                {t('Պահանջվող փաստաթղթերի ցանկ')}
              </button>
            </div>

            {/* Detailed Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-16">
              {/* TAB CONTENT */}
              <div className="lg:col-span-2 space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed">
                
                {/* TAB: ՎԱՐԿԻ ՄԱՍԻՆ */}
                {activeTab === 'about' && (
                  <div className="space-y-4">
                    <p>
                      21-րդ դարում{' '}
                      <span className="text-purple-700 font-bold underline">
                        {t('ավտովարկերի')}
                      </span>{' '}
                      {t('շնորհիվ հեշտացել և պարզեցվել է նոր ավտոմեքենա ձեռք բերելու գործընթացը:')}
                    </p>
                    <p>
                      {t(
                        'Evocabank-ը առաջարկում է ավտոմեքենայի ձեռքբերման նպատակով տրամադրվող վարկեր՝ փոխշահավետ պայմաններով:'
                      )}{' '}
                      <span className="text-purple-700 font-bold">
                        {t('Գնե՛ք Ձեր ցանկալի ավտոմեքենան ինչպես առաջնային, այնպես էլ երկրորդային շուկայից:')}
                      </span>
                    </p>
                    <p>
                      {t(
                        'Դուք ընտրե՛ք Ձեր նոր մեքենան, իսկ մենք, կարևորելով Ձեր ժամանակը, վարկավորման գործընթացը կիրականացնենք հնարավորինս սեղմ ժամկետում:'
                      )}
                    </p>
                  </div>
                )}

                {/* TAB: ՊԱՅՄԱՆՆԵՐ */}
                {activeTab === 'terms' && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="border-b pb-3">
                        <h4 className="font-bold text-gray-900 text-base mb-1">
                          {t('1. Վարկի տրամադրման նպատակը')}
                        </h4>
                        <p>
                          {t(
                            'Վարկը տրամադրվում է առաջնային կամ երկրորդային շուկաներից անհատական օգտագործման թեթև մարդատար տրանսպորտային միջոց/ավտոմեքենա ձեռք բերելու նպատակով:'
                          )}
                        </p>
                      </div>

                      <div className="border-b pb-3">
                        <h4 className="font-bold text-gray-900 text-base mb-1">
                          {t('2. Ովքեր կարող են դիմել')}
                        </h4>
                        <p>
                          {t(
                            '18 – 65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն բոլորի 65 տարեկանը կամ առկա է վերոնշյալ պահանջներին բավարարող համավարկառու:'
                          )}
                        </p>
                      </div>

                      <div className="border-b pb-3">
                        <h4 className="font-bold text-gray-900 text-base mb-1">
                          {t('3. Վարկավորման արժույթը')}
                        </h4>
                        <p>{t('ՀՀ դրամ')}</p>
                      </div>

                      <div className="border-b pb-3">
                        <h4 className="font-bold text-gray-900 text-base mb-1">
                          {t('4. Վարկավորման գումար')}
                        </h4>
                        <p className="font-semibold text-purple-700">
                          4,000,000 - 50,000,000 {t('ՀՀ դրամ')}
                        </p>
                      </div>

                      <div className="border-b pb-3">
                        <h4 className="font-bold text-gray-900 text-base mb-1">
                          {t('5. Վարկի մարման ժամկետը')}
                        </h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            {t('Հաստատուն տոկոսադրույքի դեպքում՝')} <strong>36 - 60 {t('ամիս')}</strong>
                          </li>
                          <li>
                            {t('Լողացող տոկոսադրույքի դեպքում՝')} <strong>61 - 84 {t('ամիս')}</strong>
                          </li>
                        </ul>
                      </div>

                      <div className="border-b pb-3">
                        <h4 className="font-bold text-gray-900 text-base mb-1">
                          {t('6. Վարկի մարման ժամանակացույց')}
                        </h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            <strong>{t('Անուիտետային')}</strong> (
                            {t('վարկի գումարի և տոկոսագումարի հանրագումարը վճարվում է հավասարաչափ ամսական պարբերականությամբ')}
                            )
                          </li>
                          <li>
                            <strong>{t('Զսպանակաձև')}</strong> (
                            {t('մայր գումարի հավասարաչափ մարումներով վարկ')}),{' '}
                            {t('վճարումները պետք է կատարվեն ամսական կտրվածքով')}
                          </li>
                        </ul>
                      </div>

                      <div className="border-b pb-3">
                        <h4 className="font-bold text-gray-900 text-base mb-1">
                          {t('7. Վարկի ձևակերպման վայր')}
                        </h4>
                        <p>{t('Ավտոսրահ/համագործակցող կազմակերպություն կամ Բանկ')}</p>
                      </div>

                      <div className="border-b pb-3 overflow-x-auto">
                        <h4 className="font-bold text-gray-900 text-base mb-2">
                          {t('8. Տարեկան անվանական տոկոսադրույքներ')}
                        </h4>
                        <table className="w-full text-left border-collapse border border-gray-200">
                          <thead>
                            <tr className="bg-gray-50 text-gray-900 font-bold">
                              <th className="border border-gray-200 p-2">{t('Շուկա')}</th>
                              <th className="border border-gray-200 p-2">{t('Անվանական')}</th>
                              <th className="border border-gray-200 p-2">
                                {t('Առավելագույն փաստացի')}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-200 p-2">
                                {t('Առաջնային շուկայից ձեռք բերում')}
                              </td>
                              <td className="border border-gray-200 p-2 font-semibold">13% - 17%</td>
                              <td className="border border-gray-200 p-2">13.86% - 20.88%</td>
                            </tr>
                            <tr className="bg-gray-50/50">
                              <td className="border border-gray-200 p-2">
                                {t('Երկրորդային շուկայից ձեռք բերում')}
                              </td>
                              <td className="border border-gray-200 p-2 font-semibold">15% - 19%</td>
                              <td className="border border-gray-200 p-2">16.46% - 21.17%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="border-b pb-3">
                        <h4 className="font-bold text-gray-900 text-base mb-2">
                          {t('9. Տարեկան լողացող տոկոսադրույքի կիրառման պայմաններ')}
                        </h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            {t(
                              'Լողացող տոկոսադրույքի մեծությունը սահմանվում է հաստատուն բաղադրիչ` սկսած 5%-ից + փոփոխուն բաղադրիչ։'
                            )}
                          </li>
                          <li>
                            {t(
                              'Լողացող տոկոսադրույքի տատանման առավելագույն և նվազագույն շեմ՝ հաստատված տարեկան տոկոսադրույք ±2%։'
                            )}
                          </li>
                          <li>
                            {t(
                              'Լողացող տոկոսադրույքի փոփոխուն բաղադրիչը կսկսի վերանայվել վարկի կնքման պահից 36 ամիս ժամանակաշրջանին հաջորդող առաջին մարման ամսաթվից սկսած և յուրաքանչյուր 6 ամիսը մեկ՝ կիրառելով վերանայման պահին Բանկում գործող (կայքում փաստացի հրապարակված) փոփոխուն բաղադրիչի արժեքը։'
                            )}
                          </li>
                          <li>
                            <strong>{t('Հաշվարկման կարգ․')}</strong>{' '}
                            {t(
                              'Երկրորդային շուկայի պարագայում կիրառելի է միայն մինչև 3 տարվա վաղեմություն ունեցող տրանսպորտային միջոցների ձեռք բերման դեպքում։'
                            )}
                          </li>
                        </ul>
                      </div>

                      <div className="border-b pb-3">
                        <h4 className="font-bold text-gray-900 text-base mb-1">
                          {t('10. Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք')}
                        </h4>
                        <p className="text-green-600 font-semibold">{t('Տուգանք չի կիրառվում')}</p>
                      </div>

                      <div className="border-b pb-3">
                        <h4 className="font-bold text-gray-900 text-base mb-1">
                          {t('11. Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր')}
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-red-600">
                          <li>{t('Ժամկետանց վարկի համար՝ օրական 0.015%')}</li>
                          <li>{t('Ժամկետանց տոկոսագումարի համար՝ օրական 0.1%')}</li>
                        </ul>
                      </div>

                      <div className="border-b pb-3">
                        <h4 className="font-bold text-gray-900 text-base mb-2">
                          {t('12. Վարկի վերադարձելիության ապահովման միջոց')}
                        </h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            {t('Ձեռք բերվող տրանսպորտային միջոցը, որի վաղեմությունը չպետք է գերազանցի 7 տարին:')}
                          </li>
                          <li>
                            {t(
                              'Ռուսական արտադրության ավտոմեքենաների դեպքում վարկավորումը իրականացվում է բացառապես առաջնային շուկայից ձեռք բերելու պայմանով:'
                            )}
                          </li>
                          <li>
                            <strong>
                              {t('Գրավի առարկա չեն կարող հանդիսանալ հետևյալ տրանսպորտային միջոցները.')}
                            </strong>
                            <ul className="list-circle pl-5 mt-1 space-y-1 text-gray-600">
                              <li>
                                {t(
                                  'Ավտոմեքենաներ, որոնք կրում են վտանգ սպառնացող ապրանքներ` տոքսիկ նյութեր, քիմիկատներ, ռադիոակտիվ և պայթյունավտանգ նյութեր,'
                                )}
                              </li>
                              <li>
                                {t(
                                  'Ավտոմեքենաներ, որոնք կմասնակցեն մրցույթներին, փորձարկումներին կամ ունեն երեք անիվ, ձնեմաքրող մեքենաներ, մոտոցիկլետներ, հատուկ տեխնիկա հանդիսացող մեքենաներ։'
                                )}
                              </li>
                            </ul>
                          </li>
                          <li>
                            {t(
                              'Առանձին դեպքերում, համապատասխան իրավական հիմքերի ներկայացման պարագայում, Բանկը կարող է որպես առաջնային շուկայից ձեռքբերում դիտարկել նաև մինչև մեկամսյա ժամկետում ՀՀ ներմուծված և վարկառուի անվամբ մաքսազերծված լիովին սարքին /շահագործման ենթակա/ ավտոմեքենաները:'
                            )}
                          </li>
                          <li>
                            {t(
                              'Տաքսի ծառայության կամ վարձով տրվող ավտոմեքենաները կարող են ձեռք բերվել Բանկի հետ համագործակցող ավտոսրահներից:'
                            )}
                          </li>
                          <li>
                            {t(
                              'Վարկի տրամադրման վերաբերյալ որոշում կայացնող լիազոր մարմնի որոշմամբ կարող է պահանջվել ֆիզիկական և/կամ իրավաբանական անձանց երաշխավորությունների առկայություն, առանձին դեպքերում՝ Բանկի համար ընդունելի այլ ապահովում:'
                            )}
                          </li>
                        </ul>
                      </div>

                      <div className="border-b pb-3">
                        <h4 className="font-bold text-gray-900 text-base mb-1">
                          {t('13. Գրավադրվող գույքի գնահատում')}
                        </h4>
                        <p className="mb-2">
                          <strong>{t('Ավտոսրահից ձեռքբերման դեպքում')}</strong>{' '}
                          {t(
                            'տրանսպորտային միջոցի գնահատում չի իրականացվում, այլ որպես գրավադրման արժեք հիմք է ընդունվում ավտոմեքենա իրացնող ընկերության կողմից Բանկի էլեկտրոնային համակարգում կամ ներկայացված տեղեկանքում նշված արժեքը/առուվաճառքի արժեքը:'
                          )}
                        </p>
                        <p>
                          <strong>{t('Երկրորդային շուկայից ձեռքբերման դեպքում')}</strong>{' '}
                          {t(
                            'գրավադրվող գույքի գնահատումը իրականացվում է Բանկի հետ համագործակցող գնահատող կազմակերպության կամ Բանկի համապատասխան աշխատակցի կողմից:'
                          )}
                        </p>
                      </div>

                      <div className="border-b pb-3 overflow-x-auto">
                        <h4 className="font-bold text-gray-900 text-base mb-2">
                          {t('14. Կանխավճար')}
                        </h4>
                        <table className="w-full text-left border-collapse border border-gray-200">
                          <thead>
                            <tr className="bg-gray-50 text-gray-900 font-bold">
                              <th className="border border-gray-200 p-2">{t('Շուկա')}</th>
                              <th className="border border-gray-200 p-2">
                                {t('Եկամտի վերլուծությամբ')}
                              </th>
                              <th className="border border-gray-200 p-2">
                                {t('Առանց եկամուտների վերլուծության')}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-200 p-2 font-medium">
                                {t('Առաջնային շուկա')}
                              </td>
                              <td className="border border-gray-200 p-2">
                                {t('նվազագույնը 10%')}
                              </td>
                              <td className="border border-gray-200 p-2">
                                {t('նվազագույնը 30%')}
                              </td>
                            </tr>
                            <tr className="bg-gray-50/50">
                              <td className="border border-gray-200 p-2 font-medium">
                                {t('Երկրորդային շուկա')}
                              </td>
                              <td className="border border-gray-200 p-2">
                                • {t('Մինչև 3 (ներառյալ) տարեկան մեքենա` նվազագույնը 20%')}
                                <br />• {t('3-7 (ներառյալ) տարեկան մեքենա` նվազագույնը 30%')}
                              </td>
                              <td className="border border-gray-200 p-2">
                                {t('նվազագույնը 40%')}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="border-b pb-3">
                        <h4 className="font-bold text-gray-900 text-base mb-1">
                          {t('15. Վարկի տրամադրման եղանակը')}
                        </h4>
                        <p>{t('Անկանխիկ')}</p>
                      </div>

                      <div className="border-b pb-3">
                        <h4 className="font-bold text-gray-900 text-base mb-1">
                          {t('16. Վարկի տրամադրման միանվագ կամ ամսական սպասարկման վճարներ')}
                        </h4>
                        <p>{t('Չի սահմանվում')}</p>
                      </div>

                      <div className="border-b pb-3">
                        <h4 className="font-bold text-gray-900 text-base mb-1">
                          {t('17. Հաճախորդի կողմից կատարվող լրացուցիչ վճարներ')}
                        </h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            {t(
                              'Ավտոմեքենայի ձեռքբերման և գրավադրման հետ կապված պետական իրավասու մարմնում գրանցման վճարներ:'
                            )}
                          </li>
                          <li>
                            {t(
                              'Այլ վճարներ համաձայն Բանկում գործող ՍԱԿԱԳՆԵՐ ԵՎ ԴՐՈՒՅՔՆԵՐ-ի: Առաջնային շուկայից՝ ավտոսրահի տարածքում ձևակերպվող վարկերի դեպքում շարժական գույքի գրավի հաստատման (ձևակերպման) միջնորդավճար չի կիրառվում:'
                            )}
                          </li>
                        </ul>
                      </div>

                      <div className="border-b pb-3">
                        <h4 className="font-bold text-gray-900 text-base mb-2">
                          {t('18. Ապահովագրություն')}
                        </h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            {t('Տրանսպորտային միջոցի')} <strong>{t('ԿԱՍԿՈ ապահովագրություն')}</strong>{' '}
                            {t(
                              'պարտադիր յուրաքանչյուր տարի վարկի սպասարկման ամբողջ ժամկետի ընթացքում, առնվազն վարկի մայր գումարի մնացորդի չափով:'
                            )}
                          </li>
                          <li>
                            {t(
                              'Առաջնային շուկայից ավտոմեքենայի ձեռքբերման դեպքում ԿԱՍԿՈ ապահովագրությունը կարող է կնքվել Բանկի հաշվին և վարկի մայր գումարի մնացորդի չափով՝ համաձայն համագործակցող ընկերության հետ կնքված պայմանագրի դրույթների:'
                            )}
                          </li>
                          <li>
                            {t(
                              'Երկրորդային շուկայից ավտոմեքենայի ձեռքբերման դեպքում ԿԱՍԿՈ ապահովագրությունը կնքվում է Բանկի հաշվին և վարկի մայր գումարի մնացորդի չափով:'
                            )}
                          </li>
                          <li>
                            {t(
                              'ԿԱՍԿՈ ապահովագրությունը հաճախորդի հաշվին կնքելու դեպքում վարկի տարեկան անվանական տոկոսադրույքը նվազում է 1 տոկոսային կետով:'
                            )}
                          </li>
                        </ul>
                      </div>

                      <div className="border-b pb-3">
                        <h4 className="font-bold text-gray-900 text-base mb-2">
                          {t('19. Այլ պայմաններ')}
                        </h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            {t(
                              'Առաջնային շուկային պատկանող տրանսպորտային միջոց են համարվում ավտոսրահից անմիջապես ձեռք բերված ավտոմեքենաները:'
                            )}
                          </li>
                          <li>
                            {t(
                              'Առանձին դեպքերում, համապատասխան իրավական հիմքերի ներկայացման պարագայում, Բանկը կարող է որպես առաջնային շուկայից ձեռքբերում դիտարկել նաև մինչև մեկամսյա ժամկետում ՀՀ ներմուծված և մաքսազերծված լիովին սարքին /շահագործման ենթակա/ և մինչև 3000 կմ վազք ունեցող ավտոմեքենաները, ինչպես նաև մինչև 1 տարվա վաղեմություն ունեցող տրանսպորտային միջոցները։ (պայմանը չի վերաբերվում ռուսական ավտոմեքենաներին)'
                            )}
                          </li>
                        </ul>
                      </div>

                      {/* ՏԵՂԵԿԱՑՈՒՄ */}
                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-6">
                        <h5 className="font-bold text-amber-900 mb-1 text-sm">{t('ՏԵՂԵԿԱՑՈՒՄ')}</h5>
                        <p className="text-amber-800 text-xs leading-relaxed">
                          {t(
                            'Հարգելի հաճախորդ, տեղեկացնում ենք, որ Ձեր կողմից ներկայացված վարկի ստացման դիմում-հայտերի քանակը, այդ թվում` հեռահար եղանակներով (տարբեր տեխնիկածրագրային լուծումներով և հավելվածներով), անկախ հաստատումից կամ մերժումից, բացասական ազդեցություն է ունենալու Ձեր վարկային ամփոփ գնահատականի վրա:'
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB: ԳՈՐԾԸՆԿԵՐ ԱՎՏՈՍՐԱՀՆԵՐ */}
                {activeTab === 'dealers' && (
                  <div className="space-y-6">
                    <div className="bg-purple-50 p-4 rounded-xl text-purple-900 text-xs md:text-sm font-medium border border-purple-100">
                      {t('Գնիր մեքենա')} <strong>{t('Evoca ավտովարկով')}</strong>՝ {t('դիմում անմիջապես Բանկի հետ համագործակցող ավտոսրահում, վարկի հաստատում րոպեների ընթացքում, պայմանագրի արագ վավերացում և անվճար ԿԱՍԿՈ։')}
                    </div>

                    <div className="overflow-x-auto shadow-sm border border-gray-200 rounded-xl">
                      <table className="w-full text-left border-collapse text-xs md:text-sm">
                        <thead>
                          <tr className="bg-purple-700 text-white font-bold">
                            <th className="p-3 border-b">{t('Անվանում')}</th>
                            <th className="p-3 border-b">{t('Մեքենաներ')}</th>
                            <th className="p-3 border-b">{t('Սրահի հասցե')}</th>
                            <th className="p-3 border-b">{t('Կոնտակտային տվյալներ')}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {dealersList.map((dealer, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                              <td className="p-3 font-bold text-gray-900 whitespace-nowrap">{dealer.name}</td>
                              <td className="p-3 text-purple-700 font-medium">{dealer.cars}</td>
                              <td className="p-3">{dealer.address}</td>
                              <td className="p-3 whitespace-nowrap">
                                <div className="space-y-1">
                                  <div className="text-gray-800 font-medium">{dealer.phone}</div>
                                  {dealer.website && (
                                    <a
                                      href={`https://${dealer.website.replace(/^https?:\/\//, '')}`}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="text-purple-600 underline block text-xs hover:text-purple-800"
                                    >
                                      {dealer.website}
                                    </a>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <p className="text-xs text-gray-500 italic">
                      {t('* Evoca-ի գործընկեր ավտոսրահների կողմից առաջարկվող պայմաններին մանրամասն կարող եք ծանոթանալ համապատասխան ավտոսրահներում։')}
                    </p>
                  </div>
                )}

                {/* TAB: ՊԱՀԱՆՋՎՈՂ ՓԱՍՏԱԹՂԹԵՐԻ ՑԱՆԿ */}
                {activeTab === 'documents' && (
                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 text-base border-b pb-2">
                      {t('Պահանջվող փաստաթղթերի ցանկ')}
                    </h4>
                    <ul className="list-disc pl-5 space-y-3">
                      <li>{t('Վարկի տրամադրման դիմում:')}</li>
                      <li>
                        {t(
                          'Անձնագիր կամ նույնականացման քարտ, ինչպես նաև սոցիալական քարտ կամ սոցիալական քարտ չունենալու մասին տեղեկանք (ընդ որում սոցիալական քարտ և սոցիալական քարտ չունենալու մասին տեղեկանք չի պահանջվում, եթե ներկայացվել է նույնականացման քարտ), կարող է պահանջվել նաև ընտանիքի անդամներինը:'
                        )}
                      </li>
                      <li>
                        {t(
                          'Եթե վարկառուն ամուսնացած է, ապա ամուսնու/կնոջ անձը հաստատող փաստաթղթերը և ամուսնության վկայական:'
                        )}
                      </li>
                      <li>{t('Տեղեկանք փաստացի բնակության վայրից:')}</li>
                      <li>
                        {t(
                          'Տեղեկանք աշխատանքի վայրից աշխատավարձի չափի մեծության մասին, որի տրամադրման ժամկետը Բանկին ներկայացման օրվա դրությամբ չպետք է գերազանցի 30 օրացույցային օրը:'
                        )}
                      </li>
                      <li>
                        <strong>{t('Հաճախորդի ինքնազբաղված լինելու դեպքում․')}</strong>
                        <ul className="list-circle pl-5 mt-1 space-y-1 text-gray-600">
                          <li>
                            {t('Պետական ռեգիստրի գրանցման վկայական կամ պետական ռեգիստրի կողմից տրված՝ քաղվածք գրանցամատյանից,')}
                          </li>
                          <li>
                            {t('Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում կամ քաղվածքում,')}
                          </li>
                          <li>{t('Գործունեության լիցենզիա (առկայության դեպքում),')}</li>
                          <li>{t('Վերջին 1 տարվա ֆինանսական հաշվետվությունները,')}</li>
                          <li>{t('Այլ եկամուտների մեծությունը հավաստող տեղեկատվություն (առկայության դեպքում):')}</li>
                        </ul>
                      </li>
                      <li>
                        {t('Տեղեկատվություն՝ երաշխավորող անձի/անց վերաբերյալ (առկայության դեպքում):')}
                      </li>
                      <li>
                        {t('Ավտոմեքենայի սեփականության իրավունքը հավաստող փաստաթղթեր, տեխ. անձնագիր կամ ժամանակավոր գրանցման վկայական:')}
                      </li>
                      <li>
                        <strong>{t('Առաջնային շուկայից ավտոմեքենա ձեռք բերելու դեպքում․')}</strong>
                        <ul className="list-circle pl-5 mt-1 space-y-1 text-gray-600">
                          <li>{t('Վաճառողի կողմից տրված ավտոմեքենայի գնման համաձայնագիր,')}</li>
                          <li>{t('Կանխավճարի վճարման անդորրագիր,')}</li>
                          <li>{t('Առուվաճառքի պայմանագիր, հաշիվ-ապրանքագիր:')}</li>
                        </ul>
                      </li>
                      <li>
                        <strong>{t('Երկրորդային շուկայից ավտոմեքենա ձեռք բերելու դեպքում․')}</strong>
                        <ul className="list-circle pl-5 mt-1 space-y-1 text-gray-600">
                          <li>{t('Վաճառողի անձը հաստատող փաստաթղթերը,')}</li>
                          <li>{t('Ավտոմեքենայի գնահատման հաշվետվություն:')}</li>
                        </ul>
                      </li>
                      <li>{t('Բանկի պահանջով՝ այլ փաստաթղթեր:')}</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Floating Card */}
              <div className="bg-[#fcfaff] p-6 rounded-2xl border border-purple-50 shadow-sm space-y-6 sticky top-6">
                <div className="w-9 h-9 rounded-full bg-purple-700 text-white flex items-center justify-center font-extrabold text-sm shadow-sm">
                  ֏
                </div>

                <div className="border-b border-gray-100 pb-4 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 block">{t('մինչև')}</span>
                    <span className="text-2xl font-black text-purple-700">
                      50 {t('մլն.')} ֏
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">{t('Գումար')}</span>
                </div>

                <div className="border-b border-gray-100 pb-4 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 block">{t('մինչև')}</span>
                    <span className="text-2xl font-black text-purple-700">
                      84 {t('ամիս')}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">{t('Ժամկետ')}</span>
                </div>

                <div className="border-b border-gray-100 pb-4 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 block">{t('սկսած')}</span>
                    <span className="text-2xl font-black text-purple-700">
                      13%-{t('ից')}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">
                    {t('Տոկոսադրույք')}
                  </span>
                </div>

                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 block">{t('սկսած')}</span>
                    <span className="text-2xl font-black text-purple-700">
                      10%-{t('ից')}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">
                    {t('Կանխավճար')}
                  </span>
                </div>
              </div>
            </div>
          </main>

          {/* 1. HERO BANNER WITH BACKGROUND IMAGE */}
          <section
            className="relative bg-cover bg-center py-20 md:py-28 text-white text-center shadow-inner overflow-hidden my-8"
            style={{
              backgroundImage:
                "url('https://www.evoca.am/images-cache/loans/1/16142451996732/1920x527.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]"></div>
            <div className="relative z-10 max-w-3xl mx-auto px-4">
              <h2 className="text-xl md:text-3xl font-extrabold leading-relaxed md:leading-normal drop-shadow-md">
                {t('Դեպի նոր իրականություն տանող քո ճանապարհն անցի՛ր Evocabank-ի հետ:')}
              </h2>
            </div>
          </section>

          {/* 2. OTHER LOANS CAROUSEL SECTION */}
          <section className="max-w-7xl mx-auto px-4 py-8">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6">
              {t('Այլ վարկեր')}
            </h3>

            <div className="relative group/swiper">
              <button className="swiper-button-prev-custom absolute -left-5 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-2 rounded-full text-purple-700 hover:bg-purple-50 hidden md:flex items-center justify-center border border-gray-100 transition">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="swiper-button-next-custom absolute -right-5 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-2 rounded-full text-purple-700 hover:bg-purple-50 hidden md:flex items-center justify-center border border-gray-100 transition">
                <ChevronRight className="w-5 h-5" />
              </button>

              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  prevEl: '.swiper-button-prev-custom',
                  nextEl: '.swiper-button-next-custom',
                }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  480: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
                className="w-full py-2"
              >
                {otherLoans.map((loan) => (
                  <SwiperSlide key={loan.id}>
                    <Link to={loan.path || '#'} className="group cursor-pointer block">
                      <div className="w-full overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white">
                        <img
                          src={loan.image}
                          alt={t(loan.title)}
                          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="font-bold text-center text-xs md:text-sm text-gray-800 group-hover:text-purple-700 transition mt-3 line-clamp-2 px-1">
                        {t(loan.title)}
                      </p>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          {/* 3. ONLINE & MOBILE BANKING BANNER SECTION */}
          <section className="w-full bg-[#6a0dad] text-white py-12 px-6 relative overflow-hidden mt-12">
            <div className="absolute top-0 left-0 w-36 h-36 bg-purple-500/30 rounded-br-full pointer-events-none z-0"></div>
            <div className="absolute top-10 left-10 w-12 h-12 rounded-full border-4 border-pink-400 opacity-40 pointer-events-none"></div>
            <div className="absolute top-6 right-20 w-8 h-8 border-2 border-white/20 rotate-45 pointer-events-none"></div>
            <div className="absolute bottom-12 right-32 w-10 h-10 bg-pink-400/30 rounded-lg rotate-12 blur-sm pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
              <div className="w-full lg:w-1/2 flex items-center justify-center relative">
                <div className="relative w-full max-w-[420px] sm:max-w-[480px] z-10">
                  <div className="relative rounded-t-xl border-[6px] border-[#1e1e1e] bg-black shadow-2xl overflow-hidden aspect-[16/10]">
                    <iframe
                      src="https://www.youtube.com/embed/KwAgMHEx8ys?enablejsapi=1"
                      title="EvocaTOUCH Video"
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="w-[108%] -translate-x-[4%] h-3 bg-[#2d2d2d] rounded-b-xl border-t border-neutral-700 shadow-xl relative flex justify-center">
                    <div className="w-16 h-1 bg-neutral-600 rounded-b-md"></div>
                  </div>
                </div>

                <div className="relative -ml-16 sm:-ml-20 z-20 top-4 shrink-0">
                  <div className="w-32 sm:w-40 aspect-[9/19] rounded-[2.2rem] border-[5px] border-[#1a1a1a] bg-black overflow-hidden shadow-2xl relative">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-[#1a1a1a] rounded-full z-30"></div>
                    <img
                      src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg"
                      alt="Evoca Mobile App"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  {t('Օնլայն և մոբայլ բանկինգ')}
                </h2>

                <p className="text-purple-100 text-sm md:text-base leading-relaxed max-w-xl">
                  {t(
                    'Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:'
                  )}
                </p>

                <div>
                  <Link
                    to="/evoca-online"
                    className="inline-block bg-white text-[#6a0dad] px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition shadow-lg text-sm md:text-base"
                  >
                    {t('Դառնալ հաճախորդ')}
                  </Link>
                </div>

                <div className="flex items-center gap-6 pt-4">
                  <div className="bg-white p-2 rounded-lg shadow">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://www.evoca.am"
                      alt="Evoca App QR Code"
                      className="w-16 h-16"
                    />
                  </div>
                  <p className="text-xs text-purple-200 max-w-[160px]">
                    {t('Սկանավորեք QR կոդը EvocaTOUCH հավելվածը ներբեռնելու համար:')}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* FOOTER SECTION */}
        <footer className="mt-20 border-t border-gray-200 bg-white pt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-right text-xs text-gray-400 font-medium mb-6">
              {t('Թարմացվել է՝')} 28/08/2026 17:20
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
              <div className="lg:col-span-1 space-y-4">
                <div className="flex items-center gap-1 text-2xl font-black text-gray-900">
                  evoca<span className="text-xs font-semibold tracking-widest text-gray-500 ml-0.5">BANK</span>
                </div>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                  {t('ք․ Երևան, 0010,')}
                  <br />
                  {t('Հանրապետության 44/2')}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed pt-2">
                  <strong>{t('Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից')}</strong>
                </p>
                <div className="text-[11px] text-gray-400">
                  1990 - 2026, © {t('ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ')}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-4">{t('Բանկի մասին')}</h4>
                <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                  <li><Link to="/about" className="hover:text-[#6c00ff]">{t('Մեր մասին')}</Link></li>
                  <li><Link to="/management" className="hover:text-[#6c00ff]">{t('Ղեկավարություն')}</Link></li>
                  <li><Link to="/shareholders" className="hover:text-[#6c00ff]">{t('Բաժնետերեր')}</Link></li>
                  <li><Link to="/reports" className="hover:text-[#6c00ff]">{t('Հաշվետվություններ')}</Link></li>
                  <li><Link to="/legal" className="hover:text-[#6c00ff]">{t('Իրավական ակտեր')}</Link></li>
                  <li><Link to="/tariffs" className="hover:text-[#6c00ff]">{t('Սակագներ')}</Link></li>
                  <li><Link to="/property" className="hover:text-[#6c00ff]">{t('Օտարվող գույք')}</Link></li>
                  <li><Link to="/developers" className="hover:text-[#6c00ff]">{t('Կառուցապատողներ')}</Link></li>
                  <li><Link to="/partners" className="hover:text-[#6c00ff]">{t('Գործընկեր ավտոսրահներ')}</Link></li>
                  <li><Link to="/tariffs-archive" className="hover:text-[#6c00ff]">{t('Սակագների արխիվ')}</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-4">{t('Օգտակար հղումներ')}</h4>
                <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                  <li><Link to="/rights" className="hover:text-[#6c00ff]">{t('Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)')}</Link></li>
                  <li><Link to="/residence" className="hover:text-[#6c00ff]">{t('Հաճախորդի ռեզիդենտության չափանիշներ')}</Link></li>
                  <li><Link to="/regulation" className="hover:text-[#6c00ff]">{t('Կարգավորում')}</Link></li>
                  <li><Link to="/privacy" className="hover:text-[#6c00ff]">{t('Գաղտնիության քաղաքականություն')}</Link></li>
                  <li><Link to="/mediator" className="hover:text-[#6c00ff]">{t('Ֆին. հաշտարար')}</Link></li>
                  <li><Link to="/aml" className="hover:text-[#6c00ff]">{t('Ֆինանսական հանցագործությունների կանխարգելում')}</Link></li>
                  <li><Link to="/cardholders" className="hover:text-[#6c00ff]">{t('Հղումներ Բանկի քարտապանների համար')}</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-4">{t('Այլ հղումներ')}</h4>
                <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                  <li><a href="https://evocaonline.am" target="_blank" rel="noreferrer" className="hover:text-[#6c00ff]">EvocaONLINE</a></li>
                  <li><Link to="/safes" className="hover:text-[#6c00ff]">{t('Պահատուփեր')}</Link></li>
                  <li><Link to="/faq" className="hover:text-[#6c00ff]">{t('Հաճախ տրվող հարցեր')}</Link></li>
                  <li><Link to="/announcements" className="hover:text-[#6c00ff]">{t('Հայտարարություններ')}</Link></li>
                  <li><Link to="/dlibrary" className="hover:text-[#6c00ff]">Dlibrary</Link></li>
                  <li><Link to="/booklets" className="hover:text-[#6c00ff]">{t('Բուկլետներ')}</Link></li>
                  <li><Link to="/feedback" className="hover:text-[#6c00ff]">{t('Հետադարձ կապ')}</Link></li>
                  <li><Link to="/sitemap" className="hover:text-[#6c00ff]">{t('Կայքի քարտեզ')}</Link></li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 text-gray-400">
                  <a href="#facebook" className="hover:text-[#6c00ff]">f</a>
                  <a href="#instagram" className="hover:text-[#6c00ff]">in</a>
                  <a href="#pinterest" className="hover:text-[#6c00ff]">yt</a>
                </div>

                <div className="flex flex-col gap-2">
                  <a href="#appstore" className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 w-max hover:opacity-80">
                    <span className="text-xs font-semibold">App Store</span>
                  </a>
                  <a href="#googleplay" className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 w-max hover:opacity-80">
                    <span className="text-xs font-semibold">Google Play</span>
                  </a>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <Link to="/branches" className="text-[#6c00ff] font-bold hover:underline">
                      {t('Բանկի հասցեները և աշխատաժամերը')}
                    </Link>
                  </div>
                  <div>
                    <Link to="/contact" className="text-[#6c00ff] font-bold hover:underline">
                      {t('Կապ մեզ հետ')}
                    </Link>
                  </div>
                  <div className="pt-2 font-bold text-gray-800">+374 10 605555</div>
                  <div className="font-extrabold text-[#6c00ff] text-sm">8444</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 py-6 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
              <p className="text-[10px] text-gray-500 leading-normal max-w-4xl">
                {t(
                  'Կայքում տեղադրված տեղեկատվության վերաբերյալ տարբերություններ առաջանալու դեպքում, ինչպես նաև ռուսերեն և անգլերեն լեզուներով ոչ ամբողջական լինելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով։ «Էվոկաբանկ» ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների համար։'
                )}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                <span className="text-xs font-bold text-gray-600">fininfo</span>
                <span className="text-xs font-bold text-gray-600">abcfinance.am</span>
                <span className="text-xs font-bold text-gray-600">arca</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Tr>
  );
}