import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function CarLoanPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about'); // 'about' | 'terms' | 'dealers' | 'documents'

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

  // Գործընկեր ավտոսրահների ցանկը
  const dealersList = [
    { name: 'ԻՆՏԵՐՔԱՐՍ ՍՊԸ', cars: 'AIQAR, VOYAH, DONGFENG', address: 'Երևան, Ավան, Բաբաջանյան 81', phone: '+37498665511', website: 'www.aiqar.am' },
    { name: 'ՍՈԼԱՐԱՎՏՈ ՍՊԸ', cars: 'BYD, ZEEKR, HONGQI, LiXiang, AUDI, AVATR, TOYOTA', address: 'Երևան, Դավիթ Բեկի 20/7', phone: '+37494441515', website: '' },
    { name: 'ՔԱՌՄԱՌԿ ՍՊԸ', cars: 'MAZDA, BYD, XIAOMI, LiXiang', address: 'Երևան, Վահագն Դավթյան 1/4; Երևան, Մազմանյան 1, Գարաժ Մոլ; Երևան, Ներսիսյան 1; Աշտարակ, Լինչի փ., 1', phone: '+37444578009, +37443830001, +37433578009, +37455578009', website: 'www.carmark.am' },
    { name: 'ԱՅ ՄՈԹՈՐՍ ԷՅԷՄ ՍՊԸ', cars: 'BYD, ZEEKR, LiXiang, HONGQI', address: 'Կոտայք, Վերին Պտղնի, Նորավան թղմ., 1–ին փողոց, 31', phone: '+37491000380', website: 'www.imotors.am' },
    { name: 'ՄՈՒՐԱՆ ՍՊԸ', cars: 'NISSAN, ZEEKR, GEELY', address: 'Երևան, Արաբկիր, Կոմիտաս 47', phone: '+37410231118', website: 'www.nissan.am' },
    { name: 'ՎԻ ԸՆԴ ՎԻ ՏՐԱՆՍ ՍՊԸ', cars: 'BYD, LiXiang, HONGQI, GEELY, KIA, HYUNDAI, MAZDA', address: 'Երևան, Արշակունյաց պ. 119', phone: '+37411799777', website: 'www.vvtrans.am' },
    { name: 'ՍՄԱՐԹ ՄՈԹՈՐՍ ՍՊԸ', cars: 'BYD, ZEEKR, LiXiang, JAGUAR, VOLKSWAGEN, AUDI, HONDA', address: 'Երևան, Թևոսյան 16/9; Կոտայք, Վերին Պտղնի, 1–ին փողոց, 65/1', phone: '+37444080833', website: '' },
    { name: 'X ՄՈԹՈՐՍ ՍՊԸ', cars: 'XPeng', address: 'Երևան, Թբիլիսյան 39', phone: '+37498777720, +37412777444', website: '' },
    { name: 'Ի-ԱՎՏՈ ՍՊԸ', cars: 'HONGQI', address: 'Երևան, Դավիթ Բեկ 138/4', phone: '+37491330330', website: 'www.hongqi.am' },
    { name: 'ԱՎՏՈ ԳԵԼԼՐԻ ՓԲԸ', cars: 'IM Motors', address: 'Երևան, Դավիթաշեն, 4-րդ թղմ., 46/7', phone: '+37460707010', website: 'auto-gallery.am' },
    { name: 'ԻՎԻ ՍԵՆԹՐ ՍՊԸ', cars: 'BYD', address: 'Երևան, Սեբաստիա 6', phone: '+37455481111', website: '' },
    { name: 'ՋԵՅՔԱՐՍ ՍՊԸ', cars: 'BYD, Denza, Fangchangbao, Yangwang', address: 'Երևան, Դավիթ Բեկ 170', phone: '+37496949410', website: '' },
    { name: 'ԹԻ ԷՍ ՎԱՅ ՍՊԸ', cars: 'TESLA', address: 'Երևան, Շենգավիթ, Գ. Նժդեհ 37/4', phone: '+37441040020', website: 'www.tsy.am' },
    { name: 'ԳՈԼԴ-ՖԼՈՒՐ ՍՊԸ', cars: 'MAZDA, BYD, LiXiang, HONDA, ZEEKR, MERCEDES-BENZ', address: 'Երևան, Իսակով 15/1', phone: '+37493659066', website: '' },
    { name: 'ՏԵՍԼԱ ԷՆԵՐՋԻ ՍՊԸ', cars: 'TESLA', address: 'Կոտայքի մարզ, Պռոշյան գյուղ, Գևորգ Չաուշի փող. 1-ին նրբ., 3 հողամաս', phone: '+37444551111', website: 'www.teslaenergy.am' },
    { name: 'ԷԿՈ ՄՈԹՈՐՍ ԳՐՈՒՊ ՍՊԸ', cars: 'BYD, LiXiang, HONGQI, SKYWELL, MERCEDES-BENZ, DONGFENG, HONDA, TOYOTA', address: 'Երևան, Դավիթ Բեկ 97/26; Երևան, Մելքումով 88; Կոտայք, Վերին Պտղնի, 14; Արմավիր, Փարաքար, Գ. Չաուշ 2', phone: '+37496949466', website: 'www.ecomotors.am' },
    { name: 'ՍԻԹԻ ԱՎՏՈ ՍՊԸ', cars: 'LiXiang, Aston Martin, BYD, Zeekr, Mercedes, Volkswagen', address: 'Երևան, Մազմանյան 1', phone: '+37491129797', website: '' },
    { name: 'ՕՐԻԳԻՆԱԼ ՄՈԹՈՐՍ ՍՊԸ', cars: 'BYD, Geely, KIA, LiXiang, ICAR, TOYOTA, HONGQI', address: 'Աբովյան, Երևանյան փ., 1/100', phone: '+37495666266', website: '' },
    { name: 'ԿԱՐԿՈՄԱՎՏՈՄԱՐԿԵՏ ՍՊԸ', cars: 'BYD', address: 'Երևան, Մազմանյան 1', phone: '+37491037770', website: '' },
    { name: 'ԴՐԱԳՈՆ ՄՈԹՈՐՍ ԱՐՄ ՍՊԸ', cars: 'BYD, MAZDA, TOYOTA, Volkswagen', address: 'Երևան, Գայի պողոտա 16 (Mega Mall -1 parking)', phone: '+37410303050', website: 'www.dragonmotors.am' },
    { name: 'ԱՐՄ ԷՔՍԻՍ ՍՊԸ', cars: 'AVATR, DEEPAL', address: 'Երևան', phone: '+37491701135, +37494701135', website: '' },
    { name: 'ԷԼՄՈԹՈՐՍ ՍՊԸ', cars: 'BYD', address: 'Երևան, Թբիլիսյան Խճուղի 69', phone: '+37477987654', website: '' },
    { name: 'ԱՀԱՐՈՆ ԱՎՏՈ ՍՊԸ', cars: 'BYD, HONGQI', address: 'Երևան, Թբիլիսյան 23/3', phone: '+37491210448', website: '' },
    { name: 'ԱՓՐՈ-ԱՎՏՈ ՍՊԸ', cars: 'BYD, LiXiang, HONGQI, VOYAH', address: 'Երևան, Էրեբունի 17/1', phone: '+37495161161', website: '' },
    { name: 'ՎՈՒԼԿԱՆ ԷԼԵՔԹՐԻՔ ՎԵՀԻՔԼ ՔՈՄՓՆԻ ՍՊԸ', cars: 'BYD', address: 'Երևան, Արին Բերդի 6', phone: '+37498408575', website: '' },
    { name: 'ՔԱՐՍ ԳՐՈՒՊ ՍՊԸ', cars: 'BYD, HONGQI, TOYOTA', address: 'Երևան, Ազատության պողոտա 27շ, Երազ բիզնես կենտրոն', phone: '+37433175050', website: '' },
    { name: 'ՄՈԲԻԼՈՒՍ ՍՊԸ', cars: 'BYD, LiXiang, Leapmotor', address: 'Երևան, Կենտրոն, Բուզանդի 15', phone: '+37441444300', website: '' },
    { name: 'ԱՎՏՈՋԵՄ ՍՊԸ', cars: 'Li Auto, Hongqi, Volkswagen', address: 'Երևան, Կարապետ Ուլնեցու փ. 70/4', phone: '+374 77 142005', website: '' },
    { name: 'ԱՐԵԳ ՇՔԵՂ ԱՎՏՈՄԵՔԵՆԱՆԵՐ ՍՊԸ', cars: 'Li Auto, Deepal, Mazda EZ-60', address: 'Երևան, Նար-Դոս 66', phone: '+374 98 110001', website: '' },
    { name: 'ԱՐՄԵՆ-ԱԼԵՔՍԱՆ ՍՊԸ', cars: 'BAW', address: 'Երևան, Դավիթ Բեկի փ. 97/26, Նոր Նորք', phone: '+374 96 012010', website: '' },
    { name: 'ԲԻ ՎԱՅ ԴԻ ԷՅԷՄ ԱՈՒՏՈ ՍՊԸ', cars: 'BYD, Toyota, Mazda, Hongqi, Li Auto', address: 'Աբովյան, Երևանյան 1/100', phone: '+374 95 666266', website: '' },
    { name: 'Բլյու Էներջի', cars: 'Roewe M7, Hongqi E-QM5, Li Auto L6, Li Auto L7, Mazda EZ-60, Changan Deepal S05, Changan Deepal S07, BYD Sealion 06', address: 'Երևան, Թբիլիսյան 21/8', phone: '+374 77 180011', website: '' },
    { name: 'ԴՐԻՄՔԱՐ ՍՊԸ', cars: 'Mazda EZ-60, Hongqi E-QM5, BYD Sealion, Changan Deepal', address: 'Երևան, Գայի պողոտա 10/6', phone: '+374 93 855655', website: '' },
    { name: 'Էյ Բի Էյ Ինթերնեյշնլ ՍՊԸ', cars: 'Toyota, Changan, Aion, BYD, Mazda, Xpeng, Li Auto, Zeekr, Honda, Geely, Galaxy, Hongqi, Dongfeng, Denza, Xiaomi, Maxus, Ruichi, Mercedes-Benz, BMW', address: 'Երևան, Կիևյան 2', phone: '+374 33 840840', website: '' },
    { name: 'Էյ Բի Սի Մոթորս ՍՊԸ', cars: 'Deepal, Changan, Arcfox', address: 'Արմավիրի մարզ, Թաիրով գյուղ, Մայրաքաղաքային փ. 15', phone: '+374 33 344001', website: '' },
    { name: 'ԷՆԵՐՋԻ ՔԱՐ ՍՊԸ', cars: 'BYD, Deepal, Nevo, Li Auto, Geely, Leopard, Zeekr, Changan, Xpeng', address: 'Երևան, Մազմանյան 1, Garage Mall', phone: '+374 91 711714', website: '' },
    { name: 'ՄԵԳԱԱՎՏՈ ՍՊԸ', cars: 'BYD, Li Auto, Rox, Deepal, Changan', address: 'Երևան, Նաիրի Զարյան 104/1', phone: '+374 95 604000', website: '' },
    { name: 'ԹՐԵՅԴԻՆԳ ՔԱՌ ՍՊԸ', cars: 'Changan, Deepal, Changan Qiyuan, BYD, Li Auto, Hongqi', address: 'Երևան, Սեբաստիա 108/1', phone: '+374 99 483030, +374 91 244473', website: '' },
    { name: 'ՅՈՒՆԻՎԵՐՍԱԼ ՄՈԹՈՐՍ ՍՊԸ', cars: 'Mazda, BYD, Changan, Xiaomi', address: 'Երևան, Նորաշեն (16-րդ թաղամաս), Մազմանյան 1 («Garage Masters Mall»)', phone: '+374 41 010777', website: '' },
    { name: 'ՍԻԱՐ ԱՎՏՈ ՍՊԸ', cars: 'Changan Deepal, Changan Nevo', address: 'Երևան, Նոր Նորք, Գայի պ. 1/13; Կոտայք, Պռոշյան, Գևորգ Չաուշի փ. 1-ին նրբ. 3', phone: '+374 33 221188', website: '' },
    { name: 'ՍՔԱՅ ՄՈԹՈՐՍ ՍՊԸ', cars: 'Mazda, Suzuki, JMC, JMEV', address: 'Երևան, Թբիլիսյան 20', phone: '+374 11 711711, +374 41 111700', website: '' },
    { name: 'ՔԱՐՖՈՒՐՅՈՒ ՍՊԸ', cars: 'BYD, GAC, Changan, Changan Qiyuan, Changan Deepal, Hongqi, Toyota', address: 'Վաղարշապատ, Մանուշյան 8', phone: '+374 60 509977, +374 55 779700', website: '' },
    { name: 'ԱԲԱՋ ԱՎՏՈ ՍՊԸ', cars: 'Hongqi, Changan Deepal, Dongfeng, Li Auto', address: 'Երևան, Գյուլիքեխվյան 28', phone: '+374 33 010203, +374 44 048048', website: '' },
    { name: 'ԱՎՏՈ ԱՎԵՆՅՈՒ ՍՊԸ', cars: 'BYD, Hongqi, Deepal, Changan, Li Auto, Mazda', address: 'Երևան, Վարդաշեն 9 փ., 63 տարածք', phone: '+374 95 992222', website: '' },
    { name: 'ԱՎՏՈ ԲԱՅ ՍՊԸ', cars: 'BYD, Hongqi, Deepal, Changan, Toyota, Mazda', address: 'Երևան, Կիլիկիա 3, 24 տարածք', phone: '+374 98 787171, +374 60 670000', website: '' },
    { name: 'ԹԻ ԸՆԴ ԷՅ ՓԱՐԹՆԵՐՍ ՍՊԸ', cars: 'Changan Deepal, BYD, Li Auto, Mazda, Toyota, Zeekr, Voyah', address: 'Երևան, Խորենացի 101', phone: '+374 41 500065, +374 95 207055', website: '' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      <div>
        {/* Top Header Navigation */}
        <header className="border-b border-gray-100 bg-white">
          <div className="bg-purple-700 text-white text-xs font-semibold py-3">
            <div className="max-w-7xl mx-auto px-4 flex space-x-8">
              <span className="bg-purple-900/50 px-3 py-1 rounded cursor-pointer">
                Վարկեր
              </span>
              <span className="hover:text-purple-200 cursor-pointer py-1">
                Վարկային պատմություն և սքոր
              </span>
              <span className="hover:text-purple-200 cursor-pointer py-1">
                Կարևոր տեղեկատվություն
              </span>
            </div>
          </div>
        </header>

        {/* Hero Banner Section */}
        <section className="bg-gradient-to-r from-[#f7f5fd] to-[#f0ebfc] relative overflow-hidden py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-4">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Ավտոմեքենայի ձեռքբերման նպատակով վարկ
              </h1>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                Նոր ավտոմեքենա գնելու որոշո՞ւմ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը:
              </p>
            </div>

            <div className="relative w-72 h-72 md:w-96 md:h-80 flex items-center justify-center">
              <img
                src="https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg"
                alt="Ավտոմեքենայի ձեռքբերման նպատակով վարկ"
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
              <span>Վերադառնալ</span>
            </button>

            <div className="text-xs text-gray-400 flex items-center space-x-1.5 flex-wrap">
              <span>🏠</span>
              <span>›</span>
              <span className="hover:text-purple-700 cursor-pointer">Անհատ</span>
              <span>›</span>
              <span className="hover:text-purple-700 cursor-pointer">Վարկեր</span>
              <span>›</span>
              <span className="hover:text-purple-700 cursor-pointer">Վարկեր</span>
              <span>›</span>
              <span className="text-gray-700 font-medium">
                Ավտոմեքենայի ձեռքբերման նպատակով վարկ
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
              Վարկի մասին
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`pb-3 font-bold transition-all whitespace-nowrap ${
                activeTab === 'terms'
                  ? 'text-purple-700 border-b-2 border-purple-700'
                  : 'text-gray-500 hover:text-purple-700'
              }`}
            >
              Պայմաններ
            </button>
            <button
              onClick={() => setActiveTab('dealers')}
              className={`pb-3 font-bold transition-all whitespace-nowrap ${
                activeTab === 'dealers'
                  ? 'text-purple-700 border-b-2 border-purple-700'
                  : 'text-gray-500 hover:text-purple-700'
              }`}
            >
              Գործընկեր ավտոսրահներ
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`pb-3 font-bold transition-all whitespace-nowrap ${
                activeTab === 'documents'
                  ? 'text-purple-700 border-b-2 border-purple-700'
                  : 'text-gray-500 hover:text-purple-700'
              }`}
            >
              Պահանջվող փաստաթղթերի ցանկ
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
                    21-րդ դարում <span className="text-purple-700 font-bold underline">ավտովարկերի</span> շնորհիվ հեշտացել և պարզեցվել է նոր ավտոմեքենա ձեռք բերելու գործընթացը:
                  </p>
                  <p>
                    Evocabank-ը առաջարկում է ավտոմեքենայի ձեռքբերման նպատակով տրամադրվող վարկեր՝ փոխշահավետ պայմաններով: <span className="text-purple-700 font-bold">Գնե՛ք Ձեր ցանկալի ավտոմեքենան ինչպես առաջնային, այնպես էլ երկրորդային շուկայից:</span>
                  </p>
                  <p>
                    Դուք ընտրե՛ք Ձեր նոր մեքենան, իսկ մենք, կարևորելով Ձեր ժամանակը, վարկավորման գործընթացը կիրականացնենք հնարավորինս սեղմ ժամկետում:
                  </p>
                </div>
              )}

              {/* TAB: ՊԱՅՄԱՆՆԵՐ */}
              {activeTab === 'terms' && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <h4 className="font-bold text-gray-900 text-base mb-1">1. Վարկի տրամադրման նպատակը</h4>
                      <p>Վարկը տրամադրվում է առաջնային կամ երկրորդային շուկաներից անհատական օգտագործման թեթև մարդատար տրանսպորտային միջոց/ավտոմեքենա ձեռք բերելու նպատակով:</p>
                    </div>

                    <div className="border-b pb-3">
                      <h4 className="font-bold text-gray-900 text-base mb-1">2. Ովքեր կարող են դիմել</h4>
                      <p>18 – 65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն բոլորի 65 տարեկանը կամ առկա է վերոնշյալ պահանջներին բավարարող համավարկառու:</p>
                    </div>

                    <div className="border-b pb-3">
                      <h4 className="font-bold text-gray-900 text-base mb-1">3. Վարկավորման արժույթը</h4>
                      <p>ՀՀ դրամ</p>
                    </div>

                    <div className="border-b pb-3">
                      <h4 className="font-bold text-gray-900 text-base mb-1">4. Վարկավորման գումար</h4>
                      <p className="font-semibold text-purple-700">4,000,000 - 50,000,000 ՀՀ դրամ</p>
                    </div>

                    <div className="border-b pb-3">
                      <h4 className="font-bold text-gray-900 text-base mb-1">5. Վարկի մարման ժամկետը</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Հաստատուն տոկոսադրույքի դեպքում՝ <strong>36 - 60 ամիս</strong></li>
                        <li>Լողացող տոկոսադրույքի դեպքում՝ <strong>61 - 84 ամիս</strong></li>
                      </ul>
                    </div>

                    <div className="border-b pb-3">
                      <h4 className="font-bold text-gray-900 text-base mb-1">6. Վարկի մարման ժամանակացույց</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Անուիտետային</strong> (վարկի գումարի և տոկոսագումարի հանրագումարը վճարվում է հավասարաչափ ամսական պարբերականությամբ)</li>
                        <li><strong>Զսպանակաձև</strong> (մայր գումարի հավասարաչափ մարումներով վարկ), վճարումները պետք է կատարվեն ամսական կտրվածքով</li>
                      </ul>
                    </div>

                    <div className="border-b pb-3">
                      <h4 className="font-bold text-gray-900 text-base mb-1">7. Վարկի ձևակերպման վայր</h4>
                      <p>Ավտոսրահ/համագործակցող կազմակերպություն կամ Բանկ</p>
                    </div>

                    <div className="border-b pb-3 overflow-x-auto">
                      <h4 className="font-bold text-gray-900 text-base mb-2">8. Տարեկան անվանական տոկոսադրույքներ</h4>
                      <table className="w-full text-left border-collapse border border-gray-200">
                        <thead>
                          <tr className="bg-gray-50 text-gray-900 font-bold">
                            <th className="border border-gray-200 p-2">Շուկա</th>
                            <th className="border border-gray-200 p-2">Անվանական</th>
                            <th className="border border-gray-200 p-2">Առավելագույն փաստացի</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-200 p-2">Առաջնային շուկայից ձեռք բերում</td>
                            <td className="border border-gray-200 p-2 font-semibold">13% - 17%</td>
                            <td className="border border-gray-200 p-2">13.86% - 20.88%</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="border border-gray-200 p-2">Երկրորդային շուկայից ձեռք բերում</td>
                            <td className="border border-gray-200 p-2 font-semibold">15% - 19%</td>
                            <td className="border border-gray-200 p-2">16.46% - 21.17%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="border-b pb-3">
                      <h4 className="font-bold text-gray-900 text-base mb-2">9. Տարեկան լողացող տոկոսադրույքի կիրառման պայմաններ</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Լողացող տոկոսադրույքի մեծությունը սահմանվում է հաստատուն բաղադրիչ` սկսած 5%-ից + փոփոխուն բաղադրիչ։</li>
                        <li>Լողացող տոկոսադրույքի տատանման առավելագույն և նվազագույն շեմ՝ հաստատված տարեկան տոկոսադրույք ±2%։</li>
                        <li>Լողացող տոկոսադրույքի փոփոխուն բաղադրիչը կսկսի վերանայվել վարկի կնքման պահից 36 ամիս ժամանակաշրջանին հաջորդող առաջին մարման ամսաթվից սկսած և յուրաքանչյուր 6 ամիսը մեկ՝ կիրառելով վերանայման պահին Բանկում գործող (կայքում փաստացի հրապարակված) փոփոխուն բաղադրիչի արժեքը։</li>
                        <li><strong>Հաշվարկման կարգ․</strong> Երկրորդային շուկայի պարագայում կիրառելի է միայն մինչև 3 տարվա վաղեմություն ունեցող տրանսպորտային միջոցների ձեռք բերման դեպքում։</li>
                      </ul>
                    </div>

                    <div className="border-b pb-3">
                      <h4 className="font-bold text-gray-900 text-base mb-1">10. Վարկի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք</h4>
                      <p className="text-green-600 font-semibold">Տուգանք չի կիրառվում</p>
                    </div>

                    <div className="border-b pb-3">
                      <h4 className="font-bold text-gray-900 text-base mb-1">11. Վարկի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր</h4>
                      <ul className="list-disc pl-5 space-y-1 text-red-600">
                        <li>Ժամկետանց վարկի համար՝ օրական 0.015%</li>
                        <li>Ժամկետանց տոկոսագումարի համար՝ օրական 0.1%</li>
                      </ul>
                    </div>

                    <div className="border-b pb-3">
                      <h4 className="font-bold text-gray-900 text-base mb-2">12. Վարկի վերադարձելիության ապահովման միջոց</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Ձեռք բերվող տրանսպորտային միջոցը, որի վաղեմությունը չպետք է գերազանցի 7 տարին:</li>
                        <li>Ռուսական արտադրության ավտոմեքենաների դեպքում վարկավորումը իրականացվում է բացառապես առաջնային շուկայից ձեռք բերելու պայմանով:</li>
                        <li>
                          <strong>Գրավի առարկա չեն կարող հանդիսանալ հետևյալ տրանսպորտային միջոցները.</strong>
                          <ul className="list-circle pl-5 mt-1 space-y-1 text-gray-600">
                            <li>Ավտոմեքենաներ, որոնք կրում են վտանգ սպառնացող ապրանքներ` տոքսիկ նյութեր, քիմիկատներ, ռադիոակտիվ և պայթյունավտանգ նյութեր,</li>
                            <li>Ավտոմեքենաներ, որոնք կմասնակցեն մրցույթներին, փորձարկումներին կամ ունեն երեք անիվ, ձնեմաքրող մեքենաներ, մոտոցիկլետներ, հատուկ տեխնիկա հանդիսացող մեքենաներ։</li>
                          </ul>
                        </li>
                        <li>Առանձին դեպքերում, համապատասխան իրավական հիմքերի ներկայացման պարագայում, Բանկը կարող է որպես առաջնային շուկայից ձեռքբերում դիտարկել նաև մինչև մեկամսյա ժամկետում ՀՀ ներմուծված և վարկառուի անվամբ մաքսազերծված լիովին սարքին /շահագործման ենթակա/ ավտոմեքենաները:</li>
                        <li>Տաքսի ծառայության կամ վարձով տրվող ավտոմեքենաները կարող են ձեռք բերվել Բանկի հետ համագործակցող ավտոսրահներից:</li>
                        <li>Վարկի տրամադրման վերաբերյալ որոշում կայացնող լիազոր մարմնի որոշմամբ կարող է պահանջվել ֆիզիկական և/կամ իրավաբանական անձանց երաշխավորությունների առկայություն, առանձին դեպքերում՝ Բանկի համար ընդունելի այլ ապահովում:</li>
                      </ul>
                    </div>

                    <div className="border-b pb-3">
                      <h4 className="font-bold text-gray-900 text-base mb-1">13. Գրավադրվող գույքի գնահատում</h4>
                      <p className="mb-2"><strong>Ավտոսրահից ձեռքբերման դեպքում</strong> տրանսպորտային միջոցի գնահատում չի իրականացվում, այլ որպես գրավադրման արժեք հիմք է ընդունվում ավտոմեքենա իրացնող ընկերության կողմից Բանկի էլեկտրոնային համակարգում կամ ներկայացված տեղեկանքում նշված արժեքը/առուվաճառքի արժեքը:</p>
                      <p><strong>Երկրորդային շուկայից ձեռքբերման դեպքում</strong> գրավադրվող գույքի գնահատումը իրականացվում է Բանկի հետ համագործակցող գնահատող կազմակերպության կամ Բանկի համապատասխան աշխատակցի կողմից:</p>
                    </div>

                    <div className="border-b pb-3 overflow-x-auto">
                      <h4 className="font-bold text-gray-900 text-base mb-2">14. Կանխավճար</h4>
                      <table className="w-full text-left border-collapse border border-gray-200">
                        <thead>
                          <tr className="bg-gray-50 text-gray-900 font-bold">
                            <th className="border border-gray-200 p-2">Շուկա</th>
                            <th className="border border-gray-200 p-2">Եկամտի վերլուծությամբ</th>
                            <th className="border border-gray-200 p-2">Առանց եկամուտների վերլուծության</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-200 p-2 font-medium">Առաջնային շուկա</td>
                            <td className="border border-gray-200 p-2">նվազագույնը 10%</td>
                            <td className="border border-gray-200 p-2">նվազագույնը 30%</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="border border-gray-200 p-2 font-medium">Երկրորդային շուկա</td>
                            <td className="border border-gray-200 p-2">
                              • Մինչև 3 (ներառյալ) տարեկան մեքենա` նվազագույնը 20%<br />
                              • 3-7 (ներառյալ) տարեկան մեքենա` նվազագույնը 30%
                            </td>
                            <td className="border border-gray-200 p-2">նվազագույնը 40%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="border-b pb-3">
                      <h4 className="font-bold text-gray-900 text-base mb-1">15. Վարկի տրամադրման եղանակը</h4>
                      <p>Անկանխիկ</p>
                    </div>

                    <div className="border-b pb-3">
                      <h4 className="font-bold text-gray-900 text-base mb-1">16. Վարկի տրամադրման միանվագ կամ ամսական սպասարկման վճարներ</h4>
                      <p>Չի սահմանվում</p>
                    </div>

                    <div className="border-b pb-3">
                      <h4 className="font-bold text-gray-900 text-base mb-1">17. Հաճախորդի կողմից կատարվող լրացուցիչ վճարներ</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Ավտոմեքենայի ձեռքբերման և գրավադրման հետ կապված պետական իրավասու մարմնում գրանցման վճարներ:</li>
                        <li>Այլ վճարներ համաձայն Բանկում գործող ՍԱԿԱԳՆԵՐ ԵՎ ԴՐՈՒՅՔՆԵՐ-ի: Առաջնային շուկայից՝ ավտոսրահի տարածքում ձևակերպվող վարկերի դեպքում շարժական գույքի գրավի հաստատման (ձևակերպման) միջնորդավճար չի կիրառվում:</li>
                      </ul>
                    </div>

                    <div className="border-b pb-3">
                      <h4 className="font-bold text-gray-900 text-base mb-2">18. Ապահովագրություն</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Տրանսպորտային միջոցի <strong>ԿԱՍԿՈ ապահովագրություն</strong> - պարտադիր յուրաքանչյուր տարի վարկի սպասարկման ամբողջ ժամկետի ընթացքում, առնվազն վարկի մայր գումարի մնացորդի չափով:</li>
                        <li>Առաջնային շուկայից ավտոմեքենայի ձեռքբերման դեպքում ԿԱՍԿՈ ապահովագրությունը կարող է կնքվել Բանկի հաշվին և վարկի մայր գումարի մնացորդի չափով՝ համաձայն համագործակցող ընկերության հետ կնքված պայմանագրի դրույթների:</li>
                        <li>Երկրորդային շուկայից ավտոմեքենայի ձեռքբերման դեպքում ԿԱՍԿՈ ապահովագրությունը կնքվում է Բանկի հաշվին և վարկի մայր գումարի մնացորդի չափով:</li>
                        <li>ԿԱՍԿՈ ապահովագրությունը հաճախորդի հաշվին կնքելու դեպքում վարկի տարեկան անվանական տոկոսադրույքը նվազում է 1 տոկոսային կետով:</li>
                      </ul>
                    </div>

                    <div className="border-b pb-3">
                      <h4 className="font-bold text-gray-900 text-base mb-2">19. Այլ պայմաններ</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Առաջնային շուկային պատկանող տրանսպորտային միջոց են համարվում ավտոսրահից անմիջապես ձեռք բերված ավտոմեքենաները:</li>
                        <li>Առանձին դեպքերում, համապատասխան իրավական հիմքերի ներկայացման պարագայում, Բանկը կարող է որպես առաջնային շուկայից ձեռքբերում դիտարկել նաև մինչև մեկամսյա ժամկետում ՀՀ ներմուծված և մաքսազերծված լիովին սարքին /շահագործման ենթակա/ և մինչև 3000 կմ վազք ունեցող ավտոմեքենաները, ինչպես նաև մինչև 1 տարվա վաղեմություն ունեցող տրանսպորտային միջոցները։ (պայմանը չի վերաբերվում ռուսական ավտոմեքենաներին)</li>
                      </ul>
                    </div>

                    {/* ՏԵՂԵԿԱՑՈՒՄ */}
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-6">
                      <h5 className="font-bold text-amber-900 mb-1 text-sm">ՏԵՂԵԿԱՑՈՒՄ</h5>
                      <p className="text-amber-800 text-xs leading-relaxed">
                        Հարգելի հաճախորդ, տեղեկացնում ենք, որ Ձեր կողմից ներկայացված վարկի ստացման դիմում-հայտերի քանակը, այդ թվում` հեռահար եղանակներով (տարբեր տեխնիկածրագրային լուծումներով և հավելվածներով), անկախ հաստատումից կամ մերժումից, բացասական ազդեցություն է ունենալու Ձեր վարկային ամփոփ գնահատականի վրա:
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: ԳՈՐԾԸՆԿԵՐ ԱՎՏՈՍՐԱՀՆԵՐ */}
              {activeTab === 'dealers' && (
                <div className="space-y-6">
                  <div className="bg-purple-50 p-4 rounded-xl text-purple-900 text-xs md:text-sm font-medium border border-purple-100">
                    Գնիր մեքենա <strong>Evoca ավտովարկով</strong>՝ դիմում անմիջապես Բանկի հետ համագործակցող ավտոսրահում, վարկի հաստատում րոպեների ընթացքում, պայմանագրի արագ վավերացում և անվճար ԿԱՍԿՈ։
                  </div>

                  <div className="overflow-x-auto shadow-sm border border-gray-200 rounded-xl">
                    <table className="w-full text-left border-collapse text-xs md:text-sm">
                      <thead>
                        <tr className="bg-purple-700 text-white font-bold">
                          <th className="p-3 border-b">Անվանում</th>
                          <th className="p-3 border-b">Մեքենաներ</th>
                          <th className="p-3 border-b">Սրահի հասցե</th>
                          <th className="p-3 border-b">Կոնտակտային տվյալներ</th>
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
                    * Evoca-ի գործընկեր ավտոսրահների կողմից առաջարկվող պայմաններին մանրամասն կարող եք ծանոթանալ համապատասխան ավտոսրահներում։
                  </p>
                </div>
              )}

              {/* TAB: ՊԱՀԱՆՋՎՈՂ ՓԱՍՏԱԹՂԹԵՐԻ ՑԱՆԿ */}
              {activeTab === 'documents' && (
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 text-base border-b pb-2">Պահանջվող փաստաթղթերի ցանկ</h4>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>Վարկի տրամադրման դիմում:</li>
                    <li>Անձնագիր կամ նույնականացման քարտ, ինչպես նաև սոցիալական քարտ կամ սոցիալական քարտ չունենալու մասին տեղեկանք (ընդ որում սոցիալական քարտ և սոցիալական քարտ չունենալու մասին տեղեկանք չի պահանջվում, եթե ներկայացվել է նույնականացման քարտ), կարող է պահանջվել նաև ընտանիքի անդամներինը:</li>
                    <li>Եթե վարկառուն ամուսնացած է, ապա ամուսնու/կնոջ անձը հաստատող փաստաթղթերը և ամուսնության վկայական:</li>
                    <li>Տեղեկանք փաստացի բնակության վայրից:</li>
                    <li>Տեղեկանք աշխատանքի վայրից աշխատավարձի չափի մեծության մասին, որի տրամադրման ժամկետը Բանկին ներկայացման օրվա դրությամբ չպետք է գերազանցի 30 օրացույցային օրը:</li>
                    <li>
                      <strong>Հաճախորդի ինքնազբաղված լինելու դեպքում․</strong>
                      <ul className="list-circle pl-5 mt-1 space-y-1 text-gray-600">
                        <li>Պետական ռեգիստրի գրանցման վկայական կամ պետական ռեգիստրի կողմից տրված՝ քաղվածք գրանցամատյանից,</li>
                        <li>Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում կամ քաղվածքում,</li>
                        <li>Գործունեության լիցենզիա (առկայության դեպքում),</li>
                        <li>Վերջին 1 տարվա ֆինանսական հաշվետվությունները,</li>
                        <li>Այլ եկամուտների մեծությունը հավաստող տեղեկատվություն (առկայության դեպքում):</li>
                      </ul>
                    </li>
                    <li>Տեղեկատվություն՝ երաշխավորող անձի/անց վերաբերյալ (առկայության դեպքում):</li>
                    <li>Ավտոմեքենայի սեփականության իրավունքը հավաստող փաստաթղթեր, տեխ. անձնագիր կամ ժամանակավոր գրանցման վկայական:</li>
                    <li>
                      <strong>Առաջնային շուկայից ավտոմեքենա ձեռք բերելու դեպքում․</strong>
                      <ul className="list-circle pl-5 mt-1 space-y-1 text-gray-600">
                        <li>Վաճառողի կողմից տրված ավտոմեքենայի գնման համաձայնագիր,</li>
                        <li>Կանխավճարի վճարման անդորրագիր,</li>
                        <li>Առուվաճառքի պայմանագիր, հաշիվ-ապրանքագիր:</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Երկրորդային շուկայից ավտոմեքենա ձեռք բերելու դեպքում․</strong>
                      <ul className="list-circle pl-5 mt-1 space-y-1 text-gray-600">
                        <li>Վաճառողի անձը հաստատող փաստաթղթերը,</li>
                        <li>Ավտոմեքենայի գնահատման հաշվետվություն:</li>
                      </ul>
                    </li>
                    <li>Բանկի պահանջով՝ այլ փաստաթղթեր:</li>
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
                  <span className="text-[10px] text-gray-400 block">մինչև</span>
                  <span className="text-2xl font-black text-purple-700">
                    50 մլն. ֏
                  </span>
                </div>
                <span className="text-xs text-gray-500 font-medium">Գումար</span>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 block">մինչև</span>
                  <span className="text-2xl font-black text-purple-700">
                    84 ամիս
                  </span>
                </div>
                <span className="text-xs text-gray-500 font-medium">Ժամկետ</span>
              </div>

              <div className="border-b border-gray-100 pb-4 flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 block">սկսած</span>
                  <span className="text-2xl font-black text-purple-700">
                    13%-ից
                  </span>
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  Տոկոսադրույք
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 block">սկսած</span>
                  <span className="text-2xl font-black text-purple-700">
                    10%-ից
                  </span>
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  Կանխավճար
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
              Դեպի նոր իրականություն տանող քո ճանապարհն անցի՛ր Evocabank-ի հետ:
            </h2>
          </div>
        </section>

        {/* 2. OTHER LOANS CAROUSEL SECTION */}
        <section className="max-w-7xl mx-auto px-4 py-8">
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
            {/* Left Side: Laptop & Phone Mockups */}
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

            {/* Right Side: Text, Action Button & Downloads */}
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
      </div>

    <footer className="mt-20 border-t border-gray-200 bg-white pt-12">
           <div className="max-w-7xl mx-auto px-4 sm:px-8">
             
             {/* Վերևի աջ անկյունում՝ Թարմացման ամսաթիվը */}
             <div className="text-right text-xs text-gray-400 font-medium mb-6">
               Թարմացվել է՝ 28/08/2026 17:20
             </div>
   
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
               
               {/* Սյունակ 1: Լոգո և հասցե */}
               <div className="lg:col-span-1 space-y-4">
                 <div className="flex items-center gap-1 text-2xl font-black text-gray-900">
                   evoca<span className="text-xs font-semibold tracking-widest text-gray-500 ml-0.5">BANK</span>
                 </div>
                 <p className="text-xs text-gray-600 font-medium leading-relaxed">
                   ք. Երևան, 0010,<br />
                   Հանրապետության 44/2
                 </p>
                 <p className="text-xs text-gray-500 leading-relaxed pt-2">
                   <strong>Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից</strong>
                 </p>
                 <div className="text-[11px] text-gray-400">
                   1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
                 </div>
               </div>
   
               {/* Սյունակ 2: Բանկի մասին */}
               <div>
                 <h4 className="text-sm font-bold text-gray-900 mb-4">Բանկի մասին</h4>
                 <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                   <li><Link to="/about" className="hover:text-[#6c00ff]">Մեր մասին</Link></li>
                   <li><Link to="/management" className="hover:text-[#6c00ff]">Ղեկավարություն</Link></li>
                   <li><Link to="/shareholders" className="hover:text-[#6c00ff]">Բաժնետերեր</Link></li>
                   <li><Link to="/reports" className="hover:text-[#6c00ff]">Հաշվետվություններ</Link></li>
                   <li><Link to="/legal" className="hover:text-[#6c00ff]">Իրավական ակտեր</Link></li>
                   <li><Link to="/tariffs" className="hover:text-[#6c00ff]">Սակագներ</Link></li>
                   <li><Link to="/property" className="hover:text-[#6c00ff]">Օտարվող գույք</Link></li>
                   <li><Link to="/developers" className="hover:text-[#6c00ff]">Կառուցապատողներ</Link></li>
                   <li><Link to="/partners" className="hover:text-[#6c00ff]">Գործընկեր ավտոսրահներ</Link></li>
                   <li><Link to="/tariffs-archive" className="hover:text-[#6c00ff]">Սակագների արխիվ</Link></li>
                 </ul>
               </div>
   
               {/* Սյունակ 3: Օգտակար հղումներ */}
               <div>
                 <h4 className="text-sm font-bold text-gray-900 mb-4">Օգտակար հղումներ</h4>
                 <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                   <li><Link to="/rights" className="hover:text-[#6c00ff]">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</Link></li>
                   <li><Link to="/residence" className="hover:text-[#6c00ff]">Հաճախորդի ռեզիդենտության չափանիշներ</Link></li>
                   <li><Link to="/regulation" className="hover:text-[#6c00ff]">Կարգավորում</Link></li>
                   <li><Link to="/privacy" className="hover:text-[#6c00ff]">Գաղտնիության քաղաքականություն</Link></li>
                   <li><Link to="/mediator" className="hover:text-[#6c00ff]">Ֆին. հաշտարար</Link></li>
                   <li><Link to="/aml" className="hover:text-[#6c00ff]">Ֆինանսական հանցագործությունների կանխարգելում</Link></li>
                   <li><Link to="/cardholders" className="hover:text-[#6c00ff]">Հղումներ Բանկի քարտապանների համար</Link></li>
                 </ul>
               </div>
   
               {/* Սյունակ 4: Այլ հղումներ */}
               <div>
                 <h4 className="text-sm font-bold text-gray-900 mb-4">Այլ հղումներ</h4>
                 <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                   <li><a href="https://evocaonline.am" target="_blank" rel="noreferrer" className="hover:text-[#6c00ff]">EvocaONLINE</a></li>
                   <li><Link to="/safes" className="hover:text-[#6c00ff]">Պահատուփեր</Link></li>
                   <li><Link to="/faq" className="hover:text-[#6c00ff]">Հաճախ տրվող հարցեր</Link></li>
                   <li><Link to="/announcements" className="hover:text-[#6c00ff]">Հայտարարություններ</Link></li>
                   <li><Link to="/dlibrary" className="hover:text-[#6c00ff]">Dlibrary</Link></li>
                   <li><Link to="/booklets" className="hover:text-[#6c00ff]">Բուկլետներ</Link></li>
                   <li><Link to="/feedback" className="hover:text-[#6c00ff]">Հետադարձ կապ</Link></li>
                   <li><Link to="/sitemap" className="hover:text-[#6c00ff]">Կայքի քարտեզ</Link></li>
                 </ul>
               </div>
   
               {/* Սյունակ 5: Սոց․ ցանցեր, հավելվածներ և Կոնտակտներ */}
               <div className="space-y-6">
                 
                 {/* Սոց ցանցերի իկոնաներ */}
                 <div className="flex items-center gap-3 text-gray-400">
                   <a href="#facebook" className="hover:text-[#6c00ff]"><i className="fab fa-facebook-f text-base"></i></a>
                   <a href="#instagram" className="hover:text-[#6c00ff]"><i className="fab fa-instagram text-base"></i></a>
                   <a href="#pinterest" className="hover:text-[#6c00ff]"><i className="fab fa-pinterest text-base"></i></a>
                   <a href="#youtube" className="hover:text-[#6c00ff]"><i className="fab fa-youtube text-base"></i></a>
                   <a href="#linkedin" className="hover:text-[#6c00ff]"><i className="fab fa-linkedin-in text-base"></i></a>
                 </div>
   
                 {/* App Store / Google Play կոճակներ */}
                 <div className="flex flex-col gap-2">
                   <a href="#appstore" className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 w-max hover:opacity-80">
                     <span className="text-xs font-semibold">App Store</span>
                   </a>
                   <a href="#googleplay" className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 w-max hover:opacity-80">
                     <span className="text-xs font-semibold">Google Play</span>
                   </a>
                 </div>
   
                 {/* Կոնտակտային տվյալներ */}
                 <div className="space-y-2 text-xs">
                   <div>
                     <Link to="/branches" className="text-[#6c00ff] font-bold hover:underline">
                       Բանկի հասցեները և աշխատաժամերը
                     </Link>
                   </div>
                   <div>
                     <Link to="/contact" className="text-[#6c00ff] font-bold hover:underline">
                       Կապ մեզ հետ
                     </Link>
                   </div>
                   <div className="pt-2 font-bold text-gray-800">
                     +374 10 605555
                   </div>
                   <div className="font-extrabold text-[#6c00ff] text-sm">
                     8444
                   </div>
                 </div>
   
               </div>
   
             </div>
           </div>
   
           {/* Ներքևի մոխրագույն զոլով տեքստ և լոգոներ */}
           <div className="bg-gray-100 py-6 border-t border-gray-200">
             <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
               <p className="text-[10px] text-gray-500 leading-normal max-w-4xl">
                 Հարգելի' այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական կայք տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
               </p>
               
               {/* Գործընկերների/Համակարգերի լոգոներ */}
               <div className="flex flex-wrap items-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                 <span className="text-xs font-bold text-gray-600">fininfo</span>
                 <span className="text-xs font-bold text-gray-600">abcfinance.am</span>
                 <span className="text-xs font-bold text-gray-600">arca</span>
               </div>
             </div>
           </div>
         </footer>
    </div>
  );
}