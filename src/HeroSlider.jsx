import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useLang } from './i18n';
import { useFirebasePublicData } from './useFirebasePublicData';
import { bestFromEvocaItems, bankCards, partnersData, slidesData, testimonialsData } from './homePageData';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';





const faceImages = [
  "https://www.evoca.am/img/temp/biometric/face1.png",
  "https://www.evoca.am/img/temp/biometric/face2.png",
  "https://www.evoca.am/img/temp/biometric/face3.png"
];



/* ================== Հաշվիչներ (Loan / Deposit Calculator) ================== */

function formatNum(n) {
  if (n === '' || n === null || n === undefined || isNaN(n)) return '0';
  return Number(n).toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 0 });
}

// Անուիտետ (հավասարաչափ ամսական վճար)
function calcLoanAnnuity(principal, months, annualRatePercent) {
  const r = annualRatePercent / 100 / 12;
  const payment = r === 0 ? principal / months : (principal * r) / (1 - Math.pow(1 + r, -months));
  let balance = principal;
  const rows = [];
  let totalInterest = 0;
  for (let m = 1; m <= months; m++) {
    const interest = balance * r;
    let principalPart = payment - interest;
    balance -= principalPart;
    if (balance < 0.005) balance = 0;
    totalInterest += interest;
    rows.push({ month: m, interest, principalPart, payment });
  }
  return { rows, totalInterest, totalPayment: payment * months, monthlyPayment: payment };
}

// Դիֆերենցված (նվազող ամսական վճար, հաստատուն մայր գումարի մարում)
function calcLoanDifferentiated(principal, months, annualRatePercent) {
  const r = annualRatePercent / 100 / 12;
  const principalPart = principal / months;
  let balance = principal;
  const rows = [];
  let totalInterest = 0;
  let totalPayment = 0;
  for (let m = 1; m <= months; m++) {
    const interest = balance * r;
    const payment = principalPart + interest;
    balance -= principalPart;
    totalInterest += interest;
    totalPayment += payment;
    rows.push({ month: m, interest, principalPart, payment });
  }
  return { rows, totalInterest, totalPayment, monthlyPayment: rows[0]?.payment || 0 };
}

// Ավանդի հաշվարկ (ամսական կապիտալացումով, օգտագործվում է աղյուսակի համար)
function calcDeposit(principal, months, annualRatePercent) {
  const r = annualRatePercent / 100 / 12;
  let balance = principal;
  const rows = [];
  let totalInterest = 0;
  for (let m = 1; m <= months; m++) {
    const interest = balance * r;
    balance += interest;
    totalInterest += interest;
    rows.push({ month: m, interest, balance });
  }
  return { rows, totalInterest, finalAmount: balance };
}

// Ավանդի պարզ (օրական) հաշվարկ՝ Image 1-ի ձևին համապատասխան, օրերով ժամկետ
function calcDepositSimple(principal, days, annualRatePercent) {
  const dailyInterest = (principal * (annualRatePercent / 100)) / 365;
  const totalInterest = dailyInterest * days;
  const TAX_RATE = 0.1; // 10% եկամտային հարկ
  const netInterest = totalInterest * (1 - TAX_RATE);
  return { dailyInterest, totalInterest, netInterest };
}

function RangeField({ label, value, min, max, step = 1, suffix = '', onChange }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-500">{label}</span>
        <span className="text-lg font-bold text-gray-900">
          {formatNum(value)}{suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full bg-gray-200 accent-[#6c00ff] cursor-pointer"
      />
      <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
        <span>{formatNum(min)}</span>
        <span>{formatNum(max)}</span>
      </div>
    </div>
  );
}

function CalculatorSection() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState('loan'); // 'loan' | 'deposit'

  // Վարկ
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanMonths, setLoanMonths] = useState(1);
  const [loanRate, setLoanRate] = useState(1);
  const [repaymentType, setRepaymentType] = useState('annuity'); // 'annuity' | 'differentiated'
  const [loanResult, setLoanResult] = useState(null);
  const [isLoanModalOpen, setIsLoanModalOpen] = useState(false);

  // Ավանդ (իրական ժամանակում հաշվարկվող, օրերով ժամկետ՝ ինչպես Evoca.am-ում)
  const [depositAmount, setDepositAmount] = useState(0);
  const [depositRate, setDepositRate] = useState(1);
  const [depositDays, setDepositDays] = useState(91);
  const [depositResult, setDepositResult] = useState(calcDepositSimple(0, 91, 1));

  const handleCalculateLoan = () => {
    if (loanAmount <= 0 || loanMonths <= 0) return;
    const result =
      repaymentType === 'annuity'
        ? calcLoanAnnuity(loanAmount, loanMonths, loanRate)
        : calcLoanDifferentiated(loanAmount, loanMonths, loanRate);
    setLoanResult(result);
    setIsLoanModalOpen(true);
  };

  // Ավանդի արդյունքները հաշվարկվում են ինքնաշխատ՝ inputs-ի ցանկացած փոփոխության ժամանակ
  useEffect(() => {
    setDepositResult(calcDepositSimple(depositAmount, depositDays, depositRate));
  }, [depositAmount, depositDays, depositRate]);

  return (
    <section className="w-full bg-[#f8fafd] py-16 px-4 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">{t('Հաշվիչներ')}</h2>

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 md:p-10">
          {/* Tabs */}
          <div className="flex items-center gap-8 border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab('loan')}
              className={`pb-3 text-sm md:text-base font-semibold transition-colors relative ${
                activeTab === 'loan' ? 'text-[#6c00ff]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {t('Վարկ')}
              {activeTab === 'loan' && (
                <span className="absolute left-0 right-0 -bottom-[1px] h-0.5 bg-[#6c00ff] rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('deposit')}
              className={`pb-3 text-sm md:text-base font-semibold transition-colors relative ${
                activeTab === 'deposit' ? 'text-[#6c00ff]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {t('Ավանդ')}
              {activeTab === 'deposit' && (
                <span className="absolute left-0 right-0 -bottom-[1px] h-0.5 bg-[#6c00ff] rounded-full" />
              )}
            </button>
          </div>

          {/* Վարկի Հաշվիչ */}
          {activeTab === 'loan' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <RangeField
                  label={t('Վարկի գումար')}
                  value={loanAmount}
                  min={0}
                  max={50000000}
                  step={10000}
                  onChange={setLoanAmount}
                />
                <RangeField
                  label={t('Ժամկետ')}
                  value={loanMonths}
                  min={1}
                  max={1200}
                  step={1}
                  suffix={` ${t('ամիս')}`}
                  onChange={setLoanMonths}
                />
                <RangeField
                  label={t('Տարեկան տոկոսադրույք')}
                  value={loanRate}
                  min={1}
                  max={36}
                  step={0.1}
                  suffix="%"
                  onChange={setLoanRate}
                />

                <div className="bg-white rounded-2xl border border-gray-200 p-5">
                  <span className="text-sm text-gray-500 block mb-3">{t('Մարման ձև')}</span>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="repaymentType"
                        checked={repaymentType === 'annuity'}
                        onChange={() => setRepaymentType('annuity')}
                        className="accent-[#6c00ff] w-4 h-4"
                      />
                      <span className="text-sm text-gray-800">{t('Անուիտետ')}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="repaymentType"
                        checked={repaymentType === 'differentiated'}
                        onChange={() => setRepaymentType('differentiated')}
                        className="accent-[#6c00ff] w-4 h-4"
                      />
                      <span className="text-sm text-gray-800">{t('Դիֆերենցված')}</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                <p className="text-xs text-gray-400 max-w-md">
                  {t('Բոլոր հաշվարկները կրում են ուղղորդիչ բնույթ և չեն հանդիսանում հրապարակային առաջարկ:')}
                </p>
                <button
                  onClick={handleCalculateLoan}
                  className="bg-[#6c00ff] hover:bg-[#5700d1] text-white font-semibold text-sm px-9 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl active:scale-95 whitespace-nowrap"
                >
                  {t('Հաշվել')}
                </button>
              </div>
            </div>
          )}

          {/* Ավանդի Հաշվիչ */}
          {activeTab === 'deposit' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Ձախ կողմ՝ inputs */}
              <div className="flex flex-col gap-5">
                <RangeField
                  label={t('Ներդրվող գումար')}
                  value={depositAmount}
                  min={0}
                  max={50000000}
                  step={10000}
                  onChange={setDepositAmount}
                />
                <RangeField
                  label={t('Տարեկան տոկոսադրույք')}
                  value={depositRate}
                  min={1}
                  max={36}
                  step={0.1}
                  suffix="%"
                  onChange={setDepositRate}
                />
                <RangeField
                  label={t('Ավանդի ժամկետ')}
                  value={depositDays}
                  min={91}
                  max={1095}
                  step={1}
                  suffix={` ${t('օր')}`}
                  onChange={setDepositDays}
                />
              </div>

              {/* Աջ կողմ՝ ինքնաշխատ հաշվարկվող արդյունքներ */}
              <div className="flex flex-col justify-center divide-y divide-gray-100">
                <div className="flex items-start justify-between gap-4 py-4 first:pt-0">
                  <span className="text-sm text-gray-700 max-w-[70%] leading-relaxed">
                    {t('Օրական կտրվածքով հաշվարկվող տոկոսագումար')}
                  </span>
                  <span className="text-lg font-bold text-gray-900 whitespace-nowrap">
                    {formatNum(depositResult.dailyInterest)}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 py-4">
                  <span className="text-sm text-gray-700 max-w-[70%] leading-relaxed">
                    {t('Ավանդային պայմանագրի գործողության ընթացքում հաշվարկվող ընդհանուր տոկոսային եկամուտ')}
                  </span>
                  <span className="text-lg font-bold text-gray-900 whitespace-nowrap">
                    {formatNum(depositResult.totalInterest)}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 py-4">
                  <span className="text-sm text-gray-700 max-w-[70%] leading-relaxed">
                    {t('Ավանդային պայմանագրի գործողության ընթացքում ավանդատուին փաստացի վճարվող գումարի տոկոսային եկամուտ')}
                  </span>
                  <span className="text-lg font-bold text-gray-900 whitespace-nowrap">
                    {formatNum(depositResult.netInterest)}
                  </span>
                </div>
                <div className="flex items-start gap-2 pt-4 text-xs text-gray-400 leading-relaxed">
                  <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path strokeLinecap="round" d="M12 16v-4M12 8h.01" />
                  </svg>
                  <span>
                    {t('Ներդրված ավանդի դիմաց ստացվող տոկոսագումարներից հարկվում են՝ 10% եկամտային հարկի չափով:')}
                  </span>
                </div>
              </div>

              <p className="lg:col-span-2 text-xs text-gray-400 pt-2 border-t border-gray-100">
                {t('Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում իրապարկային առաջարկ:')}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Վարկի արդյունքների մոդալ */}
      {isLoanModalOpen && loanResult && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8"
          onClick={() => setIsLoanModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-y-auto p-6 md:p-10 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsLoanModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors"
              aria-label={t('Փակել')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">{t('Վարկային հաշվիչի արդյունքներ')}</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-[#f8fafd] rounded-xl p-4">
                <span className="text-xs text-gray-500 block mb-1">{t('Գումար')}</span>
                <span className="font-bold text-gray-900">{formatNum(loanAmount)}</span>
              </div>
              <div className="bg-[#f8fafd] rounded-xl p-4">
                <span className="text-xs text-gray-500 block mb-1">{t('Տարեկան տոկոսադրույք')}</span>
                <span className="font-bold text-gray-900">{loanRate}%</span>
              </div>
              <div className="bg-[#f8fafd] rounded-xl p-4">
                <span className="text-xs text-gray-500 block mb-1">{t('Վարկի ժամկետը')}</span>
                <span className="font-bold text-gray-900">{loanMonths}</span>
              </div>
              <div className="bg-[#f8fafd] rounded-xl p-4">
                <span className="text-xs text-gray-500 block mb-1">{t('Ողջ վճարումը (Գումար + տոկոսագումարը)')}</span>
                <span className="font-bold text-gray-900">{formatNum(loanResult.totalPayment)}</span>
              </div>
            </div>

            <div className="overflow-x-auto max-h-80 overflow-y-auto rounded-xl border border-gray-100">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-white">
                  <tr className="text-left text-gray-500 border-b border-gray-100">
                    <th className="py-3 px-4 font-medium">{t('Ամիս')}</th>
                    <th className="py-3 px-4 font-medium">{t('Վճարվելիք տոկոսագումար')}</th>
                    <th className="py-3 px-4 font-medium">{t('Վարկի մասնակի մարում')}</th>
                    <th className="py-3 px-4 font-medium">{t('Վարկի ամսական վճար')}</th>
                  </tr>
                </thead>
                <tbody>
                  {loanResult.rows.map((row) => (
                    <tr key={row.month} className="border-b border-gray-50 last:border-0">
                      <td className="py-3 px-4 text-gray-800">{row.month}</td>
                      <td className="py-3 px-4 text-gray-800">{formatNum(row.interest)}</td>
                      <td className="py-3 px-4 text-gray-800">{formatNum(row.principalPart)}</td>
                      <td className="py-3 px-4 text-gray-800">{formatNum(row.payment)}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#f8fafd] font-bold">
                    <td className="py-3 px-4 text-gray-900">{t('Ընդամենը')}</td>
                    <td className="py-3 px-4 text-gray-900">{formatNum(loanResult.totalInterest)}</td>
                    <td className="py-3 px-4 text-gray-900">{formatNum(loanAmount)}</td>
                    <td className="py-3 px-4 text-gray-900">{formatNum(loanResult.totalPayment)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function OnlineBankingSection() {
  const { t } = useLang();
  return (
    <section className="w-full bg-[#6b21a8] text-white py-12 px-6 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-white rounded-full opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-10 h-10 rounded-full bg-purple-400/20 blur-sm pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        <div className="w-full lg:w-1/2 flex items-center justify-center gap-4">
          {/* Laptop Mockup with YouTube Video */}
          <div className="relative w-full max-w-[480px]">
            {/* Laptop Screen Frame */}
            <div className="relative rounded-t-2xl border-[10px] border-b-0 border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden aspect-[16/10]">
              <iframe
                src="https://www.youtube.com/embed/KwAgMHEx8ys?enablejsapi=1&origin=https%3A%2F%2Fwww.evoca.am&widgetid=1&forigin=https%3A%2F%2Fwww.evoca.am%2Fhy%2Fcards%2Fmaster%2Ftravel-card&aoriginsup=1&gporigin=https%3A%2F%2Fwww.evoca.am%2Fhy&vf=6"
                title="EvocaTOUCH Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            {/* Laptop Base */}
            <div className="w-[108%] -translate-x-[4%] h-3 bg-neutral-700 rounded-b-xl border-t border-neutral-600 shadow-md relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-neutral-500 rounded-b-md"></div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="hidden md:block relative -ml-6 mb-2 shrink-0">
            <div className="w-28 aspect-[9/19] rounded-[1.6rem] border-[5px] border-neutral-900 bg-gradient-to-b from-indigo-700 via-purple-700 to-fuchsia-700 relative overflow-hidden shadow-2xl">
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-9 h-2 bg-neutral-900 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
               <img src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" alt="" />
              </div>
              <div className="absolute top-8 left-4 w-2 h-2 rounded-full bg-white/60"></div>
              <div className="absolute bottom-12 left-3 w-2.5 h-2.5 rounded-full bg-white/40"></div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">{t('Օնլայն և մոբայլ բանկինգ')}</h2>
          <p className="text-purple-100 text-sm md:text-base leading-relaxed">
            {t('Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ։')}
          </p>

          <div>
            <Link
              to="/evoca-online"
              className="inline-block bg-white text-purple-900 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition shadow-lg text-center"
            >
              {t('Դառնալ հաճախորդ')}
            </Link>
          </div>

          {/* QR & Mobile Apps Download Section */}
          <div className="flex items-center gap-4 pt-4">
            {/* QR Code */}
            <div className="bg-white p-1.5 rounded-xl shadow-md shrink-0">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.evoca.am"
                alt="QR Code"
                className="w-20 h-20"
              />
            </div>

            {/* Text & Store Buttons */}
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-purple-100">
                {t('Ներբեռնել հավելվածները`')}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                    className="h-8"
                  />
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-8"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




export function PartnersSection() {
  const { t } = useLang();
  const partners = useFirebasePublicData('siteContent/homePage/partners', partnersData);

  return (
    <section className="w-full bg-white py-16 px-4 md:px-12 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

        {/* Ձախ կողմ՝ Վերնագիր + Նկարագրություն + Կոճակ */}
        <div className="w-full lg:w-1/3 shrink-0 z-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 tracking-tight">
            {t('Գործընկերներ')}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-sm font-normal">
            {t('Դարձեք Evocabank-ի Գործընկեր և եկեք միասին գնանք դեպի գունեղ նոր իրականություն: Դառնալով Evoca ընտանիքի անդամ՝ Դուք մուտք կգործեք ժամանակակից և յուրահատուկ աշխարհ: Մենք մշտապես բաց ենք հետաքրքիր առաջարկների ու համագործակցությունների համար:')}
          </p>
          <Link
            to="/partners"
            className="inline-flex items-center gap-2 bg-[#f3ecff] text-[#6c00ff] font-semibold text-xs md:text-sm px-6 py-3 rounded-full hover:bg-[#ece0ff] transition-all duration-300"
          >
            {t('Բոլոր գործընկերները')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Աջ կողմ՝ Ձեռքի նկար + Swiper Carousel */}
        <div className="w-full lg:w-2/3 flex items-center relative min-h-[180px]">

          {/* Կետագիծ շրջանակ + Ձեռքի պատկեր */}
          <div className="hidden md:flex absolute -left-12 lg:-left-16 z-20 w-44 h-44 items-center justify-center pointer-events-none">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-yellow-400 opacity-80 animate-spin-slow"></div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUr7tL5P1w6a7e7nEIK2Al6xjtT82vHJlmmjslUPoO525_neNhZMr6mh0&s=10"
              alt="Evoca Hand"
              className="w-32 h-36 object-contain z-10"
            />
          </div>

          {/* Սլայդերի ֆոնային սպիտակ/մոխրագույն բլոկը */}
          <div className="w-full bg-[#f9f9fc] rounded-2xl py-6 pl-4 md:pl-28 pr-4 flex items-center gap-2 border border-gray-100 shadow-sm">

            {/* Left Navigation Arrow */}
            <button className="partners-prev shrink-0 text-[#6c00ff] hover:scale-110 transition-transform p-2 cursor-pointer z-10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation]}
              slidesPerView={2}
              spaceBetween={0}
              navigation={{
                nextEl: '.partners-next',
                prevEl: '.partners-prev',
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full"
            >
              {partners.map((partner, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex flex-col items-center justify-center h-20 px-4 border-r border-gray-200/60 last:border-r-0 group cursor-pointer">
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-10 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      />
                    ) : (
                      <div className="text-center">
                        <span className="text-base md:text-lg font-black tracking-tight text-gray-800 group-hover:text-[#6c00ff] transition-colors duration-300">
                          {partner.name}
                        </span>
                        {partner.sub && (
                          <span className="block text-[9px] text-gray-400 font-medium tracking-tighter uppercase mt-0.5">
                            {partner.sub}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Right Navigation Arrow */}
            <button className="partners-next shrink-0 text-[#6c00ff] hover:scale-110 transition-transform p-2 cursor-pointer z-10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}

function CardsInteractiveSection() {
  const { t } = useLang();
  const cards = useFirebasePublicData('siteContent/homePage/cards', bankCards);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeCard = cards[selectedIndex];
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -20;
    const rotateY = ((x - centerX) / centerX) * 20;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <section className="w-full bg-[#f8fafd] py-20 px-4 md:px-12 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 min-h-[480px]">

        {/* 1․ Ձախ կողմ՝ Vertical Swiper սլայդեր */}
        <div className="relative flex flex-col items-center justify-center w-full md:w-1/4 h-[380px]">
          <button className="card-swiper-prev text-[#6c00ff] hover:text-purple-800 transition-all p-1 mb-2 z-10 cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>

          <Swiper
            direction={'vertical'}
            slidesPerView={3}
            spaceBetween={16}
            centeredSlides={false}
            navigation={{
              nextEl: '.card-swiper-next',
              prevEl: '.card-swiper-prev',
            }}
            modules={[Navigation]}
            className="w-full h-[300px]"
          >
            {cards.map((card, idx) => (
              <SwiperSlide key={card.id} className="!flex items-center justify-center">
                <div
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-full flex flex-col items-center justify-center cursor-pointer p-2 rounded-2xl transition-all duration-300 ${
                    selectedIndex === idx
                      ? 'scale-105 opacity-100 font-bold bg-white shadow-md border border-purple-100'
                      : 'opacity-50 hover:opacity-85 scale-95'
                  }`}
                >
                  <img
                    src={card.imgUrl}
                    alt={card.title}
                    className="w-20 h-12 object-contain drop-shadow-sm mb-1 pointer-events-none"
                    loading="eager"
                  />
                  <span className="text-[11px] text-gray-800 text-center line-clamp-1 font-medium">
                    {t(card.title)}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="card-swiper-next text-[#6c00ff] hover:text-purple-800 transition-all p-1 mt-2 z-10 cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* 2․ Մեջտեղում՝ Մեծ Քարտ 3D Tilt rotation-ով */}
        <div className="w-full md:w-2/4 flex justify-center items-center py-6 min-h-[280px]">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-[320px] sm:w-[440px] h-[200px] sm:h-[270px] transition-transform duration-200 ease-out cursor-grab active:cursor-grabbing flex items-center justify-center relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img
              key={activeCard.id}
              src={activeCard.imgUrl}
              alt={activeCard.title}
              className="w-full h-full object-contain drop-shadow-2xl select-none transition-all duration-300"
            />
          </div>
        </div>

        {/* 3․ Աջ կողմում՝ Անվանում + Նկարագրություն + "Մանրամասն" կոճակ */}
        <div className="w-full md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left justify-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 leading-snug">
            {t(activeCard?.title)}
          </h2>

          {activeCard?.description && (
            <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-xs">
              {t(activeCard.description)}
            </p>
          )}

          <Link to={activeCard?.link || '#'}>
            <button className="bg-[#6c00ff] hover:bg-[#5700d1] text-white font-semibold text-sm px-9 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95">
              {t('Մանրամասն')}
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

function BiometricSection() {
  const { t } = useLang();
  const [currentFace, setCurrentFace] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFace((prev) => (prev + 1) % faceImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-12 px-4 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">

        <div className="relative w-full md:w-1/2 flex justify-center items-center min-h-[400px]">
          <div className="absolute w-[380px] h-[380px] sm:w-[440px] sm:h-[440px] pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full text-[#e2d9fc]">
              <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
              <circle cx="100" cy="100" r="82" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
              <circle cx="100" cy="100" r="68" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
              <circle cx="100" cy="100" r="54" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
            </svg>
          </div>

          <div className="absolute top-[75px] z-0 evoca-triangle" />

          <div className="relative z-10 w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] top-[-10px]">
            {faceImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Evoca Biometric"
                className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${
                  index === currentFace
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-gray-900 leading-[1.3] mb-3">
            {t('Դարձի՛ր Evocabank-ի հաճախորդ')} <br />
            {t('բիոմետրիկ նույնականացմամբ')}
          </h2>

          <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed max-w-md mb-8">
            {t('Սկանավորի՛ր QR կոդը, ներբեռնի՛ր EvocaTOUCH հարմարավետ հավելվածը, ստեղծի՛ր քո հաշիվը և ստացիր քարտ')}
          </p>

          <div className="flex items-end gap-6">
            <div className="w-32 h-32 sm:w-36 sm:h-36">
              <img
                src="https://www.evoca.am/img/biometric-section-QR-Code.png"
                alt="EvocaTOUCH QR"
                className="w-full h-full object-contain"
              />
            </div>

            <Link to="/biometrics">
              <button className="px-6 py-2.5 bg-[#6c00ff] text-white text-sm font-medium rounded-full hover:bg-purple-800 transition duration-300 shadow-sm">
                {t('Իմանալ ավելին')}
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

function BestFromEvocaSection() {
  const items = useFirebasePublicData('siteContent/homePage/bestFromEvoca', bestFromEvocaItems);
  const { t } = useLang();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 px-4 sm:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="relative w-full bg-[#6c00ff] rounded-[60px] md:rounded-[100px] p-6 sm:p-12 lg:p-16 text-white overflow-hidden min-h-[580px] flex flex-col justify-between shadow-2xl">

          <div className="absolute left-0 bottom-10 w-[280px] sm:w-[360px] md:w-[420px] h-[220px] sm:h-[280px] bg-white rounded-r-full pointer-events-none z-0" />

          <div className="absolute left-[-40px] sm:left-[20px] top-[10%] sm:top-[5%] w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] pointer-events-none z-0 opacity-40">
            <svg viewBox="0 0 617 617" className="w-full h-full text-blue-300">
              <circle cx="308.5" cy="308.5" r="290" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="4 12" />
              <circle cx="308.5" cy="308.5" r="240" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="4 12" />
              <circle cx="308.5" cy="308.5" r="190" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="4 12" />
              <circle cx="308.5" cy="308.5" r="140" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="4 12" />
            </svg>
          </div>

          <div className="absolute left-[24%] bottom-[32%] z-20 hidden sm:block">
            <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
              <path d="M 0 0 L 12 12 L 24 0 L 36 12" stroke="#ff00cc" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="absolute left-[18%] bottom-[8%] w-4 h-4 bg-yellow-400 rounded-full z-20 shadow-md animate-pulse" />

          <div className="absolute bottom-0 left-[-20px] sm:left-[10px] md:left-[30px] w-[280px] sm:w-[380px] md:w-[440px] pointer-events-none z-10 select-none">
            <img
              src="https://www.evoca.am/img/statue-1.png"
              alt="Evoca Statue"
              className="w-full h-auto object-contain drop-shadow-2xl translate-y-2"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          <div className="relative z-20 ml-0 lg:ml-[380px] mb-8 mt-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              {t('Լավագույնը Evocabank-ից')}
            </h2>
          </div>

          <div className="relative z-20 ml-0 lg:ml-[380px] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`bg-white text-gray-900 rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-700 ease-out transform ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <span className="inline-block bg-[#f3ecff] text-[#6c00ff] text-[11px] font-bold px-3 py-1 rounded-md mb-3">
                  {t(item.tag)}
                </span>

                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
                  {t(item.title)}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {t(item.description)}
                </p>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

/* ================== Փոխարժեքներ (Exchange Rates) Section ================== */

const exchangeRatesData = {
  cash: {
    date: "11.09.26",
    rows: [
      { code: "USD", flag: "us", buy: 361, sell: 365.5 },
      { code: "EUR", flag: "eu", buy: 416, sell: 428 },
      { code: "RUB", flag: "ru", buy: 4.17, sell: 4.32 },
      { code: "GBP", flag: "gb", buy: 482, sell: 500 },
      { code: "CHF", flag: "ch", buy: 436, sell: 460 },
    ],
    moreRows: [
      { code: "CNY", flag: "cn", buy: 53, sell: 56 },
      { code: "AED", flag: "ae", buy: 97, sell: 100 },
      { code: "JPY", flag: "jp", buy: 2.28, sell: 2.4 },
      { code: "KZT", flag: "kz", buy: 0.78, sell: 0.85 },
      { code: "BYN", flag: "by", buy: 116, sell: 125 },
    ],
  },
  noncash: {
    date: "11.09.26",
    rows: [
      { code: "USD", flag: "us", buy: 361, sell: 366 },
      { code: "EUR", flag: "eu", buy: 416, sell: 428 },
      { code: "RUB", flag: "ru", buy: 4.24, sell: 4.41 },
      { code: "GBP", flag: "gb", buy: 482, sell: 500 },
      { code: "CHF", flag: "ch", buy: 436, sell: 460 },
    ],
    moreRows: [
      { code: "CNY", flag: "cn", buy: 53, sell: 56 },
      { code: "AED", flag: "ae", buy: 97, sell: 100 },
      { code: "JPY", flag: "jp", buy: 2.28, sell: 2.4 },
      { code: "KZT", flag: "kz", buy: 0.78, sell: 0.85 },
      { code: "BYN", flag: "by", buy: 116, sell: 125 },
    ],
  },
  gold: {
    date: "11.09.26",
    rows: [
      { fineness: 375, price: 19000 },
      { fineness: 500, price: 25300 },
      { fineness: 583, price: 29500 },
      { fineness: 750, price: 38000 },
      { fineness: 875, price: 44300 },
      { fineness: 900, price: 45600 },
      { fineness: 958, price: 48500 },
      { fineness: 999, price: 50600 },
    ],
  },
  other: {
    date: "10.07.26",
    rows: [
      { code: "RUB", percent: 10 },
    ],
  },
};

const exchangeTabs = [
  { key: "cash", label: "Կանխիկ" },
  { key: "noncash", label: "Անկանխիկ" },
  { key: "gold", label: "Ոսկե փոխարժեք" },
  { key: "other", label: "Ուրիշ կանխիկ մուտք" },
];

function CurrencyFlag({ code }) {
  return (
    <img
      src={`https://flagcdn.com/24x18/${code}.png`}
      srcSet={`https://flagcdn.com/48x36/${code}.png 2x`}
      alt=""
      width={22}
      height={16}
      className="rounded-[3px] border border-gray-100 shadow-sm shrink-0 object-cover"
    />
  );
}


/* ================== Կարծիքներ ================== */



function TestimonialsSection() {
  const { t } = useLang();
  const testimonials = useFirebasePublicData('siteContent/homePage/testimonials', testimonialsData);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="w-full bg-white py-8 md:py-10 px-4 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        <div className="relative h-[250px] sm:h-[255px] bg-[#f8f7fb] overflow-hidden">

          {/* Ձախ ձեռքի պատկեր */}
          <img
            src="https://www.evoca.am/img/reviews/hand1.png"
            alt=""
            aria-hidden="true"
            className="hidden sm:block absolute left-0 bottom-0 z-10 w-[75px] md:w-[105px] lg:w-[115px] h-auto object-contain pointer-events-none select-none"
          />

          {/* Աջ ձեռքի պատկեր */}
          <img
            src="https://www.evoca.am/img/reviews/hand2.png"
            alt=""
            aria-hidden="true"
            className="hidden sm:block absolute right-0 top-0 z-10 w-[75px] md:w-[105px] lg:w-[115px] h-auto object-contain pointer-events-none select-none"
          />

          {/* Ձախ ներքևի Z */}
          <img
            src="https://www.evoca.am/img/reviews/z-purple.png"
            alt=""
            aria-hidden="true"
            className="hidden sm:block absolute left-[55px] md:left-[85px] bottom-[-4px] z-0 w-[70px] md:w-[95px] opacity-80 pointer-events-none select-none"
          />

          {/* Աջ վերևի Z */}
          <img
            src="https://www.evoca.am/img/reviews/z-purple.png"
            alt=""
            aria-hidden="true"
            className="hidden sm:block absolute right-[55px] md:right-[85px] top-[-4px] z-0 w-[70px] md:w-[95px] opacity-80 rotate-180 pointer-events-none select-none"
          />

          {/* Ձախ quote */}
          <div className="absolute left-[18px] sm:left-[105px] md:left-[145px] top-[92px] z-20 text-[#6c00ff] text-[38px] md:text-[48px] font-serif leading-none select-none">
            &ldquo;
          </div>

          {/* Աջ quote */}
          <div className="absolute right-[18px] sm:right-[105px] md:right-[145px] bottom-[54px] z-20 text-[#6c00ff] text-[38px] md:text-[48px] font-serif leading-none rotate-180 select-none">
            &ldquo;
          </div>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            speed={700}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            className="w-full h-full"
          >
            {testimonials.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="h-full flex flex-col items-center justify-start text-center px-10 sm:px-[150px] md:px-[190px] pt-[30px] pb-[35px]">

                  {/* 5 աստղ */}
                  <div className="flex items-center justify-center gap-[2px] mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="text-[#ffd000] text-[18px] sm:text-[20px] leading-none"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="w-full max-w-[680px] text-[10px] sm:text-[11px] md:text-[12px] leading-[1.55] text-gray-700 font-medium line-clamp-4">
                    {t(review.text)}
                  </p>

                  <h3 className="mt-4 text-[11px] sm:text-[12px] md:text-[13px] font-bold text-gray-900">
                    {t(review.name)}
                  </h3>

                  <span className="mt-1 text-[9px] sm:text-[10px] md:text-[11px] text-gray-400">
                    {t(review.role)}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Կետեր */}
          <div className="absolute bottom-[17px] left-1/2 -translate-x-1/2 z-30 flex items-center gap-[7px]">
            {testimonials.map((review, index) => (
              <button
                key={review.id}
                type="button"
                aria-label={`${t('Կարծիք')} ${index + 1}`}
                onClick={() => swiperRef.current?.slideToLoop(index)}
                className={`w-[7px] h-[7px] rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === index
                    ? "bg-[#6c00ff] scale-110"
                    : "bg-[#d5d2dc] hover:bg-[#aaa5b5]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function ExchangeRatesSection() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState('cash');
  const [showMore, setShowMore] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const current = exchangeRatesData[activeTab];

  const handleTabChange = (key) => {
    setActiveTab(key);
    setShowMore(false);
  };

  const visibleRows =
    (activeTab === 'cash' || activeTab === 'noncash') && showMore
      ? [...current.rows, ...(current.moreRows || [])]
      : current.rows;

  return (
    <section className="w-full bg-white py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* Ձախ կողմ՝ Փոխարժեքներ */}
        <div className="w-full lg:w-2/3">
          <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed mb-6 max-w-2xl">
            {t('20,000 ԱՄՆ դոլարից ավել կամ դրան համարժեք այլ արտարժույթի փոխարկման դեպքում գործարքը հաստատվում է Բանկի հայեցողությամբ և Բանկի կողմից որոշված փոխարժեքով: 100,000 դրամ կամ դրան համարժեք արտարժույթի ավելի փոխանակման գործարքների իրականացման համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ:')}
          </p>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Tabs */}
            <div className="flex flex-wrap border-b border-gray-100">
              {exchangeTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  className={`px-4 sm:px-5 py-3.5 text-xs sm:text-sm font-semibold transition-colors relative whitespace-nowrap ${
                    activeTab === tab.key ? 'text-[#6c00ff]' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {t(tab.label)}
                  {activeTab === tab.key && (
                    <span className="absolute left-0 right-0 -bottom-[1px] h-0.5 bg-[#6c00ff] rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <div className="p-5 sm:p-6">
              {(activeTab === 'cash' || activeTab === 'noncash') && (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-400 text-xs">
                      <th className="pb-3 font-medium"></th>
                      <th className="pb-3 font-medium">{t('Առ')}</th>
                      <th className="pb-3 font-medium">{t('Վաճառք')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleRows.map((row) => (
                      <tr key={row.code} className="border-t border-gray-50">
                        <td className="py-3.5">
                          <span className="flex items-center gap-2.5 font-semibold text-gray-900">
                            <CurrencyFlag code={row.flag} />
                            {row.code}
                          </span>
                        </td>
                        <td className="py-3.5">
                          <span className="inline-flex items-center gap-1 text-gray-800 font-medium">
                            <svg className="w-3 h-3 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 15a1 1 0 01-.7-.29l-5-5a1 1 0 111.4-1.42L10 12.59l4.3-4.3a1 1 0 111.4 1.42l-5 5A1 1 0 0110 15z" />
                            </svg>
                            {formatNum(row.buy)}
                          </span>
                        </td>
                        <td className="py-3.5">
                          <span className="inline-flex items-center gap-1 text-gray-800 font-medium">
                            <svg className="w-3 h-3 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 5a1 1 0 01.7.29l5 5a1 1 0 11-1.4 1.42L10 7.41l-4.3 4.3a1 1 0 11-1.4-1.42l5-5A1 1 0 0110 5z" />
                            </svg>
                            {formatNum(row.sell)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === 'gold' && (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-400 text-xs">
                      <th className="pb-3 font-medium">{t('Հարգ')}</th>
                      <th className="pb-3 font-medium">{t('Նախագնային Արժեքը ՀՀ Դրամով 1 գրամի համար')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {current.rows.map((row) => (
                      <tr key={row.fineness} className="border-t border-gray-50">
                        <td className="py-3.5 font-bold text-gray-900">{row.fineness}</td>
                        <td className="py-3.5 text-gray-800 font-medium">{formatNum(row.price)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === 'other' && (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-400 text-xs">
                      <th className="pb-3 font-medium">{t('Արժույթ')}</th>
                      <th className="pb-3 font-medium">{t('Նախավճար')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {current.rows.map((row) => (
                      <tr key={row.code} className="border-t border-gray-50">
                        <td className="py-3.5 font-bold text-gray-900">{row.code}</td>
                        <td className="py-3.5 text-gray-800 font-medium">{row.percent}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              <div className="flex items-center justify-between mt-4">
                <p className="text-[11px] text-gray-300">
                  {t('Թարմացվել է՝')} {current.date}
                </p>
                {(activeTab === 'cash' || activeTab === 'noncash') && (
                  <button
                    onClick={() => setShowMore((v) => !v)}
                    className="text-xs font-semibold text-[#6c00ff] hover:text-[#5700d1] transition-colors"
                  >
                    {showMore ? t('Փակել') : t('Այլ արժույթներ')}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Աջ կողմ՝ Մեր հասցեները */}
        <div className="w-full lg:w-1/3">
          <div className="bg-[#f8fafd] rounded-2xl border border-gray-100 p-6">
            <h3 className="text-base font-bold text-gray-900 mb-1">{t('Մեր հասցեները')}</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-5 max-w-[220px]">
              {t('Բանկի հասցեները, աշխատանքային ժամերը, բանկոմատները')}
            </p>

            <button
              onClick={() => setIsMapOpen(true)}
              className="relative w-36 sm:w-40 mx-auto flex rounded-xl overflow-visible mb-5 group cursor-pointer"
            >
              <img
                src="https://www.evoca.am/img/addresses.png"
                alt="Evoca Branches Map"
                className="w-full h-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
              />
              <img
                src="https://www.evoca.am/img/addresses-pin.png"
                alt="Evoca Pin"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] w-9 sm:w-10 drop-shadow-lg pointer-events-none"
              />
            </button>

            <button
              onClick={() => setIsMapOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-[#f3ecff] text-[#6c00ff] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full hover:bg-[#ece0ff] transition-all duration-300"
            >
              {t('Դիտել քարտեզը')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Քարտեզի Մոդալ */}
      {isMapOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8"
          onClick={() => setIsMapOpen(false)}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsMapOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors z-10"
              aria-label={t('Փակել')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('Բանկի մասնաճյուղեր և բանկոմատներ')}</h3>
            <div className="relative rounded-2xl overflow-hidden border border-gray-100">
              <img
                src="https://www.evoca.am/img/addresses.png"
                alt="Evoca Branches Map"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-6 text-center">
              <Link to="/addresses">
                <button className="bg-[#6c00ff] hover:bg-[#5700d1] text-white font-semibold text-sm px-9 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl active:scale-95">
                  {t('Բոլոր հասցեները')}
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}



/* ================== Footer ================== */

function Footer() {
  const { t } = useLang();
  const linkCls = 'hover:text-purple-700 cursor-pointer';
  return (
    <footer className="w-full bg-[#f8f8fa] text-[#2d2d2d] pt-8 pb-6 px-6 border-t border-gray-100 text-xs relative">
      <div className="max-w-6xl mx-auto flex justify-end pb-4 border-b border-gray-200">
        <div className="text-gray-400 text-[11px]">
          {t('Թարմացվել է՝')} 07/09/2026 14:49
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
        <div className="space-y-3">
          <div className="flex items-center gap-1">
            <span className="text-xl font-black text-purple-700 tracking-tight">evoca</span>
            <span className="text-xl font-black text-gray-800 tracking-tight">BANK</span>
          </div>
          <p className="text-gray-600 leading-relaxed text-[12px]">
            {t('ք. Երևան, 0010,')}<br />
            {t('Հանրապետության 44/2')}
          </p>
          <p className="text-gray-500 leading-normal text-[11px]">
            {t('Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից')}
          </p>
          <p className="text-[10px] text-gray-400 pt-1">
            {t('1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ')}
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-bold text-gray-900 mb-3 text-xs">{t('Բանկի մասին')}</h4>
          <p className={linkCls}>{t('Մեր մասին')}</p>
          <p className={linkCls}>{t('Ղեկավարություն')}</p>
          <p className={linkCls}>{t('Բաժնետերեր')}</p>
          <p className={linkCls}>{t('Հաշվետվություններ')}</p>
          <p className={linkCls}>{t('Իրավական ակտեր')}</p>
          <p className={linkCls}>{t('Սակագներ')}</p>
          <p className={linkCls}>{t('Օտարվող գույք')}</p>
          <p className={linkCls}>{t('Կառուցապատողներ')}</p>
          <p className={linkCls}>{t('Գործընկեր ավտոսրահներ')}</p>
          <p className={linkCls}>{t('Սակագների արխիվ')}</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-bold text-gray-900 mb-3 text-xs">{t('Օգտակար հղումներ')}</h4>
          <p className={`${linkCls} leading-tight`}>
            {t('Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)')}
          </p>
          <p className={`${linkCls} leading-tight`}>
            {t('Հաճախորդի ռեզիդենտության չափանիշներ')}
          </p>
          <p className={linkCls}>{t('Կարգավորում')}</p>
          <p className={linkCls}>{t('Գաղտնիության քաղաքականություն')}</p>
          <p className={linkCls}>{t('Ֆին. հաշտարար')}</p>
          <p className={`${linkCls} leading-tight`}>
            {t('Ֆինանսական հանցագործությունների կանխարգելում')}
          </p>
          <p className={`${linkCls} leading-tight`}>
            {t('Հղումներ Բանկի քարտապանների համար')}
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-bold text-gray-900 text-xs">{t('Այլ հղումներ')}</h4>
            <div className="flex gap-2 text-gray-400 text-xs">
              <span className="hover:text-purple-600 cursor-pointer">f</span>
              <span className="hover:text-purple-600 cursor-pointer">📷</span>
              <span className="hover:text-purple-600 cursor-pointer">p</span>
              <span className="hover:text-purple-600 cursor-pointer">▶</span>
              <span className="hover:text-purple-600 cursor-pointer">in</span>
            </div>
          </div>

          <p className={linkCls}>EvocaONLINE</p>
          <p className={linkCls}>{t('Պահատուփեր')}</p>
          <p className={linkCls}>{t('Հաճախ տրվող հարցեր')}</p>
          <p className={linkCls}>{t('Հայտարարություններ')}</p>
          <p className={linkCls}>Dlibrary</p>
          <p className={linkCls}>{t('Բուկլետներ')}</p>
          <p className={linkCls}>{t('Հետադարձ կապ')}</p>
          <p className={linkCls}>{t('Կայքի քարտեզ')}</p>

          <div className="pt-2 space-y-1">
            <p className="text-[#6b21a8] font-bold hover:underline cursor-pointer">
              {t('Բանկի հասցեները և աշխատաժամերը')}
            </p>
            <p className="text-[#6b21a8] font-bold hover:underline cursor-pointer">
              {t('Կապ մեզ հետ')}
            </p>
            <p className="text-[#6b21a8] font-bold text-xs">+374 10 605555</p>
            <p className="text-[#6b21a8] font-extrabold text-sm">8444</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-gray-200/60 pt-4 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400">
        <p className="max-w-2xl leading-normal">
          {t('Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև ռուսերեն և անգլերեն լեզուներով ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: Evocabank ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստույգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:')}
        </p>
        <div className="flex items-center gap-4 opacity-70">
          <span className="font-bold text-gray-500">fininfo</span>
          <span className="font-bold text-gray-500">abcfinance.am</span>
          <span className="font-bold text-gray-700 text-sm">arca</span>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center">
        <div className="bg-purple-600 p-3 rounded-full text-white shadow-xl hover:scale-110 transition cursor-pointer">
          💬
        </div>
      </div>
    </footer>
  );
}

export default function HeroPage() {
  const { t } = useLang();
  const slides = useFirebasePublicData('siteContent/homePage/slides', slidesData);

  return (
    <div className="w-full">
      {/* Գլխավոր Սլայդեր */}
      <div className="w-full relative overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className={`w-full min-h-[420px] md:min-h-[480px] ${slide.bgColor} ${slide.textColor} flex items-center justify-between px-8 md:px-20 relative rounded-bl-[100px] transition-colors duration-500`}>

                <div className="max-w-xl z-10 py-12">
                  <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                    {t(slide.title)}
                  </h1>
                  <p className="text-base md:text-lg mb-8 opacity-90">
                    {t(slide.description)}
                  </p>
                  <Link to={slide.link}>
                    <button className={`px-7 py-3 rounded-full font-bold text-sm transition-all shadow-md ${slide.btnBg}`}>
                      {t(slide.btnText)}
                    </button>
                  </Link>
                </div>

                <div className="hidden md:flex items-center justify-center max-w-md lg:max-w-lg z-10">
                  <img
                    src={slide.imgUrl}
                    alt={slide.title}
                    className="max-h-[350px] object-contain drop-shadow-2xl"
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
            <button className="custom-prev text-2xl font-bold hover:scale-125 transition cursor-pointer">
              &larr;
            </button>
            <div className="custom-pagination flex items-center gap-1.5 cursor-pointer"></div>
            <button className="custom-next text-2xl font-bold hover:scale-125 transition cursor-pointer">
              &rarr;
            </button>
          </div>
        </Swiper>
      </div>

      {/* Բիոմետրիկ Նույնականացում */}
      <BiometricSection />

      {/* Լավագույնը Evocabank-ից */}
      <BestFromEvocaSection />

      {/* Ինտերակտիվ Քարտերի Բաժին */}
      <CardsInteractiveSection />

      {/* Հաշվիչներ (Վարկ / Ավանդ) */}
      <CalculatorSection />

      {/* Օնլայն և մոբայլ բանկինգ */}
      <OnlineBankingSection />

      {/* Գործընկերներ */}
      <PartnersSection />

      {/* Latest News Section */}
      <section className="bg-purple-50/50 py-16 px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-gray-900">{t('Վերջին նորությունները')}</h2>
            <Link
              to="/news"
              className="bg-purple-100 text-[#6b21a8] px-4 py-2 rounded-full text-xs font-bold hover:bg-purple-200 transition flex items-center gap-1"
            >
              {t('Բոլոր նորությունները')} <span>›</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Link
              to="/news/back-to-school"
              className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              <img src="https://www.evoca.am/images-cache/news/1/17873217684586/439x320.png" alt="" className="w-full h-auto object-cover" />
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-4 bg-[#6b21a8]"></span>
                  <span className="text-xs font-bold text-gray-800">{t('Պրոդուկտներ')}</span>
                </div>
                <h3 className="font-bold text-sm text-gray-900 line-clamp-2">
                  {t('Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով')}
                </h3>
                <p className="text-xs text-gray-400">21.08.2026</p>
              </div>
            </Link>

            {/* Card 2 - Moody's Link */}
            <Link
              to="/news/banking/ba3-rating-from-moodys-to-evocabank"
              className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              <img src="https://www.evoca.am/images-cache/news/1/17870544210976/439x320.png" alt="" className="w-full h-auto object-cover" />
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-4 bg-[#6b21a8]"></span>
                  <span className="text-xs font-bold text-gray-800">{t('Բանկային')}</span>
                </div>
                <h3 className="font-bold text-sm text-gray-900 line-clamp-2">
                  {t("Ba3 վարկանիշ Moody's-ից Evocabank-ին")}
                </h3>
                <p className="text-xs text-gray-400">18.08.2026</p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link
              to="/news/firebird-ai"
              className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              <img src="https://www.evoca.am/images-cache/news/1/17864472573391/439x320.png" alt="" className="w-full h-auto object-cover" />
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-4 bg-[#6b21a8]"></span>
                  <span className="text-xs font-bold text-gray-800">{t('Բանկային')}</span>
                </div>
                <h3 className="font-bold text-sm text-gray-900 line-clamp-2">
                  {t('Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»')}
                </h3>
                <p className="text-xs text-gray-400">11.08.2026</p>
              </div>
            </Link>
          </div>
        </div>
      </section>


      {/* Փոխարժեքներ */}
      <ExchangeRatesSection />

      {/* Կարծիքներ — էջի վերջում, փոխարժեքներից հետո */}
      <TestimonialsSection />

      {/* Footer — ամենաներքևում */}
      <Footer />

    </div>
  );
}