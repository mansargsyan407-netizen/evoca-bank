const { applicationDefault, initializeApp } = require('firebase-admin/app');
const { getDatabase } = require('firebase-admin/database');

async function seedSiteTranslations() {
  const databaseURL =
    process.env.FIREBASE_DATABASE_URL || process.env.VITE_FIREBASE_DATABASE_URL;

  if (!databaseURL) {
    throw new Error('Նշեք FIREBASE_DATABASE_URL միջավայրի փոփոխականը։');
  }

  const { SITE_TRANSLATIONS } = await import('../src/siteTranslations.js');
  const languages = Object.keys(SITE_TRANSLATIONS);
  const translationEntries = Object.fromEntries(
    languages.map((language) => [language, Object.entries(SITE_TRANSLATIONS[language])]),
  );

  if (
    languages.length !== 2 ||
    !languages.includes('ru') ||
    !languages.includes('en') ||
    languages.some((language) =>
      Object.values(SITE_TRANSLATIONS[language]).some((value) => typeof value !== 'string'),
    )
  ) {
    throw new Error('Կայքի հրապարակային թարգմանությունների տվյալները սխալ են։');
  }

  const app = initializeApp(
    {
      credential: applicationDefault(),
      databaseURL,
    },
    'site-translations-seed',
  );

  try {
    await getDatabase(app).ref('siteContent/translations').update(translationEntries);
    console.log(
      `${languages.map((language) => `${Object.keys(SITE_TRANSLATIONS[language]).length} ${language}`).join(', ')} թարգմանության բանալի է թարմացվել Firebase-ում։`,
    );
  } finally {
    await app.delete();
  }
}

seedSiteTranslations().catch((error) => {
  console.error('Չհաջողվեց կայքի թարգմանությունները տեղափոխել Firebase։', error);
  process.exitCode = 1;
});
