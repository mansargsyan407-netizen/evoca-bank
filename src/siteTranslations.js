import { ru, en } from './translations.js';
import { ruHero, enHero } from './translations.hero.js';
import { ruIndividual, enIndividual } from './translations.individual.js';
import { ruPower, enPower } from './translations.evocapower.js';
import { ruGoldLoan, enGoldLoan } from './translations.GoldLoanPage.js';
import { ruBusinessLoans, enBusinessLoans } from './translations.businessLoans.js';
import { ruFees, enFees } from './translations.fees.js';
import { ruLoanDetail, enLoanDetail } from './translations.LoanDetailPage.js';
import { ruCarLoan, enCarLoan } from './translations.CarLoanPage.js';
import { ruPropertySecuredLoan, enPropertySecuredLoan } from './translations.PropertySecuredLoanPage.js';
import { ruPayments, enPayments } from './translations.PaymentsPage.js';
import { ruAbout, enAbout } from './translations.about.js';
import { ruRate, enRate } from './translations.rate.js';
import { ruReport, enReport } from './translations.report.js';
import { ruAnnouncements, enAnnouncements } from './translations.announcements.js';
import { ruStructure, enStructure } from './translations.structure.js';
import { ruShareholders, enShareholders } from './translations.shareholders.js';
import { ruManagement, enManagement } from './translations.management.js';
import { ruNews, enNews } from './translations.news.js';
import { ruBlog, enBlog } from './translations.blog.js';
import { ruCareers, enCareers } from './translations.careers.js';

export const SITE_TRANSLATIONS = {
  ru: {
    ...ru,
    ...ruHero,
    ...ruIndividual,
    ...ruPower,
    ...ruGoldLoan,
    ...ruBusinessLoans,
    ...ruFees,
    ...ruLoanDetail,
    ...ruCarLoan,
    ...ruPropertySecuredLoan,
    ...ruPayments,
    ...ruAbout,
    ...ruRate,
    ...ruReport,
    ...ruAnnouncements,
    ...ruStructure,
    ...ruShareholders,
    ...ruManagement,
    ...ruNews,
    ...ruBlog,
    ...ruCareers,
  },
  en: {
    ...en,
    ...enHero,
    ...enIndividual,
    ...enPower,
    ...enGoldLoan,
    ...enBusinessLoans,
    ...enFees,
    ...enLoanDetail,
    ...enCarLoan,
    ...enPropertySecuredLoan,
    ...enPayments,
    ...enAbout,
    ...enRate,
    ...enReport,
    ...enAnnouncements,
    ...enStructure,
    ...enShareholders,
    ...enManagement,
    ...enNews,
    ...enBlog,
    ...enCareers,
  },
};
