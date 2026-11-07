import React from 'react';
import { Link } from 'react-router-dom';

import { useFirebasePublicData } from './useFirebasePublicData';
import { pageData_MovieBlogPage_moviesList } from './sitePageData';


// Ֆիլմերի պոստերների նկարները (Grid ցանցի համար)

const moviePostersFirebaseFallback = [
  "https://www.evoca.am/images-cache/blogs/1/16309342678308/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/1630934267833/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678376/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678394/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/1630934267841/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678456/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678471/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678487/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678503/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678518/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678533/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678552/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678571/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678589/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678606/428x321.jpg",
   "https://www.evoca.am/images-cache/blogs/1/16309342678623/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678641/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678656/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678671/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678687/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678703/428x321.jpg",
  "https://www.evoca.am/images-cache/blogs/1/16309342678719/428x321.jpg",
  
];

// «Related Blogs» Հոդվածներ
const relatedBlogs = [
  {
    id: 1,
    title: "Monthly Recap",
    date: "05.01.2026",
    image: "https://www.evoca.am/images-cache/blogs/1/17683779856926/428x321.png"
  },
  {
    id: 2,
    title: "Habit Tracker",
    date: "05.01.2026",
    image: "https://www.evoca.am/images-cache/blogs/1/17683792444137/428x321.png"
  },
  {
    id: 3,
    title: "Եվրոպայի լավագույն 5 Christmas Market-ները",
    date: "16.12.2025",
    image: "https://www.evoca.am/images-cache/blogs/1/17658933558475/428x321.png"
  }
];

export default function MovieBlogPage() {
  const moviePosters = useFirebasePublicData('siteContent/pageData/MovieBlogPage/moviePosters', moviePostersFirebaseFallback);

  const moviesList = useFirebasePublicData('siteContent/pageData/MovieBlogPage/moviesList', pageData_MovieBlogPage_moviesList);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans pb-16">
      {/* Navigation / Breadcrumbs */}
      <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-gray-500 flex items-center gap-2">
        <Link to="/" className="hover:underline flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1 bg-gray-50 text-gray-700 font-medium">
          ← Back
        </Link>
        <span className="ml-2">🏠</span>
        <span>›</span>
        <Link to="/blog" className="hover:underline">Բլոգ</Link>
        <span>›</span>
        <span className="text-purple-600">Կենսակերպ</span>
        <span>›</span>
        <span className="text-gray-400 truncate max-w-xs">2021-ը դարձել է կինո պրեմիերաների մրցավազք</span>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* Banner Section */}
        <div className="bg-[#f5f4f8] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="md:w-1/2 space-y-4">
            <span className="bg-[#5b2282] text-white text-xs font-semibold px-3 py-1 rounded-sm inline-block">
              Կենսակերպ
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#222222] leading-tight">
              2021-ը դարձել է կինո պրեմիերաների մրցավազք
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              Կինոմաններին են ներկայացվելու բազմաժանր գլուխգործոցներ, որոնցից ընտրել ենք ամենասպասվածներն ու մրցակցայինները:
            </p>
            <div className="pt-4 text-xs text-gray-400 font-medium">
              01.02.2021
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src="https://www.evoca.am/images-cache/blogs/1/16329119822114/438x328.jpg"
                alt="2021-ի ամենասպասված ֆիլմերը"
                className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Բոլոր 22 ֆիլմերի ցանկը */}
        <div className="mt-12 space-y-8 max-w-4xl">
          {moviesList.map((movie) => (
            <div key={movie.id} className="space-y-2">
              <h2 className="text-lg font-bold text-[#8c30d2]">
                {movie.title}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {movie.description}
              </p>
            </div>
          ))}
        </div>

        {/* Ֆիլմերի պոստերների 3x Grid Ցանցը */}
        <div className="mt-12">
          <p className="text-sm text-gray-600 font-medium mb-6">
            Ամենասպասված ֆիլմերը դիտեք ամենաբարձր տրամադրությամբ' շրջապատված լավագույն մարդկանցով:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
            {moviePosters.map((poster, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-sm border border-gray-100 h-64 bg-black">
                <img
                  src={poster}
                  alt={`Movie Poster ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Related Blogs Հատվածը */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Related Blogs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedBlogs.map((blog) => (
              <div key={blog.id} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-3 bg-purple-900 h-44">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h4 className="font-bold text-sm text-gray-900 group-hover:text-purple-600 transition">
                  {blog.title}
                </h4>
                <p className="text-xs text-gray-400 mt-1">{blog.date}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      {/* Evocabank Full Footer */}
      <footer className="bg-[#fcfbfe] border-t border-gray-100 mt-16 pt-12 pb-8 px-6 text-xs text-gray-600">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1 */}
          <div className="space-y-4">
            <h2 className="text-xl font-black text-[#6b21a8] tracking-wider">evoca<span className="text-gray-900">BANK</span></h2>
            <p className="text-gray-500">
              ք. Երևան, 0010,<br />
              Հանրապետության 44/2
            </p>
            <p className="text-gray-400 text-[11px] leading-relaxed">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="text-gray-400 text-[11px]">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 text-sm mb-3">Բանկի մասին</h3>
            <p><a href="#about" className="hover:underline">Մեր մասին</a></p>
            <p><a href="#management" className="hover:underline">Ղեկավարություն</a></p>
            <p><a href="#shareholders" className="hover:underline">Բաժնետերեր</a></p>
            <p><a href="#reports" className="hover:underline">Հաշվետվություններ</a></p>
            <p><a href="#acts" className="hover:underline">Իրավական ակտեր</a></p>
            <p><a href="#rates" className="hover:underline">Սակագներ</a></p>
            <p><a href="#property" className="hover:underline">Օտարվող գույք</a></p>
            <p><a href="#builders" className="hover:underline">Կառուցապատողներ</a></p>
            <p><a href="#partners" className="hover:underline">Գործընկեր ավտոսրահներ</a></p>
            <p><a href="#archive" className="hover:underline">Սակագների արխիվ</a></p>
          </div>

          {/* Col 3 */}
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 text-sm mb-3">Օգտակար հղումներ</h3>
            <p><a href="#rights" className="hover:underline">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</a></p>
            <p><a href="#residency" className="hover:underline">Հաճախորդի ռեզիդենտության չափանիշներ</a></p>
            <p><a href="#regulation" className="hover:underline">Կարգավորում</a></p>
            <p><a href="#privacy" className="hover:underline">Գաղտնիության քաղաքականություն</a></p>
            <p><a href="#arbiter" className="hover:underline">Ֆին. հաշտարար</a></p>
            <p><a href="#aml" className="hover:underline">Ֆինանսական հանցագործությունների կանխարգելում</a></p>
            <p><a href="#cardholders" className="hover:underline">Հղումներ Բանկի քարտապանների համար</a></p>
          </div>

          {/* Col 4 */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-sm">Այլ հղումներ</h3>
            <div className="space-y-1.5">
              <p><a href="#online" className="hover:underline">EvocaONLINE</a></p>
              <p><a href="#safes" className="hover:underline">Պահատուփեր</a></p>
              <p><a href="#faq" className="hover:underline">Հաճախ տրվող հարցեր</a></p>
              <p><a href="#announcements" className="hover:underline">Հայտարարություններ</a></p>
              <p><a href="#dibrary" className="hover:underline">Dibrary</a></p>
              <p><a href="#booklets" className="hover:underline">Բուկլետներ</a></p>
              <p><a href="#contact" className="hover:underline">Հետադարձ կապ</a></p>
              <p><a href="#sitemap" className="hover:underline">Կայքի քարտեզ</a></p>
            </div>

            <div className="pt-2 space-y-2">
              <p className="font-bold text-[#6b21a8]"><a href="#branches">Բանկի հասցեները և աշխատաժամերը</a></p>
              <p className="font-bold text-[#6b21a8]"><a href="#contactus">Կապ մեզ հետ</a></p>
              <p className="font-bold text-gray-900 text-sm">+374 10 605555</p>
              <p className="font-bold text-[#6b21a8] text-base">8444</p>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Bottom Note */}
        <div className="max-w-7xl mx-auto pt-6 border-t border-gray-200 text-[10px] text-gray-400 leading-relaxed">
          Հարգելի' այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ԲԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստույգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
        </div>
      </footer>

      {/* Floating Chat Button (Bottom Right) */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-[#6b21a8] text-white px-4 py-2.5 rounded-full shadow-lg font-bold text-xs cursor-pointer hover:bg-purple-900 transition">
        <span>Գրեք մեզ, մենք օնլայն ենք !</span>
        <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
      </div>
    </div>
  );
}