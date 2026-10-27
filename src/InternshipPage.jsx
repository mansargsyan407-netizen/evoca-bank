import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const PURPLE = "bg-[#6200e0]";

// Նավիգացիոն մենյուի տաբերը
const TABS = [
  { label: "Աշխատանք Evoca-ում", path: "/work" },
  { label: "Ուսումնական պրակտիկա", path: "/internship" },
  { label: "EvocaBRIDGE", path: "/evocabridge" },
];

// ԲՈՒՀ-երի ցանկը իրական URL-ներով
const UNIVERSITIES = [
  {
    name: "Երևանի պետական համալսարան",
    logo: "https://www.evoca.am/images-cache/partner_universities/1/16192503158745/120x120.jpg",
  },
  {
    name: "Հայաստանի ամերիկյան համալսարան",
    logo: "https://www.evoca.am/images-cache/partner_universities/1/16192501535211/120x120.jpg",
  },
  {
    name: "Հայաստանի պետական տնտեսագիտական համալսարան",
    logo: "https://www.evoca.am/images-cache/partner_universities/1/16192504505443/120x120.jpg",
  },
  {
    name: "Հայ-Ռուսական Համալսարան",
    logo: "https://www.evoca.am/images-cache/partner_universities/1/16192505629164/120x120.jpg",
  },
];

// Փուլերի տվյալները
const STAGES = [
  {
    id: 1,
    title: "Առաջին փուլ` Համագործակցություն",
    content:
      "Բարձրագույն ուսումնական հաստատության և Evocabank-ի միջև կնքվում է ուսումնական պրակտիկայի վերաբերյալ պայմանագիր` համաձայն ուսումնական պլանի:",
  },
  {
    id: 2,
    title: "Երկրորդ փուլ` Դիմում-Հայտ",
    content:
      "Ուսանողը լրացնում է առցանց դիմում-հայտը, կցում ինքնակենսագրականը (CV) և ուղարկում Բանկին:",
  },
  {
    id: 3,
    title: "Երրորդ փուլ` Թեստավորում",
    content:
      "Դիմորդներն անցնում են մասնագիտական կամ ընդհանուր գիտելիքների և տրամաբանության թեստավորում:",
  },
  {
    id: 4,
    title: "Չորրորդ փուլ` Ուսումնական պրակտիկա",
    content:
      "Ընտրված ուսանողներն անցնում են ուսումնական պրակտիկա Բանկի համապատասխան ստորաբաժանումներում:",
  },
  {
    id: 5,
    title: "Հինգերորդ փուլ` Աշխատանքի առաջարկ",
    content:
      "Լավագույն արդյունքներ ցուցաբերած ուսանողները ստանում են աշխատանքի առաջարկ Evocabank-ում:",
  },
];

export default function InternshipPage() {
  const [openStage, setOpenStage] = useState(1);
  const [selectedUni, setSelectedUni] = useState("");

  const toggleStage = (id) => {
    setOpenStage(openStage === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="mx-auto flex h-[50px] max-w-6xl items-center gap-6 px-4 text-sm">
          <Link to="/careers" className="font-semibold">
            Evoca Լայֆ
          </Link>
          <Link to="/internship" className="font-semibold text-[#6200e0]">
            Աշխատանք և պրակտիկա
          </Link>

        
        </div>
      </header>

      {/* Sub nav */}
      <nav className={`${PURPLE} sticky top-0 z-30 shadow-md`}>
        <div className="mx-auto flex max-w-6xl overflow-x-auto px-4 text-xs font-semibold text-white">
          {TABS.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `whitespace-nowrap px-6 py-4 transition hover:bg-white/10 ${
                  isActive ? "bg-black/20 border-b-2 border-white" : ""
                }`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Hero Banner Section */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-12 px-4 sm:px-12 min-h-[420px] flex items-center"
        style={{
          backgroundImage: `url("https://www.evoca.am/images-cache/menu/1/1619460987097/1920x634.jpg")`,
        }}
      >
        <div className="mx-auto max-w-7xl w-full flex justify-start">
          {/* Սպիտակ քարտը ձախ կողմում՝ ճիշտ կլորացված անկյուններով */}
          <div className="max-w-xl w-full bg-white/95 p-8 sm:p-10 shadow-lg backdrop-blur-sm rounded-l-3xl rounded-br-3xl rounded-tr-none">
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
              Ուսումնական պրակտիկա
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
              <span className="font-bold text-[#6200e0]">Evocabank</span>-ն, առանձնահատուկ ուշադրություն դարձնելով երիտասարդության զարգացմանը և նրանց համար հնարավորությունների ստեղծմանը, պարբերաբար կազմակերպում է ուսումնական պրակտիկաներ՝ համագործակցելով հայաստանյան առաջատար բուհերի հետ:
            </p>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="mx-auto max-w-5xl px-4 py-16 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-12">
          Համալսարանական պրակտիկայի շրջանակներում մենք համագործակցում ենք հետևյալ Բուհերի հետ՝
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-start">
          {UNIVERSITIES.map((uni, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4">
              <div className="h-16 w-full flex items-center justify-center">
                <img
                  src={uni.logo}
                  alt={uni.name}
                  className="max-h-full max-w-[120px] object-contain"
                />
              </div>
              <p className="text-xs font-semibold text-gray-700 max-w-[160px] leading-snug">
                {uni.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stages Accordion Section */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="text-center text-xl sm:text-2xl font-extrabold text-gray-900 mb-10">
          Ուսումնական պրակտիկայի փուլեր
        </h2>

        <div className="space-y-4">
          {STAGES.map((stage) => {
            const isOpen = openStage === stage.id;
            return (
              <div
                key={stage.id}
                className="overflow-hidden rounded-2xl bg-white border border-purple-100 shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleStage(stage.id)}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6200e0] text-sm font-bold text-white shadow-md">
                      {stage.id}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-gray-800">
                      {stage.title}
                    </span>
                  </div>
                  <svg
                    className={`h-5 w-5 text-[#6200e0] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="border-t border-gray-100 bg-purple-50/30 px-6 py-4 text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                    {stage.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Application Form Section */}
      <section className="mx-auto max-w-2xl px-4 py-12">
        <div className="rounded-3xl bg-white p-6 sm:p-10 shadow-lg border border-gray-100">
          <h2 className="text-center text-xl sm:text-2xl font-bold text-[#6200e0] mb-2">
            Ուսումնական պրակտիկայի դիմում-հայտ
          </h2>
          <p className="text-center text-xs text-gray-500 mb-8 font-medium">
            Եթե ցանկանում եք անցնել ուսումնական պրակտիկա <span className="font-bold text-[#6200e0]">Evoca</span>-ում, կարող եք ուղարկել դիմում՝ կցելով ինքնակենսագրականը:
          </p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Անուն */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Անուն <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs outline-none focus:border-[#6200e0] focus:ring-1 focus:ring-[#6200e0] transition-all bg-gray-50/50"
              />
            </div>

            {/* Ազգանուն */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Ազգանուն <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs outline-none focus:border-[#6200e0] focus:ring-1 focus:ring-[#6200e0] transition-all bg-gray-50/50"
              />
            </div>

            {/* Հեռախոսահամար */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Հեռախոսահամար <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center rounded-xl border border-gray-200 px-3 py-2 bg-gray-50/50 focus-within:border-[#6200e0] focus-within:ring-1 focus-within:ring-[#6200e0]">
                <span className="text-xs font-semibold text-gray-600 mr-2 flex items-center gap-1 border-r pr-2">
                  🇦🇲 +374
                </span>
                <input
                  type="tel"
                  required
                  placeholder="00 000000"
                  className="w-full bg-transparent text-xs outline-none"
                />
              </div>
            </div>

            {/* Էլ. հասցե */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Էլ. հասցե
              </label>
              <input
                type="email"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs outline-none focus:border-[#6200e0] focus:ring-1 focus:ring-[#6200e0] transition-all bg-gray-50/50"
              />
            </div>

            {/* ԲՈՒՀ */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">
                ԲՈՒՀ <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Երևանի պետական համալսարան",
                  "Հայաստանի ամերիկյան համալսարան",
                  "Հայաստանի պետական տնտեսագիտական համալսարան",
                  "Հայ-ռուսական /Սլավոնական/ պետական համալսարան",
                ].map((uni, i) => (
                  <label
                    key={i}
                    className={`flex items-center gap-2 rounded-xl border p-3 text-[11px] font-medium cursor-pointer transition-all ${
                      selectedUni === uni
                        ? "border-[#6200e0] bg-purple-50/50 text-[#6200e0]"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="university"
                      value={uni}
                      onChange={(e) => setSelectedUni(e.target.value)}
                      className="accent-[#6200e0]"
                    />
                    <span>{uni}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Facebook ung. կայքում անձնական էջի հղում
              </label>
              <input
                type="url"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs outline-none focus:border-[#6200e0] focus:ring-1 focus:ring-[#6200e0] transition-all bg-gray-50/50"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                LinkedIn ung. կայքում անձնական էջի հղում
              </label>
              <input
                type="url"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs outline-none focus:border-[#6200e0] focus:ring-1 focus:ring-[#6200e0] transition-all bg-gray-50/50"
              />
            </div>

            {/* Ուղեկցող նամակ */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Ուղեկցող նամակ
              </label>
              <textarea
                rows="4"
                className="w-full rounded-xl border border-gray-200 p-4 text-xs outline-none focus:border-[#6200e0] focus:ring-1 focus:ring-[#6200e0] transition-all bg-gray-50/50 resize-none"
              ></textarea>
            </div>

            {/* Վերբեռնել ռեզյումեն */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Վերբեռնեք Ձեր ռեզյումեն <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center justify-between rounded-xl border border-dashed border-gray-300 p-4 hover:border-[#6200e0] transition-colors bg-gray-50/30 cursor-pointer">
                <span className="text-xs text-gray-400 font-medium">
                  Կցել ֆայլը / ֆայլերը
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-[#6200e0]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>
            </div>

            {/* Captcha */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Ստուգման ծածկագիր <span className="text-red-500">*</span>
              </label>
              <div className="max-w-[200px] rounded-xl border border-gray-200 bg-gray-50 p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="Մուտքագրեք ծածկագիրը"
                    className="w-full bg-transparent text-xs outline-none"
                  />
                  <button type="button" className="text-gray-400 hover:text-gray-600 text-xs ml-1">
                    🔄
                  </button>
                </div>
                <div className="flex items-center justify-center rounded-lg bg-white py-2 font-mono text-lg font-black tracking-widest text-gray-800 shadow-inner select-none border">
                  6ZYT4V
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto rounded-full bg-[#6200e0] px-10 py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#5300bd] hover:shadow-lg active:scale-95"
              >
                Ես ուզում եմ աշխատել Evoca-ում :)
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer / Թարմացման ամսաթիվ */}
      <footer className="border-t border-gray-100 py-6 text-center text-[11px] text-gray-400">
        Թարմացվել է՝ 04/10/2026 12:07
      </footer>
    </div>
  );
}