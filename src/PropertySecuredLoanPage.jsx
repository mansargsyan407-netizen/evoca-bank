import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const PropertySecuredLoanPage = () => {
  const [activeTab, setActiveTab] = useState('about');

  // "Այլ վարկեր" կարուսելի տվյալները
  const otherLoans = [
  {
    id: 1,
    title: 'Անգրավ սպառողական վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg',
    path: '/loans/1',
  },
  {
    id: 2,
    title: 'Դրամական միջոցների գրավով ապահովված անհատական վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/1782886301331/415x261.jpg',
    path: '/loans/20',
  },
  {
    id: 3,
    title: 'Action',
    image: 'https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png',
    path: '/loans/9',
  },
  {
    id: 4,
    title: 'Ոսկու գրավով (լոմբարդային) վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg',
    path: '/loans/5',
  },
  {
    id: 5,
    title: 'Ավտոմեքենայի ձեռքբերման նպատակով վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg',
    path: '/loans/2',
  },
  {
    id: 6,
    title: 'Գույքի գրավով ապահովված վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg',
    path: '/loans/3',
  },
  {
    id: 7,
    title: 'Արևային կայանների ձեռք բերման վարկ EvocaPOWER',
    image: 'https://www.evoca.am/images-cache/loans/1/17552479364123/415x261.png',
    path: '/loans/4',
  },
  {
    id: 8,
    title: 'Տեղում Ապառիկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16131174467985/415x261.jpg',
    path: '/loans/6',
  },
  {
    id: 9,
    title: 'Evoca աշխատավարձային փաթեթի շրջականակում տրամադրվող վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg',
    path: '/loans/7',
  },
  {
    id: 10,
    title: 'Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով',
    image: 'https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg',
    path: '/loans/8',
  },
  {
    id: 11,
    title: 'Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին',
    image: 'https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png',
    path: '/loans/10',
  },
  {
    id: 12,
    title: 'Հողամասի ձեռքբերման վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg',
    path: '/loans/11',
  },
  {
    id: 13,
    title: 'Միկրովերանորոգման վարկ Բանկի ռեսուրսներով',
    image: 'https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png',
    path: '/loans/12',
  },
  {
    id: 14,
    title: 'Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ',
    image: 'https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png',
    path: '/loans/13',
  },
  {
    id: 15,
    title: 'Վճարային քարտով օվերդրաֆտ (վարկային քարտ)',
    image: 'https://www.evoca.am/images-cache/loans/1/16947885698869/415x261.png',
    path: '/loans/14',
  },
  {
    id: 16,
    title: 'Անհատական վարկ «Ներդրումային»',
    image: 'https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png',
    path: '/loans/15',
  },
  {
    id: 17,
    title: 'Ավտոկայանատեղիի ձեռքբերման վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg',
    path: '/loans/16',
  },
  {
    id: 18,
    title: 'Հեծանիվի ձեռքբերման վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png',
    path: '/loans/17',
  },
  {
    id: 19,
    title: 'Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png',
    path: '/loans/18',
  },
  {
    id: 20,
    title: 'Վերանորոգման վարկ EvocaHOME',
    image: 'https://www.evoca.am/images-cache/loans/1/17198124761415/415x261.png',
    path: '/loans/19',
  },
  {
    id: 21,
    title: 'Առևտրային հիփոթեքային վարկեր',
    image: 'https://www.evoca.am/images-cache/loans/1/16142450609707/415x261.jpg',
    path: '/loans/21',
  },
  {
    id: 22,
    title: 'ԱՀԸ-ի ծրագրով ձեռք բերման վարկեր',
    image: 'https://www.evoca.am/images-cache/loans/1/16142450957048/415x261.jpg',
    path: '/loans/22',
  },
  {
    id: 23,
    title: 'ԱՀԸ-ի ծրագրով կառուցապատման վարկեր',
    image: 'https://www.evoca.am/images-cache/loans/1/17265524369781/415x261.png',
    path: '/loans/23',
  },
  {
    id: 24,
    title: 'ԱՀԸ-ի ծրագրով վերանորոգման վարկեր',
    image: 'https://www.evoca.am/images-cache/loans/1/16142533830767/415x261.jpg',
    path: '/loans/24',
  },
  {
    id: 25,
    title: 'Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»',
    image: 'https://www.evoca.am/images-cache/loans/1/16142451699164/415x261.jpg',
    path: '/loans/25',
  },
  {
    id: 26,
    title: 'Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142652333164/415x261.jpg',
    path: '/loans/26',
  },
  {
    id: 27,
    title: 'Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին',
    image: 'https://www.evoca.am/images-cache/loans/1/16690386016508/415x261.png',
    path: '/loans/27',
  },
  {
    id: 28,
    title: 'Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին',
    image: 'https://www.evoca.am/images-cache/loans/1/17133596531389/415x261.png',
    path: '/loans/28',
  },
  {
    id: 29,
    title: '«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ',
    image: 'https://www.evoca.am/images-cache/loans/1/16142452651138/415x261.jpg',
    path: '/loans/29',
  },
  {
    id: 30,
    title: 'Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր',
    image: 'https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png',
    path: '/loans/30',
  },
  {
    id: 31,
    title: 'Evolution',
    image: 'https://www.evoca.am/images-cache/loans/1/16644424027338/415x261.png',
    path: '/loans/31',
  },
  {
    id: 32,
    title: 'Հիփոթեքային վարկեր Զինծառայողներին',
    image: 'https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png',
    path: '/loans/32',
  },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f8f9fa', color: '#333' }} className="min-h-screen flex flex-col">
      {/* --- Sub Menu --- */}
      <div style={{ backgroundColor: '#6200ee', color: '#fff', padding: '12px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '25px', fontSize: '14px', fontWeight: 'bold' }}>
          <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '4px' }}>Վարկեր</span>
          <span>Վարկային պատմություն և սքոր</span>
          <span>Կարևոր տեղեկատվություն</span>
        </div>
      </div>

      {/* --- Hero Section --- */}
      <div style={{ backgroundColor: '#f0f0f8', padding: '40px 20px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ maxWidth: '500px' }}>
            <h1 style={{ fontSize: '32px', color: '#111', marginBottom: '15px', fontWeight: 'bold' }}>
              Գույքի գրավով ապահովված վարկ
            </h1>
            <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.5' }}>
              Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց:
            </p>
          </div>

          <img 
            src="https://www.evoca.am/images-cache/loans/1/1614256117133/560x400.png" 
            alt="Գույքի գրավով վարկ" 
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      </div>

      {/* --- Breadcrumb Navigation --- */}
      <div style={{ maxWidth: '1200px', margin: '20px auto', padding: '0 20px', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '13px', color: '#666' }}>
        <button style={{ border: '1px solid #ccc', backgroundColor: '#fff', borderRadius: '20px', padding: '6px 15px', cursor: 'pointer' }}>
          ← Վերադառնալ
        </button>
        <span>🏠 &gt; Անհատ &gt; Վարկեր &gt; Վարկեր &gt; <strong style={{ color: '#111' }}>Գույքի գրավով ապահովված վարկ</strong></span>
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
              Վարկի մասին
            </button>
            <button 
              onClick={() => setActiveTab('terms')}
              style={{ padding: '10px 0', border: 'none', background: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', borderBottom: activeTab === 'terms' ? '3px solid #a000c8' : 'none', color: activeTab === 'terms' ? '#a000c8' : '#666' }}>
              Պայմաններ
            </button>
            <button 
              onClick={() => setActiveTab('docs')}
              style={{ padding: '10px 0', border: 'none', background: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', borderBottom: activeTab === 'docs' ? '3px solid #a000c8' : 'none', color: activeTab === 'docs' ? '#a000c8' : '#666' }}>
              Պահանջվող փաստաթղթերի ցանկ
            </button>
          </div>

          {/* Tab 1: Վարկի մասին */}
          {activeTab === 'about' && (
            <div style={{ lineHeight: '1.7', color: '#444', fontSize: '15px' }}>
              <p style={{ marginBottom: '15px' }}>
                Անկախ նրանից՝ ցանկանում եք ձևակերպել նոր վարկ, թե վերաֆինանսավորել գործողը, <strong style={{ color: '#a000c8' }}>Evocabank</strong>-ն առաջարկում է քո կարիքներին հարմարեցված ճկուն լուծումներ, մարման հարմար պայմաններ և ֆինանսավորման բարձր սահմանաչափ։ Վարկը կարող է տրամադրվել ինչպես վարկունակության գնահատմամբ, այնպես էլ առանց դրա՝ կախված քո նախընտրած տարբերակից։
              </p>
              <p style={{ fontWeight: 'bold', color: '#111', marginBottom: '15px' }}>
                Եթե արդեն ունես գույքի գրավով ապահովված վարկ այլ բանկում կամ վարկային կազմակերպությունում, կարող ես այն տեղափոխել Evocabank և օգտվել ավելի շահավետ ու հարմար պայմաններից․
              </p>
              <ul style={{ paddingLeft: '20px', color: '#a000c8' }}>
                <li style={{ marginBottom: '10px' }}>
                  <span style={{ color: '#333' }}><strong style={{ color: '#111' }}>Տարեկան տոկոսադրույքի նվազեցում՝</strong> մինչև 3%-ով</span>
                </li>
                <li>
                  <span style={{ color: '#333' }}><strong style={{ color: '#111' }}>Վերաֆինանսավորման հետ կապված հիմնական ծախսերը՝ Բանկի կողմից</strong> </span>
                </li>
              </ul>
            </div>
          )}

          {/* Tab 2: Պայմաններ */}
          {activeTab === 'terms' && (
            <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
              {/* 1. Վարկի տրամադրման նպատակը */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 text-base mb-1">1. Վարկի տրամադրման նպատակը</h4>
                <p>Վարկը տրամադրվում է անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների, ծառայությունների) պատվիրման կամ ձեռքբերման նպատակով:</p>
              </div>

              {/* 2. Ովքեր կարող են դիմել */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 text-base mb-1">2. Ովքեր կարող են դիմել</h4>
                <p>18–65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն բոլորի 65 տարեկանը կամ առկա է վերոնշյալ պահանջներին բավարարող համավարկառու:</p>
              </div>

              {/* 3. Վարկավորման գումար */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 text-base mb-3">3. Վարկավորման գումար</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-purple-50 text-purple-900 border-b border-purple-100">
                        <th className="p-2.5 font-bold">Տեսակ</th>
                        <th className="p-2.5 font-bold">Գրավի տեսակ</th>
                        <th className="p-2.5 font-bold">Գումար (ՀՀ դրամ)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td rowSpan={2} className="p-2.5 font-semibold text-gray-800 border-r border-gray-100">Վարկունակության գնահատմամբ</td>
                        <td className="p-2.5">Անշարժ գույքի գրավադրմամբ</td>
                        <td className="p-2.5 font-bold text-purple-700">3,000,000 – 150,000,000</td>
                      </tr>
                      <tr>
                        <td className="p-2.5">Տրանսպորտային միջոցի գրավադրմամբ</td>
                        <td className="p-2.5 font-bold text-purple-700">5,000,000 – 50,000,000</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-2.5 font-semibold text-gray-800 border-r border-gray-100">Առանց վարկունակության գնահատման</td>
                        <td className="p-2.5">Անշարժ գույքի գրավադրմամբ</td>
                        <td className="p-2.5 font-bold text-purple-700">3,000,000 – 100,000,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 4. Վարկավորման արժույթ */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 text-base mb-1">4. Վարկավորման արժույթ</h4>
                <p className="font-bold text-purple-700">ՀՀ դրամ</p>
              </div>

              {/* 5. Մարման ժամկետ */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 text-base mb-3">5. Մարման ժամկետ</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-purple-50 text-purple-900 border-b border-purple-100">
                        <th className="p-2.5 font-bold">Տոկոսադրույքի տեսակ</th>
                        <th className="p-2.5 font-bold">Գրավի տեսակ</th>
                        <th className="p-2.5 font-bold">Ժամկետ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td rowSpan={2} className="p-2.5 font-semibold text-gray-800 border-r border-gray-100">Հաստատուն տոկոսադրույքի դեպքում</td>
                        <td className="p-2.5">Անշարժ գույքի գրավադրմամբ</td>
                        <td className="p-2.5 font-bold text-purple-700">24 - 84 ամիս</td>
                      </tr>
                      <tr>
                        <td className="p-2.5">Տրանսպորտային միջոցի գրավադրմամբ</td>
                        <td className="p-2.5 font-bold text-purple-700">60 ամիս</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-2.5 font-semibold text-gray-800 border-r border-gray-100">Լողացող տոկոսադրույքի դեպքում</td>
                        <td className="p-2.5">Անշարժ գույքի դեպքում</td>
                        <td className="p-2.5 font-bold text-purple-700">36 – 180 ամիս</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 6. Տարեկան անվանական տոկոսադրույք */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 text-base mb-3">6. Տարեկան անվանական տոկոսադրույք</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-purple-50 text-purple-900 border-b border-purple-100">
                        <th className="p-2.5 font-bold">Տեսակ</th>
                        <th className="p-2.5 font-bold">Գրավի տեսակ</th>
                        <th className="p-2.5 font-bold">Տոկոսադրույք</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td rowSpan={2} className="p-2.5 font-semibold text-gray-800 border-r border-gray-100">Վարկունակության գնահատմամբ</td>
                        <td className="p-2.5">Անշարժ գույքի գրավադրմամբ <sup>[1]</sup></td>
                        <td className="p-2.5 font-bold text-purple-700">14% – 17%</td>
                      </tr>
                      <tr>
                        <td className="p-2.5">Տրանսպորտային միջոցի գրավադրմամբ</td>
                        <td className="p-2.5 font-bold text-purple-700">18%</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-2.5 font-semibold text-gray-800 border-r border-gray-100">Առանց վարկունակության գնահատման</td>
                        <td className="p-2.5">Անշարժ գույքի գրավադրմամբ</td>
                        <td className="p-2.5 font-bold text-purple-700">15% - 18%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 7. Տարեկան փաստացի տոկոսադրույք */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 text-base mb-3">7. Տարեկան փաստացի տոկոսադրույք</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-purple-50 text-purple-900 border-b border-purple-100">
                        <th className="p-2.5 font-bold">Տեսակ</th>
                        <th className="p-2.5 font-bold">Գրավի տեսակ</th>
                        <th className="p-2.5 font-bold">Փաստացի տոկոսադրույք</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td rowSpan={2} className="p-2.5 font-semibold text-gray-800 border-r border-gray-100">Վարկունակության գնահատմամբ</td>
                        <td className="p-2.5">Անշարժ գույքի գրավադրմամբ</td>
                        <td className="p-2.5 font-bold text-purple-700">14.99 – 21.32%</td>
                      </tr>
                      <tr>
                        <td className="p-2.5">Տրանսպորտային միջոցի գրավադրմամբ</td>
                        <td className="p-2.5 font-bold text-purple-700">19.72 – 21.57%</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-2.5 font-semibold text-gray-800 border-r border-gray-100">Առանց վարկունակության գնահատման</td>
                        <td className="p-2.5">Անշարժ գույքի գրավադրմամբ</td>
                        <td className="p-2.5 font-bold text-purple-700">16.16 – 22.54%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 8. Տարեկան լողացող տոկոսադրույքի կիրառման պայմաններ */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-2">
                <h4 className="font-bold text-gray-900 text-base">8. Տարեկան լողացող տոկոսադրույքի կիրառման պայմաններ</h4>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-600 pl-2">
                  <li>Լողացող տոկոսադրույքի մեծությունը սահմանվում է հաստատուն բաղադրիչ` սկսած 5%-ից + փոփոխուն բաղադրիչ։</li>
                  <li>Լողացող տոկոսադրույքի տատանման առավելագույն և նվազագույն շեմ՝ հաստատված տարեկան տոկոսադրույք +4%, սակայն ոչ ավել քան 21%։</li>
                  <li>Լողացող տոկոսադրույքի փոփոխուն բաղադրիչը կսկսի վերանայվել վարկի տրամադրման պահից 36 ամիս ժամանակաշրջանին հաջորդող առաջին մարման ամսաթվից սկսած և յուրաքանչյուր 6 ամիսը մեկ՝ կիրառելով վերանայման պահին Բանկում գործող (կայքում փաստացի հրապարակված) տոկոսադրույքը։</li>
                </ul>
                <a href="#" className="inline-block text-purple-700 font-semibold hover:underline text-xs mt-2">
                  Լողացող տոկոսադրույքի հաշվարկման կարգ →
                </a>
              </div>

              {/* 9. Վարկ/գրավ հարաբերակցություն */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 text-base mb-3">9. Վարկ/գրավ հարաբերակցություն</h4>
                <div className="space-y-2 text-xs sm:text-sm">
                  <p><strong className="text-gray-800">Վարկունակության գնահատմամբ․</strong></p>
                  <ul className="list-disc list-inside pl-4 text-gray-600">
                    <li>Անշարժ գույքի գրավադրման դեպքում` գնահատված արժեքի մինչև 80%</li>
                    <li>Տրանսպորտային միջոցի գրավադրման դեպքում` գնահատված արժեքի մինչև 60%</li>
                  </ul>
                  <p className="pt-2"><strong className="text-gray-800">Առանց վարկունակության գնահատման․</strong></p>
                  <ul className="list-disc list-inside pl-4 text-gray-600">
                    <li>Անշարժ գույք` գնահատված արժեքի մինչև 60%</li>
                  </ul>
                </div>
              </div>

              {/* 10. Վարկի վերադարձելիության ապահովման միջոցները */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 text-base mb-2">10. Վարկի վերադարձելիության ապահովման միջոցները</h4>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-600 pl-2">
                  <li>Անշարժ գույք (բացառությամբ արտադրական տարածքների)։</li>
                  <li>Ռուսական արտադրության մինչև 3 տարվա վաղեմության տրանսպորտային միջոց։</li>
                  <li>Ոչ ռուսական արտադրության մինչև 7 տարվա վաղեմության տրանսպորտային միջոց։</li>
                  <li>Կարող է պահանջվել ֆիզիկական կամ իրավաբանական անձի երաշխավորություն։</li>
                </ul>
              </div>

              {/* 11. Ապահովագրություն */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 text-base mb-1">11. Ապահովագրություն</h4>
                <p>Միայն տրանսպորտային միջոցի գրավադրման դեպքում գրավ հանդիսացող տրանսպորտային միջոցի ապահովագրություն յուրաքանչուր տարի առնվազն վարկի մնացորդի չափով։</p>
              </div>

              {/* 12. Վարկի մարման ժամանակացույց */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 text-base mb-2">12. Վարկի մարման ժամանակացույց</h4>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-600 pl-2">
                  <li><strong>Անուիտետային</strong> (ամենամսյա)</li>
                  <li><strong>Զսպանակաձև</strong> (ամենամսյա)</li>
                  <li><strong>Ճկուն գրաֆիկ</strong> (տոկոսների վճարում առավելագույնը 36 ամիս)</li>
                  <li><strong>Վարկային գիծ*</strong> (սահմանաչափը տրամադրվում է տարեկան հաստատուն տոկոսադրույքով, կարող է սահմանվել 0.5%-1% տոկոսադրույք չօգտագործվող մասի համար)</li>
                </ul>
              </div>

              {/* 13. Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 text-base mb-3">13. Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք</h4>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-gray-800 block mb-1">Սպառողական կրեդիտավորման մասին ՀՀ օրենքով կարգավորվող վարկերի դեպքում.</span>
                    <p className="text-emerald-600 font-semibold">Տուգանք չի կիրառվում</p>
                  </div>
                  <div>
                    <span className="font-bold text-gray-800 block mb-1">Սպառողական կրեդիտավորման մասին ՀՀ օրենքով չկարգավորվող վարկերի դեպքում.</span>
                    <p className="text-gray-600">Այլ բանկերի կամ վարկային կազմակերպությունների կողմից վարկերի վերաֆինանսավորման դեպքում, մինչև պայմանագրի գործողության ժամկետի կեսը մայր գումարի վաղաժամկետ ամբողջական կամ մասնակի մարման դեպքում հաճախորդը վճարում է տուգանք` վաղաժամկետ մարվող մայր գումարի 1%-ի չափով:</p>
                  </div>
                </div>
              </div>

              {/* 14. Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 text-base mb-2">14. Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր</h4>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-red-600 font-semibold pl-2">
                  <li>Ժամկետանց վարկի համար՝ օրական 0.015%</li>
                  <li>Ժամկետանց տոկոսագումարի համար՝ օրական 0.1%</li>
                </ul>
              </div>

              {/* 15. Վարկի տրամադրման եղանակ */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 text-base mb-1">15. Վարկի տրամադրման եղանակ</h4>
                <p><strong>Անկանխիկ</strong> (վարկի գումարը մուտքագրվում է հաճախորդի բանկային հաշվին)</p>
              </div>

              {/* 16. Գանձվող վճարներ */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 text-base mb-2">16. Գանձվող վճարներ</h4>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-600 pl-2">
                  <li>Տրամադրման միանվագ գանձվող միջնորդավճար` պայմանագրային գումարի 0.3% չափով 15,000,000 ՀՀ դրամ պայմանագրային գումարը գերազանցող վարկերի դեպքում, ոչ ավել քան 100,000 ՀՀ դրամ։</li>
                  <li>Վարկի գումարի կանխիկացման դեպքում գանձվում է կանխիկացման վճար ըստ Բանկում գործող սակագների:</li>
                </ul>
              </div>

              {/* 17. Վերաֆինանսավորման դեպքում */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 text-base mb-2">17. Վերաֆինանսավորման դեպքում</h4>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-600 pl-2">
                  <li>Վերաֆինանսավորվող վարկի նվազագույն գումարը սկսած 10.000.000 ՀՀ դրամից։</li>
                  <li>Վերաֆինանսավորվող վարկը պետք է սպասարկված լինի առնվազն 12 ամիս։</li>
                  <li>Գործող վարկային պայմանագրի տարեկան տոկոսադրույքի նվազեցում մինչև 3%-ով, ոչ պակաս քան 14%։</li>
                  <li>Վերաֆինանսավորման հետ կապված ծախսերն իրականացվում է Բանկի հաշվին: 15,000,000 ՀՀ դրամ պայմանագրային գումարը գերազանցող վարկային պայմանագրերի դեպքում, պայմանագրի կնքման պահից սկսած առաջին 36 ամիսների ընթացքում վարկի ամբողջական վաղաժամկետ մարման դեպքում Վարկառուն պարտավորվում է կատարել Բանկի կողմից իրականացված ծախսերի փոխհատուցում։</li>
                  <li>Վերաֆինանսավորման դեպքում միանվագ միջնորդավճար չի գանձվում։</li>
                  <li>Վարկառուն և գրավատուն պարտադիր չէ լինեն նույն անձը։</li>
                  <li>Մնացած դրույթները կարգավորվում են ստանդարտ ընթացակարգով։</li>
                </ul>
              </div>

              {/* 18. Այլ պայմաններ */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-2">
                <h4 className="font-bold text-gray-900 text-base">18. Այլ պայմաններ</h4>
                <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-gray-600 pl-2">
                  <li>Եթե վարկի գումարը գերազանցում է գրավի արժեքի 30%-ը Վարկառուի կամ երաշխավորի Fico Սքորը պետք է լինի 510 և բարձր, միևնույն ժամանակ Հաճախորդը չպետք է ունենա վերջին 1 տարվա ընթացքում վարկային պարտավորությունների գծով դասակարգումներ և մարումների գծով ուշացման օրերի հանրագումարը չպետք է գերազանցի 30 օրը:</li>
                  <li>Առանց վարկունակության գնահատման հայտերի դեպքում վարկառուն և գրավատուն պետք է լինի նույն անձը, իսկ տարբեր անձանց դեպքում պետք է լինեն համատեղ տնտեսություն վարող անձինք (նույն տանիքի տակ բնակվող անձինք):</li>
                  <li className="text-gray-500 italic">
                    *Վարկային գծի սահմանաչափը վերականգնվող է, ամսական նվազագույն մարման պահանջով /առանց արտոնյալ սահմանաչափի /: Վարկային սահմանաչափը տրամադրվում է Բանկի վճարային քարտերի միջոցով: Քարտապանը պարտավորվում է վճարել նախորդ ամսվա ընթացքում օգտագործված սահմանաչափի 5%-ը /նվազագույնը` 5,000 ՀՀ դրամ/ և կուտակված տոկոսագումարները մինչև քաղվածում նշված վերջնաժամկետը: Ամիս է սահմանվում յուրաքանչյուր ամսվա 1-ից մինչ հաջորդ ամսվա 1-ը ընկած ժամանակահատվածը: Քաղվածքի օրն է մինչև յուրաքանչյուր ամսվա 10-ը: Վճարման վերջնաժամկետն է յուրաքանչյուր ամսվա 16-ը (եթե տվյալ ամսվա 16-ը հանդիսանում է ոչ աշխատանքային օր, ապա վերջնաժամկետ է համարվում հաջորդ աշխատանքային օրը): Վարկային գծի գծայնության ժամկետն առավելագույնը կարող է սահմանվել 60 ամիս:
                  </li>
                </ul>
              </div>

              {/* 19. Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման Ժամկետներ */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 text-base mb-2">19. Վարկի տրամադրման կամ մերժման վերաբերյալ որոշումների կայացման Ժամկետներ</h4>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-600 pl-2">
                  <li>Վարկի տրամադրման կամ մերժման որոշումը կայացվում է առավելագույնը 10 (տաս) աշխատանքային օրվա ընթացքում, որոշումների կայացման համար Բանկի կողմից պահանջվող նախնական փաստաթղթերը ամբողջությամբ ներկայացնելուց հետո:</li>
                  <li>Վարկը տրամադրվում է Բանկի կողմից դրական որոշման դեպքում, գրավի առարկա հանդիսացող գույքի գրավադրման գործընթացը ավարտելուց հետո առավելագույնը 2 (երկու) աշխատանքային օրվա ընթացքում:</li>
                </ul>
              </div>

              {/* Ծանոթագրություն */}
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-100 text-xs text-purple-900">
                <sup>[1]</sup> Նշված տոկոսադրույքները կիրառվում են, եթե գրավադրվող տրանսպորտային միջոցի ապահովագրության կնքումը ապահովվում է Բանկի կողմից և Բանկի հաշվին: Ապահովագրությունը վարկառուի կողմից և վարկառուի հաշվին կատարվելու դեպքում կարող է կիրառվել նշված տոկոսադրույքից 1% ցածր տոկոսադրույք:
              </div>
            </div>
          )}
          
          {/* Tab 3: Պահանջվող փաստաթղթերի ցանկ */}
          {activeTab === 'docs' && (
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4 text-sm text-gray-700">
              <h4 className="font-bold text-gray-900 text-base mb-2">Պահանջվող փաստաթղթեր</h4>
              <ul className="list-disc list-inside space-y-2.5 text-xs sm:text-sm text-gray-600 pl-2">
                <li>Վարկի տրամադրման դիմում-հայտ</li>
                <li>Անձնագիր կամ նույնականացման քարտ, ինչպես նաև սոցիալական քարտ կամ սոցիալական քարտ չունենալու մասին տեղեկանք (ընդ որում սոցիալական քարտ և սոցիալական քարտ չունենալու մասին տեղեկանք չի պահանջվում, եթե ներկայացվել է նույնականացման քարտ)</li>
                <li>Ամուսնության վկայական (առկայության դեպքում)</li>
                <li>Տեղեկանք աշխատանքի վայրից աշխատավարձի չափի մեծության մասին, որի տրամադրման ժամկետը Բանկին ներկայացման օրվա դրությամբ չպետք է գերազանցի 30 օրացույցային օրը</li>
                
                {/* Ինքնազբաղվածների համար */}
                <li className="pt-2">
                  <strong className="text-gray-800">Հաճախորդի ինքնազբաղված լինելու դեպքում․</strong>
                  <ul className="list-circle list-inside pl-6 space-y-1 mt-1 text-gray-500">
                    <li>Պետական ռեգիստրի գրանցման վկայական կամ պետական ռեգիստրի կողմից տրված՝ քաղվածք գրանցամատյանից</li>
                    <li>Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում կամ քաղվածքում</li>
                    <li>Գործունեության լիցենզիա (առկայության դեպքում)</li>
                    <li>Վերջին 1 տարվա ֆինանսական հաշվետվությունները</li>
                  </ul>
                </li>

                <li>Այլ եկամուտների մեծությունը հավաստող տեղեկատվություն (առկայության դեպքում)</li>
                <li>Տեղեկատվություն՝ երաշխավորող անձի/անց վերաբերյալ</li>
                <li>Գրավադրվող գույքի փաստաթղթեր</li>
                <li>Գրավադրվող գույքի գնահատման հաշվետվություն</li>
                <li>Համապատասխան գրավի պայմանագրի կնքման համար անհրաժեշտ փաստաթղթեր</li>
              </ul>

              <div className="pt-4 border-t border-gray-100 text-[#6a0dad] font-semibold text-xs">
                * Անհրաժեշտության դեպքում կարող են պահանջվել նաև այլ փաստաթղթեր:
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
            <span style={{ fontSize: '12px', color: '#888', display: 'block' }}>մինչև</span>
            <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#a000c8' }}>150 մլն. ֏</div>
            <span style={{ fontSize: '13px', color: '#666' }}>Գումար</span>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '15px 0' }} />

          <div style={{ marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', color: '#888', display: 'block' }}>անշարժ գույքի գրավադրման դեպքում</span>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#a000c8' }}>24-180 ամիս</div>
            <span style={{ fontSize: '13px', color: '#666' }}>Վարկի մարման ժամկետ (անշարժ)</span>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '15px 0' }} />

          <div style={{ marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', color: '#888', display: 'block' }}>շարժական գույքի գրավադրման դեպքում</span>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#a000c8' }}>60 ամիս</div>
            <span style={{ fontSize: '13px', color: '#666' }}>Վարկի մարման ժամկետ (շարժական)</span>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '15px 0' }} />

          <div>
            <span style={{ fontSize: '12px', color: '#888', display: 'block' }}>սկսած</span>
            <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#a000c8' }}>14%-ից</div>
            <span style={{ fontSize: '13px', color: '#666' }}>Տոկոսադրույք</span>
          </div>
        </div>
      </div>

      {/* --- BANNER SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 my-10 w-full">
        <div className="relative w-full rounded-2xl overflow-hidden min-h-[200px] md:min-h-[280px] bg-cover bg-center flex items-center justify-center p-6 md:p-12 shadow-md"
             style={{ backgroundImage: `url('https://www.evoca.am/images-cache/loans/1/16142561171379/1920x527.jpg')` }}>
          
          <div className="max-w-3xl text-center text-white z-10 space-y-3 bg-purple-900/40 backdrop-blur-sm p-6 rounded-2xl md:bg-transparent md:backdrop-blur-none">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug">
              Ձևակերպիր վարկ Evocabank-ում՝ խուսափելով ավելորդ թղթաբանությունից։
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-medium opacity-90">
              Սեղմ ժամկետում մենք կօգնենք լուծել քո ֆինանսական խնդիրները։
            </p>
          </div>
        </div>
      </section>

      {/* 2. OTHER LOANS CAROUSEL SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-8 w-full">
        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6">
          Այլ վարկեր
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
                  <div className="w-full overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                    <img
                      src={loan.image}
                      alt={loan.title}
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="font-bold text-center text-xs md:text-sm text-gray-800 group-hover:text-purple-700 transition mt-3 line-clamp-2 px-1">
                    {loan.title}
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
              Օնլայն և մոբայլ բանկինգ
            </h2>

            <p className="text-purple-100 text-sm md:text-base leading-relaxed max-w-xl">
              Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
            </p>

            <div>
              <Link
                to="/evoca-online"
                className="inline-block bg-white text-[#6a0dad] px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition shadow-lg text-sm md:text-base"
              >
                Դառնալ հաճախորդ
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
                Սկանավորեք QR կոդը EvocaTOUCH հավելվածը ներբեռնելու համար:
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
              ք․ Երևան, 0010,<br /> Հանրապետության 44/2
            </p>
            <p className="text-[11px] text-gray-400 leading-tight">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="text-[10px] text-gray-400">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3">Բանկի մասին</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#6a0dad]">Մեր մասին</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Ղեկավարություն</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Բաժնետերեր</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հաշվետվություններ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Իրավական ակտեր</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Սակագներ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Օտարվող գույք</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Կառուցապատողներ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Գործընկեր ավտոսրահներ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Սակագների արխիվ</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3">Օգտակար հղումներ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#6a0dad]">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հաճախորդի ռեզիդենտության չափանիշներ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Կարգավորում</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Գաղտնիության քաղաքականություն</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Ֆին. հաշտարար</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Ֆինանսական հանցագործությունների կանխարգելում</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հղումներ Բանկի քարտապանների համար</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-gray-900 mb-3">Այլ հղումներ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#6a0dad]">EvocaONLINE</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Պահատուփեր</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հաճախ տրվող հարցեր</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հայտարարություններ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Dibrary</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Բուկլետներ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Հետադարձ կապ</a></li>
              <li><a href="#" className="hover:text-[#6a0dad]">Կայքի քարտեզ</a></li>
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

            <a href="#" className="text-[#6a0dad] font-bold block hover:underline">
              Բանկի հասցեները և աշխատաժամերը
            </a>

            <a href="#" className="text-[#6a0dad] font-bold block hover:underline">
              Կապ մեզ հետ
            </a>

            <div className="space-y-1 font-bold text-gray-900 text-sm">
              <p>+374 10 605555</p>
              <p className="text-[#6a0dad] text-base">8444</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 mt-8 border-t border-gray-100 flex flex-wrap justify-between items-center gap-4 text-[10px] text-gray-400">
          <p className="max-w-xl">
            Կայքում տեղադրված տեղեկատվության վերաբերյալ տարբերություններ առաջանալու դեպքում, ինչպես նաև ռուսերեն և անգլերեն լեզուներով ոչ ամբողջական լինելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով։ «Էվոկաբանկ» ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների համար։
          </p>
          <div className="flex items-center gap-4 opacity-60 grayscale hover:grayscale-0 transition">
            <span className="font-bold">fininfo</span>
            <span className="font-bold">abcfinance.am</span>
            <span className="font-bold">arca</span>
          </div>
        </div>
      </footer>

      {/* FLOATING SOCIAL ICONS */}
      <div className="hidden lg:flex flex-col items-center gap-3 fixed left-3 top-1/2 -translate-y-1/2 z-30 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md border border-gray-100 text-gray-500">
        <a href="#" className="hover:text-[#6a0dad] transition font-bold text-xs">f</a>
        <a href="#" className="hover:text-[#6a0dad] transition font-bold text-xs">in</a>
        <a href="#" className="hover:text-[#6a0dad] transition font-bold text-xs">P</a>
      </div>

      {/* FLOATING CHAT BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <button className="bg-[#6a0dad] text-white font-bold text-xs px-5 py-3 rounded-full shadow-xl hover:bg-purple-900 transition flex items-center gap-2">
          Գրեք մեզ, մենք օնլայն ենք ․․․
        </button>
        <button className="bg-[#d8b4fe] text-[#6a0dad] p-3 rounded-full shadow-lg hover:bg-purple-300 transition">
          <Phone className="w-5 h-5 fill-current" />
        </button>
      </div>
    </div>
  );
};

export default PropertySecuredLoanPage;