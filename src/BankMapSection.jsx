import React, { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Leaflet marker-ի icon fix
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// =========================
// ՄԱՍՆԱՃՅՈՒՂԵՐ
// =========================

const branchesData = [
  {
    id: 'branch-hq',
    name: 'Գլխամասային գրասենյակ',
    hours: '09:30 - 17:00',
    address: 'Հանրապետության 44/2',
    phone: '+374 10 60 55 55, +374 98 20 55 55, +374 99 60 55 55',
    lat: 40.1772,
    lng: 44.50349,
  },
  {
    id: 'branch-premium',
    name: 'Evoca Premium Branch',
    hours: 'Երկուշաբթիից ուրբաթ՝ 10:00 - 18:00',
    address: 'ՀՀ, ք. Երևան, Զաքյան 10, 0052',
    phone: '8444',
    lat: 40.1779,
    lng: 44.5082,
  },
  {
    id: 'branch-azatutyun',
    name: '«Ազատության 12» մասնաճյուղ',
    hours: '09:30 - 17:00, Շաբաթ՝ 10:00 - 14:00',
    address: 'Ազատության 12',
    phone: '+374 10 60 55 55',
    lat: 40.1904,
    lng: 44.5231,
  },
  {
    id: 'branch-tumanyan',
    name: '«Թումանյան» մասնաճյուղ',
    hours: '09:30 - 21:30, Շաբաթ՝ 10:00 - 17:30',
    address: 'Թումանյան 15',
    phone: '+374 10 60 55 55',
    lat: 40.1842,
    lng: 44.5131,
  },
  {
    id: 'branch-kasyan',
    name: '«Կասյան» մասնաճյուղ',
    hours: '09:30 - 17:00',
    address: 'Վազգեն Առաջին Վեհափառի 5',
    phone: '+374 10 60 55 55',
    lat: 40.201,
    lng: 44.494,
  },
  {
    id: 'branch-njdeh',
    name: '«Գարեգին Նժդեհ» մասնաճյուղ',
    hours: '09:30 - 17:00, Շաբաթ՝ 10:00 - 14:00',
    address: 'Գարեգին Նժդեհ 9/45',
    phone: '+374 10 60 55 55',
    lat: 40.1588,
    lng: 44.4905,
  },
  {
    id: 'branch-davtashen',
    name: '«Դավթաշեն» մասնաճյուղ',
    hours: '09:30 - 17:00, Շաբաթ՝ 10:00 - 14:00',
    address: 'Տիգրան Պետրոսյան 32/8',
    phone: '+374 10 60 55 55',
    lat: 40.221,
    lng: 44.479,
  },
  {
    id: 'branch-erebuni',
    name: '«Էրեբունի» մասնաճյուղ',
    hours: '09:30 - 17:00 (Սահմանափակ գործառնություններ իրականացնող մասնաճյուղ)',
    address: 'Գաջեգործների 76',
    phone: '+374 10 60 55 55',
    lat: 40.143,
    lng: 44.504,
  },
  {
    id: 'branch-kievyan',
    name: '«Կիևյան» մասնաճյուղ',
    hours: '09:30 - 17:00',
    address: 'Կիևյան 11ա',
    phone: '+374 10 60 55 55',
    lat: 40.1948,
    lng: 44.4891,
  },
  {
    id: 'branch-malatia',
    name: '«Մալաթիա» մասնաճյուղ',
    hours: '09:30 - 17:00, Շաբաթ՝ 10:00 - 14:00',
    address: 'Անդրանիկի 134/8',
    phone: '+374 10 60 55 55',
    lat: 40.1706,
    lng: 44.4532,
  },
  {
    id: 'branch-nor-nork',
    name: '«Նոր Նորք» մասնաճյուղ',
    hours: '09:30 - 17:00',
    address: 'Գայի պողոտա 14/9',
    phone: '+374 10 60 55 55',
    lat: 40.1983,
    lng: 44.5631,
  },
  {
    id: 'branch-yerevan-mall',
    name: '«Երևան Մոլ» մասնաճյուղ',
    hours:
      'Երկուշաբթիից կիրակի՝ 10:30 - 21:30 (Սահմանափակ գործառնություններ իրականացնող մասնաճյուղ)',
    address: 'Արշակունյաց պող., 34/3',
    phone: '+374 10 60 55 55',
    lat: 40.1539,
    lng: 44.5083,
  },
  {
    id: 'branch-hanrapetutyun',
    name: '«Հանրապետության» մասնաճյուղ',
    hours:
      'Երկուշաբթիից կիրակի՝ 10:30 - 21:30 (Սահմանափակ գործառնություններ իրականացնող մասնաճյուղ)',
    address: 'Հանրապետության 59',
    phone: '+374 10 60 55 55',
    lat: 40.1764,
    lng: 44.5162,
  },
  {
    id: 'branch-ajapnyak',
    name: '«Աջափնյակ» մասնաճյուղ',
    hours: 'Երկուշաբթիից ուրբաթ՝ 09:30 - 17:00',
    address: 'Աբելյան 2/1',
    phone: '+374 10 60 55 55',
    lat: 40.1956,
    lng: 44.4782,
  },
  {
    id: 'branch-paronyan',
    name: '«Պարոնյան» մասնաճյուղ',
    hours: '09:30 - 17:00',
    address: 'Պարոնյան 15/3',
    phone: '+374 10 60 55 55',
    lat: 40.1802,
    lng: 44.5021,
  },
];

// =========================
// ԲԱՆԿՈՄԱՏՆԵՐ
// =========================

const atmAddresses = [
  ['Տիտոգրադյան 15/1', false],
  ['Կիևյան 11ա 64', false],
  ['Խորենացի 47', false],
  ['Արշակունյաց 48/5', false],
  ['Մելքումով 23/4', true],
  ['Փավստոս Բուզանդի 45', true],
  ['Մոնթե Մելքոնյան 50/1', false],
  ['Տիգրան Պետրոսյան 30/30', false],
  ['Վերին Անտառային 131/34', false],
  ['Ազատության 6/67', true],
  ['Մանանդյան 33/3', false],
  ['Արշակունյաց 34', false],
  ['Մամիկոնյանց, 40', false],
  ['Դավթաշեն 4-րդ թաղ. 26/1', false],
  ['Կոմիտաս 46', false],
  ['Կոմիտաս 43', false],
  ['Հյուսիսային պողոտա 1', false],
  ['Բյուզանդ 97/2', false],
  ['Տ. Մեծ 47/1', false],
  ['Արգիշտի 7/3', false],
  ['Իսաբեկյան 1/2', false],
  ['Հասրաթյան 4/1', false],
  ['Աբելյան 2/1-3', false],
  ['Արտեմ Միկոյան 15', false],
  ['Արգիշտի 11/3', false],
  ['Հ. Հակոբյան 7', false],
  ['Մաշտոց 46/1', false],
  ['Հանրապետության 44/2', false],
  ['Գրիբոյեդով 17', false],
  ['Չարենց 9/51', false],
  ['Մաշտոց 13', false],
  ['Անաստաս Միկոյան 2/1', false],
  ['Տիգրան Մեծ 16', true],
  ['Պարոնյան 15/3', false],
  ['Վազգեն Առաջին Վեհափառի 5', false],
  ['Երվանդ Քոչար 17/1', false],
  ['Ազատության 12', true],
  ['Գարեգին Նժդեհ 19', true],
  ['Տիգրան Պետրոսյան 32/8', true],
  ['Գաջեգործների 76', false],
  ['Հերացի 5', false],
  ['Անդրանիկի 134/8', false],
  ['Թամանյան 3', false],
  ['Իսահակյան 28', false],
  ['Սունդուկյան 9', false],
  ['Աբովյան 35', false],
  ['Վ. Փափազյան 21', false],
  ['Գարեգին Նժդեհ 2/39', false],
  ['Թումանյան 15', false],
  ['Գյուրջյան 1/8', false],
  ['Մեսրոպ Մաշտոց 5/15', false],
  ['Պուշկինի 35/20', false],
  ['Մաշտոց 40', false],
  ['Գարեգին Նժդեհ 9/45', false],
  ['Ծարավ Աղբյուր 55/6', false],
  ['Նորաշեն 21/2', false],
  ['Փիրումյանների 5', false],
  ['Վիլնուս 37/1', false],
  ['Մազմանյան 5/13', false],
  ['Սվաճյան 11', false],
  ['Էրեբունի 18/8', false],
  ['Ա. Մանուկյան 7', false],
  ['Բաղրամյան 2', false],
  ['Անդրանիկի 50/3', false],
  ['Պարույր Սևակ 55/2', false],
  ['Փավստոս Բուզանդի 17/233', false],
  ['Ֆանարջյան 55', false],
  ['Փափազյան 14', false],
  ['Գայի պողոտա 14/9', false],
  ['Չեխովի 29/6', false],
  ['Տարոնցի 1/3', false],
  ['Աբովյան 17', false],
  ['Խուդյակովի 214/6', false],
  ['Մամիկոնյանց 2', false],
  ['Իսակովի 8', false],
  ['Հյուսիսային պող. 10', false],
  ['Տիգրան Մեծի 31Ա', false],
  ['Նորագավիթ 100/1', false],
  ['Խորենացի 33/7', false],
  ['Աբովյան - Սայաթ-Նովա Խաչմերուկ', false],
  ['Աբովյան - Իսահակյան Խաչմերուկ', false],
  ['Տիգրան Մեծ - Խանջյան Խաչմերուկ', false],
  ['Հանրապետության Հրապարակ', false],
  ['Ն. Տիգրանյան 1, նրբ. 9', false],
  ['Գալշոյան 6', false],
  ['Իսակովի 27/12', false],
  ['Արտաշիսյան 86/1', false],
  ['Արշակունյաց 210/1', false],
  ['Ուլնեցի 57/2', false],
  ['Ադոնց 4/3', false],
  ['Քաջազնունի 6/1', false],
  ['Շերամ 77', false],
  ['Պապ թագավորի 15', false],
  ['Թումանյան 31/4', false],
  ['Աբովյան 1/3 (ԶՈՎՔ սուպերմարկետ)', true],
];

const atmsData = atmAddresses.map(([address, cashIn], index) => ({
  id: `atm-${index + 1}`,
  address,
  cashIn,
  // Քարտեզի վրա իրական կոորդինատ չունեցողները
  // սկզբնական քարտեզում կցուցադրվեն Երևանի կենտրոնի մոտ։
  lat: 40.1772 + ((index % 10) - 5) * 0.003,
  lng: 44.50349 + ((index % 8) - 4) * 0.004,
}));

// =========================
// ԱՐՏԱՐԺՈՒՅԹԻ ՏԵՐՄԻՆԱԼՆԵՐ
// =========================

const terminalAddresses = [
  'Հանրապետության 44/2',
  'Ադմիրալ Իսակով 9/2',
  'Պռոշյան 2/1',
  'Սմբատ Զորավարի փ. 11/1',
  'Հակոբ Հակոբյան 8/2 – 13',
  'Շերամի 77/53',
  'Ծարավ Աղբյուր 55/15',
  'Չեխովի 52/26',
  'Լվովյան 14/1',
  'Ադոնցի փողոց 19/8 5-րդ մ/շ 105 տար.',
  'Վիլնյուս 41',
  'Արշակունյաց 48/5',
  'Տիգրան Մեծ 47/1',
  'Ծարավ Աղբյուր 55/6',
  'Արգիշտի 7/3',
  'Հանրապետության 67/1',
  'Տիչինա 136',
  'Պուշկին 35',
  'Աբելյան 2/1-3',
  'Արամ Խաչատրյան 3',
];

const terminalsData = terminalAddresses.map((address, index) => ({
  id: `terminal-${index + 1}`,
  address,
  hours: index === 18 ? '09:30 - 17:00' : '',
  lat: 40.1772 + ((index % 7) - 3) * 0.004,
  lng: 44.50349 + ((index % 6) - 3) * 0.005,
}));

// =========================
// ԲՈԼՈՐ ՏՎՅԱԼՆԵՐԸ
// =========================

const allLocations = [
  ...branchesData.map((item) => ({
    ...item,
    type: 'branch',
    typeLabel: 'Մասնաճյուղ',
  })),

  ...atmsData.map((item) => ({
    ...item,
    type: 'atm',
    typeLabel: 'Բանկոմատ',
  })),

  ...terminalsData.map((item) => ({
    ...item,
    type: 'terminal',
    typeLabel: 'Արտարժույթի փոխանակման տերմինալ',
  })),
];

// =========================
// ԳՈՒՅՆԵՐ ըստ TYPE-ի (միայն UI)
// =========================

const TYPE_COLORS = {
  branch: '#6c00ff',
  atm: '#2563eb',
  terminal: '#059669',
};

// =========================
// ՄԱՐՔԵՐԻ ICON-ՆԵՐ (custom, UI բարելավում)
// =========================

// Կաթիլաձև pin, գունավորված ըստ տիպի. օգտագործվում է ընդհանուր
// («Բոլոր հասցեները») քարտեզի վրա։
function buildPinIcon(color, { size = 30 } = {}) {
  const height = Math.round(size * 1.33);

  const svg = `
    <svg width="${size}" height="${height}" viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 0C7 0 0 6.8 0 15c0 10.7 12.2 22.7 14.1 24.5a1.3 1.3 0 001.8 0C17.8 37.7 30 25.7 30 15 30 6.8 23 0 15 0z"
            fill="${color}" stroke="white" stroke-width="1.5"/>
      <circle cx="15" cy="15" r="5.5" fill="white"/>
    </svg>
  `;

  return L.divIcon({
    className: 'evoca-pin',
    html: svg,
    iconSize: [size, height],
    iconAnchor: [size / 2, height],
    popupAnchor: [0, -height + 6],
  });
}

// Ընտրված կետի համար՝ մի փոքր ավելի մեծ, թեթև «pulse» շրջանակով pin,
// որ առանձնանա մեկ կետով քարտեզի վրա։
function buildSelectedPinIcon(color) {
  const size = 40;
  const height = Math.round(size * 1.33);

  const html = `
    <div class="evoca-pin-selected-wrap">
      <div class="evoca-pin-pulse" style="background:${color}"></div>
      <svg width="${size}" height="${height}" viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0C7 0 0 6.8 0 15c0 10.7 12.2 22.7 14.1 24.5a1.3 1.3 0 001.8 0C17.8 37.7 30 25.7 30 15 30 6.8 23 0 15 0z"
              fill="${color}" stroke="white" stroke-width="2"/>
        <circle cx="15" cy="15" r="6" fill="white"/>
      </svg>
    </div>
  `;

  return L.divIcon({
    className: 'evoca-pin evoca-pin-selected',
    html,
    iconSize: [size, height],
    iconAnchor: [size / 2, height],
    popupAnchor: [0, -height + 6],
  });
}

const PIN_ICONS = {
  branch: buildPinIcon(TYPE_COLORS.branch),
  atm: buildPinIcon(TYPE_COLORS.atm),
  terminal: buildPinIcon(TYPE_COLORS.terminal),
};

const SELECTED_PIN_ICONS = {
  branch: buildSelectedPinIcon(TYPE_COLORS.branch),
  atm: buildSelectedPinIcon(TYPE_COLORS.atm),
  terminal: buildSelectedPinIcon(TYPE_COLORS.terminal),
};

// Փոքրիկ գունավոր կրիտոն՝ պիտակների / legend-ի համար
function TypeDot({ color, size = 10 }) {
  return (
    <span
      className="inline-block rounded-full shrink-0"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        boxShadow: '0 0 0 2px white, 0 1px 3px rgba(0,0,0,0.25)',
      }}
    />
  );
}

// =========================
// MAP COMPONENT
// =========================

function MapController({ selectedItem }) {
  const map = useMap();

  React.useEffect(() => {
    if (selectedItem?.lat && selectedItem?.lng) {
      map.flyTo(
        [selectedItem.lat, selectedItem.lng],
        15,
        {
          duration: 0.8,
        }
      );
    }
  }, [selectedItem, map]);

  return null;
}

// Leaflet-ի default ոճերը վերասահմանող գլոբալ style։
// Փոխում է միայն տեսքը (popup, zoom կոճակներ, մեր custom pin-երը) —
// տվյալների կամ տրամաբանության վրա չի ազդում։
function MapGlobalStyles() {
  return (
    <style>{`
      .evoca-pin { background: transparent; border: none; }

      .evoca-pin-selected-wrap {
        position: relative;
        width: 40px;
        height: 53px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
      }

      .evoca-pin-pulse {
        position: absolute;
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
        width: 14px;
        height: 14px;
        border-radius: 9999px;
        opacity: 0.45;
        animation: evoca-pulse 1.8s ease-out infinite;
      }

      @keyframes evoca-pulse {
        0% { transform: translateX(-50%) scale(1); opacity: 0.45; }
        100% { transform: translateX(-50%) scale(3.4); opacity: 0; }
      }

      .leaflet-container {
        font-family: inherit;
        background: #eef0f3;
      }

      .leaflet-popup-content-wrapper {
        border-radius: 14px;
        box-shadow: 0 10px 30px rgba(15, 15, 25, 0.18);
        padding: 0;
        overflow: hidden;
      }

      .leaflet-popup-content {
        margin: 0;
        width: auto !important;
      }

      .leaflet-popup-tip-container {
        filter: drop-shadow(0 4px 4px rgba(15, 15, 25, 0.08));
      }

      .leaflet-popup-close-button {
        top: 10px !important;
        right: 10px !important;
        color: #9ca3af !important;
        font-size: 18px !important;
      }

      .leaflet-popup-close-button:hover {
        color: #111827 !important;
      }

      .leaflet-control-zoom {
        border-radius: 10px !important;
        overflow: hidden;
        border: 1px solid #e5e7eb !important;
        box-shadow: 0 4px 14px rgba(15, 15, 25, 0.12) !important;
      }

      .leaflet-control-zoom a {
        color: #374151 !important;
      }

      .leaflet-control-zoom a:hover {
        background: #f3e8ff !important;
        color: #6c00ff !important;
      }

      .leaflet-control-attribution {
        border-radius: 8px 0 0 0;
        font-size: 10px;
      }
    `}</style>
  );
}

// Popup-ի ներսի բովանդակությունը՝ նոր, կոկիկ ձևավորմամբ
function LocationPopup({ item }) {
  const color = TYPE_COLORS[item.type] || TYPE_COLORS.branch;

  return (
    <div className="min-w-[200px] max-w-[240px] font-sans">
      <div
        className="px-4 pt-4 pb-3"
        style={{
          borderTop: `3px solid ${color}`,
        }}
      >
        {item.typeLabel && (
          <div className="flex items-center gap-1.5 mb-1.5">
            <TypeDot color={color} size={7} />
            <span
              className="text-[10px] font-bold uppercase tracking-wide"
              style={{ color }}
            >
              {item.typeLabel}
            </span>
          </div>
        )}

        <div className="font-bold text-sm text-gray-900 leading-snug">
          {item.name || item.address}
        </div>

        <div className="text-xs text-gray-600 mt-2 flex items-start gap-1.5">
          <span className="mt-0.5">📍</span>
          <span>{item.address}</span>
        </div>

        {item.hours && (
          <div className="text-xs text-gray-500 mt-1.5 flex items-start gap-1.5">
            <span className="mt-0.5">🕐</span>
            <span>{item.hours}</span>
          </div>
        )}

        {item.cashIn !== undefined && (
          <div className="text-xs mt-1.5 flex items-center gap-1.5">
            <span>🏧</span>
            <span className="text-gray-600">
              Կանխիկի մուտք՝{' '}
              <b className={item.cashIn ? 'text-emerald-700' : 'text-gray-500'}>
                {item.cashIn ? 'Այո' : 'Ոչ'}
              </b>
            </span>
          </div>
        )}

        {item.phone && (
          <div className="text-xs text-gray-500 mt-1.5 flex items-start gap-1.5">
            <span className="mt-0.5">☎</span>
            <span>{item.phone}</span>
          </div>
        )}
      </div>
    </div>
  );
}

// =========================
// MAIN COMPONENT
// =========================

export default function BankMapSection() {
  const [activeTab, setActiveTab] = useState('branches');
  const [selectedItem, setSelectedItem] = useState(branchesData[0]);
  const [showAllMap, setShowAllMap] = useState(false);

  const getActiveList = () => {
    if (activeTab === 'branches') return branchesData;
    if (activeTab === 'atms') return atmsData;
    return terminalsData;
  };

  const currentList = getActiveList();

  const activeType =
    activeTab === 'branches' ? 'branch' : activeTab === 'atms' ? 'atm' : 'terminal';

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);

    if (tabKey === 'branches') {
      setSelectedItem(branchesData[0]);
    } else if (tabKey === 'atms') {
      setSelectedItem(atmsData[0]);
    } else {
      setSelectedItem(terminalsData[0]);
    }

    setShowAllMap(false);
  };

  return (
    <>
      <MapGlobalStyles />

      <section className="w-full bg-white py-10 px-4 md:px-10 font-sans">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
            Բանկի հասցեները և աշխատաժամերը
          </h2>

          {/* TABS */}
          <div className="flex flex-wrap items-center gap-6 border-b border-gray-200 mb-6">

            <button
              onClick={() => handleTabChange('branches')}
              className={`pb-3 text-sm md:text-base font-semibold relative transition-colors ${
                activeTab === 'branches'
                  ? 'text-[#6c00ff]'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Մասնաճյուղեր

              {activeTab === 'branches' && (
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#6c00ff] rounded-full" />
              )}
            </button>

            <button
              onClick={() => handleTabChange('atms')}
              className={`pb-3 text-sm md:text-base font-semibold relative transition-colors ${
                activeTab === 'atms'
                  ? 'text-[#6c00ff]'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Բանկոմատներ

              {activeTab === 'atms' && (
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#6c00ff] rounded-full" />
              )}
            </button>

            <button
              onClick={() => handleTabChange('terminals')}
              className={`pb-3 text-sm md:text-base font-semibold relative transition-colors ${
                activeTab === 'terminals'
                  ? 'text-[#6c00ff]'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Արտարժույթի փոխանակման տերմինալներ

              {activeTab === 'terminals' && (
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#6c00ff] rounded-full" />
              )}
            </button>

          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[580px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">

            {/* LIST */}
            <div className="lg:col-span-4 h-full overflow-y-auto divide-y divide-gray-100 bg-white p-2">

              {currentList.map((item) => {
                const isSelected = selectedItem?.id === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'bg-purple-50 border border-purple-200 shadow-sm'
                        : 'hover:bg-gray-50 border border-transparent'
                    }`}
                  >

                    <div className="flex items-start gap-2">
                      <span className="mt-1.5">
                        <TypeDot color={TYPE_COLORS[activeType]} />
                      </span>

                      <h4 className="font-bold text-gray-900 text-base leading-snug">
                        {item.name || item.address}
                      </h4>
                    </div>

                    {item.cashIn !== undefined && (
                      <div className="text-xs text-purple-700 font-medium mt-2 ml-5">
                        🏧 Կանխիկի մուտք՝{' '}
                        <span className="font-bold">
                          {item.cashIn ? 'Այո' : 'Ոչ'}
                        </span>
                      </div>
                    )}

                    {item.hours && (
                      <div className="flex items-start gap-2 text-xs text-gray-500 mt-2 ml-5">
                        <svg
                          className="w-4 h-4 text-gray-400 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path
                            strokeLinecap="round"
                            d="M12 7v5l3 3"
                          />
                        </svg>

                        <span>{item.hours}</span>
                      </div>
                    )}

                    {item.name && item.address && (
                      <div className="flex items-start gap-2 text-xs text-gray-600 mt-2 ml-5">
                        <svg
                          className="w-4 h-4 text-purple-600 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>

                        <span>{item.address}</span>
                      </div>
                    )}

                    {item.phone && (
                      <div className="flex items-start gap-2 text-xs text-gray-500 mt-2 ml-5">
                        <svg
                          className="w-4 h-4 text-gray-400 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.415-5.12-3.707-6.535-6.535l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>

                        <span>{item.phone}</span>
                      </div>
                    )}

                    <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between gap-2 ml-5">
                      <span className="text-[10px] text-gray-400">
                        Սպասարկում է՝
                      </span>

                      <div className="flex flex-wrap items-center gap-1">
                        <span className="px-1.5 py-0.5 text-[10px] bg-emerald-100 text-emerald-800 rounded font-bold">
                          ArCa
                        </span>

                        <span className="px-1.5 py-0.5 text-[10px] bg-blue-100 text-blue-800 rounded font-bold">
                          VISA
                        </span>

                        <span className="px-1.5 py-0.5 text-[10px] bg-orange-100 text-orange-800 rounded font-bold">
                          Mastercard
                        </span>

                        <span className="px-1.5 py-0.5 text-[10px] bg-teal-100 text-teal-800 rounded font-bold">
                          UnionPay
                        </span>
                      </div>
                    </div>

                  </div>
                );
              })}

            </div>

            {/* MAP */}
            <div className="lg:col-span-8 h-full relative bg-gray-100">

              {/* ԴԻՏԵԼ ՔԱՐՏԵԶԸ */}
              <div className="absolute top-4 right-4 z-[1000]">

                <button
                  onClick={() => setShowAllMap(true)}
                  className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-gray-900 font-semibold text-xs md:text-sm px-4 py-2.5 rounded-xl shadow-md border border-gray-200 transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  <span>Դիտել քարտեզը</span>

                  <svg
                    className="w-4 h-4 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </button>

              </div>

              {/* CURRENT LOCATION MAP */}
              <MapContainer
                center={[
                  selectedItem?.lat || 40.1772,
                  selectedItem?.lng || 44.50349,
                ]}
                zoom={15}
                scrollWheelZoom={true}
                className="w-full h-full"
              >

                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <MapController selectedItem={selectedItem} />

                {selectedItem?.lat && selectedItem?.lng && (
                  <Marker
                    position={[
                      selectedItem.lat,
                      selectedItem.lng,
                    ]}
                    icon={
                      SELECTED_PIN_ICONS[activeType] ||
                      SELECTED_PIN_ICONS.branch
                    }
                  >
                    <Popup>
                      <LocationPopup
                        item={{ ...selectedItem, typeLabel: undefined }}
                      />
                    </Popup>
                  </Marker>
                )}

              </MapContainer>

            </div>

          </div>
        </div>
      </section>
       {/* Footer */}
      <footer className="w-full bg-[#f8f8fa] text-[#2d2d2d] pt-8 pb-6 px-6 border-t border-gray-100 text-xs relative">
        <div className="max-w-6xl mx-auto flex justify-end pb-4 border-b border-gray-200">
          <div className="text-gray-400 text-[11px]">
            Թարմացվել է` 07/09/2026 14:49
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
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
            <p className="hover:text-purple-700 cursor-pointer">Dlibrary</p>
            <p className="hover:text-purple-700 cursor-pointer">Բուկլետներ</p>
            <p className="hover:text-purple-700 cursor-pointer">Հետադարձ կապ</p>
            <p className="hover:text-purple-700 cursor-pointer">Կայքի քարտեզ</p>

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

        {/* Footer Bottom Bar */}
        <div className="border-t border-gray-200/60 pt-4 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400">
          <p className="max-w-2xl leading-normal">
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության,
            ինչպես նաև ռուսերեն և անգլերեն լեզուներով ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք
            առաջնորդվել հայերեն տարբերակով: Evocabank ՓԲԸ-ն պատասխանատվություն չի կրում իր
            ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստույգության և
            արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ
            կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
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

      {/* ================================================= */}
      {/* ԲՈԼՈՐ ՀԱՍՑԵՆԵՐԻ ՔԱՐՏԵԶ */}
      {/* ================================================= */}

      {showAllMap && (
        <div className="fixed inset-0 z-[9999] bg-black/50 p-3 md:p-8">

          <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-2xl">

            {/* HEADER */}
            <div className="absolute top-0 left-0 right-0 z-[1000] bg-white/95 backdrop-blur-md border-b border-gray-200">

              <div className="px-5 py-4 flex items-center justify-between gap-4">

                <div>
                  <h2 className="text-lg md:text-2xl font-extrabold text-gray-900">
                    Բանկի բոլոր հասցեները
                  </h2>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5">
                    <span className="flex items-center gap-1.5 text-xs text-gray-600">
                      <TypeDot color={TYPE_COLORS.branch} />
                      Մասնաճյուղեր՝ {branchesData.length}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-600">
                      <TypeDot color={TYPE_COLORS.atm} />
                      Բանկոմատներ՝ {atmsData.length}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-600">
                      <TypeDot color={TYPE_COLORS.terminal} />
                      Տերմինալներ՝ {terminalsData.length}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setShowAllMap(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition shrink-0"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

              </div>

            </div>

            {/* FULL MAP */}
            <MapContainer
              center={[40.1772, 44.50349]}
              zoom={12}
              scrollWheelZoom={true}
              className="w-full h-full"
            >

              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {allLocations.map((item) => (
                <Marker
                  key={`${item.type}-${item.id}`}
                  position={[item.lat, item.lng]}
                  icon={PIN_ICONS[item.type] || PIN_ICONS.branch}
                >
                  <Popup>
                    <LocationPopup item={item} />
                  </Popup>
                </Marker>
              ))}

            </MapContainer>

            {/* MAP LEGEND */}
            <div className="absolute bottom-5 left-5 z-[1000] bg-white rounded-xl shadow-lg border border-gray-200 px-4 py-3">

              <div className="text-xs font-bold text-gray-900 mb-2">
                Քարտեզի նշումներ
              </div>

              <div className="flex flex-col gap-1.5 text-[11px] text-gray-700">
                <span className="flex items-center gap-2">
                  <TypeDot color={TYPE_COLORS.branch} />
                  Մասնաճյուղեր
                </span>
                <span className="flex items-center gap-2">
                  <TypeDot color={TYPE_COLORS.atm} />
                  Բանկոմատներ
                </span>
                <span className="flex items-center gap-2">
                  <TypeDot color={TYPE_COLORS.terminal} />
                  Արտարժույթի տերմինալներ
                </span>
              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
}