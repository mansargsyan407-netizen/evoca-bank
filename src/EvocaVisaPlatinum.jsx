import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VisaPlatinumDetails = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [currency, setCurrency] = useState('AMD');

  const prices = {
    AMD: '30,000 ֏',
    USD: '75 $',
    EUR: '70 €'
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Top Banner Section */}
      <div className="bg-gradient-to-r from-[#f0f3fe] via-[#f7f5ff] to-[#f4efff] pt-12 pb-20 px-6 md:px-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Evoca Visa Platinum
            </h1>
            <p className="text-gray-600 text-lg">
              Պրեմիում առավելություններ պրեմիում քարտով:
            </p>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png" 
              alt="Evoca Visa Platinum" 
              className="w-80 md:w-96 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Navigation Breadcrumbs & Back Button */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full hover:bg-gray-50 transition text-gray-700 font-medium"
        >
          <span>←</span> Վերադառնալ
        </Link>

        <div className="flex items-center gap-2">
          <Link to="/" className="hover:underline">🏠</Link>
          <span>›</span>
          <span className="hover:underline cursor-pointer">Անհատ</span>
          <span>›</span>
          <span className="hover:underline cursor-pointer">Քարտեր</span>
          <span>›</span>
          <span className="hover:underline cursor-pointer">Visa</span>
          <span>›</span>
          <span className="text-gray-900 font-semibold">Evoca Visa Platinum</span>
        </div>
      </div>

      {/* Main Content & Sidebar Container */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-10">
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-3 px-2 font-bold text-lg transition-all border-b-2 mr-8 ${
              activeTab === 'about'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Քարտի մասին
          </button>
          <button
            onClick={() => setActiveTab('rates')}
            className={`pb-3 px-2 font-bold text-lg transition-all border-b-2 ${
              activeTab === 'rates'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Սակագներ և դրույքներ
          </button>
        </div>

        {/* Tab 1: Քարտի մասին */}
        {activeTab === 'about' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Column: Description & Bullet Points */}
            <div className="lg:col-span-2 space-y-6">
              <p className="text-gray-700 leading-relaxed text-base">
                Evocabank-ի Visa Platinum քարտը ոչ միայն վճարման գործիք է, այլ նաև հասանելիություն դեպի մի շարք արտոնություններ՝ սկսած ճամփորդական ապահովագրությունից մինչև օդանավակայանների բիզնես սրահների հասանելիություն և 24/7 աջակցություն:
              </p>

              <h3 className="text-xl font-bold text-purple-700 pt-2">
                Ինչո՞ւ ընտրել Visa Platinum
              </h3>

              <ul className="space-y-4">
                {[
                  'Պրեմիում արտոնություններ',
                  'Հարմարավետ ճամփորդություններ',
                  'Միջազգային ապահովագրություն',
                  'Առավելություններ Հայաստանում և ամբողջ աշխարհում',
                  '24/7 Concierge աջակցություն'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600 mt-2 shrink-0"></span>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Pricing & Perks Widget */}
            <div className="bg-[#f8f9fe] border border-purple-50 rounded-2xl p-6 shadow-sm space-y-6">
              
              {/* Currency Selector Buttons */}
              <div className="flex gap-2 justify-start">
                {['AMD', 'USD', 'EUR'].map((cur) => (
                  <button
                    key={cur}
                    onClick={() => setCurrency(cur)}
                    className={`w-10 h-10 rounded-full font-bold text-sm transition ${
                      currency === cur
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                    }`}
                  >
                    {cur === 'AMD' ? '֏' : cur === 'USD' ? '$' : '€'}
                  </button>
                ))}
              </div>

              {/* Annual Fee Display */}
              <div className="pt-2">
                <div className="text-3xl font-extrabold text-purple-700">
                  {prices[currency]}
                </div>
                <div className="text-sm text-gray-500 font-medium mt-1">
                  Սպասարկման վճար
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Free Lounge Passes */}
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Անվճար</span>
                </div>
                <div className="text-2xl font-bold text-purple-700">
                  6 մուտք
                </div>
                <div className="text-sm text-gray-500 font-medium mt-1">
                  Օդանավակայանների բիզնես սրահներ
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: Սակագներ և դրույքներ */}
        {activeTab === 'rates' && (
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Հիմնական պայմաններ</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span>Քարտի տրամադրման վճար</span>
                <span className="font-semibold text-gray-800">Անվճար</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span>Տարեկան սպասարկման վճար</span>
                <span className="font-semibold text-gray-800">30,000 ֏</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span>Կանխիկացում Evocabank ATM-ներից</span>
                <span className="font-semibold text-gray-800">0%</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default VisaPlatinumDetails;