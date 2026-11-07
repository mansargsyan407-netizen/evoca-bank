const { applicationDefault, initializeApp } = require('firebase-admin/app');
const { getDatabase } = require('firebase-admin/database');

async function seedHomepageContent() {
  const databaseURL =
    process.env.FIREBASE_DATABASE_URL || process.env.VITE_FIREBASE_DATABASE_URL;

  if (!databaseURL) {
    throw new Error('Նշեք FIREBASE_DATABASE_URL միջավայրի փոփոխականը։');
  }

  const {
    bestFromEvocaItems,
    bankCards,
    partnersData,
    slidesData,
    testimonialsData,
  } = await import('../src/homePageData.js');

  const homepageContent = {
    bestFromEvoca: bestFromEvocaItems,
    cards: bankCards,
    partners: partnersData,
    slides: slidesData,
    testimonials: testimonialsData,
  };

  for (const [section, items] of Object.entries(homepageContent)) {
    if (
      !Array.isArray(items) ||
      items.length === 0 ||
      items.some((item) => !item || typeof item !== 'object' || Array.isArray(item))
    ) {
      throw new Error(`Գլխավոր էջի տվյալների ձևաչափը սխալ է՝ ${section}`);
    }
  }

  const app = initializeApp(
    {
      credential: applicationDefault(),
      databaseURL,
    },
    'homepage-content-seed',
  );

  try {
    await getDatabase(app).ref('siteContent/homePage').update(homepageContent);
    console.log(
      `Գլխավոր էջի տվյալները թարմացվել են Firebase-ում՝ ${Object.entries(homepageContent)
        .map(([section, items]) => `${section}: ${items.length}`)
        .join(', ')}։`,
    );
  } finally {
    await app.delete();
  }
}

seedHomepageContent().catch((error) => {
  console.error('Չհաջողվեց գլխավոր էջի տվյալները տեղափոխել Firebase։', error);
  process.exitCode = 1;
});
