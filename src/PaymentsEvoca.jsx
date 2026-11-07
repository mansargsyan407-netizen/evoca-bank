import React, { useState } from 'react';
import { 
  FaGlobe, FaPhoneAlt, FaFacebookF, FaInstagram, 
  FaYoutube, FaLinkedinIn, FaPinterestP, FaApple, FaGooglePlay 
} from 'react-icons/fa';
import { Tr, useLang } from './i18n';

import { useFirebasePublicData } from './useFirebasePublicData';

const servicesFirebaseFallback = [
  {
    id: 'evocabank',
    title: 'EVOCABANK',
    icon: (
      <img src="https://resource.evoca.am/images/WebPayment/evoca.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'international',
    title: 'Միջազգային բջջային օպերատորներ',
    icon: (
      <img src="https://resource.evoca.am/images/WebPayment/international.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'utility',
    title: 'Կոմունալ վճարումներ',
    icon: (
      <img src="https://resource.evoca.am/images/WebPayment/utility.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'internet-tv',
    title: 'Ինտերնետ և TV',
    icon: (
      <img src="https://resource.evoca.am/images/WebPayment/internettv.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'police',
    title: 'ՃՈ վճարներ',
    icon: (
      <img src="https://resource.evoca.am/images/WebPayment/roadpolice.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'loans',
    title: 'Վարկային կազմակերպություններ',
    icon: (
      <img src="https://resource.evoca.am/images/WebPayment/loan.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'events',
    title: 'Միջոցառումներ',
    icon: (
      <img src="https://resource.evoca.am/images/WebPayment/event.png" alt="" />
    ),
    active: false,
  },
];

const evocabankSubServicesFirebaseFallback = [
  {
    id: 'loan-repayment',
    title: 'Վարկի մարում',
    icon: (
      <img src="https://resource.evoca.am/images/webPayment/Account-Replenishment.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'account-topup',
    title: 'Հաշվի համալրում',
    icon: (
      <img src="https://resource.evoca.am/images/webPayment/Account-Replenishment.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'card-topup',
    title: 'Քարտի համալրում',
    icon: (
      <img src="https://resource.evoca.am/images/webPayment/cardtocard.png" alt="" />
    ),
    active: false,
  },
];

const loanRepaymentTypes = [
  {
    id: 'early-repayment',
    title: 'Վարկի մայր գումարի վաղաժամկետ մարում',
    icon: (
      <img src="https://resource.evoca.am/images/webPayment/loan.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'regular-repayment',
    title: 'Հերթական մարում',
    icon: (
      <img src="https://resource.evoca.am/images/webPayment/loan.png" alt="" />
    ),
    active: false,
  },
];

const internationalOperators = [
  {
    id: 'goodline',
    title: 'Goodline',
    icon: (
      <img src="https://resource.evoca.am/images/webPayment/goodline.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'yota',
    title: 'Yota',
    icon: (
      <img src="https://resource.evoca.am/images/webPayment/yota.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'georgian',
    title: 'Վրացական',
    icon: (
      <img src="https://resource.evoca.am/images/WebPayment/georgian.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'russian',
    title: 'Ռուսական',
    icon: (
      <img src="https://resource.evoca.am/images/WebPayment/russian.png" alt="" />
    ),
    active: false,
  },
];

const georgianOperators = [
  {
    id: 'geocell',
    title: 'Ջեոսել',
    icon: (
      <img src="https://resource.evoca.am/images/webPayment/geocell.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'magti-bani',
    title: 'Մագթի Բանի',
    icon: (
      <img src="https://resource.evoca.am/images/webPayment/magti.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'magti',
    title: 'Մագթի',
    icon: (
      <img src="https://resource.evoca.am/images/webPayment/magti.png" alt="" />
    ),
    active: false,
  },
];

const utilityServicesFirebaseFallback = [
  {
    id: 'phone',
    title: 'Հեռախոս',
    icon: (
      <img src="https://resource.evoca.am/images/WebPayment/phone.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'electricity',
    title: 'Լույս',
    icon: (
      <img src="https://resource.evoca.am/images/WebPayment/electricity.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'water',
    title: 'Ջուր',
    icon: (
      <img src="https://resource.evoca.am/images/WebPayment/water.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'gas-consumption',
    title: 'Գազի սպառում',
    icon: (
      <img src="https://resource.evoca.am/images/WebPayment/gas.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'gas-service',
    title: 'Գազի սպասարկում',
    icon: (
      <img src="https://resource.evoca.am/images/WebPayment/gas_service.png" alt="" />
    ),
    active: false,
  },
];

const phoneServicesFirebaseFallback = [
  {
    id: 'beeline-fixed',
    title: 'Ֆիքսված հեռախոսակապ',
    icon: (
      <img src="https://resource.evoca.am/images/WebPayment/beeline.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'karabakh-fixed',
    title: 'Ղարաբաղ Տելեկոմ ֆիքսված հեռախոսակապ',
    icon: (
      <img src="https://resource.evoca.am/images/webPayment/karabakh.png" alt="" />
    ),
    active: false,
  },
];

const internetTvServicesFirebaseFallback = [
  {
    id: 'hypernet',
    title: 'HyperNet',
    icon: (
      <img src="https://resource.evoca.am/images/WebPayment/hypernet.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'team-internet',
    title: 'Team ինտերնետ',
    icon: (
      <img src="https://resource.evoca.am/images/WebPayment/beeline.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'vivacell-mts',
    title: 'VivaCell MTS Internet',
    icon: (
      <img src="https://resource.evoca.am/images/webPayment/vivacell.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'rostelekom',
    title: 'Rostelekom',
    icon: (
      <img src="https://resource.evoca.am/images/webPayment/rostelecom.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'interactive-tv',
    title: 'Interactive TV',
    icon: (
      <img src="https://resource.evoca.am/images/webPayment/interactive.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'ctv',
    title: 'CTV',
    icon: (
      <img src="https://resource.evoca.am/images/webPayment/ctv.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'yournet',
    title: 'YOURnet',
    icon: (
      <img src="https://resource.evoca.am/images/webPayment/yournet.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'arpinet',
    title: 'Arpinet',
    icon: (
      <img src="https://resource.evoca.am/images/webPayment/arpinet.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'kt-internet',
    title: 'KT Internet',
    icon: (
      <img src="https://resource.evoca.am/images/webPayment/karabakh.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'armcom',
    title: 'Armcom',
    icon: (
      <img src="https://resource.evoca.am/images/webPayment/armcom.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'interlink',
    title: 'Interlink',
    icon: (
      <img src="https://resource.evoca.am/images/webPayment/interlinknew.png" alt="" />
    ),
    active: false,
  },
];

const policeServicesFirebaseFallback = [
  {
    id: 'speed-cameras',
    title: 'Արագաչափեր և տեսախցիկներ',
    icon: (
      <img src="https://resource.evoca.am/images/WebPayment/roadpolice.png" alt="" />
    ),
    active: false,
  },
];

const loanOrganizations = [
  {
    id: 'bless',
    title: 'ԲԼԵՍՍ ՈՒՎԿ',
    icon: (
      <img src="https://resource.evoca.am/images/WebPayment/bless.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'premium-credit',
    title: 'Պրեմիում Կրեդիտ ՈՒՎԿ',
    icon: (
      <img src="https://resource.evoca.am/images/WebPayment/premiumcredit.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'finca',
    title: 'ՖԻՆՔԱ ՈՒՎԿ',
    icon: (
      <img src="https://resource.evoca.am/images/Payment/finca-logo.png" alt="" />
    ),
    active: false,
  },
  {
    id: 'mikro-kapital',
    title: 'Միկրո Կապիտալ ՈՒՎԿ',
    icon: (
      <img src="https://resource.evoca.am/images/Payment/MikroKapital-Logo.png" alt="" />
    ),
    active: false,
  },
];

export default function PaymentsEvoca() {
  const services = useFirebasePublicData('siteContent/pageData/PaymentsEvoca/services', servicesFirebaseFallback);
  const evocabankSubServices = useFirebasePublicData('siteContent/pageData/PaymentsEvoca/evocabankSubServices', evocabankSubServicesFirebaseFallback);
  const utilityServices = useFirebasePublicData('siteContent/pageData/PaymentsEvoca/utilityServices', utilityServicesFirebaseFallback);
  const phoneServices = useFirebasePublicData('siteContent/pageData/PaymentsEvoca/phoneServices', phoneServicesFirebaseFallback);
  const internetTvServices = useFirebasePublicData('siteContent/pageData/PaymentsEvoca/internetTvServices', internetTvServicesFirebaseFallback);
  const policeServices = useFirebasePublicData('siteContent/pageData/PaymentsEvoca/policeServices', policeServicesFirebaseFallback);

  const { t } = useLang();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedForm, setSelectedForm] = useState(null);

  const [inputs, setInputs] = useState({ subscriberId: '', phone: '', decisionNumber: '' });

  const handleInputChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const resetToMain = () => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setSelectedForm(null);
    setInputs({ subscriberId: '', phone: '', decisionNumber: '' });
  };

  const resetToEvoca = () => {
    setSelectedSubCategory(null);
    setSelectedForm(null);
    setInputs({ subscriberId: '', phone: '', decisionNumber: '' });
  };

  const resetToInternational = () => {
    setSelectedSubCategory(null);
    setSelectedForm(null);
    setInputs({ subscriberId: '', phone: '', decisionNumber: '' });
  };

  const resetToUtility = () => {
    setSelectedSubCategory(null);
    setSelectedForm(null);
    setInputs({ subscriberId: '', phone: '', decisionNumber: '' });
  };

  const resetToInternetTv = () => {
    setSelectedSubCategory(null);
    setSelectedForm(null);
    setInputs({ subscriberId: '', phone: '', decisionNumber: '' });
  };

  const resetToPolice = () => {
    setSelectedSubCategory(null);
    setSelectedForm(null);
    setInputs({ subscriberId: '', phone: '', decisionNumber: '' });
  };

  const resetToLoans = () => {
    setSelectedSubCategory(null);
    setSelectedForm(null);
    setInputs({ subscriberId: '', phone: '', decisionNumber: '' });
  };

  const resetToLoanRepayment = () => {
    setSelectedForm(null);
    setInputs({ subscriberId: '', phone: '', decisionNumber: '' });
  };

  const resetToGeorgian = () => {
    setSelectedForm(null);
    setInputs({ subscriberId: '', phone: '', decisionNumber: '' });
  };

  const resetToPhone = () => {
    setSelectedForm(null);
    setInputs({ subscriberId: '', phone: '', decisionNumber: '' });
  };

  const getFormDetails = () => {
    switch (selectedForm) {
      // EVOCABANK
      case 'early-repayment':
        return {
          title: t('Վարկի մայր գումարի վաղաժամկետ մարում'),
          fields: [{ name: 'subscriberId', label: t('* Վարկային պայմանագրի համար'), placeholder: 'TVxxxx' }],
          breadcrumbs: [
            { title: 'EVOCABANK', onClick: resetToEvoca },
            { title: t('Վարկի մարում'), onClick: resetToLoanRepayment },
            { title: t('Վարկի մայր գումարի վաղաժամկետ մարում') }
          ]
        };
      case 'regular-repayment':
        return {
          title: t('Հերթական մարում'),
          fields: [{ name: 'subscriberId', label: t('* Վարկային պայմանագրի համար'), placeholder: 'TVxxxx' }],
          breadcrumbs: [
            { title: 'EVOCABANK', onClick: resetToEvoca },
            { title: t('Վարկի մարում'), onClick: resetToLoanRepayment },
            { title: t('Հերթական մարում') }
          ]
        };
      case 'account-topup':
        return {
          title: t('Հաշվի համալրում'),
          fields: [{ name: 'subscriberId', label: t('Հաշվեհամար'), placeholder: '' }],
          breadcrumbs: [
            { title: 'EVOCABANK', onClick: resetToEvoca },
            { title: t('Հաշվի համալրում') }
          ]
        };
      case 'card-topup':
        return {
          title: t('Քարտի համալրում'),
          fields: [{ name: 'subscriberId', label: t('Քարտի համար'), placeholder: '' }],
          breadcrumbs: [
            { title: 'EVOCABANK', onClick: resetToEvoca },
            { title: t('Քարտի համալրում') }
          ]
        };

      // INTERNATIONAL
      case 'goodline':
        return {
          title: 'Goodline',
          fields: [{ name: 'phone', label: t('* Հեռախոսահամար'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Միջազգային բջջային օպերատորներ'), onClick: resetToInternational },
            { title: 'Goodline' }
          ]
        };
      case 'yota':
        return {
          title: 'Yota',
          fields: [{ name: 'phone', label: t('* Հեռախոսահամար'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Միջազգային բջջային օպերատորներ'), onClick: resetToInternational },
            { title: 'Yota' }
          ]
        };
      case 'geocell':
        return {
          title: t('Ջեոսել'),
          fields: [{ name: 'phone', label: t('* Հեռախոսահամար'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Միջազգային բջջային օպերատորներ'), onClick: resetToInternational },
            { title: t('Վրացական'), onClick: resetToGeorgian },
            { title: t('Ջեոսել') }
          ]
        };
      case 'magti-bani':
        return {
          title: t('Մագթի Բանի'),
          fields: [{ name: 'phone', label: t('* Հեռախոսահամար'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Միջազգային բջջային օպերատորներ'), onClick: resetToInternational },
            { title: t('Վրացական'), onClick: resetToGeorgian },
            { title: t('Մագթի Բանի') }
          ]
        };
      case 'magti':
        return {
          title: t('Մագթի'),
          fields: [{ name: 'phone', label: t('* Հեռախոսահամար'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Միջազգային բջջային օպերատորներ'), onClick: resetToInternational },
            { title: t('Վրացական'), onClick: resetToGeorgian },
            { title: t('Մագթի') }
          ]
        };

      // UTILITY
      case 'beeline-fixed':
        return {
          title: t('Ֆիքսված հեռախոսակապ'),
          fields: [{ name: 'phone', label: t('* Հեռախոսահամար'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Կոմունալ վճարումներ'), onClick: resetToUtility },
            { title: t('Հեռախոս'), onClick: resetToPhone },
            { title: t('Ֆիքսված հեռախոսակապ') }
          ]
        };
      case 'karabakh-fixed':
        return {
          title: t('Ղարաբաղ Տելեկոմ ֆիքսված հեռախոսակապ'),
          fields: [{ name: 'phone', label: t('* Հեռախոսահամար'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Կոմունալ վճարումներ'), onClick: resetToUtility },
            { title: t('Հեռախոս'), onClick: resetToPhone },
            { title: t('Ղարաբաղ Տելեկոմ ֆիքսված հեռախոսակապ') }
          ]
        };
      case 'electricity':
        return {
          title: t('Լույս'),
          fields: [
            { name: 'subscriberId', label: t('Բաժանորդի համար'), placeholder: '' },
            { name: 'phone', label: t('Հեռախոս ֆիքս./բջջ.'), placeholder: '' }
          ],
          breadcrumbs: [
            { title: t('Կոմունալ վճարումներ'), onClick: resetToUtility },
            { title: t('Լույս') }
          ]
        };
      case 'water':
        return {
          title: t('Ջուր'),
          fields: [
            { name: 'subscriberId', label: t('Բաժանորդի համար'), placeholder: '' },
            { name: 'phone', label: t('Հեռախոսահամար'), placeholder: '' }
          ],
          breadcrumbs: [
            { title: t('Կոմունալ վճարումներ'), onClick: resetToUtility },
            { title: t('Ջուր') }
          ]
        };
      case 'gas-consumption':
        return {
          title: t('Գազի սպառում'),
          fields: [
            { name: 'subscriberId', label: t('Բաժանորդի համար'), placeholder: '' },
            { name: 'phone', label: t('Հեռախոսահամար'), placeholder: '' }
          ],
          breadcrumbs: [
            { title: t('Կոմունալ վճարումներ'), onClick: resetToUtility },
            { title: t('Գազի սպառում') }
          ]
        };
      case 'gas-service':
        return {
          title: t('Գազի սպասարկում'),
          fields: [
            { name: 'subscriberId', label: t('Բաժանորդի համար'), placeholder: '' },
            { name: 'phone', label: t('Հեռախոսահամար'), placeholder: '' }
          ],
          breadcrumbs: [
            { title: t('Կոմունալ վճարումներ'), onClick: resetToUtility },
            { title: t('Գազի սպասարկում') }
          ]
        };

      // INTERNET & TV
      case 'hypernet':
        return {
          title: 'HyperNet',
          fields: [{ name: 'subscriberId', label: t('* Բաժանորդի Id'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Ինտերնետ և TV'), onClick: resetToInternetTv },
            { title: 'HyperNet' }
          ]
        };
      case 'team-internet':
        return {
          title: t('Team ինտերնետ'),
          fields: [{ name: 'subscriberId', label: t('* Բաժանորդի ID / Հեռ.'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Ինտերնետ և TV'), onClick: resetToInternetTv },
            { title: t('Team ինտերնետ') }
          ]
        };
      case 'vivacell-mts':
        return {
          title: 'VivaCell MTS Internet',
          fields: [{ name: 'phone', label: t('* Հեռախոսահամար'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Ինտերնետ և TV'), onClick: resetToInternetTv },
            { title: 'VivaCell MTS Internet' }
          ]
        };
      case 'rostelekom':
        return {
          title: 'Rostelekom',
          fields: [{ name: 'subscriberId', label: t('* Բաժանորդի ID համար'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Ինտերնետ և TV'), onClick: resetToInternetTv },
            { title: 'Rostelekom' }
          ]
        };
      case 'interactive-tv':
        return {
          title: 'Interactive TV',
          fields: [{ name: 'phone', label: t('* Հեռախոսահամար'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Ինտերնետ և TV'), onClick: resetToInternetTv },
            { title: 'Interactive TV' }
          ]
        };
      case 'ctv':
        return {
          title: 'CTV',
          fields: [{ name: 'phone', label: t('* Հեռախոսահամար'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Ինտերնետ և TV'), onClick: resetToInternetTv },
            { title: 'CTV' }
          ]
        };
      case 'yournet':
        return {
          title: 'YOURnet',
          fields: [{ name: 'subscriberId', label: '* ID', placeholder: '' }],
          breadcrumbs: [
            { title: t('Ինտերնետ և TV'), onClick: resetToInternetTv },
            { title: 'YOURnet' }
          ]
        };
      case 'arpinet':
        return {
          title: 'Arpinet',
          fields: [{ name: 'subscriberId', label: t('* Բաժանորդի ID համար'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Ինտերնետ և TV'), onClick: resetToInternetTv },
            { title: 'Arpinet' }
          ]
        };
      case 'kt-internet':
        return {
          title: 'KT Internet',
          fields: [{ name: 'subscriberId', label: t('* Բաժանորդի ID համար'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Ինտերնետ և TV'), onClick: resetToInternetTv },
            { title: 'KT Internet' }
          ]
        };
      case 'armcom':
        return {
          title: 'Armcom',
          fields: [{ name: 'subscriberId', label: t('* Բաժանորդի ID համար'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Ինտերնետ և TV'), onClick: resetToInternetTv },
            { title: 'Armcom' }
          ]
        };
      case 'interlink':
        return {
          title: 'Interlink',
          fields: [{ name: 'subscriberId', label: t('* Բաժանորդի ID համար'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Ինտերնետ և TV'), onClick: resetToInternetTv },
            { title: 'Interlink' }
          ]
        };

      // POLICE (ՃՈ ՎՃԱՐՆԵՐ)
      case 'speed-cameras':
        return {
          title: t('Արագաչափեր և տեսախցիկներ'),
          fields: [{ name: 'decisionNumber', label: t('* Որոշման համար'), placeholder: '' }],
          breadcrumbs: [
            { title: t('ՃՈ վճարներ'), onClick: resetToPolice },
            { title: t('Արագաչափեր և տեսախցիկներ') }
          ]
        };

      // LOAN ORGANIZATIONS
      case 'bless':
        return {
          title: t('ԲԼԵՍՍ ՈՒՎԿ'),
          fields: [{ name: 'subscriberId', label: t('* Պայմանագրի համար / ՀԾՀ'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Վարկային կազմակերպություններ'), onClick: resetToLoans },
            { title: t('ԲԼԵՍՍ ՈՒՎԿ') }
          ]
        };
      case 'premium-credit':
        return {
          title: t('Պրեմիում Կրեդիտ ՈՒՎԿ'),
          fields: [{ name: 'subscriberId', label: t('* Պայմանագրի համար'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Վարկային կազմակերպություններ'), onClick: resetToLoans },
            { title: t('Պրեմիում Կրեդիտ ՈՒՎԿ') }
          ]
        };
      case 'finca':
        return {
          title: t('ՖԻՆՔԱ ՈՒՎԿ'),
          fields: [{ name: 'subscriberId', label: t('* Պայմանագրի համար'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Վարկային կազմակերպություններ'), onClick: resetToLoans },
            { title: t('ՖԻՆՔԱ ՈՒՎԿ') }
          ]
        };
      case 'mikro-kapital':
        return {
          title: t('Միկրո Կապիտալ ՈՒՎԿ'),
          fields: [{ name: 'subscriberId', label: t('* Պայմանագրի համար'), placeholder: '' }],
          breadcrumbs: [
            { title: t('Վարկային կազմակերպություններ'), onClick: resetToLoans },
            { title: t('Միկրո Կապիտալ ՈՒՎԿ') }
          ]
        };

      default:
        return { fields: [], breadcrumbs: [] };
    }
  };

  const formDetails = getFormDetails();

  return (
    <Tr>
      <div className="min-h-screen flex flex-col justify-between bg-[#F8F8FC] text-gray-800 font-sans">
        {/* Navbar */}
        <header className="bg-white shadow-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <span 
                onClick={resetToMain} 
                className="text-2xl font-bold text-purple-700 tracking-wide cursor-pointer"
              >
                evoca
              </span>
              <span className="text-gray-400 border-l border-gray-200 pl-4 text-sm font-medium">Online payment</span>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-purple-700 font-semibold">
                <FaPhoneAlt className="text-xs" />
                <span>+374 10 605555</span>
              </div>
              <button className="text-gray-500 hover:text-purple-700 transition">
                <FaGlobe className="text-base" />
              </button>
              <button className="bg-purple-700 hover:bg-purple-800 text-white font-medium px-5 py-2 rounded-full transition shadow-sm">
                {t('Պատմություն')}
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-4 py-10 flex-grow w-full">
          
          {/* ՖՈՐՄԱՅԻ ԷՋԵՐ */}
          {selectedForm ? (
            <div className="max-w-xl mx-auto">
              {/* Breadcrumb Navigation */}
              <nav className="text-sm text-gray-500 mb-12 flex items-center space-x-2">
                <span 
                  onClick={resetToMain} 
                  className="text-purple-700 font-medium cursor-pointer hover:underline"
                >
                  {t('Գլխավոր')}
                </span>
                {formDetails.breadcrumbs.map((bc, idx) => (
                  <React.Fragment key={idx}>
                    <span>/</span>
                    {bc.onClick ? (
                      <span 
                        onClick={bc.onClick} 
                        className="text-purple-700 font-medium cursor-pointer hover:underline"
                      >
                        {bc.title}
                      </span>
                    ) : (
                      <span className="text-gray-400 font-normal">{bc.title}</span>
                    )}
                  </React.Fragment>
                ))}
              </nav>

              {/* Վերնագիր */}
              <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-900 leading-snug">
                {formDetails.title}
              </h1>

              {/* Form Box */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-md space-y-4">
                  {formDetails.fields.map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs text-gray-600 mb-2 text-left font-medium">
                        {field.label}
                      </label>
                      <input
                        type="text"
                        placeholder={field.placeholder}
                        value={inputs[field.name] || ''}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-purple-600 transition text-sm shadow-sm placeholder-gray-300"
                      />
                    </div>
                  ))}

                  <button className="w-full mt-6 bg-[#6300E2] hover:bg-purple-800 text-white font-semibold py-3.5 rounded-xl transition shadow-md">
                    {t('Շարունակել')}
                  </button>
                </div>
              </div>
            </div>
          ) : selectedSubCategory === 'phone' ? (
            
            /* ՀԵՌԱԽՈՍ */
            <div>
              <nav className="text-sm text-gray-500 mb-8 flex items-center space-x-2">
                <span onClick={resetToMain} className="text-purple-700 font-medium cursor-pointer hover:underline">
                  {t('Գլխավոր')}
                </span>
                <span>/</span>
                <span onClick={resetToUtility} className="text-purple-700 font-medium cursor-pointer hover:underline">
                  {t('Կոմունալ վճարումներ')}
                </span>
                <span>/</span>
                <span className="text-gray-400 font-normal">{t('Հեռախոս')}</span>
              </nav>

              <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-900 tracking-wide">
                {t('Հեռախոս')}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {phoneServices.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedForm(item.id)}
                    className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition duration-200 cursor-pointer border border-transparent hover:border-purple-200 min-h-[180px]"
                  >
                    <div className="text-4xl mb-4 bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center text-purple-600">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm leading-snug">
                      {t(item.title)}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ) : selectedSubCategory === 'georgian' ? (
            
            /* ՎՐԱՑԱԿԱՆ */
            <div>
              <nav className="text-sm text-gray-500 mb-8 flex items-center space-x-2">
                <span onClick={resetToMain} className="text-purple-700 font-medium cursor-pointer hover:underline">
                  {t('Գլխավոր')}
                </span>
                <span>/</span>
                <span onClick={resetToInternational} className="text-purple-700 font-medium cursor-pointer hover:underline">
                  {t('Միջազգային բջջային օպերատորներ')}
                </span>
                <span>/</span>
                <span className="text-gray-400 font-normal">{t('Վրացական')}</span>
              </nav>

              <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-900 tracking-wide">
                {t('Վրացական')}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {georgianOperators.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedForm(item.id)}
                    className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition duration-200 cursor-pointer border border-transparent hover:border-purple-200 min-h-[180px]"
                  >
                    <div className="text-4xl mb-4 bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center text-purple-600">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm leading-snug">
                      {t(item.title)}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ) : selectedSubCategory === 'russian' ? (
            
            /* ՌՈՒՍԱԿԱՆ */
            <div>
              <nav className="text-sm text-gray-500 mb-8 flex items-center space-x-2">
                <span onClick={resetToMain} className="text-purple-700 font-medium cursor-pointer hover:underline">
                  {t('Գլխավոր')}
                </span>
                <span>/</span>
                <span onClick={resetToInternational} className="text-purple-700 font-medium cursor-pointer hover:underline">
                  {t('Միջազգային բջջային օպերատորներ')}
                </span>
                <span>/</span>
                <span className="text-gray-400 font-normal">{t('Ռուսական')}</span>
              </nav>

              <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-900 tracking-wide">
                {t('Ռուսական')}
              </h1>

              <div className="flex justify-center max-w-3xl mx-auto">
                <div
                  onClick={() => setSelectedForm('beeline-russia')}
                  className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition duration-200 cursor-pointer border border-transparent hover:border-purple-200 min-h-[180px] w-64"
                >
                  <div className="text-4xl mb-4 bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center text-purple-600">
                    📶
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm leading-snug">
                    {t('Բիլայն Ռուսաստան')}
                  </h3>
                </div>
              </div>
            </div>
          ) : selectedSubCategory === 'loan-repayment' ? (
            
            /* ՎԱՐԿԻ ՄԱՐՈՒՄ */
            <div>
              <nav className="text-sm text-gray-500 mb-8 flex items-center space-x-2">
                <span onClick={resetToMain} className="text-purple-700 font-medium cursor-pointer hover:underline">
                  {t('Գլխավոր')}
                </span>
                <span>/</span>
                <span onClick={resetToEvoca} className="text-purple-700 font-medium cursor-pointer hover:underline">
                  EVOCABANK
                </span>
                <span>/</span>
                <span className="text-gray-400 font-medium text-xs">{t('Վարկի մարում')}</span>
              </nav>

              <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-900 tracking-wide">
                {t('Վարկի մարում')}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {loanRepaymentTypes.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedForm(item.id)}
                    className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition duration-200 cursor-pointer border border-transparent hover:border-purple-200 min-h-[180px]"
                  >
                    <div className="text-4xl mb-4 bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center text-purple-600">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm leading-snug">
                      {t(item.title)}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ) : selectedCategory === 'evocabank' ? (
            
            /* EVOCABANK */
            <div>
              <nav className="text-sm text-gray-500 mb-8 flex items-center space-x-2">
                <span onClick={resetToMain} className="text-purple-700 font-medium cursor-pointer hover:underline">
                  {t('Գլխավոր')}
                </span>
                <span>/</span>
                <span className="text-gray-400 uppercase font-semibold text-xs tracking-wider">EVOCABANK</span>
              </nav>

              <h1 className="text-3xl font-extrabold text-center mb-10 text-purple-700 tracking-wide">
                EVOCABANK
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {evocabankSubServices.map((sub) => (
                  <div
                    key={sub.id}
                    onClick={() => {
                      if (sub.id === 'loan-repayment') {
                        setSelectedSubCategory('loan-repayment');
                      } else {
                        setSelectedForm(sub.id);
                      }
                    }}
                    className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition duration-200 cursor-pointer border border-transparent hover:border-purple-200 min-h-[180px]"
                  >
                    <div className="text-4xl mb-4 bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center text-purple-600">
                      {sub.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm leading-snug">
                      {t(sub.title)}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ) : selectedCategory === 'international' ? (
            
            /* ՄԻՋԱԶԳԱՅԻՆ ԲՋՋԱՅԻՆ ՕՊԵՐԱՏՈՐՆԵՐ */
            <div>
              <nav className="text-sm text-gray-500 mb-8 flex items-center space-x-2">
                <span onClick={resetToMain} className="text-purple-700 font-medium cursor-pointer hover:underline">
                  {t('Գլխավոր')}
                </span>
                <span>/</span>
                <span className="text-gray-400 font-normal">{t('Միջազգային բջջային օպերատորներ')}</span>
              </nav>

              <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-900 tracking-wide">
                {t('Միջազգային բջջային օպերատորներ')}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {internationalOperators.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'goodline' || item.id === 'yota') {
                        setSelectedForm(item.id);
                      } else if (item.id === 'georgian') {
                        setSelectedSubCategory('georgian');
                      } else if (item.id === 'russian') {
                        setSelectedSubCategory('russian');
                      }
                    }}
                    className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition duration-200 cursor-pointer border border-transparent hover:border-purple-200 min-h-[180px]"
                  >
                    <div className="text-4xl mb-4 bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center text-purple-600">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm leading-snug">
                      {t(item.title)}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ) : selectedCategory === 'utility' ? (
            
            /* ԿՈՄՈՒՆԱԼ ՎՃԱՐՈՒՄՆԵՐ */
            <div>
              <nav className="text-sm text-gray-500 mb-8 flex items-center space-x-2">
                <span onClick={resetToMain} className="text-purple-700 font-medium cursor-pointer hover:underline">
                  {t('Գլխավոր')}
                </span>
                <span>/</span>
                <span className="text-gray-400 font-normal">{t('Կոմունալ վճարումներ')}</span>
              </nav>

              <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-900 tracking-wide">
                {t('Կոմունալ վճարումներ')}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {utilityServices.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'phone') {
                        setSelectedSubCategory('phone');
                      } else {
                        setSelectedForm(item.id);
                      }
                    }}
                    className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition duration-200 cursor-pointer border border-transparent hover:border-purple-200 min-h-[180px]"
                  >
                    <div className="text-4xl mb-4 bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center text-purple-600">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm leading-snug">
                      {t(item.title)}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ) : selectedCategory === 'internet-tv' ? (
            
            /* ԻՆՏԵՐՆԵՏ ԵՎ TV */
            <div>
              <nav className="text-sm text-gray-500 mb-8 flex items-center space-x-2">
                <span onClick={resetToMain} className="text-purple-700 font-medium cursor-pointer hover:underline">
                  {t('Գլխավոր')}
                </span>
                <span>/</span>
                <span className="text-gray-400 font-normal">{t('Ինտերնետ և TV')}</span>
              </nav>

              <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-900 tracking-wide">
                {t('Ինտերնետ և TV')}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {internetTvServices.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedForm(item.id)}
                    className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition duration-200 cursor-pointer border border-transparent hover:border-purple-200 min-h-[180px]"
                  >
                    <div className="text-4xl mb-4 bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center text-purple-600">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm leading-snug">
                      {t(item.title)}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ) : selectedCategory === 'police' ? (
            
            /* ՃՈ ՎՃԱՐՆԵՐ */
            <div>
              <nav className="text-sm text-gray-500 mb-8 flex items-center space-x-2">
                <span onClick={resetToMain} className="text-purple-700 font-medium cursor-pointer hover:underline">
                  {t('Գլխավոր')}
                </span>
                <span>/</span>
                <span className="text-gray-400 font-normal">{t('ՃՈ վճարներ')}</span>
              </nav>

              <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-900 tracking-wide">
                {t('ՃՈ վճարներ')}
              </h1>

              <div className="flex justify-center max-w-3xl mx-auto">
                {policeServices.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedForm(item.id)}
                    className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition duration-200 cursor-pointer border border-transparent hover:border-purple-200 min-h-[180px] w-64"
                  >
                    <div className="text-4xl mb-4 bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center text-purple-600">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm leading-snug">
                      {t(item.title)}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ) : selectedCategory === 'loans' ? (
            
            /* ՎԱՐԿԱՅԻՆ ԿԱԶՄԱԿԵՐՊՈՒԹՅՈՒՆՆԵՐ */
            <div>
              <nav className="text-sm text-gray-500 mb-8 flex items-center space-x-2">
                <span onClick={resetToMain} className="text-purple-700 font-medium cursor-pointer hover:underline">
                  {t('Գլխավոր')}
                </span>
                <span>/</span>
                <span className="text-gray-400 font-normal">{t('Վարկային կազմակերպություններ')}</span>
              </nav>

              <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-900 tracking-wide">
                {t('Վարկային կազմակերպություններ')}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {loanOrganizations.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedForm(item.id)}
                    className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition duration-200 cursor-pointer border border-transparent hover:border-purple-200 min-h-[180px]"
                  >
                    <div className="text-4xl mb-4 bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center text-purple-600">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm leading-snug">
                      {t(item.title)}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            
            /* ԳԼԽԱՎՈՐ ԷՋ */
            <div>
              <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-900">{t('Գլխավոր')}</h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => {
                      if (service.id === 'evocabank') setSelectedCategory('evocabank');
                      if (service.id === 'international') setSelectedCategory('international');
                      if (service.id === 'utility') setSelectedCategory('utility');
                      if (service.id === 'internet-tv') setSelectedCategory('internet-tv');
                      if (service.id === 'police') setSelectedCategory('police');
                      if (service.id === 'loans') setSelectedCategory('loans');
                      if (service.id === 'events') setSelectedCategory('events');
                    }}
                    className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition duration-200 cursor-pointer border border-transparent hover:border-purple-200 min-h-[180px]"
                  >
                    <div className="mb-4 w-16 h-16 flex items-center justify-center">
                      {service.iconUrl ? (
                        <img 
                          src={service.iconUrl} 
                          alt={t(service.title)} 
                          className="w-full h-full object-contain" 
                        />
                      ) : (
                        <div className="w-full h-full bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 text-4xl">
                          {service.icon}
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm leading-snug">
                      {t(service.title)}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-8 text-xs text-gray-500">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="text-lg font-bold text-gray-700">evocaBANK</div>
              <p className="text-gray-400">{t('Բանկը վերահսկվում է ՀՀ ԿԲ-ի կողմից')}</p>
              <p className="text-gray-400">Copyright © 1990-2026 Evocabank</p>
            </div>

            <div className="text-center md:text-left space-y-1">
              <p className="text-gray-600">{t('ք. Երևան, 0010, Հանրապետության 44/2')}</p>
              <p className="text-purple-700 font-medium">hello@evoca.am</p>
              <p className="text-purple-700 font-medium">+374 10 605555</p>
            </div>

            <div className="flex flex-col items-center md:items-end space-y-3">
              <div className="flex space-x-3 text-gray-400">
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 hover:text-purple-700 transition cursor-pointer"><FaFacebookF /></span>
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 hover:text-purple-700 transition cursor-pointer"><FaInstagram /></span>
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 hover:text-purple-700 transition cursor-pointer"><FaYoutube /></span>
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 hover:text-purple-700 transition cursor-pointer"><FaLinkedinIn /></span>
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 hover:text-purple-700 transition cursor-pointer"><FaPinterestP /></span>
              </div>

              <div className="flex space-x-2">
                <button className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center space-x-2 hover:opacity-90 transition">
                  <FaApple className="text-base" />
                  <div className="text-[10px] text-left leading-tight">
                    <div className="text-gray-400">Download on the</div>
                    <div className="font-semibold text-xs">App Store</div>
                  </div>
                </button>
                <button className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center space-x-2 hover:opacity-90 transition">
                  <FaGooglePlay className="text-base" />
                  <div className="text-[10px] text-left leading-tight">
                    <div className="text-gray-400">GET IT ON</div>
                    <div className="font-semibold text-xs">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Tr>
  );
}