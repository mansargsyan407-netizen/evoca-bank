import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { Tr, useLang } from './i18n';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { useFirebasePublicData } from './useFirebasePublicData';
import { pageData_PropertySecuredLoanPage_otherLoans } from './sitePageData';
const PropertySecuredLoanPage = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState('about');

  // "Այլ վարկեր" կարուսելի տվյալները
  const otherLoans = useFirebasePublicData('siteContent/pageData/PropertySecuredLoanPage/otherLoans', pageData_PropertySecuredLoanPage_otherLoans);

  return (
    <Tr>
      <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f8f9fa', color: '#333' }} className="min-h-screen flex flex-col">
        {/* --- Sub Menu --- */}
        <div style={{ backgroundColor: '#6200ee', color: '#fff', padding: '12px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '25px', fontSize: '14px', fontWeight: 'bold' }}>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '4px' }}>
              {t('Վարկեր')}
            </span>
            <span>{t('Վարկային պատմություն և սքոր')}</span>
            <span>{t('Կարևոր տեղեկատվություն')}</span>
          </div>
        </div>

        {/* --- Hero Section --- */}
        <div style={{ backgroundColor: '#f0f0f8', padding: '40px 20px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ maxWidth: '500px' }}>
              <h1 style={{ fontSize: '32px', color: '#111', marginBottom: '15px', fontWeight: 'bold' }}>
                {t('Գույքի գրավով ապահովված վարկ')}
              </h1>
              <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.5' }}>
                {t('Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց:')}
              </p>
            </div>

            <img 
              src="https://www.evoca.am/images-cache/loans/1/1614256117133/560x400.png" 
              alt={t('Գույքի գրավով վարկ')} 
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>

        {/* --- Breadcrumb Navigation --- */}
        <div style={{ maxWidth: '1200px', margin: '20px auto', padding: '0 20px', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '13px', color: '#666' }}>
          <button style={{ border: '1px solid #ccc', backgroundColor: '#fff', borderRadius: '20px', padding: '6px 15px', cursor: 'pointer' }}>
            ← {t('Վերադառնալ')}
          </button>
          <span>🏠 &gt; {t('Անհատ')} &gt; {t('Վարկեր')} &gt; {t('Վարկեր')} &gt; <strong style={{ color: '#111' }}>{t('Գույքի գրավով ապահովված վարկ')}</strong></span>
        </div>

        {/* --- Main Content Area --- */}
        <div style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '30px' }}>
          
          {/* Left Side Details */}
          <div>
            {/* Tabs */}
            <div style={{ display: 'flex', gap: '30px', borderBottom: '2px solid #eee', marginBottom: '25px' }}>
              <button 
                onClick={() => setActiveTab('about')}
                style={{ padding: '10px 0', border: 'none', background: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', borderBottom: activeTab === 'about' ? '3px solid #a000c8' : 'none', color: activeTab === 'about' ? '#a000c8' : '#666' }}>
                {t('Վարկի մասին')}
              </button>
              <button 
                onClick={() => setActiveTab('terms')}
                style={{ padding: '10px 0', border: 'none', background: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', borderBottom: activeTab === 'terms' ? '3px solid #a000c8' : 'none', color: activeTab === 'terms' ? '#a000c8' : '#666' }}>
                {t('Պայմաններ')}
              </button>
              <button 
                onClick={() => setActiveTab('docs')}
                style={{ padding: '10px 0', border: 'none', background: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', borderBottom: activeTab === 'docs' ? '3px solid #a000c8' : 'none', color: activeTab === 'docs' ? '#a000c8' : '#666' }}>
                {t('Պահանջվող փաստաթղթերի ցանկ')}
              </button>
            </div>

            {/* Tab 1: Վարկի մասին */}
            {activeTab === 'about' && (
              <div style={{ lineHeight: '1.7', color: '#444', fontSize: '15px' }}>
                <p style={{ marginBottom: '15px' }}>
                  {t('Անկախ նրանից՝ ցանկանում եք ձևակերպել նոր վարկ, թե վերաֆինանսավորել գործողը,')} <strong style={{ color: '#a000c8' }}>Evocabank</strong>-ն {t('առաջարկում է քո կարիքներին հարմարեցված ճկուն լուծումներ, մարման հարմար պայմաններ և ֆինանսավորման բարձր սահմանաչափ։ Վարկը կարող է տրամադրվել ինչպես վարկունակության գնահատմամբ, այնպես էլ առանց դրա՝ կախված քո նախընտրած տարբերակից։')}
                </p>
                <p style={{ fontWeight: 'bold', color: '#111', marginBottom: '15px' }}>
                  {t('Եթե արդեն ունես գույքի գրավով ապահովված վարկ այլ բանկում կամ վարկային կազմակերպությունում, կարող ես այն տեղափոխել Evocabank և օգտվել ավելի շահավետ ու հարմար պայմաններից․')}
                </p>
                <ul style={{ paddingLeft: '20px', color: '#a000c8' }}>
                  <li style={{ marginBottom: '10px' }}>
                    <span style={{ color: '#333' }}><strong style={{ color: '#111' }}>{t('Տարեկան տոկոսադրույքի նվազեցում՝')}</strong> {t('մինչև 3%-ով')}</span>
                  </li>
                  <li>
                    <span style={{ color: '#333' }}><strong style={{ color: '#111' }}>{t('Վերաֆինանսավորման հետ կապված հիմնական ծախսերը՝ Բանկի կողմից')}</strong> </span>
                  </li>
                </ul>
              </div>
            )}

            {/* Tab 2: Պայմաններ */}
            {activeTab === 'terms' && (
              <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base mb-1">{t('1. Վարկի տրամադրման նպատակը')}</h4>
                  <p>{t('Վարկը տրամադրվում է անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների, ծառայությունների) պատվիրման կամ ձեռքբերման նպատակով:')}</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base mb-1">{t('2. Ովքեր կարող են դիմել')}</h4>
                  <p>{t('18–65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն բոլորի 65 տարեկանը կամ առկա է վերոնշյալ պահանջներին բավարարող համավարկառու:')}</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base mb-3">{t('3. Վարկավորման գումար')}</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-purple-50 text-purple-900 border-b border-purple-100">
                          <th className="p-2.5 font-bold">{t('Տեսակ')}</th>
                          <th className="p-2.5 font-bold">{t('Գրավի տեսակ')}</th>
                          <th className="p-2.5 font-bold">{t('Գումար (ՀՀ դրամ)')}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td rowSpan={2} className="p-2.5 font-semibold text-gray-800 border-r border-gray-100">{t('Վարկունակության գնահատմամբ')}</td>
                          <td className="p-2.5">{t('Անշարժ գույքի գրավադրմամբ')}</td>
                          <td className="p-2.5 font-bold text-purple-700">3,000,000 – 150,000,000</td>
                        </tr>
                        <tr>
                          <td className="p-2.5">{t('Տրանսպորտային միջոցի գրավադրմամբ')}</td>
                          <td className="p-2.5 font-bold text-purple-700">5,000,000 – 50,000,000</td>
                        </tr>
                        <tr className="bg-gray-50/50">
                          <td className="p-2.5 font-semibold text-gray-800 border-r border-gray-100">{t('Առանց վարկունակության գնահատման')}</td>
                          <td className="p-2.5">{t('Անշարժ գույքի գրավադրմամբ')}</td>
                          <td className="p-2.5 font-bold text-purple-700">3,000,000 – 100,000,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base mb-1">{t('4. Վարկավորման արժույթ')}</h4>
                  <p className="font-bold text-purple-700">{t('ՀՀ դրամ')}</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base mb-3">{t('5. Մարման ժամկետ')}</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-purple-50 text-purple-900 border-b border-purple-100">
                          <th className="p-2.5 font-bold">{t('Տոկոսադրույքի տեսակ')}</th>
                          <th className="p-2.5 font-bold">{t('Գրավի տեսակ')}</th>
                          <th className="p-2.5 font-bold">{t('Ժամկետ')}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td rowSpan={2} className="p-2.5 font-semibold text-gray-800 border-r border-gray-100">{t('Հաստատուն տոկոսադրույքի դեպքում')}</td>
                          <td className="p-2.5">{t('Անշարժ գույքի գրավադրմամբ')}</td>
                          <td className="p-2.5 font-bold text-purple-700">24 - 84 {t('ամիս')}</td>
                        </tr>
                        <tr>
                          <td className="p-2.5">{t('Տրանսպորտային միջոցի գրավադրմամբ')}</td>
                          <td className="p-2.5 font-bold text-purple-700">60 {t('ամիս')}</td>
                        </tr>
                        <tr className="bg-gray-50/50">
                          <td className="p-2.5 font-semibold text-gray-800 border-r border-gray-100">{t('Լողացող տոկոսադրույքի դեպքում')}</td>
                          <td className="p-2.5">{t('Անշարժ գույքի դեպքում')}</td>
                          <td className="p-2.5 font-bold text-purple-700">36 – 180 {t('ամիս')}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base mb-3">{t('6. Տարեկան անվանական տոկոսադրույք')}</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-purple-50 text-purple-900 border-b border-purple-100">
                          <th className="p-2.5 font-bold">{t('Տեսակ')}</th>
                          <th className="p-2.5 font-bold">{t('Գրավի տեսակ')}</th>
                          <th className="p-2.5 font-bold">{t('Տոկոսադրույք')}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td rowSpan={2} className="p-2.5 font-semibold text-gray-800 border-r border-gray-100">{t('Վարկունակության գնահատմամբ')}</td>
                          <td className="p-2.5">{t('Անշարժ գույքի գրավադրմամբ')} <sup>[1]</sup></td>
                          <td className="p-2.5 font-bold text-purple-700">14% – 17%</td>
                        </tr>
                        <tr>
                          <td className="p-2.5">{t('Տրանսպորտային միջոցի գրավադրմամբ')}</td>
                          <td className="p-2.5 font-bold text-purple-700">18%</td>
                        </tr>
                        <tr className="bg-gray-50/50">
                          <td className="p-2.5 font-semibold text-gray-800 border-r border-gray-100">{t('Առանց վարկունակության գնահատման')}</td>
                          <td className="p-2.5">{t('Անշարժ գույքի գրավադրմամբ')}</td>
                          <td className="p-2.5 font-bold text-purple-700">15% - 18%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base mb-3">{t('7. Տարեկան փաստացի տոկոսադրույք')}</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-purple-50 text-purple-900 border-b border-purple-100">
                          <th className="p-2.5 font-bold">{t('Տեսակ')}</th>
                          <th className="p-2.5 font-bold">{t('Գրավի տեսակ')}</th>
                          <th className="p-2.5 font-bold">{t('Փաստացի տոկոսադրույք')}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td rowSpan={2} className="p-2.5 font-semibold text-gray-800 border-r border-gray-100">{t('Վարկունակության գնահատմամբ')}</td>
                          <td className="p-2.5">{t('Անշարժ գույքի գրավադրմամբ')}</td>
                          <td className="p-2.5 font-bold text-purple-700">14.99 – 21.32%</td>
                        </tr>
                        <tr>
                          <td className="p-2.5">{t('Տրանսպորտային միջոցի գրավադրմամբ')}</td>
                          <td className="p-2.5 font-bold text-purple-700">19.72 – 21.57%</td>
                        </tr>
                        <tr className="bg-gray-50/50">
                          <td className="p-2.5 font-semibold text-gray-800 border-r border-gray-100">{t('Առանց վարկունակության գնահատման')}</td>
                          <td className="p-2.5">{t('Անշարժ գույքի գրավադրմամբ')}</td>
                          <td className="p-2.5 font-bold text-purple-700">16.16 – 22.54%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-2">
                  <h4 className="font-bold text-gray-900 text-base">{t('8. Տարեկան լողացող տոկոսադրույքի կիրառման պայմաններ')}</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-600 pl-2">
                    <li>{t('Լողացող տոկոսադրույքի մեծությունը սահմանվում է հաստատուն բաղադրիչ` սկսած 5%-ից + փոփոխուն բաղադրիչ։')}</li>
                    <li>{t('Լողացող տոկոսադրույքի տատանման առավելագույն և նվազագույն շեմ՝ հաստատված տարեկան տոկոսադրույք +4%, սակայն ոչ ավել քան 21%։')}</li>
                    <li>{t('Լողացող տոկոսադրույքի փոփոխուն բաղադրիչը կսկսի վերանայվել վարկի տրամադրման պահից 36 ամիս ժամանակաշրջանին հաջորդող առաջին մարման ամսաթվից սկսած և յուրաքանչյուր 6 ամիսը մեկ՝ կիրառելով վերանայման պահին Բանկում գործող (կայքում փաստացի հրապարակված) տոկոսադրույքը։')}</li>
                  </ul>
                  <a href="#" className="inline-block text-purple-700 font-semibold hover:underline text-xs mt-2">
                    {t('Լողացող տոկոսադրույքի հաշվարկման կարգ')} →
                  </a>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base mb-3">{t('9. Վարկ/գրավ հարաբերակցություն')}</h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <p><strong className="text-gray-800">{t('Վարկունակության գնահատմամբ․')}</strong></p>
                    <ul className="list-disc list-inside pl-4 text-gray-600">
                      <li>{t('Անշարժ գույքի գրավադրման դեպքում` գնահատված արժեքի մինչև 80%')}</li>
                      <li>{t('Տրանսպորտային միջոցի գրավադրման դեպքում` գնահատված արժեքի մինչև 60%')}</li>
                    </ul>
                    <p className="pt-2"><strong className="text-gray-800">{t('Առանց վարկունակության գնահատման․')}</strong></p>
                    <ul className="list-disc list-inside pl-4 text-gray-600">
                      <li>{t('Անշարժ գույք` գնահատված արժեքի մինչև 60%')}</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base mb-2">{t('10. Վարկի վերադարձելիության ապահովման միջոցները')}</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-600 pl-2">
                    <li>{t('Անշարժ գույք (բացառությամբ արտադրական տարածքների)։')}</li>
                    <li>{t('Ռուսական արտադրության մինչև 3 տարվա վաղեմության տրանսպորտային միջոց։')}</li>
                    <li>{t('Ոչ ռուսական արտադրության մինչև 7 տարվա վաղեմության տրանսպորտային միջոց։')}</li>
                    <li>{t('Կարող է պահանջվել ֆիզիկական կամ իրավաբանական անձի երաշխավորություն։')}</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base mb-1">{t('11. Ապահովագրություն')}</h4>
                  <p>{t('Միայն տրանսպորտային միջոցի գրավադրման դեպքում գրավ հանդիսացող տրանսպորտային միջոցի ապահովագրություն յուրաքանչյուր տարի առնվազն վարկի մնացորդի չափով։')}</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base mb-2">{t('12. Վարկի մարման ժամանակացույց')}</h4>
                  <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-600 pl-2">
                    <li><strong>{t('Անուիտետային')}</strong> ({t('ամենամսյա')})</li>
                    <li><strong>{t('Զսպանակաձև')}</strong> ({t('ամենամսյա')})</li>
                    <li><strong>{t('Ճկուն գրաֆիկ')}</strong> ({t('տոկոսների վճարում առավելագույնը 36 ամիս')})</li>
                    <li><strong>{t('Վարկային գիծ*')}</strong> ({t('սահմանաչափը տրամադրվում է տարեկան հաստատուն տոկոսադրույքով, կարող է սահմանվել 0.5%-1% տոկոսադրույք չօգտագործվող մասի համար')})</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base mb-3">{t('13. Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք')}</h4>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-gray-800 block mb-1">{t('Սպառողական կրեդիտավորման մասին ՀՀ օրենքով կարգավորվող վարկերի դեպքում.')}</span>
                      <p className="text-emerald-600 font-semibold">{t('Տուգանք չի կիրառվում')}</p>
                    </div>
                    <div>
                      <span className="font-bold text-gray-800 block mb-1">{t('Սպառողական կրեդիտավորման մասին ՀՀ օրենքով չկարգավորվող վարկերի դեպքում.')}</span>
                      <p className="text-gray-600">{t('Այլ բանկերի կամ վարկային կազմակերպությունների կողմից վարկերի վերաֆինանսավորման դեպքում, մինչև պայմանագրի գործողության ժամկետի կեսը մայր գումարի վաղաժամկետ ամբողջական կամ մասնակի մարման դեպքում հաճախորդը վճարում է տուգանք` վաղաժամկետ մարվող մայր գումարի 1%-ի չափով:')}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base mb-2">{t('14. Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր')}</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-red-600 font-semibold pl-2">
                    <li>{t('Ժամկետանց վարկի համար՝ օրական 0.015%')}</li>
                    <li>{t('Ժամկետանց տոկոսագումարի համար՝ օրական 0.1%')}</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base mb-1">{t('15. Վարկի տրամադրման եղանակ')}</h4>
                  <p><strong>{t('Անկանխիկ')}</strong> ({t('վարկի գումարը մուտքագրվում է հաճախորդի բանկային հաշվին')})</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base mb-2">{t('16. Գանձվող վճարներ')}</h4>
                  <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-600 pl-2">
                    <li>{t('Տրամադրման միանվագ գանձվող միջնորդավճար` պայմանագրային գումարի 0.3% չափով 15,000,000 ՀՀ դրամ պայմանագրային գումարը գերազանցող վարկերի դեպքում, ոչ ավել քան 100,000 ՀՀ դրամ։')}</li>
                    <li>{t('Վարկի գումարի կանխիկացման դեպքում գանձվում է կանխիկացման վճար ըստ Բանկում գործող սակագների:')}</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base mb-2">{t('17. Վերաֆինանսավորման դեպքում')}</h4>
                  <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-600 pl-2">
                    <li>{t('Վերաֆինանսավորվող վարկի նվազագույն գումարը սկսած 10.000.000 ՀՀ դրամից։')}</li>
                    <li>{t('Վերաֆինանսավորվող վարկը պետք է սպասարկված լինի առնվազն 12 ամիս։')}</li>
                    <li>{t('Գործող վարկային պայմանագրի տարեկան տոկոսադրույքի նվազեցում մինչև 3%-ով, ոչ պակաս քան 14%։')}</li>
                    <li>{t('Վերաֆինանսավորման հետ կապված ծախսերն իրականացվում է Բանկի հաշվին: 15,000,000 ՀՀ դրամ պայմանագրային գումարը գերազանցող վարկային պայմանագրերի դեպքում, պայմանագրի կնքման պահից սկսած առաջին 36 ամիսների ընթացքում վարկի ամբողջական վաղաժամկետ մարման դեպքում Վարկառուն պարտավորվում է կատարել Բանկի կողմից իրականացված ծախսերի փոխհատուցում։')}</li>
                    <li>{t('Վերաֆինանսավորման դեպքում միանվագ միջնորդավճար չի գանձվում։')}</li>
                    <li>{t('Վարկառուն և գրավատուն պարտադիր չէ լինեն նույն անձը։')}</li>
                    <li>{t('Մնացած դրույթները կարգավորվում են ստանդարտ ընթացակարգով։')}</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-2">
                  <h4 className="font-bold text-gray-900 text-base">{t('18. Այլ պայմաններ')}</h4>
                  <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-gray-600 pl-2">
                    <li>{t('Եթե վարկի գումարը գերազանցում է գրավի արժեքի 30%-ը Վարկառուի կամ երաշխավորի Fico Սքորը պետք է լինի 510 և բարձր, միևնույն ժամանակ Հաճախորդը չպետք է ունենա վերջին 1 տարվա ընթացքում վարկային պարտավորությունների գծով դասակարգումներ և մարումների գծով ուշացման օրերի հանրագումարը չպետք է գերազանցի 30 օրը:')}</li>
                    <li>{t('Առանց վարկունակության գնահատման հայտերի դեպքում վարկառուն և գրավատուն պետք է լինի նույն անձը, իսկ տարբեր անձանց դեպքում պետք է լինեն համատեղ տնտեսություն վարող անձինք (նույն տանիքի տակ բնակվող անձինք):')}</li>
                    <li className="text-gray-500 italic">
                      {t('*Վարկային գծի սահմանաչափը վերականգնվող է, ամսական նվազագույն մարման պահանջով /առանց արտոնյալ սահմանաչափի /: Վարկային սահմանաչափը տրամադրվում է Բանկի վճարային քարտերի միջոցով: Քարտապանը պարտավորվում է վճարել նախորդ ամսվա ընթացքում օգտագործված սահմանաչափի 5%-ը /նվազագույնը` 5,000 ՀՀ դրամ/ և կուտակված տոկոսագումարները մինչև քաղվածում նշված վերջնաժամկետը: Ամիս է սահմանվում յուրաքանչյուր ամսվա 1-ից մինչ հաջորդ ամսվա 1-ը ընկած ժամանակահատվածը: Քաղվածքի օրն է մինչև յուրաքանչյուր ամսվա 10-ը: Վճարման վերջնաժամկետն է յուրաքանչյուր ամսվա 16-ը (եթե տվյալ ամսվա 16-ը հանդիսանում է ոչ աշխատանքային օր, ապա վերջնաժամկետ է համարվում հաջորդ աշխատանքային օրը): Վարկային գծի գծայնության ժամկետն առավելագույնը կարող է սահմանվել 60 ամիս:')}
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base mb-2">{t('19. Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման Ժամկետներ')}</h4>
                  <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-600 pl-2">
                    <li>{t('Վարկի տրամադրման կամ մերժման որոշումը կայացվում է առավելագույնը 10 (տաս) աշխատանքային օրվա ընթացքում, որոշումների կայացման համար Բանկի կողմից պահանջվող նախնական փաստաթղթերը ամբողջությամբ ներկայացնելուց հետո:')}</li>
                    <li>{t('Վարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, գրավի առարկա հանդիսացող գույքի գրավադրման գործընթացը ավարտելուց հետո առավելագույնը 2 (երկու) աշխատանքային օրվա ընթացքում:')}</li>
                  </ul>
                </div>

                {/* Ծանոթագրություն / Տոկոսադրույքների պայման */}
                <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100 text-xs text-gray-600 space-y-1">
                  <p>
                    <sup>[1]</sup> {t('Նշված տոկոսադրույքները կիրառվում են, եթե գրավադրվող տրանսպորտային միջոցի ապահովագրության կնքումը ապահովվում է Բանկի կողմից և Բանկի հաշվին: Ապահովագրությունը վարկառուի կողմից և վարկառուի հաշվին կատարվելու դեպքում կարող է կիրառվել նշված տոկոսադրույքից 1% ցածր տոկոսադրույք:')}
                  </p>
                </div>
              </div>
            )}
            
            {/* Tab 3: Պահանջվող փաստաթղթերի ցանկ */}
            {activeTab === 'docs' && (
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4 text-sm text-gray-700">
                <h4 className="font-bold text-gray-900 text-base mb-2">{t('Պահանջվող փաստաթղթեր')}</h4>
                <ul className="list-disc list-inside space-y-2.5 text-xs sm:text-sm text-gray-600 pl-2">
                  <li>{t('Վարկի տրամադրման դիմում-հայտ')}</li>
                  <li>{t('Անձնագիր կամ նույնականացման քարտ, ինչպես նաև սոցիալական քարտ կամ սոցիալական քարտ չունենալու մասին տեղեկանք (ընդ որում սոցիալական քարտ և սոցիալական քարտ չունենալու մասին տեղեկանք չի պահանջվում, եթե ներկայացվել է նույնականացման քարտ)')}</li>
                  <li>{t('Ամուսնության վկայական (առկայության դեպքում)')}</li>
                  <li>{t('Տեղեկանք աշխատանքի վայրից աշխատավարձի չափի մեծության մասին, որի տրամադրման ժամկետը Բանկին ներկայացման օրվա դրությամբ չպետք է գերազանցի 30 օրացույցային օրը')}</li>
                  
                  {/* Ինքնազբաղվածների համար */}
                  <li className="pt-2">
                    <strong className="text-gray-800">{t('Հաճախորդի ինքնազբաղված լինելու դեպքում․')}</strong>
                    <ul className="list-circle list-inside pl-6 space-y-1 mt-1 text-gray-500">
                      <li>{t('Պետական ռեգիստրի գրանցման վկայական կամ պետական ռեգիստրի կողմից տրված՝ քաղվածք գրանցամատյանից')}</li>
                      <li>{t('Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում կամ քաղվածքում')}</li>
                      <li>{t('Գործունեության լիցենզիա (առկայության դեպքում)')}</li>
                      <li>{t('Վերջին 1 տարվա ֆինանսական հաշվետվությունները')}</li>
                    </ul>
                  </li>

                  <li>{t('Այլ եկամուտների մեծությունը հավաստող տեղեկատվություն (առկայության դեպքում)')}</li>
                  <li>{t('Տեղեկատվություն՝ երաշխավորող անձի/անց վերաբերյալ')}</li>
                  <li>{t('Գրավադրվող գույքի փաստաթղթեր')}</li>
                  <li>{t('Գրավադրվող գույքի գնահատման հաշվետվություն')}</li>
                  <li>{t('Համապատասխան գրավի պայմանագրի կնքման համար անհրաժեշտ փաստաթղթեր')}</li>
                </ul>

                <div className="pt-4 border-t border-gray-100 text-[#6a0dad] font-semibold text-xs">
                  * {t('Անհրաժեշտության դեպքում կարող են պահանջվել նաև այլ փաստաթղթեր:')}
                </div>
              </div>
            )}
          </div>

          {/* Right Side Card */}
          <div style={{ backgroundColor: '#fff', borderRadius: '15px', padding: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', height: 'fit-content', border: '1px solid #f0f0f0' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#a000c8', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}>
              ֏
            </div>

            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: '12px', color: '#888', display: 'block' }}>{t('մինչև')}</span>
              <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#a000c8' }}>150 {t('մլն.')} ֏</div>
              <span style={{ fontSize: '13px', color: '#666' }}>{t('Գումար')}</span>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '15px 0' }} />

            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: '12px', color: '#888', display: 'block' }}>{t('անշարժ գույքի գրավադրման դեպքում')}</span>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#a000c8' }}>24-180 {t('ամիս')}</div>
              <span style={{ fontSize: '13px', color: '#666' }}>{t('Վարկի մարման ժամկետ (անշարժ)')}</span>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '15px 0' }} />

            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: '12px', color: '#888', display: 'block' }}>{t('շարժական գույքի գրավադրման դեպքում')}</span>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#a000c8' }}>60 {t('ամիս')}</div>
              <span style={{ fontSize: '13px', color: '#666' }}>{t('Վարկի մարման ժամկետ (շարժական)')}</span>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '15px 0' }} />

            <div>
              <span style={{ fontSize: '12px', color: '#888', display: 'block' }}>{t('սկսած')}</span>
              <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#a000c8' }}>14%-{t('ից')}</div>
              <span style={{ fontSize: '13px', color: '#666' }}>{t('Տոկոսադրույք')}</span>
            </div>
          </div>
        </div>

        {/* --- BANNER SECTION --- */}
        <section className="max-w-7xl mx-auto px-4 my-10 w-full">
          <div className="relative w-full rounded-2xl overflow-hidden min-h-[200px] md:min-h-[280px] bg-cover bg-center flex items-center justify-center p-6 md:p-12 shadow-md"
               style={{ backgroundImage: `url('https://www.evoca.am/images-cache/loans/1/16142561171379/1920x527.jpg')` }}>
            
            <div className="max-w-3xl text-center text-white z-10 space-y-3 bg-purple-900/40 backdrop-blur-sm p-6 rounded-2xl md:bg-transparent md:backdrop-blur-none">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug">
                {t('Ձևակերպիր վարկ Evocabank-ում՝ խուսափելով ավելորդ թղթաբանությունից։')}
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-medium opacity-90">
                {t('Սեղմ ժամկետում մենք կօգնենք լուծել քո ֆինանսական խնդիրները։')}
              </p>
            </div>
          </div>
        </section>

        {/* 2. OTHER LOANS CAROUSEL SECTION */}
        <section className="max-w-7xl mx-auto px-4 py-8 w-full">
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
                {t('Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:')}
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

        {/* 4. FOOTER SECTION */}
        <footer className="bg-white border-t border-gray-200 text-xs text-gray-600 pt-10 pb-12 mt-auto">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="space-y-4">
              <span className="text-2xl font-black text-gray-900 block">
                evoca<span className="text-gray-400 font-normal">BANK</span>
              </span>
              <p className="text-gray-500">
                {t('ք․ Երևան, 0010,')}<br /> {t('Հանրապետության 44/2')}
              </p>
              <p className="text-[11px] text-gray-400 leading-tight">
                <strong>{t('Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից')}</strong>
              </p>
              <p className="text-[10px] text-gray-400">
                1990 - 2026, © {t('ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ')}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-gray-900 mb-3">{t('Բանկի մասին')}</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-[#6a0dad]">{t('Մեր մասին')}</Link></li>
                <li><Link to="/management" className="hover:text-[#6a0dad]">{t('Ղեկավարություն')}</Link></li>
                <li><Link to="/shareholders" className="hover:text-[#6a0dad]">{t('Բաժնետերեր')}</Link></li>
                <li><Link to="/reports" className="hover:text-[#6a0dad]">{t('Հաշվետվություններ')}</Link></li>
                <li><Link to="/legal" className="hover:text-[#6a0dad]">{t('Իրավական ակտեր')}</Link></li>
                <li><Link to="/tariffs" className="hover:text-[#6a0dad]">{t('Սակագներ')}</Link></li>
                <li><Link to="/property" className="hover:text-[#6a0dad]">{t('Օտարվող գույք')}</Link></li>
                <li><Link to="/developers" className="hover:text-[#6a0dad]">{t('Կառուցապատողներ')}</Link></li>
                <li><Link to="/partners" className="hover:text-[#6a0dad]">{t('Գործընկեր ավտոսրահներ')}</Link></li>
                <li><Link to="/tariffs-archive" className="hover:text-[#6a0dad]">{t('Սակագների արխիվ')}</Link></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-gray-900 mb-3">{t('Օգտակար հղումներ')}</h4>
              <ul className="space-y-2">
                <li><Link to="/rights" className="hover:text-[#6a0dad]">{t('Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)')}</Link></li>
                <li><Link to="/residence" className="hover:text-[#6a0dad]">{t('Հաճախորդի ռեզիդենտության չափանիշներ')}</Link></li>
                <li><Link to="/regulation" className="hover:text-[#6a0dad]">{t('Կարգավորում')}</Link></li>
                <li><Link to="/privacy" className="hover:text-[#6a0dad]">{t('Գաղտնիության քաղաքականություն')}</Link></li>
                <li><Link to="/mediator" className="hover:text-[#6a0dad]">{t('Ֆին. հաշտարար')}</Link></li>
                <li><Link to="/aml" className="hover:text-[#6a0dad]">{t('Ֆինանսական հանցագործությունների կանխարգելում')}</Link></li>
                <li><Link to="/cardholders" className="hover:text-[#6a0dad]">{t('Հղումներ Բանկի քարտապանների համար')}</Link></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-gray-900 mb-3">{t('Այլ հղումներ')}</h4>
              <ul className="space-y-2">
                <li><a href="https://evocaonline.am" target="_blank" rel="noreferrer" className="hover:text-[#6a0dad]">EvocaONLINE</a></li>
                <li><Link to="/safes" className="hover:text-[#6a0dad]">{t('Պահատուփեր')}</Link></li>
                <li><Link to="/faq" className="hover:text-[#6a0dad]">{t('Հաճախ տրվող հարցեր')}</Link></li>
                <li><Link to="/announcements" className="hover:text-[#6a0dad]">{t('Հայտարարություններ')}</Link></li>
                <li><Link to="/dlibrary" className="hover:text-[#6a0dad]">Dlibrary</Link></li>
                <li><Link to="/booklets" className="hover:text-[#6a0dad]">{t('Բուկլետներ')}</Link></li>
                <li><Link to="/feedback" className="hover:text-[#6a0dad]">{t('Հետադարձ կապ')}</Link></li>
                <li><Link to="/sitemap" className="hover:text-[#6a0dad]">{t('Կայքի քարտեզ')}</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3 text-gray-500">
                <a href="#" className="hover:text-[#6a0dad]">f</a>
                <a href="#" className="hover:text-[#6a0dad]">in</a>
                <a href="#" className="hover:text-[#6a0dad]">yt</a>
              </div>

              <div className="space-y-1">
                <a href="#" className="bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded inline-block mr-2">
                  App Store
                </a>
                <a href="#" className="bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded inline-block">
                  Google Play
                </a>
              </div>

              <Link to="/branches" className="text-[#6a0dad] font-bold block hover:underline">
                {t('Բանկի հասցեները և աշխատաժամերը')}
              </Link>

              <Link to="/contact" className="text-[#6a0dad] font-bold block hover:underline">
                {t('Կապ մեզ հետ')}
              </Link>

              <div className="space-y-1 font-bold text-gray-900 text-sm">
                <p>+374 10 605555</p>
                <p className="text-[#6a0dad] text-base">8444</p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 mt-8 border-t border-gray-100 flex flex-wrap justify-between items-center gap-4 text-[10px] text-gray-400">
            <p className="max-w-xl">
              {t('Կայքում տեղադրված տեղեկատվության վերաբերյալ տարբերություններ առաջանալու դեպքում, ինչպես նաև ռուսերեն և անգլերեն լեզուներով ոչ ամբողջական լինելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով։ «Էվոկաբանկ» ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների համար։')}
            </p>
            <div className="flex items-center gap-4 opacity-60 grayscale hover:grayscale-0 transition">
              <span className="font-bold">fininfo</span>
              <span className="font-bold">abcfinance.am</span>
              <span className="font-bold">arca</span>
            </div>
          </div>
        </footer>
      </div>
    </Tr>
  );
};

export default PropertySecuredLoanPage;